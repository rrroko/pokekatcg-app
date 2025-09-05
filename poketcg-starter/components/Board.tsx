'use client';
export default function Board() {
  return (
    <div className="grid grid-rows-3 gap-2 h-[520px]">
      <div className="flex gap-2">
        <Zone title="相手：アクティブ" />
        <Zone title="相手：ベンチ" className="flex-1" />
        <Zone title="相手：トラッシュ" />
      </div>
      <div className="flex gap-2">
        <Zone title="スタジアム" />
        <Zone title="ログ" className="flex-1" />
        <Zone title="サイド" />
      </div>
      <div className="flex gap-2">
        <Zone title="自分：アクティブ" />
        <Zone title="自分：ベンチ" className="flex-1" />
        <Zone title="自分：手札" />
      </div>
    </div>
  );
}

function Zone({ title, className='' }: { title:string, className?:string }) {
  return (
    <div className={`card p-3 text-xs w-60 ${className}`}>
      <div className="opacity-70 mb-1">{title}</div>
      <div className="h-24 bg-white/5 rounded-lg" />
    </div>
  );
}
