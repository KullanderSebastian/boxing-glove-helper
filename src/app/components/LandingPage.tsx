import React from "react";

interface LandingPageProps {
    onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="w-2/4 w-full max-w-2xl mx-auto text-center">
                <h1>Welcome to Boxing Gloves Helper</h1>
                <p>Selecting the perfect pair of boxing gloves can be challenging given the extensive range of options available. Our goal is to assist you in finding the ideal gloves, whether you are a novice or a seasoned boxer. Click the button below to begin your journey to discovering the best gloves tailored to your needs.</p>
                <button className="bg-primary hover:bg-tertiary text-white font-bold mt-2 py-2 px-4 rounded-r rounded-l" onClick={onStart}>Get Started</button>
            </div>
        </div>
    );
}

export default LandingPage;