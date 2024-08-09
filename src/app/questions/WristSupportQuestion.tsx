"use client";

import React, { useState, ChangeEvent } from 'react';
import NavigationButtons from '../components/NavigationButtons';
import Image from 'next/image';

interface WristSupportQuestionProps {
    onNext: () => void;
    onPrev: () => void;
    onAnswerChange: (questionKey: string, value: string) => void;
}

const WristSupportQuestion: React.FC<WristSupportQuestionProps> = ({ onNext, onPrev, onAnswerChange }) => {
    const [wristSupport, setWristSupport] = useState<string>("");

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const value = e.currentTarget.dataset.value || "";
        setWristSupport(value);
        onAnswerChange("wristSupport", value);
    }

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-100 max-w-2xl mx-auto text-center">
                <h1>What type of wrist support do you prefer?</h1>
                <p>When choosing wrist support for your boxing gloves, you have two primary options: lace-up and straps. While both types provide excellent support, we recommend selecting gloves with straps, especially if you&apos;re training solo.</p>
                <h4>Straps:</h4>
                <ul>
                    <li><p><span className="text-white font-bold">Ease of Use:</span> Straps are significantly easier to put on and take off, making them ideal for solo training sessions.</p></li>
                    <li><p><span className="text-white font-bold">Convenience:</span> You can quickly adjust the tightness of the straps to ensure a secure and comfortable fit without needing assistance.</p>
                    Lace-Up:</li>
                </ul>
                <ul>
                    <li><p><span className="text-white font-bold">Requires Assistance:</span> Lace-up gloves provide a very snug fit but typically require another person to help you lace them up properly.</p></li>
                    <li><p><span className="text-white font-bold">Professional Use:</span> They are often preferred by professional fighters who have trainers to assist with lacing up their gloves.</p></li>
                </ul>
                <p>For most users, especially beginners and those training alone, gloves with straps offer a practical and convenient solution, ensuring you can easily gear up and get to your training without any hassle.</p>

        
                    
                    
                <div className="flex flex-row place-content-around">
                    <div>
                        <Image onClick={handleClick} className={`glowing-svg w-52 h-52 cursor-pointer ${wristSupport === "lace" ? "glowing-selected" : ""}`} src="./../../images/laceupgloves.svg" alt="Boxing gloves with lace up" data-value="lace" />
                        <p className="mt-2 text-white font-bold">Lace-Up</p>
                    </div>
                    <div>
                        <Image onClick={handleClick} className={`glowing-svg w-52 h-52 cursor-pointer ${wristSupport === "strap" ? "glowing-selected" : ""}`} src="./../../images/strapgloves.svg" alt="Boxing gloves with strap" data-value="strap" />
                        <p className="mt-2 text-white font-bold">Strap</p>
                    </div>
                </div>
                <div className="mt-8">
                    <NavigationButtons 
                        onPrev={onPrev}
                        onNext={onNext}
                        isNextDisabled={wristSupport === ""}
                    />
                </div>
            </div>
        </div>
    );
};

export default WristSupportQuestion;