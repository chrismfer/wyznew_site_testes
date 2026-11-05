import{r as n,j as e,c as Z}from"./vendor-react.Bxpvzt8v.js";import{B as x,F as j,N as W,X as te,a7 as je,a8 as ga,W as w,a9 as va,aa as We,ab as ja,M as J,V as se,v as ka,t as ba,s as me,S as re,a1 as ye,$ as Ca,T as Ee,a3 as Na,u as Ue,i as ya,n as wa,E as Sa,a2 as Pe,a4 as Be,ac as Ye}from"./index.BAWiwDYz.js";import{s as _a}from"./sections.CeP2A9o-.js";import{aY as Aa,n as Pa,aW as Q,y as za,an as Ea,be as Ra,bf as qa,bg as Ma,bh as Ia,bi as Oa}from"./productUtils.jiCuZqED.js";import{U as Da}from"./CatalogOrchestrator.G51EQ2xe.js";import{u as we,C as He,a as fe,r as Ne,M as Ke,b as ke,A as ne}from"./AffiliateOrchestrator.Ca2Xct0p.js";import"./vendor-firebase-lite.DWLIakt4.js";import{s as $a,W as Ta}from"./WhatsAppInput.CnDFLXbD.js";import{c as Re,s as La,p as Fa}from"./shareLink.B0U4P6V5.js";import{M as Xa,C as Ga}from"./Modal.BYA7BmoX.js";import{CHART_MARGIN as Va,CHART_COLORS as de,CHART_AXIS_PROPS as Qe,CHART_Y_WIDTH as Wa,formatAxisCurrency as Ua,ChartTooltipCard as Ba}from"./DashboardOverview.nBx8hzak.js";import{r as oe,d as qe,a1 as Ya,a2 as sa,a3 as na,y as Ha,a4 as ia,N as Ka,w as Qa,Z as be,q as Ce,Y as Ja,G as Za,T as ze,o as Je,R as es,W as Ze,L as as,p as ss,S as ns,a5 as is,K as ea,h as os}from"./vendor-icons.bDPCiqgI.js";import{R as ts,A as rs,X as ls,Y as cs,C as ds,T as ms,a as fs}from"./vendor-charts.CyZNPgGD.js";import"./ethicalHackerShield.DKrI-NGO.js";import"./ProductsService.BKoqGYFa.js";import"./downloadLinks.CSzHwRGe.js";import"./useOverlayLayer.Dd7T5TcH.js";import"./AppProviders.71XxsR20.js";const us=`/* skull-style-rev:commissions:mw30k0rl */
.affiliate-page {
  min-height: 100%;
  padding-bottom: 24px;
  background: var(--sk-ds-page);
  color: var(--sk-ds-t1);
  font-variant-numeric: tabular-nums;
}

.affiliate-page .sk-panel {
  border-radius: var(--sk-r-lg);
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-home-ui-surface);
  box-shadow: none;
}

html.dark .affiliate-page .sk-panel {
  border-color: var(--sk-home-ui-line);
  background: var(--sk-home-ui-surface);
}

.affiliate-page .sk-surface {
  border-radius: var(--sk-r-lg);
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-ds-surface);
}

.affiliate-page .sk-stat-grid {
  margin-bottom: 0;
}

.affiliate-page .sk-stat {
  border: 1px solid var(--sk-home-ui-line) !important;
  border-radius: var(--sk-r-lg) !important;
  background: var(--sk-home-ui-surface) !important;
  box-shadow: none !important;
}

.aff-user-hero {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.aff-user-hero__main {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: clamp(18px, 2.5vw, 26px);
  border: 1px solid var(--sk-home-ui-line);
  border-radius: var(--sk-r-lg);
  background: var(--sk-home-ui-surface);
}

.aff-user-hero__avatar-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.aff-user-hero__avatar {
  position: relative;
  z-index: 1;
  width: 68px;
  height: 68px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sk-ds-surface);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@media (min-width: 640px) {
  .aff-user-hero__avatar {
    width: 76px;
    height: 76px;
    border-radius: 18px;
  }
}

.aff-user-hero__avatar:hover {
  transform: scale(1.03);
}

.aff-user-hero__check-badge {
  position: absolute;
  right: -4px;
  bottom: -4px;
  z-index: 2;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: var(--sk-ds-accent);
  border: 2px solid var(--sk-home-ui-surface);
  display: flex;
  align-items: center;
  justify-content: center;
}

.aff-user-hero__badge-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.aff-user-hero__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
  flex: 1;
}

.aff-user-hero__title {
  font-family: var(--sk-font-heading);
  font-size: clamp(1.35rem, 2.3vw, 1.85rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--sk-home-ui-text);
  margin: 0;
  letter-spacing: -0.02em;
}

.aff-user-hero__desc {
  font-size: var(--sk-text-sm);
  color: var(--sk-home-ui-muted);
  line-height: 1.55;
  max-width: 65ch;
  margin: 0;
}

.aff-benefits {
  margin: 0;
}

.aff-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
}

.aff-duo {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  align-items: stretch;
}

@media (min-width: 900px) {
  .aff-duo {
    grid-template-columns: minmax(300px, 0.95fr) minmax(0, 1.25fr);
  }
}

.aff-summary-stack {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  min-width: 0;
}

.aff-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 10px 14px;
  border: 1px solid var(--sk-home-ui-line);
  border-radius: var(--sk-r-lg);
  background: var(--sk-home-ui-surface);
}

.aff-metrics-drawer-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-right: auto;
  min-height: 34px;
  padding: 6px 12px;
  background: var(--sk-ds-surface);
  border: 1px solid var(--sk-home-ui-line);
  border-radius: var(--sk-r-sm, 6px);
  color: var(--sk-home-ui-text);
  font-family: var(--sk-font-heading);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.aff-metrics-drawer-toggle:hover {
  background: var(--sk-home-ui-raised);
  color: var(--sk-home-ui-accent);
  border-color: color-mix(in srgb, var(--sk-home-ui-accent) 45%, var(--sk-home-ui-line));
}

.aff-metrics-chevron {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 0.7rem;
  color: var(--sk-home-ui-accent);
}

.aff-metrics-chevron.is-open {
  transform: rotate(180deg);
}

.aff-metrics-drawer {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.aff-calculator-section {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.aff-projection {
  width: 100%;
}

.aff-terms {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: var(--sk-text-sm);
  line-height: 1.5;
  cursor: pointer;
}

.aff-terms input {
  margin-top: 3px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  accent-color: var(--sk-ds-accent);
}

.aff-sim-compact .aff-sim-grid {
  gap: 18px;
  padding: 14px 0;
}

.aff-sim-compact .aff-readout-compact {
  border-top: 1px solid var(--sk-home-ui-line);
  margin-top: 8px;
}

.aff-contacts > summary {
  padding: 14px 0;
  cursor: pointer;
  color: var(--sk-home-ui-text);
  font-size: var(--sk-text-sm);
  font-weight: 600;
}

.aff-contacts > summary:focus-visible {
  outline: 2px solid var(--sk-ds-accent);
  outline-offset: 4px;
}

.affiliate-page .store-guide__body:has(> .aff-sim-root),
.affiliate-page .sk-panel__body:has(> .aff-sim-root) {
  container-type: inline-size;
  container-name: commission-simulator;
}

@container commission-simulator (min-width: 850px) {
  .aff-sim-root.aff-sim-compact {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    -moz-column-gap: 28px;
         column-gap: 28px;
    align-items: start;
  }
  .aff-sim-compact > .sk-sim-hint { grid-column: 1 / -1; }
  .aff-sim-compact > .aff-sim-grid { grid-column: 1; grid-row: 2; }
  .aff-sim-compact > .aff-readout-compact {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0;
    position: sticky;
    top: 20px;
  }
}

.aff-cart-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.aff-cart-preset-btn {
  padding: 5px 11px;
  border-radius: var(--sk-r-sm, 6px);
  background: var(--sk-ds-surface);
  border: 1px solid var(--sk-home-ui-line);
  color: var(--sk-home-ui-muted);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
}

.aff-cart-preset-btn:hover {
  background: var(--sk-home-ui-raised);
  color: var(--sk-home-ui-text);
  border-color: color-mix(in srgb, var(--sk-home-ui-accent) 40%, var(--sk-home-ui-line));
}

.aff-cart-preset-btn.is-active {
  background: var(--sk-home-ui-active);
  border-color: color-mix(in srgb, var(--sk-home-ui-accent) 50%, var(--sk-home-ui-line));
  color: var(--sk-home-ui-accent);
}

.aff-faq-section {
  margin-top: 0;
}

.aff-section-title {
  margin: 0;
}

.aff-faq-list {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}

@media (min-width: 900px) {
  .aff-faq-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: start;
  }
}

.aff-faq-item {
  border-radius: var(--sk-r-lg);
  overflow: hidden;
  transition: background 0.2s ease, border-color 0.2s ease;
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-home-ui-surface);
}

.aff-faq-item.open {
  background: var(--sk-ds-surface);
  border-color: color-mix(in srgb, var(--sk-home-ui-accent) 35%, var(--sk-home-ui-line));
}

.aff-faq-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  text-align: left;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
}

.aff-faq-question {
  font-family: var(--sk-font-heading);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.15s ease;
  color: var(--sk-home-ui-text);
}

.aff-faq-trigger:hover .aff-faq-question {
  color: var(--sk-home-ui-accent);
}

.aff-faq-chevron {
  font-size: 0.75rem;
  transition: transform 0.25s ease;
  color: var(--sk-home-ui-accent);
  flex-shrink: 0;
}

.aff-faq-chevron.open {
  transform: rotate(180deg);
}

.aff-faq-body {
  overflow: hidden;
  transition: max-height 0.25s ease, opacity 0.25s ease;
  max-height: 0;
  opacity: 0;
}

.aff-faq-body.open {
  max-height: 420px;
  opacity: 1;
  border-top: 1px solid var(--sk-home-ui-line);
}

.aff-faq-answer {
  padding: 12px 16px 14px;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--sk-home-ui-muted);
  margin: 0;
}

.aff-code {
  text-align: center;
  -webkit-user-select: all;
     -moz-user-select: all;
          user-select: all;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.aff-code--ghost {
  opacity: 0.55;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.aff-right {
  text-align: right;
}

.aff-spread {
  justify-content: space-between;
}

.aff-history-item {
  align-items: flex-start;
}

.aff-sim-root {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.aff-sim-compact {
  gap: 10px;
}

.sk-sim-hint--compact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 12px;
  background: var(--sk-ds-surface);
  border: 1px solid var(--sk-home-ui-line);
  border-radius: var(--sk-r-md);
  margin-bottom: 2px;
}

.sk-sim-hint--compact .sk-sim-hint__text {
  margin: 0;
  font-size: 12px;
  color: var(--sk-home-ui-muted);
}

.sk-sim-hint--compact .sk-btn {
  padding: 4px 10px;
  height: 28px;
  font-size: 11px;
}

.aff-sim-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 16px;
}

@media (max-width: 640px) {
  .aff-sim-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 10px;
  }

  .aff-sim-grid .aff-sim-col:nth-child(1),
  .aff-sim-grid .aff-sim-col:nth-child(2) {
    grid-column: 1 / -1;
  }
}

.aff-sim-col {
  margin-bottom: 0 !important;
}

.aff-sim-col .sk-label {
  font-size: 11.5px;
  font-weight: 700;
  margin-bottom: 3px;
  color: var(--sk-home-ui-muted);
}

.aff-sim-col .sk-label__value {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--sk-home-ui-accent);
}

.aff-sim-col .sk-input {
  height: 38px;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: var(--sk-r-sm, 6px);
  background: var(--sk-ds-surface);
  border: 1px solid var(--sk-home-ui-line);
}

.aff-sim-col .sk-input:focus {
  border-color: var(--sk-home-ui-accent);
  box-shadow: none;
}

.aff-sim-col .sk-range {
  margin: 6px 0;
}

.aff-sim-col--full {
  grid-column: 1 / -1;
  margin-top: 4px;
}

.aff-sim-col--full .sk-label {
  font-size: 11.5px;
  font-weight: 700;
  margin-bottom: 3px;
  color: var(--sk-home-ui-muted);
}

.aff-sim-col--full .sk-label__value {
  font-size: 11.5px;
  font-weight: 700;
  color: var(--sk-home-ui-accent);
}

.aff-sim-col--full .sk-range {
  margin: 6px 0;
}

.aff-sim-col--full .sk-range-ticks {
  margin-top: 4px;
  gap: 6px;
}

.aff-sim-col--full .sk-range-tick {
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 700;
  height: 26px;
  border-radius: var(--sk-r-sm, 6px);
}

.aff-sim-commission-bar-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 4px;
  font-size: 11px;
  flex-wrap: wrap;
}

.aff-sim-commission-status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.aff-sim-pill-synced {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--sk-home-ui-accent);
}

.aff-sim-icon-synced {
  flex-shrink: 0;
}

.aff-sim-reset-link {
  background: none;
  border: none;
  padding: 0;
  color: var(--sk-home-ui-accent);
  font-size: 11px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.aff-sim-reset-link:hover {
  opacity: 0.8;
}

.aff-sim-commission-max-tag {
  font-size: 10.5px;
  font-weight: 700;
  color: var(--sk-home-ui-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.aff-readout-compact.sk-readout {
  padding: 16px 20px;
  margin: 6px 0 10px;
  border-radius: var(--sk-r-lg);
  background: var(--sk-ds-surface);
  border: 1px solid color-mix(in srgb, var(--sk-home-ui-accent) 30%, var(--sk-home-ui-line));
  box-shadow: none;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.aff-readout-compact .sk-readout__col {
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.aff-readout-compact .sk-metric__value:not(.sk-metric__value--sm) {
  font-size: clamp(1.25rem, 3.5vw, 2.1rem);
  line-height: 1.15;
  font-weight: 800;
  color: var(--sk-home-ui-accent);
  text-shadow: none;
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: anywhere;
  text-align: center;
}

.aff-readout-compact .sk-metric__value--sm {
  font-size: clamp(0.95rem, 2.4vw, 1.25rem);
  font-weight: 700;
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: anywhere;
  text-align: center;
}

@media (max-width: 379px) {
  .aff-sim-root .aff-sim-grid { grid-template-columns: minmax(0, 1fr); }
  .aff-sim-root .aff-sim-col { grid-column: 1 / -1; }
}

.affiliate-page .sk-btn {
  min-height: 36px;
  height: 36px;
  padding: 0 14px;
  font-size: 12.5px;
  font-weight: 700;
  border-radius: var(--sk-r-sm, 6px);
  letter-spacing: 0.01em;
}

.affiliate-page .sk-btn--primary {
  background: var(--sk-ds-accent) !important;
  color: var(--sk-ds-on-accent) !important;
  box-shadow: none !important;
}

.affiliate-page .sk-btn--primary:hover:not(:disabled) {
  background: var(--sk-ds-accent-strong) !important;
  transform: translateY(-1px);
}

.affiliate-page .sk-panel__toggle {
  min-height: 46px;
  padding: 12px 16px;
}

.affiliate-page .sk-panel__title {
  font-family: var(--sk-font-heading);
  font-size: 14px;
  font-weight: 700;
}

.affiliate-page .sk-panel__sub {
  margin: 0 16px 12px;
  font-size: 12px;
  line-height: 1.45;
}

@media (max-width: 639px) {
  .aff-user-hero__main {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 14px;
  }
  .aff-user-hero__title {
    font-size: 1.15rem;
  }
  .aff-user-hero__desc {
    font-size: 12px;
  }
  .aff-toolbar {
    justify-content: stretch;
  }
  .aff-metrics-drawer-toggle {
    width: 100%;
    margin-right: 0;
  }
  .affiliate-page .sk-panel__toggle {
    padding: 10px 14px;
  }
  .affiliate-page .sk-panel__title {
    font-size: 13px;
  }
  .affiliate-page .sk-btn {
    min-height: 34px;
    height: 34px;
    font-size: 12px;
  }
  .aff-faq-trigger {
    padding: 12px 14px;
  }
  .aff-faq-question {
    font-size: 12px;
  }
  .aff-faq-answer {
    padding: 10px 14px 12px;
    font-size: 11.5px;
    line-height: 1.5;
  }
  .sk-stat-grid .sk-metric__label {
    font-size: 10.5px;
  }
  .sk-stat-grid .sk-metric__value {
    font-size: 1.15rem;
  }
}`,ps=[1,3,6,9,12],aa=2800,hs=460;function xs(a){const r=a<.5?a*2:(1-a)*2;return r<.5?4*r**3:1-Math.pow(-2*r+2,3)/2}function gs(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}const oa=n.memo(({idPrefix:a,note:r,onEngage:c})=>{const[E,k]=n.useState("R$ 250,00"),u=we(),m=u?.commissionPct??10,[o,T]=n.useState(m),[P,g]=n.useState(1),[R,D]=n.useState(31),[t,q]=n.useState(1),[_,b]=n.useState(!1),f=n.useRef(null),M=n.useMemo(gs,[]);n.useEffect(()=>{u?.commissionPct&&T(u.commissionPct)},[u?.commissionPct]);const X=n.useCallback(()=>{f.current!==null&&(cancelAnimationFrame(f.current),f.current=null),b(!1)},[]),L=n.useCallback(h=>$=>{X(),c?.(),h(parseInt($.target.value,10))},[X,c]),U=n.useCallback(()=>{if(f.current!==null)return;c?.();const h=M?aa*.6:aa,$=M?0:hs,A={comissao:o,volume:P,ciclo:R,meses:t},i=[{atraso:0,de:A.volume,ate:100,aplicar:g},{atraso:0,de:A.comissao,ate:35,aplicar:T},{atraso:$,de:A.ciclo,ate:31,aplicar:D},{atraso:$*2,de:A.meses,ate:12,aplicar:q}],d=h+$*2,l=performance.now();b(!0);const v=V=>{const ue=V-l;for(const ee of i){const pe=Math.min(1,Math.max(0,(ue-ee.atraso)/h));ee.aplicar(Math.round(ee.de+(ee.ate-ee.de)*xs(pe)))}if(ue<d){f.current=requestAnimationFrame(v);return}f.current=null,b(!1),T(A.comissao),g(A.volume),D(A.ciclo),q(A.meses)};f.current=requestAnimationFrame(v)},[M,o,P,R,t,c]);n.useEffect(()=>()=>{f.current!==null&&cancelAnimationFrame(f.current)},[]);const S=Aa(E),N=n.useMemo(()=>u?{...u,commissionPct:o}:null,[u,o]),{porVenda:F,perMonth:I,total:G}=n.useMemo(()=>N?Pa.calculateSimulatorEarnings({basePrice:S,policy:N,dailySales:P,activeDays:R,months:t}):{porVenda:0,perMonth:0,total:0},[S,N,P,R,t]);return u?e.jsxs("div",{className:"aff-sim-root aff-sim-compact",children:[e.jsxs("div",{className:"sk-sim-hint sk-sim-hint--compact",children:[e.jsxs("p",{className:"sk-sim-hint__text",children:[e.jsx("strong",{children:"Ajuste as barras"})," para simular seu potencial de lucro:"]}),e.jsx(x,{variant:"ghost",size:"sm",onClick:U,disabled:_,icon:e.jsx(j,{className:"fas fa-arrows-left-right"}),children:_?"Mostrando…":"Ver as barras em ação"})]}),e.jsxs("div",{className:"aff-sim-grid","data-demo":_?"rodando":void 0,children:[e.jsxs(W,{label:"1. Montante do carrinho no checkout",value:Q(S),htmlFor:`${a}-valor`,className:"aff-sim-col--full",children:[e.jsx(te,{id:`${a}-valor`,type:"text",inputMode:"decimal",value:E,onChange:h=>{c?.(),k(h.target.value)},placeholder:"R$ 700,00","aria-label":"Valor do carrinho após promoções"}),e.jsx("div",{className:"aff-cart-presets",children:[150,350,700,1500].map(h=>e.jsx("button",{type:"button",className:`aff-cart-preset-btn${S===h?" is-active":""}`,onClick:()=>{X(),c?.(),k(Q(h))},children:Q(h)},h))})]}),e.jsxs(W,{label:"2. Percentual de comissão",value:`${o}%`,htmlFor:`${a}-comissao`,className:"aff-sim-col--full",children:[e.jsx(je,{id:`${a}-comissao`,min:1,max:50,value:o,onChange:L(T),"aria-label":"Percentual de comissão"}),e.jsxs("div",{className:"aff-sim-commission-bar-info",children:[e.jsx("div",{className:"aff-sim-commission-status",children:o===u.commissionPct?e.jsxs("span",{className:"aff-sim-pill-synced",children:[e.jsx(oe,{size:12,className:"aff-sim-icon-synced"}),"Comissão oficial da loja ("+u.commissionPct+"%)"]}):e.jsx("button",{type:"button",className:"aff-sim-reset-link",onClick:()=>{X(),c?.(),T(u.commissionPct)},children:"Restaurar comissão oficial ("+u.commissionPct+"%)"})}),e.jsx("span",{className:"aff-sim-commission-max-tag",children:"Simule até 50%"})]})]}),e.jsx(W,{label:"3. Vendas por dia",value:`${P} un`,htmlFor:`${a}-volume`,className:"aff-sim-col",children:e.jsx(je,{id:`${a}-volume`,min:1,max:100,value:P,onChange:L(g),"aria-label":"Vendas por dia"})}),e.jsx(W,{label:"4. Dias ativos no mês",value:`${R} ${R===1?"dia":"dias"}`,htmlFor:`${a}-ciclo`,className:"aff-sim-col",children:e.jsx(je,{id:`${a}-ciclo`,min:1,max:31,value:R,onChange:L(D),"aria-label":"Dias ativos no mês"})}),e.jsx("div",{className:"aff-sim-col--full",children:e.jsxs(W,{label:"5. Projeção em meses",value:`${t} ${t===1?"mês":"meses"}`,htmlFor:`${a}-meses`,children:[e.jsx(je,{id:`${a}-meses`,accent:"premium",min:1,max:12,value:t,onChange:L(q),"aria-label":"Projeção em meses"}),e.jsx(ga,{label:"Atalhos de projeção",values:ps,active:t,onSelect:h=>{X(),c?.(),q(h)},format:h=>h===12?"1 ano":`${h}m`})]})}),r&&e.jsx("div",{className:"aff-sim-col--full",children:e.jsx(w,{icon:e.jsx(j,{className:"fas fa-circle-info"}),children:r})})]}),e.jsx(va,{className:`aff-readout-compact ${_?"is-simulando":""}`,primary:e.jsx(We,{icon:e.jsx(j,{className:"fas fa-sack-dollar"}),label:t>1?"Estimativa em "+String(t)+" meses":"Estimativa mensal",value:Q(G),note:`${Q(F)} por venda (${o}%)`,children:t>1&&e.jsx(ja,{unit:"/ mês",children:Q(I)})}),secondary:e.jsx(We,{icon:e.jsx(j,{className:"fas fa-crown"}),label:"Mantendo esse ritmo por um ano",value:Q(I*12),unit:"/ ano",tone:"premium",size:"sm",note:"Projeção ilustrativa, sem garantia de renda."})})]}):e.jsx("p",{role:"status",children:"Política de afiliados indisponível. Tente novamente em instantes."})});oa.displayName="AffiliateEarningsSimulator";const vs=({user:a,products:r,cart:c,showNotify:E})=>{const[k,u]=n.useState(null),[m,o]=n.useState(null),[T,P]=n.useState(!0),[g,R]=n.useState(!1),[D,t]=n.useState(""),[q,_]=n.useState(null),b=n.useRef(!0),f=n.useRef(0),M=n.useRef(!1),X=n.useRef(null),L=n.useMemo(()=>Ne(r.map(i=>i.code),r).available,[r]),U=`${a.uid||""}:${a.email}:${a.codigoAfiliado}`,S=n.useRef(a);S.current=a;const N=n.useCallback(async()=>{const i=++f.current;P(!0),t("");try{const d=await fe.list(S.current);if(!b.current||i!==f.current)return;u(d),o(null),_(null)}catch(d){b.current&&i===f.current&&t(d instanceof Error?d.message:"Não foi possível carregar suas seleções.")}finally{b.current&&i===f.current&&P(!1)}},[U]);n.useEffect(()=>(b.current=!0,N(),()=>{b.current=!1,++f.current}),[N,U]),n.useEffect(()=>{m&&X.current?.querySelector("input")?.focus()},[m?.id]);const F=async(i,d)=>{if(!k||M.current)return;M.current=!0,R(!0),t("");const l=f.current;try{const v=await fe.save(a,k.revision,i);if(!b.current||l!==f.current)return;u(v),o(null),_(null),E(d,"sucesso")}catch(v){b.current&&l===f.current&&t(v instanceof Error?v.message:"Não foi possível salvar. Seu rascunho foi preservado.")}finally{b.current&&l===f.current&&(M.current=!1,R(!1))}},I=i=>{t(""),_(null),o(i?{...i,codes:[...i.codes]}:{id:crypto.randomUUID(),title:"",description:"",codes:[],updatedAt:new Date().toISOString()})},G=i=>{o(d=>{if(!d)return d;const l=d.codes.includes(i);return!l&&d.codes.length>=ke?d:{...d,codes:l?d.codes.filter(v=>v!==i):[...d.codes,i]}})},h=()=>{if(!m)return;const i=Ne(c.map(d=>d.code),r).available.map(d=>d.code);o({...m,codes:[...new Set([...m.codes,...i])].slice(0,ke)})},$=async i=>{try{const d=await Re(La(i.id));b.current&&E(d?"Link da seleção copiado.":"Não foi possível copiar o link.",d?"sucesso":"erro")}catch{b.current&&E("Não foi possível copiar o link.","erro")}},A=m?Ne(m.codes,r):null;return e.jsxs(J,{title:"Suas seleções",icon:e.jsx(na,{size:16}),sub:"Reúna os produtos que você indica e compartilhe uma seleção com seu código. Os preços e benefícios acompanham o catálogo atual.",divided:!0,children:[D&&e.jsxs("div",{className:"sk-stack-sm",role:"alert",children:[e.jsx(w,{tone:"danger",children:D}),e.jsx(x,{variant:"secondary",size:"sm",disabled:g||T,onClick:()=>void N(),children:"Recarregar seleções"})]}),T?e.jsx(ye,{label:"Carregando suas seleções…"}):k&&e.jsxs("div",{className:"sk-stack",children:[e.jsxs("div",{className:"sk-row",children:[e.jsxs("span",{className:"sk-text-sm",children:[k.selections.length," ","de"," ",Ke," ","seleções"]}),e.jsx(x,{size:"sm",variant:"secondary",icon:e.jsx(Ha,{size:14}),disabled:g||k.selections.length>=Ke,onClick:()=>I(),children:"Criar seleção"})]}),!k.selections.length&&!m&&e.jsx(Ee,{title:"Monte sua primeira seleção",description:"Escolha sistemas para um perfil de uso ou importe os produtos do seu carrinho."}),k.selections.map(i=>e.jsxs("article",{className:"sk-surface sk-surface--pad sk-stack-sm",children:[e.jsx("h3",{className:"sk-text-lg",children:i.title}),i.description&&e.jsx("p",{className:"sk-text-sm",children:i.description}),e.jsxs("p",{className:"sk-text-sm",children:[i.codes.length," ",i.codes.length===1?"produto":"produtos"]}),e.jsxs("div",{className:"sk-row",children:[e.jsx(x,{size:"sm",variant:"secondary",disabled:g,"aria-label":"Editar "+String(i.title),onClick:()=>I(i),children:"Editar"}),e.jsx(x,{size:"sm",variant:"ghost",icon:e.jsx(ia,{size:14}),disabled:g,"aria-label":"Copiar link de "+String(i.title),onClick:()=>void $(i),children:"Copiar link"}),e.jsx(x,{size:"sm",variant:"danger",icon:e.jsx(Ka,{size:14}),disabled:g,"aria-label":"Excluir "+String(i.title),onClick:()=>_(i.id),children:"Excluir"})]}),q===i.id&&e.jsxs("div",{className:"sk-stack-sm",children:[e.jsx(w,{tone:"warn",children:"Excluir esta seleção desativa o link compartilhado. Seu histórico de comissões permanece salvo."}),e.jsxs("div",{className:"sk-row",children:[e.jsx(x,{size:"sm",variant:"danger",disabled:g,onClick:()=>void F(k.selections.filter(d=>d.id!==i.id),"Seleção excluída."),children:"Confirmar exclusão"}),e.jsx(x,{size:"sm",variant:"ghost",disabled:g,onClick:()=>_(null),children:"Manter seleção"})]})]})]},i.id)),m&&e.jsxs("form",{ref:X,className:"sk-surface sk-surface--pad sk-stack",onSubmit:i=>{i.preventDefault();const d=m.title.trim();if(!d||!m.codes.length){t("Informe um título e escolha pelo menos um produto.");return}const l={...m,title:d,description:m.description.trim(),updatedAt:new Date().toISOString()},v=k.selections.some(V=>V.id===l.id);F(v?k.selections.map(V=>V.id===l.id?l:V):[...k.selections,l],"Seleção salva. Seu link já pode ser compartilhado.")},children:[e.jsx(W,{label:"Título da seleção",htmlFor:"creator-selection-title",hint:`${m.title.length}/60 caracteres`,children:e.jsx(te,{id:"creator-selection-title",value:m.title,maxLength:60,disabled:g,required:!0,onChange:i=>o({...m,title:i.target.value}),placeholder:"Ex.: Sistemas para edição de vídeo"})}),e.jsx(W,{label:"Descrição da seleção",htmlFor:"creator-selection-description",hint:"Opcional. Explique para quem você indica estes produtos.",children:e.jsx(Na,{id:"creator-selection-description",value:m.description,maxLength:240,disabled:g,rows:3,onChange:i=>o({...m,description:i.target.value})})}),e.jsxs("div",{className:"sk-row",children:[e.jsxs("strong",{children:[m.codes.length,"/",ke," ","produtos"]}),e.jsx(x,{size:"sm",variant:"secondary",disabled:g||!c.length,onClick:h,children:"Importar carrinho"})]}),e.jsxs("fieldset",{disabled:g,className:"sk-stack-sm",children:[e.jsx("legend",{className:"sk-label",children:"Produtos disponíveis"}),L.map(i=>e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"checkbox",checked:m.codes.includes(i.code),disabled:!m.codes.includes(i.code)&&m.codes.length>=ke,onChange:()=>G(i.code)}),e.jsxs("span",{children:[i.nome," ",e.jsxs("small",{className:"sk-fg-muted",children:["(",i.code,")"]})]})]},i.code))]}),!L.length&&e.jsx(w,{tone:"info",children:"Aguarde o catálogo carregar para escolher produtos disponíveis."}),!!A?.unavailable.length&&e.jsxs("div",{className:"sk-stack-sm",children:[e.jsx(w,{tone:"warn",children:"Alguns produtos salvos estão indisponíveis. O link continuará informando isso ao visitante."}),A.unavailable.map(i=>e.jsxs("div",{className:"sk-row",children:[e.jsxs("span",{children:[i," ","— indisponível"]}),e.jsx(x,{size:"sm",variant:"ghost",disabled:g,"aria-label":"Remover "+String(i),onClick:()=>G(i),children:"Remover"})]},i))]}),e.jsxs("div",{className:"sk-row",children:[e.jsx(x,{type:"submit",icon:e.jsx(Qa,{size:14}),disabled:g||!m.title.trim()||!m.codes.length,children:g?"Salvando seleção…":"Salvar seleção"}),e.jsx(x,{variant:"ghost",disabled:g,onClick:()=>{o(null),t("")},children:"Cancelar edição"})]})]})]})]})},js=a=>!a.user?.aceiteComissao||!a.user.codigoAfiliado?null:e.jsx(vs,{...a,user:a.user},`${a.user.uid||""}:${a.user.email}:${a.user.codigoAfiliado}`),Fs=({selectionId:a,products:r,cart:c,user:E,onApply:k,onClose:u})=>{const m=we(),[o,T]=n.useState(null),[P,g]=n.useState(!0),[R,D]=n.useState(""),[t,q]=n.useState(!1),[_,b]=n.useState("merge"),[f,M]=n.useState(!1),[X,L]=n.useState(0),U=`${a}:${E?.uid||E?.email||"guest"}`,S=n.useRef(0),N=n.useRef(!0),F=n.useRef(!1),I=n.useCallback(()=>{F.current||u()},[u]),[G,h]=n.useState(()=>me.getItem(re.appliedCoupon)||"");n.useEffect(()=>{const l=()=>{h(me.getItem(re.appliedCoupon)||""),M(!1)};return window.addEventListener("storage",l),window.addEventListener(He,l),()=>{window.removeEventListener("storage",l),window.removeEventListener(He,l)}},[]);const $=!!o&&!!G&&G.toUpperCase()!==o.affiliateCode.toUpperCase(),A=fe.isPixPending(),i=n.useMemo(()=>Ne(o?.codes||[],r),[o,r]);n.useEffect(()=>{N.current=!0;const l=++S.current;return F.current=!1,q(!1),g(!0),T(null),D(""),M(!1),b("merge"),fe.getPublic(a).then(v=>{N.current&&l===S.current&&T(v)}).catch(v=>{N.current&&l===S.current&&D(v instanceof Error?v.message:"Não foi possível abrir esta seleção.")}).finally(()=>{N.current&&l===S.current&&g(!1)}),()=>{N.current=!1,++S.current}},[U,X,a]);const d=async()=>{const l=me.getItem(re.appliedCoupon)||"";if(l!==G){h(l),M(!1);return}if(!o||F.current||!m||!i.available.length||$&&!f)return;if(fe.isPixPending()){D("Conclua ou cancele o pagamento pendente antes de usar uma seleção.");return}F.current=!0,q(!0),D("");const v=S.current;try{await k(o,_),N.current&&v===S.current&&u()}catch(V){N.current&&v===S.current&&D(V instanceof Error?V.message:"Não foi possível aplicar a seleção. Tente novamente.")}finally{N.current&&v===S.current&&(F.current=!1,q(!1))}};return e.jsx(Xa,{isOpen:!0,onClose:I,disableBackdropClick:t,ariaLabel:"Seleção do criador",children:P?e.jsx(ye,{label:"Carregando seleção…"}):o?e.jsxs("div",{className:"sk-stack",children:[e.jsx(J,{title:o.title,icon:e.jsx(na,{size:16}),sub:"Uma seleção de "+String(o.creatorName),divided:!0,children:e.jsxs("div",{className:"sk-stack-sm",children:[o.description&&e.jsx("p",{children:o.description}),e.jsxs(se,{tone:"accent",children:["Código:"," ",o.affiliateCode]}),e.jsx(w,{tone:"info",icon:e.jsx(sa,{size:14}),children:m?"Desconto vigente: "+String(m.buyerDiscountPct)+"%. O carrinho preserva o melhor preço VIP sem acumular benefícios.":"A política de descontos está indisponível. Aguarde para usar esta seleção."})]})}),e.jsx("div",{className:"sk-stack-sm","aria-label":"Produtos da seleção",children:i.available.map(l=>e.jsxs("article",{className:"sk-surface sk-surface--pad",children:[e.jsx("h3",{className:"sk-text-lg",children:l.nome}),e.jsxs("p",{className:"sk-text-sm",children:[l.code," · ",Q(za.cartItem(l).preco)]})]},l.code))}),!!i.unavailable.length&&e.jsxs(w,{tone:"warn",children:["Produtos indisponíveis:"," ",i.unavailable.join(", "),". Eles não serão acrescentados ao carrinho."]}),e.jsx(w,{tone:"info",children:"Abrir este link não altera seu carrinho. Ao confirmar, os produtos disponíveis e o código do criador serão aplicados. Preços e desconto serão conferidos novamente na compra."}),!!c.length&&e.jsxs("fieldset",{className:"sk-stack-sm",disabled:t,children:[e.jsx("legend",{className:"sk-label",children:"Como usar esta seleção"}),e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"radio",name:"creator-selection-mode",checked:_==="merge",onChange:()=>b("merge")}),"Adicionar ao meu carrinho"]}),e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"radio",name:"creator-selection-mode",checked:_==="replace",onChange:()=>b("replace")}),"Substituir meu carrinho"]}),_==="replace"&&e.jsxs(w,{tone:"warn",children:["Os"," ",c.length," ","produtos do carrinho atual serão substituídos pelos produtos disponíveis desta seleção."]})]}),$&&e.jsxs("div",{className:"sk-stack-sm",children:[e.jsxs(w,{tone:"warn",children:["Seu carrinho já usa o código"," ",G,". Esta seleção usa"," ",o.affiliateCode," ","e a indicação passará a pertencer a"," ",o.creatorName,"."]}),e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"checkbox",checked:f,disabled:t,onChange:l=>M(l.target.checked)}),"Aceito substituir o código aplicado"]})]}),A&&e.jsx(w,{tone:"warn",children:"Conclua ou cancele o pagamento pendente antes de usar uma seleção."}),R&&e.jsx("div",{role:"alert",children:e.jsx(w,{tone:"danger",children:R})}),e.jsxs("div",{className:"sk-row",children:[e.jsx(x,{onClick:()=>void d(),disabled:t||A||!m||!i.available.length||$&&!f,children:t?"Aplicando seleção…":"Usar seleção e desconto"}),e.jsx(x,{variant:"ghost",disabled:t,onClick:u,children:"Continuar na loja"})]})]}):e.jsxs("div",{className:"sk-stack",children:[e.jsx("div",{role:"alert",children:e.jsx(w,{tone:"danger",children:R||"Esta seleção não está mais disponível."})}),e.jsx(x,{variant:"secondary",onClick:()=>L(l=>l+1),children:"Tentar novamente"}),e.jsx(x,{variant:"ghost",onClick:u,children:"Continuar na loja"})]})})},ta=Z.memo(({question:a,answer:r})=>{const[c,E]=n.useState(!1);return e.jsxs("div",{className:`aff-faq-item ${c?"open":""}`,children:[e.jsxs("button",{type:"button",className:"aff-faq-trigger",onClick:()=>E(k=>!k),"aria-expanded":c,children:[e.jsx("span",{className:"aff-faq-question",children:a}),e.jsx(j,{className:`fas fa-chevron-down aff-faq-chevron ${c?"open":""}`})]}),e.jsx("div",{className:`aff-faq-body ${c?"open":""}`,children:e.jsx("p",{className:"aff-faq-answer",dangerouslySetInnerHTML:{__html:r}})})]})});ta.displayName="AffiliateFAQItem";const Me=Z.memo(()=>{const a=we(),r=n.useMemo(()=>[{q:"Como funciona o programa de afiliados?",a:"Você compartilha seu código exclusivo. O cliente ganha desconto no carrinho e você recebe comissão a cada pedido confirmado."},{q:"Quanto eu ganho e qual o desconto do cliente?",a:a?`Você recebe <strong>${a.commissionPct}%</strong> de comissão e seu cliente ganha <strong>${a.buyerDiscountPct}%</strong> de desconto sobre o total pago.`:"A comissão e o desconto incidem sobre o total pago pelos produtos no carrinho, conforme a política vigente."},{q:"Quando e como recebo o pagamento?",a:"Pagamentos realizados <strong>todo dia 1º de cada mês</strong> via PIX direto na sua chave cadastrada, sem valor mínimo de saque."},{q:"Como a indicação é validada no carrinho?",a:"O desconto e a comissão são registrados quando o cliente digita seu código no carrinho e clica em <strong>Aplicar</strong>."},{q:"Qual a diferença entre Saldo Pendente e Saldo Liberado?",a:"<strong>Pendente:</strong> período de segurança antifraude pós-compra. <strong>Liberado:</strong> transação confirmada e pronta para o próximo PIX do dia 1º."},{q:"O código acumula com descontos do Clube VIP?",a:"Não acumula. O carrinho aplica automaticamente a opção mais vantajosa para o cliente. Sua comissão incide sobre o total pago."},{q:"Existe meta obrigatória ou exclusividade?",a:"Não. Sem metas mínimas, sem exclusividade e sem taxas. Divulgue no seu próprio ritmo."}],[a]);return e.jsx("div",{className:"aff-faq-list",children:r.map(c=>e.jsx(ta,{question:c.q,answer:c.a},c.q))})});Me.displayName="AffiliateProgramGuideBody";const ks=Z.memo(({tone:a="accent",framed:r=!1,className:c=""})=>e.jsx(J,{tone:a,framed:r,className:c,icon:e.jsx(qe,{size:16}),title:"Como funciona o programa",badge:e.jsx(se,{tone:"neutral",children:"Regras oficiais"}),sub:"Tudo o que vale para a sua comissão está nesta tela — não há regra escondida em outro lugar.",divided:!0,children:e.jsx(Me,{})}));ks.displayName="AffiliateProgramGuide";const O=({label:a,value:r,icon:c,trend:E})=>e.jsx(Ca,{label:E?String(a)+" · "+String(E):a,value:r,icon:e.jsx(c,{size:16})}),bs=({user:a,isAfiliado:r,className:c=""})=>{const k=Z.useMemo(()=>a?Da.getAccessLevel(a):null,[a])?.borderColor||ka("--sk-palette-teal-10b981");return e.jsxs("header",{className:`aff-user-hero ${c}`,"aria-label":"Apresentação do colaborador",children:[e.jsxs("div",{className:"aff-user-hero__main",children:[e.jsxs("div",{className:"aff-user-hero__avatar-wrap",children:[e.jsx("div",{className:`aff-user-hero__avatar ${a?.avatarUrl?"":"bg-gradient-to-br from-primary/80 to-accent/80"}`,style:{border:`2.5px solid ${k}`},children:a?.avatarUrl?e.jsx("img",{decoding:"async",src:ba(a.avatarUrl),alt:a.nome||"Avatar do usuário",className:"w-full h-full object-cover"}):a?.nome?e.jsx("span",{className:"font-semibold sk-fg-accent text-2xl",children:a.nome.charAt(0).toUpperCase()}):e.jsx(Ya,{size:34,className:"sk-fg-accent"})}),r&&e.jsx("span",{className:"aff-user-hero__check-badge","aria-hidden":!0,children:e.jsx(qe,{size:14,className:"text-white"})})]}),e.jsxs("div",{className:"aff-user-hero__content",children:[e.jsx("div",{className:"aff-user-hero__badge-row",children:r?e.jsx(se,{tone:"accent",icon:e.jsx(qe,{size:12}),children:"Colaborador ativo"}):e.jsxs("span",{className:"sk-eyebrow sk-eyebrow--accent",children:[e.jsx(j,{className:"fas fa-handshake"}),"Programa Oficial de Indicação"]})}),r?e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"aff-user-hero__title",children:"Painel do Colaborador"}),e.jsx("p",{className:"aff-user-hero__desc",children:"Acompanhe seus saldos, comissões, seleções recomendadas e repasses mensais via PIX."})]}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"aff-user-hero__title",children:"Ganhe com suas indicações"}),e.jsx("p",{className:"aff-user-hero__desc",children:"Receba suas comissões todo dia 1º de cada mês por todas as vendas realizadas com seu código exclusivo."})]})]})]}),e.jsxs("ul",{className:"home-benefits aff-benefits","aria-label":"Pilares do programa",children:[e.jsxs("li",{className:"home-benefit",children:[e.jsx("span",{className:"home-benefit__icon","aria-hidden":"true",children:e.jsx(j,{className:"fas fa-bolt"})}),e.jsxs("div",{className:"home-benefit__body",children:[e.jsx("strong",{children:"Repasse PIX todo dia 1º"}),e.jsx("span",{children:"Pagamento direto na sua chave cadastrada sem valor mínimo"})]})]}),e.jsxs("li",{className:"home-benefit",children:[e.jsx("span",{className:"home-benefit__icon","aria-hidden":"true",children:e.jsx(j,{className:"fas fa-tags"})}),e.jsxs("div",{className:"home-benefit__body",children:[e.jsx("strong",{children:"Duplo benefício no carrinho"}),e.jsx("span",{children:"Seu indicado recebe desconto imediato e você garante sua comissão"})]})]}),e.jsxs("li",{className:"home-benefit",children:[e.jsx("span",{className:"home-benefit__icon","aria-hidden":"true",children:e.jsx(j,{className:"fas fa-shield-alt"})}),e.jsxs("div",{className:"home-benefit__body",children:[e.jsx("strong",{children:"Sem metas ou exclusividade"}),e.jsx("span",{children:"Divulgue no seu ritmo com auditoria em tempo real de cada pedido"})]})]})]})]})},y=Q,ie=a=>Ma(a,"-"),Cs=({user:a,showNotify:r,onUpdateUser:c,products:E=[],cart:k=[]})=>{const{affiliateEnabled:u}=Ea(),m=we();Ue("commissions",us),Ue("sections",_a);const[o,T]=n.useState([]),[P,g]=n.useState({}),[R,D]=n.useState([]),t=Z.useRef(!0),q=Z.useRef(0),_=Z.useRef(!1),b=Z.useRef(!1),f=Z.useRef(!1),[M,X]=n.useState(!1),L=a?.afiliacaoCanceladaPor==="admin"&&!a.aceiteComissao,[U,S]=n.useState(!1);n.useEffect(()=>{t.current=!0;for(const s of[re.affiliateCommissions,re.affiliateResumo,re.affiliateCode])me.removeItem(s);return()=>{t.current=!1,++q.current}},[]);const[N,F]=n.useState(!o.length),[I,G]=n.useState(!1),[h,$]=n.useState(!1),[A,i]=n.useState(!1),[d,l]=n.useState(!1),[v,V]=n.useState(!1),[ue,ee]=n.useState(a?.email||""),pe=n.useMemo(()=>$a(a?.telefone),[a?.telefone]),[Se,ra]=n.useState(pe.ddi),[le,la]=n.useState(pe.numero),[Ie,ca]=n.useState(""),[Oe,da]=n.useState(""),[he,ma]=n.useState(""),[xe,De]=n.useState(!1),[$e,Te]=n.useState(ya()),[fa,_e]=n.useState(!1);n.useEffect(()=>{ee(a?.email||"")},[a?.email]);const[B,ge]=n.useState(a?.codigoAfiliado||null),[ae,Le]=n.useState(!1);n.useEffect(()=>{u&&a?.aceiteComissao&&!B&&!A&&Fe()},[a?.aceiteComissao,B,u]);const Ae=n.useCallback(async(s=!0)=>{if(!a?.email)return;const p=++q.current;S(!1),s&&o.length===0&&F(!0),s||V(!0);try{ne.getRanking().then(H=>{t.current&&p===q.current&&H.sucesso&&H.ranking&&D(H.ranking)}).catch(()=>{});const z=await ne.getMyCommissions(a.email);if(!t.current||p!==q.current)return;if(!z.sucesso)throw new Error("Falha no carregamento");z.sucesso&&(T(z.comissoes||wa),g(z.resumo||{}),z.codigoAfiliado&&!B&&(ge(z.codigoAfiliado),c({codigoAfiliado:z.codigoAfiliado})))}catch{t.current&&p===q.current&&S(!0)}finally{t.current&&p===q.current&&(F(!1),V(!1))}},[a,a?.email,B,o.length]);n.useEffect(()=>{a?.email&&(a?.aceiteComissao||a?.codigoAfiliado||xe||!u)&&Ae()},[a?.aceiteComissao,a?.email,xe,u]);const Fe=n.useCallback(async()=>{if(!(!a||b.current||!(a.aceiteComissao||xe))){b.current=!0,i(!0);try{const s=await ne.generateCode(a.email);if(!t.current)return;s.sucesso&&s.codigoAfiliado&&(ge(s.codigoAfiliado),c({codigoAfiliado:s.codigoAfiliado}))}catch{}finally{t.current&&(b.current=!1,i(!1))}}},[a,a?.email,A,c]),ua=async()=>{if(!(_.current||!M||L)){if(!a){window.dispatchEvent(new CustomEvent("skull:require-login"));return}if(!a.email.trim()||!le.trim()||!he.trim()){r("Preencha os campos obrigatórios básicos (E-mail, WhatsApp e PIX)!","erro");return}if(!Ia(le,Se)){r("Informe um WhatsApp válido.","erro");return}_.current=!0,G(!0);try{const s=Oa(Se,le),p={emailUsuario:a.email,whatsapp:s,facebook:Ie,instagram:Oe,chavePix:he},z=await ne.acceptTerms(p);if(!t.current)return;z.sucesso?(r("Bem-vindo ao programa de afiliados!","sucesso"),De(!0),c({aceiteComissao:!0,dataAceiteComissao:new Date().toISOString(),telefone:s}),z.codigoAfiliado&&(ge(z.codigoAfiliado),c({codigoAfiliado:z.codigoAfiliado}))):r(z.mensagem||"Erro ao aceitar termos","erro")}catch{t.current&&r("Não foi possível ativar seu perfil. Tente novamente.","erro")}finally{t.current&&(_.current=!1,G(!1))}}},pa=async()=>{if(!(!a||f.current)){f.current=!0,$(!0);try{const s=await ne.cancelMembership(a.email,"user","Cancelado pelo próprio usuário");if(!t.current)return;if(s.sucesso){const p=s.dataCancelamentoAfiliacao||new Date().toISOString();De(!1),ge(null),_e(!1),me.setItem("dataCancelamentoAfiliacao",p),r("Afiliação cancelada. Seu histórico continua disponível para auditoria.","sucesso"),c({aceiteComissao:!1,dataCancelamentoAfiliacao:p,afiliacaoCanceladaPor:"user",motivoCancelamentoAfiliacao:"Cancelado pelo próprio usuário"})}else r(s.mensagem||"Erro ao cancelar afiliação","erro")}catch{t.current&&r("Erro de conexão ao cancelar afiliação","erro")}finally{t.current&&(f.current=!1,$(!1))}}},ha=async()=>{if(!B)return;const s=await Re(B);if(t.current){if(!s){r("Não foi possível copiar o código.","erro");return}l(!0),r("Código copiado!","sucesso"),setTimeout(()=>{t.current&&l(!1)},2e3)}},xa=async()=>{if(!B)return;const s=`🔥 Use meu cupom *${B}* para ganhar desconto na Skull Legion!

Digite o código no carrinho ao finalizar sua compra.`;if(Fa())try{await navigator.share({title:"Skull Legion – Cupom de Desconto",text:s});return}catch{}const p=await Re(s);r(p?"Mensagem copiada para compartilhar!":"Não foi possível copiar a mensagem.",p?"sucesso":"erro")},C=n.useMemo(()=>{if(P.totalGerado!==void 0)return{total:P.totalGerado||0,pendente:P.totalPendente||0,liberado:P.totalLiberado||0,pago:P.totalPago||0,count:o.length};const p=ne.summarizeCommissions(o);return{total:p.totalGerado,pendente:p.totalPendente,liberado:p.totalLiberado,pago:p.totalPago,count:o.length}},[o,P]),Xe=n.useMemo(()=>{const s=[],p=new Date().getFullYear();let H=new Date().getMonth()+1,Ge=p;for(let K=0;K<12;K++)s.unshift(`${String(H).padStart(2,"0")}/${Ge}`),H--,H===0&&(H=12,Ge--);const ce=new Map;return o.forEach(K=>{if(K.status==="CANCELADO")return;const Ve=new Date(K.dataGeracao||Date.now()),ve=String(Ve.getMonth()+1).padStart(2,"0")+"/"+Ve.getFullYear();ce.has(ve)||ce.set(ve,{mesAno:ve,totalReal:0}),ce.get(ve).totalReal+=Number(K.valorComissao)||0}),s.map(K=>ce.has(K)?ce.get(K):{mesAno:K,totalReal:0})},[o]),Y=!!(a?.aceiteComissao||xe);return u?e.jsx("div",{className:"store-interface affiliate-page w-full flex flex-col bg-light dark:bg-dark",children:e.jsx("div",{className:"sk-shell flex-1 pb-6 pt-2",children:e.jsxs("div",{className:"home-flow",children:[e.jsx(bs,{user:a,isAfiliado:Y}),e.jsxs("section",{className:"aff-section","aria-label":"Código e resumo de comissões",children:[e.jsxs("header",{className:"sk-section__head",children:[e.jsxs("span",{className:"sk-eyebrow sk-eyebrow--accent",children:[e.jsx(j,{className:"fas fa-ticket-alt"}),Y?"Gestão e Repasses":"Comece Agora"]}),e.jsx("h2",{className:"sk-title",children:Y?"Seu Código e Saldos":"Seu Código de Indicação"}),e.jsx("p",{className:"sk-lead",children:Y?"Compartilhe seu cupom exclusivo e acompanhe seus saldos acumulados e repasses via PIX.":"Ative seu perfil gratuitamente para liberar seu cupom exclusivo e receber comissões via PIX."})]}),e.jsxs("div",{className:"aff-duo",children:[e.jsx(J,{icon:e.jsx(sa,{size:16}),title:"Seu código exclusivo",sub:"Válido para produtos pagos na loja.",divided:!0,footer:e.jsx(w,{tone:"info",icon:e.jsx(j,{className:"fas fa-keyboard"}),children:"O desconto e a comissão são validados quando o cliente digita o código no carrinho e clica em aplicar."}),children:e.jsx("div",{className:"sk-stack-sm",children:B?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sk-input sk-input--value aff-code",children:B}),e.jsx(x,{block:!0,variant:d?"primary":"secondary",onClick:ha,icon:d?e.jsx(oe,{size:16}):e.jsx(ia,{size:16}),children:d?"Código copiado":"Copiar código"}),e.jsx(x,{block:!0,variant:"ghost",onClick:xa,icon:e.jsx(Ja,{size:14}),children:"Compartilhar com clientes"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sk-input sk-input--value aff-code aff-code--ghost",children:A?"Gerando…":"SKL-XXXXXX"}),!A&&(a?e.jsx(x,{block:!0,onClick:Fe,icon:e.jsx(Za,{size:14}),children:"Gerar meu código"}):e.jsx(x,{block:!0,onClick:()=>window.dispatchEvent(new CustomEvent("skull:require-login")),icon:e.jsx(ze,{size:14}),children:"Entrar para gerar código"}))]})})}),Y?e.jsxs("div",{className:"aff-summary-stack",children:[e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(O,{label:"Saldo Liberado",value:y(C.liberado),icon:be,trend:"no próximo repasse PIX"}),e.jsx(O,{label:"Saldo Pendente",value:y(C.pendente),icon:Ce,trend:"aguardando liberação"}),e.jsx(O,{label:"Já Pago",value:y(C.pago),icon:oe,trend:"transferido via PIX"}),e.jsx(O,{label:"Total Gerado",value:y(C.total),icon:Je,trend:`${C.count} ${C.count===1?"venda":"vendas"}`})]}),e.jsxs("div",{className:"sk-row aff-toolbar",children:[e.jsxs("button",{type:"button",className:"aff-metrics-drawer-toggle",onClick:()=>Le(s=>!s),"aria-expanded":ae,children:[e.jsx(j,{className:"fas fa-chart-line"}),e.jsx("span",{children:ae?"Ocultar métricas e gráficos":"Ver gráficos e métricas"}),e.jsx(j,{className:`fas fa-chevron-down aff-metrics-chevron ${ae?"is-open":""}`})]}),e.jsx(x,{variant:"ghost",size:"sm",onClick:()=>Ae(!1),disabled:v,icon:e.jsx(es,{size:14,className:v?"animate-spin":""}),children:"Atualizar"}),e.jsx(x,{variant:"danger",size:"sm",onClick:()=>_e(!0),disabled:h,icon:h?e.jsx(Ze,{size:14,className:"animate-spin"}):e.jsx(as,{size:14}),children:"Cancelar afiliação"})]})]}):e.jsx("div",{className:"aff-summary-stack",children:e.jsx(J,{icon:e.jsx(be,{size:16}),title:"Repasses mensais via PIX",sub:"Transparência total em cada indicação confirmada.",divided:!0,children:e.jsxs("div",{className:"sk-stack-sm",children:[e.jsx(w,{tone:"info",icon:e.jsx(j,{className:"fas fa-circle-info"}),children:"Comissões de "+String(m?.commissionPct||10)+"% pagas todo dia 1º de cada mês via PIX na sua chave cadastrada."}),e.jsx("div",{className:"sk-row aff-toolbar",children:e.jsxs("button",{type:"button",className:"aff-metrics-drawer-toggle",onClick:()=>Le(s=>!s),"aria-expanded":ae,children:[e.jsx(j,{className:"fas fa-chart-line"}),e.jsx("span",{children:ae?"Ocultar métricas e gráficos":"Ver gráficos e métricas"}),e.jsx(j,{className:`fas fa-chevron-down aff-metrics-chevron ${ae?"is-open":""}`})]})})]})})})]}),ae&&e.jsxs("div",{className:"aff-metrics-drawer",children:[!Y&&e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(O,{label:"Saldo Liberado",value:y(C.liberado),icon:be,trend:"no próximo repasse PIX"}),e.jsx(O,{label:"Saldo Pendente",value:y(C.pendente),icon:Ce,trend:"aguardando liberação"}),e.jsx(O,{label:"Já Pago",value:y(C.pago),icon:oe,trend:"transferido via PIX"}),e.jsx(O,{label:"Total Gerado",value:y(C.total),icon:Je,trend:`${C.count} ${C.count===1?"venda":"vendas"}`})]}),e.jsx(J,{icon:e.jsx(j,{className:"fas fa-crosshairs"}),title:"Métricas de Vendas",sub:"Desempenho detalhado das suas indicações.",divided:!0,children:e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(O,{label:"Compradores",value:String(new Set(o.map(s=>s.emailComprador||s.idVenda)).size||C.count),icon:ss,trend:"clientes únicos indicados"}),e.jsx(O,{label:"Vendas",value:String(C.count),icon:ns,trend:"pedidos confirmados"}),e.jsx(O,{label:"Ticket médio",value:y(C.count>0?o.reduce((s,p)=>s+(Number(p.valorVenda)||0),0)/C.count:0),icon:is,trend:"por venda indicada"}),e.jsx(O,{label:"Comissão média",value:y(C.count>0?C.total/C.count:0),icon:oe,trend:"por venda confirmada"})]})}),e.jsx(J,{icon:e.jsx(j,{className:"fas fa-chart-area"}),title:"Evolução dos Ganhos",badge:e.jsx(se,{tone:"neutral",children:"Últimos 12 meses"}),divided:!0,children:Xe.some(s=>s.totalReal>0)?e.jsx(ts,{width:"100%",height:220,children:e.jsxs(rs,{data:Xe,margin:Va,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"commissionsArea",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:de.accent,stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:de.accent,stopOpacity:0})]})}),e.jsx(ls,{dataKey:"mesAno",tickFormatter:Ra,...Qe,dy:10}),e.jsx(cs,{tickFormatter:Ua,...Qe,width:Wa}),e.jsx(ds,{strokeDasharray:"3 3",vertical:!1,stroke:de.grid}),e.jsx(ms,{cursor:{fill:de.cursor},content:({active:s,payload:p,label:z})=>s&&p?.length?e.jsx(Ba,{label:qa(String(z)),value:y(p[0].value)}):null}),e.jsx(fs,{type:"monotone",dataKey:"totalReal",stroke:de.accent,strokeWidth:3,fillOpacity:1,fill:"url(#commissionsArea)",animationDuration:1500})]})}):e.jsx(Ee,{icon:"fa-chart-area",title:"Sem histórico no momento",description:"As vendas confirmadas com o seu código alimentarão este gráfico."})}),R.length>0&&e.jsx(J,{icon:e.jsx(j,{className:"fas fa-trophy"}),title:"Ranking da Semana",badge:e.jsx(se,{tone:"neutral",children:"Volume de comissão"}),divided:!0,children:e.jsx("ol",{className:"sk-list",children:R.slice(0,10).map((s,p)=>{const z=s.email.toLowerCase()===(a?.email||"").toLowerCase(),H=["🥇","🥈","🥉"];return e.jsxs("li",{className:"sk-list-item",children:[e.jsx("span",{className:"sk-card__icon","aria-hidden":!0,children:H[p]||`${p+1}`}),e.jsxs("span",{className:"sk-list-item__body",children:[e.jsxs("span",{className:"sk-list-item__title",children:[s.nome||s.email.split("@")[0],z&&e.jsxs(e.Fragment,{children:[" ",e.jsx(se,{tone:"accent",children:"Você"})]})]}),e.jsxs("span",{className:"sk-list-item__desc",children:[s.vendas," ",s.vendas===1?"venda":"vendas"]})]}),e.jsxs("span",{className:"aff-right",children:[e.jsx("span",{className:"sk-metric__value sk-metric__value--sm",children:y(s.totalComissao)}),e.jsxs("span",{className:"sk-list-item__desc",children:[y(s.totalPago)," ","pago"]})]})]},s.email)})})})]})]}),e.jsx("div",{className:"aff-calculator-section",children:e.jsxs("details",{className:"aff-projection store-guide",open:Y?void 0:!0,children:[e.jsxs("summary",{children:[e.jsx(j,{className:"fas fa-calculator"}),e.jsx("span",{children:"Simulador de Ganhos — projete seu potencial de comissão mensal e anual"}),e.jsx(j,{className:"fas fa-chevron-down store-guide__chevron"})]}),e.jsx("div",{className:"store-guide__body",children:e.jsx(oa,{idPrefix:Y?"comissoes-afiliado":"comissoes-preview"})})]})}),e.jsx(Ga,{isOpen:fa,closeOnConfirm:!1,busy:h,onClose:()=>{f.current||_e(!1)},onConfirm:()=>{pa()},title:"Cancelar sua afiliação?",message:e.jsxs(e.Fragment,{children:["Seu código deixa de validar novas vendas"," ",e.jsx("strong",{children:"imediatamente"}),". O histórico permanece salvo e você pode reativar quando quiser."]}),confirmText:"Cancelar afiliação",cancelText:"Continuar afiliado",isDanger:!0}),!a||!Y?a?e.jsx(Be,{className:"aff-section",id:"termo-compromisso","aria-label":"Ativar perfil de colaborador",children:e.jsx(Ye,{icon:e.jsx(ea,{size:16}),title:"Ative seu perfil de colaborador",sub:"Preencha seus dados de repasse abaixo para receber na hora o seu código exclusivo.",open:$e,onToggle:()=>Te(s=>!s),toggleLabel:"Expandir formulário de ativação de colaborador",children:e.jsxs("div",{className:"sk-stack",children:[L&&e.jsx(w,{tone:"danger",children:"A reativação do seu perfil depende da administração. Entre em contato com o suporte."}),e.jsxs("div",{className:"sk-split",children:[e.jsxs(W,{label:"E-mail da conta",htmlFor:"affiliate-email",children:[e.jsx(te,{id:"affiliate-email",type:"email",value:ue,readOnly:!0,disabled:!0,placeholder:"voce@exemplo.com"}),e.jsx("p",{className:"sk-field__hint",children:"A afiliação usa obrigatoriamente o e-mail verificado da sua sessão."})]}),e.jsx(W,{label:"WhatsApp",htmlFor:"affiliate-whatsapp",children:e.jsx(Ta,{id:"affiliate-whatsapp",ddi:Se,value:le,onDdiChange:ra,onValueChange:la,disabled:I,required:!0})})]}),e.jsx(W,{label:"Chave PIX para recebimento",htmlFor:"affiliate-pix",children:e.jsx(te,{id:"affiliate-pix",type:"text",disabled:I,value:he,onChange:s=>ma(s.target.value),placeholder:"E-mail, CPF, celular ou chave aleatória"})}),e.jsxs("details",{className:"aff-contacts",children:[e.jsx("summary",{children:"Contatos opcionais"}),e.jsxs("div",{className:"sk-split",children:[e.jsx(W,{label:"Facebook (opcional)",htmlFor:"affiliate-facebook",children:e.jsx(te,{id:"affiliate-facebook",type:"text",disabled:I,value:Ie,onChange:s=>ca(s.target.value),placeholder:"Link do perfil"})}),e.jsx(W,{label:"Instagram (opcional)",htmlFor:"affiliate-instagram",children:e.jsx(te,{id:"affiliate-instagram",type:"text",disabled:I,value:Oe,onChange:s=>da(s.target.value),placeholder:"@seu_perfil"})})]}),e.jsx(w,{tone:"info",icon:e.jsx(j,{className:"fas fa-bullhorn"}),children:"As redes sociais são opcionais. Se precisarmos confirmar um repasse PIX, falamos com você pelo WhatsApp ou por elas."})]}),e.jsxs("label",{className:"aff-terms",children:[e.jsx("input",{type:"checkbox",checked:M,disabled:I,onChange:s=>X(s.target.checked)})," ",e.jsx("span",{children:"Li e aceito as regras do programa de comissões."})]}),e.jsx(w,{tone:"warn",icon:e.jsx(os,{size:14}),children:"Integridade é inegociável: má conduta encerra a afiliação e o acesso à plataforma."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:10},children:e.jsx(x,{size:"sm",onClick:ua,disabled:I||L||!M||!a.email.trim()||!le.trim()||!he.trim(),icon:I?e.jsx(Ze,{size:14,className:"animate-spin"}):e.jsx(ze,{size:14}),children:I?"Ativando…":"Ativar meu perfil de colaborador"})})]})})}):e.jsx(Be,{className:"aff-section",id:"termo-compromisso","aria-label":"Entrar para ativar",children:e.jsx(Ye,{icon:e.jsx(ea,{size:16}),title:"Entre para ativar seu perfil",sub:"A ativação leva dois minutos e usa o e-mail verificado da sua conta. Criar conta é grátis.",open:$e,onToggle:()=>Te(s=>!s),toggleLabel:"Expandir ativação de perfil",children:e.jsxs("div",{className:"sk-stack",children:[e.jsx(w,{tone:"info",icon:e.jsx(j,{className:"fas fa-circle-info"}),children:"Com a conta ativa, você recebe seu código exclusivo na hora e acompanha cada venda, saldo e repasse por aqui."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:8},children:e.jsx(x,{size:"sm",icon:e.jsx(ze,{size:14}),onClick:()=>window.dispatchEvent(new CustomEvent("skull:require-login")),children:"Entrar ou criar conta grátis"})})]})})}):null,a?.aceiteComissao&&a.codigoAfiliado&&e.jsx(js,{user:a,products:E,cart:k,showNotify:r}),Y?e.jsx(J,{icon:e.jsx(Ce,{size:16}),title:"Histórico de comissões",badge:e.jsxs(se,{tone:"neutral",children:[o.length," ","registros"]}),divided:!0,children:N?e.jsx(ye,{label:"Carregando suas comissões…"}):U?e.jsx(w,{tone:"danger",children:"Não foi possível carregar suas comissões. Use Atualizar para tentar novamente."}):o.length===0?e.jsx(Ee,{icon:"fa-receipt",title:"Nenhuma comissão registrada",description:"Compartilhe o seu código — cada venda confirmada aparece aqui."}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sk-table-wrap hidden md:block",children:e.jsxs("table",{className:"sk-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Venda"}),e.jsx("th",{scope:"col",children:"Situação"}),e.jsx("th",{scope:"col",children:"Datas"}),e.jsx("th",{scope:"col",className:"aff-right",children:"Sua comissão"})]})}),e.jsx("tbody",{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"sk-list-item__title",children:s.id}),e.jsxs("div",{className:"sk-list-item__desc",children:["Venda original:"," ",y(Number(s.valorVenda))]})]}),e.jsx("td",{children:e.jsx(Pe,{status:s.status})}),e.jsxs("td",{children:[e.jsxs("div",{className:"sk-text-xs",children:["Gerada em"," ",ie(s.dataGeracao)]}),e.jsx("div",{className:"sk-list-item__desc",children:s.status==="PAGO"&&s.detalhesPagamento?"Paga em "+String(ie(s.detalhesPagamento.dataPagamento)):"Prevista para "+String(ie(s.dataPagamentoPrevista))})]}),e.jsxs("td",{className:"aff-right",children:[e.jsx("div",{className:"sk-metric__value sk-metric__value--sm",children:y(Number(s.valorComissao))}),e.jsx("div",{className:"sk-list-item__desc",children:s.tipoComissao==="percentual"?String(s.valorAplicado)+"% do valor pago":"Valor fixo"})]})]},s.id))})]})}),e.jsx("ul",{className:"sk-list md:hidden",children:o.map(s=>e.jsx("li",{className:"sk-list-item aff-history-item",children:e.jsxs("span",{className:"sk-list-item__body",children:[e.jsxs("span",{className:"sk-row aff-spread",children:[e.jsx("span",{className:"sk-list-item__title",children:s.id}),e.jsx(Pe,{status:s.status})]}),e.jsxs("span",{className:"sk-list-item__desc",children:["Venda de",y(Number(s.valorVenda))," · ",ie(s.dataGeracao)]}),e.jsx("span",{className:"sk-metric__value sk-metric__value--sm",children:y(Number(s.valorComissao))}),s.status==="PAGO"&&s.detalhesPagamento&&e.jsxs("span",{className:"sk-list-item__desc",children:["Recibo processado em",ie(s.detalhesPagamento.dataPagamento)]})]})},s.id))})]})}):null,e.jsxs("section",{className:"aff-section aff-faq-section","aria-label":"Dúvidas Frequentes",children:[e.jsxs("header",{className:"sk-section__head",children:[e.jsxs("span",{className:"sk-eyebrow sk-eyebrow--accent",children:[e.jsx(j,{className:"fas fa-circle-info"}),"Regras Oficiais"]}),e.jsx("h2",{className:"sk-title aff-section-title",children:"Dúvidas Frequentes"}),e.jsx("p",{className:"sk-lead",children:"Tudo o que vale para o uso do seu código, validação no carrinho e repasse mensal via PIX."})]}),e.jsx(Me,{})]})]})})}):e.jsxs("div",{className:"store-interface affiliate-page sk-shell sk-stack-sm",children:[e.jsx("h1",{className:"sk-title",children:"Extrato de comissões"}),e.jsx("p",{children:"Novas indicações estão indisponíveis. Seus valores já adquiridos e repasses mensais via PIX permanecem preservados."}),a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(O,{label:"Saldo Liberado",value:y(C.liberado),icon:be,trend:"no próximo repasse PIX"}),e.jsx(O,{label:"Saldo Pendente",value:y(C.pendente),icon:Ce,trend:"aguardando liberação"}),e.jsx(O,{label:"Já Pago",value:y(C.pago),icon:oe,trend:"transferido via PIX"})]}),e.jsx(x,{variant:"secondary",disabled:v||N,onClick:()=>void Ae(!1),children:"Atualizar extrato"}),e.jsx("a",{className:"sk-btn sk-btn--secondary",href:`${Sa.contact.href}?subject=${encodeURIComponent("Solicitação de repasse de comissões")}`,children:"Solicitar repasse ao suporte"}),N?e.jsx(ye,{label:"Carregando suas comissões…"}):U?e.jsx(w,{tone:"danger",children:"Não foi possível carregar seu extrato. Tente atualizar novamente."}):e.jsx("ul",{className:"sk-list",children:o.map(s=>e.jsxs("li",{className:"sk-list-item",children:[e.jsxs("span",{children:[ie(s.dataGeracao)," · ",y(Number(s.valorComissao))]}),e.jsx(Pe,{status:s.status})]},s.id))}),!N&&!U&&!o.length&&e.jsx("p",{children:"Nenhuma comissão registrada."})]}):e.jsx("p",{children:"Entre na sua conta para consultar seu extrato."})]})},Xs=a=>e.jsx(Cs,{...a},a.user?.uid||a.user?.email||"guest");export{oa as AffiliateEarningsSimulator,ta as AffiliateFAQItem,ks as AffiliateProgramGuide,Me as AffiliateProgramGuideBody,bs as CommissionUserHero,Fs as CreatorSelectionPreview,js as CreatorSelectionsPanel,aa as DEMO_DURACAO_MS,Xs as MyCommissions,O as StatCard};
