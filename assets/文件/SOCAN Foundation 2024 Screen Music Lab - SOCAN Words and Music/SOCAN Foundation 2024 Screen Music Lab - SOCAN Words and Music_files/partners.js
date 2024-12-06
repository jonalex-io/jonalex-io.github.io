(function(){var i,q=[];
function wait(p){
  if (p||document.body){q.forEach(add);clearInterval(i)}
  else if (!i){i = setInterval(wait, 20)}
}
function add(s,p){
  if(p||document.body){(p||document.body).appendChild(s)}
  else{q.push(s);wait()}
}
function addScript(s,o){var t=document.createElement('script');t.async=1;t.src=s;add(Object.assign(t,o||{}))}
function addImg(s,d){var t=document.createElement('img');t.src=s;t.style.cssText='height:0;width:0;border:0;display:none;';t.alt=d;add(t)}
function addIframe(s,d,o,p){var t=document.createElement('iframe');t.src=s;t.style.cssText='height:0;width:0;display:none;visibility:hidden;';t.title=d;add(Object.assign(t,o||{}),p)}

window._oiqq = window._oiqq || [];
_oiqq.push(['oiq_addPageCat','Media']);
_oiqq.push(['oiq_addPageLifecycle', 'inte']);
_oiqq.push(['oiq_doTag']);

addScript('https://px.owneriq.net/stas/s/sholic.js');


addScript('https://i.simpli.fi/dpx.js?cid=66115&m=0&sifi_tuid=37822&referrer=https%3A%2F%2Fwww.socanmagazine.ca%2Fnews%2Fsocan-foundation-2024-screen-music-lab%2F');

addImg("https://sync.crwdcntrl.net/map/c=9193/tp=SHLC/tpid=a7526650-06e9-4142-97e5-085c57cdffe9","crwdcntrl");

(function (w,d) {
  _ml = w._ml || {};
  _ml.nq = w._ml.nq || [];
  _ml.nq.push(['track', '51840']);
  var s, cd, tag; cd = new Date();
  tag = addScript('https://ml314.com/taglw.aspx?' + cd.getDate() + cd.getMonth());
})(window,document);

addImg("https://sb.scorecardresearch.com/p?c1=7&c2=19376307&c3=1&cv=3.6.0&cj=1","score");

(function(){try{var s,w=window.top;w.Tynt=w.Tynt||[];
w.Tynt.push('sh!sh');addScript('https://cdn.tynt.com/afsh.js');
}catch(e){}})();


(function (w,d) {
  _ml = w._ml || {};
  _ml.nq = w._ml.nq || [];

  _ml.nq.push(['track', '51840', {
    redirect: 'https://pixel.shareaholic.com/rsync.gif?p=24&u=[PersonID]&s=a7526650-06e9-4142-97e5-085c57cdffe9'
  }]);

  var s, cd, tag; cd = new Date();
  addScript('https://ml314.com/taglw.aspx?' + cd.getDate() + cd.getMonth());
})(window,document);
})();