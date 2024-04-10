import "../../styles/components/steps.scss";

import StepBubble from "./StepBubble";

export default function StepsHeader({
  steps,
  current,
}: {
  steps: number;
  current: number;
}) {
  return (
    <div className="steps">
      <div className="steps-container">
        {[...Array(steps)].map((_, index) => (
          <StepBubble key={index} step={index + 1} current={current} />
        ))}
      </div>
    </div>
  );
}
