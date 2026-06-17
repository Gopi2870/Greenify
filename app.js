window.appState = window.appState || {
  currentUser: {id:1, role:'public', name:'Demo User', wallet:180},
  reports: [
    {id:1, reporterId:1, reporterName:'Demo User', image:'', coords:{lat:17.4239,lng:78.4732}, timestamp:new Date().toISOString(), reward:10, status:'pending'},
    {id:2, reporterId:1, reporterName:'Demo User', image:'', coords:{lat:17.435,lng:78.48}, timestamp:new Date().toISOString(), reward:20, status:'cleaned', cleanedAt:new Date().toISOString()}
  ],
  dumpYards: [{lat:17.428, lng:78.479, name:'Central Dumpyard'}]
};

// small UI bindings used by index.html
document.addEventListener('DOMContentLoaded',()=>{
  // mini wallet
  const mini = document.getElementById('miniWallet'); if(mini) mini.textContent = window.appState.currentUser.wallet || 0;

  // recent activity list
  const recent = document.getElementById('recentList'); if(recent){
    recent.innerHTML = (window.appState.reports||[]).slice(0,5).map(r=>`<li><strong>${r.reporterName}</strong> — ${r.status} <div class='small muted'>${new Date(r.timestamp).toLocaleString()}</div></li>`).join('');
  }

  // snap buttons open the native file picker (demo)
  document.getElementById('snapBtn')?.addEventListener('click',()=> alert('This demo page opens a camera/file picker in the real app'));
  document.getElementById('snapBottom')?.addEventListener('click',()=> alert('Open camera picker'));
  document.getElementById('snapBottomMap')?.addEventListener('click',()=> alert('Open camera picker'));
  document.getElementById('snapBottomWallet')?.addEventListener('click',()=> alert('Open camera picker'));

  // login toggle (demo)
  const loginBtn = document.getElementById('loginBtn');
  if(loginBtn){ loginBtn.addEventListener('click',()=>{ loginBtn.classList.add('hidden'); document.getElementById('profileCircle').classList.remove('hidden'); }); }
});