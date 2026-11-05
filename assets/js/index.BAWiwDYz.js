const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./firebaseCompleto.YGl7oDR-.js","./vendor-firebase.B2zrFfWZ.js","./vendor-firebase-lite.DWLIakt4.js","./vendor-react.Bxpvzt8v.js","./vendor-icons.bDPCiqgI.js","./StoreRoutes.Cau4I3ZR.js","./index.rZubYnNj.js","./AppProviders.71XxsR20.js","./productUtils.jiCuZqED.js","./UnifiedLayout.DbsGi-XQ.js","./CatalogOrchestrator.G51EQ2xe.js","./ethicalHackerShield.DKrI-NGO.js","./ProductsService.BKoqGYFa.js","./downloadLinks.CSzHwRGe.js","./NavigationCore.DBQZCQYP.js","./Header.CGKV56-1.js","./useRailCarousel.05rricgH.js","./SupportForm.CpW946TT.js","./useOverlayLayer.Dd7T5TcH.js","./MaintenanceScreen.CUzK3elj.js","./ImageViewer.ha7ewF1d.js","./ProductThumbCard.2brzkISw.js","./detail.WhIN7KbC.js","./useProductImage.BirJIAfO.js","./shareLink.B0U4P6V5.js","./AffiliateOrchestrator.Ca2Xct0p.js","./HomeTab.B3C-lJlf.js","./StoreGuides.dqR1Mc8r.js","./sections.CeP2A9o-.js","./interactionFeedback.D-eESLKu.js","./OrdersTab.BvgH_4-I.js","./DownloadOrchestrator.5-XXEqvf.js","./CartView.Dz-W8Wj4.js","./Modal.BYA7BmoX.js","./WhatsAppInput.CnDFLXbD.js","./VipTab.DgnMHKf_.js","./PresentationTab.DG6A_Hyj.js","./AuthScreen.Cbh6WWut.js","./ProductDetailPage.DqWLpNKv.js","./MyCommissions.1Naej0U9.js","./DashboardOverview.nBx8hzak.js","./vendor-charts.CyZNPgGD.js","./StoreApp.BAkViSi0.js","../css/styles-global.DoU_uXoh.css"])))=>i.map(i=>d[i]);
import{V as na,b as oa,J as ia,W as la}from"./vendor-firebase-lite.DWLIakt4.js";import{j as o,r as p,c as E,d as ca}from"./vendor-react.Bxpvzt8v.js";import{av as da,aw as ua,ax as fa,ay as pe,az as pa,p as se,aA as ma,l as ba,aB as ha,aC as ka,a1 as jt,aD as ga,aE as va,ae as xa,N as ya,aF as _a,aG as wa,aH as Ze,X as Ot,aI as Sa,a7 as Ea,aJ as Aa,z as Na,a2 as Ia,R as Ca,u as ja,aK as Oa,W as Qe,aL as Ta,S as Tt,aa as Se,d as me,aM as Pa,aN as Da,aO as Ee,aP as et,aQ as La,aR as Ra,aS as Ma,aT as Pt,aU as $a,aV as Ua,aW as tt,aX as at,aY as Ba,aZ as za,a_ as Wa,ad as Fa,a$ as Va,b0 as Ka,b1 as Ga,b2 as Ha,b3 as qa,b4 as Ya,L as Ja,b5 as Xa,a3 as Za,x as Qa,b6 as rt,b7 as er,b8 as tr,K as ar,b9 as rr,ba as sr,bb as Dt,bc as oe,bd as st,be as nr,bf as or,bg as ir,bh as lr,bi as cr,G as dr,bj as ur,bk as fr,bl as pr,bm as mr,bn as nt,bo as br,bp as hr,J as kr,bq as gr,ag as vr,af as xr,h as Lt,ak as yr,br as _r,D as wr,o as Ae,bs as Sr,bt as Er,bu as Ar,ah as ot,C as Rt,bv as Nr,t as Ir,a4 as Cr,bw as jr,bx as Or,by as Tr,O as it,q as Pr,bz as Dr,I as Lr,i as Ne,_ as Mt,$ as Rr,as as Mr,c as Fe,a as $r,bA as Ur,bB as Br,bC as zr,bD as Wr,s as Fr,bE as Vr,bF as Kr,bG as Gr,bH as Hr,bI as qr,bJ as lt,Z as Yr,bK as Jr,bL as Xr,bM as Zr,ar as Qr,A as es,f as ts,bN as as,aq as ct,ao as rs,bO as ss}from"./vendor-icons.bDPCiqgI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const ns="modulepreload",os=function(e,t){return new URL(e,t).href},dt={},h=function(t,a,r){let s=Promise.resolve();if(a&&a.length>0){let i=function(d){return Promise.all(d.map(b=>Promise.resolve(b).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=c?.nonce||c?.getAttribute("nonce");s=i(a.map(d=>{if(d=os(d,r),d in dt)return;dt[d]=!0;const b=d.endsWith(".css"),_=b?'[rel="stylesheet"]':"";if(!!r)for(let G=l.length-1;G>=0;G--){const te=l[G];if(te.href===d&&(!b||te.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${_}`))return;const w=document.createElement("link");if(w.rel=b?"stylesheet":ns,b||(w.as="script"),w.crossOrigin="",w.href=d,f&&w.setAttribute("nonce",f),document.head.appendChild(w),b)return new Promise((G,te)=>{w.addEventListener("load",G),w.addEventListener("error",()=>te(new Error(`Unable to preload CSS for ${d}`)))})}))}function n(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&n(l.reason);return t().catch(n)})},is=`html.theme-switching,\r
html.theme-switching *,\r
html.theme-switching *::before,\r
html.theme-switching *::after {\r
  transition: none !important;\r
}\r
\r
:root {\r
  --sk-category-gamer: #00d084;\r
  --sk-brand-surface: color-mix(in srgb, var(--sk-brand) 4%, var(--sk-palette-neutral-000000));\r
  --sk-ds-on-accent: var(--sk-palette-neutral-ffffff);\r
  --sk-nav-surface: var(--sk-home-ui-surface);\r
  --sk-palette-green-moss: #3f5d46;\r
  --sk-palette-neutral-ffffff: #ffffff;\r
  --sk-palette-neutral-0a0a0a: #0a0a0a;\r
  --sk-palette-blue-94a3b8: #94a3b8;\r
  --sk-palette-blue-64748b: #64748b;\r
  --sk-palette-orange-f59e0b: #f59e0b;\r
  --sk-palette-orange-d6b362: #d6b362;\r
  --sk-palette-neutral-f5f5f7: #f5f5f7;\r
  --sk-palette-blue-f9fafb: #f9fafb;\r
  --sk-palette-blue-f3f4f6: #f3f4f6;\r
  --sk-palette-blue-e5e7eb: #e5e7eb;\r
  --sk-palette-blue-f1f2f4: #f1f2f4;\r
  --sk-palette-blue-d1d5db: #d1d5db;\r
  --sk-palette-blue-0f172a: #0f172a;\r
  --sk-palette-blue-374151: #374151;\r
  --sk-palette-neutral-6b7280: #6b7280;\r
  --sk-palette-neutral-9ca3af: #9ca3af;\r
  --sk-palette-teal-10b981: #10b981;\r
  --sk-palette-red-b45309: #b45309;\r
  --sk-palette-cyan-0369a1: #0369a1;\r
  --sk-palette-cyan-0284c7: #0284c7;\r
  --sk-palette-orange-d97706: #d97706;\r
  --sk-palette-red-dc2626: #dc2626;\r
  --sk-palette-neutral-000000: #000000;\r
  --sk-palette-neutral-0a0a0b: #0a0a0b;\r
  --sk-palette-neutral-101012: #101012;\r
  --sk-palette-neutral-050506: #050506;\r
  --sk-palette-neutral-f4f4f5: #f4f4f5;\r
  --sk-palette-orange-fbbf24: #fbbf24;\r
  --sk-palette-cyan-38bdf8: #38bdf8;\r
  --sk-palette-red-f87171: #f87171;\r
  --sk-palette-orange-fcd34d: #fcd34d;\r
  --sk-palette-neutral-080808: #080808;\r
  --sk-palette-teal-14b8a6: #14b8a6;\r
  --sk-palette-orange-1a1204: #1a1204;\r
  --sk-palette-orange-fde68a: #fde68a;\r
  --sk-palette-teal-021a10: #021a10;\r
  --sk-palette-blue-f8fafc: #f8fafc;\r
  --sk-palette-blue-0b0f14: #0b0f14;\r
  --sk-palette-neutral-0c0c0e: #0c0c0e;\r
  --sk-palette-indigo-060608: #060608;\r
  --sk-palette-red-ff5e22: #ff5e22;\r
  --sk-palette-red-ff8c38: #ff8c38;\r
  --sk-palette-green-00a650: #00a650;\r
  --sk-palette-red-ef4444: #ef4444;\r
  --sk-palette-red-ea580c: #ea580c;\r
  --sk-palette-red-92400e: #92400e;\r
  --sk-palette-blue-080c10: #080c10;\r
  --sk-palette-teal-050807: #050807;\r
  --sk-palette-teal-0c1110: #0c1110;\r
  --sk-palette-teal-101715: #101715;\r
  --sk-palette-teal-26342f: #26342f;\r
  --sk-palette-teal-4de1a3: #4de1a3;\r
  --sk-palette-teal-7ef0c0: #7ef0c0;\r
  --sk-palette-neutral-f3f7f5: #f3f7f5;\r
  --sk-palette-neutral-a9b5b0: #a9b5b0;\r
  --sk-palette-neutral-09090b: #09090b;\r
  --sk-palette-blue-111827: #111827;\r
  --sk-palette-blue-4b5563: #4b5563;\r
  --sk-palette-orange-8a640e: #8a640e;\r
  --sk-palette-red-3c1c06: #3c1c06;\r
  --sk-palette-red-1c0a02: #1c0a02;\r
  --sk-palette-red-2c1204: #2c1204;\r
  --sk-palette-red-ff7000: #ff7000;\r
  --sk-palette-red-ff7800: #ff7800;\r
  --sk-palette-red-221206: #221206;\r
  --sk-palette-red-0e0702: #0e0702;\r
  --sk-palette-red-ff6a00: #ff6a00;\r
  --sk-palette-red-140a03: #140a03;\r
  --sk-palette-red-080401: #080401;\r
  --sk-palette-orange-ff8700: #ff8700;\r
  --sk-palette-red-c94400: #c94400;\r
  --sk-palette-orange-ff9200: #ff9200;\r
  --sk-palette-orange-ffb347: #ffb347;\r
  --sk-palette-blue-03103c: #03103c;\r
  --sk-palette-blue-01071c: #01071c;\r
  --sk-palette-blue-0070ff: #0070ff;\r
  --sk-palette-blue-020a28: #020a28;\r
  --sk-palette-blue-010412: #010412;\r
  --sk-palette-blue-0064dc: #0064dc;\r
  --sk-palette-blue-010719: #010719;\r
  --sk-palette-blue-00030c: #00030c;\r
  --sk-palette-blue-005ac8: #005ac8;\r
  --sk-palette-blue-003a8c: #003a8c;\r
  --sk-palette-blue-0057b8: #0057b8;\r
  --sk-palette-cyan-0099cc: #0099cc;\r
  --sk-palette-cyan-4dabff: #4dabff;\r
  --sk-palette-neutral-141416: #141416;\r
  --sk-palette-neutral-e8e8e8: #e8e8e8;\r
  --sk-palette-blue-0a0f14: #0a0f14;\r
  --sk-palette-teal-059669: #059669;\r
  --sk-palette-neutral-0a0a0c: #0a0a0c;\r
  --sk-palette-rose-ff4d6d: #ff4d6d;\r
  --sk-palette-neutral-555555: #555555;\r
  --sk-palette-rose-ff3b5f: #ff3b5f;\r
  --sk-palette-neutral-0f0f11: #0f0f11;\r
  --sk-palette-neutral-888888: #888888;\r
  --sk-palette-neutral-333333: #333333;\r
  --sk-palette-neutral-f1f1f1: #f1f1f1;\r
  --sk-palette-orange-c8a700: #c8a700;\r
  --sk-palette-orange-ffd700: #ffd700;\r
  --sk-palette-blue-3483fa: #3483fa;\r
  --sk-palette-red-ff6b00: #ff6b00;\r
  --sk-palette-cyan-0078d7: #0078d7;\r
  --sk-palette-blue-14171d: #14171d;\r
  --sk-palette-blue-0b0d11: #0b0d11;\r
  --sk-palette-blue-0d0f13: #0d0f13;\r
  --sk-palette-cyan-006fc9: #006fc9;\r
  --sk-palette-cyan-008ecf: #008ecf;\r
  --sk-palette-teal-00a676: #00a676;\r
  --sk-palette-cyan-007de3: #007de3;\r
  --sk-palette-cyan-00a0df: #00a0df;\r
  --sk-palette-orange-ffaa55: #ffaa55;\r
  --sk-palette-blue-0b0d10: #0b0d10;\r
  --sk-palette-neutral-d0d0d0: #d0d0d0;\r
  --sk-palette-neutral-151518: #151518;\r
  --sk-palette-neutral-aaaaaa: #aaaaaa;\r
  --sk-palette-orange-f5a623: #f5a623;\r
  --sk-palette-neutral-cccccc: #cccccc;\r
  --sk-palette-neutral-fafafa: #fafafa;\r
  --sk-palette-blue-1e293b: #1e293b;\r
  --sk-palette-blue-e2e8f0: #e2e8f0;\r
  --sk-palette-blue-0a0d10: #0a0d10;\r
  --sk-palette-cyan-080b0d: #080b0d;\r
  --sk-palette-blue-eef2f7: #eef2f7;\r
  --sk-palette-blue-101418: #101418;\r
  --sk-palette-cyan-050708: #050708;\r
  --sk-palette-neutral-7f7f7f: #7f7f7f;\r
  --sk-palette-cyan-0b0e10: #0b0e10;\r
  --sk-palette-blue-172033: #172033;\r
  --sk-palette-teal-6ee7b7: #6ee7b7;\r
  --sk-palette-cyan-090c0e: #090c0e;\r
  --sk-palette-blue-7f8b9d: #7f8b9d;\r
  --sk-palette-neutral-5b6472: #5b6472;\r
  --sk-palette-red-c2410c: #c2410c;\r
  --sk-palette-red-fb923c: #fb923c;\r
  --sk-palette-blue-cbd5e1: #cbd5e1;\r
  --sk-palette-neutral-3a3f47: #3a3f47;\r
  --sk-palette-blue-334155: #334155;\r
  --sk-palette-green-dcfce7: #dcfce7;\r
  --sk-palette-green-f0fdf4: #f0fdf4;\r
  --sk-palette-teal-08140e: #08140e;\r
  --sk-palette-teal-06100b: #06100b;\r
  --sk-palette-teal-00e092: #00e092;\r
  --sk-palette-teal-04120c: #04120c;\r
  --sk-palette-cyan-f1f5f9: #f1f5f9;\r
  --sk-palette-blue-11141c: #11141c;\r
  --sk-palette-blue-181d26: #181d26;\r
  --sk-palette-blue-0f1218: #0f1218;\r
  --sk-palette-orange-d4af37: #d4af37;\r
  --sk-palette-orange-b89628: #b89628;\r
  --sk-palette-orange-e8c547: #e8c547;\r
  --sk-palette-orange-f3d463: #f3d463;\r
  --sk-palette-blue-0b0c10: #0b0c10;\r
  --sk-palette-blue-0d1117: #0d1117;\r
  --sk-palette-cyan-06b6d4: #06b6d4;\r
  --sk-palette-cyan-0891b2: #0891b2;\r
  --sk-palette-cyan-0e7490: #0e7490;\r
  --sk-palette-teal-00875a: #00875a;\r
  --sk-palette-neutral-050505: #050505;\r
  --sk-palette-orange-f0d78c: #f0d78c;\r
  --sk-palette-blue-475569: #475569;\r
  --sk-palette-neutral-101214: #101214;\r
  --sk-palette-cyan-22d3ee: #22d3ee;\r
  --sk-palette-blue-526175: #526175;\r
  --sk-palette-cyan-0f2d41: #0f2d41;\r
  --sk-palette-blue-8fa3b8: #8fa3b8;\r
  --sk-palette-cyan-94bedc: #94bedc;\r
  --sk-palette-blue-0a141e: #0a141e;\r
  --sk-palette-blue-06090e: #06090e;\r
  --sk-palette-orange-e0a83a: #e0a83a;\r
  --sk-palette-blue-0c1017: #0c1017;\r
  --sk-palette-cyan-67e8f9: #67e8f9;\r
  --sk-palette-blue-121823: #121823;\r
  --sk-palette-blue-0a0e15: #0a0e15;\r
  --sk-palette-blue-172030: #172030;\r
  --sk-palette-blue-0b0f17: #0b0f17;\r
  --sk-palette-blue-141a26: #141a26;\r
  --sk-palette-blue-101621: #101621;\r
  --sk-palette-blue-090d13: #090d13;\r
  --sk-palette-indigo-7c3aed: #7c3aed;\r
  --sk-palette-indigo-a78bfa: #a78bfa;\r
  --sk-palette-neutral-d0d8d3: #d0d8d3;\r
  --sk-palette-neutral-f0f0f0: #f0f0f0;\r
  --sk-palette-cyan-00a3c7: #00a3c7;\r
  --sk-palette-blue-07090d: #07090d;\r
  --sk-palette-orange-d7a53b: #d7a53b;\r
  --sk-palette-neutral-1a1a1d: #1a1a1d;\r
  --sk-palette-blue-080b12: #080b12;\r
  --sk-palette-blue-101620: #101620;\r
  --sk-palette-neutral-c0c0c0: #c0c0c0;\r
  --sk-palette-indigo-f9f9fb: #f9f9fb;\r
  --sk-palette-teal-f7faf9: #f7faf9;
  --sk-palette-neutral-f9faf9: #f9faf9;\r
  --sk-palette-red-ff9a4a: #ff9a4a;\r
  --sk-palette-teal-00c47c: #00c47c;\r
  --sk-palette-rose-ff5c6a: #ff5c6a;\r
  --sk-palette-neutral-1a1a1a: #1a1a1a;\r
  --sk-palette-blue-9fb3c8: #9fb3c8;\r
  --sk-palette-violet-a855f7: #a855f7;\r
  --sk-palette-blue-3b82f6: #3b82f6;\r
  --sk-palette-neutral-111111: #111111;\r
  --sk-palette-neutral-222222: #222222;\r
  --sk-palette-blue-2a2e36: #2a2e36;\r
  --sk-palette-blue-f1f3f5: #f1f3f5;\r
  --sk-palette-red-1a0a00: #1a0a00;\r
  --sk-palette-red-2d1200: #2d1200;\r
  --sk-palette-neutral-0e0e0e: #0e0e0e;\r
  --sk-palette-red-f97316: #f97316;\r
  --sk-palette-blue-06080d: #06080d;\r
  --sk-palette-blue-0d121c: #0d121c;\r
  --sk-palette-indigo-8b5cf6: #8b5cf6;\r
  --sk-palette-cyan-0088cc: #0088cc;\r
  --sk-palette-rose-e1306c: #e1306c;\r
  --sk-palette-red-ff0000: #ff0000;\r
  --sk-palette-teal-00f2ea: #00f2ea;\r
  --sk-palette-teal-050706: #050706;\r
  --sk-accent: var(--sk-home-ui-accent);\r
}\r
\r
html.dark {\r
  --sk-nav-surface: var(--sk-home-ui-surface);\r
  --sk-ds-on-accent: var(--sk-brand-on-dark-ink);\r
  --sk-accent: var(--sk-home-ui-accent);\r
}\r
\r
:root {\r
\r
  --sk-font-brand:   'Orbitron', 'Montserrat', sans-serif;\r
  --sk-font-heading: 'Montserrat', system-ui, sans-serif;\r
  --sk-font-body:    -apple-system, 'Roboto', 'Segoe UI', Arial, sans-serif;\r
  --sk-font-mono:    'Fira Code', 'Cascadia Code', monospace;\r
\r
  --sk-text-2xs: 0.6875rem;\r
  --sk-text-xs:  0.75rem;\r
  --sk-text-sm:  0.8125rem;\r
  --sk-text-ui:  0.875rem;\r
  --sk-text-md:  0.9375rem;\r
  --sk-text-lg:  1.0625rem;\r
  --sk-text-xl:  1.25rem;\r
  --sk-leading-tight: 1.18;\r
  --sk-leading-ui: 1.35;\r
  --sk-leading-copy: 1.6;\r
\r
  --sk-green:        var(--sk-accent);\r
  --sk-green-dark:   var(--sk-accent);\r
  --sk-green-light:  var(--sk-accent);\r
  --sk-green-glow:   color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  --sk-vip:          var(--sk-palette-orange-f59e0b);\r
  --sk-danger:       var(--sk-palette-red-ef4444);\r
  --sk-blue:         var(--sk-palette-cyan-0078d7);\r
  --sk-cyan:         var(--sk-palette-cyan-00a3c7);\r
  --sk-ink:          var(--sk-palette-blue-07090d);\r
  --sk-brass:        var(--sk-palette-orange-d7a53b);\r
\r
  --sk-bg-page:      var(--sk-palette-teal-050807);\r
  --sk-bg-card:      var(--sk-palette-teal-101715);\r
  --sk-bg-card-h:    var(--sk-palette-teal-101715);\r
  --sk-bg-elevated:  var(--sk-palette-teal-101715);\r
  --sk-bg-panel:     var(--sk-palette-teal-0c1110);\r
  --sk-bg-panel-h:   var(--sk-palette-teal-0c1110);\r
\r
  --sk-dark-t1:  var(--sk-palette-neutral-f3f7f5);\r
  --sk-dark-t2:  var(--sk-palette-neutral-a9b5b0);\r
  --sk-dark-t3:  color-mix(in srgb, var(--sk-palette-neutral-a9b5b0) 75%, transparent);\r
  --sk-dark-t4:  color-mix(in srgb, var(--sk-palette-neutral-a9b5b0) 50%, transparent);\r
\r
  --sk-light-t1: var(--sk-palette-blue-111827);\r
  --sk-light-t2: var(--sk-palette-blue-374151);\r
  --sk-light-t3: var(--sk-palette-neutral-6b7280);\r
  --sk-light-t4: var(--sk-palette-neutral-9ca3af);\r
\r
  --sk-border-1: var(--sk-palette-teal-26342f);\r
  --sk-border-2: var(--sk-palette-teal-26342f);\r
  --sk-border-3: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 12%, transparent);\r
  --sk-border-g: color-mix(in srgb, var(--sk-accent) 30%, transparent);\r
  --sk-border-blue: color-mix(in srgb, var(--sk-palette-cyan-0078d7) 34%, transparent);\r
  --sk-border-premium: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);\r
