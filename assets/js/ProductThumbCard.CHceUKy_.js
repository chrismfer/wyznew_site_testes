import{r as a,j as r}from"./vendor-react.Bxpvzt8v.js";import{bW as Ur,y as fr,c0 as gr,c1 as Jr,bV as vr,m as Dr,bX as kr,c2 as Xr,aI as br,A as Kr,ay as Yr,bc as xr,ba as K,be as Zr,bU as Hr,b0 as Qr,b1 as rn,ad as nn,I as hr,ah as en,aG as tn,c3 as an,$ as on,b8 as M,_ as ln}from"./index.DrSIG-wE.js";import{u as sn}from"./index.rPrqxBCS.js";import{p as pn,u as cn,a as mn}from"./useProductImage.BVJvDafN.js";import"./catalogBoot.3I3tinKp.js";import{bE as dn,Z as fn,bF as gn,bG as bn,e as ur,p as xn,aM as hn,b9 as un,aB as vn,j as kn}from"./vendor-icons.CnSBu9H2.js";const wn=`/* skull-style-rev:detail:mwzxm77k */
@keyframes ml-fade-in {\r
  from { opacity: 0; transform: translateY(6px); }\r
  to   { opacity: 1; transform: translateY(0); }\r
}\r
@keyframes ml-badge-pop {\r
  0%   { transform: scale(0.85); opacity: 0; }\r
  60%  { transform: scale(1.08); }\r
  100% { transform: scale(1); opacity: 1; }\r
}\r
\r
.ml-product-card {\r
  display: flex;\r
  flex-direction: column;\r
  overflow: hidden;\r
  cursor: pointer;\r
  position: relative;\r
  transition:\r
    box-shadow 0.2s ease,\r
    border-color 0.2s ease;\r
  animation: none;\r
  height: 100%;\r
}\r
\r
.ml-product-card.ml-product-card:is(:hover, :focus-visible, .mobile-focused, .ml-card-glow) {\r
  border-color: var(--sk-card-active-bd, var(--sk-ds-accent));\r
  box-shadow: var(--sk-card-active-shadow,\r
    0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 55%, transparent),\r
    0 0 16px 1px color-mix(in srgb, var(--sk-ds-accent) 32%, transparent),\r
    0 16px 38px color-mix(in srgb, var(--sk-palette-teal-050807) 85%, transparent));\r
  outline: none;\r
  z-index: 5;\r
}\r
\r
html:not(.dark) .ml-product-card {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
}\r
\r
.ml-product-img-area {\r
  flex-shrink: 0;\r
}\r
\r
.ml-product-card:is(:hover, :focus-visible, .mobile-focused) .ml-product-img {\r
  transform: scale(1.045);\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .ml-product-img { transition: none !important; transition-duration: 0ms !important; animation: none !important; }\r
  .ml-product-card:is(:hover, :focus-visible, .mobile-focused) .ml-product-img {\r
    transform: none;\r
  }\r
}\r
\r
.ml-badge-digital {\r
  gap: 4px;\r
}\r
html.dark .ml-badge-digital {\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-ds-accent) 12%, transparent), color-mix(in srgb, var(--sk-ds-accent) 24%, transparent));\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 32%, transparent);\r
}\r
\r
.ml-favorite-btn {\r
  position: absolute;\r
  top: 34px;\r
  right: 8px;\r
  z-index: 12;\r
  width: 34px;\r
  height: 34px;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 32%, transparent);\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-0a0a0c) 72%, transparent);\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 70%, transparent);\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  backdrop-filter: blur(8px);\r
  box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-palette-neutral-000000) 22%, transparent);\r
\r
  transition:\r
    transform 0.18s ease,\r
    color 0.18s ease,\r
    background 0.18s ease,\r
    border-color 0.18s ease;\r
\r
}\r
\r
.ml-favorite-btn i {\r
  transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1.5);\r
  transform: scale(1);\r
  display: block;\r
}\r
\r
.ml-favorite-btn.active i {\r
  transform: scale(1.25);\r
}\r
\r
.ml-favorite-btn:hover {\r
  transform: translateY(-1px) scale(1.06);\r
  color: var(--sk-palette-rose-ff4d6d);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 92%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-rose-ff4d6d) 35%, transparent);\r
}\r
.ml-favorite-btn.active {\r
  color: var(--sk-palette-rose-ff4d6d);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 96%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-rose-ff4d6d) 45%, transparent);\r
}\r
html:not(.dark) .ml-favorite-btn {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 86%, transparent);\r
  color: var(--sk-palette-neutral-555555);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
}\r
html:not(.dark) .ml-favorite-btn:hover,\r
html:not(.dark) .ml-favorite-btn.active {\r
  color: var(--sk-palette-rose-ff3b5f);\r
}\r
\r
.ml-product-info {\r
  flex-grow: 1;\r
}\r
html.dark .ml-product-info {\r
  background: var(--sk-palette-neutral-0f0f11);\r
}\r
\r
\r
\r
.ml-product-title {\r
  font-family: -apple-system, 'Proxima Nova', 'Roboto', Arial, sans-serif;\r
  font-size: 0.875rem;\r
  font-weight: 400;\r
  margin: 0 0 4px;\r
}\r
html.dark .ml-product-title { color: var(--sk-palette-neutral-f3f7f5); }\r
\r
.ml-price-login {\r
  font-size: 0.78rem;\r
  color: var(--sk-palette-neutral-888888);\r
  font-style: italic;\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
}\r
.ml-price-free {\r
  font-size: 1.4rem;\r
  font-weight: 700;\r
  color: var(--sk-palette-green-00a650);\r
}\r
.ml-price-from-label { font-size: 0.72rem; color: var(--sk-palette-blue-64748b); font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }\r
html.dark .ml-price-from-label { color: var(--sk-palette-blue-94a3b8); }\r
\r
.ml-price-block {\r
  display: flex;\r
  flex-direction: column;\r
  flex-wrap: nowrap;\r
  align-items: flex-start;\r
  gap: 3px;\r
  line-height: 1.15;\r
}\r
.ml-price-original {\r
  display: flex !important;\r
  align-items: center !important;\r
  gap: 6px !important;\r
  min-height: 20px !important;\r
  height: 20px !important;\r
  line-height: 20px !important;\r
  margin: 0 !important;\r
  padding: 0 !important;\r
  box-sizing: border-box !important;\r
}\r
.ml-price-old {\r
  font-size: 0.78rem;\r
  color: var(--sk-palette-blue-64748b);\r
  text-decoration: line-through;\r
  font-weight: 500;\r
  line-height: 1.15;\r
  margin: 0;\r
}\r
html.dark .ml-price-old { color: var(--sk-palette-blue-94a3b8); }\r
.ml-price-main {\r
  display: flex !important;\r
  align-items: baseline !important;\r
  gap: 6px !important;\r
  flex-wrap: nowrap !important;\r
  margin: 0 !important;\r
  padding: 0 !important;\r
  line-height: 1.15 !important;\r
}\r
.ml-price-value {\r
  color: var(--sk-palette-neutral-333333);\r
  margin: 0;\r
}\r
html.dark .ml-price-value { color: var(--sk-palette-neutral-f3f7f5); }\r
.ml-price-value.vip { color: var(--sk-palette-cyan-0284c7); }\r
html.dark .ml-price-value.vip {\r
  color: var(--sk-palette-cyan-00e5ff);\r
  text-shadow: 0 0 18px color-mix(in srgb, var(--sk-palette-cyan-00e5ff) 32%, transparent);\r
}\r
.ml-price-vip-tag {\r
  font-size: 0.62rem;\r
  font-weight: 800;\r
  color: var(--sk-palette-neutral-ffffff);\r
  background: linear-gradient(135deg, var(--sk-palette-cyan-0284c7), var(--sk-palette-cyan-06b6d4));\r
  padding: 2px 6px;\r
  border-radius: 3px;\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 3px;\r
}\r
html.dark .ml-price-vip-tag {\r
  color: var(--sk-palette-cyan-02131d);\r
  background: linear-gradient(135deg, var(--sk-palette-cyan-00b8d9), var(--sk-palette-cyan-00e5ff));\r
  box-shadow: 0 0 12px color-mix(in srgb, var(--sk-palette-cyan-00e5ff) 40%, transparent);\r
}\r
.ml-price-installments {\r
  font-size: 0.74rem;\r
  color: var(--sk-palette-blue-64748b);\r
  font-weight: 500;\r
  margin: 0 !important;\r
  padding: 0 !important;\r
  line-height: 1.15 !important;\r
}\r
html.dark .ml-price-installments {\r
  color: var(--sk-palette-neutral-a9b5b0);\r
}\r
.ml-price-installments-highlight {\r
  color: var(--sk-palette-blue-64748b);\r
  font-weight: 700;\r
}\r
html.dark .ml-price-installments-highlight {\r
  color: var(--sk-palette-neutral-f3f7f5);\r
}\r
\r
.ml-price-pix-badge {\r
  font-size: 0.58rem;\r
  font-weight: 800;\r
  text-transform: uppercase;\r
  letter-spacing: 0.03em;\r
  color: var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 25%, transparent);\r
  padding: 1.5px 5px;\r
  border-radius: 4px;\r
  margin-left: 2px;\r
  vertical-align: middle;\r
  line-height: 1.2;\r
  white-space: nowrap;\r
}\r
html.dark .ml-price-pix-badge {\r
  color: var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 30%, transparent);\r
}\r
\r
.ml-action-buttons {\r
  display: flex;\r
  gap: 8px;\r
  margin-top: auto;\r
  padding-top: 8px;\r
}\r
.ml-btn-primary {\r
  flex: 1;\r
  height: 38px;\r
  color: var(--sk-palette-neutral-ffffff);\r
  border: none;\r
  font-size: 0.78rem;\r
  font-weight: 600;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  transition: all 0.2s ease;\r
}\r
.ml-btn-primary:hover { box-shadow: 0 4px 12px color-mix(in srgb, var(--sk-palette-blue-3483fa) 40%, transparent); transform: none; }\r
.ml-btn-rescue {\r
  flex: 1;\r
  height: 38px;\r
  color: var(--sk-palette-neutral-ffffff);\r
  border: none;\r
  font-size: 0.78rem;\r
  font-weight: 600;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  transition: all 0.2s ease;\r
}\r
.ml-btn-rescue:hover { transform: none; }\r
\r
.ml-btn-primary.full-width,\r
.ml-btn-rescue.full-width,\r
.ml-btn-ghost.full-width {\r
  width: 100%;\r
  justify-content: center;\r
}\r
\r
.skull-combo-wrapper > .ml-product-card {\r
  position: relative;\r
  z-index: 3;\r
  flex: 1;\r
  border-color: color-mix(in srgb, var(--sk-palette-red-ff6b00) 40%, transparent) !important;\r
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-red-ff6b00) 15%, transparent) !important;\r
}\r
.skull-combo-wrapper > .ml-product-card:hover {\r
  box-shadow: 0 8px 28px color-mix(in srgb, var(--sk-palette-red-ff6b00) 35%, transparent), 0 2px 8px color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-ff8700) 70%, transparent) !important;\r
}\r
\r
\r
@media (max-width: 640px) {\r
  .ml-product-title { font-size: 0.78rem; }\r
  .ml-price-value { font-size: 1.2rem; }\r
}\r
\r
.ml-product-card {\r
  border-radius: var(--sk-r-lg);\r
  border: 1px solid var(--sk-border-1);\r
  background-color: var(--sk-bg-card);\r
  background-image: none;\r
  color: var(--sk-ds-t1);\r
  box-shadow: var(--sk-shadow-card-premium);\r
  isolation: isolate;\r
}\r
\r
html:not(.dark) .ml-product-card {\r
  background-color: var(--sk-palette-neutral-ffffff);\r
  background-image: none;\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
\r
html.dark .ml-product-card {\r
  border-color: var(--sk-palette-teal-26342f);\r
  background-color: var(--sk-palette-teal-101715);\r
  color: var(--sk-palette-neutral-f3f7f5);\r
}\r
\r
.ml-product-img-area {\r
  background: transparent;\r
}\r
\r
.ml-product-img {\r
  padding: 0;\r
  filter: saturate(1.02) contrast(1.03);\r
}\r
\r
.ml-product-info {\r
  background:\r
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent), color-mix(in srgb, var(--sk-palette-neutral-ffffff) 0.5%, transparent)),\r
    var(--sk-palette-blue-0d0f13);\r
}\r
\r
html:not(.dark) .ml-product-info {\r
\r
  background: var(--sk-palette-neutral-ffffff);\r
  background-image: none;\r
}\r
\r
.ml-product-title {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 90%, transparent);\r
  text-transform: none;\r
  letter-spacing: 0;\r
}\r
\r
html:not(.dark) .ml-product-title {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-000000) 90%, transparent);\r
}\r
\r
.ml-price-area {\r
  flex-grow: 0;\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.ml-btn-primary,\r
.ml-btn-rescue {\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: linear-gradient(135deg, var(--sk-palette-cyan-006fc9) 0%, var(--sk-palette-cyan-008ecf) 48%, var(--sk-palette-teal-00a676) 100%);\r
  box-shadow: 0 8px 22px color-mix(in srgb, var(--sk-palette-cyan-0078d7) 24%, transparent);\r
}\r
\r
.ml-btn-primary:hover,\r
.ml-btn-rescue:hover {\r
  background: linear-gradient(135deg, var(--sk-palette-cyan-007de3) 0%, var(--sk-palette-cyan-00a0df) 48%, var(--sk-accent) 100%);\r
}\r
\r
@media (max-width: 640px) {\r
  .ml-product-card {\r
    border-radius: 9px;\r
  }\r
\r
  .ml-product-img-wrapper {\r
    aspect-ratio: auto;\r
    min-height: 160px;\r
    height: 160px;\r
    padding: 0;\r
  }\r
  .ml-product-img-area {\r
    min-height: 208px;\r
    height: 208px;\r
  }\r
\r
  .ml-product-info {\r
    padding: 10px;\r
    gap: 5px;\r
  }\r
\r
  .ml-product-title {\r
    min-height: 2.6em;\r
    -webkit-line-clamp: 2;\r
    line-clamp: 2;\r
  }\r
\r
  .ml-price-area {\r
    min-height: 48px;\r
  }\r
}\r
\r
@media (max-width: 380px) {\r
  .ml-product-info {\r
    padding: 9px;\r
  }\r
}\r
\r
.ml-offer-timer {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.78rem;\r
  color: var(--sk-palette-red-ff6b00);\r
  font-weight: 600;\r
}\r
html.dark .ml-offer-timer { color: var(--sk-palette-orange-ffaa55); }\r
\r
.ml-detail-layout {\r
  display: grid;\r
}\r
\r
.ml-gallery-col {\r
  display: flex;\r
  flex-direction: column;\r
}\r
.ml-main-image-container {\r
  position: relative;\r
  width: 100%;\r
  overflow: hidden;\r
  cursor: zoom-in;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  transition: border-color 0.2s ease, box-shadow 0.25s ease;\r
}\r
.ml-main-image-container--line {\r
\r
  border-width: 1.5px;\r
}\r
.ml-main-image {\r
  width: 100%;\r
  height: 100%;\r
\r
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);\r
}\r
\r
.ml-main-image-container:hover .ml-main-image { transform: scale(1.02); }\r
\r
.ml-line-chip {\r
  position: absolute;\r
  top: 10px;\r
  left: 10px;\r
  z-index: 3;\r
  padding: 4px 10px;\r
  border-radius: 999px;\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);\r
  font-size: 0.62rem;\r
  font-weight: 800;\r
  letter-spacing: 0.06em;\r
  text-transform: uppercase;\r
  color: var(--sk-palette-blue-0b0d10);\r
  box-shadow: 0 6px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 28%, transparent);\r
  pointer-events: none;\r
}\r
.ml-main-image-overlay {\r
  position: absolute;\r
  inset: 0;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 35%, transparent);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  color: var(--sk-palette-neutral-ffffff);\r
  font-size: 0.8rem;\r
  font-weight: 600;\r
  opacity: 0;\r
  transition: opacity 0.2s ease;\r
}\r
.ml-main-image-container:hover .ml-main-image-overlay { opacity: 1; }\r
.ml-image-counter {\r
  position: absolute;\r
  bottom: 8px;\r
  right: 8px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 55%, transparent);\r
  color: var(--sk-palette-neutral-ffffff);\r
  font-size: 0.65rem;\r
  font-weight: 700;\r
  padding: 2px 8px;\r
  border-radius: 20px;\r
  backdrop-filter: blur(4px);\r
}\r
\r
.ml-thumbs-row {\r
  display: flex;\r
}\r
.ml-thumb-btn {\r
  border: 2px solid transparent;\r
  overflow: hidden;\r
  cursor: pointer;\r
  padding: 2px;\r
  transition: all 0.18s ease;\r
  flex-shrink: 0;\r
}\r
.ml-thumb-btn img {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: contain;\r
     object-fit: contain;\r
}\r
.ml-thumb-btn:hover { border-color: var(--sk-green, var(--sk-accent)); }\r
\r
.ml-gallery-actions {\r
  display: flex;\r
  gap: 8px;\r
  flex-wrap: wrap;\r
}\r
.ml-gallery-action-btn {\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
  padding: 6px 12px;\r
  border: 1px solid var(--sk-palette-neutral-d0d0d0);\r
  background: var(--sk-palette-neutral-ffffff);\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
.ml-gallery-action-btn:hover { border-color: var(--sk-green, var(--sk-accent)); background: color-mix(in srgb, var(--sk-accent) 5%, transparent); }\r
.ml-gallery-action-btn.active { border-color: var(--sk-green, var(--sk-accent)); background: color-mix(in srgb, var(--sk-accent) 6%, transparent); }\r
html.dark .ml-gallery-action-btn { background: var(--sk-palette-neutral-151518); border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent); color: var(--sk-palette-neutral-aaaaaa); }\r
html.dark .ml-gallery-action-btn:hover { border-color: var(--sk-green-light, var(--sk-ds-accent)); color: var(--sk-green-light, var(--sk-ds-accent)); }\r
html.dark .ml-gallery-action-btn.active { border-color: var(--sk-green-light, var(--sk-ds-accent)); color: var(--sk-green-light, var(--sk-ds-accent)); }\r
\r
.ml-info-col {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.ml-detail-stars {\r
  flex-wrap: wrap;\r
}\r
.ml-detail-star-value {\r
  font-size: 0.88rem;\r
  font-weight: 700;\r
  color: var(--sk-ds-warn);\r
  margin-left: 4px;\r
}\r
html.dark .ml-detail-star-value {\r
  color: var(--sk-palette-orange-f5a623);\r
}\r
.ml-detail-star-count {\r
  font-size: 0.72rem;\r
  color: var(--sk-palette-blue-64748b);\r
  margin-left: 4px;\r
}\r
html.dark .ml-detail-star-count { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent); }\r
\r
.home-icp-grid {\r
  overflow: visible;\r
  width: 100%;\r
  align-content: flex-start;\r
}\r
\r
@media (max-width: 640px) {\r
  .home-icp-grid {\r
    width: min(100%, 460px);\r
    margin-inline: auto;\r
  }\r
}\r
\r
.ml-price-credit-row {\r
  display: flex !important;\r
  align-items: center !important;\r
  gap: 4px !important;\r
  flex-wrap: wrap !important;\r
  width: 100% !important;\r
  margin: 0 !important;\r
}\r
.ml-price-cash-row {\r
  display: inline-flex !important;\r
  align-items: baseline !important;\r
  gap: 4px !important;\r
  flex-wrap: wrap !important;\r
  width: 100% !important;\r
}\r
\r
.ml-product-card .ml-price-value,\r
.ml-product-card .ml-money.ml-price-value {\r
  font-size: 1.18rem !important;\r
  font-weight: 800 !important;\r
  line-height: 1.15 !important;\r
  letter-spacing: -0.02em !important;\r
  white-space: nowrap !important;\r
}\r
.ml-product-card .ml-price-pix-badge {\r
  font-size: 0.58rem !important;\r
  font-weight: 800 !important;\r
  padding: 1.5px 5px !important;\r
  letter-spacing: 0.03em !important;\r
  white-space: nowrap !important;\r
  align-self: center !important;\r
}\r
\r
.ml-detail-page .sk-section__head.ml-sec-head {\r
  margin-bottom: 14px;\r
}\r
.ml-detail-page .ml-sec-head .sk-title.ml-sec-title {\r
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);\r
}\r
.ml-detail-page .ml-sec-head .sk-lead {\r
  margin-top: 4px;\r
  font-size: var(--sk-text-sm, 0.8125rem);\r
}\r
\r
.ml-description-content,\r
.ml-specs-content {\r
  font-size: var(--sk-text-md, 0.9375rem);\r
  line-height: 1.65;\r
  max-height: 220px;\r
  overflow: hidden;\r
  transition: max-height 0.35s ease;\r
  position: relative;\r
}\r
html.dark .ml-description-content,\r
html.dark .ml-specs-content { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 82%, transparent); }\r
.ml-description-content:not(.expanded)::after,\r
.ml-specs-content:not(.expanded)::after {\r
  content: '';\r
  position: absolute;\r
  bottom: 0;\r
  left: 0;\r
  right: 0;\r
  height: 80px;\r
  background: linear-gradient(to bottom, transparent, var(--sk-palette-neutral-ffffff));\r
  pointer-events: none;\r
  z-index: 1;\r
}\r
html.dark .ml-description-content:not(.expanded)::after,\r
html.dark .ml-specs-content:not(.expanded)::after {\r
  background: linear-gradient(to bottom, transparent, var(--sk-palette-neutral-0f0f11));\r
}\r
\r
.ml-description-content.expanded,\r
.ml-specs-content.expanded,\r
.ml-description-panel .ml-description-content.expanded,\r
.ml-detail-page .ml-description-content.expanded,\r
.ml-detail-page .ml-specs-content.expanded {\r
  max-height: none !important;\r
  overflow: visible !important;\r
}\r
.ml-description-content.expanded::after,\r
.ml-specs-content.expanded::after {\r
  display: none !important;\r
}\r
.ml-description-content p,\r
.ml-specs-content p { margin: 0 0 10px; }\r
.ml-description-content ul,\r
.ml-specs-content ul { padding-left: 20px; margin: 0 0 10px; }\r
.ml-description-content li,\r
.ml-specs-content li { margin-bottom: 6px; }\r
.ml-description-content h1,\r
.ml-description-content h2,\r
.ml-description-content h3,\r
.ml-specs-content h1,\r
.ml-specs-content h2,\r
.ml-specs-content h3 {\r
  font-size: 0.95rem;\r
  font-weight: 700;\r
  color: var(--sk-palette-neutral-333333);\r
  margin: 12px 0 6px;\r
}\r
html.dark .ml-description-content h1,\r
html.dark .ml-description-content h2,\r
html.dark .ml-description-content h3,\r
html.dark .ml-specs-content h1,\r
html.dark .ml-specs-content h2,\r
html.dark .ml-specs-content h3 {\r
  color: var(--sk-palette-neutral-f1f1f1);\r
}\r
\r
.ml-expand-btn {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  width: 100%;\r
  padding: 12px;\r
  margin-top: 16px;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 28%, transparent);\r
  font-size: 0.8rem;\r
  cursor: pointer;\r
  transition: background 0.2s ease, border-color 0.2s ease;\r
}\r
.ml-expand-btn:hover { background: color-mix(in srgb, var(--sk-accent) 10%, transparent); }\r
html.dark .ml-expand-btn:hover { background: color-mix(in srgb, var(--sk-accent) 12%, transparent); }\r
\r
.ml-detail-page {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0;\r
}\r
\r
.ml-breadcrumb {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  flex-wrap: wrap;\r
}\r
.ml-breadcrumb-back {\r
  display: flex;\r
  align-items: center;\r
  gap: 5px;\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
.ml-breadcrumb-back:hover { background: color-mix(in srgb, var(--sk-accent) 8%, transparent); }\r
\r
.ml-video-section {\r
  overflow: hidden;\r
  padding: var(--ml-detail-pad);\r
}\r
.ml-video-embed {\r
  padding: 0;\r
}\r
.ml-video-embed iframe {\r
  width: 100%;\r
  aspect-ratio: 16/9;\r
  border-radius: 8px;\r
  border: none;\r
  display: block;\r
}\r
\r
.ml-reviews-section {\r
  overflow: hidden;\r
}\r
\r
.ml-related-section {\r
  margin: 20px 0 8px;\r
\r
  padding: var(--ml-detail-pad) var(--ml-detail-pad) 8px;\r
  border-radius: 16px;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);\r
  background: var(--sk-palette-neutral-fafafa);\r
}\r
html.dark .ml-related-section {\r
  background: var(--sk-palette-neutral-0f0f11);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
\r
.ml-related-grid {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 20px;\r
}\r
@media (min-width: 640px) {\r
  .ml-related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
}\r
@media (min-width: 1280px) {\r
  .ml-related-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
}\r
\r
@keyframes card-bell-shake {\r
    0%, 100% { transform: none; }\r
}\r
\r
@keyframes card-neon-pulse {\r
    0%,\r
100% {\r
        box-shadow: 0 0 0 0 color-mix(in srgb, var(--sk-ds-accent) 0%, transparent),\r
                    0 0 18px 4px color-mix(in srgb, var(--sk-ds-accent) 45%, transparent),\r
                    0 2px 12px color-mix(in srgb, var(--sk-palette-neutral-000000) 15%, transparent);\r
        border-color: color-mix(in srgb, var(--sk-ds-accent) 70%, transparent);\r
    }\r
    50% {\r
        box-shadow: 0 0 0 6px color-mix(in srgb, var(--sk-ds-accent) 10%, transparent),\r
                    0 0 20px 5px color-mix(in srgb, var(--sk-ds-accent) 55%, transparent),\r
                    0 2px 18px color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent);\r
        border-color: var(--sk-ds-accent);\r
    }\r
}\r
\r
.ml-card-ring {\r
    animation: card-neon-pulse 0.7s ease-in-out 3;\r
    border-color: color-mix(in srgb, var(--sk-ds-accent) 80%, transparent) !important;\r
    box-shadow: 0 0 15px 3px color-mix(in srgb, var(--sk-ds-accent) 45%, transparent) !important;\r
    z-index: 5;\r
}\r
\r
.ml-product-card.animate-cart-shake,\r
.ml-product-card .animate-cart-shake {\r
    animation: none !important;\r
    transform: none !important;\r
}\r
\r
.ml-card-glow {\r
    border-color: var(--sk-accent) !important;\r
    transition: border-color 0.3s ease;\r
}\r
\r
html.dark .ml-card-ring {\r
    box-shadow: 0 0 18px 5px color-mix(in srgb, var(--sk-ds-accent) 50%, transparent) !important;\r
}\r
html.dark .ml-card-glow {\r
    border-color: var(--sk-ds-accent) !important;\r
\r
}\r
\r
.ml-detail-page {\r
  margin: 0 auto;\r
  padding: 0 clamp(12px, 2vw, 22px);\r
}\r
\r
.ml-breadcrumb-back {\r
  font-family: var(--sk-font-body);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 16%, transparent);\r
}\r
\r
.ml-detail-layout {\r
\r
  border-top: 1px solid color-mix(in srgb, var(--sk-palette-blue-111827) 8%, transparent);\r
}\r
\r
.ml-purchase-card {\r
  align-self: start;\r
  display: flex;\r
  flex-direction: column;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-blue-111827) 8%, transparent);\r
}\r
\r
.ml-purchase-offer-row {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 8px;\r
}\r
\r
.ml-purchase-offer-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  border-radius: 999px;\r
  font-size: 10px;\r
  line-height: 1;\r
  font-weight: 900;\r
  text-transform: uppercase;\r
}\r
\r
.ml-purchase-original {\r
  margin-top: 2px;\r
}\r
\r
.ml-purchase-pricing {\r
  margin-top: 4px;\r
  margin-bottom: 2px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
}\r
\r
.ml-purchase-from {\r
  font-size: 0.8125rem;\r
  font-weight: 500;\r
  line-height: 1.35;\r
}\r
\r
.ml-price-green {\r
  color: var(--sk-accent);\r
  font-weight: 700;\r
}\r
\r
html.dark .ml-price-green {\r
  color: var(--sk-ds-accent);\r
}\r
\r
.ml-purchase-installments {\r
  display: block;\r
  font-size: 0.75rem;\r
  font-weight: 500;\r
  color: var(--sk-palette-blue-64748b);\r
  margin-top: 3px;\r
  line-height: 1.3;\r
}\r
\r
html.dark .ml-purchase-installments {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 52%, transparent);\r
}\r
\r
.ml-purchase-actions {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 10px;\r
  margin-top: 14px;\r
  margin-bottom: 12px;\r
  width: 100%;\r
}\r
\r
.ml-purchase-primary {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 9px;\r
  width: 100%;\r
  font-weight: 700;\r
  cursor: pointer;\r
}\r
.ml-purchase-primary:active:not(:disabled) {\r
  transform: scale(0.985);\r
}\r
\r
.ml-purchase-all-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 9px;\r
  width: 100%;\r
  min-height: 48px;\r
  padding: 0 16px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: 13px;\r
  font-weight: 700;\r
  letter-spacing: -0.01em;\r
  line-height: 1;\r
  text-align: center;\r
  cursor: pointer;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);\r
  background: transparent;\r
  color: var(--sk-palette-blue-1e293b);\r
  transition: transform .12s ease, background .14s ease, border-color .14s ease, color .14s ease;\r
  box-shadow: none;\r
}\r
.ml-purchase-all-btn:hover:not(:disabled) {\r
  background: color-mix(in srgb, var(--sk-accent) 5%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
.ml-purchase-all-btn:active:not(:disabled) {\r
  transform: scale(0.985);\r
}\r
.ml-purchase-all-btn:disabled {\r
  cursor: not-allowed;\r
  opacity: 0.50;\r
  box-shadow: none !important;\r
}\r
html.dark .ml-purchase-all-btn {\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 42%, transparent);\r
  background: transparent;\r
  color: var(--sk-palette-blue-e2e8f0);\r
  box-shadow: none;\r
}\r
html.dark .ml-purchase-all-btn:hover:not(:disabled) {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 6%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 70%, transparent);\r
  color: var(--sk-palette-neutral-ffffff);\r
}\r
\r
.ml-product-facts-card {\r
  padding-top: 16px;\r
}\r
\r
.ml-product-facts-card h3 {\r
  margin: 0 0 12px;\r
  line-height: 1;\r
}\r
\r
.ml-product-facts-card dl {\r
  display: grid;\r
  margin: 0;\r
}\r
\r
.ml-product-facts-card div {\r
  display: grid;\r
  gap: 12px;\r
  align-items: baseline;\r
}\r
\r
.ml-product-facts-card dd {\r
  margin: 0;\r
  text-align: right;\r
  overflow-wrap: anywhere;\r
}\r
\r
html.dark .ml-product-facts-card {\r
  border-top-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
\r
.ml-main-image-container {\r
\r
  border: 2px solid color-mix(in srgb, var(--sk-accent) 55%, transparent);\r
}\r
\r
html.dark .ml-main-image-container {\r
  box-shadow:\r
    0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 30%, transparent),\r
    0 0 26px color-mix(in srgb, var(--sk-ds-accent) 26%, transparent);\r
}\r
\r
.ml-specs-section,\r
.ml-video-section,\r
.ml-reviews-section {\r
  margin-bottom: 18px;\r
}\r
.ml-specs-section {\r
  padding: var(--ml-detail-pad);\r
}\r
\r
.ml-description-content,\r
.ml-specs-content {\r
  color: var(--sk-light-t2);\r
}\r
\r
.ml-expand-btn,\r
.ml-gallery-action-btn {\r
  min-height: 36px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-weight: 800;\r
}\r
\r
.ml-expand-btn {\r
  border-color: color-mix(in srgb, var(--sk-accent) 28%, transparent);\r
  color: var(--sk-green);\r
  background: color-mix(in srgb, var(--sk-accent) 4%, transparent);\r
}\r
\r
html.dark .ml-expand-btn {\r
  border-color: color-mix(in srgb, var(--sk-accent) 28%, transparent);\r
  color: var(--sk-green-light);\r
  background: color-mix(in srgb, var(--sk-accent) 6%, transparent);\r
}\r
\r
.ml-reviews-body {\r
  padding: var(--ml-detail-pad);\r
}\r
\r
@keyframes ml-card-reflection-site-att {\r
  0%   { transform: skewX(-25deg) translateX(-300%); opacity: 0; }\r
  10%  { opacity: 0.8; }\r
  90%  { opacity: 0.8; }\r
  100% { transform: skewX(-25deg) translateX(300%); opacity: 0; }\r
}\r
\r
.home-icp-grid {\r
  gap: 20px;\r
  margin: 10px 0;\r
}\r
\r
.home-icp-grid .ml-product-card {\r
  width: 100%;\r
  min-height: 330px;\r
  height: auto;\r
  border-radius: 8px;\r
  border-width: 1.5px;\r
  transition:\r
    box-shadow 0.2s ease,\r
    border-color 0.2s ease !important;\r
}\r
\r
.ml-product-card::before {\r
  content: none !important;\r
}\r
\r
\r
.ml-product-info {\r
  padding: 12px;\r
  gap: 5px;\r
}\r
\r
.ml-price-area {\r
  min-height: 38px;\r
  margin: 3px 0 1px;\r
}\r
\r
@media (max-width: 992px) {\r
  .home-icp-grid .ml-product-card {\r
    min-height: 350px;\r
  }\r
}\r
\r
@media (max-width: 768px) {\r
  .home-icp-grid .ml-product-card {\r
    width: 100%;\r
    min-height: 350px;\r
  }\r
\r
  .ml-product-info {\r
    padding: 9px 10px;\r
    gap: 3px;\r
  }\r
\r
  .ml-price-area {\r
    min-height: 34px;\r
    margin: 2px 0 0;\r
  }\r
\r
  .ml-product-title {\r
    min-height: 2.3em;\r
    font-size: 0.86rem;\r
    line-height: 1.3;\r
  }\r
\r
  .ml-action-buttons {\r
    padding-top: 6px;\r
  }\r
\r
  .ml-btn-primary,\r
.ml-btn-rescue {\r
    height: 36px;\r
  }\r
\r
}\r
\r
@media (max-width: 576px) {\r
  .home-icp-grid .ml-product-card {\r
    min-height: 350px;\r
  }\r
\r
  .ml-product-title {\r
    font-size: 0.9rem;\r
    max-height: 38px;\r
  }\r
\r
  .ml-price-value {\r
    font-size: 1.1rem;\r
  }\r
}\r
\r
@media (max-width: 420px) {\r
  .home-icp-grid {\r
    row-gap: 24px;\r
  }\r
\r
  .home-icp-grid .ml-product-card {\r
    min-height: 360px;\r
  }\r
}\r
\r
.ml-detail-page {\r
  width: 100% !important;\r
  max-width: none !important;\r
  margin-inline: 0 !important;\r
  padding-inline: 0 !important;\r
  color: var(--sk-palette-blue-0f172a);\r
\r
  --ml-detail-pad: clamp(16px, 1.3vw, 22px);\r
}\r
\r
html.dark .ml-detail-page {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 90%, transparent);\r
}\r
\r
.ml-breadcrumb {\r
  padding: 16px 0 14px !important;\r
  margin-bottom: 8px !important;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
\r
.ml-breadcrumb-back {\r
  min-height: 30px !important;\r
  padding: 5px 10px !important;\r
  border-radius: var(--sk-r-sm, 6px) !important;\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: 11px !important;\r
  font-weight: 850 !important;\r
  color: var(--sk-palette-blue-0f172a) !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent) !important;\r
  background: var(--sk-palette-neutral-ffffff) !important;\r
  box-shadow: none !important;\r
}\r
\r
html.dark .ml-breadcrumb-back {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 82%, transparent) !important;\r
  border-color: var(--sk-palette-teal-26342f) !important;\r
  background: var(--sk-palette-teal-101715) !important;\r
  box-shadow: none !important;\r
}\r
\r
.ml-model-section {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 18px;\r
  width: 100%;\r
}\r
\r
.ml-detail-workspace {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 18px;\r
  width: 100%;\r
  align-items: stretch;\r
}\r
\r
.ml-detail-main,\r
.ml-detail-body {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 18px;\r
  min-width: 0;\r
  width: 100%;\r
}\r
\r
.ml-detail-layout {\r
\r
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.2fr) !important;\r
  gap: clamp(20px, 1.8vw, 28px) !important;\r
  padding: var(--ml-detail-pad) !important;\r
  margin-bottom: 0 !important;\r
  border-width: 1px !important;\r
  border-style: solid !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent) !important;\r
  border-radius: var(--sk-r-lg) !important;\r
  background: var(--sk-palette-neutral-ffffff) !important;\r
  box-shadow: 0 1px 2px color-mix(in srgb, var(--sk-palette-neutral-000000) 4%, transparent) !important;\r
  font-family: var(--sk-font-body, system-ui, sans-serif) !important;\r
}\r
\r
@media (min-width: 1181px) {\r
  .ml-detail-workspace {\r
    gap: 22px;\r
  }\r
}\r
\r
.ml-description-panel {\r
  padding: var(--ml-detail-pad);\r
  border-radius: var(--sk-r-lg);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
  background: var(--sk-palette-neutral-ffffff);\r
  box-shadow: none;\r
  min-width: 0;\r
  width: 100%;\r
}\r
html.dark .ml-description-panel {\r
  border-color: var(--sk-palette-teal-26342f);\r
  background: var(--sk-palette-teal-101715);\r
  box-shadow: none;\r
}\r
@media (max-width: 1180px) {\r
  .ml-description-panel .ml-description-content:not(.expanded) {\r
    max-height: min(40vh, 300px);\r
  }\r
}\r
\r
.ml-detail-page .ml-specs-section,\r
.ml-detail-page .ml-reviews-section,\r
.ml-detail-page .ml-related-section,\r
.ml-detail-page .ml-video-section,\r
.ml-detail-page .ml-description-panel,\r
.ml-detail-page .ml-detail-workspace {\r
  width: 100%;\r
  max-width: 100%;\r
  box-sizing: border-box;\r
}\r
\r
html.dark .ml-detail-layout {\r
  border-color: var(--sk-palette-teal-26342f) !important;\r
  background: var(--sk-palette-teal-101715) !important;\r
  box-shadow: 0 1px 2px color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent) !important;\r
}\r
\r
.ml-gallery-col {\r
  min-width: 0;\r
  gap: 14px !important;\r
}\r
\r
.ml-main-image-container {\r
  aspect-ratio: 1.42 / 1 !important;\r
  min-height: clamp(310px, 26vw, 430px);\r
  border-radius: 18px !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;\r
  background:\r
    radial-gradient(circle at 50% 35%, color-mix(in srgb, var(--sk-accent) 8%, transparent), transparent 54%),\r
    linear-gradient(135deg, var(--sk-palette-blue-f8fafc), var(--sk-palette-blue-eef2f7)) !important;\r
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--sk-palette-neutral-ffffff) 80%, transparent);\r
}\r
\r
html.dark .ml-main-image-container {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;\r
  background:\r
    radial-gradient(circle at 50% 36%, color-mix(in srgb, var(--sk-ds-accent) 12%, transparent), transparent 52%),\r
    linear-gradient(135deg, var(--sk-palette-blue-101418), var(--sk-palette-cyan-050708)) !important;\r
}\r
\r
.ml-main-image {\r
  padding: 12px !important;\r
  -o-object-fit: contain !important;\r
     object-fit: contain !important;\r
  -o-object-position: center !important;\r
     object-position: center !important;\r
  background: transparent;\r
}\r
\r
.ml-thumbs-row {\r
  gap: 10px !important;\r
  flex-wrap: nowrap !important;\r
  overflow-x: auto;\r
  overscroll-behavior-x: contain;\r
  scroll-snap-type: x proximity;\r
  scroll-padding-inline: 4px;\r
  padding-bottom: 6px;\r
\r
  scrollbar-width: thin;\r
  scrollbar-color: var(--sk-ds-line-strong, color-mix(in srgb, var(--sk-palette-neutral-7f7f7f) 40%, transparent)) transparent;\r
}\r
.ml-thumbs-row::-webkit-scrollbar { height: 6px; }\r
.ml-thumbs-row::-webkit-scrollbar-track { background: transparent; }\r
.ml-thumbs-row::-webkit-scrollbar-thumb {\r
  border-radius: 999px;\r
  background: var(--sk-ds-line-strong, color-mix(in srgb, var(--sk-palette-neutral-7f7f7f) 40%, transparent));\r
}\r
.ml-thumbs-row .ml-thumb-btn {\r
  flex: 0 0 auto;\r
  scroll-snap-align: start;\r
}\r
\r
.ml-thumb-btn {\r
\r
  width: 64px !important;\r
  height: 64px !important;\r
  border-radius: 14px !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 10%, transparent) !important;\r
  background: var(--sk-palette-neutral-ffffff) !important;\r
  box-shadow: 0 8px 22px color-mix(in srgb, var(--sk-palette-blue-0f172a) 5%, transparent);\r
}\r
\r
.ml-thumb-btn.active {\r
  border-color: var(--sk-accent) !important;\r
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sk-accent) 12%, transparent), 0 10px 26px color-mix(in srgb, var(--sk-accent) 12%, transparent) !important;\r
}\r
\r
html.dark .ml-thumb-btn {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4.5%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;\r
}\r
\r
html.dark .ml-thumb-btn.active {\r
  border-color: var(--sk-ds-accent) !important;\r
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sk-ds-accent) 14%, transparent), 0 12px 28px color-mix(in srgb, var(--sk-ds-accent) 12%, transparent) !important;\r
}\r
\r
.ml-info-col {\r
  gap: 16px !important;\r
  padding-top: 4px;\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);\r
}\r
\r
.ml-model-title {\r
  margin: 0 !important;\r
  text-transform: none !important;\r
}\r
\r
.ml-purchase-card {\r
  position: static !important;\r
  top: auto !important;\r
  bottom: auto !important;\r
  left: auto !important;\r
  right: auto !important;\r
  max-height: none !important;\r
  overflow: visible !important;\r
  transform: none !important;\r
  inset: auto !important;\r
}\r
\r
.ml-purchase-card {\r
  width: 100%;\r
  background: var(--sk-palette-neutral-ffffff) !important;\r
  font-family: var(--sk-font-body, system-ui, sans-serif);\r
}\r
\r
html.dark .ml-purchase-card {\r
  background:\r
    radial-gradient(circle at 25% 0%, color-mix(in srgb, var(--sk-ds-accent) 10%, transparent), transparent 34%),\r
    var(--sk-palette-cyan-0b0e10) !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;\r
}\r
\r
.ml-product-facts-card {\r
  margin-top: 0 !important;\r
  border: 0 !important;\r
  background: transparent !important;\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;\r
}\r
\r
html.dark .ml-product-facts-card {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;\r
  background:\r
    transparent !important;\r
}\r
\r
.ml-product-facts-card h3 {\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;\r
  font-weight: 850 !important;\r
  color: var(--sk-palette-blue-0f172a) !important;\r
}\r
\r
html.dark .ml-product-facts-card h3 {\r
  color: var(--sk-palette-blue-f8fafc) !important;\r
}\r
\r
.ml-product-facts-card dt {\r
  color: var(--sk-ds-t2) !important;\r
  font-weight: 750 !important;\r
}\r
\r
.ml-product-facts-card dd {\r
  color: var(--sk-palette-blue-172033) !important;\r
  font-weight: 850 !important;\r
}\r
\r
html.dark .ml-product-facts-card dt {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 52%, transparent) !important;\r
}\r
\r
html.dark .ml-product-facts-card dd {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 86%, transparent) !important;\r
}\r
\r
.ml-purchase-primary {\r
  min-height: 48px !important;\r
  border-radius: var(--sk-r-sm, 6px) !important;\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: 13px !important;\r
  letter-spacing: -0.01em;\r
  background: color-mix(in srgb, var(--sk-accent) 9%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent) !important;\r
  box-shadow: none !important;\r
  transition: transform .12s ease, background .14s ease, border-color .14s ease;\r
}\r
.ml-purchase-primary:hover:not(:disabled) {\r
  background: color-mix(in srgb, var(--sk-accent) 18%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
}\r
.ml-purchase-primary:disabled {\r
  opacity: 0.55 !important;\r
  cursor: not-allowed !important;\r
}\r
html.dark .ml-purchase-primary {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 42%, transparent) !important;\r
  box-shadow: none !important;\r
}\r
html.dark .ml-purchase-primary:hover:not(:disabled) {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 22%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 70%, transparent) !important;\r
  color: var(--sk-palette-teal-6ee7b7) !important;\r
}\r
.ml-purchase-primary.in-cart {\r
  background: color-mix(in srgb, var(--sk-accent) 14%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
}\r
html.dark .ml-purchase-primary.in-cart {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 18%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 55%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
}\r
.ml-specs-section,\r
.ml-video-section,\r
.ml-reviews-section {\r
  border-radius: var(--sk-r-lg) !important;\r
  border-width: 1px !important;\r
  border-style: solid !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent) !important;\r
  background: var(--sk-palette-neutral-ffffff) !important;\r
  box-shadow: none !important;\r
}\r
\r
html.dark .ml-specs-section,\r
html.dark .ml-video-section,\r
html.dark .ml-reviews-section {\r
  border-color: var(--sk-palette-teal-26342f) !important;\r
  background: var(--sk-palette-teal-101715) !important;\r
  box-shadow: none !important;\r
}\r
\r
@media (min-width: 1600px) {\r
  .ml-detail-layout {\r
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.15fr) !important;\r
  }\r
\r
  .ml-main-image-container {\r
    min-height: 455px;\r
  }\r
}\r
\r
@media (max-width: 1180px) {\r
  .ml-detail-layout {\r
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;\r
  }\r
}\r
\r
@media (max-width: 768px) {\r
  .ml-detail-page {\r
    width: min(100%, calc(100% - 20px)) !important;\r
  }\r
\r
  .ml-breadcrumb {\r
    padding-top: 10px !important;\r
  }\r
\r
  .ml-detail-layout {\r
    grid-template-columns: minmax(0, 1fr) !important;\r
    gap: 16px !important;\r
    border-radius: 18px !important;\r
  }\r
\r
  .ml-main-image-container {\r
    min-height: 250px;\r
    aspect-ratio: 1.1 / 1 !important;\r
  }\r
\r
  .ml-purchase-card,\r
.ml-product-facts-card {\r
    padding: 16px !important;\r
    border-radius: 18px !important;\r
  }}\r
\r
.ml-detail-page {\r
  font-family: var(--sk-font-body, system-ui, sans-serif);\r
}\r
\r
.ml-model-title {\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;\r
  font-size: clamp(1.375rem, 1.75vw, 1.625rem) !important;\r
  font-weight: 800 !important;\r
  line-height: 1.2 !important;\r
  letter-spacing: -0.015em !important;\r
  word-spacing: normal;\r
  color: var(--sk-palette-blue-111827) !important;\r
  text-shadow: none !important;\r
}\r
\r
html.dark .ml-model-title {\r
  color: var(--sk-palette-blue-f8fafc) !important;\r
  text-shadow: none !important;\r
}\r
\r
.ml-purchase-card {\r
  border-radius: var(--sk-r-lg) !important;\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent) !important;\r
  box-shadow: none !important;\r
  gap: 13px !important;\r
  padding: 18px !important;\r
}\r
\r
.ml-purchase-offer-row {\r
  min-height: 25px;\r
}\r
\r
.ml-purchase-offer-badge {\r
  height: 23px !important;\r
  min-height: 23px !important;\r
  padding: 0 9px !important;\r
  color: var(--sk-accent) !important;\r
  background: color-mix(in srgb, var(--sk-accent) 8%, transparent) !important;\r
}\r
.ml-purchase-offer-badge.ml-purchase-offer-badge--vip {\r
  color: var(--sk-ds-premium) !important;\r
  background: var(--sk-ds-premium-soft) !important;\r
  border: 1px solid var(--sk-ds-premium-line) !important;\r
}\r
html.dark .ml-purchase-offer-badge.ml-purchase-offer-badge--vip {\r
  box-shadow: 0 0 12px color-mix(in srgb, var(--sk-palette-cyan-00e5ff) 24%, transparent);\r
}\r
\r
.ml-money,\r
.ml-purchase-original {\r
  font-variant-numeric: tabular-nums;\r
  font-feature-settings: 'tnum' 1;\r
  letter-spacing: -0.01em;\r
}\r
\r
.ml-price-value,\r
.ml-money.ml-price-value {\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;\r
  font-size: 1.5rem !important;\r
  font-weight: 900 !important;\r
  line-height: 1.15 !important;\r
  letter-spacing: normal !important;\r
  font-variant-numeric: normal;\r
  font-feature-settings: 'tnum' 0;\r
  text-shadow: none !important;\r
  filter: none !important;\r
}\r
\r
.ml-purchase-original {\r
  color: var(--sk-palette-blue-7f8b9d);\r
  font-size: 0.78rem !important;\r
  font-weight: 500 !important;\r
  text-decoration: none;\r
  line-height: 1.2;\r
}\r
\r
.ml-purchase-price {\r
  color: var(--sk-palette-blue-1e293b);\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;\r
  font-size: 1.5rem !important;\r
  font-weight: 900 !important;\r
  line-height: 1.15 !important;\r
  letter-spacing: normal !important;\r
}\r
\r
html.dark .ml-purchase-price {\r
  color: var(--sk-palette-neutral-f1f1f1);\r
  text-shadow: none;\r
}\r
\r
.ml-purchase-avista {\r
  margin: 2px 0 0 0;\r
  color: var(--sk-accent);\r
  font-size: 0.8125rem;\r
  font-weight: 500;\r
  line-height: 1.35;\r
}\r
\r
html.dark .ml-purchase-avista {\r
  color: var(--sk-ds-accent);\r
}\r
\r
.ml-product-facts-card {\r
  padding: 14px 4px 0 !important;\r
  border-top: 1px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;\r
  border-radius: 0 !important;\r
  box-shadow: none !important;\r
}\r
\r
.ml-product-facts-card h3 {\r
  margin-bottom: 10px !important;\r
  font-size: 13.5px !important;\r
  letter-spacing: -0.01em !important;\r
}\r
\r
.ml-product-facts-card dl {\r
  gap: 0 !important;\r
}\r
\r
.ml-product-facts-card div {\r
  grid-template-columns: minmax(104px, 1fr) minmax(0, 1fr) !important;\r
  padding: 6px 0 !important;\r
  border-bottom: 1px dashed color-mix(in srgb, var(--sk-palette-blue-0f172a) 7%, transparent);\r
}\r
\r
html.dark .ml-product-facts-card div {\r
  border-bottom-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
\r
.ml-product-facts-card div:last-child {\r
  border-bottom: 0;\r
}\r
\r
.ml-product-facts-card dt,\r
.ml-product-facts-card dd {\r
  font-size: 12px !important;\r
  line-height: 1.45 !important;\r
}\r
\r
.ml-gallery-action-btn {\r
  font-size: 11px !important;\r
  font-weight: 800 !important;\r
  color: var(--sk-palette-blue-64748b) !important;\r
}\r
\r
.ml-gallery-action-btn:hover,\r
.ml-gallery-action-btn.active {\r
  color: var(--sk-accent) !important;\r
}\r
\r
@media (max-width: 768px) {\r
  .ml-model-title {\r
    font-size: 18px !important;\r
    line-height: 1.2 !important;\r
    word-spacing: 0 !important;\r
    letter-spacing: -0.01em !important;\r
  }\r
\r
  .ml-purchase-price:not(.ml-purchase-price--guest) {\r
    font-size: 1.25rem !important;\r
    font-weight: 900 !important;\r
    letter-spacing: normal !important;\r
  }\r
\r
  .ml-price-value {\r
    font-size: 1.25rem !important;\r
    font-weight: 900 !important;\r
  }\r
}\r
\r
.ml-info-subtitle {\r
  margin: -6px 0 0;\r
  font-size: 0.9375rem;\r
  line-height: 1.55;\r
  color: var(--sk-palette-neutral-5b6472);\r
  font-weight: 550;\r
}\r
html.dark .ml-info-subtitle { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent); }\r
\r
.ml-info-social {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
.ml-info-bestseller {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  min-height: 24px;\r
  padding: 0 10px;\r
  border-radius: 999px;\r
  font-size: 0.72rem;\r
  font-weight: 800;\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
  color: var(--sk-palette-red-c2410c);\r
  background: color-mix(in srgb, var(--sk-palette-red-ea580c) 10%, transparent);\r
}\r
html.dark .ml-info-bestseller { color: var(--sk-palette-red-fb923c); background: color-mix(in srgb, var(--sk-palette-red-fb923c) 12%, transparent); }\r
\r
.ml-detail-stars { display: inline-flex; align-items: center; gap: 2px; }\r
\r
.ml-detail-page .ml-description-content,\r
.ml-detail-page .ml-specs-content {\r
  font-family: var(--sk-font-body, system-ui, sans-serif);\r
  font-size: var(--sk-text-md, 0.9375rem);\r
  line-height: 1.68;\r
  font-weight: 500;\r
}\r
\r
.ml-detail-page .ml-description-content h1,\r
.ml-detail-page .ml-description-content h2,\r
.ml-detail-page .ml-description-content h3,\r
.ml-detail-page .ml-specs-content h1,\r
.ml-detail-page .ml-specs-content h2,\r
.ml-detail-page .ml-specs-content h3 {\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);\r
  font-size: var(--sk-text-lg, 1.0625rem);\r
  line-height: 1.3;\r
  font-weight: 800;\r
}\r
\r
.ml-detail-page .ml-breadcrumb-back {\r
  font-size: var(--sk-text-sm, 0.8125rem);\r
  line-height: 1.2;\r
}\r
\r
@media (max-width: 767px) {\r
  .ml-detail-page {\r
    width: calc(100vw - 24px) !important;\r
  }\r
\r
  .ml-breadcrumb {\r
    padding: 10px 0 8px !important;\r
    margin-bottom: 6px !important;\r
  }\r
\r
  .ml-breadcrumb-back {\r
    font-size: 11px !important;\r
    line-height: 1.15 !important;\r
  }\r
\r
  .ml-detail-layout {\r
    gap: 14px !important;\r
    border-radius: 14px !important;\r
    margin-bottom: 14px !important;\r
  }\r
\r
  .ml-main-image-container {\r
    min-height: 220px !important;\r
    border-radius: 12px !important;\r
  }\r
\r
  .ml-thumbs-row {\r
    gap: 8px !important;\r
  }\r
\r
  .ml-thumb-btn {\r
    width: 52px !important;\r
    height: 52px !important;\r
    border-radius: 10px !important;\r
  }\r
\r
  .ml-gallery-action-btn {\r
    min-height: 30px !important;\r
    padding: 0 10px !important;\r
    font-size: 11px !important;\r
    line-height: 1 !important;\r
  }\r
\r
  .ml-info-col {\r
    gap: 10px !important;\r
    padding-top: 0 !important;\r
  }\r
\r
  .ml-model-title {\r
    font-size: 18px !important;\r
    line-height: 1.2 !important;\r
    letter-spacing: -0.01em !important;\r
    word-spacing: 0 !important;\r
  }\r
\r
  .ml-info-subtitle {\r
    margin-top: -2px !important;\r
    font-size: 13px !important;\r
    line-height: 1.5 !important;\r
    font-weight: 650 !important;\r
  }\r
\r
  .ml-info-bestseller {\r
    min-height: 22px !important;\r
    padding: 0 8px !important;\r
    font-size: 10.5px !important;\r
    letter-spacing: 0.03em !important;\r
  }\r
\r
  .ml-description-section--inline,\r
.ml-specs-section {\r
    padding: 12px !important;\r
    border-radius: 12px !important;\r
  }\r
\r
  .ml-detail-page .ml-description-content,\r
.ml-detail-page .ml-specs-content {\r
    font-size: var(--sk-text-sm, 0.8125rem);\r
    line-height: 1.62;\r
  }\r
\r
  .ml-detail-page .ml-description-content h1,\r
.ml-detail-page .ml-description-content h2,\r
.ml-detail-page .ml-description-content h3,\r
.ml-detail-page .ml-specs-content h1,\r
.ml-detail-page .ml-specs-content h2,\r
.ml-detail-page .ml-specs-content h3 {\r
    font-size: var(--sk-text-md, 0.9375rem);\r
  }\r
\r
  .ml-expand-btn {\r
    min-height: 40px;\r
    padding: 10px 12px;\r
    font-size: var(--sk-text-sm, 0.8125rem);\r
  }\r
\r
  .ml-description-section--inline .ml-description-content:not(.expanded) {\r
    max-height: min(38vh, 280px);\r
  }\r
\r
  .ml-purchase-card,\r
.ml-product-facts-card {\r
    padding: 14px !important;\r
    border-radius: 14px !important;\r
  }\r
\r
  .ml-purchase-offer-badge {\r
    min-height: 22px !important;\r
    height: 22px !important;\r
    padding: 0 8px !important;\r
    font-size: 10.5px !important;\r
    line-height: 1 !important;\r
  }\r
\r
  .ml-purchase-original {\r
    font-size: 12px !important;\r
  }\r
\r
  .ml-purchase-price:not(.ml-purchase-price--guest) {\r
    font-size: 1.25rem !important;\r
    font-weight: 900 !important;\r
    line-height: 1.15 !important;\r
    letter-spacing: normal !important;\r
  }\r
\r
  .ml-price-value {\r
    font-size: 1.25rem !important;\r
    font-weight: 900 !important;\r
    line-height: 1.15 !important;\r
    letter-spacing: normal !important;\r
  }\r
\r
  .ml-buy-now-btn {\r
    min-height: 40px !important;\r
    padding: 0 14px !important;\r
    font-size: 13px !important;\r
  }\r
\r
  .ml-purchase-primary,\r
  .ml-purchase-all-btn {\r
    min-height: 38px !important;\r
    border-radius: var(--sk-r-sm, 6px) !important;\r
    font-size: 12px !important;\r
    line-height: 1 !important;\r
  }\r
\r
  .ml-purchase-avista {\r
    font-size: 11px !important;\r
    line-height: 1.35 !important;\r
  }\r
\r
  .ml-product-facts-card h3 {\r
    font-size: 12.5px !important;\r
    line-height: 1.25 !important;\r
  }\r
\r
  .ml-product-facts-card dl {\r
    gap: 7px !important;\r
  }\r
\r
  .ml-product-facts-card div {\r
    grid-template-columns: minmax(86px, 1fr) minmax(0, 1fr) !important;\r
  }\r
\r
  .ml-product-facts-card dt,\r
.ml-product-facts-card dd {\r
    font-size: 11.5px !important;\r
    line-height: 1.4 !important;\r
  }\r
}\r
\r
@media (max-width: 380px) {\r
  .ml-detail-page {\r
    width: calc(100vw - 18px) !important;\r
  }\r
\r
  .ml-model-title {\r
    font-size: 18px !important;\r
    line-height: 1.18 !important;\r
  }\r
\r
  .ml-info-subtitle {\r
    font-size: 12px !important;\r
  }\r
\r
  .ml-detail-page .ml-description-content,\r
.ml-detail-page .ml-specs-content {\r
    font-size: 11.5px !important;\r
  }\r
\r
  .ml-purchase-price:not(.ml-purchase-price--guest) {\r
    font-size: 1.15rem !important;\r
    font-weight: 900 !important;\r
    letter-spacing: normal !important;\r
  }\r
\r
  .ml-price-value {\r
    font-size: 1.15rem !important;\r
    font-weight: 900 !important;\r
    letter-spacing: normal !important;\r
  }\r
}\r
\r
.ml-action-buttons .ml-btn-primary,\r
.ml-action-buttons .ml-btn-rescue {\r
  height: var(--sk-control-h-md) !important;\r
  min-height: var(--sk-control-h-md) !important;\r
}\r
\r
.ml-btn-primary.in-cart {\r
  background: linear-gradient(135deg, var(--sk-green-dark), var(--sk-green), var(--sk-green-light)) !important;\r
  box-shadow: var(--sk-shadow-brand) !important;\r
}\r
\r
.ml-btn-primary.in-cart:hover {\r
  background: linear-gradient(135deg, var(--sk-green), var(--sk-green-light)) !important;\r
}\r
\r
.ml-product-title,\r
.home-icp-grid .ml-product-title,\r
.home-offers-rail .ml-product-title {\r
  display: -webkit-box;\r
  -webkit-line-clamp: 2;\r
  line-clamp: 2;\r
  -webkit-box-orient: vertical;\r
  overflow: hidden;\r
  line-height: 1.35;\r
  min-height: 2.7em;\r
  max-height: 2.7em;\r
  box-sizing: border-box;\r
}\r
\r
.ml-product-card .ml-product-title.sk-card-title.ml-product-title--commercial {\r
  display: block;\r
  -webkit-line-clamp: unset;\r
  line-clamp: unset;\r
  overflow: visible;\r
  overflow-wrap: anywhere;\r
  white-space: normal;\r
  min-height: 2.7em !important;\r
  max-height: none !important;\r
  height: auto;\r
}\r
\r
.ml-btn-ghost {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  height: 42px;\r
  min-height: 42px;\r
  box-sizing: border-box;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1.5px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 16%, transparent);\r
  background: transparent;\r
  color: var(--sk-palette-blue-334155);\r
  font-size: 0.78rem;\r
  font-weight: 700;\r
  cursor: pointer;\r
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;\r
}\r
html.dark .ml-btn-ghost { border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 14%, transparent); color: var(--sk-palette-blue-cbd5e1); }\r
.ml-btn-ghost:hover { background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 5%, transparent); }\r
html.dark .ml-btn-ghost:hover { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent); }\r
\r
.ml-purchase-price.ml-purchase-price--guest {\r
  color: var(--sk-palette-orange-f59e0b) !important;\r
  font-size: var(--sk-text-md, 0.9375rem) !important;\r
  font-weight: 700 !important;\r
  line-height: 1.3 !important;\r
  letter-spacing: normal !important;\r
  font-variant-numeric: normal;\r
  text-shadow: none !important;\r
}\r
html:not(.dark) .ml-purchase-price.ml-purchase-price--guest { color: var(--sk-palette-orange-d97706) !important; }\r
\r
.ml-card-badges {\r
  position: relative;\r
  z-index: 2;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 100%;\r
  min-height: 24px;\r
  height: 24px;\r
  padding: 0;\r
  margin: 0;\r
  flex-shrink: 0;\r
  border-top-left-radius: inherit;\r
  border-top-right-radius: inherit;\r
  overflow: hidden;\r
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-green-dcfce7) 76%, transparent) 0%, color-mix(in srgb, var(--sk-palette-green-f0fdf4) 55%, transparent) 100%);\r
  backdrop-filter: blur(10px);\r
  -webkit-backdrop-filter: blur(10px);\r
  border: none;\r
  border-bottom: 1px solid color-mix(in srgb, var(--sk-ds-accent) 22%, transparent);\r
  box-shadow: none;\r
  box-sizing: border-box;\r
}\r
\r
html.dark .ml-card-badges {\r
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-teal-08140e) 68%, transparent) 0%, color-mix(in srgb, var(--sk-palette-teal-06100b) 45%, transparent) 100%);\r
  backdrop-filter: blur(10px);\r
  -webkit-backdrop-filter: blur(10px);\r
  border: none;\r
  border-bottom: 1px solid color-mix(in srgb, var(--sk-palette-teal-00e092) 25%, transparent);\r
  box-shadow: none;\r
}\r
\r
.ml-card-badges .ml-badge-digital,\r
.ml-badge-digital {\r
  display: inline-flex !important;\r
  align-items: center !important;\r
  justify-content: center !important;\r
  width: 100% !important;\r
  min-height: 24px !important;\r
  height: 24px !important;\r
  padding: 0 10px !important;\r
  border-radius: var(--sk-r-sm) !important;\r
  border: none !important;\r
  background: transparent !important;\r
  color: var(--sk-palette-blue-0f172a) !important;\r
  font-size: 0.58rem !important;\r
  font-weight: 800 !important;\r
  letter-spacing: 0.04em !important;\r
  text-transform: uppercase !important;\r
  white-space: nowrap !important;\r
  box-shadow: none !important;\r
  animation: none !important;\r
}\r
\r
html.dark .ml-card-badges .ml-badge-digital,\r
html.dark .ml-badge-digital {\r
  color: var(--sk-palette-neutral-ffffff) !important;\r
}\r
\r
.ml-badge-item {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
}\r
\r
.ml-badge-icon {\r
  flex-shrink: 0;\r
}\r
.ml-badge-icon-zap {\r
  color: var(--sk-palette-green-00a650);\r
  fill: var(--sk-palette-green-00a650);\r
}\r
html.dark .ml-badge-icon-zap {\r
  color: var(--sk-palette-teal-00e092);\r
  fill: var(--sk-palette-teal-00e092);\r
}\r
\r
.ml-product-card { min-height: 350px; }\r
.ml-product-img-area {\r
  position: relative;\r
  width: 100%;\r
  flex: 0 0 208px;\r
  height: 208px;\r
  min-height: 208px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: space-between;\r
  overflow: hidden;\r
  border-top-left-radius: inherit;\r
  border-top-right-radius: inherit;\r
}\r
.ml-product-img-wrapper {\r
  position: relative;\r
  flex: 1 1 auto;\r
  width: 100%;\r
  height: 160px;\r
  min-height: 160px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  z-index: 1;\r
  overflow: hidden;\r
  padding: 0;\r
  margin: 0;\r
  box-sizing: border-box;\r
  cursor: zoom-in;\r
}\r
.ml-product-img {\r
  position: relative;\r
  width: 100%;\r
  height: 100%;\r
  max-width: 100%;\r
  max-height: 100%;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
  -o-object-position: center;\r
     object-position: center;\r
  display: block;\r
  pointer-events: auto;\r
  transition: transform .2s ease, opacity .2s ease;\r
  transition-duration: .2s !important;\r
  will-change: transform;\r
  transform: translateZ(0);\r
}\r
.ml-product-info {\r
  position: relative;\r
  z-index: 3;\r
  display: flex;\r
  flex-direction: column;\r
  flex: 1 1 auto;\r
}\r
\r
.ml-product-card.ml-product-card--minimal .ml-product-img-area {\r
  border-top-left-radius: inherit;\r
  border-top-right-radius: inherit;\r
  min-height: 208px;\r
  height: 208px;\r
}\r
.ml-product-card.ml-product-card--minimal .ml-favorite-btn {\r
  top: 10px;\r
  right: 10px;\r
}\r
\r
.ml-card-footer {\r
  margin-top: auto;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 6px;\r
  padding-top: 6px;\r
}\r
.ml-card-footer .ml-action-buttons {\r
  margin-top: 0;\r
  padding-top: 0;\r
}\r
\r
.ml-card-collection-strip,\r
.ml-product-collection-kicker {\r
  position: relative;\r
  z-index: 2;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 5px;\r
  width: 100%;\r
  min-height: 26px;\r
  height: 26px;\r
  padding: 0 10px;\r
  margin: 0;\r
  flex-shrink: 0;\r
  box-sizing: border-box;\r
  background: linear-gradient(110deg, var(--sk-palette-teal-0c1110), var(--sk-palette-teal-101715) 50%, var(--sk-palette-teal-0c1110));\r
  border: 0;\r
  border-top: 2px solid color-mix(in srgb, var(--sk-home-ui-accent) 60%, var(--sk-palette-teal-26342f));\r
  border-bottom: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  border-radius: 0;\r
  overflow: hidden;\r
  -webkit-user-select: none;\r
     -moz-user-select: none;\r
          user-select: none;\r
  color: var(--sk-palette-neutral-f3f7f5);\r
}\r
\r
.home-offers-rail .ml-product-card {\r
  border-color: var(--sk-border-premium) !important;\r
  box-shadow: none !important;\r
  transition: none !important;\r
}\r
@media (min-width: 769px) {\r
  .home-offers-rail .ml-product-card:not(:hover) {\r
    border-color: var(--sk-border-premium) !important;\r
    box-shadow: none !important;\r
  }\r
}\r
@media (min-width: 769px) and (hover: hover) {\r
  .home-offers-rail .ml-product-card[data-rail-visible="true"]:hover {\r
    border-color: var(--sk-card-active-bd, var(--sk-ds-accent)) !important;\r
    box-shadow: none !important;\r
  }\r
}\r
.home-offers-rail .ml-product-card:not([data-rail-visible="true"]):not([data-mobile-focused="true"]) {\r
  border-color: var(--sk-border-premium) !important;\r
  box-shadow: none !important;\r
  animation: none !important;\r
  z-index: auto !important;\r
}\r
\r
.ml-card-collection-strip[data-cover-palette="ready"] {\r
  background: linear-gradient(110deg,\r
    rgb(var(--collection-background)), rgb(var(--collection-surface)) 50%,\r
    rgb(var(--collection-background)));\r
  color: rgb(var(--collection-edge));\r
  border-top-color: rgb(var(--collection-edge));\r
  border-bottom: 1px solid rgb(var(--collection-foreground) / .1);\r
  box-shadow: 0 -2px 8px rgb(var(--collection-edge) / .28),\r
    inset 0 1px 4px rgb(var(--collection-edge) / .12);\r
}\r
\r
.ml-card-collection-strip .ml-collection-badge-icon,\r
.ml-product-collection-kicker .ml-collection-badge-icon {\r
  flex-shrink: 0;\r
  color: inherit;\r
  fill: none;\r
  width: 12px;\r
  height: 12px;\r
  display: block;\r
  transform: translateY(-.5px);\r
}\r
\r
.ml-card-collection-strip .ml-collection-badge-text,\r
.ml-product-collection-kicker .ml-collection-badge-text {\r
  font-size: .6rem;\r
  font-weight: 800;\r
  letter-spacing: .06em;\r
  text-transform: uppercase;\r
  color: inherit;\r
  line-height: 1;\r
  display: block;\r
  text-shadow: 0 1px 2px rgb(var(--collection-background) / .7);\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  max-width: calc(100% - 24px);\r
}\r
\r
.ml-btn-buy-now, .ml-btn-cart {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  width: 100%;\r
  min-height: 48px;\r
  padding: 10px 12px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: .8125rem;\r
  font-weight: 700;\r
  line-height: 1.4;\r
  letter-spacing: .02em;\r
  cursor: pointer;\r
  box-shadow: none;\r
  transition: transform .12s ease, background .14s ease, border-color .14s ease, color .14s ease;\r
}\r
\r
.ml-btn-buy-now {\r
  background: color-mix(in srgb, var(--sk-accent) 9%, transparent);\r
  color: var(--sk-ds-accent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);\r
}\r
.ml-btn-buy-now:hover {\r
  background: color-mix(in srgb, var(--sk-accent) 18%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
.ml-btn-buy-now:active {\r
  transform: scale(0.985);\r
}\r
.ml-btn-buy-now:focus-visible {\r
  outline: 2px solid color-mix(in srgb, var(--sk-accent) 50%, transparent);\r
  outline-offset: 2px;\r
}\r
\r
html.dark .ml-btn-buy-now {\r
  background: var(--sk-ds-accent);\r
  color: var(--sk-palette-teal-050807);\r
  border: 1px solid var(--sk-ds-accent);\r
  font-weight: 800;\r
}\r
html.dark .ml-btn-buy-now:hover {\r
  background: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0));\r
  border-color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0));\r
  color: var(--sk-palette-teal-050807);\r
}\r
html.dark .ml-btn-buy-now:active {\r
  transform: scale(0.985);\r
}\r
html.dark .ml-btn-buy-now:focus-visible {\r
  outline: 2px solid var(--sk-ds-accent);\r
  outline-offset: 2px;\r
}\r
\r
.ml-btn-cart {\r
  background: transparent;\r
  color: var(--sk-palette-blue-1e293b);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);\r
}\r
.ml-btn-cart:hover {\r
  background: color-mix(in srgb, var(--sk-accent) 5%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
.ml-btn-cart:active {\r
  transform: scale(0.985);\r
}\r
.ml-btn-cart:focus-visible {\r
  outline: 2px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);\r
  outline-offset: 2px;\r
}\r
\r
html.dark .ml-btn-cart {\r
  background: var(--sk-palette-teal-101715);\r
  color: var(--sk-palette-neutral-f3f7f5);\r
  border: 1px solid var(--sk-palette-teal-26342f);\r
  font-weight: 700;\r
}\r
html.dark .ml-btn-cart:hover {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, var(--sk-palette-teal-101715));\r
  border-color: var(--sk-ds-accent);\r
  color: var(--sk-ds-accent);\r
}\r
html.dark .ml-btn-cart:active {\r
  transform: scale(0.985);\r
}\r
html.dark .ml-btn-cart:focus-visible {\r
  outline: 2px solid var(--sk-ds-accent);\r
  outline-offset: 2px;\r
}\r
\r
.ml-btn-cart.in-cart {\r
  background: color-mix(in srgb, var(--sk-accent) 14%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 45%, transparent) !important;\r
}\r
.ml-btn-cart.in-cart:hover {\r
  background: color-mix(in srgb, var(--sk-accent) 20%, transparent) !important;\r
  border-color: color-mix(in srgb, var(--sk-accent) 60%, transparent) !important;\r
}\r
html.dark .ml-btn-cart.in-cart {\r
  background: var(--sk-palette-teal-101715) !important;\r
  color: var(--sk-ds-accent) !important;\r
  border: 1px solid var(--sk-ds-accent) !important;\r
}\r
html.dark .ml-btn-cart.in-cart:hover {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, var(--sk-palette-teal-101715)) !important;\r
  border-color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0)) !important;\r
  color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0)) !important;\r
}\r
\r
.ml-action-buttons--split {\r
  display: flex;\r
  align-items: stretch;\r
  gap: 8px;\r
  width: 100%;\r
}\r
\r
.ml-action-buttons--split .ml-btn-buy-now {\r
  flex: 1 1 auto;\r
  width: auto;\r
  min-width: 0;\r
}\r
\r
.ml-btn-cart--icon-square {\r
  flex: 0 0 48px;\r
  width: 48px;\r
  min-width: 48px;\r
  height: 48px;\r
  min-height: 48px;\r
  padding: 0;\r
  aspect-ratio: 1 / 1;\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);\r
  color: var(--sk-ds-accent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 45%, transparent);\r
}\r
\r
html.dark .ml-btn-cart--icon-square {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 14%, var(--sk-palette-teal-101715));\r
  color: var(--sk-ds-accent);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 48%, transparent);\r
}\r
\r
.ml-version-picker {\r
  margin-bottom: 14px;\r
}\r
\r
.ml-version-picker__label {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  margin-bottom: 8px;\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: var(--sk-text-2xs);\r
  font-weight: 800;\r
  letter-spacing: 0.08em;\r
  text-transform: uppercase;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
\r
html.dark .ml-version-picker__label { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent); }\r
\r
.ml-version-picker__list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.ml-version-option {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  width: 100%;\r
  padding: 11px 12px;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 10%, transparent);\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: var(--sk-palette-neutral-ffffff);\r
  text-align: left;\r
  cursor: pointer;\r
  transition: border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;\r
}\r
\r
html.dark .ml-version-option {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 9%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
}\r
\r
.ml-version-option:hover { border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent); }\r
html.dark .ml-version-option:hover { border-color: color-mix(in srgb, var(--sk-ds-accent) 42%, transparent); }\r
\r
.ml-version-option:focus-visible {\r
  outline: none;\r
  border-color: var(--sk-accent);\r
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sk-accent) 18%, transparent);\r
}\r
\r
.ml-version-option.is-selected {\r
  border-color: var(--sk-accent);\r
  background: color-mix(in srgb, var(--sk-accent) 6%, transparent);\r
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
}\r
\r
html.dark .ml-version-option.is-selected {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 55%, transparent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 9%, transparent);\r
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 28%, transparent);\r
}\r
\r
.ml-version-option__mark {\r
  flex-shrink: 0;\r
  width: 17px;\r
  height: 17px;\r
  border-radius: 5px;\r
  border: 2px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 22%, transparent);\r
  display: grid;\r
  place-items: center;\r
  color: var(--sk-palette-neutral-ffffff);\r
  transition: border-color 0.18s ease, background 0.18s ease;\r
}\r
\r
html.dark .ml-version-option__mark { border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 26%, transparent); }\r
\r
.ml-version-option.is-selected .ml-version-option__mark {\r
  border-color: var(--sk-accent);\r
  background: var(--sk-accent);\r
}\r
\r
html.dark .ml-version-option.is-selected .ml-version-option__mark {\r
  border-color: var(--sk-ds-accent);\r
  background: var(--sk-ds-accent);\r
  color: var(--sk-palette-teal-04120c);\r
}\r
\r
.ml-version-option.is-preview {\r
  border-style: dashed;\r
  border-color: color-mix(in srgb, var(--sk-accent) 38%, transparent);\r
}\r
\r
html.dark .ml-version-option.is-preview { border-color: color-mix(in srgb, var(--sk-ds-accent) 32%, transparent); }\r
\r
.ml-version-option__body {\r
  flex: 1 1 auto;\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
}\r
\r
.ml-version-option__name {\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: var(--sk-text-sm);\r
  font-weight: 750;\r
  line-height: 1.25;\r
  color: var(--sk-palette-blue-0f172a);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
html.dark .ml-version-option__name { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 92%, transparent); }\r
\r
.ml-version-option.is-selected .ml-version-option__name { font-weight: 850; }\r
\r
.ml-version-option__meta {\r
  font-size: var(--sk-text-2xs);\r
  font-weight: 650;\r
  line-height: 1.3;\r
  color: var(--sk-palette-blue-64748b);\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
html.dark .ml-version-option__meta { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 50%, transparent); }\r
\r
.ml-version-option__prices {\r
  flex-shrink: 0;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-end;\r
  gap: 1px;\r
}\r
\r
.ml-version-option__from {\r
  font-size: var(--sk-text-2xs);\r
  font-weight: 600;\r
  line-height: 1;\r
  color: var(--sk-palette-blue-94a3b8);\r
  text-decoration: line-through;\r
}\r
\r
html.dark .ml-version-option__from { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 38%, transparent); }\r
\r
.ml-version-option__price {\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);\r
  font-size: var(--sk-text-ui);\r
  font-weight: 900;\r
  line-height: 1.15;\r
  letter-spacing: normal;\r
  color: var(--sk-palette-blue-0f172a);\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
html.dark .ml-version-option__price { color: var(--sk-palette-neutral-ffffff); }\r
.ml-version-option.is-selected .ml-version-option__price { color: var(--sk-accent); }\r
html.dark .ml-version-option.is-selected .ml-version-option__price { color: var(--sk-ds-accent); }\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .ml-version-option,\r
.ml-version-option__mark,\r
.ml-version-option__mark::after { transition: none; }\r
}\r
\r
.ml-detail-edition-active { margin: 0; color: var(--sk-ds-t2); font-size: 0.875rem; line-height: 1.5;\r
}\r
\r
.ml-product-unavailable { padding: var(--ml-detail-pad, 20px); color: var(--sk-ds-t2);\r
}\r
\r
.ml-version-option:disabled { cursor: not-allowed; opacity: 0.55; box-shadow: none !important; }\r
.ml-purchase-primary:disabled {\r
  cursor: not-allowed;\r
  box-shadow: none !important;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent) !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 42%, transparent) !important;\r
}\r
html:not(.dark) .ml-purchase-primary:disabled {\r
  background: var(--sk-palette-cyan-f1f5f9) !important;\r
  border: 1px solid var(--sk-palette-blue-cbd5e1) !important;\r
  color: var(--sk-palette-blue-94a3b8) !important;\r
}\r
\r
.ml-specs-section > summary { cursor: pointer;\r
}\r
\r
.ml-info-col .ml-purchase-card {\r
  align-self: stretch;\r
  width: 100%;\r
  background: transparent !important;\r
  border: none !important;\r
  box-shadow: none !important;\r
  padding: 0 !important;\r
  margin-top: 14px;\r
  gap: 16px !important;\r
}\r
html.dark .ml-info-col .ml-purchase-card {\r
  background: transparent !important;\r
  border-color: transparent !important;\r
  box-shadow: none !important;\r
}\r
\r
.ml-description-panel .ml-product-facts-card {\r
  padding: 0 0 20px 0 !important;\r
  margin: 0 0 22px 0 !important;\r
  border: none !important;\r
  border-bottom: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;\r
  background: transparent !important;\r
}\r
html:not(.dark) .ml-description-panel .ml-product-facts-card {\r
  border-bottom-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;\r
}\r
.ml-description-panel .ml-product-facts-card h3 {\r
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;\r
  font-size: 13.5px !important;\r
  font-weight: 800 !important;\r
  text-transform: uppercase;\r
  letter-spacing: 0.04em;\r
  margin: 0 0 14px 0 !important;\r
  color: var(--sk-palette-blue-64748b) !important;\r
}\r
html:not(.dark) .ml-description-panel .ml-product-facts-card h3 {\r
  color: var(--sk-palette-blue-64748b) !important;\r
}\r
.ml-description-panel .ml-product-facts-card dl {\r
  display: grid !important;\r
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;\r
  gap: 12px !important;\r
  margin: 0 !important;\r
}\r
.ml-description-panel .ml-product-facts-card div {\r
  display: flex !important;\r
  flex-direction: column !important;\r
  gap: 4px !important;\r
  padding: 12px 14px !important;\r
  border-radius: 12px !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent) !important;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent) !important;\r
}\r
html:not(.dark) .ml-description-panel .ml-product-facts-card div {\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 3%, transparent) !important;\r
}\r
.ml-description-panel .ml-product-facts-card dt {\r
  font-size: 11px !important;\r
  font-weight: 700 !important;\r
  text-transform: uppercase !important;\r
  letter-spacing: 0.05em !important;\r
  color: var(--sk-ds-t2) !important;\r
}\r
.ml-description-panel .ml-product-facts-card dd {\r
  font-size: 14.5px !important;\r
  font-weight: 800 !important;\r
  color: var(--sk-palette-blue-f8fafc) !important;\r
  text-align: left !important;\r
  margin: 0 !important;\r
}\r
html:not(.dark) .ml-description-panel .ml-product-facts-card dd {\r
  color: var(--sk-palette-blue-0f172a) !important;\r
}\r
@media (max-width: 768px) {\r
  .ml-description-panel .ml-product-facts-card dl {\r
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)) !important;\r
    gap: 8px !important;\r
  }\r
  .ml-description-panel .ml-product-facts-card div {\r
    padding: 10px 12px !important;\r
  }\r
}\r
\r
.ml-stars-icons {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 2px;\r
}\r
.ml-buy-now-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  width: 100%;\r
  min-height: 48px;\r
  padding: 0 16px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);\r
  font-size: 0.8125rem;\r
  font-weight: 700;\r
  letter-spacing: 0.02em;\r
  background: color-mix(in srgb, var(--sk-accent) 9%, transparent);\r
  color: var(--sk-ds-accent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);\r
  box-shadow: none;\r
  cursor: pointer;\r
  transition: transform .12s ease, background .14s ease, border-color .14s ease, color .14s ease;\r
}\r
.ml-buy-now-btn:hover:not(:disabled) {\r
  background: color-mix(in srgb, var(--sk-accent) 18%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);\r
  color: var(--sk-ds-accent);\r
  box-shadow: none;\r
  transform: none;\r
}\r
.ml-buy-now-btn:active:not(:disabled) {\r
  transform: scale(0.985);\r
}\r
.ml-buy-now-btn:disabled {\r
  opacity: 0.55;\r
  cursor: not-allowed;\r
  box-shadow: none;\r
}\r
html.dark .ml-buy-now-btn {\r
  background: var(--sk-ds-accent);\r
  color: var(--sk-palette-teal-050807);\r
  border: 1px solid var(--sk-ds-accent);\r
  font-weight: 800;\r
  box-shadow: none;\r
}\r
html.dark .ml-buy-now-btn:hover:not(:disabled) {\r
  background: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0));\r
  border-color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0));\r
  color: var(--sk-palette-teal-050807);\r
  box-shadow: none;\r
  transform: none;\r
}\r
.ml-version-guide {\r
  margin-top: 8px;\r
  padding: 8px 12px;\r
  border-radius: 8px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
html:not(.dark) .ml-version-guide {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent);\r
}\r
.ml-version-guide__tip {\r
  font-size: 11.5px;\r
  line-height: 1.45;\r
  color: var(--sk-palette-blue-4b5563);\r
  display: block;\r
}\r
.ml-version-guide__tip strong {\r
  color: var(--sk-ds-accent);\r
}\r
html.dark .ml-version-guide__tip {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 70%, transparent);\r
}\r
.ml-license-cumulative-note {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 10px;\r
  padding: 10px 12px;\r
  margin-bottom: 10px;\r
  border-radius: 10px;\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 26%, transparent);\r
  border-left: 3px solid var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 7%, transparent);\r
}\r
html:not(.dark) .ml-license-cumulative-note {\r
  border-color: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 20%, transparent);\r
  border-left-color: var(--sk-palette-teal-1f3b2e);\r
  background: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 5%, transparent);\r
}\r
.ml-license-cumulative-note__icon {\r
  color: var(--sk-ds-accent);\r
  flex-shrink: 0;\r
  margin-top: 2px;\r
}\r
html:not(.dark) .ml-license-cumulative-note__icon {\r
  color: var(--sk-palette-teal-1f3b2e);\r
}\r
.ml-license-cumulative-note__body {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  min-width: 0;\r
}\r
.ml-license-cumulative-note__body strong {\r
  font-size: 12px;\r
  font-weight: 700;\r
  line-height: 1.3;\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-license-cumulative-note__body strong {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-license-cumulative-note__body span {\r
  font-size: 11.5px;\r
  line-height: 1.45;\r
  color: var(--sk-palette-neutral-a9b5b0);\r
}\r
html:not(.dark) .ml-license-cumulative-note__body span {\r
  color: var(--sk-palette-blue-475569);\r
}\r
.ml-mobile-detail-bar {\r
  display: none;\r
}\r
@media (max-width: 768px) {\r
  .ml-mobile-detail-bar {\r
    position: fixed;\r
    bottom: 0;\r
    left: 0;\r
    right: 0;\r
    width: 100%;\r
    display: flex;\r
    align-items: center;\r
    justify-content: space-between;\r
    gap: 12px;\r
    padding: 10px 16px calc(10px + env(safe-area-inset-bottom, 0px));\r
    background: color-mix(in srgb, var(--sk-palette-neutral-000000) 85%, transparent);\r
    backdrop-filter: blur(12px);\r
    -webkit-backdrop-filter: blur(12px);\r
    border-top: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);\r
    z-index: 60;\r
    box-shadow: 0 -4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 40%, transparent);\r
    animation: ml-fade-in 0.2s ease;\r
  }\r
  html:not(.dark) .ml-mobile-detail-bar {\r
    background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 92%, transparent);\r
    border-top-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 10%, transparent);\r
    box-shadow: 0 -4px 20px color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
  }\r
  .ml-mobile-detail-bar__info {\r
    display: flex;\r
    flex-direction: column;\r
    min-width: 0;\r
    flex: 1;\r
  }\r
  .ml-mobile-detail-bar__title {\r
    font-size: 11.5px;\r
    font-weight: 700;\r
    color: var(--sk-palette-blue-64748b);\r
    white-space: nowrap;\r
    overflow: hidden;\r
    text-overflow: ellipsis;\r
  }\r
  html.dark .ml-mobile-detail-bar__title {\r
    color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 70%, transparent);\r
  }\r
  .ml-mobile-detail-bar__price {\r
    font-size: 16px;\r
    font-weight: 800;\r
    color: var(--sk-ds-accent);\r
  }\r
  .ml-mobile-detail-bar__btn {\r
    min-height: 42px;\r
    padding: 0 18px;\r
    border-radius: 8px;\r
    font-size: 13px;\r
    font-weight: 800;\r
    background: var(--sk-ds-accent);\r
    color: var(--sk-palette-neutral-000000);\r
    border: none;\r
    cursor: pointer;\r
    display: flex;\r
    align-items: center;\r
    gap: 6px;\r
    white-space: nowrap;\r
    flex-shrink: 0;\r
    box-shadow: 0 2px 10px color-mix(in srgb, var(--sk-ds-accent) 30%, transparent);\r
  }\r
  .ml-mobile-detail-bar__btn:active {\r
    transform: scale(0.97);\r
  }\r
}\r
\r
.ml-shopee-nav-tabs {\r
  display: flex;\r
  align-items: stretch;\r
  width: 100%;\r
  border-bottom: 2px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  margin-bottom: 12px;\r
  gap: 0;\r
}\r
html:not(.dark) .ml-shopee-nav-tabs {\r
  border-bottom-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);\r
}\r
.ml-shopee-nav-tab {\r
  flex: 1 1 50%;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  text-align: center;\r
  white-space: nowrap;\r
  gap: 6px;\r
  padding: 10px 8px;\r
  font-size: 13px;\r
  font-weight: 700;\r
  color: var(--sk-palette-blue-64748b);\r
  background: transparent;\r
  border: none;\r
  border-bottom: 2px solid transparent;\r
  margin-bottom: -2px;\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
.ml-shopee-nav-tab:hover {\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-shopee-nav-tab:hover {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-shopee-nav-tab.is-active {\r
  color: var(--sk-palette-red-e50914);\r
  border-bottom-color: var(--sk-palette-red-e50914);\r
}\r
.ml-shopee-nav-tab-count {\r
  font-size: 11px;\r
  opacity: 0.85;\r
  vertical-align: baseline;\r
  line-height: 1;\r
}\r
.ml-shopee-summary-card {\r
  display: flex;\r
  align-items: center;\r
  gap: 16px;\r
  padding: 14px 18px;\r
  border-radius: 8px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  margin-bottom: 16px;\r
}\r
html:not(.dark) .ml-shopee-summary-card {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent);\r
}\r
.ml-shopee-rating-col {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 2px;\r
  min-width: 80px;\r
}\r
.ml-shopee-big-score-row {\r
  display: flex;\r
  align-items: baseline;\r
  gap: 2px;\r
}\r
.ml-shopee-big-score {\r
  font-size: 24px;\r
  font-weight: 900;\r
  color: var(--sk-palette-red-e50914);\r
}\r
.ml-shopee-big-score-max {\r
  font-size: 11.5px;\r
  font-weight: 700;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
.ml-shopee-score-stars {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 2px;\r
}\r
.ml-shopee-filter-pills {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
  flex-wrap: wrap;\r
  flex: 1;\r
}\r
.ml-shopee-filter-pill {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 4px;\r
  padding: 5px 10px;\r
  border-radius: 4px;\r
  font-size: 11.5px;\r
  font-weight: 600;\r
  min-height: 28px;\r
  white-space: nowrap;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);\r
  color: var(--sk-palette-blue-64748b);\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
}\r
.ml-shopee-filter-pill:hover {\r
  border-color: var(--sk-palette-red-e50914);\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-shopee-filter-pill:hover {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-shopee-filter-pill.is-active {\r
  background: color-mix(in srgb, var(--sk-palette-red-e50914) 10%, transparent);\r
  border-color: var(--sk-palette-red-e50914);\r
  color: var(--sk-palette-red-e50914);\r
  font-weight: 700;\r
}\r
.ml-shopee-filter-pill-count {\r
  font-size: 10px;\r
  opacity: 0.85;\r
  vertical-align: baseline;\r
  line-height: 1;\r
}\r
.ml-shopee-form-card {\r
  padding: 20px;\r
  border-radius: 12px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  margin-bottom: 24px;\r
}\r
html:not(.dark) .ml-shopee-form-card {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent);\r
}\r
.ml-shopee-form-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  margin-bottom: 16px;\r
  flex-wrap: wrap;\r
}\r
.ml-shopee-form-title-wrap {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
}\r
.ml-shopee-form-title-wrap h4 {\r
  margin: 0;\r
  font-size: 15px;\r
  font-weight: 700;\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-shopee-form-title-wrap h4 {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-verified-buyer-pill {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 4px 10px;\r
  border-radius: 999px;\r
  font-size: 11px;\r
  font-weight: 700;\r
  background: color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);\r
  color: var(--sk-ds-accent);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 35%, transparent);\r
}\r
.ml-reviews-form {\r
  display: grid;\r
  gap: 16px;\r
}\r
.ml-reviews-rate-group {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
.ml-reviews-field-label {\r
  font-size: 12.5px;\r
  font-weight: 700;\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-reviews-field-label {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-reviews-stars-picker {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
}\r
.ml-reviews-star-btn {\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;\r
  padding: 2px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  transition: transform 0.1s ease;\r
}\r
.ml-reviews-star-btn:hover:not(:disabled) {\r
  transform: scale(1.15);\r
}\r
.ml-reviews-star-btn.is-disabled {\r
  opacity: 0.45;\r
  cursor: not-allowed;\r
}\r
.ml-reviews-rating-text {\r
  font-size: 12px;\r
  font-weight: 700;\r
  color: var(--sk-palette-orange-f5a623);\r
  margin-left: 4px;\r
}\r
.ml-shopee-variation-group {\r
  display: grid;\r
  gap: 8px;\r
}\r
.ml-shopee-variation-chips {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  flex-wrap: wrap;\r
}\r
.ml-shopee-variation-chip {\r
  padding: 6px 14px;\r
  border-radius: 6px;\r
  font-size: 12px;\r
  font-weight: 600;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);\r
  color: var(--sk-palette-blue-64748b);\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
}\r
.ml-shopee-variation-chip.is-selected {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);\r
  border-color: var(--sk-ds-accent);\r
  color: var(--sk-ds-accent);\r
  font-weight: 700;\r
}\r
.ml-reviews-comment-group {\r
  display: grid;\r
  gap: 8px;\r
}\r
.ml-reviews-textarea {\r
  width: 100%;\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: var(--sk-r-md);\r
  padding: 12px;\r
  background: var(--sk-ds-inset);\r
  color: var(--sk-ds-t1);\r
  font: inherit;\r
  font-size: 13px;\r
  resize: vertical;\r
  min-height: 80px;\r
}\r
.ml-reviews-textarea:focus-visible {\r
  outline: 2px solid var(--sk-ds-accent);\r
  outline-offset: 2px;\r
}\r
.ml-reviews-hint-row {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 8px;\r
  font-size: 11px;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
html.dark .ml-reviews-hint-row {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent);\r
}\r
.ml-shopee-upload-section {\r
  display: grid;\r
  gap: 8px;\r
}\r
.ml-shopee-upload-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
}\r
.ml-shopee-upload-count {\r
  font-size: 11px;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
.ml-shopee-upload-row {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  flex-wrap: wrap;\r
}\r
.ml-shopee-upload-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 8px 14px;\r
  border-radius: 8px;\r
  font-size: 12px;\r
  font-weight: 600;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border: 1px dashed color-mix(in srgb, var(--sk-palette-neutral-ffffff) 20%, transparent);\r
  color: var(--sk-palette-blue-f8fafc);\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
}\r
.ml-shopee-upload-btn:hover:not(:disabled) {\r
  border-color: var(--sk-ds-accent);\r
  color: var(--sk-ds-accent);\r
}\r
.ml-shopee-hidden-file {\r
  display: none;\r
}\r
.ml-shopee-upload-preview-wrap {\r
  position: relative;\r
  width: 56px;\r
  height: 56px;\r
  border-radius: 6px;\r
  overflow: hidden;\r
  border: 1px solid var(--sk-ds-line);\r
}\r
.ml-shopee-upload-preview-img {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
}\r
.ml-shopee-upload-remove-btn {\r
  position: absolute;\r
  top: 2px;\r
  right: 2px;\r
  width: 16px;\r
  height: 16px;\r
  border-radius: 50%;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 70%, transparent);\r
  color: var(--sk-palette-neutral-ffffff);\r
  border: none;\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  padding: 0;\r
}\r
.ml-reviews-success-msg {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 13px;\r
  font-weight: 700;\r
  color: var(--sk-ds-accent);\r
  margin: 0;\r
}\r
.ml-reviews-submit-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  justify-self: start;\r
  min-height: 42px;\r
  padding: 0 20px;\r
  font-size: 13px;\r
  font-weight: 800;\r
  cursor: pointer;\r
}\r
@media (max-width: 600px) {\r
  .ml-reviews-submit-btn {\r
    width: 100%;\r
  }\r
  .ml-shopee-nav-tab {\r
    font-size: 11.5px;\r
    padding: 9px 4px;\r
    gap: 4px;\r
  }\r
  .ml-shopee-nav-tab-count {\r
    font-size: 10px;\r
  }\r
  .ml-shopee-summary-card {\r
    flex-direction: column;\r
    align-items: stretch;\r
    gap: 10px;\r
    padding: 10px 12px;\r
  }\r
  .ml-shopee-rating-col {\r
    width: 100%;\r
    flex-direction: row;\r
    align-items: center;\r
    justify-content: flex-start;\r
    gap: 10px;\r
    min-width: auto;\r
    padding-bottom: 8px;\r
    border-bottom: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  }\r
  html:not(.dark) .ml-shopee-rating-col {\r
    border-bottom-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);\r
  }\r
  .ml-shopee-big-score {\r
    font-size: 20px;\r
  }\r
  .ml-shopee-big-score-max {\r
    font-size: 11px;\r
  }\r
  .ml-shopee-filter-pills {\r
    width: 100%;\r
    display: grid;\r
    grid-template-columns: repeat(3, minmax(0, 1fr));\r
    gap: 6px;\r
  }\r
  .ml-shopee-filter-pill {\r
    width: 100%;\r
    justify-content: center;\r
    text-align: center;\r
    padding: 5px 3px;\r
    font-size: 10.5px;\r
    min-height: 28px;\r
  }\r
  .ml-shopee-filter-pill-count {\r
    font-size: 9.5px;\r
  }\r
  .ml-reviews-sort-bar {\r
    justify-content: stretch;\r
    width: 100%;\r
  }\r
  .ml-reviews-sort-tabs {\r
    width: 100%;\r
    display: flex;\r
  }\r
  .ml-reviews-sort-tab {\r
    flex: 1;\r
    text-align: center;\r
    justify-content: center;\r
    padding: 6px 8px;\r
    font-size: 11px;\r
  }\r
  .ml-shopee-review-item {\r
    padding: 12px;\r
  }\r
  .ml-shopee-product-card {\r
    padding: 8px 10px;\r
    gap: 8px;\r
    flex-wrap: wrap;\r
  }\r
  .ml-shopee-product-actions {\r
    width: 100%;\r
    justify-content: flex-end;\r
  }\r
  .ml-shopee-product-details-btn {\r
    flex: 1;\r
  }\r
}\r
@media (max-width: 380px) {\r
  .ml-shopee-nav-tab {\r
    font-size: 10.5px;\r
    padding: 8px 2px;\r
    gap: 3px;\r
  }\r
  .ml-shopee-filter-pills {\r
    grid-template-columns: repeat(2, minmax(0, 1fr));\r
  }\r
  .ml-shopee-filter-pill {\r
    font-size: 10px;\r
    padding: 5px 2px;\r
  }\r
}\r
.ml-reviews-feed-container {\r
  display: grid;\r
  gap: 16px;\r
}\r
.ml-reviews-low-count-notice {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 10px;\r
  padding: 12px 14px;\r
  border-radius: var(--sk-r-md);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 26%, transparent);\r
  border-left: 3px solid var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 7%, transparent);\r
}\r
html:not(.dark) .ml-reviews-low-count-notice {\r
  border-color: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 22%, transparent);\r
  border-left-color: var(--sk-palette-teal-1f3b2e);\r
  background: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 5%, transparent);\r
}\r
.ml-reviews-low-count-notice__icon {\r
  color: var(--sk-ds-accent);\r
  flex-shrink: 0;\r
  margin-top: 2px;\r
}\r
html:not(.dark) .ml-reviews-low-count-notice__icon {\r
  color: var(--sk-palette-teal-1f3b2e);\r
}\r
.ml-reviews-low-count-notice__text {\r
  margin: 0;\r
  font-size: 12.5px;\r
  line-height: 1.55;\r
  color: var(--sk-palette-neutral-e2ece7);\r
}\r
html:not(.dark) .ml-reviews-low-count-notice__text {\r
  color: var(--sk-palette-blue-334155);\r
}\r
.ml-reviews-sort-bar {\r
  display: flex;\r
  align-items: center;\r
  justify-content: flex-start;\r
  gap: 12px;\r
  flex-wrap: wrap;\r
}\r
.ml-reviews-sort-tabs {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  padding: 3px;\r
  border-radius: 9px;\r
}\r
html:not(.dark) .ml-reviews-sort-tabs {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 4%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);\r
}\r
.ml-reviews-sort-tab {\r
  padding: 5px 12px;\r
  border-radius: 7px;\r
  font-size: 11.5px;\r
  font-weight: 700;\r
  color: var(--sk-palette-blue-64748b);\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
}\r
.ml-reviews-sort-tab:hover {\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-reviews-sort-tab:hover {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-reviews-sort-tab.is-active {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
html:not(.dark) .ml-reviews-sort-tab.is-active {\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);\r
  color: var(--sk-accent);\r
}\r
.ml-reviews-loading,\r
.ml-reviews-empty {\r
  padding: 24px;\r
  text-align: center;\r
  font-size: 13px;\r
  border-radius: 12px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border: 1px dashed color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  color: var(--sk-palette-blue-64748b);\r
}\r
html.dark .ml-reviews-loading,\r
html.dark .ml-reviews-empty {\r
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 60%, transparent);\r
}\r
.ml-shopee-reviews-list {\r
  display: grid;\r
  gap: 12px;\r
}\r
.ml-shopee-review-item {\r
  padding: 16px;\r
  border-radius: 10px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  display: grid;\r
  gap: 10px;\r
}\r
html:not(.dark) .ml-shopee-review-item {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent);\r
}\r
.ml-shopee-review-item.is-highlighted {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 40%, transparent);\r
  background:\r
    radial-gradient(circle at 95% 10%, color-mix(in srgb, var(--sk-ds-accent) 6%, transparent), transparent 45%),\r
    color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
}\r
.ml-shopee-review-header {\r
  display: flex;\r
  align-items: flex-start;\r
  justify-content: space-between;\r
  gap: 12px;\r
}\r
.ml-shopee-user-row {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 10px;\r
}\r
.ml-shopee-avatar {\r
  width: 36px;\r
  height: 36px;\r
  border-radius: 50%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  overflow: hidden;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  color: var(--sk-palette-blue-f8fafc);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 15%, transparent);\r
  flex-shrink: 0;\r
}\r
html:not(.dark) .ml-shopee-avatar {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);\r
  color: var(--sk-palette-blue-0f172a);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 15%, transparent);\r
}\r
.ml-shopee-avatar-img {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
  display: block;\r
  border-radius: 50%;\r
}\r
.ml-shopee-avatar-fallback {\r
  font-size: 13px;\r
  font-weight: 800;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 100%;\r
  height: 100%;\r
}\r
.ml-shopee-user-meta {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 3px;\r
}\r
.ml-shopee-name-line {\r
  display: flex;\r
  align-items: center;\r
  gap: 6px;\r
}\r
.ml-shopee-username {\r
  font-size: 13px;\r
  font-weight: 600;\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-shopee-username {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-shopee-verified-icon {\r
  color: var(--sk-palette-blue-400);\r
  display: inline-flex;\r
}\r
.ml-shopee-stars-row {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 2px;\r
}\r
.ml-shopee-variation-text {\r
  font-size: 12px;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
.ml-shopee-helpful-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  padding: 4px 8px;\r
  border-radius: 4px;\r
  font-size: 12px;\r
  font-weight: 600;\r
  color: var(--sk-palette-blue-64748b);\r
  background: transparent;\r
  border: 1px solid transparent;\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
  line-height: 1;\r
}\r
.ml-shopee-helpful-btn:hover {\r
  color: var(--sk-palette-blue-f8fafc);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
html:not(.dark) .ml-shopee-helpful-btn:hover {\r
  color: var(--sk-palette-blue-0f172a);\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent);\r
}\r
.ml-shopee-helpful-btn.is-liked {\r
  color: var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 25%, transparent);\r
}\r
.ml-shopee-helpful-count {\r
  font-size: 12px;\r
  font-weight: 700;\r
  line-height: 1;\r
  vertical-align: baseline;\r
}\r
.ml-shopee-comment-text {\r
  margin: 0;\r
  font-size: 13px;\r
  line-height: 1.45;\r
  color: var(--sk-palette-blue-f8fafc);\r
}\r
html:not(.dark) .ml-shopee-comment-text {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-shopee-photos-grid {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  flex-wrap: wrap;\r
  margin-top: 4px;\r
}\r
.ml-shopee-photo-btn {\r
  padding: 0;\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: 6px;\r
  overflow: hidden;\r
  background: transparent;\r
  cursor: pointer;\r
  transition: transform 0.15s ease;\r
}\r
.ml-shopee-photo-btn:hover {\r
  transform: scale(1.04);\r
}\r
.ml-shopee-photo-thumb {\r
  width: 72px;\r
  height: 72px;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
  display: block;\r
}\r
.ml-shopee-footer-row {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
.ml-shopee-date-text {\r
  font-size: 11px;\r
  color: var(--sk-palette-blue-64748b);\r
}\r
.ml-shopee-product-card {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 8px 12px;\r
  border-radius: 8px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  margin-top: 4px;\r
}\r
html:not(.dark) .ml-shopee-product-card {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent);\r
}\r
.ml-shopee-product-thumb {\r
  width: 44px;\r
  height: 44px;\r
  border-radius: 6px;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
  flex-shrink: 0;\r
}\r
.ml-shopee-product-info {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  flex: 1;\r
}\r
.ml-shopee-product-name {\r
  font-size: 12px;\r
  font-weight: 700;\r
  color: var(--sk-palette-blue-f8fafc);\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
html:not(.dark) .ml-shopee-product-name {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-shopee-product-price-block {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 1px;\r
}\r
.ml-shopee-product-pix-row {\r
  display: flex;\r
  align-items: baseline;\r
  gap: 6px;\r
  flex-wrap: wrap;\r
}\r
.ml-shopee-product-price {\r
  font-size: 13px;\r
  font-weight: 900;\r
  color: var(--sk-ds-accent);\r
}\r
.ml-shopee-pix-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  font-size: 8.5px;\r
  font-weight: 800;\r
  padding: 1px 4px;\r
  border-radius: 3px;\r
  background: color-mix(in srgb, var(--sk-ds-accent) 15%, transparent);\r
  color: var(--sk-ds-accent);\r
  letter-spacing: 0.02em;\r
  white-space: nowrap;\r
}\r
.ml-shopee-product-installments {\r
  font-size: 10px;\r
  color: var(--sk-palette-blue-64748b);\r
  line-height: 1.2;\r
}\r
.ml-shopee-product-installments-bold {\r
  color: var(--sk-palette-blue-f8fafc);\r
  font-weight: 700;\r
}\r
html:not(.dark) .ml-shopee-product-installments-bold {\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
.ml-shopee-product-actions {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  flex-shrink: 0;\r
}\r
.ml-shopee-product-details-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 5px;\r
  height: 36px;\r
  padding: 0 12px;\r
  border-radius: var(--sk-r-md);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 14%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  color: var(--sk-palette-neutral-f3f7f5);\r
  font-size: 12px;\r
  font-weight: 600;\r
  white-space: nowrap;\r
  cursor: pointer;\r
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;\r
}\r
.ml-shopee-product-details-btn:hover {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 45%, transparent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
html:not(.dark) .ml-shopee-product-details-btn {\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 16%, transparent);\r
  background: var(--sk-palette-neutral-ffffff);\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html:not(.dark) .ml-shopee-product-details-btn:hover {\r
  border-color: var(--sk-palette-teal-1f3b2e);\r
  background: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 7%, transparent);\r
  color: var(--sk-palette-teal-1f3b2e);\r
}\r
.ml-shopee-product-cart-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 36px;\r
  min-width: 36px;\r
  height: 36px;\r
  padding: 0;\r
  border-radius: var(--sk-r-md);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 34%, transparent);\r
  color: var(--sk-ds-accent);\r
  cursor: pointer;\r
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;\r
  flex-shrink: 0;\r
}\r
.ml-shopee-product-cart-btn:hover {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 22%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 55%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
html:not(.dark) .ml-shopee-product-cart-btn {\r
  background: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 6%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 24%, transparent);\r
  color: var(--sk-palette-teal-1f3b2e);\r
}\r
html:not(.dark) .ml-shopee-product-cart-btn:hover {\r
  background: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 40%, transparent);\r
  color: var(--sk-palette-teal-1f3b2e);\r
}\r
.ml-shopee-product-cart-btn.in-cart {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 20%, transparent);\r
  border-color: var(--sk-ds-accent);\r
  color: var(--sk-ds-accent);\r
}\r
html:not(.dark) .ml-shopee-product-cart-btn.in-cart {\r
  background: color-mix(in srgb, var(--sk-palette-teal-1f3b2e) 14%, transparent);\r
  border-color: var(--sk-palette-teal-1f3b2e);\r
  color: var(--sk-palette-teal-1f3b2e);\r
}\r
.ml-reviews-expand-btn {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  width: 100%;\r
  padding: 10px 16px;\r
  border-radius: 10px;\r
  font-size: 12.5px;\r
  font-weight: 700;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  color: var(--sk-palette-blue-f8fafc);\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
.ml-reviews-expand-btn:hover {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 10%, transparent);\r
  border-color: var(--sk-ds-accent);\r
  color: var(--sk-ds-accent);\r
}\r
html:not(.dark) .ml-reviews-expand-btn {\r
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 4%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html:not(.dark) .ml-reviews-expand-btn:hover {\r
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);\r
  border-color: var(--sk-accent);\r
  color: var(--sk-accent);\r
}\r
\r
.store-interface.ml-detail-page {\r
  width: 100% !important;\r
  max-width: 100% !important;\r
  margin-inline: 0 !important;\r
}\r
.ml-detail-layout > *, .ml-detail-workspace > *, .ml-purchase-actions > * { min-width: 0; max-width: 100%; }\r
.ml-detail-workspace { overflow-wrap: anywhere; }\r
.ml-purchase-actions button { height: auto; white-space: normal; }\r
.ml-detail-body :is(img, iframe, video) { max-width: 100%; }\r
.ml-detail-body :is(.ml-description-content, .ml-specs-content) { overflow-x: auto; }\r
@media (max-width: 768px) {\r
  .ml-model-section .ml-mobile-detail-bar { position: static; flex-wrap: wrap; }\r
  .ml-mobile-detail-bar__btn { flex: 1 0 auto; max-width: 100%; }\r
}\r
\r
.ml-product-card .ml-card-collection-strip[data-empty] { visibility: hidden; }\r
.ml-product-card .ml-price-area {\r
  min-height: 74px;\r
  height: 74px;\r
  align-items: stretch;\r
  width: 100%;\r
  box-sizing: border-box;\r
}\r
.ml-product-card .ml-price-block {\r
  width: 100%;\r
  min-height: 74px;\r
  height: 74px;\r
  justify-content: space-between;\r
  gap: 2px;\r
  box-sizing: border-box;\r
}\r
.ml-product-card .ml-price-original {\r
  min-height: 22px !important;\r
  height: 22px !important;\r
  line-height: 22px !important;\r
  flex-wrap: nowrap !important;\r
  overflow: hidden;\r
  white-space: nowrap;\r
}\r
.ml-product-card .ml-price-main {\r
  min-height: 28px !important;\r
  height: 28px !important;\r
  align-items: center !important;\r
  flex-wrap: nowrap !important;\r
}\r
.ml-product-card .ml-price-cash-row {\r
  flex-wrap: nowrap !important;\r
  align-items: center !important;\r
}\r
.ml-product-card .ml-price-installments {\r
  min-height: 18px !important;\r
  height: 18px !important;\r
  display: flex !important;\r
  align-items: center !important;\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
}\r
.ml-product-card .ml-card-access-status {\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  line-height: 1.15;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
.ml-product-card .ml-price-area > :is(.ml-price-free, .ml-price-login) { margin-block-start: 23px; }\r
.ml-product-card .ml-card-footer {\r
  margin-top: auto;\r
  min-height: 54px;\r
  justify-content: flex-end;\r
}\r
\r
.ml-purchase-actions .ml-action-buttons--split {\r
  padding-top: 0;\r
  margin-top: 0;\r
}\r
.ml-purchase-actions .ml-action-buttons--split .ml-purchase-primary.ml-btn-cart--icon-square {\r
  width: 48px !important;\r
  min-width: 48px !important;\r
  flex: 0 0 48px !important;\r
  padding: 0 !important;\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent) !important;\r
  color: var(--sk-ds-accent) !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 45%, transparent) !important;\r
}\r
html.dark .ml-purchase-actions .ml-action-buttons--split .ml-purchase-primary.ml-btn-cart--icon-square {\r
  background: color-mix(in srgb, var(--sk-ds-accent) 14%, var(--sk-palette-teal-101715)) !important;\r
  color: var(--sk-ds-accent) !important;\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 48%, transparent) !important;\r
}\r
.ml-purchase-savings-pill {\r
  display: inline-flex;\r
  align-items: center;\r
  padding: 2px 7px;\r
  border-radius: 999px;\r
  font-size: 0.68rem;\r
  font-weight: 800;\r
  letter-spacing: 0.01em;\r
  color: var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 28%, transparent);\r
  white-space: nowrap;\r
}\r
.ml-purchase-vip-compare {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  margin-top: 6px;\r
  padding: 8px 11px;\r
  border-radius: 8px;\r
  font-size: 0.75rem;\r
  line-height: 1.35;\r
  color: var(--sk-ds-premium);\r
  background: color-mix(in srgb, var(--sk-palette-cyan-06b6d4) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-ds-premium) 28%, transparent);\r
}\r
html.dark .ml-purchase-vip-compare {\r
  color: var(--sk-palette-cyan-00e5ff);\r
  background: color-mix(in srgb, var(--sk-palette-cyan-00e5ff) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-cyan-00e5ff) 32%, transparent);\r
  box-shadow: 0 0 14px color-mix(in srgb, var(--sk-palette-cyan-00e5ff) 12%, transparent);\r
}\r
.ml-purchase-vip-compare__icon {\r
  flex-shrink: 0;\r
}\r
.ml-version-option.is-owned-license {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 42%, transparent);\r
}\r
.ml-version-option__from-row {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
}\r
.ml-version-option__off {\r
  font-size: 0.62rem;\r
  font-weight: 800;\r
  padding: 1px 5px;\r
  border-radius: 4px;\r
  color: var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 14%, transparent);\r
}\r
.ml-version-guide--accumulation {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 28%, transparent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 6%, transparent);\r
}\r
.ml-reviews-section, .ml-reviews-body, .ml-reviews-feed-container, .ml-shopee-reviews-list, .ml-shopee-review-item {\r
  box-sizing: border-box;\r
  width: 100%;\r
  min-width: 0;\r
  max-width: 100%;\r
  text-align: start;\r
}\r
.ml-reviews-feed-container, .ml-shopee-reviews-list, .ml-shopee-review-item { grid-template-columns: minmax(0, 1fr); }\r
.ml-shopee-review-header { flex-wrap: wrap; }\r
.ml-shopee-user-row, .ml-shopee-user-meta, .ml-shopee-product-info { min-width: 0; overflow-wrap: anywhere; }\r
.ml-shopee-comment-text { overflow-wrap: anywhere; white-space: pre-wrap; }\r
\r
.ml-installments-accordion {\r
  margin-top: 8px;\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: 10px;\r
  background: var(--sk-ds-neutral-soft);\r
  overflow: hidden;\r
}\r
\r
.ml-installments-summary {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 8px;\r
  padding: 8px 11px;\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  color: var(--sk-ds-fg-secondary);\r
  cursor: pointer;\r
  list-style: none;\r
  -webkit-user-select: none;\r
     -moz-user-select: none;\r
          user-select: none;\r
}\r
\r
.ml-installments-summary::-webkit-details-marker {\r
  display: none;\r
}\r
\r
.ml-installments-chevron {\r
  transition: transform 0.2s ease;\r
  flex-shrink: 0;\r
}\r
\r
.ml-installments-accordion[open] .ml-installments-chevron {\r
  transform: rotate(180deg);\r
}\r
\r
.ml-installments-panel {\r
  border-top: 1px solid var(--sk-ds-line);\r
  padding: 9px 11px 11px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 7px;\r
  font-size: 0.75rem;\r
}\r
\r
.ml-installments-pix-row,\r
.ml-installments-card-head {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 8px;\r
}\r
\r
.ml-installments-card-head {\r
  padding-top: 5px;\r
  border-top: 1px dashed var(--sk-ds-line);\r
  color: var(--sk-ds-fg-primary);\r
}\r
\r
.ml-installments-grid {\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  gap: 4px 12px;\r
}\r
\r
.ml-installments-list {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 3px;\r
}\r
\r
.ml-installments-item {\r
  font-size: 0.71875rem;\r
  line-height: 1.35;\r
  color: var(--sk-ds-fg-secondary);\r
}\r
\r
.ml-installments-item strong {\r
  color: var(--sk-ds-fg-primary);\r
  font-weight: 700;\r
}\r
\r
\r
\r
@media (max-width: 639px) {\r
  .store-interface.ml-detail-page {\r
    --sk-font-body: system-ui, sans-serif;\r
    --sk-font-heading: system-ui, sans-serif;\r
    --sk-font-ui: system-ui, sans-serif;\r
    font-family: var(--sk-font-body);\r
  }\r
  .ml-detail-page :is(button, input, textarea, select) { font-family: var(--sk-font-ui); }\r
  .ml-detail-page .ml-model-title { font-size: 17px !important; font-weight: 700 !important; }\r
  .ml-detail-page .ml-sec-head .sk-title.ml-sec-title,\r
  .ml-detail-page .ml-description-panel .ml-product-facts-card h3 {\r
    font-size: 16px !important;\r
    font-weight: 650 !important;\r
    line-height: 1.3;\r
  }\r
  .ml-detail-page :is(.ml-description-content, .ml-specs-content, .ml-shopee-comment-text, .ml-reviews-empty, .ml-info-subtitle) {\r
    font-size: 12px !important;\r
    line-height: 1.5;\r
    overflow-wrap: anywhere;\r
  }\r
  .ml-detail-page .ml-description-panel .ml-product-facts-card dt,\r
  .ml-detail-page :is(.ml-shopee-date-text, .ml-shopee-variation-text, .ml-shopee-filter-pill, .ml-reviews-sort-tab) {\r
    font-size: 11px;\r
    line-height: 1.35;\r
  }\r
  .ml-detail-page .ml-description-panel .ml-product-facts-card dd,\r
  .ml-detail-page :is(.ml-shopee-username, .ml-shopee-nav-tab, .ml-purchase-actions button) {\r
    font-size: 13px;\r
    line-height: 1.35;\r
  }\r
}`,Y=2,I=new Set,Z=new Map,$=new Map;let H;function yn(n,t){return H??=new IntersectionObserver(s=>{for(const l of s)Z.get(l.target)?.(l.intersectionRatio>=.6)},{threshold:.6}),Z.set(n,t),H.observe(n),()=>{H?.unobserve(n),Z.delete(n)}}async function zn(n,t){const s=vr(n),l=t?await Dr.fetchGaleriaProdutoPublica(n.code,t):[],[g]=kr(s,l);return!!g&&pn(g,"display")}function jn(n,t,s){const l=a.useRef(void 0),g=a.useRef(""),w=Ur(t),j=t.imagensDrive?.trim()||"",p=w||j,b=a.useCallback(()=>window.clearTimeout(l.current),[]),v=a.useCallback(x=>{b(),!(!p||g.current===p||fr.isMockMode||gr())&&(!x&&(Jr()||I.size>=Y||I.has(p))||(l.current=window.setTimeout(()=>{if(document.hidden||gr())return;let u=$.get(p);if(!u){if($.size>=Y)return;if(!x){if(I.size>=Y||I.has(p))return;I.add(p)}u=zn(t,w).catch(()=>!1).finally(()=>$.delete(p)),$.set(p,u)}u.then(_=>{_&&(g.current=p)})},x?100:500)))},[b,w,p,t]);return a.useEffect(()=>{const x=n.current,u=x&&s&&p&&!fr.isMockMode&&typeof IntersectionObserver=="function"?yn(x,_=>_?v(!1):b()):void 0;return()=>{b(),u?.()}},[b,n,s,p,v]),{warmOnIntent:()=>v(!0),cancelWarm:b}}const _n=({size:n=20,className:t})=>r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round",strokeLinejoin:"round",className:t,"aria-hidden":"true",children:[r.jsx("path",{d:"M2.5 4h2.8l2.6 10.5a1.5 1.5 0 0 0 1.46 1.15h8.78a1.5 1.5 0 0 0 1.45-1.12L21.5 7.2"}),r.jsx("path",{d:"M14 6.5v5"}),r.jsx("path",{d:"M11.5 9h5"}),r.jsx("circle",{cx:"9.5",cy:"19.5",r:"1.5",fill:"currentColor",stroke:"none"}),r.jsx("circle",{cx:"17.5",cy:"19.5",r:"1.5",fill:"currentColor",stroke:"none"})]}),An=a.memo(({product:n,user:t,isInCart:s=!1,onDetails:l,onAddToCart:g,onRescue:w,onOpenGallery:j,isDetailExpanded:p=!1,isHighlighted:b=!1,isFavorite:v=!1,onToggleFavorite:x,isLCP:u=!1,isMinimal:_=!1,tabbable:d=!0,prepareImage:V=!1,collectionCover:wr})=>{sn("detail",wn);const B=a.useContext(Xr),Q=B?.purchasedItems||[];br([],t,Q.filter(e=>e.code===n.code).map(e=>Date.parse(String(e.dataCompra||""))+Kr));const f=Yr(n,Q,t),yr=()=>window.dispatchEvent(new CustomEvent("skull:navigate",{detail:{tab:"pedidos"}})),[rr,F]=a.useState(""),[nr,er]=a.useState(!1),zr=a.useRef(null),W=a.useRef(null),E=a.useRef(null),N=a.useRef(null),jr=a.useMemo(()=>{const e=n.capa?.trim()||"",i=n.imagemCapaUrl||n.imagem;if(e)return n;if(n.capaLinha&&(!i||i===xr||i.includes("placeholder"))){const m=K(n.capaLinha);return{...n,imagemCapaUrl:m,imagem:m}}return n},[n]),{src:o,onError:tr,isFallback:A,isResolved:_r}=cn(jr,V),Nr=wr?.trim()||(n.capaLinha?K(n.capaLinha):""),Cr=n.capaCategoria?K(n.capaCategoria):"",{paletteStyle:Pr,paletteReady:Mr}=mn(Nr,!0,Cr),{warmOnIntent:ar,cancelWarm:or}=jn(E,n,d),S=a.useMemo(()=>o?!o.startsWith("http")&&!o.startsWith("//")&&!o.startsWith("data:"):!1,[o]),Ir=Zr(o)&&!/googleusercontent\.com/i.test(o)&&!/drive\.google\.com/i.test(o),Er=!S&&!A&&rr!==o,Ar=!V&&/^https:\/\/lh3\.googleusercontent\.com\/d\//i.test(o)?[320,640,960].map(e=>`${Hr(o,e)} ${e}w`).join(", "):void 0,R=a.useMemo(()=>{const e=String(n.linha||"").trim(),i=Qr.getProductVersion(n),m=String(n.baseWindows||"").trim().match(/^Windows (10|11) Pro( for Workstations)?$/i);return!e||!n.versao?.trim()||!i||!m||n.legacy||n.isCombo||n.temOpcoes||/^COMBO/i.test(n.code)||String(n.filtro||"").toUpperCase()==="COMBOS"||rn(n)||nn(n)!=="os"?null:{title:`${e.toLocaleUpperCase("pt-BR")} ${i.nome} — Windows ${m[1]}${m[2]?" for Workstations":""}`}},[n]),C=a.useMemo(()=>R?R.title:(n.nome||n.nomeBase||"").trim(),[n,R]),Sr=a.useMemo(()=>n.edicao||n._displayTag||"",[n]),Rr=a.useMemo(()=>n.versao||"",[n]),Lr=a.useMemo(()=>n.baseWindows||"",[n]),q=n.isCombo||!1,G=n.comboItems||n.combo||[],L=[n.linha,Sr,Rr,Lr,n.colecao,n.anoColecao].map(e=>String(e??"").trim()).find(Boolean);br([n],t);const ir=n.variants||[],T=ir.some(e=>e.code===n.code)?null:[...ir].filter(e=>Number(e.preco)>0).sort((e,i)=>e.preco-i.preco)[0],U=T?{...n,code:T.code,valorAvulso:T.preco}:n,J=Number(U.valorAvulso)||0,lr=hr.price(U),Or=en(t?.isVIP,t?.validadeAcesso),c=hr.price(U,Or),y=c<lr,sr=tn(),{cardTotal:$r,strikePrice:k,descPctPix:z,bestInstallment:O}=a.useMemo(()=>{if(c<=0)return{cardTotal:0,strikePrice:0,descPctPix:0,bestInstallment:null};const e=ln(c,sr),i=J>0?J:an(n.valorAvulso||0),m=i>c?i:0,X=on(e),Gr=X.length>0?X[X.length-1]:null,Tr=m>c?Math.round((m-c)/m*100):0;return{cardTotal:e,strikePrice:m,descPctPix:Tr,bestInstallment:Gr}},[c,J,n.valorAvulso,sr]),h=!!n.temOpcoes&&Array.isArray(n.opcoes)&&n.opcoes.length>1||Array.isArray(n.opcoesLicenca)&&n.opcoesLicenca.length>0,D=lr<=0,pr=n.isGratuito===!0&&D,P=a.useMemo(()=>q&&G.length>1?Math.min(G.length-1,3):0,[q,G]);a.useEffect(()=>{(S||A)&&F(o)},[o,S,A]),a.useEffect(()=>{if(!W.current||P===0)return;const e=requestAnimationFrame(()=>{W.current?.classList.add("emerged")});return()=>cancelAnimationFrame(e)},[P]),a.useEffect(()=>{if(!(!b||!E.current))return E.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),er(!0),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>er(!1),2800),()=>{N.current&&clearTimeout(N.current)}},[b]);const cr=s?"Finalizar":f==="expired"?"Renovar acesso":"Comprar agora",mr=a.useCallback(e=>{if(e.stopPropagation(),f==="owned"){yr();return}s||(window.dispatchEvent(new CustomEvent("cart:added")),g()),window.dispatchEvent(new CustomEvent("skull:navigate",{detail:{tab:"carrinho"}}))},[s,g,f]),Vr=a.useCallback(e=>{e.stopPropagation(),x?.()},[x]),Br=a.useCallback(e=>{e.stopPropagation();const i=[...vr(n),...n.imagensAdicionais||[]].filter(Boolean),m=kr([o||xr],i);l(),j?j(m,0,n):window.dispatchEvent(new CustomEvent("skull:open-gallery",{detail:{images:m,index:0,product:n}}))},[n,o,j,l]),Fr=a.useCallback(e=>{e.target===e.currentTarget&&(e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),l()))},[l]),dr=r.jsxs("div",{ref:E,"data-image-ready":_r?"true":"false",className:`ml-product-card w-full min-h-[320px]${nr?" ml-card-ring":""}${b&&!nr?" ml-card-glow":""}${_?" ml-product-card--minimal":""}`,"data-mobile-focusable":d?"true":"false","data-mobile-focused":"false",onClick:l,onKeyDown:Fr,onPointerEnter:ar,onPointerLeave:or,onFocus:ar,onBlur:or,"data-detail-expanded":p?"true":"false",children:[t&&t.isAdmin&&r.jsx("button",{tabIndex:d?void 0:-1,type:"button",className:"skull-admin-edit-btn","aria-label":"Ver produto no painel",onClick:e=>{e.stopPropagation(),window.dispatchEvent(new CustomEvent("edit-product-from-store",{detail:{id:n.id}}))},children:r.jsx(dn,{size:11})}),r.jsx("button",{type:"button",tabIndex:-1,className:"ml-btn-details-hidden",style:{position:"absolute",width:0,height:0,opacity:0,pointerEvents:"none",overflow:"hidden"},onClick:e=>{e.stopPropagation(),l()},children:"Detalhes"}),r.jsxs("div",{className:"ml-product-img-area",children:[r.jsx("div",{className:"ml-card-badges",children:r.jsx("span",{className:"ml-badge-digital",children:r.jsxs("span",{className:"ml-badge-item",children:[r.jsx(fn,{size:11,className:"ml-badge-icon ml-badge-icon-zap"}),"ENTREGA IMEDIATA"]})})}),x&&r.jsx("button",{tabIndex:d?void 0:-1,type:"button",className:`ml-favorite-btn ${v?"active":""}`,onClick:Vr,"aria-label":v?"Remover dos favoritos":"Adicionar aos favoritos",children:r.jsx(gn,{size:15,fill:v?"currentColor":"none"})}),r.jsxs("button",{type:"button",tabIndex:d?void 0:-1,"aria-label":`Abrir galeria de ${C}`,className:"ml-product-img-wrapper",onClick:Br,"data-testid":"product-cover-trigger",children:[Er&&r.jsx("div",{className:"skull-skeleton-img skull-skeleton-img--overlay","aria-hidden":"true"}),r.jsx("img",{loading:u?"eager":"lazy",decoding:"async",fetchPriority:u?"high":"auto",src:o,srcSet:Ar||(!V&&o===n.imagemCapaUrl?n.imagemCapaSrcSet:void 0),sizes:"(min-width: 1024px) 420px, (min-width: 640px) 45vw, 92vw",alt:C,width:n.imagemCapaDimensions?.width||420,height:n.imagemCapaDimensions?.height||160,onError:()=>{F(o),tr()},onLoad:e=>{const i=e.currentTarget;if(i.naturalWidth===0||i.naturalHeight===0){tr();return}F(o)},className:"ml-product-img",referrerPolicy:"no-referrer",...Ir?{crossOrigin:"anonymous"}:{},style:{opacity:S||A||rr===o?1:0}})]}),r.jsxs("div",{className:"ml-card-collection-strip ml-product-collection-kicker",style:Pr,"data-cover-palette":Mr?"ready":void 0,"aria-label":n.linha||(L?`Edição: ${L}`:void 0),"data-empty":!L||void 0,children:[r.jsx(bn,{size:13,className:"ml-collection-badge-icon"}),r.jsx("span",{className:"ml-collection-badge-text",children:L})]})]}),r.jsxs("div",{className:"ml-product-info",children:[r.jsx("h3",{className:`ml-product-title sk-card-title${R?" ml-product-title--commercial":""}`,children:C}),r.jsx("div",{className:"ml-price-area",children:pr&&!h?r.jsxs("div",{className:"ml-price-block",children:[r.jsx("div",{className:"ml-price-original sk-price-strike-row invisible select-none pointer-events-none","aria-hidden":"true",children:r.jsx("span",{className:"ml-price-strike-spacer",children:" "})}),r.jsx("div",{className:"ml-price-main ml-price-credit-row",children:r.jsx("span",{className:"ml-price-free",children:"Gratuito"})}),r.jsx("div",{className:"ml-price-installments",children:f!=="available"?r.jsx("span",{className:"sk-fg-accent ml-card-access-status",role:"status",children:f==="owned"?"Já adquirido · acesso ativo":"Já adquirido · acesso expirado"}):r.jsx("span",{className:"ml-price-installments-spacer","aria-hidden":"true",children:" "})})]}):D&&!h?r.jsxs("div",{className:"ml-price-block",children:[r.jsx("div",{className:"ml-price-original sk-price-strike-row invisible select-none pointer-events-none","aria-hidden":"true",children:r.jsx("span",{className:"ml-price-strike-spacer",children:" "})}),r.jsx("div",{className:"ml-price-main ml-price-credit-row",children:r.jsx("span",{className:"ml-price-login",children:"Preço indisponível"})}),r.jsx("div",{className:"ml-price-installments",children:f!=="available"?r.jsx("span",{className:"sk-fg-accent ml-card-access-status",role:"status",children:f==="owned"?"Já adquirido · acesso ativo":"Já adquirido · acesso expirado"}):r.jsx("span",{className:"ml-price-installments-spacer","aria-hidden":"true",children:" "})})]}):c>0?r.jsxs("div",{className:"ml-price-block",children:[r.jsx("div",{className:`ml-price-original sk-price-strike-row ${h||k>c||y?"":"invisible select-none pointer-events-none"}`,"aria-hidden":h||k>c||y?void 0:"true",children:h?r.jsxs("div",{className:"flex items-center gap-1.5",children:[r.jsx("span",{className:"ml-price-from-label",children:"A partir de"}),k>c&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"ml-price-old",children:M(k)}),z>0&&r.jsxs("span",{className:"sk-off-pill","aria-label":String(z)+"% de economia no Pix",children:[z,"% OFF"]})]}),y&&r.jsxs("span",{className:"ml-price-vip-tag",children:[r.jsx(ur,{size:11})," ","VIP"]})]}):k>c||y?r.jsxs(r.Fragment,{children:[k>c&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"ml-price-old",children:M(k)}),z>0&&r.jsxs("span",{className:"sk-off-pill","aria-label":String(z)+"% de economia no Pix",children:[z,"% OFF"]})]}),y&&r.jsxs("span",{className:"ml-price-vip-tag",children:[r.jsx(ur,{size:11})," ","VIP"]})]}):r.jsx("span",{className:"ml-price-strike-spacer","aria-hidden":"true",children:" "})}),r.jsx("div",{className:"ml-price-main ml-price-credit-row",children:r.jsxs("div",{className:"ml-price-cash-row",children:[r.jsx("span",{className:`ml-price-value ml-money${y?" vip":""}`,children:M(c)}),r.jsx("span",{className:"ml-price-pix-badge",children:"NO PIX COM DESCONTO"})]})}),r.jsx("div",{className:"ml-price-installments",children:f!=="available"?r.jsx("span",{className:"sk-fg-accent ml-card-access-status",role:"status",children:f==="owned"?"Já adquirido · acesso ativo":"Já adquirido · acesso expirado"}):O&&O.installments>1?r.jsxs("span",{children:[M($r)," ","em até"," ",r.jsxs("span",{className:"ml-price-installments-highlight",children:[O.installments,"x de"," ",M(O.installmentValue)]})," s/ juros"]}):r.jsx("span",{className:"ml-price-installments-spacer","aria-hidden":"true",children:" "})})]}):h?r.jsxs("div",{className:"ml-price-block",children:[r.jsx("div",{className:"ml-price-original sk-price-strike-row",children:r.jsx("span",{className:"ml-price-from-label",children:"A partir de"})}),r.jsx("div",{className:"ml-price-main ml-price-credit-row",children:r.jsx("span",{className:"ml-price-value ml-money",children:"Ver planos"})}),r.jsx("div",{className:"ml-price-installments",children:f!=="available"?r.jsx("span",{className:"sk-fg-accent ml-card-access-status",role:"status",children:f==="owned"?"Já adquirido · acesso ativo":"Já adquirido · acesso expirado"}):r.jsx("span",{className:"ml-price-installments-spacer","aria-hidden":"true",children:" "})})]}):r.jsx("button",{tabIndex:d?void 0:-1,type:"button",className:"ml-price-login",onClick:e=>{e.stopPropagation(),window.dispatchEvent(new CustomEvent("skull:require-login")),l()},children:"Consulte condições"})}),r.jsx("div",{className:"ml-card-footer",children:f==="owned"&&!h?r.jsx("div",{className:"ml-action-buttons",children:r.jsx("button",{tabIndex:d?void 0:-1,type:"button",className:"ml-btn-buy-now full-width",onClick:mr,"aria-label":`Acessar coleção ${C}`,children:r.jsx("span",{children:"Acessar na coleção"})})}):pr&&!h?r.jsx("div",{className:"ml-action-buttons",children:r.jsxs("button",{tabIndex:d?void 0:-1,type:"button",className:"ml-btn-rescue full-width",onClick:e=>{if(e.stopPropagation(),!t){window.dispatchEvent(new CustomEvent("skull:require-register"));return}if(w){w();return}if(B?.handleRescue){B.handleRescue(n);return}g()},children:[t?r.jsx(hn,{size:14,"aria-hidden":!0}):r.jsx(xn,{size:14,className:"ml-cart-lock-icon","aria-hidden":!0}),r.jsx("span",{children:"Resgatar Grátis"})]})}):D&&!h?r.jsx("div",{className:"ml-action-buttons",children:r.jsxs("button",{tabIndex:d?void 0:-1,type:"button",className:"ml-btn-ghost full-width",onClick:e=>{e.stopPropagation(),l()},children:[r.jsx(un,{size:14}),"Ver detalhes"]})}):h?r.jsx("div",{className:"ml-action-buttons",children:r.jsxs("button",{tabIndex:d?void 0:-1,type:"button",className:"ml-btn-primary full-width",onClick:e=>{e.stopPropagation(),l()},children:[r.jsx(vn,{size:14}),"Ver Planos"]})}):r.jsxs("div",{className:"ml-action-buttons ml-action-buttons--split",children:[r.jsx("button",{tabIndex:d?void 0:-1,type:"button",className:"ml-btn-buy-now",onClick:mr,"aria-label":`${cr} ${C}`,children:r.jsx("span",{children:cr})}),r.jsx("button",{type:"button",tabIndex:d?void 0:-1,ref:zr,className:`ml-btn-cart ml-btn-cart--icon-square ${s?"in-cart":""}`,onClick:e=>{e.stopPropagation(),s||window.dispatchEvent(new CustomEvent("cart:added",{detail:{fromCartButton:!0}})),g()},"aria-label":s?"Remover do Carrinho":"Adicionar ao Carrinho","aria-pressed":s,children:s?r.jsx(kn,{size:18,strokeWidth:2.4,"aria-hidden":"true"}):r.jsx(_n,{size:21})})]})})]})]}),Wr=q?"skull-combo-wrapper":"",qr="skull-combo-layer";return r.jsx(r.Fragment,{children:P>0?r.jsxs("div",{ref:W,className:`${Wr} w-full`,children:[Array.from({length:P},(e,i)=>P-i).map(e=>r.jsx("div",{className:qr,"data-idx":String(e)},e)),dr]}):dr})},(n,t)=>n.product===t.product&&(n.product.code||n.product.id||n.product.nomeBase)===(t.product.code||t.product.id||t.product.nomeBase)&&n.product.valorAvulso===t.product.valorAvulso&&n.product.valorPromocao===t.product.valorPromocao&&n.product.valorAssinante===t.product.valorAssinante&&n.product.temPromocao===t.product.temPromocao&&n.product.isOfertaRelampago===t.product.isOfertaRelampago&&n.isInCart===t.isInCart&&n.user?.email===t.user?.email&&n.user?.isVIP===t.user?.isVIP&&n.user?.validadeAcesso===t.user?.validadeAcesso&&n.isHighlighted===t.isHighlighted&&n.isDetailExpanded===t.isDetailExpanded&&n.onOpenGallery===t.onOpenGallery&&n.isFavorite===t.isFavorite);export{_n as C,An as P,wn as d};
