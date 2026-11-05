import{r as m,j as e,c as E}from"./vendor-react.Bxpvzt8v.js";import{F as a,P as N,v as b,E as P,u as A,w as j}from"./index.BTWVkF_m.js";import{u as I}from"./ImageViewer.BGEENe4N.js";import"./vendor-firebase-lite.DWLIakt4.js";import"./vendor-icons.bDPCiqgI.js";import"./useOverlayLayer.Dd7T5TcH.js";const R=`/* skull-style-rev:presentation:mw2zokqp */
.pr-root {\r
\r
  --pr-cold: var(--sk-ds-accent);\r
  --pr-cold-soft: var(--sk-ds-accent-soft);\r
  --pr-cold-line: var(--sk-ds-accent-line);\r
  --pr-cold-glow: var(--sk-ds-accent-glow);\r
  --pr-steel: var(--sk-palette-blue-526175);\r
  --pr-grid-line: color-mix(in srgb, var(--sk-palette-cyan-0f2d41) 5.5%, transparent);\r
\r
  position: relative;\r
  width: 100%;\r
  min-height: 100%;\r
  overflow-x: hidden;\r
  background: var(--sk-ds-page);\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .pr-root {\r
  --pr-cold: var(--sk-ds-accent);\r
  --pr-cold-soft: var(--sk-ds-accent-soft);\r
  --pr-cold-line: var(--sk-ds-accent-line);\r
  --pr-cold-glow: var(--sk-ds-accent-glow);\r
  --pr-steel: var(--sk-palette-blue-8fa3b8);\r
  --pr-grid-line: color-mix(in srgb, var(--sk-palette-cyan-94bedc) 5%, transparent);\r
}\r
\r
.pr-shell {\r
  position: relative;\r
  z-index: 1;\r
  width: var(--sk-page-col, min(1312px, calc(100% - 48px)));\r
  margin-inline: auto;\r
}\r
\r
.pr-back-strip {\r
  display: flex;\r
  align-items: center;\r
  justify-content: flex-start;\r
  padding-top: 16px;\r
  padding-bottom: 4px;\r
}\r
\r
.pr-back-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 6px 14px;\r
  border-radius: 8px;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  color: var(--sk-palette-blue-94a3b8);\r
  font-family: 'Montserrat', sans-serif;\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
}\r
html:not(.dark) .pr-back-btn {\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 2%, transparent);\r
  color: var(--sk-palette-blue-475569);\r
}\r
.pr-back-btn:hover {\r
  color: var(--sk-ds-accent);\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-ds-accent) 6%, transparent);\r
}\r
\r
@keyframes pr-rise {\r
  from { opacity: 0; transform: translateY(18px); }\r
  to   { opacity: 1; transform: translateY(0); }\r
}\r
\r
.pr-hero {\r
  padding: clamp(56px, 10vw, 120px) 0 clamp(28px, 4vw, 44px);\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
}\r
\r
.pr-eyebrow {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 10px;\r
  font-family: var(--sk-font-heading);\r
  font-size: 0.6875rem;\r
  font-weight: 700;\r
  letter-spacing: 0.02em;\r
  text-transform: none;\r
  color: var(--pr-cold);\r
  animation: pr-rise 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;\r
}\r
.pr-eyebrow::before,\r
.pr-eyebrow::after {\r
  content: '';\r
  width: 34px;\r
  height: 1px;\r
  background: linear-gradient(90deg, transparent, var(--pr-cold-line));\r
}\r
.pr-eyebrow::after { transform: scaleX(-1); }\r
\r
.pr-display {\r
  font-family: var(--sk-font-heading);\r
  font-size: clamp(1.75rem, 5.6vw, 3.6rem);\r
  font-weight: 700;\r
  line-height: 1.06;\r
  letter-spacing: 0.01em;\r
  text-transform: none;\r
  margin: 22px 0 0;\r
  max-width: 950px;\r
  color: var(--sk-ds-t1);\r
  animation: pr-rise 0.2s 0.03s cubic-bezier(0.16, 1, 0.3, 1) both;\r
}\r
.pr-display-accent {\r
  display: block;\r
  color: var(--pr-cold);\r
  text-shadow: none;\r
}\r
\r
.pr-lead {\r
  font-size: clamp(0.875rem, 2.2vw, 1.0625rem);\r
  line-height: 1.7;\r
  font-weight: 500;\r
  max-width: 640px;\r
  margin: 20px 0 0;\r
  color: var(--sk-ds-t2);\r
  animation: pr-rise 0.2s 0.06s cubic-bezier(0.16, 1, 0.3, 1) both;\r
}\r
\r
.pr-hero-actions {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-wrap: wrap;\r
  gap: 14px;\r
  margin-top: 34px;\r
  animation: pr-rise 0.2s 0.08s cubic-bezier(0.16, 1, 0.3, 1) both;\r
}\r
\r
.pr-cta-loja {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 10px;\r
  padding: 16px 34px;
  border: 0;
  border-radius: var(--sk-r-sm, 6px);\r
  cursor: pointer;\r
  font-family: var(--sk-font-heading);\r
  font-size: 0.875rem;\r
  font-weight: 700;\r
  letter-spacing: 0.02em;\r
  text-transform: none;\r
  color: var(--sk-ds-on-accent);\r
  background: var(--sk-ds-accent);\r
  box-shadow: none;\r
  transition: transform var(--sk-t-base, 0.18s ease), box-shadow var(--sk-t-base, 0.18s ease);\r
}\r
.pr-cta-loja:hover { transform: translateY(-2px); box-shadow: none; }\r
.pr-cta-loja:active { transform: scale(0.98); }\r
.pr-cta-loja:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 3px; }\r
\r
.pr-cta-ghost {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  padding: 15px 26px;
  border-radius: var(--sk-r-sm, 6px);\r
  cursor: pointer;\r
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
  font-size: 0.8125rem;\r
  font-weight: 700;\r
  color: var(--pr-cold);\r
  background: transparent;\r
  border: 1px solid var(--pr-cold-line);\r
  transition: background var(--sk-t-base, 0.18s ease), border-color var(--sk-t-base, 0.18s ease);\r
}\r
.pr-cta-ghost:hover { background: var(--pr-cold-soft); border-color: var(--pr-cold); }\r
.pr-cta-ghost:focus-visible { outline: 2px solid var(--pr-cold); outline-offset: 3px; }\r
\r
.pr-specplate {\r
  display: flex;\r
  align-items: stretch;\r
  justify-content: center;\r
  flex-wrap: wrap;\r
  gap: 0;\r
  margin-top: clamp(36px, 6vw, 56px);\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: 18px;\r
  background: var(--sk-ds-surface);\r
  overflow: hidden;\r
  animation: pr-rise 0.2s 0.10s cubic-bezier(0.16, 1, 0.3, 1) both;\r
}\r
html.dark .pr-specplate {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  backdrop-filter: blur(8px);\r
}\r
.pr-spec {\r
  flex: 1 1 120px;\r
  min-width: 120px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 5px;\r
  padding: 18px 20px;\r
  text-align: center;\r
}\r
.pr-spec + .pr-spec { border-left: 1px solid var(--sk-ds-line-soft); }\r
.pr-spec__num {\r
  font-family: var(--sk-font-heading);\r
  font-size: clamp(1.1rem, 2.6vw, 1.5rem);\r
  font-weight: 700;\r
  line-height: 1;\r
  color: var(--pr-cold);\r
}\r
.pr-spec__lbl {\r
  font-size: 0.75rem;\r
  font-weight: 600;\r
  line-height: 1.5;\r
  letter-spacing: 0;\r
  text-transform: none;\r
  color: var(--sk-ds-t2);\r
}\r
\r
.pr-section { padding: clamp(44px, 7vw, 84px) 0 0; }\r
.pr-section:last-child { padding-bottom: clamp(56px, 8vw, 96px); }\r
\r
.pr-section-head {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  gap: 12px;\r
  margin-bottom: clamp(26px, 4vw, 40px);\r
}\r
.pr-title {\r
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
  font-size: clamp(1.35rem, 3.4vw, 2rem);\r
  font-weight: 700;\r
  line-height: 1.16;\r
  letter-spacing: -0.02em;\r
  margin: 0;\r
  color: var(--sk-ds-t1);\r
}\r
.pr-title-cold { color: var(--pr-cold); }\r
.pr-section-head .pr-lead { margin-top: 0; animation: none; }\r
\r
.pr-console {\r
  display: flex;\r
  flex-direction: column;\r
  border-radius: 16px;\r
  overflow: hidden;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  box-shadow: none;\r
  transition: transform var(--sk-t-base, 0.18s ease), border-color var(--sk-t-base, 0.18s ease);\r
}\r
html.dark .pr-console {\r
  background: var(--sk-palette-blue-0a0f14);\r
  border-color: color-mix(in srgb, var(--sk-palette-cyan-94bedc) 14%, transparent);\r
  box-shadow: none;\r
}\r
.pr-console:hover { transform: translateY(-3px); border-color: var(--pr-cold-line); }\r
\r
.pr-console__bar {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 9px 13px;\r
  border-bottom: 1px solid var(--sk-ds-line-soft);\r
  background: var(--sk-ds-inset);\r
}\r
html.dark .pr-console__bar {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-bottom-color: color-mix(in srgb, var(--sk-palette-cyan-94bedc) 10%, transparent);\r
}\r
.pr-console__dots { display: inline-flex; gap: 5px; }\r
.pr-console__dots i {\r
  width: 9px;\r
  height: 9px;\r
  border-radius: 50%;\r
  background: var(--sk-ds-line-strong);\r
  opacity: 0.7;\r
}\r
.pr-console__dots i:first-child { background: var(--pr-cold); opacity: 1; }\r
.pr-console__title {\r
  font-family: var(--sk-font-mono, monospace);\r
  font-size: 0.6875rem;\r
  font-weight: 600;\r
  letter-spacing: 0.04em;\r
  color: var(--sk-ds-t2);\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.pr-console__body { position: relative; }\r
.pr-console__body img {\r
  display: block;\r
  width: 100%;\r
  height: auto;\r
}\r
\r
.pr-console__body::after {\r
  content: '';\r
  position: absolute;\r
  inset: 0;\r
  pointer-events: none;\r
  background: repeating-linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-blue-0a141e) 5%, transparent) 0 1px, transparent 1px 3px);\r
  mix-blend-mode: multiply;\r
}\r
html.dark .pr-console__body::after {\r
  background: repeating-linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-000000) 16%, transparent) 0 1px, transparent 1px 3px);\r
  mix-blend-mode: normal;\r
}\r
\r
.pr-console__caption {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 10px;\r
  padding: 10px 13px;\r
  border-top: 1px solid var(--sk-ds-line-soft);\r
  font-size: 0.72rem;\r
  font-weight: 600;\r
  color: var(--sk-ds-t2);\r
}\r
html.dark .pr-console__caption { border-top-color: color-mix(in srgb, var(--sk-palette-cyan-94bedc) 10%, transparent); }\r
\r
.pr-legacy-chip {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 5px;\r
  flex-shrink: 0;\r
  padding: 3px 9px;\r
  border-radius: 99px;\r
  font-size: 0.6rem;\r
  font-weight: 700;\r
  letter-spacing: 0.07em;\r
  text-transform: none;\r
  color: var(--pr-cold);\r
  background: var(--pr-cold-soft);\r
  border: 1px solid var(--pr-cold-line);\r
  white-space: nowrap;\r
}\r
\r
.pr-showcase {\r
  display: flex;\r
  flex-direction: column;\r
  max-width: 820px;\r
  margin: 0 auto;\r
  border-radius: 18px;\r
  overflow: hidden;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-palette-blue-06090e);\r
  box-shadow: none;\r
}\r
.pr-showcase__zoom {\r
  display: block;\r
  width: 100%;\r
  padding: 0;\r
  border: 0;\r
  background: none;\r
  cursor: zoom-in;\r
}\r
.pr-showcase__zoom:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: -2px; }\r
.pr-showcase__img {\r
  display: block;\r
  width: 100%;\r
  height: auto;\r
}\r
.pr-showcase__caption {\r
  display: flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  justify-content: center;\r
  gap: 8px 22px;\r
  padding: 12px 16px;\r
  border-top: 1px solid var(--sk-ds-line-soft);\r
  background: var(--sk-ds-surface);\r
  font-size: var(--sk-text-sm);\r
  color: var(--sk-ds-t2);\r
}\r
.pr-showcase__stat strong {\r
  color: var(--sk-ds-accent);\r
  font-family: var(--sk-font-heading);\r
  font-weight: 700;\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.pr-eng-grid {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 22px;\r
  align-items: center;\r
}\r
@media (min-width: 960px) {\r
  .pr-eng-grid { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 36px; }\r
}\r
\r
.pr-facts { display: flex; flex-direction: column; gap: 10px; }\r
.pr-fact {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 12px;\r
  padding: 13px 16px;\r
  border-radius: 13px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
}\r
html.dark .pr-fact {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
.pr-fact__icon {\r
  width: 34px;\r
  height: 34px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
  font-size: 0.85rem;\r
  color: var(--pr-cold);\r
  background: var(--pr-cold-soft);\r
  border: 1px solid var(--pr-cold-line);\r
}\r
.pr-fact__title {\r
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
  font-size: 0.8125rem;\r
  font-weight: 700;\r
  color: var(--sk-ds-t1);\r
}\r
.pr-fact__desc {\r
  font-size: 0.72rem;\r
  line-height: 1.55;\r
  color: var(--sk-ds-t2);\r
  margin-top: 2px;\r
}\r
\r
.pr-consoles-row {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 18px;\r
  margin-top: 22px;\r
}\r
@media (min-width: 720px) {\r
\r
  .pr-consoles-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
}\r
\r
.pr-lines {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 18px;\r
}\r
@media (min-width: 880px) {\r
  .pr-lines { grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
}\r
\r
.pr-line-card {\r
  position: relative;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
  padding: 24px 22px 20px;\r
  border-radius: 18px;\r
  overflow: hidden;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  transition: transform var(--sk-t-base, 0.18s ease), border-color var(--sk-t-base, 0.18s ease), box-shadow var(--sk-t-base, 0.18s ease);\r
}\r
html.dark .pr-line-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
.pr-line-card::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  height: 3px;\r
  background: linear-gradient(90deg, var(--line), transparent 85%);\r
}\r
.pr-line-card:hover {\r
  transform: translateY(-4px);\r
  border-color: color-mix(in srgb, var(--line) 45%, transparent);\r
  box-shadow: none;\r
}\r
\r
.pr-line-card__head { display: flex; align-items: center; gap: 12px; }\r
.pr-line-card__icon {\r
  width: 40px;\r
  height: 40px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 1rem;\r
  color: var(--line);\r
  background: color-mix(in srgb, var(--line) 11%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--line) 26%, transparent);\r
}\r
.pr-line-card__name {\r
  font-family: var(--sk-font-heading);\r
  font-size: 1.05rem;\r
  font-weight: 700;\r
  letter-spacing: 0.05em;\r
  color: var(--line);\r
}\r
.pr-line-card__pos {\r
  font-size: 0.6875rem;\r
  font-weight: 700;\r
  letter-spacing: 0.05em;\r
  text-transform: none;\r
  color: var(--sk-ds-t2);\r
}\r
.pr-line-card__pub { font-size: 0.75rem; line-height: 1.5; color: var(--sk-ds-t2); }\r
\r
.pr-line-card__benefits {\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 7px;\r
}\r
.pr-line-card__benefits li {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 8px;\r
  font-size: 0.72rem;\r
  font-weight: 500;\r
  line-height: 1.45;\r
  color: var(--sk-ds-t2);\r
}\r
.pr-line-card__benefits svg { color: var(--line); flex-shrink: 0; margin-top: 2px; font-size: 0.62rem; }\r
\r
.pr-line-card__cta {\r
  margin-top: auto;\r
  align-self: flex-start;\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 7px;\r
  padding: 9px 16px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  cursor: pointer;\r
  border: 1px solid color-mix(in srgb, var(--line) 32%, transparent);\r
  background: transparent;\r
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
  font-size: 0.72rem;\r
  font-weight: 700;\r
  color: var(--line);\r
  transition: background var(--sk-t-base, 0.18s ease);\r
}\r
.pr-line-card__cta:hover { background: color-mix(in srgb, var(--line) 10%, transparent); }\r
.pr-line-card__cta:focus-visible { outline: 2px solid var(--line); outline-offset: 2px; }\r
\r
.pr-ultra {\r
  --ultra: var(--sk-ds-premium, var(--sk-palette-orange-e0a83a));\r
  position: relative;\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 26px;\r
  padding: 28px 24px;\r
  border-radius: 20px;\r
  overflow: hidden;\r
  border: 1px solid color-mix(in srgb, var(--ultra) 28%, var(--sk-ds-line));\r
  background:\r
    radial-gradient(120% 90% at 0% 0%, color-mix(in srgb, var(--ultra) 10%, transparent), transparent 60%),\r
    var(--sk-ds-surface);\r
}\r
html.dark .pr-ultra {\r
  background:\r
    radial-gradient(120% 90% at 0% 0%, color-mix(in srgb, var(--ultra) 12%, transparent), transparent 60%),\r
    color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
}\r
.pr-ultra::before {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  height: 3px;\r
  background: linear-gradient(90deg, var(--ultra), transparent 85%);\r
}\r
@media (min-width: 960px) {\r
  .pr-ultra {\r
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);\r
    gap: 36px;\r
    padding: 34px 32px;\r
    align-items: start;\r
  }\r
}\r
.pr-ultra__copy { display: flex; flex-direction: column; gap: 12px; }\r
.pr-ultra__copy .pr-eyebrow { color: var(--ultra); }\r
.pr-ultra__copy .pr-title { text-align: left; }\r
.pr-ultra__copy .pr-lead { text-align: left; margin: 0; max-width: 46ch; }\r
.pr-ultra__base {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 10px;\r
  margin-top: 4px;\r
  padding: 12px 14px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid color-mix(in srgb, var(--ultra) 30%, transparent);\r
  background: color-mix(in srgb, var(--ultra) 8%, transparent);\r
  font-size: 0.75rem;\r
  line-height: 1.55;\r
  color: var(--sk-ds-t2);\r
}\r
.pr-ultra__base svg { color: var(--ultra); flex-shrink: 0; margin-top: 3px; font-size: 0.8rem; }\r
.pr-ultra__cta {\r
  align-self: flex-start;\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  margin-top: 6px;\r
  padding: 10px 16px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid color-mix(in srgb, var(--ultra) 45%, transparent);\r
  background: transparent;\r
  color: var(--ultra);\r
  font-family: var(--sk-font-heading);\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  letter-spacing: 0.06em;\r
  text-transform: none;\r
  cursor: pointer;\r
  transition: background var(--sk-t-base, 0.18s ease), transform var(--sk-t-fast, 0.12s ease);\r
}\r
.pr-ultra__cta:hover { background: color-mix(in srgb, var(--ultra) 12%, transparent); transform: translateY(-1px); }\r
.pr-ultra__cta:focus-visible { outline: 2px solid var(--ultra); outline-offset: 2px; }\r
.pr-ultra__nichos {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 10px;\r
  list-style: none;\r
  margin: 0;\r
  padding: 0;\r
}\r
@media (min-width: 560px) {\r
  .pr-ultra__nichos { grid-template-columns: repeat(2, minmax(0, 1fr)); }\r
}\r
.pr-ultra__nicho {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 12px;\r
  padding: 14px;\r
  border-radius: 14px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  transition: border-color var(--sk-t-base, 0.18s ease), transform var(--sk-t-base, 0.18s ease);\r
}\r
html.dark .pr-ultra__nicho { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2.5%, transparent); border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent); }\r
.pr-ultra__nicho:hover { border-color: color-mix(in srgb, var(--ultra) 45%, transparent); transform: translateY(-2px); }\r
.pr-ultra__nicho--aberto { border-style: dashed; }\r
.pr-ultra__nicho-icon {\r
  width: 36px;\r
  height: 36px;\r
  border-radius: 11px;\r
  flex-shrink: 0;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-size: 0.9rem;\r
  color: var(--ultra);\r
  background: color-mix(in srgb, var(--ultra) 11%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--ultra) 26%, transparent);\r
}\r
.pr-ultra__nicho-body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }\r
.pr-ultra__nicho-title {\r
  font-family: var(--sk-font-heading);\r
  font-size: 0.875rem;\r
  font-weight: 700;\r
  letter-spacing: 0.01em;\r
  color: var(--sk-ds-t1);\r
}\r
.pr-ultra__nicho-desc { font-size: 0.75rem; line-height: 1.5; color: var(--sk-ds-t2); }\r
\r
.pr-publicos {\r
  display: grid;\r
  grid-template-columns: repeat(2, minmax(0, 1fr));\r
  gap: 14px;\r
}\r
@media (min-width: 880px) { .pr-publicos { grid-template-columns: repeat(4, minmax(0, 1fr)); } }\r
.pr-pub {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  gap: 8px;\r
  padding: 20px 14px;\r
  border-radius: 15px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
}\r
html.dark .pr-pub { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent); border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent); }\r
.pr-pub__icon { font-size: 1.15rem; color: var(--pr-cold); }\r
.pr-pub__title {\r
  font-family: var(--sk-font-heading, 'Montserrat', sans-serif);\r
  font-size: 0.78rem;\r
  font-weight: 700;\r
  color: var(--sk-ds-t1);\r
}\r
.pr-pub__desc { font-size: 0.68rem; line-height: 1.5; color: var(--sk-ds-t2); }\r
\r
.pr-wintrax {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  gap: 24px;\r
  align-items: center;\r
  padding: clamp(24px, 4vw, 40px);\r
  border-radius: 22px;\r
  border: 1px solid var(--pr-cold-line);\r
  background: linear-gradient(135deg, var(--pr-cold-soft), transparent 60%);\r
}\r
@media (min-width: 960px) {\r
  .pr-wintrax { grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 40px; }\r
}\r
.pr-wintrax__copy { display: flex; flex-direction: column; gap: 12px; }\r
.pr-wintrax__copy .pr-title { text-align: left; }\r
.pr-wintrax__copy .pr-lead { margin: 0; animation: none; text-align: left; max-width: none; }\r
.pr-wintrax__list { list-style: none; margin: 4px 0 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }\r
.pr-wintrax__list li {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 7px;\r
  font-size: 0.72rem;\r
  font-weight: 600;\r
  line-height: 1.4;\r
  color: var(--sk-ds-t2);\r
}\r
.pr-wintrax__list svg { color: var(--pr-cold); flex-shrink: 0; margin-top: 2px; font-size: 0.6rem; }\r
@media (max-width: 560px) { .pr-wintrax__list { grid-template-columns: 1fr; } }\r
\r
.pr-legacy-note {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  flex-wrap: wrap;\r
  gap: 16px;\r
  padding: 20px 24px;\r
  border-radius: 16px;\r
  border: 1px dashed var(--pr-cold-line);\r
  background: var(--pr-cold-soft);\r
}\r
.pr-legacy-note p {\r
  margin: 0;\r
  font-size: 0.78rem;\r
  line-height: 1.6;\r
  color: var(--sk-ds-t2);\r
  max-width: 640px;\r
}\r
\r
.pr-final {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  text-align: center;\r
  gap: 18px;\r
  padding: clamp(36px, 6vw, 60px) 24px;\r
  border-radius: 24px;\r
  border: 1px solid var(--sk-ds-line);\r
  background:\r
    radial-gradient(ellipse 60% 90% at 50% 0%, var(--pr-cold-soft), transparent 70%),\r
    var(--sk-ds-surface);\r
}\r
html.dark .pr-final {\r
  background:\r
    radial-gradient(ellipse 60% 90% at 50% 0%, var(--pr-cold-soft), transparent 70%),\r
    color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
.pr-final .pr-title { max-width: 620px; }\r
.pr-final__note {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.6875rem;\r
  color: var(--sk-ds-t2);\r
}\r
\r
@media (max-width: 640px) {\r
  .pr-hero { padding-top: 44px; }\r
  .pr-eyebrow::before, .pr-eyebrow::after { width: 20px; }\r
  .pr-hero-actions { flex-direction: column; width: 100%; }\r
  .pr-cta-loja, .pr-cta-ghost { width: 100%; }\r
  .pr-spec { flex-basis: 50%; min-width: 0; }\r
  .pr-spec:nth-child(odd) { border-left: 0; }\r
  .pr-spec:nth-child(n+3) { border-top: 1px solid var(--sk-ds-line-soft); }\r
  .pr-legacy-note { flex-direction: column; align-items: flex-start; }\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .pr-eyebrow, .pr-display, .pr-lead, .pr-hero-actions, .pr-specplate { animation: none !important; }\r
  .pr-console:hover, .pr-line-card:hover, .pr-cta-loja:hover { transform: none; }\r
}\r
\r
.pr-creativelab-card {\r
  padding: clamp(20px, 3.5vw, 28px);\r
  border-radius: 20px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  box-shadow: none;\r
  transition: border-color 0.2s ease, box-shadow 0.2s ease;\r
}\r
html.dark .pr-creativelab-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2.5%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
.pr-creativelab-card:hover {\r
  border-color: var(--pr-cold-line);\r
}\r
\r
.pr-entendamais-hub {\r
  margin-top: 36px;\r
  border-radius: 24px;\r
  border: 1px solid var(--pr-cold-line);\r
  background:\r
    radial-gradient(ellipse 80% 50% at 50% 0%, var(--pr-cold-soft), transparent 70%),\r
    var(--sk-ds-surface);\r
  overflow: hidden;\r
  box-shadow: none;\r
  transition: all 0.3s ease;\r
}\r
html.dark .pr-entendamais-hub {\r
  background:\r
    radial-gradient(ellipse 80% 50% at 50% 0%, var(--pr-cold-soft), transparent 70%),\r
    color-mix(in srgb, var(--sk-palette-blue-0c1017) 96%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 24%, transparent);\r
}\r
\r
.pr-entendamais-trigger {\r
  width: 100%;\r
  padding: clamp(22px, 3.5vw, 32px);\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 16px;\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;\r
  text-align: left;\r
  color: var(--sk-ds-t1);\r
  transition: background 0.2s ease;\r
}\r
.pr-entendamais-trigger:hover {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2.5%, transparent);\r
}\r
\r
.pr-entendamais-chevron {\r
  width: 44px;\r
  height: 44px;\r
  border-radius: 14px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: var(--pr-cold-soft);\r
  color: var(--pr-cold);\r
  border: 1px solid var(--pr-cold-line);\r
  flex-shrink: 0;\r
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.2s ease;\r
}\r
.pr-entendamais-hub--open .pr-entendamais-chevron {\r
  transform: rotate(180deg);\r
  background: var(--pr-cold);\r
  color: var(--sk-ds-on-accent);\r
}\r
\r
.pr-entendamais-body {\r
  padding: 0 clamp(20px, 3.5vw, 36px) clamp(28px, 4vw, 44px);\r
  border-top: 1px solid var(--sk-ds-line);\r
}\r
html.dark .pr-entendamais-body {\r
  border-top-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
\r
.pr-opt-chapter {\r
  padding: 24px 0;\r
  border-bottom: 1px dashed var(--sk-ds-line);\r
}\r
html.dark .pr-opt-chapter {\r
  border-bottom-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
.pr-opt-chapter:last-child {\r
  border-bottom: none;\r
  padding-bottom: 0;\r
}\r
\r
.pr-opt-grid {\r
  display: grid;\r
  grid-template-columns: 1fr;\r
  gap: 12px;\r
  margin-top: 14px;\r
}\r
@media (min-width: 768px) {\r
  .pr-opt-grid {\r
    grid-template-columns: repeat(2, 1fr);\r
  }\r
}\r
\r
.pr-opt-item {\r
  padding: 16px 18px;\r
  border-radius: 14px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 2%, transparent);\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
}\r
html.dark .pr-opt-item {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
\r
.pr-opt-benefit-pill {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 8px;\r
  padding: 8px 12px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: var(--pr-cold-soft);\r
  color: var(--pr-cold);\r
  font-size: 0.72rem;\r
  line-height: 1.45;\r
  margin-top: 4px;\r
}\r
html.dark .pr-opt-benefit-pill {\r
  background: color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 8%, transparent);\r
  color: var(--sk-palette-cyan-67e8f9);\r
}\r
\r
.pr-guide-item {\r
  border-radius: 20px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  box-shadow: none;\r
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\r
  overflow: hidden;\r
}\r
html.dark .pr-guide-item {\r
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-blue-121823) 75%, transparent) 0%, color-mix(in srgb, var(--sk-palette-blue-0a0e15) 92%, transparent) 100%);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  box-shadow: none;\r
}\r
.pr-guide-item:hover {\r
  border-color: var(--pr-cold-line);\r
  box-shadow: none;\r
}\r
.pr-guide-item--open {\r
  border-color: var(--pr-cold-line);\r
  box-shadow: none;\r
}\r
html.dark .pr-guide-item--open {\r
  border-color: color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 35%, transparent);\r
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-blue-172030) 88%, transparent) 0%, color-mix(in srgb, var(--sk-palette-blue-0b0f17) 96%, transparent) 100%);\r
}\r
\r
.pr-guide-btn {\r
  width: 100%;\r
  padding: clamp(16px, 2.8vw, 22px) clamp(16px, 3.2vw, 24px);\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 16px;\r
  background: transparent;\r
  border: none;\r
  cursor: pointer;\r
  text-align: left;\r
  color: var(--sk-ds-t1);\r
  transition: background 0.2s ease;\r
}\r
\r
.pr-guide-icon {\r
  width: 44px;\r
  height: 44px;\r
  border-radius: 14px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  flex-shrink: 0;\r
  transition: transform 0.25s ease, box-shadow 0.25s ease;\r
}\r
.pr-guide-item:hover .pr-guide-icon {\r
  transform: scale(1.05);\r
}\r
\r
.pr-guide-badge {\r
  font-family: monospace;\r
  font-size: 0.625rem;\r
  font-weight: 700;\r
  letter-spacing: 0.02em;\r
  text-transform: none;\r
  display: inline-block;\r
  margin-bottom: 2px;\r
}\r
\r
.pr-guide-title {\r
  font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);\r
  font-weight: 700;\r
  color: var(--sk-ds-t1);\r
  line-height: 1.35;\r
  margin: 0;\r
}\r
\r
.pr-guide-sub {\r
  font-size: 0.75rem;\r
  color: var(--sk-ds-t2);\r
  margin-top: 2px;\r
  line-height: 1.45;\r
}\r
\r
.pr-guide-action-pill {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  flex-shrink: 0;\r
}\r
\r
.pr-guide-chevron-box {\r
  width: 32px;\r
  height: 32px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 4%, transparent);\r
  color: var(--sk-ds-t2);\r
  transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.2s ease, color 0.2s ease;\r
}\r
html.dark .pr-guide-chevron-box {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5%, transparent);\r
  color: var(--sk-ds-t2);\r
}\r
.pr-guide-item--open .pr-guide-chevron-box {\r
  transform: rotate(180deg);\r
  background: var(--pr-cold-soft);\r
  color: var(--pr-cold);\r
}\r
\r
.pr-guide-content-area {\r
  padding: 0 clamp(16px, 3.2vw, 26px) clamp(18px, 3vw, 26px);\r
  border-top: 1px solid var(--sk-ds-line);\r
}\r
html.dark .pr-guide-content-area {\r
  border-top-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
\r
.pr-guide-stage {\r
  padding: 16px 18px;\r
  border-radius: 14px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  transition: all 0.2s ease;\r
}\r
html.dark .pr-guide-stage {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
.pr-guide-stage:hover {\r
  border-color: var(--pr-cold-line);\r
  transform: translateY(-1px);\r
}\r
\r
.pr-guide-step-row {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 14px;\r
  padding: 14px 16px;\r
  border-radius: 14px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  transition: all 0.2s ease;\r
}\r
html.dark .pr-guide-step-row {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
.pr-guide-step-row:hover {\r
  border-color: var(--pr-cold-line);\r
}\r
\r
.pr-guide-step-num {\r
  width: 26px;\r
  height: 26px;\r
  border-radius: 8px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-family: monospace;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  background: var(--pr-cold-soft);\r
  color: var(--pr-cold);\r
  border: 1px solid var(--pr-cold-line);\r
  flex-shrink: 0;\r
  margin-top: 1px;\r
}\r
\r
.pr-trust-highlight {\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  padding: 10px 14px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  background: color-mix(in srgb, var(--sk-accent) 8%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 20%, transparent);\r
  color: var(--sk-accent);\r
  font-size: 0.75rem;\r
  line-height: 1.45;\r
  margin-top: 10px;\r
}\r
html.dark .pr-trust-highlight {\r
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  color: var(--sk-ds-accent);\r
}\r
\r
.pr-proof-interactive {\r
  margin-top: 24px;\r
  border-radius: 20px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  box-shadow: none;\r
  padding: clamp(16px, 2.5vw, 24px);\r
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\r
}\r
html.dark .pr-proof-interactive {\r
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-blue-141a26) 80%, transparent) 0%, color-mix(in srgb, var(--sk-palette-blue-0a0e15) 95%, transparent) 100%);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
\r
.pr-proof-toggle-bar {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  padding: 4px;\r
  border-radius: 14px;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 4%, transparent);\r
  border: 1px solid var(--sk-ds-line);\r
  margin-bottom: 20px;\r
  max-width: 480px;\r
  margin-inline: auto;\r
}\r
html.dark .pr-proof-toggle-bar {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
\r
.pr-proof-toggle-btn {\r
  flex: 1;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
  padding: 9px 16px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  border: none;\r
  background: transparent;\r
  color: var(--sk-ds-t2);\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
.pr-proof-toggle-btn--active-skull {\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-accent) 15%, transparent), color-mix(in srgb, var(--sk-palette-cyan-06b6d4) 15%, transparent));\r
  color: var(--sk-accent);\r
  box-shadow: none;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
}\r
html.dark .pr-proof-toggle-btn--active-skull {\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-accent) 25%, transparent), color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 20%, transparent));\r
  color: var(--sk-ds-accent);\r
}\r
.pr-proof-toggle-btn--active-conv {\r
  background: color-mix(in srgb, var(--sk-palette-red-ef4444) 10%, transparent);\r
  color: var(--sk-palette-red-ef4444);\r
  box-shadow: none;\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-red-ef4444) 25%, transparent);\r
}\r
\r
.pr-metric-grid {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r
  gap: 12px;\r
}\r
\r
.pr-metric-card {\r
  padding: 14px 16px;\r
  border-radius: 14px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  transition: all 0.2s ease;\r
}\r
html.dark .pr-metric-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
\r
.pr-simulator-hub {\r
  margin-top: 40px;\r
  border-radius: 24px;\r
  border: 1px solid var(--pr-cold-line);\r
  background:\r
    radial-gradient(ellipse 70% 40% at 50% 0%, var(--pr-cold-soft), transparent 70%),\r
    var(--sk-ds-surface);\r
  padding: clamp(20px, 3.5vw, 32px);\r
  box-shadow: none;\r
  position: relative;\r
  overflow: hidden;\r
}\r
html.dark .pr-simulator-hub {\r
  background:\r
    radial-gradient(ellipse 70% 40% at 50% 0%, color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 12%, transparent), transparent 70%),\r
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-blue-101621) 95%, transparent) 0%, color-mix(in srgb, var(--sk-palette-blue-090d13) 98%, transparent) 100%);\r
  border-color: color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 25%, transparent);\r
}\r
\r
.pr-sim-step-title {\r
  font-size: 0.8125rem;\r
  font-weight: 700;\r
  text-transform: none;\r
  letter-spacing: 0.02em;\r
  color: var(--sk-ds-t1);\r
  margin-bottom: 10px;\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
}\r
\r
.pr-sim-options {\r
  display: grid;\r
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));\r
  gap: 10px;\r
  margin-bottom: 22px;\r
}\r
\r
.pr-sim-btn {\r
  padding: 12px 14px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  text-align: left;\r
  cursor: pointer;\r
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\r
  color: var(--sk-ds-t1);\r
}\r
html.dark .pr-sim-btn {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
.pr-sim-btn:hover {\r
  border-color: var(--pr-cold-line);\r
  transform: translateY(-1px);\r
}\r
.pr-sim-btn--active {\r
  border-color: var(--sk-accent) !important;\r
  background: color-mix(in srgb, var(--sk-accent) 8%, transparent) !important;\r
  box-shadow: none;\r
}\r
html.dark .pr-sim-btn--active {\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent) !important;\r
  border-color: var(--sk-ds-accent) !important;\r
}\r
\r
.pr-sim-result-card {\r
  border-radius: 16px;\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-accent) 6%, transparent), color-mix(in srgb, var(--sk-palette-cyan-06b6d4) 4%, transparent));\r
  padding: clamp(16px, 2.5vw, 24px);\r
  margin-top: 14px;\r
}\r
html.dark .pr-sim-result-card {\r
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-accent) 10%, transparent), color-mix(in srgb, var(--sk-palette-cyan-22d3ee) 6%, transparent));\r
  border-color: color-mix(in srgb, var(--sk-accent) 35%, transparent);\r
}\r
\r
.pr-ultra-tabs {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
  overflow-x: auto;\r
  padding-bottom: 8px;\r
  scrollbar-width: thin;\r
}\r
.pr-ultra-tab-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 8px;\r
  padding: 10px 18px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  color: var(--sk-ds-t2);\r
  white-space: nowrap;\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
html.dark .pr-ultra-tab-btn {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
.pr-ultra-tab-btn:hover {\r
  color: var(--sk-ds-t1);\r
  border-color: var(--pr-cold-line);\r
}\r
.pr-ultra-tab-btn--active {\r
  border-color: var(--pr-cold) !important;\r
  color: var(--pr-cold) !important;\r
  background: var(--pr-cold-soft) !important;\r
  box-shadow: none;\r
}\r
\r
.pr-ultra-spotlight {\r
  padding: clamp(18px, 2.8vw, 26px);\r
  border-radius: 18px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  transition: all 0.25s ease;\r
}\r
html.dark .pr-ultra-spotlight {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 25%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);\r
}\r
\r
.pr-guide-icon--emerald {\r
  color: var(--sk-accent);\r
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  box-shadow: none;\r
}\r
\r
.pr-guide-icon--cyan {\r
  color: var(--pr-cold, var(--sk-palette-cyan-0e7490));\r
  background: var(--pr-cold-soft);\r
  border-color: var(--pr-cold-line);\r
  box-shadow: none;\r
}\r
html.dark .pr-guide-icon--cyan {\r
  color: var(--pr-cold, var(--sk-palette-cyan-22d3ee));\r
}\r
\r
.pr-guide-icon--amber {\r
  color: var(--sk-palette-orange-f59e0b);\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 25%, transparent);\r
  box-shadow: none;\r
}\r
\r
.pr-pilar-card {\r
  padding: 12px;\r
  border-radius: 14px;\r
  border: 1px solid var(--sk-ds-line);\r
  background: var(--sk-ds-surface);\r
  display: flex;\r
  align-items: center;\r
  gap: 10px;\r
  min-width: 0;\r
}\r
html.dark .pr-pilar-card {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent);\r
}\r
@media (max-width: 640px) {\r
  .pr-pilar-card {\r
    padding: 10px 8px;\r
    gap: 8px;\r
  }\r
}\r
\r
.pr-dot-tg {\r
  width: 6px;\r
  height: 6px;\r
  border-radius: 9999px;\r
  background: var(--sk-accent);\r
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\r
}\r
\r
.pr-btn-expand {\r
  padding: 6px 12px;\r
  border-radius: 8px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 4%, transparent);\r
  color: var(--sk-ds-t2);\r
  border: 1px solid var(--sk-ds-line);\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
}\r
html.dark .pr-btn-expand {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
  color: var(--sk-palette-blue-cbd5e1);\r
}\r
.pr-btn-expand:hover {\r
  background: var(--pr-cold-soft);\r
  color: var(--pr-cold);\r
  border-color: var(--pr-cold-line);\r
}\r
\r
.pr-text-accent { color: var(--sk-accent); }\r
html.dark .pr-text-accent { color: var(--sk-ds-accent); }\r
\r
.pr-text-cold { color: var(--sk-palette-cyan-0284c7); }\r
html.dark .pr-text-cold { color: var(--sk-palette-cyan-38bdf8); }\r
\r
.pr-text-violet { color: var(--sk-palette-indigo-7c3aed); }\r
html.dark .pr-text-violet { color: var(--sk-palette-indigo-a78bfa); }\r
\r
.pr-text-warn { color: var(--sk-palette-orange-d97706); }\r
html.dark .pr-text-warn { color: var(--sk-palette-orange-fbbf24); }\r
\r
.pr-text-danger { color: var(--sk-palette-red-dc2626); }\r
html.dark .pr-text-danger { color: var(--sk-palette-red-f87171); }\r
\r
.pr-box-accent {\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-accent) 4%, transparent);\r
}\r
\r
.pr-box-cold {\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-cyan-0e7490) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-cyan-0e7490) 4%, transparent);\r
}\r
\r
.pr-box-violet {\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-indigo-7c3aed) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-indigo-7c3aed) 4%, transparent);\r
}\r
\r
.pr-box-amber {\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-orange-d97706) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-orange-d97706) 4%, transparent);\r
}\r
\r
.pr-box-danger {\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-red-dc2626) 25%, transparent);\r
  background: color-mix(in srgb, var(--sk-palette-red-dc2626) 4%, transparent);\r
}\r
\r
.pr-tag-warn {\r
  font-family: var(--sk-font-mono, monospace);\r
  font-size: 10px;\r
  padding: 2px 10px;\r
  border-radius: 9999px;\r
  background: color-mix(in srgb, var(--sk-palette-orange-f59e0b) 15%, transparent);\r
  color: var(--sk-palette-orange-f59e0b);\r
  font-weight: 700;\r
  letter-spacing: 0.05em;\r
}\r
\r
.pr-badge-accent {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  padding: 4px 12px;\r
  border-radius: 9999px;\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);\r
  color: var(--sk-accent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
}\r
html.dark .pr-badge-accent {\r
  color: var(--sk-ds-accent);\r
}\r
\r
.pr-sim-step-num {\r
  width: 1.25rem;\r
  height: 1.25rem;\r
  border-radius: 9999px;\r
  background: color-mix(in srgb, var(--sk-palette-cyan-06b6d4) 10%, transparent);\r
  color: var(--sk-palette-cyan-06b6d4);\r
  font-size: 10px;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  font-family: var(--sk-font-mono, monospace);\r
  font-weight: 700;\r
}\r
\r
.pr-sim-result-head {\r
  border-bottom: 1px solid color-mix(in srgb, var(--sk-accent) 20%, transparent);\r
}\r
\r
.pr-ultra-nicho-active {\r
  border-color: color-mix(in srgb, var(--sk-palette-cyan-06b6d4) 40%, transparent) !important;\r
}\r

.pr-community-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.pr-community-grid figure { margin: 0; min-width: 0; }
.pr-community-shot { display: flex; flex-direction: column; gap: 12px; width: 100%; padding: 12px; background: var(--sk-ds-surface); color: var(--sk-ds-t1); border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-sm, 6px); cursor: zoom-in; }
.pr-community-shot:focus-visible { outline: 2px solid var(--sk-accent); outline-offset: 3px; }
.pr-community-shot img { width: 100%; height: clamp(320px, 40vw, 440px); -o-object-fit: contain; object-fit: contain; }
.pr-community-shot span { font-size: 12px; font-weight: 600; }
.pr-community-grid figcaption { padding: 14px 0; font-size: 14px; color: var(--sk-ds-t1); }
.pr-community-grid figcaption p, .pr-community-demo > p { color: var(--sk-ds-t2); font-size: 13px; line-height: 1.65; }
.pr-community-demo { max-width: 800px; margin: 24px auto 0; }
@media (max-width: 767px) { .pr-community-grid { grid-template-columns: minmax(0, 1fr); gap: 12px; } }

.pr-community-grid blockquote { margin: 12px 0; padding-left: 14px; border-left: 2px solid var(--sk-brand); color: var(--sk-ds-t1); font-size: 16px; line-height: 1.6; }`,T=[{id:"lab-experiencia",icon:"fa-flask",badge:"Quase 10 Anos de Experiência",title:"Laboratório de Criatividade & Validação Empírica",subtitle:"Afinamento contínuo construído na prática ao longo de anos",desc:"O Laboratório de Criatividade é o espaço onde a arte da personalização e a engenharia de precisão se encontram. Cada edição nasce de quase uma década de estudos, testes de bancada e aperfeiçoamento constante. Nenhum ajuste entra por acaso: cada modificação é exaustivamente validada para entregar máxima resposta e estabilidade inabalável.",points:["Mais de 9 anos de evolução e testes práticos em múltiplos hardwares","Equilíbrio milimétrico entre máxima performance e estabilidade diária","Aprimoramento contínuo: cada detalhe tem um propósito funcional"]},{id:"lab-boot-direto",icon:"fa-desktop",badge:"Experiência Imediata",title:"Boot Direto na Área de Trabalho (Zero Fricção)",subtitle:"Terminou de instalar, o sistema já entra pronto para usar",desc:"Eliminamos todo o cansaço do pós-instalação da Microsoft. O sistema é concebido para que, logo após a inicialização, você entre diretamente na Área de Trabalho limpa e ágil, sem telas lentas, questionários infinitos ou exigências de contas online forçadas. É ligar e começar a trabalhar ou jogar na mesma hora.",points:["Sem telas chatas de configuração pós-instalação (OOBE limpo)","Área de Trabalho pronta com acesso imediato às ferramentas essenciais","Economia de tempo valiosa para quem formata e para quem usa"]},{id:"lab-tpm-freedom",icon:"fa-microchip",badge:"Edições Windows 11",title:"Windows 11 Preparado Sem Exigência de TPM",subtitle:"Instalação direta nas edições W11 — sem bloqueios artificiais de compatibilidade",desc:`Nas edições Windows 11 da ${N.name}, a preparação inclui um processo específico de remoção das exigências de TPM 2.0 e Secure Boot, viabilizando a instalação em computadores que a Microsoft declara incompatíveis. Esse procedimento é feito durante a preparação da imagem e é particular às edições W11 — não deve ser interpretado como compatibilidade universal com qualquer equipamento.`,points:["Preparação específica das edições W11 para dispensar TPM 2.0 e Secure Boot","Viabiliza uso em gerações anteriores de hardware sem alertas invasivos","Característica exclusiva das edições W11 — edições W10 seguem o fluxo padrão"]},{id:"lab-trabalho-invisivel",icon:"fa-gem",badge:"Experiência Preparada",title:"Você Chega na Área de Trabalho. O Trabalho Já Foi Feito.",subtitle:"Um sistema que chega organizado, pronto — sem processo para você resolver",desc:"Cada edição passa por um processo completo de preparação antes de chegar até você. O resultado é um sistema organizado, com ferramentas no lugar certo, interface ajustada e comportamento do Windows calibrado para o uso pretendido. Você não precisa saber como foi feito — basta instalar e começar.",points:["Sistema chegando configurado e organizado desde o primeiro boot","Área de Trabalho pronta com acesso direto ao que você precisa","Manuais de orientação e suporte incluídos na entrega"]},{id:"lab-preco-justo",icon:"fa-hand-holding-usd",badge:"Valor Comercial",title:"Preço que Reflete o Trabalho Real",subtitle:"Equilíbrio entre custo de produção e acesso para o público da marca",desc:`O valor de cada edição considera o tempo de desenvolvimento, o conhecimento acumulado em quase dez anos, a seleção e preparação das configurações, os testes realizados, a infraestrutura de hospedagem e distribuição e o trabalho de manutenção das edições. Ao mesmo tempo, a ${N.name} mantém preços acessíveis ao público que acompanha a marca — técnicos de informática, gamers, entusiastas e colecionadores — sem comparações com concorrentes e sem exageros publicitários.`,points:["Valor calculado sobre desenvolvimento, infraestrutura e manutenção das edições","Preços acessíveis ao público técnico e entusiasta que acompanha a marca","Licença vitalícia — uma compra, sem mensalidades ou cobranças recorrentes"]}],v=[{id:"sec-cpu",sectorNumber:"01",icon:"fa-microchip",tag:"Processador (CPU)",title:"Potência Total, Cache e Sem Núcleos Ociosos",summary:"No Windows comum, núcleos da CPU são colocados em repouso e a frequência oscila. Aqui o processador opera com força total e resposta imediata.",items:[{name:"Desativação de Core Parking",badge:"CPU Ativa 100%",simpleExplanation:'No Windows padrão, alguns núcleos do processador ficam "dormindo" para economizar energia, gerando pequenos engasgos quando precisam ser acordados.',benefit:"Todos os núcleos físicos e lógicos da sua CPU permanecem 100% ativos e alertas, respondendo instantaneamente a qualquer clique ou jogo."},{name:"Eliminação do Throttling de Energia",badge:"Sem Travas",simpleExplanation:"O sistema operacional limita a entrega de energia da CPU em segundo plano quando detecta cargas contínuas.",benefit:"O processador entrega potência estável e máxima sem que o Windows force quedas repentinas de frequência."},{name:"Cálculo Dinâmico de Cache L2 e L3",badge:"Sincronia Fina",simpleExplanation:"Identificação e registro preciso da memória cache de alta velocidade do seu modelo de processador.",benefit:"Acelera a troca de instruções entre os núcleos do chip, diminuindo o tempo de espera no processamento pesado."},{name:"Plano de Desempenho Máximo Nativo",badge:"Modo Extremo",simpleExplanation:"Ativação do perfil oculto de mais alta performance suportado nativamente pelo Windows.",benefit:"Desbloqueia o Turbo Boost na hora certa e evita hesitações do sistema ao alternar entre programas."}]},{id:"sec-latencia",sectorNumber:"02",icon:"fa-bolt",tag:"Kernel & Latência",title:"Menor Latência, Temporizador TSC & Zero Input Lag",summary:"Sincronismo milimétrico entre o comando físico no mouse/teclado e o que acontece na tela, sem atrasos ou engasgos.",items:[{name:"Relógio de Hardware Estável (TSC)",badge:"Sincronismo Puro",simpleExplanation:"Força o sistema a usar o relógio interno mais estável do processador, desligando temporizadores virtuais lentos (HPET e Dynamic Tick).",benefit:"Elimina as micro-variações de tempo que causam atraso e sensação de lentidão nos movimentos de jogos e programas."},{name:"Timer Resolution de Alta Precisão",badge:"Zero Input Lag",simpleExplanation:"Ajuste na taxa com que o Windows confere os comandos enviados pelos periféricos.",benefit:"O clique do mouse e o toque das teclas são lidos no menor tempo possível, conferindo mira cirúrgica e digitação fluida."},{name:"Quantum de Thread para Primeiro Plano",badge:"Foco Total",simpleExplanation:"O Windows define quanto tempo de atenção a CPU dá a cada janela aberta.",benefit:"O jogo ou software que você está usando ganha prioridade absoluta na CPU; tarefas de segundo plano não roubam sua fluidez."},{name:"Desativação de VBS e Hyper-V Pesados",badge:"+15% de Performance",simpleExplanation:"A Microsoft força camadas de virtualização de segurança de servidores que sobrecarregam computadores pessoais.",benefit:"Recupera até 15% de poder de processamento e taxa de quadros (FPS) que ficavam presos nessa virtualização invisível."},{name:"Encerramento Rápido de Serviços",badge:"Desligamento Rápido",simpleExplanation:"Reduz os tempos em que o Windows fica esperando programas fecharem ao reiniciar.",benefit:'O computador desliga e reinicia em segundos, sem ficar travado na tela de "Aguarde encerrando aplicativos".'}]},{id:"sec-ram",sectorNumber:"03",icon:"fa-memory",tag:"Memória RAM",title:"Gerenciamento Inteligente & RAM Livre de Verdade",summary:"O consumo de memória em repouso cai até 70%, sobrando espaço de sobra para dezenas de abas, renderização e jogos pesados.",items:[{name:"Kernel Travado na Memória RAM",badge:"Resposta Ultra-Rápida",simpleExplanation:"Impede que o núcleo vital do Windows seja transferido para o arquivo de paginação no disco.",benefit:"Como a memória RAM é milhares de vezes mais rápida que qualquer disco, abrir menus, pastas e alternar janelas é imediato."},{name:"Fim da Compressão Forçada de Memória",badge:"CPU Aliviada",simpleExplanation:"O Windows comum usa ciclos preciosos de processador para ficar comprimindo e descomprimindo dados na memória.",benefit:"Elimina essa sobrecarga desnecessária na CPU, ideal para máquinas com 8 GB de RAM ou mais."},{name:"Cache Grande do Sistema (LargeSystemCache)",badge:"Buffer Eficiente",simpleExplanation:"Reserva uma área generosa da memória para manter arquivos frequentemente acessados.",benefit:"Proporciona carregamentos muito mais velozes em jogos de mundo aberto e programas de produção de conteúdo."},{name:"Até 70% Menos RAM em Repouso",badge:"Memória Livre",simpleExplanation:"Ao ligar a máquina, o sistema consome apenas uma fração da memória que o Windows original consumiria.",benefit:"Mais gigabytes livres para o que você realmente quer usar: jogos pesados, emuladores e navegadores sem travamentos."}]},{id:"sec-disco",sectorNumber:"04",icon:"fa-hard-drive",tag:"Disco & SSD / NVMe",title:"Mais Espaço Útil e Maior Vida Útil para seu SSD",summary:"Liberação de mais de 7 GB que a Microsoft bloqueia e eliminação de gravações invisíveis que desgastam seu disco.",items:[{name:"Liberação do Armazenamento Reservado",badge:"~7 GB Devolvidos",simpleExplanation:"A Microsoft bloqueia silenciosamente cerca de 7 GB de disco para atualizações e arquivos temporários.",benefit:"Esse espaço é completamente desbloqueado e devolvido para você guardar suas fotos, vídeos e jogos."},{name:"Fim das Gravações de Último Acesso (NTFS)",badge:"Preserva seu SSD",simpleExplanation:"Por padrão, o Windows grava dados no disco toda vez que você apenas clica ou visualiza um arquivo.",benefit:"Evita milhares de gravações inúteis diárias, preservando a saúde e a durabilidade do seu SSD ou NVMe por muito mais anos."},{name:"Desativação de Nomes Curtos 8.3 Legados",badge:"Abertura Rápida",simpleExplanation:"Elimina a criação de nomes compatíveis com o MS-DOS dos anos 90 para cada arquivo novo.",benefit:"Acelera a abertura e a rolagem de pastas que contêm centenas ou milhares de arquivos e fotos."},{name:"Buffer de Transferência NTFS Otimizado",badge:"Cópia Acelerada",simpleExplanation:"Ajuste fino nos limites de entrada e saída de dados do sistema de arquivos.",benefit:"Transferência de arquivos e instalação de novos softwares ocorrem com velocidade estável e contínua."}]},{id:"sec-rede",sectorNumber:"05",icon:"fa-wifi",tag:"Rede & Ping",title:"Internet Estável, Zero Jitter & Sem Gargalo do Windows",summary:"Eliminação dos limitadores artificiais de pacotes da Microsoft e estabilização de sinal para partidas online sem oscilação.",items:[{name:"Fim do Network Throttling do Windows",badge:"Rede Desbloqueada",simpleExplanation:"O Windows limita intencionalmente a placa de rede a apenas 10 pacotes por milissegundo quando há som ou vídeo tocando.",benefit:"Sua internet opera com 100% da velocidade contratada o tempo todo, sem estrangulamentos artificiais."},{name:"Zero Jitter de Ping (Fim do Green Ethernet)",badge:"Ping Cimentado",simpleExplanation:"Desativa modos ecológicos da placa de rede que colocavam a conexão em espera para poupar miliwatts.",benefit:"Elimina as variações bruscas de ping (jitter) que causam mortes injustas e travamentos em tiroteios de jogos online."},{name:"Cache DNS de Alta Performance",badge:"Navegação Ágil",simpleExplanation:"Memorização eficiente de rotas e servidores seguros para evitar reconsultas na web.",benefit:'Sites, jogos e servidores carregam instantaneamente sem mensagens de "resolvendo host" ou falhas de conexão.'},{name:"Rede Local e Compartilhamento 100% Funcionais",badge:"Totalmente Compatível",simpleExplanation:"Preserva os protocolos autênticos de compartilhamento de arquivos (SMB) e descoberta de computadores.",benefit:"Empresas, escritórios e redes domésticas continuam compartilhando pastas, servidores e impressoras sem nenhum problema."}]},{id:"sec-gpu",sectorNumber:"06",icon:"fa-tv",tag:"Placa de Vídeo (GPU)",title:"Aceleração Gráfica Máxima, Modo MSI & Estabilidade de FPS",summary:"Comunicação direta entre sua placa de vídeo e o processador, eliminando engasgos e elevando a média de FPS.",items:[{name:"Modo MSI (Message Signaled Interrupts)",badge:"Sem Conflito de Hardware",simpleExplanation:"Configura a placa de vídeo para se comunicar com a placa-mãe por mensagens diretas, sem disputar linhas antigas de interrupção (IRQ).",benefit:"Elimina as micro-travadas (stutters) de tela e quedas bruscas de quadros que ocorrem do nada durante a gameplay."},{name:"HAGS (Agendamento de GPU por Hardware)",badge:"Menos Latência Gráfica",simpleExplanation:"Permite que a própria placa de vídeo gerencie sua memória de vídeo (VRAM), aliviando o processador.",benefit:"Aumenta a estabilidade da taxa de quadros e reduz o tempo de resposta em jogos pesados e renderização 3D."},{name:"Prioridade Multimídia (MMCSS) para Jogos",badge:"Foco nos Games",simpleExplanation:"Instrui o escalonador do Windows a reservar a maior fatia de capacidade gráfica para o jogo aberto.",benefit:"Garante que o jogo tenha prioridade absoluta, sem perder performance para janelas de fundo."},{name:"Game DVR Invisível Desativado",badge:"FPS Estável",simpleExplanation:"Desliga a gravação contínua em segundo plano que o Windows tenta fazer sem você pedir.",benefit:"Evita perda constante de 5 a 10 FPS que era desperdiçada gravando a tela sem necessidade."}]},{id:"sec-winreducer",sectorNumber:"07",icon:"fa-sliders",tag:"Redução da Imagem ISO",title:"O que Foi Removido (Debloat Limpo & Imagem Enxuta)",summary:"Eliminação na raiz de todo o peso morto que a Microsoft instala de fábrica, sem corromper nenhuma dependência do sistema.",items:[{name:"Limpeza e Otimização do WinSXS",badge:"Imagem Pura",simpleExplanation:"Redução e limpeza das pastas inchadas de backup e componentes redundantes do Windows.",benefit:"A instalação completa ocupa uma fração do tamanho tradicional e instala na máquina em apenas 3 a 5 minutos."},{name:"Remoção de Bloatwares e Anúncios",badge:"Zero Lixo",simpleExplanation:"Eliminação de jogos patrocinados de fábrica, notícias forçadas, Edge intrusivo e propagandas no menu.",benefit:"Uma experiência limpa, profissional e despoluída que respeita você e a capacidade do seu computador."},{name:"Exclusão de Componentes Ociosos",badge:"Mais Leveza",simpleExplanation:"Remoção de utilitários obsoletos: Internet Explorer 11, BitLocker pesado, Sandbox e feeds de notícias.",benefit:"Menos serviços e drivers ociosos consumindo energia e espaço em disco."},{name:"Proteção Fiel do Microsoft Office e Runtimes",badge:"100% Estável",simpleExplanation:"Ao reduzir a imagem, todos os arquivos necessários para Word, Excel, PowerPoint e ativação são rigorosamente blindados.",benefit:"Todos os seus softwares de trabalho e jogos funcionam sem erros de falta de DLL ou falhas de licença."}]},{id:"sec-servicos",sectorNumber:"08",icon:"fa-cogs",tag:"Serviços do Windows",title:"Agrupamento de Processos & Serviços sob Demanda",summary:"Dezenas de processos redundantes são consolidados e serviços secundários só abrem quando você realmente precisa.",items:[{name:"Agrupamento Máximo de SvcHost",badge:"−35 Processos",simpleExplanation:"O Windows moderno abre um processo separado para cada pequena tarefa interna, poluindo a máquina.",benefit:"Elimina cerca de 35 processos redundantes no Gerenciador de Tarefas, economizando memória e aliviando a CPU."},{name:"Serviços Essenciais em Automático",badge:"Uso Diário Perfeito",simpleExplanation:"Áudio, Spooler de impressão, redes, fontes e Bluetooth mantidos em inicialização automática.",benefit:"Garante que impressoras de escritório, fones de ouvido e conexões funcionem perfeitamente no primeiro boot."},{name:"Xbox Live sob Demanda (Manual)",badge:"Inteligente",simpleExplanation:"Os serviços do Xbox não ficam consumindo recursos se você não estiver jogando.",benefit:"Carregam suavemente apenas quando você abre o aplicativo do Xbox ou um jogo da loja, sem pesar no trabalho."},{name:"Fim dos AutoLoggers de Diagnóstico",badge:"Sem Logs Ocultos",simpleExplanation:"Desativa os gravadores automáticos do Windows que ficam salvando diários de uso da máquina.",benefit:"Menos consumo de disco e processador com relatórios que ninguém lê."}]},{id:"sec-privacidade",sectorNumber:"09",icon:"fa-shield-halved",tag:"Privacidade Total",title:"Bloqueio de Telemetria e Coleta de Dados na Raiz",summary:"Nenhuma informação sobre seus hábitos, digitação ou uso da máquina é transmitida para servidores externos.",items:[{name:"Desativação Profunda de Telemetria",badge:"Sua Privacidade em 1º Lugar",simpleExplanation:"Bloqueia os coletores de diagnóstico que monitoram seu comportamento no computador.",benefit:"O Windows passa a trabalhar exclusivamente para você, sem tráfego de dados oculto em segundo plano."},{name:"Bloqueio de Apps em Segundo Plano",badge:"Sem Drenagem",simpleExplanation:"Impede que aplicativos modernos fiquem acordados consumindo recursos sem estarem na tela.",benefit:"Economiza bateria em notebooks e garante que cada gota de hardware esteja dedicada ao seu programa atual."},{name:"Pesquisa Focada no Disco Local",badge:"Busca Sem Bing",simpleExplanation:"Desativa a integração da barra de pesquisa com a web e com assistentes virtuais.",benefit:"Ao buscar um arquivo ou programa, o resultado aparece na hora sem propagandas ou resultados lentos de internet."},{name:"Null-Debugger em Processos de Rastreio (IFEO)",badge:"Bloqueio Estrutural",simpleExplanation:"Mecanismo de segurança que impede que atualizadores invasivos de telemetria consigam ser executados.",benefit:"Garante que os rastreadores nunca voltem a funcionar sozinhos após o reinício da máquina."}]},{id:"sec-interface",sectorNumber:"10",icon:"fa-layer-group",tag:"Interface & Menu",title:"Interface Ágil, Mouse Preciso & Menu de Clique Direito",summary:"Janelas que abrem instantaneamente, precisão 1:1 no mouse e ferramentas exclusivas acessíveis pelo botão direito.",items:[{name:"Janelas e Menus Instantâneos",badge:"Sem Espera",simpleExplanation:"Elimina as animações lentas e atrasos visuais que fazem o Windows parecer pesado e travado.",benefit:"Pastas, menus e arquivos abrem no mesmo milissegundo do clique, aumentando sua produtividade diária."},{name:"Mouse com Resposta Crua (Sem Aceleração Falsa)",badge:"Precisão 1:1",simpleExplanation:'Desativa o recurso "Aprimorar Precisão do Ponteiro" que na verdade distorce a velocidade do cursor.',benefit:"A mão move exatamente a distância que o cursor percorre, fundamental para mira em jogos e edição de precisão."},{name:"USB sem Suspensão Seletiva",badge:"Periféricos Conectados",simpleExplanation:"Impede que o Windows desligue portas USB para poupar energia quando o computador está ligado.",benefit:"Evita que fones, microfones, teclados ou placas de som desconectem ou engasguem do nada."},{name:"Menu de Clique Direito Enriquecido",badge:"Ferramentas Rápidas",simpleExplanation:"Atalhos úteis no menu de contexto (Ultra Gerenciador de Performance, X-FASTER para faxina de cache).",benefit:"Você limpa a máquina e confere a performance com um simples clique com o botão direito, sem baixar programas extras."}]}],M=[{id:"vp-confianca",icon:"fa-award",concept:"Confiança",title:"Quase 10 anos de experiência real",desc:"Cada edição nasce de anos de prática contínua e aperfeiçoamento. Você não está testando algo novo — está usando o resultado de um processo consolidado, testado em hardware real, refinado ao longo do tempo."},{id:"vp-experiencia",icon:"fa-gem",concept:"Experiência",title:"Preparado para você, não para você preparar",desc:"O sistema chega organizado. Ferramentas no lugar, interface ajustada, tudo pronto para uso desde o primeiro boot — sem configuração inicial obrigatória. Você instala e começa."},{id:"vp-identidade",icon:"fa-fingerprint",concept:"Identidade",title:"Uma edição com proposta própria",desc:"Não é uma cópia genérica. Cada versão tem nome, proposta e público definidos. Alpha para uso cotidiano, Bravo para jogos, Charlie para empresas e Delta para nichos profissionais."},{id:"vp-seguranca",icon:"fa-circle-check",concept:"Segurança",title:"Testado. Estável. Compatível.",desc:"Impressoras, redes, certificados digitais, anticheats — o que importa para o seu trabalho e dia a dia funciona. Sem surpresas, sem driver quebrado, sem instabilidade depois de dias de uso."}],w=m.memo(({onEnterStore:p})=>{const[l,t]=m.useState(!1),[c,d]=m.useState(""),n=m.useMemo(()=>{if(!c.trim())return v;const s=c.toLowerCase();return v.filter(o=>{const u=o.title.toLowerCase().includes(s)||o.tag.toLowerCase().includes(s)||o.summary.toLowerCase().includes(s),g=o.items.some(i=>i.name.toLowerCase().includes(s)||i.simpleExplanation.toLowerCase().includes(s)||i.benefit.toLowerCase().includes(s)||i.badge.toLowerCase().includes(s));return u||g})},[c]);return e.jsxs("section",{className:"pr-section",id:"apresentacao-processo","aria-labelledby":"apresentacao-processo-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsxs("span",{className:"pr-eyebrow",children:[e.jsx(a,{className:"fas fa-flask"}),"Laboratório de Criatividade & Engenharia"]}),e.jsxs("h2",{id:"apresentacao-processo-titulo",className:"pr-title",children:["Laboratório de Criatividade:",e.jsx("span",{className:"pr-title-cold",children:"Mais que um sistema, uma experiência lapidada."})]}),e.jsx("p",{className:"pr-lead",children:"Você não precisa entender de linhas de comando para sentir a diferença. Cada edição nasce de quase dez anos de testes práticos, onde eliminamos cada peso morto que rouba sua velocidade, memória e foco."})]}),e.jsx("div",{className:"pr-creativelab-card",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 12px",borderRadius:"999px",fontSize:"0.6875rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",background:"var(--pr-cold-soft)",color:"var(--pr-cold)",border:"1px solid var(--pr-cold-line)"},children:[e.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--pr-cold)"}}),"Por que","Skull Legion","?"]}),e.jsx("span",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t3)"},children:"Quase 10 anos de experiência"})]}),e.jsxs("div",{style:{maxWidth:"820px"},children:[e.jsx("h3",{style:{fontSize:"clamp(1rem, 2vw, 1.25rem)",fontWeight:800,lineHeight:1.4,color:"var(--sk-ds-t1)",marginBottom:"10px"},children:"Você não está comprando um arquivo. Está mudando como seu computador trabalha."}),e.jsxs("p",{style:{fontSize:"0.8125rem",lineHeight:1.65,color:"var(--sk-ds-t2)",margin:0},children:["Cada edição da","Skull Legion","é preparada para que você chegue na área de trabalho e simplesmente comece. O que diferencia não é o que foi retirado do Windows — é o cuidado com o que ficou, o que foi organizado e o que foi pensado para o seu uso."]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"},children:M.map(s=>e.jsxs("div",{style:{padding:"16px 18px",borderRadius:"14px",background:"var(--sk-ds-surface)",border:"1px solid var(--sk-ds-line)",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{width:"28px",height:"28px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--pr-cold-soft)",color:"var(--pr-cold)",fontSize:"0.75rem",flexShrink:0},children:e.jsx(a,{className:`fas ${s.icon}`})}),e.jsx("span",{style:{fontSize:"0.5625rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--pr-cold)"},children:s.concept})]}),e.jsx("strong",{style:{fontSize:"0.8125rem",color:"var(--sk-ds-t1)",lineHeight:1.3},children:s.title}),e.jsx("p",{style:{fontSize:"0.72rem",color:"var(--sk-ds-t2)",margin:0,lineHeight:1.55},children:s.desc})]},s.id))}),e.jsx("div",{children:e.jsxs("button",{type:"button",onClick:p,className:"no-tap-highlight",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 18px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:800,background:"var(--sk-brand)",color:"var(--sk-brand-ink)",border:"none",cursor:"pointer"},children:[e.jsx(a,{className:"fas fa-store text-xs"}),e.jsx("span",{children:"Ver Sistemas no Catálogo"})]})})]})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"12px",marginTop:"4px"},children:[e.jsxs("div",{style:{padding:"14px 16px",borderRadius:"12px",background:"color-mix(in srgb, var(--sk-palette-neutral-000000) 2%, transparent)",border:"1px solid var(--sk-ds-line)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[e.jsx(a,{className:"fas fa-desktop text-primary"}),e.jsx("strong",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t1)"},children:"Boot Direto no Desktop"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"var(--sk-ds-t3)",margin:0,lineHeight:1.5},children:"Sem telas lentas de configuração ou perguntas intermináveis da Microsoft."})]}),e.jsxs("div",{style:{padding:"14px 16px",borderRadius:"12px",background:"color-mix(in srgb, var(--sk-palette-neutral-000000) 2%, transparent)",border:"1px solid var(--sk-ds-line)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[e.jsx(a,{className:"fas fa-memory text-info"}),e.jsx("strong",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t1)"},children:"Preparação para reduzir tarefas em segundo plano"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"var(--sk-ds-t3)",margin:0,lineHeight:1.5},children:"A ocupação de memória varia conforme a edição, os programas e o uso."})]}),e.jsxs("div",{style:{padding:"14px 16px",borderRadius:"12px",background:"color-mix(in srgb, var(--sk-palette-neutral-000000) 2%, transparent)",border:"1px solid var(--sk-ds-line)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"4px"},children:[e.jsx(a,{className:"fas fa-check-circle text-primary"}),e.jsx("strong",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t1)"},children:"Compatibilidade Preservada"})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"var(--sk-ds-t3)",margin:0,lineHeight:1.5},children:"Impressoras, redes, bancos e periféricos funcionando com estabilidade diária."})]})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"14px",marginTop:"16px"},children:T.slice(0,3).map(s=>e.jsxs("div",{style:{padding:"18px 20px",borderRadius:"16px",border:"1px solid var(--sk-ds-line)",background:"var(--sk-ds-surface)",display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{style:{fontSize:"0.625rem",fontWeight:800,textTransform:"uppercase",color:"var(--pr-cold)",letterSpacing:"0.08em"},children:s.badge}),e.jsx("span",{style:{color:"var(--sk-ds-t3)",fontSize:"0.75rem"},children:e.jsx(a,{className:`fas ${s.icon}`})})]}),e.jsx("h4",{style:{fontSize:"0.8125rem",fontWeight:800,color:"var(--sk-ds-t1)",margin:0},children:s.title}),e.jsx("p",{style:{fontSize:"0.72rem",color:"var(--sk-ds-t2)",lineHeight:1.55,margin:0},children:s.desc})]},s.id))}),e.jsxs("div",{className:`pr-entendamais-hub ${l?"pr-entendamais-hub--open":""}`,children:[e.jsxs("button",{id:"btn-entenda-mais-otimizacoes",type:"button",onClick:()=>t(s=>!s),className:"pr-entendamais-trigger no-tap-highlight","aria-expanded":l,"aria-controls":"conteudo-entenda-mais",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",minWidth:0},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"14px",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--pr-cold-soft)",color:"var(--pr-cold)",border:"1px solid var(--pr-cold-line)",flexShrink:0},children:e.jsx(a,{className:"fas fa-list-check",style:{fontSize:"1.125rem"}})}),e.jsxs("div",{style:{minWidth:0},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"2px"},children:[e.jsx("span",{style:{fontSize:"0.625rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--pr-cold)"},children:"Guia Transparente de Engenharia"}),e.jsxs("span",{style:{fontSize:"0.625rem",fontWeight:700,padding:"2px 8px",borderRadius:"999px",background:"var(--pr-cold-soft)",color:"var(--pr-cold)"},children:[v.length,"Áreas"]})]}),e.jsx("h3",{style:{fontSize:"clamp(0.9375rem, 1.8vw, 1.125rem)",fontWeight:800,color:"var(--sk-ds-t1)",margin:0,lineHeight:1.3},children:"ENTENDA MAIS sobre as otimizações"}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t3)",margin:"2px 0 0",lineHeight:1.4},children:l?"Toque para recolher o guia detalhado":"Toque para abrir a explicação completa de cada ajuste no processador, RAM, SSD, rede e jogos"})]})]}),e.jsx("div",{className:"pr-entendamais-chevron","aria-hidden":"true",children:e.jsx(a,{className:"fas fa-chevron-down text-sm"})})]}),l&&e.jsxs("div",{id:"conteudo-entenda-mais",className:"pr-entendamais-body",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",padding:"16px 0",borderBottom:"1px solid var(--sk-ds-line)"},children:[e.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t2)"},children:["Mostrando",e.jsx("strong",{children:n.length})," ","de"," ",v.length,"setores otimizados"]}),e.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"280px"},children:[e.jsx("input",{type:"text",value:c,onChange:s=>d(s.target.value),placeholder:"Filtrar ajuste (ex: ping, cpu, ssd, ram)...",style:{width:"100%",padding:"7px 12px 7px 32px",fontSize:"0.75rem",borderRadius:"10px",background:"var(--sk-ds-page)",border:"1px solid var(--sk-ds-line)",color:"var(--sk-ds-t1)",outline:"none"}}),e.jsx("span",{style:{position:"absolute",left:"10px",top:"8px",color:"var(--sk-ds-t4)",fontSize:"0.7rem"},children:e.jsx(a,{className:"fas fa-magnifying-glass"})})]})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:n.map(s=>e.jsxs("article",{className:"pr-opt-chapter",children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[e.jsx("span",{style:{width:"36px",height:"36px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",background:"var(--pr-cold-soft)",color:"var(--pr-cold)",border:"1px solid var(--pr-cold-line)",flexShrink:0,marginTop:"2px"},children:e.jsx(a,{className:`fas ${s.icon}`,style:{fontSize:"0.875rem"}})}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"2px"},children:e.jsxs("span",{style:{fontSize:"0.625rem",fontFamily:"monospace",fontWeight:800,color:"var(--sk-ds-t4)",textTransform:"uppercase"},children:["Capítulo"," ",s.sectorNumber," · ",s.tag]})}),e.jsx("h4",{style:{fontSize:"0.875rem",fontWeight:800,color:"var(--sk-ds-t1)",margin:"0 0 4px",lineHeight:1.3},children:s.title}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t2)",margin:0,lineHeight:1.55},children:s.summary})]})]}),e.jsx("div",{className:"pr-opt-grid",children:s.items.map((o,u)=>e.jsxs("div",{className:"pr-opt-item",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[e.jsxs("strong",{style:{fontSize:"0.78rem",color:"var(--sk-ds-t1)",display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(a,{className:"fas fa-check text-primary",style:{fontSize:"0.625rem"}}),e.jsx("span",{children:o.name})]}),e.jsx("span",{style:{fontSize:"0.625rem",fontWeight:700,padding:"1px 6px",borderRadius:"6px",background:"color-mix(in srgb, var(--sk-palette-teal-10b981) 10%, transparent)",color:b("--sk-palette-teal-10b981"),border:"1px solid color-mix(in srgb, var(--sk-palette-teal-10b981) 20%, transparent)",whiteSpace:"nowrap"},children:o.badge})]}),e.jsx("p",{style:{fontSize:"0.72rem",color:"var(--sk-ds-t2)",lineHeight:1.5,margin:0},children:o.simpleExplanation}),e.jsxs("div",{className:"pr-opt-benefit-pill",children:[e.jsx(a,{className:"fas fa-circle-info",style:{flexShrink:0,marginTop:"2px",fontSize:"0.6875rem"}}),e.jsxs("span",{children:[e.jsx("strong",{children:"Benefício na prática:"})," ",o.benefit]})]})]},u))})]},s.id))}),e.jsx("div",{style:{paddingTop:"20px",display:"flex",justifyContent:"center"},children:e.jsxs("button",{type:"button",onClick:()=>t(!1),style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 20px",borderRadius:"12px",fontSize:"0.75rem",fontWeight:700,background:"var(--pr-cold-soft)",color:"var(--pr-cold)",border:"1px solid var(--pr-cold-line)",cursor:"pointer"},children:[e.jsx(a,{className:"fas fa-chevron-up text-xs"}),e.jsx("span",{children:"Recolher Guia de Otimizações"})]})})]})]}),e.jsxs("div",{style:{marginTop:"28px",padding:"16px 20px",borderRadius:"16px",border:"1px solid var(--sk-ds-line)",background:"var(--sk-ds-surface)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("span",{style:{width:"32px",height:"32px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",background:"color-mix(in srgb, var(--sk-palette-teal-10b981) 10%, transparent)",color:b("--sk-palette-teal-10b981"),flexShrink:0},children:e.jsx(a,{className:"fas fa-shield-alt text-sm"})}),e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--sk-ds-t2)",margin:0,lineHeight:1.5},children:[e.jsx("strong",{children:"Filosofia Chris Skull:"}),"Quase dez anos de dedicação a um único objetivo — entregar um sistema que funciona de verdade no seu dia a dia. Cada edição chega preparada, com cuidado e identidade própria. Suporte disponível por e-mail para quem precisa."]})]}),e.jsx("span",{style:{fontSize:"0.6875rem",color:"var(--sk-ds-t3)",textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"monospace"},children:"Suporte por e-mail"})]})]})});w.displayName="EngineeringProcessSection";const q=m.memo(({onEnterStore:p,onOpenDiagnostico:l,initialTopic:t})=>{const[c,d]=m.useState({"entrega-instantanea":!0});m.useEffect(()=>{if(!t||!["instalacao-pendrive","entrega-instantanea","clube-vip-prazos"].includes(t))return;d(x=>({...x,[t]:!0}));const i=requestAnimationFrame(()=>{const x=document.getElementById("guia-"+t);x?.scrollIntoView?.({block:"start",behavior:"smooth"}),x?.querySelector("button")?.focus({preventScroll:!0})});return()=>cancelAnimationFrame(i)},[t]);const n=i=>{d(x=>({...x,[i]:!x[i]}))},s=()=>{d({"entrega-instantanea":!0,"instalacao-pendrive":!0,"seguranca-antivirus":!0,"seguranca-falsos-positivos":!0,"atualizacao-nuvem":!0,"clube-vip-prazos":!0,"o-que-esta-incluido":!0})},o=()=>{d({})},u=[{id:"entrega-instantanea",icon:"fa-bolt",badge:"Entrega Automática",tone:"emerald",title:"Ciclo de Compra e Liberação Imediata via PIX",subtitle:"Como o seu pedido é aprovado e disponibilizado em segundos na sua conta",content:e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2",children:[e.jsxs("p",{children:["A jornada de aquisição na plataforma","Skull Legion"," ","é"," ",e.jsx("strong",{children:"100% automatizada e ocorre em três etapas lineares"}),", sem intervenção manual ou demora de compensação:"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 my-2",children:[e.jsxs("div",{className:"pr-guide-stage",children:[e.jsx("span",{className:"font-mono text-[10px] font-extrabold pr-text-accent block mb-1.5 uppercase tracking-wider",children:"ETAPA 01 · ESCOLHA"}),e.jsxs("p",{className:"text-xs text-slate-700 dark:text-slate-200 leading-snug font-medium mb-1",children:["Na coleção","Skull Legion",", compare Alpha, Bravo, Charlie e Delta por perfil de uso. Escolha a base compatível antes de adicionar ao carrinho; pacotes incluem somente os itens descritos na oferta."]}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-snug",children:"Cada edição foi desenhada para uma demanda real: trabalho pesado, jogos de alta taxa de quadros ou computadores clássicos."})]}),e.jsxs("div",{className:"pr-guide-stage",children:[e.jsx("span",{className:"font-mono text-[10px] font-extrabold pr-text-accent block mb-1.5 uppercase tracking-wider",children:"ETAPA 02 · PAGAMENTO PIX"}),e.jsx("p",{className:"text-xs text-slate-700 dark:text-slate-200 leading-snug font-medium mb-1",children:"Gere o QR Code PIX dinâmico. A confirmação bancária é instantânea e o sistema valida em poucos segundos."}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-snug",children:"Processamento 100% seguro e protegido com criptografia de ponta a ponta."})]}),e.jsxs("div",{className:"pr-guide-stage",children:[e.jsx("span",{className:"font-mono text-[10px] font-extrabold pr-text-cold block mb-1.5 uppercase tracking-wider",children:"ETAPA 03 · DOWNLOAD DIRETO"}),e.jsxs("p",{className:"text-xs text-slate-700 dark:text-slate-200 leading-snug font-medium mb-1",children:["O sistema aprova a transação e libera o link de alta velocidade na aba",e.jsx("strong",{children:"Downloads"}),"da sua conta."]}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-snug",children:"Sem e-mails que caem no spam: seu arquivo já fica disponível imediatamente no seu painel."})]})]}),e.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200/70 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02] flex items-start gap-3",children:[e.jsx(a,{className:"fas fa-server pr-text-cold text-sm shrink-0 mt-0.5"}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:["Após a confirmação, o link é gerado em",e.jsx("strong",{children:"servidores dedicados de alta velocidade"}),"(Google Drive / espelhos de alta performance) para baixar na capacidade máxima da sua internet, sem limites artificiais de velocidade."]})]}),e.jsxs("div",{className:"pr-trust-highlight",children:[e.jsx(a,{className:"fas fa-shield-heart text-sm shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Respeito pelo seu tempo:"}),"Em menos de 2 minutos você sai da escolha e já está com o download rodando com integridade total."]})]})]})},{id:"instalacao-pendrive",icon:"fa-tools",badge:"Guia Técnico",tone:"sky",title:"Como Instalar no Pendrive em Menos de 5 Minutos",subtitle:"Passo a passo descomplicado para dar partida no computador sem erros",content:e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2",children:[e.jsxs("p",{children:["Nossos sistemas já são entregues",e.jsx("strong",{children:"totalmente automatizados de fábrica"}),". Você não precisa fazer nenhuma configuração complicada:"]}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"pr-guide-step-row",children:[e.jsx("span",{className:"pr-guide-step-num",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-slate-900 dark:text-white text-xs block mb-0.5",children:"O Pendrive Correto"}),e.jsx("span",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Utilize um pendrive de pelo menos 8 GB (de preferência USB 3.0 para gravação rápida). Qualquer marca de mercado funciona perfeitamente."})]})]}),e.jsxs("div",{className:"pr-guide-step-row",children:[e.jsx("span",{className:"pr-guide-step-num",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-slate-900 dark:text-white text-xs block mb-0.5",children:"Gravação com Rufus ou Ventoy"}),e.jsx("span",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Abra o Rufus (ou copie a ISO para o Ventoy). Escolha GPT (para computadores UEFI modernos) ou MBR (para máquinas BIOS legadas)."})]})]}),e.jsxs("div",{className:"pr-guide-step-row",children:[e.jsx("span",{className:"pr-guide-step-num",children:"3"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-slate-900 dark:text-white text-xs block mb-0.5",children:"Não Marque Opções Extras no Rufus"}),e.jsxs("span",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["O Rufus oferece caixas para criar contas de usuário ou burlar TPM.",e.jsx("em",{children:"Não marque nenhuma"}),": os sistemas"," ","Skull Legion","já vêm otimizados e prontos. A engenharia da ISO já cuidou de remover todas as travas na raiz."]})]})]}),e.jsxs("div",{className:"pr-guide-step-row",children:[e.jsx("span",{className:"pr-guide-step-num",children:"4"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-slate-900 dark:text-white text-xs block mb-0.5",children:"Dando a Partida (Boot)"}),e.jsx("span",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Reinicie o PC pressionando a tecla de boot (normalmente F12, F8, F11 ou Del) e selecione o pendrive. A instalação leva apenas 3 a 5 minutos e entra direto no Desktop, sem perguntas invasivas da Microsoft e pronto para uso."})]})]})]}),e.jsxs("div",{className:"pr-trust-highlight",children:[e.jsx(a,{className:"fas fa-circle-check text-sm shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Experiência Descomplicada:"}),"Você não precisa ser especialista em informática. O instalador faz todo o trabalho pesado de forma silenciosa e limpa."]})]})]})},{id:"seguranca-antivirus",icon:"fa-shield-halved",badge:"Segurança & Integridade",tone:"purple",title:"Autenticidade dos Arquivos e Falsos Positivos",subtitle:"Por que ferramentas de debloat são marcadas e como garantimos 100% de segurança",content:e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2",children:[e.jsxs("p",{children:["Todo o ecossistema","Skull Legion"," ","é desenvolvido com"," ",e.jsx("strong",{children:"integridade artesanal"}),". Nenhum arquivo contém malwares, mineradores ou rastreadores:"]}),e.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl pr-box-violet space-y-2.5",children:[e.jsxs("h4",{className:"font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2",children:[e.jsx(a,{className:"fas fa-shield-check pr-text-violet"}),"O que é um “Falso Positivo” em Ferramentas de Otimização?"]}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["Softwares como o nosso gerenciador de performance e scripts de limpeza profunda alteram chaves restritas do registro do Windows para desativar telemetria, desligar o Core Parking e desarmar serviços espiões da Microsoft. Antivírus genéricos frequentemente classificam modificadores de registro como",e.jsx("em",{children:"“comportamento suspeito”"}),"(falso positivo heurístico) justamente porque o sistema bloqueia os próprios serviços da Microsoft."]}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Em termos práticos: quando desativamos a coleta de dados que consome sua CPU e sua privacidade, alguns antivírus estranham que o usuário esteja tomando o controle da máquina. Nossos arquivos são 100% transparentes, sem backdoors e sem códigos ocultos."})]}),e.jsxs("div",{className:"p-3.5 rounded-xl border border-slate-200/70 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02] flex items-start gap-3",children:[e.jsx(a,{className:"fas fa-microscope pr-text-violet text-sm shrink-0 mt-0.5"}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:"Cada build é testada em ambiente de bancada físico pelo próprio desenvolvedor antes de ser disponibilizada aos clientes e membros da comunidade."})]}),e.jsxs("div",{className:"pr-trust-highlight",style:{background:"color-mix(in srgb, var(--sk-palette-indigo-8b5cf6) 8%, transparent)",borderColor:"color-mix(in srgb, var(--sk-palette-indigo-8b5cf6) 20%, transparent)",color:b("--sk-palette-indigo-a78bfa")},children:[e.jsx(a,{className:"fas fa-lock text-sm shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Segurança para o Trabalho:"}),"Compatibilidade garantida com softwares bancários, certificados digitais corporativos, ferramentas CAD e anticheats modernos (Vanguard, EAC, BattlEye)."]})]})]})},{id:"atualizacao-nuvem",icon:"fa-rotate-right",badge:"Tecnologia da Loja",tone:"sky",title:"Atualizações em Tempo Real (Sem Precisar Limpar Cache)",subtitle:"A plataforma atualiza silenciosamente sem você precisar de Ctrl+F5",content:e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2",children:[e.jsxs("p",{children:["Diferente de sites convencionais onde imagens e botões ficam desatualizados no cache do navegador, a plataforma","Skull Legion"," ","conta com"," ",e.jsx("strong",{children:"detecção ativa de versão em nuvem"}),":"]}),e.jsxs("div",{className:"p-4 rounded-xl border border-slate-200/70 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02] flex items-start gap-3.5",children:[e.jsx("div",{className:"pr-guide-icon--cyan w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5",children:e.jsx(a,{className:"fas fa-cloud-arrow-down text-sm"})}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-xs sm:text-sm text-slate-900 dark:text-white block mb-1",children:"Hard Refresh Automático"}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:["Sempre que uma nova compilação é publicada, o sistema detecta a alteração em tempo real (em poucos segundos com a aba aberta) e atualiza automaticamente os dados com a tela",e.jsx("em",{children:"“Atualizando Plataforma”"}),". Você nunca precisará limpar cookies, histórico ou forçar recarga manual."]})]})]}),e.jsxs("div",{className:"pr-trust-highlight",children:[e.jsx(a,{className:"fas fa-sparkles text-sm shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Engenharia Silenciosa:"}),"Você sempre tem acesso às versões, links e preços corretos em tempo real, sem surpresas nem telas defasadas."]})]})]})},{id:"clube-vip-prazos",icon:"fa-crown",badge:"Prazos & Clube VIP",tone:"amber",title:"Prazos de Download, Acesso Permanente e Clube VIP",subtitle:"Entenda a regra de disponibilidade de links e a vantagem do acesso vitalício",content:e.jsx("div",{className:"space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2",children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[e.jsxs("div",{className:"p-4 rounded-xl border border-slate-200/70 dark:border-white/5 bg-slate-50/80 dark:bg-white/[0.02] space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("strong",{className:"text-xs sm:text-sm text-slate-900 dark:text-white font-bold",children:"Membros Padrão"}),e.jsx("span",{className:"font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-extrabold tracking-wider",children:"24 Horas"})]}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:["O link direto permanece ativo por",e.jsx("strong",{children:"24 horas corridas"}),"após a compra. Recomendamos concluir o download e salvar a ISO em local seguro (pendrive ou HD externo)."]}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Teve imprevistos de internet? Envie sua dúvida sobre acesso para mendeslidera1@gmail.com."})]}),e.jsxs("div",{className:"p-4 rounded-xl pr-box-amber space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("strong",{className:"text-xs sm:text-sm pr-text-warn font-bold flex items-center gap-1.5",children:[e.jsx(a,{className:"fas fa-crown text-xs"}),"Membros Clube VIP"]}),e.jsx("span",{className:"pr-tag-warn",children:"Ilimitado"})]}),e.jsxs("p",{className:"text-xs text-slate-700 dark:text-slate-200 leading-relaxed m-0 font-medium",children:["Membros VIP possuem",e.jsx("strong",{children:"acesso permanente e sem prazo de expiração"}),"na aba Downloads, além de acesso liberado a atualizações e novos lançamentos de ISOs."]}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Um único passe vitalício com o catálogo completo sempre pronto para baixar quando você precisar."})]})]})})},{id:"o-que-esta-incluido",icon:"fa-box-open",badge:"O que vem na entrega",tone:"emerald",title:"Além do Sistema: Manuais e Suporte Direto",subtitle:"A entrega vai além do arquivo — orientação e atendimento incluídos",content:e.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2",children:[e.jsxs("p",{children:["A","Skull Legion","entrega mais do que um sistema otimizado. Junto com cada edição, você conta com:"]}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"pr-guide-step-row",children:[e.jsx("span",{className:"pr-guide-step-num",children:"1"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-slate-900 dark:text-white text-xs block mb-0.5",children:"Manuais de orientação"}),e.jsx("span",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Materiais de apoio preparados pelo Chris Skull com orientações sobre instalação, uso das ferramentas incluídas e aproveitamento máximo do sistema."})]})]}),e.jsxs("div",{className:"pr-guide-step-row",children:[e.jsx("span",{className:"pr-guide-step-num",children:"2"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-slate-900 dark:text-white text-xs block mb-0.5",children:"Suporte por e-mail"}),e.jsxs("span",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["Atendimento disponível pelos canais oficiais da","Skull Legion","para dúvidas sobre instalação e uso do sistema."]})]})]})]}),e.jsxs("div",{className:"pr-trust-highlight",children:[e.jsx(a,{className:"fas fa-shield-heart text-sm shrink-0"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Compromisso com quem compra:"}),"você não fica sozinho após a instalação. Quase dez anos de comunidade e suporte construídos ao redor dos sistemas Chris Skull."]})]})]})}],g=i=>{switch(i){case"emerald":return{iconBox:"pr-guide-icon--emerald text-[var(--sk-accent)] bg-[var(--sk-accent)]/10 border-[var(--sk-accent)]/25 shadow-[var(--sk-accent)]/10",badge:"text-[var(--sk-accent)]"};case"sky":return{iconBox:"pr-guide-icon--sky text-cyan-500 bg-cyan-500/10 border-cyan-500/25 shadow-cyan-500/10",badge:"text-cyan-600 dark:text-cyan-400"};case"purple":return{iconBox:"pr-guide-icon--purple text-violet-500 bg-violet-500/10 border-violet-500/25 shadow-violet-500/10",badge:"text-violet-600 dark:text-violet-400"};case"amber":return{iconBox:"pr-guide-icon--amber text-amber-500 bg-amber-500/10 border-amber-500/25 shadow-amber-500/10",badge:"text-amber-600 dark:text-amber-400"}}};return e.jsxs("section",{className:"pr-section",id:"apresentacao-guia-plataforma","aria-labelledby":"apresentacao-guia-plataforma-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsxs("span",{className:"pr-eyebrow",children:[e.jsx(a,{className:"fas fa-store"}),"Como Funciona a Plataforma"]}),e.jsxs("h2",{id:"apresentacao-guia-plataforma-titulo",className:"pr-title",children:["Da compra à instalação:"," ",e.jsx("span",{className:"pr-title-cold",children:"transparência em cada etapa."})]}),e.jsx("p",{className:"pr-lead",children:"Reunimos aqui tudo o que você precisa saber sobre a entrega dos arquivos, funcionamento do PIX, segurança contra falsos positivos, gravação no pendrive e suporte direto com quem desenvolve."})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6",children:[e.jsxs("div",{className:"pr-pilar-card",children:[e.jsx(a,{className:"fas fa-bolt pr-text-accent text-sm shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("strong",{className:"text-[11px] font-bold text-slate-900 dark:text-white block leading-tight truncate",children:"Liberação Imediata"}),e.jsx("span",{className:"text-[10px] text-slate-500 dark:text-slate-400 block truncate",children:"Via PIX automatizado"})]})]}),e.jsxs("div",{className:"pr-pilar-card",children:[e.jsx(a,{className:"fas fa-clock pr-text-cold text-sm shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("strong",{className:"text-[11px] font-bold text-slate-900 dark:text-white block leading-tight truncate",children:"Instalação em 5 Min"}),e.jsx("span",{className:"text-[10px] text-slate-500 dark:text-slate-400 block truncate",children:"Do pendrive ao Desktop"})]})]}),e.jsxs("div",{className:"pr-pilar-card",children:[e.jsx(a,{className:"fas fa-shield-halved pr-text-violet text-sm shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("strong",{className:"text-[11px] font-bold text-slate-900 dark:text-white block leading-tight truncate",children:"100% Auditado"}),e.jsx("span",{className:"text-[10px] text-slate-500 dark:text-slate-400 block truncate",children:"Sem rastreadores ou lixo"})]})]}),e.jsxs("div",{className:"pr-pilar-card",children:[e.jsx(a,{className:"fas fa-comments pr-text-warn text-sm shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("strong",{className:"text-[11px] font-bold text-slate-900 dark:text-white block leading-tight truncate",children:"Suporte Humano"}),e.jsx("span",{className:"text-[10px] text-slate-500 dark:text-slate-400 block truncate",children:"Por e-mail"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3 mb-5",children:[e.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5",children:[e.jsx(a,{className:"fas fa-circle-info text-[11px] pr-text-cold"}),e.jsx("span",{children:"Clique nos tópicos para ver orientações completas"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:s,className:"pr-btn-expand no-tap-highlight",children:"Expandir Todos"}),e.jsx("button",{type:"button",onClick:o,className:"pr-btn-expand no-tap-highlight",children:"Recolher Todos"})]})]}),e.jsx("div",{className:"space-y-3",children:u.map(i=>{const x=!!(c[i.id]||i.id==="seguranca-antivirus"&&c["seguranca-falsos-positivos"]),r=g(i.tone);return e.jsxs("div",{id:"guia-"+i.id,className:`pr-guide-item ${x?"pr-guide-item--open":""}`,children:[e.jsxs("button",{type:"button",onClick:()=>n(i.id),className:"pr-guide-btn no-tap-highlight cursor-pointer","aria-expanded":x,children:[e.jsxs("div",{className:"flex items-center gap-3.5 min-w-0",children:[e.jsx("span",{className:`pr-guide-icon border shrink-0 ${r.iconBox}`,children:e.jsx(a,{className:`fas ${i.icon} text-base`})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:`pr-guide-badge ${r.badge}`,children:i.badge}),e.jsx("h3",{className:"pr-guide-title truncate",children:i.title}),e.jsx("p",{className:"pr-guide-sub line-clamp-1 hidden sm:block",children:i.subtitle})]})]}),e.jsxs("div",{className:"pr-guide-action-pill",children:[e.jsx("span",{className:"text-xs font-bold pr-text-cold hidden md:inline",children:x?"Recolher":"Ver detalhes"}),e.jsx("span",{className:"pr-guide-chevron-box",children:e.jsx(a,{className:"fas fa-chevron-down text-xs"})})]})]}),x&&e.jsx("div",{className:"pr-guide-content-area",children:i.content})]},i.id)})}),e.jsxs("div",{className:"mt-8 p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-gradient-to-br from-slate-50/90 via-white/40 to-transparent dark:from-white/[0.03] dark:via-white/[0.01] dark:to-transparent flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm",children:[e.jsxs("div",{className:"space-y-1.5 max-w-xl",children:[e.jsxs("span",{className:"font-mono text-[10px] font-bold text-primary uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{className:"pr-dot-tg"}),"Atendimento por e-mail"]}),e.jsx("h3",{className:"text-sm sm:text-base font-bold text-slate-900 dark:text-white",children:"Precisa tirar alguma dúvida antes de comprar?"}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:"Envie sua dúvida ou problema aqui: mendeslidera1@gmail.com"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2.5 shrink-0",children:[e.jsxs("a",{href:P.contact.href,className:"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-info hover:opacity-90 shadow-sm shadow-info/30 transition-all cursor-pointer",children:[e.jsx(a,{className:"fas fa-telegram-plane text-sm"}),e.jsx("span",{children:"Enviar e-mail"})]}),e.jsxs("button",{type:"button",onClick:()=>{l?l():document.getElementById("simulador-produtividade-section")?.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all cursor-pointer",children:[e.jsx(a,{className:"fas fa-calculator text-xs"}),e.jsx("span",{children:"Diagnóstico Rápido"})]}),p&&e.jsxs("button",{type:"button",onClick:p,className:"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all cursor-pointer",children:[e.jsx(a,{className:"fas fa-store text-xs"}),e.jsx("span",{children:"Explorar a Loja"})]})]})]})]})});q.displayName="PlatformInstitutionalGuideSection";const L=[{id:"heavy",icon:"fa-cubes-stacked",title:"Trabalho Pesado & 3D",sub:"CAD, Revit, Edição de Vídeo e Render"},{id:"office",icon:"fa-briefcase",title:"Escritório & Jurídico",sub:"Planilhas pesadas, SPED, Dezenas de abas"},{id:"gaming",icon:"fa-gamepad",title:"Jogos Competitivos",sub:"Ambiente enxuto e programas à sua escolha"},{id:"daily",icon:"fa-laptop",title:"Uso Diário & Clássicos",sub:"Navegação, documentos e tarefas do cotidiano"}],D=[{id:"ram-4",label:"4 GB ou menos",sub:"Laptops básicos ou máquinas clássicas"},{id:"ram-8",label:"8 GB",sub:"Padrão da maioria dos computadores"},{id:"ram-16",label:"16 GB",sub:"Equilíbrio para trabalho e jogos"},{id:"ram-32",label:"32 GB ou mais",sub:"Workstations e setups de ponta"}],S=m.memo(({onOpenLine:p,onEnterStore:l})=>{const[t,c]=m.useState("heavy"),[d,n]=m.useState("ram-16"),s=m.useMemo(()=>{const o=t==="gaming"?"bravo":t==="heavy"?"charlie":"alpha",g={alpha:"Alpha",bravo:"Bravo",charlie:"Charlie"}[o];return{recommendedLine:o,lineName:g,recommendedModel:o==="bravo"?"Bravo ÍRIS":o==="charlie"?"Charlie ÍRIS":"Alpha ÍRIS",wasteText:d==="ram-4"?"Com 4 GB, memória pode limitar os aplicativos. Uma edição enxuta não substitui os requisitos dos programas.":d==="ram-8"?"Com 8 GB, avalie quantos programas e abas ficam abertos ao mesmo tempo.":"Mais memória amplia as possibilidades de uso, mas CPU, armazenamento, GPU e drivers também influenciam o resultado.",gainText:"A preparação do sistema pode reduzir tarefas em segundo plano. Consumo de RAM, FPS e tempo de instalação variam conforme a máquina e o uso; este guia não mede seu computador.",practicalBenefit:t==="gaming"?"Ambiente enxuto para jogar e escolher seus programas. Confira os requisitos de cada jogo e dos drivers.":t==="heavy"?"Base Pro for Workstations para uma rotina exigente. Para arquitetura, compare também a proposta especializada Delta.":"Uso cotidiano preparado para começar a usar ou entregar o computador ao cliente."}},[t,d]);return e.jsxs("section",{className:"pr-section",id:"simulador-produtividade-section","aria-labelledby":"apresentacao-simulador-titulo",children:[e.jsx("span",{id:"apresentacao-simulador",className:"sr-only","aria-hidden":"true"}),e.jsxs("header",{className:"pr-section-head",children:[e.jsxs("span",{className:"pr-eyebrow",children:[e.jsx(a,{className:"fas fa-calculator"}),"Guia de escolha"]}),e.jsxs("h2",{id:"apresentacao-simulador-titulo",className:"pr-title",children:["Compare por perfil:",e.jsx("span",{className:"pr-title-cold",children:"qual proposta combina com sua rotina?"})]}),e.jsx("p",{className:"pr-lead",children:"Selecione sua rotina e memória para orientar a escolha. Confira a base Windows e os requisitos antes da compra."})]}),e.jsxs("div",{className:"pr-simulator-hub",children:[e.jsxs("div",{className:"mb-6",children:[e.jsxs("span",{className:"pr-sim-step-title",children:[e.jsx("span",{className:"pr-sim-step-num",children:"1"}),"Qual é a principal atividade do seu computador?"]}),e.jsx("div",{className:"pr-sim-options",children:L.map(o=>{const u=t===o.id;return e.jsxs("button",{type:"button",onClick:()=>c(o.id),className:`pr-sim-btn no-tap-highlight ${u?"pr-sim-btn--active":""}`,"aria-pressed":u,children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx(a,{className:`fas ${o.icon} text-xs ${u?"pr-text-accent":"text-slate-400"}`}),e.jsx("strong",{className:"text-xs font-bold block",children:o.title})]}),e.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-tight block",children:o.sub})]},o.id)})})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("span",{className:"pr-sim-step-title",children:[e.jsx("span",{className:"pr-sim-step-num",children:"2"}),"Quanto de memória RAM o seu equipamento possui?"]}),e.jsx("div",{className:"pr-sim-options",children:D.map(o=>{const u=d===o.id;return e.jsxs("button",{type:"button",onClick:()=>n(o.id),className:`pr-sim-btn no-tap-highlight ${u?"pr-sim-btn--active":""}`,"aria-pressed":u,children:[e.jsx("strong",{className:"text-xs font-bold block mb-0.5",children:o.label}),e.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-tight block",children:o.sub})]},o.id)})})]}),e.jsxs("div",{className:"pr-sim-result-card space-y-3.5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 pr-sim-result-head",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-mono text-[10px] font-extrabold uppercase tracking-widest pr-text-accent block mb-0.5",children:"Orientação por perfil"}),e.jsxs("h3",{className:"text-sm sm:text-base font-bold text-slate-900 dark:text-white m-0",children:["Versão sugerida:",e.jsx("span",{className:"pr-text-accent",children:s.lineName})]})]}),e.jsxs("span",{className:"pr-badge-accent self-start sm:self-auto",children:[e.jsx(a,{className:"fas fa-check-circle text-xs"}),e.jsx("span",{children:"Confira os requisitos"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3 rounded-xl pr-box-danger space-y-1",children:[e.jsxs("strong",{className:"pr-text-danger font-bold block flex items-center gap-1.5",children:[e.jsx(a,{className:"fas fa-circle-xmark text-xs"}),"Ponto de atenção:"]}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:s.wasteText})]}),e.jsxs("div",{className:"p-3 rounded-xl pr-box-accent space-y-1",children:[e.jsxs("strong",{className:"pr-text-accent font-bold block flex items-center gap-1.5",children:[e.jsx(a,{className:"fas fa-circle-check text-xs"}),"Com a Skull Legion:"]}),e.jsx("p",{className:"text-slate-700 dark:text-slate-200 leading-relaxed m-0 font-medium",children:s.gainText})]})]}),e.jsxs("div",{className:"p-3.5 rounded-xl pr-box-cold flex items-start gap-3",children:[e.jsx(a,{className:"fas fa-wand-magic-sparkles pr-text-cold text-sm shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-xs text-slate-900 dark:text-white block mb-0.5",children:"Proposta para sua rotina:"}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:s.practicalBenefit})]})]}),e.jsxs("div",{className:"pt-3 border-t border-slate-200/50 dark:border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5",children:[e.jsx(a,{className:"fas fa-bolt text-[var(--sk-palette-orange-f59e0b)] text-xs"}),e.jsx("span",{children:"Liberação em ~30s após o PIX"})]})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-2.5",children:[e.jsx("button",{type:"button",onClick:l,className:"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all cursor-pointer",children:e.jsx("span",{children:"Ver Catálogo"})}),e.jsxs("button",{type:"button",onClick:()=>p(s.recommendedLine,s.recommendedModel),className:"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer",children:[e.jsxs("span",{children:["Explorar"," ",s.lineName]}),e.jsx(a,{className:"fas fa-arrow-right text-[10px]"})]})]})]})]})]})]})});S.displayName="ProductivitySimulatorSection";const z=m.memo(({amostraSrc:p,onZoom:l})=>{const[t,c]=m.useState("skull"),n={skull:{title:"Sistema Skull Legion (Alta Performance)",subtitle:"Engenharia cirúrgica sobre a base do Windows · Otimização artesanal",badge:"0% CPU · Captura apresentada",badgeTone:"text-[var(--sk-accent)] bg-[var(--sk-accent)]/10 border-[var(--sk-accent)]/30",cpu:"0%",cpuLabel:"na captura apresentada",ram:"Varia por edição",ramLabel:"consumo depende dos programas e do uso",processos:"45 processos",processosLabel:"apenas o estritamente essencial",boot:"Varia por máquina",bootLabel:"tempo depende do hardware",impacto:"A preparação busca reduzir tarefas em segundo plano. Aplicativos e jogos continuam sujeitos aos requisitos de hardware e drivers.",sensacao:"Compare os resultados no seu fluxo de trabalho; a captura não garante o mesmo desempenho em outra máquina."},convencional:{title:"Windows Convencional (Padrão de Fábrica)",subtitle:"Instalação crua com dezenas de serviços e telemetrias da Microsoft",badge:"36% CPU · Captura apresentada",badgeTone:"text-red-500 bg-red-500/10 border-red-500/30",cpu:"36%",cpuLabel:"em repouso (mesmo sem nada aberto)",ram:"Varia por edição",ramLabel:"consumo depende dos programas e do uso",processos:"130+ processos",processosLabel:"tarefas ocultas consumindo energia",boot:"Varia por máquina",bootLabel:"tempo depende do hardware",impacto:"A captura mostra a ocupação daquele ambiente no instante registrado. Ela não representa toda instalação convencional.",sensacao:"Hardware, drivers, atualizações e aplicativos abertos influenciam o comportamento observado."}}[t];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("figure",{className:"pr-showcase",children:[e.jsx("button",{type:"button",className:"pr-showcase__zoom no-tap-highlight cursor-pointer",onClick:l,"aria-label":"Ampliar a comparação do Gerenciador de Tarefas",children:e.jsx("img",{className:"pr-showcase__img",src:p,width:1122,height:1402,alt:"Gerenciador de Tarefas lado a lado: Windows convencional com 36% de CPU e 130 processos; sistema otimizado com 0% de CPU e 45 processos",loading:"eager",decoding:"async"})}),e.jsxs("figcaption",{className:"pr-showcase__caption",children:[e.jsx("span",{children:"Valores da captura apresentada; resultados variam conforme ambiente e uso."}),e.jsxs("span",{className:"pr-showcase__stat",children:[e.jsx("strong",{children:"36% → 0%"})," ","de CPU em repouso"]}),e.jsxs("span",{className:"pr-showcase__stat",children:[e.jsx("strong",{children:"130 → 45"})," ","processos"]}),e.jsxs("span",{className:"pr-showcase__stat",children:[e.jsx("strong",{children:"1912 → 866"})," ","threads"]})]})]}),e.jsxs("div",{className:"pr-proof-interactive",children:[e.jsxs("div",{className:"text-center mb-4",children:[e.jsx("span",{className:"font-mono text-[10px] font-extrabold uppercase tracking-widest pr-text-cold block mb-1",children:"Comparador Interativo de Experiência"}),e.jsx("h3",{className:"text-sm sm:text-base font-bold text-slate-900 dark:text-white",children:"O que esses números significam no seu trabalho e no seu dia a dia?"})]}),e.jsxs("div",{className:"pr-proof-toggle-bar",children:[e.jsxs("button",{type:"button",onClick:()=>c("skull"),className:`pr-proof-toggle-btn ${t==="skull"?"pr-proof-toggle-btn--active-skull":""}`,"aria-pressed":t==="skull",children:[e.jsx(a,{className:"fas fa-bolt text-xs"}),e.jsx("span",{children:"Skull Legion"})]}),e.jsxs("button",{type:"button",onClick:()=>c("convencional"),className:`pr-proof-toggle-btn ${t==="convencional"?"pr-proof-toggle-btn--active-conv":""}`,"aria-pressed":t==="convencional",children:[e.jsx(a,{className:"fas fa-desktop text-xs"}),e.jsx("span",{children:"Windows Padrão"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-white/5",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:n.title})}),e.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:n.subtitle})]}),e.jsxs("span",{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shrink-0 ${n.badgeTone}`,children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-current"}),n.badge]})]}),e.jsxs("div",{className:"pr-metric-grid",children:[e.jsxs("div",{className:"pr-metric-card",children:[e.jsx("span",{className:"text-[10px] font-bold font-mono text-slate-400 uppercase block mb-1",children:"CPU em Repouso"}),e.jsx("div",{className:"text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-0.5",children:n.cpu}),e.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-tight block",children:n.cpuLabel})]}),e.jsxs("div",{className:"pr-metric-card",children:[e.jsx("span",{className:"text-[10px] font-bold font-mono text-slate-400 uppercase block mb-1",children:"Memória RAM"}),e.jsx("div",{className:"text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-0.5",children:n.ram}),e.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-tight block",children:n.ramLabel})]}),e.jsxs("div",{className:"pr-metric-card",children:[e.jsx("span",{className:"text-[10px] font-bold font-mono text-slate-400 uppercase block mb-1",children:"Processos de Fundo"}),e.jsx("div",{className:"text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-0.5",children:n.processos}),e.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-tight block",children:n.processosLabel})]}),e.jsxs("div",{className:"pr-metric-card",children:[e.jsx("span",{className:"text-[10px] font-bold font-mono text-slate-400 uppercase block mb-1",children:"Tempo de Boot"}),e.jsx("div",{className:"text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-0.5",children:n.boot}),e.jsx("span",{className:"text-[11px] text-slate-500 dark:text-slate-400 leading-tight block",children:n.bootLabel})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-slate-200/70 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.02] space-y-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{className:`fas ${t==="skull"?"fa-circle-check pr-text-accent":"fa-triangle-exclamation pr-text-warn"} text-xs`}),e.jsx("strong",{className:"text-xs text-slate-900 dark:text-white font-bold",children:t==="skull"?"A experiência na prática:":"O problema diário:"})]}),e.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:n.impacto}),e.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 italic m-0 pt-0.5",children:n.sensacao})]})]})]})]})});z.displayName="ProofInteractiveSection";const k=[{icon:"fa-drafting-compass",title:"Arquitetura",desc:"Delta ÍRIS 2026: ambiente voltado à arquitetura sobre Windows 11 Pro for Workstations.",softwares:["Base Windows 11 Pro for Workstations","Ambiente de arquitetura preparado","Ferramentas WTX para manutenção","Manual do nicho e suporte prioritário"],alivio:"Concentre a preparação da estação em uma imagem. Confira no produto a lista dos programas, os requisitos e as condições de uso.",tempoGanho:"Edição do catálogo ÍRIS 2026 · vendida separadamente"},{icon:"fa-magic",title:"Outras profissões",desc:"A proposta Delta pode atender outros nichos. Apenas as edições publicadas no catálogo estão disponíveis para compra.",softwares:["Confira as edições publicadas na loja","Verifique os programas e requisitos da edição","Consulte a equipe sobre a sua rotina","Disponibilidade conforme o catálogo"],alivio:"Evite comprar uma edição de outra área apenas por ela ser Delta. A escolha depende dos programas e do trabalho que você realiza.",tempoGanho:"Consulte disponibilidade · sem promessa de lançamento",aberto:!0}],_=m.memo(({onEnterStore:p})=>{const[l,t]=m.useState(0),c=k,d=c[l]??c[0];return e.jsxs("div",{className:"pr-ultra",children:[e.jsxs("div",{className:"pr-ultra__copy",children:[e.jsx("span",{className:"pr-eyebrow",children:"Edição especial"}),e.jsx("h2",{id:"apresentacao-ultra-titulo",className:"pr-title",children:"Delta: a versão feita para o seu nicho"}),e.jsx("p",{className:"pr-lead",children:"A Delta especializa a proposta da coleção para uma profissão. Na Linha ÍRIS 2026, o ambiente de arquitetura é entregue com ferramentas para a rotina de projeto. Em vez de instalar e configurar tudo do zero, o ambiente já chega montado, testado e calibrado para o que você faz."}),e.jsx("div",{className:"pr-ultra-tabs mt-4",children:k.map((n,s)=>{const o=l===s;return e.jsxs("button",{type:"button",onClick:()=>t(s),className:`pr-ultra-tab-btn no-tap-highlight ${o?"pr-ultra-tab-btn--active":""}`,"aria-pressed":o,children:[e.jsx(a,{className:`fas ${n.icon} text-xs`}),e.jsx("span",{children:n.title})]},n.title)})}),e.jsxs("div",{className:"pr-ultra-spotlight mt-4 space-y-3",children:[e.jsx("div",{className:"flex items-center justify-between gap-3",children:e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"pr-guide-icon--cyan w-8 h-8 rounded-lg flex items-center justify-center shrink-0",children:e.jsx(a,{className:`fas ${d.icon} text-sm`})}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-bold text-xs sm:text-sm text-slate-900 dark:text-white m-0",children:["Delta",d.title]}),e.jsx("span",{className:"text-[11px] pr-text-cold font-medium",children:d.tempoGanho})]})]})}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed m-0",children:[e.jsx("strong",{children:"O alívio na sua rotina:"})," ",d.alivio]}),e.jsxs("div",{className:"pt-2 border-t border-slate-200/60 dark:border-white/5",children:[e.jsx("span",{className:"text-[10px] font-bold font-mono text-slate-400 uppercase tracking-wider block mb-1.5",children:d.aberto?"Antes de escolher:":"O que a edição oferece:"}),e.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-none p-0 m-0",children:d.softwares.map(n=>e.jsxs("li",{className:"text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2",children:[e.jsx(a,{className:"fas fa-check pr-text-accent text-[10px] shrink-0"}),e.jsx("span",{children:n})]},n))})]})]}),e.jsxs("div",{className:"pr-ultra__base mt-4",children:[e.jsx(a,{className:"fas fa-layer-group"}),e.jsx("span",{children:"Toda Delta nasce da mesma base de engenharia da coleção: preparação do ambiente e ferramentas para a rotina profissional. Delta integra a Linha ÍRIS, mas não o pacote ÍRIS de seis sistemas."})]}),e.jsxs("button",{type:"button",className:"pr-ultra__cta no-tap-highlight cursor-pointer",onClick:p,children:["Ver a Linha na loja",e.jsx(a,{className:"fas fa-arrow-right"})]})]}),e.jsx("ul",{className:"pr-ultra__nichos",children:k.map((n,s)=>e.jsxs("li",{onClick:()=>t(s),className:`pr-ultra__nicho cursor-pointer transition-all duration-200 ${l===s?"pr-ultra__nicho--aberto pr-ultra-nicho-active shadow-sm":""}`,children:[e.jsx("span",{className:"pr-ultra__nicho-icon",children:e.jsx(a,{className:`fas ${n.icon}`})}),e.jsxs("span",{className:"pr-ultra__nicho-body",children:[e.jsx("span",{className:"pr-ultra__nicho-title",children:n.title}),e.jsx("span",{className:"pr-ultra__nicho-desc",children:n.desc})]})]},n.title))})]})});_.displayName="UltraNichesInteractiveSection";const O=[{num:"3 min",lbl:"instalação completa"},{num:"~5 s",lbl:"boot do sistema"},{num:"−70%",lbl:"RAM em repouso"},{num:"5 GB",lbl:"pegada em disco"},{num:"∞",lbl:"licença vitalícia"}],W=[{icon:"fa-satellite-dish",title:"Telemetria removida na raiz",desc:'Os serviços de coleta não são "desligados" — não existem na imagem. Nada liga de volta depois de uma atualização.'},{icon:"fa-microchip",title:"Agendador e serviços calibrados",desc:"Processos ociosos fora do boot, prioridade de CPU ajustada para o primeiro plano: o clique responde na hora."},{icon:"fa-feather-alt",title:"Entrega limpa, sem bloatware",desc:"Nenhum aplicativo patrocinado, nenhuma oferta embutida. O que sobra de RAM e disco é seu, não do sistema."},{icon:"fa-shield-alt",title:"Compatibilidade preservada",desc:"Redes, impressoras, periféricos e anticheats funcionando — otimização que quebra driver não sai daqui."}],F=[{id:"alpha",nome:"ALPHA",cor:b("--sk-palette-cyan-38bdf8"),icone:"fa-home",posicionamento:"Uso cotidiano, instalação limpa e entrega simples",publico:"Clientes domésticos e técnicos que atendem a maioria das formatações",beneficios:["Base leve e estável para navegação, estudo e trabalho comum","Essenciais preparados para reduzir retrabalho do técnico","Preço de entrada sem parecer produto inferior"]},{id:"bravo",nome:"BRAVO",cor:b("--sk-brand"),icone:"fa-gamepad",posicionamento:"Leveza, resposta e foco em jogos",publico:"Gamers e clientes que valorizam desempenho perceptível",beneficios:["Menor latência de interrupção (DPC/ISR calibrado)","Zero telemetria ou processos supérfluos de fundo","Otimização do subsistema gráfico e agendador de GPU"]},{id:"charlie",nome:"CHARLIE",cor:b("--sk-palette-indigo-a78bfa"),icone:"fa-briefcase",posicionamento:"Escritório, empresa e estação de trabalho",publico:"Empresas, escritórios e usuários que exigem estabilidade contínua",beneficios:["Aproveitamento integral de múltiplos núcleos de CPU e GPU","Fluxo sem gargalos em render e pipelines pesados","Pro for Workstations com estabilidade corporativa"]}],B=[{img:"assets/apresentacao/ram.webp",title:"skull://monitor/ram",caption:"Consumo de RAM em repouso"},{img:"assets/apresentacao/processos.webp",title:"skull://monitor/processos",caption:"Processos ativos após o boot"},{img:"assets/apresentacao/armazenamento.webp",title:"skull://monitor/disco",caption:"Pegada real em disco"},{img:"assets/apresentacao/otimizador1.webp",title:"skull://sistema/gerenciador-performance",caption:"Ultra Gerenciador de Performance no clique direito — a porta do X-FASTER"}],G=["Um clique no menu de contexto do Windows","Temporários, cache do sistema, relatórios de erro e cache de navegadores","Relatório da varredura, arquivo por arquivo","Limpeza automática ao inicializar, se você quiser"],V=[{img:"assets/apresentacao/xfaster-otimizando.webp",title:"skull://x-faster/otimizando",caption:"A varredura em andamento"},{img:"assets/apresentacao/xfaster-relatorio.webp",title:"skull://x-faster/relatorio",caption:"Relatório da varredura: o disco antes e depois, por categoria"},{img:"assets/apresentacao/xfaster-temporarios.webp",title:"skull://x-faster/temporarios",caption:"Arquivos temporários removidos, um a um"},{img:"assets/apresentacao/xfaster-navegadores.webp",title:"skull://x-faster/navegadores",caption:"Cache de navegadores removido, um a um"}],U=[{icon:"fa-gamepad",title:"Gamers",desc:"FPS estável e input lag reduzido — a máquina some e sobra o jogo."},{icon:"fa-briefcase",title:"Profissionais",desc:"Multitarefa fluida, redes e impressoras prontas no primeiro boot."},{icon:"fa-tools",title:"Técnicos",desc:"Formatação em minutos e versões puras para configurar do seu jeito."},{icon:"fa-home",title:"Uso doméstico",desc:"Instalou, usou: drivers e essenciais entram sozinhos com o Wintrax."}],H=["Drivers atualizados automaticamente","Ativação permanente em um clique","Programas essenciais instalados sozinhos","Otimização pós-formatação completa"],y={"xfaster-navegadores.webp":[853,860],"xfaster-otimizando.webp":[686,647],"xfaster-recuperados.webp":[619,690],"xfaster-relatorio.webp":[897,869],"xfaster-temporarios.webp":[855,862]},f=m.memo(({img:p,title:l,caption:t,eager:c=!1,selo:d="legado"})=>e.jsxs("figure",{className:"pr-console",style:{margin:0},children:[e.jsxs("div",{className:"pr-console__bar","aria-hidden":"true",children:[e.jsxs("span",{className:"pr-console__dots",children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}),e.jsx("span",{className:"pr-console__title",children:l})]}),e.jsx("div",{className:"pr-console__body",children:p&&e.jsx("img",{src:j(p),alt:t,width:(y[p.split("/").pop()||""]||[1152,864])[0],height:(y[p.split("/").pop()||""]||[1152,864])[1],loading:c?"eager":"lazy",decoding:"async"})}),e.jsxs("figcaption",{className:"pr-console__caption",children:[e.jsx("span",{children:t}),e.jsx("span",{className:"pr-legacy-chip",children:d==="atual"?e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"fas fa-bolt"})," ","Versão atual"]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"fas fa-archive"})," ","Acervo legado"]})})]})]}));f.displayName="Console";const $=m.memo(({user:p,onEnterStore:l,onOpenDiagnostico:t,onOpenLine:c,onOpenLegacy:d,onOpenGallery:n,initialGuideTopic:s})=>{A("store-presentation",R);const{abrir:o,visor:u}=I(n),g="/assets/apresentacao/amostra-gerenciador-tarefas.webp",i=p?.nome?p.nome.trim().split(" ")[0]:"",x=E.useCallback(()=>{const r=document.getElementById("simulador-produtividade-section");r?r.scrollIntoView({behavior:"smooth"}):t&&t()},[t]);return e.jsx("div",{className:"store-interface pr-root","data-surface":"apresentacao",children:e.jsxs("div",{className:"pr-shell",children:[e.jsx("div",{className:"pr-back-strip",children:e.jsxs("button",{type:"button",onClick:l,className:"pr-back-btn no-tap-highlight","aria-label":"Voltar para a Loja",children:[e.jsx(a,{className:"fas fa-arrow-left"}),e.jsx("span",{children:"Voltar para a Loja"})]})}),e.jsxs("section",{className:"pr-hero","aria-labelledby":"apresentacao-titulo",children:[e.jsxs("span",{className:"pr-eyebrow",children:["Skull Legion"," ","· Engenharia de Sistemas"]}),e.jsxs("h1",{id:"apresentacao-titulo",className:"pr-display",children:["Seu hardware nunca foi o limite.",e.jsx("span",{className:"pr-display-accent",children:"O sistema era."})]}),e.jsxs("p",{className:"pr-lead",children:[i?String(i)+", projetamos":"Projetamos","sistemas operacionais de alta performance sobre a base do Windows — reconstruídos por área de uso: jogo, trabalho e operação corporativa. Instalação em minutos, licença vitalícia, entrega imediata."]}),e.jsxs("div",{className:"pr-hero-actions",children:[e.jsxs("button",{id:"apresentacao-cta-loja",type:"button",className:"pr-cta-loja no-tap-highlight",onClick:l,children:[e.jsx(a,{className:"fas fa-store"}),"Entrar na Loja"]}),e.jsxs("a",{className:"pr-cta-ghost no-tap-highlight",href:"#apresentacao-engenharia",children:["Ver a engenharia",e.jsx(a,{className:"fas fa-chevron-down"})]})]}),e.jsx("div",{className:"pr-specplate",role:"list","aria-label":"Especificações dos sistemas",children:O.map(r=>e.jsxs("div",{className:"pr-spec",role:"listitem",children:[e.jsx("span",{className:"pr-spec__num",children:r.num}),e.jsx("span",{className:"pr-spec__lbl",children:r.lbl})]},r.lbl))})]}),e.jsxs("section",{className:"pr-section",id:"apresentacao-prova","aria-labelledby":"apresentacao-prova-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsx("span",{className:"pr-eyebrow",children:"A prova"}),e.jsxs("h2",{id:"apresentacao-prova-titulo",className:"pr-title",children:["Convencional",e.jsx("span",{className:"pr-title-cold",children:"×"}),"Alta performance"]}),e.jsx("p",{className:"pr-lead",children:"A mesma máquina, o mesmo Gerenciador de Tarefas. Em repouso, o Windows convencional ocupa 36% da CPU com 130 processos; o sistema Skull fica em 0% com 45. É esse o desempenho que os sistemas entregam."})]}),u,e.jsx(z,{amostraSrc:g,onZoom:()=>o([g],0)})]}),e.jsxs("section",{className:"pr-section",id:"apresentacao-engenharia","aria-labelledby":"apresentacao-eng-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsx("span",{className:"pr-eyebrow",children:"Engenharia"}),e.jsxs("h2",{id:"apresentacao-eng-titulo",className:"pr-title",children:["Menos sistema.",e.jsx("span",{className:"pr-title-cold",children:"Mais máquina."})]}),e.jsx("p",{className:"pr-lead",children:"Não é um otimizador por cima do Windows — é a imagem do sistema reconstruída antes de chegar em você. As capturas abaixo são reais."})]}),e.jsxs("div",{className:"pr-eng-grid",children:[e.jsx(f,{img:"/assets/apresentacao/detalhes1.webp",title:"skull://sistema/visao-geral",caption:"Área de trabalho de um sistema Skull recém-instalado",eager:!0}),e.jsx("div",{className:"pr-facts",children:W.map(r=>e.jsxs("div",{className:"pr-fact",children:[e.jsx("span",{className:"pr-fact__icon",children:e.jsx(a,{className:`fas ${r.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"pr-fact__title",children:r.title}),e.jsx("div",{className:"pr-fact__desc",children:r.desc})]})]},r.title))})]}),e.jsx("div",{className:"pr-consoles-row",children:B.map(r=>e.jsx(f,{img:r.img,title:r.title,caption:r.caption},r.img))})]}),e.jsx(w,{onEnterStore:l}),e.jsxs("section",{className:"pr-section","aria-labelledby":"apresentacao-linhas-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsx("span",{className:"pr-eyebrow",children:"Catálogo"}),e.jsx("h2",{id:"apresentacao-linhas-titulo",className:"pr-title",children:"Uma linha para cada operação"}),e.jsx("p",{className:"pr-lead",children:"Três versões principais, calibradas para perfis diferentes de uso e de hardware — todas com a mesma base de engenharia."})]}),e.jsx("div",{className:"pr-lines",children:F.map(r=>e.jsxs("article",{className:"pr-line-card",style:{"--line":r.cor},children:[e.jsxs("div",{className:"pr-line-card__head",children:[e.jsx("span",{className:"pr-line-card__icon",children:e.jsx(a,{className:`fas ${r.icone}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"pr-line-card__name",children:r.nome}),e.jsx("div",{className:"pr-line-card__pos",children:r.posicionamento})]})]}),e.jsxs("p",{className:"pr-line-card__pub",children:[r.publico,"."]}),e.jsx("ul",{className:"pr-line-card__benefits",children:r.beneficios.slice(0,3).map(h=>e.jsxs("li",{children:[e.jsx(a,{className:"fas fa-check"})," ",e.jsx("span",{children:h})]},h))}),e.jsxs("button",{type:"button",className:"pr-line-card__cta no-tap-highlight",onClick:()=>c(r.id),children:["Ver",r.nome," ","na loja"," ",e.jsx(a,{className:"fas fa-arrow-right"})]})]},r.id))})]}),e.jsx(S,{onOpenLine:c,onEnterStore:l}),e.jsx("section",{className:"pr-section","aria-labelledby":"apresentacao-ultra-titulo",children:e.jsx(_,{onEnterStore:l})}),e.jsxs("section",{className:"pr-section","aria-labelledby":"apresentacao-publicos-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsx("span",{className:"pr-eyebrow",children:"Para quem"}),e.jsx("h2",{id:"apresentacao-publicos-titulo",className:"pr-title",children:"Feito para quem não tem tempo a perder"})]}),e.jsx("div",{className:"pr-publicos",children:U.map(r=>e.jsxs("div",{className:"pr-pub",children:[e.jsx("span",{className:"pr-pub__icon",children:e.jsx(a,{className:`fas ${r.icon}`})}),e.jsx("span",{className:"pr-pub__title",children:r.title}),e.jsx("span",{className:"pr-pub__desc",children:r.desc})]},r.title))})]}),e.jsx("section",{className:"pr-section","aria-labelledby":"apresentacao-wintrax-titulo",children:e.jsxs("div",{className:"pr-wintrax",children:[e.jsxs("div",{className:"pr-wintrax__copy",children:[e.jsx("span",{className:"pr-eyebrow",children:"Ferramenta exclusiva"}),e.jsx("h2",{id:"apresentacao-wintrax-titulo",className:"pr-title",children:"Wintrax: o pós-formatação em um clique"}),e.jsx("p",{className:"pr-lead",children:"Todo sistema Skull vem com o Wintrax — o copiloto que transforma a parte chata da formatação em um clique: drivers, ativação, programas essenciais e otimizações entram sozinhos."}),e.jsx("ul",{className:"pr-wintrax__list",children:H.map(r=>e.jsxs("li",{children:[e.jsx(a,{className:"fas fa-check-circle"})," ",e.jsx("span",{children:r})]},r))})]}),e.jsx(f,{img:"/assets/apresentacao/wintrax1.webp",title:"skull://wintrax",caption:"Wintrax em execução após uma instalação"})]})}),e.jsxs("section",{className:"pr-section","aria-labelledby":"apresentacao-xfaster-titulo",children:[e.jsxs("div",{className:"pr-wintrax",children:[e.jsxs("div",{className:"pr-wintrax__copy",children:[e.jsx("span",{className:"pr-eyebrow",children:"Ferramenta exclusiva"}),e.jsx("h2",{id:"apresentacao-xfaster-titulo",className:"pr-title",children:"X-FASTER: a limpeza imediata do sistema"}),e.jsx("p",{className:"pr-lead",children:"Botão direito na área de trabalho, Ultra Gerenciador de Performance, X-FASTER. O sistema varre temporários, cache e relatórios de erro, mostra quanto recuperou e entrega o relatório da varredura — arquivo por arquivo. O X-GHOST faz o mesmo pela memória RAM."}),e.jsx("ul",{className:"pr-wintrax__list",children:G.map(r=>e.jsxs("li",{children:[e.jsx(a,{className:"fas fa-check-circle"})," ",e.jsx("span",{children:r})]},r))})]}),e.jsx(f,{img:"/assets/apresentacao/xfaster-recuperados.webp",title:"skull://x-faster",caption:"X-FASTER ao fim da varredura: 200,5 MB recuperados",selo:"atual"})]}),e.jsx("div",{className:"pr-consoles-row",children:V.map(r=>e.jsx(f,{img:r.img,title:r.title,caption:r.caption,selo:"atual"},r.img))})]}),e.jsxs("section",{className:"pr-section","aria-labelledby":"acervo-relatos-titulo",children:[e.jsxs("header",{className:"pr-section-head",children:[e.jsx("span",{className:"pr-eyebrow",children:"Comunidade · Acervo"}),e.jsx("h2",{id:"acervo-relatos-titulo",className:"pr-title",children:"Experiências compartilhadas"}),e.jsx("p",{className:"pr-lead",children:"Capturas preservadas da loja anterior. Os relatos descrevem experiências com aquela geração de sistemas; não são avaliações das edições atuais."})]}),e.jsx("div",{className:"pr-community-grid",children:[{file:"relato-acervo-desktop.png",title:"Sistema em uso",quote:"Top demais. Muito Brabo essa ISO.",text:"Registro de um sistema instalado, compartilhado na comunidade."},{file:"relato-acervo-escritorio.png",title:"Experiência no escritório",quote:"Que sistema LINDO e Rapido.",text:"Relato sobre rede, impressora, arquivos e instalação na geração anterior."}].map((r,h)=>e.jsxs("figure",{children:[e.jsxs("button",{type:"button",className:"pr-community-shot","aria-label":"Ampliar relato: "+r.title,onClick:()=>o(["relato-acervo-desktop.png","relato-acervo-escritorio.png"].map(C=>j("assets/apresentacao/"+C)),h),children:[e.jsx("img",{src:j("assets/apresentacao/"+r.file),alt:r.text,width:"1080",height:"2400",loading:"lazy",decoding:"async"}),e.jsx("span",{children:"Ampliar captura"})]}),e.jsxs("figcaption",{children:[e.jsx("strong",{children:r.title}),e.jsx("blockquote",{children:r.quote}),e.jsx("p",{children:r.text})]})]},r.file))}),e.jsxs("div",{className:"pr-community-demo",children:[e.jsx(f,{img:"assets/apresentacao/menu-acervo.jpg",title:"Acervo · Menu do sistema",caption:"Exemplo da interface de uma edição da geração anterior, registrada em julho de 2024."}),e.jsx("p",{children:"As interfaces e os programas incluídos variam por edição. Confira a descrição do produto que pretende adquirir."})]})]}),e.jsx(q,{initialTopic:s,onEnterStore:l,onOpenDiagnostico:x}),e.jsx("section",{className:"pr-section","aria-label":"Acervo legado",children:e.jsxs("div",{className:"pr-legacy-note",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Sobre as capturas desta página:"}),"as de engenharia vêm dos sistemas da nossa geração anterior — e esses sistemas continuam à venda, de forma legada, dentro da loja; as do X-FASTER são da versão atual. O acervo completo tem linha do tempo própria."]}),e.jsxs("button",{type:"button",className:"pr-cta-ghost no-tap-highlight",onClick:d,children:[e.jsx(a,{className:"fas fa-archive"}),"Ver o acervo legado"]})]})}),e.jsx("section",{className:"pr-section","aria-labelledby":"apresentacao-final-titulo",children:e.jsxs("div",{className:"pr-final",children:[e.jsx("span",{className:"pr-eyebrow",children:"Skull Legion"}),e.jsx("h2",{id:"apresentacao-final-titulo",className:"pr-title",children:"Encontre o sistema certo para a sua máquina"}),e.jsxs("div",{className:"pr-hero-actions",style:{marginTop:4},children:[e.jsxs("button",{id:"apresentacao-cta-loja-final",type:"button",className:"pr-cta-loja no-tap-highlight",onClick:l,children:[e.jsx(a,{className:"fas fa-store"}),"Entrar na Loja"]}),e.jsxs("button",{type:"button",className:"pr-cta-ghost no-tap-highlight",onClick:x,children:[e.jsx(a,{className:"fas fa-calculator"}),"Fazer Diagnóstico Rápido"]})]}),e.jsxs("span",{className:"pr-final__note",children:[e.jsx(a,{className:"fas fa-lock"}),"Pagamento 100% seguro e protegido · Liberação instantânea"]})]})})]})})});$.displayName="PresentationTab";export{$ as PresentationTab};
