
import React from 'react';
import { AnalyzeIcon } from './Icons';

interface UrlInputFormProps {
  url: string;
  setUrl: (url: string) => void;
  onAnalyze: (url: string) => void;
  isLoading: boolean;
}

const UrlInputForm: React.FC<UrlInputFormProps> = ({ url, setUrl, onAnalyze, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(url);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700 shadow-lg">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full bg-slate-900 text-slate-200 placeholder-slate-500 border border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 outline-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
        >
          <AnalyzeIcon className="w-5 h-5" />
          <span>{isLoading ? 'Analyzing...' : 'Analyze Genome'}</span>
        </button>
      </form>
    </div>
  );
};

export default UrlInputForm;
