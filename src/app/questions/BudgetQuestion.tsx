"use client";

import React, { useState } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import BudgetRecommendation from '../components/BudgetRecommedation';

interface BudgetQuestionProps {
    onNext: () => void,
    onPrev: () => void,
    onAnswerChange: (questionKey: string, value: number[]) => void;
    experienceLevel: number;
    sessionsPerWeek: number;
};

const BudgetQuestion: React.FC<BudgetQuestionProps> = ({ onNext, onPrev, onAnswerChange, experienceLevel, sessionsPerWeek}) => {
    const [budget, setBudget] = useState("");

    const budgetRanges = [
        {'$0 - $50': [0, 50]}, 
        {'$50 - $100': [50, 100]}, 
        {'$100 - $150': [100, 150]}, 
        {'$150 - $200': [150, 200]}, 
        {'$200+': [200, Infinity]}
    ]

    const handleButtonClick = (rangeString: string, rangeArray: number[]) => {
        setBudget(rangeString);
        onAnswerChange("budget", rangeArray);
    };

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-100 max-w-2xl mx-auto text-center">
                <h2>What&apos;s your budget range?</h2>
                <BudgetRecommendation experienceLevel={experienceLevel} sessionsPerWeek={sessionsPerWeek} />
                <div className="mb-4">
                    {budgetRanges.map((range, index) => {
                        const [rangeString, rangeArray] = Object.entries(range)[0];
                        return (
                            <button
                                key={rangeString}
                                onClick={() => handleButtonClick(rangeString, rangeArray)}
                                className={`p-2 rounded mx-1 bg-gray-100 text-gray-800 ${rangeString === budget ? "bg-primary text-white" : "hover:bg-text-primary"}`}
                                >
                                    {rangeString}
                            </button>
                        );
                    })}
                </div>
                <NavigationButtons 
                    onPrev={onPrev}
                    onNext={onNext}
                    isNextDisabled={budget === ""}
                />
            </div>
        </div>
    );
};

export default BudgetQuestion;