import { useState } from 'react';

interface VocabEntry {
  word: string;
  vietnamese: string;
  example: string;
}

interface VocabularyTableProps {
  topic: string;
  data: VocabEntry[];
  wordLabel?: string;
}

export default function VocabularyTable({ topic, data, wordLabel = 'Từ / Cụm từ' }: VocabularyTableProps) {
  const [filter, setFilter] = useState('');

  const filtered = data.filter(
    (entry) =>
      entry.word.toLowerCase().includes(filter.toLowerCase()) ||
      entry.vietnamese.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="my-4">
      {topic && <h3 className="mb-2 text-lg font-bold">{topic}</h3>}
      <input
        type="text"
        placeholder="Tìm từ..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-3 w-full rounded border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
      />
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-2 py-2 text-left font-semibold">{wordLabel}</th>
            <th className="px-2 py-2 text-left font-semibold">Nghĩa</th>
            <th className="px-2 py-2 text-left font-semibold">Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((entry, i) => (
            <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
              <td className="px-2 py-2 font-medium text-blue-700 dark:text-blue-300">{entry.word}</td>
              <td className="px-2 py-2">{entry.vietnamese}</td>
              <td className="px-2 py-2 italic text-gray-600 dark:text-gray-400">{entry.example}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan={3} className="px-2 py-4 text-center text-gray-400">
                Không tìm thấy từ nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
