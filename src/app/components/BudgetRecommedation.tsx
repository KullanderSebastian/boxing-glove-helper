import React from "react";

interface BudgetRecommendationProps {
    experienceLevel: number;
    sessionsPerWeek: number;
}

const getBudgetRecommendationText = (experienceLevel: number, sessionsPerWeek: number) => {
    let message = "";

    if (experienceLevel === 0) {
        if (sessionsPerWeek <= 2) {
          message = 'As a beginner training 1-2 sessions per week, gloves within the $0-$50 range should suffice. These gloves provide adequate protection and comfort for light use without a significant financial commitment.';
        } else if (sessionsPerWeek <= 4) {
          message = 'For beginners training 3-4 times per week, we recommend gloves in the $50-$100 range. These gloves offer better durability and protection to withstand more frequent use, ensuring your hands and wrists remain well-protected as you develop your skills.';
        } else {
          message = 'If you are a beginner training 5 or more times per week, consider gloves at the higher end of the $50-$100 range or slightly above. Frequent training demands more robust and durable gloves to ensure long-lasting performance and protection.';
        }
      } else if (experienceLevel === 1) {
        if (sessionsPerWeek <= 2) {
          message = 'For intermediate boxers training 1-2 times per week, gloves in the $100-$150 range should be adequate. These gloves provide enhanced protection and comfort, suitable for moderate use without excessive wear and tear.';
        } else if (sessionsPerWeek <= 4) {
          message = 'If you train 3-4 times per week at an intermediate level, we recommend gloves in the $150-$200 range. These gloves offer superior materials and construction, ensuring durability and comfort during regular training sessions.';
        } else {
          message = 'For those training 5 or more times per week, consider investing in gloves at the higher end of the $150-$200 range. Frequent use requires high-quality gloves that can withstand extensive wear while providing excellent protection and support.';
        }
      } else if (experienceLevel === 2) {
        if (sessionsPerWeek <= 2) {
          message = 'As an expert training 1-2 times per week, gloves in the $200-$250 range should suffice. These gloves offer advanced features and premium materials, suitable for maintaining high performance during lighter training schedules.';
        } else if (sessionsPerWeek <= 4) {
          message = 'Expert boxers training 3-4 times per week should consider gloves in the $250-$300 range. These gloves provide the necessary durability and advanced protection features to support rigorous training routines.';
        } else {
          message = 'For expert boxers training 5 or more times per week, investing in gloves above $300 is recommended. These top-tier gloves are designed for maximum durability, comfort, and protection, essential for high-frequency, high-intensity training.';
        }
      }
    
      return message;
}

const BudgetRecommendation: React.FC<BudgetRecommendationProps> = ({ experienceLevel, sessionsPerWeek }) => {
    const message = getBudgetRecommendationText(experienceLevel, sessionsPerWeek);

    return (
        <p>{message}</p>
    );
};

export default BudgetRecommendation;