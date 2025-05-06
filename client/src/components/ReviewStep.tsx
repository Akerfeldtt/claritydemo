import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { Grid, List, Sun, Moon } from "lucide-react";

const ReviewStep = () => {
  const { theme } = useTheme();

  return (
    <div className="fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Theme</h2>
      <p className="text-gray-600 mb-6">Here's a preview of your selected theme options.</p>
      
      {/* Theme Preview */}
      <div className="border rounded-lg overflow-hidden mb-8">
        <div className="bg-gray-100 p-4 border-b">
          <h3 className="font-medium">Theme Preview</h3>
        </div>
        <div 
          className={cn(
            "p-6", 
            theme.colorScheme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white"
          )}
        >
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="font-bold mb-2">Color Scheme</h4>
              <div className="flex items-center">
                {theme.colorScheme === "light" ? (
                  <>
                    <Sun className="h-5 w-5 mr-2 text-orange-500" />
                    <span className={cn("text-sm", theme.fontSize === "small" ? "text-xs" : theme.fontSize === "large" ? "text-base" : "text-sm")}>
                      Light
                    </span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2 text-blue-400" />
                    <span className={cn("text-sm", theme.fontSize === "small" ? "text-xs" : theme.fontSize === "large" ? "text-base" : "text-sm")}>
                      Dark
                    </span>
                  </>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Font Size</h4>
              <div className="flex items-center">
                <span className={cn(
                  theme.fontSize === "small" ? "text-xs" : 
                  theme.fontSize === "medium" ? "text-base" : 
                  "text-lg"
                )}>
                  {theme.fontSize.charAt(0).toUpperCase() + theme.fontSize.slice(1)}
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Layout Type</h4>
              <div className="flex items-center">
                {theme.layoutType === "grid" ? (
                  <>
                    <Grid className="h-5 w-5 mr-2 text-gray-600" />
                    <span className={cn("text-sm", theme.fontSize === "small" ? "text-xs" : theme.fontSize === "large" ? "text-base" : "text-sm")}>
                      Grid
                    </span>
                  </>
                ) : (
                  <>
                    <List className="h-5 w-5 mr-2 text-gray-600" />
                    <span className={cn("text-sm", theme.fontSize === "small" ? "text-xs" : theme.fontSize === "large" ? "text-base" : "text-sm")}>
                      List
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;
