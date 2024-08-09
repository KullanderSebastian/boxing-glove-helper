"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import NavigationButtons from '../components/NavigationButtons';

interface HeightQuestionProps {
    onNext: () => void;
    onPrev: () => void;
    onAnswerChange: (questionKey: string, value: string) => void;
}

const HeightQuestion: React.FC<HeightQuestionProps> = ({ onNext, onPrev, onAnswerChange }) => {
    const [height, setHeight] = useState<string>("");
    const [feet, setFeet] = useState<string>("");
    const [inches, setInches] = useState<string>("");
    const [unit, setUnit] = useState<string>("cm");

    const handleHeightChangeCm = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHeight(value);
        onAnswerChange("height", value);
    };

    const handleFeetChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFeet(value);
        if (inches !== "") {
            const cmValue = convertToCm(value, inches);
            setHeight(cmValue);
            onAnswerChange("height", cmValue);
        }
    };

    const handleInchesChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInches(value);
        if (feet !== "") {
            const cmValue = convertToCm(feet, value);
            setHeight(cmValue);
            onAnswerChange("height", cmValue);
        }
    }

    const convertToCm = (feet: string, inches: string) => {
        const totalFeet = parseInt(feet, 10) || 0;
        const totalInches = parseInt(inches, 10) || 0;
        const heightInCm = (totalFeet * 12 + totalInches) * 2.54;
        return heightInCm.toFixed(0);
    }

    const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUnit(e.target.value);
        setHeight("");
        setFeet("");
        setInches("");
        onAnswerChange("height", "");
    };

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-50 max-w-2xl mx-auto text-center">
                <h2 className="text-2xl mb-4">What's your height?</h2>
                <p>We ask this to help determine the best glove size for you.</p>
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-full flex flex-col items-start">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="unit">
                            Unit
                        </label>
                        <select className="block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" value={unit} onChange={handleUnitChange}>
                            <option value="cm">Centimeter</option>
                            <option value="in">Inches</option>
                        </select>
                    </div>

                    {unit === "cm" ? (
                        <div className="w-full flex flex-col items-start">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="height-cm">
                                Height (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="height-cm" type="number" value={height} onChange={handleHeightChangeCm}/>
                            <div className="flex justify-center w-full mt-4">
                                <NavigationButtons 
                                    onPrev={onPrev}
                                    onNext={onNext}
                                    isNextDisabled={height === ""}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-start">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="height-feet">
                                Height (feet)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight mb-2 focus:outline-none focus:bg-white" name="height-feet" type="number" value={feet} onChange={handleFeetChange}/>
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="height-inches">
                                Height (inches)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-border rounded py-3 px-4 leading-tight mb-2 focus:outline-none focus:bg-white" name="height-inches" type="number" value={inches} onChange={handleInchesChange}/>
                            <div className="flex justify-center w-full mt-4">
                                <NavigationButtons 
                                    onPrev={onPrev}
                                    onNext={onNext}
                                    isNextDisabled={feet === "" || inches === ""}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeightQuestion;