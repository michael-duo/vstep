interface VocabEntry {
  word: string;
  vietnamese: string;
  example: string;
  synonyms?: string;
}

interface VocabularyTableProps {
  topic: string;
  data: VocabEntry[];
  wordLabel?: string;
}

export default function VocabularyTable({ topic, data, wordLabel = 'Từ / Cụm từ' }: VocabularyTableProps) {
  const hasSynonyms = data.some((entry) => entry.synonyms);

  return (
    <div className="my-4">
      {topic && <h3 className="mb-2 text-lg font-bold">{topic}</h3>}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-2 py-2 text-left font-semibold">{wordLabel}</th>
            <th className="px-2 py-2 text-left font-semibold">Nghĩa</th>
            <th className="px-2 py-2 text-left font-semibold">Ví dụ</th>
            {hasSynonyms && (
              <th className="px-2 py-2 text-left font-semibold">Cụm tương tự</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
              <td className="px-2 py-2 font-medium text-blue-700 dark:text-blue-300">{entry.word}</td>
              <td className="px-2 py-2">{entry.vietnamese}</td>
              <td className="px-2 py-2 italic text-gray-600 dark:text-gray-400">{entry.example}</td>
              {hasSynonyms && (
                <td className="px-2 py-2 text-gray-500 dark:text-gray-400">{entry.synonyms || ''}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
