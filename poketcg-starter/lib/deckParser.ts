const normalize = (s:string) =>
  s.replace(/\s+/g,'').replace(/[［\[]/g,'[').replace(/[］\]]/g,']');

export function parseDeckText(text:string){
  const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  const out:any[] = [];
  for(const ln of lines){
    const m = ln.match(/^(\d+)\s+(.+)$/);
    if(!m) continue;
    const count = parseInt(m[1],10);
    const name = m[2];
    out.push({ count, name, norm: normalize(name) });
  }
  return out;
}
