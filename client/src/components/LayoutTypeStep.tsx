import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { Grid, List } from "lucide-react";

const LayoutTypeStep = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <div className="fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Layout Type</h2>
      <p className="text-gray-600 mb-6">Select how you want content to be displayed.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Grid Layout Option */}
        <div
          className={cn(
            "cursor-pointer border-2 rounded-lg p-6 transition-all duration-200 hover:translate-y-[-2px]",
            theme.layoutType === "grid" ? "border-primary bg-primary/5" : "border-gray-200"
          )}
          onClick={() => updateTheme("layoutType", "grid")}
        >
          <div className="bg-gray-100 rounded-md p-4 mb-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
              <div className="h-12 bg-white border border-gray-300 rounded"></div>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={cn(
                "h-6 w-6 rounded-full border-2 flex items-center justify-center mr-3",
                theme.layoutType === "grid" ? "border-primary" : "border-gray-300"
              )}
            >
              <div
                className={cn(
                  "h-3 w-3 rounded-full",
                  theme.layoutType === "grid" ? "bg-primary" : "bg-transparent"
                )}
              />
            </div>
            <span className="font-medium">Grid</span>
          </div>
        </div>
        
        {/* List Layout Option */}
        <div
          className={cn(
            "cursor-pointer border-2 rounded-lg p-6 transition-all duration-200 hover:translate-y-[-2px]",
            theme.layoutType === "list" ? "border-primary bg-primary/5" : "border-gray-200"
          )}
          onClick={() => updateTheme("layoutType", "list")}
        >
          <div className="bg-gray-100 rounded-md p-4 mb-4">
            <div className="space-y-2">
              <div className="h-8 bg-white border border-gray-300 rounded flex items-center px-2">
                <div className="h-3 w-3/4 bg-gray-400 rounded"></div>
              </div>
              <div className="h-8 bg-white border border-gray-300 rounded flex items-center px-2">
                <div className="h-3 w-2/3 bg-gray-400 rounded"></div>
              </div>
              <div className="h-8 bg-white border border-gray-300 rounded flex items-center px-2">
                <div className="h-3 w-3/4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={cn(
                "h-6 w-6 rounded-full border-2 flex items-center justify-center mr-3",
                theme.layoutType === "list" ? "border-primary" : "border-gray-300"
              )}
            >
              <div
                className={cn(
                  "h-3 w-3 rounded-full",
                  theme.layoutType === "list" ? "bg-primary" : "bg-transparent"
                )}
              />
            </div>
            <span className="font-medium">List</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTypeStep;
