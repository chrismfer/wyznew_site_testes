const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ProductDetailPage.DqWLpNKv.js","./vendor-react.Bxpvzt8v.js","./index.BAWiwDYz.js","./vendor-firebase-lite.DWLIakt4.js","./vendor-icons.bDPCiqgI.js","./productUtils.jiCuZqED.js","./shareLink.B0U4P6V5.js","./CatalogOrchestrator.G51EQ2xe.js","./ethicalHackerShield.DKrI-NGO.js","./ProductsService.BKoqGYFa.js","./downloadLinks.CSzHwRGe.js","./AppProviders.71XxsR20.js","./useRailCarousel.05rricgH.js","./useOverlayLayer.Dd7T5TcH.js","./detail.WhIN7KbC.js"])))=>i.map(i=>d[i]);
import{u as I,ak as g,j as R,K as L,V as q,F as c,M as O,W as $,B as F,T as B,_ as V}from"./index.BAWiwDYz.js";import{r as s,j as r,c as G}from"./vendor-react.Bxpvzt8v.js";import{c as U}from"./useRailCarousel.05rricgH.js";import{bq as W,br as H,bs as Y,b2 as K,bt as J}from"./productUtils.jiCuZqED.js";import"./vendor-firebase-lite.DWLIakt4.js";import"./vendor-icons.bDPCiqgI.js";const Q=`/* skull-style-rev:timeline:mw30k1k2 */
.sk-branchmap__stats {\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  gap: 10px;\r
}\r
\r
@media (min-width: 900px) {\r
  .sk-branchmap__stats { grid-template-columns: repeat(4, minmax(0, 1fr)); }\r
}\r
\r
.sk-branchmap__stat {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 3px;\r
  min-width: 0;\r
  padding: 14px 16px;\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: var(--sk-r-lg, 12px);\r
  background: var(--sk-ds-surface-2);\r
}\r
\r
html.dark .sk-branchmap__stat { background: var(--sk-ds-surface-3); }\r
\r
.sk-branchmap__stat strong {\r
  font-size: var(--sk-text-xl, 20px);\r
  font-weight: 800;\r
  line-height: 1.1;\r
  color: var(--sk-ds-accent);\r
  font-variant-numeric: tabular-nums;\r
  letter-spacing: -0.01em;\r
}\r
\r
.sk-branchmap__stat span {\r
  font-size: var(--sk-text-xs, 12px);\r
  line-height: 1.35;\r
  color: var(--sk-ds-t3);\r
}\r
\r
.sk-branchmap {\r
  position: relative;\r
  margin: 10px 0 0 10px;\r
  padding-left: 30px;\r
  border-left: 2px solid var(--sk-ds-line);\r
}\r
\r
.sk-branchmap__galho {\r
  position: relative;\r
  padding: 26px 0 10px;\r
}\r
\r
.sk-branchmap__no {\r
  position: absolute;\r
  top: 32px;\r
  left: -39px;\r
  width: 16px;\r
  height: 16px;\r
  border-radius: 50%;\r
  box-sizing: border-box;\r
  border: 2px solid var(--sk-ds-accent);\r
  background: var(--sk-ds-accent-soft);\r
  box-shadow: 0 0 0 4px var(--sk-ds-surface);\r
}\r
\r
.sk-branchmap__no::after {\r
  content: '';\r
  position: absolute;\r
  top: 50%;\r
  left: 100%;\r
  width: 23px;\r
  height: 2px;\r
  margin-top: -1px;\r
  background: var(--sk-ds-line);\r
}\r
\r
.sk-branchmap__galho--linha .sk-branchmap__no {\r
  border-color: var(--sk-ds-premium);\r
  background: var(--sk-ds-premium-soft);\r
}\r
\r
.sk-branchmap__galho--marco .sk-branchmap__no {\r
  border-style: dashed;\r
  border-color: var(--sk-ds-premium);\r
  background: transparent;\r
}\r
\r
.sk-branchmap__cabeca {\r
  max-width: 62ch;\r
}\r
\r
.sk-branchmap__titulo {\r
  margin: 2px 0 8px;\r
  font-size: var(--sk-text-xl, 20px);\r
  font-weight: 800;\r
  letter-spacing: -0.01em;\r
  color: var(--sk-ds-t1);\r
}\r
\r
.sk-branchmap__relato {\r
  margin: 0;\r
  font-size: var(--sk-text-md, 15px);\r
  line-height: 1.65;\r
  color: var(--sk-ds-t2);\r
}\r
\r
.sk-branchmap__marco {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 8px;\r
  margin: 12px 0 0;\r
  padding: 10px 14px;\r
  border-left: 2px solid var(--sk-ds-accent-line);\r
  border-radius: 0 var(--sk-r-md, 8px) var(--sk-r-md, 8px) 0;\r
  background: var(--sk-ds-surface-2);\r
  font-size: var(--sk-text-sm, 13px);\r
  line-height: 1.55;\r
  color: var(--sk-ds-t2);\r
}\r
\r
.sk-branchmap__galho--marco .sk-branchmap__marco {\r
  border-left-color: var(--sk-ds-premium-line);\r
}\r
\r
.sk-branchmap__marco svg,\r
.sk-branchmap__marco i {\r
  margin-top: 3px;\r
  flex: 0 0 auto;\r
  color: var(--sk-ds-accent);\r
}\r
\r
.sk-branchmap__planilha {\r
  margin-top: 16px;\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: var(--sk-r-lg, 12px);\r
  background: var(--sk-ds-surface-2);\r
  overflow: hidden;\r
}\r
\r
html.dark .sk-branchmap__planilha { background: var(--sk-ds-surface-3); }\r
\r
.sk-branchmap__cabecalho,\r
.sk-branchmap__linha {\r
  display: grid;\r
  grid-template-columns: 128px minmax(0, 1fr) 170px 132px;\r
  width: 100%;\r
  text-align: left;\r
}\r
\r
.sk-branchmap__cabecalho .sk-branchmap__cel {\r
  padding-top: 10px;\r
  padding-bottom: 10px;\r
  font-size: var(--sk-text-2xs, 11px);\r
  font-weight: 800;\r
  letter-spacing: 0.1em;\r
  text-transform: uppercase;\r
  color: var(--sk-ds-t3);\r
}\r
\r
.sk-branchmap__linha {\r
  margin: 0;\r
  padding: 0;\r
  border: 0;\r
  border-top: 1px solid var(--sk-ds-line);\r
  background: transparent;\r
  font: inherit;\r
  color: inherit;\r
\r
  align-items: start;\r
  min-height: var(--sk-control-h-md, 40px);\r
}\r
\r
button.sk-branchmap__linha {\r
  cursor: pointer;\r
  transition: background-color var(--sk-t-base), box-shadow var(--sk-t-base);\r
}\r
\r
button.sk-branchmap__linha:hover,\r
button.sk-branchmap__linha.mobile-focused {\r
  background: var(--sk-ds-accent-soft);\r
}\r
\r
button.sk-branchmap__linha:focus-visible {\r
  outline: 2px solid var(--sk-ds-accent);\r
  outline-offset: -2px;\r
}\r
\r
.sk-branchmap__cel {\r
  min-width: 0;\r
  padding: 14px;\r
  font-size: var(--sk-text-sm, 13px);\r
  line-height: 1.5;\r
  color: var(--sk-ds-t2);\r
}\r
\r
.sk-branchmap__cel--data {\r
  padding-top: 16px;\r
  font-variant-numeric: tabular-nums;\r
  color: var(--sk-ds-t3);\r
}\r
\r
.sk-branchmap__cel--nome strong {\r
  display: block;\r
  font-size: var(--sk-text-md, 15px);\r
  font-weight: 700;\r
  color: var(--sk-ds-t1);\r
}\r
\r
.sk-branchmap__historia {\r
  display: block;\r
  margin-top: 4px;\r
  max-width: 56ch;\r
  font-size: var(--sk-text-xs, 12px);\r
  line-height: 1.55;\r
  color: var(--sk-ds-t3);\r
}\r
\r
.sk-branchmap__cel--edicao {\r
  font-weight: 600;\r
}\r
\r
.sk-branchmap__cel--acao {\r
  display: inline-flex;\r
  align-items: center;\r
  align-self: center;\r
  justify-content: flex-end;\r
  gap: 6px;\r
  font-size: var(--sk-text-xs, 12px);\r
  font-weight: 800;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
  color: var(--sk-ds-accent);\r
  white-space: nowrap;\r
}\r
\r
.sk-branchmap__cel--build {\r
  color: var(--sk-ds-t1);\r
  font-variant-numeric: tabular-nums;\r
  text-transform: none;\r
  letter-spacing: 0;\r
  font-weight: 700;\r
}\r
\r
.sk-branchmap__linha--marco {\r
  border-top: 1px dashed var(--sk-ds-premium-line);\r
}\r
\r
.sk-branchmap__nota-marco {\r
  margin: 0;\r
  padding: 10px 14px;\r
  border-top: 1px dashed var(--sk-ds-premium-line);\r
  background: var(--sk-ds-premium-soft);\r
  font-size: var(--sk-text-xs, 12px);\r
  line-height: 1.5;\r
  color: var(--sk-ds-t3);\r
}\r
\r
.sk-branchmap__fim {\r
  position: relative;\r
  margin: 0;\r
  padding: 22px 0 4px;\r
  max-width: 62ch;\r
  font-size: var(--sk-text-sm, 13px);\r
  line-height: 1.6;\r
  color: var(--sk-ds-t3);\r
}\r
\r
.sk-branchmap__no--fim {\r
  top: 28px;\r
  left: -36px;\r
  width: 10px;\r
  height: 10px;\r
  border: 0;\r
  background: var(--sk-ds-line-strong);\r
  box-shadow: none;\r
}\r
\r
.sk-branchmap__no--fim::after { content: none; }\r
\r
@media (prefers-reduced-motion: reduce) {\r
  button.sk-branchmap__linha { transition: none; }\r
}\r
\r
@media (max-width: 899px) {\r
  .sk-branchmap {\r
    margin-left: 4px;\r
    padding-left: 20px;\r
  }\r
\r
  .sk-branchmap__no { left: -29px; }\r
  .sk-branchmap__no::after { width: 13px; }\r
  .sk-branchmap__no--fim { left: -26px; }\r
\r
  .sk-branchmap__cabecalho { display: none; }\r
\r
  .sk-branchmap__linha {\r
    display: flex;\r
    flex-direction: column;\r
    align-items: stretch;\r
    gap: 4px;\r
    padding: 14px;\r
  }\r
\r
  .sk-branchmap__cel { padding: 0; }\r
\r
  .sk-branchmap__cel--data { font-size: var(--sk-text-xs, 12px); }\r
\r
  .sk-branchmap__cel--edicao { margin-top: 4px; }\r
\r
  .sk-branchmap__cel--acao {\r
    align-self: flex-start;\r
    justify-content: flex-start;\r
  }\r
}`,X=G.lazy(()=>V(()=>import("./ProductDetailPage.DqWLpNKv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url).then(e=>({default:e.ProductDetailPage}))),Z=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],f=e=>{if(!e)return"sem data";const i=new Date(e);return`${String(i.getDate()).padStart(2,"0")} ${Z[i.getMonth()]} ${i.getFullYear()}`},rr=s.memo(({products:e,user:i,cart:v=[],onAddToCart:j,onAddBundle:N,onOpenGallery:w,systemOptimizations:y,systemFeatures:S,showNotify:z,renderCatalogProductCard:E,onNavigateStore:P})=>{I("timeline",Q);const[l,m]=s.useState(null),o=s.useMemo(()=>W(e),[e]),t=s.useMemo(()=>H(o),[o]),b=s.useMemo(()=>Y(o),[o]),_=s.useRef(null);U(_,`mapa:${e.length}:${l??""}`);const d=s.useMemo(()=>{if(!l)return null;const a=o.find(n=>n.kind==="produto"&&n.modelName===l);return a&&a.kind==="produto"?{modelName:a.modelName,products:a.modelProducts}:null},[l,o]),C=s.useCallback(()=>m(null),[]);if(d)return r.jsx(g,{className:"store-interface",children:r.jsx(R,{children:r.jsx(X,{modelName:d.modelName,products:d.products,catalogProducts:e,renderProductCard:E,globalSpecs:y,onOpenGallery:w,extraFeatures:S,onAddBundle:N,cart:v,user:i,showNotify:z,categoryName:K,onClose:C,onAddToCart:j,onOpenRelated:a=>m(a)},d.modelName)})});const M=a=>a.edicao||a.baseWindows||a.categoria||"",D=(a,n)=>r.jsxs("button",{type:"button",className:"sk-branchmap__linha no-tap-highlight","aria-label":"Abrir detalhes de "+String(a.product.nome),"data-mobile-focusable":"true","data-mobile-focused":"false",onClick:()=>m(a.modelName),children:[r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--data",children:r.jsx("time",{dateTime:a.dataInsercao?new Date(a.dataInsercao).toISOString():void 0,children:f(a.dataInsercao)})}),r.jsxs("span",{className:"sk-branchmap__cel sk-branchmap__cel--nome",children:[r.jsx("strong",{children:a.product.nome}),r.jsx("span",{className:"sk-branchmap__historia",children:n})]}),r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--edicao",children:M(a.product)}),r.jsxs("span",{className:"sk-branchmap__cel sk-branchmap__cel--acao","aria-hidden":!0,children:["Ver detalhes",r.jsx(c,{className:"fas fa-arrow-right","aria-hidden":!0})]})]},a.product.code),T=(a,n)=>r.jsxs("div",{className:"sk-branchmap__linha sk-branchmap__linha--marco",children:[r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--data",children:r.jsx("time",{dateTime:new Date(a.dataInsercao).toISOString(),children:f(a.dataInsercao)})}),r.jsxs("span",{className:"sk-branchmap__cel sk-branchmap__cel--nome",children:[r.jsx("strong",{children:a.milestone.nome}),r.jsx("span",{className:"sk-branchmap__historia",children:n})]}),r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--edicao",children:a.milestone.edicao}),r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--acao sk-branchmap__cel--build",children:a.milestone.build})]},a.milestone.id),A=a=>{const{chapter:n}=a,k=n.tipo==="linha"?"Linha permanente":n.tipo==="marco"?"Período":"Geração",x=J(a),p=n.tipo==="marco";return r.jsxs("article",{className:`sk-branchmap__galho sk-branchmap__galho--${n.tipo}`,"aria-label":String(k)+": "+String(n.titulo),children:[r.jsx("span",{className:"sk-branchmap__no","aria-hidden":!0}),r.jsxs("header",{className:"sk-branchmap__cabeca",children:[r.jsx("span",{className:`sk-eyebrow ${n.tipo==="geracao"?"sk-eyebrow--accent":"sk-eyebrow--premium"}`,children:k}),r.jsx("h3",{className:"sk-branchmap__titulo",children:n.titulo}),r.jsx("p",{className:"sk-branchmap__relato",children:n.relato}),n.marco&&r.jsxs("p",{className:"sk-branchmap__marco",children:[r.jsx(c,{className:"fas fa-flag-checkered","aria-hidden":!0}),r.jsx("span",{children:n.tipo==="marco"?n.marco:r.jsxs(r.Fragment,{children:[r.jsx("strong",{children:"Estreou aqui:"})," ",n.marco]})})]})]}),r.jsxs("div",{className:"sk-branchmap__planilha","aria-label":"Edições de "+String(n.titulo),children:[r.jsxs("div",{className:"sk-branchmap__cabecalho","aria-hidden":!0,children:[r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--data",children:"Data"}),r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--nome",children:p?"Publicação":"Produto"}),r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--edicao",children:"Edição"}),r.jsx("span",{className:"sk-branchmap__cel sk-branchmap__cel--acao",children:p?"Build":""})]}),a.entries.map((h,u)=>h.kind==="produto"?D(h,x[u]):T(h,x[u])),p&&r.jsx("p",{className:"sk-branchmap__nota-marco",children:"Distribuição aberta: estas edições não integram o catálogo."})]})]},n.id)};return r.jsxs(g,{className:"store-interface",children:[r.jsx(L,{badge:r.jsx(q,{tone:"neutral",icon:r.jsx(c,{className:"fas fa-clock-rotate-left"}),children:"Linha do tempo"}),title:"A evolução",accent:"Skull Legion",sub:"Cada publicação na ordem em que aconteceu, do mais recente ao primeiro — "+String(t.anos.length)+" anos de trabalho contínuo desde "+String(t.primeiroAno??"")+". Toda edição em catálogo desta página está à venda, pelo mesmo preço, com download e suporte."}),r.jsxs(O,{framed:!0,title:"Um percurso, não um lote de produtos",icon:r.jsx(c,{className:"fas fa-landmark"}),sub:"Uma geração resolveu um problema e a seguinte partiu dali. Esta página mostra esse percurso — com data, base e build de cada publicação.",divided:!0,stack:!0,children:[r.jsxs("div",{className:"sk-branchmap__stats",children:[r.jsxs("div",{className:"sk-branchmap__stat",children:[r.jsx("strong",{children:t.publicacoes}),r.jsx("span",{children:"publicações registradas"})]}),r.jsxs("div",{className:"sk-branchmap__stat",children:[r.jsx("strong",{children:t.capitulos}),r.jsx("span",{children:"gerações e linhas"})]}),r.jsxs("div",{className:"sk-branchmap__stat",children:[r.jsx("strong",{children:t.anos.length}),r.jsx("span",{children:"anos de publicação contínua"})]}),r.jsxs("div",{className:"sk-branchmap__stat",children:[r.jsx("strong",{children:t.emCatalogo}),r.jsx("span",{children:"edições à venda hoje"})]})]}),r.jsxs($,{tone:"info",icon:r.jsx(c,{className:"fas fa-circle-info"}),children:["Cada galho do mapa é uma",r.jsx("strong",{children:"geração"})," ","ou uma"," ",r.jsx("strong",{children:"linha"}),"da plataforma, com a sua história contada no topo. Toque numa linha da planilha para abrir os detalhes daquela edição. Os",r.jsx("strong",{children:"marcos de publicação"}),"são de um período de distribuição aberta e não integram o catálogo: estão aqui como registro de trajetória."]}),r.jsx(F,{variant:"secondary",size:"sm",icon:r.jsx(c,{className:"fas fa-arrow-left"}),onClick:P,children:"Ver o catálogo completo"})]}),b.length===0?r.jsx(B,{icon:"fa-clock-rotate-left",title:"O mapa está sendo montado",description:"As publicações aparecem aqui assim que o catálogo terminar de sincronizar."}):r.jsxs("section",{ref:_,className:"sk-branchmap","aria-label":"Mapa da evolução das publicações",children:[b.map(A),r.jsxs("p",{className:"sk-branchmap__fim",children:[r.jsx("span",{className:"sk-branchmap__no sk-branchmap__no--fim","aria-hidden":!0}),r.jsx("span",{children:"Registro em curadoria: constam as publicações com data e build verificáveis. Outras edições circularam no período de distribuição aberta e permanecem fora do catálogo."})]})]})]})});rr.displayName="LegacyArchiveTab";export{rr as LegacyArchiveTab};
