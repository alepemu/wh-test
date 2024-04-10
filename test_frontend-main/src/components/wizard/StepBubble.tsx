import { FaCheck } from "react-icons/fa6";

export default function StepBubble({
  step,
  current,
}: {
  step: number;
  current: number;
}) {
  const isBeginning = step === 1;
  const isActive = step === current;
  const isDone = step < current;
  return (
    <div key={step} className="step-wrapper">
      {!isBeginning && (
        <div
          className={`step-line ${isActive || isDone ? "step-line-done" : ""}`}
        />
      )}
      {isActive && (
        <div className="step step-active">
          {step}
          <div className="step-active-arrow" />
        </div>
      )}
      {isDone && (
        <div className="step step-done">
          <FaCheck />
        </div>
      )}
      {!isActive && !isDone && <div className="step">{step}</div>}
    </div>
  );
}
