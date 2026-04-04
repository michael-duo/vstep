import { useState, useRef, useEffect, type ReactNode } from 'react';
import knowledgeData from '@data/foundation-knowledge.json';

interface KnowledgeLinkProps {
  id: string;
  children: ReactNode;
}

type KnowledgeItem = {
  type: string;
  title: string;
  meaning: string;
  example: string;
  page: string;
};

const data = knowledgeData as Record<string, KnowledgeItem>;

export default function KnowledgeLink({ id, children }: KnowledgeLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const item = data[id];

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!isOpen && dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  if (!item) {
    return <span className="font-bold">{children}</span>;
  }

  const typeColor =
    item.type === 'Cấu trúc vạn năng'
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : item.type.includes('kết nối')
        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
        : item.type.includes('Cụm từ')
          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
          : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';

  return (
    <>
      <span
        onClick={() => setIsOpen(true)}
        className="cursor-pointer font-bold underline decoration-dotted decoration-2 underline-offset-4 hover:decoration-solid"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setIsOpen(true);
        }}
      >
        {children}
      </span>

      <dialog
        ref={dialogRef}
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setIsOpen(false);
        }}
        className="m-auto w-full max-w-md rounded-xl border border-gray-200 bg-white p-0 shadow-xl backdrop:bg-black/50 dark:border-gray-700 dark:bg-gray-900"
      >
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${typeColor}`}
            >
              {item.type}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl leading-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
            {item.title}
          </h3>

          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            {item.meaning}
          </p>

          <div className="mb-4 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              {item.example}
            </p>
          </div>

          <a
            href={item.page}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Xem thêm &rarr;
          </a>
        </div>
      </dialog>
    </>
  );
}
