import { cn } from '~/utils';
export default function GoogleMinimalIcon({ className = '' }: { className?: string }) {
  return (
    <img 
      src="/assets/google_ai.png" 
      alt="Google" 
      className={cn('h-4 w-4', className)} 
    />
  );
}
