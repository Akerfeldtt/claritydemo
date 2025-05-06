import { createContext, useContext, useState, ReactNode } from "react";

export type ColorScheme = "light" | "dark";
export type FontSize = "small" | "medium" | "large";
export type LayoutType = "grid" | "list";

export interface ThemeState {
  colorScheme: ColorScheme;
  fontSize: FontSize;
  layoutType: LayoutType;
  currentStep: number;
  totalSteps: number;
}

interface ThemeContextType {
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
  updateTheme: <K extends keyof ThemeState>(key: K, value: ThemeState[K]) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetToStep: (step: number) => void;
  isThemeApplied: boolean;
  setThemeApplied: (applied: boolean) => void;
}

const initialTheme: ThemeState = {
  colorScheme: "light",
  fontSize: "medium",
  layoutType: "list",
  currentStep: 1,
  totalSteps: 4,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeState>(initialTheme);
  const [isThemeApplied, setThemeApplied] = useState(false);

  const updateTheme = <K extends keyof ThemeState>(key: K, value: ThemeState[K]) => {
    setTheme((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (theme.currentStep < theme.totalSteps) {
      setTheme((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
    }
  };

  const prevStep = () => {
    if (theme.currentStep > 1) {
      setTheme((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }));
    }
  };

  const resetToStep = (step: number) => {
    if (step >= 1 && step <= theme.totalSteps) {
      setTheme((prev) => ({ ...prev, currentStep: step }));
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        updateTheme,
        nextStep,
        prevStep,
        resetToStep,
        isThemeApplied,
        setThemeApplied,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
