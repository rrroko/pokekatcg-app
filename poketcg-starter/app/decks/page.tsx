'use client';
import { useState } from 'react';
import { parseDeckText } from '@/lib/deckParser';
import { useStore } from '@/lib/store';

export default function DecksPage() {
  const [text, setText] = useState('2 メガフシギバナex\n2 フシギソウ\n2 フシギダネ\n2 メガニウム\n2 ベイリーフ\n2 チコリータ\n2 オーガポンex[みどりのめん]\n1 オーガポンex[いどのめん]\n1 マシマシラ\n1 シェイミ\n1 キチキギス\n\n3 博士の研究\n3 ナンジャモ\n2 ボスの指令\n3 リーリエの決心\n2 ペパー\n1 ミツルの思いやり\n2 ネストボール\n4 ハイパーボール\n2 むしとりセット\n1 大地の器\n2 ふしぎなアメ\n1 夜のタンカ\n1 ヒーローマント\n3 活力の森\n\n9 基本草エネルギー\n2 基本悪エネルギー\n1 基本水エネルギー');
  const [parsed, setParsed] = useState<any[]>([]);
  const { setCurrentDeck } = useStore();

  const onParse = () => setParsed(parseDeckText(text));
  const onUse = () => { setCurrentDeck(parseDeckText(text)); alert('このデッキを現在の対戦デッキに設定しました。'); };

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">デッキ管理 / インポート</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <textarea className="card p-3 min-h-[420px] text-sm outline-none"
          value={text} onChange={e=>setText(e.target.value)} />
        <div className="space-y-3">
          <button className="btn" onClick={onParse}>パース</button>
          <button className="btn" onClick={onUse}>このデッキを使う</button>
          <div className="card p-3">
            <h2 className="font-semibold mb-2">プレビュー</h2>
            <ul className="text-sm list-disc pl-4">
              {parsed.map((c,i)=>(<li key={i}>{c.count}× {c.name}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
