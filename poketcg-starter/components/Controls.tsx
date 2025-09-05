'use client';
import { useStore } from '@/lib/store';

export default function Controls() {
  const { addLog } = useStore();
  return (
    <div className="space-y-2">
      <button className="btn w-full" onClick={() => addLog({ result:'Win', opponent:'サーナイト' })}>Win ログ追加</button>
      <button className="btn w-full" onClick={() => addLog({ result:'Loss', opponent:'ドラパルト' })}>Loss ログ追加</button>
      <div className="text-xs opacity-70">（実装が進めばここに実際の操作が並びます）</div>
    </div>
  );
}
