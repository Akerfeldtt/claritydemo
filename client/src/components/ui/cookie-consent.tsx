import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { clarity } from 'react-microsoft-clarity';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { giveConsent } = clarity();

  useEffect(() => {
    // Show cookie banner after 2 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    giveConsent();
    setVisible(false);
  };

  const declineCookies = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <div className="text-sm">
        This site uses cookies to enhance your experience and track usage patterns.
      </div>
      <div className="flex space-x-3">
        <Button 
          onClick={acceptCookies}
          className="px-4 py-1.5 bg-primary text-white text-sm rounded hover:bg-blue-600"
        >
          Accept All
        </Button>
        <Button 
          onClick={declineCookies}
          variant="secondary"
          className="px-4 py-1.5 bg-gray-600 text-white text-sm rounded hover:bg-gray-700"
        >
          Decline
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
