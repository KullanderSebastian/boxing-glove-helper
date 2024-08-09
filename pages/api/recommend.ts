import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../lib/mongodb';
import Glove from '../../src/app/models/Glove.mjs';
import { calculateGloveSize, CalculateGloveSizeParams } from './gloveSize';

type Purpose = 'sparring' | 'bagwork';

interface Glove {
    _id: string;
    url: string;
    image_url: string;
    title: string;
    price: number;
    sizes: string[];
    purpose_scores: {
        sparring: number;
        bagwork: number;
    };
    wrist_support: string;
    suitable_for_injury: boolean;
    score?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    await connectToDatabase();

    const { height, weight, budget, purpose, wristSupport, injury, experience } = req.body;

    if (!['sparring', 'bagwork', 'general'].includes(purpose)) {
        return res.status(400).json({ error: 'Invalid purpose' });
    }

    try {
        const params: CalculateGloveSizeParams = {
            experience,
            purpose,
            weight,
        };
        const recommendedSize = calculateGloveSize(params);

        const gloves = await Glove.find({
            price: { $gte: budget[0], $lte: budget[1] },
            wrist_support: wristSupport,
            sizes: recommendedSize,
        }).lean() as unknown as Glove[];

        const scoredGloves = gloves.map((glove: Glove) => {
            let score = 0;
            if (purpose === 'general') {
                score += (glove.purpose_scores.sparring || 0) + (glove.purpose_scores.bagwork || 0);
            } else {
                score += glove.purpose_scores[purpose as Purpose] || 0;
            }
            return { ...glove, score };
        });

        scoredGloves.sort((a: Glove, b: Glove) => b.score! - a.score!);

        const topGloves = scoredGloves.slice(0, 3);

        res.status(200).json({ recommendedSize, gloves: topGloves});
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).json({ error: 'Error fetching recommendations' });
    }
}