\r
  --sk-r-xs:   4px;\r
  --sk-r-sm:   6px;\r
  --sk-r-md:   8px;\r
  --sk-r-lg:   12px;\r
  --sk-r-xl:   16px;\r
  --sk-r-full: 9999px;\r
\r
  --sk-control-h-sm: 34px;\r
  --sk-control-h-md: 40px;\r
  --sk-control-h-lg: 46px;\r
  --sk-card-pad: 14px;\r
  --sk-section-gap: 28px;\r
  --sk-mobile-gutter: 12px;\r
\r
  --sk-shadow-sm:    0 1px 4px color-mix(in srgb, var(--sk-palette-neutral-000000) 12%, transparent);\r
  --sk-shadow-md:    0 4px 16px color-mix(in srgb, var(--sk-palette-neutral-000000) 25%, transparent);\r
  --sk-shadow-lg:    0 8px 32px color-mix(in srgb, var(--sk-palette-neutral-000000) 45%, transparent);\r
  --sk-shadow-brand: 0 4px 20px color-mix(in srgb, var(--sk-accent) 25%, transparent);\r
  --sk-shadow-glow:  0 0 20px color-mix(in srgb, var(--sk-accent) 15%, transparent);\r
  --sk-shadow-card-premium: 0 18px 48px color-mix(in srgb, var(--sk-palette-neutral-000000) 38%, transparent), inset 0 1px 0 color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5%, transparent);\r
  --sk-shadow-card-hover: 0 22px 58px color-mix(in srgb, var(--sk-palette-neutral-000000) 46%, transparent), 0 0 0 1px color-mix(in srgb, var(--sk-accent) 25%, transparent), 0 0 30px color-mix(in srgb, var(--sk-accent) 16%, transparent);\r
\r
  --sk-card-active-bd: color-mix(in srgb, var(--sk-brand) 85%, transparent);\r
  --sk-card-active-shadow:\r
    0 0 0 1px color-mix(in srgb, var(--sk-brand) 55%, transparent),\r
    0 0 16px 1px color-mix(in srgb, var(--sk-brand) 32%, transparent),\r
    0 16px 38px color-mix(in srgb, var(--sk-palette-neutral-000000) 48%, transparent);\r
\r
  --sk-t-fast:   0.06s cubic-bezier(0.16, 1, 0.3, 1);\r
  --sk-t-base:   0.10s cubic-bezier(0.16, 1, 0.3, 1);\r
  --sk-t-slow:   0.15s cubic-bezier(0.16, 1, 0.3, 1);\r
  --sk-t-spring: 0.18s cubic-bezier(0.2, 0.9, 0.3, 1);\r
\r
  --sk-t-spring-ml:   0.18s cubic-bezier(0, 0, 0.3, 1.2);\r
