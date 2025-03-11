import { cn } from '~/utils/';

export default function Google({
  size = 25,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img 
      src="/assets/google_ai.png" 
      alt="Google" 
      width={size}
      height={size}
      className={cn(className, '')} 
    />
  );
}
