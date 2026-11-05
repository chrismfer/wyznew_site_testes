const n=`/* skull-style-rev:detail:mw2zokr3 */
@keyframes ml-fade-in {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes ml-badge-pop {
  0%   { transform: scale(0.85); opacity: 0; }
  60%  { transform: scale(1.08); }
  100% { transform: scale(1); opacity: 1; }
}

.ml-product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
  animation: none;
  height: 100%;
}

.ml-product-card.ml-product-card:is(:hover, :focus-visible, .mobile-focused, .ml-card-glow) {
  border-color: var(--sk-card-active-bd, var(--sk-ds-accent));
  box-shadow: var(--sk-card-active-shadow,
    0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 55%, transparent),
    0 0 16px 1px color-mix(in srgb, var(--sk-ds-accent) 32%, transparent),
    0 16px 38px color-mix(in srgb, var(--sk-palette-teal-050807) 85%, transparent));
  outline: none;
  z-index: 5;
}

html:not(.dark) .ml-product-card {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);
}

.ml-product-img-area {
  flex-shrink: 0;
}

.ml-product-card:is(:hover, :focus-visible, .mobile-focused) .ml-product-img {
  transform: scale(1.045);
}

@media (prefers-reduced-motion: reduce) {
  .ml-product-img { transition: none !important; transition-duration: 0ms !important; }
  .ml-product-card:is(:hover, :focus-visible, .mobile-focused) .ml-product-img {
    transform: none;
  }
}

.ml-badge-digital {
  gap: 4px;
}
html.dark .ml-badge-digital {
  background: linear-gradient(135deg, color-mix(in srgb, var(--sk-ds-accent) 12%, transparent), color-mix(in srgb, var(--sk-ds-accent) 24%, transparent));
  border-color: color-mix(in srgb, var(--sk-ds-accent) 32%, transparent);
}

.ml-favorite-btn {
  position: absolute;
  top: 34px;
  right: 8px;
  z-index: 12;
  width: 34px;
  height: 34px;
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 32%, transparent);
  border-radius: var(--sk-r-sm, 6px);
  background: color-mix(in srgb, var(--sk-palette-neutral-0a0a0c) 72%, transparent);
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 70%, transparent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 14px color-mix(in srgb, var(--sk-palette-neutral-000000) 22%, transparent);

  transition:
    transform 0.18s ease,
    color 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;

}

.ml-favorite-btn i {
  transition: transform 0.35s cubic-bezier(0, 0, 0.3, 1.5);
  transform: scale(1);
  display: block;
}

.ml-favorite-btn.active i {
  transform: scale(1.25);
}

.ml-favorite-btn:hover {
  transform: translateY(-1px) scale(1.06);
  color: var(--sk-palette-rose-ff4d6d);
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 92%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-rose-ff4d6d) 35%, transparent);
}
.ml-favorite-btn.active {
  color: var(--sk-palette-rose-ff4d6d);
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 96%, transparent);
  border-color: color-mix(in srgb, var(--sk-palette-rose-ff4d6d) 45%, transparent);
}
html:not(.dark) .ml-favorite-btn {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 86%, transparent);
  color: var(--sk-palette-neutral-555555);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 8%, transparent);
}
html:not(.dark) .ml-favorite-btn:hover,
html:not(.dark) .ml-favorite-btn.active {
  color: var(--sk-palette-rose-ff3b5f);
}

.ml-product-info {
  flex-grow: 1;
}
html.dark .ml-product-info {
  background: var(--sk-palette-neutral-0f0f11);
}



.ml-product-title {
  font-family: -apple-system, 'Proxima Nova', 'Roboto', Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0 0 4px;
}
html.dark .ml-product-title { color: var(--sk-palette-neutral-f3f7f5); }

.ml-price-login {
  font-size: 0.78rem;
  color: var(--sk-palette-neutral-888888);
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 5px;
}
.ml-price-free {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--sk-palette-green-00a650);
}
.ml-price-from { display: flex; flex-direction: column; gap: 2px; }
.ml-price-from-label { font-size: 0.65rem; color: var(--sk-palette-neutral-888888); text-transform: uppercase; letter-spacing: 0.05em; }
.ml-price-from-value { font-size: 1rem; font-weight: 700; color: var(--sk-accent); }
html.dark .ml-price-from-value { color: var(--sk-ds-accent); }

.ml-price-block {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 3px;
  line-height: 1.15;
}
.ml-price-original {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  min-height: 20px !important;
  height: 20px !important;
  line-height: 20px !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
}
.ml-price-old {
  font-size: 0.78rem;
  color: var(--sk-palette-blue-64748b);
  text-decoration: line-through;
  font-weight: 500;
  line-height: 1.15;
  margin: 0;
}
html.dark .ml-price-old { color: var(--sk-palette-blue-94a3b8); }
.ml-price-main {
  display: flex !important;
  align-items: baseline !important;
  gap: 6px !important;
  flex-wrap: nowrap !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.15 !important;
}
.ml-price-value {
  color: var(--sk-palette-neutral-333333);
  margin: 0;
}
html.dark .ml-price-value { color: var(--sk-palette-neutral-f3f7f5); }
.ml-price-value.vip { color: var(--sk-palette-orange-c8a700); }
html.dark .ml-price-value.vip { color: var(--sk-palette-orange-ffd700); }
.ml-price-vip-tag {
  font-size: 0.62rem;
  font-weight: 700;
  color: var(--sk-palette-neutral-ffffff);
  background: var(--sk-palette-orange-c8a700);
  padding: 2px 6px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}
.ml-price-installments {
  font-size: 0.74rem;
  color: var(--sk-palette-blue-64748b);
  font-weight: 500;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1.15 !important;
}
html.dark .ml-price-installments {
  color: var(--sk-palette-neutral-a9b5b0);
}
.ml-price-installments-highlight {
  color: var(--sk-palette-blue-64748b);
  font-weight: 700;
}
html.dark .ml-price-installments-highlight {
  color: var(--sk-palette-neutral-f3f7f5);
}

.ml-price-pix-badge {
  font-size: 0.58rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--sk-palette-green-00a650);
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--sk-palette-green-00a650) 25%, transparent);
  padding: 1.5px 5px;
  border-radius: 4px;
  margin-left: 2px;
  vertical-align: middle;
  line-height: 1.2;
  white-space: nowrap;
}
html.dark .ml-price-pix-badge {
  color: var(--sk-ds-accent);
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent);
  border-color: color-mix(in srgb, var(--sk-ds-accent) 30%, transparent);
}

.ml-action-buttons {
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
}
.ml-btn-primary {
  flex: 1;
  height: 38px;
  color: var(--sk-palette-neutral-ffffff);
  border: none;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
}
.ml-btn-primary:hover { box-shadow: 0 4px 12px color-mix(in srgb, var(--sk-palette-blue-3483fa) 40%, transparent); transform: translateY(-1px); }
.ml-btn-rescue {
  flex: 1;
  height: 38px;
  color: var(--sk-palette-neutral-ffffff);
  border: none;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;
}
.ml-btn-rescue:hover { transform: translateY(-1px); }

.ml-btn-primary.full-width,
.ml-btn-rescue.full-width,
.ml-btn-ghost.full-width {
  width: 100%;
  justify-content: center;
}

.skull-combo-wrapper > .ml-product-card {
  position: relative;
  z-index: 3;
  flex: 1;
  border-color: color-mix(in srgb, var(--sk-palette-red-ff6b00) 40%, transparent) !important;
  box-shadow: 0 4px 16px color-mix(in srgb, var(--sk-palette-red-ff6b00) 15%, transparent) !important;
}
.skull-combo-wrapper > .ml-product-card:hover {
  box-shadow: 0 8px 28px color-mix(in srgb, var(--sk-palette-red-ff6b00) 35%, transparent), 0 2px 8px color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-palette-orange-ff8700) 70%, transparent) !important;
}
.skull-license-wrapper > .ml-product-card {
  position: relative;
  z-index: 3;
  flex: 1;
  border-color: color-mix(in srgb, var(--sk-palette-blue-3483fa) 35%, transparent) !important;
}

@media (max-width: 640px) {
  .ml-product-title { font-size: 0.78rem; }
  .ml-price-value { font-size: 1.2rem; }
}

.ml-product-card {
  border-radius: var(--sk-r-lg);
  border: 1px solid var(--sk-border-1);
  background-color: var(--sk-bg-card);
  background-image: none;
  color: var(--sk-ds-t1);
  box-shadow: var(--sk-shadow-card-premium);
  isolation: isolate;
}

html:not(.dark) .ml-product-card {
  background-color: var(--sk-palette-neutral-ffffff);
  background-image: none;
  color: var(--sk-palette-blue-0f172a);
}

html.dark .ml-product-card {
  border-color: var(--sk-palette-teal-26342f);
  background-color: var(--sk-palette-teal-101715);
  color: var(--sk-palette-neutral-f3f7f5);
}

.ml-product-img-area {
  background: transparent;
}

.ml-product-img {
  padding: 0;
  filter: saturate(1.02) contrast(1.03);
}

.ml-product-info {
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 3%, transparent), color-mix(in srgb, var(--sk-palette-neutral-ffffff) 0.5%, transparent)),
    var(--sk-palette-blue-0d0f13);
}

html:not(.dark) .ml-product-info {

  background: var(--sk-palette-neutral-ffffff);
  background-image: none;
}

.ml-product-title {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 90%, transparent);
  text-transform: none;
  letter-spacing: 0;
}

html:not(.dark) .ml-product-title {
  color: color-mix(in srgb, var(--sk-palette-neutral-000000) 90%, transparent);
}

.ml-price-area {
  flex-grow: 0;
  display: flex;
  align-items: center;
}

.ml-btn-primary,
.ml-btn-rescue {
  border-radius: var(--sk-r-sm, 6px);
  background: linear-gradient(135deg, var(--sk-palette-cyan-006fc9) 0%, var(--sk-palette-cyan-008ecf) 48%, var(--sk-palette-teal-00a676) 100%);
  box-shadow: 0 8px 22px color-mix(in srgb, var(--sk-palette-cyan-0078d7) 24%, transparent);
}

.ml-btn-primary:hover,
.ml-btn-rescue:hover {
  background: linear-gradient(135deg, var(--sk-palette-cyan-007de3) 0%, var(--sk-palette-cyan-00a0df) 48%, var(--sk-accent) 100%);
}

@media (max-width: 640px) {
  .ml-product-card {
    border-radius: 9px;
  }

  .ml-product-img-wrapper {
    aspect-ratio: auto;
    min-height: 160px;
    height: 160px;
    padding: 0;
  }
  .ml-product-img-area {
    min-height: 208px;
    height: 208px;
  }

  .ml-product-info {
    padding: 10px;
    gap: 5px;
  }

  .ml-product-title {
    min-height: 2.6em;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .ml-price-area {
    min-height: 48px;
  }
}

@media (max-width: 380px) {
  .ml-product-info {
    padding: 9px;
  }
}

.ml-offer-timer {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--sk-palette-red-ff6b00);
  font-weight: 600;
}
html.dark .ml-offer-timer { color: var(--sk-palette-orange-ffaa55); }

.ml-detail-layout {
  display: grid;
}

.ml-gallery-col {
  display: flex;
  flex-direction: column;
}
.ml-main-image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: zoom-in;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease, box-shadow 0.25s ease;
}
.ml-main-image-container--line {

  border-width: 1.5px;
}
.ml-main-image {
  width: 100%;
  height: 100%;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.ml-main-image-container:hover .ml-main-image { transform: scale(1.02); }

.ml-line-chip {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
  padding: 4px 10px;
  border-radius: 999px;
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--sk-palette-blue-0b0d10);
  box-shadow: 0 6px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 28%, transparent);
  pointer-events: none;
}
.ml-main-image-overlay {
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 35%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--sk-palette-neutral-ffffff);
  font-size: 0.8rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.ml-main-image-container:hover .ml-main-image-overlay { opacity: 1; }
.ml-image-counter {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: color-mix(in srgb, var(--sk-palette-neutral-000000) 55%, transparent);
  color: var(--sk-palette-neutral-ffffff);
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}

.ml-thumbs-row {
  display: flex;
}
.ml-thumb-btn {
  border: 2px solid transparent;
  overflow: hidden;
  cursor: pointer;
  padding: 2px;
  transition: all 0.18s ease;
  flex-shrink: 0;
}
.ml-thumb-btn img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.ml-thumb-btn:hover { border-color: var(--sk-green, var(--sk-accent)); }

.ml-gallery-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.ml-gallery-action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  border: 1px solid var(--sk-palette-neutral-d0d0d0);
  background: var(--sk-palette-neutral-ffffff);
  cursor: pointer;
  transition: all 0.2s ease;
}
.ml-gallery-action-btn:hover { border-color: var(--sk-green, var(--sk-accent)); background: color-mix(in srgb, var(--sk-accent) 5%, transparent); }
.ml-gallery-action-btn.active { border-color: var(--sk-green, var(--sk-accent)); background: color-mix(in srgb, var(--sk-accent) 6%, transparent); }
html.dark .ml-gallery-action-btn { background: var(--sk-palette-neutral-151518); border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent); color: var(--sk-palette-neutral-aaaaaa); }
html.dark .ml-gallery-action-btn:hover { border-color: var(--sk-green-light, var(--sk-ds-accent)); color: var(--sk-green-light, var(--sk-ds-accent)); }
html.dark .ml-gallery-action-btn.active { border-color: var(--sk-green-light, var(--sk-ds-accent)); color: var(--sk-green-light, var(--sk-ds-accent)); }

.ml-info-col {
  display: flex;
  flex-direction: column;
}

.ml-detail-stars {
  flex-wrap: wrap;
}
.ml-detail-star-value {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--sk-palette-orange-f5a623);
  margin-left: 4px;
}
.ml-detail-star-count {
  font-size: 0.72rem;
  color: var(--sk-palette-blue-64748b);
  margin-left: 4px;
}
html.dark .ml-detail-star-count { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent); }

.home-icp-grid {
  overflow: visible;
  width: 100%;
  align-content: flex-start;
}

@media (max-width: 640px) {
  .home-icp-grid {
    width: min(100%, 460px);
    margin-inline: auto;
  }
}

.ml-price-credit-row {
  display: flex !important;
  align-items: center !important;
  gap: 4px !important;
  flex-wrap: wrap !important;
  width: 100% !important;
  margin: 0 !important;
}
.ml-price-cash-row {
  display: inline-flex !important;
  align-items: baseline !important;
  gap: 4px !important;
  flex-wrap: wrap !important;
  width: 100% !important;
}

.ml-product-card .ml-price-value,
.ml-product-card .ml-money.ml-price-value {
  font-size: 1.18rem !important;
  font-weight: 800 !important;
  line-height: 1.15 !important;
  letter-spacing: -0.02em !important;
  white-space: nowrap !important;
}
.ml-product-card .ml-price-pix-badge {
  font-size: 0.58rem !important;
  font-weight: 800 !important;
  padding: 1.5px 5px !important;
  letter-spacing: 0.03em !important;
  white-space: nowrap !important;
  align-self: center !important;
}

.ml-detail-page .sk-section__head.ml-sec-head {
  margin-bottom: 14px;
}
.ml-detail-page .ml-sec-head .sk-title.ml-sec-title {
  font-size: clamp(1.05rem, 2.2vw, 1.35rem);
}
.ml-detail-page .ml-sec-head .sk-lead {
  margin-top: 4px;
  font-size: var(--sk-text-sm, 0.8125rem);
}

.ml-description-content,
.ml-specs-content {
  font-size: var(--sk-text-md, 0.9375rem);
  line-height: 1.65;
  max-height: 220px;
  overflow: hidden;
  transition: max-height 0.35s ease;
  position: relative;
}
html.dark .ml-description-content,
html.dark .ml-specs-content { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 82%, transparent); }
.ml-description-content:not(.expanded)::after,
.ml-specs-content:not(.expanded)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(to bottom, transparent, var(--sk-palette-neutral-ffffff));
  pointer-events: none;
  z-index: 1;
}
html.dark .ml-description-content:not(.expanded)::after,
html.dark .ml-specs-content:not(.expanded)::after {
  background: linear-gradient(to bottom, transparent, var(--sk-palette-neutral-0f0f11));
}

.ml-description-content.expanded,
.ml-specs-content.expanded,
.ml-description-panel .ml-description-content.expanded,
.ml-detail-page .ml-description-content.expanded,
.ml-detail-page .ml-specs-content.expanded {
  max-height: none !important;
  overflow: visible !important;
}
.ml-description-content.expanded::after,
.ml-specs-content.expanded::after {
  display: none !important;
}
.ml-description-content p,
.ml-specs-content p { margin: 0 0 10px; }
.ml-description-content ul,
.ml-specs-content ul { padding-left: 20px; margin: 0 0 10px; }
.ml-description-content li,
.ml-specs-content li { margin-bottom: 6px; }
.ml-description-content h1,
.ml-description-content h2,
.ml-description-content h3,
.ml-specs-content h1,
.ml-specs-content h2,
.ml-specs-content h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--sk-palette-neutral-333333);
  margin: 12px 0 6px;
}
html.dark .ml-description-content h1,
html.dark .ml-description-content h2,
html.dark .ml-description-content h3,
html.dark .ml-specs-content h1,
html.dark .ml-specs-content h2,
html.dark .ml-specs-content h3 {
  color: var(--sk-palette-neutral-f1f1f1);
}

.ml-expand-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  border: 1px solid color-mix(in srgb, var(--sk-accent) 28%, transparent);
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.ml-expand-btn:hover { background: color-mix(in srgb, var(--sk-accent) 10%, transparent); }
html.dark .ml-expand-btn:hover { background: color-mix(in srgb, var(--sk-accent) 12%, transparent); }

.ml-detail-page {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.ml-breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}
.ml-breadcrumb-back {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.ml-breadcrumb-back:hover { background: color-mix(in srgb, var(--sk-accent) 8%, transparent); }
.ml-breadcrumb-sep { color: var(--sk-palette-neutral-cccccc); flex-shrink: 0; }
html.dark .ml-breadcrumb-sep { color: var(--sk-palette-neutral-555555); }
.ml-breadcrumb-item {
  color: var(--sk-palette-neutral-888888);
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
html.dark .ml-breadcrumb-item { color: var(--sk-palette-neutral-aaaaaa); }
.ml-breadcrumb-current {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--sk-palette-neutral-333333);
}
html.dark .ml-breadcrumb-current { color: var(--sk-palette-neutral-f1f1f1); }
.ml-breadcrumb-versions {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--sk-palette-green-00a650);
  background: color-mix(in srgb, var(--sk-palette-green-00a650) 10%, transparent);
  padding: 2px 8px;
  border-radius: 20px;
}
html.dark .ml-breadcrumb-versions { color: var(--sk-ds-accent); background: color-mix(in srgb, var(--sk-ds-accent) 10%, transparent); }

.ml-video-section {
  overflow: hidden;
  padding: var(--ml-detail-pad);
}
.ml-video-embed {
  padding: 0;
}
.ml-video-embed iframe {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 8px;
  border: none;
  display: block;
}

.ml-reviews-section {
  overflow: hidden;
}

.ml-related-section {
  margin: 20px 0 8px;

  padding: var(--ml-detail-pad) var(--ml-detail-pad) 8px;
  border-radius: 16px;
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-000000) 6%, transparent);
  background: var(--sk-palette-neutral-fafafa);
}
html.dark .ml-related-section {
  background: var(--sk-palette-neutral-0f0f11);
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);
}

.ml-related-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
}
@media (min-width: 640px) {
  .ml-related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 1280px) {
  .ml-related-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@keyframes card-bell-shake {
    0%   { transform: translateY(0) rotate(0deg); }
    5%   { transform: translateY(-6px) rotate(-3deg); }
    10%  { transform: translateY(-4px) rotate(3deg); }
    15%  { transform: translateY(-6px) rotate(-2.5deg); }
    20%  { transform: translateY(-3px) rotate(2deg); }
    25%  { transform: translateY(-5px) rotate(-1.5deg); }
    30%  { transform: translateY(-2px) rotate(1deg); }
    35%  { transform: translateY(-4px) rotate(-0.8deg); }
    40%  { transform: translateY(-1px) rotate(0.5deg); }
    45%  { transform: translateY(-3px) rotate(-0.3deg); }
    50%  { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(0) rotate(0deg); }
}

@keyframes card-neon-pulse {
    0%,
100% {
        box-shadow: 0 0 0 0 color-mix(in srgb, var(--sk-ds-accent) 0%, transparent),
                    0 0 18px 4px color-mix(in srgb, var(--sk-ds-accent) 45%, transparent),
                    0 2px 12px color-mix(in srgb, var(--sk-palette-neutral-000000) 15%, transparent);
        border-color: color-mix(in srgb, var(--sk-ds-accent) 70%, transparent);
    }
    50% {
        box-shadow: 0 0 0 6px color-mix(in srgb, var(--sk-ds-accent) 10%, transparent),
                    0 0 20px 5px color-mix(in srgb, var(--sk-ds-accent) 55%, transparent),
                    0 2px 18px color-mix(in srgb, var(--sk-palette-neutral-000000) 20%, transparent);
        border-color: var(--sk-ds-accent);
    }
}

.ml-card-ring {
    animation:
        card-bell-shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both,
        card-neon-pulse 0.7s ease-in-out 0.5s 3;
    border-color: color-mix(in srgb, var(--sk-ds-accent) 80%, transparent) !important;
    box-shadow: 0 0 15px 3px color-mix(in srgb, var(--sk-ds-accent) 45%, transparent) !important;
    z-index: 5;
}

.ml-card-glow {
    border-color: var(--sk-accent) !important;
    transition: border-color 0.3s ease;
}

html.dark .ml-card-ring {
    box-shadow: 0 0 18px 5px color-mix(in srgb, var(--sk-ds-accent) 50%, transparent) !important;
}
html.dark .ml-card-glow {
    border-color: var(--sk-ds-accent) !important;

}

.ml-detail-page {
  margin: 0 auto;
  padding: 0 clamp(12px, 2vw, 22px);
}

.ml-breadcrumb-back,
.ml-breadcrumb-current,
.ml-breadcrumb-item {
  font-family: var(--sk-font-body);
}

.ml-breadcrumb-back {
  border: 1px solid color-mix(in srgb, var(--sk-accent) 16%, transparent);
}

.ml-detail-layout {

  border-top: 1px solid color-mix(in srgb, var(--sk-palette-blue-111827) 8%, transparent);
}

.ml-purchase-card {
  align-self: start;
  display: flex;
  flex-direction: column;
  border: 1px solid color-mix(in srgb, var(--sk-palette-blue-111827) 8%, transparent);
}

.ml-purchase-offer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.ml-purchase-offer-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  border-radius: 999px;
  font-size: 10px;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
}

.ml-purchase-original {
  margin-top: 2px;
}

.ml-purchase-pricing {
  margin-top: 4px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ml-purchase-from {
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.35;
}

.ml-price-green {
  color: var(--sk-accent);
  font-weight: 700;
}

html.dark .ml-price-green {
  color: var(--sk-ds-accent);
}

.ml-purchase-installments {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--sk-palette-blue-64748b);
  margin-top: 3px;
  line-height: 1.3;
}

html.dark .ml-purchase-installments {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 52%, transparent);
}

.ml-purchase-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
  margin-bottom: 12px;
  width: 100%;
}

.ml-purchase-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  font-weight: 700;
  cursor: pointer;
}
.ml-purchase-primary:active:not(:disabled) {
  transform: scale(0.985);
}

.ml-purchase-all-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  min-height: 48px;
  padding: 0 16px;
  border-radius: var(--sk-r-sm, 6px);
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);
  background: transparent;
  color: var(--sk-palette-blue-1e293b);
  transition: transform .12s ease, background .14s ease, border-color .14s ease, color .14s ease;
  box-shadow: none;
}
.ml-purchase-all-btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--sk-accent) 5%, transparent);
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);
  color: var(--sk-ds-accent);
}
.ml-purchase-all-btn:active:not(:disabled) {
  transform: scale(0.985);
}
.ml-purchase-all-btn:disabled {
  cursor: not-allowed;
  opacity: 0.50;
  box-shadow: none !important;
}
html.dark .ml-purchase-all-btn {
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 42%, transparent);
  background: transparent;
  color: var(--sk-palette-blue-e2e8f0);
  box-shadow: none;
}
html.dark .ml-purchase-all-btn:hover:not(:disabled) {
  background: color-mix(in srgb, var(--sk-ds-accent) 6%, transparent);
  border-color: color-mix(in srgb, var(--sk-ds-accent) 70%, transparent);
  color: var(--sk-palette-neutral-ffffff);
}
.ml-purchase-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin-top: 2px;
  color: var(--sk-palette-blue-64748b);
  font-size: 0.74rem;
  font-weight: 750;
  line-height: 1.35;
}

.ml-purchase-note svg {
  color: var(--sk-palette-green-00a650);
  flex-shrink: 0;
}

html.dark .ml-purchase-note {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 58%, transparent);
}

.ml-product-facts-card {
  padding-top: 16px;
}

.ml-product-facts-card h3 {
  margin: 0 0 12px;
  line-height: 1;
}

.ml-product-facts-card dl {
  display: grid;
  margin: 0;
}

.ml-product-facts-card div {
  display: grid;
  gap: 12px;
  align-items: baseline;
}

.ml-product-facts-card dd {
  margin: 0;
  text-align: right;
  overflow-wrap: anywhere;
}

html.dark .ml-product-facts-card {
  border-top-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent);
}

.ml-main-image-container {

  border: 2px solid color-mix(in srgb, var(--sk-accent) 55%, transparent);
}

html.dark .ml-main-image-container {
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 30%, transparent),
    0 0 26px color-mix(in srgb, var(--sk-ds-accent) 26%, transparent);
}

.ml-specs-section,
.ml-video-section,
.ml-reviews-section {
  margin-bottom: 18px;
}
.ml-specs-section {
  padding: var(--ml-detail-pad);
}

.ml-description-content,
.ml-specs-content {
  color: var(--sk-light-t2);
}

.ml-expand-btn,
.ml-gallery-action-btn {
  min-height: 36px;
  border-radius: var(--sk-r-sm, 6px);
  font-weight: 800;
}

.ml-expand-btn {
  border-color: color-mix(in srgb, var(--sk-accent) 28%, transparent);
  color: var(--sk-green);
  background: color-mix(in srgb, var(--sk-accent) 4%, transparent);
}

html.dark .ml-expand-btn {
  border-color: color-mix(in srgb, var(--sk-accent) 28%, transparent);
  color: var(--sk-green-light);
  background: color-mix(in srgb, var(--sk-accent) 6%, transparent);
}

.ml-reviews-body {
  padding: var(--ml-detail-pad);
}

@keyframes ml-card-reflection-site-att {
  0%   { transform: skewX(-25deg) translateX(-300%); opacity: 0; }
  10%  { opacity: 0.8; }
  90%  { opacity: 0.8; }
  100% { transform: skewX(-25deg) translateX(300%); opacity: 0; }
}

.home-icp-grid {
  gap: 20px;
  margin: 10px 0;
}

.home-icp-grid .ml-product-card {
  width: 100%;
  min-height: 330px;
  height: auto;
  border-radius: 8px;
  border-width: 1.5px;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease !important;
}

.ml-product-card::before {
  content: none !important;
}


.ml-product-info {
  padding: 12px;
  gap: 5px;
}

.ml-price-area {
  min-height: 38px;
  margin: 3px 0 1px;
}

@media (max-width: 992px) {
  .home-icp-grid .ml-product-card {
    min-height: 350px;
  }
}

@media (max-width: 768px) {
  .home-icp-grid .ml-product-card {
    width: 100%;
    min-height: 350px;
  }

  .ml-product-info {
    padding: 9px 10px;
    gap: 3px;
  }

  .ml-price-area {
    min-height: 34px;
    margin: 2px 0 0;
  }

  .ml-product-title {
    min-height: 2.3em;
    font-size: 0.86rem;
    line-height: 1.3;
  }

  .ml-action-buttons {
    padding-top: 6px;
  }

  .ml-btn-primary,
.ml-btn-rescue {
    height: 36px;
  }

}

@media (max-width: 576px) {
  .home-icp-grid .ml-product-card {
    min-height: 350px;
  }

  .ml-product-title {
    font-size: 0.9rem;
    max-height: 38px;
  }

  .ml-price-value {
    font-size: 1.1rem;
  }
}

@media (max-width: 420px) {
  .home-icp-grid {
    row-gap: 24px;
  }

  .home-icp-grid .ml-product-card {
    min-height: 360px;
  }
}

.ml-detail-page {
  width: 100% !important;
  max-width: none !important;
  margin-inline: 0 !important;
  padding-inline: 0 !important;
  color: var(--sk-palette-blue-0f172a);

  --ml-detail-pad: clamp(16px, 1.3vw, 22px);
}

html.dark .ml-detail-page {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 90%, transparent);
}

.ml-breadcrumb {
  padding: 16px 0 14px !important;
  margin-bottom: 8px !important;
  color: var(--sk-palette-blue-64748b);
}

.ml-breadcrumb-back {
  min-height: 30px !important;
  padding: 5px 10px !important;
  border-radius: var(--sk-r-sm, 6px) !important;
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: 11px !important;
  font-weight: 850 !important;
  color: var(--sk-palette-blue-0f172a) !important;
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 76%, transparent) !important;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--sk-palette-blue-0f172a) 4%, transparent);
}

html.dark .ml-breadcrumb-back {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 82%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4.5%, transparent) !important;
}

.ml-breadcrumb-current,
.ml-breadcrumb-item {
  font-size: 11px !important;
  font-weight: 750 !important;
}

.ml-model-section {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
}

.ml-detail-workspace {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  align-items: stretch;
}

.ml-detail-main,
.ml-detail-body {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  width: 100%;
}

.ml-detail-layout {

  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.2fr) !important;
  gap: clamp(20px, 1.8vw, 28px) !important;
  padding: var(--ml-detail-pad) !important;
  margin-bottom: 0 !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent) !important;
  border-radius: 22px !important;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 98%, transparent), color-mix(in srgb, var(--sk-palette-blue-f8fafc) 94%, transparent)) !important;
  box-shadow: 0 18px 50px color-mix(in srgb, var(--sk-palette-blue-0f172a) 7%, transparent) !important;
  font-family: var(--sk-font-body, system-ui, sans-serif) !important;
}

@media (min-width: 1181px) {
  .ml-detail-workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 340px);
    gap: 20px 22px;
    align-items: start;
  }
  .ml-detail-main,
.ml-detail-body { min-width: 0; grid-column: 1; }
  .ml-purchase-stack { grid-column: 2; grid-row: 1 / span 2; }
}

.ml-description-panel {
  padding: var(--ml-detail-pad);
  border-radius: 18px;
  border: 1px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 7%, transparent);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 96%, transparent), color-mix(in srgb, var(--sk-palette-blue-f8fafc) 90%, transparent));
  box-shadow: 0 12px 36px color-mix(in srgb, var(--sk-palette-blue-0f172a) 5%, transparent);
  min-width: 0;
  width: 100%;
}
html.dark .ml-description-panel {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);
  background:
    radial-gradient(circle at 12% 0%, color-mix(in srgb, var(--sk-ds-accent) 7%, transparent), transparent 40%),
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent), color-mix(in srgb, var(--sk-palette-neutral-ffffff) 1.5%, transparent)),
    var(--sk-palette-blue-0a0d10);
}
@media (max-width: 1180px) {
  .ml-description-panel .ml-description-content:not(.expanded) {
    max-height: min(40vh, 300px);
  }
}

.ml-detail-page .ml-specs-section,
.ml-detail-page .ml-reviews-section,
.ml-detail-page .ml-related-section,
.ml-detail-page .ml-video-section,
.ml-detail-page .ml-description-panel,
.ml-detail-page .ml-detail-workspace {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

html.dark .ml-detail-layout {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent) !important;
  background:
    radial-gradient(circle at 18% 0%, color-mix(in srgb, var(--sk-ds-accent) 10%, transparent), transparent 32%),
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4.5%, transparent), color-mix(in srgb, var(--sk-palette-neutral-ffffff) 1.8%, transparent)),
    var(--sk-palette-cyan-080b0d) !important;
  box-shadow: 0 24px 70px color-mix(in srgb, var(--sk-palette-neutral-000000) 44%, transparent) !important;
}

.ml-gallery-col {
  min-width: 0;
  gap: 14px !important;
}

.ml-main-image-container {
  aspect-ratio: 1.42 / 1 !important;
  min-height: clamp(310px, 26vw, 430px);
  border-radius: 18px !important;
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;
  background:
    radial-gradient(circle at 50% 35%, color-mix(in srgb, var(--sk-accent) 8%, transparent), transparent 54%),
    linear-gradient(135deg, var(--sk-palette-blue-f8fafc), var(--sk-palette-blue-eef2f7)) !important;
  box-shadow: inset 0 1px 0 color-mix(in srgb, var(--sk-palette-neutral-ffffff) 80%, transparent);
}

html.dark .ml-main-image-container {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;
  background:
    radial-gradient(circle at 50% 36%, color-mix(in srgb, var(--sk-ds-accent) 12%, transparent), transparent 52%),
    linear-gradient(135deg, var(--sk-palette-blue-101418), var(--sk-palette-cyan-050708)) !important;
}

.ml-main-image {
  padding: 12px !important;
  -o-object-fit: contain !important;
     object-fit: contain !important;
  -o-object-position: center !important;
     object-position: center !important;
  background: transparent;
}

.ml-thumbs-row {
  gap: 10px !important;
  flex-wrap: nowrap !important;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
  scroll-padding-inline: 4px;
  padding-bottom: 6px;

  scrollbar-width: thin;
  scrollbar-color: var(--sk-ds-line-strong, color-mix(in srgb, var(--sk-palette-neutral-7f7f7f) 40%, transparent)) transparent;
}
.ml-thumbs-row::-webkit-scrollbar { height: 6px; }
.ml-thumbs-row::-webkit-scrollbar-track { background: transparent; }
.ml-thumbs-row::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: var(--sk-ds-line-strong, color-mix(in srgb, var(--sk-palette-neutral-7f7f7f) 40%, transparent));
}
.ml-thumbs-row .ml-thumb-btn {
  flex: 0 0 auto;
  scroll-snap-align: start;
}

.ml-thumb-btn {

  width: 64px !important;
  height: 64px !important;
  border-radius: 14px !important;
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 10%, transparent) !important;
  background: var(--sk-palette-neutral-ffffff) !important;
  box-shadow: 0 8px 22px color-mix(in srgb, var(--sk-palette-blue-0f172a) 5%, transparent);
}

.ml-thumb-btn.active {
  border-color: var(--sk-accent) !important;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sk-accent) 12%, transparent), 0 10px 26px color-mix(in srgb, var(--sk-accent) 12%, transparent) !important;
}

html.dark .ml-thumb-btn {
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4.5%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;
}

html.dark .ml-thumb-btn.active {
  border-color: var(--sk-ds-accent) !important;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--sk-ds-accent) 14%, transparent), 0 12px 28px color-mix(in srgb, var(--sk-ds-accent) 12%, transparent) !important;
}

.ml-info-col {
  gap: 16px !important;
  padding-top: 4px;
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);
}

.ml-model-title {
  margin: 0 !important;
  text-transform: none !important;
}

.ml-purchase-stack,
.ml-purchase-card {
  position: static !important;
  top: auto !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
  max-height: none !important;
  overflow: visible !important;
  transform: none !important;
  inset: auto !important;
}

.ml-purchase-stack {
  align-self: start;
  min-width: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: var(--sk-font-body, system-ui, sans-serif);
  z-index: auto;
}

.ml-purchase-card {
  width: 100%;
  background: var(--sk-palette-neutral-ffffff) !important;
  font-family: var(--sk-font-body, system-ui, sans-serif);
}

html.dark .ml-purchase-card {
  background:
    radial-gradient(circle at 25% 0%, color-mix(in srgb, var(--sk-ds-accent) 10%, transparent), transparent 34%),
    var(--sk-palette-cyan-0b0e10) !important;
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;
}

.ml-product-facts-card {
  margin-top: 0 !important;
  border: 0 !important;
  background: transparent !important;
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;
}

html.dark .ml-product-facts-card {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;
  background:
    transparent !important;
}

.ml-product-facts-card h3 {
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;
  font-weight: 850 !important;
  color: var(--sk-palette-blue-0f172a) !important;
}

html.dark .ml-product-facts-card h3 {
  color: var(--sk-palette-blue-f8fafc) !important;
}

.ml-product-facts-card dt {
  color: var(--sk-palette-blue-64748b) !important;
  font-weight: 750 !important;
}

.ml-product-facts-card dd {
  color: var(--sk-palette-blue-172033) !important;
  font-weight: 850 !important;
}

html.dark .ml-product-facts-card dt {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 52%, transparent) !important;
}

html.dark .ml-product-facts-card dd {
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 86%, transparent) !important;
}

.ml-purchase-primary {
  min-height: 48px !important;
  border-radius: var(--sk-r-sm, 6px) !important;
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: 13px !important;
  letter-spacing: -0.01em;
  background: color-mix(in srgb, var(--sk-accent) 9%, transparent) !important;
  color: var(--sk-ds-accent) !important;
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent) !important;
  box-shadow: none !important;
  transition: transform .12s ease, background .14s ease, border-color .14s ease;
}
.ml-purchase-primary:hover:not(:disabled) {
  background: color-mix(in srgb, var(--sk-accent) 18%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent) !important;
  color: var(--sk-ds-accent) !important;
}
.ml-purchase-primary:disabled {
  opacity: 0.55 !important;
  cursor: not-allowed !important;
}
html.dark .ml-purchase-primary {
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, transparent) !important;
  color: var(--sk-ds-accent) !important;
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 42%, transparent) !important;
  box-shadow: none !important;
}
html.dark .ml-purchase-primary:hover:not(:disabled) {
  background: color-mix(in srgb, var(--sk-ds-accent) 22%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-ds-accent) 70%, transparent) !important;
  color: var(--sk-palette-teal-6ee7b7) !important;
}
.ml-purchase-primary.in-cart {
  background: color-mix(in srgb, var(--sk-accent) 14%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent) !important;
  color: var(--sk-ds-accent) !important;
}
html.dark .ml-purchase-primary.in-cart {
  background: color-mix(in srgb, var(--sk-ds-accent) 18%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-ds-accent) 55%, transparent) !important;
  color: var(--sk-ds-accent) !important;
}
.ml-specs-section,
.ml-video-section,
.ml-reviews-section {
  border-radius: 22px !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 6%, transparent) !important;
  background: var(--sk-palette-neutral-ffffff) !important;
  box-shadow: 0 16px 45px color-mix(in srgb, var(--sk-palette-blue-0f172a) 6.5%, transparent) !important;
}

html.dark .ml-specs-section,
html.dark .ml-video-section,
html.dark .ml-reviews-section {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 7%, transparent) !important;
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-neutral-ffffff) 4%, transparent), color-mix(in srgb, var(--sk-palette-neutral-ffffff) 1.5%, transparent)),
    var(--sk-palette-cyan-090c0e) !important;
  box-shadow: 0 18px 55px color-mix(in srgb, var(--sk-palette-neutral-000000) 38%, transparent) !important;
}

@media (min-width: 1600px) {
  .ml-detail-layout {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.15fr) !important;
  }

  .ml-main-image-container {
    min-height: 455px;
  }
}

@media (max-width: 1180px) {
  .ml-detail-layout {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .ml-detail-page {
    width: min(100%, calc(100% - 20px)) !important;
  }

  .ml-breadcrumb {
    padding-top: 10px !important;
  }

  .ml-detail-layout {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 16px !important;
    border-radius: 18px !important;
  }

  .ml-main-image-container {
    min-height: 250px;
    aspect-ratio: 1.1 / 1 !important;
  }

  .ml-purchase-stack {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }

  .ml-purchase-card,
.ml-product-facts-card {
    padding: 16px !important;
    border-radius: 18px !important;
  }}

.ml-detail-page {
  font-family: var(--sk-font-body, system-ui, sans-serif);
}

.ml-model-title {
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;
  font-size: 2.5rem !important;
  font-weight: 900 !important;
  line-height: 1.05 !important;
  letter-spacing: -0.018em !important;
  word-spacing: 0.08em;
  color: var(--sk-palette-blue-111827) !important;
  text-shadow: none !important;
}

html.dark .ml-model-title {
  color: var(--sk-palette-blue-f8fafc) !important;
  text-shadow: none !important;
}

.ml-purchase-stack {
  gap: 16px !important;
}

.ml-purchase-card {
  border-radius: 18px !important;
  border-color: color-mix(in srgb, var(--sk-palette-blue-0f172a) 7.5%, transparent) !important;
  box-shadow: 0 16px 40px color-mix(in srgb, var(--sk-palette-blue-0f172a) 7.5%, transparent) !important;
  gap: 13px !important;
  padding: 18px !important;
}

.ml-purchase-offer-row {
  min-height: 25px;
}

.ml-purchase-offer-badge {
  height: 23px !important;
  min-height: 23px !important;
  padding: 0 9px !important;
  color: var(--sk-accent) !important;
  background: color-mix(in srgb, var(--sk-accent) 8%, transparent) !important;
}

.ml-money,
.ml-purchase-original {
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum' 1;
  letter-spacing: -0.01em;
}

.ml-price-value,
.ml-money.ml-price-value {
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;
  font-size: 1.5rem !important;
  font-weight: 900 !important;
  line-height: 1.15 !important;
  letter-spacing: normal !important;
  font-variant-numeric: normal;
  font-feature-settings: 'tnum' 0;
  text-shadow: none !important;
  filter: none !important;
}

.ml-purchase-original {
  color: var(--sk-palette-blue-7f8b9d);
  font-size: 0.78rem !important;
  font-weight: 500 !important;
  text-decoration: line-through;
  line-height: 1.2;
}

.ml-purchase-price {
  color: var(--sk-palette-blue-1e293b);
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif) !important;
  font-size: 1.5rem !important;
  font-weight: 900 !important;
  line-height: 1.15 !important;
  letter-spacing: normal !important;
}

html.dark .ml-purchase-price {
  color: var(--sk-palette-neutral-f1f1f1);
  text-shadow: none;
}

.ml-purchase-avista {
  margin: 2px 0 0 0;
  color: var(--sk-accent);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.35;
}

html.dark .ml-purchase-avista {
  color: var(--sk-ds-accent);
}

.ml-product-facts-card {
  padding: 14px 4px 0 !important;
  border-top: 1px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.ml-product-facts-card h3 {
  margin-bottom: 10px !important;
  font-size: 13.5px !important;
  letter-spacing: -0.01em !important;
}

.ml-product-facts-card dl {
  gap: 0 !important;
}

.ml-product-facts-card div {
  grid-template-columns: minmax(104px, 1fr) minmax(0, 1fr) !important;
  padding: 6px 0 !important;
  border-bottom: 1px dashed color-mix(in srgb, var(--sk-palette-blue-0f172a) 7%, transparent);
}

html.dark .ml-product-facts-card div {
  border-bottom-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent);
}

.ml-product-facts-card div:last-child {
  border-bottom: 0;
}

.ml-product-facts-card dt,
.ml-product-facts-card dd {
  font-size: 12px !important;
  line-height: 1.45 !important;
}

.ml-gallery-action-btn {
  font-size: 11px !important;
  font-weight: 800 !important;
  color: var(--sk-palette-blue-64748b) !important;
}

.ml-gallery-action-btn:hover,
.ml-gallery-action-btn.active {
  color: var(--sk-accent) !important;
}

@media (max-width: 768px) {
  .ml-model-title {
    font-size: clamp(1.55rem, 7vw, 2rem) !important;
    word-spacing: 0.04em;
  }

  .ml-purchase-price:not(.ml-purchase-price--guest) {
    font-size: 1.45rem !important;
    font-weight: 900 !important;
    letter-spacing: normal !important;
  }

  .ml-price-value {
    font-size: 1.45rem !important;
    font-weight: 900 !important;
  }
}

.ml-info-subtitle {
  margin: -6px 0 0;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--sk-palette-neutral-5b6472);
  font-weight: 550;
}
html.dark .ml-info-subtitle { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent); }

.ml-info-social {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.ml-info-bestseller {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--sk-palette-red-c2410c);
  background: color-mix(in srgb, var(--sk-palette-red-ea580c) 10%, transparent);
}
html.dark .ml-info-bestseller { color: var(--sk-palette-red-fb923c); background: color-mix(in srgb, var(--sk-palette-red-fb923c) 12%, transparent); }

.ml-detail-stars { display: inline-flex; align-items: center; gap: 2px; }

.ml-detail-page .ml-description-content,
.ml-detail-page .ml-specs-content {
  font-family: var(--sk-font-body, system-ui, sans-serif);
  font-size: var(--sk-text-md, 0.9375rem);
  line-height: 1.68;
  font-weight: 500;
}

.ml-detail-page .ml-description-content h1,
.ml-detail-page .ml-description-content h2,
.ml-detail-page .ml-description-content h3,
.ml-detail-page .ml-specs-content h1,
.ml-detail-page .ml-specs-content h2,
.ml-detail-page .ml-specs-content h3 {
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);
  font-size: var(--sk-text-lg, 1.0625rem);
  line-height: 1.3;
  font-weight: 800;
}

.ml-detail-page .ml-breadcrumb-back,
.ml-detail-page .ml-breadcrumb-item,
.ml-detail-page .ml-breadcrumb-current {
  font-size: var(--sk-text-sm, 0.8125rem);
  line-height: 1.2;
}

@media (max-width: 767px) {
  .ml-detail-page {
    width: calc(100vw - 24px) !important;
  }

  .ml-breadcrumb {
    padding: 10px 0 8px !important;
    margin-bottom: 6px !important;
  }

  .ml-breadcrumb-back,
.ml-breadcrumb-current,
.ml-breadcrumb-item {
    font-size: 11px !important;
    line-height: 1.15 !important;
  }

  .ml-detail-layout {
    gap: 14px !important;
    border-radius: 14px !important;
    margin-bottom: 14px !important;
  }

  .ml-main-image-container {
    min-height: 220px !important;
    border-radius: 12px !important;
  }

  .ml-thumbs-row {
    gap: 8px !important;
  }

  .ml-thumb-btn {
    width: 52px !important;
    height: 52px !important;
    border-radius: 10px !important;
  }

  .ml-gallery-action-btn {
    min-height: 30px !important;
    padding: 0 10px !important;
    font-size: 11px !important;
    line-height: 1 !important;
  }

  .ml-info-col {
    gap: 10px !important;
    padding-top: 0 !important;
  }

  .ml-model-title {
    font-size: 26px !important;
    line-height: 1.08 !important;
    letter-spacing: -0.01em !important;
    word-spacing: 0 !important;
  }

  .ml-info-subtitle {
    margin-top: -2px !important;
    font-size: 13px !important;
    line-height: 1.5 !important;
    font-weight: 650 !important;
  }

  .ml-info-bestseller {
    min-height: 22px !important;
    padding: 0 8px !important;
    font-size: 10.5px !important;
    letter-spacing: 0.03em !important;
  }

  .ml-description-section--inline,
.ml-specs-section {
    padding: 12px !important;
    border-radius: 12px !important;
  }

  .ml-detail-page .ml-description-content,
.ml-detail-page .ml-specs-content {
    font-size: var(--sk-text-sm, 0.8125rem);
    line-height: 1.62;
  }

  .ml-detail-page .ml-description-content h1,
.ml-detail-page .ml-description-content h2,
.ml-detail-page .ml-description-content h3,
.ml-detail-page .ml-specs-content h1,
.ml-detail-page .ml-specs-content h2,
.ml-detail-page .ml-specs-content h3 {
    font-size: var(--sk-text-md, 0.9375rem);
  }

  .ml-expand-btn {
    min-height: 40px;
    padding: 10px 12px;
    font-size: var(--sk-text-sm, 0.8125rem);
  }

  .ml-description-section--inline .ml-description-content:not(.expanded) {
    max-height: min(38vh, 280px);
  }

  .ml-purchase-stack {
    gap: 12px !important;
  }

  .ml-purchase-card,
.ml-product-facts-card {
    padding: 14px !important;
    border-radius: 14px !important;
  }

  .ml-purchase-offer-badge {
    min-height: 22px !important;
    height: 22px !important;
    padding: 0 8px !important;
    font-size: 10.5px !important;
    line-height: 1 !important;
  }

  .ml-purchase-original {
    font-size: 12px !important;
  }

  .ml-purchase-price:not(.ml-purchase-price--guest) {
    font-size: 1.5rem !important;
    font-weight: 900 !important;
    line-height: 1.15 !important;
    letter-spacing: normal !important;
  }

  .ml-price-value {
    font-size: 1.5rem !important;
    font-weight: 900 !important;
    line-height: 1.15 !important;
    letter-spacing: normal !important;
  }

  .ml-purchase-primary,
  .ml-purchase-all-btn {
    min-height: 38px !important;
    border-radius: var(--sk-r-sm, 6px) !important;
    font-size: 12px !important;
    line-height: 1 !important;
  }

  .ml-purchase-avista {
    font-size: 11px !important;
    line-height: 1.35 !important;
  }

  .ml-product-facts-card h3 {
    font-size: 12.5px !important;
    line-height: 1.25 !important;
  }

  .ml-product-facts-card dl {
    gap: 7px !important;
  }

  .ml-product-facts-card div {
    grid-template-columns: minmax(86px, 1fr) minmax(0, 1fr) !important;
  }

  .ml-product-facts-card dt,
.ml-product-facts-card dd {
    font-size: 11.5px !important;
    line-height: 1.4 !important;
  }
}

@media (max-width: 380px) {
  .ml-detail-page {
    width: calc(100vw - 18px) !important;
  }

  .ml-model-title {
    font-size: 24px !important;
  }

  .ml-info-subtitle {
    font-size: 12.5px !important;
  }

  .ml-detail-page .ml-description-content,
.ml-detail-page .ml-specs-content,
.ml-purchase-note {
    font-size: 12px !important;
  }

  .ml-purchase-price:not(.ml-purchase-price--guest) {
    font-size: 1.4rem !important;
    font-weight: 900 !important;
    letter-spacing: normal !important;
  }

  .ml-price-value {
    font-size: 1.4rem !important;
    font-weight: 900 !important;
    letter-spacing: normal !important;
  }
}

.ml-action-buttons .ml-btn-primary,
.ml-action-buttons .ml-btn-rescue {
  height: var(--sk-control-h-md) !important;
  min-height: var(--sk-control-h-md) !important;
}

.ml-btn-primary.in-cart {
  background: linear-gradient(135deg, var(--sk-green-dark), var(--sk-green), var(--sk-green-light)) !important;
  box-shadow: var(--sk-shadow-brand) !important;
}

.ml-btn-primary.in-cart:hover {
  background: linear-gradient(135deg, var(--sk-green), var(--sk-green-light)) !important;
}

.ml-product-title,
.home-icp-grid .ml-product-title,
.home-offers-rail .ml-product-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.35;
  min-height: 2.7em;
  max-height: 2.7em;
  box-sizing: border-box;
}

.ml-product-card .ml-product-title.sk-card-title.ml-product-title--commercial {
  display: block;
  -webkit-line-clamp: unset;
  line-clamp: unset;
  overflow: visible;
  overflow-wrap: anywhere;
  white-space: normal;
  min-height: 2.7em !important;
  max-height: none !important;
  height: auto;
}

.ml-btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 42px;
  min-height: 42px;
  box-sizing: border-box;
  border-radius: var(--sk-r-sm, 6px);
  border: 1.5px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 16%, transparent);
  background: transparent;
  color: var(--sk-palette-blue-334155);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
html.dark .ml-btn-ghost { border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 14%, transparent); color: var(--sk-palette-blue-cbd5e1); }
.ml-btn-ghost:hover { background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 5%, transparent); }
html.dark .ml-btn-ghost:hover { background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent); }

.ml-purchase-price.ml-purchase-price--guest {
  color: var(--sk-palette-orange-f59e0b) !important;
  font-size: var(--sk-text-md, 0.9375rem) !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  letter-spacing: normal !important;
  font-variant-numeric: normal;
  text-shadow: none !important;
}
html:not(.dark) .ml-purchase-price.ml-purchase-price--guest { color: var(--sk-palette-orange-d97706) !important; }

.ml-card-badges {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  flex-shrink: 0;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  overflow: hidden;
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-green-dcfce7) 76%, transparent) 0%, color-mix(in srgb, var(--sk-palette-green-f0fdf4) 55%, transparent) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: none;
  border-bottom: 1px solid color-mix(in srgb, var(--sk-ds-accent) 22%, transparent);
  box-shadow: none;
  box-sizing: border-box;
}

html.dark .ml-card-badges {
  background: linear-gradient(180deg, color-mix(in srgb, var(--sk-palette-teal-08140e) 68%, transparent) 0%, color-mix(in srgb, var(--sk-palette-teal-06100b) 45%, transparent) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: none;
  border-bottom: 1px solid color-mix(in srgb, var(--sk-palette-teal-00e092) 25%, transparent);
  box-shadow: none;
}

.ml-card-badges .ml-badge-digital,
.ml-badge-digital {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  min-height: 24px !important;
  height: 24px !important;
  padding: 0 10px !important;
  border-radius: var(--sk-r-sm) !important;
  border: none !important;
  background: transparent !important;
  color: var(--sk-palette-blue-0f172a) !important;
  font-size: 0.58rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
  box-shadow: none !important;
  animation: none !important;
}

html.dark .ml-card-badges .ml-badge-digital,
html.dark .ml-badge-digital {
  color: var(--sk-palette-neutral-ffffff) !important;
}

.ml-badge-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.ml-badge-icon {
  flex-shrink: 0;
}
.ml-badge-icon-zap {
  color: var(--sk-palette-green-00a650);
  fill: var(--sk-palette-green-00a650);
}
html.dark .ml-badge-icon-zap {
  color: var(--sk-palette-teal-00e092);
  fill: var(--sk-palette-teal-00e092);
}

.ml-product-card { min-height: 350px; }
.ml-product-img-area {
  position: relative;
  width: 100%;
  flex: 0 0 208px;
  height: 208px;
  min-height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.ml-product-img-wrapper {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  height: 160px;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  cursor: zoom-in;
}
.ml-product-img {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
  display: block;
  pointer-events: auto;
  transition: transform .2s ease, opacity .2s ease;
  transition-duration: .2s !important;
}
.ml-product-info {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}

.ml-product-card.ml-product-card--minimal .ml-product-img-area {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  min-height: 208px;
  height: 208px;
}
.ml-product-card.ml-product-card--minimal .ml-favorite-btn {
  top: 10px;
  right: 10px;
}

.ml-card-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 6px;
}
.ml-card-footer .ml-action-buttons {
  margin-top: 0;
  padding-top: 0;
}

.ml-card-collection-strip,
.ml-product-collection-kicker {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  min-height: 26px;
  height: 26px;
  padding: 0 10px;
  margin: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  background: transparent;
  border: 0;
  border-top: 2px solid transparent;
  border-radius: 0;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  color: inherit;
}

.home-offers-rail .ml-product-card {
  border-color: var(--sk-border-premium) !important;
  box-shadow: none !important;
  transition: none !important;
}
@media (min-width: 769px) {
  .home-offers-rail .ml-product-card:not(:hover) {
    border-color: var(--sk-border-premium) !important;
    box-shadow: none !important;
  }
}
@media (min-width: 769px) and (hover: hover) {
  .home-offers-rail .ml-product-card[data-rail-visible="true"]:hover {
    border-color: var(--sk-card-active-bd, var(--sk-ds-accent)) !important;
    box-shadow: none !important;
  }
}
.home-offers-rail .ml-product-card:not([data-rail-visible="true"]):not([data-mobile-focused="true"]) {
  border-color: var(--sk-border-premium) !important;
  box-shadow: none !important;
  animation: none !important;
  z-index: auto !important;
}

.ml-card-collection-strip[data-cover-palette="ready"] {
  background: linear-gradient(110deg,
    rgb(var(--collection-background)), rgb(var(--collection-surface)) 50%,
    rgb(var(--collection-background)));
  color: rgb(var(--collection-edge));
  border-top-color: rgb(var(--collection-edge));
  border-bottom: 1px solid rgb(var(--collection-foreground) / .1);
  box-shadow: 0 -2px 8px rgb(var(--collection-edge) / .28),
    inset 0 1px 4px rgb(var(--collection-edge) / .12);
}

.ml-card-collection-strip .ml-collection-badge-icon,
.ml-product-collection-kicker .ml-collection-badge-icon {
  flex-shrink: 0;
  color: inherit;
  fill: none;
  width: 12px;
  height: 12px;
  display: block;
  transform: translateY(-.5px);
}

.ml-card-collection-strip .ml-collection-badge-text,
.ml-product-collection-kicker .ml-collection-badge-text {
  font-size: .6rem;
  font-weight: 800;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: inherit;
  line-height: 1;
  display: block;
  text-shadow: 0 1px 2px rgb(var(--collection-background) / .7);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 24px);
}

.ml-btn-buy-now, .ml-btn-cart {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  min-height: 48px;
  padding: 10px 12px;
  border-radius: var(--sk-r-sm, 6px);
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: .8125rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: .02em;
  cursor: pointer;
  box-shadow: none;
  transition: transform .12s ease, background .14s ease, border-color .14s ease, color .14s ease;
}

.ml-btn-buy-now {
  background: color-mix(in srgb, var(--sk-accent) 9%, transparent);
  color: var(--sk-ds-accent);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);
}
.ml-btn-buy-now:hover {
  background: color-mix(in srgb, var(--sk-accent) 18%, transparent);
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);
  color: var(--sk-ds-accent);
}
.ml-btn-buy-now:active {
  transform: scale(0.985);
}
.ml-btn-buy-now:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--sk-accent) 50%, transparent);
  outline-offset: 2px;
}

html.dark .ml-btn-buy-now {
  background: var(--sk-ds-accent);
  color: var(--sk-palette-teal-050807);
  border: 1px solid var(--sk-ds-accent);
  font-weight: 800;
}
html.dark .ml-btn-buy-now:hover {
  background: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0));
  border-color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0));
  color: var(--sk-palette-teal-050807);
}
html.dark .ml-btn-buy-now:active {
  transform: scale(0.985);
}
html.dark .ml-btn-buy-now:focus-visible {
  outline: 2px solid var(--sk-ds-accent);
  outline-offset: 2px;
}

.ml-btn-cart {
  background: transparent;
  color: var(--sk-palette-blue-1e293b);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);
}
.ml-btn-cart:hover {
  background: color-mix(in srgb, var(--sk-accent) 5%, transparent);
  border-color: color-mix(in srgb, var(--sk-accent) 65%, transparent);
  color: var(--sk-ds-accent);
}
.ml-btn-cart:active {
  transform: scale(0.985);
}
.ml-btn-cart:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--sk-accent) 40%, transparent);
  outline-offset: 2px;
}

html.dark .ml-btn-cart {
  background: var(--sk-palette-teal-101715);
  color: var(--sk-palette-neutral-f3f7f5);
  border: 1px solid var(--sk-palette-teal-26342f);
  font-weight: 700;
}
html.dark .ml-btn-cart:hover {
  background: color-mix(in srgb, var(--sk-ds-accent) 8%, var(--sk-palette-teal-101715));
  border-color: var(--sk-ds-accent);
  color: var(--sk-ds-accent);
}
html.dark .ml-btn-cart:active {
  transform: scale(0.985);
}
html.dark .ml-btn-cart:focus-visible {
  outline: 2px solid var(--sk-ds-accent);
  outline-offset: 2px;
}

.ml-btn-cart.in-cart {
  background: color-mix(in srgb, var(--sk-accent) 14%, transparent) !important;
  color: var(--sk-ds-accent) !important;
  border: 1px solid color-mix(in srgb, var(--sk-accent) 45%, transparent) !important;
}
.ml-btn-cart.in-cart:hover {
  background: color-mix(in srgb, var(--sk-accent) 20%, transparent) !important;
  border-color: color-mix(in srgb, var(--sk-accent) 60%, transparent) !important;
}
html.dark .ml-btn-cart.in-cart {
  background: var(--sk-palette-teal-101715) !important;
  color: var(--sk-ds-accent) !important;
  border: 1px solid var(--sk-ds-accent) !important;
}
html.dark .ml-btn-cart.in-cart:hover {
  background: color-mix(in srgb, var(--sk-ds-accent) 12%, var(--sk-palette-teal-101715)) !important;
  border-color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0)) !important;
  color: var(--sk-brand-hover, var(--sk-palette-teal-7ef0c0)) !important;
}

.ml-action-buttons--split {
  display: flex;
  align-items: stretch;
  gap: 8px;
  width: 100%;
}

.ml-action-buttons--split .ml-btn-buy-now {
  flex: 1 1 auto;
  width: auto;
  min-width: 0;
}

.ml-btn-cart--icon-square {
  flex: 0 0 48px;
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;
  padding: 0;
  aspect-ratio: 1 / 1;
  background: color-mix(in srgb, var(--sk-accent) 12%, transparent);
  color: var(--sk-ds-accent);
  border: 1px solid color-mix(in srgb, var(--sk-accent) 45%, transparent);
}

html.dark .ml-btn-cart--icon-square {
  background: color-mix(in srgb, var(--sk-ds-accent) 14%, var(--sk-palette-teal-101715));
  color: var(--sk-ds-accent);
  border: 1px solid color-mix(in srgb, var(--sk-ds-accent) 48%, transparent);
}

.ml-btn-learn-more {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 42px;
  padding: 8px 12px;
  border-radius: var(--sk-r-sm, 6px);
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.02em;
  cursor: pointer;
  background: color-mix(in srgb, var(--sk-palette-blue-0f172a) 4%, transparent);
  color: var(--sk-palette-blue-1e293b);
  border: 1px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 14%, transparent);
  transition: transform 0.12s ease, background 0.14s ease, border-color 0.14s ease, color 0.14s ease;
}

.ml-btn-learn-more:hover,
.ml-btn-learn-more.is-expanded {
  background: color-mix(in srgb, var(--sk-accent) 8%, transparent);
  border-color: color-mix(in srgb, var(--sk-accent) 48%, transparent);
  color: var(--sk-ds-accent);
}

.ml-btn-learn-more:active {
  transform: scale(0.985);
}

.ml-btn-learn-more:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--sk-accent) 45%, transparent);
  outline-offset: 2px;
}

html.dark .ml-btn-learn-more {
  background: var(--sk-palette-teal-101715);
  color: var(--sk-palette-neutral-f3f7f5);
  border: 1px solid var(--sk-palette-teal-26342f);
}

html.dark .ml-btn-learn-more:hover,
html.dark .ml-btn-learn-more.is-expanded {
  background: color-mix(in srgb, var(--sk-ds-accent) 10%, var(--sk-palette-teal-101715));
  border-color: var(--sk-ds-accent);
  color: var(--sk-ds-accent);
}

.ml-version-picker {
  margin-bottom: 14px;
}

.ml-version-picker__label {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: var(--sk-text-2xs);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--sk-palette-blue-64748b);
}

html.dark .ml-version-picker__label { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 55%, transparent); }

.ml-version-picker__list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ml-version-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 11px 12px;
  border: 1px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 10%, transparent);
  border-radius: var(--sk-r-sm, 6px);
  background: var(--sk-palette-neutral-ffffff);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
}

html.dark .ml-version-option {
  border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 9%, transparent);
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 2%, transparent);
}

.ml-version-option:hover { border-color: color-mix(in srgb, var(--sk-accent) 45%, transparent); }
html.dark .ml-version-option:hover { border-color: color-mix(in srgb, var(--sk-ds-accent) 42%, transparent); }

.ml-version-option:focus-visible {
  outline: none;
  border-color: var(--sk-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--sk-accent) 18%, transparent);
}

.ml-version-option.is-selected {
  border-color: var(--sk-accent);
  background: color-mix(in srgb, var(--sk-accent) 6%, transparent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--sk-accent) 30%, transparent);
}

html.dark .ml-version-option.is-selected {
  border-color: color-mix(in srgb, var(--sk-ds-accent) 55%, transparent);
  background: color-mix(in srgb, var(--sk-ds-accent) 9%, transparent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--sk-ds-accent) 28%, transparent);
}

.ml-version-option__mark {
  flex-shrink: 0;
  width: 17px;
  height: 17px;
  border-radius: 5px;
  border: 2px solid color-mix(in srgb, var(--sk-palette-blue-0f172a) 22%, transparent);
  display: grid;
  place-items: center;
  color: var(--sk-palette-neutral-ffffff);
  transition: border-color 0.18s ease, background 0.18s ease;
}

html.dark .ml-version-option__mark { border-color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 26%, transparent); }

.ml-version-option.is-selected .ml-version-option__mark {
  border-color: var(--sk-accent);
  background: var(--sk-accent);
}

html.dark .ml-version-option.is-selected .ml-version-option__mark {
  border-color: var(--sk-ds-accent);
  background: var(--sk-ds-accent);
  color: var(--sk-palette-teal-04120c);
}

.ml-version-option.is-preview {
  border-style: dashed;
  border-color: color-mix(in srgb, var(--sk-accent) 38%, transparent);
}

html.dark .ml-version-option.is-preview { border-color: color-mix(in srgb, var(--sk-ds-accent) 32%, transparent); }

.ml-version-option__body {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ml-version-option__name {
  font-family: var(--sk-font-ui, 'Montserrat', system-ui, sans-serif);
  font-size: var(--sk-text-sm);
  font-weight: 750;
  line-height: 1.25;
  color: var(--sk-palette-blue-0f172a);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

html.dark .ml-version-option__name { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 92%, transparent); }

.ml-version-option.is-selected .ml-version-option__name { font-weight: 850; }

.ml-version-option__meta {
  font-size: var(--sk-text-2xs);
  font-weight: 650;
  line-height: 1.3;
  color: var(--sk-palette-blue-64748b);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

html.dark .ml-version-option__meta { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 50%, transparent); }

.ml-version-option__prices {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
}

.ml-version-option__from {
  font-size: var(--sk-text-2xs);
  font-weight: 600;
  line-height: 1;
  color: var(--sk-palette-blue-94a3b8);
  text-decoration: line-through;
}

html.dark .ml-version-option__from { color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 38%, transparent); }

.ml-version-option__price {
  font-family: var(--sk-font-heading, 'Montserrat', system-ui, sans-serif);
  font-size: var(--sk-text-ui);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: normal;
  color: var(--sk-palette-blue-0f172a);
  font-variant-numeric: tabular-nums;
}

html.dark .ml-version-option__price { color: var(--sk-palette-neutral-ffffff); }
.ml-version-option.is-selected .ml-version-option__price { color: var(--sk-accent); }
html.dark .ml-version-option.is-selected .ml-version-option__price { color: var(--sk-ds-accent); }

@media (prefers-reduced-motion: reduce) {
  .ml-version-option,
.ml-version-option__mark,
.ml-version-option__mark::after { transition: none; }
}

.ml-detail-edition-active { margin: 0; color: var(--sk-ds-t2); font-size: 0.875rem; line-height: 1.5;
}

.ml-product-unavailable { padding: var(--ml-detail-pad, 20px); color: var(--sk-ds-t2);
}

.ml-version-option:disabled { cursor: not-allowed; opacity: 0.55; box-shadow: none !important; }
.ml-purchase-primary:disabled {
  cursor: not-allowed;
  box-shadow: none !important;
  background: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent) !important;
  border: 1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent) !important;
  color: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 42%, transparent) !important;
}
html:not(.dark) .ml-purchase-primary:disabled {
  background: var(--sk-palette-cyan-f1f5f9) !important;
  border: 1px solid var(--sk-palette-blue-cbd5e1) !important;
  color: var(--sk-palette-blue-94a3b8) !important;
}

.ml-specs-section > summary { cursor: pointer;
}
.ml-line-navigation { display: flex; gap: 8px; overflow-x: auto; padding: 6px 0 16px; overscroll-behavior-x: contain; -webkit-overflow-scrolling: touch; scrollbar-width: thin; }
.ml-line-navigation button { display: flex; flex-direction: column; flex: 0 0 auto; gap: 4px; padding: 10px 16px; border: 1px solid var(--sk-ds-line); border-radius: var(--sk-r-sm, 6px); color: var(--sk-ds-t1); background: var(--sk-ds-surface); font: inherit; font-size: .8125rem; font-weight: 600; cursor: pointer; transition: border-color .18s ease, background-color .18s ease; }
.ml-line-navigation button:hover { background: color-mix(in srgb, var(--sk-ds-accent) 6%, var(--sk-ds-surface)); }
.ml-line-navigation button[aria-pressed="true"] { border-color: var(--sk-ds-accent); background: color-mix(in srgb, var(--sk-ds-accent) 12%, var(--sk-ds-surface)); }
.ml-line-navigation button:focus-visible { outline: 2px solid var(--sk-ds-accent); outline-offset: 2px; }
.ml-line-navigation button span + span { color: var(--sk-ds-accent); font-size: .75rem; font-weight: 500; }`;export{n as d};
