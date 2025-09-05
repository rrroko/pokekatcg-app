'use client';
import { useStore } from '@/lib/store';
import { exportCSV } from '@/lib/storage';

export default function AnalyticsPage() {
  const { logs } = useStore();
  const onExport = () => exportCSV(logs);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">分析 / CSV</h1>
      <div className="card p-4">
        <p className="opacity-80 text-sm mb-3">現在のログ件数: {logs.length}</p>
        <button className="btn" onClick={onExport}>CSVエクスポート</button>
      </div>
      <div className="card p-4">
        <h2 className="font-semibold mb-2">（将来）対面別勝率やKPI差のグラフをここに表示</h2>
        <p className="opacity-70 text-sm">まずはCSVに吐き出し → StreamlitロガーやSpreadsheetで可視化。</p>
      </div>
    </main>
  );
}
