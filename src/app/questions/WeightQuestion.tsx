"use client";

import React, { useState, ChangeEvent, useEffect } from 'react';
import NavigationButtons from '../components/NavigationButtons';

interface WeightQuestionProps {
    onNext: () => void;
    onPrev: () => void;
    onAnswerChange: (questionKey: string, value: string) => void;
}

const WeightQuestion: React.FC<WeightQuestionProps> = ({ onNext, onPrev, onAnswerChange }) => {
    const [unit, setUnit] = useState<string>("kg");
    const [weight, setWeight] = useState<string>("");
    const [pounds, setPounds] = useState<string>("");

    const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUnit(e.target.value);
        setWeight("");
        setPounds("");
        onAnswerChange("weight", "");
    }

    const handleWeightChangeKg = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setWeight(value);
        onAnswerChange("weight", value);
    }

    const handleWeightChangeLbs = (e: ChangeEvent<HTMLInputElement>) => {
        const newPounds = e.target.value;
        setPounds(newPounds);
        if (newPounds !== "") {
            const kilograms = convertPoundsToKilograms(newPounds);
            onAnswerChange("weight", kilograms);
        }
    }

    const convertPoundsToKilograms = (pounds: string) => {
        const kilograms = parseInt(pounds) * 0.45359237;

        return kilograms.toFixed(2);
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-50 max-w-2xl mx-auto text-center">
                <h2 className="text-2xl mb-4">What's your weight?</h2>
                <p>We ask this to help determine the best glove size for you.</p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-full flex flex-col items-start">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="unit">
                            Unit
                        </label>
                        <select className="block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" value={unit} onChange={handleUnitChange}>
                            <option value="kg">Kilo</option>
                            <option value="lbs">Pounds</option>
                        </select>
                    </div>

                    {unit === "kg" ? (
                        <div className="w-full flex flex-col items-start">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="weight-kg">
                                Weight (kg)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="weight-kg" type="number" value={weight} onChange={handleWeightChangeKg}/>
                            <div className="flex justify-center w-full mt-4">
                                <NavigationButtons 
                                    onPrev={onPrev}
                                    onNext={onNext}
                                    isNextDisabled={weight === ""}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-start">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="weight-pounds">
                                Weight (pounds)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="weight-pounds" type="number" value={pounds} onChange={handleWeightChangeLbs}/>
                            <div className="flex justify-center w-full mt-4">
                                <NavigationButtons 
                                    onPrev={onPrev}
                                    onNext={onNext}
                                    isNextDisabled={pounds === ""}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WeightQuestion;