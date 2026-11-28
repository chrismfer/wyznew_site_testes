const r=`/* skull-style-rev:sections:mwzxm77k */
.home-flow {\r
  display: flex;\r
  flex-direction: column;\r
  row-gap: clamp(28px, 3vw, 40px);\r
  font-family: var(--sk-font-heading);\r
  padding-block: 0 clamp(20px, 2.4vh, 32px);\r
}\r
\r
.home-flow > * { min-width: 0; }\r
.store-guide { min-width: 0; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-lg); background: var(--sk-home-ui-surface); color: var(--sk-home-ui-text); }\r
.store-guide > summary { display: flex; align-items: center; gap: 12px; min-height: 62px; padding: 18px 22px; list-style: none; cursor: pointer; font-size: 15px; font-weight: 700; color: var(--sk-home-ui-accent); }\r
.store-guide summary::-webkit-details-marker { display: none; }\r
.store-guide summary:focus-visible, .store-guide__questions summary:focus-visible { outline: 2px solid var(--sk-home-ui-accent); outline-offset: 3px; }\r
.store-guide summary > svg { flex-shrink: 0; }\r
.store-guide__chevron { margin-left: auto; color: var(--sk-home-ui-muted); }\r
.store-guide[open] > summary .store-guide__chevron { transform: rotate(180deg); }\r
.store-guide[open] > summary { border-bottom: 1px solid var(--sk-home-ui-line); }\r
.store-guide__body { padding: 22px; font-size: 13px; line-height: 1.7; }\r
.store-guide__intro { margin: 0 0 20px; color: var(--sk-home-ui-muted); }\r
.store-guide__questions p { margin: 0; color: var(--sk-home-ui-muted); }\r
.home-line-presentations__head { position: relative; }\r
.home-line-presentations__head > div:first-child { flex: 1 1 100%; }\r
.home-line-presentations__tools { flex: 0 0 100%; min-width: 0; }\r
.catalog-toolbar { min-width: 0; }\r
.catalog-toolbar__row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; min-width: 0; }\r
.catalog-toolbar__help { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 34px; margin-left: auto; padding: 7px 12px; flex-shrink: 0; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-sm, 6px); background: var(--sk-home-ui-raised); color: var(--sk-home-ui-muted); font: 600 11px/1.3 var(--sk-font-heading); cursor: pointer; }\r
.catalog-toolbar__help:hover, .catalog-toolbar__help[aria-expanded="true"] { color: var(--sk-home-ui-accent); border-color: var(--sk-home-ui-accent); background: var(--sk-home-ui-active); }\r
.catalog-toolbar__help:focus-visible { outline: 2px solid var(--sk-home-ui-accent); outline-offset: 3px; }\r
.catalog-toolbar__help[aria-expanded="true"] > svg:last-child { transform: rotate(180deg); }\r
.catalog-toolbar__content { margin-top: 14px; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-md); background: var(--sk-home-ui-raised); color: var(--sk-home-ui-text); }\r
.catalog-toolbar__content[hidden] { display: none; }\r
.store-guide__category-heading > span { color: var(--sk-home-ui-muted); font-size: 12px; }\r
.store-guide__category-heading h3 { margin: 4px 0 8px; color: var(--sk-home-ui-accent); font-size: 20px; font-weight: 700; }\r
.store-guide__category-heading p { margin: 0; color: var(--sk-home-ui-muted); }\r
.store-guide__principles { margin-top: 20px; }\r
.store-guide__principles h4 { margin: 0 0 12px; font-size: 14px; font-weight: 700; }\r
.store-guide__principles ul { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0; list-style: none; }\r
.store-guide__principles li { display: flex; align-items: center; gap: 8px; padding: 9px 12px; border-radius: var(--sk-r-sm); background: color-mix(in srgb, var(--sk-home-ui-accent) 7%, transparent); }\r
.store-guide__principles li svg { color: var(--sk-home-ui-accent); }\r
.store-guide__questions { margin-top: 24px; }\r
.store-guide__questions > details { border-top: 1px solid var(--sk-home-ui-line); }\r
.store-guide__questions summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 48px; list-style: none; cursor: pointer; font-size: 13px; font-weight: 600; }\r
.store-guide__questions details[open] > summary svg { transform: rotate(180deg); }\r
.store-guide__questions details > div { padding: 0 0 16px; }\r
.store-guide__questions p + p { margin-top: 8px; }\r
@media (max-width: 767px) {\r
  .store-guide > summary { padding: 16px; font-size: 13px; }\r
  .store-guide__body { padding: 16px; }\r
}\r
.home-benefits { list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; margin: 0; padding: 24px 0; border-bottom: 1px solid var(--sk-ds-line); }\r
.home-benefits li { display: flex; align-items: center; justify-content: center; gap: 12px; min-width: 0; }\r
.home-benefits svg { flex: none; color: var(--sk-home-ui-accent); }\r
.home-benefits strong { display: block; color: var(--sk-ds-t1); font-size: 13px; font-weight: 600; line-height: 1.5; }\r
.home-benefits span { display: block; margin-top: 3px; color: var(--sk-ds-t2); font-size: 10px; line-height: 1.5; }\r
@media (max-width: 767px) {\r
  .home-benefits { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 14px; }\r
  .home-benefits li { justify-content: flex-start; gap: 10px; }\r
  .home-benefits strong { font-size: 11px; }\r
  .home-benefits span { font-size: 9px; }\r
}\r
\r
.home-flow .sk-title { font-size: clamp(1.75rem, 2.5vw, 2.25rem); font-weight: 800; line-height: 1.15; letter-spacing: -.03em; }\r
.home-flow .sk-lead { max-width: 82ch; font-size: clamp(.9375rem, 1.05vw, 1rem); line-height: 1.55; color: var(--sk-ds-t2); }\r
.home-flow .sk-eyebrow { font-size: .75rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }\r
.home-flow .ml-product-card .ml-product-title { font-size: .875rem; font-weight: 600; line-height: 1.45; min-height: 2.9em; max-height: 2.9em; letter-spacing: -.01em; }\r
\r
.home-rail-track-wrapper {\r
  position: relative;\r
  width: 100%;\r
}\r
\r
.home-rail-track-wrapper > .home-offers-rail {\r
  padding-inline: var(--sk-rail-inset, 16px) var(--sk-rail-end-inset, 16px);\r
  scroll-padding-inline: var(--sk-rail-inset, 16px) var(--sk-rail-end-inset, 16px);\r
}\r
\r
.home-rail-progress-wrap {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  padding-top: 6px;\r
  padding-bottom: 8px;\r
  width: 100%;\r
}\r
\r
.home-rail-progress-track {\r
  width: 120px;\r
  height: 4px;\r
  background: color-mix(in srgb, var(--sk-palette-blue-94a3b8) 20%, transparent);\r
  border-radius: var(--sk-r-sm, 6px);\r
  overflow: hidden;\r
  position: relative;\r
}\r
\r
.home-rail-progress-thumb {\r
  width: 30%;\r
  height: 100%;\r
  background: linear-gradient(90deg, var(--sk-accent), var(--sk-ds-accent));\r
  border-radius: var(--sk-r-sm, 6px);\r
  transition: transform 0.08s ease-out;\r
  box-shadow: 0 0 8px color-mix(in srgb, var(--sk-ds-accent) 40%, transparent);\r
}\r
\r
:root:not(.dark) .home-rail-progress-track {\r
  background: color-mix(in srgb, var(--sk-palette-blue-64748b) 22%, transparent);\r
}\r
\r
.home-offers-rail {\r
  position: relative;\r
  display: grid;\r
  grid-auto-flow: column;\r
  grid-auto-columns: min(78vw, 300px);\r
  gap: 14px;\r
  align-items: stretch;\r
  padding: 4px var(--sk-rail-end-inset, 2px) 12px var(--sk-rail-inset, 2px);\r
  scroll-padding-inline: 4px;\r
  cursor: grab;\r
  -moz-user-select: none;\r
       user-select: none;\r
  -webkit-user-select: none;\r
  touch-action: pan-y pinch-zoom;\r
  overflow-x: auto !important;\r
  -webkit-overflow-scrolling: touch;\r
  overscroll-behavior-x: contain;\r
  scrollbar-width: none;\r
  scroll-behavior: auto;\r
  scroll-snap-type: none;\r
}\r
\r
.home-offers-rail::-webkit-scrollbar {\r
  display: none !important;\r
  width: 0 !important;\r
  height: 0 !important;\r
}\r
\r
.home-offers-rail[data-rail-dragging="true"],\r
.home-offers-rail[data-rail-interacting="true"] {\r
  cursor: grabbing;\r
  scroll-snap-type: none !important;\r
}\r
\r
.home-offers-rail[data-rail-drifting="true"],\r
.home-offers-rail[data-rail-dragging="true"],\r
.home-offers-rail[data-rail-interacting="true"] { scroll-behavior: auto !important; }\r
.home-offers-rail[data-rail-loop="true"] { scroll-snap-type: none !important; scroll-behavior: auto !important; }\r
\r
@media (pointer: coarse) {\r
  .home-offers-rail { cursor: auto; }\r
}\r
\r
.home-offers-item {\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  scroll-snap-align: none;\r
  scroll-snap-stop: normal;\r
}\r
\r
@media (min-width: 768px) {\r
  .home-offers-rail {\r
    grid-auto-columns: var(--sk-rail-card-width, 300px);\r
    gap: 18px;\r
    scroll-behavior: auto !important;\r
    scroll-snap-type: none !important;\r
  }\r
\r
  .home-offers-item {\r
    scroll-snap-align: none !important;\r
  }\r
}\r
\r
.home-offers-item > * { flex: 1; }\r
\r
.home-uni-grid {\r
  grid-template-columns: none;\r
}\r
\r
.home-uni-item { min-width: 0; }\r
\r
.home-uni-card {\r
  position: relative;\r
  letter-spacing: normal;\r
  display: flex;\r
  flex-direction: column;\r
  width: 100%;\r
  height: 100%;\r
  padding: 0;\r
  overflow: hidden;\r
  border: 1px solid var(--sk-ds-line);\r
  border-radius: var(--sk-r-lg);\r
  background: var(--sk-ds-surface);\r
  color: var(--sk-ds-t1);\r
  text-align: left;\r
  cursor: pointer;\r
  transition: border-color var(--sk-t-base), background var(--sk-t-base), box-shadow var(--sk-t-base);\r
}\r
\r
.home-uni-card[data-rail-visible="true"]:hover {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 45%, var(--sk-ds-line));\r
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);\r
}\r
\r
html.dark .home-uni-card {\r
  border: 1px solid var(--sk-palette-teal-26342f);\r
  background: var(--sk-palette-teal-101715);\r
  color: var(--sk-palette-neutral-f3f7f5);\r
}\r
\r
html.dark .home-uni-card[data-rail-visible="true"]:hover {\r
  border-color: color-mix(in srgb, var(--sk-ds-accent) 45%, var(--sk-palette-teal-26342f));\r
  box-shadow: 0 8px 24px color-mix(in srgb, var(--sk-palette-teal-050807) 80%, transparent);\r
}\r
\r
.home-offers-rail :is(.ml-product-card, .home-uni-card) {\r
  border-width: 1px !important;\r
  box-shadow: none !important;\r
  backface-visibility: visible;\r
  -webkit-backface-visibility: visible;\r
  transform: none !important;\r
  filter: none;\r
}\r
.home-offers-rail .ml-product-card .ml-product-img {\r
  transform: none !important;\r
  filter: none;\r
  backface-visibility: visible;\r
  -webkit-backface-visibility: visible;\r
}\r
.home-offers-rail :is(.ml-product-card, .home-uni-card):not([data-rail-visible="true"]):not([data-mobile-focused="true"]) {\r
  z-index: auto !important;\r
}\r
.home-offers-rail :is(.ml-product-card, .home-uni-card):not([data-rail-visible="true"]):not([data-mobile-focused="true"])::after {\r
  opacity: 0 !important;\r
  transition: none !important;\r
}\r
@media (max-width: 768px) {\r
  .home-offers-rail .home-uni-card {\r
    border-color: var(--sk-ds-line) !important;\r
    box-shadow: none !important;\r
    transition: none !important;\r
  }\r
  .home-offers-rail :is(.ml-product-card, .home-uni-card)[data-mobile-focused="true"] {\r
    border-color: var(--sk-ds-line) !important;\r
    box-shadow: none !important;\r
    z-index: 5;\r
  }\r
  .home-offers-rail :is(.ml-product-card, .home-uni-card)::after {\r
    content: '';\r
    position: absolute;\r
    inset: 0;\r
    border: 1px solid var(--sk-card-active-bd, var(--sk-ds-accent));\r
    border-radius: inherit;\r
    box-shadow: none;\r
    pointer-events: none;\r
    z-index: 6;\r
    opacity: 0;\r
    transition: none !important;\r
    transition-duration: 0ms !important;\r
  }\r
  .home-offers-rail :is(.ml-product-card, .home-uni-card)[data-mobile-focused="true"]::after {\r
    opacity: 1;\r
  }\r
}\r
.home-offers-rail .ml-product-card.ml-product-card:focus-visible {\r
  outline: 2px solid var(--sk-ds-accent);\r
  outline-offset: 2px;\r
}\r
@media (prefers-reduced-motion: reduce) {\r
  .home-offers-rail :is(.ml-product-card, .home-uni-card)::after {\r
    transition: none !important;\r
    transition-duration: 0ms !important;\r
  }\r
}\r
\r
.home-uni-card[data-expanded="true"][data-rail-visible="true"] {\r
  border-color: var(--sk-ds-accent);\r
  background: var(--sk-ds-surface);\r
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 30%, transparent);\r
}\r
\r
html.dark .home-uni-card[data-expanded="true"][data-rail-visible="true"] {\r
  background: var(--sk-palette-teal-101715);\r
}\r
\r
.home-uni-card:focus-visible {\r
  outline: 2px solid var(--sk-ds-accent);\r
  outline-offset: 3px;\r
}\r
\r
.home-uni-card__body {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 8px;\r
  min-width: 0;\r
  flex: 0 0 auto;\r
  padding: 18px 20px 20px;\r
}\r
.home-offers-rail:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 2px; }\r
\r
@keyframes homeUniCoverFadeIn {\r
  0% {\r
    opacity: 0.25;\r
  }\r
  100% {\r
    opacity: 1;\r
  }\r
}\r
\r
.home-uni-card__media { display: block; position: relative; width: 100%; flex: 1 1 auto; min-height: 220px; aspect-ratio: 16 / 10; background: var(--sk-ds-surface-2); overflow: hidden; }\r
.home-uni-card__media-img,\r
.home-uni-card__media img { display: block; width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; animation: homeUniCoverFadeIn .18s ease-out both; }\r
.home-uni-card__lines { position: absolute; right: 12px; bottom: 12px; padding: 4px 10px; border-radius: var(--sk-r-sm); background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 82%, transparent); border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 14%, transparent); color: var(--sk-palette-neutral-ffffff); font-size: var(--sk-text-xs); font-weight: 700; letter-spacing: 0.02em; font-variant-numeric: tabular-nums; z-index: 5; box-shadow: 0 2px 8px color-mix(in srgb, var(--sk-palette-neutral-000000) 40%, transparent); }\r
\r
.home-uni-card__eyebrow {\r
  font-size: .75rem;\r
  font-weight: 600;\r
  letter-spacing: .04em;\r
  text-transform: uppercase;\r
  color: var(--sk-home-ui-accent);\r
}\r
\r
.home-uni-card__title {\r
  font-family: var(--sk-font-heading);\r
  font-size: clamp(1.0625rem, 1.25vw, 1.25rem);\r
  font-weight: 800;\r
  letter-spacing: -.015em;\r
  line-height: 1.24;\r
  overflow-wrap: anywhere;\r
}\r
\r
.home-uni-card__desc {\r
  font-size: .875rem;\r
  line-height: 1.55;\r
  color: var(--sk-ds-t2);\r
}\r
\r
.home-uni-card__cta {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  align-self: flex-end;\r
  margin-top: auto;\r
  padding-top: 6px;\r
  font-size: .8125rem;\r
  font-weight: 700;\r
  color: var(--sk-ds-accent);\r
}\r
\r
.home-uni-expanded-shelf {\r
  overflow-anchor: none;\r
  margin-top: 24px;\r
  padding-top: 20px;\r
  border-top: 1px solid var(--sk-ds-line);\r
  scroll-margin-top: 16px;\r
}\r
\r
.home-offers-rail[data-single-product="true"] {\r
  justify-content: center;\r
}\r
\r
.home-catalog-opening {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  grid-template-rows: 1fr;\r
  animation: home-catalog-expand 160ms cubic-bezier(.16, 1, .3, 1) both;\r
}\r
.home-catalog-opening__content {\r
  min-width: 0;\r
  min-height: 0;\r
  animation: home-catalog-content 160ms cubic-bezier(.16, 1, .3, 1);\r
}\r
.home-catalog-products { margin-top: 24px; }\r
@keyframes home-catalog-expand {\r
  from { grid-template-rows: 0fr; }\r
  to { grid-template-rows: 1fr; }\r
}\r
@keyframes home-catalog-content {\r
  from { overflow: hidden; opacity: 0; transform: translateY(10px); }\r
  to { overflow: hidden; opacity: 1; transform: translateY(0); }\r
}\r
@keyframes home-catalog-fade {\r
  from { opacity: 0; }\r
  to { opacity: 1; }\r
}\r
@media (prefers-reduced-motion: reduce) {\r
  .home-catalog-opening { animation: home-catalog-fade 360ms ease-out both; }\r
  .home-catalog-opening__content { animation: none; }\r
}\r
.home-line-presentations {\r
  margin-bottom: 20px;\r
  padding: clamp(16px, 2vw, 22px);\r
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);\r
  border-radius: var(--sk-r-lg);\r
  background: var(--sk-palette-neutral-ffffff);\r
}\r
html.dark .home-line-presentations {\r
  border-color: var(--sk-palette-teal-26342f);\r
  background: var(--sk-palette-teal-101715);\r
}\r
.home-line-presentations__head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; padding-bottom: 14px; margin-bottom: 16px; border-bottom: 1px solid var(--sk-ds-line); }\r
.home-line-presentations__head h3 { color: var(--sk-ds-t1); font-family: var(--sk-font-heading); font-size: clamp(1.125rem, 2vw, 1.5rem); font-weight: 700; line-height: 1.3; }\r
.home-line-presentations__head p { color: var(--sk-ds-t2); font-size: var(--sk-text-sm); line-height: 1.5; margin-top: 6px; }\r
.home-line-presentations__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }\r
.home-line-hero { display: flex; align-items: center; gap: 28px; padding: 24px; margin-bottom: 20px; border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent); border-radius: var(--sk-r-lg); background: var(--sk-palette-neutral-ffffff); text-align: left; color: var(--sk-palette-blue-0f172a); min-width: 0; box-shadow: none; }\r
html.dark .home-line-hero { border-color: var(--sk-palette-teal-26342f); background: var(--sk-palette-teal-101715); color: var(--sk-palette-neutral-f3f7f5); box-shadow: none; }\r
.home-line-hero__cover { width: min(32%, 300px); height: 200px; flex: 0 0 auto; -o-object-fit: cover; object-fit: cover; border-radius: var(--sk-r-md); }\r
.home-line-hero__content { min-width: 0; flex: 1; }\r
.home-line-hero__context { display: block; font-size: .75rem; color: var(--sk-palette-blue-64748b); margin-bottom: 8px; }\r
.home-line-hero__title { display: block; font-family: var(--sk-font-heading); font-size: clamp(1.375rem, 2vw, 1.75rem); font-weight: 700; letter-spacing: -.02em; line-height: 1.25; color: var(--sk-palette-blue-0f172a); }\r
.home-line-hero__slogan { max-width: 65ch; margin-top: 10px; font-size: var(--sk-text-sm); line-height: 1.65; color: var(--sk-palette-blue-64748b); }\r
html.dark .home-line-hero__context { color: var(--sk-palette-neutral-a9b5b0); }\r
html.dark .home-line-hero__title { color: var(--sk-palette-neutral-f3f7f5); }\r
html.dark .home-line-hero__slogan { color: var(--sk-palette-neutral-a9b5b0); }\r
.home-line-hero--selectable { width: 100%; padding: 18px; gap: 18px; margin: 0; align-items: flex-start; cursor: pointer; transition: border-color var(--sk-t-base), background var(--sk-t-base); }\r
.home-line-hero--selectable .home-line-hero__cover { width: 32%; height: 160px; }\r
.home-line-hero--selectable .home-line-hero__title { font-size: clamp(1.125rem, 2vw, 1.375rem); font-weight: 700; line-height: 1.2; letter-spacing: -.015em; }\r
.home-line-hero--selectable .home-line-hero__context { font-size: .6875rem; font-weight: 500; line-height: 1.4; margin-bottom: 6px; }\r
.home-line-hero--selectable .home-line-hero__slogan { font-size: .8125rem; line-height: 1.55; margin-top: 8px; }\r
.home-line-hero--selectable .home-line-hero__action { font-size: .75rem; line-height: 1.4; margin-top: 10px; }\r
.home-line-hero--selectable[aria-pressed="true"] { border-color: var(--sk-ds-accent); background: var(--sk-palette-neutral-ffffff); box-shadow: none; }\r
.home-line-hero--selectable:hover { border-color: var(--sk-card-active-bd, var(--sk-ds-accent)); box-shadow: none; }\r
html.dark .home-line-hero--selectable[aria-pressed="true"] { border-color: var(--sk-ds-accent); background: var(--sk-palette-teal-101715); box-shadow: none; }\r
html.dark .home-line-hero--selectable:hover { border-color: var(--sk-card-active-bd, var(--sk-ds-accent)); box-shadow: none; }\r
.home-line-hero--selectable:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 3px; }\r
.home-line-hero__action { display: inline-flex; align-items: center; gap: 8px; margin-top: 14px; font-size: var(--sk-text-xs); font-weight: 700; color: var(--sk-ds-accent); }\r
.home-line-hero__action svg { width: 14px; height: 14px; }\r
@media (max-width: 767px) { .home-line-presentations__grid { grid-template-columns: minmax(0, 1fr); } }\r
@media (max-width: 1023px) {\r
  .home-line-hero--selectable {\r
    flex-direction: row;\r
    align-items: flex-start;\r
  }\r
  .home-line-hero--selectable .home-line-hero__cover {\r
    width: 28%;\r
    height: auto;\r
    aspect-ratio: 16 / 9;\r
    max-height: none;\r
    -o-object-fit: contain;\r
       object-fit: contain;\r
  }\r
}\r
@media (max-width: 639px) {\r
  .home-uni-card__body { padding: 16px; gap: 7px; }\r
  .home-line-hero { flex-direction: column; align-items: stretch; padding: 16px; gap: 18px; }\r
  .home-line-hero__cover { width: 100%; height: auto; aspect-ratio: 16 / 9; max-height: none; -o-object-fit: contain; object-fit: contain; }\r
  .home-line-hero--selectable { flex-direction: row; align-items: flex-start; gap: 10px; padding: 12px; }\r
}\r
@media (prefers-reduced-motion: reduce) {\r
  .home-uni-card, .home-line-hero--selectable { transition: none; }\r
  .home-uni-card__media-img, .home-uni-card__media img { animation: none; }\r
  .home-offers-rail { scroll-behavior: auto !important; }\r
}\r
.home-inline-category-panel { margin-top: 20px; min-width: 0; }\r
.home-icp-header { display: grid; overflow: hidden; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-lg); background: var(--sk-home-ui-surface); }\r
.home-icp-header-tab { position: relative; min-width: 0; }\r
.home-icp-header-tab.active { background: var(--sk-home-ui-active); }\r
.home-icp-header-icon { color: var(--sk-home-ui-accent); }\r
.home-icp-header-title { font-family: var(--sk-font-heading); color: var(--sk-home-ui-text); font-size: .8125rem; font-weight: 600; line-height: 1.35; letter-spacing: -.01em; text-wrap: balance; }\r
.home-icp-header-count { color: var(--sk-home-ui-muted); }\r
.home-icp-products { padding: 20px 0 0; }\r
\r
@media (max-width: 639px) {\r
  .home-icp-header-tab { padding: 12px; gap: 8px; }\r
  .home-icp-header-icon { width: 28px; height: 28px; }\r
  .home-icp-header-title { font-size: .6875rem; }\r
  .home-icp-header-count { font-size: var(--sk-text-2xs); }\r
  #home-catalog > div > .sk-section__head .sk-lead { font-size: var(--sk-text-ui); line-height: 1.55; }\r
}\r
\r
.home-rail-filter-bar { display: flex; align-items: flex-start; justify-content: flex-start; padding: 6px 0 14px; min-width: 0; }\r
.home-filter-frame { display: inline-flex; align-items: stretch; max-width: 100%; min-width: 0; padding: 0; overflow: hidden; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-lg); background: var(--sk-home-ui-surface); }\r
.home-rail-filter-group { display: flex; align-items: stretch; min-width: 0; }\r
.home-filter-frame--lines { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }\r
.home-filter-frame--lines > .home-rail-filter-group { display: contents; }\r
.home-filter-frame > .home-rail-filter-group + .home-rail-filter-group { border-left: 1px solid var(--sk-home-ui-line); }\r
.home-rail-filter-btn { display: inline-flex; align-items: center; justify-content: center; flex: 1; gap: 5px; min-width: 0; min-height: 32px; padding: 7px 11px; border: 0; border-radius: 0; background: transparent; color: var(--sk-home-ui-muted); font-family: var(--sk-font-heading); font-size: 11px; font-weight: 500; line-height: 1.3; letter-spacing: 0; cursor: pointer; white-space: nowrap; -moz-user-select: none; user-select: none; -webkit-user-select: none; }\r
.home-rail-filter-btn:hover { color: var(--sk-home-ui-text); background: var(--sk-home-ui-raised); }\r
.home-rail-filter-btn[data-active="true"] { color: var(--sk-home-ui-accent); background: var(--sk-home-ui-active); }\r
.home-rail-filter-btn:focus-visible { outline: 2px solid var(--sk-home-ui-accent); outline-offset: -2px; }\r
.home-rail-filter-btn[data-active="true"] .home-rail-filter-icon { color: currentColor; }\r
.home-rail-filter-icon { flex-shrink: 0; }\r
\r
@media (max-width: 639px) {\r
  .home-flow { row-gap: 18px; padding-block: 0 14px; }\r
  .home-flow .sk-title { font-size: 22px; line-height: 1.18; }\r
  .home-flow .sk-lead { font-size: 13px; line-height: 1.5; }\r
  .home-flow .sk-eyebrow { font-size: 11px; }\r
  .catalog-toolbar__row { gap: 8px; }\r
  .catalog-toolbar__help { min-height: 32px; padding: 6px 8px; gap: 4px; font-size: 10px; border-radius: var(--sk-r-sm, 6px); }\r
  .catalog-toolbar__help > svg { width: 12px; height: 12px; }\r
  .home-rail-filter-btn { min-height: 30px; padding: 6px 4px; gap: 4px; font-size: 10px; }\r
  .home-rail-filter-icon { font-size: 9px; }\r
  .home-filter-frame--products { display: grid; grid-template-columns: minmax(0, 1fr); width: 100%; }\r
  .home-filter-frame--products > .home-rail-filter-group { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); }\r
  .home-filter-frame--products > .home-rail-filter-group + .home-rail-filter-group { border-left: 0; border-top: 1px solid var(--sk-home-ui-line); }\r
  .home-line-presentations__head { gap: 10px; margin-bottom: 12px; }\r
  .home-line-presentations__head p { margin-top: 4px; font-size: 11px; }\r
  .home-line-hero--selectable .home-line-hero__cover { width: 62px; height: 62px; flex-basis: 62px; -o-object-fit: cover; object-fit: cover; }\r
  .home-line-hero__context { font-size: 9px; margin-bottom: 4px; }\r
  .home-line-hero__title { font-size: 16px; }\r
  .home-line-hero__slogan { font-size: 11px; line-height: 1.5; margin-top: 6px; }\r
  .home-line-hero__action { font-size: 10px; margin-top: 8px; }\r
  .home-line-presentations__grid { gap: 10px; }\r
  .store-guide > summary { min-height: 44px; padding: 12px; gap: 8px; font-size: 11px; }\r
  .store-guide__body { padding: 12px; font-size: 11px; line-height: 1.6; }\r
  .store-guide__category-heading h3 { font-size: 16px; }\r
}\r
\r
.home-rail-empty-msg {\r
  padding: 32px 16px;\r
  text-align: center;\r
  background: color-mix(in srgb, var(--sk-palette-blue-94a3b8) 6%, transparent);\r
  border: 1px dashed color-mix(in srgb, var(--sk-palette-blue-94a3b8) 20%, transparent);\r
  border-radius: var(--sk-r-xl, 16px);\r
  margin-block: 8px 16px;\r
}\r
\r
:root.dark .home-rail-empty-msg {\r
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);\r
}\r
\r
.home-offers-catalog-link {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  padding: 6px 12px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  color: var(--sk-palette-teal-059669);\r
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);\r
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  cursor: pointer;\r
  transition: all 0.2s ease;\r
}\r
\r
:root.dark .home-offers-catalog-link {\r
  color: var(--sk-ds-accent);\r
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
}\r
\r
.home-offers-catalog-link:hover {\r
  background: color-mix(in srgb, var(--sk-accent) 20%, transparent);\r
  border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent);\r
}\r
\r
.home-inline-detail-slot {\r
  width: 100%;\r
  margin-top: 16px;\r
  padding-top: 16px;\r
  border-top: 1px solid var(--sk-home-ui-line);\r
}\r
\r
.orders-page {\r
  min-height: 100%;\r
  color: var(--sk-ds-t1);\r
}\r
\r
.orders-toolbar {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 12px;\r
  padding: 10px 14px;\r
  border: 1px solid var(--sk-home-ui-line);\r
  border-radius: var(--sk-r-lg);\r
  background: var(--sk-home-ui-surface);\r
}\r
\r
.orders-toolbar__filters {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  background: var(--sk-ds-surface);\r
  padding: 3px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--sk-home-ui-line);\r
}\r
\r
.orders-toolbar__pill {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  min-height: 30px;\r
  padding: 4px 10px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 0;\r
  background: transparent;\r
  color: var(--sk-home-ui-muted);\r
  font-family: var(--sk-font-heading);\r
  font-size: 11.5px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
  white-space: nowrap;\r
}\r
\r
.orders-toolbar__pill:hover {\r
  color: var(--sk-home-ui-text);\r
  background: var(--sk-home-ui-raised);\r
}\r
\r
.orders-toolbar__pill.active {\r
  background: var(--sk-home-ui-active);\r
  color: var(--sk-home-ui-accent);\r
}\r
\r
.orders-toolbar__pill strong {\r
  font-size: 11px;\r
  font-weight: 700;\r
  padding: 1px 6px;\r
  border-radius: 4px;\r
  background: color-mix(in srgb, currentColor 15%, transparent);\r
}\r
\r
.orders-toolbar__search-wrap {\r
  position: relative;\r
  display: flex;\r
  align-items: center;\r
  flex: 1;\r
  min-width: 200px;\r
}\r
\r
.orders-toolbar__search-icon {\r
  position: absolute;\r
  left: 11px;\r
  font-size: 12px;\r
  color: var(--sk-home-ui-muted);\r
  pointer-events: none;\r
}\r
\r
.orders-toolbar__search-input {\r
  width: 100%;\r
  height: 36px;\r
  padding: 0 12px 0 32px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--sk-home-ui-line);\r
  background: var(--sk-ds-surface);\r
  color: var(--sk-home-ui-text);\r
  font-family: inherit;\r
  font-size: 12px;\r
  outline: none;\r
  transition: border-color 0.15s ease;\r
}\r
\r
.orders-toolbar__search-input:focus {\r
  border-color: var(--sk-home-ui-accent);\r
}\r
\r
.orders-toolbar__refresh-btn {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  min-height: 36px;\r
  padding: 0 12px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--sk-home-ui-line);\r
  background: var(--sk-ds-surface);\r
  color: var(--sk-home-ui-text);\r
  font-family: var(--sk-font-heading);\r
  font-size: 12px;\r
  font-weight: 600;\r
  cursor: pointer;\r
  transition: all 0.15s ease;\r
  white-space: nowrap;\r
}\r
\r
.orders-toolbar__refresh-btn:hover {\r
  background: var(--sk-home-ui-raised);\r
  color: var(--sk-home-ui-accent);\r
  border-color: color-mix(in srgb, var(--sk-home-ui-accent) 40%, var(--sk-home-ui-line));\r
}\r
\r
.orders-sheet {\r
  border: 1px solid var(--sk-home-ui-line);\r
  border-radius: var(--sk-r-lg);\r
  background: var(--sk-home-ui-surface);\r
  overflow: hidden;\r
}\r
\r
.orders-sheet__head {\r
  display: grid;\r
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 1.2fr) minmax(0, 1.1fr) minmax(0, 0.95fr) minmax(0, 1.35fr);\r
  align-items: center;\r
  gap: 16px;\r
  padding: 10px 18px;\r
  border-bottom: 1px solid var(--sk-home-ui-line);\r
  background: var(--sk-ds-surface);\r
}\r
\r
.orders-sheet__th {\r
  font-family: var(--sk-font-heading);\r
  font-size: 10.5px;\r
  font-weight: 700;\r
  letter-spacing: 0.06em;\r
  text-transform: uppercase;\r
  color: var(--sk-home-ui-muted);\r
}\r
\r
.orders-sheet__th--right {\r
  text-align: right;\r
}\r
\r
.orders-download-grid {\r
  display: flex;\r
  flex-direction: column;\r
  width: 100%;\r
}\r
\r
.orders-group-divider {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: 10px;\r
  padding: 8px 18px;\r
  background: color-mix(in srgb, var(--sk-home-ui-active) 50%, var(--sk-home-ui-surface));\r
  border-top: 1px solid var(--sk-home-ui-line);\r
  border-bottom: 1px solid var(--sk-home-ui-line);\r
}\r
\r
.orders-group-divider:first-child {\r
  border-top: 0;\r
}\r
\r
.orders-group-divider__name {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 7px;\r
  font-family: var(--sk-font-heading);\r
  font-size: 11px;\r
  font-weight: 700;\r
  letter-spacing: 0.05em;\r
  text-transform: uppercase;\r
  color: var(--sk-home-ui-accent);\r
}\r
\r
.orders-group-divider__badge {\r
  font-size: 11px;\r
  font-weight: 600;\r
  color: var(--sk-home-ui-muted);\r
}\r
\r
.orders-row {\r
  display: grid;\r
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 1.2fr) minmax(0, 1.1fr) minmax(0, 0.95fr) minmax(0, 1.35fr);\r
  align-items: center;\r
  gap: 16px;\r
  padding: 12px 18px;\r
  background: var(--sk-home-ui-surface);\r
  transition: background 0.15s ease;\r
}\r
\r
.orders-row + .orders-row {\r
  border-top: 1px solid var(--sk-home-ui-line);\r
}\r
\r
.orders-row:hover {\r
  background: var(--sk-ds-surface);\r
}\r
\r
.orders-row__cell {\r
  min-width: 0;\r
}\r
\r
.orders-row__cell--product {\r
  display: flex;\r
  align-items: center;\r
  gap: 12px;\r
}\r
\r
.orders-row__thumb-wrap {\r
  width: 42px;\r
  height: 42px;\r
  flex-shrink: 0;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--sk-home-ui-line);\r
  background: var(--sk-ds-inset);\r
  padding: 3px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  overflow: hidden;\r
}\r
\r
.orders-row__thumb {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: contain;\r
     object-fit: contain;\r
  -webkit-user-select: none;\r
     -moz-user-select: none;\r
          user-select: none;\r
}\r
\r
.orders-row__product-info {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 1px;\r
  min-width: 0;\r
}\r
\r
.orders-row__title {\r
  font-family: var(--sk-font-heading);\r
  font-size: 0.875rem;\r
  font-weight: 700;\r
  line-height: 1.25;\r
  color: var(--sk-home-ui-text);\r
  margin: 0;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.orders-row__sub {\r
  font-size: 0.75rem;\r
  color: var(--sk-home-ui-muted);\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.orders-row__details-hint {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 4px;\r
  font-size: 10.5px;\r
  font-weight: 600;\r
  color: var(--sk-home-ui-accent);\r
  margin-top: 2px;\r
}\r
\r
.orders-row__cell--order {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 3px;\r
}\r
\r
.orders-row__order-id {\r
  font-family: var(--sk-font-heading);\r
  font-size: 0.75rem;\r
  font-weight: 700;\r
  color: var(--sk-home-ui-text);\r
  font-variant-numeric: tabular-nums;\r
  max-width: 150px;\r
  white-space: nowrap;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.orders-row__method {\r
  display: inline-flex;\r
  align-items: center;\r
  font-size: 10.5px;\r
  font-weight: 600;\r
  padding: 1px 6px;\r
  border-radius: var(--sk-r-sm, 6px);\r
  border: 1px solid var(--sk-home-ui-line);\r
  background: var(--sk-ds-surface);\r
  color: var(--sk-home-ui-muted);\r
}\r
\r
.orders-row__cell--date {\r
  display: flex;\r
  align-items: center;\r
}\r
\r
.orders-row__date {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 6px;\r
  font-size: 0.75rem;\r
  color: var(--sk-home-ui-muted);\r
  font-variant-numeric: tabular-nums;\r
}\r
\r
.orders-row__cell--status {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 3px;\r
}\r
\r
.orders-row__status-badge {\r
  border-radius: var(--sk-r-sm, 6px);\r
}\r
\r
\r
.orders-row__cell--actions {\r
  display: flex;\r
  align-items: center;\r
  justify-content: flex-end;\r
}\r
\r
.orders-row__actions {\r
  display: flex;\r
  align-items: center;\r
  justify-content: flex-end;\r
  gap: 8px;\r
}\r
\r
.orders-row__btn {\r
  border-radius: var(--sk-r-sm, 6px);\r
  min-height: 32px;\r
  height: 32px;\r
  padding: 0 12px;\r
  font-size: 11.5px;\r
  font-weight: 700;\r
  white-space: nowrap;\r
}\r
\r
@media (max-width: 899px) {\r
  .orders-toolbar {\r
    flex-direction: column;\r
    align-items: stretch;\r
    gap: 10px;\r
    padding: 12px;\r
  }\r
\r
  .orders-toolbar__filters {\r
    display: grid;\r
    grid-template-columns: repeat(3, minmax(0, 1fr));\r
    width: 100%;\r
  }\r
\r
  .orders-toolbar__pill {\r
    justify-content: center;\r
    padding: 6px 4px;\r
    font-size: 11px;\r
  }\r
\r
  .orders-toolbar__search-wrap {\r
    min-width: 0;\r
    width: 100%;\r
  }\r
\r
  .orders-toolbar__refresh-btn {\r
    width: 100%;\r
    justify-content: center;\r
  }\r
\r
  .orders-sheet__head {\r
    display: none;\r
  }\r
\r
  .orders-row {\r
    grid-template-columns: minmax(0, 1fr) auto;\r
    gap: 8px 12px;\r
    padding: 12px 14px;\r
  }\r
\r
  .orders-row__cell--product {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .orders-row__title {\r
    white-space: normal;\r
  }\r
\r
  .orders-row__cell--order {\r
    flex-direction: row;\r
    flex-wrap: wrap;\r
    align-items: center;\r
    gap: 6px;\r
  }\r
\r
  .orders-row__cell--status {\r
    align-items: flex-end;\r
    justify-content: flex-end;\r
  }\r
\r
  .orders-row__cell--date {\r
    grid-column: 1 / -1;\r
  }\r
\r
  .orders-row__cell--actions {\r
    grid-column: 1 / -1;\r
    justify-content: stretch;\r
    padding-top: 4px;\r
  }\r
\r
  .orders-row__actions {\r
    width: 100%;\r
  }\r
\r
  .orders-row__btn {\r
    flex: 1;\r
    min-height: 36px;\r
    height: 36px;\r
    font-size: 12px;\r
  }\r
}\r
\r
\r
\r
\r
.store-guide__scenario { margin: 18px 0; padding: 16px; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-sm, 6px); }\r
.store-guide__scenario h4 { margin: 0 0 8px; font-size: 13px; color: var(--sk-home-ui-text); }\r
.store-guide__scenario h4:not(:first-child) { margin-top: 16px; }\r
.store-guide__scenario p { margin: 0; color: var(--sk-home-ui-muted); }\r
.collection-guide { padding: 20px; display: grid; gap: 16px; border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-sm, 6px); background: var(--sk-ds-surface); color: var(--sk-ds-t1); }\r
.collection-guide h3 { margin: 0 0 8px; font-size: 15px; }\r
.collection-guide p, .collection-guide ol { margin: 0; font-size: 13px; line-height: 1.65; color: var(--sk-ds-t2); }\r
.collection-guide__actions { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 10px; }\r
.collection-guide__actions details { flex: 1 1 240px; }\r
.collection-guide__actions summary { display: flex; align-items: center; justify-content: space-between; min-height: 44px; padding: 10px 14px; border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-sm, 6px); cursor: pointer; font-size: 13px; }\r
.collection-guide__actions summary::-webkit-details-marker { display: none; }\r
.collection-guide__actions summary:focus-visible { outline: 2px solid var(--sk-accent); outline-offset: 2px; }\r
.collection-guide__actions .sk-btn { min-height: 44px; }\r
.collection-guide__actions ol { list-style: decimal; padding: 12px 12px 0 28px; }\r
.collection-guide__support { display: grid; gap: 16px; min-width: 0; }\r
@media (max-width: 767px) { .collection-guide { padding: 16px; } .collection-guide__actions > * { width: 100%; } }\r
\r
.home-storefront {\r
  position: relative;\r
  isolation: isolate;\r
}\r
\r
.home-line-backdrop {\r
  position: absolute;\r
  inset: 0;\r
  z-index: -1;\r
  overflow: hidden;\r
  pointer-events: none;\r
  opacity: .14;\r
}\r
\r
html:not(.dark) .home-line-backdrop {\r
  display: none;\r
}\r
\r
.home-line-backdrop img {\r
  width: 100%;\r
  height: 100%;\r
  -o-object-fit: cover;\r
     object-fit: cover;\r
  transform: scale(1.025);\r
  filter: blur(6px);\r
}\r
\r
\r
.home-storefront .home-benefits { width: var(--sk-page-col); margin-inline: auto; }\r
.home-shopping-layout {\r
  --home-edge-gap: clamp(20px, 2.4vh, 32px);\r
  padding-top: var(--home-edge-gap);\r
  padding-bottom: var(--home-edge-gap);\r
}\r
.home-shopping-layout > .home-flow { min-width: 0; }\r
\r
.home-storefront[data-line-focus="false"] #home-catalog {\r
  min-height: calc(100dvh - var(--rv-store-header-h, 118px) - (var(--home-edge-gap, 28px) * 2));\r
  display: flex;\r
  flex-direction: column;\r
}\r
.home-storefront[data-line-focus="false"] #home-catalog .home-inline-category-panel {\r
  flex: 1 1 auto;\r
  display: flex;\r
  flex-direction: column;\r
  margin-top: clamp(14px, 1.8vh, 22px);\r
}\r
.home-storefront[data-line-focus="false"] #home-catalog .home-inline-category-panel > div:last-child,\r
.home-storefront[data-line-focus="false"] #home-catalog .home-icp-products,\r
.home-storefront[data-line-focus="false"] #home-catalog .home-icp-products > section,\r
.home-storefront[data-line-focus="false"] #home-catalog .home-rail-track-wrapper:not([hidden]) {\r
  flex: 1 1 auto;\r
  display: flex;\r
  flex-direction: column;\r
}\r
.home-storefront[data-line-focus="false"] #home-catalog .home-uni-grid.home-offers-rail {\r
  flex: 1 1 auto;\r
  padding-bottom: 4px;\r
  min-height: clamp(380px, calc(100dvh - var(--rv-store-header-h, 118px) - 245px), 560px);\r
}\r
@media (max-width: 1023px) {\r
  .home-shopping-layout {\r
    --home-edge-gap: 14px;\r
  }\r
  .home-storefront[data-line-focus="false"] #home-catalog {\r
    min-height: calc(100dvh - var(--rv-store-header-h, 108px) - var(--rv-bottom-nav-h, 56px) - env(safe-area-inset-bottom, 0px) - (var(--home-edge-gap, 14px) * 2));\r
  }\r
  .home-storefront[data-line-focus="false"] #home-catalog .home-uni-grid.home-offers-rail {\r
    min-height: clamp(320px, calc(100dvh - var(--rv-store-header-h, 108px) - var(--rv-bottom-nav-h, 56px) - 255px), 470px);\r
  }\r
  .home-storefront[data-line-focus="false"] .home-uni-card__media {\r
    min-height: clamp(185px, 28dvh, 270px);\r
  }\r
}\r
\r
.home-rail-track-wrapper[hidden] { display: none; }\r
.home-line-backdrop img { position: absolute; inset: 0; }\r
@media (prefers-reduced-motion: no-preference) {\r
  .home-backdrop-frame { animation: home-catalog-fade .45s ease-out; }\r
}\r
@media (min-width: 900px) {\r
  .orders-sheet__head, .orders-row { grid-template-columns: repeat(5, minmax(0, 1fr)); }\r
  .orders-sheet__th, .orders-row__cell { text-align: center; }\r
  .orders-row .orders-row__cell, .orders-row__actions { justify-content: center; align-items: center; }\r
  .orders-row__actions { flex-wrap: wrap; }\r
}\r
\r
.home-storefront[data-line-focus="true"] .home-icp-header,\r
.home-storefront[data-line-focus="true"] .home-inline-category-panel:not(:has(.home-uni-expanded-shelf)) { display: none; }\r
\r
\r
.home-storefront[data-line-focus="true"] { --line-nav-gap: 16px; }\r
.home-storefront[data-line-focus="true"] .home-shopping-layout { padding-top: var(--line-nav-gap); }\r
.home-storefront[data-line-focus="true"] .home-flow,\r
.home-storefront[data-line-focus="true"] .home-icp-products { padding-top: 0; }\r
.home-storefront[data-line-focus="true"] .home-inline-category-panel { margin-top: 0; }\r
.home-storefront[data-line-focus="true"] .home-categories-back { display: flex; width: -moz-fit-content; width: fit-content; }\r
.home-storefront[data-line-focus="true"] .home-uni-expanded-shelf { margin-top: var(--line-nav-gap); }\r
\r
@media (min-width: 1024px) {\r
  .home-offers-rail:not(.home-uni-grid) { justify-content: start; }\r
  .home-uni-grid.home-offers-rail { grid-auto-columns: clamp(340px, 26vw, 420px); }\r
  .home-line-hero--selectable { padding: clamp(12px, 1.1vw, 18px); align-items: center; }\r
  .home-line-hero--selectable .home-line-hero__cover { width: 28%; height: clamp(112px, 9vw, 146px); }\r
  .home-line-hero--selectable .home-line-hero__title { font-size: clamp(1.375rem, 1.7vw, 1.625rem); }\r
}\r
\r
.home-storefront { --catalog-card-height: clamp(374px, 28vw, 420px); }\r
.home-storefront .home-offers-item .ml-product-card {\r
  box-sizing: border-box;\r
  flex: none;\r
  height: var(--catalog-card-height);\r
  min-height: var(--catalog-card-height);\r
}\r
.home-storefront .ml-product-card .ml-product-img-area,\r
.home-storefront .ml-product-card .ml-product-img-wrapper {\r
  height: auto;\r
  min-height: 0;\r
  flex: 1 1 0;\r
}\r
.home-storefront .ml-product-card .ml-product-info { flex: none; }\r
@media (min-width: 1024px) {\r
  .home-storefront .home-offers-rail:not(.home-uni-grid) { grid-auto-columns: clamp(310px, 23.5vw, 380px); }\r
}\r
\r
@media (max-width: 639px) {\r
  .home-storefront .home-flow,\r
  .home-storefront :is(.sk-title, .sk-lead, .sk-eyebrow, .home-uni-card, .home-line-hero, .home-categories-back, .catalog-toolbar__help, .home-rail-filter-btn, .ml-product-title) {\r
    font-family: system-ui, sans-serif;\r
  }\r
  .home-storefront .home-categories-back {\r
    font-size: 12px;\r
    font-weight: 600;\r
    letter-spacing: normal;\r
    text-transform: none;\r
  }\r
  .home-storefront :is(.catalog-toolbar__help, .home-rail-filter-btn) { font-size: 11px; }\r
  .home-storefront .home-line-hero__context { font-size: 11px; line-height: 1.35; }\r
  .home-storefront :is(.home-line-hero__title, .home-uni-card__title) { font-size: 17px; line-height: 1.24; }\r
  .home-storefront :is(.home-line-presentations__head p, .home-line-hero__slogan, .home-uni-card__desc, .sk-lead) {\r
    font-size: 13px;\r
    line-height: 1.5;\r
    text-wrap: pretty;\r
    overflow-wrap: anywhere;\r
  }\r
  .home-storefront :is(.home-line-hero__action, .home-uni-card__cta) { font-size: 13px; line-height: 1.35; }\r
}\r
\r
@keyframes sk-catalog-in {\r
  from { opacity: 0; transform: translateY(6px); }\r
  to { opacity: 1; transform: translateY(0); }\r
}\r
\r
.sk-catalog-reveal {\r
  animation: sk-catalog-in 260ms cubic-bezier(0.22, 1, 0.36, 1) both;\r
}\r
\r
@media (prefers-reduced-motion: reduce) {\r
  .sk-catalog-reveal { animation: none; }\r
}`;export{r as s};
