
import React from 'react';

const LoadingSpinner: React.FC = () => {
  const messages = [
    "Sequencing Digital DNA...",
    "Mapping Neuro-Semantic Clusters...",
    "Calculating Trust Physics Score...",
    "Simulating Genome Evolution...",
    "Calibrating ATLAS Model...",
  ];
  const [message, setMessage] = React.useState(messages[0]);

  React.useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 2500);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center my-12">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-cyan-400 rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-lg font-semibold text-cyan-300 transition-opacity duration-500">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
