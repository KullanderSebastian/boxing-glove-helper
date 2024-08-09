
export interface CalculateGloveSizeParams {
    experience: string;
    purpose: string;
    weight: number;
}

export function calculateGloveSize({experience, purpose, weight}: CalculateGloveSizeParams): string {
    interface WeightSize {
        maxWeight: number;
        size: string;
    }

    interface ExperiencePurposeChart {
        [purpose: string]: WeightSize[];
    }

    interface SizeChart {
        [experience: string]: ExperiencePurposeChart
    }

    const sizeChart: SizeChart = {
        0: {
            bagwork: [
                { maxWeight: 55, size: "8 oz" },
                { maxWeight: 69, size: "10 oz" },
                { maxWeight: 85, size: "12 oz" },
                { maxWeight: Infinity, size: "14 oz" }
            ],
            sparring: [
                { maxWeight: 55, size: "12 oz" },
                { maxWeight: 69, size: "14 oz" },
                { maxWeight: 85, size: "16 oz" },
                { maxWeight: Infinity, size: "16 oz" }
            ],
            general: [
                { maxWeight: 55, size: "8 oz" },
                { maxWeight: 69, size: "10 oz" },
                { maxWeight: 85, size: "12 oz" },
                { maxWeight: Infinity, size: "14 oz" }
            ]
        },
        1: {
            bagwork: [
                { maxWeight: 55, size: "8 oz" },
                { maxWeight: 69, size: "10 oz" },
                { maxWeight: 85, size: "12 oz" },
                { maxWeight: Infinity, size: "14 oz" }
            ],
            sparring: [
                { maxWeight: 55, size: "12 oz" },
                { maxWeight: 69, size: "14 oz" },
                { maxWeight: 85, size: "16 oz" },
                { maxWeight: Infinity, size: "16 oz" }
            ],
            general: [
                { maxWeight: 55, size: "10 oz" },
                { maxWeight: 69, size: "12 oz" },
                { maxWeight: 85, size: "14 oz" },
                { maxWeight: Infinity, size: "16 oz" }
            ]
        },
        2: {
            bagwork: [
                { maxWeight: 55, size: "8 oz" },
                { maxWeight: 69, size: "10 oz" },
                { maxWeight: 85, size: "12 oz" },
                { maxWeight: Infinity, size: "14 oz" }
            ],
            sparring: [
                { maxWeight: 55, size: "12 oz" },
                { maxWeight: 69, size: "14 oz" },
                { maxWeight: 85, size: "16 oz" },
                { maxWeight: Infinity, size: "16 oz" }
            ],
            general: [
                { maxWeight: 55, size: "10 oz" },
                { maxWeight: 69, size: "12 oz" },
                { maxWeight: 85, size: "14 oz" },
                { maxWeight: Infinity, size: "16 oz" }
            ]
        }
    };

    const experienceChart = sizeChart[experience];
    
    const purposeChart = experienceChart[purpose];

    for (const range of purposeChart) {
        if (weight <= range.maxWeight) {
            return range.size;
        }
    }

    return "16oz";
}