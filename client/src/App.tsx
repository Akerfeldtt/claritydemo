import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect } from "react";
import { clarity } from 'react-microsoft-clarity';
import { ThemeProvider } from "@/context/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { initClarity } = clarity();

  useEffect(() => {
    // Initialize Microsoft Clarity on app load
    initClarity("rfk9knzyjx");
  }, [initClarity]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
