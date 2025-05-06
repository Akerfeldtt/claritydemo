import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface OptionCardProps {
  title: string;
  value: "light" | "dark";
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const OptionCard = ({ title, value, selected, onClick, children }: OptionCardProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer border-2 rounded-lg p-6 transition-all duration-200 hover:translate-y-[-2px]",
        selected ? "border-primary bg-primary/5" : "border-gray-200"
      )}
      onClick={onClick}
    >
      {children}
      <div className="flex items-center">
        <div
          className={cn(
            "h-6 w-6 rounded-full border-2 flex items-center justify-center mr-3",
            selected ? "border-primary" : "border-gray-300"
          )}
        >
          <div
            className={cn(
              "h-3 w-3 rounded-full",
              selected ? "bg-primary" : "bg-transparent"
            )}
          />
        </div>
        <span className="font-medium">{title}</span>
      </div>
    </div>
  );
};

const ColorSchemeStep = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <div className="fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Color Scheme</h2>
      <p className="text-gray-600 mb-6">Select the color scheme that works best for you.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Light Theme Option */}
        <OptionCard
          title="Light"
          value="light"
          selected={theme.colorScheme === "light"}
          onClick={() => updateTheme("colorScheme", "light")}
        >
          <div className="bg-white border border-gray-200 rounded-md p-4 mb-4 shadow-sm">
            <div className="h-6 w-24 bg-gray-800 rounded mb-2"></div>
            <div className="h-3 w-full bg-gray-600 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-600 rounded"></div>
          </div>
        </OptionCard>
        
        {/* Dark Theme Option */}
        <OptionCard
          title="Dark"
          value="dark"
          selected={theme.colorScheme === "dark"}
          onClick={() => updateTheme("colorScheme", "dark")}
        >
          <div className="bg-gray-800 border border-gray-700 rounded-md p-4 mb-4 shadow-sm">
            <div className="h-6 w-24 bg-gray-100 rounded mb-2"></div>
            <div className="h-3 w-full bg-gray-400 rounded mb-2"></div>
            <div className="h-3 w-3/4 bg-gray-400 rounded"></div>
          </div>
        </OptionCard>
      </div>
    </div>
  );
};

export default ColorSchemeStep;
