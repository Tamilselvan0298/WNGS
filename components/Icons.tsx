
import React from 'react';

// Props for all icons
type IconProps = React.SVGProps<SVGSVGElement>;

export const GenomeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 3.5c-1.2 1.2-1.2 3.1 0 4.2"/><path d="M17.5 6.5c1.2 1.2 1.2 3.1 0 4.2"/>
    <path d="M9.5 20.5c1.2-1.2 1.2-3.1 0-4.2"/><path d="M6.5 17.5c-1.2-1.2-1.2-3.1 0-4.2"/>
    <path d="m12 15-2.5-2.5"/><path d="m14 13-1-1"/><path d="M12 9 9.5 6.5"/>
    <path d="m3.5 14.5.9-.9"/><path d="m20.5 9.5-.9.9"/><path d="m6.5 3.5 1 1"/>
    <path d="m17.5 20.5-1-1"/><path d="m7 17 .9-.9"/>
  </svg>
);

export const AnalyzeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 10-2-2"/><path d="m14 14 6 6"/><circle cx="12" cy="12" r="3"/>
    <path d="M10 2H4v6"/><path d="M14 22h6v-6"/>
  </svg>
);

export const BrainIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 2.5 2.5"/>
    <path d="M9.5 8.5a2.5 2.5 0 1 1 0-5"/>
    <path d="M14.5 8.5a2.5 2.5 0 1 0 0-5"/>
  </svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

export const ConversionIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 18v-4h-4"/><path d="m16 14 3.5-3.5a2.12 2.12 0 0 0-3-3L13 11"/><path d="M4 6v4h4"/>
    <path d="m8 10-3.5 3.5a2.12 2.12 0 0 0 3 3L11 13"/>
  </svg>
);

export const BrandIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 4h-5L7 20l5-5 5 5Z"/><path d="M12 11V4"/>
  </svg>
);

export const BusinessIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 20V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M12 6v.01"/>
    <path d="M12 10v.01"/><path d="M12 14v.01"/><path d="M12 18v.01"/>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

export const RankIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M6 15H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 15h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="m15 6-3 3-3-3"/><path d="m15 18-3-3-3 3"/><path d="M6 9v6"/><path d="M18 9v6"/>
  </svg>
);

export const EvolveIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10V5h-5"/><path d="M4 14v5h5"/><path d="M14 4h6v6"/>
    <path d="M10 20H4v-6"/><path d="m20 4-8 8-4-4-4 4"/>
  </svg>
);

export const TargetIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);
