const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./StoreSyncCoordinator.B60UtDoj.js","./index.DrSIG-wE.js","./catalogBoot.3I3tinKp.js","./vendor-react.Bxpvzt8v.js","../css/styles-global.Byp9wykq.css"])))=>i.map(i=>d[i]);
import{j as e,r as n}from"./vendor-react.Bxpvzt8v.js";import{M as rt,C as ot}from"./Modal.Dpm9w_bt.js";import{F as c,S as it,u as st,V as lt}from"./index.rPrqxBCS.js";import{aH as va,b6 as Se,bM as ct,b8 as Y,C as Ne,aM as P,aQ as H,bc as dt,y as Pe,aI as mt,ah as Xn,au as pt,b1 as la,cg as ca,bZ as da,aU as ut,ch as ma,W as xt,ay as gt,o as ft,m as jn,F as Rn,_ as Jn,K as pa,bk as ua,bL as xa,ce as ht,X as bt,I as vt,$ as ka,aG as ya,a$ as kt,aA as yt}from"./index.DrSIG-wE.js";import{s as _t,W as wt}from"./WhatsAppInput.CTG48E-Q.js";import{_ as jt}from"./catalogBoot.3I3tinKp.js";import{u as _a,a as ga,C as fa,A as ha}from"./AffiliateOrchestrator.C_u3l5Pe.js";import{u as Ct}from"./useProductImage.BVJvDafN.js";import{aZ as Nt,bp as ba,e as Pt,A as Kn,q as St}from"./vendor-icons.CnSBu9H2.js";import"./useOverlayLayer.Dd7T5TcH.js";/* empty css                      */const zt=`/* skull-style-rev:checkout:mwzxm78j */
:root {
  --ml-blue:         var(--sk-ds-accent);
  --ml-blue-hover:   var(--sk-ds-accent-strong);
  --ml-green:        var(--sk-ds-accent);
  --ml-green-light:  var(--sk-ds-accent-strong);
  --ml-text:         var(--sk-ds-t1);
  --ml-text-sec:     var(--sk-ds-t2);
  --ml-muted:        var(--sk-ds-t3);
  --ml-faint:        color-mix(in srgb, var(--sk-palette-neutral-000000) 5%, transparent);
  --ml-page:         var(--sk-ds-page);
  --ml-card:         var(--sk-ds-surface);
  --ml-soft:         var(--sk-ds-inset);
  --ml-border:       var(--sk-ds-line);
  --ml-border-focus: var(--sk-ds-accent);
  --ml-shadow:       0 4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 5%, transparent);
  --ml-shadow-hover: 0 8px 30px color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);
  --ml-radius:       16px;
  --ml-radius-sm:    12px;
  --ml-font:         "Montserrat", "Inter", -apple-system, sans-serif;
  --ml-font-heading: "Montserrat", "Inter", sans-serif;
  --ml-font-money:   var(--sk-font-heading);
  --ml-trust-green:  var(--sk-ds-accent);
  --ml-cta-glow:     var(--sk-ds-accent-glow);
}

html.dark {
  --ml-faint:        color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);
  --ml-shadow:       0 8px 32px color-mix(in srgb, var(--sk-palette-neutral-000000) 65%, transparent);
  --ml-shadow-hover: 0 12px 40px var(--sk-ds-accent-soft);
}

.ml-checkout {
  width: 100%;
  min-width: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--ml-page);
  color: var(--ml-text);
  font-family: var(--ml-font);
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
}

.ml-checkout__shell {

  width: 100%;
  max-width: var(--rv-page-max, 1312px);
  margin-inline: auto;

  padding-inline: clamp(12px, 3vw, 28px);
  box-sizing: border-box;
}

.ml-checkout__shell {
  padding-block: 0 24px;
  flex: 1 1 auto;
}

.ml-checkout__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.95fr);
  gap: clamp(16px, 2vw, 28px);
  align-items: start;
  min-width: 0;
  width: 100%;
}

@media (min-width: 861px) {
  .ml-checkout__grid[data-logged="true"] {
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  }
}

.ml-main-stack {
  display: grid;
  gap: 10px;
  min-width: 0;
  width: 100%;
  align-self: start;
}

.ml-side-stack {
  display: grid;
  gap: 10px;
  min-width: 0;
  width: 100%;
  align-self: start;
}

.ml-side-stack__sticky {
  position: sticky;
  top: 24px;
  display: grid;
  gap: 20px;
  min-width: 0;
}

.ml-page-subtitle {
  max-width: 720px;
  margin: 2px 0 0;
  color: var(--sk-ds-t3, var(--ml-muted));
  font-size: var(--sk-text-xs, 0.75rem);
  font-weight: 500;
  line-height: 1.5;
}

.ml-card {
  background: var(--ml-card);
  border: 1px solid var(--ml-border);
  border-radius: var(--ml-radius);
  box-shadow: var(--ml-shadow);
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.ml-card:hover {
  box-shadow: var(--ml-shadow-hover);
}

html.dark .ml-card,
html.dark .ml-summary,
html.dark .ml-payment-card,
html.dark .ml-approved__card {
  background-color: color-mix(in srgb, var(--sk-palette-neutral-0c0c0e) 88%, transparent);
  background-image: linear-gradient(180deg, color-mix(in srgb, var(--sk-accent) 5%, transparent) 0%, color-mix(in srgb, var(--sk-palette-indigo-060608) 95%, transparent) 100%);
  border-color: color-mix(in srgb, var(--sk-accent) 22%, transparent);
  box-shadow: 0 8px 32px color-mix(in srgb, var(--sk-palette-neutral-000000) 65%, transparent), inset 0 0 20px color-mix(in srgb, var(--sk-accent) 3%, transparent);
}

html.dark .ml-card:hover,
html.dark .ml-summary:hover,
html.dark .ml-payment-card:hover {
  border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent);
  box-shadow: 0 10px 36px color-mix(in srgb, var(--sk-palette-neutral-000000) 75%, transparent), 0 0 24px color-mix(in srgb, var(--sk-accent) 15%, transparent);
}

html.dark .ml-card__header,
html.dark .ml-summary__header {
  background: transparent;
  border-color: var(--ml-border);
}

.ml-card__header {
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid var(--ml-border);
  background: var(--ml-card);
}

.ml-card__title {
  margin: 0;
  color: var(--ml-text);
  font-family: var(--ml-font);
  font-size: 13px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 6px;
}

.ml-card__count {
  color: var(--ml-muted);
  font-family: var(--ml-font-heading);
  font-size: 11.5px;
  font-weight: 700;
  background: var(--ml-soft);
  padding: 2px 9px;
  border-radius: 20px;
  border: 1px solid var(--ml-border);
}

.ml-link-button {
  color: var(--ml-blue);
  font-size: 12.5px;
  font-weight: 600;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  transition: opacity 0.15s;
}

.ml-link-button:hover {
  opacity: 0.75;
}

.ml-item {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) auto;
  gap: 10px 14px;
  padding: 12px 16px;
  border-top: 1px solid var(--ml-border);
  align-items: center;
  transition: background 0.15s;
}

.ml-item:first-child {
  border-top: 0;
}

.ml-item:hover {
  background: var(--ml-soft);
}

html.dark .ml-item:hover {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2.5%, transparent);
}

.ml-item__image {
  width: 56px;
  height: 56px;
  border-radius: var(--sk-r-sm, 6px);
  background: var(--ml-soft);
  border: 1px solid var(--ml-border);
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  align-self: center;
}

html.dark .ml-item__image {
  background-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 60%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);
}

.ml-item__image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}

.ml-item__main {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.ml-item__side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  min-width: 5.5rem;
}

.ml-item__pricing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  font-variant-numeric: tabular-nums;
}

.ml-badge {
  display: inline-flex;
  width: -moz-fit-content;
  width: fit-content;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 10.5px;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 6px;
  letter-spacing: 0.03em;
}

.ml-badge--orange {
  color: var(--sk-palette-neutral-ffffff);
  background: linear-gradient(135deg, var(--sk-palette-red-ff5e22), var(--sk-palette-red-ff8c38));
}

.ml-badge--green {
  color: var(--ml-trust-green);
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 15%, transparent);
}

.ml-item__name {
  margin: 0;
  color: var(--ml-text);
  font-family: var(--ml-font);
  font-size: 14px;
  line-height: 1.35;
  font-weight: 650;
  letter-spacing: -0.012em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.ml-item__meta {
  margin: 0;
  color: var(--ml-muted);
  font-family: var(--ml-font);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.005em;
}

.ml-item__sublist {
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 4px;
  width: 100%;
  color: var(--ml-muted);
  font-size: 12px;
}

.ml-item__sub {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.ml-item__sub-name {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ml-item__sub-price {
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}

.ml-price-old {
  color: var(--ml-muted);
  text-decoration: line-through;
  font-weight: 400;
}

.ml-price-green {
  color: var(--ml-trust-green);
  font-weight: 700;
}

.ml-price-vip {
  color: var(--sk-ds-premium);
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.ml-summary__vip-row > span {
  color: var(--sk-ds-premium);
  font-weight: 600;
}

.ml-item__coupon-note {
  margin: 7px 0 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--ml-trust-green);
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 16%, transparent);
  border-radius: 5px;
  padding: 4px 7px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.25;
}

.ml-item__coupon-note i {
  font-size: 9px;
}

.ml-money {
  display: inline-flex;
  align-items: flex-start;
  gap: 2px;
  color: var(--ml-text);
  font-weight: 800;
  letter-spacing: -0.01em;
  white-space: nowrap;
  font-family: var(--ml-font-money);
  font-variant-numeric: tabular-nums;
}

.ml-money--sm { font-size: 13px; }
.ml-money--md { font-size: 17px; }
.ml-money--lg {
  font-size: 24px;
  text-shadow: 0 0 16px color-mix(in srgb, var(--sk-accent) 30%, transparent);
}

html.dark .ml-money--lg {
  color: var(--ml-green);
  text-shadow: 0 0 20px color-mix(in srgb, var(--sk-accent) 45%, transparent);
}

.ml-money__cents {
  font-size: 0.62em;
  line-height: 1.2;
  margin-top: 0.18em;
  font-weight: 700;
}

.ml-remove {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 40px;
  min-height: 40px;
  padding: 0 10px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid var(--ml-border);
  background: var(--ml-card);
  color: var(--ml-muted);
  cursor: pointer;
  font-family: var(--ml-font);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
  transition: color 0.15s, background 0.15s, border-color 0.15s, box-shadow 0.15s;
}

.ml-remove i {
  font-size: 13px;
  line-height: 1;
}

.ml-remove__label {
  display: none;
}

.ml-remove:hover,
.ml-remove:focus-visible {
  color: var(--sk-ds-danger);
  border-color: color-mix(in srgb, var(--sk-palette-red-ef4444) 35%, transparent);
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 8%, transparent);
  outline: none;
}

.ml-remove:active {
  transform: scale(0.96);
}

html.dark .ml-remove {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);
}

html.dark .ml-remove:hover,
html.dark .ml-remove:focus-visible {
  color: var(--sk-ds-danger);
  border-color: color-mix(in srgb, var(--sk-palette-red-f87171) 40%, transparent);
  background: color-mix(in srgb, var(--sk-palette-red-f87171) 10%, transparent);
}

@media (min-width: 640px) {
  .ml-remove {
    min-width: auto;
    padding: 0 12px;
    height: 36px;
    min-height: 36px;
  }

  .ml-remove__label {
    display: inline;
  }
}

html.dark .ml-coupon input,
html.dark .ml-copy-row input {
  background-color: var(--sk-palette-neutral-0c0c0e);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);
}

.ml-option-title {
  color: var(--ml-text);
  font-size: 14px;
  line-height: 1.25;
  font-weight: 600;
}

.ml-option-desc {
  margin-top: 3px;
  color: var(--ml-muted);
  font-size: 12.5px;
  line-height: 1.4;
}

.ml-coupon {
  padding: 10px 14px;
}

.ml-affiliate-referral {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  padding: 13px 14px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 32%, transparent);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--sk-palette-orange-f59e0b) 13%, transparent), color-mix(in srgb, var(--sk-palette-green-00a650) 7%, transparent)),
    var(--ml-card);
}

.ml-affiliate-referral__icon {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: var(--sk-palette-neutral-ffffff);
  background: linear-gradient(135deg, var(--sk-palette-orange-f59e0b), var(--sk-palette-red-ea580c));
  box-shadow: 0 8px 20px color-mix(in srgb, var(--sk-palette-orange-f59e0b) 22%, transparent);
}

.ml-affiliate-referral__body {
  min-width: 0;
}

.ml-affiliate-referral__body strong {
  display: block;
  color: var(--ml-text);
  font-size: 13.5px;
  font-weight: 800;
  line-height: 1.2;
}

.ml-affiliate-referral__body p {
  margin: 4px 0 0;
  color: var(--ml-muted);
  font-size: 12.2px;
  line-height: 1.35;
}

.ml-affiliate-referral__body span {
  color: var(--ml-text);
  font-weight: 800;
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 24%, transparent);
  border-radius: 4px;
  padding: 1px 5px;
}

.ml-affiliate-referral__badge {
  color: var(--ml-trust-green);
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 20%, transparent);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
}

.ml-affiliate-referral__button {
  min-height: 38px;
  padding-inline: 12px;
  white-space: nowrap;
}

.ml-affiliate-referral--applied {
  border-color: color-mix(in srgb, var(--sk-palette-green-00a650) 28%, transparent);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--sk-palette-green-00a650) 12%, transparent), color-mix(in srgb, var(--sk-palette-orange-f59e0b) 7%, transparent)),
    var(--ml-card);
}

.ml-affiliate-referral--applied .ml-affiliate-referral__icon {
  background: linear-gradient(135deg, var(--ml-trust-green), var(--ml-green-light));
  box-shadow: 0 8px 20px color-mix(in srgb, var(--sk-palette-green-00a650) 18%, transparent);
}

.ml-coupon__applied,
.ml-coupon__form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ml-coupon__form {
  gap: 0;
}

.ml-coupon__form input {
  border-radius: 10px 0 0 10px;
  border-right: 0;
}

.ml-coupon__form .ml-button {
  border-radius: 0 10px 10px 0;
  min-width: 96px;
  min-height: 42px;
  white-space: nowrap;
}

.ml-coupon__applied {
  justify-content: space-between;
  padding: 12px 16px;
  border: 1.5px solid color-mix(in srgb, var(--sk-palette-green-00a650) 25%, transparent);
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 6%, transparent);
  border-radius: var(--sk-r-sm, 6px);
}

html.dark .ml-coupon__applied {
  background: color-mix(in srgb, var(--sk-ds-accent) 6%, transparent);
  border-color: color-mix(in srgb, var(--sk-ds-accent) 20%, transparent);
}

.ml-coupon input {
  width: 100%;
  min-height: 42px;
  border: 1.5px solid var(--ml-border);
  border-radius: var(--sk-r-sm, 6px);
  padding: 0 12px;
  background: var(--ml-card);
  color: var(--ml-text);
  font-size: 13.5px;
  font-family: var(--ml-font);
  outline: 0;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.ml-coupon input:focus {
  border-color: var(--ml-border-focus);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);
}

.ml-button {
  min-height: 52px;
  border: 0;
  border-radius: var(--sk-r-sm, 6px);
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-family: var(--ml-font);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: background-color 0.18s, opacity 0.18s, transform 0.12s, box-shadow 0.18s;
  position: relative;
  overflow: hidden;
}

.ml-button::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 0%, transparent);
  transition: background 0.3s;
}
.ml-button:active::after {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);
}

.ml-button:active {
  transform: scale(0.99);
}

.ml-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.ml-button--primary {
  background: linear-gradient(135deg, var(--ml-green) 0%, var(--ml-blue-hover) 100%);
  color: var(--sk-ds-on-accent);
  font-weight: 800;
  width: 100%;
  box-shadow: 0 4px 20px color-mix(in srgb, var(--sk-accent) 35%, transparent);
  font-size: 15.5px;
  letter-spacing: -0.01em;
  transition: background 0.18s ease, box-shadow 0.18s ease;
}

.ml-button--primary:hover:not(:disabled) {
  background: linear-gradient(135deg, var(--ml-green-light) 0%, var(--ml-green) 100%);
  box-shadow: 0 6px 28px color-mix(in srgb, var(--sk-accent) 50%, transparent);
  transform: none;
}

.ml-button--secondary {
  background: var(--ml-card);
  color: var(--ml-text);
  border: 1.5px solid var(--ml-border);
  font-weight: 700;
  transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
}

.ml-button--secondary:hover:not(:disabled) {
  border-color: var(--ml-green);
  background: color-mix(in srgb, var(--sk-accent) 6%, transparent);
}

html.dark .ml-button--secondary {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);
  color: var(--sk-palette-blue-f8fafc);
}

html.dark .ml-button--secondary:hover:not(:disabled) {
  border-color: var(--ml-green);
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);
}

.ml-button--green {

  background-color: var(--ml-green);
  background-image: none;
  color: var(--sk-ds-on-accent);
  font-weight: 800;
  width: 100%;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-accent) 28%, transparent);
}

.ml-button--green:hover:not(:disabled) {
  background-color: var(--ml-blue-hover);
  background-image: none;
}

.ml-warning {
  border: 1.5px solid color-mix(in srgb, var(--sk-palette-red-ef4444) 22%, transparent);
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 7%, transparent);
  color: var(--sk-ds-danger);
  border-radius: var(--sk-r-sm, 6px);
  padding: 14px 16px;
  font-size: 13px;
  line-height: 1.45;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

html.dark .ml-warning {
  color: var(--sk-ds-danger);
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 10%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-red-ef4444) 25%, transparent);
}

.ml-payment-card {
  background: var(--ml-card);
  border: 1px solid var(--ml-border);
  border-radius: var(--ml-radius);
  box-shadow: var(--ml-shadow);
  overflow: hidden;
}

.ml-pix-box{
  padding: 18px 20px;
  border-top: 1px solid var(--ml-border);
}

.ml-digital-note {
  display: flex;
  gap: 10px;
  padding: 12px 14px;
  border-radius: var(--sk-r-sm, 6px);
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, transparent);
  color: var(--ml-trust-green);
  font-size: 13px;
  line-height: 1.45;
  margin-bottom: 14px;
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);
  align-items: center;
  text-align: left;
  box-sizing: border-box;
  width: 100%;
}

.ml-digital-note__spin {
  flex: 0 0 auto;
  width: 1.25rem;
  height: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.ml-digital-note__spin svg,
.ml-digital-note__spin .sk-spin,
.ml-digital-note__spin .animate-spin {
  width: 1.05rem !important;
  height: 1.05rem !important;
  display: block !important;
  margin: 0 !important;
  vertical-align: 0 !important;
  flex-shrink: 0;
}

.ml-digital-note__text {
  flex: 1 1 auto;
  min-width: 0;
}

html.dark .ml-digital-note {
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, transparent);
  border-color: color-mix(in srgb, var(--sk-ds-accent) 14%, transparent);
}

.ml-test-note {
  display: flex;
  gap: 12px;
  padding: 12px 15px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-fbbf24) 35%, transparent);
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 8%, transparent);
  color: var(--sk-palette-red-92400e);
  font-size: 13px;
  line-height: 1.45;
  margin: 0 0 14px;
}

html.dark .ml-test-note {
  color: var(--sk-palette-orange-fbbf24);
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 6%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 22%, transparent);
}

.ml-pix-pending {
  text-align: center;
  padding: 20px;
}

.ml-pix-qr {
  width: 200px;
  height: 200px;
  padding: 8px;
  background: var(--sk-palette-neutral-ffffff);
  border: 1px solid var(--ml-border);
  border-radius: var(--sk-r-sm, 6px);
  display: inline-grid;
  place-items: center;
  margin: 8px auto 16px;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 10%, transparent);
}

.ml-pix-qr img {
  width: 100%;
  height: 100%;
}

.ml-test-qr {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(13, 1fr);
  gap: 3px;
  padding: 10px;
  background: var(--sk-palette-neutral-ffffff);
  border-radius: 4px;
}

.ml-test-qr span {
  border-radius: 2px;
  background: color-mix(in srgb, var(--sk-palette-blue-080c10) 7%, transparent);
}

.ml-test-qr span.is-active {
  background: var(--sk-palette-teal-050807);
}

.ml-copy-row {
  display: flex;
  align-items: stretch;
  width: min(480px, 100%);
  margin: 0 auto 16px;
  border: 1.5px solid var(--ml-border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--ml-soft);
  box-sizing: border-box;
}

.ml-copy-row input {
  flex: 1 1 auto;
  min-width: 0;
  height: 44px;
  border: 0;
  border-radius: var(--sk-r-sm);
  padding: 0 12px;
  background: transparent;
  color: var(--ml-muted);
  font-size: 12.5px;
  box-sizing: border-box;
}

.ml-copy-row input:focus {
  outline: none;
}

.ml-copy-row button,
.ml-copy-row .ml-copy-row__btn,
.ml-copy-row .ml-button--green {
  flex: 0 0 auto;
  width: auto !important;
  min-width: 6.75rem;
  min-height: 44px !important;
  height: 44px;
  border-radius: var(--sk-r-sm) !important;
  padding: 0 18px !important;
  box-shadow: none !important;

  background-color: var(--ml-green) !important;
  background-image: none !important;
  color: var(--sk-palette-neutral-ffffff) !important;
  animation: none !important;
}

.ml-copy-row button:hover:not(:disabled),
.ml-copy-row .ml-button--green:hover:not(:disabled) {
  background-color: var(--ml-blue-hover) !important;
  background-image: none !important;
  transform: none !important;
}

.ml-copy-row button::after {
  display: none;
}

.ml-summary {

  margin: 0;
  background: var(--ml-card);
  border: 1px solid var(--ml-border);
  border-radius: var(--ml-radius);
  box-shadow: var(--ml-shadow);
  overflow: hidden;
  transition: box-shadow 0.2s;
}

.ml-summary__header {
  padding: 10px 14px;
  border-bottom: 1px solid var(--ml-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ml-summary__body {
  padding: 12px 14px;
  display: grid;
  gap: 10px;
}

.ml-summary__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: var(--ml-muted);
  font-size: 13.5px;
}

.ml-summary__row strong {
  color: var(--ml-text);
  font-weight: 700;
}

.ml-summary__coupon {
  color: var(--ml-blue);
  font-weight: 700;
  font-size: 12px;
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, transparent);
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);
}

.ml-summary__coupon-owner {
  display: block;
  margin-top: 5px;
  color: var(--ml-muted);
  font-size: 11.5px;
  line-height: 1.3;
}

.ml-summary__line {
  height: 1px;
  background: var(--ml-border);
}

.ml-summary__total {
  align-items: flex-end;
  color: var(--ml-text);
}

.ml-summary__total > span {
  font-size: 14.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.ml-summary__total .ml-money--lg {
  font-size: 22px;
  font-weight: 800;
}

.ml-summary__save {
  color: var(--ml-trust-green);
  font-size: 12.5px;
  font-weight: 700;
  text-align: right;
}

.ml-summary__save--big {
  font-size: 14px;
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 15%, transparent);
  padding: 6px 12px;
  border-radius: var(--sk-r-sm, 6px);
  text-align: center;
  margin-top: 4px;
}

.ml-summary__benefits {
  border-top: 1px solid var(--ml-border);
  padding-top: 14px;
  display: grid;
  gap: 9px;
}

.ml-summary__benefit-item {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--ml-muted);
  font-size: 12.5px;
  font-weight: 500;
  line-height: 1.3;
}

.ml-summary__benefit-item i,
.ml-summary__benefit-icon {
  color: var(--ml-trust-green);
  flex-shrink: 0;
  width: 16px;
  text-align: center;
}

.ml-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: color-mix(in srgb, var(--ml-page) 86%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.ml-spinner {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 3px solid color-mix(in srgb, var(--sk-ds-accent) 18%, transparent);
  border-top-color: var(--ml-blue);

  animation: ml-spin 0.75s linear infinite !important;
  transform-origin: 50% 50%;
  will-change: transform;
  box-sizing: border-box;
  flex-shrink: 0;
}

@keyframes ml-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.ml-overlay__content {
  display: grid;
  justify-items: center;
  gap: 10px;
  max-width: 280px;
  padding: 22px 20px;
  border-radius: 16px;
  border: 1px solid var(--ml-border);
  background: var(--ml-card);
  box-shadow: var(--ml-shadow-hover);
  text-align: center;
  color: var(--ml-text);
  font-size: 14px;
  font-weight: 700;
}

.ml-overlay__sub {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.45;
  color: var(--ml-muted);
}

.ml-approved {

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px 56px;
  background: var(--ml-page);
  color: var(--ml-text);
  font-family: var(--ml-font);
}

.ml-approved__card {
  width: min(640px, 100%);
  background: var(--ml-card);
  border: 1px solid var(--ml-border);
  border-radius: 16px;
  box-shadow: 0 20px 60px color-mix(in srgb, var(--sk-palette-neutral-000000) 12%, transparent), 0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);
  padding: 36px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

html.dark .ml-approved__card {
  box-shadow: 0 24px 80px color-mix(in srgb, var(--sk-palette-neutral-000000) 65%, transparent), 0 4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 40%, transparent);
}

.ml-approved__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--ml-green), var(--ml-green-light));
  border-radius: 16px 16px 0 0;
}

.ml-approved__icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);
  color: var(--ml-trust-green);
  font-size: 34px;
  border: 2px solid color-mix(in srgb, var(--sk-palette-green-00a650) 15%, transparent);
  box-shadow: 0 0 32px color-mix(in srgb, var(--sk-ds-accent) 20%, transparent);
}

.ml-approved h2 {
  margin: 0 0 10px;
  font-size: 26px;
  line-height: 1.2;
  font-weight: 800;
  font-family: var(--ml-font);
  color: var(--ml-text);
}

.ml-approved p {
  color: var(--ml-muted);
  font-size: 14.5px;
  line-height: 1.55;
  max-width: 440px;
  margin: 0 auto;
}

.ml-approved__actions,
.ml-approved__affiliate {
  margin-top: 22px;
}

.ml-approved__actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.ml-approved__actions .ml-button {
  width: 100%;
}

.post-purchase-next {
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px solid var(--ml-border);
  text-align: left;
}

.post-purchase-next-title {
  margin: 0 0 4px;
  font: 700 13.5px/1.3 var(--sk-font-heading);
  color: var(--ml-text);
}

.post-purchase-next-sub {
  margin: 0 0 12px;
  font-size: 12px;
  line-height: 1.45;
  color: var(--ml-muted);
}

.post-purchase-next-grid {
  display: grid;
  gap: 10px;
}

.post-purchase-next-card {
  width: 100%;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 12px 13px;
  border-radius: 12px;
  border: 1px solid var(--ml-border);
  background: var(--ml-soft);
  color: var(--ml-text);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.16s ease, background 0.16s ease;
}

.post-purchase-next-card:hover {
  border-color: var(--sk-ds-accent);
  background: color-mix(in srgb, var(--sk-ds-accent) 7%, var(--ml-card));
}

.post-purchase-next-card > svg:first-child {
  color: var(--ml-trust-green);
  justify-self: center;
}

.post-purchase-next-card > svg:last-child {
  color: var(--ml-muted);
}

.post-purchase-next-card > span {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.post-purchase-next-card strong {
  font: 700 13px/1.3 var(--sk-font-heading);
  color: var(--ml-text);
}

.post-purchase-next-card em {
  font-style: normal;
  font-size: 11.5px;
  line-height: 1.35;
  color: var(--ml-muted);
}

.post-purchase-next-card--vip {
  border-color: color-mix(in srgb, var(--sk-ds-premium) 32%, var(--ml-border));
  background: color-mix(in srgb, var(--sk-ds-premium) 7%, var(--ml-card));
}

.post-purchase-next-card--vip > svg:first-child,
.post-purchase-next-card--vip strong {
  color: var(--sk-ds-premium);
}

.post-purchase-next-card--vip:hover {
  border-color: var(--sk-ds-premium);
  background: color-mix(in srgb, var(--sk-ds-premium) 12%, var(--ml-card));
}

.ml-approved__affiliate {
  border-top: 1px solid var(--ml-border);
  padding-top: 22px;
  text-align: left;
}

.ml-approved__affiliate h3 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.ml-approved__affiliate p {
  font-size: 13.5px;
  text-align: left;
  margin-bottom: 16px;
}

.ml-mobile-cta-bar {
  display: none;
  position: fixed;
  bottom: calc(var(--rv-bottom-nav-h, 56px) + var(--rv-safe-bottom, env(safe-area-inset-bottom, 0px)));
  left: 0;
  right: 0;
  z-index: 75;
  padding: 12px 16px;
  background: var(--ml-card);
  border-top: 1px solid var(--ml-border);
  box-shadow: 0 -4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 12%, transparent);
}

html.dark .ml-mobile-cta-bar {
  box-shadow: 0 -4px 28px color-mix(in srgb, var(--sk-palette-neutral-000000) 55%, transparent);
}

@media (max-width: 860px) {

  .ml-checkout__grid,
  .ml-checkout__grid[data-logged="true"] {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .ml-main-stack {
    order: 0;
    width: 100%;
    gap: 12px;
  }

  .ml-side-stack {
    order: 0;
    width: 100%;
    gap: 12px;
  }

  .ml-side-stack__sticky {
    position: static;
    width: 100%;
  }

  .ml-checkout__shell {
    max-width: 100%;
    padding-inline: 14px;
    padding-block: 8px 32px;
  }

  .ml-checkout[data-mobile-dock="single-action"] .ml-checkout__shell {
    padding-bottom: 150px;
  }

  .ml-checkout[data-mobile-dock="payment-options"] .ml-checkout__shell {
    padding-bottom: 150px;
  }

  .ml-desktop-only {
    display: none !important;
  }

  .ml-page-subtitle {
    max-width: 100%;
    margin-top: 3px;
    font-size: 0.78125rem;
    line-height: 1.5;
  }

  .ml-card,
  .ml-payment-card,
  .ml-summary {
    margin: 0;
    border-radius: 14px;
  }

  .ml-card__header,
  .ml-summary__header {
    padding: 10px 14px;
  }

  .ml-card__title {
    font-size: 0.8125rem;
  }

  .ml-item {
    grid-template-columns: 52px minmax(0, 1fr) auto;
    gap: 8px 10px;
    padding: 10px 14px;
    align-items: center;
  }

  .ml-item__image {
    width: 52px;
    height: 52px;
    border-radius: 8px;
  }

  .ml-item__name {
    font-size: 0.8125rem;
    letter-spacing: -0.015em;
  }

  .ml-item__meta {
    font-size: 0.71875rem;
  }

  .ml-item__side {
    gap: 6px;
    min-width: 4.75rem;
  }

  .ml-item__pricing {
    align-items: flex-end;
  }

  .ml-remove {
    min-width: 36px;
    min-height: 36px;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: var(--sk-r-sm, 6px);
  }

  .ml-remove__label {
    display: none;
  }

  .ml-option-title {
    font-size: 0.8125rem;
    font-weight: 700;
  }

  .ml-option-desc {
    margin-top: 2px;
    font-size: 0.71875rem;
  }

  .ml-affiliate-referral {
    grid-template-columns: 34px minmax(0, 1fr);
    align-items: flex-start;
    gap: 10px;
  }

  .ml-affiliate-referral__icon {
    width: 34px;
    height: 34px;
  }

  .ml-affiliate-referral__badge,
  .ml-affiliate-referral__button {
    grid-column: 1 / -1;
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .ml-coupon {
    padding: 10px 14px;
  }

  .ml-coupon input {
    min-height: 44px;
    font-size: 0.8125rem;
  }

  .ml-pix-box {
    padding: 12px 14px;
  }

  .ml-digital-note,
  .ml-test-note {
    gap: 8px;
    padding: 10px 12px;
    margin-bottom: 10px;
    font-size: 0.75rem;
    line-height: 1.45;
  }

  .ml-pix-hero-banner {
    padding: 12px 14px;
    gap: 12px;
    margin-bottom: 12px;
  }

  .ml-pix-hero-banner__icon {
    width: 40px;
    height: 40px;
  }

  .ml-pix-hero-banner__title {
    font-size: 0.8125rem;
  }

  .ml-pix-hero-banner__sub {
    font-size: 0.71875rem;
  }

  .ml-pix-pending {
    padding: 16px 14px;
  }

  .ml-pix-qr {
    width: min(180px, 56vw);
    height: min(180px, 56vw);
    padding: 6px;
    margin: 6px auto 14px;
  }

  .ml-copy-row {
    flex-direction: column;
    gap: 0;
    width: 100%;
    border-radius: var(--sk-r-sm, 6px);
  }

  .ml-copy-row input {
    width: 100%;
    min-height: 44px;
    height: 44px;
    border-bottom: 1px solid var(--ml-border);
    font-size: 0.8125rem;
  }

  .ml-copy-row button,
  .ml-copy-row .ml-copy-row__btn,
  .ml-copy-row .ml-button--green {
    width: 100% !important;
    min-height: 46px !important;
    height: 46px;
    border-radius: var(--sk-r-sm) !important;
    font-size: 0.8125rem;
  }

  .ml-button {
    min-height: 48px;
    padding: 0 16px;
    gap: 8px;
    font-size: 0.875rem;
    border-radius: var(--sk-r-sm, 6px);
  }

  .ml-button--primary {
    min-height: 50px;
    font-size: 0.9375rem;
  }

  .ml-link-button {
    font-size: 0.78125rem;
  }

  .ml-badge {
    font-size: 0.625rem;
    padding: 3px 8px;
  }

  .ml-summary__body {
    padding: 12px 14px;
    gap: 9px;
  }

  .ml-summary__row {
    font-size: 0.8125rem;
  }

  .ml-summary__total .ml-money--lg {
    font-size: 22px;
  }

  .ml-summary__benefits {
    padding-top: 12px;
    gap: 8px;
  }

  .ml-mobile-cta-bar {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 100;
    padding: 8px 10px;
    padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
    background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 96%, transparent);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);
    box-shadow: 0 -2px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);
  }

  html.dark .ml-mobile-cta-bar {
    background: color-mix(in srgb, var(--sk-palette-neutral-09090b) 96%, transparent);
    border-top-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);
    box-shadow: 0 -2px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 50%, transparent);
  }

  .ml-mobile-cta-bar .ml-button--primary {
    width: 100% !important;
    min-height: 48px;
    border-radius: var(--sk-r-md, 8px) !important;
    font-family: var(--sk-font-heading, 'Montserrat', sans-serif);
    font-weight: 800;
    font-size: 0.875rem;
    letter-spacing: 0.01em;
    text-transform: none;
    background: var(--sk-ds-accent) !important;
    color: var(--sk-ds-on-accent) !important;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-accent) 28%, transparent) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-sizing: border-box;
  }

  

  

  .ml-approved {
    padding: 16px 14px 32px;
    align-items: flex-start;
    min-height: 0;
  }

  .ml-approved__card {
    padding: 24px 18px;
    border-radius: 16px;
  }

  .ml-approved h2 {
    font-size: 1.375rem;
    letter-spacing: -0.02em;
  }

  .ml-approved__actions {
    flex-direction: column;
    gap: 8px;
  }

  .ml-approved__actions .ml-button {
    width: 100% !important;
    min-height: 50px;
    border-radius: var(--sk-r-sm, 6px);
  }
}

.checkout-profile-modal {
  width: min(calc(100% - 1.5rem), 32.5rem) !important;
  max-width: 32.5rem !important;
  max-height: calc(100dvh - 1.5rem) !important;
  padding: clamp(1.25rem, 4vw, 2rem) !important;
  border-radius: var(--sk-r-lg, 16px) !important;
  border: 1px solid var(--sk-ds-line, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent)) !important;
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);
  scrollbar-gutter: stable;
}

.checkout-profile-form {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2.4vw, 1.35rem);
}

.checkout-profile-header {
  padding-right: 2.25rem;
}

.checkout-profile-icon {
  display: flex;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 1px solid color-mix(in srgb, var(--sk-accent) 24%, transparent);
  border-radius: 0.85rem;
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);
  color: var(--ml-green);
}

.checkout-profile-kicker {
  margin: 0 0 0.4rem;
  color: var(--ml-blue-hover);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.2;
  text-transform: uppercase;
}

.checkout-profile-title {
  margin: 0;
  color: var(--sk-palette-blue-111827);
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.18rem, 4.4vw, 1.55rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.24;
  text-wrap: balance;
}

.checkout-profile-subtitle {
  max-width: 28rem;
  margin: 0.65rem 0 0;
  color: var(--sk-palette-blue-4b5563);
  font-size: clamp(0.86rem, 2.6vw, 0.95rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.7;
}

.checkout-profile-context {
  padding: clamp(0.9rem, 3vw, 1.1rem);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 20%, transparent);
  border-radius: 0.9rem;
  background: color-mix(in srgb, var(--sk-accent) 5.5%, transparent);
}

.checkout-profile-context-title {
  display: block;
  color: var(--ml-blue-hover);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.075em;
  line-height: 1.35;
  text-transform: uppercase;
}

.checkout-profile-context-copy {
  margin: 0.45rem 0 0;
  color: var(--sk-palette-blue-4b5563);
  font-size: clamp(0.77rem, 2.4vw, 0.84rem);
  font-weight: 500;
  line-height: 1.65;
}

.checkout-profile-field {
  min-width: 0;
}

.checkout-profile-label {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.55rem;
  color: var(--sk-palette-blue-374151);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.075em;
  line-height: 1.35;
  text-transform: uppercase;
}

.checkout-profile-label span {
  color: var(--ml-blue-hover);
  font-size: 0.62rem;
  letter-spacing: 0.045em;
}

.checkout-profile-input {
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid var(--sk-palette-blue-e5e7eb);
  border-radius: var(--sk-r-sm, 6px);
  background: var(--sk-palette-blue-f9fafb);
  color: var(--sk-palette-blue-111827);
  font-size: 0.9rem;
  font-weight: 700;
  outline: none;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;
}

.checkout-profile-input:focus {
  border-color: var(--ml-green);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sk-accent) 14%, transparent);
}

.checkout-profile-input:disabled {
  cursor: wait;
  opacity: 0.6;
}

.checkout-profile-actions {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
  gap: 0.65rem;
  padding-top: 0.15rem;
}

.checkout-profile-primary,
.checkout-profile-secondary {
  min-height: 2.9rem;
  padding: 0.7rem 1rem;
  border-radius: var(--sk-r-sm, 6px);
  font-size: 0.84rem;
  font-weight: 800;
  line-height: 1.25;
  transition: color 160ms ease, background-color 160ms ease, border-color 160ms ease, opacity 160ms ease;
}

.checkout-profile-primary {
  grid-column: 2;
  grid-row: 1;
  border: 1px solid var(--ml-blue-hover);
  background: var(--sk-ds-accent);
  color: var(--sk-ds-on-accent);
}

.checkout-profile-primary:hover {
  border-color: var(--ml-green);
  background: var(--ml-green);
}

.checkout-profile-secondary {
  grid-column: 1;
  grid-row: 1;
  border: 1px solid var(--sk-palette-blue-e5e7eb);
  background: transparent;
  color: var(--sk-palette-blue-4b5563);
}

.checkout-profile-secondary:hover {
  background: var(--sk-palette-blue-f3f4f6);
  color: var(--sk-palette-blue-111827);
}

.ml-pix-hero-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 18px;
  margin-bottom: 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-accent) 10%, transparent) 0%, color-mix(in srgb, var(--sk-palette-neutral-0c0c0e) 70%, transparent) 100%);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);
  box-shadow: inset 0 0 16px color-mix(in srgb, var(--sk-accent) 5%, transparent);
}

.ml-pix-hero-banner__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 30%, transparent);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.ml-pix-hero-banner__tag {
  font-family: var(--ml-font-heading);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--ml-green);
  display: inline-block;
  margin-bottom: 2px;
}

.ml-pix-hero-banner__title {
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: var(--ml-text);
}

.ml-pix-hero-banner__sub {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--ml-muted);
  line-height: 1.4;
}



@media (min-width: 1024px) {
}


.checkout-profile-primary:disabled,
.checkout-profile-secondary:disabled {
  cursor: wait;
  opacity: 0.58;
}

.dark .checkout-profile-title { color: var(--sk-palette-blue-f9fafb); }
.dark .checkout-profile-subtitle,
.dark .checkout-profile-context-copy { color: var(--sk-palette-neutral-9ca3af); }
.dark .checkout-profile-context { background: color-mix(in srgb, var(--sk-accent) 7%, transparent); }
.dark .checkout-profile-label { color: var(--sk-palette-blue-d1d5db); }
.dark .checkout-profile-input {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 11%, transparent);
  background: var(--sk-palette-neutral-000000);
  color: var(--sk-palette-neutral-ffffff);
}
.dark .checkout-profile-secondary {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);
  color: var(--sk-palette-blue-d1d5db);
}
.dark .checkout-profile-secondary:hover { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5.5%, transparent); }

@media (max-width: 639px) {
  .checkout-profile-modal {
    width: calc(100% - 1rem) !important;
    max-height: calc(100dvh - 1rem) !important;
    padding: 1.15rem !important;
    border-radius: 1rem !important;
  }

  .checkout-profile-header { padding-right: 2rem; }
  .checkout-profile-icon {
    width: 2.7rem;
    height: 2.7rem;
    margin-bottom: 0.85rem;
  }
  .checkout-profile-actions { grid-template-columns: 1fr; }
  .checkout-profile-primary,
  .checkout-profile-secondary {
    grid-column: 1;
    min-height: 3rem;
  }
  .checkout-profile-primary { grid-row: 1; }
  .checkout-profile-secondary { grid-row: 2; }
}
.ml-stage {
  padding: clamp(14px, 1.4vw, 18px);
  border: 1px solid var(--ml-border);
  border-radius: 18px;
  background: var(--ml-card);
  box-shadow: var(--ml-shadow);
  min-width: 0;
}
.ml-stage[data-active="true"] { border-color: var(--sk-ds-accent); }
.ml-stage-title {
  display: flex; align-items: center; gap: 8px; margin: 0;
  font: 700 14px/1.3 var(--ml-font-heading); color: var(--ml-text);
}
.ml-stage-number {
  display: grid; place-items: center;
  width: 22px; height: 22px; flex: 0 0 22px;
  border-radius: 50%; background: var(--ml-soft); color: var(--ml-text-sec); font-size: 11px;
}
.ml-stage[data-active="true"] .ml-stage-number {
  background: var(--sk-ds-accent); color: var(--sk-ds-on-accent, var(--sk-palette-neutral-ffffff));
}
.ml-stage-copy { margin: 6px 0 14px; color: var(--ml-muted); font-size: 11.5px; line-height: 1.5; }
.ml-stage-footnote {
  display: flex; align-items: flex-start; gap: 8px;
  margin: 20px 0 0; padding-top: 16px;
  border-top: 1px solid var(--ml-border); color: var(--ml-muted); font-size: 11px; line-height: 1.7;
}
.ml-stage-footnote svg { flex-shrink: 0; margin-top: 3px; }
.ml-payment-selection { min-width: 0; }
.ml-stage .ml-button { border-radius: var(--sk-r-sm, 6px); min-height: 40px; font-size: 12px; }
.ml-stage .ml-card, .ml-stage .ml-payment-card { border: 0; box-shadow: none; }
.ml-side-stack .ml-card, .ml-side-stack .ml-summary { border: 1px solid var(--ml-border); border-radius: var(--sk-r-md, 12px); background: var(--ml-card); box-shadow: none; overflow: hidden; }
.ml-side-stack .ml-card__header, .ml-side-stack .ml-summary__header { padding: 18px 20px; background: transparent; border-bottom: 1px solid var(--ml-border); }
.ml-side-stack .ml-coupon, .ml-side-stack .ml-summary__body { padding: 20px; background: transparent; }
.ml-side-stack .ml-item { grid-template-columns: 56px minmax(0, 1fr) auto; gap: 16px; padding: 20px; }
.ml-side-stack .ml-item__side { gap: 12px; }
.ml-side-stack .ml-item__name { font: 600 14px/1.5 var(--sk-font-heading); }
.ml-side-stack .ml-money--md { font-size: 16px; }
.ml-side-stack .ml-summary__total .ml-money--lg { font-size: 26px; text-shadow: none; }
.ml-side-stack .ml-affiliate-referral { grid-template-columns: 34px minmax(0, 1fr); align-items: start; gap: 10px; }
.ml-side-stack .ml-affiliate-referral__icon { width: 34px; height: 34px; }
.ml-side-stack .ml-affiliate-referral__body { overflow-wrap: anywhere; }
.ml-side-stack .ml-affiliate-referral__badge, .ml-side-stack .ml-affiliate-referral__button { grid-column: 1 / -1; width: 100%; justify-content: center; text-align: center; }
.ml-checkout__grid--centered,
.ml-checkout__grid--pending-pix,
.ml-checkout__grid[data-payment-stage="true"],
.ml-checkout__grid[data-pending-pix="true"] {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  max-width: 580px !important;
  margin-inline: auto !important;
  width: 100% !important;
}
.ml-checkout__grid--centered .ml-main-stack,
.ml-checkout__grid--pending-pix .ml-main-stack,
.ml-checkout__grid[data-payment-stage="true"] .ml-main-stack,
.ml-checkout__grid[data-pending-pix="true"] .ml-main-stack {
  width: 100% !important;
  max-width: 580px !important;
  margin: 0 auto !important;
}
.ml-page-subtitle--center {
  text-align: center !important;
  margin: 10px auto !important;
}
.ml-stage .ml-pix-pending, .ml-stage .ml-pix-box { padding: 16px 0 0; text-align: center; }
.ml-stage .ml-pix-qr { max-width: 100%; margin: 8px auto 14px; display: flex; justify-content: center; }
.ml-stage .ml-copy-row {
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 14px;
  width: min(520px, 100%);
  margin: 0 auto 16px;
  border: 1px solid var(--ml-border);
  border-radius: 14px;
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 45%, transparent);
}
.ml-stage .ml-copy-row input {
  min-width: 0;
  width: 100%;
  border: 1px solid var(--ml-border);
  border-radius: 8px;
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 60%, transparent);
  padding: 10px 12px;
  font-family: var(--sk-font-mono, monospace);
  font-size: 12px;
  color: var(--ml-text, var(--sk-ds-t1));
  text-align: center;
}
.ml-stage .ml-copy-row .ml-copy-row__btn,
.ml-stage .ml-copy-row .ml-button--green,
.ml-copy-row__btn--centered {
  margin: 0 auto !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  border-radius: var(--sk-r-sm, 6px) !important;
  min-width: 160px;
  height: 42px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.02em;
}
.ml-digital-note--centered,
.ml-pix-pending .ml-digital-note,
.ml-stage .ml-pix-pending .ml-digital-note,
.ml-stage .ml-digital-note {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  margin: 16px auto 0 !important;
  padding: 16px 20px !important;
  max-width: 520px !important;
  width: 100% !important;
  gap: 10px !important;
  border-radius: 14px !important;
  box-sizing: border-box !important;
}

.ml-digital-note--centered .ml-digital-note__spin,
.ml-pix-pending .ml-digital-note .ml-digital-note__spin,
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__spin,
.ml-stage .ml-digital-note .ml-digital-note__spin {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 auto !important;
  width: 28px !important;
  height: 28px !important;
}

.ml-digital-note--centered .ml-digital-note__spin svg,
.ml-digital-note--centered .ml-digital-note__spin .fa-spin,
.ml-pix-pending .ml-digital-note .ml-digital-note__spin svg,
.ml-pix-pending .ml-digital-note .ml-digital-note__spin .fa-spin,
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__spin svg,
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__spin .fa-spin,
.ml-stage .ml-digital-note .ml-digital-note__spin svg,
.ml-stage .ml-digital-note .ml-digital-note__spin .fa-spin {
  font-size: 22px !important;
  width: 22px !important;
  height: 22px !important;
  color: var(--ml-trust-green, var(--sk-ds-accent)) !important;
  display: block !important;
  margin: 0 auto !important;
}

.ml-digital-note--centered .ml-digital-note__text,
.ml-pix-pending .ml-digital-note .ml-digital-note__text,
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__text,
.ml-stage .ml-digital-note .ml-digital-note__text {
  text-align: center !important;
  font-size: 13px !important;
  line-height: 1.5 !important;
  color: var(--ml-trust-green, var(--sk-ds-accent)) !important;
  margin: 0 auto !important;
  max-width: 440px !important;
  display: block !important;
}
.ml-checkout button:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 4px; }
@media (max-width: 1100px) and (min-width: 861px) {
  .ml-checkout__grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }
  .ml-side-stack { grid-column: 1 / -1; }
}
@media (max-width: 860px) {
  .ml-stage { padding: 12px 14px; border-radius: 14px; }
}

.yp-header {
  width: 100%;
  background: var(--sk-nav-surface);
  border-bottom: 1px solid var(--ml-border);
  padding: 10px 16px;
  padding-top: calc(10px + env(safe-area-inset-top, 0px));
  position: relative;
  z-index: 40;
}
.yp-header__inner {
  max-width: 1320px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.yp-header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.yp-header__secure {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--sk-ds-accent);
  font-size: 11px;
}
.yp-header__secure-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-align: right;
}
.yp-header__secure-text strong {
  font-size: 10px;
  letter-spacing: 0.05em;
  color: var(--ml-text);
}
.yp-header__secure-text span {
  font-weight: 700;
  color: var(--sk-ds-accent);
}

.yp-card-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 16px;
}

.yp-card-inputs {
  display: grid;
  gap: 16px;
  min-width: 0;
}
.yp-form-group {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.yp-form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}
.yp-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--ml-text);
}
.yp-input {
  width: 100%;
  height: 46px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--ml-border);
  background: var(--ml-card);
  color: var(--ml-text);
  font-size: 14px;
  transition: border-color 0.2s;
}
.yp-input:focus {
  outline: none;
  border-color: var(--sk-ds-accent);
}

.yp-footer {
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
  padding: 16px 16px calc(18px + env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: var(--ml-page);
  border-top: 1px solid var(--ml-border);
  text-align: center;
  flex-shrink: 0;
}
.yp-footer__trust {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
  color: var(--ml-muted);
}
.yp-footer__trust svg {
  width: 11px;
  height: 11px;
  color: var(--ml-trust-green);
  flex-shrink: 0;
}
.yp-footer__brands {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.yp-footer__brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 14%, var(--ml-border));
  background: var(--sk-palette-neutral-ffffff);
  padding: 2px;
  box-sizing: border-box;
  flex-shrink: 0;
  opacity: 0.92;
}
.yp-footer__brand-badge:hover {
  opacity: 1;
}
.yp-footer__brand-badge--more {
  width: 28px;
  background: var(--ml-soft);
  border-color: var(--ml-border);
  color: var(--ml-text);
  font: 800 14px/1 var(--sk-font-heading);
}
.yp-footer__brand-img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  display: block;
}

.yp-method-tabs {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-block: 14px;
}
.yp-method-option {
  border: 1px solid var(--ml-border);
  border-radius: var(--sk-r-md, 10px);
  padding: 16px;
  background: var(--ml-card);
  cursor: default;
  transition: all 0.2s ease;
}
.yp-method-option.is-selected {
  cursor: default;
  border-color: var(--sk-accent);
  box-shadow: 0 0 0 1px var(--sk-accent);
}
.yp-method-option__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  cursor: pointer;
}
.yp-card-section,
.yp-card-inputs,
.yp-form-group,
.yp-form-row,
.yp-label,
.ml-payment-selection .ml-stage-copy {
  cursor: default;
}
.yp-method-option__left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;
}
.yp-method-option__radio {
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  max-width: 20px;
  max-height: 20px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: 2px solid var(--ml-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
}
.yp-method-option.is-selected .yp-method-option__radio {
  border-color: var(--sk-accent);
}
.yp-method-option.is-selected .yp-method-option__radio::after {
  content: "";
  width: 8px;
  height: 8px;
  min-width: 8px;
  min-height: 8px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: var(--sk-accent);
  flex-shrink: 0;
}
.yp-badge-instant {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);
  color: var(--sk-accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.2;
}
.yp-method-sub {
  font-size: 12px;
  color: var(--ml-muted);
  margin-top: 3px;
  line-height: 1.4;
  font-weight: 400;
}
.yp-method-sub strong {
  color: var(--ml-text);
  font-weight: 600;
}

.yp-btn-gold {
  width: 100%;
  height: 44px;
  min-height: 44px;
  border-radius: var(--sk-r-md, 8px) !important;
  border: none;
  background: var(--sk-ds-accent) !important;
  color: var(--sk-ds-on-accent) !important;
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.03em;
  text-transform: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: none !important;
  transition: box-shadow 0.15s ease, background 0.15s ease;
}
.yp-btn-gold:hover {
  background: linear-gradient(135deg, var(--sk-accent) 0%, var(--sk-ds-accent-strong) 100%) !important;
  box-shadow: 0 6px 18px color-mix(in srgb, var(--sk-accent) 38%, transparent) !important;
  transform: none;
}
.yp-btn-gold:active {
  transform: none;
}
html.dark .yp-btn-gold {
  background: linear-gradient(135deg, var(--sk-accent) 0%, var(--sk-accent) 100%) !important;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-accent) 32%, transparent) !important;
}

.ml-checkout__grid[data-review="true"], .ml-checkout__grid[data-review="false"][data-logged="true"] { grid-template-columns: minmax(0, 1fr); max-width: 720px; margin-inline: auto; }
.yp-card-inputs { border: 0; padding: 0; margin: 0; width: 100%; }

.yp-header__secure[data-secure="false"], .yp-header__secure[data-secure="false"] span { color: var(--sk-palette-orange-8a640e); }
html.dark .yp-header__secure[data-secure="false"], html.dark .yp-header__secure[data-secure="false"] span { color: var(--sk-palette-orange-d6b362); }

.ml-checkout .ml-checkout__shell { padding-bottom: 28px; }
.ml-checkout .ml-card__title { font: 600 15px/1.5 var(--sk-font-heading); letter-spacing: 0; gap: 10px; }
.ml-checkout .ml-card__title svg, .ml-checkout .ml-summary__benefit-icon { display: block; width: 16px !important; height: 16px !important; flex: 0 0 16px; stroke-width: 1.75; }
.ml-checkout .ml-summary__row { font: 400 14px/1.6 var(--sk-font-body, var(--ml-font)); }
.ml-checkout .ml-summary__benefit-item { font: 400 13px/1.6 var(--sk-font-body, var(--ml-font)); align-items: center; }
.ml-checkout .ml-summary__total { align-items: center; }
.ml-checkout .ml-money { gap: 0; align-items: baseline; font-family: var(--sk-font-heading); font-variant-numeric: tabular-nums; letter-spacing: -.025em; text-shadow: none; }
.ml-checkout .ml-money__cents { font-size: 1em; line-height: inherit; margin-top: 0; font-weight: inherit; align-self: baseline; }
.ml-checkout .ml-side-stack { gap: 24px; }
.ml-checkout .ml-side-stack > .ml-button { min-height: 48px; font: 600 14px/1.4 var(--sk-font-heading); box-shadow: none; }
.ml-checkout .ml-button svg, .ml-checkout .ml-remove svg { display: block; flex-shrink: 0; }
.ml-checkout .ml-coupon__form { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 10px; }
.ml-checkout .ml-coupon__form input { width: 100%; min-width: 0; font: 400 14px/1.5 var(--ml-font); }
@media (max-width: 1023px) {
  .ml-checkout .ml-desktop-only { display: none; }
  .ml-checkout { --checkout-action-height: calc(64px + env(safe-area-inset-bottom, 0px)); }
  .ml-checkout .yp-footer { position: static; min-height: 0; margin-top: auto; padding: 14px 14px 16px; gap: 7px; }
  .ml-checkout[data-status="approved"] .yp-footer { padding: 14px 14px calc(16px + env(safe-area-inset-bottom, 0px)); }
  .ml-checkout .yp-footer__brand-badge { width: 38px; height: 24px; box-shadow: none; }
  .ml-checkout .yp-footer__brands { gap: 7px; }
  .ml-checkout .ml-mobile-cta-bar { position: sticky; bottom: 0; left: auto; right: auto; width: 100%; min-height: 0; height: auto; padding: 10px 14px calc(12px + env(safe-area-inset-bottom, 0px)); display: flex; flex-direction: column; align-items: stretch; gap: 8px; box-sizing: border-box; background: color-mix(in srgb, var(--ml-card) 96%, transparent); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-top: 1px solid var(--ml-border); box-shadow: 0 -6px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 24%, transparent); z-index: 35; flex-shrink: 0; }
  .ml-checkout .ml-mobile-cta-bar__meta { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; font-size: 12px; color: var(--ml-muted); }
  .ml-checkout .ml-mobile-cta-bar__meta strong { font: 800 15px/1.1 var(--sk-font-heading); color: var(--ml-text); font-variant-numeric: tabular-nums; }
  .ml-checkout .ml-mobile-cta-bar .ml-button { width: 100%; flex: 0 0 auto; min-height: 46px !important; height: 46px; margin: 0; font: 700 13.5px/1.3 var(--sk-font-heading); box-shadow: none; }
  .ml-checkout .ml-checkout__shell, .ml-checkout[data-mobile-dock="payment-options"] .ml-checkout__shell, .ml-checkout[data-mobile-dock="single-action"] .ml-checkout__shell { padding: 0 14px 16px; }
  .ml-checkout .ml-page-subtitle, .ml-checkout .ml-stage-copy { font-size: 12px; line-height: 1.5; margin-bottom: 10px; }
  .ml-checkout .ml-stage { padding: 12px; border-radius: 12px; }
  .ml-checkout .ml-stage-title, .ml-checkout .ml-card__title { font-size: 13px; line-height: 1.4; }
  .ml-checkout .ml-card__title svg, .ml-checkout .ml-summary__benefit-icon { width: 14px !important; height: 14px !important; flex-basis: 14px; }
  .ml-checkout .ml-side-stack, .ml-checkout .ml-side-stack__sticky { gap: 12px; }
  .ml-checkout .ml-card__header, .ml-checkout .ml-summary__header { padding: 12px; }
  .ml-checkout .ml-coupon, .ml-checkout .ml-summary__body { padding: 12px; }
  .ml-checkout .ml-summary__row, .ml-checkout .ml-summary__benefit-item, .ml-checkout .ml-item__name { font-size: 12.5px; line-height: 1.45; }
  .ml-checkout .ml-summary__total .ml-money--lg { font-size: 22px; }
  .ml-checkout .yp-label { font-size: 11px; line-height: 1.4; }
  .ml-checkout .yp-card-inputs { gap: 12px; }
  .ml-checkout .yp-method-option { padding: 12px; }
  .ml-checkout .yp-method-option__header strong { font-size: 12.5px; }
  .ml-checkout .yp-method-sub, .ml-checkout .ml-warning { font-size: 11.5px; line-height: 1.45; }
  .ml-checkout .yp-method-tabs { gap: 10px; margin-block: 12px; }
  .ml-checkout .yp-input { height: 42px; border-radius: 8px; }
}
@media (max-width: 640px) {
  .ml-side-stack__sticky { gap: 12px; }
  .ml-side-stack .ml-card__header, .ml-side-stack .ml-summary__header { padding: 12px; }
  .ml-side-stack .ml-coupon, .ml-side-stack .ml-summary__body { padding: 12px; }
  .ml-side-stack .ml-item,
  .checkout-drawer .ml-side-stack .ml-item { grid-template-columns: 50px minmax(0, 1fr); padding: 12px 14px; gap: 8px 12px; align-items: start; }
  .ml-side-stack .ml-item__side,
  .checkout-drawer .ml-side-stack .ml-item__side { grid-column: 2; flex-direction: row; justify-content: space-between; align-items: center; gap: 10px; padding-top: 2px; }
  .ml-side-stack .ml-item__image,
  .checkout-drawer .ml-side-stack .ml-item__image { width: 50px; height: 50px; border-radius: 8px; }
  .ml-checkout .ml-coupon__form input,
  .ml-checkout .yp-input { font-size: 16px; }
}

.ml-checkout .ml-side-stack .ml-card, .ml-checkout .ml-side-stack .ml-summary, .ml-checkout .yp-method-option, .ml-checkout .ml-stage { border: 1px solid var(--sk-ds-line); background: var(--ml-card); box-shadow: none; }
.ml-checkout .yp-method-option.is-selected { border-color: color-mix(in srgb, var(--sk-ds-accent) 55%, var(--sk-ds-line)); background: color-mix(in srgb, var(--sk-ds-accent) 4%, var(--ml-card)); box-shadow: none; }
.ml-checkout .ml-card__header, .ml-checkout .ml-summary__header { background: transparent; }
.ml-checkout .ml-cart-products-list { display: flex; flex-direction: column; width: 100%; min-width: 0; box-sizing: border-box; padding: 0; }
.ml-cart-products-list > [role="listitem"] { min-width: 0; border-top: 1px solid var(--ml-border); }
.ml-cart-products-list > [role="listitem"]:first-child { border-top: 0; }
.ml-cart-products-list .ml-item { border-top: 0; }
.ml-checkout-back-bar { display: flex; align-items: center; padding: 8px 14px 0; max-width: var(--rv-page-max, 1312px); width: 100%; margin-inline: auto; box-sizing: border-box; }
.ml-checkout-topbar { display: flex; flex-direction: column; gap: 8px; padding: 12px 14px 0; max-width: var(--rv-page-max, 1312px); width: 100%; margin-inline: auto; box-sizing: border-box; }
.ml-checkout-topbar--with-back { padding-top: 10px; }
.ml-checkout-back { display: inline-flex; align-items: center; gap: 6px; align-self: flex-start; border: 0; background: transparent; padding: 2px 0; color: var(--ml-muted); font: 600 12px/1.3 var(--ml-font); cursor: pointer; transition: color 0.16s ease; }
.ml-checkout-back:hover:not(:disabled) { color: var(--ml-text); }
.ml-checkout-back:disabled { opacity: 0.45; cursor: not-allowed; }
.ml-checkout-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 5px; list-style: none; margin: 0; padding: 4px; border-radius: 10px; border: 1px solid var(--ml-border); background: var(--ml-soft); }
.ml-checkout-steps li { display: flex; align-items: center; justify-content: center; gap: 5px; padding: 6px 6px; border-radius: 7px; font: 600 11px/1.2 var(--ml-font); color: var(--ml-muted); white-space: nowrap; transition: background 0.16s ease, color 0.16s ease; }
.ml-checkout-step-btn { display: inline-flex; align-items: center; justify-content: center; gap: 5px; width: 100%; border: 0; padding: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
.ml-checkout-step-btn:hover { opacity: 0.85; }
.ml-checkout-steps li span { display: inline-grid; place-items: center; width: 18px; height: 18px; border-radius: 999px; font: 800 10px/1 var(--sk-font-heading); background: color-mix(in srgb, var(--ml-muted) 18%, transparent); color: var(--ml-muted); flex-shrink: 0; }
.ml-checkout-steps li.is-current { background: color-mix(in srgb, var(--sk-ds-accent) 14%, var(--ml-card)); color: var(--ml-text); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 34%, transparent); }
.ml-checkout-steps li.is-current span { background: var(--sk-ds-accent); color: var(--sk-ds-on-accent); }
.ml-checkout-steps li.is-done { color: var(--ml-trust-green); }
.ml-checkout-steps li.is-done span { background: color-mix(in srgb, var(--sk-ds-accent) 22%, transparent); color: var(--ml-trust-green); }
.ml-payment-order-bar { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 10px 12px; margin-top: 10px; border-radius: 10px; border: 1px solid var(--ml-border); background: var(--ml-soft); font-size: 12px; color: var(--ml-muted); }
.ml-payment-order-bar__info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.ml-payment-order-bar__save { font-size: 11px; font-weight: 700; color: var(--ml-trust-green); }
.ml-payment-order-bar__save.is-vip { color: var(--sk-ds-premium); }
.ml-payment-order-bar strong { color: var(--ml-text); font: 800 14.5px/1.2 var(--sk-font-heading); font-variant-numeric: tabular-nums; flex-shrink: 0; }
.ml-pix-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; list-style: none; margin: 0 0 14px; padding: 0; }
.ml-pix-steps li { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 6px; border-radius: 10px; border: 1px solid var(--ml-border); background: var(--ml-soft); font-size: 10.5px; font-weight: 600; line-height: 1.25; color: var(--ml-muted); text-align: center; }
.ml-pix-steps li span { display: inline-grid; place-items: center; width: 18px; height: 18px; border-radius: 999px; background: color-mix(in srgb, var(--sk-ds-accent) 18%, transparent); color: var(--ml-trust-green); font: 800 10px/1 var(--sk-font-heading); }
.ml-pix-expired-actions { display: grid; gap: 8px; width: 100%; }
.ml-pix-expired-actions .ml-button { width: 100%; min-height: 44px; }
.ml-checkout .ml-card__title { font-size: 13px; }
.ml-checkout .ml-summary__row, .ml-checkout .ml-summary__benefit-item { font-size: 12px; }
.ml-checkout .ml-card__header, .ml-checkout .ml-summary__header { padding: 12px 14px; }
.ml-checkout .ml-coupon, .ml-checkout .ml-summary__body { padding: 14px; }
.ml-checkout .ml-side-stack .ml-summary__total .ml-money--lg { font-size: 22px; }
@media (min-width: 1024px) {
  .ml-checkout .ml-page-subtitle, .ml-checkout .ml-stage-copy { font-size: 12px; }
  .ml-checkout .yp-method-option__header strong { font-size: 13px; }
  .ml-checkout__shell:has([data-review="true"]), .ml-checkout .ml-checkout__grid[data-review="true"] { max-width: none; }
  .ml-checkout__shell:has([data-review="true"]) { padding-inline: clamp(24px, 3vw, 64px); }
  .ml-checkout .ml-side-stack__sticky { grid-template-columns: minmax(0, 1fr) clamp(320px, 30vw, 480px); gap: clamp(16px, 2vw, 32px); position: static; }
  .ml-cart-coupon { grid-column: 1; grid-row: 2; }
  .ml-cart-products { grid-column: 1; grid-row: 1; }
  .ml-side-stack__sticky > .ml-summary { grid-column: 2; grid-row: 1 / span 2; align-self: start; }
  .ml-checkout .ml-side-stack > .ml-button.ml-desktop-only { position: static; width: 100%; margin: 16px 0 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; }
  .ml-checkout .ml-checkout__shell { padding-bottom: 24px; }
}

.ml-checkout .ml-button.ml-button--primary { min-height: 48px; padding: 12px 16px; border: 1px solid transparent; border-radius: 8px !important; background: var(--sk-ds-accent) !important; color: var(--sk-ds-on-accent) !important; box-shadow: none !important; font: 700 13.5px/1.35 var(--sk-font-heading); letter-spacing: 0; text-transform: none; transform: none !important; }
.ml-checkout .ml-button.ml-button--primary:hover:not(:disabled) { transform: none !important; filter: brightness(1.06); }
.ml-checkout .ml-button.ml-button--primary:active:not(:disabled) { transform: none !important; filter: brightness(0.96); }
.ml-checkout .ml-button.ml-button--primary:disabled { opacity: .45; cursor: not-allowed; }

.yp-header__navigation { display: flex; align-items: center; gap: 16px; min-width: 0; }
.yp-header__back { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-width: 36px; min-height: 36px; padding: 6px; border: 0; border-radius: 6px; background: transparent; color: var(--ml-text-sec); font: 500 12px/1.4 var(--ml-font); }
.ml-checkout .ml-checkout__grid { margin-top: 12px; }
.ml-checkout .ml-checkout__grid:focus { outline: none; }
@media (max-width: 640px) { .yp-header__navigation { gap: 8px; } .yp-header__back span { display: none; } }

.yp-secure-field { display: flex; align-items: center; height: 44px; padding: 0; overflow: hidden; box-sizing: border-box; min-width: 0; background: var(--ml-soft); }
.yp-secure-field iframe { color-scheme: light; background: transparent !important; display: block; width: 100%; height: 100%; border: 0; margin: 0; padding: 0; }
.checkout-drawer .yp-input { height: 44px; background: var(--ml-soft); border-radius: 10px; border: 1px solid var(--ml-border); }
.checkout-drawer .yp-input:focus,
.checkout-drawer .yp-input:focus-visible,
.checkout-drawer .yp-secure-field:focus-within,
.checkout-drawer .ml-coupon input:focus,
.checkout-drawer .ml-coupon input:focus-visible { outline: none !important; outline-offset: 0 !important; border-color: var(--sk-ds-accent); box-shadow: none !important; }
.checkout-drawer .ml-stage { border: 0; padding: 0; background: transparent; border-radius: 0; }
.yp-input[data-invalid="true"] { border-color: var(--sk-ds-danger, var(--sk-palette-red-ef4444)); }
.yp-card-brand-row { display: flex; justify-content: flex-end; margin-bottom: -4px; }
.yp-mp-brand-pill { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px; border: 1px solid var(--ml-border); background: var(--ml-card); color: var(--ml-text); font: 700 11px/1.2 var(--sk-font-heading); flex-shrink: 0; }
.yp-card-section fieldset { min-width: 0; }
.yp-bank-challenge { display: block; width: 100%; height: 600px; max-height: 75vh; border: 0; background: var(--sk-palette-neutral-ffffff); }
.yp-method-option__header[role="radio"] { cursor: pointer; }
.yp-method-option__header[aria-disabled="true"] { cursor: default; }
.ml-checkout .yp-method-option:not(.is-selected):hover { border-color: color-mix(in srgb, var(--sk-ds-accent) 45%, var(--sk-ds-line)); }
@media (max-width: 1023px) {
  .ml-checkout[data-mobile-dock="single-action"] .sk-auth-back,
  .ml-checkout[data-mobile-dock="payment-options"] .sk-auth-back { bottom: calc(var(--checkout-action-height, 64px) + 10px); z-index: 65; }
  .ml-checkout[data-cart-empty="true"] .sk-auth-back { bottom: calc(var(--rv-nav-mobile-bottom-h, 64px) + 10px); z-index: 65; }
}


.checkout-drawer-layer {
  position: fixed;
  inset: 0;
  z-index: 150;
  display: flex;
  justify-content: flex-end;
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 56%, transparent);
}
.checkout-drawer-layer[hidden] { display: none; }
.checkout-drawer {
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  width: min(100%, 440px);
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--ml-text);
  background: var(--ml-page);
  border: 0;
  box-shadow: var(--ml-shadow-hover);
  contain: layout style;
}
@media (max-width: 479px) {
  .checkout-drawer {
    width: 100%;
    border: 0;
    box-shadow: none;
  }
}
.checkout-drawer *,
.checkout-drawer *::before,
.checkout-drawer *::after {
  box-sizing: border-box;
}
.checkout-drawer__header {
  position: relative;
  flex: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: env(safe-area-inset-top, 0px) 12px 0 18px;
  min-height: 56px;
  background: var(--ml-card);
  border-bottom: 1px solid var(--ml-border);
  box-sizing: border-box;
}
.checkout-drawer__header h2 { font: 700 0.96rem var(--ml-font-heading); letter-spacing: -0.01em; }
.checkout-drawer__header button { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 8px; }
.checkout-drawer__body { position: relative; flex: 1; min-height: 0; overflow-y: auto; overscroll-behavior: contain; display: flex; flex-direction: column; }
.checkout-drawer .ml-checkout { position: relative; flex: 1 0 auto; min-height: 100%; overflow: visible; }
.checkout-drawer .ml-overlay {
  position: fixed;
  top: calc(56px + env(safe-area-inset-top, 0px));
  right: 0;
  bottom: 0;
  left: auto;
  width: min(100%, 440px);
  z-index: 160;
}
.checkout-drawer .ml-checkout[data-cart-empty="true"] { justify-content: center; }
.checkout-drawer .ml-checkout[data-cart-empty="true"] .sk-page-center { min-height: 0; padding: 28px 16px; }
.checkout-drawer .ml-checkout[data-cart-empty="true"] .sk-orbital { width: 6.25rem; height: 6.25rem; }
.checkout-drawer .ml-checkout .ml-checkout__shell { flex: 1 0 auto; padding-inline: 14px; padding-bottom: 16px; }
.checkout-drawer .ml-checkout .ml-checkout__grid,
.checkout-drawer .ml-checkout .ml-side-stack__sticky { grid-template-columns: minmax(0, 1fr); }
.checkout-drawer .ml-side-stack__sticky > * { grid-column: 1; grid-row: auto; width: 100%; align-self: stretch; }
.checkout-drawer .ml-side-stack__sticky > .ml-summary { align-self: stretch; width: 100%; }
.checkout-drawer .ml-side-stack .ml-item { grid-template-columns: 50px minmax(0, 1fr) auto; gap: 10px 12px; padding: 13px 14px; align-items: center; }
.checkout-drawer .ml-side-stack .ml-item__image { width: 50px; height: 50px; border-radius: 8px; }
.checkout-drawer .ml-side-stack .ml-item__name { font-size: 13.5px; line-height: 1.35; }
.checkout-drawer .ml-side-stack .ml-item__side { grid-column: auto; flex-direction: column; align-items: flex-end; justify-content: center; gap: 6px; min-width: 0; padding-top: 0; }
.checkout-drawer .ml-remove { height: 30px; min-height: 30px; min-width: 30px; padding: 0 9px; font-size: 11px; gap: 5px; }
.checkout-drawer .ml-stage .ml-pix-pending { padding: 14px 2px 6px; }
.checkout-drawer .ml-stage .ml-pix-qr { width: 192px; height: 192px; padding: 10px; border-radius: 14px; margin: 6px auto 14px; }
.checkout-drawer .ml-stage .ml-copy-row { width: 100%; padding: 10px; gap: 10px; margin-bottom: 12px; }
.checkout-drawer .ml-stage .ml-copy-row .ml-copy-row__btn { width: 100% !important; min-width: 0; }
.checkout-drawer .ml-approved { padding: 18px 14px 22px; }
.checkout-drawer .ml-approved__card { padding: 24px 18px; }
.checkout-drawer .sk-auth-back[aria-label="Voltar para a loja"] { display: none; }
.checkout-drawer .yp-footer { padding: 14px 16px 16px; gap: 7px; }
.checkout-drawer .yp-footer__brand-badge { width: 38px; height: 24px; box-shadow: none; }
.checkout-drawer .ml-checkout .ml-mobile-cta-bar {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  position: sticky;
  bottom: 0;
  left: auto;
  right: auto;
  width: 100%;
  max-width: 100%;
  min-height: 0;
  height: auto;
  padding: 10px 14px calc(12px + env(safe-area-inset-bottom, 0px));
  box-sizing: border-box;
  background: color-mix(in srgb, var(--ml-card) 96%, transparent);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-top: 1px solid var(--ml-border);
  box-shadow: 0 -6px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 22%, transparent);
  z-index: 35;
  flex-shrink: 0;
}
.checkout-drawer .ml-checkout .ml-mobile-cta-bar__meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: var(--ml-muted);
}
.checkout-drawer .ml-checkout .ml-mobile-cta-bar__meta strong {
  font: 800 15px/1.1 var(--sk-font-heading);
  color: var(--ml-text);
  font-variant-numeric: tabular-nums;
}
.checkout-drawer .ml-checkout .ml-mobile-cta-bar .ml-button {
  width: 100%;
  min-height: 46px !important;
  height: 46px;
  margin: 0;
  font: 700 13.5px/1.3 var(--sk-font-heading);
  box-shadow: none;
}
@media (min-width: 1024px) {
  .checkout-drawer__header {
    height: var(--rv-store-nav-bottom, 86px);
    min-height: var(--rv-store-nav-bottom, 86px);
    padding: var(--rv-store-ticker-h, 0px) 12px 0 18px;
    background: var(--sk-nav-surface, var(--ml-card));
  }
  .checkout-drawer__header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--rv-store-ticker-h, 0px);
    background: color-mix(in srgb, var(--sk-ds-accent) 10%, var(--sk-nav-surface, var(--ml-card)));
    border-bottom: 1px solid var(--ml-border);
    box-sizing: border-box;
    pointer-events: none;
  }
  .checkout-drawer .ml-overlay {
    top: var(--rv-store-nav-bottom, 86px);
  }
  .checkout-drawer .ml-checkout-back-bar {
    height: var(--rv-store-guide-h, 33px);
    min-height: var(--rv-store-guide-h, 33px);
    padding: 0 14px;
    background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, var(--sk-nav-surface, var(--ml-card)));
    border-bottom: 1px solid var(--ml-border);
    box-sizing: border-box;
  }
  .checkout-drawer .ml-checkout-topbar:not(.ml-checkout-topbar--with-back) {
    height: var(--rv-store-guide-h, 33px);
    min-height: var(--rv-store-guide-h, 33px);
    padding: 0 14px;
    justify-content: center;
    background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 1.5%, var(--sk-nav-surface, var(--ml-card)));
    border-bottom: 1px solid var(--ml-border);
    box-sizing: border-box;
  }
  .checkout-drawer .ml-checkout-topbar:not(.ml-checkout-topbar--with-back) .ml-checkout-steps {
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    height: 100%;
    align-items: center;
  }
  .checkout-drawer .ml-checkout-topbar:not(.ml-checkout-topbar--with-back) .ml-checkout-steps li {
    height: 24px;
    padding: 0 6px;
    border-radius: 6px;
    font-size: 10.5px;
  }
  .checkout-drawer .ml-checkout-topbar:not(.ml-checkout-topbar--with-back) .ml-checkout-steps li span {
    width: 16px;
    height: 16px;
    font-size: 9.5px;
  }
  .checkout-drawer .ml-checkout__shell:has([data-review="true"]) { padding-block: 0 16px; }
  .checkout-drawer [data-review="true"] .ml-side-stack__sticky {
    padding-top: 0; padding-bottom: 0; display: flex; flex-direction: column; gap: 12px;
  }
  .checkout-drawer .ml-side-stack__sticky > * { flex: none; width: 100%; align-self: stretch; }
  .checkout-drawer .yp-footer { padding: 14px 16px 16px; }
}
@media (prefers-reduced-motion: no-preference) {
  .checkout-drawer { animation: checkout-drawer-open .24s cubic-bezier(0.22, 1, 0.36, 1) both; }
  .checkout-drawer-layer[data-closing="true"] .checkout-drawer { animation: checkout-drawer-close .22s cubic-bezier(0.4, 0, 1, 1) forwards; }
  @keyframes checkout-drawer-open { from { transform: translateX(100%); } to { transform: translateX(0); } }
  @keyframes checkout-drawer-close { from { transform: translateX(0); } to { transform: translateX(100%); } }
}`,Et=a=>{const o=Y(a),i=o.match(/^R\$\s*([\d.]+),(\d{2})$/);return i?{amount:`R$ ${i[1]}`,cents:i[2]}:{amount:o,cents:""}},Cn=({value:a,size:o="md",previous:i=!1,className:r=""})=>{const p=Et(a),l=Y(a);return e.jsxs("span",{className:`ml-money ml-money--${o} ${i?"ml-price-old":""} ${r}`,role:"img","aria-label":l,children:[e.jsx("span",{className:"sr-only",children:l}),e.jsx("span",{"aria-hidden":"true",children:p.amount}),p.cents&&e.jsx("span",{className:"ml-money__cents","aria-hidden":"true",children:`,${p.cents}`})]})},wa=n.memo(({value:a})=>{const o=a.split("").reduce((r,p)=>r+p.charCodeAt(0),0),i=(r,p,l,R)=>{const b=r-l,s=p-R;return b<0||b>4||s<0||s>4?!1:b===0||b===4||s===0||s===4||b===2&&s===2};return e.jsx("div",{className:"ml-test-qr","aria-label":"QR Code PIX de teste",role:"img",children:Array.from({length:169}).map((r,p)=>{const l=p%13,R=Math.floor(p/13),b=i(l,R,0,0)||i(l,R,8,0)||i(l,R,0,8)||(o+l*17+R*31+l*R*7)%5===0;return e.jsx("span",{className:b?"is-active":void 0},p)})})});wa.displayName="TestPixQr";const ja=n.memo(()=>e.jsxs("div",{className:"ml-pix-hero-banner",children:[e.jsx("div",{className:"ml-pix-hero-banner__icon",children:e.jsx(c,{className:"fab fa-pix text-2xl sk-fg-accent"})}),e.jsxs("div",{children:[e.jsx("span",{className:"ml-pix-hero-banner__tag",children:"APROVAÇÃO INSTANTÂNEA • 24/7"}),e.jsx("h4",{className:"ml-pix-hero-banner__title font-orbitron",children:"Pagamento via PIX com Liberação Imediata"}),e.jsx("p",{className:"ml-pix-hero-banner__sub",children:"Gere o QR Code com liquidação bancária em segundos. Seu acesso é ativado automaticamente."})]})]}));ja.displayName="PixVisualBox";const Ca=n.memo(({entry:a,removeItem:o,removeGroup:i,coupon:r})=>{const p=a.type==="group",l=a.data,{src:R,onError:b}=Ct({imagemCapaUrl:l.imagemCapaUrl||l.image,imagem:l.imagem,imagensAdicionais:l.imagensAdicionais}),s=R||dt,k=Number(p?l.finalPrice||0:l.preco||0),T=r?.code&&r.rate>0?Number((k*(r.rate/100)).toFixed(2)):0,_=String(l.name||l.nome||"Produto").trim()||"Produto",x=String(l.meta||"").trim();return e.jsxs("article",{className:"ml-item",children:[e.jsx("div",{className:"ml-item__image",children:e.jsx("img",{decoding:"async",src:s,alt:_,width:56,height:56,loading:"lazy",referrerPolicy:"no-referrer",onError:b})}),e.jsxs("div",{className:"ml-item__main",children:[p&&e.jsxs("span",{className:"ml-badge ml-badge--orange",children:[e.jsx(c,{className:"fas fa-box-open",style:{fontSize:9}}),"Combo"]}),e.jsx("h3",{className:"ml-item__name",children:_}),x&&e.jsx("p",{className:"ml-item__meta",children:x}),p&&Array.isArray(l.items)&&l.items.length>0&&e.jsx("ul",{className:"ml-item__sublist",children:l.items.map(w=>{const X=l.totalPrice>0?w.preco/l.totalPrice:0,S=l.discount*X,g=w.preco-S,z=String(w.nome||"Produto").trim();return e.jsxs("li",{className:"ml-item__sub",children:[e.jsx("span",{className:"ml-item__sub-name",children:z}),e.jsxs("span",{className:"ml-item__sub-price",children:[l.discount>0&&e.jsx("span",{className:"ml-price-old",children:Y(w.preco)}),e.jsx("span",{className:"ml-price-green",children:Y(g)})]})]},w.code||z)})}),T>0&&e.jsxs("p",{className:"ml-item__coupon-note",children:[e.jsx(c,{className:"fas fa-ticket-alt"})," Cupom ",r.code,": − ",Y(T)]})]}),e.jsxs("div",{className:"ml-item__side",children:[e.jsxs("div",{className:"ml-item__pricing",children:[p&&l.discount>0&&e.jsx(Cn,{value:l.totalPrice,size:"sm",previous:!0}),e.jsx(Cn,{value:p?l.finalPrice:l.preco,size:"md"})]}),e.jsxs("button",{type:"button",className:"ml-remove",onClick:()=>p?i(l.items):o(l.code),"aria-label":"Remover "+String(_)+" do carrinho",children:[e.jsx(c,{className:"fas fa-trash-alt","aria-hidden":!0}),e.jsx("span",{className:"ml-remove__label",children:"Remover"})]})]})]})});Ca.displayName="CartItemRow";const Hn=n.memo(({label:a,onClick:o,disabled:i,totalLabel:r})=>e.jsxs("div",{className:"ml-mobile-cta-bar","data-mobile-checkout-dock":"single-action",role:"region","aria-label":"Ação principal do checkout",children:[r&&e.jsxs("div",{className:"ml-mobile-cta-bar__meta",children:[e.jsx("span",{children:"Total"}),e.jsx("strong",{children:r})]}),e.jsxs("button",{type:"button",onClick:o,disabled:i,className:"ml-button ml-button--primary",children:[e.jsx(c,{className:"fas fa-lock",style:{fontSize:13}}),e.jsx("span",{children:a})]})]}));Hn.displayName="MobileCtaBar";const Na=n.memo(({onPix:a,isSubmitting:o,disabled:i=!1,selectedMethod:r="pix",amount:p})=>{const l=typeof p=="number"&&Number.isFinite(p)?Y(p):"";return e.jsxs("div",{className:"ml-mobile-cta-bar ml-mobile-payment-cta","data-mobile-checkout-dock":"payment-options",role:"region","aria-label":"Finalizar pagamento",children:[l&&e.jsxs("div",{className:"ml-mobile-cta-bar__meta",children:[e.jsx("span",{children:"Total"}),e.jsx("strong",{children:l})]}),e.jsx("button",{type:"button",onClick:a,disabled:o||i,id:"mobile-cta-pix","aria-label":r==="cartao"?"Concluir pagamento (Pagar no Cartão)":"Gerar pagamento (Pagar com PIX)",className:"ml-button ml-button--primary",children:o?e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-spinner fa-spin"}),e.jsx("span",{children:r==="cartao"?"Processando...":"Gerando PIX..."})]}):r==="cartao"?e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-lock",style:{fontSize:13}}),e.jsx("span",{children:"Pagar com cartão"})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fab fa-pix",style:{fontSize:14}}),e.jsx("span",{children:"Gerar PIX"})]})})]})});Na.displayName="MobilePaymentCtaBar";function Pa(a,o){const i=String(a||"").trim();return!i||o&&i===o?!0:/\s/.test(i)?!1:/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)+$/.test(i)&&i.length<=24}function It(a,o){const i=[o?.nome,a.name,a.nome,o?.nomeBase].map(r=>String(r||"").trim()).filter(Boolean);for(const r of i)if(!Pa(r,a.code))return r;return"Produto"}function Rt(a){if(!a)return"";const o=String(a.baseWindows||"").trim();if(o)return`Baseado em ${o}`;const i=String(a.versao||"").trim();if(i)return`Versão ${i}`;const r=String(a.edicao||"").trim();return r&&!Pa(r,a.code)?r:""}function Tt(a,o){return o.find(i=>i.id===a.parentCode||i.code===a.code||(i.variants||[]).some(r=>r.code===a.code))}const At=n.memo(({onNavigateToStore:a,onBack:o})=>e.jsx("header",{className:"yp-header",role:"banner",children:e.jsxs("div",{className:"yp-header__inner",children:[e.jsxs("div",{className:"yp-header__navigation",children:[o&&e.jsxs("button",{type:"button",className:"yp-header__back",onClick:o,"aria-label":"Voltar",children:[e.jsx(Kn,{size:16}),e.jsx("span",{children:"Voltar"})]}),e.jsx("button",{type:"button",onClick:a,className:"yp-header__brand","aria-label":"Voltar à loja Skull Legion",children:e.jsx(it,{})})]}),e.jsxs("div",{className:"yp-header__secure",children:[e.jsx(St,{size:16,"aria-hidden":"true"}),e.jsx("div",{className:"yp-header__secure-text",children:e.jsx("strong",{children:"PAGAMENTO"})})]})]})}));At.displayName="YampiHeader";const Mt=[{id:"visa",name:"Visa",logo:"assets/payments/visa.svg"},{id:"mastercard",name:"Mastercard",logo:"assets/payments/mastercard.svg"},{id:"hipercard",name:"Hipercard",logo:"assets/payments/hipercard.svg"},{id:"mercadopago",name:"Mercado Pago",logo:"assets/payments/mercadopago.svg"},{id:"pix",name:"PIX",logo:"assets/payments/pix.svg"}],Gn=n.memo(({cardAvailable:a=!1})=>e.jsxs("footer",{className:"yp-footer",role:"contentinfo",children:[e.jsxs("div",{className:"yp-footer__brands","aria-label":"Bandeiras e formas de pagamento aceitas",children:[Mt.filter(o=>a||o.id==="pix").map(o=>e.jsx("div",{className:"yp-footer__brand-badge",children:e.jsx("img",{src:ct(o.logo),alt:o.name,className:"yp-footer__brand-img",width:"40",height:"26",loading:"lazy"})},o.id)),a&&e.jsx("div",{className:"yp-footer__brand-badge yp-footer__brand-badge--more","aria-label":"E outras bandeiras aceitas",children:e.jsx("span",{"aria-hidden":"true",children:"+"})})]}),e.jsxs("div",{className:"yp-footer__trust",children:[e.jsx(c,{className:"fas fa-lock","aria-hidden":!0}),e.jsx("span",{children:"Checkout criptografado • Ambiente seguro"})]})]}));Gn.displayName="YampiFooter";const Sa=n.memo(({onOpenDownloads:a,onOpenVip:o,isVip:i})=>e.jsxs("section",{className:"post-purchase-next","data-testid":"post-purchase-next","aria-label":"Próximos passos",children:[e.jsx("h3",{className:"post-purchase-next-title",children:"Pedido confirmado — próximos passos"}),e.jsx("p",{className:"post-purchase-next-sub",children:"Seus produtos estão disponíveis na sua conta."}),e.jsxs("div",{className:"post-purchase-next-grid",children:[e.jsxs("button",{type:"button",className:"post-purchase-next-card",onClick:a,children:[e.jsx(Nt,{size:18}),e.jsxs("span",{children:[e.jsx("strong",{children:"Minha Coleção"}),e.jsx("em",{children:"Acesse os arquivos e sistemas adquiridos"})]}),e.jsx(ba,{size:14})]}),!i&&o&&e.jsxs("button",{type:"button",className:"post-purchase-next-card post-purchase-next-card--vip",onClick:o,children:[e.jsx(Pt,{size:18}),e.jsxs("span",{children:[e.jsx("strong",{children:"Clube VIP"}),e.jsx("em",{children:"Descontos e benefícios contínuos"})]}),e.jsx(ba,{size:14})]})]})]}));Sa.displayName="PostPurchaseNextSteps";const Ot=({user:a,isTestMode:o,onNavigateToStore:i,onViewOrders:r,onOpenVip:p,onOpenCommissions:l})=>{const R=va(),b=a,s=b?.nome?b.nome.trim().split(" ")[0]:"",k=b?.cpf?b.cpf.replace(/\D/g,"").substring(0,3)+".***.***-**":"",T=async()=>{const _=()=>{if(l)l();else{window.dispatchEvent(new CustomEvent("skull:navigate",{detail:{tab:"commissions"}})),window.dispatchEvent(new CustomEvent("store-navigate-tab",{detail:{tab:"commissions"}}));try{const x=new URL(window.location.href);x.searchParams.set("tab","commissions"),window.history.pushState({},"",x.toString())}catch{window.location.href="?tab=commissions"}}};if(!b){_();return}try{const x=await Ne.acceptAffiliateTerms({emailUsuario:b.email,whatsapp:b.telefone||"00000000000",chavePix:b.cpf||"00000000000"});x?.sucesso&&x?.codigoAfiliado&&P.setItem(H.affiliateCode,x.codigoAfiliado)}catch{}finally{_()}};return e.jsx("div",{className:"ml-approved",children:e.jsxs("section",{className:"ml-approved__card","aria-labelledby":"checkout-approved-title",children:[e.jsx("div",{className:"ml-approved__icon",children:e.jsx(c,{className:"fas fa-check"})}),e.jsx("h2",{id:"checkout-approved-title",children:s?String(s)+", pagamento aprovado!":"Pagamento aprovado!"}),e.jsx("p",{children:o?"Pagamento de teste aprovado localmente. Nenhuma cobrança, venda ou liberação real foi criada.":"Sua compra foi concluída. O produto foi liberado instantaneamente e já está disponível em Minha Coleção."}),!o&&e.jsx("div",{style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginTop:18,padding:"14px 0",borderTop:"1px solid var(--ml-border)",borderBottom:"1px solid var(--ml-border)"},children:[{icon:"fa-download",text:"Acesso imediato",color:"var(--ml-trust-green)"},{icon:"fa-headset",text:"Suporte disponível",color:Se("--sk-palette-violet-a855f7")},{icon:"fa-shield-alt",text:"Compra segura",color:Se("--sk-palette-blue-3b82f6")}].map(({icon:_,text:x,color:w})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:5,minWidth:70},children:[e.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:`${w}18`,border:`1px solid ${w}25`,display:"grid",placeItems:"center",color:w},children:e.jsx(c,{className:`fas ${_}`,style:{fontSize:14}})}),e.jsx("span",{style:{fontSize:11,color:"var(--ml-muted)",fontWeight:600},children:x})]},x))}),b?.senhaIsCpf&&e.jsxs("div",{className:"ml-warning",style:{color:Se("--sk-palette-red-92400e"),backgroundColor:"color-mix(in srgb, var(--sk-palette-orange-fbbf24) 12%, transparent)",borderColor:"color-mix(in srgb, var(--sk-palette-orange-fbbf24) 35%, transparent)",marginTop:18,textAlign:"left"},children:[e.jsx(c,{className:"fas fa-key",style:{color:Se("--sk-palette-orange-f59e0b"),marginTop:2}}),e.jsxs("div",{children:[e.jsx("strong",{children:"Senha gerada automaticamente"}),e.jsxs("p",{style:{margin:"6px 0 0",fontSize:13,lineHeight:1.45},children:["Sua senha atual é o ",e.jsx("strong",{children:"CPF completo"})," utilizado na compra",k&&e.jsxs("span",{style:{fontFamily:"monospace",fontWeight:700},children:[" (",k,")"]}),". Recomendamos que você"," ",e.jsx("button",{type:"button",onClick:()=>window.location.href="?tab=perfil",className:"ml-link-button",children:"altere sua senha"})," ","em Minha Conta o quanto antes."]})]})]}),e.jsxs("div",{className:"ml-approved__actions",children:[e.jsxs("button",{type:"button",onClick:r,className:"ml-button ml-button--primary",children:[e.jsx(c,{className:"fas fa-download",style:{fontSize:13}}),e.jsx("span",{children:o?"Ver Minha Coleção":"Ir para Minha Coleção"})]}),e.jsxs("button",{type:"button",onClick:i,className:"ml-button ml-button--secondary",children:[e.jsx(c,{className:"fas fa-arrow-left",style:{fontSize:12}}),e.jsx("span",{children:"Continuar na loja"})]})]}),e.jsx(Sa,{onOpenDownloads:r,onOpenVip:R.vipEnabled?p||(()=>{window.location.href="?tab=vip"}):void 0,isVip:!!b?.isVIP}),R.affiliateEnabled&&e.jsxs("div",{className:"ml-approved__affiliate animate-slide-up",style:{animationDelay:"0.3s"},children:[e.jsxs("h3",{className:"ml-card__title",style:{marginBottom:10,justifyContent:"flex-start"},children:[e.jsx(c,{className:"fas fa-hand-holding-usd",style:{color:"var(--ml-trust-green)",fontSize:14}}),"Transforme sua compra em renda extra"]}),e.jsx("p",{style:{textAlign:"left",fontSize:13.5,lineHeight:1.55,color:"var(--ml-muted)",marginBottom:14},children:"Agora que você utiliza nossos sistemas, pode recomendá-los para colegas e ganhar comissão real por cada venda."}),e.jsxs("button",{type:"button",onClick:T,className:"ml-button ml-button--secondary",style:{width:"100%"},children:["Ativar minha conta de afiliado",e.jsx(c,{className:"fas fa-chevron-right",style:{fontSize:11}})]})]})]})})},Dt=Pe.pixTestMode,Qn=a=>String(a||"").trim().toUpperCase(),qt=a=>(a||[]).map(o=>`${String(o.code||o.parentCode||"").trim()}:${String(o.licenca?.id||o.licenca?.nome||"")}:${o.isRepurchase?"1":"0"}`).filter(Boolean).sort().join("|"),Ft=[],Un=()=>{try{return Qn(P.getItem(H.refToken))}catch{return""}};function Vt({cart:a,setCart:o,products:i,user:r,purchasedItems:p=Ft,onPaymentApproved:l,onUserProfileUpdated:R,onLoginRequired:b,showNotify:s,paymentStepActive:k=!1,isActive:T=!0}){const _=_a(),{affiliateEnabled:x,vipEnabled:w}=va(),X=`${r?.uid||""}:${r?.email||""}`,S=n.useRef({identity:X,active:!0});S.current.identity!==X&&(S.current.active=!1,S.current={identity:X,active:!0});const g=n.useCallback(()=>{const t=S.current;return()=>t.active&&S.current===t},[]);n.useEffect(()=>{S.current={identity:X,active:!0};const t=S.current;return()=>{t.active=!1}},[X]);const z=n.useRef(0),f=n.useRef(0),$=n.useRef(!1),j=n.useRef(0),B=n.useRef(!1),L=n.useRef(0),A=n.useRef(null),m=n.useCallback(()=>(A.current=null,L.current+=1,L.current),[]),G=n.useRef(!1),q=n.useRef(null),se=n.useRef(null),le=n.useMemo(()=>qt(a),[a]),[xe,me]=n.useState(null),ie=n.useRef(void 0),ee=n.useRef(null),[h,I]=n.useState(1),[M,E]=n.useState(()=>Pe.isMockMode),[ze,pe]=n.useState(!1),[sn,ln]=n.useState(null),[cn,fe]=n.useState(null),[Fe,Ve]=n.useState(null),be=n.useRef(null),[Tn,An]=n.useState("");n.useEffect(()=>{let t=!0;return(async()=>{try{const d=await Ne.paymentCapabilities?.({allowRemote:!!k});t&&d&&(d.publicKey||k||Pe.isMockMode)&&(E(d.cartao===!0),An(d.publicKey||""))}catch{t&&!Pe.isMockMode&&Pe.pixTestMode&&E(!1)}})(),()=>{t=!1}},[k]);const[Q,F]=n.useState("idle"),[$e,ne]=n.useState(!1),[Qe,dn]=n.useState({nome:r?.nome||"",email:r?.email||"",cpf:r?.cpf||""}),ce=n.useRef(Qe);n.useEffect(()=>{ce.current=Qe},[Qe]);const[Mn,Ee]=n.useState(!1),[Je,Nn]=n.useState(""),[Ie,mn]=n.useState("+55"),[Be,Re]=n.useState(""),[pn,We]=n.useState(null),[un,Te]=n.useState(null),[Le,ve]=n.useState(null),[he,Ye]=n.useState(!1),[ae,Ae]=n.useState(null),[Ze,Me]=n.useState(null),[xn,gn]=n.useState(""),[Pn,_e]=n.useState(!1),[On,re]=n.useState(null),[Dn,ge]=n.useState(null),[qn,fn]=n.useState(!1),Xe=n.useRef(null),hn=n.useRef(!1),Ue=n.useRef(0),Ke=n.useRef(0),O=n.useRef(!1);n.useEffect(()=>(ga.setPixPending(!!($e||ae&&Q==="pending_pix")),()=>ga.setPixPending(!1)),[ae,$e,Q]);const Oe=n.useRef(()=>{}),[bn,we]=n.useState(""),[He,de]=n.useState("idle"),[vn,je]=n.useState(()=>P.getItem(H.appliedCouponOwner)||""),[V,Ce]=n.useState(()=>P.getItem(H.appliedCoupon)),[De,ke]=n.useState(Un),en=mt(i,r),nn=Xn(r?.isVIP,r?.validadeAcesso),U=n.useRef({cart:a,products:i,purchasedItems:p,appliedCoupon:V,isVIP:nn,pricingRevision:en,policyRevision:_?.revision,revision:0}),ye=U.current;(ye.cart!==a||ye.products!==i||ye.purchasedItems!==p||ye.appliedCoupon!==V||ye.isVIP!==nn||ye.pricingRevision!==en||ye.policyRevision!==_?.revision)&&(U.current={cart:a,products:i,purchasedItems:p,appliedCoupon:V,isVIP:nn,pricingRevision:en,policyRevision:_?.revision,revision:ye.revision+1});const Yn=n.useRef(X);n.useEffect(()=>{Yn.current!==X&&(Yn.current=X,m(),z.current+=1,f.current+=1,$.current=!1,j.current+=1,B.current=!1,G.current=!1,q.current=null,se.current=null,O.current=!1,ne(!1),_e(!1),Ye(!1),re(null),pe(!1),fe(null),Ae(null),Me(null),ge(null),F("idle"),me(null),ee.current=null,ie.current=void 0,Ee(!1))},[X,m]),n.useEffect(()=>{const t=()=>{if(ae&&Q==="pending_pix"||O.current)return;z.current+=1,(Q==="approved"||Q==="expired")&&(pe(!1),fe(null),Ae(null),Me(null),F("idle"));const d=P.getItem(H.appliedCoupon);Ce(d),we(d||""),je(P.getItem(H.appliedCouponOwner)||""),de(d?"valid":"idle"),ke(Un())};return window.addEventListener(fa,t),()=>window.removeEventListener(fa,t)},[ae,Q]);const qe=n.useCallback((t,d=x,u=i)=>{const y=Xn(r?.isVIP,r?.validadeAcesso),C=v=>u.find(K=>K.code===v.code)||u.find(K=>(K.variants||[]).some(te=>te.code===v.code))||u.find(K=>K.id===v.parentCode),N=(v,K)=>{if(v.isRepurchase||Number(v.lockedPrice)>0)return Number(v.preco)||0;if(v.licenca&&typeof v.preco=="number"&&v.preco>0)return K&&v.licenca.precoVip?v.licenca.precoVip:v.licenca.precoPromocao&&v.licenca.precoPromocao<v.preco?v.licenca.precoPromocao:v.preco;const te=C(v),In=te?vt.price({...te,code:v.code},K):0;return In>0?In:Number(v.preco)||0},D=a.map(v=>({...v,preco:N(v,!1),precoVip:N(v,y)})),J=pt(D,t,d&&!!V&&!!t),Ge=D.map(v=>{const K=Tt(v,i),te=v.licenca?`Plano: ${v.licenca.nome}${v.licenca.tempoUso?" ("+v.licenca.tempoUso+")":""}`:"";return{type:"item",data:{...v,nome:It(v,K),imagem:K?.imagemCapaUrl||K?.imagem||v.imagem,meta:te||Rt(K)}}}),oe=a.map((v,K)=>({...v,preco:J.items[K].paidCents/100})),_n=J.paidCents/100,Z=(J.paidCents+J.couponDiscountCents)/100;return{itemsToRender:Ge,proportionalCart:oe,totalOriginal:J.publicCents/100,totalDiscount:J.vipDiscountCents/100,vipDiscount:J.vipDiscountCents/100,couponBaseTotal:Z,couponDiscount:J.couponDiscountCents/100,couponDiscountRate:Z>0?Number((J.couponDiscountCents/Z).toFixed(2)):0,finalTotal:_n,couponEligible:J.couponEligible}},[a,i,V,r?.isVIP,r?.validadeAcesso,en,x]),[Zn,za]=n.useState(null),Sn=n.useMemo(()=>qe(_),[qe,_]);n.useEffect(()=>{if(!(x||q.current||O.current)){if(z.current+=1,V){const t=qe(_,!0).finalTotal;Math.abs(t-Sn.finalTotal)>.009&&me({previousTotal:t,nextTotal:Sn.finalTotal})}Ce(null),we(""),je(""),de("idle"),ke(""),P.removeItem(H.appliedCoupon),P.removeItem(H.appliedCouponOwner),P.removeItem(H.refToken)}},[x,V,qe,_,Sn.finalTotal,Q]);const{itemsToRender:Ea,proportionalCart:Ia,totalOriginal:Ra,totalDiscount:Ta,vipDiscount:Aa,couponBaseTotal:Ma,couponDiscount:Oa,couponDiscountRate:Da,finalTotal:zn,couponEligible:Fn}=ae&&Zn?Zn:Sn;n.useEffect(()=>{if(r){const t={nome:r.nome,email:r.email,cpf:r.cpf||""};ce.current=t,dn(t)}},[r?.nome,r?.email,r?.cpf]),n.useEffect(()=>{if(a.length===0||!r)return;let t="";try{t=P.getSessionItem("skull_checkout_express")||(P.getSessionItem("skull_vip_express")==="1"?"vip":"")}catch{t=""}if(!t)return;const d=a.length===1&&la({code:a[0].code,nome:a[0].nome,id:a[0].parentCode||a[0].code}),u=a.every(C=>C.isRepurchase);if(t==="vip"&&!d||t==="repurchase"&&!u)return;!!(r.cpf&&String(r.cpf).replace(/\D/g,"").length>=11)&&h===1&&Q==="idle"&&I(3);try{P.removeSessionItem("skull_checkout_express"),P.removeSessionItem("skull_vip_express")}catch{}},[a,r?.email,r?.cpf]),n.useEffect(()=>{if(!(!r?.email||Q!=="idle"||ae||q.current||O.current))try{const t=P.getJSON("skull_pending_payment",null);if(!t?.id||!t?.email||String(t.email).trim().toLowerCase()!==String(r.email).trim().toLowerCase())return;if(t.cartSignature&&le&&t.cartSignature!==le){P.removeItem("skull_pending_payment");return}q.current=String(t.id),se.current=t.cartSignature||le||null,pe(t.metodoPagamento==="cartao"),Ae({id:String(t.id),qrCode:String(t.qrCode||""),qrCodeBase64:String(t.qrCodeBase64||"")}),Me(typeof t.expiresAt=="number"?t.expiresAt:null),I(3),F("pending_pix")}catch{}},[r?.email,Q,ae,le]),n.useEffect(()=>{if(!(Q!=="pending_pix"||!q.current)&&le){if(!se.current){se.current=le;return}if(se.current!==le){se.current=null,q.current=null,be.current=null,f.current+=1,G.current=!1,O.current=!1,_e(!1),me(null),ee.current=null,F("idle"),ne(!1),Me(null),I(1),pe(!1),fe(null),Ae(null),ge(null);try{P.removeItem("skull_pending_payment")}catch{}}}},[Q,le]),n.useEffect(()=>{if(!Ze){gn("");return}const t=()=>{const u=Ze-Date.now();if(u<=0){gn("Expirado");return}const y=Math.floor(u/6e4),C=Math.floor(u%6e4/1e3);gn(`${String(y).padStart(2,"0")}:${String(C).padStart(2,"0")}`)};t();const d=setInterval(t,1e3);return()=>clearInterval(d)},[Ze]);const ea=T&&($e||Q==="pending_pix");n.useEffect(()=>(ca(ea),()=>ca(!1)),[ea]),n.useEffect(()=>()=>{Xe.current&&clearTimeout(Xe.current)},[]);const na=n.useCallback(()=>{try{const t=new AudioContext,d=(u,y,C,N=.3)=>{const D=t.createOscillator(),J=t.createGain();D.connect(J),J.connect(t.destination),D.frequency.value=u,D.type="sine",J.gain.setValueAtTime(N,t.currentTime+y),J.gain.exponentialRampToValueAtTime(.001,t.currentTime+y+C),D.start(t.currentTime+y),D.stop(t.currentTime+y+C)};d(880,0,.12,.4),d(1100,.08,.12,.35),d(1320,.16,.18,.3),d(1760,.24,.4,.25),setTimeout(()=>t.close(),1500)}catch{}},[]),kn=n.useCallback(async t=>{if(S.current.active){q.current=null,hn.current=!1,Ue.current=0,se.current=null,be.current=null,Ve(null),re(null),na(),da("success"),F("approved"),o([]),ne(!1),O.current=!1;try{P.setJSON(H.userCart,[])}catch{}try{P.removeItem("skull_pending_payment")}catch{}P.removeItem(H.refToken),P.removeItem(H.appliedCoupon),P.removeItem(H.appliedCouponOwner),Ce(null),jt(()=>import("./StoreSyncCoordinator.B60UtDoj.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(d=>d.StoreSyncCoordinator.broadcast({type:"orders_updated",email:ce.current.email})).catch(()=>{}),l(t)}},[o,l,na]);n.useEffect(()=>{Oe.current=kn},[kn]),n.useEffect(()=>{const t=q.current;if(Q==="pending_pix"&&t?.startsWith("TEST-PIX-")&&xn==="Expirado"){q.current=null,F("expired");return}Q==="pending_pix"&&t&&p.some(d=>String(d.numeroPedido)===t)&&Oe.current()},[Q,p,xn]);const yn=n.useCallback((t=ce.current)=>t.nome.trim()?ut(t.email)?ma(t.cpf)?!0:(s("CPF inválido.","erro"),!1):(s("Use um e-mail válido.","erro"),!1):(s("Preencha seu nome.","erro"),!1),[s]),an=n.useCallback(()=>{if(!r)return b?.(),!1;if(!_&&A.current!==null)return!1;const t=m();if(xt.isCheckoutProfileComplete(r))return!0;const d=()=>{Nn(ua(ce.current.cpf||""));const u=_t(r.telefone);mn(u.ddi),Re(u.numero),We(null),Te(null),ve(null),Ee(!0)};if(!_){A.current=t;const u=g(),y=()=>u()&&t===L.current;return ha.getPolicy().then(C=>{y()&&(C?d():s("Política de afiliados indisponível. Tente novamente após atualizar a loja.","erro"))}).catch(()=>{y()&&s("Política de afiliados indisponível. Tente novamente após atualizar a loja.","erro")}).finally(()=>{y()&&(A.current=null)}),!1}return d(),!1},[r,b,_,g,s,m]),aa=n.useCallback(()=>a.some(t=>t.code!=="360"&&gt(t,p,r)==="owned")?{ok:!1,reason:"Há um produto com acesso ativo neste carrinho. Acesse sua coleção ou remova o produto antes de continuar."}:ft.assertCheckoutReady(a,i,ce.current,Xn(r?.isVIP,r?.validadeAcesso)),[a,i,r,p]),En=!a.some(t=>Number(t.lockedPrice)>0),tn=n.useCallback(async t=>{if(!S.current.active||q.current||O.current||G.current)return;if(!w&&a.some(Z=>la({...Z,id:Z.parentCode||Z.code}))){s("Novas adesões VIP estão indisponíveis. Remova o plano do carrinho para continuar.","erro");return}if(xe&&ee.current!==xe.nextTotal)return;const d=g(),u=++f.current,y=()=>d()&&u===f.current,C=U.current,N=z.current,D=ce.current;if(!yn(D))return;const J=aa();if(!J.ok){const Z=J.reason||"Não foi possível validar seu carrinho.";ge(Z),s(Z,"erro");return}const Ge=qe(_),oe=t?.metodoPagamento||"pix",_n=oe==="pix"&&En;O.current=!0,ge(null),ne(!0),F("processing");try{if(!_n&&!Pe.isMockMode&&jn.getCatalogFreshness()!=="live"){const ue=await jn.waitForLiveCatalogSync(2e4);if(!y())return;if(!ue.ok)throw new Error("Não foi possível confirmar preços e disponibilidade atuais no servidor. Tente novamente em instantes.");if(ue.changed.includes("products")&&Array.isArray(ue.produtos)&&ue.produtos.length>0){const wn=ue.produtos;if(a.find(sa=>{const Wn=String(sa.code||"").trim(),Ln=String(sa.parentCode||"").trim();return!wn.some(on=>on.code===Wn||on.id===Wn||Ln&&(on.code===Ln||on.id===Ln)||Array.isArray(on.variants)&&on.variants.some(tt=>String(tt.code||"").trim()===Wn))}))throw new Error("Um ou mais itens do carrinho tiveram a disponibilidade alterada no servidor. Revise o carrinho antes de continuar.");const Bn=qe(_,x,wn);if(Math.abs(Bn.finalTotal-Ge.finalTotal)>.009&&ee.current!==Bn.finalTotal){ie.current=t,me({previousTotal:Ge.finalTotal,nextTotal:Bn.finalTotal}),F("idle"),ne(!1),O.current=!1;return}}}const Z=x&&!_&&(!_n||!!V),v=Z?await ha.getPolicy(!0):_;if(!y())return;const K=U.current;if(C.cart!==K.cart||C.products!==K.products||C.purchasedItems!==K.purchasedItems||C.appliedCoupon!==K.appliedCoupon||C.isVIP!==K.isVIP||C.pricingRevision!==K.pricingRevision||N!==z.current||JSON.stringify(D)!==JSON.stringify(ce.current)){F("idle"),ne(!1),O.current=!1;return}if(Z&&!v)throw new Error("Política de afiliados indisponível.");if(x!==Rn.get().affiliateEnabled||w!==Rn.get().vipEnabled){F("idle"),ne(!1),O.current=!1;return}const te=qe(v);if(Math.abs(te.finalTotal-Ge.finalTotal)>.009&&ee.current!==te.finalTotal){ie.current=t,me({previousTotal:Ge.finalTotal,nextTotal:te.finalTotal}),F("idle"),ne(!1),O.current=!1;return}ee.current=null;const In=t?.parcelas||1;if(te.finalTotal<=0)throw new Error("Esta configuração zera o pedido. Solicite atendimento para concluir a aquisição gratuita.");const oa=oe==="cartao"?Jn(te.finalTotal):te.finalTotal,ia=JSON.stringify([D.email,oe,oa,V,v?.revision,te.proportionalCart.map(ue=>ue.code),t?.card?.token]);be.current?.fingerprint!==ia&&typeof crypto.randomUUID=="function"&&(be.current={fingerprint:ia,key:crypto.randomUUID()});const W=await Ne.createPixPayment({email:D.email,nome:D.nome,cpf:D.cpf.replace(/\D/g,""),valor:oa,valorBase:te.couponBaseTotal,itens:te.proportionalCart,codigoCupom:x?V:null,descontoCupom:te.couponDiscount,affiliatePolicyRevision:v?.revision,metodoPagamento:oe,cotacaoPixSoberana:_n,parcelas:In,card:t?.card,attemptKey:be.current?.key,refToken:x?P.getItem(H.refToken):null});if(!y()){u===f.current&&(F("idle"),ne(!1),O.current=!1);return}if(W.sucesso){if(oe==="cartao"&&W.cardPayment!==!0)throw new Error("O gateway não oferece o pagamento integrado. Atualize o gateway antes de continuar.");if(pe(oe==="cartao"),ln(oe==="cartao"&&t?.card?t.card.amountCents/100:null),fe(oe==="cartao"&&W.cardChallenge||null),me(null),za(te),Ae({qrCode:W.qrCode||"",qrCodeBase64:W.qrCodeBase64||"",id:W.idPagamento}),(W.aprovado===!0||W.delivery===void 0&&(W.statusInterno==="Pago"||W.status==="approved"))&&W.delivery!=="pending"&&!W.cardChallenge){ne(!1),O.current=!1,await Oe.current(W);return}q.current=W.idPagamento,hn.current=!0,Ue.current=0,Ke.current=0,se.current=le||null,re(null);const ue=W.expiraEm?Date.parse(String(W.expiraEm)):NaN,wn=Number.isFinite(ue)?ue:/^po_[a-f0-9]{48}$/.test(W.idPagamento)?null:Date.now()+1800*1e3;Ve(W.financial==="approved"&&W.delivery==="pending"?"delivery":null),Me(wn),I(3),F("pending_pix"),ne(!1),O.current=!1;try{P.setJSON("skull_pending_payment",{id:W.idPagamento,qrCode:W.qrCode||"",qrCodeBase64:W.qrCodeBase64||"",email:D.email,expiresAt:wn,metodoPagamento:oe,cartSignature:le,timestamp:Date.now()})}catch{}}else{W.revisarCotacaoPix&&jn.startSnapshotDeltaRevalidation(!0),be.current=null;try{P.removeItem("skull_pending_payment")}catch{}I(1);const ue=W.mensagem||(oe==="cartao"?"Não foi possível preparar o pagamento com cartão.":"Não foi possível gerar o pagamento via PIX.");ge(ue),F("idle"),ne(!1),O.current=!1,pa.reportIncident({tipo:oe==="cartao"?"CHECKOUT_CARTAO_ERRO":"CHECKOUT_PIX_ERRO",mensagem:ue,detalhes:{total:zn,itensCount:a.length,metodoPagamento:oe}})}}catch(Z){if(!y()){u===f.current&&(F("idle"),ne(!1),O.current=!1);return}I(1);const v=Z instanceof Error&&/Política de afili|Esta configuração|confirmar preços e disponibilidade|disponibilidade alterada/.test(Z.message)?Z.message:t?.metodoPagamento==="cartao"?"Não conseguimos preparar o pagamento com cartão agora. Tente de novo em instantes.":"Não conseguimos gerar o PIX agora. Tente de novo em instantes.";ge(v),F("idle"),ne(!1),O.current=!1,pa.reportIncident({tipo:t?.metodoPagamento==="cartao"?"CHECKOUT_CARTAO_ERRO":"CHECKOUT_PIX_ERRO",mensagem:Z?.message||v,stack:Z?.stack,detalhes:{total:zn,itensCount:a.length,metodoPagamento:t?.metodoPagamento}})}},[yn,aa,qe,zn,V,s,a,g,_,xe,x,w,En]),qa=n.useCallback(async()=>{xe&&(ee.current=xe.nextTotal,await tn(ie.current))},[xe,tn]),Fa=n.useCallback(()=>{ee.current=null,me(null),I(1)},[]),Va=n.useCallback(async t=>{t?.preventDefault(),t?.stopPropagation(),!$.current&&an()&&await tn()},[an,tn]),ta=n.useCallback(async(t,d={})=>{if(!Rn.get().affiliateEnabled||!S.current.active||q.current||O.current||$.current)return;const u=g(),y=++z.current,C=()=>u()&&y===z.current&&!q.current&&!O.current,N=Qn(t);if(!N){s("Digite um código de cupom.","erro");return}if(!_){d.silent||s("Política de afiliados indisponível. Tente novamente em instantes.","erro");return}if(!Fn){d.silent||s("Adicione um produto pago ao carrinho para aplicar o código.","erro");return}if(!r){d.silent||s("Faça login para usar cupom de desconto.","erro");return}if(r&&Qn(r.codigoAfiliado)===N){s("Cupom desativado para esta compra! Não é permitido utilizar um cupom gerado pelo seu próprio CPF/E-mail, pois viola as políticas de segurança da plataforma.","erro");return}de("validating");try{if(!Pe.isMockMode&&jn.getCatalogFreshness()!=="live"){const J=await jn.waitForLiveCatalogSync(2e4);if(!C())return;if(!J.ok){de("idle"),d.silent||s("Não foi possível confirmar o catálogo com o servidor agora. Tente novamente em instantes.","erro");return}}const D=await Ne.validateCoupon(N,r?.email);if(!C())return;D.sucesso&&D.codigoValido?(Ce(N),we(N),je(D.nomeAfiliado||"Afiliado"),de("valid"),P.setItem(H.appliedCoupon,N),P.setItem(H.appliedCouponOwner,D.nomeAfiliado||"Afiliado"),d.silent||s(`Cupom de ${D.nomeAfiliado||"afiliado"} aplicado!`,"sucesso")):(de("invalid"),Ce(null),je(""),P.removeItem(H.appliedCoupon),P.removeItem(H.appliedCouponOwner),d.silent||s(D.mensagem||"Código inválido ou expirado.","erro"))}catch{if(!C())return;de("invalid"),d.silent||s("Sem conexão para validar cupom.","erro")}},[r,s,Fn,_,g]),$a=n.useCallback(async()=>{Rn.get().affiliateEnabled&&await ta(bn)},[ta,bn]),Vn=n.useCallback(()=>{!S.current.active||q.current||O.current||(z.current+=1,Ce(null),we(""),je(""),de("idle"),P.removeItem(H.appliedCoupon),P.removeItem(H.appliedCouponOwner))},[]);n.useEffect(()=>{const t=()=>ke(Un());return t(),window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[]);const Ba=x&&De?{code:De,ownerName:V===De?vn:"",status:V===De&&He==="valid"?"applied":"detected",isApplied:V===De&&He==="valid"}:null;n.useEffect(()=>{a.length===0&&V&&Vn()},[a.length,V,Vn]);const Wa=n.useCallback(async t=>{const d=String(t||"").trim();if(!d)return;let u=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(d),u=!0)}catch{}if(!u)try{const y=document.createElement("textarea");y.value=d,y.setAttribute("readonly","true"),y.style.position="fixed",y.style.opacity="0",document.body.appendChild(y),y.select(),y.setSelectionRange(0,d.length),u=document.execCommand("copy"),y.remove()}catch{}u?(da("success"),fn(!0),Xe.current&&clearTimeout(Xe.current),Xe.current=setTimeout(()=>fn(!1),2e3)):s("Toque no campo do código PIX para selecionar e copiar manualmente.","erro")},[s]),La=n.useCallback(async t=>{if(t?.preventDefault(),!ae?.id||G.current||!S.current.active||q.current!==ae.id)return;const d=g(),u=ae.id,y=f.current,C=()=>d()&&y===f.current&&q.current===u;G.current=!0,_e(!0);try{const N=await Ne.simulatePixPaymentTest(ae.id);if(!C())return;N.sucesso?kn():s(N.mensagem||"Erro na simulação.","erro")}catch{C()&&s("Erro ao processar.","erro")}finally{d()&&y===f.current&&(G.current=!1,_e(!1))}},[ae,s,kn,g]),Xa=n.useCallback(async t=>{t?.preventDefault();const d=ae?.id;if(!d||G.current||!S.current.active||q.current!==d||d.startsWith("TEST-PIX-")||d.startsWith("MOCK-CARD-"))return;const u=g(),y=f.current,C=()=>u()&&y===f.current&&q.current===d;G.current=!0,_e(!0),re(null);try{const N=await Ne.verifyPixPayment(d);if(!C())return;if(!N?.sucesso){re("Não foi possível consultar o registro agora. A confirmação automática continua ativa.");return}if(Ve(N.financial==="approved"&&N.delivery==="pending"?"delivery":["disputed","partial_refund"].includes(N.financial)&&N.delivery!=="available"?"review":null),N.aprovado===!0)await Oe.current(N);else if(N.finalizado){q.current=null,be.current=null;try{P.removeItem("skull_pending_payment")}catch{}F(N.statusInterno==="Devolvido"?"reversed":N.statusInterno==="Recusado"?"rejected":"expired")}else re("Ainda aguardando a confirmação do Mercado Pago. Assim que cair, liberaremos em Minha Coleção e por e-mail.")}catch(N){console.error("Falha ao carregar o pagamento registrado.",N),C()&&re("Não foi possível consultar o registro agora. A confirmação automática continua ativa.")}finally{u()&&y===f.current&&(G.current=!1,_e(!1))}},[ae?.id,g]),Ua=n.useCallback(()=>{m(),f.current+=1,$.current=!1,j.current+=1,q.current=null,hn.current=!1,Ue.current=0,se.current=null,G.current=!1,_e(!1),re(null),me(null),ee.current=null,O.current=!1,F("idle"),ne(!1),Me(null),I(1),pe(!1),fe(null),Ae(null),ge(null),O.current=!1;try{P.removeItem("skull_pending_payment")}catch{}},[m]),ra=n.useCallback(async t=>{if(!V)return!0;const d=g(),u=z.current,y=f.current,C=()=>d()&&u===z.current&&y===f.current;F("processing");try{const N=await Ne.validateCoupon(V,t||void 0);return C()?!N.sucesso||!N.codigoValido?(Ce(null),je(""),P.removeItem(H.appliedCoupon),P.removeItem(H.appliedCouponOwner),s(N.mensagem||"Cupom desativado para esta compra! Não é permitido utilizar um cupom gerado pelo seu próprio CPF/E-mail, pois viola as políticas de segurança da plataforma.","erro"),F("idle"),!1):(F("idle"),!0):!1}catch{return C()&&(s("Falha de conexão. Verifique a internet.","erro"),F("idle")),!1}},[V,s,g]),rn=n.useCallback(async t=>{if(!S.current.active||$.current||O.current||q.current||G.current)return;$.current=!0;const d=++j.current,u=g(),y=f.current,C=U.current.revision,N=z.current,D=ce.current;try{if(!yn(D))return;const oe=(t?.metodoPagamento||"pix")==="pix"&&En||(!V||He==="valid")||await ra(D.email);if(!u()||y!==f.current)return;if(!oe||C!==U.current.revision||N!==z.current||JSON.stringify(D)!==JSON.stringify(ce.current)){F("idle");return}pe(t?.metodoPagamento==="cartao"),fe(null),ge(null),await tn(t)}finally{u()&&d===j.current&&($.current=!1)}},[yn,ra,tn,g,En,V,He]),Ka=n.useCallback(async()=>{if(!r){b?.();return}an()&&await rn()},[r,b,an,rn]),Ha=n.useCallback(async t=>{if(!an()){ie.current=t;return}await rn(t)},[an,rn]),$n=n.useCallback(()=>{he||(m(),We(null),Te(null),ve(null),Ee(!1))},[he,m]),Ga=n.useCallback(t=>{Nn(ua(t)),pn&&We(null),Le&&ve(null)},[pn,Le]),Qa=n.useCallback(t=>{Re(xa(t,Ie)),un&&Te(null),Le&&ve(null)},[Ie,un,Le]),Ja=n.useCallback(t=>{mn(t),Re(d=>xa(d,t)),Te(null),ve(null)},[]),Ya=n.useCallback(async()=>{if(!S.current.active||B.current)return;if(!r){$n(),b?.();return}if(!ma(Je)){We("Informe um CPF válido para continuar.");return}if(!ht(Be,Ie)){Te("Informe um WhatsApp válido para continuar.");return}m();const t=g(),d=U.current.revision;B.current=!0,Ye(!0),We(null),Te(null),ve(null);try{const u=await bt.completeCheckoutProfile(r,{cpf:Je,whatsapp:Be,ddi:Ie});if(!t())return;if(!u?.sucesso||!u.cpf||!u.telefone){ve(u?.mensagem||"Não foi possível concluir seu cadastro. Tente novamente.");return}const y={...ce.current,cpf:u.cpf};if(ce.current=y,dn(y),R?.({cpf:u.cpf,telefone:u.telefone}),!t())return;Ee(!1);const C=d===U.current.revision;s(C?"Cadastro concluído com segurança. Continuando sua compra...":"Cadastro concluído com segurança. Revise seu carrinho para continuar.","sucesso"),C&&await rn(ie.current)}catch{if(!t())return;ve("Não foi possível concluir seu cadastro. Verifique sua conexão e tente novamente.")}finally{t()&&(B.current=!1,Ye(!1))}},[r,Je,Be,Ie,$n,b,R,s,rn,g,m]),Za=n.useCallback(()=>{q.current||O.current||$.current||(m(),h===3&&(Q!=="idle"&&(F("idle"),ne(!1)),ge(null),I(1)))},[h,Q,m]),et=n.useCallback(()=>{ge(null)},[]),nt=n.useCallback(t=>o(a.filter(d=>d.code!==t)),[a,o]),at=n.useCallback(t=>{const d=t.map(u=>u.code);o(a.filter(u=>!d.includes(u.code)))},[a,o]);return{checkoutStep:h,status:Q,isSubmitting:$e,isProfileCompletionOpen:Mn,profileCpf:Je,profileWhatsappDdi:Ie,profileWhatsapp:Be,profileCpfError:pn,profileWhatsappError:un,profileCompletionError:Le,isCompletingProfile:he,pixData:ae,pixExpiresAt:Ze,pixCountdown:xn,isVerifying:Pn,paymentCheckFeedback:On,pixError:Dn,clearPixError:et,pixCopied:qn,paymentProcessing:Fe,pixTestMode:Dt,cardAvailable:M,isCardPayment:ze,cardChargeTotal:sn,cardChallenge:cn,cardPublicKey:Tn,couponInput:bn,setCouponInput:we,couponStatus:He,setCouponStatus:de,couponOwnerName:vn,appliedCoupon:V,couponDiscountRate:Da,affiliateReferral:Ba,itemsToRender:Ea,proportionalCart:Ia,totalOriginal:Ra,totalDiscount:Ta,vipDiscount:Aa,couponBaseTotal:Ma,couponDiscount:Oa,couponEligible:x&&Fn,finalTotal:zn,policyChange:xe,handleConfirmPolicyChange:qa,handleCancelPolicyChange:Fa,handlePaymentSuccess:kn,handleGeneratePix:Va,handleApplyCoupon:$a,handleRemoveCoupon:Vn,handleCopyPixCode:Wa,handleSimulatePixPayment:La,handleCheckPaymentStatus:Xa,handleCancelPix:Ua,handleStartCheckout:Ka,handlePayWithPix:Ha,handleBackStep:Za,handleProfileCpfChange:Ga,handleProfileWhatsappChange:Qa,handleProfileWhatsappDdiChange:Ja,handleCompleteProfile:Ya,handleCloseProfileCompletion:$n,removeItem:nt,removeGroup:at,validateForm:yn}}const $t=({id:a,amount:o,publicKey:i="",disabled:r=!1,defaultHolderName:p="",defaultEmail:l="",defaultDocument:R="",onToken:b,onReadyChange:s})=>{const k=Pe.isMockMode,T=n.useRef(b);T.current=b;const _=n.useRef(null),x=n.useRef({number:k,expiry:k,cvv:k}),[w,X]=n.useState(""),[S,g]=n.useState(""),[z,f]=n.useState(0),[$,j]=n.useState(()=>typeof document<"u"&&document.documentElement.classList.contains("dark")?"dark":"light"),[B,L]=n.useState(!k),[A,m]=n.useState({}),G=String(R||"").replace(/\D/g,"").slice(0,14),[q,se]=n.useState(G);n.useEffect(()=>{if(typeof document>"u"||typeof MutationObserver>"u")return;const h=new MutationObserver(()=>{j(document.documentElement.classList.contains("dark")?"dark":"light")});return h.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>h.disconnect()},[]),n.useEffect(()=>{se(G)},[G]),n.useEffect(()=>{let h=!0,I;if(X(""),g(""),m({}),x.current={number:k,expiry:k,cvv:k},L(!k),s(k),!k){const M=E=>{h&&(L(!1),X(E),console.error("[Cartão] Campos seguros indisponíveis."))};Ne.mountInlineCardForm({id:a,amount:o,publicKey:i,onToken:E=>h?T.current(E):void 0,onReady:()=>{h&&(L(!1),s(!0))},onError:M,onValidationError:E=>{h&&g(E)},onCardStateChange:E=>{h&&m(ze=>({...ze,...E}))},onFieldsValidityChange:E=>{h&&(x.current=E,E.number&&E.expiry&&E.cvv&&g(""))}}).then(E=>{h?I=E:E()}).catch(E=>M(E instanceof Error?E.message:"Não foi possível preparar o cartão."))}return()=>{h=!1,I?.(),s(!1)}},[a,o,i,k,z,$,s]),n.useEffect(()=>{const h=_.current;if(!h)return;const I=M=>{const E=fe=>h.querySelector(`#${a}-${fe}`)?.value?.trim()||"",ze=E("document").replace(/\D/g,""),pe=E("document-type")||"CPF",sn=E("holder"),ln=E("email");if(!k){if(!x.current.number){M.preventDefault(),g("Informe um número de cartão válido.");return}if(!x.current.expiry){M.preventDefault(),g("Informe uma data de validade válida (MM/AA).");return}if(!x.current.cvv){M.preventDefault(),g("Informe o código de segurança (CVV) do cartão.");return}}if(sn.length<3){M.preventDefault(),g("Informe o nome completo impresso no cartão.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ln)){M.preventDefault(),g("Informe um e-mail válido do titular do cartão.");return}const cn=pe==="CNPJ"?14:11;if(ze.length!==cn){M.preventDefault(),g(pe==="CNPJ"?"Informe um CNPJ válido com 14 números.":"Informe um CPF válido com 11 números.");return}if(!k&&o<.5){M.preventDefault(),g("O valor mínimo para pagamento no cartão não foi atingido. Use Pix para concluir este pedido.");return}g("")};return h.addEventListener("skull:card-validate",I),()=>h.removeEventListener("skull:card-validate",I)},[a,k,o]);const le=ka(o),xe=A.paymentMethodName||(k?"Visa":""),me=(h,I,M="text",E="")=>e.jsxs("div",{className:"yp-form-group",children:[e.jsx("label",{className:"yp-label",htmlFor:`${a}-${h}`,children:I}),e.jsx("input",{id:`${a}-${h}`,className:"yp-input",type:M,defaultValue:E,autoComplete:"off",onInput:()=>{S&&g("")},required:!0})]}),ie=(h,I)=>e.jsxs("div",{className:"yp-form-group",children:[e.jsx("label",{className:"yp-label",htmlFor:`${a}-${h}`,children:I}),e.jsxs("select",{id:`${a}-${h}`,className:"yp-input",onChange:()=>{S&&g("")},required:!0,children:[h==="installments"&&le.map(M=>e.jsx("option",{value:M.installments,children:M.label},M.installments)),k&&h==="issuer"&&e.jsx("option",{value:"mock",children:"Banco de teste"}),k&&h==="document-type"&&e.jsx("option",{value:"CPF",children:"CPF"})]})]}),ee=(h,I,M)=>e.jsxs("div",{className:"yp-form-group",children:[e.jsx("span",{id:`${a}-${h}-label`,className:"yp-label",children:I}),e.jsx("div",{id:`${a}-${h}`,className:"yp-input yp-secure-field",role:"group","aria-labelledby":`${a}-${h}-label`,children:k?M:null})]});return e.jsxs("form",{ref:_,id:a,className:"yp-card-section","aria-label":"Formulário de cartão de crédito",onSubmit:k?h=>{if(h.preventDefault(),r)return;const I=h.currentTarget,M=E=>I.querySelector(`#${a}-${E}`)?.value||"";T.current({amountCents:Math.round(o*100),token:"MOCK-CARD-TOKEN",paymentMethodId:"visa",issuerId:"mock",installments:Number(M("installments")||1),email:M("email"),identificationType:"CPF",identificationNumber:M("document").replace(/\D/g,"")})}:void 0,children:[xe&&e.jsx("div",{className:"yp-card-brand-row",children:e.jsxs("span",{className:"yp-mp-brand-pill","data-brand":A.paymentMethodId||"card",children:[A.paymentMethodThumbnail?e.jsx("img",{src:A.paymentMethodThumbnail,alt:"",width:20,height:14}):null,e.jsx("span",{children:xe.toUpperCase()})]})}),k&&e.jsx("p",{className:"ml-stage-copy",children:"Simulação local: cartão fictício. Não informe dados reais."}),!k&&B&&!w&&e.jsx("p",{className:"ml-stage-copy",role:"status","aria-live":"polite",children:"Carregando campos seguros…"}),e.jsxs("fieldset",{className:"yp-card-inputs",disabled:r,children:[ee("number","Número do cartão","4111 •••• •••• 1111"),me("holder","Nome no cartão","text",p),e.jsxs("div",{className:"yp-form-row",children:[ee("expiry","Validade","12/30"),ee("cvv","CVV","•••")]}),me("email","E-mail do titular","email",l),e.jsxs("div",{className:"yp-form-row",children:[ie("document-type","Tipo de documento"),e.jsxs("div",{className:"yp-form-group",children:[e.jsx("label",{className:"yp-label",htmlFor:`${a}-document`,children:"CPF ou CNPJ do titular"}),e.jsx("input",{id:`${a}-document`,className:"yp-input",type:"text",inputMode:"numeric",maxLength:14,value:q,placeholder:"Somente números",autoComplete:"off",onChange:h=>{se(h.target.value.replace(/\D/g,"").slice(0,14)),S&&g("")},required:!0})]})]}),ie("issuer","Banco emissor"),ie("installments","Parcelamento")]}),w&&e.jsxs("div",{className:"ml-warning",role:"alert",children:[e.jsx("span",{children:w}),e.jsx("button",{type:"button",className:"ml-link-button",onClick:()=>f(h=>h+1),children:"Tentar novamente"})]}),!w&&S&&e.jsx("div",{className:"ml-warning",role:"alert",children:e.jsx("span",{children:S})})]})},Bt=({challenge:a})=>{const o=n.useRef(null),i="skull-card-authentication",r=/^https:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,63}(?::443)?\//i.test(a.url)&&!/\.(?:local|localhost|internal)(?::443)?\//i.test(a.url)&&/^[A-Za-z0-9_+=/-]{16,16000}$/.test(a.creq);return n.useEffect(()=>{r&&o.current?.submit()},[a.url,a.creq,r]),r?e.jsxs("section",{"aria-label":"Autenticação do banco",children:[e.jsx("p",{className:"ml-stage-copy",children:"Confirme o pagamento com seu banco abaixo."}),e.jsx("iframe",{name:i,title:"Autenticação segura do cartão",className:"yp-bank-challenge",sandbox:"allow-forms allow-scripts allow-same-origin"}),e.jsx("form",{ref:o,action:a.url,method:"post",target:i,hidden:!0,children:e.jsx("input",{type:"hidden",name:"creq",value:a.creq})})]}):e.jsx("div",{className:"ml-warning",role:"alert",children:"Não foi possível abrir a autenticação do banco. Aguarde a confirmação antes de tentar novamente."})},Wt=({summary:a,cart:o,itemsToRender:i,appliedCoupon:r,couponStatus:p,couponInput:l,couponOwnerName:R,couponDiscountRate:b,couponDiscount:s,couponEligible:k,affiliateReferral:T,removeItem:_,removeGroup:x,handleApplyCoupon:w,handleRemoveCoupon:X,setCouponInput:S,setCouponStatus:g})=>{const z=_a();return e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"ml-card ml-cart-products","aria-labelledby":"cart-products-title",children:[e.jsxs("div",{className:"ml-card__header",children:[e.jsxs("h2",{id:"cart-products-title",className:"ml-card__title",children:[e.jsx(c,{className:"fas fa-shopping-bag",style:{color:"var(--ml-trust-green)",fontSize:13}}),"Produtos selecionados"]}),e.jsxs("span",{className:"ml-card__count",children:[o.length," ",o.length===1?"item":"itens"]})]}),e.jsx("div",{className:"ml-cart-products-list",role:"list","aria-label":"Produtos do carrinho",children:i.map((f,$)=>e.jsx("div",{role:"listitem",children:e.jsx(Ca,{entry:f,removeItem:_,removeGroup:x,coupon:r?{code:r,rate:b}:null})},f.type==="group"?`g-${f.data?.id||f.data?.name||$}`:`i-${f.data?.code||f.data?.id||$}`))})]}),k&&e.jsxs("section",{className:"ml-card ml-cart-coupon","aria-labelledby":"coupon-title",children:[e.jsxs("div",{className:"ml-card__header",children:[e.jsxs("h2",{id:"coupon-title",className:"ml-card__title",children:[e.jsx(c,{className:"fas fa-shield-alt",style:{color:"var(--sk-ds-accent)",fontSize:13}}),"Cupom de desconto"]}),r&&e.jsxs("span",{className:"ml-badge ml-badge--green",children:[e.jsx(c,{className:"fas fa-check",style:{fontSize:9}}),"Aplicado"]})]}),e.jsxs("div",{className:"ml-coupon",children:[T&&e.jsxs("div",{className:`ml-affiliate-referral ml-affiliate-referral--${T.status}`,children:[e.jsx("div",{className:"ml-affiliate-referral__icon",children:e.jsx(c,{className:T.isApplied?"fas fa-check":"fas fa-handshake"})}),e.jsxs("div",{className:"ml-affiliate-referral__body",children:[e.jsx("strong",{children:T.isApplied?String(T.ownerName||"Seu afiliado")+" garantiu seu desconto":"Cupom de Afiliado Disponível"}),e.jsxs("p",{children:["Você chegou por indicação. O desconto e o registro da comissão só valem se",e.jsx("strong",{children:" você mesmo digitar"})," o cupom no campo abaixo e clicar em aplicar (não aplicamos o código sozinhos — isso protege o histórico do afiliado e o seu). Código: ",e.jsx("span",{className:"font-mono font-bold",children:T.code})]})]}),T.isApplied?e.jsx("span",{className:"ml-affiliate-referral__badge",children:"Ativado"}):e.jsx("button",{type:"button",onClick:()=>{S(T.code),g("idle")},className:"ml-button ml-button--secondary ml-affiliate-referral__button",children:"Preencher código"})]}),r&&p==="valid"?e.jsxs("div",{className:"ml-coupon__applied",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"ml-option-title",style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(c,{className:"fas fa-tag",style:{color:"var(--ml-trust-green)",fontSize:11}}),r,R&&e.jsxs("span",{style:{fontSize:11,color:"var(--ml-muted)",fontWeight:400},children:["— de ",R]})]}),e.jsxs("div",{className:"ml-option-desc",children:["Economia de ",e.jsxs("strong",{style:{color:"var(--ml-trust-green)"},children:[Y(s),z?` (${z.buyerDiscountPct}%)`:""]})," aplicada"]})]}),e.jsx("button",{type:"button",onClick:X,className:"ml-link-button",children:"Remover"})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"ml-coupon__form",children:[e.jsx("input",{id:"coupon-input",type:"text",placeholder:"Insira seu código",value:l,autoComplete:"off",onFocus:f=>f.target.select(),onChange:f=>{S(f.target.value.toUpperCase()),p!=="idle"&&g("idle")},onKeyDown:f=>f.key==="Enter"&&w()}),e.jsx("button",{type:"button",onClick:w,disabled:!z||p==="validating"||!l.trim(),className:"ml-button ml-button--secondary",children:p==="validating"?e.jsx(c,{className:"fas fa-spinner fa-spin"}):"Aplicar"})]}),p==="invalid"&&e.jsxs("p",{className:"ml-warning",style:{marginTop:10},children:[e.jsx(c,{className:"fas fa-times-circle"}),"Código inválido ou expirado. Verifique e tente novamente."]})]})]})]}),a]})},Lt=({isCheckoutLocked:a,isSubmitting:o,handlePayWithPix:i,selectedMethod:r,onMethodChange:p,cardFormId:l,onCardReadyChange:R,finalTotal:b=119.9,itemCount:s=1,totalSaved:k=0,hasVipDiscount:T=!1,pixError:_=null,onClearError:x,cardAvailable:w=!1,cardPublicKey:X,payerName:S,payerEmail:g,payerDocument:z})=>{const f=m=>{x?.(),p(m)},$=ya(),j=Jn(b,$),B=ka(j),L=B.length>0?B[B.length-1]:null,A=r==="cartao"?j:b;return e.jsxs("div",{className:"ml-payment-selection",children:[e.jsxs("div",{className:"ml-payment-order-bar","aria-label":"Resumo do valor",children:[e.jsxs("div",{className:"ml-payment-order-bar__info",children:[e.jsxs("span",{children:[s," ",s===1?"item":"itens"," · ",r==="cartao"?"Total no cartão":"Total no Pix"]}),k>0&&e.jsxs("small",{className:T?"ml-payment-order-bar__save is-vip":"ml-payment-order-bar__save",children:["Economia de ",Y(k)]})]}),e.jsx("strong",{children:Y(A)})]}),e.jsxs("div",{className:"yp-method-tabs",role:"radiogroup","aria-label":"Forma de pagamento",children:[e.jsxs("div",{className:`yp-method-option ${r==="cartao"?"is-selected":""}`,onClick:m=>{w&&!m.target?.closest(".yp-card-section")&&f("cartao")},children:[e.jsxs("div",{className:"yp-method-option__header",role:"radio","aria-checked":r==="cartao","aria-disabled":!w,tabIndex:w?0:-1,onClick:()=>{w&&f("cartao")},onKeyDown:m=>{w&&m.target===m.currentTarget&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),f("cartao"))},children:[e.jsxs("div",{className:"yp-method-option__left",children:[e.jsx("div",{className:"yp-method-option__radio"}),e.jsxs("div",{children:[e.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(c,{className:"fas fa-credit-card",style:{color:Se("--sk-palette-cyan-38bdf8")}}),"Cartão de crédito"]}),e.jsx("div",{className:"yp-method-sub",children:w?L&&L.installments>1?e.jsxs(e.Fragment,{children:[Y(j)," · Em até ",L.installments,"x de ",Y(L.installmentValue)," s/ juros"]}):e.jsxs(e.Fragment,{children:[Y(j)," · 1x sem juros no cartão"]}):e.jsx("span",{children:"Indisponível"})})]})]}),w?e.jsx("span",{className:"yp-badge-instant",style:{background:"color-mix(in srgb, var(--sk-palette-cyan-38bdf8) 12%, transparent)",color:Se("--sk-palette-cyan-38bdf8"),borderColor:"color-mix(in srgb, var(--sk-palette-cyan-38bdf8) 25%, transparent)"},children:L&&L.installments>1?`Até ${L.installments}x s/ juros`:"1x s/ juros"}):e.jsx("span",{className:"yp-method-sub",children:"Indisponível"})]}),w&&r==="cartao"&&e.jsx("div",{style:{marginTop:12},children:e.jsx($t,{id:l,amount:j,publicKey:X,disabled:o,onReadyChange:R,onToken:m=>i({metodoPagamento:"cartao",parcelas:m.installments,card:m}),defaultHolderName:S,defaultEmail:g,defaultDocument:z})}),!w&&e.jsx("div",{style:{marginTop:12,opacity:.65},children:e.jsx("p",{className:"ml-stage-copy",children:"Cartão indisponível no momento. Tente novamente mais tarde."})})]}),e.jsxs("div",{className:`yp-method-option ${r==="pix"?"is-selected":""}`,onClick:()=>f("pix"),children:[e.jsxs("div",{className:"yp-method-option__header",role:"radio","aria-checked":r==="pix",onClick:()=>f("pix"),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),f("pix"))},tabIndex:0,children:[e.jsxs("div",{className:"yp-method-option__left",children:[e.jsx("div",{className:"yp-method-option__radio"}),e.jsxs("div",{children:[e.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(c,{className:"fab fa-pix",style:{color:Se("--sk-palette-teal-10b981")}}),"Pix"]}),e.jsxs("div",{className:"yp-method-sub",children:[e.jsx("strong",{style:{color:Se("--sk-palette-teal-10b981")},children:Y(b)})," à vista • Liberação imediata"]})]})]}),e.jsx("span",{className:"yp-badge-instant",children:"Melhor valor"})]}),r==="pix"&&e.jsx("div",{style:{marginTop:10},children:e.jsx("p",{className:"ml-stage-copy",style:{margin:0},children:"A confirmação do Pix é instantânea. Pague pelo app do seu banco com o QR Code ou código gerado."})})]})]}),_&&e.jsxs("div",{className:"ml-warning",role:"alert",style:{marginBottom:14},children:[e.jsx(c,{className:"fas fa-exclamation-circle",style:{marginTop:2,flexShrink:0}}),e.jsx("span",{children:_})]}),a&&e.jsxs("div",{className:"ml-warning",children:[e.jsx(c,{className:"fas fa-tools"}),e.jsxs("div",{children:[e.jsx("strong",{children:"Checkout temporariamente bloqueado."}),e.jsx("br",{}),"Estamos realizando manutenção no sistema de pagamentos. Tente novamente em breve."]})]})]})},Xt=({status:a,isSubmitting:o,isVerifying:i,isPixTestMode:r,instantAccessText:p,pixData:l,pixCountdown:R,pixError:b,pixCopied:s,isCardPayment:k,cardChallenge:T,paymentProcessing:_,paymentCheckFeedback:x,handleGeneratePix:w,handleCopyPixCode:X,handleSimulatePixPayment:S,handleCheckPaymentStatus:g,handleCancelPix:z})=>{if(a==="reversed"||_)return e.jsxs("section",{className:"ml-card",role:"status",children:[e.jsx("div",{className:"ml-card__header",children:e.jsx("h2",{className:"ml-card__title",children:a==="reversed"?"Pagamento revertido":_==="delivery"?"Pagamento confirmado. Preparando sua entrega.":"Pagamento em análise"})}),a==="reversed"&&e.jsx("button",{type:"button",className:"ml-link-button",onClick:z,children:"Voltar ao carrinho"})]});if(k&&a!=="approved")return e.jsxs("section",{className:"ml-card","aria-label":"Pagamento com cartão",children:[e.jsx("div",{className:"ml-card__header",children:e.jsx("h2",{className:"ml-card__title",children:a==="expired"?"Pagamento expirado":a==="rejected"?"Cartão recusado":"Confirmando pagamento com cartão"})}),e.jsxs("div",{className:"ml-card__body sk-stack",children:[a!=="expired"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"ml-stage-copy",children:a==="rejected"?"O banco recusou esta tentativa. Confira os dados ou escolha outro meio de pagamento.":"Conclua a verificação do banco abaixo. Assim que o Mercado Pago confirmar, o acesso será liberado em Minha Coleção e por e-mail."}),T&&a==="pending_pix"&&e.jsx(Bt,{challenge:T}),(r||!!l?.id?.startsWith("MOCK-CARD-"))&&e.jsxs("button",{type:"button",onClick:S,disabled:i,className:"ml-button ml-button--secondary",style:{marginTop:8},children:[i?e.jsx(c,{className:"fas fa-spinner fa-spin"}):e.jsx(c,{className:"fas fa-bolt"}),"Simular aprovação do cartão"]}),!r&&!l?.id?.startsWith("MOCK-CARD-")&&a==="pending_pix"&&g&&e.jsxs("button",{type:"button",onClick:g,disabled:i,className:"ml-button ml-button--secondary",style:{marginTop:8},children:[i?e.jsx(c,{className:"fas fa-spinner fa-spin"}):e.jsx(c,{className:"fas fa-check-circle"}),e.jsx("span",{children:i?"Verificando…":"Já concluí — verificar liberação"})]}),x&&e.jsx("p",{className:"ml-stage-copy",role:"status","aria-live":"polite",style:{marginTop:6},children:x})]}),a==="expired"||a==="rejected"?e.jsx("button",{type:"button",className:"ml-link-button",onClick:z,children:"Voltar às formas de pagamento"}):e.jsx("p",{className:"ml-stage-copy",children:"Você pode fechar esta tela; a confirmação continua no Mercado Pago."})]})]});const f=r&&/^(TEST-PIX-|MOCK-PIX-)/.test(l?.id||""),$=!!(l?.qrCodeBase64&&!f),j=!!l?.qrCode;return a==="expired"?e.jsxs("section",{className:"ml-card animate-slide-up","aria-labelledby":"pix-expired-title",children:[e.jsx("div",{className:"ml-card__header",children:e.jsxs("h2",{id:"pix-expired-title",className:"ml-card__title",children:[e.jsx(c,{className:"fas fa-clock",style:{color:Se("--sk-palette-orange-f59e0b"),fontSize:13}}),"Este código PIX venceu"]})}),e.jsxs("div",{className:"ml-pix-pending",children:[e.jsxs("div",{className:"ml-warning",style:{marginBottom:14,textAlign:"left"},children:[e.jsx(c,{className:"fas fa-clock",style:{marginTop:2,flexShrink:0},"aria-hidden":!0}),e.jsx("span",{children:"O prazo deste código acabou. Se você já pagou, confira o pedido e o extrato antes de gerar outro código."})]}),e.jsxs("div",{className:"ml-pix-expired-actions",children:[e.jsxs("button",{type:"button",className:"ml-button ml-button--primary",onClick:w,disabled:o,children:[e.jsx(c,{className:"fas fa-rotate-right","aria-hidden":!0}),e.jsx("span",{children:o?"Gerando…":"Gerar novo código PIX"})]}),e.jsx("button",{type:"button",className:"ml-button ml-button--secondary",onClick:z,children:e.jsx("span",{children:"Voltar ao carrinho"})})]})]})]}):a==="pending_pix"?e.jsxs("section",{className:"ml-card animate-slide-up","aria-labelledby":"pix-pending-title",children:[e.jsxs("div",{className:"ml-card__header",children:[e.jsx("h2",{id:"pix-pending-title",className:"ml-card__title",children:j?"PIX pronto para pagar":"Preparando o pagamento Pix"}),R&&e.jsx("span",{className:"ml-badge ml-badge--orange",children:R==="Expirado"?"Expirado":"Expira em "+String(R)})]}),e.jsxs("div",{className:"ml-pix-pending",children:[j&&e.jsxs("ol",{className:"ml-pix-steps","aria-label":"Como pagar com PIX",children:[e.jsxs("li",{children:[e.jsx("span",{children:"1"}),"Abra seu banco"]}),e.jsxs("li",{children:[e.jsx("span",{children:"2"}),"Escaneie ou copie"]}),e.jsxs("li",{children:[e.jsx("span",{children:"3"}),"Liberação automática"]})]}),($||f&&j)&&e.jsx("div",{className:"ml-pix-qr",children:$?e.jsx("img",{decoding:"async",src:`data:image/png;base64,${l?.qrCodeBase64}`,alt:"QR Code Pix"}):e.jsx(wa,{value:l?.qrCode||""})}),j&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"ml-page-subtitle ml-page-subtitle--center",children:"Ou use o código copia-e-cola:"}),e.jsxs("div",{className:"ml-copy-row ml-copy-row--centered",children:[e.jsx("input",{type:"text",readOnly:!0,value:l?.qrCode||"","aria-label":"Código Pix copia e cola",onClick:B=>B.target.select(),onFocus:B=>B.target.select()}),e.jsx("button",{type:"button",onClick:()=>X(l?.qrCode||""),className:"ml-button ml-button--green ml-copy-row__btn ml-copy-row__btn--centered",style:s?{opacity:.9}:void 0,children:s?e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-check"}),e.jsx("span",{children:"Código copiado!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"far fa-copy"}),e.jsx("span",{children:"Copiar código PIX"})]})})]})]}),e.jsxs("div",{className:"ml-digital-note ml-digital-note--centered",role:"status","aria-live":"polite",children:[e.jsx("span",{className:"ml-digital-note__spin","aria-hidden":"true",children:e.jsx(c,{className:i?"fas fa-spinner fa-spin":"fas fa-bolt"})}),e.jsx("span",{className:"ml-digital-note__text",children:r?"Modo teste ativo. Nenhum link real será liberado.":j?"Você pode fechar a loja após pagar. Assim que o acesso estiver liberado, enviaremos um e-mail e o produto aparecerá em Minha Coleção.":"Preparando o código Pix no Mercado Pago."})]}),r&&e.jsxs("button",{type:"button",onClick:S,disabled:i,className:"ml-button ml-button--secondary",style:{margin:"14px auto 0",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,width:"auto",minWidth:220},children:[i?e.jsx(c,{className:"fas fa-spinner fa-spin"}):e.jsx(c,{className:"fas fa-bolt"}),"Simular pagamento teste"]}),!f&&j&&g&&e.jsxs("button",{type:"button",onClick:g,disabled:i,className:"ml-button ml-button--secondary",style:{margin:"14px auto 0",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,width:"auto",minWidth:220},children:[i?e.jsx(c,{className:"fas fa-spinner fa-spin"}):e.jsx(c,{className:"fas fa-check-circle"}),e.jsx("span",{children:i?"Verificando…":"Já paguei — verificar liberação"})]}),x&&e.jsx("p",{className:"ml-page-subtitle ml-page-subtitle--center",role:"status","aria-live":"polite",style:{marginTop:10},children:x}),e.jsxs("div",{style:{marginTop:16,textAlign:"center",display:"grid",gap:6,justifyItems:"center"},children:[e.jsx("button",{type:"button",onClick:z,className:"ml-link-button",children:"Trocar forma de pagamento ou editar carrinho"}),e.jsx("p",{className:"ml-page-subtitle ml-page-subtitle--center",style:{margin:0,fontSize:11.5},children:"Caso já tenha pago este código no banco, aguarde a confirmação automática antes de trocar."})]})]})]}):e.jsxs("section",{className:"ml-payment-card","aria-label":"Pagamento via PIX",children:[e.jsxs("div",{className:"ml-card__header",children:[e.jsxs("h2",{id:"checkout-payment-card-title",className:"ml-card__title",children:[e.jsx(c,{className:"fab fa-pix",style:{color:"var(--ml-trust-green)",fontSize:13}}),"Pague com PIX"]}),e.jsxs("span",{className:"ml-badge ml-badge--green",children:[e.jsx(c,{className:"fas fa-shield-alt",style:{fontSize:9}}),"Seguro"]})]}),e.jsxs("div",{className:"ml-pix-box",children:[e.jsx(ja,{}),e.jsxs("div",{className:"ml-digital-note",children:[e.jsx(c,{className:"fas fa-bolt"}),e.jsxs("span",{children:[e.jsx("strong",{children:"À vista, s/juros."})," ","Aprovação em segundos — ",p]})]}),r&&e.jsxs("div",{className:"ml-test-note",children:[e.jsx(c,{className:"fas fa-flask"}),e.jsx("span",{children:"Ambiente TEST ativo: o pagamento pode ser simulado sem gerar cobrança real."})]}),e.jsx("button",{type:"button",onClick:w,disabled:o,className:"ml-button ml-button--green",style:{width:"100%",minHeight:48,borderRadius:24,fontSize:13,fontWeight:700,margin:"14px 0 0",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:o?e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-spinner fa-spin"}),e.jsx("span",{children:"Gerando QR Code..."})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-lock",style:{fontSize:12}}),e.jsx("span",{children:"Gerar QR Code PIX"})]})}),b&&e.jsxs("div",{className:"ml-warning",style:{marginTop:12},children:[e.jsx(c,{className:"fas fa-exclamation-circle"}),b]})]})]})},Ut=({checkoutStep:a,totalOriginal:o,totalDiscount:i,couponDiscount:r,appliedCoupon:p,couponOwnerName:l,finalTotal:R,isTestMode:b,vipDiscount:s=0,cardSurcharge:k=0})=>{const T=i+r;return e.jsxs("aside",{className:"ml-summary","aria-label":"Resumo da compra",children:[e.jsx("div",{className:"ml-summary__header",children:e.jsxs("h3",{className:"ml-card__title",children:[e.jsx(c,{className:"fas fa-receipt",style:{color:"var(--ml-trust-green)",fontSize:13}}),"Resumo da compra"]})}),e.jsxs("div",{className:"ml-summary__body",children:[e.jsxs("div",{className:"ml-summary__row",children:[e.jsx("span",{children:"Produto(s)"}),e.jsx(Cn,{value:o,size:"sm"})]}),s>0&&e.jsxs("div",{className:"ml-summary__row ml-summary__vip-row",children:[e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:5},children:[e.jsx(c,{className:"fas fa-crown",style:{color:"var(--sk-ds-premium)",fontSize:11}}),"Desconto Clube VIP"]}),e.jsxs("strong",{className:"ml-price-vip",children:["− ",Y(s)]})]}),p&&r>0&&e.jsxs("div",{className:"ml-summary__row",children:[e.jsxs("span",{children:[e.jsxs("span",{className:"ml-summary__coupon",children:[e.jsx(c,{className:"fas fa-ticket-alt",style:{marginRight:4,fontSize:9}}),p]}),l&&e.jsxs("small",{className:"ml-summary__coupon-owner",children:["Desconto aplicado por ",l]})]}),e.jsxs("strong",{className:"ml-price-green",children:["− ",Y(r)]})]}),k>0&&e.jsxs("div",{className:"ml-summary__row",children:[e.jsx("span",{children:"Acréscimo no cartão"}),e.jsx(Cn,{value:k,size:"sm"})]}),e.jsx("div",{className:"ml-summary__line"}),e.jsxs("div",{className:"ml-summary__row ml-summary__total",children:[e.jsx("div",{children:e.jsx("strong",{style:{fontSize:15},children:a===3?"Você paga":"Total"})}),e.jsx("div",{style:{textAlign:"right"},children:e.jsx(Cn,{value:R,size:"lg"})})]}),T>0&&e.jsxs("div",{className:"ml-summary__save ml-summary__save--big",children:[e.jsx(c,{className:"fas fa-piggy-bank",style:{marginRight:6}}),"Você economiza ",Y(T)," nesta compra!"]}),e.jsxs("div",{className:"ml-summary__benefits",children:[e.jsxs("div",{className:"ml-summary__benefit-item",children:[e.jsx(c,{className:"fas fa-bolt ml-summary__benefit-icon"}),e.jsx("span",{children:"Liberação instantânea após aprovação"})]}),e.jsx("div",{className:"ml-summary__benefit-item",children:b?e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-flask ml-summary__benefit-icon"}),e.jsx("span",{children:"Modo de teste — sem cobrança real"})]}):e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-layer-group ml-summary__benefit-icon"}),e.jsx("span",{children:"Disponível em Minha Coleção"})]})})]})]})]})},Kt=n.memo(({cart:a,setCart:o,onNavigateToStore:i,onViewOrders:r,onPaymentApproved:p,onUserProfileUpdated:l,onLoginRequired:R,products:b=[],user:s,showNotify:k,onOpenVip:T,onOpenCommissions:_,isActive:x=!0})=>{st("checkout",zt);const{platformConfig:w,purchasedItems:X,catalogSource:S,retryLiveCatalogSync:g}=kt(),z=S==="snapshot_unconfirmed",f=S==="snapshot",$=!!(w?.checkoutLocked||z),[j,B]=n.useState(!1),L=Vt({cart:a,setCart:o,products:b,user:s,purchasedItems:X,onPaymentApproved:p,onUserProfileUpdated:l,onLoginRequired:R,showNotify:k,paymentStepActive:j,isActive:x}),{checkoutStep:A,status:m,isSubmitting:G,isVerifying:q,isProfileCompletionOpen:se,profileCpf:le,profileWhatsappDdi:xe,profileWhatsapp:me,profileCpfError:ie,profileWhatsappError:ee,profileCompletionError:h,isCompletingProfile:I,pixData:M,pixCountdown:E,pixError:ze,clearPixError:pe,pixCopied:sn,paymentProcessing:ln,paymentCheckFeedback:cn,pixTestMode:fe,cardAvailable:Fe,isCardPayment:Ve,cardChargeTotal:be,cardChallenge:Tn,cardPublicKey:An,couponInput:Q,setCouponInput:F,couponStatus:$e,setCouponStatus:ne,couponOwnerName:Qe,appliedCoupon:dn,couponDiscountRate:ce,affiliateReferral:Mn,couponDiscount:Ee,couponEligible:Je,itemsToRender:Nn,totalOriginal:Ie,totalDiscount:mn,vipDiscount:Be,finalTotal:Re,handleGeneratePix:pn,handleApplyCoupon:We,handleRemoveCoupon:un,handleCopyPixCode:Te,handleSimulatePixPayment:Le,handleCheckPaymentStatus:ve,handleCancelPix:he,handleStartCheckout:Ye,handlePayWithPix:ae,handleBackStep:Ae,handleProfileCpfChange:Ze,handleProfileWhatsappChange:Me,handleProfileWhatsappDdiChange:xn,handleCompleteProfile:gn,handleCloseProfileCompletion:Pn,removeItem:_e,removeGroup:On}=L;n.useEffect(()=>{x&&j&&s&&!Pe.isMockMode&&Ne.prewarmCheckoutSession().catch(()=>{})},[x,j,s]);const[re,Dn]=n.useState("pix"),[ge,qn]=n.useState(!1),fn=`inline-card-${n.useId().replace(/:/g,"")}`,Xe=ya(),hn=Jn(Re,Xe),Ue=Ve||j&&re==="cartao",Ke=Ve&&be!==null?be:Ue?hn:Re,O=Ue?yt(Math.max(0,Ke-Re)):0,Oe=n.useRef(null);n.useEffect(()=>{j&&(Oe.current?.focus({preventScroll:!0}),Oe.current?.scrollIntoView?.({block:"start",behavior:"auto"}))},[j]);const bn=()=>{if(!(re==="cartao"&&!Fe)){if(pe(),re==="cartao"){const U=document.getElementById(fn);if(!U)return;const ye=new CustomEvent("skull:card-validate",{cancelable:!0});if(!U.dispatchEvent(ye))return;U.requestSubmit();return}ae({metodoPagamento:re,parcelas:1})}},we=fe,He=we?"Modo teste: o pagamento pode ser concluído sem gerar cobrança ou link real.":"O produto fica disponível na sua conta após a confirmação da compra.",de=a.map(U=>`${String(U.code||U.parentCode||"").trim()}:${String(U.licenca?.id||U.licenca?.nome||"")}:${U.isRepurchase?"1":"0"}`).sort().join("|"),vn=n.useRef(de);if(n.useEffect(()=>{vn.current!==de&&(vn.current=de,a.length>0&&B(!1))},[de,a.length]),n.useEffect(()=>{!x&&m==="approved"&&(he(),B(!1))},[x,m,he]),m==="approved")return e.jsxs("div",{className:"store-interface ml-checkout","data-status":"approved",children:[e.jsx("div",{className:"ml-checkout-topbar",children:e.jsxs("ol",{className:"ml-checkout-steps","aria-label":"Etapas do checkout",children:[e.jsxs("li",{className:"is-done",children:[e.jsx("span",{children:"1"}),"Carrinho"]}),e.jsxs("li",{className:"is-done",children:[e.jsx("span",{children:"2"}),"Pagamento"]}),e.jsxs("li",{className:"is-done",children:[e.jsx("span",{children:"3"}),"Conclusão"]})]})}),e.jsx(Ot,{user:s,isTestMode:we,onNavigateToStore:()=>{he(),B(!1),i()},onViewOrders:()=>{he(),B(!1),r()},onOpenVip:T?()=>{he(),B(!1),T()}:void 0,onOpenCommissions:_?()=>{he(),B(!1),_()}:void 0}),e.jsx(Gn,{cardAvailable:Fe})]});if(a.length===0&&m==="idle"&&!M)return e.jsxs("div",{className:"store-interface ml-checkout","data-cart-empty":"true",children:[e.jsxs("button",{type:"button",className:"sk-auth-back ml-desktop-only",onClick:i,"aria-label":"Voltar para a loja",children:[e.jsx(Kn,{size:14,"aria-hidden":!0}),e.jsx("span",{children:"Voltar para a loja"})]}),e.jsx("div",{className:"sk-page-center w-full bg-light dark:bg-dark",children:e.jsx(lt,{onAction:i})})]});const je=$||m!=="idle"?"none":A===1&&!j?"single-action":A===1&&s?"payment-options":"single-action",V=A>1?"Voltar à etapa anterior":j?"Voltar para conferir itens":"Voltar para a loja",Ce=A>1?Ae:j?()=>B(!1):i,De=e.jsx(Ut,{checkoutStep:A,totalOriginal:Ie,totalDiscount:mn,vipDiscount:Be,couponDiscount:Ee,appliedCoupon:dn,couponOwnerName:Qe,finalTotal:Ke,cardSurcharge:O,isTestMode:we}),ke=A===3||m==="pending_pix"?3:j?2:1,en=ke===2&&!G&&m==="idle",nn=V!=="Voltar para a loja";return e.jsxs("div",{className:"store-interface ml-checkout","data-mobile-dock":je,"data-mobile-checkout-dock":je,children:[nn&&e.jsx("div",{className:"ml-checkout-back-bar",children:e.jsxs("button",{type:"button",className:"ml-checkout-back",disabled:G||m==="processing",onClick:Ce,"aria-label":V,children:[e.jsx(Kn,{size:14,"aria-hidden":!0}),e.jsx("span",{children:V})]})}),e.jsx("div",{className:`ml-checkout-topbar${nn?" ml-checkout-topbar--with-back":""}`,children:e.jsxs("ol",{className:"ml-checkout-steps","aria-label":"Etapas do checkout",children:[e.jsx("li",{className:ke===1?"is-current":ke>1?"is-done":"",children:en?e.jsxs("button",{type:"button",className:"ml-checkout-step-btn",onClick:()=>B(!1),children:[e.jsx("span",{children:"1"}),"Carrinho"]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"1"}),"Carrinho"]})}),e.jsxs("li",{className:ke===2?"is-current":ke>2?"is-done":"",children:[e.jsx("span",{children:"2"}),"Pagamento"]}),e.jsxs("li",{className:ke===3?"is-current":"",children:[e.jsx("span",{children:"3"}),"Conclusão"]})]})}),e.jsx(rt,{isOpen:x&&se,onClose:Pn,disableBackdropClick:I,disableClose:I,ariaLabel:"Conclua seu cadastro",className:"checkout-profile-modal",children:e.jsxs("form",{className:"checkout-profile-form",noValidate:!0,onSubmit:U=>{U.preventDefault(),gn()},children:[e.jsxs("header",{className:"checkout-profile-header",children:[e.jsx("div",{className:"checkout-profile-icon",children:e.jsx(c,{className:"fas fa-user-shield text-lg"})}),e.jsx("p",{className:"checkout-profile-kicker",children:"Dados do titular"}),e.jsx("h2",{className:"checkout-profile-title",children:"Conclua seu cadastro"}),e.jsx("p",{className:"checkout-profile-subtitle",children:"CPF e WhatsApp são obrigatórios para continuar com o pagamento."})]}),e.jsxs("div",{className:"checkout-profile-context",children:[e.jsx("strong",{className:"checkout-profile-context-title",children:"Por que pedimos só agora?"}),e.jsx("p",{id:"checkout-profile-help",className:"checkout-profile-context-copy",children:"O CPF identifica o titular da compra. O WhatsApp mantém um canal direto para informações sobre o pedido e suporte de acesso. Esses dados ficam vinculados somente ao seu perfil."})]}),e.jsxs("div",{className:"checkout-profile-field",children:[e.jsxs("label",{htmlFor:"checkout-profile-cpf",className:"checkout-profile-label",children:["CPF",e.jsx("span",{children:"Obrigatório"})]}),e.jsx("input",{id:"checkout-profile-cpf",name:"tax-id",type:"text",inputMode:"numeric",autoComplete:"off",value:le,maxLength:14,required:!0,"aria-required":"true","aria-describedby":ie?"checkout-profile-help checkout-cpf-error":"checkout-profile-help","aria-invalid":ie?"true":"false",placeholder:"000.000.000-00",disabled:I,onChange:U=>Ze(U.target.value),className:"checkout-profile-input font-mono"}),ie&&e.jsxs("p",{id:"checkout-cpf-error",className:"mt-2 flex items-center gap-2 text-xs font-semibold sk-fg-danger",role:"alert",children:[e.jsx(c,{className:"fas fa-exclamation-circle"})," ",ie]})]}),e.jsxs("div",{className:"checkout-profile-field",children:[e.jsxs("label",{htmlFor:"checkout-profile-whatsapp",className:"checkout-profile-label",children:["WhatsApp",e.jsx("span",{children:"Obrigatório"})]}),e.jsx(wt,{id:"checkout-profile-whatsapp",ddi:xe,value:me,onDdiChange:xn,onValueChange:Me,disabled:I,required:!0,ariaDescribedBy:ee?"checkout-profile-help checkout-whatsapp-error":"checkout-profile-help",ariaInvalid:!!ee}),ee&&e.jsxs("p",{id:"checkout-whatsapp-error",className:"mt-2 flex items-center gap-2 text-xs font-semibold sk-fg-danger",role:"alert",children:[e.jsx(c,{className:"fas fa-exclamation-circle"})," ",ee]})]}),h&&e.jsxs("p",{className:"flex items-center gap-2 rounded-lg sk-bg-danger px-3 py-2.5 text-xs font-semibold sk-fg-danger",role:"alert",children:[e.jsx(c,{className:"fas fa-exclamation-circle"})," ",h]}),e.jsxs("div",{className:"checkout-profile-actions",children:[e.jsx("button",{type:"button",onClick:Pn,disabled:I,className:"checkout-profile-secondary",children:"Voltar ao carrinho"}),e.jsx("button",{type:"submit",disabled:I,className:"checkout-profile-primary",children:I?e.jsxs(e.Fragment,{children:[e.jsx(c,{className:"fas fa-spinner fa-spin mr-2"}),"Salvando..."]}):"Salvar e continuar"})]})]})}),m==="processing"&&e.jsx("div",{className:"ml-overlay",role:"status","aria-live":"polite",children:e.jsxs("div",{className:"ml-overlay__content",children:[e.jsx("div",{className:"ml-spinner"}),e.jsx("strong",{children:Ue?"Processando pagamento...":"Gerando QR Code PIX..."}),e.jsx("span",{className:"ml-overlay__sub",children:"Aguarde alguns segundos sem fechar o carrinho."})]})}),e.jsxs("main",{className:"ml-checkout__shell",role:"main",children:[e.jsx("h1",{className:"sr-only",children:"Revise sua compra"}),(f||z)&&e.jsxs("div",{role:"status","aria-live":"polite",className:"mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-500/35 bg-amber-500/10 px-4 py-3 text-xs text-slate-900 dark:text-amber-100",children:[e.jsx("span",{children:z?"Não foi possível confirmar preços e disponibilidade atuais com o servidor. O pagamento permanece protegido até a reconexão.":"Confirmando preços e disponibilidade atuais com o servidor em tempo real..."}),z&&g&&e.jsx("button",{type:"button",onClick:()=>void g(),className:"rounded-lg border border-amber-600/40 bg-amber-600 px-3 py-1.5 font-semibold text-white hover:bg-amber-700",children:"Tentar novamente"})]}),e.jsxs("div",{ref:Oe,tabIndex:-1,className:`ml-checkout__grid ${m==="pending_pix"||A===3?"ml-checkout__grid--centered ml-checkout__grid--pending-pix":""}`,"data-pending-pix":m==="pending_pix"||A===3?"true":"false","data-payment-stage":m==="pending_pix"||A===3?"true":"false","data-review":A===1&&!j,"data-logged":s?"true":"false",children:[!s&&j&&e.jsxs("section",{className:"ml-stage ml-identity","aria-labelledby":"checkout-identity-title","data-active":"true",children:[e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:e.jsxs("h2",{id:"checkout-identity-title",className:"ml-stage-title",style:{margin:0},children:[e.jsx("span",{className:"ml-stage-number","aria-hidden":!0,children:"1"}),"Identificação"]})}),e.jsx("p",{className:"ml-stage-copy",children:"Seus itens estão reservados no carrinho. Entre na sua conta ou crie seu cadastro rápido para liberar o pagamento e o acesso imediato aos seus produtos."}),e.jsxs("div",{className:"ml-identity__actions",style:{display:"grid",gap:10,marginTop:12},children:[e.jsxs("button",{type:"button",className:"ml-button ml-button--primary yp-btn-gold",onClick:Ye,disabled:$,"aria-label":"Entrar para continuar",children:[e.jsx(c,{className:"fas fa-lock","aria-hidden":!0}),e.jsx("span",{children:"ENTRAR NA MINHA CONTA"}),e.jsx(c,{className:"fas fa-arrow-right","aria-hidden":!0})]}),e.jsxs("button",{type:"button",className:"ml-button ml-button--secondary",style:{width:"100%",minHeight:44},onClick:()=>{try{P.setItem("skull_pending_auth_target_tab","carrinho")}catch{}window.dispatchEvent(new CustomEvent("skull:require-register",{detail:{targetTab:"carrinho"}}))},disabled:$,children:[e.jsx(c,{className:"fas fa-user-plus","aria-hidden":!0}),e.jsx("span",{children:"Criar conta grátis"})]})]}),e.jsxs("div",{className:"ml-stage-footnote",style:{marginTop:14},children:[e.jsx(c,{className:"fas fa-lock","aria-hidden":!0}),"Powered by • Payments Protect • Seus dados acompanham somente a sua compra e o seu perfil."]})]}),(A!==1||j)&&e.jsxs("section",{className:"ml-stage ml-main-stack","aria-labelledby":m==="pending_pix"?"pix-pending-title":A===3?"checkout-payment-card-title":"checkout-payment-title","data-active":"true",children:[m!=="pending_pix"&&A!==3&&e.jsxs("h2",{id:"checkout-payment-title",className:"ml-stage-title",children:[!s&&e.jsx("span",{className:"ml-stage-number","aria-hidden":!0,children:"2"}),"Pagamento"]}),A===1?e.jsx(Lt,{isCheckoutLocked:$,isSubmitting:G||m==="processing",handlePayWithPix:ae,selectedMethod:re,onMethodChange:Dn,cardFormId:fn,onCardReadyChange:qn,finalTotal:Re,itemCount:a.length,totalSaved:mn+Ee,hasVipDiscount:Be>0,pixError:ze,onClearError:pe,cardAvailable:Fe,cardPublicKey:An,payerName:s?.nome,payerEmail:s?.email,payerDocument:s?.cpf}):e.jsx(Xt,{isCardPayment:Ve,cardChallenge:Tn,status:m,isSubmitting:G,isVerifying:q,isPixTestMode:fe,instantAccessText:He,pixData:M,pixCountdown:E,paymentProcessing:ln,paymentCheckFeedback:cn,pixError:ze,pixCopied:sn,handleGeneratePix:pn,handleCopyPixCode:Te,handleSimulatePixPayment:Le,handleCheckPaymentStatus:ve,handleCancelPix:he})]}),A===1&&!j&&e.jsx("div",{className:"ml-side-stack",children:e.jsx("div",{className:"ml-side-stack__sticky",children:A===1?e.jsx(Wt,{summary:De,couponDiscountRate:ce,cart:a,itemsToRender:Nn,appliedCoupon:dn,couponStatus:$e,couponInput:Q,couponOwnerName:Qe,couponDiscount:Ee,couponEligible:Je,affiliateReferral:Mn,removeItem:_e,removeGroup:On,handleApplyCoupon:We,handleRemoveCoupon:un,setCouponInput:F,setCouponStatus:ne}):De})})]}),e.jsx(ot,{closeOnConfirm:!1,busy:L.isSubmitting,isOpen:x&&!!L.policyChange,onClose:L.handleCancelPolicyChange,onConfirm:()=>{L.handleConfirmPolicyChange()},title:"Confirme o total atualizado",message:"A política de afiliados foi atualizada. O total passou de "+String(Y(L.policyChange?.previousTotal||0))+" para "+String(Y(L.policyChange?.nextTotal||0))+". Confirme para continuar o pagamento.",confirmText:"Confirmar novo total",cancelText:"Revisar carrinho"})]}),e.jsx(Gn,{cardAvailable:Fe}),A===1&&!j&&e.jsx(Hn,{label:"Continuar para pagamento",totalLabel:Y(Ke),disabled:$||$e==="validating",onClick:()=>B(!0)}),A===1&&j&&!$&&m==="idle"&&(s?e.jsx(Na,{onPix:bn,isSubmitting:G,disabled:re==="cartao"&&(!Fe||!ge),selectedMethod:re,amount:Ke}):e.jsx(Hn,{label:"Entrar para comprar",totalLabel:Y(Ke),onClick:Ye}))]})});Kt.displayName="CartView";export{Kt as CartView,Ut as OrderSummary};
