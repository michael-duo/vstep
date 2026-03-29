interface TestCardProps {
  number: number;
  topics: string[];
  links: { label: string; href: string }[];
}

export default function TestCard({ number, topics, links }: TestCardProps) {
  return (
    <div className="my-2 rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md dark:border-gray-700">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded bg-blue-600 px-2 py-1 text-sm font-bold text-white">
          Đề {number}
        </span>
        <span className="text-sm text-gray-500">
          {topics.join(' · ')}
        </span>
      </div>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="rounded bg-gray-100 px-2 py-1 text-xs text-blue-600 hover:bg-blue-100 dark:bg-gray-800 dark:text-blue-400"
            >
              → {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
