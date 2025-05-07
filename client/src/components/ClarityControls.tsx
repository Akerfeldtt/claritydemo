import { Button } from "@/components/ui/button";
// @ts-ignore
import { clarity } from "react-microsoft-clarity";

const ClarityControls = () => {
  const { giveConsent, stopClarity, startClarity, checkStatus } = clarity();

  return (
    <div className="max-w-3xl mx-auto mb-6 bg-white rounded-xl shadow-sm p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        Tracking Options
      </h3>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="default"
          size="sm"
          className="px-4 py-1.5 text-xs bg-gray-800 text-white rounded hover:bg-gray-700"
          onClick={giveConsent}
        >
          Consent to Cookies
        </Button>
        <Button
          size="sm"
          className="px-4 py-1.5 text-xs bg-red-500 text-white rounded hover:bg-red-600"
          onClick={stopClarity}
        >
          Stop Tracking
        </Button>
        <Button
          size="sm"
          className="px-4 py-1.5 text-xs bg-green-500 text-white rounded hover:bg-green-600"
          onClick={startClarity}
        >
          Resume Tracking
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="px-4 py-1.5 text-xs bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={checkStatus}
        >
          Check Tracking Status
        </Button>
      </div>
    </div>
  );
};

export default ClarityControls;
