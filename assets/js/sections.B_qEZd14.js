const n=`/* skull-style-rev:sections:mw31d0g8 */
.home-flow {
  display: flex;
  flex-direction: column;
  row-gap: clamp(28px, 3vw, 40px);
  font-family: var(--sk-font-heading);
  padding-block: 16px 24px;
}

.home-flow > * { min-width: 0; }
.store-guides { display: grid; gap: 12px; }
.store-guide { min-width: 0; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-lg); background: var(--sk-home-ui-surface); color: var(--sk-home-ui-text); }
.store-guide > summary { display: flex; align-items: center; gap: 12px; min-height: 62px; padding: 18px 22px; list-style: none; cursor: pointer; font-size: 15px; font-weight: 700; color: var(--sk-home-ui-accent); }
.store-guide summary::-webkit-details-marker { display: none; }
.store-guide summary:focus-visible, .store-guide__questions summary:focus-visible { outline: 2px solid var(--sk-home-ui-accent); outline-offset: 3px; }
.store-guide summary > svg { flex-shrink: 0; }
.store-guide__chevron { margin-left: auto; color: var(--sk-home-ui-muted); }
.store-guide[open] > summary .store-guide__chevron { transform: rotate(180deg); }
.store-guide[open] > summary { border-bottom: 1px solid var(--sk-home-ui-line); }
.store-guide__body { padding: 22px; font-size: 13px; line-height: 1.7; }
.store-guide__body > .home-intro { margin-bottom: 20px; }
.store-guide:not([open]) .home-hero__art img { animation-play-state: paused; }
.store-guide__intro { margin: 0 0 20px; color: var(--sk-home-ui-muted); }
.store-guide__steps { list-style: none; margin: 0; padding: 0; }
.store-guide__steps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 36px; }
.store-guide__steps li { display: flex; align-items: flex-start; gap: 12px; }
.store-guide__steps li > svg { margin-top: 3px; flex-shrink: 0; color: var(--sk-home-ui-accent); }
.store-guide__steps h3 { margin: 0 0 5px; font-size: 14px; font-weight: 700; }
.store-guide__steps p, .store-guide__questions p { margin: 0; color: var(--sk-home-ui-muted); }
.home-line-presentations__head { position: relative; }
.home-line-presentations__head > div:first-child { flex: 1 1 100%; }
.home-line-presentations__tools { flex: 0 0 100%; min-width: 0; }
.catalog-toolbar { min-width: 0; }
.catalog-toolbar__row { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; min-width: 0; }
.catalog-toolbar__help { display: inline-flex; align-items: center; justify-content: center; gap: 5px; min-height: 34px; margin-left: auto; padding: 7px 10px; flex-shrink: 0; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-sm, 6px); background: var(--sk-home-ui-surface); color: var(--sk-home-ui-muted); font: 500 11px/1.3 var(--sk-font-heading); cursor: pointer; }
.catalog-toolbar__help:hover, .catalog-toolbar__help[aria-expanded="true"] { color: var(--sk-home-ui-accent); border-color: var(--sk-home-ui-accent); background: var(--sk-home-ui-active); }
.catalog-toolbar__help:focus-visible { outline: 2px solid var(--sk-home-ui-accent); outline-offset: 3px; }
.catalog-toolbar__help[aria-expanded="true"] > svg:last-child { transform: rotate(180deg); }
.catalog-toolbar__content { margin-top: 16px; border: 1px solid var(--sk-home-ui-line); background: var(--sk-home-ui-surface); color: var(--sk-home-ui-text); }
.catalog-toolbar__content[hidden] { display: none; }
.store-guide__category-heading > span { color: var(--sk-home-ui-muted); font-size: 12px; }
.store-guide__category-heading h3 { margin: 4px 0 8px; color: var(--sk-home-ui-accent); font-size: 20px; font-weight: 700; }
.store-guide__category-heading p { margin: 0; color: var(--sk-home-ui-muted); }
.store-guide__principles { margin-top: 20px; }
.store-guide__principles h4 { margin: 0 0 12px; font-size: 14px; font-weight: 700; }
.store-guide__principles ul { display: flex; flex-wrap: wrap; gap: 8px; padding: 0; margin: 0; list-style: none; }
.store-guide__principles li { display: flex; align-items: center; gap: 8px; padding: 9px 12px; border-radius: var(--sk-r-sm); background: color-mix(in srgb, var(--sk-home-ui-accent) 7%, transparent); }
.store-guide__principles li svg { color: var(--sk-home-ui-accent); }
.store-guide__questions { margin-top: 24px; }
.store-guide__questions > details { border-top: 1px solid var(--sk-home-ui-line); }
.store-guide__questions summary { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 48px; list-style: none; cursor: pointer; font-size: 13px; font-weight: 600; }
.store-guide__questions details[open] > summary svg { transform: rotate(180deg); }
.store-guide__questions details > div { padding: 0 0 16px; }
.store-guide__questions p + p { margin-top: 8px; }
@media (max-width: 767px) {
  .store-guide > summary { padding: 16px; font-size: 13px; }
  .store-guide__body { padding: 16px; }
  .store-guide__steps { grid-template-columns: minmax(0, 1fr); gap: 20px; }
}
.home-intro { width: 100%; }
.home-hero { position: relative; isolation: isolate; overflow: hidden; aspect-ratio: 4 / 1; min-height: 260px; border-radius: var(--sk-r-lg); background: var(--sk-palette-teal-101715); color: var(--sk-palette-neutral-f3f7f5); }
.home-hero__art { position: absolute; inset: 0; z-index: -2; overflow: hidden; }
.home-hero__art picture, .home-hero__art img { display: block; width: 100%; height: 100%; }
.home-hero__art img { -o-object-fit: cover; object-fit: cover; animation: home-hero-ken-burns 9s ease-in-out infinite alternate; }
.home-hero::before { content: ''; position: absolute; inset: 0; z-index: -1; background: linear-gradient(90deg, color-mix(in srgb, var(--sk-palette-teal-050807) 85%, transparent), color-mix(in srgb, var(--sk-palette-teal-050807) 30%, transparent) 54%, transparent 75%); pointer-events: none; }
.home-hero__content { min-height: 100%; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: clamp(24px, 3vw, 44px); max-width: 57%; gap: 12px; }
.home-hero__eyebrow { margin: 0; color: var(--sk-palette-neutral-a9b5b0); font-size: clamp(8px, .8vw, 11px); font-weight: 600; letter-spacing: .13em; line-height: 1.5; }
.home-hero h1 { margin: 0; font-family: var(--sk-font-heading); font-size: clamp(24px, 3vw, 44px); font-weight: 800; line-height: 1.13; letter-spacing: -.035em; color: var(--sk-palette-neutral-f3f7f5); }
.home-hero h1 span { color: var(--sk-palette-neutral-f3f7f5); white-space: nowrap; }
.home-hero__description { margin: 0; max-width: 43ch; color: var(--sk-palette-neutral-a9b5b0); font-size: clamp(11px, 1vw, 14px); line-height: 1.6; }
.home-benefits { list-style: none; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; margin: 0; padding: 24px 0; border-bottom: 1px solid var(--sk-ds-line); }
.home-benefits li { display: flex; align-items: center; justify-content: center; gap: 12px; min-width: 0; }
.home-benefits svg { flex: none; color: var(--sk-home-ui-accent); }
.home-benefits strong { display: block; color: var(--sk-ds-t1); font-size: 13px; font-weight: 600; line-height: 1.5; }
.home-benefits span { display: block; margin-top: 3px; color: var(--sk-ds-t2); font-size: 10px; line-height: 1.5; }
@keyframes home-hero-ken-burns { from { transform: scale(1); } to { transform: scale(1.06); } }
@media (max-width: 767px) {
  .home-hero { aspect-ratio: 1; min-height: 0; }
  .home-hero::before { background: linear-gradient(0deg, color-mix(in srgb, var(--sk-palette-teal-050807) 95%, transparent), color-mix(in srgb, var(--sk-palette-teal-050807) 70%, transparent) 30%, transparent 78%); }
  .home-hero__content { position: absolute; inset: auto 0 0; min-height: 0; max-width: none; padding: 18px; gap: 8px; }
  .home-hero h1 { font-size: clamp(20px, 5.5vw, 28px); max-width: 18ch; }
  .home-hero__eyebrow { font-size: 8px; letter-spacing: .08em; }
  .home-hero__description { font-size: 11px; max-width: 36ch; }
  .home-benefits { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px 14px; }
  .home-benefits li { justify-content: flex-start; gap: 10px; }
  .home-benefits strong { font-size: 11px; }
  .home-benefits span { font-size: 9px; }
}

.home-flow .sk-title { font-size: clamp(1.5rem, 2.3vw, 2rem); font-weight: 700; line-height: 1.2; letter-spacing: -.025em; }
.home-flow .sk-lead { max-width: 65ch; font-size: clamp(.875rem, 1vw, .9375rem); line-height: 1.65; color: var(--sk-ds-t2); }
.home-flow .sk-eyebrow { font-size: .75rem; font-weight: 600; letter-spacing: .03em; text-transform: none; }
.home-flow .ml-product-card .ml-product-title { font-size: .875rem; font-weight: 600; line-height: 1.45; min-height: 2.9em; max-height: 2.9em; letter-spacing: -.01em; }

.home-rail-track-wrapper {
  position: relative;
  width: 100%;
}

.home-rail-track-wrapper > .home-offers-rail {
  padding-inline: var(--sk-rail-inset, 16px) var(--sk-rail-end-inset, 16px);
  scroll-padding-inline: var(--sk-rail-inset, 16px) var(--sk-rail-end-inset, 16px);
}

.home-rail-progress-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 8px;
  width: 100%;
}

.home-rail-progress-track {
  width: 120px;
  height: 4px;
  background: color-mix(in srgb, var(--sk-palette-blue-94a3b8) 20%, transparent);
  border-radius: var(--sk-r-sm, 6px);
  overflow: hidden;
  position: relative;
}

.home-rail-progress-thumb {
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, var(--sk-accent), var(--sk-ds-accent));
  border-radius: var(--sk-r-sm, 6px);
  transition: transform 0.08s ease-out;
  box-shadow: 0 0 8px color-mix(in srgb, var(--sk-ds-accent) 40%, transparent);
}

:root:not(.dark) .home-rail-progress-track {
  background: color-mix(in srgb, var(--sk-palette-blue-64748b) 22%, transparent);
}

.home-offers-rail {
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min(78vw, 300px);
  gap: 14px;
  align-items: stretch;
  padding: 4px var(--sk-rail-end-inset, 2px) 12px var(--sk-rail-inset, 2px);
  scroll-padding-inline: 4px;
  cursor: grab;
  -moz-user-select: none;
       user-select: none;
  -webkit-user-select: none;
  touch-action: pan-y pinch-zoom;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
  scroll-behavior: auto;
  scroll-snap-type: none;
}

.home-offers-rail::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

.home-offers-rail[data-rail-dragging="true"],
.home-offers-rail[data-rail-interacting="true"] {
  cursor: grabbing;
  scroll-snap-type: none !important;
}

.home-offers-rail[data-rail-drifting="true"],
.home-offers-rail[data-rail-dragging="true"],
.home-offers-rail[data-rail-interacting="true"] { scroll-behavior: auto !important; }
.home-offers-rail[data-rail-loop="true"] { scroll-snap-type: none !important; scroll-behavior: auto !important; }

@media (pointer: coarse) {
  .home-offers-rail { cursor: auto; }
}

.home-offers-item {
  min-width: 0;
  display: flex;
  flex-direction: column;
  scroll-snap-align: none;
  scroll-snap-stop: normal;
}

@media (min-width: 768px) {
  .home-offers-rail {
    grid-auto-columns: var(--sk-rail-card-width, 300px);
    gap: 18px;
    scroll-behavior: auto !important;
    scroll-snap-type: none !important;
  }

  .home-offers-item {
    scroll-snap-align: none !important;
  }
}

.home-offers-item > * { flex: 1; }

.home-uni-grid {
  grid-template-columns: none;
}

.home-uni-item { min-width: 0; }

.home-uni-card {
  position: relative;
  letter-spacing: normal;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--sk-ds-line);
  border-radius: var(--sk-r-lg);
  background: var(--sk-ds-surface);
  color: var(--sk-ds-t1);
  text-align: left;
  cursor: pointer;
  transition: border-color var(--sk-t-base), background var(--sk-t-base), box-shadow var(--sk-t-base);
}

.home-uni-card[data-rail-visible="true"]:hover {
  border-color: color-mix(in srgb, var(--sk-ds-accent) 45%, var(--sk-ds-line));
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent);
}

html.dark .home-uni-card {
  border: 1px solid var(--sk-palette-teal-26342f);
  background: var(--sk-palette-teal-101715);
  color: var(--sk-palette-neutral-f3f7f5);
}

html.dark .home-uni-card[data-rail-visible="true"]:hover {
  border-color: color-mix(in srgb, var(--sk-ds-accent) 45%, var(--sk-palette-teal-26342f));
  box-shadow: 0 8px 24px color-mix(in srgb, var(--sk-palette-teal-050807) 80%, transparent);
}

.home-offers-rail :is(.ml-product-card, .home-uni-card) {
  border-width: 1px !important;
  box-shadow: none !important;
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
  transform: none !important;
  filter: none;
}
.home-offers-rail .ml-product-card .ml-product-img {
  transform: none !important;
  filter: none;
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
}
.home-offers-rail :is(.ml-product-card, .home-uni-card):not([data-rail-visible="true"]):not([data-mobile-focused="true"]) {
  z-index: auto !important;
}
.home-offers-rail :is(.ml-product-card, .home-uni-card):not([data-rail-visible="true"]):not([data-mobile-focused="true"])::after {
  opacity: 0 !important;
  transition: none !important;
}
@media (max-width: 768px) {
  .home-offers-rail .home-uni-card {
    border-color: var(--sk-ds-line) !important;
    box-shadow: none !important;
    transition: none !important;
  }
  .home-offers-rail :is(.ml-product-card, .home-uni-card)[data-mobile-focused="true"] {
    border-color: var(--sk-ds-line) !important;
    box-shadow: none !important;
    z-index: 5;
  }
  .home-offers-rail :is(.ml-product-card, .home-uni-card)::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid var(--sk-card-active-bd, var(--sk-ds-accent));
    border-radius: inherit;
    box-shadow: none;
    pointer-events: none;
    z-index: 6;
    opacity: 0;
    transition: none !important;
    transition-duration: 0ms !important;
  }
  .home-offers-rail :is(.ml-product-card, .home-uni-card)[data-mobile-focused="true"]::after {
    opacity: 1;
  }
}
.home-offers-rail .ml-product-card.ml-product-card:focus-visible {
  outline: 2px solid var(--sk-ds-accent);
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  .home-offers-rail :is(.ml-product-card, .home-uni-card)::after {
    transition: none !important;
    transition-duration: 0ms !important;
  }
}

.home-uni-card[data-expanded="true"][data-rail-visible="true"] {
  border-color: var(--sk-ds-accent);
  background: var(--sk-ds-surface);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 30%, transparent);
}

html.dark .home-uni-card[data-expanded="true"][data-rail-visible="true"] {
  background: var(--sk-palette-teal-101715);
}

.home-uni-card:focus-visible {
  outline: 2px solid var(--sk-ds-accent);
  outline-offset: 3px;
}

.home-uni-card__body {
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  flex: 1;
  padding: 16px;
}
.home-offers-rail:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 2px; }

@keyframes homeUniCoverFadeIn {
  0% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}

.home-uni-card__media { display: block; position: relative; width: 100%; aspect-ratio: 2 / 1; background: var(--sk-ds-surface-2); overflow: hidden; }
.home-uni-card__media-img,
.home-uni-card__media img { display: block; width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; animation: homeUniCoverFadeIn .18s ease-out both; }
.home-uni-card__lines { position: absolute; right: 10px; bottom: 10px; padding: 4px 9px; border-radius: var(--sk-r-sm); background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 82%, transparent); border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 14%, transparent); color: var(--sk-palette-neutral-ffffff); font-size: var(--sk-text-xs); font-weight: 700; letter-spacing: 0.02em; font-variant-numeric: tabular-nums; z-index: 5; box-shadow: 0 2px 8px color-mix(in srgb, var(--sk-palette-neutral-000000) 40%, transparent); }

.home-uni-card__eyebrow {
  font-size: .75rem;
  color: var(--sk-ds-t2);
}

.home-uni-card__title {
  font-family: var(--sk-font-heading);
  font-size: clamp(.9375rem, 1.2vw, 1.0625rem);
  font-weight: 700;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.home-uni-card__desc {
  font-size: .8125rem;
  line-height: 1.55;
  color: var(--sk-ds-t2);
}

.home-uni-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding-top: 6px;
  font-size: var(--sk-text-xs);
  font-weight: 700;
  color: var(--sk-ds-accent);
}

.home-uni-expanded-shelf {
  overflow-anchor: none;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--sk-ds-line);
  scroll-margin-top: 16px;
}

.home-offers-rail[data-single-product="true"] {
  justify-content: center;
}

.home-catalog-opening {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr;
  animation: home-catalog-expand 160ms cubic-bezier(.16, 1, .3, 1) both;
}
.home-catalog-opening__content {
  min-width: 0;
  min-height: 0;
  animation: home-catalog-content 160ms cubic-bezier(.16, 1, .3, 1);
}
.home-catalog-products { margin-top: 24px; }
@keyframes home-catalog-expand {
  from { grid-template-rows: 0fr; }
  to { grid-template-rows: 1fr; }
}
@keyframes home-catalog-content {
  from { overflow: hidden; opacity: 0; transform: translateY(10px); }
  to { overflow: hidden; opacity: 1; transform: translateY(0); }
}
@keyframes home-catalog-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .home-catalog-opening { animation: home-catalog-fade 360ms ease-out both; }
  .home-catalog-opening__content { animation: none; }
}
.home-line-presentations { margin-bottom: 20px; }
.home-line-presentations__head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 16px; }
.home-line-presentations__head h3 { color: var(--sk-ds-t1); font-family: var(--sk-font-heading); font-size: clamp(1.125rem, 2vw, 1.5rem); font-weight: 700; line-height: 1.3; }
.home-line-presentations__head p { color: var(--sk-ds-t2); font-size: var(--sk-text-sm); line-height: 1.5; margin-top: 6px; }
.home-line-presentations__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.home-line-hero { display: flex; align-items: center; gap: 28px; padding: 24px; margin-bottom: 20px; border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-lg); background: var(--sk-ds-surface); text-align: left; color: var(--sk-ds-t1); min-width: 0; }
html.dark .home-line-hero { border-color: var(--sk-palette-teal-26342f); background: var(--sk-palette-teal-101715); color: var(--sk-palette-neutral-f3f7f5); }
.home-line-hero__cover { width: min(32%, 300px); height: 200px; flex: 0 0 auto; -o-object-fit: cover; object-fit: cover; border-radius: var(--sk-r-md); }
.home-line-hero__content { min-width: 0; flex: 1; }
.home-line-hero__context { display: block; font-size: .75rem; color: var(--sk-ds-t2); margin-bottom: 8px; }
.home-line-hero__title { display: block; font-family: var(--sk-font-heading); font-size: clamp(1.375rem, 2vw, 1.75rem); font-weight: 700; letter-spacing: -.02em; line-height: 1.25; color: var(--sk-ds-t1); }
.home-line-hero__slogan { max-width: 65ch; margin-top: 10px; font-size: var(--sk-text-sm); line-height: 1.65; color: var(--sk-ds-t2); }
html.dark .home-line-hero__context { color: var(--sk-palette-neutral-a9b5b0); }
html.dark .home-line-hero__title { color: var(--sk-palette-neutral-f3f7f5); }
html.dark .home-line-hero__slogan { color: var(--sk-palette-neutral-a9b5b0); }
.home-line-hero--selectable { width: 100%; padding: 18px; gap: 18px; margin: 0; align-items: flex-start; cursor: pointer; transition: border-color var(--sk-t-base), background var(--sk-t-base); }
.home-line-hero--selectable .home-line-hero__cover { width: 32%; height: 160px; }
.home-line-hero--selectable .home-line-hero__title { font-size: clamp(1.125rem, 2vw, 1.375rem); font-weight: 700; line-height: 1.2; letter-spacing: -.015em; }
.home-line-hero--selectable .home-line-hero__context { font-size: .6875rem; font-weight: 500; line-height: 1.4; margin-bottom: 6px; }
.home-line-hero--selectable .home-line-hero__slogan { font-size: .8125rem; line-height: 1.55; margin-top: 8px; }
.home-line-hero--selectable .home-line-hero__action { font-size: .75rem; line-height: 1.4; margin-top: 10px; }
.home-line-hero--selectable[aria-pressed="true"] { border-color: var(--sk-ds-accent); background: var(--sk-ds-surface); }
.home-line-hero--selectable:hover { border-color: color-mix(in srgb, var(--sk-ds-accent) 50%, var(--sk-ds-line)); }
html.dark .home-line-hero--selectable[aria-pressed="true"] { border-color: var(--sk-ds-accent); background: var(--sk-palette-teal-101715); }
html.dark .home-line-hero--selectable:hover { border-color: color-mix(in srgb, var(--sk-ds-accent) 50%, var(--sk-palette-teal-26342f)); }
.home-line-hero--selectable:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 3px; }
.home-line-hero__action { display: inline-flex; align-items: center; gap: 8px; margin-top: 14px; font-size: var(--sk-text-xs); font-weight: 700; color: var(--sk-ds-accent); }
.home-line-hero__action svg { width: 14px; height: 14px; }
@media (max-width: 767px) { .home-line-presentations__grid { grid-template-columns: minmax(0, 1fr); } }
@media (max-width: 1023px) {
  .home-line-hero--selectable {
    flex-direction: row;
    align-items: flex-start;
  }
  .home-line-hero--selectable .home-line-hero__cover {
    width: 36%;
    height: auto;
    aspect-ratio: 16 / 9;
    max-height: none;
    -o-object-fit: contain;
       object-fit: contain;
  }
}
@media (max-width: 639px) {
  .home-uni-card__body { padding: 13px; }
  .home-line-hero { flex-direction: column; align-items: stretch; padding: 16px; gap: 18px; }
  .home-line-hero__cover { width: 100%; height: auto; aspect-ratio: 16 / 9; max-height: none; -o-object-fit: contain; object-fit: contain; }
  .home-line-hero--selectable { flex-direction: row; align-items: flex-start; gap: 10px; padding: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .home-uni-card, .home-line-hero--selectable { transition: none; }
  .home-uni-card__media-img, .home-uni-card__media img { animation: none; }
  .home-offers-rail { scroll-behavior: auto !important; }
}
.home-inline-category-panel { margin-top: 20px; min-width: 0; }
.home-icp-header { display: grid; overflow: hidden; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-lg); background: var(--sk-home-ui-surface); }
.home-icp-header-tab { position: relative; min-width: 0; }
.home-icp-header-tab.active { background: var(--sk-home-ui-active); }
.home-icp-header-icon { color: var(--sk-home-ui-accent); }
.home-icp-header-title { font-family: var(--sk-font-heading); color: var(--sk-home-ui-text); font-size: .8125rem; font-weight: 600; line-height: 1.35; letter-spacing: -.01em; text-wrap: balance; }
.home-icp-header-count { color: var(--sk-home-ui-muted); }
.home-icp-products { padding: 20px 0 0; }

@media (max-width: 639px) {
  .home-icp-header-tab { padding: 12px; gap: 8px; }
  .home-icp-header-icon { width: 28px; height: 28px; }
  .home-icp-header-title { font-size: .6875rem; }
  .home-icp-header-count { font-size: var(--sk-text-2xs); }
  #home-catalog > div > .sk-section__head .sk-lead { font-size: var(--sk-text-ui); line-height: 1.55; }
}

.home-rail-filter-bar { display: flex; align-items: flex-start; justify-content: flex-start; padding: 6px 0 14px; min-width: 0; }
.home-filter-frame { display: inline-flex; align-items: stretch; max-width: 100%; min-width: 0; padding: 0; overflow: hidden; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-lg); background: var(--sk-home-ui-surface); }
.home-rail-filter-group { display: flex; align-items: stretch; min-width: 0; }
.home-filter-frame--lines { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.home-filter-frame--lines > .home-rail-filter-group { display: contents; }
.home-filter-frame > .home-rail-filter-group + .home-rail-filter-group { border-left: 1px solid var(--sk-home-ui-line); }
.home-rail-filter-btn { display: inline-flex; align-items: center; justify-content: center; flex: 1; gap: 5px; min-width: 0; min-height: 32px; padding: 7px 11px; border: 0; border-radius: 0; background: transparent; color: var(--sk-home-ui-muted); font-family: var(--sk-font-heading); font-size: 11px; font-weight: 500; line-height: 1.3; letter-spacing: 0; cursor: pointer; white-space: nowrap; -moz-user-select: none; user-select: none; -webkit-user-select: none; }
.home-rail-filter-btn:hover { color: var(--sk-home-ui-text); background: var(--sk-home-ui-raised); }
.home-rail-filter-btn[data-active="true"] { color: var(--sk-home-ui-accent); background: var(--sk-home-ui-active); }
.home-rail-filter-btn:focus-visible { outline: 2px solid var(--sk-home-ui-accent); outline-offset: -2px; }
.home-rail-filter-btn[data-active="true"] .home-rail-filter-icon { color: currentColor; }
.home-rail-filter-icon { flex-shrink: 0; }

@media (max-width: 639px) {
  .home-flow { row-gap: 18px; padding-block: 8px 16px; }
  .home-flow .sk-title { font-size: 18px; }
  .home-flow .sk-lead { font-size: 11px; }
  .home-flow .sk-eyebrow { font-size: 10px; }
  .catalog-toolbar__row { gap: 8px; }
  .catalog-toolbar__help { min-height: 32px; padding: 6px 8px; gap: 4px; font-size: 10px; border-radius: var(--sk-r-sm, 6px); }
  .catalog-toolbar__help > svg { width: 12px; height: 12px; }
  .home-rail-filter-btn { min-height: 30px; padding: 6px 4px; gap: 4px; font-size: 10px; }
  .home-rail-filter-icon { font-size: 9px; }
  .home-filter-frame--products { display: grid; grid-template-columns: minmax(0, 1fr); width: 100%; }
  .home-filter-frame--products > .home-rail-filter-group { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); }
  .home-filter-frame--products > .home-rail-filter-group + .home-rail-filter-group { border-left: 0; border-top: 1px solid var(--sk-home-ui-line); }
  .home-line-presentations__head { gap: 10px; margin-bottom: 12px; }
  .home-line-presentations__head p { margin-top: 4px; font-size: 11px; }
  .home-line-hero--selectable .home-line-hero__cover { width: 76px; height: 76px; flex-basis: 76px; -o-object-fit: cover; object-fit: cover; }
  .home-line-hero__context { font-size: 9px; margin-bottom: 4px; }
  .home-line-hero__title { font-size: 16px; }
  .home-line-hero__slogan { font-size: 11px; line-height: 1.5; margin-top: 6px; }
  .home-line-hero__action { font-size: 10px; margin-top: 8px; }
  .home-line-presentations__grid { gap: 10px; }
  .store-guides { gap: 8px; }
  .store-guide > summary { min-height: 44px; padding: 12px; gap: 8px; font-size: 11px; }
  .store-guide__body { padding: 12px; font-size: 11px; line-height: 1.6; }
  .store-guide__steps h3 { font-size: 12px; }
  .store-guide__category-heading h3 { font-size: 16px; }
}

.home-rail-empty-msg {
  padding: 32px 16px;
  text-align: center;
  background: color-mix(in srgb, var(--sk-palette-blue-94a3b8) 6%, transparent);
  border: 1px dashed color-mix(in srgb, var(--sk-palette-blue-94a3b8) 20%, transparent);
  border-radius: var(--sk-r-xl, 16px);
  margin-block: 8px 16px;
}

:root.dark .home-rail-empty-msg {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);
}

.home-offers-catalog-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--sk-r-sm, 6px);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--sk-palette-teal-059669);
  background: color-mix(in srgb, var(--sk-accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 25%, transparent);
  cursor: pointer;
  transition: all 0.2s ease;
}

:root.dark .home-offers-catalog-link {
  color: var(--sk-ds-accent);
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);
  border-color: color-mix(in srgb, var(--sk-accent) 30%, transparent);
}

.home-offers-catalog-link:hover {
  background: color-mix(in srgb, var(--sk-accent) 20%, transparent);
  border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent);
}

.home-inline-detail-slot {
  width: 100%;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--sk-home-ui-line);
}

.orders-page {
  min-height: 100%;
  color: var(--sk-ds-t1);
}

.orders-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border: 1px solid var(--sk-home-ui-line);
  border-radius: var(--sk-r-lg);
  background: var(--sk-home-ui-surface);
}

.orders-toolbar__filters {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--sk-ds-surface);
  padding: 3px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid var(--sk-home-ui-line);
}

.orders-toolbar__pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 30px;
  padding: 4px 10px;
  border-radius: var(--sk-r-sm, 6px);
  border: 0;
  background: transparent;
  color: var(--sk-home-ui-muted);
  font-family: var(--sk-font-heading);
  font-size: 11.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.orders-toolbar__pill:hover {
  color: var(--sk-home-ui-text);
  background: var(--sk-home-ui-raised);
}

.orders-toolbar__pill.active {
  background: var(--sk-home-ui-active);
  color: var(--sk-home-ui-accent);
}

.orders-toolbar__pill strong {
  font-size: 11px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 4px;
  background: color-mix(in srgb, currentColor 15%, transparent);
}

.orders-toolbar__search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
}

.orders-toolbar__search-icon {
  position: absolute;
  left: 11px;
  font-size: 12px;
  color: var(--sk-home-ui-muted);
  pointer-events: none;
}

.orders-toolbar__search-input {
  width: 100%;
  height: 36px;
  padding: 0 12px 0 32px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-ds-surface);
  color: var(--sk-home-ui-text);
  font-family: inherit;
  font-size: 12px;
  outline: none;
  transition: border-color 0.15s ease;
}

.orders-toolbar__search-input:focus {
  border-color: var(--sk-home-ui-accent);
}

.orders-toolbar__refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-ds-surface);
  color: var(--sk-home-ui-text);
  font-family: var(--sk-font-heading);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.orders-toolbar__refresh-btn:hover {
  background: var(--sk-home-ui-raised);
  color: var(--sk-home-ui-accent);
  border-color: color-mix(in srgb, var(--sk-home-ui-accent) 40%, var(--sk-home-ui-line));
}

.orders-sheet {
  border: 1px solid var(--sk-home-ui-line);
  border-radius: var(--sk-r-lg);
  background: var(--sk-home-ui-surface);
  overflow: hidden;
}

.orders-sheet__head {
  display: grid;
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 1.2fr) minmax(0, 1.1fr) minmax(0, 0.95fr) minmax(0, 1.35fr);
  align-items: center;
  gap: 16px;
  padding: 10px 18px;
  border-bottom: 1px solid var(--sk-home-ui-line);
  background: var(--sk-ds-surface);
}

.orders-sheet__th {
  font-family: var(--sk-font-heading);
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--sk-home-ui-muted);
}

.orders-sheet__th--right {
  text-align: right;
}

.orders-download-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.orders-group-divider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 8px 18px;
  background: color-mix(in srgb, var(--sk-home-ui-active) 50%, var(--sk-home-ui-surface));
  border-top: 1px solid var(--sk-home-ui-line);
  border-bottom: 1px solid var(--sk-home-ui-line);
}

.orders-group-divider:first-child {
  border-top: 0;
}

.orders-group-divider__name {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--sk-font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--sk-home-ui-accent);
}

.orders-group-divider__badge {
  font-size: 11px;
  font-weight: 600;
  color: var(--sk-home-ui-muted);
}

.orders-row {
  display: grid;
  grid-template-columns: minmax(0, 2.5fr) minmax(0, 1.2fr) minmax(0, 1.1fr) minmax(0, 0.95fr) minmax(0, 1.35fr);
  align-items: center;
  gap: 16px;
  padding: 12px 18px;
  background: var(--sk-home-ui-surface);
  transition: background 0.15s ease;
}

.orders-row + .orders-row {
  border-top: 1px solid var(--sk-home-ui-line);
}

.orders-row:hover {
  background: var(--sk-ds-surface);
}

.orders-row__cell {
  min-width: 0;
}

.orders-row__cell--product {
  display: flex;
  align-items: center;
  gap: 12px;
}

.orders-row__thumb-wrap {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-ds-inset);
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.orders-row__thumb {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.orders-row__product-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.orders-row__title {
  font-family: var(--sk-font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--sk-home-ui-text);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.orders-row__sub {
  font-size: 0.75rem;
  color: var(--sk-home-ui-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.orders-row__details-hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 10.5px;
  font-weight: 600;
  color: var(--sk-home-ui-accent);
  margin-top: 2px;
}

.orders-row__cell--order {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.orders-row__order-id {
  font-family: var(--sk-font-heading);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--sk-home-ui-text);
  font-variant-numeric: tabular-nums;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.orders-row__method {
  display: inline-flex;
  align-items: center;
  font-size: 10.5px;
  font-weight: 600;
  padding: 1px 6px;
  border-radius: var(--sk-r-sm, 6px);
  border: 1px solid var(--sk-home-ui-line);
  background: var(--sk-ds-surface);
  color: var(--sk-home-ui-muted);
}

.orders-row__cell--date {
  display: flex;
  align-items: center;
}

.orders-row__date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  color: var(--sk-home-ui-muted);
  font-variant-numeric: tabular-nums;
}

.orders-row__cell--status {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}

.orders-row__status-badge {
  border-radius: var(--sk-r-sm, 6px);
}

.orders-row__status-sub {
  font-size: 10px;
  font-weight: 500;
  line-height: 1.25;
}

.orders-row__cell--actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.orders-row__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.orders-row__btn {
  border-radius: var(--sk-r-sm, 6px);
  min-height: 32px;
  height: 32px;
  padding: 0 12px;
  font-size: 11.5px;
  font-weight: 700;
  white-space: nowrap;
}

@media (max-width: 899px) {
  .orders-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 12px;
  }

  .orders-toolbar__filters {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
  }

  .orders-toolbar__pill {
    justify-content: center;
    padding: 6px 4px;
    font-size: 11px;
  }

  .orders-toolbar__search-wrap {
    min-width: 0;
    width: 100%;
  }

  .orders-toolbar__refresh-btn {
    width: 100%;
    justify-content: center;
  }

  .orders-sheet__head {
    display: none;
  }

  .orders-row {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 8px 12px;
    padding: 12px 14px;
  }

  .orders-row__cell--product {
    grid-column: 1 / -1;
  }

  .orders-row__title {
    white-space: normal;
  }

  .orders-row__cell--order {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }

  .orders-row__cell--status {
    align-items: flex-end;
    justify-content: flex-end;
  }

  .orders-row__cell--date {
    grid-column: 1 / -1;
  }

  .orders-row__cell--actions {
    grid-column: 1 / -1;
    justify-content: stretch;
    padding-top: 4px;
  }

  .orders-row__actions {
    width: 100%;
  }

  .orders-row__btn {
    flex: 1;
    min-height: 36px;
    height: 36px;
    font-size: 12px;
  }
}




.store-guide__scenario { margin: 18px 0; padding: 16px; border: 1px solid var(--sk-home-ui-line); border-radius: var(--sk-r-sm, 6px); }
.store-guide__scenario h4 { margin: 0 0 8px; font-size: 13px; color: var(--sk-home-ui-text); }
.store-guide__scenario h4:not(:first-child) { margin-top: 16px; }
.store-guide__scenario p { margin: 0; color: var(--sk-home-ui-muted); }
.collection-guide { padding: 20px; display: grid; gap: 16px; border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-sm, 6px); background: var(--sk-ds-surface); color: var(--sk-ds-t1); }
.collection-guide h3 { margin: 0 0 8px; font-size: 15px; }
.collection-guide p, .collection-guide ol { margin: 0; font-size: 13px; line-height: 1.65; color: var(--sk-ds-t2); }
.collection-guide__actions { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 10px; }
.collection-guide__actions details { flex: 1 1 240px; }
.collection-guide__actions summary { display: flex; align-items: center; justify-content: space-between; min-height: 44px; padding: 10px 14px; border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-sm, 6px); cursor: pointer; font-size: 13px; }
.collection-guide__actions summary::-webkit-details-marker { display: none; }
.collection-guide__actions summary:focus-visible { outline: 2px solid var(--sk-accent); outline-offset: 2px; }
.collection-guide__actions .sk-btn { min-height: 44px; }
.collection-guide__actions ol { list-style: decimal; padding: 12px 12px 0 28px; }
.collection-guide__support { display: grid; gap: 16px; min-width: 0; }
@media (max-width: 767px) { .collection-guide { padding: 16px; } .collection-guide__actions > * { width: 100%; } }`;export{n as s};
