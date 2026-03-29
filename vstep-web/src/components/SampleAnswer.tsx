import { useState, type ReactNode } from 'react';

interface SampleAnswerProps {
  title: string;
  score?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function SampleAnswer({
  title,
  score,
  defaultOpen = false,
  children,
}: SampleAnswerProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <details
      open={defaultOpen || undefined}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
      className="my-4 rounded-lg border border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950"
    >
      <summary className="cursor-pointer select-none px-4 py-3 font-semibold text-green-800 dark:text-green-200">
        {isOpen ? '▼' : '▶'} {title}
        {score && (
          <span className="ml-2 rounded bg-green-200 px-2 py-0.5 text-xs dark:bg-green-800">
            {score}
          </span>
        )}
      </summary>
      <div className="sample-answer px-4 pb-4 pt-2 leading-relaxed">{children}</div>
    </details>
  );
}
