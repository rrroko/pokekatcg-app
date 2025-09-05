'use client';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">PokéTCG ツール（Starter）</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/battle" className="card p-5 hover:opacity-95">
          <h2 className="text-xl font-semibold">対戦（プレイヤー vs CPU / CPU vs CPU） →</h2>
          <p className="text-sm opacity-80 mt-2">PokéPoké風UIで盤面操作。CPUはヒューリスティック。</p>
        </Link>
        <Link href="/decks" className="card p-5 hover:opacity-95">
          <h2 className="text-xl font-semibold">デッキ管理 / インポート →</h2>
          <p className="text-sm opacity-80 mt-2">テキスト貼付 / コード入力からデッキを保存。</p>
        </Link>
        <Link href="/analytics" className="card p-5 hover:opacity-95">
          <h2 className="text-xl font-semibold">分析 / CSV →</h2>
          <p className="text-sm opacity-80 mt-2">対戦ログから勝率とKPIの関連を可視化。</p>
        </Link>
        <a href="https://github.com/" target="_blank" className="card p-5 hover:opacity-95">
          <h2 className="text-xl font-semibold">GitHub（リポ準備） →</h2>
          <p className="text-sm opacity-80 mt-2">このスターターをそのままプッシュ。</p>
        </a>
      </div>
    </main>
  );
}
