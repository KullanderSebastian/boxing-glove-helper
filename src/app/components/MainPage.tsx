"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./LandingPage";
import BudgetQuestion from "../questions/BudgetQuestion";
import ExperienceQuestion from "../questions/ExperienceQuestion";
import FrequencyQuestion from "../questions/FrequencyQuestion";
import HeightQuestion from "../questions/HeightQuestion";
import InjuryQuestion from "../questions/InjuryQuestion";
import PurposeQuestion from "../questions/PurposeQuestion";
import WeightQuestion from "../questions/WeightQuestion";
import WristSupportQuestion from "../questions/WristSupportQuestion";
import Summary from "./Summary";

export default function Home() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");

    const [answers, setAnswers] = useState({
        experience: 0,
        frequency: "",
        height: "",
        weight: "",
        budget: "",
        purpose: "",
        wristSupport: "",
        injury: false
    });

    const handleNext = () => {
        setDirection("next");
        setCurrentQuestion((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
    };

    const handlePrev = () => {
        setDirection("prev");
        setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleAnswerChange = (questionKey: string, value: string | number | string[] | number[]) => {
        setAnswers((prev) => ({
            ...prev,
            [questionKey]: value,
        }));
    };

    const startQuestionnare = () => {
        setDirection("next");
        setCurrentQuestion(1);
    };

    const questions = [
        <LandingPage key={0} onStart={startQuestionnare} />,
        <ExperienceQuestion key={1} onNext={handleNext} onAnswerChange={handleAnswerChange} />,
        <FrequencyQuestion key={2} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} />,
        <HeightQuestion key={3} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} />,
        <WeightQuestion key={4} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} />,
        <BudgetQuestion key={5} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} experienceLevel={Number(answers["experience"])} sessionsPerWeek={Number(answers["frequency"])} />,
        <PurposeQuestion key={6} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} />,
        <WristSupportQuestion key={7} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} />,
        <InjuryQuestion key={8} onNext={handleNext} onPrev={handlePrev} onAnswerChange={handleAnswerChange} />,
        <Summary key={9} answers={answers} />
    ];

    const initialX = direction === "next" ? 100 : -100;
    const exitX = direction === "next" ? -100 : 100;

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: initialX }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: exitX }}
                    transition={{ duration: 0.5 }}
                >
                    {questions[currentQuestion]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};