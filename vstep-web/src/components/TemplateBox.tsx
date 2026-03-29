import type { ReactNode } from 'react';

interface TemplateBoxProps {
  title: string;
  children: ReactNode;
}

export default function TemplateBox({ title, children }: TemplateBoxProps) {
  return (
    <div className="my-4 rounded-lg border-2 border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-950">
      <div className="rounded-t-md bg-blue-200 px-4 py-2 font-semibold text-blue-900 dark:bg-blue-800 dark:text-blue-100">
        📝 {title}
      </div>
      <div className="px-4 py-3 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
