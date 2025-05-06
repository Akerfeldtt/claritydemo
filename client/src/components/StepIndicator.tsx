import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  const steps = [
    { number: 1, label: "Color Scheme" },
    { number: 2, label: "Font Size" },
    { number: 3, label: "Layout Type" },
    { number: 4, label: "Review" },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center max-w-3xl w-full">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-semibold shadow-md transition-all duration-300",
                  step.number <= currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-gray-600"
                )}
              >
                {step.number}
              </div>
              <span className="text-xs mt-2 text-gray-600">{step.label}</span>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 bg-gray-300">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{
                    width: currentStep > step.number ? "100%" : "0%",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
