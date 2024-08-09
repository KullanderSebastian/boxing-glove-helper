"use client";

import React, { ChangeEvent, useState } from 'react';

interface ExperienceQuestionProps {
    onNext: () => void;
    onAnswerChange: (questionKey: string, value: string) => void;
};

const ExperienceQuestion: React.FC<ExperienceQuestionProps> = ({ onNext, onAnswerChange }) => {
    const [experience, setExperience] = useState(0);

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value || "";
        setExperience(Number(value));
        onAnswerChange("experience", value);
    };

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-2/4 w-full max-w-2xl mx-auto text-center">
                <h1>What's your experience level?</h1>
                <input 
                    type="range"
                    min="0"
                    max="2"
                    step="1"
                    value={experience}
                    onChange={handleSliderChange}
                    className="w-4/5 mx-auto my-5 block cursor-pointer"
                />
                <div className="flex justify-around">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                </div>
                <div>
                    <button className="bg-primary hover:bg-tertiary text-white font-bold mt-4 py-2 px-4 rounded-l rounded-r" onClick={onNext}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ExperienceQuestion;