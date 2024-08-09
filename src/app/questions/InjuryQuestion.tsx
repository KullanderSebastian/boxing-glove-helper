"use client";

import React, { useState, ChangeEvent } from 'react';
import NavigationButtons from '../components/NavigationButtons';

interface InjuryQuestionProps {
    onNext: () => void;
    onPrev: () => void;
    onAnswerChange: (questionKey: string, value: string[]) => void;
}

const InjuryQuestion: React.FC<InjuryQuestionProps> = ({ onNext, onPrev, onAnswerChange}) => {
    const [injuries, setInjuries] = useState<string[]>([]);

    const injuryList = [
        "Hand/Wrist Sprains",
        "Hand/Wrist Fractures",
        "Arthritis",
        "Tendonitis",
        "Bruised Knuckles",
        "Broken Knuckles",
        "Cuts/Abrasions",
        "Forearm Muscle Strain",
        "Forearm Tendonitis",
        "Rotator Cuff Injuries",
        "Shoulder Impingement",
        "Shoulder Dislocations",
        "Tennis Elbow",
        "Golfer's Elbow",
        "Chronic Pain",
        "Joint Instability",
        "Previous Surgeries",
        "Skin Conditions"
    ];

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        setInjuries(prev => {
            const updatedInjuries = checked ? [...prev, value] : prev.filter(injury => injury !== value);
            onAnswerChange("injury", updatedInjuries);
            return updatedInjuries;
        });
    };

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-100 max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Previous injuries or concerns?</h2>
                <p>Please select any injuries or concerns you have had in the past from the list below. If you do not have any previous injuries or concerns, you can simply leave this section blank.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    {injuryList.map((injury, index) => (
                        <label key={index} className="block">
                            <input 
                                type="checkbox"
                                value={injury}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            {injury}
                        </label>
                    ))}
                </div>
                <div className="mt-4">
                    <strong>Selected Injuries/Concerns:</strong>
                    <ul>
                        {injuries.map((injury, index) => (
                            <li key={index}>{injury}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8">
                    <NavigationButtons 
                        onPrev={onPrev}
                        onNext={onNext}
                        isNextDisabled={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default InjuryQuestion;