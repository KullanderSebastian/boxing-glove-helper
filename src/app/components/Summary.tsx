import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import GloveCarousel from "./GloveCarousel";

interface SummaryProps {
    answers: {
        experience: number;
        frequency: string;
        height: string;
        weight: string;
        budget: string;
        purpose: string;
        wristSupport: string;
        injury: boolean;
    };
}

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
    score?: number;
}

interface ApiResponse {
    recommendedSize: string;
    gloves: Glove[];
}

const Summary: React.FC<SummaryProps> = ({ answers }) => {
    const [gloves, setGloves] = useState<Glove[]>([]);
    const [recommendedSize, setRecommendedSize] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGloves = async () => {
            try {
                const response: AxiosResponse<ApiResponse> = await axios.post("/api/recommend", {
                    height: answers.height,
                    weight: answers.weight,
                    budget: answers.budget,
                    purpose: answers.purpose,
                    wristSupport: answers.wristSupport,
                    injury: false,
                    experience: answers.experience
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                setGloves(response.data.gloves);
                setRecommendedSize(response.data.recommendedSize);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching gloves: ", error);
                setError("Failed to fetch gloves");
                setLoading(false);
            }
        };

        fetchGloves();
    }, [answers.budget, answers.experience, answers.height, answers.purpose, answers.weight, answers.wristSupport]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-100 max-w-2xl mx-auto text-center">
                <h1>Summary</h1>
                <p>Based on the information you provided, we have selected the best boxing gloves for your needs. Here are our recommendations:</p>
                <GloveCarousel gloves={gloves} recommendedSize={recommendedSize} />
            </div>
        </div>
    );
};

export default Summary;