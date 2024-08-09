"use client";

import React, { useState } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import Image from 'next/image';

interface PurposeQuestionProps {
    onNext: () => void;
    onPrev: () => void;
    onAnswerChange: (questionKey: string, value: string) => void;
}

const PurposeQuestion: React.FC<PurposeQuestionProps> = ({ onNext, onPrev, onAnswerChange}) => {
    const [purpose, setPurpose] = useState("");

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const value = e.currentTarget.dataset.value || "";
        setPurpose(value);
        onAnswerChange("purpose", value);
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-100 max-w-2xl mx-auto text-center">
                <h2>What&apos;s the purpose of the gloves?</h2>
                <div className="flex">
                    <div>
                        <Image onClick={handleClick} className={`glowing-svg w-52 h-52 cursor-pointer ${purpose === "bagwork" ? "glowing-selected" : ""}`} src="./../../images/heavybag.svg" alt="Boxing heavybag" data-value="bagwork" />
                        <p className="mt-2 font-bold text-white">Bag/Mitts work</p>
                    </div>
                    <div>
                        <Image onClick={handleClick} className={`glowing-svg w-52 h-52 cursor-pointer ${purpose === "sparring" ? "glowing-selected" : ""}`} src="./../../images/sparringboxingMinimized.svg" alt="Person sparring" data-value="sparring" />
                        <p className="mt-2 font-bold text-white">Sparring</p>
                    </div>
                    <div>
                        <Image onClick={handleClick} className={`glowing-svg w-52 h-52 cursor-pointer ${purpose === "general" ? "glowing-selected" : ""}`} src="./../../images/bagworksparring.svg" alt="Boxing heavybag and person sparring" data-value="general" />
                        <p className="mt-2 font-bold text-white">General (Both)</p>
                    </div>
                </div>
                <div className="mt-8">
                    <NavigationButtons 
                        onPrev={onPrev}
                        onNext={onNext}
                        isNextDisabled={purpose === ""}
                    />
                </div>
            </div>
        </div>
    );
};

export default PurposeQuestion;