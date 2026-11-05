import{r as i,j as r}from"./vendor-react.Bxpvzt8v.js";import{u as V,F as e,v}from"./index.BTWVkF_m.js";import"./vendor-firebase-lite.DWLIakt4.js";import"./vendor-icons.bDPCiqgI.js";const z=`/* skull-style-rev:vip:mw2zoks0 */
.vip-root {\r
  position: relative;\r
  width: 100%;\r
  min-height: 100%;\r
  overflow-x: hidden;\r
\r
  background: var(--sk-ds-page);\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .vip-root {\r
  background: var(--sk-ds-page);\r
  color: var(--sk-ds-t1);\r
}\r
\r
.vip-wrapper {\r
  position: relative;\r
  z-index: 10;\r
\r
  width: var(--sk-page-col, min(var(--rv-page-max, 1312px), calc(100% - (var(--rv-page-gutter, 24px) * 2))));\r
  margin-inline: auto;\r
  padding: 28px 0 32px;\r
}\r
@media (min-width: 768px) {\r
  .vip-wrapper { padding: 36px 0 36px; }\r
}\r
\r
.vip-hero-section {\r
  border-radius: var(--sk-r-sm, 6px);\r
  overflow: hidden;\r
  margin-bottom: 24px;\r
\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  background: var(--sk-palette-neutral-ffffff);\r
  box-shadow: none;\r
}\r
html.dark .vip-hero-section {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  box-shadow: none;\r
}\r
\r
.vip-hero-text {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  padding: clamp(20px, 4vw, 36px) clamp(16px, 3vw, 32px);\r
}\r
\r
.vip-hero-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: 0.1em;\r
  padding: 4px 12px;\r
  border-radius: 99px;\r
  margin-bottom: 20px;\r
  color: var(--sk-palette-orange-d97706);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 25%, transparent);\r
}\r
html.dark .vip-hero-badge {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 30%, transparent);\r
}\r
\r
.vip-hero-title {\r
  font-family: 'Montserrat', system-ui, sans-serif;\r
  font-size: clamp(1.625rem, 5.5vw, 2.5rem);\r
  font-weight: 700;\r
  line-height: 1.12;\r
  letter-spacing: -0.025em;\r
  margin: 0 0 16px;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-hero-title { color: var(--sk-ds-t1); }\r
\r
.vip-hero-accent {\r
  color: var(--sk-ds-premium);\r
}\r
\r
.vip-hero-desc {\r
  font-size: clamp(0.8125rem, 2.4vw, 0.9375rem);\r
  line-height: 1.7;\r
  margin: 0 0 24px;\r
  max-width: 560px;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-hero-desc { color: var(--sk-ds-t2); }\r
\r
.vip-vip-status-list {\r
  list-style: none;\r
  padding: 0;\r
  margin: 0 0 20px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
  width: 100%;\r
  max-width: 480px;\r
}\r
\r
.vip-status-item {\r
  display: flex;\r
  align-items: center;\r
  text-align: left;\r
  gap: 10px;\r
  font-size: 0.8125rem;\r
  font-weight: 500;\r
  padding: 10px 14px;\r
  border-radius: 12px;\r
\r
  background: var(--sk-palette-blue-f9fafb);\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-status-item {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  color: var(--sk-ds-t2);\r
}\r
.vip-status-item.amber {\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 6%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 20%, transparent);\r
  color: var(--sk-palette-orange-d97706);\r
}\r
html.dark .vip-status-item.amber {\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 8%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 25%, transparent);\r
  color: var(--sk-palette-orange-fbbf24);\r
}\r
\r
.vip-status-item.green {\r
  background: var(--sk-ds-accent-soft);\r
  border-color: var(--sk-ds-accent-line);\r
  color: var(--sk-ds-accent);\r
}\r
\r
.vip-highlight-tags {\r
  display: flex;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  gap: 8px;\r
}\r
\r
.vip-tag {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  padding: 6px 12px;\r
  border-radius: 99px;\r
\r
  color: var(--sk-ds-t2);\r
  background: var(--sk-palette-blue-f3f4f6);\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
}\r
html.dark .vip-tag {\r
  color: var(--sk-ds-t2);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
\r
.vip-tag-icon { color: var(--sk-palette-orange-f59e0b); }\r
\r
.vip-cta-btn {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  width: 100%;\r
  padding: 16px 24px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: none;\r
  font-family: 'Montserrat', system-ui, sans-serif;\r
  font-size: 0.9375rem;\r
  font-weight: 700;\r
  letter-spacing: 0.01em;\r
  cursor: pointer;\r
  transition: transform 0.15s ease, box-shadow 0.15s ease;\r
  background: linear-gradient(135deg, var(--sk-palette-orange-f59e0b), var(--sk-palette-orange-fcd34d));\r
  color: var(--sk-palette-neutral-000000);\r
  box-shadow: none;\r
}\r
.vip-cta-btn:hover { transform: scale(1.02); box-shadow: none; }\r
.vip-cta-btn:active { transform: scale(0.98); }\r
\r
.vip-hero-cta {\r
  max-width: 320px;\r
  margin-top: 24px;\r
}\r
\r
.vip-cta-note {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  margin-top: 10px;\r
  text-align: center;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-cta-note { color: var(--sk-ds-t2); }\r
\r
.vip-already-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 12px 20px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-size: 0.875rem;\r
  font-weight: 700;\r
  margin-bottom: 8px;\r
  color: var(--sk-palette-orange-d97706);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 30%, transparent);\r
}\r
html.dark .vip-already-badge {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 35%, transparent);\r
}\r
\r
.vip-already-note {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  color: var(--sk-ds-accent);\r
}\r
\r
.vip-stats-grid {\r
  display: grid;\r
  grid-template-columns: 1fr 1fr;\r
  gap: 12px;\r
  margin-bottom: 40px;\r
}\r
@media (min-width: 1024px) {\r
  .vip-stats-grid { grid-template-columns: repeat(4, 1fr); }\r
}\r
\r
.vip-stat-card {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 8px;\r
  padding: clamp(16px, 3vw, 20px) clamp(10px, 2.5vw, 16px);\r
  border-radius: 20px;\r
  transition: border-color 0.2s;\r
\r
  background: var(--sk-palette-neutral-ffffff);\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  box-shadow: none;\r
}\r
html.dark .vip-stat-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
  box-shadow: none;\r
}\r
.vip-stat-card:hover {\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 30%, transparent);\r
}\r
\r
.vip-stat-icon {\r
  font-size: 1.25rem;\r
  color: var(--sk-palette-orange-f59e0b);\r
}\r
html.dark .vip-stat-icon { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-stat-value {\r
  font-family: 'Orbitron', 'Montserrat', sans-serif;\r
  font-size: clamp(1.25rem, 4.2vw, 1.75rem);\r
  font-weight: 700;\r
  line-height: 1;\r
  text-align: center;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-stat-value { color: var(--sk-ds-t1); }\r
\r
.vip-stat-label {\r
  font-size: 0.75rem;\r
  font-weight: 500;\r
  line-height: 1.35;\r
  text-align: center;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-stat-label { color: var(--sk-ds-t2); }\r
\r
.vip-section { margin-bottom: 48px; }\r
\r
.vip-section-badge {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: 0.1em;\r
  padding: 4px 12px;\r
  border-radius: 99px;\r
  margin-bottom: 16px;\r
  color: var(--sk-palette-orange-d97706);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 8%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 22%, transparent);\r
}\r
html.dark .vip-section-badge {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 25%, transparent);\r
}\r
\r
.vip-section-title {\r
  font-family: 'Montserrat', system-ui, sans-serif;\r
  font-size: clamp(1.0625rem, 3.4vw, 1.375rem);\r
  font-weight: 700;\r
  line-height: 1.25;\r
  text-align: center;\r
  margin: 0 0 8px;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-section-title { color: var(--sk-ds-t1); }\r
.vip-section-title .accent { color: var(--sk-palette-orange-f59e0b); }\r
html.dark .vip-section-title .accent { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-section-sub {\r
  font-size: clamp(0.75rem, 2.2vw, 0.8125rem);\r
  line-height: 1.6;\r
  text-align: center;\r
  margin: 0 0 32px;\r
  max-width: 520px;\r
  margin-left: auto;\r
  margin-right: auto;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-section-sub { color: var(--sk-ds-t2); }\r
\r
.vip-software-banner {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 20px;\r
  align-items: center;\r
  padding: 24px;\r
  border-radius: 20px;\r
  text-align: center;\r
\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 20%, transparent);\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-palette-orange-f59e0b) 5%, transparent), color-mix(in srgb, var(--sk-palette-orange-f59e0b) 2%, transparent));\r
}\r
html.dark .vip-software-banner {\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 22%, transparent);\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-palette-orange-fbbf24) 8%, transparent), color-mix(in srgb, var(--sk-palette-orange-fbbf24) 3%, transparent));\r
}\r
@media (min-width: 768px) {\r
  .vip-software-banner { flex-direction: row; text-align: left; }\r
}\r
\r
.vip-software-icon {\r
  width: 56px;\r
  height: 56px;\r
  border-radius: 18px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 1.5rem;\r
  flex-shrink: 0;\r
  color: var(--sk-palette-orange-f59e0b);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 22%, transparent);\r
}\r
html.dark .vip-software-icon {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 28%, transparent);\r
}\r
\r
.vip-software-body { flex: 1; }\r
.vip-software-body-title {\r
  font-size: clamp(0.8125rem, 2.4vw, 0.875rem);\r
  font-weight: 700;\r
  margin-bottom: 4px;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-software-body-title { color: var(--sk-ds-t1); }\r
.vip-software-body-sub {\r
  font-size: 0.8125rem;\r
  line-height: 1.6;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-software-body-sub { color: var(--sk-ds-t2); }\r
\r
.vip-exclusive-tag {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  padding: 6px 14px;\r
  border-radius: 99px;\r
  flex-shrink: 0;\r
  color: var(--sk-palette-orange-d97706);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 12%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 25%, transparent);\r
}\r
html.dark .vip-exclusive-tag {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 28%, transparent);\r
}\r
\r
.vip-benefits-grid {\r
  display: grid;\r
  grid-template-columns: repeat(2, 1fr);\r
  gap: clamp(10px, 2.4vw, 16px);\r
}\r
@media (min-width: 1024px) {\r
  .vip-benefits-grid { grid-template-columns: repeat(3, 1fr); }\r
}\r
\r
.vip-benefit-card {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  padding: clamp(14px, 3vw, 20px);\r
  border-radius: 20px;\r
  border: 1px solid;\r
  transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.2s;\r
\r
  border-color: var(--sk-palette-blue-e5e7eb);\r
  background: var(--sk-palette-neutral-ffffff);\r
}\r
html.dark .vip-benefit-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
.vip-benefit-card.highlight {\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 30%, transparent) !important;\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 4%, transparent) !important;\r
}\r
html.dark .vip-benefit-card.highlight {\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 35%, transparent) !important;\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 5%, transparent) !important;\r
}\r
\r
.vip-benefit-card.hidden-anim,\r
.vip-benefit-card.visible-anim {\r
  opacity: 1;\r
  transform: none;\r
  transition: none;\r
}\r
\r
.vip-benefit-icon-wrap {\r
  width: 44px;\r
  height: 44px;\r
  border-radius: 14px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
  font-size: 1.125rem;\r
  margin: 0 auto 10px;\r
}\r
\r
.vip-benefit-title {\r
  font-size: clamp(0.75rem, 2.3vw, 0.875rem);\r
  font-weight: 700;\r
  line-height: 1.3;\r
  margin-bottom: 6px;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-benefit-title { color: var(--sk-ds-t1); }\r
\r
.vip-benefit-desc {\r
  font-size: 0.8125rem;\r
  line-height: 1.55;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-benefit-desc { color: var(--sk-ds-t2); }\r
\r
.vip-benefit-tag {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  font-size: 0.6rem;\r
  font-weight: 700;\r
  margin-top: 8px;\r
  padding: 3px 10px;\r
  border-radius: 99px;\r
  color: var(--sk-palette-orange-d97706);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 22%, transparent);\r
}\r
html.dark .vip-benefit-tag {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 25%, transparent);\r
}\r
\r
.vip-compare-wrap {\r
  border-radius: 20px;\r
  overflow: hidden;\r
\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
}\r
html.dark .vip-compare-wrap { border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent); }\r
\r
.vip-compare-header {\r
  display: grid;\r
  grid-template-columns: 1fr 64px 64px;\r
\r
  background: var(--sk-palette-blue-f9fafb);\r
  border-bottom: 1px solid var(--sk-palette-blue-e5e7eb);\r
}\r
html.dark .vip-compare-header {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
@media (min-width: 768px) {\r
  .vip-compare-header { grid-template-columns: 1fr 80px 80px; }\r
}\r
\r
.vip-compare-th-label {\r
  padding: 12px 16px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: 0.06em;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-compare-th-label { color: var(--sk-ds-t2); }\r
\r
.vip-compare-th-vip {\r
  padding: 12px 8px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  text-align: center;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 6px;\r
  color: var(--sk-palette-orange-f59e0b);\r
}\r
html.dark .vip-compare-th-vip { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-compare-th-std {\r
  padding: 12px 8px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  text-align: center;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-compare-th-std { color: var(--sk-ds-t2); }\r
\r
.vip-compare-row {\r
  display: grid;\r
  grid-template-columns: 1fr 64px 64px;\r
  border-bottom: 1px solid;\r
  transition: background 0.15s;\r
\r
  border-color: var(--sk-palette-blue-f3f4f6);\r
}\r
@media (min-width: 768px) {\r
  .vip-compare-row { grid-template-columns: 1fr 80px 80px; }\r
}\r
html.dark .vip-compare-row { border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent); }\r
.vip-compare-row:last-child { border-bottom: none; }\r
.vip-compare-row.even {\r
\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 1%, transparent);\r
}\r
html.dark .vip-compare-row.even { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent); }\r
.vip-compare-row:hover {\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 3%, transparent);\r
}\r
html.dark .vip-compare-row:hover { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent); }\r
\r
.vip-compare-feat {\r
  padding: 14px 16px;\r
  font-size: clamp(0.75rem, 2.2vw, 0.875rem);\r
  line-height: 1.4;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-compare-feat { color: var(--sk-ds-t2); }\r
\r
.vip-compare-feat-icon {\r
  font-size: 0.75rem;\r
  flex-shrink: 0;\r
\r
  color: var(--sk-ds-accent, var(--sk-accent));\r
}\r
html.dark .vip-compare-feat-icon { color: var(--sk-ds-accent, var(--sk-accent)); }\r
\r
.vip-compare-cell {\r
  padding: 14px 8px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.vip-qa-grid {\r
  display: grid;\r
  grid-template-columns: repeat(2, 1fr);\r
  gap: clamp(10px, 2.4vw, 16px);\r
}\r
\r
.vip-qa-card {\r
  padding: clamp(14px, 3vw, 20px);\r
  border-radius: 20px;\r
  transition: border-color 0.2s;\r
\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  background: var(--sk-palette-neutral-ffffff);\r
}\r
html.dark .vip-qa-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
.vip-qa-card:hover { border-color: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 25%, transparent); }\r
html.dark .vip-qa-card:hover { border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 22%, transparent); }\r
\r
.vip-qa-icon-wrap {\r
  width: 36px;\r
  height: 36px;\r
  border-radius: 12px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 0.875rem;\r
  margin: 0 auto 12px;\r
  color: var(--sk-palette-orange-f59e0b);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 8%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 18%, transparent);\r
}\r
html.dark .vip-qa-icon-wrap {\r
  color: var(--sk-palette-orange-fbbf24);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 20%, transparent);\r
}\r
\r
.vip-qa-question {\r
  font-size: clamp(0.75rem, 2.3vw, 0.875rem);\r
  font-weight: 700;\r
  line-height: 1.35;\r
  text-align: center;\r
  margin-bottom: 8px;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-qa-question { color: var(--sk-ds-t1); }\r
\r
.vip-qa-answer {\r
  font-size: 0.8125rem;\r
  line-height: 1.6;\r
  text-align: left;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-qa-answer { color: var(--sk-ds-t2); }\r
\r
.vip-faq-list {\r
  max-width: 640px;\r
  margin: 0 auto;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.vip-faq-item {\r
  border-radius: 14px;\r
  overflow: hidden;\r
  transition: background 0.2s;\r
\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  background: var(--sk-palette-neutral-ffffff);\r
}\r
html.dark .vip-faq-item {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
}\r
.vip-faq-item.open {\r
\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 3%, transparent);\r
}\r
html.dark .vip-faq-item.open { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent); }\r
\r
.vip-faq-trigger {\r
  width: 100%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 16px 20px;\r
  text-align: left;\r
  gap: 12px;\r
  background: none;\r
  border: none;\r
  cursor: pointer;\r
}\r
\r
.vip-faq-question {\r
  font-size: clamp(0.8125rem, 2.4vw, 0.875rem);\r
  font-weight: 700;\r
  line-height: 1.4;\r
  transition: color 0.15s;\r
\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .vip-faq-question { color: var(--sk-ds-t1); }\r
.vip-faq-trigger:hover .vip-faq-question { color: var(--sk-palette-orange-f59e0b); }\r
html.dark .vip-faq-trigger:hover .vip-faq-question { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-faq-chevron {\r
  font-size: 0.75rem;\r
  transition: transform 0.3s;\r
  color: var(--sk-palette-orange-f59e0b);\r
  flex-shrink: 0;\r
}\r
html.dark .vip-faq-chevron { color: var(--sk-palette-orange-fbbf24); }\r
.vip-faq-chevron.open { transform: rotate(180deg); }\r
\r
.vip-faq-body {\r
  overflow: hidden;\r
  transition: max-height 0.3s ease, opacity 0.3s ease;\r
  max-height: 0;\r
  opacity: 0;\r
}\r
.vip-faq-body.open { max-height: 320px; opacity: 1; }\r
\r
.vip-faq-answer {\r
  padding: 0 20px 16px;\r
  font-size: 0.8125rem;\r
  line-height: 1.65;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-faq-answer { color: var(--sk-ds-t2); }\r
\r
.vip-offer-section {\r
\r
  scroll-margin-top: 88px;\r
  text-align: center;\r
}\r
\r
.vip-offer-center {\r
  display: flex;\r
  justify-content: center;\r
}\r
\r
.vip-plan-card {\r
  width: 100%;\r
  max-width: 480px;\r
  border-radius: 24px;\r
  overflow: hidden;\r
  text-align: left;\r
\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 25%, transparent);\r
}\r
html.dark .vip-plan-card { border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 30%, transparent); }\r
\r
.vip-plan-card-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  padding: 10px 20px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  text-transform: uppercase;\r
  letter-spacing: 0.12em;\r
  background: var(--sk-palette-orange-f59e0b);\r
  color: var(--sk-palette-neutral-000000);\r
}\r
html.dark .vip-plan-card-header { background: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-plan-card-body {\r
  padding: clamp(24px, 4vw, 32px);\r
\r
  background: linear-gradient(to bottom, color-mix(in srgb, var(--sk-palette-orange-f59e0b) 5%, transparent), transparent);\r
}\r
html.dark .vip-plan-card-body {\r
  background: linear-gradient(to bottom, color-mix(in srgb, var(--sk-palette-orange-fbbf24) 8%, transparent), transparent);\r
}\r
\r
.vip-plan-prices {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: clamp(14px, 3vw, 24px);\r
  margin-bottom: 12px;\r
}\r
\r
.vip-plan-price-block { text-align: center; }\r
\r
.vip-price-currency {\r
  font-size: 1.125rem;\r
  font-weight: 700;\r
  margin-top: 8px;\r
  color: var(--sk-palette-orange-f59e0b);\r
}\r
html.dark .vip-price-currency { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-plan-price-sub-label {\r
  font-size: 0.75rem;\r
  margin-bottom: 4px;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-plan-price-sub-label { color: var(--sk-ds-t2); }\r
\r
.vip-plan-price-sub-val {\r
  font-family: 'Orbitron', 'Montserrat', sans-serif;\r
  font-size: clamp(1.75rem, 5vw, 2.25rem);\r
  font-weight: 700;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-plan-price-sub-val { color: var(--sk-ds-t1); }\r
\r
.vip-plan-price-sub-period {\r
  font-size: 0.75rem;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-plan-price-sub-period { color: var(--sk-ds-t2); }\r
\r
.vip-plan-price-sep {\r
  font-size: 1.25rem;\r
\r
  color: var(--sk-palette-blue-d1d5db);\r
}\r
html.dark .vip-plan-price-sep { color: color-mix(in srgb, var(--sk-palette-neutral-f0f0f0) 15%, transparent); }\r
\r
.vip-plan-price-annual-val {\r
  font-family: 'Montserrat', sans-serif;\r
  font-size: clamp(1.0625rem, 3vw, 1.25rem);\r
  font-weight: 700;\r
\r
  color: var(--sk-palette-blue-0f172a);\r
}\r
html.dark .vip-plan-price-annual-val { color: var(--sk-ds-t1); }\r
\r
.vip-plan-price-annual-sub {\r
  font-size: 0.75rem;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-plan-price-annual-sub { color: var(--sk-ds-t2); }\r
\r
.vip-plan-note {\r
  font-size: 0.75rem;\r
  text-align: center;\r
  margin-bottom: 24px;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-plan-note { color: var(--sk-ds-t2); }\r
.vip-plan-note strong { color: var(--sk-ds-t2); }\r
html.dark .vip-plan-note strong { color: var(--sk-ds-t2); }\r
\r
.vip-plan-features {\r
  list-style: none;\r
  padding: 0;\r
  margin: 0 0 24px;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
\r
.vip-plan-feature-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  font-size: clamp(0.8125rem, 2.4vw, 0.875rem);\r
  line-height: 1.45;\r
\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-plan-feature-item { color: var(--sk-ds-t2); }\r
\r
.vip-plan-check {\r
  font-size: 0.75rem;\r
  flex-shrink: 0;\r
  color: var(--sk-palette-orange-f59e0b);\r
}\r
html.dark .vip-plan-check { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-member-panel {\r
  max-width: 760px;\r
  margin: 0 auto;\r
  padding-top: 8px;\r
}\r
\r
.vip-member-head {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  gap: 12px;\r
  margin-bottom: 32px;\r
}\r
\r
.vip-member-title {\r
  margin: 0;\r
  font-family: var(--sk-font-heading);\r
  font-weight: 700;\r
  font-size: clamp(24px, 3vw, 32px);\r
  line-height: 1.15;\r
  letter-spacing: -0.02em;\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .vip-member-title { color: var(--sk-palette-neutral-ffffff); }\r
\r
.vip-member-sub {\r
  margin: 0;\r
  font-size: 0.875rem;\r
  line-height: 1.5;\r
  max-width: 460px;\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-member-sub { color: var(--sk-ds-t2); }\r
\r
.vip-member-validity {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 8px 14px;\r
  border-radius: 999px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 7%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-f59e0b) 22%, transparent);\r
  color: var(--sk-palette-red-b45309);\r
}\r
html.dark .vip-member-validity {\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 8%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 25%, transparent);\r
  color: var(--sk-palette-orange-fbbf24);\r
}\r
.vip-member-validity-days { font-weight: 600; opacity: 0.8; }\r
\r
.vip-member-section-title {\r
  margin: 0 0 14px;\r
  font-family: var(--sk-font-heading);\r
  font-size: clamp(18px, 2vw, 24px);\r
  font-weight: 700;\r
  text-transform: none;\r
  letter-spacing: -0.02em;\r
  line-height: 1.3;\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .vip-member-section-title { color: var(--sk-ds-t1); }\r
\r
.vip-member-actions {\r
  display: grid;\r
  gap: 10px;\r
  margin-bottom: 36px;\r
}\r
\r
.vip-member-action {\r
  display: flex;\r
  align-items: center;\r
  gap: 14px;\r
  width: 100%;\r
  padding: 14px 16px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  text-align: left;\r
  cursor: pointer;\r
  transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;\r
  background: var(--sk-palette-neutral-ffffff);\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
}\r
html.dark .vip-member-action {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
.vip-member-action:hover:not(:disabled) {\r
  transform: translateY(-1px);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 45%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 4%, transparent);\r
}\r
html.dark .vip-member-action:hover:not(:disabled) {\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 40%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-orange-fbbf24) 6%, transparent);\r
}\r
.vip-member-action:disabled { cursor: default; opacity: 0.75; }\r
\r
.vip-member-action-icon {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
  width: 42px;\r
  height: 42px;\r
  border-radius: 12px;\r
  font-size: 1rem;\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 12%, transparent);\r
  color: var(--sk-palette-orange-f59e0b);\r
}\r
html.dark .vip-member-action-icon { color: var(--sk-palette-orange-fbbf24); }\r
\r
.vip-member-action-body {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
  min-width: 0;\r
  flex: 1;\r
}\r
\r
.vip-member-action-title {\r
  font-size: 0.875rem;\r
  font-weight: 700;\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .vip-member-action-title { color: var(--sk-palette-neutral-ffffff); }\r
\r
.vip-member-action-desc {\r
  font-size: 0.75rem;\r
  line-height: 1.4;\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-member-action-desc { color: var(--sk-ds-t2); }\r
\r
.vip-member-action-chevron {\r
  flex-shrink: 0;\r
  font-size: 0.75rem;\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-member-action-chevron { color: var(--sk-ds-t2); }\r
\r
.vip-member-active { margin-bottom: 36px; }\r
\r
.vip-member-active-list {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
  display: grid;\r
  gap: 8px;\r
}\r
\r
.vip-member-active-item {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 11px 14px;\r
  border-radius: 12px;\r
  font-size: 0.8125rem;\r
  font-weight: 600;\r
  background: var(--sk-palette-blue-f9fafb);\r
  border: 1px solid var(--sk-palette-blue-e5e7eb);\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .vip-member-active-item {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
  color: color-mix(in srgb, var(--sk-palette-neutral-f0f0f0) 72%, transparent);\r
}\r
\r
@media (min-width: 640px) {\r
  .vip-member-active-list { grid-template-columns: repeat(2, 1fr); }\r
}\r
\r
.vip-member-faq { margin-bottom: 24px; }\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .vip-member-action { transition: none; }\r
  .vip-member-action:hover:not(:disabled) { transform: none; }\r
}`,k=147.9,S=365,C=k/S,N=C.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),A=(Math.floor(k/12*100)/100).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}),w="vip-oferta";function M(a){if(!a)return null;const o=new Date(a);return Number.isNaN(o.getTime())?null:o.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"})}function D(a){if(!a)return null;const o=new Date(a);if(Number.isNaN(o.getTime()))return null;const t=Math.ceil((o.getTime()-Date.now())/864e5);return t>=0?t:null}const y=i.memo(({question:a,answer:o})=>{const[t,p]=i.useState(!1);return r.jsxs("div",{className:`vip-faq-item ${t?"open":""}`,children:[r.jsxs("button",{className:"vip-faq-trigger",onClick:()=>p(l=>!l),"aria-expanded":t,children:[r.jsx("span",{className:"vip-faq-question",children:a}),r.jsx(e,{className:`fas fa-chevron-down vip-faq-chevron ${t?"open":""}`})]}),r.jsx("div",{className:`vip-faq-body ${t?"open":""}`,children:r.jsx("p",{className:"vip-faq-answer",dangerouslySetInnerHTML:{__html:o}})})]})}),h=i.memo(({target:a,suffix:o,icon:t,label:p})=>{const[l,c]=i.useState(0),d=i.useRef(null),s=i.useRef(!1);return i.useEffect(()=>{const m=d.current;if(!m)return;const b=new IntersectionObserver(([g])=>{if(g.isIntersecting&&!s.current){s.current=!0;const f=performance.now(),n=1400,x=P=>{const j=Math.min((P-f)/n,1),I=1-Math.pow(1-j,3);c(Math.round(a*I)),j<1&&requestAnimationFrame(x)};requestAnimationFrame(x)}},{threshold:.2});return b.observe(m),()=>b.disconnect()},[a]),r.jsxs("div",{ref:d,className:"vip-stat-card",children:[r.jsx(e,{className:`fas ${t} vip-stat-icon`}),r.jsxs("span",{className:"vip-stat-value",children:[l,o]}),r.jsx("span",{className:"vip-stat-label",children:p})]})}),u=i.memo(({icon:a,title:o,desc:t,iconBg:p,iconColor:l,highlight:c,tag:d})=>{const s=i.useRef(null),[m,b]=i.useState(!1);return i.useEffect(()=>{const g=s.current;if(!g)return;const f=new IntersectionObserver(([n])=>{n.isIntersecting&&(b(!0),f.disconnect())},{threshold:.06});return f.observe(g),()=>f.disconnect()},[]),r.jsxs("div",{ref:s,className:`vip-benefit-card ${c?"highlight":""} ${m?"visible-anim":"hidden-anim"}`,children:[r.jsx("div",{className:"vip-benefit-icon-wrap",style:{backgroundColor:p},children:r.jsx(e,{className:`fas ${a}`,style:{color:l}})}),r.jsx("div",{className:"vip-benefit-title",children:o}),r.jsx("div",{className:"vip-benefit-desc",children:t}),d&&r.jsxs("span",{className:"vip-benefit-tag",children:[r.jsx(e,{className:"fas fa-star",style:{fontSize:"0.5rem"}})," ",d]})]})}),q=i.memo(({firstName:a,validade:o,dias:t,faqs:p,onNavigate:l})=>{const c=[{tab:"loja",icon:"fa-tags",title:"Comprar com preço de membro",desc:"O valor VIP já aparece em todo o catálogo."},{tab:"pedidos",icon:"fa-layer-group",title:"Minha Coleção",desc:"Seus links ficam sem prazo de expiração."}],d=["Preços de membro em todo o catálogo","Downloads sem prazo de expiração","Suporte com prioridade máxima","Acesso antecipado a novos lançamentos","Badge VIP dourada no perfil"];return r.jsxs("div",{className:"vip-member-panel","data-testid":"vip-member-panel",children:[r.jsxs("header",{className:"vip-member-head",children:[r.jsxs("span",{className:"vip-hero-badge",children:[r.jsx(e,{className:"fas fa-crown"}),"Membro VIP ativo"]}),r.jsxs("h1",{className:"vip-member-title",children:["Bem-vindo de volta",a?", "+String(a):"","!"," ",r.jsx("span",{className:"vip-hero-accent",children:"Você é VIP"})]}),r.jsx("p",{className:"vip-member-sub",children:"Todos os benefícios estão ativos na sua conta. Use os atalhos abaixo."}),o&&r.jsxs("div",{className:"vip-member-validity",children:[r.jsx(e,{className:"fas fa-calendar-check"}),"Vigente até",r.jsx("strong",{children:o}),t!==null&&r.jsxs("span",{className:"vip-member-validity-days",children:[" · ",t," ",t===1?"dia restante":"dias restantes"]})]}),r.jsxs("div",{className:"vip-already-badge",children:[r.jsx(e,{className:"fas fa-crown"}),"Você já é Membro VIP!"]})]}),r.jsx("section",{className:"vip-member-actions","aria-label":"Atalhos do membro VIP",children:c.map(s=>r.jsxs("button",{type:"button",className:"vip-member-action",onClick:()=>l?.(s.tab),disabled:!l,children:[r.jsx("span",{className:"vip-member-action-icon",children:r.jsx(e,{className:`fas ${s.icon}`})}),r.jsxs("span",{className:"vip-member-action-body",children:[r.jsx("span",{className:"vip-member-action-title",children:s.title}),r.jsx("span",{className:"vip-member-action-desc",children:s.desc})]}),r.jsx(e,{className:"fas fa-chevron-right vip-member-action-chevron"})]},s.tab))}),r.jsxs("section",{className:"vip-member-active","aria-label":"Benefícios ativos",children:[r.jsx("h2",{className:"vip-member-section-title",children:"Ativos na sua conta"}),r.jsx("ul",{className:"vip-member-active-list",children:d.map(s=>r.jsxs("li",{className:"vip-member-active-item",children:[r.jsx(e,{className:"fas fa-check-circle vip-plan-check"}),s]},s))})]}),r.jsxs("section",{className:"vip-member-faq","aria-label":"Dúvidas do plano",children:[r.jsx("h2",{className:"vip-member-section-title",children:"Dúvidas do seu plano"}),r.jsx("div",{className:"vip-faq-list",children:p.map(s=>r.jsx(y,{question:s.q,answer:s.a},s.q))})]})]})});q.displayName="VipMemberPanel";const T=i.memo(({user:a,onAssinar:o,onLoginRequired:t,onNavigate:p})=>{V("vip",z);const l=a?.nome?a.nome.trim().split(" ")[0]:"",c=!!a?.isVIP,d=i.useCallback(()=>{if(!a){t();return}c||o()},[a,o,t,c]),s=i.useCallback(()=>{document.getElementById(w)?.scrollIntoView?.({behavior:"smooth",block:"start"})},[]),m=[{q:"Como funciona a ativação do VIP?",a:"Após a confirmação do pagamento via PIX, a ativação é <strong>imediata e automática</strong>. Seu status VIP é atualizado instantaneamente — os preços exclusivos, o acesso aos softwares e todos os benefícios ficam disponíveis na mesma sessão, sem nenhuma ação adicional."},{q:"Os descontos de membro VIP valem para lançamentos futuros?",a:"Sim! Enquanto sua assinatura estiver ativa, todos os novos sistemas operacionais e softwares adicionados à plataforma já nascem com o preço especial reduzido para você. A plataforma evolui e suas vantagens acompanham."},{q:"Os preços exclusivos se aplicam a todos os produtos?",a:"Sim! Membros VIP têm acesso ao preço exclusivo de assinante em todo o catálogo de sistemas operacionais. O desconto é exibido automaticamente ao visualizar qualquer produto enquanto você estiver logado como VIP — sem precisar de cupons ou ações extras."},{q:"O que acontece com os produtos da Minha Coleção quando o VIP vence?",a:"Com o VIP ativo, todos os produtos da sua coleção têm links disponíveis sem prazo de expiração. Quando o plano encerrar, os links voltam à regra padrão de 24 horas — os arquivos já baixados e vinculados à sua conta permanecem seus normalmente."},{q:"Há renovação automática da assinatura?",a:"Não. O plano VIP é uma assinatura anual sem renovação automática. Você renova quando quiser, com total controle e sem surpresas. Ao se aproximar do vencimento, você receberá uma notificação para decidir se quer continuar."},{q:"Como funciona o suporte prioritário?",a:"Envie sua dúvida ou problema aqui: mendeslidera1@gmail.com. Informe que você é membro VIP na mensagem."}],b=["lançamentos futuros","quando o VIP vence","renovação automática","suporte prioritário"],g=m.filter(n=>b.some(x=>n.q.toLowerCase().includes(x.toLowerCase()))),f=[{feat:"Descontos nos Softwares",icon:"fa-desktop",vip:r.jsx(e,{className:"fas fa-check sk-fg-accent"}),std:r.jsx(e,{className:"fas fa-times",style:{color:"color-mix(in srgb, var(--sk-palette-red-ef4444) 50%, transparent)"}})},{feat:"Preços exclusivos na Loja",icon:"fa-tags",vip:r.jsx(e,{className:"fas fa-check sk-fg-accent"}),std:r.jsx(e,{className:"fas fa-times",style:{color:"color-mix(in srgb, var(--sk-palette-red-ef4444) 50%, transparent)"}})},{feat:"Links de download",icon:"fa-cloud-download-alt",vip:r.jsx(e,{className:"fas fa-infinity",style:{color:v("--sk-palette-orange-f59e0b")}}),std:r.jsx("span",{style:{fontSize:"0.75rem",fontWeight:700,opacity:.5},children:"24h"})},{feat:"Suporte prioritário",icon:"fa-headset",vip:r.jsx(e,{className:"fas fa-check sk-fg-accent"}),std:r.jsx(e,{className:"fas fa-times",style:{color:"color-mix(in srgb, var(--sk-palette-red-ef4444) 50%, transparent)"}})},{feat:"Acesso antecipado a novidades",icon:"fa-rocket",vip:r.jsx(e,{className:"fas fa-check sk-fg-accent"}),std:r.jsx(e,{className:"fas fa-times",style:{color:"color-mix(in srgb, var(--sk-palette-red-ef4444) 50%, transparent)"}})},{feat:"Benefícios de novos lançamentos",icon:"fa-sync-alt",vip:r.jsx(e,{className:"fas fa-check sk-fg-accent"}),std:r.jsx(e,{className:"fas fa-times",style:{color:"color-mix(in srgb, var(--sk-palette-red-ef4444) 50%, transparent)"}})},{feat:"Badge VIP dourada",icon:"fa-gem",vip:r.jsx(e,{className:"fas fa-check sk-fg-accent"}),std:r.jsx(e,{className:"fas fa-times",style:{color:"color-mix(in srgb, var(--sk-palette-red-ef4444) 50%, transparent)"}})}];return c?r.jsx("div",{className:"store-interface vip-root",children:r.jsx("div",{className:"vip-wrapper",children:r.jsx(q,{firstName:l,validade:M(a?.validadeAcesso),dias:D(a?.validadeAcesso),faqs:g,onNavigate:p})})}):r.jsx("div",{className:"store-interface vip-root",children:r.jsxs("div",{className:"vip-wrapper",children:[r.jsx("section",{className:"vip-hero-section",children:r.jsxs("div",{className:"vip-hero-text",children:[r.jsxs("span",{className:"vip-hero-badge",children:[r.jsx(e,{className:"fas fa-shield-alt"}),c?"Membro VIP Ativo":"Área Exclusiva para Membros"]}),r.jsx("h1",{className:"vip-hero-title",children:c?r.jsxs(r.Fragment,{children:["Bem-vindo de volta",l?", "+String(l):"","!",r.jsx("br",{}),r.jsx("span",{className:"vip-hero-accent",children:"Você é VIP"})]}):l?r.jsxs(r.Fragment,{children:[l,", entre para o",r.jsx("br",{}),r.jsx("span",{className:"vip-hero-accent",children:"Clube VIP"})]}):r.jsxs(r.Fragment,{children:["Entre para o",r.jsx("br",{}),r.jsx("span",{className:"vip-hero-accent",children:"Clube VIP"})]})}),c?r.jsxs(r.Fragment,{children:[r.jsxs("ul",{className:"vip-vip-status-list",children:[r.jsxs("li",{className:"vip-status-item green",children:[r.jsx(e,{className:"fas fa-check-circle"}),"Todos os benefícios VIP estão",r.jsx("strong",{children:"ativos"}),"na sua conta"]}),r.jsxs("li",{className:"vip-status-item amber",children:[r.jsx(e,{className:"fas fa-infinity"}),"Downloads",r.jsx("strong",{children:"sem prazo de expiração"})]}),r.jsxs("li",{className:"vip-status-item amber",children:[r.jsx(e,{className:"fas fa-headset"}),"Suporte",r.jsx("strong",{children:"prioritário"}),"ativado"]})]}),r.jsxs("div",{className:"vip-already-badge",children:[r.jsx(e,{className:"fas fa-crown"}),"Você já é Membro VIP!"]})]}):r.jsx("p",{className:"vip-hero-desc",children:"Preços de membro em todo o catálogo, downloads sem prazo de expiração e suporte prioritário durante 12 meses. O retorno acompanha o seu ritmo: quanto mais você compra e trabalha com os sistemas, mais rápido o investimento volta — em muitos casos, já na primeira compra."}),r.jsx("div",{className:"vip-highlight-tags",children:[{icon:"fa-tags",text:"Preços exclusivos"},{icon:"fa-infinity",text:"Downloads sem expiração"},{icon:"fa-headset",text:"Suporte prioritário"}].map(n=>r.jsxs("div",{className:"vip-tag",children:[r.jsx(e,{className:`fas ${n.icon} vip-tag-icon`}),n.text]},n.text))}),!c&&r.jsxs(r.Fragment,{children:[r.jsxs("button",{id:"vip-hero-cta-btn",onClick:s,className:"vip-cta-btn vip-hero-cta",children:[r.jsx(e,{className:"fas fa-crown"}),"Conhecer os benefícios"]}),r.jsxs("div",{className:"vip-cta-note",children:[r.jsx(e,{className:"fas fa-lock"}),"Valores e pagamento apenas no fim da página · Sem renovação automática"]})]})]})}),r.jsxs("div",{className:"vip-stats-grid",children:[r.jsx(h,{target:5,suffix:"",icon:"fa-box-open",label:"Sistemas na linha"}),r.jsx(h,{target:50,suffix:"%+",icon:"fa-percentage",label:"De economia típica nas compras VIP"}),r.jsx(h,{target:365,suffix:" dias",icon:"fa-infinity",label:"De downloads sem expiração"}),r.jsx(h,{target:12,suffix:" meses",icon:"fa-calendar-check",label:"De vantagens ininterruptas"})]}),r.jsxs("section",{className:"vip-section",children:[r.jsx("div",{style:{textAlign:"center"},children:r.jsxs("span",{className:"vip-section-badge",children:[r.jsx(e,{className:"fas fa-star"}),"Benefício Principal"]})}),r.jsxs("h2",{className:"vip-section-title",children:["Descontos Exclusivos em Softwares",r.jsx("span",{className:"accent",children:"Proprietários"})]}),r.jsx("p",{className:"vip-section-sub",children:"Membros VIP adquirem os sistemas desenvolvidos pela CSkull Softwares pagando muito menos. Compre com preço especial de assinante durante toda a vigência da assinatura — e os sistemas são seus para sempre."}),r.jsxs("div",{className:"vip-software-banner",children:[r.jsx("div",{className:"vip-software-icon",children:r.jsx(e,{className:"fas fa-desktop"})}),r.jsxs("div",{className:"vip-software-body",children:[r.jsx("div",{className:"vip-software-body-title",children:"Oportunidade Única nos Sistemas Operacionais"}),r.jsx("div",{className:"vip-software-body-sub",children:"Enquanto sua assinatura estiver ativa, você adquire toda a linha de sistemas exclusivos da plataforma com descontos reservados apenas para membros — nos sistemas atuais e em todos os novos lançamentos."})]}),r.jsxs("span",{className:"vip-exclusive-tag",children:[r.jsx(e,{className:"fas fa-crown"}),"Ofertas Exclusivas"]})]})]}),r.jsxs("section",{className:"vip-section",children:[r.jsxs("h2",{className:"vip-section-title",children:["Tudo que Você Ganha ao",r.jsx("span",{className:"accent",children:"Ser Membro VIP"})]}),r.jsx("p",{className:"vip-section-sub",children:"Vantagens ativas durante toda a vigência da sua assinatura"}),r.jsxs("div",{className:"vip-benefits-grid",children:[r.jsx(u,{icon:"fa-desktop",title:"Descontos Máximos nos Softwares",desc:"Sistemas proprietários com preço reduzido de membro em cada compra, durante toda a vigência.",iconBg:"color-mix(in srgb, var(--sk-palette-orange-f59e0b) 12%, transparent)",iconColor:v("--sk-palette-orange-f59e0b"),highlight:!0,tag:"Benefício principal"}),r.jsx(u,{icon:"fa-tags",title:"Preços Exclusivos de Membro",desc:"O valor VIP aparece automaticamente em todo o catálogo. Sem cupons, sem burocracia.",iconBg:"color-mix(in srgb, var(--sk-palette-teal-10b981) 12%, transparent)",iconColor:v("--sk-palette-teal-10b981")}),r.jsx(u,{icon:"fa-infinity",title:"Downloads sem Expiração",desc:"Seus links ficam disponíveis o ano inteiro — nada do prazo padrão de 24 horas.",iconBg:"color-mix(in srgb, var(--sk-palette-blue-3b82f6) 12%, transparent)",iconColor:v("--sk-palette-blue-3b82f6")}),r.jsx(u,{icon:"fa-headset",title:"Suporte Prioritário",desc:"Atendimento por e-mail. Informe sua condição de membro VIP na mensagem.",iconBg:"color-mix(in srgb, var(--sk-palette-violet-a855f7) 12%, transparent)",iconColor:v("--sk-palette-violet-a855f7")}),r.jsx(u,{icon:"fa-rocket",title:"Acesso Antecipado",desc:"Novos lançamentos e recursos chegam para você antes do público geral.",iconBg:"color-mix(in srgb, var(--sk-palette-red-ef4444) 10%, transparent)",iconColor:v("--sk-palette-red-ef4444")}),r.jsx(u,{icon:"fa-sync-alt",title:"Vantagens que Crescem",desc:"Cada evolução da plataforma entra no seu plano automaticamente, sem custo adicional.",iconBg:"color-mix(in srgb, var(--sk-palette-teal-14b8a6) 12%, transparent)",iconColor:v("--sk-palette-teal-14b8a6")})]})]}),r.jsxs("section",{className:"vip-section",children:[r.jsxs("h2",{className:"vip-section-title",children:["A Diferença É",r.jsx("span",{className:"accent",children:"Visível"})]}),r.jsx("p",{className:"vip-section-sub",children:"O que separa um cliente comum de um membro VIP:"}),r.jsxs("div",{className:"vip-compare-wrap",children:[r.jsxs("div",{className:"vip-compare-header",children:[r.jsx("div",{className:"vip-compare-th-label",children:"Benefício"}),r.jsxs("div",{className:"vip-compare-th-vip",children:[r.jsx(e,{className:"fas fa-crown"}),"VIP"]}),r.jsx("div",{className:"vip-compare-th-std",children:"Padrão"})]}),f.map((n,x)=>r.jsxs("div",{className:`vip-compare-row ${x%2!==0?"even":""}`,children:[r.jsxs("div",{className:"vip-compare-feat",children:[r.jsx(e,{className:`fas ${n.icon} vip-compare-feat-icon`})," ",n.feat]}),r.jsx("div",{className:"vip-compare-cell",children:n.vip}),r.jsx("div",{className:"vip-compare-cell",children:n.std})]},n.feat))]})]}),r.jsxs("section",{className:"vip-section",children:[r.jsx("h2",{className:"vip-section-title",children:"Perguntas que Todo Visitante Tem"}),r.jsx("div",{className:"vip-qa-grid",style:{marginTop:32},children:[{icon:"fa-gift",q:"O que ganho ao me tornar membro VIP?",a:"A possibilidade de adquirir qualquer produto do ecossistema com preços exclusivos de membro, além de downloads sem expiração, suporte prioritário e acesso antecipado aos lançamentos."},{icon:"fa-chart-line",q:"Em quanto tempo recupero o investimento?",a:"Depende do seu ritmo — e é aí que o VIP joga a seu favor: no catálogo atual, a economia de uma única compra com preço de membro pode superar o valor anual da assinatura. E você ainda aproveita os 12 meses inteiros de benefícios."},{icon:"fa-balance-scale",q:"Por que vale mais a pena ser VIP?",a:"Porque a economia real acompanha o seu esforço de trabalho: cada sistema que você compra para usar ou revender sai pelo preço de membro. Quem não é VIP paga o valor cheio em todas as compras."},{icon:"fa-shield-alt",q:"Quais benefícios duram os 12 meses inteiros?",a:"Todos! Os preços especiais VIP, os downloads sem expiração, o suporte prioritário e a badge exclusiva ficam ativos durante todo o período da assinatura — sem exceção."}].map(n=>r.jsxs("div",{className:"vip-qa-card",children:[r.jsx("div",{className:"vip-qa-icon-wrap",children:r.jsx(e,{className:`fas ${n.icon}`})}),r.jsx("div",{className:"vip-qa-question",children:n.q}),r.jsx("div",{className:"vip-qa-answer",children:n.a})]},n.q))})]}),r.jsxs("section",{className:"vip-section",children:[r.jsx("h2",{className:"vip-section-title",children:"Dúvidas Frequentes"}),r.jsx("div",{className:"vip-faq-list",style:{marginTop:32},children:m.map(n=>r.jsx(y,{question:n.q,answer:n.a},n.q))})]}),r.jsxs("section",{className:"vip-section vip-offer-section",id:w,children:[r.jsx("div",{style:{textAlign:"center"},children:r.jsxs("span",{className:"vip-section-badge",children:[r.jsx(e,{className:"fas fa-crown"}),"Oferta Exclusiva"]})}),r.jsxs("h2",{className:"vip-section-title",children:["Você viu o que ganha.",r.jsx("span",{className:"accent",children:"Este é o investimento"})]}),r.jsxs("p",{className:"vip-section-sub",children:["Um único valor anual — menos de R$",N,"por dia — sem renovação automática e com ativação imediata."]}),r.jsx("div",{className:"vip-offer-center",children:r.jsxs("div",{className:"vip-plan-card",children:[r.jsxs("div",{className:"vip-plan-card-header",children:[r.jsx(e,{className:"fas fa-crown"}),"Acesso Completo — Clube VIP"]}),r.jsxs("div",{className:"vip-plan-card-body",children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[r.jsx("div",{className:"vip-plan-price-sub-label",style:{marginBottom:12,fontWeight:700},children:"Plano VIP Anual"}),r.jsxs("div",{className:"vip-plan-prices",children:[r.jsxs("div",{className:"vip-plan-price-block vip-plan-price-block--hero",children:[r.jsx("div",{className:"vip-plan-price-sub-label",children:"menos de"}),r.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:2},children:[r.jsx("span",{className:"vip-price-currency",style:{fontSize:"0.875rem",marginTop:6},children:"R$"}),r.jsx("span",{className:"vip-plan-price-sub-val","data-testid":"vip-daily-price",children:N})]}),r.jsx("div",{className:"vip-plan-price-sub-period",children:"por dia"})]}),r.jsx("div",{className:"vip-plan-price-sep",children:"·"}),r.jsxs("div",{className:"vip-plan-price-block",children:[r.jsx("div",{className:"vip-plan-price-sub-label",children:"cobrado anualmente"}),r.jsxs("div",{className:"vip-plan-price-annual-val",children:["R$",k.toFixed(2).replace(".",",")]}),r.jsxs("div",{className:"vip-plan-price-annual-sub",children:["equiv. R$",A,"/mês · 365 dias"]})]})]}),r.jsxs("p",{className:"vip-plan-note",children:["Ativação",r.jsx("strong",{children:"imediata"}),"após confirmação do PIX · Válido por",r.jsx("strong",{children:"12 meses"}),"· sem renovação automática"]})]}),r.jsx("ul",{className:"vip-plan-features",children:["Descontos máximos nos softwares proprietários","Preços VIP em todo o catálogo da loja","Downloads ilimitados sem expiração","Suporte dedicado com prioridade máxima","Acesso antecipado a novos produtos","Todas as vantagens futuras do ecossistema","Badge VIP dourada no perfil"].map(n=>r.jsxs("li",{className:"vip-plan-feature-item",children:[r.jsx(e,{className:"fas fa-check-circle vip-plan-check"}),n]},n))}),c?r.jsxs("div",{style:{textAlign:"center"},children:[r.jsxs("div",{className:"vip-already-badge",children:[r.jsx(e,{className:"fas fa-crown"}),"Você já é Membro VIP!"]}),r.jsxs("div",{className:"vip-already-note",children:[r.jsx(e,{className:"fas fa-check-circle"}),"Todos os benefícios estão ativos"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs("button",{id:"vip-assinar-btn-main",onClick:d,className:"vip-cta-btn",children:[r.jsx(e,{className:"fas fa-crown"}),"Quero Ser Membro VIP"]}),r.jsxs("div",{className:"vip-cta-note",style:{marginTop:12},children:[r.jsx(e,{className:"fas fa-lock"}),"Pagamento seguro via PIX · Sem renovação automática"]})]})]})]})})]})]})})});export{T as VipTab};
