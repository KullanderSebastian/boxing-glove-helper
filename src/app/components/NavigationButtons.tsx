import React from "react";

interface NavigationButtonsProps {
    onPrev: () => void;
    onNext: () => void;
    isNextDisabled: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onPrev, onNext, isNextDisabled }) => {
    return (
        <div className="inline-flex">
            <button
                className="bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-l"
                onClick={onPrev}
            >
                Prev
            </button>
            <button
                className={`bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-r ${isNextDisabled ? 'disabled-btn' : ''}`}
                disabled={isNextDisabled}
                onClick={onNext}
            >
                Next
            </button>
        </div>
    );
};

export default NavigationButtons;