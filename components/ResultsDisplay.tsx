import React from 'react';
import { WNGSReport, Mutation } from '../types';
import { GenomeIcon, BrainIcon, UserIcon, ConversionIcon, BrandIcon, BusinessIcon, SearchIcon, ShieldIcon, RankIcon, EvolveIcon, TargetIcon } from './Icons';

interface ResultsDisplayProps {
  data: WNGSReport;
}

const GenomeReportSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
            {icon}
            <h3 className="text-2xl font-bold text-cyan-300">{title}</h3>
        </div>
        <div className="space-y-4 text-slate-300">{children}</div>
    </div>
);

const KeyValueDisplay: React.FC<{ data: { [key: string]: string } }> = ({ data }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
        {Object.entries(data ?? {}).map(([key, value]) => (
            <div key={key} className="border-b border-slate-700 py-2">
                <p className="font-semibold text-slate-200 capitalize">{key.replace(/_/g, ' ')}</p>
                <p className="text-slate-400">{value}</p>
            </div>
        ))}
    </div>
);

const RadialProgress: React.FC<{ value: number; label: string }> = ({ value, label }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (value / 100) * circumference;
    const colorClass = value > 70 ? 'stroke-green-400' : value > 40 ? 'stroke-yellow-400' : 'stroke-red-400';

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative w-28 h-28">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="stroke-slate-700" strokeWidth="8" cx="50" cy="50" r="45" fill="transparent" />
                    <circle 
                        className={`transform -rotate-90 origin-center transition-all duration-1000 ${colorClass}`} 
                        strokeWidth="8" 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="transparent" 
                        strokeDasharray={circumference} 
                        strokeDashoffset={offset} 
                        strokeLinecap="round" 
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">{value}</span>
            </div>
            <p className="font-semibold text-slate-400">{label}</p>
        </div>
    );
};


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ data }) => {
    return (
        <div className="space-y-8">
            {/* Genome Sequence */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500/30 rounded-xl shadow-2xl p-6 text-center">
                <h2 className="text-xl font-semibold text-cyan-300 mb-3">Website Neuro-Genome Sequence</h2>
                <p className="text-lg sm:text-xl font-mono text-green-300 break-words tracking-wider bg-black/30 p-4 rounded-lg">{data.genome_sequence ?? 'No sequence generated.'}</p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    <GenomeReportSection title="Core Genome Breakdown" icon={<GenomeIcon className="w-7 h-7 text-cyan-400"/>} >
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                            {(data.core_genome ?? []).map((item) => (
                                <div key={item.gene} className="border-b border-slate-700 py-2">
                                    <p className="font-semibold text-slate-200">{item.gene}</p>
                                    <p className="text-slate-400">{item.interpretation}</p>
                                </div>
                            ))}
                        </div>
                    </GenomeReportSection>
                    <GenomeReportSection title="Neuro-Semantic Map" icon={<BrainIcon className="w-7 h-7 text-cyan-400"/>} >
                        <KeyValueDisplay data={data.neuro_semantic_map} />
                    </GenomeReportSection>
                    <GenomeReportSection title="User Behavior Genome" icon={<UserIcon className="w-7 h-7 text-cyan-400"/>} >
                        <KeyValueDisplay data={data.behavior_genome} />
                    </GenomeReportSection>
                     <GenomeReportSection title="Conversion Psychology Genome" icon={<ConversionIcon className="w-7 h-7 text-cyan-400"/>} >
                        <KeyValueDisplay data={data.conversion_psychology} />
                    </GenomeReportSection>
                    <GenomeReportSection title="Brand Personality Genome" icon={<BrandIcon className="w-7 h-7 text-cyan-400"/>} >
                        <KeyValueDisplay data={data.brand_personality} />
                    </GenomeReportSection>
                    <GenomeReportSection title="Business Signature DNA" icon={<BusinessIcon className="w-7 h-7 text-cyan-400"/>} >
                        <KeyValueDisplay data={data.business_signature} />
                    </GenomeReportSection>
                    <GenomeReportSection title="Search Ecosystem Map" icon={<SearchIcon className="w-7 h-7 text-cyan-400"/>} >
                        <KeyValueDisplay data={data.search_ecosystem_map} />
                    </GenomeReportSection>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <GenomeReportSection title="Trust Physics" icon={<ShieldIcon className="w-7 h-7 text-cyan-400"/>} >
                        <div className="flex flex-col items-center gap-4">
                            <RadialProgress value={data.trust_physics?.score ?? 0} label="Trust Physics Score"/>
                            <p className="text-center text-slate-400">{data.trust_physics?.explanation ?? 'No explanation available.'}</p>
                        </div>
                    </GenomeReportSection>
                     <GenomeReportSection title="ATLAS Ranking Probability" icon={<RankIcon className="w-7 h-7 text-cyan-400"/>} >
                        <div className="space-y-3 text-center">
                           <p className="text-4xl font-bold text-indigo-400">{data.ranking_probability?.percent ?? 0}%</p>
                           <p className="text-slate-300">Page-1 Probability</p>
                           <div className="text-sm pt-2">
                             <p><span className="font-semibold text-slate-200">Difficulty:</span> <span className="capitalize font-medium text-yellow-400">{data.ranking_probability?.difficulty ?? 'N/A'}</span></p>
                             <p><span className="font-semibold text-slate-200">Time to Rank:</span> {data.ranking_probability?.time_to_rank ?? 'N/A'}</p>
                           </div>
                        </div>
                    </GenomeReportSection>
                    <GenomeReportSection title="Conversion Probability" icon={<TargetIcon className="w-7 h-7 text-cyan-400"/>} >
                        <div className="flex justify-around text-center">
                            <div>
                                <p className="text-3xl font-bold text-green-400">{data.conversion_probability?.current ?? 0}%</p>
                                <p className="text-sm text-slate-400">Current Potential</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-300">{data.conversion_probability?.optimized ?? 0}%</p>
                                <p className="text-sm text-slate-400">Optimized Potential</p>
                            </div>
                        </div>
                    </GenomeReportSection>
                </div>
            </div>

            {/* Genome Evolution Module */}
            <div className="space-y-8">
                 <GenomeReportSection title="Genome Evolution Module" icon={<EvolveIcon className="w-7 h-7 text-cyan-400"/>} >
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-xl font-semibold text-slate-200 mb-3">Genome Mutation Plan</h4>
                            <div className="space-y-4">
                                {(data.mutation_plan ?? []).map((mutation: Mutation, index: number) => (
                                    <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                        <p className="font-bold text-lg text-cyan-400">{mutation.gene}: <span className="capitalize text-slate-300">{mutation.mutation_type} Mutation</span></p>
                                        <p><span className="font-semibold text-slate-300">Change:</span> {mutation.change_to_make}</p>
                                        <p><span className="font-semibold text-slate-300">Impact:</span> {mutation.impact}</p>
                                        <p><span className="font-semibold text-slate-300">Difficulty:</span> {mutation.difficulty}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                         <div>
                            <h4 className="text-xl font-semibold text-slate-200 mb-3">AI Evolution Simulation</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-slate-900/50 p-4 rounded-lg">
                                    <h5 className="font-bold text-center mb-2">7 Days</h5>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {(data.evolution_simulation?.['7_days'] ?? []).map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-lg">
                                    <h5 className="font-bold text-center mb-2">30 Days</h5>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {(data.evolution_simulation?.['30_days'] ?? []).map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className="bg-slate-900/50 p-4 rounded-lg">
                                    <h5 className="font-bold text-center mb-2">90 Days</h5>
                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                        {(data.evolution_simulation?.['90_days'] ?? []).map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-slate-200 mb-3">Genome Final Form</h4>
                            <p className="text-md font-mono text-green-300 bg-black/30 p-3 rounded-md tracking-wider">{data.final_genome_prediction ?? 'No prediction available.'}</p>
                        </div>
                    </div>
                 </GenomeReportSection>
            </div>
        </div>
    );
};

export default ResultsDisplay;