import { CheckCircle } from "lucide-react";

const SuccessMessage = () => {
  return (
    <div className="max-w-3xl mx-auto text-center p-6 bg-green-100 rounded-xl border border-green-200">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mb-4">
        <CheckCircle className="h-6 w-6" />
      </div>
      <h2 className="text-xl font-bold text-green-800 mb-2">Theme Applied Successfully!</h2>
      <p className="text-green-700">Your customized theme has been applied. Enjoy your personalized experience.</p>
    </div>
  );
};

export default SuccessMessage;