\r
  --sk-t-modal:        0.15s cubic-bezier(0.16, 1, 0.3, 1);\r
}\r
\r
html:not(.dark) {\r
  --sk-bg-page:    var(--sk-palette-neutral-f5f5f7);\r
  --sk-bg-card:    var(--sk-palette-neutral-ffffff);\r
  --sk-bg-card-h:  var(--sk-palette-indigo-f9f9fb);\r
  --sk-bg-elevated:var(--sk-palette-neutral-ffffff);\r
  --sk-bg-panel:   var(--sk-palette-neutral-ffffff);\r
  --sk-bg-panel-h: var(--sk-palette-teal-f7faf9);\r
  --sk-shadow-card-premium: 0 16px 40px color-mix(in srgb, var(--sk-palette-blue-0f172a) 8%, transparent), inset 0 1px 0 color-mix(in srgb, var(--sk-palette-neutral-ffffff) 90%, transparent);\r
  --sk-shadow-card-hover: 0 20px 44px color-mix(in srgb, var(--sk-palette-blue-0f172a) 12%, transparent), 0 0 0 1px color-mix(in srgb, var(--sk-accent) 20%, transparent);\r
\r
  --sk-border-1: color-mix(in srgb, var(--sk-palette-blue-0f172a) 9%, transparent);\r
  --sk-border-2: color-mix(in srgb, var(--sk-palette-blue-0f172a) 14%, transparent);\r
  --sk-border-3: color-mix(in srgb, var(--sk-palette-blue-0f172a) 20%, transparent);\r
  --sk-card-active-bd: var(--sk-accent);\r
  --sk-card-active-shadow:\r
    0 0 0 1px color-mix(in srgb, var(--sk-accent) 62%, transparent),\r
    0 0 12px color-mix(in srgb, var(--sk-accent) 20%, transparent),\r
    0 12px 28px color-mix(in srgb, var(--sk-palette-blue-0f172a) 12%, transparent);\r
}\r
\r
.gpu-layer {\r
  will-change: transform;\r
  transform: translateZ(0);\r
}\r
\r
.contain-paint  { contain: layout paint; }\r
.contain-strict { contain: strict; }\r
\r
.cv-auto {\r
  content-visibility: auto;\r
  contain-intrinsic-size: auto 300px;\r
}\r
\r
.touch-none        { touch-action: pan-x pan-y; }\r
.touch-pan         { touch-action: pan-x pan-y; }\r
.touch-pan-x       { touch-action: pan-x pan-y; }\r
.touch-pan-y       { touch-action: pan-y; }\r
.touch-pinch-zoom  { touch-action: pan-x pan-y pinch-zoom; }\r
\r
.no-tap-highlight  { -webkit-tap-highlight-color: color-mix(in srgb, var(--sk-palette-neutral-000000) 0%, transparent); }\r
\r
.no-select {\r
  -webkit-user-select: none;\r
  user-select: none;\r
}\r
\r
.snap-x-mandatory {\r
  scroll-snap-type: x mandatory;\r
  overflow-x: auto;\r
  -webkit-overflow-scrolling: touch;\r
  scroll-behavior: auto;\r
  scrollbar-width: none;\r
}\r
.snap-x-mandatory::-webkit-scrollbar { display: none; }\r
\r
.snap-start { scroll-snap-align: start; }\r
.snap-center { scroll-snap-align: center; }\r
\r
.backface-hidden {\r
  -webkit-backface-visibility: hidden;\r
  backface-visibility: hidden;\r
}\r
\r
.sr-only {\r
  position: absolute;\r
  width: 1px;\r
  height: 1px;\r
  padding: 0;\r
  margin: -1px;\r
  overflow: hidden;\r
  clip: rect(0 0 0 0);\r
  white-space: nowrap;\r
  border: 0;\r
}\r
\r
input[type="file"].sr-only {\r
  display: none;\r
}\r
\r
:root {\r
  --sk-ds-page:        var(--sk-palette-neutral-f5f5f7);\r
  --sk-home-ui-accent: var(--sk-palette-green-moss);\r
  --sk-home-ui-on-accent: var(--sk-palette-neutral-ffffff);\r
  --sk-home-ui-surface: var(--sk-palette-neutral-f9faf9);\r
  --sk-home-ui-raised: var(--sk-palette-neutral-ffffff);\r
  --sk-home-ui-line: color-mix(in srgb, var(--sk-palette-green-moss) 18%, var(--sk-palette-neutral-ffffff));\r
  --sk-home-ui-text: var(--sk-palette-blue-0f172a);\r
  --sk-home-ui-muted: color-mix(in srgb, var(--sk-palette-green-moss) 65%, var(--sk-palette-blue-374151));\r
  --sk-home-ui-active: color-mix(in srgb, var(--sk-palette-green-moss) 7%, var(--sk-palette-neutral-ffffff));\r
  --sk-ds-surface:     var(--sk-palette-neutral-ffffff);\r
  --sk-ds-surface-2:   var(--sk-palette-blue-f9fafb);\r
  --sk-ds-surface-3:   var(--sk-palette-blue-f3f4f6);\r
  --sk-ds-inset:       var(--sk-palette-blue-f9fafb);\r
  --sk-ds-line:        var(--sk-palette-blue-e5e7eb);\r
  --sk-ds-line-soft:   var(--sk-palette-blue-f1f2f4);\r
  --sk-ds-line-strong: var(--sk-palette-blue-d1d5db);\r
  --sk-ds-t1: var(--sk-palette-blue-0f172a);\r
  --sk-ds-t2: var(--sk-palette-blue-374151);\r
  --sk-ds-t3: var(--sk-palette-neutral-6b7280);\r
  --sk-ds-t4: var(--sk-palette-neutral-9ca3af);\r
  --sk-ds-accent:        var(--sk-home-ui-accent);  \r
  --sk-ds-accent-strong: var(--sk-home-ui-accent);\r
  --sk-ds-accent-soft:   color-mix(in srgb, var(--sk-home-ui-accent) 10%, transparent);\r
  --sk-ds-accent-line:   color-mix(in srgb, var(--sk-home-ui-accent) 28%, transparent);\r
  --sk-ds-accent-glow:   color-mix(in srgb, var(--sk-home-ui-accent) 22%, transparent);\r
  --sk-ds-premium:       var(--sk-palette-red-b45309);  \r
  --sk-ds-premium-soft:  color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  --sk-ds-premium-line:  color-mix(in srgb, var(--sk-palette-orange-f59e0b) 28%, transparent);\r
  --sk-ds-info:          var(--sk-palette-cyan-0369a1);  \r
  --sk-ds-info-soft:     color-mix(in srgb, var(--sk-palette-cyan-0284c7) 10%, transparent);\r
  --sk-ds-info-line:     color-mix(in srgb, var(--sk-palette-cyan-0284c7) 25%, transparent);\r
  --sk-ds-warn:          var(--sk-palette-red-b45309);  \r
  --sk-ds-warn-soft:     color-mix(in srgb, var(--sk-palette-orange-d97706) 10%, transparent);\r
  --sk-ds-warn-line:     color-mix(in srgb, var(--sk-palette-orange-d97706) 25%, transparent);\r
  --sk-ds-danger:        var(--sk-palette-red-dc2626);  \r
  --sk-ds-danger-soft:   color-mix(in srgb, var(--sk-palette-red-dc2626) 8%, transparent);\r
  --sk-ds-danger-line:   color-mix(in srgb, var(--sk-palette-red-dc2626) 24%, transparent);\r
  --sk-ds-neutral-soft:  color-mix(in srgb, var(--sk-palette-blue-64748b) 10%, transparent);\r
  --sk-ds-neutral-line:  color-mix(in srgb, var(--sk-palette-blue-64748b) 22%, transparent);\r
  --sk-ds-shadow-1: 0 1px 2px color-mix(in srgb, var(--sk-palette-blue-0f172a) 5%, transparent), 0 8px 24px color-mix(in srgb, var(--sk-palette-blue-0f172a) 4%, transparent);\r
  --sk-ds-shadow-2: 0 2px 6px color-mix(in srgb, var(--sk-palette-blue-0f172a) 7%, transparent), 0 18px 44px color-mix(in srgb, var(--sk-palette-blue-0f172a) 7%, transparent);\r
}\r
\r
html.dark {\r
  --sk-ds-page:        var(--sk-palette-teal-050807);\r
  --sk-home-ui-accent: var(--sk-brand);\r
  --sk-home-ui-on-accent: var(--sk-brand-ink);\r
  --sk-home-ui-surface: var(--sk-palette-teal-0c1110);\r
  --sk-home-ui-raised: var(--sk-palette-teal-101715);\r
  --sk-home-ui-line: color-mix(in srgb, var(--sk-palette-neutral-a9b5b0) 22%, var(--sk-palette-teal-0c1110));\r
  --sk-home-ui-text: var(--sk-palette-blue-f8fafc);\r
  --sk-home-ui-muted: var(--sk-palette-neutral-a9b5b0);\r
  --sk-home-ui-active: color-mix(in srgb, var(--sk-brand) 5%, var(--sk-palette-teal-0c1110));\r
  --sk-ds-surface:     var(--sk-palette-teal-101715);\r
  --sk-ds-surface-2:   var(--sk-palette-teal-0c1110);\r
  --sk-ds-surface-3:   color-mix(in srgb, var(--sk-palette-teal-26342f) 40%, transparent);\r
  --sk-ds-surface-alt: var(--sk-palette-teal-0c1110);\r
  --sk-ds-inset:       var(--sk-palette-teal-050807);\r
  --sk-ds-line:        var(--sk-palette-teal-26342f);\r
  --sk-ds-line-soft:   color-mix(in srgb, var(--sk-palette-teal-26342f) 65%, transparent);\r
  --sk-ds-line-strong: color-mix(in srgb, var(--sk-palette-neutral-ffffff) 15%, transparent);\r
  --sk-border-1:       var(--sk-palette-teal-26342f);\r
  --sk-border-2:       var(--sk-palette-teal-26342f);\r
  --sk-ds-t1: var(--sk-palette-neutral-f3f7f5);\r
  --sk-ds-t2: var(--sk-palette-neutral-a9b5b0);\r
  --sk-ds-t3: color-mix(in srgb, var(--sk-palette-neutral-a9b5b0) 75%, transparent);\r
  --sk-ds-t4: color-mix(in srgb, var(--sk-palette-neutral-a9b5b0) 50%, transparent);\r
  --sk-ds-accent:        var(--sk-home-ui-accent);\r
  --sk-ds-accent-strong: var(--sk-home-ui-accent);\r
  --sk-ds-accent-soft:   color-mix(in srgb, var(--sk-home-ui-accent) 10%, transparent);\r
  --sk-ds-accent-line:   color-mix(in srgb, var(--sk-home-ui-accent) 26%, transparent);\r
  --sk-ds-accent-glow:   color-mix(in srgb, var(--sk-home-ui-accent) 45%, transparent);\r
  --sk-ds-premium:       var(--sk-palette-orange-fbbf24);\r
  --sk-ds-premium-soft:  color-mix(in srgb, var(--sk-palette-orange-fbbf24) 10%, transparent);\r
  --sk-ds-premium-line:  color-mix(in srgb, var(--sk-palette-orange-fbbf24) 26%, transparent);\r
  --sk-ds-info:          var(--sk-palette-cyan-38bdf8);\r
  --sk-ds-info-soft:     color-mix(in srgb, var(--sk-palette-cyan-38bdf8) 10%, transparent);\r
  --sk-ds-info-line:     color-mix(in srgb, var(--sk-palette-cyan-38bdf8) 24%, transparent);\r
  --sk-ds-warn:          var(--sk-palette-orange-f59e0b);\r
  --sk-ds-warn-soft:     color-mix(in srgb, var(--sk-palette-orange-f59e0b) 10%, transparent);\r
  --sk-ds-warn-line:     color-mix(in srgb, var(--sk-palette-orange-f59e0b) 26%, transparent);\r
  --sk-ds-danger:        var(--sk-palette-red-f87171);\r
  --sk-ds-danger-soft:   color-mix(in srgb, var(--sk-palette-red-f87171) 9%, transparent);\r
  --sk-ds-danger-line:   color-mix(in srgb, var(--sk-palette-red-f87171) 24%, transparent);\r
  --sk-ds-neutral-soft:  color-mix(in srgb, var(--sk-palette-neutral-ffffff) 5%, transparent);\r
  --sk-ds-neutral-line:  color-mix(in srgb, var(--sk-palette-neutral-ffffff) 10%, transparent);\r
  --sk-ds-shadow-1: 0 10px 28px color-mix(in srgb, var(--sk-palette-neutral-000000) 34%, transparent);\r
  --sk-ds-shadow-2: 0 18px 48px color-mix(in srgb, var(--sk-palette-neutral-000000) 46%, transparent);\r
}\r
`,ls="#4de1a3",cs={primary:ls};function Ie(e){return[1,3,5].map(t=>parseInt(e.slice(t,t+2),16))}function I(e){return`#${e.map(t=>Math.round(t).toString(16).padStart(2,"0")).join("")}`}function Ce(e,t,a){return e.map((r,s)=>r+(t[s]-r)*a)}function ut(e){return e.reduce((t,a,r)=>{const s=a/255;return t+(s<=.04045?s/12.92:((s+.055)/1.055)**2.4)*[.2126,.7152,.0722][r]},0)}function O(e,t){const a=ut(e),r=ut(t);return(Math.max(a,r)+.05)/(Math.min(a,r)+.05)}function ft(e,t,a){if(O(e,t)>=5.5)return e;let r=0,s=1;for(let n=0;n<20;n++){const i=(r+s)/2,l=Ie(I(Ce(e,a,i)));O(l,t)>=5.5?s=i:r=i}return Ie(I(Ce(e,a,s)))}function ds(e){if(!/^#[\da-f]{6}$/i.test(e))throw new Error("ColorsConfig.json: primary deve conter uma cor hexadecimal de 6 dígitos, como #01DFCD");const t=Ie(e),a=[255,255,255],r=[0,0,0],s=[7,26,24],n=O(s,t)>=O(a,t)?s:a,i=O(n,t)>=4.5?n:r,l=ft(t,[10,10,11],a),c=O(s,l)>=O(a,l)?s:a,f=e.toLowerCase()==="#4de1a3",d=f?"#7ef0c0":I(Ce(t,i!==a?a:r,.2)),b=f?"#050807":I(i);return Object.freeze({"--sk-brand":I(t),"--sk-brand-dark":I(ft(t,a,r)),"--sk-brand-hover":d,"--sk-brand-ink":b,"--sk-brand-on-dark":I(l),"--sk-brand-on-dark-ink":I(c)})}const $t=ds(cs.primary);`${Object.entries($t).map(([e,t])=>`${e}:${t};`).join("")}`;const Ut=new Map(Array.from(is.matchAll(/(--[\w-]+)\s*:\s*(#[\da-f]{6})\s*;/gi),e=>[e[1],e[2]]));Object.entries($t).forEach(([e,t])=>Ut.set(e,t));function m(e,t){const a=Ut.get(e);if(!a)throw new Error(`Token de cor desconhecido: ${e}`);if(t===void 0)return a;if(!Number.isFinite(t)||t<0||t>1)throw new RangeError("Opacidade deve estar entre 0 e 1");return`rgba(${[1,3,5].map(s=>parseInt(a.slice(s,s+2),16)).join(", ")}, ${t})`}const k=Object.freeze({name:"Skull Legion",shortName:"SkullLegion",slug:"skull-legion",prefix:"skull",version:"1.0.0",tagline:"Sistemas Operacionais de Alta Performance",subtitle:"Software Premium",description:"Plataforma de Sistemas Operacionais de Alta Performance e Ferramentas Exclusivas",company:"Skull Legion Store",copyrightYear:2026,defaultLocale:"pt-BR",currency:"BRL",currencySymbol:"R$"}),Bt=Object.freeze({logo64:"assets/logo-64.png",logo192:"assets/logo-192.png",logo256:"assets/logo-256.png",logoMaskable256:"assets/logo-maskable-256.png",favicon:"assets/favicon.ico",placeholder:"assets/placeholder.webp",appleTouchIcon:"assets/apple-touch-icon.png"}),zt=Object.freeze({email:"mendeslidera1@gmail.com",href:"mailto:mendeslidera1@gmail.com",message:"Envie sua dúvida ou problema aqui: ✉️ mendeslidera1@gmail.com"}),us=Object.freeze({telegram:"https://t.me/+c8ORQJLsTFQyY2Fh",telegramGrupo:"https://t.me/+TYJye7KLha9jNzgx",instagram:"https://www.instagram.com/cskull_softwares/",instagramDev:"https://www.instagram.com/cskull_dev/",youtube:"https://www.youtube.com/@CHRISSKULLOFICIAL?sub_confirmation=1",tiktok:"https://www.tiktok.com/@cskull_softwares?_t=ZM-8ubo8hZVepq&_r=1",facebookGroup:"https://www.facebook.com/groups/windows.lite.entusiastas",whatsapp:"#",github:"#",email:zt.href}),fs=Object.freeze({nome:"Christian Mendes Ferreira",alias:"Chris Skull",cargo:"Full Stack Developer & OS Optimizer",descricao:"Desenvolvedor de softwares e entusiasta de programação com mais de 5 anos de atuação no mercado digital. Especialista em otimizações técnicas para sistemas operacionais e criação de ecossistemas web de alta performance.",stacks:["React","TypeScript","Node.js","System Optimization","UX/UI Design"]}),ps=Object.freeze({stages:[{number:"01",tag:"ETAPA 01 · ESCOLHA",title:"Escolha da Edição Ideal",description:(e=k.name)=>`Na coleção ${e}, compare as edições por perfil de uso. Escolha a base compatível antes de adicionar ao carrinho; pacotes incluem somente os itens descritos na oferta.`,detail:"Cada edição foi desenhada para uma demanda real: trabalho pesado, jogos de alta performance ou computadores clássicos."},{number:"02",tag:"ETAPA 02 · PAGAMENTO PIX",title:"Pagamento Instantâneo via PIX",description:()=>"Gere o QR Code PIX dinâmico. A confirmação bancária é instantânea e o sistema valida em poucos segundos.",detail:"Processamento 100% seguro pelo Mercado Pago com criptografia de ponta a ponta."},{number:"03",tag:"ETAPA 03 · DOWNLOAD DIRETO",title:"Acesso e Entrega Imediata",description:()=>"O sistema aprova a transação e libera o link de alta velocidade na aba Downloads da sua conta.",detail:"Acesso permanente às versões adquiridas com orientações passo a passo para instalação."}],getLegalDisclaimer:(e=k.name,t=new Date().getFullYear())=>`© ${t} ${e} · Software Premium. A ${e} não vende licenças do Windows — a distribuição do sistema base é gratuita pela Microsoft. O que você adquire é o serviço de otimização, as ferramentas exclusivas e o suporte da plataforma. Windows é marca registrada da Microsoft Corporation.`,footerBrandDesc:"Sistemas operacionais de alta performance e ferramentas exclusivas, projetados por área de uso — jogo, trabalho e operação corporativa."}),ms=Object.freeze({userCart:"skull_user_cart",session:"skull_session",sessionBuild:"skull_session_build",cookieConsent:"skull_cookie_consent",theme:"skull_theme",themePreference:"skull_theme_preference",viewMode:"skull_view_mode",activeTab:"skull_active_tab",refToken:"skull_ref_token",appliedCoupon:"skull_applied_coupon",appliedCouponOwner:"skull_applied_coupon_owner",appliedCouponRate:"skull_applied_coupon_rate",affiliateCode:"skull_affiliate_code",affiliateResumo:"skull_affiliate_resumo",affiliateCommissions:"skull_affiliate_commissions",affiliateRanking:"skull_affiliate_ranking",platformConfig:"skull_platform_config",storeFeatures:"skull_store_features",storeOptimizations:"skull_store_optimizations",forceReloadSignal:"skull_force_reload_signal",sidebarCollapsed:"skull_sidebar_collapsed",settingsLocalUpdate:"skull_settings_local_update",showcaseUpdated:"skull_showcase_updated",catalogUpdated:"skull_catalog_updated",cartRecoveryDismissed:"skull_cart_recovery_dismissed",mockBadgeDismissed:"skull_mock_badge_dismissed",idbDatabase:"skull-idb",pwaCachePrefix:"skull-legion-"}),bs=Object.freeze({navigate:"skull:navigate",themeChanged:"skull:theme-changed",authChanged:"skull:auth-changed",userProfileUpdated:"skull:user-profile-updated",cartUpdated:"skull:cart-updated",toast:"skull:toast",catalogInvalidated:"skull:catalog-invalidated",showcaseInvalidated:"skull:showcase-invalidated",openAuthModal:"skull:open-auth-modal"}),hs=Object.freeze({mainContent:"skull-main-content",installBanner:"skull-install-banner",offlineAlert:"skull-offline-alert",headerCartBtn:"skull-header-cart-btn",bnbCartBtn:"skull-bnb-cart-btn",rootContainer:"root",themeColorMeta:"skull-theme-color",navbuttonColorMeta:"skull-navbutton-color",appleStatusBarMeta:"skull-apple-status-bar"});function ks(e,t=k.prefix){return`${t}_${e.replace(/^[_-]+/,"")}`}function gs(e,t=k.prefix){return`${t}:${e.replace(/^[:_-]+/,"")}`}const je=Object.freeze({defaultTheme:"dark",colors:Object.freeze({darkBackground:m("--sk-palette-neutral-0a0a0a"),darkNavigation:m("--sk-palette-teal-0c1110"),lightNavigation:m("--sk-palette-neutral-f9faf9"),lightBackground:m("--sk-palette-neutral-ffffff"),primary:m("--sk-brand"),primaryDark:m("--sk-brand-dark"),primaryLight:m("--sk-brand"),primaryGlow:m("--sk-brand",.25),vip:m("--sk-palette-orange-f59e0b"),danger:m("--sk-palette-red-ef4444"),blue:m("--sk-palette-cyan-0078d7"),cyan:m("--sk-palette-cyan-00a3c7"),ink:m("--sk-palette-blue-07090d"),brass:m("--sk-palette-orange-d7a53b")}),fonts:Object.freeze({brand:"'Orbitron', 'Montserrat', sans-serif",heading:"'Montserrat', system-ui, sans-serif",body:"-apple-system, 'Roboto', 'Segoe UI', Arial, sans-serif",mono:"'Fira Code', 'Cascadia Code', monospace"}),timings:Object.freeze({heroSlideMs:3500,heroTransitionMs:200,scrollIdleMs:500,swipeMinPx:48,ringDurationMs:2800,defaultDebounceMs:300}),breakpoints:Object.freeze({mobileMaxPx:767,tabletMinPx:768,desktopMinPx:1024})});function vs(e){return e==="dark"?je.colors.darkNavigation:je.colors.lightNavigation}const v=Object.freeze({ADMIN:"admin",COLLABORATOR:"colaborador",VIP:"vip",MEMBER:"membro",USER:"user",VISITOR:"visitante"}),xs=Object.freeze({ACCESS_ADMIN:[v.ADMIN],MANAGE_PRODUCTS:[v.ADMIN],MANAGE_USERS:[v.ADMIN],VIEW_FINANCE:[v.ADMIN],VIEW_COLLABORATOR_PANEL:[v.ADMIN,v.COLLABORATOR,v.VIP,v.USER],VIP_DOWNLOADS:[v.ADMIN,v.VIP],USER_DOWNLOADS:[v.ADMIN,v.COLLABORATOR,v.VIP,v.USER]}),ys=Object.freeze({maxPinAttempts:5,minPasswordLength:6,sessionTtlHours:24,minProductFloorPrice:1,minComboFloorPrice:10,defaultCommissionRate:.1,defaultAffiliateCouponDiscountRate:.05}),F=Object.freeze({url:"https://drive.google.com/drive/folders/1xpGNYt86hWX2oqnDpHhCmY03Fu_a1UAJ?usp=sharing",appName:`${k.name} Downloader`,getInstructions:(e=`${k.name} Downloader`)=>`Abrimos a pasta oficial de downloads. Lá estão as instruções e o instalador do ${e}: baixe o aplicativo, entre com a mesma conta desta loja e os seus sistemas liberados aparecem para download.`}),_s=Object.freeze({downloadPortal:F,yampi:Object.freeze({checkoutTimerSeconds:466}),contact:zt});function ws(e){return String(e||"").trim()||F.url}const Io=Object.freeze({url:F.url,app:F.appName,comoFunciona:F.getInstructions()}),Ss=Object.freeze([]),Es=Object.freeze({PAGINATION_SIZE:50,MAX_AFFILIATES_SHOWN:100,CHART_MONTHS_HISTORY:12,DEFAULT_DEBOUNCE_MS:300,DASHBOARD_TOP_LIMIT:5});function As(e=k.name){const t=String(e||"").trim();if(!t)return{first:"",rest:"",fullUpper:""};const a=t.split(/\s+/);if(a.length===1)return{first:a[0].toUpperCase(),rest:"",fullUpper:t.toUpperCase()};const r=a[0].toUpperCase(),s=a.slice(1).join(" ").toUpperCase();return{first:r,rest:s,fullUpper:t.toUpperCase()}}function Ns(e,t=k.name,a=k.tagline){const r=String(e||"").trim();return r?`${r} | ${t}`:`${t} | ${a}`}function Is(e,t={}){const a={PROJECT_NAME:k.name,PROJECT_SLUG:k.slug,PROJECT_TAGLINE:k.tagline,PROJECT_SUBTITLE:k.subtitle,COMPANY_NAME:k.company,...t};return e.replace(/\{\{([A-Z0-9_]+)\}\}/g,(r,s)=>a[s]??`{{${s}}}`)}Object.freeze({project:k,brand:Object.freeze({assets:Bt,social:us,creator:fs,institutional:ps}),identifiers:Object.freeze({storage:ms,events:bs,dom:hs,createStorageKey:ks,createEventChannel:gs}),theme:Object.freeze({...je,getNativeChromeColor:vs}),security:Object.freeze({roles:v,capabilities:xs,policies:ys}),endpoints:Object.freeze({..._s,portal:F,resolveDownloadTarget:ws}),limits:Object.freeze({...Es,emptyArray:Ss}),helpers:Object.freeze({splitBrandName:As,formatPageTitle:Ns,interpolateBrandText:Is})});const Cs={lastBuild:"sem rótulo",buildHash:"1793850976"};var pt={mock:!1,versao:"3.0.0",cenario:"PRODUCAO"};let Oe=!1;try{Oe=typeof pt<"u"&&pt?.mock===!0}catch{Oe=!1}const Wt=Oe,Ft={apiKey:"AIzaSyDGCSyXDOILIoVIvYxZwBzZTRs-OWoLy3g",authDomain:"e-commerce-skull.firebaseapp.com",projectId:"e-commerce-skull",storageBucket:"e-commerce-skull.firebasestorage.app",messagingSenderId:"632968992801",appId:"1:632968992801:web:78b2ba84b52e747b922b60"};function Te(e){if(e==null||typeof e!="object"||e instanceof Date||e.toMillis||e.seconds!==void 0)return e;if(Array.isArray(e))return e.filter(a=>a!==void 0).map(a=>Te(a));const t={};for(const[a,r]of Object.entries(e))r!==void 0&&(t[a]=Te(r));return t}function Pe(e,t="root"){if(e===void 0)throw new Error(`Function addDoc() called with invalid data. Unsupported field value: undefined (found in field ${t})`);if(!(e===null||typeof e!="object")&&!(e instanceof Date||e.toMillis||e.seconds!==void 0)){if(Array.isArray(e)){e.forEach((a,r)=>Pe(a,`${t}[${r}]`));return}for(const[a,r]of Object.entries(e)){const s=t==="root"?a:`${t}.${a}`;if(r===void 0)throw new Error(`Function addDoc() called with invalid data. Unsupported field value: undefined (found in field ${s})`);Pe(r,s)}}}const js=["googleapis.com","firebaseio.com","firebaseapp.com","firebasestorage.app","appspot.com","cloudfunctions.net","google.com","gstatic.com","mercadopago.com","mercadolibre.com","mlstatic.com","googleusercontent.com","github.io","skullegion.com.br"];function Os(e){const t=String(e||"").trim();if(!t)return!1;if(t.startsWith("/")||t.startsWith("./")||t.startsWith("../"))return!0;try{const a=new URL(t,typeof location<"u"?location.href:"https://localhost/");return a.protocol==="https:"||a.protocol==="http:"&&(a.hostname==="localhost"||a.hostname==="127.0.0.1")}catch{return!1}}function De(e){const t=String(e||"").toLowerCase();return t?t==="localhost"||t==="127.0.0.1"?!0:js.some(a=>t===a||t.endsWith(`.${a}`)):!1}function Vt(e){const t=[],a=String(e.authDomain||"").trim();a?De(a)||t.push(`authDomain fora dos domínios permitidos: ${a}`):t.push("authDomain ausente — o login não tem para onde ir.");const r=String(e.storageBucket||"").trim();return r&&!De(r)&&t.push(`storageBucket fora dos domínios permitidos: ${r}`),String(e.projectId||"").trim()||t.push("projectId ausente."),t}function Ts(e){const t=Vt(e);if(t.length)throw new Error(`[transportSecurity] Configuração do Firebase inválida:
  - ${t.join(`
  - `)}`)}let Le=null,Kt=null;Wt||(Le=na().length?oa():ia(Ft),Kt=la(Le));const Ps=Le,Ds=Kt;let M=null;function Ls(){if(!M){M=Promise.all([h(()=>import("./firebaseCompleto.YGl7oDR-.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),h(()=>import("./vendor-firebase.B2zrFfWZ.js").then(t=>t.D),__vite__mapDeps([1,2]),import.meta.url)]).then(async([t,a])=>(await t.sessaoRestaurada,{db:t.db,auth:t.auth,fs:a}));const e=M;e.catch(()=>{M===e&&(M=null)})}return M}const Co=Object.freeze(Object.defineProperty({__proto__:null,IS_MOCK_FIREBASE:Wt,app:Ps,assertNoFirestoreUndefined:Pe,assertSecureFirebaseHosts:Ts,carregarSdkCompleto:Ls,checkFirebaseHosts:Vt,dbLite:Ds,firebaseConfig:Ft,isAllowedBackendHost:De,isSecureTransportUrl:Os,sanitizeFirestorePayload:Te},Symbol.toStringTag,{value:"Module"})),fe="SkullLegion_LocalCache",Rs=fe,Ms=4,u={KEYVAL:"keyval",PRODUCTS:"products",IMAGES:"images",METADATA:"metadata",USERS:"users",SETTINGS:"settings",ORDERS:"orders"};let S=null;function Ve(){return typeof window<"u"&&typeof window.indexedDB<"u"||typeof indexedDB<"u"}function x(e,t){if(!Ve())return;t instanceof DOMException&&(t.name==="QuotaExceededError"||t.code===22)?console.warn(`[CacheDB] Quota de armazenamento excedida na operacao "${e}".`):console.warn(`[CacheDB] ${e} falhou:`,t)}function y(){return S||(Ve()?(S=new Promise((e,t)=>{let a;try{a=indexedDB.open(Rs,Ms)}catch(r){S=null,t(r);return}a.onblocked=()=>{console.warn("[CacheDB] Abertura do IndexedDB bloqueada por conexao ativa em outra aba.")},a.onerror=()=>{S=null,t(a.error)},a.onupgradeneeded=r=>{const s=r.target.result;if(s.objectStoreNames.contains(u.KEYVAL)||s.createObjectStore(u.KEYVAL),!s.objectStoreNames.contains(u.PRODUCTS)){const n=s.createObjectStore(u.PRODUCTS,{keyPath:"id"});n.createIndex("by_updated","updatedAt",{unique:!1}),n.createIndex("by_status","status",{unique:!1})}s.objectStoreNames.contains(u.IMAGES)||s.createObjectStore(u.IMAGES,{keyPath:"url"}).createIndex("by_cached_at","cachedAt",{unique:!1}),s.objectStoreNames.contains(u.METADATA)||s.createObjectStore(u.METADATA),s.objectStoreNames.contains(u.USERS)||s.createObjectStore(u.USERS,{keyPath:"email"}).createIndex("by_cached_at","cachedAt",{unique:!1}),s.objectStoreNames.contains(u.SETTINGS)||s.createObjectStore(u.SETTINGS),s.objectStoreNames.contains(u.ORDERS)||s.createObjectStore(u.ORDERS,{keyPath:"email"}).createIndex("by_cached_at","cachedAt",{unique:!1})},a.onsuccess=()=>{const r=a.result;r.onclose=()=>{S=null},r.onversionchange=()=>{try{r.close()}catch{}S=null},e(r)}}),S):Promise.reject(new Error("IndexedDB indisponivel neste ambiente.")))}const B={isAvailable(){return Ve()},async close(){if(S)try{(await S).close()}catch{}finally{S=null}},async get(e,t){try{const a=await y();return await new Promise((r,s)=>{const n=a.transaction(e,"readonly"),i=n.objectStore(e).get(t);i.onsuccess=()=>r(i.result),i.onerror=()=>s(i.error),n.onerror=()=>s(n.error),n.onabort=()=>s(n.error)})}catch(a){x("get",a);return}},async put(e,t,a){try{const r=await y();return await new Promise((s,n)=>{const i=r.transaction(e,"readwrite"),l=i.objectStore(e);i.oncomplete=()=>s(),i.onerror=()=>n(i.error),i.onabort=()=>n(i.error);try{const f=l.keyPath!==null?l.put(a):t!=null?l.put(a,t):l.put(a);f.onerror=()=>n(f.error)}catch(c){try{i.abort()}catch{}n(c)}})}catch(r){x("put",r)}},async delete(e,t){try{const a=await y();return await new Promise((r,s)=>{const n=a.transaction(e,"readwrite");n.oncomplete=()=>r(),n.onerror=()=>s(n.error),n.onabort=()=>s(n.error);try{const i=n.objectStore(e).delete(t);i.onerror=()=>s(i.error)}catch(i){try{n.abort()}catch{}s(i)}})}catch(a){x("delete",a)}},async getAll(e){try{const t=await y();return await new Promise((a,r)=>{const s=t.transaction(e,"readonly"),n=s.objectStore(e).getAll();n.onsuccess=()=>a(n.result),n.onerror=()=>r(n.error),s.onerror=()=>r(s.error),s.onabort=()=>r(s.error)})}catch(t){return x("getAll",t),[]}},async getAllKeys(e){try{const t=await y();return await new Promise((a,r)=>{const s=t.transaction(e,"readonly"),n=s.objectStore(e).getAllKeys();n.onsuccess=()=>a(n.result),n.onerror=()=>r(n.error),s.onerror=()=>r(s.error),s.onabort=()=>r(s.error)})}catch(t){return x("getAllKeys",t),[]}},async clear(e){try{const t=await y();return await new Promise((a,r)=>{const s=t.transaction(e,"readwrite");s.oncomplete=()=>a(),s.onerror=()=>r(s.error),s.onabort=()=>r(s.error);try{const n=s.objectStore(e).clear();n.onerror=()=>r(n.error)}catch(n){try{s.abort()}catch{}r(n)}})}catch(t){x("clear",t)}},async clearAll(e=!0){try{const t=await y(),a=e?[u.KEYVAL,u.PRODUCTS,u.METADATA,u.USERS,u.SETTINGS,u.ORDERS]:[u.KEYVAL,u.PRODUCTS,u.IMAGES,u.METADATA,u.USERS,u.SETTINGS,u.ORDERS];await new Promise((r,s)=>{const n=t.transaction(a,"readwrite");n.oncomplete=()=>r(),n.onerror=()=>s(n.error),n.onabort=()=>s(n.error);try{a.forEach(i=>n.objectStore(i).clear())}catch(i){try{n.abort()}catch{}s(i)}})}catch(t){x("clearAll",t)}},async putBatch(e,t){if(t.length)try{const a=await y();return await new Promise((r,s)=>{const n=a.transaction(e,"readwrite"),i=n.objectStore(e);n.oncomplete=()=>r(),n.onerror=()=>s(n.error),n.onabort=()=>s(n.error);try{const l=i.keyPath!==null;t.forEach(({key:c,value:f})=>{l?i.put(f):c!==void 0?i.put(f,c):i.put(f)})}catch(l){try{n.abort()}catch{}s(l)}})}catch(a){x("putBatch",a)}},async writeProductsSnapshot({products:e,removedIds:t,metadata:a,clearExisting:r=!1}){try{const s=await y();return await new Promise((n,i)=>{const l=s.transaction([u.PRODUCTS,u.METADATA],"readwrite"),c=l.objectStore(u.PRODUCTS),f=l.objectStore(u.METADATA);l.oncomplete=()=>n(),l.onerror=()=>i(l.error),l.onabort=()=>i(l.error);try{r?c.clear():t&&t.length>0&&t.forEach(d=>{d!=null&&c.delete(d)}),Array.isArray(e)&&e.forEach(d=>{d&&typeof d=="object"&&d.id!==void 0&&d.id!==null&&c.put(d)}),a&&typeof a=="object"&&Object.entries(a).forEach(([d,b])=>{d&&typeof d=="string"&&f.put(b,d)})}catch(d){try{l.abort()}catch{}i(d)}})}catch(s){x("writeProductsSnapshot",s)}},async invalidateProductsSnapshot(e={}){const t=e.preserveImages!==!1,a=e.metadataKeysToDelete??["products:signature","products:syncedAt","products:schema","products:cachedIds","products:revision"];try{const r=await y(),s=t?[u.PRODUCTS,u.METADATA]:[u.PRODUCTS,u.METADATA,u.IMAGES];return await new Promise((n,i)=>{const l=r.transaction(s,"readwrite"),c=l.objectStore(u.PRODUCTS),f=l.objectStore(u.METADATA);l.oncomplete=()=>n(),l.onerror=()=>i(l.error),l.onabort=()=>i(l.error);try{c.clear(),a.forEach(d=>f.delete(d)),!t&&s.includes(u.IMAGES)&&l.objectStore(u.IMAGES).clear()}catch(d){try{l.abort()}catch{}i(d)}})}catch(r){x("invalidateProductsSnapshot",r)}},async touchProductsSnapshot(e){try{const t=await y();return await new Promise((a,r)=>{const s=t.transaction(u.METADATA,"readwrite"),n=s.objectStore(u.METADATA);s.oncomplete=()=>a(),s.onerror=()=>r(s.error),s.onabort=()=>r(s.error);try{n.put(Date.now(),"products:syncedAt"),e!==void 0&&n.put(e,"products:revision")}catch(i){try{s.abort()}catch{}r(i)}})}catch(t){x("touchProductsSnapshot",t)}},async writeUserProfileSnapshot(e,t){if(!(!e||!e.email))try{const a=await y();return await new Promise((r,s)=>{const n=a.transaction([u.USERS,u.METADATA],"readwrite"),i=n.objectStore(u.USERS),l=n.objectStore(u.METADATA);n.oncomplete=()=>r(),n.onerror=()=>s(n.error),n.onabort=()=>s(n.error);try{i.put(e),l.put(t,"users:schema")}catch(c){try{n.abort()}catch{}s(c)}})}catch(a){x("writeUserProfileSnapshot",a)}},legacy:{async set(e,t){return B.put(u.KEYVAL,e,t)},async get(e){return B.get(u.KEYVAL,e)},async remove(e){return B.delete(u.KEYVAL,e)},async clear(){return B.clear(u.KEYVAL)}}},jo=Object.freeze(Object.defineProperty({__proto__:null,CACHE_DB_NAME:fe,CacheDB:B,STORES:u},Symbol.toStringTag,{value:"Module"}));var mt={mock:!1,versao:"3.0.0",cenario:"PRODUCAO"};let Gt=!0,q=!0,Ht=!0,qt="MOCK",Re=!1;try{typeof mt<"u"&&(Re=!0,q=mt?.mock===!0,Gt=q,Ht=q,qt=q?"MOCK":"PRODUCAO")}catch{Re=!1}Re||console.error(`[${k.name}] Modo de ambiente NAO injetado no build (__SKULL_MODO_AMBIENTE__ ausente).`,`
