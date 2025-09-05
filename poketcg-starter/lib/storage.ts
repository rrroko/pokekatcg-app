import Papa from 'papaparse';

export function exportCSV(rows:any[]){
  const csv = Papa.unparse(rows);
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'matches.csv'; a.click();
  URL.revokeObjectURL(url);
}
