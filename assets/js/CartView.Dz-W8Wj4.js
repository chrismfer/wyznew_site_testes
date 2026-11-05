import{j as r,r as e}from"./vendor-react.Bxpvzt8v.js";import{M as Cn,C as Nn}from"./Modal.BYA7BmoX.js";import{F as c,v as vr,w as Pn,s as E,S as q,e as zn,o as Sn,u as En,au as Rn}from"./index.BAWiwDYz.js";import{a as In}from"./AppProviders.71XxsR20.js";import{s as Tn,W as An}from"./WhatsAppInput.CnDFLXbD.js";import{an as Le,av as Z,C as br,u as re,ao as On,a3 as we,af as Dn,at as je,bd as Oe,az as Mn,bl as De,ai as Fn,m as qn,F as pe,z as Me,aC as Fe,bk as qe,bh as Vn,y as $n,L as Bn,a0 as Wn,K as Ln}from"./productUtils.jiCuZqED.js";import{U as Gn,b as Un}from"./CatalogOrchestrator.G51EQ2xe.js";import{u as Ge,a as Ve,C as $e,A as Be}from"./AffiliateOrchestrator.Ca2Xct0p.js";import"./vendor-firebase-lite.DWLIakt4.js";import{u as Kn}from"./useProductImage.BirJIAfO.js";import{D as Hn,ar as We,C as Xn,A as Qn,t as Yn,as as Jn,$ as Zn}from"./vendor-icons.bDPCiqgI.js";import{u as ra}from"./useRailCarousel.05rricgH.js";import"./useOverlayLayer.Dd7T5TcH.js";import"./ethicalHackerShield.DKrI-NGO.js";import"./ProductsService.BKoqGYFa.js";import"./downloadLinks.CSzHwRGe.js";const ea=`/* skull-style-rev:checkout:mw30k0qc */
:root {\r
  --ml-blue:         var(--sk-ds-accent);\r
  --ml-blue-hover:   var(--sk-ds-accent-strong);\r
  --ml-green:        var(--sk-ds-accent);\r
  --ml-green-light:  var(--sk-ds-accent-strong);\r
  --ml-text:         var(--sk-ds-t1);\r
  --ml-text-sec:     var(--sk-ds-t2);\r
  --ml-muted:        var(--sk-ds-t3);\r
  --ml-faint:        color-mix(in srgb, var(--sk-palette-neutral-000000) 5%, transparent);\r
  --ml-page:         var(--sk-ds-page);\r
  --ml-card:         var(--sk-ds-surface);\r
  --ml-soft:         var(--sk-ds-inset);\r
  --ml-border:       var(--sk-ds-line);\r
  --ml-border-focus: var(--sk-ds-accent);\r
  --ml-shadow:       0 4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 5%, transparent);\r
  --ml-shadow-hover: 0 8px 30px color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
  --ml-radius:       16px;\r
  --ml-radius-sm:    12px;\r
  --ml-font:         "Montserrat", "Inter", -apple-system, sans-serif;\r
  --ml-font-heading: "Montserrat", "Inter", sans-serif;\r
  --ml-font-money:   var(--sk-font-heading);\r
  --ml-trust-green:  var(--sk-ds-accent);\r
  --ml-cta-glow:     var(--sk-ds-accent-glow);\r
}\r
\r
html.dark {\r
  --ml-faint:        color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  --ml-shadow:       0 8px 32px color-mix(in srgb, var(--sk-palette-neutral-000000) 65%, transparent);\r
  --ml-shadow-hover: 0 12px 40px var(--sk-ds-accent-soft);\r
}\r
\r
.ml-checkout {\r
  width: 100%;\r
  min-width: 0;\r
  min-height: 100%;\r
  display: flex;\r
  flex-direction: column;\r
  background: var(--ml-page);\r
  color: var(--ml-text);\r
  font-family: var(--ml-font);\r
  font-size: 14px;\r
  -webkit-font-smoothing: antialiased;\r
  text-rendering: optimizeLegibility;\r
  -webkit-tap-highlight-color: transparent;\r
  overflow-x: hidden;\r
}\r
\r
.skull-cart-route {\r
  flex: 1 1 0%;\r
  min-height: 0;\r
  display: flex;\r
  flex-direction: column;\r
  background: transparent !important;\r
}\r
\r
.skull-cart-route[hidden] {\r
  display: none;\r
}\r
\r
.skull-cart-route .ml-checkout {\r
  flex: 1 1 0%;\r
  min-height: 0;\r
  background: transparent;\r
}\r
\r
.ml-checkout__shell {\r
\r
  width: 100%;\r
  max-width: var(--rv-page-max, 1312px);\r
  margin-inline: auto;\r
\r
  padding-inline: clamp(12px, 3vw, 28px);\r
  box-sizing: border-box;\r
}\r
\r
.ml-checkout__shell {\r
  padding-block: 0 24px;\r
  flex: 1 1 auto;\r
}\r
\r
.skull-cart-route .ml-checkout__shell {\r
  padding-block-end: clamp(16px, 3vh, 24px);\r
}\r
\r
.ml-checkout__grid {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 0.95fr);\r
  gap: clamp(16px, 2vw, 28px);\r
  align-items: start;\r
  min-width: 0;\r
  width: 100%;\r
}\r
\r
@media (min-width: 861px) {\r
  .ml-checkout__grid[data-logged="true"] {\r
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);\r
  }\r
}\r
\r
.ml-main-stack {\r
  display: grid;\r
  gap: 10px;\r
  min-width: 0;\r
  width: 100%;\r
  align-self: start;\r
}\r
\r
.ml-side-stack {\r
  display: grid;\r
  gap: 10px;\r
  min-width: 0;\r
  width: 100%;\r
  align-self: start;\r
}\r
\r
.ml-side-stack__sticky {\r
  position: sticky;\r
  top: 24px;\r
  display: grid;\r
  gap: 20px;\r
  min-width: 0;\r
}\r
\r
.ml-page-subtitle {\r
  max-width: 720px;\r
  margin: 2px 0 0;\r
  color: var(--sk-ds-t3, var(--ml-muted));\r
  font-size: var(--sk-text-xs, 0.75rem);\r
  font-weight: 500;\r
  line-height: 1.5;\r
}\r
\r
.ml-card {\r
  background: var(--ml-card);\r
  border: 1px solid var(--ml-border);\r
  border-radius: var(--ml-radius);\r
  box-shadow: var(--ml-shadow);\r
  overflow: hidden;\r
  backdrop-filter: blur(16px);\r
  -webkit-backdrop-filter: blur(16px);\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
\r
.ml-card:hover {\r
  box-shadow: var(--ml-shadow-hover);\r
}\r
\r
html.dark .ml-card,\r
html.dark .ml-summary,\r
html.dark .ml-payment-card,\r
html.dark .ml-approved__card {\r
  background-color: color-mix(in srgb, var(--sk-palette-neutral-0c0c0e) 88%, transparent);\r
  background-image: linear-gradient(180deg, color-mix(in srgb, var(--sk-accent) 5%, transparent) 0%, color-mix(in srgb, var(--sk-palette-indigo-060608) 95%, transparent) 100%);\r
  border-color: color-mix(in srgb, var(--sk-accent) 22%, transparent);\r
  box-shadow: 0 8px 32px color-mix(in srgb, var(--sk-palette-neutral-000000) 65%, transparent), inset 0 0 20px color-mix(in srgb, var(--sk-accent) 3%, transparent);\r
}\r
\r
html.dark .ml-card:hover,\r
html.dark .ml-summary:hover,\r
html.dark .ml-payment-card:hover {\r
  border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent);\r
  box-shadow: 0 10px 36px color-mix(in srgb, var(--sk-palette-neutral-000000) 75%, transparent), 0 0 24px color-mix(in srgb, var(--sk-accent) 15%, transparent);\r
}\r
\r
html.dark .ml-card__header,\r
html.dark .ml-summary__header {\r
  background: transparent;\r
  border-color: var(--ml-border);\r
}\r
\r
.ml-card__header {\r
  padding: 10px 14px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 8px;\r
  border-bottom: 1px solid var(--ml-border);\r
  background: var(--ml-card);\r
}\r
\r
.ml-card__title {\r
  margin: 0;\r
  color: var(--ml-text);\r
  font-family: var(--ml-font);\r
  font-size: 13px;\r
  line-height: 1.3;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
\r
.ml-card__count {\r
  color: var(--ml-muted);\r
  font-family: var(--ml-font-heading);\r
  font-size: 11.5px;\r
  font-weight: 700;\r
  background: var(--ml-soft);\r
  padding: 2px 9px;\r
  border-radius: 20px;\r
  border: 1px solid var(--ml-border);\r
}\r
\r
.ml-link-button {\r
  color: var(--ml-blue);\r
  font-size: 12.5px;\r
  font-weight: 600;\r
  border: 0;\r
  background: transparent;\r
  padding: 0;\r
  cursor: pointer;\r
  transition: opacity 0.15s;\r
}\r
\r
.ml-link-button:hover {\r
  opacity: 0.75;\r
}\r
\r
.ml-item {\r
  display: grid;\r
  grid-template-columns: 56px minmax(0, 1fr) auto;\r
  gap: 10px 14px;\r
  padding: 12px 16px;\r
  border-top: 1px solid var(--ml-border);\r
  align-items: center;\r
  transition: background 0.15s;\r
}\r
\r
.ml-item:first-child {\r
  border-top: 0;\r
}\r
\r
.ml-item:hover {\r
  background: var(--ml-soft);\r
}\r
\r
html.dark .ml-item:hover {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2.5%, transparent);\r
}\r
\r
.ml-item__image {\r
  width: 56px;\r
  height: 56px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: var(--ml-soft);\r
  border: 1px solid var(--ml-border);\r
  overflow: hidden;\r
  flex-shrink: 0;\r
  position: relative;\r
  align-self: center;\r
}\r
\r
html.dark .ml-item__image {\r
  background-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 60%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
\r
.ml-item__image img {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
  display: block;\r
}\r
\r
.ml-item__main {\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 3px;\r
}\r
\r
.ml-item__side {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-end;\r
  justify-content: center;\r
  gap: 8px;\r
  flex-shrink: 0;\r
  min-width: 5.5rem;\r
}\r
\r
.ml-item__pricing {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-end;\r
  gap: 2px;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.ml-badge {\r
  display: inline-flex;\r
  width: -moz-fit-content;\r
  width: fit-content;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 3px 8px;\r
  border-radius: 4px;\r
  font-size: 10.5px;\r
  line-height: 1;\r
  font-weight: 700;\r
  margin-bottom: 6px;\r
  letter-spacing: 0.03em;\r
}\r
\r
.ml-badge--orange {\r
  color: var(--sk-palette-neutral-ffffff);\r
  background: linear-gradient(135deg, var(--sk-palette-red-ff5e22), var(--sk-palette-red-ff8c38));\r
}\r
\r
.ml-badge--green {\r
  color: var(--ml-trust-green);\r
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 15%, transparent);\r
}\r
\r
.ml-item__name {\r
  margin: 0;\r
  color: var(--ml-text);\r
  font-family: var(--ml-font);\r
  font-size: 14px;\r
  line-height: 1.35;\r
  font-weight: 650;\r
  letter-spacing: -0.012em;\r
  display: -webkit-box;\r
  -webkit-line-clamp: 2;\r
  line-clamp: 2;\r
  -webkit-box-orient: vertical;\r
  overflow: hidden;\r
  word-break: break-word;\r
}\r
\r
.ml-item__meta {\r
  margin: 0;\r
  color: var(--ml-muted);\r
  font-family: var(--ml-font);\r
  font-size: 12px;\r
  font-weight: 500;\r
  line-height: 1.35;\r
  letter-spacing: -0.005em;\r
}\r
\r
.ml-item__sublist {\r
  margin: 6px 0 0;\r
  padding: 0;\r
  list-style: none;\r
  display: grid;\r
  gap: 4px;\r
  width: 100%;\r
  color: var(--ml-muted);\r
  font-size: 12px;\r
}\r
\r
.ml-item__sub {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: baseline;\r
  gap: 10px;\r
}\r
\r
.ml-item__sub-name {\r
  min-width: 0;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.ml-item__sub-price {\r
  display: inline-flex;\r
  align-items: baseline;\r
  gap: 6px;\r
  flex-shrink: 0;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.ml-price-old {\r
  color: var(--ml-muted);\r
  text-decoration: line-through;\r
  font-weight: 400;\r
}\r
\r
.ml-price-green {\r
  color: var(--ml-trust-green);\r
  font-weight: 700;\r
}\r
\r
.ml-item__coupon-note {\r
  margin: 7px 0 0;\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  color: var(--ml-trust-green);\r
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 8%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 16%, transparent);\r
  border-radius: 5px;\r
  padding: 4px 7px;\r
  font-size: 11px;\r
  font-weight: 700;\r
  line-height: 1.25;\r
}\r
\r
.ml-item__coupon-note i {\r
  font-size: 9px;\r
}\r
\r
.ml-money {\r
  display: inline-flex;\r
  align-items: flex-start;\r
  gap: 2px;\r
  color: var(--ml-text);\r
  font-weight: 800;\r
  letter-spacing: -0.01em;\r
  white-space: nowrap;\r
  font-family: var(--ml-font-money);\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.ml-money--sm { font-size: 13px; }\r
.ml-money--md { font-size: 17px; }\r
.ml-money--lg {\r
  font-size: 24px;\r
  text-shadow: 0 0 16px color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
}\r
\r
html.dark .ml-money--lg {\r
  color: var(--ml-green);\r
  text-shadow: 0 0 20px color-mix(in srgb, var(--sk-accent) 45%, transparent);\r
}\r
\r
.ml-money__cents {\r
  font-size: 0.62em;\r
  line-height: 1.2;\r
  margin-top: 0.18em;\r
  font-weight: 700;\r
}\r
\r
.ml-remove {\r
  flex-shrink: 0;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  min-width: 40px;\r
  min-height: 40px;\r
  padding: 0 10px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--ml-border);\r
  background: var(--ml-card);\r
  color: var(--ml-muted);\r
  cursor: pointer;\r
  font-family: var(--ml-font);\r
  font-size: 12px;\r
  font-weight: 600;\r
  letter-spacing: 0.01em;\r
  line-height: 1;\r
  transition: color 0.15s, background 0.15s, border-color 0.15s, box-shadow 0.15s;\r
}\r
\r
.ml-remove i {\r
  font-size: 13px;\r
  line-height: 1;\r
}\r
\r
.ml-remove__label {\r
  display: none;\r
}\r
\r
.ml-remove:hover,\r
.ml-remove:focus-visible {\r
  color: var(--sk-ds-danger);\r
  border-color: color-mix(in srgb, var(--sk-palette-red-ef4444) 35%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 8%, transparent);\r
  outline: none;\r
}\r
\r
.ml-remove:active {\r
  transform: scale(0.96);\r
}\r
\r
html.dark .ml-remove {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);\r
}\r
\r
html.dark .ml-remove:hover,\r
html.dark .ml-remove:focus-visible {\r
  color: var(--sk-ds-danger);\r
  border-color: color-mix(in srgb, var(--sk-palette-red-f87171) 40%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-red-f87171) 10%, transparent);\r
}\r
\r
@media (min-width: 640px) {\r
  .ml-remove {\r
    min-width: auto;\r
    padding: 0 12px;\r
    height: 36px;\r
    min-height: 36px;\r
  }\r
\r
  .ml-remove__label {\r
    display: inline;\r
  }\r
}\r
\r
html.dark .ml-coupon input,\r
html.dark .ml-copy-row input {\r
  background-color: var(--sk-palette-neutral-0c0c0e);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
\r
.ml-option-title {\r
  color: var(--ml-text);\r
  font-size: 14px;\r
  line-height: 1.25;\r
  font-weight: 600;\r
}\r
\r
.ml-option-desc {\r
  margin-top: 3px;\r
  color: var(--ml-muted);\r
  font-size: 12.5px;\r
  line-height: 1.4;\r
}\r
\r
.ml-coupon {\r
  padding: 10px 14px;\r
}\r
\r
.ml-affiliate-referral {\r
  display: grid;\r
  grid-template-columns: 38px minmax(0, 1fr) auto;\r
  align-items: center;\r
  gap: 12px;\r
  margin-bottom: 14px;\r
  padding: 13px 14px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 32%, transparent);\r
  background:\r
    linear-gradient(135deg, color-mix(in srgb, var(--sk-palette-orange-f59e0b) 13%, transparent), color-mix(in srgb, var(--sk-palette-green-00a650) 7%, transparent)),\r
    var(--ml-card);\r
}\r
\r
.ml-affiliate-referral__icon {\r
  width: 38px;\r
  height: 38px;\r
  border-radius: 8px;\r
  display: grid;\r
  place-items: center;\r
  color: var(--sk-palette-neutral-ffffff);\r
  background: linear-gradient(135deg, var(--sk-palette-orange-f59e0b), var(--sk-palette-red-ea580c));\r
  box-shadow: 0 8px 20px color-mix(in srgb, var(--sk-palette-orange-f59e0b) 22%, transparent);\r
}\r
\r
.ml-affiliate-referral__body {\r
  min-width: 0;\r
}\r
\r
.ml-affiliate-referral__body strong {\r
  display: block;\r
  color: var(--ml-text);\r
  font-size: 13.5px;\r
  font-weight: 800;\r
  line-height: 1.2;\r
}\r
\r
.ml-affiliate-referral__body p {\r
  margin: 4px 0 0;\r
  color: var(--ml-muted);\r
  font-size: 12.2px;\r
  line-height: 1.35;\r
}\r
\r
.ml-affiliate-referral__body span {\r
  color: var(--ml-text);\r
  font-weight: 800;\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 16%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 24%, transparent);\r
  border-radius: 4px;\r
  padding: 1px 5px;\r
}\r
\r
.ml-affiliate-referral__badge {\r
  color: var(--ml-trust-green);\r
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 20%, transparent);\r
  border-radius: 999px;\r
  padding: 6px 10px;\r
  font-size: 11px;\r
  font-weight: 800;\r
  white-space: nowrap;\r
}\r
\r
.ml-affiliate-referral__button {\r
  min-height: 38px;\r
  padding-inline: 12px;\r
  white-space: nowrap;\r
}\r
\r
.ml-affiliate-referral--applied {\r
  border-color: color-mix(in srgb, var(--sk-palette-green-00a650) 28%, transparent);\r
  background:\r
    linear-gradient(135deg, color-mix(in srgb, var(--sk-palette-green-00a650) 12%, transparent), color-mix(in srgb, var(--sk-palette-orange-f59e0b) 7%, transparent)),\r
    var(--ml-card);\r
}\r
\r
.ml-affiliate-referral--applied .ml-affiliate-referral__icon {\r
  background: linear-gradient(135deg, var(--ml-trust-green), var(--ml-green-light));\r
  box-shadow: 0 8px 20px color-mix(in srgb, var(--sk-palette-green-00a650) 18%, transparent);\r
}\r
\r
.ml-coupon__applied,\r
.ml-coupon__form {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
\r
.ml-coupon__form {\r
  gap: 0;\r
}\r
\r
.ml-coupon__form input {\r
  border-radius: 10px 0 0 10px;\r
  border-right: 0;\r
}\r
\r
.ml-coupon__form .ml-button {\r
  border-radius: 0 10px 10px 0;\r
  min-width: 96px;\r
  min-height: 42px;\r
  white-space: nowrap;\r
}\r
\r
.ml-coupon__applied {\r
  justify-content: space-between;\r
  padding: 12px 16px;\r
  border: 1.5px solid color-mix(in srgb, var(--sk-palette-green-00a650) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 6%, transparent);\r
  border-radius: var(--sk-r-sm, 6px);\r
}\r
\r
html.dark .ml-coupon__applied {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 6%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 20%, transparent);\r
}\r
\r
.ml-coupon input {\r
  width: 100%;\r
  min-height: 42px;\r
  border: 1.5px solid var(--ml-border);\r
  border-radius: var(--sk-r-sm, 6px);\r
  padding: 0 12px;\r
  background: var(--ml-card);\r
  color: var(--ml-text);\r
  font-size: 13.5px;\r
  font-family: var(--ml-font);\r
  outline: 0;\r
  transition: border-color 0.2s, box-shadow 0.2s;\r
}\r
\r
.ml-coupon input:focus {\r
  border-color: var(--ml-border-focus);\r
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);\r
}\r
\r
.ml-payment-choice-actions {\r
  display: grid;\r
  grid-template-columns: 1fr;\r
  width: 100%;\r
}\r
\r
.ml-payment-choice-actions .ml-button {\r
  width: 100%;\r
}\r
\r
.ml-button {\r
  min-height: 52px;\r
  border: 0;\r
  border-radius: var(--sk-r-sm, 6px);\r
  padding: 0 24px;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  cursor: pointer;\r
  font-family: var(--ml-font);\r
  font-size: 15px;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
  transition: background-color 0.18s, opacity 0.18s, transform 0.12s, box-shadow 0.18s;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
.ml-button::after {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  pointer-events: none;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 0%, transparent);\r
  transition: background 0.3s;\r
}\r
.ml-button:active::after {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);\r
}\r
\r
.ml-button:active {\r
  transform: scale(0.99);\r
}\r
\r
.ml-button:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
  transform: none;\r
}\r
\r
.ml-button--primary {\r
  background: linear-gradient(135deg, var(--ml-green) 0%, var(--ml-blue-hover) 100%);\r
  color: var(--sk-ds-on-accent);\r
  font-weight: 800;\r
  width: 100%;\r
  box-shadow: 0 4px 20px color-mix(in srgb, var(--sk-accent) 35%, transparent);\r
  font-size: 15.5px;\r
  letter-spacing: -0.01em;\r
  transition: background 0.18s ease, box-shadow 0.18s ease;\r
}\r
\r
.ml-button--primary:hover:not(:disabled) {\r
  background: linear-gradient(135deg, var(--ml-green-light) 0%, var(--ml-green) 100%);\r
  box-shadow: 0 6px 28px color-mix(in srgb, var(--sk-accent) 50%, transparent);\r
  transform: none;\r
}\r
\r
.ml-button--secondary {\r
  background: var(--ml-card);\r
  color: var(--ml-text);\r
  border: 1.5px solid var(--ml-border);\r
  font-weight: 700;\r
  transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;\r
}\r
\r
.ml-button--secondary:hover:not(:disabled) {\r
  border-color: var(--ml-green);\r
  background: color-mix(in srgb, var(--sk-accent) 6%, transparent);\r
}\r
\r
html.dark .ml-button--secondary {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
\r
html.dark .ml-button--secondary:hover:not(:disabled) {\r
  border-color: var(--ml-green);\r
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);\r
}\r
\r
.ml-button--green {\r
\r
  background-color: var(--ml-green);\r
  background-image: none;\r
  color: var(--sk-ds-on-accent);\r
  font-weight: 800;\r
  width: 100%;\r
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-accent) 28%, transparent);\r
}\r
\r
.ml-button--green:hover:not(:disabled) {\r
  background-color: var(--ml-blue-hover);\r
  background-image: none;\r
}\r
\r
.ml-warning {\r
  border: 1.5px solid color-mix(in srgb, var(--sk-palette-red-ef4444) 22%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 7%, transparent);\r
  color: var(--sk-ds-danger);\r
  border-radius: var(--sk-r-sm, 6px);\r
  padding: 14px 16px;\r
  font-size: 13px;\r
  line-height: 1.45;\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 10px;\r
}\r
\r
html.dark .ml-warning {\r
  color: var(--sk-ds-danger);\r
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-red-ef4444) 25%, transparent);\r
}\r
\r
.ml-payment-card {\r
  background: var(--ml-card);\r
  border: 1px solid var(--ml-border);\r
  border-radius: var(--ml-radius);\r
  box-shadow: var(--ml-shadow);\r
  overflow: hidden;\r
}\r
\r
.ml-pix-box{\r
  padding: 18px 20px;\r
  border-top: 1px solid var(--ml-border);\r
}\r
\r
.ml-digital-note {\r
  display: flex;\r
  gap: 10px;\r
  padding: 12px 14px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, transparent);\r
  color: var(--ml-trust-green);\r
  font-size: 13px;\r
  line-height: 1.45;\r
  margin-bottom: 14px;\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);\r
  align-items: center;\r
  text-align: left;\r
  box-sizing: border-box;\r
  width: 100%;\r
}\r
\r
.ml-digital-note__spin {\r
  flex: 0 0 auto;\r
  width: 1.25rem;\r
  height: 1.25rem;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  line-height: 0;\r
}\r
\r
.ml-digital-note__spin svg,\r
.ml-digital-note__spin .sk-spin,\r
.ml-digital-note__spin .animate-spin {\r
  width: 1.05rem !important;\r
  height: 1.05rem !important;\r
  display: block !important;\r
  margin: 0 !important;\r
  vertical-align: 0 !important;\r
  flex-shrink: 0;\r
}\r
\r
.ml-digital-note__text {\r
  flex: 1 1 auto;\r
  min-width: 0;\r
}\r
\r
html.dark .ml-digital-note {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 14%, transparent);\r
}\r
\r
.ml-test-note {\r
  display: flex;\r
  gap: 12px;\r
  padding: 12px 15px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-fbbf24) 35%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 8%, transparent);\r
  color: var(--sk-palette-red-92400e);\r
  font-size: 13px;\r
  line-height: 1.45;\r
  margin: 0 0 14px;\r
}\r
\r
html.dark .ml-test-note {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 6%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 22%, transparent);\r
}\r
\r
.ml-pix-pending {\r
  text-align: center;\r
  padding: 20px;\r
}\r
\r
.ml-pix-qr {\r
  width: 200px;\r
  height: 200px;\r
  padding: 8px;\r
  background: var(--sk-palette-neutral-ffffff);\r
  border: 1px solid var(--ml-border);\r
  border-radius: var(--sk-r-sm, 6px);\r
  display: inline-grid;\r
  place-items: center;\r
  margin: 8px auto 16px;\r
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 10%, transparent);\r
}\r
\r
.ml-pix-qr img {\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
.ml-test-qr {\r
  width: 100%;\r
  height: 100%;\r
  display: grid;\r
  grid-template-columns: repeat(13, 1fr);\r
  grid-template-rows: repeat(13, 1fr);\r
  gap: 3px;\r
  padding: 10px;\r
  background: var(--sk-palette-neutral-ffffff);\r
  border-radius: 4px;\r
}\r
\r
.ml-test-qr span {\r
  border-radius: 2px;\r
  background: color-mix(in srgb, var(--sk-palette-blue-080c10) 7%, transparent);\r
}\r
\r
.ml-test-qr span.is-active {\r
  background: var(--sk-palette-teal-050807);\r
}\r
\r
.ml-copy-row {\r
  display: flex;\r
  align-items: stretch;\r
  width: min(480px, 100%);\r
  margin: 0 auto 16px;\r
  border: 1.5px solid var(--ml-border);\r
  border-radius: 12px;\r
  overflow: hidden;\r
  background: var(--ml-soft);\r
  box-sizing: border-box;\r
}\r
\r
.ml-copy-row input {\r
  flex: 1 1 auto;\r
  min-width: 0;\r
  height: 44px;\r
  border: 0;\r
  border-radius: var(--sk-r-sm);\r
  padding: 0 12px;\r
  background: transparent;\r
  color: var(--ml-muted);\r
  font-size: 12.5px;\r
  box-sizing: border-box;\r
}\r
\r
.ml-copy-row input:focus {\r
  outline: none;\r
}\r
\r
.ml-copy-row button,\r
.ml-copy-row .ml-copy-row__btn,\r
.ml-copy-row .ml-button--green {\r
  flex: 0 0 auto;\r
  width: auto !important;\r
  min-width: 6.75rem;\r
  min-height: 44px !important;\r
  height: 44px;\r
  border-radius: var(--sk-r-sm) !important;\r
  padding: 0 18px !important;\r
  box-shadow: none !important;\r
\r
  background-color: var(--ml-green) !important;\r
  background-image: none !important;\r
  color: var(--sk-palette-neutral-ffffff) !important;\r
  animation: none !important;\r
}\r
\r
.ml-copy-row button:hover:not(:disabled),\r
.ml-copy-row .ml-button--green:hover:not(:disabled) {\r
  background-color: var(--ml-blue-hover) !important;\r
  background-image: none !important;\r
  transform: none !important;\r
}\r
\r
.ml-copy-row button::after {\r
  display: none;\r
}\r
\r
.ml-summary {\r
\r
  margin: 0;\r
  background: var(--ml-card);\r
  border: 1px solid var(--ml-border);\r
  border-radius: var(--ml-radius);\r
  box-shadow: var(--ml-shadow);\r
  overflow: hidden;\r
  transition: box-shadow 0.2s;\r
}\r
\r
.ml-summary__header {\r
  padding: 10px 14px;\r
  border-bottom: 1px solid var(--ml-border);\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
}\r
\r
.ml-summary__body {\r
  padding: 12px 14px;\r
  display: grid;\r
  gap: 10px;\r
}\r
\r
.ml-summary__row {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
  gap: 12px;\r
  color: var(--ml-muted);\r
  font-size: 13.5px;\r
}\r
\r
.ml-summary__row strong {\r
  color: var(--ml-text);\r
  font-weight: 700;\r
}\r
\r
.ml-summary__coupon {\r
  color: var(--ml-blue);\r
  font-weight: 700;\r
  font-size: 12px;\r
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, transparent);\r
  padding: 2px 8px;\r
  border-radius: 4px;\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);\r
}\r
\r
.ml-summary__coupon-owner {\r
  display: block;\r
  margin-top: 5px;\r
  color: var(--ml-muted);\r
  font-size: 11.5px;\r
  line-height: 1.3;\r
}\r
\r
.ml-summary__line {\r
  height: 1px;\r
  background: var(--ml-border);\r
}\r
\r
.ml-summary__total {\r
  align-items: flex-end;\r
  color: var(--ml-text);\r
}\r
\r
.ml-summary__total > span {\r
  font-size: 14.5px;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
}\r
\r
.ml-summary__total .ml-money--lg {\r
  font-size: 22px;\r
  font-weight: 800;\r
}\r
\r
.ml-summary__save {\r
  color: var(--ml-trust-green);\r
  font-size: 12.5px;\r
  font-weight: 700;\r
  text-align: right;\r
}\r
\r
.ml-summary__save--big {\r
  font-size: 14px;\r
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 8%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 15%, transparent);\r
  padding: 6px 12px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  text-align: center;\r
  margin-top: 4px;\r
}\r
\r
.ml-summary__benefits {\r
  border-top: 1px solid var(--ml-border);\r
  padding-top: 14px;\r
  display: grid;\r
  gap: 9px;\r
}\r
\r
.ml-summary__benefit-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 9px;\r
  color: var(--ml-muted);\r
  font-size: 12.5px;\r
  font-weight: 500;\r
  line-height: 1.3;\r
}\r
\r
.ml-summary__benefit-item i,\r
.ml-summary__benefit-icon {\r
  color: var(--ml-trust-green);\r
  flex-shrink: 0;\r
  width: 16px;\r
  text-align: center;\r
}\r
\r
.ml-overlay {\r
  position: fixed;\r
  inset: 0;\r
  z-index: 2000;\r
  display: grid;\r
  place-items: center;\r
  background: color-mix(in srgb, var(--ml-card) 88%, transparent);\r
  backdrop-filter: blur(4px);\r
}\r
\r
.ml-spinner {\r
  width: 38px;\r
  height: 38px;\r
  border-radius: 50%;\r
  border: 3px solid color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);\r
  border-top-color: var(--ml-blue);\r
\r
  animation: ml-spin 0.75s linear infinite !important;\r
  transform-origin: 50% 50%;\r
  will-change: transform;\r
  box-sizing: border-box;\r
  flex-shrink: 0;\r
}\r
\r
@keyframes ml-spin {\r
  from { transform: rotate(0deg); }\r
  to   { transform: rotate(360deg); }\r
}\r
\r
.ml-overlay__content {\r
  display: grid;\r
  justify-items: center;\r
  gap: 14px;\r
  color: var(--ml-text);\r
  font-size: 14.5px;\r
  font-weight: 600;\r
}\r
\r
.ml-approved {\r
\r
  width: 100%;\r
  display: flex;\r
  justify-content: center;\r
  align-items: flex-start;\r
  padding: 40px 20px 56px;\r
  background: var(--ml-page);\r
  color: var(--ml-text);\r
  font-family: var(--ml-font);\r
}\r
\r
.ml-approved__card {\r
  width: min(640px, 100%);\r
  background: var(--ml-card);\r
  border: 1px solid var(--ml-border);\r
  border-radius: 16px;\r
  box-shadow: 0 20px 60px color-mix(in srgb, var(--sk-palette-neutral-000000) 12%, transparent), 0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);\r
  padding: 36px 32px;\r
  text-align: center;\r
  position: relative;\r
  overflow: hidden;\r
}\r
\r
html.dark .ml-approved__card {\r
  box-shadow: 0 24px 80px color-mix(in srgb, var(--sk-palette-neutral-000000) 65%, transparent), 0 4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 40%, transparent);\r
}\r
\r
.ml-approved__card::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  height: 4px;\r
  background: linear-gradient(90deg, var(--ml-green), var(--ml-green-light));\r
  border-radius: 16px 16px 0 0;\r
}\r
\r
.ml-approved__icon {\r
  width: 80px;\r
  height: 80px;\r
  border-radius: 50%;\r
  display: grid;\r
  place-items: center;\r
  margin: 0 auto 20px;\r
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);\r
  color: var(--ml-trust-green);\r
  font-size: 34px;\r
  border: 2px solid color-mix(in srgb, var(--sk-palette-green-00a650) 15%, transparent);\r
  box-shadow: 0 0 32px color-mix(in srgb, var(--sk-ds-accent) 20%, transparent);\r
}\r
\r
.ml-approved h2 {\r
  margin: 0 0 10px;\r
  font-size: 26px;\r
  line-height: 1.2;\r
  font-weight: 800;\r
  font-family: var(--ml-font);\r
  color: var(--ml-text);\r
}\r
\r
.ml-approved p {\r
  color: var(--ml-muted);\r
  font-size: 14.5px;\r
  line-height: 1.55;\r
  max-width: 440px;\r
  margin: 0 auto;\r
}\r
\r
.ml-approved__actions,\r
.ml-approved__affiliate {\r
  margin-top: 22px;\r
}\r
\r
.ml-approved__actions {\r
  display: flex;\r
  justify-content: center;\r
  gap: 10px;\r
  flex-wrap: wrap;\r
}\r
\r
.ml-approved__affiliate {\r
  border-top: 1px solid var(--ml-border);\r
  padding-top: 22px;\r
  text-align: left;\r
}\r
\r
.ml-approved__affiliate h3 {\r
  font-size: 15px;\r
  font-weight: 700;\r
  margin-bottom: 8px;\r
}\r
\r
.ml-approved__affiliate p {\r
  font-size: 13.5px;\r
  text-align: left;\r
  margin-bottom: 16px;\r
}\r
\r
.ml-mobile-cta-bar {\r
  display: none;\r
  position: fixed;\r
  bottom: calc(var(--rv-bottom-nav-h, 56px) + var(--rv-safe-bottom, env(safe-area-inset-bottom, 0px)));\r
  left: 0;\r
  right: 0;\r
  z-index: 75;\r
  padding: 12px 16px;\r
  background: var(--ml-card);\r
  border-top: 1px solid var(--ml-border);\r
  box-shadow: 0 -4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 12%, transparent);\r
}\r
\r
html.dark .ml-mobile-cta-bar {\r
  box-shadow: 0 -4px 28px color-mix(in srgb, var(--sk-palette-neutral-000000) 55%, transparent);\r
}\r
\r
@media (max-width: 860px) {\r
\r
  .ml-checkout__grid,\r
  .ml-checkout__grid[data-logged="true"] {\r
    grid-template-columns: 1fr;\r
    gap: 12px;\r
  }\r
\r
  .ml-main-stack {\r
    order: 0;\r
    width: 100%;\r
    gap: 12px;\r
  }\r
\r
  .ml-side-stack {\r
    order: 0;\r
    width: 100%;\r
    gap: 12px;\r
  }\r
\r
  .ml-side-stack__sticky {\r
    position: static;\r
    width: 100%;\r
  }\r
\r
  .ml-checkout__shell {\r
    max-width: 100%;\r
    padding-inline: 14px;\r
    padding-block: 8px 32px;\r
  }\r
\r
  .ml-checkout[data-mobile-dock="single-action"] .ml-checkout__shell {\r
    padding-bottom: 150px;\r
  }\r
\r
  .ml-checkout[data-mobile-dock="payment-options"] .ml-checkout__shell {\r
    padding-bottom: 150px;\r
  }\r
\r
  .ml-desktop-only {\r
    display: none !important;\r
  }\r
\r
  .ml-page-subtitle {\r
    max-width: 100%;\r
    margin-top: 3px;\r
    font-size: 0.78125rem;\r
    line-height: 1.5;\r
  }\r
\r
  .ml-card,\r
  .ml-payment-card,\r
  .ml-summary {\r
    margin: 0;\r
    border-radius: 14px;\r
  }\r
\r
  .ml-card__header,\r
  .ml-summary__header {\r
    padding: 10px 14px;\r
  }\r
\r
  .ml-card__title {\r
    font-size: 0.8125rem;\r
  }\r
\r
  .ml-item {\r
    grid-template-columns: 52px minmax(0, 1fr) auto;\r
    gap: 8px 10px;\r
    padding: 10px 14px;\r
    align-items: center;\r
  }\r
\r
  .ml-item__image {\r
    width: 52px;\r
    height: 52px;\r
    border-radius: 8px;\r
  }\r
\r
  .ml-item__name {\r
    font-size: 0.8125rem;\r
    letter-spacing: -0.015em;\r
  }\r
\r
  .ml-item__meta {\r
    font-size: 0.71875rem;\r
  }\r
\r
  .ml-item__side {\r
    gap: 6px;\r
    min-width: 4.75rem;\r
  }\r
\r
  .ml-item__pricing {\r
    align-items: flex-end;\r
  }\r
\r
  .ml-remove {\r
    min-width: 36px;\r
    min-height: 36px;\r
    width: 36px;\r
    height: 36px;\r
    padding: 0;\r
    border-radius: var(--sk-r-sm, 6px);\r
  }\r
\r
  .ml-remove__label {\r
    display: none;\r
  }\r
\r
  .ml-option-title {\r
    font-size: 0.8125rem;\r
    font-weight: 700;\r
  }\r
\r
  .ml-option-desc {\r
    margin-top: 2px;\r
    font-size: 0.71875rem;\r
  }\r
\r
  .ml-affiliate-referral {\r
    grid-template-columns: 34px minmax(0, 1fr);\r
    align-items: flex-start;\r
    gap: 10px;\r
  }\r
\r
  .ml-affiliate-referral__icon {\r
    width: 34px;\r
    height: 34px;\r
  }\r
\r
  .ml-affiliate-referral__badge,\r
  .ml-affiliate-referral__button {\r
    grid-column: 1 / -1;\r
    width: 100%;\r
    justify-content: center;\r
    text-align: center;\r
  }\r
\r
  .ml-coupon {\r
    padding: 10px 14px;\r
  }\r
\r
  .ml-coupon input {\r
    min-height: 44px;\r
    font-size: 0.8125rem;\r
  }\r
\r
  .ml-pix-box {\r
    padding: 12px 14px;\r
  }\r
\r
  .ml-digital-note,\r
  .ml-test-note {\r
    gap: 8px;\r
    padding: 10px 12px;\r
    margin-bottom: 10px;\r
    font-size: 0.75rem;\r
    line-height: 1.45;\r
  }\r
\r
  .ml-pix-hero-banner {\r
    padding: 12px 14px;\r
    gap: 12px;\r
    margin-bottom: 12px;\r
  }\r
\r
  .ml-pix-hero-banner__icon {\r
    width: 40px;\r
    height: 40px;\r
  }\r
\r
  .ml-pix-hero-banner__title {\r
    font-size: 0.8125rem;\r
  }\r
\r
  .ml-pix-hero-banner__sub {\r
    font-size: 0.71875rem;\r
  }\r
\r
  .ml-pix-pending {\r
    padding: 16px 14px;\r
  }\r
\r
  .ml-pix-qr {\r
    width: min(180px, 56vw);\r
    height: min(180px, 56vw);\r
    padding: 6px;\r
    margin: 6px auto 14px;\r
  }\r
\r
  .ml-copy-row {\r
    flex-direction: column;\r
    gap: 0;\r
    width: 100%;\r
    border-radius: var(--sk-r-sm, 6px);\r
  }\r
\r
  .ml-copy-row input {\r
    width: 100%;\r
    min-height: 44px;\r
    height: 44px;\r
    border-bottom: 1px solid var(--ml-border);\r
    font-size: 0.8125rem;\r
  }\r
\r
  .ml-copy-row button,\r
  .ml-copy-row .ml-copy-row__btn,\r
  .ml-copy-row .ml-button--green {\r
    width: 100% !important;\r
    min-height: 46px !important;\r
    height: 46px;\r
    border-radius: var(--sk-r-sm) !important;\r
    font-size: 0.8125rem;\r
  }\r
\r
  .ml-button {\r
    min-height: 48px;\r
    padding: 0 16px;\r
    gap: 8px;\r
    font-size: 0.875rem;\r
    border-radius: var(--sk-r-sm, 6px);\r
  }\r
\r
  .ml-button--primary {\r
    min-height: 50px;\r
    font-size: 0.9375rem;\r
  }\r
\r
  .ml-link-button {\r
    font-size: 0.78125rem;\r
  }\r
\r
  .ml-badge {\r
    font-size: 0.625rem;\r
    padding: 3px 8px;\r
  }\r
\r
  .ml-summary__body {\r
    padding: 12px 14px;\r
    gap: 9px;\r
  }\r
\r
  .ml-summary__row {\r
    font-size: 0.8125rem;\r
  }\r
\r
  .ml-summary__total .ml-money--lg {\r
    font-size: 22px;\r
  }\r
\r
  .ml-summary__benefits {\r
    padding-top: 12px;\r
    gap: 8px;\r
  }\r
\r
  .ml-mobile-cta-bar {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 8px;\r
    position: fixed;\r
    bottom: 0;\r
    left: 0;\r
    right: 0;\r
    width: 100%;\r
    box-sizing: border-box;\r
    z-index: 100;\r
    padding: 8px 10px;\r
    padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));\r
    background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 96%, transparent);\r
    backdrop-filter: blur(20px);\r
    -webkit-backdrop-filter: blur(20px);\r
    border-top: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);\r
    box-shadow: 0 -2px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);\r
  }\r
\r
  html.dark .ml-mobile-cta-bar {\r
    background: color-mix(in srgb, var(--sk-palette-neutral-09090b) 96%, transparent);\r
    border-top-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
    box-shadow: 0 -2px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 50%, transparent);\r
  }\r
\r
  .ml-mobile-cta-bar .ml-button--primary {\r
    width: 100% !important;\r
    min-height: 48px;\r
    border-radius: var(--sk-r-md, 8px) !important;\r
    font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
    font-weight: 800;\r
    font-size: 0.875rem;\r
    letter-spacing: 0.03em;\r
    text-transform: none;\r
    background: linear-gradient(135deg, var(--sk-accent) 0%, var(--sk-accent) 100%) !important;\r
    color: var(--sk-palette-neutral-ffffff) !important;\r
    box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-accent) 32%, transparent) !important;\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
    gap: 8px;\r
    box-sizing: border-box;\r
  }\r
\r
  \r
\r
  \r
\r
  .ml-approved {\r
    padding: 16px 14px 32px;\r
    align-items: flex-start;\r
    min-height: 0;\r
  }\r
\r
  .ml-approved__card {\r
    padding: 24px 18px;\r
    border-radius: 16px;\r
  }\r
\r
  .ml-approved h2 {\r
    font-size: 1.375rem;\r
    letter-spacing: -0.02em;\r
  }\r
\r
  .ml-approved__actions {\r
    flex-direction: column;\r
    gap: 8px;\r
  }\r
\r
  .ml-approved__actions .ml-button {\r
    width: 100% !important;\r
    min-height: 50px;\r
    border-radius: var(--sk-r-sm, 6px);\r
  }\r
}\r
\r
@media (max-width: 380px) {\r
}\r
\r
.checkout-profile-modal {\r
  width: min(calc(100% - 1.5rem), 32.5rem) !important;\r
  max-width: 32.5rem !important;\r
  max-height: calc(100dvh - 1.5rem) !important;\r
  padding: clamp(1.25rem, 4vw, 2rem) !important;\r
  border-radius: var(--sk-r-lg, 16px) !important;\r
  border: 1px solid var(--sk-ds-line, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent)) !important;\r
  font-family: 'Montserrat', sans-serif;\r
  scrollbar-gutter: stable;\r
}\r
\r
.checkout-profile-form {\r
  display: flex;\r
  flex-direction: column;\r
  gap: clamp(1rem, 2.4vw, 1.35rem);\r
}\r
\r
.checkout-profile-header {\r
  padding-right: 2.25rem;\r
}\r
\r
.checkout-profile-icon {\r
  display: flex;\r
  width: 3rem;\r
  height: 3rem;\r
  align-items: center;\r
  justify-content: center;\r
  margin-bottom: 1rem;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 24%, transparent);\r
  border-radius: 0.85rem;\r
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);\r
  color: var(--ml-green);\r
}\r
\r
.checkout-profile-kicker {\r
  margin: 0 0 0.4rem;\r
  color: var(--ml-blue-hover);\r
  font-size: 0.68rem;\r
  font-weight: 800;\r
  letter-spacing: 0.14em;\r
  line-height: 1.2;\r
  text-transform: uppercase;\r
}\r
\r
.checkout-profile-title {\r
  margin: 0;\r
  color: var(--sk-palette-blue-111827);\r
  font-family: 'Orbitron', sans-serif;\r
  font-size: clamp(1.18rem, 4.4vw, 1.55rem);\r
  font-weight: 800;\r
  letter-spacing: -0.025em;\r
  line-height: 1.24;\r
  text-wrap: balance;\r
}\r
\r
.checkout-profile-subtitle {\r
  max-width: 28rem;\r
  margin: 0.65rem 0 0;\r
  color: var(--sk-palette-blue-4b5563);\r
  font-size: clamp(0.86rem, 2.6vw, 0.95rem);\r
  font-weight: 500;\r
  letter-spacing: -0.01em;\r
  line-height: 1.7;\r
}\r
\r
.checkout-profile-context {\r
  padding: clamp(0.9rem, 3vw, 1.1rem);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 20%, transparent);\r
  border-radius: 0.9rem;\r
  background: color-mix(in srgb, var(--sk-accent) 5.5%, transparent);\r
}\r
\r
.checkout-profile-context-title {\r
  display: block;\r
  color: var(--ml-blue-hover);\r
  font-size: 0.7rem;\r
  font-weight: 800;\r
  letter-spacing: 0.075em;\r
  line-height: 1.35;\r
  text-transform: uppercase;\r
}\r
\r
.checkout-profile-context-copy {\r
  margin: 0.45rem 0 0;\r
  color: var(--sk-palette-blue-4b5563);\r
  font-size: clamp(0.77rem, 2.4vw, 0.84rem);\r
  font-weight: 500;\r
  line-height: 1.65;\r
}\r
\r
.checkout-profile-field {\r
  min-width: 0;\r
}\r
\r
.checkout-profile-label {\r
  display: flex;\r
  align-items: baseline;\r
  justify-content: space-between;\r
  gap: 0.75rem;\r
  margin-bottom: 0.55rem;\r
  color: var(--sk-palette-blue-374151);\r
  font-size: 0.72rem;\r
  font-weight: 800;\r
  letter-spacing: 0.075em;\r
  line-height: 1.35;\r
  text-transform: uppercase;\r
}\r
\r
.checkout-profile-label span {\r
  color: var(--ml-blue-hover);\r
  font-size: 0.62rem;\r
  letter-spacing: 0.045em;\r
}\r
\r
.checkout-profile-input {\r
  width: 100%;\r
  height: 3rem;\r
  padding: 0 1rem;\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: var(--sk-palette-blue-f9fafb);\r
  color: var(--sk-palette-blue-111827);\r
  font-size: 0.9rem;\r
  font-weight: 700;\r
  outline: none;\r
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;\r
}\r
\r
.checkout-profile-input:focus {\r
  border-color: var(--ml-green);\r
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sk-accent) 14%, transparent);\r
}\r
\r
.checkout-profile-input:disabled {\r
  cursor: wait;\r
  opacity: 0.6;\r
}\r
\r
.checkout-profile-actions {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);\r
  gap: 0.65rem;\r
  padding-top: 0.15rem;\r
}\r
\r
.checkout-profile-primary,\r
.checkout-profile-secondary {\r
  min-height: 2.9rem;\r
  padding: 0.7rem 1rem;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-size: 0.84rem;\r
  font-weight: 800;\r
  line-height: 1.25;\r
  transition: color 160ms ease, background-color 160ms ease, border-color 160ms ease, opacity 160ms ease;\r
}\r
\r
.checkout-profile-primary {\r
  grid-column: 2;\r
  grid-row: 1;\r
  border: 1px solid var(--ml-blue-hover);\r
  background: var(--sk-ds-accent);\r
  color: var(--sk-ds-on-accent);\r
}\r
\r
.checkout-profile-primary:hover {\r
  border-color: var(--ml-green);\r
  background: var(--ml-green);\r
}\r
\r
.checkout-profile-secondary {\r
  grid-column: 1;\r
  grid-row: 1;\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  background: transparent;\r
  color: var(--sk-palette-blue-4b5563);\r
}\r
\r
.checkout-profile-secondary:hover {\r
  background: var(--sk-palette-blue-f3f4f6);\r
  color: var(--sk-palette-blue-111827);\r
}\r
\r
.ml-pix-hero-banner {\r
  display: flex;\r
  align-items: center;\r
  gap: 16px;\r
  padding: 16px 18px;\r
  margin-bottom: 18px;\r
  border-radius: 14px;\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-accent) 10%, transparent) 0%, color-mix(in srgb, var(--sk-palette-neutral-0c0c0e) 70%, transparent) 100%);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  box-shadow: inset 0 0 16px color-mix(in srgb, var(--sk-accent) 5%, transparent);\r
}\r
\r
.ml-pix-hero-banner__icon {\r
  width: 48px;\r
  height: 48px;\r
  border-radius: 12px;\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
  display: grid;\r
  place-items: center;\r
  flex-shrink: 0;\r
}\r
\r
.ml-pix-hero-banner__tag {\r
  font-family: var(--ml-font-heading);\r
  font-size: 9px;\r
  font-weight: 800;\r
  letter-spacing: 0.08em;\r
  color: var(--ml-green);\r
  display: inline-block;\r
  margin-bottom: 2px;\r
}\r
\r
.ml-pix-hero-banner__title {\r
  margin: 0;\r
  font-size: 14px;\r
  font-weight: 800;\r
  color: var(--ml-text);\r
}\r
\r
.ml-pix-hero-banner__sub {\r
  margin: 4px 0 0;\r
  font-size: 12px;\r
  color: var(--ml-muted);\r
  line-height: 1.4;\r
}\r
\r
body:has(.skull-cart-route:not([hidden]) .ml-checkout:not([data-cart-empty="true"])) .bnb-root,\r
[data-responsive-governance]:has(.skull-cart-route:not([hidden]) .ml-checkout:not([data-cart-empty="true"])) .bnb-root {\r
  display: none !important;\r
}\r
\r
body:has(.skull-cart-route:not([hidden]) .ml-checkout:not([data-cart-empty="true"])) .scroll-pb-store,\r
[data-responsive-governance]:has(.skull-cart-route:not([hidden]) .ml-checkout:not([data-cart-empty="true"])) .scroll-pb-store {\r
  padding-bottom: 0 !important;\r
}\r
\r
@media (min-width: 1024px) {\r
  body:has(.skull-cart-route:not([hidden]) .ml-checkout) [data-main-scroll-container],\r
  [data-responsive-governance]:has(.skull-cart-route:not([hidden]) .ml-checkout) [data-main-scroll-container] {\r
    overflow-y: scroll !important;\r
    overflow-x: hidden !important;\r
    scrollbar-gutter: stable !important;\r
  }\r
}\r
\r
body:has(.skull-cart-route:not([hidden]) .ml-checkout) [data-main-scroll-container] > div,\r
[data-responsive-governance]:has(.skull-cart-route:not([hidden]) .ml-checkout) [data-main-scroll-container] > div {\r
  min-height: 100%;\r
  padding-top: 0 !important;\r
  padding-bottom: 0 !important;\r
}\r
\r
.checkout-profile-primary:disabled,\r
.checkout-profile-secondary:disabled {\r
  cursor: wait;\r
  opacity: 0.58;\r
}\r
\r
.dark .checkout-profile-title { color: var(--sk-palette-blue-f9fafb); }\r
.dark .checkout-profile-subtitle,\r
.dark .checkout-profile-context-copy { color: var(--sk-palette-neutral-9ca3af); }\r
.dark .checkout-profile-context { background: color-mix(in srgb, var(--sk-accent) 7%, transparent); }\r
.dark .checkout-profile-label { color: var(--sk-palette-blue-d1d5db); }\r
.dark .checkout-profile-input {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 11%, transparent);\r
  background: var(--sk-palette-neutral-000000);\r
  color: var(--sk-palette-neutral-ffffff);\r
}\r
.dark .checkout-profile-secondary {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);\r
  color: var(--sk-palette-blue-d1d5db);\r
}\r
.dark .checkout-profile-secondary:hover { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5.5%, transparent); }\r
\r
@media (max-width: 639px) {\r
  .checkout-profile-modal {\r
    width: calc(100% - 1rem) !important;\r
    max-height: calc(100dvh - 1rem) !important;\r
    padding: 1.15rem !important;\r
    border-radius: 1rem !important;\r
  }\r
\r
  .checkout-profile-header { padding-right: 2rem; }\r
  .checkout-profile-icon {\r
    width: 2.7rem;\r
    height: 2.7rem;\r
    margin-bottom: 0.85rem;\r
  }\r
  .checkout-profile-actions { grid-template-columns: 1fr; }\r
  .checkout-profile-primary,\r
  .checkout-profile-secondary {\r
    grid-column: 1;\r
    min-height: 3rem;\r
  }\r
  .checkout-profile-primary { grid-row: 1; }\r
  .checkout-profile-secondary { grid-row: 2; }\r
}\r
.ml-stage {\r
  padding: clamp(14px, 1.4vw, 18px);\r
  border: 1px solid var(--ml-border);\r
  border-radius: 18px;\r
  background: var(--ml-card);\r
  box-shadow: var(--ml-shadow);\r
  min-width: 0;\r
}\r
.ml-stage[data-active="true"] { border-color: var(--sk-ds-accent); }\r
.ml-stage-title {\r
  display: flex; align-items: center; gap: 8px; margin: 0;\r
  font: 700 14px/1.3 var(--ml-font-heading); color: var(--ml-text);\r
}\r
.ml-stage-number {\r
  display: grid; place-items: center;\r
  width: 22px; height: 22px; flex: 0 0 22px;\r
  border-radius: 50%; background: var(--ml-soft); color: var(--ml-text-sec); font-size: 11px;\r
}\r
.ml-stage[data-active="true"] .ml-stage-number {\r
  background: var(--sk-ds-accent); color: var(--sk-ds-on-accent, var(--sk-palette-neutral-ffffff));\r
}\r
.ml-stage-copy { margin: 6px 0 14px; color: var(--ml-muted); font-size: 11.5px; line-height: 1.5; }\r
.ml-stage-footnote {\r
  display: flex; align-items: flex-start; gap: 8px;\r
  margin: 20px 0 0; padding-top: 16px;\r
  border-top: 1px solid var(--ml-border); color: var(--ml-muted); font-size: 11px; line-height: 1.7;\r
}\r
.ml-stage-footnote svg { flex-shrink: 0; margin-top: 3px; }\r
.ml-payment-selection { min-width: 0; }\r
.ml-stage .ml-button { border-radius: var(--sk-r-sm, 6px); min-height: 40px; font-size: 12px; }\r
.ml-stage .ml-card, .ml-stage .ml-payment-card { border: 0; box-shadow: none; }\r
.ml-side-stack .ml-card, .ml-side-stack .ml-summary { border: 1px solid var(--ml-border); border-radius: var(--sk-r-md, 12px); background: var(--ml-card); box-shadow: none; overflow: hidden; }\r
.ml-side-stack .ml-card__header, .ml-side-stack .ml-summary__header { padding: 18px 20px; background: transparent; border-bottom: 1px solid var(--ml-border); }\r
.ml-side-stack .ml-coupon, .ml-side-stack .ml-summary__body { padding: 20px; background: transparent; }\r
.ml-side-stack .ml-item { grid-template-columns: 56px minmax(0, 1fr) auto; gap: 16px; padding: 20px; }\r
.ml-side-stack .ml-item__side { gap: 12px; }\r
.ml-side-stack .ml-item__name { font: 600 14px/1.5 var(--sk-font-heading); }\r
.ml-side-stack .ml-money--md { font-size: 16px; }\r
.ml-side-stack .ml-summary__total .ml-money--lg { font-size: 26px; text-shadow: none; }\r
.ml-side-stack .ml-affiliate-referral { grid-template-columns: 34px minmax(0, 1fr); align-items: start; gap: 10px; }\r
.ml-side-stack .ml-affiliate-referral__icon { width: 34px; height: 34px; }\r
.ml-side-stack .ml-affiliate-referral__body { overflow-wrap: anywhere; }\r
.ml-side-stack .ml-affiliate-referral__badge, .ml-side-stack .ml-affiliate-referral__button { grid-column: 1 / -1; width: 100%; justify-content: center; text-align: center; }\r
.ml-checkout__grid--centered,\r
.ml-checkout__grid--pending-pix,\r
.ml-checkout__grid[data-payment-stage="true"],\r
.ml-checkout__grid[data-pending-pix="true"] {\r
  display: flex !important;\r
  flex-direction: column !important;\r
  align-items: center !important;\r
  justify-content: center !important;\r
  max-width: 580px !important;\r
  margin-inline: auto !important;\r
  width: 100% !important;\r
}\r
.ml-checkout__grid--centered .ml-main-stack,\r
.ml-checkout__grid--pending-pix .ml-main-stack,\r
.ml-checkout__grid[data-payment-stage="true"] .ml-main-stack,\r
.ml-checkout__grid[data-pending-pix="true"] .ml-main-stack {\r
  width: 100% !important;\r
  max-width: 580px !important;\r
  margin: 0 auto !important;\r
}\r
.ml-page-subtitle--center {\r
  text-align: center !important;\r
  margin: 10px auto !important;\r
}\r
.ml-stage .ml-pix-pending, .ml-stage .ml-pix-box { padding: 16px 0 0; text-align: center; }\r
.ml-stage .ml-pix-qr { max-width: 100%; margin: 8px auto 14px; display: flex; justify-content: center; }\r
.ml-stage .ml-copy-row {\r
  flex-wrap: wrap;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 12px;\r
  padding: 12px 14px;\r
  width: min(520px, 100%);\r
  margin: 0 auto 16px;\r
  border: 1px solid var(--ml-border);\r
  border-radius: 14px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 45%, transparent);\r
}\r
.ml-stage .ml-copy-row input {\r
  min-width: 0;\r
  width: 100%;\r
  border: 1px solid var(--ml-border);\r
  border-radius: 8px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 60%, transparent);\r
  padding: 10px 12px;\r
  font-family: var(--sk-font-mono, monospace);\r
  font-size: 12px;\r
  color: var(--ml-text, var(--sk-ds-t1));\r
  text-align: center;\r
}\r
.ml-stage .ml-copy-row .ml-copy-row__btn,\r
.ml-stage .ml-copy-row .ml-button--green,\r
.ml-copy-row__btn--centered {\r
  margin: 0 auto !important;\r
  display: inline-flex !important;\r
  align-items: center !important;\r
  justify-content: center !important;\r
  border-radius: var(--sk-r-sm, 6px) !important;\r
  min-width: 160px;\r
  height: 42px;\r
  font-weight: 700;\r
  font-size: 13px;\r
  letter-spacing: 0.02em;\r
}\r
.ml-digital-note--centered,\r
.ml-pix-pending .ml-digital-note,\r
.ml-stage .ml-pix-pending .ml-digital-note,\r
.ml-stage .ml-digital-note {\r
  display: flex !important;\r
  flex-direction: column !important;\r
  align-items: center !important;\r
  justify-content: center !important;\r
  text-align: center !important;\r
  margin: 16px auto 0 !important;\r
  padding: 16px 20px !important;\r
  max-width: 520px !important;\r
  width: 100% !important;\r
  gap: 10px !important;\r
  border-radius: 14px !important;\r
  box-sizing: border-box !important;\r
}\r
\r
.ml-digital-note--centered .ml-digital-note__spin,\r
.ml-pix-pending .ml-digital-note .ml-digital-note__spin,\r
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__spin,\r
.ml-stage .ml-digital-note .ml-digital-note__spin {\r
  display: flex !important;\r
  align-items: center !important;\r
  justify-content: center !important;\r
  margin: 0 auto !important;\r
  width: 28px !important;\r
  height: 28px !important;\r
}\r
\r
.ml-digital-note--centered .ml-digital-note__spin svg,\r
.ml-digital-note--centered .ml-digital-note__spin .fa-spin,\r
.ml-pix-pending .ml-digital-note .ml-digital-note__spin svg,\r
.ml-pix-pending .ml-digital-note .ml-digital-note__spin .fa-spin,\r
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__spin svg,\r
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__spin .fa-spin,\r
.ml-stage .ml-digital-note .ml-digital-note__spin svg,\r
.ml-stage .ml-digital-note .ml-digital-note__spin .fa-spin {\r
  font-size: 22px !important;\r
  width: 22px !important;\r
  height: 22px !important;\r
  color: var(--ml-trust-green, var(--sk-ds-accent)) !important;\r
  display: block !important;\r
  margin: 0 auto !important;\r
}\r
\r
.ml-digital-note--centered .ml-digital-note__text,\r
.ml-pix-pending .ml-digital-note .ml-digital-note__text,\r
.ml-stage .ml-pix-pending .ml-digital-note .ml-digital-note__text,\r
.ml-stage .ml-digital-note .ml-digital-note__text {\r
  text-align: center !important;\r
  font-size: 13px !important;\r
  line-height: 1.5 !important;\r
  color: var(--ml-trust-green, var(--sk-ds-accent)) !important;\r
  margin: 0 auto !important;\r
  max-width: 440px !important;\r
  display: block !important;\r
}\r
.ml-checkout button:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 4px; }\r
@media (max-width: 1100px) and (min-width: 861px) {\r
  .ml-checkout__grid { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); }\r
  .ml-side-stack { grid-column: 1 / -1; }\r
}\r
@media (max-width: 860px) {\r
  .ml-stage { padding: 12px 14px; border-radius: 14px; }\r
}\r
\r
.yp-header {\r
  width: 100%;\r
  background: var(--sk-nav-surface);\r
  border-bottom: 1px solid var(--ml-border);\r
  padding: 10px 16px;\r
  padding-top: calc(10px + env(safe-area-inset-top, 0px));\r
  position: relative;\r
  z-index: 40;\r
}\r
.yp-header__inner {\r
  max-width: 1320px;\r
  margin-inline: auto;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
}\r
.yp-header__brand {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  background: none;\r
  border: none;\r
  cursor: pointer;\r
  padding: 0;\r
}\r
.yp-header__secure {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  color: var(--sk-ds-accent);\r
  font-size: 11px;\r
}\r
.yp-header__secure-text {\r
  display: flex;\r
  flex-direction: column;\r
  line-height: 1.1;\r
  text-align: right;\r
}\r
.yp-header__secure-text strong {\r
  font-size: 10px;\r
  letter-spacing: 0.05em;\r
  color: var(--ml-text);\r
}\r
.yp-header__secure-text span {\r
  font-weight: 700;\r
  color: var(--sk-ds-accent);\r
}\r
\r
.yp-card-section {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 14px;\r
  margin-top: 16px;\r
}\r
\r
.yp-card-inputs {\r
  display: grid;\r
  gap: 16px;\r
  min-width: 0;\r
}\r
.yp-form-group {\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 6px;\r
}\r
.yp-form-row {\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  gap: 12px;\r
}\r
.yp-label {\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: var(--ml-text);\r
}\r
.yp-input {\r
  width: 100%;\r
  height: 46px;\r
  padding: 0 14px;\r
  border-radius: 12px;\r
  border: 1px solid var(--ml-border);\r
  background: var(--ml-card);\r
  color: var(--ml-text);\r
  font-size: 14px;\r
  transition: border-color 0.2s;\r
}\r
.yp-input:focus {\r
  outline: none;\r
  border-color: var(--sk-ds-accent);\r
}\r
.yp-card-footnote {\r
  font-size: 11px;\r
  color: var(--ml-muted);\r
  margin: 0;\r
  line-height: 1.6;\r
}\r
\r
.yp-footer {\r
  width: 100%;\r
  box-sizing: border-box;\r
  margin-top: auto;\r
  padding: 16px 16px calc(16px + env(safe-area-inset-bottom, 0px));\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 8px;\r
  background: var(--ml-page);\r
  border-top: 1px solid var(--ml-border);\r
  text-align: center;\r
  flex-shrink: 0;\r
}\r
.yp-footer__brands {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 10px;\r
}\r
.yp-footer__brand-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 48px;\r
  height: 32px;\r
  border-radius: 6px;\r
  overflow: hidden;\r
  box-shadow: 0 2px 6px color-mix(in srgb, var(--sk-palette-neutral-000000) 35%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 16%, transparent);\r
  transition: transform 0.2s ease, box-shadow 0.2s ease;\r
  background: var(--sk-palette-neutral-ffffff);\r
  padding: 0;\r
  flex-shrink: 0;\r
}\r
.yp-footer__brand-badge:hover {\r
  border-color: var(--ml-border);\r
}\r
.yp-footer__brand-img {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: contain;\r
     object-fit: contain;\r
  display: block;\r
}\r
.yp-footer__legal {\r
  font-size: 11.5px;\r
  color: var(--ml-muted);\r
  line-height: 1.5;\r
  margin: 0;\r
}\r
.yp-pills {\r
  display: flex;\r
  padding: 4px;\r
  border-radius: 14px;\r
  background: var(--ml-soft);\r
  gap: 4px;\r
  margin-bottom: 16px;\r
}\r
.yp-pill-btn {\r
  flex: 1;\r
  padding: 9px 14px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: none;\r
  background: transparent;\r
  font-size: 12.5px;\r
  font-weight: 600;\r
  color: var(--ml-muted);\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  transition: all 0.2s ease;\r
}\r
.yp-pill-btn.is-active {\r
  background: var(--ml-card);\r
  color: var(--ml-text);\r
  box-shadow: 0 2px 8px color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
}\r
\r
.yp-method-tabs {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
  margin-block: 14px;\r
}\r
.yp-method-option {\r
  border: 1px solid var(--ml-border);\r
  border-radius: var(--sk-r-md, 10px);\r
  padding: 16px;\r
  background: var(--ml-card);\r
  cursor: default;\r
  transition: all 0.2s ease;\r
}\r
.yp-method-option.is-selected {\r
  cursor: default;\r
  border-color: var(--sk-accent);\r
  box-shadow: 0 0 0 1px var(--sk-accent);\r
}\r
.yp-method-option__header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  width: 100%;\r
  cursor: pointer;\r
}\r
.yp-card-section,\r
.yp-card-inputs,\r
.yp-form-group,\r
.yp-form-row,\r
.yp-label,\r
.ml-payment-selection .ml-stage-copy {\r
  cursor: default;\r
}\r
.yp-method-option__left {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  min-width: 0;\r
  flex: 1;\r
}\r
.yp-method-option__radio {\r
  width: 20px;\r
  height: 20px;\r
  min-width: 20px;\r
  min-height: 20px;\r
  max-width: 20px;\r
  max-height: 20px;\r
  aspect-ratio: 1 / 1;\r
  border-radius: 50%;\r
  border: 2px solid var(--ml-border);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
  box-sizing: border-box;\r
}\r
.yp-method-option.is-selected .yp-method-option__radio {\r
  border-color: var(--sk-accent);\r
}\r
.yp-method-option.is-selected .yp-method-option__radio::after {\r
  content: "";\r
  width: 8px;\r
  height: 8px;\r
  min-width: 8px;\r
  min-height: 8px;\r
  aspect-ratio: 1 / 1;\r
  border-radius: 50%;\r
  background: var(--sk-accent);\r
  flex-shrink: 0;\r
}\r
.yp-badge-instant {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 4px 8px;\r
  border-radius: 6px;\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  color: var(--sk-accent);\r
  font-size: 10px;\r
  font-weight: 800;\r
  letter-spacing: 0.04em;\r
  text-transform: uppercase;\r
  white-space: nowrap;\r
  flex-shrink: 0;\r
  line-height: 1.2;\r
}\r
.yp-method-sub {\r
  font-size: 12px;\r
  color: var(--ml-muted);\r
  margin-top: 3px;\r
  line-height: 1.4;\r
  font-weight: 400;\r
}\r
.yp-method-sub strong {\r
  color: var(--ml-text);\r
  font-weight: 600;\r
}\r
\r
.yp-btn-gold {\r
  width: 100%;\r
  height: 44px;\r
  min-height: 44px;\r
  border-radius: var(--sk-r-md, 8px) !important;\r
  border: none;\r
  background: var(--sk-ds-accent) !important;\r
  color: var(--sk-ds-on-accent) !important;\r
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
  font-weight: 800;\r
  font-size: 14px;\r
  letter-spacing: 0.03em;\r
  text-transform: none;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  box-shadow: none !important;\r
  transition: box-shadow 0.15s ease, background 0.15s ease;\r
}\r
.yp-btn-gold:hover {\r
  background: linear-gradient(135deg, var(--sk-accent) 0%, var(--sk-ds-accent-strong) 100%) !important;\r
  box-shadow: 0 6px 18px color-mix(in srgb, var(--sk-accent) 38%, transparent) !important;\r
  transform: none;\r
}\r
.yp-btn-gold:active {\r
  transform: none;\r
}\r
html.dark .yp-btn-gold {\r
  background: linear-gradient(135deg, var(--sk-accent) 0%, var(--sk-accent) 100%) !important;\r
  box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-accent) 32%, transparent) !important;\r
}\r
\r
.ml-checkout__grid[data-review="true"], .ml-checkout__grid[data-review="false"][data-logged="true"] { grid-template-columns: minmax(0, 1fr); max-width: 720px; margin-inline: auto; }\r
.yp-card-inputs { border: 0; padding: 0; margin: 0; width: 100%; }\r
\r
.yp-header__secure[data-secure="false"], .yp-header__secure[data-secure="false"] span { color: var(--sk-palette-orange-8a640e); }\r
html.dark .yp-header__secure[data-secure="false"], html.dark .yp-header__secure[data-secure="false"] span { color: var(--sk-palette-orange-d6b362); }\r
\r
.ml-checkout .ml-checkout__shell { padding-bottom: 28px; }\r
.ml-checkout .ml-card__title { font: 600 15px/1.5 var(--sk-font-heading); letter-spacing: 0; gap: 10px; }\r
.ml-checkout .ml-card__title svg, .ml-checkout .ml-summary__benefit-icon { display: block; width: 16px !important; height: 16px !important; flex: 0 0 16px; stroke-width: 1.75; }\r
.ml-checkout .ml-summary__row { font: 400 14px/1.6 var(--sk-font-body, var(--ml-font)); }\r
.ml-checkout .ml-summary__benefit-item { font: 400 13px/1.6 var(--sk-font-body, var(--ml-font)); align-items: center; }\r
.ml-checkout .ml-summary__total { align-items: center; }\r
.ml-checkout .ml-money { gap: 0; align-items: baseline; font-family: var(--sk-font-heading); font-variant-numeric: tabular-nums; letter-spacing: -.025em; text-shadow: none; }\r
.ml-checkout .ml-money__cents { font-size: 1em; line-height: inherit; margin-top: 0; font-weight: inherit; align-self: baseline; }\r
.ml-checkout .ml-side-stack { gap: 24px; }\r
.ml-checkout .ml-side-stack > .ml-button { min-height: 48px; font: 600 14px/1.4 var(--sk-font-heading); box-shadow: none; }\r
.ml-checkout .ml-button svg, .ml-checkout .ml-remove svg { display: block; flex-shrink: 0; }\r
.ml-checkout .ml-coupon__form { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 10px; }\r
.ml-checkout .ml-coupon__form input { width: 100%; min-width: 0; font: 400 14px/1.5 var(--ml-font); }\r
.ml-checkout .yp-footer__legal { margin: 0; font: 400 11px/1.5 var(--ml-font); color: var(--ml-muted); }\r
@media (max-width: 1023px) {\r
  .ml-checkout .ml-desktop-only { display: none; }\r
  .ml-checkout { --checkout-action-height: calc(64px + env(safe-area-inset-bottom, 0px)); }\r
  .ml-checkout .yp-footer { position: static; min-height: 0; margin-top: auto; padding: 16px 12px calc(var(--checkout-action-height) + 16px); gap: 6px; }\r
  .ml-checkout .yp-footer__brand-badge { width: 40px; height: 26px; box-shadow: none; }\r
  .ml-checkout .yp-footer__brands { gap: 8px; }\r
  .ml-checkout .yp-footer__legal { font-size: 10px; }\r
  .ml-checkout .ml-mobile-cta-bar { position: fixed; inset: auto 0 0; width: 100%; min-height: var(--checkout-action-height); height: var(--checkout-action-height); padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px)); display: flex; align-items: stretch; box-sizing: border-box; background: var(--ml-page); border-top: 1px solid var(--ml-border); box-shadow: none; z-index: 60; }\r
  .ml-checkout .ml-mobile-cta-bar .ml-button { width: 100%; flex: 1; min-height: 44px !important; height: 48px; margin: 0; font: 600 13px/1.4 var(--sk-font-heading); box-shadow: none; }\r
  .ml-checkout .ml-checkout__shell, .ml-checkout[data-mobile-dock="payment-options"] .ml-checkout__shell, .ml-checkout[data-mobile-dock="single-action"] .ml-checkout__shell { padding: 0 12px 20px; }\r
  .ml-checkout .ml-page-subtitle, .ml-checkout .ml-stage-copy { font-size: 12px; line-height: 1.5; margin-bottom: 10px; }\r
  .ml-checkout .ml-stage { padding: 12px; border-radius: 12px; }\r
  .ml-checkout .ml-stage-title, .ml-checkout .ml-card__title { font-size: 13px; line-height: 1.4; }\r
  .ml-checkout .ml-card__title svg, .ml-checkout .ml-summary__benefit-icon { width: 14px !important; height: 14px !important; flex-basis: 14px; }\r
  .ml-checkout .ml-side-stack, .ml-checkout .ml-side-stack__sticky { gap: 12px; }\r
  .ml-checkout .ml-card__header, .ml-checkout .ml-summary__header { padding: 12px; }\r
  .ml-checkout .ml-coupon, .ml-checkout .ml-summary__body { padding: 12px; }\r
  .ml-checkout .ml-summary__row, .ml-checkout .ml-summary__benefit-item, .ml-checkout .ml-item__name { font-size: 12px; line-height: 1.5; }\r
  .ml-checkout .ml-summary__total .ml-money--lg { font-size: 22px; }\r
  .ml-checkout .yp-label { font-size: 11px; line-height: 1.4; }\r
  .ml-checkout .yp-card-inputs { gap: 12px; }\r
  .ml-checkout .yp-method-option { padding: 12px; }\r
  .ml-checkout .yp-method-option__header strong { font-size: 12px; }\r
  .ml-checkout .yp-method-sub, .ml-checkout .ml-warning { font-size: 11px; line-height: 1.5; }\r
  .ml-checkout .yp-method-tabs { gap: 10px; margin-block: 12px; }\r
  .ml-checkout .yp-input { height: 42px; border-radius: 8px; }\r
}\r
@media (max-width: 640px) {\r
  .ml-side-stack__sticky { gap: 16px; }\r
  .ml-side-stack .ml-card__header, .ml-side-stack .ml-summary__header { padding: 12px; }\r
  .ml-side-stack .ml-coupon, .ml-side-stack .ml-summary__body { padding: 12px; }\r
  .ml-side-stack .ml-item { grid-template-columns: 48px minmax(0, 1fr); padding: 16px; gap: 12px; }\r
  .ml-side-stack .ml-item__side { grid-column: 2; flex-direction: row; justify-content: space-between; align-items: center; }\r
  .ml-side-stack .ml-item__image { width: 48px; height: 56px; }\r
  .ml-checkout .ml-coupon__form input { font-size: 16px; }\r
}\r
\r
.ml-checkout .ml-side-stack .ml-card, .ml-checkout .ml-side-stack .ml-summary, .ml-checkout .yp-method-option, .ml-checkout .ml-stage { border: 1px solid var(--sk-ds-line); background: var(--ml-card); box-shadow: none; }\r
.ml-checkout .yp-method-option.is-selected { border-color: color-mix(in srgb, var(--sk-ds-accent) 35%, var(--sk-ds-line)); box-shadow: none; }\r
.ml-checkout .ml-card__header, .ml-checkout .ml-summary__header { background: transparent; }\r
.ml-checkout .ml-cart-products-rail { display: flex; margin: 12px; width: calc(100% - 24px); border: 1px solid var(--ml-border); border-radius: 8px; min-width: 0; box-sizing: border-box; gap: 12px; overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x mandatory; scroll-padding-inline: 0; scrollbar-width: thin; scrollbar-color: var(--ml-border) transparent; padding: 0; touch-action: pan-x pan-y; }\r
.ml-cart-products-rail > [role="listitem"] { flex: 0 0 100%; min-width: 0; scroll-snap-align: start; overflow: hidden; }\r
.ml-cart-rail-controls { display: flex; align-items: center; gap: 6px; }\r
.ml-cart-rail-controls button { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid var(--ml-border); border-radius: 6px; color: var(--ml-text); background: transparent; }\r
.ml-cart-rail-controls button:disabled { opacity: .3; cursor: default; }\r
.ml-checkout .ml-card__title { font-size: 13px; }\r
.ml-checkout .ml-summary__row, .ml-checkout .ml-summary__benefit-item { font-size: 12px; }\r
.ml-checkout .ml-card__header, .ml-checkout .ml-summary__header { padding: 12px 14px; }\r
.ml-checkout .ml-coupon, .ml-checkout .ml-summary__body { padding: 14px; }\r
.ml-checkout .ml-side-stack .ml-summary__total .ml-money--lg { font-size: 22px; }\r
@media (min-width: 1024px) {\r
  .ml-checkout .ml-page-subtitle, .ml-checkout .ml-stage-copy { font-size: 12px; }\r
  .ml-checkout .yp-method-option__header strong { font-size: 13px; }\r
  .ml-checkout .ml-checkout__grid[data-review="true"] { max-width: 1000px; }\r
  .ml-checkout .ml-side-stack__sticky { grid-template-columns: minmax(0, 1.2fr) minmax(260px, .8fr); gap: 16px; position: static; }\r
  .ml-cart-coupon { grid-column: 1; grid-row: 2; }\r
  .ml-cart-products { grid-column: 1; grid-row: 1; }\r
  .ml-side-stack__sticky > .ml-summary { grid-column: 2; grid-row: 1 / span 2; align-self: start; }\r
  .ml-checkout .ml-side-stack > .ml-button.ml-desktop-only, .ml-checkout .ml-payment-choice-actions { position: static; width: 100%; margin: 16px 0 0; padding: 0; border: 0; background: transparent; box-sizing: border-box; }\r
  .ml-checkout .ml-side-stack > .ml-button.ml-desktop-only { position: relative; }\r
\r
  .ml-checkout .ml-payment-choice-actions .ml-button { width: 100%; min-height: 44px; }\r
  .ml-checkout .ml-checkout__shell { padding-bottom: 24px; }\r
}\r
\r
.ml-checkout .ml-button.ml-button--primary { min-height: 48px; padding: 12px 16px; border: 1px solid transparent; border-radius: 8px !important; background: var(--sk-ds-accent) !important; color: var(--sk-ds-on-accent) !important; box-shadow: none !important; font: 600 13px/1.4 var(--sk-font-heading); letter-spacing: 0; text-transform: none; transform: none !important; }\r
.ml-checkout .ml-button.ml-button--primary:hover:not(:disabled) { transform: none !important; filter: brightness(1.06); }\r
.ml-checkout .ml-button.ml-button--primary:active:not(:disabled) { transform: none !important; filter: brightness(0.96); }\r
.ml-checkout .ml-button.ml-button--primary:disabled { opacity: .45; cursor: not-allowed; }\r
.ml-cart-products-rail .ml-item { min-height: 112px; }\r
\r
.yp-header__navigation { display: flex; align-items: center; gap: 16px; min-width: 0; }\r
.yp-header__back { display: inline-flex; align-items: center; justify-content: center; gap: 6px; min-width: 36px; min-height: 36px; padding: 6px; border: 0; border-radius: 6px; background: transparent; color: var(--ml-text-sec); font: 500 12px/1.4 var(--ml-font); }\r
.ml-checkout .ml-checkout__grid { margin-top: 20px; }\r
.ml-checkout .ml-checkout__grid:focus { outline: none; }\r
@media (max-width: 640px) { .yp-header__navigation { gap: 8px; } .yp-header__back span { display: none; } }\r

.yp-secure-field { display: flex; align-items: center; height: 48px; min-width: 0; }
.yp-secure-field iframe { display: block; width: 100%; height: 100%; border: 0; }
.yp-card-section fieldset { min-width: 0; }
.yp-bank-challenge { display: block; width: 100%; height: 600px; max-height: 75vh; border: 0; background: var(--sk-palette-neutral-ffffff); }\r
.yp-method-option__header[role="radio"] { cursor: pointer; }
.yp-method-option__header[aria-disabled="true"] { cursor: default; }`,na=n=>{const s=Z(n),i=s.match(/^R\$\s*([\d.]+),(\d{2})$/);return i?{amount:`R$ ${i[1]}`,cents:i[2]}:{amount:s,cents:""}},ee=({value:n,size:s="md",previous:i=!1,className:a=""})=>{const f=na(n),l=Z(n);return r.jsxs("span",{className:`ml-money ml-money--${s} ${i?"ml-price-old":""} ${a}`,role:"img","aria-label":l,children:[r.jsx("span",{className:"sr-only",children:l}),r.jsx("span",{"aria-hidden":"true",children:f.amount}),f.cents&&r.jsx("span",{className:"ml-money__cents","aria-hidden":"true",children:`,${f.cents}`})]})},Ue=e.memo(({value:n})=>{const s=n.split("").reduce((a,f)=>a+f.charCodeAt(0),0),i=(a,f,l,u)=>{const h=a-l,o=f-u;return h<0||h>4||o<0||o>4?!1:h===0||h===4||o===0||o===4||h===2&&o===2};return r.jsx("div",{className:"ml-test-qr","aria-label":"QR Code PIX de teste",role:"img",children:Array.from({length:169}).map((a,f)=>{const l=f%13,u=Math.floor(f/13),h=i(l,u,0,0)||i(l,u,8,0)||i(l,u,0,8)||(s+l*17+u*31+l*u*7)%5===0;return r.jsx("span",{className:h?"is-active":void 0},f)})})});Ue.displayName="TestPixQr";const Ke=e.memo(()=>r.jsxs("div",{className:"ml-pix-hero-banner",children:[r.jsx("div",{className:"ml-pix-hero-banner__icon",children:r.jsx(c,{className:"fab fa-pix text-2xl sk-fg-accent"})}),r.jsxs("div",{children:[r.jsx("span",{className:"ml-pix-hero-banner__tag",children:"APROVAÇÃO INSTANTÂNEA • 24/7"}),r.jsx("h4",{className:"ml-pix-hero-banner__title font-orbitron",children:"Pagamento via PIX com Liberação Imediata"}),r.jsx("p",{className:"ml-pix-hero-banner__sub",children:"Gere o QR Code com liquidação bancária em segundos. Seu acesso é ativado automaticamente."})]})]}));Ke.displayName="PixVisualBox";const He=e.memo(({entry:n,removeItem:s,removeGroup:i,coupon:a})=>{const f=n.type==="group",l=n.data,{src:u,onError:h}=Kn({imagemCapaUrl:l.imagemCapaUrl||l.image,imagem:l.imagem,imagensAdicionais:l.imagensAdicionais}),o=u||zn,y=Number(f?l.finalPrice||0:l.preco||0),v=a?.code&&a.rate>0?Number((y*(a.rate/100)).toFixed(2)):0,A=String(l.name||l.nome||"Produto").trim()||"Produto",C=String(l.meta||"").trim();return r.jsxs("article",{className:"ml-item",children:[r.jsx("div",{className:"ml-item__image",children:r.jsx("img",{decoding:"async",src:o,alt:A,width:56,height:56,loading:"lazy",referrerPolicy:"no-referrer",onError:h})}),r.jsxs("div",{className:"ml-item__main",children:[f&&r.jsxs("span",{className:"ml-badge ml-badge--orange",children:[r.jsx(c,{className:"fas fa-box-open",style:{fontSize:9}}),"Combo"]}),r.jsx("h3",{className:"ml-item__name",children:A}),C&&r.jsx("p",{className:"ml-item__meta",children:C}),f&&Array.isArray(l.items)&&l.items.length>0&&r.jsx("ul",{className:"ml-item__sublist",children:l.items.map(b=>{const P=l.totalPrice>0?b.preco/l.totalPrice:0,g=l.discount*P,m=b.preco-g,x=String(b.nome||"Produto").trim();return r.jsxs("li",{className:"ml-item__sub",children:[r.jsx("span",{className:"ml-item__sub-name",children:x}),r.jsxs("span",{className:"ml-item__sub-price",children:[l.discount>0&&r.jsx("span",{className:"ml-price-old",children:Z(b.preco)}),r.jsx("span",{className:"ml-price-green",children:Z(m)})]})]},b.code||x)})}),v>0&&r.jsxs("p",{className:"ml-item__coupon-note",children:[r.jsx(c,{className:"fas fa-ticket-alt"}),"Cupom",a.code,": − ",Z(v)]})]}),r.jsxs("div",{className:"ml-item__side",children:[r.jsxs("div",{className:"ml-item__pricing",children:[f&&l.discount>0&&r.jsx(ee,{value:l.totalPrice,size:"sm",previous:!0}),r.jsx(ee,{value:f?l.finalPrice:l.preco,size:"md"})]}),r.jsxs("button",{type:"button",className:"ml-remove",onClick:()=>f?i(l.items):s(l.code),"aria-label":"Remover "+String(A)+" do carrinho",children:[r.jsx(c,{className:"fas fa-trash-alt","aria-hidden":!0}),r.jsx("span",{className:"ml-remove__label",children:"Remover"})]})]})]})});He.displayName="CartItemRow";const Pe=e.memo(({label:n,onClick:s,disabled:i,totalLabel:a})=>r.jsxs("div",{className:"ml-mobile-cta-bar","data-mobile-checkout-dock":"single-action",role:"region","aria-label":"Ação principal do checkout",children:[a&&r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--ml-muted)",marginBottom:2},children:[r.jsx("span",{children:"Total"}),r.jsx("strong",{style:{color:"var(--ml-text)",fontSize:14},children:a})]}),r.jsxs("button",{type:"button",onClick:s,disabled:i,className:"ml-button ml-button--primary",style:{minHeight:50},children:[r.jsx(c,{className:"fas fa-lock",style:{fontSize:13}}),n]})]}));Pe.displayName="MobileCtaBar";const ze=e.memo(({onPix:n,isSubmitting:s,disabled:i=!1,selectedMethod:a="pix",amount:f})=>r.jsx("div",{className:"ml-mobile-cta-bar ml-mobile-payment-cta","data-mobile-checkout-dock":"payment-options",role:"region","aria-label":"Finalizar pagamento",children:r.jsx("button",{type:"button",onClick:n,disabled:s||i,id:"mobile-cta-pix","aria-label":a==="cartao"?"Concluir pagamento (Pagar no Cartão)":"Gerar pagamento (Pagar com PIX)",className:"ml-button ml-button--primary",children:s?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-spinner fa-spin"}),r.jsx("span",{children:"Processando..."})]}):a==="cartao"?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-lock",style:{fontSize:13}}),r.jsx("span",{children:"CONCLUIR PAGAMENTO"})]}):r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fab fa-pix",style:{fontSize:14}}),r.jsx("span",{children:"GERAR PAGAMENTO"})]})})}));ze.displayName="MobilePaymentCtaBar";function Xe(n,s){const i=String(n||"").trim();return!i||s&&i===s?!0:/\s/.test(i)?!1:/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)+$/.test(i)&&i.length<=24}function aa(n,s){const i=[s?.nome,n.name,n.nome,s?.nomeBase].map(a=>String(a||"").trim()).filter(Boolean);for(const a of i)if(!Xe(a,n.code))return a;return"Produto"}function ta(n){if(!n)return"";const s=String(n.baseWindows||"").trim();if(s)return`Baseado em ${s}`;const i=String(n.versao||"").trim();if(i)return`Versão ${i}`;const a=String(n.edicao||"").trim();return a&&!Xe(a,n.code)?a:""}function oa(n,s){return s.find(i=>i.id===n.parentCode||i.code===n.code||(i.variants||[]).some(a=>a.code===n.code))}const ia=e.memo(({onNavigateToStore:n,onBack:s})=>r.jsx("header",{className:"yp-header",role:"banner",children:r.jsxs("div",{className:"yp-header__inner",children:[r.jsxs("div",{className:"yp-header__navigation",children:[s&&r.jsxs("button",{type:"button",className:"yp-header__back",onClick:s,"aria-label":"Voltar",children:[r.jsx(Qn,{size:16}),r.jsx("span",{children:"Voltar"})]}),r.jsx("button",{type:"button",onClick:n,className:"yp-header__brand","aria-label":"Voltar à loja Skull Legion",children:r.jsx(Sn,{})})]}),r.jsxs("div",{className:"yp-header__secure",children:[r.jsx(Yn,{size:16,"aria-hidden":"true"}),r.jsx("div",{className:"yp-header__secure-text",children:r.jsx("strong",{children:"PAGAMENTO"})})]})]})}));ia.displayName="YampiHeader";const sa=[{id:"visa",name:"Visa",logo:"assets/payments/visa.svg"},{id:"mastercard",name:"Mastercard",logo:"assets/payments/mastercard.svg"},{id:"hipercard",name:"Hipercard",logo:"assets/payments/hipercard.svg"},{id:"mercadopago",name:"Mercado Pago",logo:"assets/payments/mercadopago.svg"},{id:"pix",name:"PIX",logo:"assets/payments/pix.svg"}],Qe=e.memo(({cardAvailable:n=!1})=>r.jsxs("footer",{className:"yp-footer",role:"contentinfo",children:[r.jsx("div",{className:"yp-footer__brands","aria-label":"Bandeiras e formas de pagamento aceitas",children:sa.filter(s=>n||s.id==="pix").map(s=>r.jsx("div",{className:"yp-footer__brand-badge",children:r.jsx("img",{src:Pn(s.logo),alt:s.name,className:"yp-footer__brand-img",width:"48",height:"32",loading:"lazy"})},s.id))}),r.jsx("p",{className:"yp-footer__legal",style:{whiteSpace:"pre-line"},children:"© "+String(new Date().getFullYear())+` Skull Legion.
Todos os direitos reservados.`})]}));Qe.displayName="YampiFooter";const Ye=e.memo(({onOpenDownloads:n,onOpenVip:s,isVip:i})=>r.jsxs("section",{className:"post-purchase-next","data-testid":"post-purchase-next","aria-label":"Próximos passos",children:[r.jsx("h3",{className:"post-purchase-next-title",children:"Pedido confirmado — próximos passos"}),r.jsx("p",{className:"post-purchase-next-sub",children:"Sem e-mail: tudo fica na sua conta. Escolha o que fazer agora."}),r.jsxs("div",{className:"post-purchase-next-grid",children:[r.jsxs("button",{type:"button",className:"post-purchase-next-card",onClick:n,children:[r.jsx(Hn,{size:18}),r.jsxs("span",{children:[r.jsx("strong",{children:"Minha Coleção"}),r.jsx("em",{children:"Acesse os arquivos e sistemas adquiridos"})]}),r.jsx(We,{size:14})]}),!i&&s&&r.jsxs("button",{type:"button",className:"post-purchase-next-card post-purchase-next-card--vip",onClick:s,children:[r.jsx(Xn,{size:18}),r.jsxs("span",{children:[r.jsx("strong",{children:"Clube VIP"}),r.jsx("em",{children:"Descontos e benefícios contínuos"})]}),r.jsx(We,{size:14})]})]})]}));Ye.displayName="PostPurchaseNextSteps";const la=({user:n,isTestMode:s,onNavigateToStore:i,onViewOrders:a,onOpenVip:f,onOpenCommissions:l})=>{const u=Le(),h=n,o=h?.nome?h.nome.trim().split(" ")[0]:"",y=h?.cpf?h.cpf.replace(/\D/g,"").substring(0,3)+".***.***-**":"",v=async()=>{const A=()=>{if(l)l();else{window.dispatchEvent(new CustomEvent("skull:navigate",{detail:{tab:"commissions"}})),window.dispatchEvent(new CustomEvent("store-navigate-tab",{detail:{tab:"commissions"}}));try{const C=new URL(window.location.href);C.searchParams.set("tab","commissions"),window.history.pushState({},"",C.toString())}catch{window.location.href="?tab=commissions"}}};if(!h){A();return}try{const C=await br.acceptAffiliateTerms({emailUsuario:h.email,whatsapp:h.telefone||"00000000000",chavePix:h.cpf||"00000000000"});C?.sucesso&&C?.codigoAfiliado&&E.setItem(q.affiliateCode,C.codigoAfiliado)}catch{}finally{A()}};return r.jsx("div",{className:"ml-approved",children:r.jsxs("section",{className:"ml-approved__card","aria-labelledby":"checkout-approved-title",children:[r.jsx("div",{className:"ml-approved__icon",children:r.jsx(c,{className:"fas fa-check"})}),r.jsx("h2",{id:"checkout-approved-title",children:o?String(o)+", pagamento aprovado!":"Pagamento aprovado!"}),r.jsx("p",{children:s?"Pagamento de teste aprovado localmente. Nenhuma cobrança, venda ou liberação real foi criada.":"Sua compra foi concluída. O produto foi liberado instantaneamente e já está disponível em Minha Coleção."}),!s&&r.jsx("div",{style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginTop:18,padding:"14px 0",borderTop:"1px solid var(--ml-border)",borderBottom:"1px solid var(--ml-border)"},children:[{icon:"fa-download",text:"Acesso imediato",color:"var(--ml-trust-green)"},{icon:"fa-headset",text:"Suporte disponível",color:vr("--sk-palette-violet-a855f7")},{icon:"fa-shield-alt",text:"Compra segura",color:vr("--sk-palette-blue-3b82f6")}].map(({icon:A,text:C,color:b})=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:5,minWidth:70},children:[r.jsx("div",{style:{width:36,height:36,borderRadius:"50%",backgroundColor:`${b}18`,border:`1px solid ${b}25`,display:"grid",placeItems:"center",color:b},children:r.jsx(c,{className:`fas ${A}`,style:{fontSize:14}})}),r.jsx("span",{style:{fontSize:11,color:"var(--ml-muted)",fontWeight:600},children:C})]},C))}),h?.senhaIsCpf&&r.jsxs("div",{className:"ml-warning",style:{color:vr("--sk-palette-red-92400e"),backgroundColor:"color-mix(in srgb, var(--sk-palette-orange-fbbf24) 12%, transparent)",borderColor:"color-mix(in srgb, var(--sk-palette-orange-fbbf24) 35%, transparent)",marginTop:18,textAlign:"left"},children:[r.jsx(c,{className:"fas fa-key",style:{color:vr("--sk-palette-orange-f59e0b"),marginTop:2}}),r.jsxs("div",{children:[r.jsx("strong",{children:"Senha gerada automaticamente"}),r.jsxs("p",{style:{margin:"6px 0 0",fontSize:13,lineHeight:1.45},children:["Sua senha atual é o",r.jsx("strong",{children:"CPF completo"}),"utilizado na compra",y&&r.jsxs("span",{style:{fontFamily:"monospace",fontWeight:700},children:[" (",y,")"]}),". Recomendamos que você"," ",r.jsx("button",{type:"button",onClick:()=>window.location.href="?tab=perfil",className:"ml-link-button",children:"altere sua senha"})," ","em Minha Conta o quanto antes."]})]})]}),r.jsxs("div",{className:"ml-approved__actions",children:[r.jsxs("button",{type:"button",onClick:i,className:"ml-button ml-button--secondary",children:[r.jsx(c,{className:"fas fa-arrow-left",style:{fontSize:12}}),"Voltar à loja"]}),r.jsxs("button",{type:"button",onClick:a,className:"ml-button ml-button--primary",style:{width:"auto",minWidth:180},children:[r.jsx(c,{className:"fas fa-download",style:{fontSize:13}}),s?"Ver Minha Coleção":"Minha Coleção"]})]}),r.jsx(Ye,{onOpenDownloads:a,onOpenVip:u.vipEnabled?f||(()=>{window.location.href="?tab=vip"}):void 0,isVip:!!h?.isVIP}),u.affiliateEnabled&&r.jsxs("div",{className:"ml-approved__affiliate animate-slide-up",style:{animationDelay:"0.3s"},children:[r.jsxs("h3",{className:"ml-card__title",style:{marginBottom:10,justifyContent:"flex-start"},children:[r.jsx(c,{className:"fas fa-hand-holding-usd",style:{color:"var(--ml-trust-green)",fontSize:14}}),"Transforme sua compra em renda extra"]}),r.jsx("p",{style:{textAlign:"left",fontSize:13.5,lineHeight:1.55,color:"var(--ml-muted)",marginBottom:14},children:"Agora que você utiliza nossos sistemas, pode recomendá-los para colegas e ganhar comissão real por cada venda."}),r.jsxs("button",{type:"button",onClick:v,className:"ml-button ml-button--secondary",style:{width:"100%"},children:["Ativar minha conta de afiliado",r.jsx(c,{className:"fas fa-chevron-right",style:{fontSize:11}})]})]})]})})},ca=re.pixTestMode,Ne=n=>String(n||"").trim().toUpperCase(),ma=[],Ce=()=>{try{return Ne(E.getItem(q.refToken))}catch{return""}};function da({cart:n,setCart:s,products:i,user:a,purchasedItems:f=ma,onPaymentApproved:l,onUserProfileUpdated:u,onLoginRequired:h,showNotify:o}){const y=Ge(),{affiliateEnabled:v,vipEnabled:A}=Le(),C=`${a?.uid||""}:${a?.email||""}`,b=e.useRef({identity:C,active:!0});b.current.identity!==C&&(b.current.active=!1,b.current={identity:C,active:!0});const P=e.useCallback(()=>{const t=b.current;return()=>t.active&&b.current===t},[]);e.useEffect(()=>{b.current={identity:C,active:!0};const t=b.current;return()=>{t.active=!1}},[C]);const g=e.useRef(0),m=e.useRef(0),x=e.useRef(!1),w=e.useRef(0),R=e.useRef(!1),z=e.useRef(0),rr=e.useRef(null),M=e.useCallback(()=>(rr.current=null,z.current+=1,z.current),[]),tr=e.useRef(!1),F=e.useRef(null),[G,Q]=e.useState(null),er=e.useRef(void 0),W=e.useRef(null),[Cr,cr]=e.useState(1),[ue,ne]=e.useState(()=>re.isMockMode),[Nr,mr]=e.useState(!1),[Br,Pr]=e.useState(null),[xe,kr]=e.useState(null),[fe,ge]=e.useState("");e.useEffect(()=>{let t=!0;return(async()=>{try{const d=await br.paymentCapabilities?.();t&&d&&(ne(d.cartao===!0),ge(d.publicKey||""))}catch{t&&!re.isMockMode&&re.pixTestMode&&ne(!1)}})(),()=>{t=!1}},[]);const[V,O]=e.useState("idle"),[zr,U]=e.useState(!1),[Wr,ae]=e.useState({nome:a?.nome||"",email:a?.email||"",cpf:a?.cpf||""}),X=e.useRef(Wr);e.useEffect(()=>{X.current=Wr},[Wr]);const[he,Sr]=e.useState(!1),[Er,te]=e.useState(""),[dr,Rr]=e.useState("+55"),[Ir,Lr]=e.useState(""),[Gr,yr]=e.useState(null),[Ur,pr]=e.useState(null),[ur,or]=e.useState(null),[Kr,Hr]=e.useState(!1),[B,Tr]=e.useState(null),[lr,_r]=e.useState(null),[oe,ie]=e.useState(""),[nr,xr]=e.useState(!1),[Xr,ar]=e.useState(null),[se,le]=e.useState(!1),wr=e.useRef(null),S=e.useRef(!1);e.useEffect(()=>(Ve.setPixPending(!!(zr||B&&V==="pending_pix")),()=>Ve.setPixPending(!1)),[B,zr,V]);const ce=e.useRef(()=>{}),[Qr,jr]=e.useState(""),[Yr,ir]=e.useState("idle"),[Ar,fr]=e.useState(()=>E.getItem(q.appliedCouponOwner)||""),[D,sr]=e.useState(()=>E.getItem(q.appliedCoupon)),[L,be]=e.useState(Ce),me=On(i,a),ve=we(a?.isVIP,a?.validadeAcesso),gr=e.useRef({cart:n,products:i,purchasedItems:f,appliedCoupon:D,isVIP:ve,pricingRevision:me,policyRevision:y?.revision,revision:0}),hr=gr.current;(hr.cart!==n||hr.products!==i||hr.purchasedItems!==f||hr.appliedCoupon!==D||hr.isVIP!==ve||hr.pricingRevision!==me||hr.policyRevision!==y?.revision)&&(gr.current={cart:n,products:i,purchasedItems:f,appliedCoupon:D,isVIP:ve,pricingRevision:me,policyRevision:y?.revision,revision:hr.revision+1});const Se=e.useRef(C);e.useEffect(()=>{Se.current!==C&&(Se.current=C,M(),g.current+=1,m.current+=1,x.current=!1,w.current+=1,R.current=!1,tr.current=!1,F.current=null,S.current=!1,U(!1),xr(!1),Hr(!1),mr(!1),kr(null),Tr(null),_r(null),ar(null),O("idle"),Q(null),W.current=null,er.current=void 0,Sr(!1))},[C,M]),e.useEffect(()=>{const t=()=>{if(B&&V==="pending_pix"||S.current)return;g.current+=1,(V==="approved"||V==="expired")&&(mr(!1),kr(null),Tr(null),_r(null),O("idle"));const d=E.getItem(q.appliedCoupon);sr(d),jr(d||""),fr(E.getItem(q.appliedCouponOwner)||""),ir(d?"valid":"idle"),be(Ce())};return window.addEventListener($e,t),()=>window.removeEventListener($e,t)},[B,V]);const Or=e.useCallback((t,d=v)=>{const p=we(a?.isVIP,a?.validadeAcesso),N=k=>i.find(T=>T.code===k.code)||i.find(T=>(T.variants||[]).some(Vr=>Vr.code===k.code))||i.find(T=>T.id===k.parentCode),_=(k,T)=>{if(k.isRepurchase||Number(k.lockedPrice)>0)return Number(k.preco)||0;const Vr=N(k),J=Vr?$n.price({...Vr,code:k.code},T):0;return J>0?J:Number(k.preco)||0},I=n.map(k=>({...k,preco:_(k,!1),precoVip:_(k,p)})),j=Dn(I,t,d&&!!D&&!!t),K=I.map(k=>{const T=oa(k,i);return{type:"item",data:{...k,nome:aa(k,T),imagem:T?.imagemCapaUrl||T?.imagem||k.imagem,meta:ta(T)}}}),$=n.map((k,T)=>({...k,preco:j.items[T].paidCents/100})),Y=j.paidCents/100,H=(j.paidCents+j.couponDiscountCents)/100;return{itemsToRender:K,proportionalCart:$,totalOriginal:j.publicCents/100,totalDiscount:j.vipDiscountCents/100,vipDiscount:j.vipDiscountCents/100,couponBaseTotal:H,couponDiscount:j.couponDiscountCents/100,couponDiscountRate:H>0?Number((j.couponDiscountCents/H).toFixed(2)):0,finalTotal:Y,couponEligible:j.couponEligible}},[n,i,D,a?.isVIP,a?.validadeAcesso,me,v]),[Ee,Je]=e.useState(null),de=e.useMemo(()=>Or(y),[Or,y]);e.useEffect(()=>{if(!(v||F.current||S.current)){if(g.current+=1,D){const t=Or(y,!0).finalTotal;Math.abs(t-de.finalTotal)>.009&&Q({previousTotal:t,nextTotal:de.finalTotal})}sr(null),jr(""),fr(""),ir("idle"),be(""),E.removeItem(q.appliedCoupon),E.removeItem(q.appliedCouponOwner),E.removeItem(q.refToken)}},[v,D,Or,y,de.finalTotal,V]);const{itemsToRender:Ze,proportionalCart:rn,totalOriginal:en,totalDiscount:nn,vipDiscount:an,couponBaseTotal:tn,couponDiscount:on,couponDiscountRate:sn,finalTotal:Dr,couponEligible:ke}=B&&Ee?Ee:de;e.useEffect(()=>{a&&ae({nome:a.nome,email:a.email,cpf:a.cpf||""})},[a?.nome,a?.email,a?.cpf]),e.useEffect(()=>{if(n.length===0||!a)return;let t="";try{t=E.getSessionItem("skull_checkout_express")||(E.getSessionItem("skull_vip_express")==="1"?"vip":"")}catch{t=""}if(!t)return;const d=n.length===1&&je({code:n[0].code,nome:n[0].nome,id:n[0].parentCode||n[0].code}),p=n.every(_=>_.isRepurchase);if(t==="vip"&&!d||t==="repurchase"&&!p)return;!!(a.cpf&&String(a.cpf).replace(/\D/g,"").length>=11)&&Cr===1&&V==="idle"&&cr(3);try{E.removeSessionItem("skull_checkout_express"),E.removeSessionItem("skull_vip_express")}catch{}},[n,a?.email,a?.cpf]),e.useEffect(()=>{if(!lr)return;const t=()=>{const p=lr-Date.now();if(p<=0){ie("Expirado");return}const N=Math.floor(p/6e4),_=Math.floor(p%6e4/1e3);ie(`${String(N).padStart(2,"0")}:${String(_).padStart(2,"0")}`)};t();const d=setInterval(t,1e3);return()=>clearInterval(d)},[lr]),e.useEffect(()=>{if(!(V==="pending_pix"&&B?.id&&!B.id.startsWith("TEST-PIX-")))return;let d=!1,p,N=0,_=!1;const I=P(),j=B.id,K=()=>!d&&I()&&F.current===j,$=()=>N<10?3e3:N<30?6e3:15e3,Y=async()=>{if(!(!K()||_)){_=!0,N+=1;try{const k=await br.verifyPixPayment(B.id);if(!K())return;if(k.sucesso&&k.statusInterno==="Pago"){ce.current();return}if(k.sucesso&&(k.finalizado||k.expirado)){F.current=null,O(k.statusInterno==="Recusado"?"rejected":"expired");return}}catch{}finally{_=!1}K()&&(p=setTimeout(Y,$()))}},H=()=>{typeof document<"u"&&document.visibilityState==="hidden"||(p&&(clearTimeout(p),p=void 0),Y())};return typeof window<"u"&&window.addEventListener("focus",H),typeof document<"u"&&document.addEventListener("visibilitychange",H),p=setTimeout(Y,3e3),()=>{d=!0,p&&clearTimeout(p),typeof window<"u"&&window.removeEventListener("focus",H),typeof document<"u"&&document.removeEventListener("visibilitychange",H)}},[V,B,P]),e.useEffect(()=>{V!=="pending_pix"||!lr||Nr||lr-Date.now()>0||(F.current=null,O("expired"))},[V,lr,oe,Nr]),e.useEffect(()=>()=>{wr.current&&clearTimeout(wr.current)},[]);const Re=e.useCallback(()=>{try{const t=new AudioContext,d=(p,N,_,I=.3)=>{const j=t.createOscillator(),K=t.createGain();j.connect(K),K.connect(t.destination),j.frequency.value=p,j.type="sine",K.gain.setValueAtTime(I,t.currentTime+N),K.gain.exponentialRampToValueAtTime(.001,t.currentTime+N+_),j.start(t.currentTime+N),j.stop(t.currentTime+N+_)};d(880,0,.12,.4),d(1100,.08,.12,.35),d(1320,.16,.18,.3),d(1760,.24,.4,.25),setTimeout(()=>t.close(),1500)}catch{}},[]),Jr=e.useCallback(async()=>{if(!b.current.active)return;if(F.current=null,Re(),Oe("success"),O("approved"),s([]),U(!1),S.current=!1,E.removeItem(q.refToken),E.removeItem(q.appliedCoupon),E.removeItem(q.appliedCouponOwner),sr(null),l&&l(),X.current.email||a?.email)try{const d=(n||[]).some(p=>je({id:"",code:p.code,nome:p.nome,edicao:""}))}catch{}},[s,l,a?.email,Re,n]);e.useEffect(()=>{ce.current=Jr},[Jr]);const Zr=e.useCallback((t=X.current)=>t.nome.trim()?Mn(t.email)?De(t.cpf)?!0:(o("CPF inválido.","erro"),!1):(o("Use um e-mail válido.","erro"),!1):(o("Preencha seu nome.","erro"),!1),[o]),Mr=e.useCallback(()=>{if(!a)return h?.(),!1;if(!y&&rr.current!==null)return!1;const t=M();if(Gn.isCheckoutProfileComplete(a))return!0;const d=()=>{te(Fe(X.current.cpf||""));const p=Tn(a.telefone);Rr(p.ddi),Lr(p.numero),yr(null),pr(null),or(null),Sr(!0)};if(!y){rr.current=t;const p=P(),N=()=>p()&&t===z.current;return Be.getPolicy().then(_=>{N()&&(_?d():o("Política de afiliados indisponível. Tente novamente após atualizar a loja.","erro"))}).catch(()=>{N()&&o("Política de afiliados indisponível. Tente novamente após atualizar a loja.","erro")}).finally(()=>{N()&&(rr.current=null)}),!1}return d(),!1},[a,h,y,P,o,M]),Ie=e.useCallback(()=>n.some(t=>t.code!=="360"&&Fn(t,f,a)==="owned")?{ok:!1,reason:"Há um produto com acesso ativo neste carrinho. Acesse sua coleção ou remova o produto antes de continuar."}:qn.assertCheckoutReady(n,i,X.current,we(a?.isVIP,a?.validadeAcesso)),[n,i,a,f]),Fr=e.useCallback(async t=>{if(!b.current.active||F.current||S.current||tr.current)return;if(!A&&n.some($=>je({...$,id:$.parentCode||$.code}))){o("Novas adesões VIP estão indisponíveis. Remova o plano do carrinho para continuar.","erro");return}if(G&&W.current!==G.nextTotal)return;const d=P(),p=++m.current,N=()=>d()&&p===m.current,_=gr.current,I=g.current,j=X.current;if(!Zr(j))return;const K=Ie();if(!K.ok){const $=K.reason||"Não foi possível validar seu carrinho.";ar($),o($,"erro");return}S.current=!0,ar(null),U(!0),O("processing");try{const $=v&&(!!D||!y),Y=$?await Be.getPolicy(!0):y;if(!N())return;const H=gr.current;if(_.cart!==H.cart||_.products!==H.products||_.purchasedItems!==H.purchasedItems||_.appliedCoupon!==H.appliedCoupon||_.isVIP!==H.isVIP||_.pricingRevision!==H.pricingRevision||I!==g.current||JSON.stringify(j)!==JSON.stringify(X.current)){O("idle"),U(!1),S.current=!1;return}if($&&!Y)throw new Error("Política de afiliados indisponível.");if(v!==pe.get().affiliateEnabled||A!==pe.get().vipEnabled){O("idle"),U(!1),S.current=!1;return}const k=Or(Y);if(Math.abs(k.finalTotal-Dr)>.009&&W.current!==k.finalTotal){er.current=t,Q({previousTotal:Dr,nextTotal:k.finalTotal}),O("idle"),U(!1),S.current=!1;return}W.current=null;const T=t?.metodoPagamento||"pix",Vr=t?.parcelas||1;if(k.finalTotal<=0)throw new Error("Esta configuração zera o pedido. Solicite atendimento para concluir a aquisição gratuita.");const J=await br.createPixPayment({email:j.email,nome:j.nome,cpf:j.cpf.replace(/\D/g,""),valor:k.finalTotal,valorBase:k.couponBaseTotal,itens:k.proportionalCart,codigoCupom:v?D:null,descontoCupom:k.couponDiscount,affiliatePolicyRevision:Y?.revision,metodoPagamento:T,parcelas:Vr,card:t?.card,refToken:v?E.getItem(q.refToken):null});if(!N()){p===m.current&&(O("idle"),U(!1),S.current=!1);return}if(J.sucesso){if(T==="cartao"&&J.cardPayment!==!0)throw new Error("O gateway não oferece o pagamento integrado. Atualize o gateway antes de continuar.");mr(T==="cartao"),Pr(T==="cartao"&&t?.card?t.card.amountCents/100:null),kr(T==="cartao"&&J.cardChallenge||null),Q(null),F.current=J.idPagamento,Je(k),Tr({qrCode:J.qrCode||"",qrCodeBase64:J.qrCodeBase64||"",id:J.idPagamento});const $r=J.expiraEm?Date.parse(String(J.expiraEm)):NaN;_r(Number.isFinite($r)?$r:Date.now()+1800*1e3),O("pending_pix"),U(!1),S.current=!1}else{T==="cartao"&&cr(1);const $r=J.mensagem||(T==="cartao"?"Não foi possível preparar o pagamento com cartão.":"Não foi possível preparar o pagamento.");ar($r),o($r,"erro"),O("idle"),U(!1),S.current=!1,Me.reportIncident({tipo:T==="cartao"?"CHECKOUT_CARTAO_ERRO":"CHECKOUT_PIX_ERRO",mensagem:$r,detalhes:{total:Dr,itensCount:n.length,metodoPagamento:T}})}}catch($){if(!N()){p===m.current&&(O("idle"),U(!1),S.current=!1);return}t?.metodoPagamento==="cartao"&&cr(1);const Y=$ instanceof Error&&/Política de afili|Esta configuração/.test($.message)?$.message:t?.metodoPagamento==="cartao"?"Não conseguimos preparar o pagamento com cartão agora. Tente de novo em instantes.":"Não conseguimos gerar o PIX agora. Tente de novo em instantes.";ar(Y),o(Y,"erro"),O("idle"),U(!1),S.current=!1,Me.reportIncident({tipo:t?.metodoPagamento==="cartao"?"CHECKOUT_CARTAO_ERRO":"CHECKOUT_PIX_ERRO",mensagem:$?.message||Y,stack:$?.stack,detalhes:{total:Dr,itensCount:n.length,metodoPagamento:t?.metodoPagamento}})}},[Zr,Ie,Or,Dr,D,o,n,P,y,G,v,A]),ln=e.useCallback(async()=>{G&&(W.current=G.nextTotal,await Fr(er.current))},[G,Fr]),cn=e.useCallback(()=>{W.current=null,Q(null),cr(1)},[]),mn=e.useCallback(async t=>{t?.preventDefault(),t?.stopPropagation(),!x.current&&Mr()&&await Fr()},[Mr,Fr]),Te=e.useCallback(async(t,d={})=>{if(!pe.get().affiliateEnabled||!b.current.active||F.current||S.current||x.current)return;const p=P(),N=++g.current,_=()=>p()&&N===g.current&&!F.current&&!S.current,I=Ne(t);if(!I){o("Digite um código de cupom.","erro");return}if(!y){d.silent||o("Política de afiliados indisponível. Tente novamente em instantes.","erro");return}if(!ke){d.silent||o("Adicione um produto pago ao carrinho para aplicar o código.","erro");return}if(!a){d.silent||o("Faça login para usar cupom de desconto.","erro");return}if(a&&Ne(a.codigoAfiliado)===I){o("Cupom desativado para esta compra! Não é permitido utilizar um cupom gerado pelo seu próprio CPF/E-mail, pois viola as políticas de segurança da plataforma.","erro");return}ir("validating");try{const j=await br.validateCoupon(I,a?.email);if(!_())return;j.sucesso&&j.codigoValido?(sr(I),jr(I),fr(j.nomeAfiliado||"Afiliado"),ir("valid"),E.setItem(q.appliedCoupon,I),E.setItem(q.appliedCouponOwner,j.nomeAfiliado||"Afiliado"),d.silent||o(`Cupom de ${j.nomeAfiliado||"afiliado"} aplicado!`,"sucesso")):(ir("invalid"),sr(null),fr(""),E.removeItem(q.appliedCoupon),E.removeItem(q.appliedCouponOwner),d.silent||o(j.mensagem||"Código inválido ou expirado.","erro"))}catch{if(!_())return;ir("invalid"),d.silent||o("Sem conexão para validar cupom.","erro")}},[a,o,ke,y,P]),dn=e.useCallback(async()=>{pe.get().affiliateEnabled&&await Te(Qr)},[Te,Qr]),ye=e.useCallback(()=>{!b.current.active||F.current||S.current||(g.current+=1,sr(null),jr(""),fr(""),ir("idle"),E.removeItem(q.appliedCoupon),E.removeItem(q.appliedCouponOwner))},[]);e.useEffect(()=>{const t=()=>be(Ce());return t(),window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[]);const pn=v&&L?{code:L,ownerName:D===L?Ar:"",status:D===L&&Yr==="valid"?"applied":"detected",isApplied:D===L&&Yr==="valid"}:null;e.useEffect(()=>{n.length===0&&D&&ye()},[n.length,D,ye]);const un=e.useCallback(t=>{navigator.clipboard.writeText(t),Oe("success"),le(!0),wr.current&&clearTimeout(wr.current),wr.current=setTimeout(()=>le(!1),2e3)},[]),xn=e.useCallback(async t=>{if(t?.preventDefault(),!B?.id||tr.current||!b.current.active||F.current!==B.id)return;const d=P(),p=B.id,N=m.current,_=()=>d()&&N===m.current&&F.current===p;tr.current=!0,xr(!0);try{const I=await br.simulatePixPaymentTest(B.id);if(!_())return;I.sucesso?Jr():o(I.mensagem||"Erro na simulação.","erro")}catch{_()&&o("Erro ao processar.","erro")}finally{d()&&N===m.current&&(tr.current=!1,xr(!1))}},[B,o,Jr,P]),fn=e.useCallback(()=>{M(),m.current+=1,x.current=!1,w.current+=1,F.current=null,tr.current=!1,xr(!1),Q(null),W.current=null,S.current=!1,O("idle"),U(!1),_r(null),mr(!1),kr(null),Tr(null),ar(null),S.current=!1},[M]),Ae=e.useCallback(async t=>{if(!D)return!0;const d=P(),p=g.current,N=m.current,_=()=>d()&&p===g.current&&N===m.current;O("processing");try{const I=await br.validateCoupon(D,t||void 0);return _()?!I.sucesso||!I.codigoValido?(sr(null),fr(""),E.removeItem(q.appliedCoupon),E.removeItem(q.appliedCouponOwner),o(I.mensagem||"Cupom desativado para esta compra! Não é permitido utilizar um cupom gerado pelo seu próprio CPF/E-mail, pois viola as políticas de segurança da plataforma.","erro"),O("idle"),!1):(O("idle"),!0):!1}catch{return _()&&(o("Falha de conexão. Verifique a internet.","erro"),O("idle")),!1}},[D,o,P]),qr=e.useCallback(async t=>{if(!b.current.active||x.current||S.current||F.current||tr.current)return;x.current=!0;const d=++w.current,p=P(),N=m.current,_=gr.current.revision,I=g.current,j=X.current;try{if(!Zr(j))return;const K=await Ae(j.email);if(!p()||N!==m.current)return;if(!K||_!==gr.current.revision||I!==g.current||JSON.stringify(j)!==JSON.stringify(X.current)){O("idle");return}mr(t?.metodoPagamento==="cartao"),kr(null),cr(3),await Fr(t)}finally{p()&&d===w.current&&(x.current=!1)}},[Zr,Ae,Fr,P]),gn=e.useCallback(async()=>{if(!a){h?.();return}Mr()&&await qr()},[a,h,Mr,qr]),hn=e.useCallback(async t=>{if(!Mr()){er.current=t;return}await qr(t)},[Mr,qr]),_e=e.useCallback(()=>{Kr||(M(),yr(null),pr(null),or(null),Sr(!1))},[Kr,M]),bn=e.useCallback(t=>{te(Fe(t)),Gr&&yr(null),ur&&or(null)},[Gr,ur]),vn=e.useCallback(t=>{Lr(qe(t,dr)),Ur&&pr(null),ur&&or(null)},[dr,Ur,ur]),kn=e.useCallback(t=>{Rr(t),Lr(d=>qe(d,t)),pr(null),or(null)},[]),yn=e.useCallback(async()=>{if(!b.current.active||R.current)return;if(!a){_e(),h?.();return}if(!De(Er)){yr("Informe um CPF válido para continuar.");return}if(!Vn(Ir,dr)){pr("Informe um WhatsApp válido para continuar.");return}M();const t=P(),d=gr.current.revision;R.current=!0,Hr(!0),yr(null),pr(null),or(null);try{const p=await Un.completeCheckoutProfile(a,{cpf:Er,whatsapp:Ir,ddi:dr});if(!t())return;if(!p?.sucesso||!p.cpf||!p.telefone){or(p?.mensagem||"Não foi possível concluir seu cadastro. Tente novamente.");return}const N={...X.current,cpf:p.cpf};if(X.current=N,ae(N),u?.({cpf:p.cpf,telefone:p.telefone}),!t())return;Sr(!1);const _=d===gr.current.revision;o(_?"Cadastro concluído com segurança. Continuando sua compra...":"Cadastro concluído com segurança. Revise seu carrinho para continuar.","sucesso"),_&&await qr(er.current)}catch{if(!t())return;or("Não foi possível concluir seu cadastro. Verifique sua conexão e tente novamente.")}finally{t()&&(R.current=!1,Hr(!1))}},[a,Er,Ir,dr,_e,h,u,o,qr,P,M]),_n=e.useCallback(()=>{F.current||S.current||x.current||(M(),Cr===3&&(V!=="idle"&&(O("idle"),U(!1)),ar(null),cr(1)))},[Cr,V,M]),wn=e.useCallback(t=>s(n.filter(d=>d.code!==t)),[n,s]),jn=e.useCallback(t=>{const d=t.map(p=>p.code);s(n.filter(p=>!d.includes(p.code)))},[n,s]);return{checkoutStep:Cr,status:V,isSubmitting:zr,isProfileCompletionOpen:he,profileCpf:Er,profileWhatsappDdi:dr,profileWhatsapp:Ir,profileCpfError:Gr,profileWhatsappError:Ur,profileCompletionError:ur,isCompletingProfile:Kr,pixData:B,pixExpiresAt:lr,pixCountdown:oe,isVerifying:nr,pixError:Xr,pixCopied:se,pixTestMode:ca,cardAvailable:ue,isCardPayment:Nr,cardChargeTotal:Br,cardChallenge:xe,cardPublicKey:fe,couponInput:Qr,setCouponInput:jr,couponStatus:Yr,setCouponStatus:ir,couponOwnerName:Ar,appliedCoupon:D,couponDiscountRate:sn,affiliateReferral:pn,itemsToRender:Ze,proportionalCart:rn,totalOriginal:en,totalDiscount:nn,vipDiscount:an,couponBaseTotal:tn,couponDiscount:on,couponEligible:v&&ke,finalTotal:Dr,policyChange:G,handleConfirmPolicyChange:ln,handleCancelPolicyChange:cn,handlePaymentSuccess:Jr,handleGeneratePix:mn,handleApplyCoupon:dn,handleRemoveCoupon:ye,handleCopyPixCode:un,handleSimulatePixPayment:xn,handleCancelPix:fn,handleStartCheckout:gn,handlePayWithPix:hn,handleBackStep:_n,handleProfileCpfChange:bn,handleProfileWhatsappChange:vn,handleProfileWhatsappDdiChange:kn,handleCompleteProfile:yn,handleCloseProfileCompletion:_e,removeItem:wn,removeGroup:jn,validateForm:Zr}}const pa=({id:n,amount:s,publicKey:i="",disabled:a=!1,onToken:f,onReadyChange:l})=>{const u=re.isMockMode,h=e.useRef(f);h.current=f;const[o,y]=e.useState(""),[v,A]=e.useState(0);e.useEffect(()=>{let m=!0,x;if(y(""),l(u),!u){const w=R=>{m&&(y(R),console.error("[Cartão] Campos seguros indisponíveis."))};br.mountInlineCardForm({id:n,amount:s,publicKey:i,onToken:R=>m?h.current(R):void 0,onReady:()=>{m&&l(!0)},onError:w}).then(R=>{m?x=R:R()}).catch(R=>w(R instanceof Error?R.message:"Não foi possível preparar o cartão."))}return()=>{m=!1,x?.(),l(!1)}},[n,s,i,u,v,l]);const C=Bn(s),b=(m,x,w="text")=>r.jsxs("div",{className:"yp-form-group",children:[r.jsx("label",{className:"yp-label",htmlFor:`${n}-${m}`,children:x}),r.jsx("input",{id:`${n}-${m}`,className:"yp-input",type:w,autoComplete:"off",required:!0})]}),P=(m,x)=>r.jsxs("div",{className:"yp-form-group",children:[r.jsx("label",{className:"yp-label",htmlFor:`${n}-${m}`,children:x}),r.jsxs("select",{id:`${n}-${m}`,className:"yp-input",required:!0,children:[u&&m==="installments"&&C.map(w=>r.jsx("option",{value:w.installments,children:w.label},w.installments)),u&&m==="issuer"&&r.jsx("option",{value:"mock",children:"Banco de teste"}),u&&m==="document-type"&&r.jsx("option",{value:"CPF",children:"CPF"})]})]}),g=(m,x,w)=>r.jsxs("div",{className:"yp-form-group",children:[r.jsx("span",{id:`${n}-${m}-label`,className:"yp-label",children:x}),r.jsx("div",{id:`${n}-${m}`,className:"yp-input yp-secure-field",role:"group","aria-labelledby":`${n}-${m}-label`,children:u?w:null})]});return r.jsxs("form",{id:n,className:"yp-card-section","aria-label":"Formulário de cartão de crédito",onSubmit:u?m=>{if(m.preventDefault(),a)return;const x=m.currentTarget,w=R=>x.querySelector(`#${n}-${R}`)?.value||"";h.current({amountCents:Math.round(s*100),token:"MOCK-CARD-TOKEN",paymentMethodId:"visa",issuerId:"mock",installments:Number(w("installments")||1),email:w("email"),identificationType:"CPF",identificationNumber:w("document")})}:void 0,children:[u&&r.jsx("p",{className:"ml-stage-copy",children:"Simulação local: cartão fictício. Não informe dados reais."}),r.jsxs("fieldset",{className:"yp-card-inputs",disabled:a,children:[g("number","Número do cartão","4111 •••• •••• 1111"),b("holder","Nome no cartão"),r.jsxs("div",{className:"yp-form-row",children:[g("expiry","Validade","12/30"),g("cvv","CVV","•••")]}),b("email","E-mail do titular","email"),r.jsxs("div",{className:"yp-form-row",children:[P("document-type","Tipo de documento"),b("document","CPF ou CNPJ do titular")]}),P("issuer","Banco emissor"),P("installments","Parcelamento")]}),o&&r.jsxs("div",{className:"ml-warning",role:"alert",children:[r.jsx("span",{children:o}),r.jsx("button",{type:"button",className:"ml-link-button",onClick:()=>A(m=>m+1),children:"Tentar novamente"})]}),r.jsxs("p",{className:"yp-card-footnote",children:["O total do cartão inclui ",Wn(),"% de acréscimo em relação ao Pix. As parcelas disponíveis são informadas pelo provedor."]}),!u&&!o&&r.jsx("p",{className:"ml-stage-copy",children:"Dados protegidos pelo Mercado Pago. Pagamento concluído nesta página."})]})},ua=({challenge:n})=>{const s=e.useRef(null),i="skull-card-authentication",a=/^https:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,63}(?::443)?\//i.test(n.url)&&!/\.(?:local|localhost|internal)(?::443)?\//i.test(n.url)&&/^[A-Za-z0-9_+=/-]{16,16000}$/.test(n.creq);return e.useEffect(()=>{a&&s.current?.submit()},[n.url,n.creq,a]),a?r.jsxs("section",{"aria-label":"Autenticação do banco",children:[r.jsx("p",{className:"ml-stage-copy",children:"Confirme o pagamento com seu banco abaixo."}),r.jsx("iframe",{name:i,title:"Autenticação segura do cartão",className:"yp-bank-challenge",sandbox:"allow-forms allow-scripts allow-same-origin"}),r.jsx("form",{ref:s,action:n.url,method:"post",target:i,hidden:!0,children:r.jsx("input",{type:"hidden",name:"creq",value:n.creq})})]}):r.jsx("div",{className:"ml-warning",role:"alert",children:"Não foi possível abrir a autenticação do banco. Aguarde a confirmação antes de tentar novamente."})},xa=({summary:n,cart:s,itemsToRender:i,appliedCoupon:a,couponStatus:f,couponInput:l,couponOwnerName:u,couponDiscountRate:h,couponDiscount:o,couponEligible:y,affiliateReferral:v,removeItem:A,removeGroup:C,handleApplyCoupon:b,handleRemoveCoupon:P,setCouponInput:g,setCouponStatus:m})=>{const x=Ge(),w=e.useRef(null),R=ra(w,i.length,!1,i);return e.useEffect(()=>{const z=w.current;if(!z||i.length<2)return;let rr=0;const M=()=>{rr=Date.now()+3500},tr=window.setInterval(()=>{if(document.hidden||Date.now()<rr)return;const F=z.closest("section");if(window.matchMedia?.("(hover: hover) and (pointer: fine)").matches&&F?.matches(":hover")||F?.contains(document.activeElement)||z.dataset.railDragging==="true")return;const G=Array.from(z.children),Q=G[0],er=G[1].offsetLeft-Q.offsetLeft;if(er<=0)return;const W=(Math.round(z.scrollLeft/er)+1)%G.length;z.scrollTo({left:W*er,behavior:window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},4500);return z.addEventListener("pointerdown",M),z.addEventListener("wheel",M,{passive:!0}),z.addEventListener("rail:navigate",M),()=>{window.clearInterval(tr),z.removeEventListener("pointerdown",M),z.removeEventListener("wheel",M),z.removeEventListener("rail:navigate",M)}},[i.length]),r.jsxs(r.Fragment,{children:[r.jsxs("section",{className:"ml-card ml-cart-products","aria-labelledby":"cart-products-title",children:[r.jsxs("div",{className:"ml-card__header",children:[r.jsxs("h2",{id:"cart-products-title",className:"ml-card__title",children:[r.jsx(c,{className:"fas fa-shopping-bag",style:{color:"var(--ml-trust-green)",fontSize:13}}),"Produtos selecionados"]}),r.jsxs("div",{className:"ml-cart-rail-controls",children:[r.jsxs("span",{className:"ml-card__count",children:[s.length," ","item",s.length!==1?"s":""]}),i.length>1&&r.jsxs(r.Fragment,{children:[r.jsx("button",{type:"button","aria-label":"Produtos anteriores",disabled:!R.railNavigation.previous,onClick:()=>R.moveRail(-1),children:r.jsx(Jn,{size:16})}),r.jsx("button",{type:"button","aria-label":"Próximos produtos",disabled:!R.railNavigation.next,onClick:()=>R.moveRail(1),children:r.jsx(Zn,{size:16})})]})]})]}),r.jsx("div",{ref:w,className:"ml-cart-products-rail",role:"list","aria-label":"Produtos do carrinho",children:i.map((z,rr)=>r.jsx("div",{role:"listitem",children:r.jsx(He,{entry:z,removeItem:A,removeGroup:C,coupon:a?{code:a,rate:h}:null})},z.type==="group"?`g-${z.data?.id||z.data?.name||rr}`:`i-${z.data?.code||z.data?.id||rr}`))})]}),y&&r.jsxs("section",{className:"ml-card ml-cart-coupon","aria-labelledby":"coupon-title",children:[r.jsxs("div",{className:"ml-card__header",children:[r.jsxs("h2",{id:"coupon-title",className:"ml-card__title",children:[r.jsx(c,{className:"fas fa-shield-alt",style:{color:"var(--sk-ds-accent)",fontSize:13}}),"Cupom de desconto"]}),a&&r.jsxs("span",{className:"ml-badge ml-badge--green",children:[r.jsx(c,{className:"fas fa-check",style:{fontSize:9}}),"Aplicado"]})]}),r.jsxs("div",{className:"ml-coupon",children:[v&&r.jsxs("div",{className:`ml-affiliate-referral ml-affiliate-referral--${v.status}`,children:[r.jsx("div",{className:"ml-affiliate-referral__icon",children:r.jsx(c,{className:v.isApplied?"fas fa-check":"fas fa-handshake"})}),r.jsxs("div",{className:"ml-affiliate-referral__body",children:[r.jsx("strong",{children:v.isApplied?String(v.ownerName||"Seu afiliado")+" garantiu seu desconto":"Cupom de Afiliado Disponível"}),r.jsxs("p",{children:["Você chegou por indicação. O desconto e o registro da comissão só valem se",r.jsxs("strong",{children:[" ","você mesmo digitar"]}),"o cupom no campo abaixo e clicar em aplicar (não aplicamos o código sozinhos — isso protege o histórico do afiliado e o seu). Código:",r.jsx("span",{className:"font-mono font-bold",children:v.code})]})]}),v.isApplied?r.jsx("span",{className:"ml-affiliate-referral__badge",children:"Ativado"}):r.jsx("button",{type:"button",onClick:()=>{g(v.code),m("idle")},className:"ml-button ml-button--secondary ml-affiliate-referral__button",children:"Preencher código"})]}),a&&f==="valid"?r.jsxs("div",{className:"ml-coupon__applied",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"ml-option-title",style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(c,{className:"fas fa-tag",style:{color:"var(--ml-trust-green)",fontSize:11}}),a,u&&r.jsxs("span",{style:{fontSize:11,color:"var(--ml-muted)",fontWeight:400},children:["— de",u]})]}),r.jsxs("div",{className:"ml-option-desc",children:["Economia de ",r.jsxs("strong",{style:{color:"var(--ml-trust-green)"},children:[Z(o),x?` (${x.buyerDiscountPct}%)`:""]})," aplicada"]})]}),r.jsx("button",{type:"button",onClick:P,className:"ml-link-button",children:"Remover"})]}):r.jsxs("div",{children:[r.jsxs("div",{className:"ml-coupon__form",children:[r.jsx("input",{id:"coupon-input",type:"text",placeholder:"Insira seu código",value:l,autoComplete:"off",onChange:z=>{g(z.target.value.toUpperCase()),f!=="idle"&&m("idle")},onKeyDown:z=>z.key==="Enter"&&b()}),r.jsx("button",{type:"button",onClick:b,disabled:!x||f==="validating"||!l.trim(),className:"ml-button ml-button--secondary",children:f==="validating"?r.jsx(c,{className:"fas fa-spinner fa-spin"}):"Aplicar"})]}),f==="invalid"&&r.jsxs("p",{className:"ml-warning",style:{marginTop:10},children:[r.jsx(c,{className:"fas fa-times-circle"}),"Código inválido ou expirado. Verifique e tente novamente."]})]})]})]}),n]})},fa=({isCheckoutLocked:n,isLoggedIn:s,isSubmitting:i,handleStartCheckout:a,handlePayWithPix:f,finalTotal:l=119.9,cardAvailable:u=!1,cardPublicKey:h})=>{const[o,y]=e.useState("pix"),[v,A]=e.useState(!1),C=`inline-card-${e.useId().replace(/:/g,"")}`,b=Ln(l),P=()=>{if(!(o==="cartao"&&!u)){if(o==="cartao"){document.getElementById(C)?.requestSubmit();return}f({metodoPagamento:o,parcelas:1})}};return r.jsxs("div",{className:"ml-payment-selection",children:[r.jsxs("div",{className:"yp-method-tabs",role:"radiogroup","aria-label":"Forma de pagamento",children:[r.jsxs("div",{className:`yp-method-option ${o==="cartao"?"is-selected":""}`,children:[r.jsxs("div",{className:"yp-method-option__header",role:"radio","aria-checked":o==="cartao","aria-disabled":!u,tabIndex:u?0:-1,onClick:()=>{u&&y("cartao")},onKeyDown:g=>{u&&g.target===g.currentTarget&&(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),y("cartao"))},children:[r.jsxs("div",{className:"yp-method-option__left",children:[r.jsx("div",{className:"yp-method-option__radio"}),r.jsxs("div",{children:[r.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(c,{className:"fas fa-credit-card",style:{color:vr("--sk-palette-cyan-38bdf8")}}),"Cartão de crédito"]}),r.jsx("div",{className:"yp-method-sub",children:u?r.jsxs(r.Fragment,{children:[Z(b)," · Parcelamento em até 12x"]}):r.jsx("span",{children:"Indisponível"})})]})]}),u?r.jsx("span",{className:"yp-badge-instant",style:{background:"color-mix(in srgb, var(--sk-palette-cyan-38bdf8) 12%, transparent)",color:vr("--sk-palette-cyan-38bdf8"),borderColor:"color-mix(in srgb, var(--sk-palette-cyan-38bdf8) 25%, transparent)"},children:"Até 12x"}):r.jsx("span",{className:"yp-method-sub",children:"Indisponível"})]}),u&&o==="cartao"&&r.jsx("div",{style:{marginTop:12},children:r.jsx(pa,{id:C,amount:b,publicKey:h,disabled:i,onReadyChange:A,onToken:g=>f({metodoPagamento:"cartao",parcelas:g.installments,card:g})})}),!u&&r.jsx("div",{style:{marginTop:12,opacity:.65},children:r.jsx("p",{className:"ml-stage-copy",children:"Cartão indisponível no momento. Tente novamente mais tarde."})})]}),r.jsxs("div",{className:`yp-method-option ${o==="pix"?"is-selected":""}`,children:[r.jsxs("div",{className:"yp-method-option__header",role:"radio","aria-checked":o==="pix",onClick:()=>y("pix"),onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),y("pix"))},tabIndex:0,children:[r.jsxs("div",{className:"yp-method-option__left",children:[r.jsx("div",{className:"yp-method-option__radio"}),r.jsxs("div",{children:[r.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(c,{className:"fab fa-pix",style:{color:vr("--sk-palette-teal-10b981")}}),"Pix"]}),r.jsxs("div",{className:"yp-method-sub",children:[r.jsx("strong",{style:{color:vr("--sk-palette-teal-10b981")},children:Z(l)}),"à vista • Liberação imediata"]})]})]}),r.jsx("span",{className:"yp-badge-instant",children:"Melhor valor"})]}),o==="pix"&&r.jsx("div",{style:{marginTop:12},children:r.jsx("p",{className:"ml-stage-copy",style:{margin:"0 0 8px"},children:"A confirmação do Pix é instantânea. Pague pelo app do seu banco com o QR Code ou código gerado."})})]})]}),n?r.jsxs("div",{className:"ml-warning",children:[r.jsx(c,{className:"fas fa-tools"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Checkout temporariamente bloqueado."}),r.jsx("br",{}),"Estamos realizando manutenção no sistema de pagamentos. Tente novamente em breve."]})]}):r.jsxs("div",{className:"ml-desktop-only",children:[s?r.jsx("div",{className:"ml-payment-choice-actions","aria-label":"Ação de pagamento",children:r.jsx("button",{type:"button",onClick:P,disabled:i||o==="cartao"&&(!u||!v),"aria-label":o==="cartao"?"Pagar com cartão":"Gerar pagamento (Pagar com PIX)",className:"ml-button ml-button--primary yp-btn-gold",children:i?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-spinner fa-spin"}),r.jsx("span",{children:"Preparando pagamento..."})]}):r.jsxs(r.Fragment,{children:[r.jsx(c,{className:o==="cartao"?"fas fa-lock":"fab fa-pix"}),r.jsx("span",{children:o==="cartao"?"PAGAR COM CARTÃO":"GERAR PAGAMENTO"})]})})}):r.jsx("div",{className:"ml-payment-choice-actions",children:r.jsxs("button",{type:"button",onClick:a,className:"ml-button ml-button--primary yp-btn-gold",children:[r.jsx("span",{children:"Entrar para comprar"})," ",r.jsx(c,{className:"fas fa-arrow-right"})]})}),r.jsxs("p",{style:{textAlign:"center",marginTop:14,fontSize:11.5,color:"var(--ml-muted)",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[r.jsx(c,{className:"fas fa-shield-alt",style:{color:"var(--ml-trust-green)"}}),"Confirmação pelo provedor de pagamento"]})]}),!n&&(s?r.jsx(ze,{onPix:P,isSubmitting:i,disabled:o==="cartao"&&(!u||!v),selectedMethod:o,amount:o==="cartao"?b:l}):r.jsx(Pe,{label:"Entrar para comprar",onClick:a}))]})},ga=({status:n,isSubmitting:s,isVerifying:i,isPixTestMode:a,instantAccessText:f,pixData:l,pixCountdown:u,pixError:h,pixCopied:o,isCardPayment:y,cardChallenge:v,handleGeneratePix:A,handleCopyPixCode:C,handleSimulatePixPayment:b,handleCancelPix:P})=>{if(y&&n!=="approved")return r.jsxs("section",{className:"ml-card","aria-label":"Pagamento com cartão",children:[r.jsx("div",{className:"ml-card__header",children:r.jsx("h2",{className:"ml-card__title",children:n==="expired"?"Pagamento expirado":n==="rejected"?"Cartão recusado":"Confirmando pagamento com cartão"})}),r.jsxs("div",{className:"ml-card__body sk-stack",children:[n!=="expired"&&r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"ml-stage-copy",children:n==="rejected"?"O banco recusou esta tentativa. Confira os dados ou escolha outro meio de pagamento.":"Aguarde nesta página. A compra será liberada após a confirmação do pagamento."}),v&&n==="pending_pix"&&r.jsx(ua,{challenge:v}),(a||!!l?.id?.startsWith("MOCK-CARD-"))&&r.jsxs("button",{type:"button",onClick:b,disabled:i,className:"ml-button ml-button--secondary",style:{marginTop:8},children:[i?r.jsx(c,{className:"fas fa-spinner fa-spin"}):r.jsx(c,{className:"fas fa-bolt"}),"Simular aprovação do cartão"]})]}),n==="expired"||n==="rejected"?r.jsx("button",{type:"button",className:"ml-link-button",onClick:P,children:"Voltar às formas de pagamento"}):r.jsx("p",{className:"ml-stage-copy",children:"Aguarde a confirmação antes de iniciar outro pagamento."})]})]});const g=!!l?.id?.startsWith("TEST-PIX-"),m=!!(l?.qrCodeBase64&&!g);return n==="expired"?r.jsxs("section",{className:"ml-card animate-slide-up","aria-labelledby":"pix-expired-title",children:[r.jsx("div",{className:"ml-card__header",children:r.jsx("h2",{id:"pix-expired-title",className:"sk-title",children:"Este código PIX venceu"})}),r.jsxs("div",{className:"ml-card__body sk-stack",children:[r.jsxs("div",{className:"sk-note sk-note--warn",children:[r.jsx(c,{className:"fas fa-clock","aria-hidden":!0}),r.jsxs("span",{children:["O prazo deste código acabou e",r.jsx("strong",{children:"nada foi cobrado"}),". Se você chegou a pagar nos últimos minutos, não pague de novo — gere um novo código só se tiver certeza de que o pagamento não saiu."]})]}),r.jsxs("div",{className:"sk-row",style:{gap:8,flexWrap:"wrap"},children:[r.jsxs("button",{type:"button",className:"sk-btn",onClick:A,disabled:s,children:[r.jsx(c,{className:"fas fa-rotate-right","aria-hidden":!0}),s?"Gerando…":"Gerar novo código PIX"]}),r.jsx("button",{type:"button",className:"sk-btn sk-btn--ghost",onClick:P,children:"Voltar ao carrinho"})]})]})]}):n==="pending_pix"?r.jsxs("section",{className:"ml-card animate-slide-up","aria-labelledby":"pix-pending-title",children:[r.jsxs("div",{className:"ml-card__header",children:[r.jsx("h2",{id:"pix-pending-title",className:"ml-card__title",children:"PIX aguardando confirmação"}),u&&r.jsx("span",{className:"ml-badge ml-badge--orange",children:u==="Expirado"?"Expirado":"Expira em "+String(u)})]}),r.jsxs("div",{className:"ml-pix-pending",children:[r.jsx("div",{className:"ml-pix-qr",children:m?r.jsx("img",{decoding:"async",src:`data:image/png;base64,${l?.qrCodeBase64}`,alt:"QR Code Pix"}):r.jsx(Ue,{value:l?.qrCode||""})}),r.jsx("p",{className:"ml-page-subtitle ml-page-subtitle--center",children:"Ou use o código copia-e-cola:"}),r.jsxs("div",{className:"ml-copy-row ml-copy-row--centered",children:[r.jsx("input",{type:"text",readOnly:!0,value:l?.qrCode||"","aria-label":"Código Pix copia e cola",onClick:x=>x.target.select()}),r.jsx("button",{type:"button",onClick:()=>C(l?.qrCode||""),className:"ml-button ml-button--green ml-copy-row__btn ml-copy-row__btn--centered",style:o?{opacity:.85}:void 0,children:o?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-check"}),r.jsx("span",{children:"Copiado!"})]}):r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"far fa-copy"}),r.jsx("span",{children:"Copiar"})]})})]}),r.jsxs("div",{className:"ml-digital-note ml-digital-note--centered",role:"status","aria-live":"polite",children:[r.jsx("span",{className:"ml-digital-note__spin","aria-hidden":"true",children:r.jsx(c,{className:"fas fa-spinner fa-spin"})}),r.jsx("span",{className:"ml-digital-note__text",children:a?"Aguardando confirmação do banco. Em TEST, nenhum link real será liberado.":"Aguardando confirmação do banco. O produto será liberado automaticamente."})]}),a&&r.jsxs("button",{type:"button",onClick:b,disabled:i,className:"ml-button ml-button--secondary",style:{margin:"14px auto 0",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,width:"auto",minWidth:220},children:[i?r.jsx(c,{className:"fas fa-spinner fa-spin"}):r.jsx(c,{className:"fas fa-bolt"}),"Simular pagamento teste"]})]})]}):r.jsxs("section",{className:"ml-payment-card","aria-label":"Pagamento via PIX",children:[r.jsxs("div",{className:"ml-card__header",children:[r.jsxs("h2",{id:"checkout-payment-card-title",className:"ml-card__title",children:[r.jsx(c,{className:"fab fa-pix",style:{color:"var(--ml-trust-green)",fontSize:13}}),"Pague com PIX"]}),r.jsxs("span",{className:"ml-badge ml-badge--green",children:[r.jsx(c,{className:"fas fa-shield-alt",style:{fontSize:9}}),"Seguro"]})]}),r.jsxs("div",{className:"ml-pix-box",children:[r.jsx(Ke,{}),r.jsxs("div",{className:"ml-digital-note",children:[r.jsx(c,{className:"fas fa-bolt"}),r.jsxs("span",{children:[r.jsx("strong",{children:"À vista, s/juros."})," ","Aprovação em segundos —",f]})]}),a&&r.jsxs("div",{className:"ml-test-note",children:[r.jsx(c,{className:"fas fa-flask"}),r.jsx("span",{children:"Ambiente TEST ativo: o pagamento pode ser simulado sem gerar cobrança real."})]}),r.jsx("button",{type:"button",onClick:A,disabled:s,className:"ml-button ml-button--green",style:{width:"100%",minHeight:48,borderRadius:24,fontSize:13,fontWeight:700,margin:"14px 0 0",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:s?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-spinner fa-spin"}),r.jsx("span",{children:"Gerando QR Code..."})]}):r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-lock",style:{fontSize:12}}),r.jsx("span",{children:"Gerar QR Code PIX"})]})}),h&&r.jsxs("div",{className:"ml-warning",style:{marginTop:12},children:[r.jsx(c,{className:"fas fa-exclamation-circle"}),h]})]})]})},ha=({checkoutStep:n,totalOriginal:s,totalDiscount:i,couponDiscount:a,appliedCoupon:f,couponOwnerName:l,finalTotal:u,isTestMode:h,vipDiscount:o=0,cardSurcharge:y=0})=>{const v=i+a;return r.jsxs("aside",{className:"ml-summary","aria-label":"Resumo da compra",children:[r.jsx("div",{className:"ml-summary__header",children:r.jsxs("h3",{className:"ml-card__title",children:[r.jsx(c,{className:"fas fa-receipt",style:{color:"var(--ml-trust-green)",fontSize:13}}),"Resumo da compra"]})}),r.jsxs("div",{className:"ml-summary__body",children:[r.jsxs("div",{className:"ml-summary__row",children:[r.jsx("span",{children:"Produto(s)"}),r.jsx(ee,{value:s,size:"sm"})]}),o>0&&r.jsxs("div",{className:"ml-summary__row",children:[r.jsxs("span",{style:{display:"flex",alignItems:"center",gap:5},children:[r.jsx(c,{className:"fas fa-crown",style:{color:"var(--ml-trust-green)",fontSize:10}}),"Desconto Clube VIP"]}),r.jsxs("strong",{className:"ml-price-green",children:["− ",Z(o)]})]}),f&&a>0&&r.jsxs("div",{className:"ml-summary__row",children:[r.jsxs("span",{children:[r.jsxs("span",{className:"ml-summary__coupon",children:[r.jsx(c,{className:"fas fa-ticket-alt",style:{marginRight:4,fontSize:9}}),f]}),l&&r.jsxs("small",{className:"ml-summary__coupon-owner",children:["Desconto aplicado por",l]})]}),r.jsxs("strong",{className:"ml-price-green",children:["− ",Z(a)]})]}),y>0&&r.jsxs("div",{className:"ml-summary__row",children:[r.jsx("span",{children:"Acréscimo no cartão"}),r.jsx(ee,{value:y,size:"sm"})]}),r.jsx("div",{className:"ml-summary__line"}),r.jsxs("div",{className:"ml-summary__row ml-summary__total",children:[r.jsx("div",{children:r.jsx("strong",{style:{fontSize:15},children:n===3?"Você paga":"Total"})}),r.jsx("div",{style:{textAlign:"right"},children:r.jsx(ee,{value:u,size:"lg"})})]}),v>0&&r.jsxs("div",{className:"ml-summary__save ml-summary__save--big",children:[r.jsx(c,{className:"fas fa-piggy-bank",style:{marginRight:6}}),"Você economiza",Z(v),"nesta compra!"]}),r.jsxs("div",{className:"ml-summary__benefits",children:[r.jsxs("div",{className:"ml-summary__benefit-item",children:[r.jsx(c,{className:"fas fa-bolt ml-summary__benefit-icon"}),r.jsx("span",{children:"Liberação instantânea após aprovação"})]}),r.jsx("div",{className:"ml-summary__benefit-item",children:h?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-flask ml-summary__benefit-icon"}),r.jsx("span",{children:"Modo de teste — sem cobrança real"})]}):r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-layer-group ml-summary__benefit-icon"}),r.jsx("span",{children:"Disponível em Minha Coleção"})]})})]})]})]})},ba=e.memo(({cart:n,setCart:s,onNavigateToStore:i,onViewOrders:a,onPaymentApproved:f,onUserProfileUpdated:l,onLoginRequired:u,products:h=[],user:o,showNotify:y,onOpenVip:v,onOpenCommissions:A,isActive:C=!0})=>{En("checkout",ea);const{platformConfig:b,purchasedItems:P}=In(),g=b?.checkoutLocked||!1,m=da({cart:n,setCart:s,products:h,user:o,purchasedItems:P,onPaymentApproved:f,onUserProfileUpdated:l,onLoginRequired:u,showNotify:y}),{checkoutStep:x,status:w,isSubmitting:R,isVerifying:z,isProfileCompletionOpen:rr,profileCpf:M,profileWhatsappDdi:tr,profileWhatsapp:F,profileCpfError:G,profileWhatsappError:Q,profileCompletionError:er,isCompletingProfile:W,pixData:Cr,pixCountdown:cr,pixError:ue,pixCopied:ne,pixTestMode:Nr,cardAvailable:mr,isCardPayment:Br,cardChargeTotal:Pr,cardChallenge:xe,cardPublicKey:kr,couponInput:fe,setCouponInput:ge,couponStatus:V,setCouponStatus:O,couponOwnerName:zr,appliedCoupon:U,couponDiscountRate:Wr,affiliateReferral:ae,couponDiscount:X,couponEligible:he,itemsToRender:Sr,totalOriginal:Er,totalDiscount:te,vipDiscount:dr,finalTotal:Rr,handleGeneratePix:Ir,handleApplyCoupon:Lr,handleRemoveCoupon:Gr,handleCopyPixCode:yr,handleSimulatePixPayment:Ur,handleCancelPix:pr,handleStartCheckout:ur,handlePayWithPix:or,handleBackStep:Kr,handleProfileCpfChange:Hr,handleProfileWhatsappChange:B,handleProfileWhatsappDdiChange:Tr,handleCompleteProfile:lr,handleCloseProfileCompletion:_r,removeItem:oe,removeGroup:ie}=m,[nr,xr]=e.useState(!1),Xr=e.useRef(null);e.useEffect(()=>{nr&&(Xr.current?.focus({preventScroll:!0}),Xr.current?.scrollIntoView?.({block:"start",behavior:"auto"}))},[nr]);const[ar,se]=e.useState("pf"),[le,wr]=e.useState(""),[S,ce]=e.useState(""),[Qr,jr]=e.useState(""),[Yr,ir]=e.useState(""),Ar=Nr,fr=Ar?"Modo teste: o pagamento pode ser concluído sem gerar cobrança ou link real.":"O produto será liberado instantaneamente após a aprovação do pagamento.";if(w==="approved")return r.jsx("div",{className:"store-interface ml-checkout",children:r.jsx(la,{user:o,isTestMode:Ar,onNavigateToStore:i,onViewOrders:a,onOpenVip:v,onOpenCommissions:A})});if(n.length===0)return r.jsx("div",{className:"store-interface ml-checkout","data-cart-empty":"true",children:r.jsx("div",{className:"sk-page-center w-full bg-light dark:bg-dark",children:r.jsx(Rn,{onAction:i})})});const D=g||w!=="idle"?"none":x===1&&!nr?"single-action":x===1&&o?"payment-options":"single-action",sr=r.jsx(ha,{checkoutStep:x,totalOriginal:Er,totalDiscount:te,vipDiscount:dr,couponDiscount:X,appliedCoupon:U,couponOwnerName:zr,finalTotal:Br&&Pr!==null?Pr:Rr,cardSurcharge:Br&&Pr!==null?Math.max(0,Pr-Rr):0,isTestMode:Ar});return r.jsxs("div",{className:"store-interface ml-checkout","data-mobile-dock":D,"data-mobile-checkout-dock":D,children:[r.jsx(Cn,{isOpen:C&&rr,onClose:_r,disableBackdropClick:W,disableClose:W,ariaLabel:"Conclua seu cadastro",className:"checkout-profile-modal",children:r.jsxs("form",{className:"checkout-profile-form",noValidate:!0,onSubmit:L=>{L.preventDefault(),lr()},children:[r.jsxs("header",{className:"checkout-profile-header",children:[r.jsx("div",{className:"checkout-profile-icon",children:r.jsx(c,{className:"fas fa-user-shield text-lg"})}),r.jsx("p",{className:"checkout-profile-kicker",children:"Dados do titular"}),r.jsx("h2",{className:"checkout-profile-title",children:"Conclua seu cadastro"}),r.jsx("p",{className:"checkout-profile-subtitle",children:"CPF e WhatsApp são obrigatórios para continuar com o pagamento."})]}),r.jsxs("div",{className:"checkout-profile-context",children:[r.jsx("strong",{className:"checkout-profile-context-title",children:"Por que pedimos só agora?"}),r.jsx("p",{id:"checkout-profile-help",className:"checkout-profile-context-copy",children:"O CPF identifica o titular da compra. O WhatsApp mantém um canal direto para informações sobre o pedido e suporte de acesso. Esses dados ficam vinculados somente ao seu perfil."})]}),r.jsxs("div",{className:"checkout-profile-field",children:[r.jsxs("label",{htmlFor:"checkout-profile-cpf",className:"checkout-profile-label",children:["CPF",r.jsx("span",{children:"Obrigatório"})]}),r.jsx("input",{id:"checkout-profile-cpf",name:"tax-id",type:"text",inputMode:"numeric",autoComplete:"off",value:M,maxLength:14,required:!0,"aria-required":"true","aria-describedby":G?"checkout-profile-help checkout-cpf-error":"checkout-profile-help","aria-invalid":G?"true":"false",placeholder:"000.000.000-00",disabled:W,onChange:L=>Hr(L.target.value),className:"checkout-profile-input font-mono"}),G&&r.jsxs("p",{id:"checkout-cpf-error",className:"mt-2 flex items-center gap-2 text-xs font-semibold sk-fg-danger",role:"alert",children:[r.jsx(c,{className:"fas fa-exclamation-circle"})," ",G]})]}),r.jsxs("div",{className:"checkout-profile-field",children:[r.jsxs("label",{htmlFor:"checkout-profile-whatsapp",className:"checkout-profile-label",children:["WhatsApp",r.jsx("span",{children:"Obrigatório"})]}),r.jsx(An,{id:"checkout-profile-whatsapp",ddi:tr,value:F,onDdiChange:Tr,onValueChange:B,disabled:W,required:!0,ariaDescribedBy:Q?"checkout-profile-help checkout-whatsapp-error":"checkout-profile-help",ariaInvalid:!!Q}),Q&&r.jsxs("p",{id:"checkout-whatsapp-error",className:"mt-2 flex items-center gap-2 text-xs font-semibold sk-fg-danger",role:"alert",children:[r.jsx(c,{className:"fas fa-exclamation-circle"})," ",Q]})]}),er&&r.jsxs("p",{className:"flex items-center gap-2 rounded-lg sk-bg-danger px-3 py-2.5 text-xs font-semibold sk-fg-danger",role:"alert",children:[r.jsx(c,{className:"fas fa-exclamation-circle"})," ",er]}),r.jsxs("div",{className:"checkout-profile-actions",children:[r.jsx("button",{type:"button",onClick:_r,disabled:W,className:"checkout-profile-secondary",children:"Voltar ao carrinho"}),r.jsx("button",{type:"submit",disabled:W,className:"checkout-profile-primary",children:W?r.jsxs(r.Fragment,{children:[r.jsx(c,{className:"fas fa-spinner fa-spin mr-2"}),"Salvando..."]}):"Salvar e continuar"})]})]})}),w==="processing"&&r.jsx("div",{className:"ml-overlay",children:r.jsxs("div",{className:"ml-overlay__content",children:[r.jsx("div",{className:"ml-spinner"}),r.jsx("span",{children:"Processando pagamento..."})]})}),r.jsxs("main",{className:"ml-checkout__shell",role:"main",children:[(nr||x>1)&&r.jsx("div",{className:"ml-checkout__breadcrumb mb-3 flex items-center",children:r.jsxs("button",{type:"button",className:"inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-slate-100 dark:hover:bg-white/5",onClick:x===1?()=>xr(!1):Kr,children:[r.jsx(c,{className:"fas fa-arrow-left text-[11px]"}),r.jsx("span",{children:x===1?"Voltar para conferir itens":"Voltar à etapa anterior"})]})}),r.jsx("h1",{className:"sr-only",children:"Revise sua compra"}),r.jsxs("div",{ref:Xr,tabIndex:-1,className:`ml-checkout__grid ${w==="pending_pix"||x===3?"ml-checkout__grid--centered ml-checkout__grid--pending-pix":""}`,"data-pending-pix":w==="pending_pix"||x===3?"true":"false","data-payment-stage":w==="pending_pix"||x===3?"true":"false","data-review":x===1&&!nr,"data-logged":o?"true":"false",children:[!o&&nr&&r.jsxs("section",{className:"ml-stage ml-identity","aria-labelledby":"checkout-identity-title","data-active":"true",children:[r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4},children:r.jsxs("h2",{id:"checkout-identity-title",className:"ml-stage-title",style:{margin:0},children:[r.jsx("span",{className:"ml-stage-number","aria-hidden":!0,children:"1"}),"Identificação"]})}),r.jsx("p",{className:"ml-stage-copy",children:"Utilizaremos seu e-mail para: Identificar seu perfil, histórico de compra, notificação de pedidos e carrinho de compras."}),r.jsxs("div",{className:"yp-pills",role:"tablist",children:[r.jsxs("button",{type:"button",className:`yp-pill-btn ${ar==="pf"?"is-active":""}`,onClick:()=>se("pf"),children:[r.jsx(c,{className:"fas fa-user text-xs"}),"Pessoa física"]}),r.jsxs("button",{type:"button",className:`yp-pill-btn ${ar==="pj"?"is-active":""}`,onClick:()=>se("pj"),children:[r.jsx(c,{className:"fas fa-building text-xs"}),"Pessoa jurídica"]})]}),r.jsxs("div",{className:"yp-form-group",style:{marginBottom:12},children:[r.jsx("label",{className:"yp-label",children:"Nome completo"}),r.jsx("input",{type:"text",placeholder:"ex.: Maria de Almeida Cruz",value:le,onChange:L=>wr(L.target.value),className:"yp-input"})]}),r.jsxs("div",{className:"yp-form-group",style:{marginBottom:12},children:[r.jsx("label",{className:"yp-label",children:"E-mail"}),r.jsx("input",{type:"email",placeholder:"ex.: maria@gmail.com",value:S,onChange:L=>ce(L.target.value),className:"yp-input"})]}),r.jsxs("div",{className:"yp-form-row",style:{marginBottom:16},children:[r.jsxs("div",{className:"yp-form-group flex-1",children:[r.jsx("label",{className:"yp-label",children:ar==="pf"?"CPF":"CNPJ"}),r.jsx("input",{type:"text",placeholder:ar==="pf"?"000.000.000-00":"00.000.000/0000-00",value:Qr,onChange:L=>jr(L.target.value),className:"yp-input font-mono"})]}),r.jsxs("div",{className:"yp-form-group flex-1",children:[r.jsx("label",{className:"yp-label",children:"Celular / WhatsApp"}),r.jsx("input",{type:"tel",placeholder:"(00) 00000-0000",value:Yr,onChange:L=>ir(L.target.value),className:"yp-input font-mono"})]})]}),r.jsxs("button",{type:"button",className:"ml-button ml-button--primary yp-btn-gold",onClick:()=>{if(S&&S.trim())try{E.setItem("savedUserIdentifier",S.trim())}catch{}ur()},disabled:g,"aria-label":"Entrar para continuar",children:[r.jsx("span",{children:"FORMA DE PAGAMENTO"})," ",r.jsx(c,{className:"fas fa-arrow-right"})]}),r.jsxs("div",{className:"ml-stage-footnote",style:{marginTop:14},children:[r.jsx(c,{className:"fas fa-lock","aria-hidden":!0}),"Powered by • Payments Protect • Seus dados acompanham somente a sua compra e o seu perfil."]})]}),(x!==1||nr)&&r.jsxs("section",{className:"ml-stage ml-main-stack","aria-labelledby":w==="pending_pix"?"pix-pending-title":x===3?"checkout-payment-card-title":"checkout-payment-title","data-active":"true",children:[w!=="pending_pix"&&x!==3&&r.jsxs("h2",{id:"checkout-payment-title",className:"ml-stage-title",children:[!o&&r.jsx("span",{className:"ml-stage-number","aria-hidden":!0,children:"2"}),"Pagamento"]}),x===1?r.jsx(fa,{isCheckoutLocked:g,isLoggedIn:!!o,isSubmitting:R||w==="processing",handleStartCheckout:ur,handlePayWithPix:or,finalTotal:Rr,cardAvailable:mr,cardPublicKey:kr}):r.jsx(ga,{isCardPayment:Br,cardChallenge:xe,status:w,isSubmitting:R,isVerifying:z,isPixTestMode:Nr,instantAccessText:fr,pixData:Cr,pixCountdown:cr,pixError:ue,pixCopied:ne,handleGeneratePix:Ir,handleCopyPixCode:yr,handleSimulatePixPayment:Ur,handleCancelPix:pr})]}),x===1&&!nr&&r.jsxs("div",{className:"ml-side-stack",children:[r.jsx("div",{className:"ml-side-stack__sticky",children:x===1?r.jsx(xa,{summary:sr,couponDiscountRate:Wr,cart:n,itemsToRender:Sr,appliedCoupon:U,couponStatus:V,couponInput:fe,couponOwnerName:zr,couponDiscount:X,couponEligible:he,affiliateReferral:ae,removeItem:oe,removeGroup:ie,handleApplyCoupon:Lr,handleRemoveCoupon:Gr,setCouponInput:ge,setCouponStatus:O}):sr}),x===1&&!nr&&r.jsxs("button",{type:"button",className:"ml-button ml-button--primary ml-desktop-only",disabled:g||V==="validating",onClick:()=>xr(!0),children:["Continuar para pagamento ",r.jsx(c,{className:"fas fa-arrow-right","aria-hidden":!0})]})]})]}),r.jsx(Nn,{closeOnConfirm:!1,busy:m.isSubmitting,isOpen:C&&!!m.policyChange,onClose:m.handleCancelPolicyChange,onConfirm:()=>{m.handleConfirmPolicyChange()},title:"Confirme o total atualizado",message:"A política de afiliados foi atualizada. O total passou de "+String(Z(m.policyChange?.previousTotal||0))+" para "+String(Z(m.policyChange?.nextTotal||0))+". Confirme para continuar o pagamento.",confirmText:"Confirmar novo total",cancelText:"Revisar carrinho"})]}),r.jsx(Qe,{cardAvailable:mr}),x===1&&(nr?o?r.jsx(ze,{onPix:()=>{or()},isSubmitting:R||w==="processing",disabled:g}):null:r.jsx(Pe,{label:"Continuar para pagamento",disabled:g||V==="validating",onClick:()=>xr(!0)}))]})});ba.displayName="CartView";export{ba as CartView,ha as OrderSummary};
