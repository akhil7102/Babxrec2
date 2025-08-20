interface VerinizerLogoProps {
  className?: string;
  size?: number;
}

export function VerinizerLogo({ className = "", size = 32 }: VerinizerLogoProps) {
  return (
    <img 
      src="/assets/verinizer-logo.svg"
      alt="Verinizer Logo"
      width={size} 
      height={size} 
      className={className}
    />
  );
}