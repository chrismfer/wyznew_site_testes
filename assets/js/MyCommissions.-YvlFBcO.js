import{r as n,j as e,c as ie}from"./vendor-react.Bxpvzt8v.js";import{bx as xa,p as ga,bu as f,aM as me,aQ as re,I as va,ca as ze,cb as ja,W as ka,b6 as ba,b5 as Ca,aH as Na,af as wa,aR as ya,aZ as Sa,bS as _a,bR as Aa,cc as Pa,cd as za,ce as Ra,cf as Ea}from"./index.DrSIG-wE.js";import{s as qa}from"./sections.BxUlzICV.js";import{B as v,F as k,g as B,I as te,R as ve,t as Ma,N as y,v as Ia,M as Ve,w as Da,L as Ne,P as K,l as ee,k as Re,p as Oa,n as $a,u as Be,C as Ae,y as Ta,z as de,D as Ue,G as La,H as Fa,J as Ga,q as We,O as He}from"./index.rPrqxBCS.js";import{u as we,C as Ye,a as fe,r as Ce,M as Qe,b as je,A as se}from"./AffiliateOrchestrator.C_u3l5Pe.js";import"./catalogBoot.3I3tinKp.js";import{s as Xa,W as Va}from"./WhatsAppInput.CTG48E-Q.js";import{M as Ba,C as Ua}from"./Modal.Dpm9w_bt.js";import{n as oe,a5 as aa,ax as sa,P as Wa,b3 as na,x as Ha,t as Ya,S as Ee,Q as Qa,Z as ke,m as be,bD as Ka,aM as Ja,T as Pe,D as Ke,R as Za,a7 as Je,p as es,l as as,h as ss,bO as ns,aB as Ze,C as is}from"./vendor-icons.CnSBu9H2.js";import{R as os,A as ts,X as rs,Y as ls,C as cs,T as ds,a as ms}from"./vendor-charts.CyZNPgGD.js";/* empty css                      */import"./useOverlayLayer.Dd7T5TcH.js";const fs=`/* skull-style-rev:commissions:mwzxm78q */
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
  color: var(--sk-ds-t2);
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
}`,us=[1,3,6,9,12],ea=2800,ps=460;function hs(a){const r=a<.5?a*2:(1-a)*2;return r<.5?4*r**3:1-Math.pow(-2*r+2,3)/2}function xs(){return typeof window>"u"||typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}const ia=n.memo(({idPrefix:a,note:r,onEngage:c})=>{const[R,b]=n.useState("R$ 250,00"),p=we(),m=p?.commissionPct??10,[o,G]=n.useState(m),[P,j]=n.useState(1),[E,O]=n.useState(31),[t,q]=n.useState(1),[_,C]=n.useState(!1),u=n.useRef(null),M=n.useMemo(xs,[]);n.useEffect(()=>{p?.commissionPct&&G(p.commissionPct)},[p?.commissionPct]);const X=n.useCallback(()=>{u.current!==null&&(cancelAnimationFrame(u.current),u.current=null),C(!1)},[]),$=n.useCallback(g=>L=>{X(),c?.(),g(parseInt(L.target.value,10))},[X,c]),U=n.useCallback(()=>{if(u.current!==null)return;c?.();const g=M?ea*.6:ea,L=M?0:ps,A={comissao:o,volume:P,ciclo:E,meses:t},i=[{atraso:0,de:A.volume,ate:100,aplicar:j},{atraso:0,de:A.comissao,ate:35,aplicar:G},{atraso:L,de:A.ciclo,ate:31,aplicar:O},{atraso:L*2,de:A.meses,ate:12,aplicar:q}],d=g+L*2,l=performance.now();C(!0);const x=F=>{const ae=F-l;for(const J of i){const ue=Math.min(1,Math.max(0,(ae-J.atraso)/g));J.aplicar(Math.round(J.de+(J.ate-J.de)*hs(ue)))}if(ae<d){u.current=requestAnimationFrame(x);return}u.current=null,C(!1),G(A.comissao),j(A.volume),O(A.ciclo),q(A.meses)};u.current=requestAnimationFrame(x)},[M,o,P,E,t,c]);n.useEffect(()=>()=>{u.current!==null&&cancelAnimationFrame(u.current)},[]);const S=xa(R),w=n.useMemo(()=>p?{...p,commissionPct:o}:null,[p,o]),{porVenda:T,perMonth:I,total:V}=n.useMemo(()=>w?ga.calculateSimulatorEarnings({basePrice:S,policy:w,dailySales:P,activeDays:E,months:t}):{porVenda:0,perMonth:0,total:0},[S,w,P,E,t]);return p?e.jsxs("div",{className:"aff-sim-root aff-sim-compact",children:[e.jsxs("div",{className:"sk-sim-hint sk-sim-hint--compact",children:[e.jsxs("p",{className:"sk-sim-hint__text",children:[e.jsx("strong",{children:"Ajuste as barras"})," para simular seu potencial de lucro:"]}),e.jsx(v,{variant:"ghost",size:"sm",onClick:U,disabled:_,icon:e.jsx(k,{className:"fas fa-arrows-left-right"}),children:_?"Mostrando…":"Ver as barras em ação"})]}),e.jsxs("div",{className:"aff-sim-grid","data-demo":_?"rodando":void 0,children:[e.jsxs(B,{label:"1. Montante do carrinho no checkout",value:f(S),htmlFor:`${a}-valor`,className:"aff-sim-col--full",children:[e.jsx(te,{id:`${a}-valor`,type:"text",inputMode:"decimal",value:R,onChange:g=>{c?.(),b(g.target.value)},placeholder:"R$ 700,00","aria-label":"Valor do carrinho após promoções"}),e.jsx("div",{className:"aff-cart-presets",children:[150,350,700,1500].map(g=>e.jsx("button",{type:"button",className:`aff-cart-preset-btn${S===g?" is-active":""}`,onClick:()=>{X(),c?.(),b(f(g))},children:f(g)},g))})]}),e.jsxs(B,{label:"2. Percentual de comissão",value:`${o}%`,htmlFor:`${a}-comissao`,className:"aff-sim-col--full",children:[e.jsx(ve,{id:`${a}-comissao`,min:1,max:50,value:o,onChange:$(G),"aria-label":"Percentual de comissão"}),e.jsxs("div",{className:"aff-sim-commission-bar-info",children:[e.jsx("div",{className:"aff-sim-commission-status",children:o===p.commissionPct?e.jsxs("span",{className:"aff-sim-pill-synced",children:[e.jsx(oe,{size:12,className:"aff-sim-icon-synced"}),"Comissão oficial da loja ("+p.commissionPct+"%)"]}):e.jsx("button",{type:"button",className:"aff-sim-reset-link",onClick:()=>{X(),c?.(),G(p.commissionPct)},children:"Restaurar comissão oficial ("+p.commissionPct+"%)"})}),e.jsx("span",{className:"aff-sim-commission-max-tag",children:"Simule até 50%"})]})]}),e.jsx(B,{label:"3. Vendas por dia",value:`${P} un`,htmlFor:`${a}-volume`,className:"aff-sim-col",children:e.jsx(ve,{id:`${a}-volume`,min:1,max:100,value:P,onChange:$(j),"aria-label":"Vendas por dia"})}),e.jsx(B,{label:"4. Dias ativos no mês",value:`${E} ${E===1?"dia":"dias"}`,htmlFor:`${a}-ciclo`,className:"aff-sim-col",children:e.jsx(ve,{id:`${a}-ciclo`,min:1,max:31,value:E,onChange:$(O),"aria-label":"Dias ativos no mês"})}),e.jsx("div",{className:"aff-sim-col--full",children:e.jsxs(B,{label:"5. Projeção em meses",value:`${t} ${t===1?"mês":"meses"}`,htmlFor:`${a}-meses`,children:[e.jsx(ve,{id:`${a}-meses`,accent:"premium",min:1,max:12,value:t,onChange:$(q),"aria-label":"Projeção em meses"}),e.jsx(Ma,{label:"Atalhos de projeção",values:us,active:t,onSelect:g=>{X(),c?.(),q(g)},format:g=>g===12?"1 ano":`${g}m`})]})}),r&&e.jsx("div",{className:"aff-sim-col--full",children:e.jsx(y,{icon:e.jsx(k,{className:"fas fa-circle-info"}),children:r})})]}),e.jsx(Ia,{className:`aff-readout-compact ${_?"is-simulando":""}`,primary:e.jsx(Ve,{icon:e.jsx(k,{className:"fas fa-sack-dollar"}),label:t>1?"Estimativa em "+String(t)+" meses":"Estimativa mensal",value:f(V),note:`${f(T)} por venda (${o}%)`,children:t>1&&e.jsx(Da,{unit:"/ mês",children:f(I)})}),secondary:e.jsx(Ve,{icon:e.jsx(k,{className:"fas fa-crown"}),label:"Mantendo esse ritmo por um ano",value:f(I*12),unit:"/ ano",tone:"premium",size:"sm",note:"Projeção ilustrativa, sem garantia de renda."})})]}):e.jsx("p",{role:"status",children:"Política de afiliados indisponível. Tente novamente em instantes."})});ia.displayName="AffiliateEarningsSimulator";const gs=({user:a,products:r,cart:c,showNotify:R})=>{const[b,p]=n.useState(null),[m,o]=n.useState(null),[G,P]=n.useState(!0),[j,E]=n.useState(!1),[O,t]=n.useState(""),[q,_]=n.useState(null),C=n.useRef(!0),u=n.useRef(0),M=n.useRef(!1),X=n.useRef(null),$=n.useMemo(()=>Ce(r.map(i=>i.code),r).available,[r]),U=`${a.uid||""}:${a.email}:${a.codigoAfiliado}`,S=n.useRef(a);S.current=a;const w=n.useCallback(async()=>{const i=++u.current;P(!0),t("");try{const d=await fe.list(S.current);if(!C.current||i!==u.current)return;p(d),o(null),_(null)}catch(d){C.current&&i===u.current&&t(d instanceof Error?d.message:"Não foi possível carregar suas seleções.")}finally{C.current&&i===u.current&&P(!1)}},[U]);n.useEffect(()=>(C.current=!0,w(),()=>{C.current=!1,++u.current}),[w,U]),n.useEffect(()=>{m&&X.current?.querySelector("input")?.focus()},[m?.id]);const T=async(i,d)=>{if(!b||M.current)return;M.current=!0,E(!0),t("");const l=u.current;try{const x=await fe.save(a,b.revision,i);if(!C.current||l!==u.current)return;p(x),o(null),_(null),R(d,"sucesso")}catch(x){C.current&&l===u.current&&t(x instanceof Error?x.message:"Não foi possível salvar. Seu rascunho foi preservado.")}finally{C.current&&l===u.current&&(M.current=!1,E(!1))}},I=i=>{t(""),_(null),o(i?{...i,codes:[...i.codes]}:{id:crypto.randomUUID(),title:"",description:"",codes:[],updatedAt:new Date().toISOString()})},V=i=>{o(d=>{if(!d)return d;const l=d.codes.includes(i);return!l&&d.codes.length>=je?d:{...d,codes:l?d.codes.filter(x=>x!==i):[...d.codes,i]}})},g=()=>{if(!m)return;const i=Ce(c.map(d=>d.code),r).available.map(d=>d.code);o({...m,codes:[...new Set([...m.codes,...i])].slice(0,je)})},L=async i=>{try{const d=await ze(ja(i.id));C.current&&R(d?"Link da seleção copiado.":"Não foi possível copiar o link.",d?"sucesso":"erro")}catch{C.current&&R("Não foi possível copiar o link.","erro")}},A=m?Ce(m.codes,r):null;return e.jsxs(K,{title:"Suas seleções",icon:e.jsx(sa,{size:16}),sub:"Reúna os produtos que você indica e compartilhe uma seleção com seu código. Os preços e benefícios acompanham o catálogo atual.",divided:!0,children:[O&&e.jsxs("div",{className:"sk-stack-sm",role:"alert",children:[e.jsx(y,{tone:"danger",children:O}),e.jsx(v,{variant:"secondary",size:"sm",disabled:j||G,onClick:()=>void w(),children:"Recarregar seleções"})]}),G?e.jsx(Ne,{label:"Carregando suas seleções…"}):b&&e.jsxs("div",{className:"sk-stack",children:[e.jsxs("div",{className:"sk-row",children:[e.jsxs("span",{className:"sk-text-sm",children:[b.selections.length," ","de"," ",Qe," ","seleções"]}),e.jsx(v,{size:"sm",variant:"secondary",icon:e.jsx(Wa,{size:14}),disabled:j||b.selections.length>=Qe,onClick:()=>I(),children:"Criar seleção"})]}),!b.selections.length&&!m&&e.jsx(Re,{title:"Monte sua primeira seleção",description:"Escolha sistemas para um perfil de uso ou importe os produtos do seu carrinho."}),b.selections.map(i=>e.jsxs("article",{className:"sk-surface sk-surface--pad sk-stack-sm",children:[e.jsx("h3",{className:"sk-text-lg",children:i.title}),i.description&&e.jsx("p",{className:"sk-text-sm",children:i.description}),e.jsxs("p",{className:"sk-text-sm",children:[i.codes.length," ",i.codes.length===1?"produto":"produtos"]}),e.jsxs("div",{className:"sk-row",children:[e.jsx(v,{size:"sm",variant:"secondary",disabled:j,"aria-label":"Editar "+String(i.title),onClick:()=>I(i),children:"Editar"}),e.jsx(v,{size:"sm",variant:"ghost",icon:e.jsx(na,{size:14}),disabled:j,"aria-label":"Copiar link de "+String(i.title),onClick:()=>void L(i),children:"Copiar link"}),e.jsx(v,{size:"sm",variant:"danger",icon:e.jsx(Ha,{size:14}),disabled:j,"aria-label":"Excluir "+String(i.title),onClick:()=>_(i.id),children:"Excluir"})]}),q===i.id&&e.jsxs("div",{className:"sk-stack-sm",children:[e.jsx(y,{tone:"warn",children:"Excluir esta seleção desativa o link compartilhado. Seu histórico de comissões permanece salvo."}),e.jsxs("div",{className:"sk-row",children:[e.jsx(v,{size:"sm",variant:"danger",disabled:j,onClick:()=>void T(b.selections.filter(d=>d.id!==i.id),"Seleção excluída."),children:"Confirmar exclusão"}),e.jsx(v,{size:"sm",variant:"ghost",disabled:j,onClick:()=>_(null),children:"Manter seleção"})]})]})]},i.id)),m&&e.jsxs("form",{ref:X,className:"sk-surface sk-surface--pad sk-stack",onSubmit:i=>{i.preventDefault();const d=m.title.trim();if(!d||!m.codes.length){t("Informe um título e escolha pelo menos um produto.");return}const l={...m,title:d,description:m.description.trim(),updatedAt:new Date().toISOString()},x=b.selections.some(F=>F.id===l.id);T(x?b.selections.map(F=>F.id===l.id?l:F):[...b.selections,l],"Seleção salva. Seu link já pode ser compartilhado.")},children:[e.jsx(B,{label:"Título da seleção",htmlFor:"creator-selection-title",hint:`${m.title.length}/60 caracteres`,children:e.jsx(te,{id:"creator-selection-title",value:m.title,maxLength:60,disabled:j,required:!0,onChange:i=>o({...m,title:i.target.value}),placeholder:"Ex.: Sistemas para edição de vídeo"})}),e.jsx(B,{label:"Descrição da seleção",htmlFor:"creator-selection-description",hint:"Opcional. Explique para quem você indica estes produtos.",children:e.jsx(Oa,{id:"creator-selection-description",value:m.description,maxLength:240,disabled:j,rows:3,onChange:i=>o({...m,description:i.target.value})})}),e.jsxs("div",{className:"sk-row",children:[e.jsxs("strong",{children:[m.codes.length,"/",je," ","produtos"]}),e.jsx(v,{size:"sm",variant:"secondary",disabled:j||!c.length,onClick:g,children:"Importar carrinho"})]}),e.jsxs("fieldset",{disabled:j,className:"sk-stack-sm",children:[e.jsx("legend",{className:"sk-label",children:"Produtos disponíveis"}),$.map(i=>e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"checkbox",checked:m.codes.includes(i.code),disabled:!m.codes.includes(i.code)&&m.codes.length>=je,onChange:()=>V(i.code)}),e.jsxs("span",{children:[i.nome," ",e.jsxs("small",{className:"sk-fg-muted",children:["(",i.code,")"]})]})]},i.code))]}),!$.length&&e.jsx(y,{tone:"info",children:"Aguarde o catálogo carregar para escolher produtos disponíveis."}),!!A?.unavailable.length&&e.jsxs("div",{className:"sk-stack-sm",children:[e.jsx(y,{tone:"warn",children:"Alguns produtos salvos estão indisponíveis. O link continuará informando isso ao visitante."}),A.unavailable.map(i=>e.jsxs("div",{className:"sk-row",children:[e.jsxs("span",{children:[i," ","— indisponível"]}),e.jsx(v,{size:"sm",variant:"ghost",disabled:j,"aria-label":"Remover "+String(i),onClick:()=>V(i),children:"Remover"})]},i))]}),e.jsxs("div",{className:"sk-row",children:[e.jsx(v,{type:"submit",icon:e.jsx(Ya,{size:14}),disabled:j||!m.title.trim()||!m.codes.length,children:j?"Salvando seleção…":"Salvar seleção"}),e.jsx(v,{variant:"ghost",disabled:j,onClick:()=>{o(null),t("")},children:"Cancelar edição"})]})]})]})]})},vs=a=>!a.user?.aceiteComissao||!a.user.codigoAfiliado?null:e.jsx(gs,{...a,user:a.user},`${a.user.uid||""}:${a.user.email}:${a.user.codigoAfiliado}`),Ms=({selectionId:a,products:r,cart:c,user:R,onApply:b,onClose:p})=>{const m=we(),[o,G]=n.useState(null),[P,j]=n.useState(!0),[E,O]=n.useState(""),[t,q]=n.useState(!1),[_,C]=n.useState("merge"),[u,M]=n.useState(!1),[X,$]=n.useState(0),U=`${a}:${R?.uid||R?.email||"guest"}`,S=n.useRef(0),w=n.useRef(!0),T=n.useRef(!1),I=n.useCallback(()=>{T.current||p()},[p]),[V,g]=n.useState(()=>me.getItem(re.appliedCoupon)||"");n.useEffect(()=>{const l=()=>{g(me.getItem(re.appliedCoupon)||""),M(!1)};return window.addEventListener("storage",l),window.addEventListener(Ye,l),()=>{window.removeEventListener("storage",l),window.removeEventListener(Ye,l)}},[]);const L=!!o&&!!V&&V.toUpperCase()!==o.affiliateCode.toUpperCase(),A=fe.isPixPending(),i=n.useMemo(()=>Ce(o?.codes||[],r),[o,r]);n.useEffect(()=>{const l=x=>{const F=x.detail?.changedResources;!T.current&&F?.includes("creatorSelections")&&$(ae=>ae+1)};return window.addEventListener("skull:manifest-atualizado",l),()=>window.removeEventListener("skull:manifest-atualizado",l)},[]),n.useEffect(()=>{w.current=!0;const l=++S.current;return T.current=!1,q(!1),j(!0),G(null),O(""),M(!1),C("merge"),fe.getPublic(a).then(x=>{w.current&&l===S.current&&G(x)}).catch(x=>{w.current&&l===S.current&&O(x instanceof Error?x.message:"Não foi possível abrir esta seleção.")}).finally(()=>{w.current&&l===S.current&&j(!1)}),()=>{w.current=!1,++S.current}},[U,X,a]);const d=async()=>{const l=me.getItem(re.appliedCoupon)||"";if(l!==V){g(l),M(!1);return}if(!o||T.current||!m||!i.available.length||L&&!u)return;if(fe.isPixPending()){O("Conclua ou cancele o pagamento pendente antes de usar uma seleção.");return}T.current=!0,q(!0),O("");const x=S.current;try{await b(o,_),w.current&&x===S.current&&p()}catch(F){w.current&&x===S.current&&O(F instanceof Error?F.message:"Não foi possível aplicar a seleção. Tente novamente.")}finally{w.current&&x===S.current&&(T.current=!1,q(!1))}};return e.jsx(Ba,{isOpen:!0,onClose:I,disableBackdropClick:t,ariaLabel:"Seleção do criador",children:P?e.jsx(Ne,{label:"Carregando seleção…"}):o?e.jsxs("div",{className:"sk-stack",children:[e.jsx(K,{title:o.title,icon:e.jsx(sa,{size:16}),sub:"Uma seleção de "+String(o.creatorName),divided:!0,children:e.jsxs("div",{className:"sk-stack-sm",children:[o.description&&e.jsx("p",{children:o.description}),e.jsxs(ee,{tone:"accent",children:["Código:"," ",o.affiliateCode]}),e.jsx(y,{tone:"info",icon:e.jsx(aa,{size:14}),children:m?"Desconto vigente: "+String(m.buyerDiscountPct)+"%. O carrinho preserva o melhor preço VIP sem acumular benefícios.":"A política de descontos está indisponível. Aguarde para usar esta seleção."})]})}),e.jsx("div",{className:"sk-stack-sm","aria-label":"Produtos da seleção",children:i.available.map(l=>e.jsxs("article",{className:"sk-surface sk-surface--pad",children:[e.jsx("h3",{className:"sk-text-lg",children:l.nome}),e.jsxs("p",{className:"sk-text-sm",children:[l.code," · ",f(va.cartItem(l).preco)]})]},l.code))}),!!i.unavailable.length&&e.jsxs(y,{tone:"warn",children:["Produtos indisponíveis:"," ",i.unavailable.join(", "),". Eles não serão acrescentados ao carrinho."]}),e.jsx(y,{tone:"info",children:"Abrir este link não altera seu carrinho. Ao confirmar, os produtos disponíveis e o código do criador serão aplicados. Preços e desconto serão conferidos novamente na compra."}),!!c.length&&e.jsxs("fieldset",{className:"sk-stack-sm",disabled:t,children:[e.jsx("legend",{className:"sk-label",children:"Como usar esta seleção"}),e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"radio",name:"creator-selection-mode",checked:_==="merge",onChange:()=>C("merge")}),"Adicionar ao meu carrinho"]}),e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"radio",name:"creator-selection-mode",checked:_==="replace",onChange:()=>C("replace")}),"Substituir meu carrinho"]}),_==="replace"&&e.jsxs(y,{tone:"warn",children:["Os"," ",c.length," ","produtos do carrinho atual serão substituídos pelos produtos disponíveis desta seleção."]})]}),L&&e.jsxs("div",{className:"sk-stack-sm",children:[e.jsxs(y,{tone:"warn",children:["Seu carrinho já usa o código"," ",V,". Esta seleção usa"," ",o.affiliateCode," ","e a indicação passará a pertencer a"," ",o.creatorName,"."]}),e.jsxs("label",{className:"sk-row",children:[e.jsx("input",{type:"checkbox",checked:u,disabled:t,onChange:l=>M(l.target.checked)}),"Aceito substituir o código aplicado"]})]}),A&&e.jsx(y,{tone:"warn",children:"Conclua ou cancele o pagamento pendente antes de usar uma seleção."}),E&&e.jsx("div",{role:"alert",children:e.jsx(y,{tone:"danger",children:E})}),e.jsxs("div",{className:"sk-row",children:[e.jsx(v,{onClick:()=>void d(),disabled:t||A||!m||!i.available.length||L&&!u,children:t?"Aplicando seleção…":"Usar seleção e desconto"}),e.jsx(v,{variant:"ghost",disabled:t,onClick:p,children:"Continuar na loja"})]})]}):e.jsxs("div",{className:"sk-stack",children:[e.jsx("div",{role:"alert",children:e.jsx(y,{tone:"danger",children:E||"Esta seleção não está mais disponível."})}),e.jsx(v,{variant:"secondary",onClick:()=>$(l=>l+1),children:"Tentar novamente"}),e.jsx(v,{variant:"ghost",onClick:p,children:"Continuar na loja"})]})})},oa=n.memo(({question:a,answer:r})=>{const[c,R]=n.useState(!1);return e.jsxs("div",{className:`aff-faq-item ${c?"open":""}`,children:[e.jsxs("button",{type:"button",className:"aff-faq-trigger",onClick:()=>R(b=>!b),"aria-expanded":c,children:[e.jsx("span",{className:"aff-faq-question",children:a}),e.jsx(k,{className:`fas fa-chevron-down aff-faq-chevron ${c?"open":""}`})]}),e.jsx("div",{className:`aff-faq-body ${c?"open":""}`,children:e.jsx("p",{className:"aff-faq-answer",dangerouslySetInnerHTML:{__html:r}})})]})});oa.displayName="AffiliateFAQItem";const qe=n.memo(()=>{const a=we(),r=n.useMemo(()=>[{q:"Como funciona o programa de afiliados?",a:"Você compartilha seu código exclusivo. O cliente ganha desconto no carrinho e você recebe comissão a cada pedido confirmado."},{q:"Quanto eu ganho e qual o desconto do cliente?",a:a?`Você recebe <strong>${a.commissionPct}%</strong> de comissão e seu cliente ganha <strong>${a.buyerDiscountPct}%</strong> de desconto sobre o total pago.`:"A comissão e o desconto incidem sobre o total pago pelos produtos no carrinho, conforme a política vigente."},{q:"Quando e como recebo o pagamento?",a:"Pagamentos realizados <strong>todo dia 1º de cada mês</strong> via PIX direto na sua chave cadastrada, sem valor mínimo de saque."},{q:"Como a indicação é validada no carrinho?",a:"O desconto e a comissão são registrados quando o cliente digita seu código no carrinho e clica em <strong>Aplicar</strong>."},{q:"Qual a diferença entre Saldo Pendente e Saldo Liberado?",a:"<strong>Pendente:</strong> período de segurança antifraude pós-compra. <strong>Liberado:</strong> transação confirmada e pronta para o próximo PIX do dia 1º."},{q:"O código acumula com descontos do Clube VIP?",a:"Não acumula. O carrinho aplica automaticamente a opção mais vantajosa para o cliente. Sua comissão incide sobre o total pago."},{q:"Existe meta obrigatória ou exclusividade?",a:"Não. Sem metas mínimas, sem exclusividade e sem taxas. Divulgue no seu próprio ritmo."}],[a]);return e.jsx("div",{className:"aff-faq-list",children:r.map(c=>e.jsx(oa,{question:c.q,answer:c.a},c.q))})});qe.displayName="AffiliateProgramGuideBody";const js=n.memo(({tone:a="accent",framed:r=!1,className:c=""})=>e.jsx(K,{tone:a,framed:r,className:c,icon:e.jsx(Ee,{size:16}),title:"Como funciona o programa",badge:e.jsx(ee,{tone:"neutral",children:"Regras oficiais"}),sub:"Tudo o que vale para a sua comissão está nesta tela — não há regra escondida em outro lugar.",divided:!0,children:e.jsx(qe,{})}));js.displayName="AffiliateProgramGuide";const D=({label:a,value:r,icon:c,trend:R})=>e.jsx($a,{label:R?String(a)+" · "+String(R):a,value:r,icon:e.jsx(c,{size:16})}),ks=({user:a,isAfiliado:r,className:c=""})=>{const b=ie.useMemo(()=>a?ka.getAccessLevel(a):null,[a])?.borderColor||ba("--sk-palette-teal-10b981");return e.jsxs("header",{className:`aff-user-hero ${c}`,"aria-label":"Apresentação do colaborador",children:[e.jsxs("div",{className:"aff-user-hero__main",children:[e.jsxs("div",{className:"aff-user-hero__avatar-wrap",children:[e.jsx("div",{className:`aff-user-hero__avatar ${a?.avatarUrl?"":"bg-gradient-to-br from-primary/80 to-accent/80"}`,style:{border:`2.5px solid ${b}`},children:a?.avatarUrl?e.jsx("img",{decoding:"async",src:Ca(a.avatarUrl),alt:a.nome||"Avatar do usuário",className:"w-full h-full object-cover"}):a?.nome?e.jsx("span",{className:"font-semibold sk-fg-accent text-2xl",children:a.nome.charAt(0).toUpperCase()}):e.jsx(Qa,{size:34,className:"sk-fg-accent"})}),r&&e.jsx("span",{className:"aff-user-hero__check-badge","aria-hidden":!0,children:e.jsx(Ee,{size:14,className:"text-white"})})]}),e.jsxs("div",{className:"aff-user-hero__content",children:[e.jsx("div",{className:"aff-user-hero__badge-row",children:r?e.jsx(ee,{tone:"accent",icon:e.jsx(Ee,{size:12}),children:"Colaborador ativo"}):e.jsxs("span",{className:"sk-eyebrow sk-eyebrow--accent",children:[e.jsx(k,{className:"fas fa-handshake"}),"Programa Oficial de Indicação"]})}),r?e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"aff-user-hero__title",children:"Painel do Colaborador"}),e.jsx("p",{className:"aff-user-hero__desc",children:"Acompanhe seus saldos, comissões, seleções recomendadas e repasses mensais via PIX."})]}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"aff-user-hero__title",children:"Ganhe com suas indicações"}),e.jsx("p",{className:"aff-user-hero__desc",children:"Receba suas comissões todo dia 1º de cada mês por todas as vendas realizadas com seu código exclusivo."})]})]})]}),e.jsxs("ul",{className:"home-benefits aff-benefits","aria-label":"Pilares do programa",children:[e.jsxs("li",{className:"home-benefit",children:[e.jsx("span",{className:"home-benefit__icon","aria-hidden":"true",children:e.jsx(k,{className:"fas fa-bolt"})}),e.jsxs("div",{className:"home-benefit__body",children:[e.jsx("strong",{children:"Repasse PIX todo dia 1º"}),e.jsx("span",{children:"Pagamento direto na sua chave cadastrada sem valor mínimo"})]})]}),e.jsxs("li",{className:"home-benefit",children:[e.jsx("span",{className:"home-benefit__icon","aria-hidden":"true",children:e.jsx(k,{className:"fas fa-tags"})}),e.jsxs("div",{className:"home-benefit__body",children:[e.jsx("strong",{children:"Duplo benefício no carrinho"}),e.jsx("span",{children:"Seu indicado recebe desconto imediato e você garante sua comissão"})]})]}),e.jsxs("li",{className:"home-benefit",children:[e.jsx("span",{className:"home-benefit__icon","aria-hidden":"true",children:e.jsx(k,{className:"fas fa-shield-alt"})}),e.jsxs("div",{className:"home-benefit__body",children:[e.jsx("strong",{children:"Sem metas ou exclusividade"}),e.jsx("span",{children:"Divulgue no seu ritmo com auditoria em tempo real de cada pedido"})]})]})]})]})},ne=a=>Pa(a,"-"),bs=({user:a,showNotify:r,onUpdateUser:c,products:R=[],cart:b=[]})=>{const{affiliateEnabled:p}=Na(),m=we();Be("commissions",fs),Be("sections",qa);const[o,G]=n.useState([]),[P,j]=n.useState({}),[E,O]=n.useState([]),t=ie.useRef(!0),q=ie.useRef(0),_=ie.useRef(!1),C=ie.useRef(!1),u=ie.useRef(!1),[M,X]=n.useState(!1),$=a?.afiliacaoCanceladaPor==="admin"&&!a.aceiteComissao,[U,S]=n.useState(!1);n.useEffect(()=>{t.current=!0;for(const s of[re.affiliateCommissions,re.affiliateResumo,re.affiliateCode])me.removeItem(s);return()=>{t.current=!1,++q.current}},[]);const[w,T]=n.useState(!o.length),[I,V]=n.useState(!1),[g,L]=n.useState(!1),[A,i]=n.useState(!1),[d,l]=n.useState(!1),[x,F]=n.useState(!1),[ae,J]=n.useState(a?.email||""),ue=n.useMemo(()=>Xa(a?.telefone),[a?.telefone]),[ye,ta]=n.useState(ue.ddi),[le,ra]=n.useState(ue.numero),[Me,la]=n.useState(""),[Ie,ca]=n.useState(""),[pe,da]=n.useState(""),[he,De]=n.useState(!1),[Oe,$e]=n.useState(wa()),[ma,Se]=n.useState(!1);n.useEffect(()=>{J(a?.email||"")},[a?.email]);const[W,xe]=n.useState(a?.codigoAfiliado||null),[Z,Te]=n.useState(!1);n.useEffect(()=>{p&&a?.aceiteComissao&&!W&&!A&&Le()},[a?.aceiteComissao,W,p]);const _e=n.useCallback(async(s=!0)=>{if(!a?.email)return;const h=++q.current;S(!1),s&&o.length===0&&T(!0),s||F(!0);try{se.getRanking().then(Y=>{t.current&&h===q.current&&Y.sucesso&&Y.ranking&&O(Y.ranking)}).catch(()=>{});const z=await se.getMyCommissions(a.email);if(!t.current||h!==q.current)return;if(!z.sucesso)throw new Error("Falha no carregamento");z.sucesso&&(G(z.comissoes||ya),j(z.resumo||{}),z.codigoAfiliado&&!W&&(xe(z.codigoAfiliado),c({codigoAfiliado:z.codigoAfiliado})))}catch{t.current&&h===q.current&&S(!0)}finally{t.current&&h===q.current&&(T(!1),F(!1))}},[a,a?.email,W,o.length]);n.useEffect(()=>{a?.email&&(a?.aceiteComissao||a?.codigoAfiliado||he||!p)&&_e()},[a?.aceiteComissao,a?.email,he,p]);const Le=n.useCallback(async()=>{if(!(!a||C.current||!(a.aceiteComissao||he))){C.current=!0,i(!0);try{const s=await se.generateCode(a.email);if(!t.current)return;s.sucesso&&s.codigoAfiliado&&(xe(s.codigoAfiliado),c({codigoAfiliado:s.codigoAfiliado}))}catch{}finally{t.current&&(C.current=!1,i(!1))}}},[a,a?.email,A,c]),fa=async()=>{if(!(_.current||!M||$)){if(!a){window.dispatchEvent(new CustomEvent("skull:require-login"));return}if(!a.email.trim()||!le.trim()||!pe.trim()){r("Preencha os campos obrigatórios básicos (E-mail, WhatsApp e PIX)!","erro");return}if(!Ra(le,ye)){r("Informe um WhatsApp válido.","erro");return}_.current=!0,V(!0);try{const s=Ea(ye,le),h={emailUsuario:a.email,whatsapp:s,facebook:Me,instagram:Ie,chavePix:pe},z=await se.acceptTerms(h);if(!t.current)return;z.sucesso?(r("Bem-vindo ao programa de afiliados!","sucesso"),De(!0),c({aceiteComissao:!0,dataAceiteComissao:new Date().toISOString(),telefone:s}),z.codigoAfiliado&&(xe(z.codigoAfiliado),c({codigoAfiliado:z.codigoAfiliado}))):r(z.mensagem||"Erro ao aceitar termos","erro")}catch{t.current&&r("Não foi possível ativar seu perfil. Tente novamente.","erro")}finally{t.current&&(_.current=!1,V(!1))}}},ua=async()=>{if(!(!a||u.current)){u.current=!0,L(!0);try{const s=await se.cancelMembership(a.email,"user","Cancelado pelo próprio usuário");if(!t.current)return;if(s.sucesso){const h=s.dataCancelamentoAfiliacao||new Date().toISOString();De(!1),xe(null),Se(!1),me.setItem("dataCancelamentoAfiliacao",h),r("Afiliação cancelada. Seu histórico continua disponível para auditoria.","sucesso"),c({aceiteComissao:!1,dataCancelamentoAfiliacao:h,afiliacaoCanceladaPor:"user",motivoCancelamentoAfiliacao:"Cancelado pelo próprio usuário"})}else r(s.mensagem||"Erro ao cancelar afiliação","erro")}catch{t.current&&r("Erro de conexão ao cancelar afiliação","erro")}finally{t.current&&(u.current=!1,L(!1))}}},pa=async()=>{if(!W)return;const s=await ze(W);if(t.current){if(!s){r("Não foi possível copiar o código.","erro");return}l(!0),r("Código copiado!","sucesso"),setTimeout(()=>{t.current&&l(!1)},2e3)}},ha=async()=>{if(!W)return;const s=`🔥 Use meu cupom *${W}* para ganhar desconto na Skull Legion!

Digite o código no carrinho ao finalizar sua compra.`;if(za())try{await navigator.share({title:"Skull Legion – Cupom de Desconto",text:s});return}catch{}const h=await ze(s);r(h?"Mensagem copiada para compartilhar!":"Não foi possível copiar a mensagem.",h?"sucesso":"erro")},N=n.useMemo(()=>{if(P.totalGerado!==void 0)return{total:P.totalGerado||0,pendente:P.totalPendente||0,liberado:P.totalLiberado||0,pago:P.totalPago||0,count:o.length};const h=se.summarizeCommissions(o);return{total:h.totalGerado,pendente:h.totalPendente,liberado:h.totalLiberado,pago:h.totalPago,count:o.length}},[o,P]),Fe=n.useMemo(()=>{const s=[],h=new Date().getFullYear();let Y=new Date().getMonth()+1,Ge=h;for(let Q=0;Q<12;Q++)s.unshift(`${String(Y).padStart(2,"0")}/${Ge}`),Y--,Y===0&&(Y=12,Ge--);const ce=new Map;return o.forEach(Q=>{if(Q.status==="CANCELADO")return;const Xe=new Date(Q.dataGeracao||Date.now()),ge=String(Xe.getMonth()+1).padStart(2,"0")+"/"+Xe.getFullYear();ce.has(ge)||ce.set(ge,{mesAno:ge,totalReal:0}),ce.get(ge).totalReal+=Number(Q.valorComissao)||0}),s.map(Q=>ce.has(Q)?ce.get(Q):{mesAno:Q,totalReal:0})},[o]),H=!!(a?.aceiteComissao||he);return p?e.jsx("div",{className:"store-interface affiliate-page w-full flex flex-col bg-light dark:bg-dark",children:e.jsx("div",{className:"sk-shell flex-1 pb-6 pt-2",children:e.jsxs("div",{className:"home-flow",children:[e.jsx(ks,{user:a,isAfiliado:H}),e.jsxs("section",{className:"aff-section","aria-label":"Código e resumo de comissões",children:[e.jsxs("header",{className:"sk-section__head",children:[e.jsxs("span",{className:"sk-eyebrow sk-eyebrow--accent",children:[e.jsx(k,{className:"fas fa-ticket-alt"}),H?"Gestão e Repasses":"Comece Agora"]}),e.jsx("h2",{className:"sk-title",children:H?"Seu Código e Saldos":"Seu Código de Indicação"}),e.jsx("p",{className:"sk-lead",children:H?"Compartilhe seu cupom exclusivo e acompanhe seus saldos acumulados e repasses via PIX.":"Ative seu perfil gratuitamente para liberar seu cupom exclusivo e receber comissões via PIX."})]}),e.jsxs("div",{className:"aff-duo",children:[e.jsx(K,{icon:e.jsx(aa,{size:16}),title:"Seu código exclusivo",sub:"Válido para produtos pagos na loja.",divided:!0,footer:e.jsx(y,{tone:"info",icon:e.jsx(k,{className:"fas fa-keyboard"}),children:"O desconto e a comissão são validados quando o cliente digita o código no carrinho e clica em aplicar."}),children:e.jsx("div",{className:"sk-stack-sm",children:W?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sk-input sk-input--value aff-code",children:W}),e.jsx(v,{block:!0,variant:d?"primary":"secondary",onClick:pa,icon:d?e.jsx(oe,{size:16}):e.jsx(na,{size:16}),children:d?"Código copiado":"Copiar código"}),e.jsx(v,{block:!0,variant:"ghost",onClick:ha,icon:e.jsx(Ka,{size:14}),children:"Compartilhar com clientes"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sk-input sk-input--value aff-code aff-code--ghost",children:A?"Gerando…":"SKL-XXXXXX"}),!A&&(a?e.jsx(v,{block:!0,onClick:Le,icon:e.jsx(Ja,{size:14}),children:"Gerar meu código"}):e.jsx(v,{block:!0,onClick:()=>window.dispatchEvent(new CustomEvent("skull:require-login")),icon:e.jsx(Pe,{size:14}),children:"Entrar para gerar código"}))]})})}),H?e.jsxs("div",{className:"aff-summary-stack",children:[e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(D,{label:"Saldo Liberado",value:f(N.liberado),icon:ke,trend:"no próximo repasse PIX"}),e.jsx(D,{label:"Saldo Pendente",value:f(N.pendente),icon:be,trend:"aguardando liberação"}),e.jsx(D,{label:"Já Pago",value:f(N.pago),icon:oe,trend:"transferido via PIX"}),e.jsx(D,{label:"Total Gerado",value:f(N.total),icon:Ke,trend:`${N.count} ${N.count===1?"venda":"vendas"}`})]}),e.jsxs("div",{className:"sk-row aff-toolbar",children:[e.jsxs("button",{type:"button",className:"aff-metrics-drawer-toggle",onClick:()=>Te(s=>!s),"aria-expanded":Z,children:[e.jsx(k,{className:"fas fa-chart-line"}),e.jsx("span",{children:Z?"Ocultar métricas e gráficos":"Ver gráficos e métricas"}),e.jsx(k,{className:`fas fa-chevron-down aff-metrics-chevron ${Z?"is-open":""}`})]}),e.jsx(v,{variant:"ghost",size:"sm",onClick:()=>_e(!1),disabled:x,icon:e.jsx(Za,{size:14,className:x?"animate-spin":""}),children:"Atualizar"}),e.jsx(v,{variant:"danger",size:"sm",onClick:()=>Se(!0),disabled:g,icon:g?e.jsx(Je,{size:14,className:"animate-spin"}):e.jsx(es,{size:14}),children:"Cancelar afiliação"})]})]}):e.jsx("div",{className:"aff-summary-stack",children:e.jsx(K,{icon:e.jsx(ke,{size:16}),title:"Repasses mensais via PIX",sub:"Transparência total em cada indicação confirmada.",divided:!0,children:e.jsxs("div",{className:"sk-stack-sm",children:[e.jsx(y,{tone:"info",icon:e.jsx(k,{className:"fas fa-circle-info"}),children:"Comissões de "+String(m?.commissionPct||10)+"% pagas todo dia 1º de cada mês via PIX na sua chave cadastrada."}),e.jsx("div",{className:"sk-row aff-toolbar",children:e.jsxs("button",{type:"button",className:"aff-metrics-drawer-toggle",onClick:()=>Te(s=>!s),"aria-expanded":Z,children:[e.jsx(k,{className:"fas fa-chart-line"}),e.jsx("span",{children:Z?"Ocultar métricas e gráficos":"Ver gráficos e métricas"}),e.jsx(k,{className:`fas fa-chevron-down aff-metrics-chevron ${Z?"is-open":""}`})]})})]})})})]}),Z&&e.jsxs("div",{className:"aff-metrics-drawer",children:[!H&&e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(D,{label:"Saldo Liberado",value:f(N.liberado),icon:ke,trend:"no próximo repasse PIX"}),e.jsx(D,{label:"Saldo Pendente",value:f(N.pendente),icon:be,trend:"aguardando liberação"}),e.jsx(D,{label:"Já Pago",value:f(N.pago),icon:oe,trend:"transferido via PIX"}),e.jsx(D,{label:"Total Gerado",value:f(N.total),icon:Ke,trend:`${N.count} ${N.count===1?"venda":"vendas"}`})]}),e.jsx(K,{icon:e.jsx(k,{className:"fas fa-crosshairs"}),title:"Métricas de Vendas",sub:"Desempenho detalhado das suas indicações.",divided:!0,children:e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(D,{label:"Compradores",value:String(new Set(o.map(s=>s.emailComprador||s.idVenda)).size||N.count),icon:as,trend:"clientes únicos indicados"}),e.jsx(D,{label:"Vendas",value:String(N.count),icon:ss,trend:"pedidos confirmados"}),e.jsx(D,{label:"Ticket médio",value:f(N.count>0?o.reduce((s,h)=>s+(Number(h.valorVenda)||0),0)/N.count:0),icon:ns,trend:"por venda indicada"}),e.jsx(D,{label:"Comissão média",value:f(N.count>0?N.total/N.count:0),icon:oe,trend:"por venda confirmada"})]})}),e.jsx(K,{icon:e.jsx(k,{className:"fas fa-chart-area"}),title:"Evolução dos Ganhos",badge:e.jsx(ee,{tone:"neutral",children:"Últimos 12 meses"}),divided:!0,children:Fe.some(s=>s.totalReal>0)?e.jsx(os,{width:"100%",height:220,children:e.jsxs(ts,{data:Fe,margin:Ta,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"commissionsArea",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:de.accent,stopOpacity:.8}),e.jsx("stop",{offset:"95%",stopColor:de.accent,stopOpacity:0})]})}),e.jsx(rs,{dataKey:"mesAno",tickFormatter:_a,...Ue,dy:10}),e.jsx(ls,{tickFormatter:Fa,...Ue,width:La}),e.jsx(cs,{strokeDasharray:"3 3",vertical:!1,stroke:de.grid}),e.jsx(ds,{cursor:{fill:de.cursor},content:({active:s,payload:h,label:z})=>s&&h?.length?e.jsx(Ga,{label:Aa(String(z)),value:f(h[0].value)}):null}),e.jsx(ms,{type:"monotone",dataKey:"totalReal",stroke:de.accent,strokeWidth:3,fillOpacity:1,fill:"url(#commissionsArea)",animationDuration:1500})]})}):e.jsx(Re,{icon:"fa-chart-area",title:"Sem histórico no momento",description:"As vendas confirmadas com o seu código alimentarão este gráfico."})}),E.length>0&&e.jsx(K,{icon:e.jsx(k,{className:"fas fa-trophy"}),title:"Ranking da Semana",badge:e.jsx(ee,{tone:"neutral",children:"Volume de comissão"}),divided:!0,children:e.jsx("ol",{className:"sk-list",children:E.slice(0,10).map((s,h)=>{const z=s.email.toLowerCase()===(a?.email||"").toLowerCase(),Y=["🥇","🥈","🥉"];return e.jsxs("li",{className:"sk-list-item",children:[e.jsx("span",{className:"sk-card__icon","aria-hidden":!0,children:Y[h]||`${h+1}`}),e.jsxs("span",{className:"sk-list-item__body",children:[e.jsxs("span",{className:"sk-list-item__title",children:[s.nome||s.email.split("@")[0],z&&e.jsxs(e.Fragment,{children:[" ",e.jsx(ee,{tone:"accent",children:"Você"})]})]}),e.jsxs("span",{className:"sk-list-item__desc",children:[s.vendas," ",s.vendas===1?"venda":"vendas"]})]}),e.jsxs("span",{className:"aff-right",children:[e.jsx("span",{className:"sk-metric__value sk-metric__value--sm",children:f(s.totalComissao)}),e.jsxs("span",{className:"sk-list-item__desc",children:[f(s.totalPago)," ","pago"]})]})]},s.email)})})})]})]}),e.jsx("div",{className:"aff-calculator-section",children:e.jsxs("details",{className:"aff-projection store-guide",open:H?void 0:!0,children:[e.jsxs("summary",{children:[e.jsx(k,{className:"fas fa-calculator"}),e.jsx("span",{children:"Simulador de Ganhos — projete seu potencial de comissão mensal e anual"}),e.jsx(k,{className:"fas fa-chevron-down store-guide__chevron"})]}),e.jsx("div",{className:"store-guide__body",children:e.jsx(ia,{idPrefix:H?"comissoes-afiliado":"comissoes-preview"})})]})}),e.jsx(Ua,{isOpen:ma,closeOnConfirm:!1,busy:g,onClose:()=>{u.current||Se(!1)},onConfirm:()=>{ua()},title:"Cancelar sua afiliação?",message:e.jsxs(e.Fragment,{children:["Seu código deixa de validar novas vendas"," ",e.jsx("strong",{children:"imediatamente"}),". O histórico permanece salvo e você pode reativar quando quiser."]}),confirmText:"Cancelar afiliação",cancelText:"Continuar afiliado",isDanger:!0}),!a||!H?a?e.jsx(We,{className:"aff-section",id:"termo-compromisso","aria-label":"Ativar perfil de colaborador",children:e.jsx(He,{icon:e.jsx(Ze,{size:16}),title:"Ative seu perfil de colaborador",sub:"Preencha seus dados de repasse abaixo para receber na hora o seu código exclusivo.",open:Oe,onToggle:()=>$e(s=>!s),toggleLabel:"Expandir formulário de ativação de colaborador",children:e.jsxs("div",{className:"sk-stack",children:[$&&e.jsx(y,{tone:"danger",children:"A reativação do seu perfil depende da administração. Entre em contato com o suporte."}),e.jsxs("div",{className:"sk-split",children:[e.jsxs(B,{label:"E-mail da conta",htmlFor:"affiliate-email",children:[e.jsx(te,{id:"affiliate-email",type:"email",value:ae,readOnly:!0,disabled:!0,placeholder:"voce@exemplo.com"}),e.jsx("p",{className:"sk-field__hint",children:"A afiliação usa obrigatoriamente o e-mail verificado da sua sessão."})]}),e.jsx(B,{label:"WhatsApp",htmlFor:"affiliate-whatsapp",children:e.jsx(Va,{id:"affiliate-whatsapp",ddi:ye,value:le,onDdiChange:ta,onValueChange:ra,disabled:I,required:!0})})]}),e.jsx(B,{label:"Chave PIX para recebimento",htmlFor:"affiliate-pix",children:e.jsx(te,{id:"affiliate-pix",type:"text",disabled:I,value:pe,onChange:s=>da(s.target.value),placeholder:"E-mail, CPF, celular ou chave aleatória"})}),e.jsxs("details",{className:"aff-contacts",children:[e.jsx("summary",{children:"Contatos opcionais"}),e.jsxs("div",{className:"sk-split",children:[e.jsx(B,{label:"Facebook (opcional)",htmlFor:"affiliate-facebook",children:e.jsx(te,{id:"affiliate-facebook",type:"text",disabled:I,value:Me,onChange:s=>la(s.target.value),placeholder:"Link do perfil"})}),e.jsx(B,{label:"Instagram (opcional)",htmlFor:"affiliate-instagram",children:e.jsx(te,{id:"affiliate-instagram",type:"text",disabled:I,value:Ie,onChange:s=>ca(s.target.value),placeholder:"@seu_perfil"})})]}),e.jsx(y,{tone:"info",icon:e.jsx(k,{className:"fas fa-bullhorn"}),children:"As redes sociais são opcionais. Se precisarmos confirmar um repasse PIX, falamos com você pelo WhatsApp ou por elas."})]}),e.jsxs("label",{className:"aff-terms",children:[e.jsx("input",{type:"checkbox",checked:M,disabled:I,onChange:s=>X(s.target.checked)})," ",e.jsx("span",{children:"Li e aceito as regras do programa de comissões."})]}),e.jsx(y,{tone:"warn",icon:e.jsx(is,{size:14}),children:"Integridade é inegociável: má conduta encerra a afiliação e o acesso à plataforma."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:10},children:e.jsx(v,{size:"sm",onClick:fa,disabled:I||$||!M||!a.email.trim()||!le.trim()||!pe.trim(),icon:I?e.jsx(Je,{size:14,className:"animate-spin"}):e.jsx(Pe,{size:14}),children:I?"Ativando…":"Ativar meu perfil de colaborador"})})]})})}):e.jsx(We,{className:"aff-section",id:"termo-compromisso","aria-label":"Entrar para ativar",children:e.jsx(He,{icon:e.jsx(Ze,{size:16}),title:"Entre para ativar seu perfil",sub:"A ativação leva dois minutos e usa o e-mail verificado da sua conta. Criar conta é grátis.",open:Oe,onToggle:()=>$e(s=>!s),toggleLabel:"Expandir ativação de perfil",children:e.jsxs("div",{className:"sk-stack",children:[e.jsx(y,{tone:"info",icon:e.jsx(k,{className:"fas fa-circle-info"}),children:"Com a conta ativa, você recebe seu código exclusivo na hora e acompanha cada venda, saldo e repasse por aqui."}),e.jsx("div",{style:{display:"flex",justifyContent:"flex-end",paddingTop:8},children:e.jsx(v,{size:"sm",icon:e.jsx(Pe,{size:14}),onClick:()=>window.dispatchEvent(new CustomEvent("skull:require-login")),children:"Entrar ou criar conta grátis"})})]})})}):null,a?.aceiteComissao&&a.codigoAfiliado&&e.jsx(vs,{user:a,products:R,cart:b,showNotify:r}),H?e.jsx(K,{icon:e.jsx(be,{size:16}),title:"Histórico de comissões",badge:e.jsxs(ee,{tone:"neutral",children:[o.length," ","registros"]}),divided:!0,children:w?e.jsx(Ne,{label:"Carregando suas comissões…"}):U?e.jsx(y,{tone:"danger",children:"Não foi possível carregar suas comissões. Use Atualizar para tentar novamente."}):o.length===0?e.jsx(Re,{icon:"fa-receipt",title:"Nenhuma comissão registrada",description:"Compartilhe o seu código — cada venda confirmada aparece aqui."}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sk-table-wrap hidden md:block",children:e.jsxs("table",{className:"sk-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Venda"}),e.jsx("th",{scope:"col",children:"Situação"}),e.jsx("th",{scope:"col",children:"Datas"}),e.jsx("th",{scope:"col",className:"aff-right",children:"Sua comissão"})]})}),e.jsx("tbody",{children:o.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("div",{className:"sk-list-item__title",children:s.id}),e.jsxs("div",{className:"sk-list-item__desc",children:["Venda original:"," ",f(Number(s.valorVenda))]})]}),e.jsx("td",{children:e.jsx(Ae,{status:s.status})}),e.jsxs("td",{children:[e.jsxs("div",{className:"sk-text-xs",children:["Gerada em"," ",ne(s.dataGeracao)]}),e.jsx("div",{className:"sk-list-item__desc",children:s.status==="PAGO"&&s.detalhesPagamento?"Paga em "+String(ne(s.detalhesPagamento.dataPagamento)):"Prevista para "+String(ne(s.dataPagamentoPrevista))})]}),e.jsxs("td",{className:"aff-right",children:[e.jsx("div",{className:"sk-metric__value sk-metric__value--sm",children:f(Number(s.valorComissao))}),e.jsx("div",{className:"sk-list-item__desc",children:s.tipoComissao==="percentual"?String(s.valorAplicado)+"% do valor pago":"Valor fixo"})]})]},s.id))})]})}),e.jsx("ul",{className:"sk-list md:hidden",children:o.map(s=>e.jsx("li",{className:"sk-list-item aff-history-item",children:e.jsxs("span",{className:"sk-list-item__body",children:[e.jsxs("span",{className:"sk-row aff-spread",children:[e.jsx("span",{className:"sk-list-item__title",children:s.id}),e.jsx(Ae,{status:s.status})]}),e.jsxs("span",{className:"sk-list-item__desc",children:["Venda de ",f(Number(s.valorVenda))," · ",ne(s.dataGeracao)]}),e.jsx("span",{className:"sk-metric__value sk-metric__value--sm",children:f(Number(s.valorComissao))}),s.status==="PAGO"&&s.detalhesPagamento&&e.jsxs("span",{className:"sk-list-item__desc",children:["Recibo processado em ",ne(s.detalhesPagamento.dataPagamento)]})]})},s.id))})]})}):null,e.jsxs("section",{className:"aff-section aff-faq-section","aria-label":"Dúvidas Frequentes",children:[e.jsxs("header",{className:"sk-section__head",children:[e.jsxs("span",{className:"sk-eyebrow sk-eyebrow--accent",children:[e.jsx(k,{className:"fas fa-circle-info"}),"Regras Oficiais"]}),e.jsx("h2",{className:"sk-title aff-section-title",children:"Dúvidas Frequentes"}),e.jsx("p",{className:"sk-lead",children:"Tudo o que vale para o uso do seu código, validação no carrinho e repasse mensal via PIX."})]}),e.jsx(qe,{})]})]})})}):e.jsxs("div",{className:"store-interface affiliate-page sk-shell sk-stack-sm",children:[e.jsx("h1",{className:"sk-title",children:"Extrato de comissões"}),e.jsx("p",{children:"Novas indicações estão indisponíveis. Seus valores já adquiridos e repasses mensais via PIX permanecem preservados."}),a?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sk-stat-grid",children:[e.jsx(D,{label:"Saldo Liberado",value:f(N.liberado),icon:ke,trend:"no próximo repasse PIX"}),e.jsx(D,{label:"Saldo Pendente",value:f(N.pendente),icon:be,trend:"aguardando liberação"}),e.jsx(D,{label:"Já Pago",value:f(N.pago),icon:oe,trend:"transferido via PIX"})]}),e.jsx(v,{variant:"secondary",disabled:x||w,onClick:()=>void _e(!1),children:"Atualizar extrato"}),e.jsx("a",{className:"sk-btn sk-btn--secondary",href:`${Sa.contact.href}?subject=${encodeURIComponent("Solicitação de repasse de comissões")}`,children:"Solicitar repasse ao suporte"}),w?e.jsx(Ne,{label:"Carregando suas comissões…"}):U?e.jsx(y,{tone:"danger",children:"Não foi possível carregar seu extrato. Tente atualizar novamente."}):e.jsx("ul",{className:"sk-list",children:o.map(s=>e.jsxs("li",{className:"sk-list-item",children:[e.jsxs("span",{children:[ne(s.dataGeracao)," · ",f(Number(s.valorComissao))]}),e.jsx(Ae,{status:s.status})]},s.id))}),!w&&!U&&!o.length&&e.jsx("p",{children:"Nenhuma comissão registrada."})]}):e.jsx("p",{children:"Entre na sua conta para consultar seu extrato."})]})},Is=a=>e.jsx(bs,{...a},a.user?.uid||a.user?.email||"guest");export{ia as AffiliateEarningsSimulator,oa as AffiliateFAQItem,js as AffiliateProgramGuide,qe as AffiliateProgramGuideBody,ks as CommissionUserHero,Ms as CreatorSelectionPreview,vs as CreatorSelectionsPanel,Is as MyCommissions,D as StatCard};
