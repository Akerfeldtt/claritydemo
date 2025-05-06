import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

interface FontOptionProps {
  value: "small" | "medium" | "large";
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  fontSize?: string;
}

const FontOption = ({ value, title, description, selected, onClick, fontSize }: FontOptionProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer border-2 rounded-lg p-6 flex items-center transition-all duration-200 hover:translate-y-[-2px]",
        selected ? "border-primary bg-primary/5" : "border-gray-200"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "h-6 w-6 rounded-full border-2 flex items-center justify-center mr-4",
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
      <div>
        <span className={cn("font-medium", fontSize)}>{title}</span>
        <p className={cn("text-gray-500 mt-1", value === "small" ? "text-xs" : value === "large" ? "text-base" : "text-sm")}>
          {description}
        </p>
      </div>
    </div>
  );
};

const FontSizeStep = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <div className="fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Font Size</h2>
      <p className="text-gray-600 mb-6">Choose the font size that's most comfortable for you to read.</p>
      
      <div className="grid grid-cols-1 gap-4 mb-8">
        {/* Small Font Option */}
        <FontOption
          value="small"
          title="Small"
          description="Compact text for more content per screen"
          selected={theme.fontSize === "small"}
          onClick={() => updateTheme("fontSize", "small")}
          fontSize="text-sm"
        />
        
        {/* Medium Font Option */}
        <FontOption
          value="medium"
          title="Medium"
          description="Standard text size for everyday use"
          selected={theme.fontSize === "medium"}
          onClick={() => updateTheme("fontSize", "medium")}
        />
        
        {/* Large Font Option */}
        <FontOption
          value="large"
          title="Large"
          description="Enhanced readability for easier reading"
          selected={theme.fontSize === "large"}
          onClick={() => updateTheme("fontSize", "large")}
          fontSize="text-lg"
        />
      </div>
    </div>
  );
};

export default FontSizeStep;
