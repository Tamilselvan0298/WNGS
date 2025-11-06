
import React, { useState, useCallback } from 'react';
import { analyzeWebsiteGenome } from './services/geminiService';
import { WNGSReport } from './types';
import UrlInputForm from './components/UrlInputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ResultsDisplay from './components/ResultsDisplay';
import { GenomeIcon } from './components/Icons';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<WNGSReport | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async (analysisUrl: string) => {
    if (!analysisUrl) {
      setError('Please enter a website URL.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeWebsiteGenome(analysisUrl);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze the website. The AI model may be overloaded. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900/50 text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <GenomeIcon className="w-12 h-12 text-cyan-400" />
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              WNGS
            </h1>
          </div>
          <p className="text-lg text-slate-400">Website Neuro-Genome System</p>
        </header>

        <main>
          <UrlInputForm
            url={url}
            setUrl={setUrl}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
          />
          
          {error && (
            <div className="mt-6 text-center bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg">
              <p>{error}</p>
            </div>
          )}

          {isLoading && <LoadingSpinner />}

          {analysisResult && !isLoading && (
            <div className="mt-8 animate-fade-in">
              <ResultsDisplay data={analysisResult} />
            </div>
          )}
        </main>
        
        <footer className="text-center mt-12 text-sm text-slate-500">
            <p>Powered by Generative AI. Analysis is predictive and for informational purposes only.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
