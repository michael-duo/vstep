import { useState } from 'react';

interface Week {
  week: string;
  focus: string;
  pages: string;
  tasks: string;
}

interface Track {
  name: string;
  weeks: Week[];
}

interface StudyTrackProps {
  tracks: Track[];
}

export default function StudyTrack({ tracks }: StudyTrackProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-4">
      <div className="flex gap-1 border-b border-gray-200 dark:border-gray-700">
        {tracks.map((track, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === i
                ? 'bg-blue-100 text-blue-800 border-b-2 border-blue-600 dark:bg-blue-900 dark:text-blue-200'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
            }`}
          >
            {track.name}
          </button>
        ))}
      </div>
      <table className="mt-3 w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-2 py-2 text-left">Tuần</th>
            <th className="px-2 py-2 text-left">Trọng tâm</th>
            <th className="px-2 py-2 text-left">Trang học</th>
            <th className="px-2 py-2 text-left">Bài tập</th>
          </tr>
        </thead>
        <tbody>
          {tracks[activeTab].weeks.map((week, i) => (
            <tr key={i} className="border-b border-gray-100 dark:border-gray-800">
              <td className="px-2 py-2 font-medium">{week.week}</td>
              <td className="px-2 py-2">{week.focus}</td>
              <td className="px-2 py-2">{week.pages}</td>
              <td className="px-2 py-2">{week.tasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
