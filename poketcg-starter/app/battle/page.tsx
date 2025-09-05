'use client';
import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/lib/store';
import Board from '@/components/Board';
import Controls from '@/components/Controls';

type SimMessage = { type: 'progress'|'done', progress?: number, results?: any };

export default function BattlePage() {
  const { cpuVsCpuOnce } = useStore();
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    return () => { if (workerRef.current) workerRef.current.terminate(); };
  }, []);

  const startBatch = (n: number) => {
    if (workerRef.current) workerRef.current.terminate();
    const worker = new Worker('/workers/sim.worker.js');
    workerRef.current = worker;
    setRunning(true); setProgress(0);
    worker.onmessage = (e: MessageEvent<SimMessage>) => {
      if (e.data.type === 'progress') setProgress(e.data.progress ?? 0);
      if (e.data.type === 'done') { setRunning(false); setProgress(100); console.log('Batch results', e.data.results); }
    };
    worker.postMessage({ type:'start', trials:n });
  };

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">対戦（Starter）</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 card p-4">
          <Board />
        </div>
        <div className="card p-4 space-y-3">
          <Controls />
          <div className="space-y-2">
            <button className="btn w-full" onClick={() => cpuVsCpuOnce()}>CPU vs CPU（1戦）</button>
            <button className="btn w-full" onClick={() => startBatch(5000)} disabled={running}>
              {running ? `バッチ中… ${progress.toFixed(0)}%` : 'CPU vs CPU（5,000試行）'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
