import react, { useState } from "react";
import NavigationButtons from "./NavigationButtons";

interface Glove {
    _id: string;
    url: string;
    image_url: string;
    title: string;
    price: number;
    sizes: string[];
    purpose_scores: {
        sparring: number;
        bagwork: number;
    };
    wrist_support: string;
    score?: number;
}

interface GloveCarouselProps {
    gloves: Glove[];
    recommendedSize: string;
}

const GloveCarousel: React.FC<GloveCarouselProps> = ({ gloves, recommendedSize }) => {
    const [currentIndex, setCurrentIndex ] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % gloves.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + gloves.length) % gloves.length);
    };

    return (
        <div>
            {gloves.length > 0 ? (
                <div>
                    <div className="flex mt-8">
                        <div className="w-1/2">
                            <img className="w-full m-auto rounded-lg" src={gloves[currentIndex].image_url} alt={gloves[currentIndex].title} width="100" />
                        </div>
                        <div className="flex flex-col w-1/2 text-left ml-8 justify-evenly">
                            <p className="text-white">{gloves[currentIndex].title}</p>
                            <p className="text-white">Recommended size: {recommendedSize}</p>
                            <p className="text-white">Price: ${gloves[currentIndex].price}</p>
                            <a href={gloves[currentIndex].url} target="_blank" rel="noopener noreferrer">View Product</a>
                        </div>
                    </div>
                    <div className="inline-flex mt-8">
                        <button
                            className={`bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-l ${gloves.length === 1 ? 'disabled-btn' : ''}`}
                            onClick={handlePrev}
                        >
                            Prev
                        </button>
                        <div className={`bg-primary text-white font-bold py-2 px-4 ${gloves.length === 1 ? 'hidden' : ''}`}>{currentIndex + 1}/{gloves.length}</div>
                        <button
                            className={`bg-primary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-r ${gloves.length === 1 ? 'disabled-btn' : ''}`}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <p>No gloves available.</p>
            )}
        </div>
    );
}

export default GloveCarousel;