// Simple CPUvsCPU batch simulator placeholder
self.onmessage = (e) => {
  const { type, trials } = e.data || {};
  if(type !== 'start') return;
  let wins=0, losses=0;
  for(let i=1;i<=trials;i++){
    if(Math.random()<0.5) wins++; else losses++;
    if(i % Math.ceil(trials/50) === 0){
      self.postMessage({ type:'progress', progress: (i/trials)*100 });
    }
  }
  self.postMessage({ type:'done', results: { trials, wins, losses, winRate: wins/trials } });
};
