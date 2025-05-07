import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import StepIndicator from "./StepIndicator";
import ColorSchemeStep from "./ColorSchemeStep";
import FontSizeStep from "./FontSizeStep";
import LayoutTypeStep from "./LayoutTypeStep";
import ReviewStep from "./ReviewStep";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import SuccessMessage from "./SuccessMessage";
import { clarity } from "react-microsoft-clarity";
import { ArrowLeft, ArrowRight, Check, RefreshCw } from "lucide-react";

const ThemeCustomizer = () => {
  const {
    theme,
    nextStep,
    prevStep,
    resetToStep,
    isThemeApplied,
    setThemeApplied,
  } = useTheme();

  useEffect(() => {
    // Set Clarity tag for current step
    clarity.setTag("step", `Step ${theme.currentStep}`);

    // Identify user on step 1
  }, [theme.currentStep, clarity.setTag]);

  const applyTheme = () => {
    setThemeApplied(true);
    clarity.setEvent("themeSubmitted");

    // Show success message briefly, then reset to step 1
    setTimeout(() => {
      setThemeApplied(false);
      resetToStep(1);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Theme Customizer Wizard
        </h1>
        <p className="text-gray-600">
          Personalize your experience in 4 simple steps
        </p>
      </header>

      <StepIndicator
        currentStep={theme.currentStep}
        totalSteps={theme.totalSteps}
      />

      {!isThemeApplied ? (
        <Card className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8 transition-all duration-300">
          <CardContent className="p-6 md:p-8">
            {theme.currentStep === 1 && <ColorSchemeStep />}
            {theme.currentStep === 2 && <FontSizeStep />}
            {theme.currentStep === 3 && <LayoutTypeStep />}
            {theme.currentStep === 4 && <ReviewStep />}

            <div className="flex justify-between mt-8">
              {theme.currentStep > 1 ? (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              ) : (
                <div></div>
              )}
              <div className="flex-1"></div>
              {theme.currentStep < theme.totalSteps ? (
                <Button onClick={nextStep} className="bg-primary text-white">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={applyTheme}
                  className="bg-secondary hover:bg-green-600 text-white"
                >
                  Apply Theme <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="text-center">
          <SuccessMessage />
          <p className="mt-4 text-gray-600">Returning to step 1...</p>
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;
