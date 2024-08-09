"use client";

import React, { useState, ChangeEvent } from 'react';
import NavigationButtons from '../components/NavigationButtons';

interface FrequencyQuestionProps {
    onNext: () => void;
    onPrev: () => void;
    onAnswerChange: (questionKey: string, value: string) => void;
}

const FrequencyQuestion: React.FC<FrequencyQuestionProps> = ({ onNext, onPrev, onAnswerChange }) => {
    const [frequency, setFrequency] = useState<number>(0);

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFrequency(Number(value));
        onAnswerChange("frequency", value);
    };

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-2/4 w-full max-w-2xl mx-auto text-center">
                <h1>How Frequently Do You Train?</h1>
                <p>Please specify the number of training sessions you currently undertake or plan to undertake each week.</p>
                <input 
                    type="range"
                    min="0"
                    max="14"
                    step="1"
                    value={frequency}
                    onChange={handleSliderChange}
                />
                <div className="mb-4">
                    <span>{frequency} sessions per week</span>
                </div>
                <NavigationButtons 
                    onPrev={onPrev}
                    onNext={onNext}
                    isNextDisabled={frequency === 0}
                />
            </div>
        </div>
    );
};

export default FrequencyQuestion;