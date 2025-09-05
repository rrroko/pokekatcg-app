'use client';
import { create } from 'zustand';

type Log = { result:'Win'|'Loss'; opponent:string; timestamp?:string };
type State = {
  state: any;
  logs: Log[];
  setCurrentDeck: (cards:any[]) => void;
  addLog: (log:Log) => void;
  reset: () => void;
  cpuVsCpuOnce: () => void;
};

export const useStore = create<State>((set, get)=> ({
  state: { turn:1 },
  logs: [],
  setCurrentDeck: (cards)=> { console.log('Deck set', cards.length); },
  addLog: (log)=> set(s=>({ logs: [...s.logs, { ...log, timestamp:new Date().toISOString() }] })),
  reset: () => set({ state:{ turn:1 } }),
  cpuVsCpuOnce: () => {
    const win = Math.random() < 0.5;
    get().addLog({ result: win?'Win':'Loss', opponent:'CPU' });
  }
}));