Assumindo MOCK para nao usar Firebase e Mercado Pago reais por engano.`,`
Recompile: o valor vem de modo-ambiente.json via vite.config.ts.`);const Oo=Gt,To=q,$s=Ht,Us=qt,Po=$s?"TEST":"PROD";function Do(){try{return!1}catch{return!1}}const bt="skull_env_fence",Bs=["skull_theme_preference"],zs=["firebaseLocalStorageDb","firebase-heartbeat-database","firebase-installations-database","skull-idb"];function Ws(e=Us){try{if(localStorage.getItem(bt)===e)return"kept";const t=Bs.map(a=>[a,localStorage.getItem(a)]).filter(([,a])=>a!==null);localStorage.clear();try{sessionStorage.clear()}catch{}t.forEach(([a,r])=>localStorage.setItem(a,r)),localStorage.setItem(bt,e);try{typeof indexedDB<"u"&&(indexedDB.deleteDatabase(fe),zs.forEach(a=>{try{indexedDB.deleteDatabase(a)}catch{}}))}catch{}try{typeof caches<"u"&&caches.keys().then(a=>Promise.all(a.map(r=>caches.delete(r)))).catch(()=>{})}catch{}return"purged"}catch{return"kept"}}const $={currentUser:"_s0",currentUserName:"_s1",isVIP:"_s2",_apiToken:"_s3",_apiTokenTime:"_s4",userRole:"_s5",userCpf:"_s6",userValidade:"_s7",userAvatar:"_s8",userCover:"_s9",aceiteComissao:"_s10",dataAceiteComissao:"_s11",codigoAfiliado:"_s12",dataCancelamentoAfiliacao:"_s13",afiliacaoCanceladaPor:"_s14",motivoCancelamentoAfiliacao:"_s15",userPhone:"_s16",skull_user_cart:"_c0",pagamentoAtual:"_c1",skull_session:"_p0",skull_cookie_consent:"_p1",skull_theme:"_p2",skull_ref_token:"_p3"},be=new Set(["APP_BUILD_VERSION","skull_store_features","skull_store_optimizations","skull_platform_config","skull_force_reload_signal","skull_sidebar_collapsed","skull_view_mode","skull_active_tab","skull_theme_preference","menuPinned","skull_applied_coupon","skull_applied_coupon_owner","skull_applied_coupon_rate","_sks_al","_sks_lk","_sks_st","_sks_la","_sks_created"]),ie="v2:";function Fs(){try{const e=typeof location<"u"?location.origin:"skull";let t=2166136261;const a=`skl|${e}|edge-v2`;for(let r=0;r<a.length;r++)t^=a.charCodeAt(r),t=Math.imul(t,16777619);return`k${(t>>>0).toString(36)}${e.length}`}catch{return"k-fallback-skull"}}const Yt=Fs();function Jt(e,t){const a=t.length||1,r=[],s=8192;for(let n=0;n<e.length;n+=s){const i=Math.min(n+s,e.length);let l="";for(let c=n;c<i;c++)l+=String.fromCharCode(e.charCodeAt(c)^t.charCodeAt(c%a));r.push(l)}return r.join("")}function ht(e){try{const t=Jt(String(e),Yt);return ie+btoa(unescape(encodeURIComponent(t)))}catch{try{return ie+btoa(unescape(encodeURIComponent(String(e))))}catch{return String(e)}}}function Vs(e){if(!e)return e;try{if(e.startsWith(ie)){const t=e.slice(ie.length),a=decodeURIComponent(escape(atob(t)));return Jt(a,Yt)}return decodeURIComponent(escape(atob(e)))}catch{return e}}function kt(e,t,a,r){e.setItem=function(s,n){if(be.has(s)){t(s,String(n));return}if($[s]!==void 0){const i=$[s];t(i,ht(String(n)));return}t(s,String(n))},e.getItem=function(s){if(be.has(s))return a(s);if($[s]!==void 0){const n=$[s];let i=a(n);return i===null&&(i=a(s),i!==null)?(t(n,ht(String(i))),r(s),i):i===null?null:Vs(i)}return a(s)},e.removeItem=function(s){if(be.has(s)){r(s);return}if($[s]!==void 0){const n=$[s];r(n),r(s);return}r(s)}}function Ks(e){if(e in window){const t=window[e];try{Object.defineProperty(window,e,{value:t,writable:!0,enumerable:!1,configurable:!0})}catch{}}}let gt=!1;function Lo(){if(typeof window>"u"||gt)return;gt=!0;try{const l=[];for(let c=0;c<localStorage.length;c++){const f=localStorage.key(c);if(f&&(f.startsWith("firebase:")||f.startsWith("firestore_")||f.startsWith("fs_")||f.startsWith("CryptoKey")||f.startsWith("firebaseLocalStorageDb"))){const d=localStorage.getItem(f);d&&(d.startsWith("eyJ")||d.startsWith("dW5k")||/^[A-Za-z0-9+/=]{20,}$/.test(d))&&l.push(f)}}l.forEach(c=>localStorage.removeItem(c))}catch{}const e=localStorage.setItem.bind(localStorage),t=localStorage.getItem.bind(localStorage),a=localStorage.removeItem.bind(localStorage),r=sessionStorage.setItem.bind(sessionStorage),s=sessionStorage.getItem.bind(sessionStorage),n=sessionStorage.removeItem.bind(sessionStorage);kt(localStorage,e,t,a),kt(sessionStorage,r,s,n),["CONFIG","currentUser","currentUserName","isVIP","_apiToken","produtos","usuarios"].forEach(Ks)}const A=new Map,g={getItem(e){try{return localStorage.getItem(e)}catch{return A.get(e)??null}},getJSON(e,t){try{const a=this.getItem(e);return a?JSON.parse(a):t}catch{return t}},setItem(e,t){try{localStorage.setItem(e,t),A.set(e,String(t))}catch{A.set(e,String(t))}},setJSON(e,t){try{this.setItem(e,JSON.stringify(t))}catch{}},removeItem(e){try{localStorage.removeItem(e)}catch{}A.delete(e)},clear(){try{localStorage.clear()}catch{}A.clear()},getSessionItem(e){try{return sessionStorage.getItem(e)}catch{return A.get(`ss:${e}`)??null}},setSessionItem(e,t){try{sessionStorage.setItem(e,t),A.set(`ss:${e}`,String(t))}catch{A.set(`ss:${e}`,String(t))}},removeSessionItem(e){try{sessionStorage.removeItem(e)}catch{}A.delete(`ss:${e}`)}};let le=!1;const Gs=new Set(["localhost","127.0.0.1","::1"]),ae="_skull_chunk_reload_guard",vt="_skull_version_reload_guard",Hs="./sw.js",qs="./",Ys=1e4,Js=5*6e4,Xs=1e4;function Zs(){if(typeof location>"u")return!1;const e=location.hostname;return!!(Gs.has(e)||/^10\.\d+\.\d+\.\d+$/.test(e)||/^192\.168\.\d+\.\d+$/.test(e)||/^172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+$/.test(e)||/^169\.254\.\d+\.\d+$/.test(e))}function Ke(){return!1}function K(){return typeof window<"u"&&!Ke()}function Ge(){return String(Cs.buildHash).trim()}const Qs=["legion_last_checkin_date","legion_reward_toast_dismissed"];function en(){try{for(const e of Qs)g.removeItem(e),g.removeSessionItem(e)}catch{}}async function tn(){if(typeof window>"u")return;const e=Ke()||Zs(),t=Ge();try{if("serviceWorker"in navigator&&e){const a=await navigator.serviceWorker.getRegistrations();await Promise.all(a.map(r=>r.unregister()))}}catch{}try{if("caches"in window){const a=await caches.keys();await Promise.all(a.map(async r=>{if(e){await caches.delete(r);return}r.startsWith("skull-legion-")&&!Y(t)&&r!==`skull-legion-${t}`&&await caches.delete(r)}))}}catch{}}en();tn();function Xt(){const e=new URLSearchParams(window.location.search);e.delete("bust");const t=e.toString();return window.location.pathname+(t?`?${t}`:"")+window.location.hash}function an(){typeof window>"u"||new URLSearchParams(window.location.search).has("bust")&&window.history.replaceState(null,"",Xt())}function He(){const e=Xt();if(window.location.pathname+window.location.search+window.location.hash!==e){window.location.replace(e);return}try{const t=new URL(window.location.href);t.searchParams.set("_skull_v",String(Date.now())),window.location.replace(t.pathname+t.search+t.hash)}catch{window.location.reload()}}an();function ce(){if(!K()){if(Ke()){try{const e=Number(g.getSessionItem(ae)||"0");if(Date.now()-e<15e3)return;g.setSessionItem(ae,String(Date.now()))}catch{}window.location.reload()}return}if(!le){le=!0;try{g.removeItem("_app_revision")}catch{}"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(e=>e.forEach(t=>t.unregister())).catch(()=>{});try{const e=Number(g.getSessionItem(ae)||"0"),t=Date.now();if(t-e<3e4)return;g.setSessionItem(ae,String(t))}catch{}T(),setTimeout(()=>He(),400)}}typeof window<"u"&&(window.addEventListener("error",e=>{const t=e.target;if(!t||t.tagName!=="SCRIPT")return;const a=t.src||"";a.includes("/assets/")&&a.endsWith(".js")&&!a.includes("sw.js")&&!a.includes("/@vite/")&&!a.includes("@fs/")&&ce()},!0),window.addEventListener("unhandledrejection",e=>{const t=String(e.reason?.message||e.reason||"");(t.includes("dynamically imported module")||t.includes("Importing a module script failed"))&&ce()}));async function rn(e){const t=Ge();if(!Y(t)&&t===e){try{g.setItem("_app_revision",e)}catch{}return}try{if(g.getSessionItem(vt)===e&&!(!Y(t)&&t!==e)){try{g.setItem("_app_revision",e)}catch{}return}g.setSessionItem(vt,e)}catch{}try{g.setItem("_app_revision",e)}catch{}try{await B.close();const a=r=>new Promise(s=>{try{const n=indexedDB.deleteDatabase(r);n.onsuccess=()=>s(),n.onerror=()=>s(),n.onblocked=()=>s()}catch{s()}});await Promise.all([a(fe),a("skull-idb")])}catch{}if("serviceWorker"in navigator)try{const a=await navigator.serviceWorker.getRegistrations();await Promise.all(a.map(r=>r.unregister()))}catch{}await new Promise(a=>setTimeout(a,450)),He()}async function sn(){try{const e=await fetch(`./assets/version.json?t=${Date.now()}`,{cache:"no-store"});if(!e.ok){try{const r=await e.text();(r.includes("Fora do Ar")||r.includes("Manutenção Programada")||r.includes("orbital-wrapper"))&&window.location.reload()}catch{}return null}if((e.headers.get("content-type")||"").includes("text/html")){try{const r=await e.text();(r.includes("Fora do Ar")||r.includes("Manutenção Programada")||r.includes("orbital-wrapper"))&&window.location.reload()}catch{}return null}const a=await e.json();return String(a.revision||a.version||"").trim()||null}catch{return null}}async function P(){if(K()&&!le)try{const e=await sn();if(!e)return;let t=null;try{t=g.getItem("_app_revision")}catch{t=null}const a=ln({serverRevision:e,embeddedHash:Ge(),storedRevision:t});if(a==="bust"){le=!0,await rn(e);return}if(a==="set")try{g.setItem("_app_revision",e)}catch{}}catch{}}P();let xt=0;async function Ro(){if(!K())return;const e=Date.now();e-xt<Xs||(xt=e,await P())}let he=null;function yt(){if(!K())return;he&&clearInterval(he);const e=typeof document<"u"&&document.visibilityState==="hidden"?Js:Ys;he=setInterval(()=>{P()},e)}K()&&typeof document<"u"&&(yt(),document.addEventListener("visibilitychange",()=>{yt(),document.visibilityState==="visible"&&P()}),typeof window<"u"&&window.addEventListener("focus",()=>{P()}));function T(){if(typeof document>"u"||document.getElementById("skull-pwa-updater"))return;const e=document.documentElement.classList.contains("dark")||!document.documentElement.classList.contains("light")&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=m(e?"--sk-palette-neutral-050505":"--sk-palette-neutral-ffffff"),a=m(e?"--sk-brand":"--sk-brand-dark"),r=m(e?"--sk-palette-neutral-ffffff":"--sk-palette-blue-111827"),s=m("--sk-palette-neutral-6b7280"),n=m("--sk-brand",e?.15:.12),i=document.createElement("div");i.id="skull-pwa-updater",i.setAttribute("role","alertdialog"),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-label","Atualizando a plataforma"),i.style.cssText=`position:fixed;inset:0;z-index:9999999;background:${t};display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Orbitron,Montserrat,ui-sans-serif,system-ui,sans-serif;overflow:hidden;`,i.innerHTML=`
    <style>
      @keyframes pwa-spin      { to { transform:rotate(360deg); } }
      @keyframes pwa-spin-rev  { to { transform:rotate(-360deg); } }
      @keyframes pwa-pulse     { 0%,100%{opacity:1} 50%{opacity:.35} }
      @keyframes pwa-bar       { 0%{width:0%} 60%{width:72%} 85%{width:90%} 100%{width:100%} }
    </style>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(500px,90vw);height:min(500px,90vw);background:radial-gradient(circle,${n} 0%,transparent 70%);border-radius:50%;pointer-events:none;filter:blur(60px);opacity:0.7;"></div>
    <div style="position:relative;width:192px;height:192px;display:flex;align-items:center;justify-content:center;margin-bottom:36px;flex-shrink:0;overflow:visible;">
      <div style="position:absolute;inset:0;border-radius:50%;border:2px solid transparent;border-top-color:${a};animation:pwa-spin 3s linear infinite;"></div>
      <div style="position:absolute;inset:14px;border-radius:50%;border:1px dashed ${a};opacity:0.35;animation:pwa-spin-rev 5s linear infinite;"></div>
      <div style="position:absolute;inset:-10px;border-radius:50%;border:1px solid ${a};opacity:0.08;animation:pwa-pulse 2.5s ease-in-out infinite;"></div>
      <div style="position:relative;z-index:10;width:96px;height:96px;border-radius:50%;border:1px solid ${a}44;box-shadow:0 0 35px ${a}33,0 0 70px ${a}11;display:flex;align-items:center;justify-content:center;background:transparent;">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="${a}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:pwa-spin 2.5s linear infinite;" aria-hidden="true">
          <path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
          <path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
        </svg>
      </div>
    </div>
    <div style="text-align:center;z-index:10;padding:0 24px;max-width:380px;">
      <h3 style="font-family:Orbitron,sans-serif;font-size:clamp(16px,4vw,22px);font-weight:800;letter-spacing:2px;color:${r};margin:0 0 10px;text-transform:uppercase;">Atualizando Plataforma</h3>
      <div style="height:1px;width:80px;background:linear-gradient(90deg,transparent,${a},transparent);margin:0 auto 18px;"></div>
      <p style="font-size:clamp(12px,3vw,14px);color:${s};line-height:1.7;margin:0 0 32px;">Nova versão detectada. Aplicando atualização automática — não é necessário limpar o cache do navegador.</p>
      <div style="width:min(220px,80vw);margin:0 auto;">
        <div style="width:100%;height:5px;background:${m("--sk-brand",.1)};border-radius:99px;overflow:hidden;margin-bottom:14px;">
          <div style="height:100%;background:${a};box-shadow:0 0 15px ${a};border-radius:99px;width:0%;animation:pwa-bar 2.2s ease-out forwards;"></div>
        </div>
        <div style="display:flex;align-items:center;justify-content:center;gap:8px;">
          <span style="width:6px;height:6px;border-radius:50%;background:${a};display:inline-block;animation:pwa-pulse 1s infinite;"></span>
          <span style="font-size:10px;font-family:monospace;color:${a};letter-spacing:3px;text-transform:uppercase;font-weight:bold;">Hard refresh automático</span>
        </div>
      </div>
    </div>
  `,document.body.appendChild(i)}function nn(e){const t=e.waiting;t&&t.postMessage({type:"SKIP_WAITING"});const a=e.installing;a&&a.addEventListener("statechange",()=>{a.state==="installed"&&navigator.serviceWorker.controller&&(a.postMessage({type:"SKIP_WAITING"}),T())})}typeof navigator<"u"&&"serviceWorker"in navigator&&K()&&window.addEventListener("load",()=>{const e=Hs,t=qs;navigator.serviceWorker.register(e,{scope:t,updateViaCache:"none"}).then(s=>{if(s.update().catch(()=>{}),nn(s),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(s.update().catch(()=>{}),P())}),window.addEventListener("online",()=>{setTimeout(()=>{P()},1200)}),s.addEventListener("updatefound",()=>{if(!navigator.serviceWorker.controller)return;const n=s.installing;n&&(T(),n.addEventListener("statechange",()=>{n.state==="installed"&&n.postMessage({type:"SKIP_WAITING"})}))}),"periodicSync"in s)try{s.periodicSync?.register("phantom-update-check",{minInterval:720*60*1e3}).catch(()=>{})}catch{}}).catch(()=>{});const a=navigator.serviceWorker.controller;let r=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{a&&!r&&(r=!0,T(),setTimeout(()=>window.location.reload(),500))}),navigator.serviceWorker.addEventListener("message",s=>{(s.data?.type==="SW_ACTIVATED"||s.data?.type==="FORCE_RELOAD")&&(T(),setTimeout(()=>He(),400))})});const on=new Set(["","dev","dev-local","vitest","local"]);function Y(e){return e?on.has(String(e).trim().toLowerCase()):!0}function ln(e){const t=String(e.serverRevision||"").trim();if(!t)return"noop";const a=String(e.embeddedHash||"").trim(),r=String(e.storedRevision||"").trim();return!Y(a)&&t!==a||r&&r!==t?"bust":r?"noop":"set"}function cn(){try{return"1793850976"}catch{return"dev"}}function Mo(e,t=cn()){if(Y(t))return!0;const a=String(e||"").trim();return!!a&&a===String(t).trim()}const _t="skull_cookie_consent",dn={necessary:!0,analytics:!0,marketing:!0},$o=()=>{if(typeof window<"u"){const e={...dn,timestamp:Date.now()};try{const t=g.getItem(_t),a=t?JSON.parse(t):null;a?.necessary&&a?.analytics&&a?.marketing||g.setItem(_t,JSON.stringify(e))}catch{}}return null};function J(e,t="./"){if(!e||typeof e!="string")return"";const a=e.trim();if(!a)return"";if(/^(https?:)?\/\//.test(a)||a.startsWith("data:")||a.startsWith("blob:"))return a;const r=t||"/";return`${r.endsWith("/")?r:`${r}/`}${a.replace(/^\.?\/+/,"")}`}const Uo=J(Bt.placeholder);function Bo(e){if(!e||typeof e!="string")return"";const t=e.trim();return t?t.startsWith("data:")||t.startsWith("blob:")?t:/googleusercontent\.com/i.test(t)?t.replace(/=s\d+(-c)?/i,"=s384-c"):/avatars\.githubusercontent\.com/i.test(t)?t.includes("s=")?t.replace(/([?&]s=)\d+/i,"$1384"):`${t}${t.includes("?")?"&":"?"}s=384`:t:""}const z="[A-Za-z0-9_-]{10,}";function Q(e){const t=String(e||"").trim();if(!t)return"";const a=[new RegExp(`(?:^|/)file/d/(${z})`),new RegExp(`lh3\\.googleusercontent\\.com/d/(${z})`),new RegExp(`[?&]id=(${z})`)];for(const r of a){const s=t.match(r);if(s)return s[1]}return new RegExp(`^${z}$`).test(t)?t:""}function un(e){const t=String(e||"").trim();if(!t)return"";const a=t.match(new RegExp(`/folders/(${z})`));if(a)return a[1];const r=t.match(new RegExp(`[?&]id=(${z})`));return r&&/folder/i.test(t)?r[1]:""}function fn(e){const t=String(e||"").trim();return t?/^https:\/\/lh3\.googleusercontent\.com\/d\/[\w-]+/.test(t)||/^https:\/\/drive\.google\.com\/thumbnail\?/.test(t):!1}function Me(e){return!!un(e)}const pn=[480,800,1280];function D(e,t=1024,a=""){const r=String(e||"").trim();if(!r)return"";const s=Number.isFinite(t)&&t>0?Math.round(t):1024,n=`https://lh3.googleusercontent.com/d/${encodeURIComponent(r)}=w${s}`;return a?`${n}?v=${encodeURIComponent(a)}`:n}function mn(e,t=1024){const a=String(e||"").trim();if(!a)return"";const r=Number.isFinite(t)&&t>0?Math.round(t):1024;return`https://drive.google.com/thumbnail?id=${encodeURIComponent(a)}&sz=w${r}`}function zo(e,t=pn,a=""){const r=String(e||"").trim();return r?t.map(s=>`${D(r,s,a)} ${s}w`).join(", "):""}function Zt(e){const t=String(e||"").trim();return!t||t==="\\"||t==="-"||/^n\/?a$/i.test(t)}function Wo(e,t=480){const a=String(e||"").trim();if(!a)return"";if(a.startsWith("data:")||a.startsWith("blob:"))return a;const r=Q(a);return r?D(r,t):Qt(a)}function Qt(e){if(!e||typeof e!="string"||(e=e.trim(),Zt(e)))return"";if(/^(?:\.\/|\/)?skull-green\.png(?:[?#].*)?$/i.test(e))return J("assets/placeholder.webp");if(fn(e))return e;const t=Q(e);return t?D(t,1024):e.includes("drive.google.com")||e.includes("googleusercontent.com")||e.includes("firebasestorage.googleapis.com")||e.includes("/api/drive-image")||e.includes("driveImageProxy")?"":e}function $e(e){return!e||typeof e!="string"||Zt(e)?"":Qt(e)}function ea(e,t=[]){const a=new Set(t.map(s=>$e(s)).filter(Boolean).map(s=>s.toLowerCase())),r=[];return e.forEach(s=>{const n=$e(s);if(!n)return;const i=n.toLowerCase();a.has(i)||(a.add(i),r.push(n))}),r}function Fo(e){const t=String(e.imagensDrive||"").trim();if(!t)return[];const a=t.split(/[\s,;\n]+/).filter(Boolean),r=a.some(Me)||a.length===1&&t===e.media?.driveFolderId,s=a.filter(n=>!Me(n)).flatMap(n=>{if(r&&!/^(https?:)?\/\//i.test(n))return[];const i=Q(n);return i?[D(i,1024)]:/^(https?:)?\/\//i.test(n)?[n]:[]});if(r)for(const n of e.media?.images||[])n.id&&s.push(D(n.id,1024,n.v));return ea(s)}function bn(e,t=[]){const a=[];if(e.imagensDrive){const c=String(e.imagensDrive).split(/[\s,;\n]+/);for(const f of c){const d=f.trim();if(!d||Me(d))continue;const b=Q(d);b?a.push(D(b,1024)):/^(https?:)?\/\//i.test(d)&&a.push(d)}}if(e.media?.images&&Array.isArray(e.media.images))for(const c of e.media.images)c?.id&&a.push(D(c.id,1024,c.v));const r=[e.capa,e.imagemCapaUrl,e.imagem,e.capaLinha].map(c=>c?$e(String(c)):"").filter(Boolean),s=r[0]||"",n=ea([...e.imagensAdicionais||[],...a,...t],r),i=[],l=new Set;for(const c of[...r,...n]){const f=c.toLowerCase();l.has(f)||(l.add(f),i.push(c))}return s||n.length>0?i:[]}function Vo(e,t=J("assets/placeholder.webp")){const a=bn(e),r=[],s=new Set;for(const i of a){if(!i)continue;const l=i.toLowerCase();s.has(l)||(s.add(l),r.push(i))}for(const i of[...r]){const l=Q(i);if(!l)continue;const c=mn(l,1024);s.has(c.toLowerCase())||(s.add(c.toLowerCase()),r.push(c))}const n=(t||J("assets/placeholder.webp")).trim();return n&&!s.has(n.toLowerCase())&&r.push(n),r.length===0&&n&&r.push(n),r}function Ko(e){if(!e||typeof e!="string")return!1;const t=e.trim();if(!t||t.startsWith("data:")||t.startsWith("blob:")||t.startsWith("/")||t.startsWith("./")||t.startsWith("../")||!/^(https?:)?\/\//i.test(t))return!1;if(typeof window>"u"||!window.location?.origin)return!0;try{const a=t.startsWith("//")?`${window.location.protocol}${t}`:t;return new URL(a).origin!==window.location.origin}catch{return!1}}const hn={"fa-archive":lt,"fa-arrow-left":es,"fa-arrow-right":Qr,"fa-arrow-trend-down":Zr,"fa-arrows-left-right":Xr,"fa-award":Jr,"fa-bag-shopping":Se,"fa-balance-scale":et,"fa-bolt":Yr,"fa-box-archive":lt,"fa-box-open":qr,"fa-briefcase":Hr,"fa-building":Gr,"fa-bullhorn":Kr,"fa-calculator":Vr,"fa-calendar-alt":Fr,"fa-calendar-check":Wr,"fa-calendar-day":zr,"fa-chart-area":Br,"fa-chart-line":Ur,"fa-check":$r,"fa-check-circle":Ne,"fa-chevron-down":Fe,"fa-chevron-left":Mr,"fa-chevron-right":Rr,"fa-chevron-up":Mt,"fa-circle-check":Ne,"fa-circle-info":Lr,"fa-circle-notch":Qe,"fa-circle-xmark":Ze,"fa-clipboard-check":Dr,"fa-clock":Pr,"fa-clock-rotate-left":st,"fa-cloud-arrow-down":it,"fa-cloud-download-alt":it,"fa-code-branch":Tr,"fa-cogs":Or,"fa-comments":jr,"fa-copy":Cr,"fa-credit-card":Ir,"fa-crosshairs":Nr,"fa-crown":Rt,"fa-cubes":ot,"fa-cubes-stacked":ot,"fa-database":Ar,"fa-desktop":Er,"fa-diagram-project":Sr,"fa-dollar-sign":Ae,"fa-download":wr,"fa-drafting-compass":_r,"fa-envelope":yr,"fa-exclamation-circle":Lt,"fa-eye":xr,"fa-eye-slash":vr,"fa-feather-alt":gr,"fa-file-pdf":kr,film:hr,"fa-fingerprint":br,"fa-flag":nt,"fa-flag-checkered":nt,"fa-flask":mr,"fa-gamepad":pr,"fa-gauge-high":fr,"fa-gem":ur,"fa-gift":dr,"fa-globe":cr,"fa-hand-holding-usd":lr,"fa-handshake":ir,"fa-hard-drive":or,"fa-headset":nr,"fa-history":st,"fa-home":oe,"fa-house":oe,"fa-inbox":Dt,"fa-infinity":sr,"fa-instagram":rr,"fa-key":ar,"fa-keyboard":tr,"fa-landmark":er,"fa-laptop":rt,"fa-laptop-code":rt,"fa-layer-group":Qa,"fa-list-check":Za,"fa-list-ol":Xa,"fa-lock":Ja,"fa-magic":pe,"fa-magnifying-glass":Ee,"fa-medal":Ya,"fa-memory":qa,"fa-microchip":Ha,"fa-microscope":Ga,"fa-money-bill-wave":Ka,"fa-paint-brush":Va,"fa-pen":Fa,"fa-percentage":Wa,"fa-piggy-bank":za,"fa-pix":at,"fa-plug":Ba,"fa-qrcode":at,"fa-quote-left":tt,"fa-quote-right":tt,"fa-receipt":Ua,"fa-redo":$a,"fa-rocket":Pt,"fa-rotate-right":Ma,"fa-sack-dollar":Ra,"fa-satellite-dish":La,"fa-scale-balanced":et,"fa-search":Ee,"fa-server":Da,"fa-shield-alt":me,"fa-shield-check":me,"fa-shield-halved":Pa,"fa-shield-heart":me,"fa-shopping-bag":Se,"fa-shopping-cart":Tt,"fa-sliders":Ta,"fa-sparkles":pe,"fa-spinner":Qe,"fa-star":Oa,"fa-store":ja,"fa-sync-alt":Ca,"fa-tag":Ia,"fa-tags":Na,"fa-ticket-alt":Aa,"fa-telegram-plane":Ea,"fa-tiktok":Sa,"fa-times":Ot,"fa-times-circle":Ze,"fa-tools":wa,"fa-tower-broadcast":_a,"fa-trash-alt":ya,"fa-triangle-exclamation":xa,"fa-trophy":va,"fa-tv":ga,"fa-user":jt,"fa-user-group":se,"fa-user-pen":ka,"fa-user-plus":ha,"fa-user-shield":ba,"fa-user-slash":ma,"fa-users":se,"fa-users-cog":se,"fa-users-gear":pa,"fa-wand-magic-sparkles":pe,"fa-wifi":fa,"fa-windows":ua,"fa-youtube":da},kn=new Set(["fa-spin","fa-pulse","fa-fw","fa-lg","fa-sm","fa-xs","fa-2x","fa-3x","fa-border","fa-inverse","fa-li","fa-stack"]),gn=new Set(["fa","fas","far","fab","fal","fad"]),de=({className:e="",style:t,title:a,onClick:r,...s})=>{const n=e.split(/\s+/).filter(Boolean),i=n.find(b=>b.startsWith("fa-")&&!kn.has(b))||"",l=n.includes("fa-spin")||n.includes("fa-pulse"),c=n.filter(b=>!gn.has(b)&&!b.startsWith("fa-")).join(" "),f=hn[i]||ts,d=`${c}${l?" sk-spin animate-spin":""}`.trim();return o.jsx(f,{className:d||void 0,style:{width:"1em",height:"1em",display:l?"inline-block":void 0,flexShrink:l?0:void 0,...t},"aria-hidden":a?void 0:!0,"aria-label":a,onClick:r,...s})},Go=p.memo(()=>o.jsxs("span",{className:"sk-brand",children:[o.jsx("img",{className:"sk-brand__logo",src:J("/assets/logo-64.png"),alt:"Skull Legion",width:"32",height:"32",decoding:"async"}),o.jsxs("span",{className:"sk-brand__copy",children:[o.jsxs("span",{className:"sk-brand__name",children:["SKULL ",o.jsx("span",{children:"LEGION"})]}),o.jsx("span",{className:"sk-brand__tagline",children:"PERFORMANCE GARANTIDA"})]})]})),vn=p.memo(({title:e,icon:t,badge:a,sub:r,tone:s="accent",framed:n=!1,divided:i=!1,stack:l=!1,footer:c,className:f="",id:d,children:b,..._})=>{const R=o.jsxs("section",{id:d,"aria-label":_["aria-label"],className:`sk-panel${s==="quiet"?" sk-panel--quiet":""}${n?"":` ${f}`}`,children:[(e||a)&&o.jsxs("header",{className:"sk-panel__head",children:[o.jsxs("div",{className:"sk-panel__heading",children:[t&&o.jsx("span",{className:"sk-panel__icon","aria-hidden":!0,children:t}),e&&o.jsx("h2",{className:"sk-panel__title",children:e})]}),a]}),r&&o.jsx("p",{className:"sk-panel__sub",children:r}),b&&o.jsx("div",{className:`${i?"sk-panel__body--divided":"sk-panel__body"}${l?" sk-panel__body--stack":""}`,children:b}),c&&o.jsx("footer",{className:"sk-panel__foot",children:c})]});return n?o.jsxs("div",{className:`sk-frame ${f}`.trim(),children:[o.jsx("div",{className:"sk-frame__sweep animate-spin-slow","aria-hidden":!0}),R]}):R});vn.displayName="Panel";const xn=p.memo(({title:e,icon:t,badge:a,sub:r,tone:s="accent",framed:n=!1,open:i,onToggle:l,toggleLabel:c,className:f="",id:d,children:b,..._})=>{const R=p.useId(),w=o.jsxs("section",{id:d,"aria-label":_["aria-label"],className:`sk-panel${s==="quiet"?" sk-panel--quiet":""}${n?"":` ${f}`}`,children:[o.jsxs("button",{type:"button",onClick:l,className:"sk-panel__toggle","aria-expanded":i,"aria-controls":R,"aria-label":c,children:[o.jsxs("span",{className:"sk-panel__heading",children:[t&&o.jsx("span",{className:"sk-panel__icon","aria-hidden":!0,children:t}),o.jsx("span",{className:"sk-panel__title",children:e})]}),o.jsxs("span",{className:"sk-row",children:[a,o.jsx("span",{className:"sk-panel__chevron","aria-hidden":!0,children:i?o.jsx(Mt,{size:15}):o.jsx(Fe,{size:15})})]})]}),r&&o.jsx("p",{className:"sk-panel__sub",children:r}),o.jsx("div",{id:R,className:"sk-panel__body--divided",style:{display:i?void 0:"none"},children:b})]});return n?o.jsxs("div",{className:`sk-frame ${f}`.trim(),children:[o.jsx("div",{className:"sk-frame__sweep animate-spin-slow","aria-hidden":!0}),w]}):w});xn.displayName="CollapsiblePanel";const qe=(e,t)=>t==="accent"?e:`${e} ${e}--${t}`,Ye=p.memo(({tone:e="accent",icon:t,className:a="",children:r})=>o.jsxs("span",{className:`${qe("sk-badge",e)} ${a}`.trim(),children:[t,r]}));Ye.displayName="Badge";const yn=p.memo(({tone:e="neutral",active:t,icon:a,onClick:r,className:s="",children:n})=>{const i=`${qe("sk-chip",e)}${t?" is-active":""} ${s}`.trim();return r?o.jsxs("button",{type:"button",onClick:r,className:i,"aria-pressed":t,children:[a,n]}):o.jsxs("span",{className:i,children:[a,n]})});yn.displayName="Chip";const _n=p.memo(({tone:e="accent",icon:t,className:a="",children:r})=>o.jsxs("p",{className:`${qe("sk-note",e)} ${a}`.trim(),children:[t&&o.jsx("span",{className:"sk-note__icon","aria-hidden":!0,children:t}),o.jsx("span",{children:r})]}));_n.displayName="Note";const wn=p.memo(({title:e,accent:t,badge:a,icon:r,sub:s,align:n="left",className:i=""})=>o.jsxs("header",{className:`sk-section__head${n==="center"?" sk-section__head--center":""} ${i}`.trim(),children:[a,o.jsxs("div",{className:"sk-section__heading",children:[r&&o.jsx("span",{className:"sk-card__icon","aria-hidden":!0,children:r}),o.jsxs("h2",{className:"sk-title",children:[e,t&&o.jsxs(o.Fragment,{children:[" ",o.jsx("span",{className:"sk-accent",children:t})]})]})]}),s&&o.jsx("p",{className:"sk-lead",children:s})]}));wn.displayName="SectionHeader";const Sn=p.memo(({label:e,value:t,icon:a,tone:r="accent",size:s="lg",unit:n,note:i,children:l})=>o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"sk-metric__label",children:[a,e]}),o.jsxs("span",{className:["sk-metric__value",s==="sm"?"sk-metric__value--sm":"",r!=="accent"?`sk-metric__value--${r}`:""].filter(Boolean).join(" "),children:[t,n&&o.jsxs("span",{className:"sk-pill__unit",children:[" ",n]})]}),l,i&&o.jsx("p",{className:"sk-metric__note",children:i})]}));Sn.displayName="Metric";const En=p.memo(({primary:e,secondary:t,className:a=""})=>o.jsxs("div",{className:`sk-readout ${a}`.trim(),children:[o.jsx("div",{className:"sk-readout__col",children:e}),t&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"sk-readout__divider","aria-hidden":!0}),o.jsx("div",{className:"sk-readout__col sk-readout__col--end",children:t})]})]}));En.displayName="Readout";const An=p.memo(({unit:e,tone:t="neutral",children:a})=>o.jsxs("span",{className:`sk-pill${t==="accent"?" sk-pill--accent":""}`,children:[a,e&&o.jsx("span",{className:"sk-pill__unit",children:e})]}));An.displayName="Pill";const Nn=p.memo(({label:e,value:t,icon:a,delta:r,className:s=""})=>o.jsxs("div",{className:`sk-stat ${s}`.trim(),children:[a&&o.jsx("span",{className:"sk-stat__icon","aria-hidden":!0,children:a}),o.jsx("span",{className:"sk-stat__value",children:t}),o.jsx("span",{className:"sk-stat__label",children:e}),r&&o.jsx("span",{className:`sk-stat__delta sk-stat__delta--${r.direction}`,children:r.text})]}));Nn.displayName="Stat";const ta=p.memo(({variant:e="primary",size:t="md",block:a,icon:r,className:s="",children:n,type:i="button",...l})=>o.jsxs("button",{type:i,className:["sk-btn",`sk-btn--${e}`,t!=="md"?`sk-btn--${t}`:"",a?"sk-btn--block":"",s].filter(Boolean).join(" "),...l,children:[r,n]}));ta.displayName="Button";const In=p.memo(({label:e,value:t,htmlFor:a,hint:r,className:s="",children:n})=>o.jsxs("div",{className:`sk-field ${s}`.trim(),children:[e&&o.jsxs("label",{className:"sk-label",htmlFor:a,children:[o.jsx("span",{children:e}),t!==void 0&&o.jsx("strong",{className:"sk-label__value",children:t})]}),n,r!=null&&r!==""&&o.jsx("p",{className:"sk-field__hint",children:r})]}));In.displayName="Field";const Cn=p.memo(({className:e="",children:t,...a})=>o.jsxs("div",{className:"sk-select-wrap",children:[o.jsx("select",{className:`sk-select ${e}`.trim(),...a,children:t}),o.jsx(Fe,{className:"sk-select-wrap__caret"})]}));Cn.displayName="Select";const jn=p.memo(({className:e="",...t})=>o.jsx("input",{className:`sk-input ${e}`.trim(),...t}));jn.displayName="Input";const On=p.memo(({className:e="",...t})=>o.jsx("textarea",{className:`sk-textarea ${e}`.trim(),...t}));On.displayName="Textarea";const Tn=p.memo(({className:e="",...t})=>o.jsxs("div",{className:`sk-search ${e}`.trim(),children:[o.jsx(Ee,{className:"sk-search__icon","aria-hidden":!0}),o.jsx("input",{type:"search",className:"sk-input sk-search__input",...t})]}));Tn.displayName="SearchField";const Pn=p.memo(({accent:e="accent",className:t="",...a})=>o.jsx("input",{type:"range",className:`sk-range${e!=="accent"?` sk-range--${e}`:""} ${t}`.trim(),...a}));Pn.displayName="Range";const Dn=p.memo(({values:e,active:t,onSelect:a,format:r,label:s})=>o.jsx("div",{className:"sk-range-ticks",role:"group","aria-label":s,children:e.map(n=>o.jsx("button",{type:"button",onClick:()=>a(n),className:`sk-range-tick${n===t?" is-active":""}`,"aria-pressed":n===t,children:r?r(n):n},n))}));Dn.displayName="RangeTicks";function Ho({options:e,value:t,onChange:a,label:r,className:s=""}){return o.jsx("div",{className:`sk-segment ${s}`.trim(),role:"group","aria-label":r,children:e.map(n=>o.jsx("button",{type:"button",onClick:()=>a(n.value),className:`sk-segment__btn${n.value===t?" is-active":""}`,"aria-pressed":n.value===t,children:n.label},n.value))})}function qo({options:e,value:t,onChange:a,label:r,idPrefix:s,className:n=""}){const i=l=>{const c=e.findIndex(d=>d.value===t),f=e[(c+l+e.length)%e.length];f&&(a(f.value),document.getElementById(`${s}-tab-${f.value}`)?.focus())};return o.jsx("div",{className:`sk-segment ${n}`.trim(),role:"tablist","aria-label":r,children:e.map(l=>{const c=l.value===t;return o.jsx("button",{type:"button",role:"tab",id:`${s}-tab-${l.value}`,"aria-controls":`${s}-panel-${l.value}`,"aria-selected":c,tabIndex:c?0:-1,onClick:()=>a(l.value),onKeyDown:f=>{f.key==="ArrowRight"&&(f.preventDefault(),i(1)),f.key==="ArrowLeft"&&(f.preventDefault(),i(-1))},className:`sk-segment__btn${c?" is-active":""}`,children:l.label},l.value)})})}const Ln=p.memo(({idPrefix:e,value:t,className:a="",children:r})=>o.jsx("section",{role:"tabpanel",id:`${e}-panel-${t}`,"aria-labelledby":`${e}-tab-${t}`,tabIndex:0,className:a,children:r}));Ln.displayName="TabPanel";const Rn=p.memo(({checked:e,onChange:t,label:a,disabled:r,size:s="md",tone:n="accent"})=>o.jsx("button",{type:"button",role:"switch",className:["sk-switch",s==="lg"?"sk-switch--lg":"",n!=="accent"?`sk-switch--${n}`:""].filter(Boolean).join(" "),"aria-checked":e,"aria-label":a,disabled:r,onClick:t}));Rn.displayName="Switch";const Mn=p.memo(({width:e="default",atmosphere:t=!0,className:a="",children:r})=>o.jsxs("div",{className:`sk-page ${a}`.trim(),children:[t&&o.jsxs("div",{className:"sk-page__atmosphere","aria-hidden":!0,children:[o.jsx("span",{className:"sk-orb sk-orb--a"}),o.jsx("span",{className:"sk-orb sk-orb--b"}),o.jsx("span",{className:"sk-orb sk-orb--c"})]}),o.jsx("div",{className:"sk-page__content",children:r})]}));Mn.displayName="Page";const $n=p.memo(({className:e="",children:t,...a})=>o.jsx("section",{className:`sk-section ${e}`.trim(),...a,children:t}));$n.displayName="Section";const Un=p.memo(({title:e,description:t,icon:a="fa-inbox",action:r,className:s=""})=>o.jsxs("div",{className:`sk-empty ${s}`.trim(),children:[o.jsx("span",{className:"sk-empty__icon","aria-hidden":!0,children:o.jsx(Dt,{})}),o.jsx("h3",{className:"sk-empty__title",children:e}),t&&o.jsx("p",{className:"sk-empty__desc",children:t}),r]}));Un.displayName="Empty";const Bn=p.memo(({label:e="Carregando…"})=>o.jsx("p",{className:"sk-loading",role:"status","aria-live":"polite",children:e}));Bn.displayName="Loading";const zn={PAGO:{label:"Pago",tone:"accent"},PENDENTE:{label:"Pendente",tone:"warn"},LIBERADO:{label:"Liberado",tone:"info"},CANCELADO:{label:"Cancelado",tone:"danger"}},Wn=p.memo(({status:e})=>{const t=zn[String(e||"").toUpperCase()]??{label:e,tone:"neutral"};return o.jsx(Ye,{tone:t.tone,children:t.label})});Wn.displayName="CommissionStatusBadge";const Yo=({show:e,message:t,type:a,onClose:r})=>{const[s,n]=p.useState(e),[i,l]=p.useState("idle"),c=p.useRef(null);if(p.useEffect(()=>(e?(n(!0),l("entering"),requestAnimationFrame(()=>{requestAnimationFrame(()=>l("visible"))})):s&&(l("leaving"),c.current=setTimeout(()=>{n(!1),l("idle")},500)),()=>{c.current&&clearTimeout(c.current)}),[e]),!s)return null;const f=a==="sucesso",d=m(f?"--sk-palette-teal-00c47c":"--sk-palette-rose-ff5c6a"),b=i==="entering"?"translate3d(-50%, -16px, 0) scale(.98)":i==="visible"?"translate3d(-50%, 0, 0) scale(1)":"translate3d(-50%, -16px, 0) scale(.98)",_=i==="entering"?0:i==="visible"?1:0;return o.jsxs("div",{role:"alert","aria-live":"polite","aria-atomic":"true",style:{position:"fixed",top:"max(14px, env(safe-area-inset-top))",left:"50%",zIndex:9999,background:m("--sk-palette-neutral-1a1a1a"),color:m("--sk-palette-neutral-ffffff"),display:"flex",alignItems:"center",gap:"12px",width:"min(calc(100vw - 24px), 520px)",minHeight:"48px",padding:"12px 14px",border:"1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 8%, transparent)",borderRadius:"14px",transform:b,opacity:_,transition:i==="leaving"?"transform 0.22s ease, opacity 0.18s ease":"transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease",boxShadow:"0 16px 45px color-mix(in srgb, var(--sk-palette-neutral-000000) 35%, transparent)",fontFamily:'-apple-system, "Roboto", Arial, sans-serif',pointerEvents:i==="visible"?"auto":"none"},children:[o.jsx("div",{style:{flexShrink:0,display:"flex",alignItems:"center"},children:f?o.jsx(Ne,{size:20,style:{color:d,filter:`drop-shadow(0 0 6px ${d}66)`}}):o.jsx(Lt,{size:20,style:{color:d,filter:`drop-shadow(0 0 6px ${d}66)`}})}),o.jsx("p",{style:{flex:1,margin:0,fontSize:"14px",fontWeight:500,lineHeight:1.4,color:m("--sk-palette-neutral-ffffff"),minWidth:0},children:t}),o.jsx("button",{onClick:r,"aria-label":"Fechar notificação",style:{background:"transparent",border:"none",cursor:"pointer",padding:"4px",color:m("--sk-palette-blue-9fb3c8"),fontWeight:600,display:"flex",alignItems:"center",flexShrink:0,borderRadius:"4px",WebkitTapHighlightColor:"color-mix(in srgb, var(--sk-palette-neutral-000000) 0%, transparent)"},children:o.jsx(Ot,{size:18})})]})},Jo=()=>null,j=({className:e,...t})=>o.jsx("div",{className:`animate-pulse bg-gray-200/60 dark:bg-white/5 rounded-md ${e||""}`,...t}),Xo=()=>o.jsxs("div",{className:"flex flex-col gap-6 w-full animate-fade-in p-6",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[o.jsx(j,{className:"w-16 h-16 rounded-full"}),o.jsxs("div",{className:"flex flex-col gap-2",children:[o.jsx(j,{className:"w-48 h-8"}),o.jsx(j,{className:"w-32 h-4"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(j,{className:"w-full h-32 rounded-2xl"}),o.jsx(j,{className:"w-full h-32 rounded-2xl"}),o.jsx(j,{className:"w-full h-32 rounded-2xl"})]}),o.jsx("div",{className:"w-full",children:o.jsx(j,{className:"w-full h-64 rounded-2xl"})})]}),Fn=E.memo(({size:e="md"})=>o.jsx("div",{className:`sk-spin sk-spinner-ring rounded-full border-gray-200 dark:border-white/10 border-t-accent border-solid ${e==="sm"?"w-4 h-4 border-2":"w-8 h-8 border-4"}`,role:"status","aria-label":"Carregando"}));Fn.displayName="LoadingSpinner";const Je=E.memo(()=>o.jsxs("div",{className:"relative w-14 h-14 flex items-center justify-center",role:"status","aria-label":"Carregando",children:[o.jsx("div",{className:"sk-spin-slow absolute inset-0 rounded-full border-[2.5px] sk-bd-accent sk-bdt-accent sk-bdr-accent border-solid"}),o.jsx("div",{className:"sk-spin-reverse absolute inset-[7px] rounded-full border-[1.5px] sk-bd-accent sk-bdb-accent border-solid"}),o.jsx("div",{className:"absolute top-1/2 left-[9px] right-[9px] h-px sk-bg-accent -translate-y-1/2"}),o.jsx("div",{className:"absolute left-1/2 top-[9px] bottom-[9px] w-px sk-bg-accent -translate-x-1/2"}),o.jsx("div",{className:"w-2 h-2 rounded-full sk-fill-accent shadow-[0_0_8px_color-mix(in_srgb,_var(--sk-accent)_80%,_transparent)] animate-pulse"})]}));Je.displayName="SkullSpinner";const Vn=E.memo(()=>o.jsxs("div",{className:"w-full min-h-[60vh] flex flex-col items-center justify-center gap-4",role:"status","aria-label":"Carregando",children:[o.jsx(Je,{}),o.jsx("span",{className:"sk-eyebrow text-xs animate-pulse",children:"Carregando..."})]}));Vn.displayName="FullPageSpinner";const Zo=({children:e})=>o.jsx(E.Suspense,{fallback:null,children:e}),Kn={home:oe,discover:Pt,downloads:ss,vip:Rt,commissions:Ae,cart:Tt,admin:ct,account:jt,menu:rs,dashboard:ct,catalog:Se,people:se,finance:Ae,settings:as},Qo=e=>Kn[e]??oe,Ue="data-skull-react-style",H=new Map,Gn=new Map;function wt(e){return[...document.head.querySelectorAll(`style[${Ue}]`)].find(t=>t.getAttribute(Ue)===e)??null}function ei(e,t){p.useInsertionEffect(()=>{if(typeof document>"u")return;const a=Gn.get(e)??t;let r=wt(e);return r?r.textContent!==a&&(r.textContent=a):(r=document.createElement("style"),r.setAttribute(Ue,e),r.textContent=a,document.head.appendChild(r)),H.set(e,(H.get(e)??0)+1),()=>{const s=(H.get(e)??1)-1;if(s>0){H.set(e,s);return}H.delete(e),wt(e)?.remove()}},[t,e])}const St={accent:"var(--sk-ds-accent)",info:"var(--sk-ds-info)",premium:"var(--sk-ds-premium)",danger:"var(--sk-ds-danger)",neutral:"var(--sk-ds-t3)"},ee=p.memo(({title:e,description:t,icon:a,actionLabel:r,onAction:s,tone:n="info",children:i,iconAnimation:l})=>{const c=St[n]||St.info;return o.jsxs("div",{className:"sk-empty-state relative w-full flex flex-col items-center justify-center overflow-visible px-4",style:{"--es-tone":c},children:[o.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none","aria-hidden":!0,children:o.jsx("div",{className:"w-[min(70vw,320px)] h-[min(70vw,320px)] blur-[80px] rounded-full opacity-20",style:{background:"var(--es-tone)"}})}),o.jsx("div",{className:"relative z-10 flex items-center justify-center mb-6",children:o.jsxs("div",{className:"sk-orbital relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center overflow-visible",children:[o.jsx("div",{className:"sk-orbital__ring sk-orbital__ring--outer absolute inset-0 rounded-full border-2",style:{borderColor:"color-mix(in srgb, var(--es-tone) 30%, transparent)",borderTopColor:"var(--es-tone)"},"aria-hidden":!0}),o.jsx("div",{className:"sk-orbital__ring sk-orbital__ring--inner absolute inset-3 rounded-full border border-dashed opacity-80",style:{borderColor:"color-mix(in srgb, var(--es-tone) 40%, transparent)"},"aria-hidden":!0}),o.jsx("div",{className:"absolute inset-0 rounded-full border scale-110",style:{borderColor:"color-mix(in srgb, var(--es-tone) 12%, transparent)"},"aria-hidden":!0}),o.jsx("div",{className:"relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border",style:{background:"var(--sk-ds-surface)",borderColor:"color-mix(in srgb, var(--es-tone) 30%, transparent)",boxShadow:"0 0 35px color-mix(in srgb, var(--es-tone) 22%, transparent)"},children:o.jsx(de,{className:`fas ${a} text-2xl md:text-3xl ${l||""}`,style:{color:"var(--es-tone)"}})})]})}),o.jsxs("div",{className:"text-center z-10 w-full max-w-md relative",children:[o.jsx("h3",{className:"sk-title",style:{fontSize:"clamp(1.125rem, 3.6vw, 1.5rem)"},children:e}),o.jsx("div",{className:"h-px w-16 mx-auto my-4",style:{background:"linear-gradient(90deg, transparent, var(--es-tone), transparent)"},"aria-hidden":!0}),o.jsx("p",{className:"sk-lead",style:{marginInline:"auto"},children:t}),i&&o.jsx("div",{className:"mt-5 w-full flex justify-center",children:i})]}),s&&r&&o.jsx("div",{className:"mt-7 z-10",children:o.jsx(ta,{size:"lg",onClick:s,icon:o.jsx(de,{className:"fas fa-arrow-right"}),children:r})})]})});ee.displayName="EmptyState";const Hn=p.memo(({onAction:e})=>o.jsx(ee,{title:"Sua coleção está vazia",description:"Assim que você adquirir um produto, ele entra para a sua coleção e fica disponível para download aqui.",icon:"fa-layer-group",actionLabel:"Ir para o catálogo",onAction:e,tone:"accent"}));Hn.displayName="EmptyOrders";const qn=p.memo(({onAction:e})=>o.jsx(ee,{title:"Seu carrinho está vazio",description:"Explore os sistemas da Legião e monte o seu setup.",icon:"fa-shopping-cart",actionLabel:"Ir para o catálogo",onAction:e,tone:"accent"}));qn.displayName="EmptyCart";const Yn=p.memo(({onAction:e,isAdmin:t})=>o.jsx(ee,{title:"Catálogo vazio",description:"Ainda não há produtos cadastrados na loja.",icon:"fa-box-open",actionLabel:t?"Abrir o painel admin":"Atualizar catálogo",onAction:e,tone:"premium"}));Yn.displayName="EmptyCatalog";const Jn=p.memo(({onAction:e,title:t,description:a})=>o.jsx(ee,{title:t||"Conexão interrompida",description:a||"Não conseguimos falar com o servidor agora. Tente de novo em instantes.",icon:"fa-server",actionLabel:"Tentar novamente",onAction:e,tone:"danger"}));Jn.displayName="EmptyError";const Xn=p.memo(({progress:e})=>o.jsxs("div",{className:"flex flex-col items-center gap-2 mt-6 w-full max-w-[280px]",children:[o.jsx("div",{className:"relative mb-2",children:o.jsx("span",{className:"sk-card__icon",style:{width:48,height:48},children:o.jsx(de,{className:"fas fa-lock text-xl"})})}),o.jsxs("div",{className:"sk-row",style:{justifyContent:"center",marginBottom:8},children:[o.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{background:"var(--sk-ds-accent)"},"aria-hidden":!0}),o.jsx("span",{className:"sk-eyebrow sk-eyebrow--accent",children:"Conexão segura"})]}),o.jsx("div",{className:"w-full h-1.5 rounded-full overflow-hidden",style:{background:"var(--sk-ds-surface-3)"},children:o.jsx("div",{className:"h-full transition-all duration-300 ease-out",style:{width:`${e}%`,background:"var(--sk-ds-accent)"}})}),o.jsx("div",{className:"flex justify-end w-full",children:o.jsxs("span",{className:"sk-text-xs sk-num",style:{fontWeight:700},children:[Math.floor(e),"%"]})})]}));Xn.displayName="SyncContent";const Zn=e=>e?.role==="ADMIN"?{label:"Admin",tone:"info"}:e?.isVIP?{label:"VIP",tone:"premium"}:e?.status==="INATIVO"?{label:"Inativo",tone:"danger"}:null,Qn=p.memo(({user:e,size:t="sm",online:a,meta:r})=>{const s=t==="md"?36:28,n=Zn(e),i=(e?.nome||e?.email||"?").charAt(0).toUpperCase();return o.jsxs("span",{className:"sk-row",style:{flexWrap:"nowrap",minWidth:0,gap:12},children:[o.jsxs("span",{className:"sk-user-avatar",style:{width:s,height:s},children:[e?.avatarUrl?o.jsx("img",{decoding:"async",src:e.avatarUrl,alt:"","aria-hidden":!0}):o.jsx("span",{"aria-hidden":!0,children:i}),a&&o.jsx("span",{className:"sk-user-avatar__pulse","aria-label":"Online agora"})]}),o.jsxs("span",{style:{minWidth:0},children:[o.jsxs("span",{className:"sk-row",style:{gap:6,minWidth:0},children:[o.jsx("span",{className:"sk-list-item__title",children:e?.nome||"Sem nome"}),n&&o.jsx(Ye,{tone:n.tone,children:n.label})]}),o.jsx("span",{className:"sk-list-item__desc",children:e?.email}),r&&o.jsx("span",{className:"sk-list-item__desc",children:r})]})]})});Qn.displayName="UserIdentity";const ti=()=>o.jsx("div",{className:"flex w-full items-center justify-center py-16 bg-transparent",children:o.jsx(Je,{})}),eo=p.memo(({title:e,description:t,icon:a,tone:r="accent",actions:s,compact:n=!1})=>o.jsxs("header",{className:`sk-row${n?" sk-page-head--compact":""}`,style:{justifyContent:"space-between",alignItems:"flex-start",gap:16},children:[o.jsxs("div",{className:"sk-row",style:{flexWrap:"nowrap",alignItems:"flex-start",minWidth:0},children:[o.jsx("span",{className:`sk-card__icon${r!=="accent"?` sk-card__icon--${r}`:""}`,"aria-hidden":!0,children:o.jsx(de,{className:`fas ${a}`})}),o.jsxs("div",{style:{minWidth:0},children:[n?o.jsx("h2",{className:"sk-title",children:e}):o.jsx("h1",{className:"sk-title",children:e}),t&&o.jsx("p",{className:"sk-lead",children:t})]})]}),s&&o.jsx("div",{className:"sk-row",style:{flexShrink:0},children:s})]}));eo.displayName="AdminPageHeader";const ke=e=>{const t=String(e?.message||"");return t.includes("dynamically imported module")||t.includes("ChunkLoadError")||e?.name==="ChunkLoadError"};class to extends E.Component{constructor(){super(...arguments),this.state={crashed:!1,chunkError:!1},this.handleUnhandledRejection=t=>{const a=t.reason;ke(a)&&(ce(),T())}}static getDerivedStateFromError(t){return{crashed:!0,chunkError:ke(t)}}componentDidMount(){typeof window<"u"&&window.addEventListener("unhandledrejection",this.handleUnhandledRejection)}componentWillUnmount(){typeof window<"u"&&window.removeEventListener("unhandledrejection",this.handleUnhandledRejection)}componentDidCatch(t,a){console.error("[Skull Legion] Falha de renderização",t,a.componentStack),ke(t)&&ce()}render(){return this.state.crashed?this.state.chunkError?(T(),null):o.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",backgroundColor:m("--sk-palette-neutral-080808"),color:m("--sk-palette-blue-e5e7eb"),fontFamily:"Montserrat, sans-serif",padding:"24px",textAlign:"center"},children:[o.jsx("div",{style:{fontSize:"28px"},children:"⚠️"}),o.jsx("h1",{style:{fontSize:"16px",fontWeight:700,margin:0},children:"Algo deu errado ao exibir a plataforma."}),o.jsx("p",{style:{fontSize:"12px",color:m("--sk-palette-neutral-9ca3af"),maxWidth:"360px",margin:0},children:"O erro foi registrado. Recarregue a página — se persistir, contate o suporte."}),o.jsx("button",{onClick:()=>window.location.reload(),style:{marginTop:"8px",padding:"10px 24px",borderRadius:"10px",border:"1px solid color-mix(in srgb, var(--sk-palette-neutral-ffffff) 15%, transparent)",backgroundColor:"color-mix(in srgb, var(--sk-palette-neutral-ffffff) 6%, transparent)",color:"var(--sk-palette-neutral-ffffff)",fontSize:"12px",fontWeight:700,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase"},children:"Recarregar"})]}):this.props.children??null}}const aa=180,ao=140,ro=25e3,so=8e3;let Et=!1,Xe=0,ra=0,ge=null,ve=null,xe=null,ye=null,Be=!1;const ne=new Set,ue=new Set,At=new Map,_e=new Set;let L=!1;const X=(e=typeof navigator<"u"?navigator.connection:void 0)=>{if(!e)return!1;if(e.saveData)return!0;const t=String(e.effectiveType||"");return t==="slow-2g"||t==="2g"},no=(e=typeof navigator<"u"?navigator:void 0)=>{if(!e)return!1;const t=Number(e.deviceMemory||0),a=Number(e.hardwareConcurrency||0);return t>0&&t<=2||a>0&&a<=2},oo=()=>{try{const e=navigator?.scheduling;if(e&&typeof e.isInputPending=="function")return!!e.isInputPending({includeContinuous:!0})}catch{}return!1},io=(e=Date.now())=>!!(typeof document<"u"&&document.visibilityState==="hidden"||e-Xe<aa||e-ra<ao||oo()),lo=e=>{if(typeof document>"u"||document.visibilityState!=="hidden"){e();return}const t=()=>{document.visibilityState==="visible"&&(document.removeEventListener("visibilitychange",t),e())};document.addEventListener("visibilitychange",t)},Nt=()=>{Xe=Date.now()},ze=()=>{ra=Date.now()};let C=null,W=null;const We=()=>{ze()},It=()=>{const e=document.querySelector("[data-main-scroll-container]");!e||e===C||(C&&C.removeEventListener("scroll",We),C=e,e.addEventListener("scroll",We,{passive:!0}),W?.disconnect(),W=null)},co=()=>{if(ge||typeof window>"u")return;const e={passive:!0,capture:!0},t=["pointerdown","touchstart","keydown"],a=["wheel","touchmove"];t.forEach(s=>window.addEventListener(s,Nt,e)),a.forEach(s=>window.addEventListener(s,ze,e));const r=()=>{document.visibilityState==="hidden"&&(Xe=Date.now())};document.addEventListener("visibilitychange",r),It(),!C&&document.body&&(W=new MutationObserver(()=>It()),W.observe(document.body,{childList:!0,subtree:!0})),ge=()=>{t.forEach(s=>window.removeEventListener(s,Nt,e)),a.forEach(s=>window.removeEventListener(s,ze,e)),document.removeEventListener("visibilitychange",r),W?.disconnect(),W=null,C&&(C.removeEventListener("scroll",We),C=null),ge=null}},uo=(e,t=4e3)=>typeof window.requestIdleCallback=="function"?window.requestIdleCallback(e,{timeout:t}):window.setTimeout(()=>{e({timeRemaining:()=>12,didTimeout:!0})},1200),fo=async()=>{const e=globalThis.scheduler;if(e&&typeof e.yield=="function")try{await e.yield();return}catch{}await new Promise(t=>setTimeout(t,0))},V=(e,t=4e3)=>{uo(r=>{lo(()=>{if(io()||L){setTimeout(()=>V(e,t),aa);return}try{e()}catch{}})},t)},sa=(e,t)=>_e.has(e)?Promise.resolve(void 0):(_e.add(e),t().catch(()=>{_e.delete(e)})),Ct=[{id:"StoreRoutes",load:()=>h(()=>import("./StoreRoutes.Cau4I3ZR.js"),__vite__mapDeps([5,3,6,7,8,2,9,10,11,4,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url)},{id:"HomeTab",load:()=>h(()=>import("./HomeTab.B3C-lJlf.js"),__vite__mapDeps([26,3,8,2,27,17,4,28,22,29,16,23,21,7]),import.meta.url)},{id:"OrdersTab",load:()=>h(()=>import("./OrdersTab.BvgH_4-I.js"),__vite__mapDeps([30,3,28,8,2,10,11,4,12,13,31,23,27,17]),import.meta.url)},{id:"CartView",load:()=>h(()=>import("./CartView.Dz-W8Wj4.js"),__vite__mapDeps([32,3,33,18,4,7,8,2,34,10,11,12,13,25,23,16]),import.meta.url)},{id:"VipTab",load:()=>h(()=>import("./VipTab.DgnMHKf_.js"),__vite__mapDeps([35,3,2,4]),import.meta.url)},{id:"PresentationTab",load:()=>h(()=>import("./PresentationTab.DG6A_Hyj.js"),__vite__mapDeps([36,3,20,18,2,4]),import.meta.url)},{id:"AuthScreen",load:()=>h(()=>import("./AuthScreen.Cbh6WWut.js"),__vite__mapDeps([37,3,8,2,10,11,4,12,13]),import.meta.url)},{id:"ProductDetailPage",load:()=>h(()=>import("./ProductDetailPage.DqWLpNKv.js"),__vite__mapDeps([38,3,8,2,24,10,11,4,12,13,7,16,18,22]),import.meta.url)}],po=[{id:"MyCommissions",load:()=>h(()=>import("./MyCommissions.1Naej0U9.js"),__vite__mapDeps([39,3,28,8,2,10,11,4,12,13,25,34,24,33,18,40,7,41]),import.meta.url)}],we=e=>{if(X()||L)return;const t=[...e],a=()=>{if(L||X())return;const r=t.shift();r&&sa(r.id,r.load).then(()=>fo()).finally(()=>V(a))};V(a)},mo=()=>{if(L=!1,no()){we(Ct.slice(0,2));return}we(Ct);const e=window.setTimeout(()=>{ue.delete(e),L||we(po)},ro);ue.add(e)},N=e=>(e.getAttribute("title")||e.getAttribute("aria-label")||e.textContent||"").toLowerCase().replace(/\s+/g," ").trim(),bo=[{id:"CartView",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item')||e,a=N(t);return/carrinho|cart/.test(a)||!!t.closest('[data-tab="carrinho"]')},load:()=>h(()=>import("./CartView.Dz-W8Wj4.js"),__vite__mapDeps([32,3,33,18,4,7,8,2,34,10,11,12,13,25,23,16]),import.meta.url)},{id:"OrdersTab",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item')||e,a=N(t);return/pedido|download|compras|coleção|colecao/.test(a)},load:()=>h(()=>import("./OrdersTab.BvgH_4-I.js"),__vite__mapDeps([30,3,28,8,2,10,11,4,12,13,31,23,27,17]),import.meta.url)},{id:"VipTab",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item')||e,a=N(t);return/\bvip\b|clube vip|assinante/.test(a)},load:()=>h(()=>import("./VipTab.DgnMHKf_.js"),__vite__mapDeps([35,3,2,4]),import.meta.url)},{id:"PresentationTab",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item')||e,a=N(t);return/\bsobre\b|apresenta/.test(a)},load:()=>h(()=>import("./PresentationTab.DG6A_Hyj.js"),__vite__mapDeps([36,3,20,18,2,4]),import.meta.url)},{id:"HomeTab",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item')||e,a=N(t);return/início|inicio|catálogo|catalogo/.test(a)},load:()=>h(()=>import("./HomeTab.B3C-lJlf.js"),__vite__mapDeps([26,3,8,2,27,17,4,28,22,29,16,23,21,7]),import.meta.url)},{id:"PresentationTab",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item, .home-icp-quiz-shortcut')||e,a=N(t);return/quiz|assistente|sistema ideal|encontrar sistema|diagnostico|diagnóstico/.test(a)||!!t.id?.includes("quiz")||!!t.closest(".home-icp-quiz-shortcut")},load:()=>h(()=>import("./PresentationTab.DG6A_Hyj.js"),__vite__mapDeps([36,3,20,18,2,4]),import.meta.url)},{id:"MyCommissions",match:e=>{const t=e.closest('button, a, [role="button"], .unified-nav-pill, .bnb-item, .sidebar-item')||e;return/colaborador|comiss|afiliad/.test(N(t))},load:()=>h(()=>import("./MyCommissions.1Naej0U9.js"),__vite__mapDeps([39,3,28,8,2,10,11,4,12,13,25,34,24,33,18,40,7,41]),import.meta.url)},{id:"AuthScreen",match:e=>{const t=e.closest('button, a, [role="button"]')||e;return/entrar|login|criar conta|cadastre/.test(N(t))},load:()=>h(()=>import("./AuthScreen.Cbh6WWut.js"),__vite__mapDeps([37,3,8,2,10,11,4,12,13]),import.meta.url)},{id:"ProductDetailPage",match:e=>!!e.closest(".ml-product-card, .skull-product-card, [data-product-card], .home-icp-grid > *"),load:()=>h(()=>import("./ProductDetailPage.DqWLpNKv.js"),__vite__mapDeps([38,3,8,2,24,10,11,4,12,13,7,16,18,22]),import.meta.url)}],ho=e=>{if(X()||L)return;const t=Date.now(),a=At.get(e.id)||0;t-a<so||(At.set(e.id,t),sa(e.id,e.load))},U=e=>{if(X())return;const t=e.target;if(t instanceof Element)for(const a of bo)try{if(a.match(t)){ho(a);break}}catch{}},ko=()=>{xe||typeof document>"u"||(document.addEventListener("pointerover",U,{passive:!0,capture:!0}),document.addEventListener("pointerdown",U,{passive:!0,capture:!0}),document.addEventListener("focusin",U,{passive:!0,capture:!0}),xe=()=>{document.removeEventListener("pointerover",U,!0),document.removeEventListener("pointerdown",U,!0),document.removeEventListener("focusin",U,!0),xe=null})},go=e=>{e.hasAttribute("decoding")||e.setAttribute("decoding","async")},vo=e=>{for(Be=!1;ne.size>0;){const t=ne.values().next().value;if(!t)break;ne.delete(t),t.isConnected&&go(t)}},re=e=>{e.hasAttribute("decoding")||(ne.add(e),!Be&&(Be=!0,V(()=>vo(),800)))},xo=()=>{ye||(document.querySelectorAll("img").forEach(e=>re(e)),ye=new MutationObserver(e=>{for(const t of e)t.addedNodes.forEach(a=>{if(a instanceof HTMLImageElement)re(a);else if(a instanceof Element){a.tagName==="IMG"&&re(a);const r=a.querySelectorAll?.("img");r&&r.length&&r.length<=40&&r.forEach(s=>re(s))}})}),ye.observe(document.body,{childList:!0,subtree:!0}))},yo=()=>{if(ve||typeof navigator>"u")return;const e=navigator.connection;if(!e||typeof e.addEventListener!="function")return;const t=()=>{X()&&(L=!0,ue.forEach(a=>window.clearTimeout(a)),ue.clear())};e.addEventListener("change",t),ve=()=>{try{e.removeEventListener("change",t)}catch{}ve=null}},_o=()=>{if(!(Et||typeof window>"u"||typeof document>"u")){Et=!0;try{document.documentElement.dataset.skullPerf="ready",co(),yo();const e=()=>{try{xo()}catch{}try{ko()}catch{}try{mo()}catch{}};document.readyState==="complete"?V(e):window.addEventListener("load",()=>V(e),{once:!0})}catch{}}};Ws();const wo=E.lazy(()=>h(()=>import("./StoreApp.BAkViSi0.js"),__vite__mapDeps([42,3,6,8,2,10,11,4,12,13,29,7,24,43]),import.meta.url).then(e=>({default:e.App})));if(typeof location<"u"&&(location.hostname==="localhost"||location.hostname==="127.0.0.1"))try{const e=[];for(let t=0;t<localStorage.length;t++){const a=localStorage.key(t);if(a&&(a.startsWith("firebase:")||a.startsWith("firestore_")||a.startsWith("fs_")||a.startsWith("CryptoKey")||a.startsWith("firebaseLocalStorageDb"))){const r=localStorage.getItem(a);r&&(r.startsWith("eyJ")||r.startsWith("dW5k")||/^[A-Za-z0-9+/=]{20,}$/.test(r))&&!r.includes("{")&&e.push(a)}}e.forEach(t=>localStorage.removeItem(t))}catch{}window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),window.deferredPrompt=e});const Z=document.getElementById("root");Z&&Z.setAttribute("aria-label",`${k.name} — Loja de Sistemas`);const So=ca.createRoot(Z);So.render(E.createElement(to,null,E.createElement(E.Suspense,{fallback:E.createElement("div",{role:"status","aria-busy":!0})},E.createElement(wo))));requestAnimationFrame(()=>{Z&&Z.removeAttribute("aria-busy")});_o();export{Nn as $,Lo as A,ta as B,$s as C,Ls as D,_s as E,de as F,ws as G,Wt as H,To as I,Ps as J,wn as K,eo as L,vn as M,In as N,Tn as O,k as P,Cn as Q,Ho as R,ms as S,Un as T,Qn as U,Ye as V,_n as W,jn as X,Rn as Y,qo as Z,h as _,ee as a,Ln as a0,Bn as a1,Wn as a2,On as a3,$n as a4,Wo as a5,mn as a6,Pn as a7,Dn as a8,En as a9,un as aA,Me as aB,fn as aC,zo as aD,Co as aE,jo as aF,Sn as aa,An as ab,xn as ac,Mo as ad,cn as ae,Ro as af,ti as ag,Es as ah,Xo as ai,yn as aj,Mn as ak,vs as al,hs as am,Je as an,Yo as ao,Jo as ap,$o as aq,us as ar,Qo as as,As as at,qn as au,B as av,u as aw,Po as ax,Us as ay,Oo as az,Qt as b,Jn as c,Yn as d,Uo as e,Ko as f,Fo as g,Hn as h,Do as i,Zo as j,Io as k,Q as l,D as m,Ss as n,Go as o,Xn as p,Cs as q,Vo as r,g as s,Bo as t,ei as u,m as v,J as w,Te as x,Ft as y,Ds as z};
