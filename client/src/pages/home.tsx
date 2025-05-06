import CookieConsent from "@/components/ui/cookie-consent";
import ThemeCustomizer from "@/components/ThemeCustomizer";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const Home = () => {
  const { theme } = useTheme();
  
  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        theme.colorScheme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gray-50",
        theme.fontSize === "small" ? "text-sm" : 
        theme.fontSize === "medium" ? "text-base" : 
        "text-lg"
      )}
    >
      <ThemeCustomizer />
      <CookieConsent />
    </div>
  );
};

export default Home;
