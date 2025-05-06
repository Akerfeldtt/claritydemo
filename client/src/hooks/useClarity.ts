import { useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

// Define window.clarity interface
declare global {
  interface Window {
    clarity: {
      init: (projectId: string) => boolean;
      identify: (userId: string, properties: object) => boolean;
      setTag: (key: string, value: string) => boolean;
      setEvent: (eventName: string) => boolean;
      upgrade: (feature: string) => boolean;
      consent: () => boolean;
      stop: () => boolean;
      start: () => boolean;
      hasStarted: () => boolean;
    };
  }
}

export function useClarity() {
  const { toast } = useToast();

  const initClarity = useCallback((projectId: string) => {
    // Check if clarity script is available in window
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.init(projectId);
      console.log("Clarity initialized with project ID:", projectId);
    } else {
      console.error("Microsoft Clarity not available");
    }
  }, []);

  const identifyUser = useCallback((userId: string, properties: object) => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.identify(userId, properties);
      console.log("User identified:", userId, properties);
    }
  }, []);

  const setTag = useCallback((key: string, value: string) => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.setTag(key, value);
      console.log("Tag set:", key, value);
    }
  }, []);

  const setEvent = useCallback((eventName: string) => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.setEvent(eventName);
      console.log("Event set:", eventName);
    }
  }, []);

  const upgradeClarity = useCallback((feature: string) => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.upgrade(feature);
      console.log("Clarity upgraded with feature:", feature);
    }
  }, []);

  const giveConsent = useCallback(() => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.consent();
      toast({
        title: "Consent Recorded",
        description: "You have consented to cookie tracking",
      });
    }
  }, [toast]);

  const stopClarity = useCallback(() => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.stop();
      toast({
        title: "Tracking Stopped",
        description: "Clarity tracking has been stopped",
      });
    }
  }, [toast]);

  const startClarity = useCallback(() => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity.start();
      toast({
        title: "Tracking Resumed",
        description: "Clarity tracking has been resumed",
      });
    }
  }, [toast]);

  const checkStatus = useCallback(() => {
    if (typeof window !== "undefined" && window.clarity) {
      const isRunning = window.clarity.hasStarted();
      console.log("Clarity running:", isRunning);
      toast({
        title: "Clarity Status",
        description: `Clarity is ${isRunning ? "running" : "not running"}`,
      });
      return isRunning;
    }
    return false;
  }, [toast]);

  return {
    initClarity,
    identifyUser,
    setTag,
    setEvent,
    upgradeClarity,
    giveConsent,
    stopClarity,
    startClarity,
    checkStatus,
  };
}
