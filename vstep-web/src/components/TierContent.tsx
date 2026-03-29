import { useState, type ReactNode } from 'react';

interface TierContentProps {
  title?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function TierContent({
  title = 'Nâng cao',
  defaultOpen = false,
  children,
}: TierContentProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <details
      open={defaultOpen || undefined}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
      className="tier-content my-4 rounded-lg border border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950"
    >
      <summary className="cursor-pointer select-none px-4 py-3 font-semibold text-amber-800 dark:text-amber-200">
        {isOpen ? '▼' : '▶'} {title}
      </summary>
      <div className="px-4 pb-4 pt-2">{children}</div>
    </details>
  );
}
