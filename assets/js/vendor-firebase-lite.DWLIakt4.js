const yi=()=>{};var Vn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Ei=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],l=n[e++],p=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ar={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,p=i+2<n.length,g=p?n[i+2]:0,y=s>>2,I=(s&3)<<4|l>>4;let w=(l&15)<<2|g>>6,S=g&63;p||(S=64,o||(w=64)),r.push(e[y],e[I],e[w],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(or(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ei(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const g=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||l==null||g==null||I==null)throw new Ii;const w=s<<2|l>>4;if(r.push(w),g!==64){const S=l<<4&240|g>>2;if(r.push(S),I!==64){const T=g<<6&192|I;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ii extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wi=function(n){const t=or(n);return ar.encodeByteArray(t,!0)},oe=function(n){return wi(n).replace(/\./g,"")},Ai=function(n){try{return ar.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=()=>Ti().__FIREBASE_DEFAULTS__,vi=()=>{if(typeof process>"u"||typeof Vn>"u")return;const n=Vn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ai(n[1]);return t&&JSON.parse(t)},Ie=()=>{try{return yi()||bi()||vi()||Vi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Si=n=>Ie()?.emulatorHosts?.[n],Ni=n=>{const t=Si(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ur=()=>Ie()?.config,Ha=n=>Ie()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[oe(JSON.stringify(e)),oe(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cr())}function lr(){const n=Ie()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ka(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ja(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ya(){const n=cr();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xa(){return!lr()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Za(){return!lr()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Di(){try{return typeof indexedDB=="object"}catch{return!1}}function Ci(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="FirebaseError";class kt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Oi,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Fi(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kt(i,l,r)}}function Fi(n,t){try{let e=0,r="";for(;e<n.length;){const i=n.indexOf("{$",e);if(i===-1){r+=n.substring(e);break}const s=n.indexOf("}",i+2);if(s===-1){r+=n.substring(e);break}const o=n.substring(i+2,s),l=t[o];r+=n.substring(e,i)+(l!=null?String(l):`<${o}?>`),e=s+1}return r}catch{return n}}function tu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function mt(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Sn(s)&&Sn(o)){if(!mt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Sn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function nu(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ru(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function iu(n,t){const e=new ki(n,t);return e.subscribe.bind(e)}class ki{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Mi(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Ce),i.error===void 0&&(i.error=Ce),i.complete===void 0&&(i.complete=Ce);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mi(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ce(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xi(n){return(await fetch(n,{credentials:"include"})).ok}class zt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ri;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($i(t))try{this.getOrInitializeService({instanceIdentifier:dt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=dt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=dt){return this.instances.has(t)}getOptions(t=dt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ui(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=dt){return this.component?this.component.multipleInstances?t:dt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ui(n){return n===dt?void 0:n}function $i(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Li(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const qi={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},ji=V.INFO,zi={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Gi=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=zi[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dr{constructor(t){this.name=t,this._logLevel=ji,this._logHandler=Gi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qi[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Hi=(n,t)=>t.some(e=>n instanceof e);let Nn,Rn;function Wi(){return Nn||(Nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ki(){return Rn||(Rn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pr=new WeakMap,Be=new WeakMap,mr=new WeakMap,Oe=new WeakMap,Ze=new WeakMap;function Qi(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(ut(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&pr.set(e,n)}).catch(()=>{}),Ze.set(t,n),t}function Ji(n){if(Be.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Be.set(n,t)}let qe={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Be.get(n);if(t==="objectStoreNames")return n.objectStoreNames||mr.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ut(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Yi(n){qe=n(qe)}function Xi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Fe(this),t,...e);return mr.set(r,t.sort?t.sort():[t]),ut(r)}:Ki().includes(n)?function(...t){return n.apply(Fe(this),t),ut(pr.get(this))}:function(...t){return ut(n.apply(Fe(this),t))}}function Zi(n){return typeof n=="function"?Xi(n):(n instanceof IDBTransaction&&Ji(n),Hi(n,Wi())?new Proxy(n,qe):n)}function ut(n){if(n instanceof IDBRequest)return Qi(n);if(Oe.has(n))return Oe.get(n);const t=Zi(n);return t!==n&&(Oe.set(n,t),Ze.set(t,n)),t}const Fe=n=>Ze.get(n);function ts(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),l=ut(o);return r&&o.addEventListener("upgradeneeded",p=>{r(ut(o.result),p.oldVersion,p.newVersion,ut(o.transaction),p)}),e&&o.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),l.then(p=>{s&&p.addEventListener("close",()=>s()),i&&p.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),l}const es=["get","getKey","getAll","getAllKeys","count"],ns=["put","add","delete","clear"],ke=new Map;function Pn(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ke.get(t))return ke.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=ns.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||es.includes(e)))return;const s=async function(o,...l){const p=this.transaction(o,i?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(l.shift())),(await Promise.all([g[e](...l),i&&p.done]))[0]};return ke.set(t,s),s}Yi(n=>({...n,get:(t,e,r)=>Pn(t,e)||n.get(t,e,r),has:(t,e)=>!!Pn(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(is(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function is(n){return n.getComponent()?.type==="VERSION"}const je="@firebase/app",Dn="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new dr("@firebase/app"),ss="@firebase/app-compat",os="@firebase/analytics-compat",as="@firebase/analytics",us="@firebase/app-check-compat",cs="@firebase/app-check",ls="@firebase/auth",hs="@firebase/auth-compat",fs="@firebase/database",ds="@firebase/data-connect",ps="@firebase/database-compat",ms="@firebase/functions",gs="@firebase/functions-compat",_s="@firebase/installations",ys="@firebase/installations-compat",Es="@firebase/messaging",Is="@firebase/messaging-compat",ws="@firebase/performance",As="@firebase/performance-compat",Ts="@firebase/remote-config",bs="@firebase/remote-config-compat",vs="@firebase/storage",Vs="@firebase/storage-compat",Ss="@firebase/firestore",Ns="@firebase/ai",Rs="@firebase/firestore-compat",Ps="firebase",Ds="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]",Cs={[je]:"fire-core",[ss]:"fire-core-compat",[as]:"fire-analytics",[os]:"fire-analytics-compat",[cs]:"fire-app-check",[us]:"fire-app-check-compat",[ls]:"fire-auth",[hs]:"fire-auth-compat",[fs]:"fire-rtdb",[ds]:"fire-data-connect",[ps]:"fire-rtdb-compat",[ms]:"fire-fn",[gs]:"fire-fn-compat",[_s]:"fire-iid",[ys]:"fire-iid-compat",[Es]:"fire-fcm",[Is]:"fire-fcm-compat",[ws]:"fire-perf",[As]:"fire-perf-compat",[Ts]:"fire-rc",[bs]:"fire-rc-compat",[vs]:"fire-gcs",[Vs]:"fire-gcs-compat",[Ss]:"fire-fst",[Rs]:"fire-fst-compat",[Ns]:"fire-vertex","fire-js":"fire-js",[Ps]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=new Map,ze=new Map,Ge=new Map;function Cn(n,t){try{n.container.addComponent(t)}catch(e){it.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ue(n){const t=n.name;if(Ge.has(t))return it.debug(`There were multiple attempts to register component ${t}.`),!1;Ge.set(t,n);for(const e of gt.values())Cn(e,n);for(const e of ze.values())Cn(e,n);return!0}function tn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Os(n,t,e=ae){tn(n,t).clearInstance(e)}function Fs(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rt=new hr("app","Firebase",ks);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=Ds;function Ls(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ae,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw rt.create("bad-app-name",{appName:String(i)});if(e||(e=ur()),!e)throw rt.create("no-options");const s=gt.get(i);if(s)if(mt(e,s.options)){if(mt(r,s.config))return s;throw rt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw rt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(e)});const o=new Bi(i);for(const p of Ge.values())o.addComponent(p);const l=new Ms(e,r,o);return gt.set(i,l),l}function Us(n=ae){const t=gt.get(n);if(!t&&n===ae&&ur())return Ls();if(!t)throw rt.create("no-app",{appName:n});return t}function su(){return Array.from(gt.values())}async function ou(n){let t=!1;const e=n.name;gt.has(e)?(t=!0,gt.delete(e)):ze.has(e)&&n.decRefCount()<=0&&(ze.delete(e),t=!0),t&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Ct(n,t,e){let r=Cs[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),it.warn(o.join(" "));return}ue(new zt(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="firebase-heartbeat-database",Bs=1,Gt="firebase-heartbeat-store";let Me=null;function gr(){return Me||(Me=ts($s,Bs,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Gt)}catch(e){console.warn(e)}}}}).catch(n=>{throw rt.create("idb-open",{originalErrorMessage:n.message})})),Me}async function qs(n){try{const e=(await gr()).transaction(Gt),r=await e.objectStore(Gt).get(_r(n));return await e.done,r}catch(t){if(t instanceof kt)it.warn(t.message);else{const e=rt.create("idb-get",{originalErrorMessage:t?.message});it.warn(e.message)}}}async function On(n,t){try{const r=(await gr()).transaction(Gt,"readwrite");await r.objectStore(Gt).put(t,_r(n)),await r.done}catch(e){if(e instanceof kt)it.warn(e.message);else{const r=rt.create("idb-set",{originalErrorMessage:e?.message});it.warn(r.message)}}}function _r(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1024,zs=30;class Gs{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ws(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>zs){const i=Ks(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){it.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fn(),{heartbeatsToSend:e,unsentEntries:r}=Hs(this._heartbeatsCache.heartbeats),i=oe(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return it.warn(t),""}}}function Fn(){return new Date().toISOString().substring(0,10)}function Hs(n,t=js){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),kn(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),kn(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ws{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Di()?Ci().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await qs(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return On(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return On(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function kn(n){return oe(JSON.stringify({version:2,heartbeats:n})).length}function Ks(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){ue(new zt("platform-logger",t=>new rs(t),"PRIVATE")),ue(new zt("heartbeat",t=>new Gs(t),"PRIVATE")),Ct(je,Dn,n),Ct(je,Dn,"esm2020"),Ct("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qs("");var Js="firebase",Ys="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(Js,Ys,"app");var Mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,Xs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(h,a){function c(){}c.prototype=a.prototype,h.F=a.prototype,h.prototype=new c,h.prototype.constructor=h,h.D=function(d,f,m){for(var u=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)u[ft-2]=arguments[ft];return a.prototype[f].apply(d,u)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(h,a,c){c||(c=0);const d=Array(16);if(typeof a=="string")for(var f=0;f<16;++f)d[f]=a.charCodeAt(c++)|a.charCodeAt(c++)<<8|a.charCodeAt(c++)<<16|a.charCodeAt(c++)<<24;else for(f=0;f<16;++f)d[f]=a[c++]|a[c++]<<8|a[c++]<<16|a[c++]<<24;a=h.g[0],c=h.g[1],f=h.g[2];let m=h.g[3],u;u=a+(m^c&(f^m))+d[0]+3614090360&4294967295,a=c+(u<<7&4294967295|u>>>25),u=m+(f^a&(c^f))+d[1]+3905402710&4294967295,m=a+(u<<12&4294967295|u>>>20),u=f+(c^m&(a^c))+d[2]+606105819&4294967295,f=m+(u<<17&4294967295|u>>>15),u=c+(a^f&(m^a))+d[3]+3250441966&4294967295,c=f+(u<<22&4294967295|u>>>10),u=a+(m^c&(f^m))+d[4]+4118548399&4294967295,a=c+(u<<7&4294967295|u>>>25),u=m+(f^a&(c^f))+d[5]+1200080426&4294967295,m=a+(u<<12&4294967295|u>>>20),u=f+(c^m&(a^c))+d[6]+2821735955&4294967295,f=m+(u<<17&4294967295|u>>>15),u=c+(a^f&(m^a))+d[7]+4249261313&4294967295,c=f+(u<<22&4294967295|u>>>10),u=a+(m^c&(f^m))+d[8]+1770035416&4294967295,a=c+(u<<7&4294967295|u>>>25),u=m+(f^a&(c^f))+d[9]+2336552879&4294967295,m=a+(u<<12&4294967295|u>>>20),u=f+(c^m&(a^c))+d[10]+4294925233&4294967295,f=m+(u<<17&4294967295|u>>>15),u=c+(a^f&(m^a))+d[11]+2304563134&4294967295,c=f+(u<<22&4294967295|u>>>10),u=a+(m^c&(f^m))+d[12]+1804603682&4294967295,a=c+(u<<7&4294967295|u>>>25),u=m+(f^a&(c^f))+d[13]+4254626195&4294967295,m=a+(u<<12&4294967295|u>>>20),u=f+(c^m&(a^c))+d[14]+2792965006&4294967295,f=m+(u<<17&4294967295|u>>>15),u=c+(a^f&(m^a))+d[15]+1236535329&4294967295,c=f+(u<<22&4294967295|u>>>10),u=a+(f^m&(c^f))+d[1]+4129170786&4294967295,a=c+(u<<5&4294967295|u>>>27),u=m+(c^f&(a^c))+d[6]+3225465664&4294967295,m=a+(u<<9&4294967295|u>>>23),u=f+(a^c&(m^a))+d[11]+643717713&4294967295,f=m+(u<<14&4294967295|u>>>18),u=c+(m^a&(f^m))+d[0]+3921069994&4294967295,c=f+(u<<20&4294967295|u>>>12),u=a+(f^m&(c^f))+d[5]+3593408605&4294967295,a=c+(u<<5&4294967295|u>>>27),u=m+(c^f&(a^c))+d[10]+38016083&4294967295,m=a+(u<<9&4294967295|u>>>23),u=f+(a^c&(m^a))+d[15]+3634488961&4294967295,f=m+(u<<14&4294967295|u>>>18),u=c+(m^a&(f^m))+d[4]+3889429448&4294967295,c=f+(u<<20&4294967295|u>>>12),u=a+(f^m&(c^f))+d[9]+568446438&4294967295,a=c+(u<<5&4294967295|u>>>27),u=m+(c^f&(a^c))+d[14]+3275163606&4294967295,m=a+(u<<9&4294967295|u>>>23),u=f+(a^c&(m^a))+d[3]+4107603335&4294967295,f=m+(u<<14&4294967295|u>>>18),u=c+(m^a&(f^m))+d[8]+1163531501&4294967295,c=f+(u<<20&4294967295|u>>>12),u=a+(f^m&(c^f))+d[13]+2850285829&4294967295,a=c+(u<<5&4294967295|u>>>27),u=m+(c^f&(a^c))+d[2]+4243563512&4294967295,m=a+(u<<9&4294967295|u>>>23),u=f+(a^c&(m^a))+d[7]+1735328473&4294967295,f=m+(u<<14&4294967295|u>>>18),u=c+(m^a&(f^m))+d[12]+2368359562&4294967295,c=f+(u<<20&4294967295|u>>>12),u=a+(c^f^m)+d[5]+4294588738&4294967295,a=c+(u<<4&4294967295|u>>>28),u=m+(a^c^f)+d[8]+2272392833&4294967295,m=a+(u<<11&4294967295|u>>>21),u=f+(m^a^c)+d[11]+1839030562&4294967295,f=m+(u<<16&4294967295|u>>>16),u=c+(f^m^a)+d[14]+4259657740&4294967295,c=f+(u<<23&4294967295|u>>>9),u=a+(c^f^m)+d[1]+2763975236&4294967295,a=c+(u<<4&4294967295|u>>>28),u=m+(a^c^f)+d[4]+1272893353&4294967295,m=a+(u<<11&4294967295|u>>>21),u=f+(m^a^c)+d[7]+4139469664&4294967295,f=m+(u<<16&4294967295|u>>>16),u=c+(f^m^a)+d[10]+3200236656&4294967295,c=f+(u<<23&4294967295|u>>>9),u=a+(c^f^m)+d[13]+681279174&4294967295,a=c+(u<<4&4294967295|u>>>28),u=m+(a^c^f)+d[0]+3936430074&4294967295,m=a+(u<<11&4294967295|u>>>21),u=f+(m^a^c)+d[3]+3572445317&4294967295,f=m+(u<<16&4294967295|u>>>16),u=c+(f^m^a)+d[6]+76029189&4294967295,c=f+(u<<23&4294967295|u>>>9),u=a+(c^f^m)+d[9]+3654602809&4294967295,a=c+(u<<4&4294967295|u>>>28),u=m+(a^c^f)+d[12]+3873151461&4294967295,m=a+(u<<11&4294967295|u>>>21),u=f+(m^a^c)+d[15]+530742520&4294967295,f=m+(u<<16&4294967295|u>>>16),u=c+(f^m^a)+d[2]+3299628645&4294967295,c=f+(u<<23&4294967295|u>>>9),u=a+(f^(c|~m))+d[0]+4096336452&4294967295,a=c+(u<<6&4294967295|u>>>26),u=m+(c^(a|~f))+d[7]+1126891415&4294967295,m=a+(u<<10&4294967295|u>>>22),u=f+(a^(m|~c))+d[14]+2878612391&4294967295,f=m+(u<<15&4294967295|u>>>17),u=c+(m^(f|~a))+d[5]+4237533241&4294967295,c=f+(u<<21&4294967295|u>>>11),u=a+(f^(c|~m))+d[12]+1700485571&4294967295,a=c+(u<<6&4294967295|u>>>26),u=m+(c^(a|~f))+d[3]+2399980690&4294967295,m=a+(u<<10&4294967295|u>>>22),u=f+(a^(m|~c))+d[10]+4293915773&4294967295,f=m+(u<<15&4294967295|u>>>17),u=c+(m^(f|~a))+d[1]+2240044497&4294967295,c=f+(u<<21&4294967295|u>>>11),u=a+(f^(c|~m))+d[8]+1873313359&4294967295,a=c+(u<<6&4294967295|u>>>26),u=m+(c^(a|~f))+d[15]+4264355552&4294967295,m=a+(u<<10&4294967295|u>>>22),u=f+(a^(m|~c))+d[6]+2734768916&4294967295,f=m+(u<<15&4294967295|u>>>17),u=c+(m^(f|~a))+d[13]+1309151649&4294967295,c=f+(u<<21&4294967295|u>>>11),u=a+(f^(c|~m))+d[4]+4149444226&4294967295,a=c+(u<<6&4294967295|u>>>26),u=m+(c^(a|~f))+d[11]+3174756917&4294967295,m=a+(u<<10&4294967295|u>>>22),u=f+(a^(m|~c))+d[2]+718787259&4294967295,f=m+(u<<15&4294967295|u>>>17),u=c+(m^(f|~a))+d[9]+3951481745&4294967295,h.g[0]=h.g[0]+a&4294967295,h.g[1]=h.g[1]+(f+(u<<21&4294967295|u>>>11))&4294967295,h.g[2]=h.g[2]+f&4294967295,h.g[3]=h.g[3]+m&4294967295}r.prototype.v=function(h,a){a===void 0&&(a=h.length);const c=a-this.blockSize,d=this.C;let f=this.h,m=0;for(;m<a;){if(f==0)for(;m<=c;)i(this,h,m),m+=this.blockSize;if(typeof h=="string"){for(;m<a;)if(d[f++]=h.charCodeAt(m++),f==this.blockSize){i(this,d),f=0;break}}else for(;m<a;)if(d[f++]=h[m++],f==this.blockSize){i(this,d),f=0;break}}this.h=f,this.o+=a},r.prototype.A=function(){var h=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);h[0]=128;for(var a=1;a<h.length-8;++a)h[a]=0;a=this.o*8;for(var c=h.length-8;c<h.length;++c)h[c]=a&255,a/=256;for(this.v(h),h=Array(16),a=0,c=0;c<4;++c)for(let d=0;d<32;d+=8)h[a++]=this.g[c]>>>d&255;return h};function s(h,a){var c=l;return Object.prototype.hasOwnProperty.call(c,h)?c[h]:c[h]=a(h)}function o(h,a){this.h=a;const c=[];let d=!0;for(let f=h.length-1;f>=0;f--){const m=h[f]|0;d&&m==a||(c[f]=m,d=!1)}this.g=c}var l={};function p(h){return-128<=h&&h<128?s(h,function(a){return new o([a|0],a<0?-1:0)}):new o([h|0],h<0?-1:0)}function g(h){if(isNaN(h)||!isFinite(h))return I;if(h<0)return b(g(-h));const a=[];let c=1;for(let d=0;h>=c;d++)a[d]=h/c|0,c*=4294967296;return new o(a,0)}function y(h,a){if(h.length==0)throw Error("number format error: empty string");if(a=a||10,a<2||36<a)throw Error("radix out of range: "+a);if(h.charAt(0)=="-")return b(y(h.substring(1),a));if(h.indexOf("-")>=0)throw Error('number format error: interior "-" character');const c=g(Math.pow(a,8));let d=I;for(let m=0;m<h.length;m+=8){var f=Math.min(8,h.length-m);const u=parseInt(h.substring(m,m+f),a);f<8?(f=g(Math.pow(a,f)),d=d.j(f).add(g(u))):(d=d.j(c),d=d.add(g(u)))}return d}var I=p(0),w=p(1),S=p(16777216);n=o.prototype,n.m=function(){if(N(this))return-b(this).m();let h=0,a=1;for(let c=0;c<this.g.length;c++){const d=this.i(c);h+=(d>=0?d:4294967296+d)*a,a*=4294967296}return h},n.toString=function(h){if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(T(this))return"0";if(N(this))return"-"+b(this).toString(h);const a=g(Math.pow(h,6));var c=this;let d="";for(;;){const f=nt(c,a).g;c=J(c,f.j(a));let m=((c.g.length>0?c.g[0]:c.h)>>>0).toString(h);if(c=f,T(c))return m+d;for(;m.length<6;)m="0"+m;d=m+d}},n.i=function(h){return h<0?0:h<this.g.length?this.g[h]:this.h};function T(h){if(h.h!=0)return!1;for(let a=0;a<h.g.length;a++)if(h.g[a]!=0)return!1;return!0}function N(h){return h.h==-1}n.l=function(h){return h=J(this,h),N(h)?-1:T(h)?0:1};function b(h){const a=h.g.length,c=[];for(let d=0;d<a;d++)c[d]=~h.g[d];return new o(c,~h.h).add(w)}n.abs=function(){return N(this)?b(this):this},n.add=function(h){const a=Math.max(this.g.length,h.g.length),c=[];let d=0;for(let f=0;f<=a;f++){let m=d+(this.i(f)&65535)+(h.i(f)&65535),u=(m>>>16)+(this.i(f)>>>16)+(h.i(f)>>>16);d=u>>>16,m&=65535,u&=65535,c[f]=u<<16|m}return new o(c,c[c.length-1]&-2147483648?-1:0)};function J(h,a){return h.add(b(a))}n.j=function(h){if(T(this)||T(h))return I;if(N(this))return N(h)?b(this).j(b(h)):b(b(this).j(h));if(N(h))return b(this.j(b(h)));if(this.l(S)<0&&h.l(S)<0)return g(this.m()*h.m());const a=this.g.length+h.g.length,c=[];for(var d=0;d<2*a;d++)c[d]=0;for(d=0;d<this.g.length;d++)for(let f=0;f<h.g.length;f++){const m=this.i(d)>>>16,u=this.i(d)&65535,ft=h.i(f)>>>16,vn=h.i(f)&65535;c[2*d+2*f]+=u*vn,Rt(c,2*d+2*f),c[2*d+2*f+1]+=m*vn,Rt(c,2*d+2*f+1),c[2*d+2*f+1]+=u*ft,Rt(c,2*d+2*f+1),c[2*d+2*f+2]+=m*ft,Rt(c,2*d+2*f+2)}for(h=0;h<a;h++)c[h]=c[2*h+1]<<16|c[2*h];for(h=a;h<2*a;h++)c[h]=0;return new o(c,0)};function Rt(h,a){for(;(h[a]&65535)!=h[a];)h[a+1]+=h[a]>>>16,h[a]&=65535,a++}function H(h,a){this.g=h,this.h=a}function nt(h,a){if(T(a))throw Error("division by zero");if(T(h))return new H(I,I);if(N(h))return a=nt(b(h),a),new H(b(a.g),b(a.h));if(N(a))return a=nt(h,b(a)),new H(b(a.g),a.h);if(h.g.length>30){if(N(h)||N(a))throw Error("slowDivide_ only works with positive integers.");for(var c=w,d=a;d.l(h)<=0;)c=bn(c),d=bn(d);var f=Pt(c,1),m=Pt(d,1);for(d=Pt(d,2),c=Pt(c,2);!T(d);){var u=m.add(d);u.l(h)<=0&&(f=f.add(c),m=u),d=Pt(d,1),c=Pt(c,1)}return a=J(h,f.j(a)),new H(f,a)}for(f=I;h.l(a)>=0;){for(c=Math.max(1,Math.floor(h.m()/a.m())),d=Math.ceil(Math.log(c)/Math.LN2),d=d<=48?1:Math.pow(2,d-48),m=g(c),u=m.j(a);N(u)||u.l(h)>0;)c-=d,m=g(c),u=m.j(a);T(m)&&(m=w),f=f.add(m),h=J(h,u)}return new H(f,h)}n.B=function(h){return nt(this,h).h},n.and=function(h){const a=Math.max(this.g.length,h.g.length),c=[];for(let d=0;d<a;d++)c[d]=this.i(d)&h.i(d);return new o(c,this.h&h.h)},n.or=function(h){const a=Math.max(this.g.length,h.g.length),c=[];for(let d=0;d<a;d++)c[d]=this.i(d)|h.i(d);return new o(c,this.h|h.h)},n.xor=function(h){const a=Math.max(this.g.length,h.g.length),c=[];for(let d=0;d<a;d++)c[d]=this.i(d)^h.i(d);return new o(c,this.h^h.h)};function bn(h){const a=h.g.length+1,c=[];for(let d=0;d<a;d++)c[d]=h.i(d)<<1|h.i(d-1)>>>31;return new o(c,h.h)}function Pt(h,a){const c=a>>5;a%=32;const d=h.g.length-c,f=[];for(let m=0;m<d;m++)f[m]=a>0?h.i(m+c)>>>a|h.i(m+c+1)<<32-a:h.i(m+c);return new o(f,h.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Xs=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=g,o.fromString=y,yr=o}).apply(typeof Mn<"u"?Mn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}U.UNAUTHENTICATED=new U(null),U.GOOGLE_CREDENTIALS=new U("google-credentials-uid"),U.FIRST_PARTY=new U("first-party-uid"),U.MOCK_USER=new U("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mt="12.18.0";function Zs(n){Mt=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new dr("@firebase/firestore");function to(n){_t.setLogLevel(n)}function yt(n,...t){if(_t.logLevel<=V.DEBUG){const e=t.map(en);_t.debug(`Firestore (${Mt}): ${n}`,...e)}}function we(n,...t){if(_t.logLevel<=V.ERROR){const e=t.map(en);_t.error(`Firestore (${Mt}): ${n}`,...e)}}function Er(n,...t){if(_t.logLevel<=V.WARN){const e=t.map(en);_t.warn(`Firestore (${Mt}): ${n}`,...e)}}function en(n){if(typeof n=="string")return n;try{return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ir(n,r,e)}function Ir(n,t,e){let r=`FIRESTORE (${Mt}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw we(r),new Error(r)}function B(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Ir(t,i,r)}function Et(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends kt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class eo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(U.UNAUTHENTICATED)))}shutdown(){}}class no{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ro{constructor(t){this.auth=null,t.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(B(typeof t.accessToken=="string",42297,{Z:t}),new wr(t.accessToken,new U(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class io{constructor(t,e,r){this.ee=t,this.te=e,this.re=r,this.type="FirstParty",this.user=U.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class so{constructor(t,e,r){this.ee=t,this.te=e,this.re=r}getToken(){return Promise.resolve(new io(this.ee,this.te,this.re))}start(t,e){t.enqueueRetryable((()=>e(U.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xn{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oo{constructor(t,e){this.se=e,this.appCheck=null,this.oe=null,Fs(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),e.onInit((r=>{this.appCheck=r}))}getToken(){return this.oe?Promise.resolve(new xn(this.oe)):this.appCheck?this.appCheck.getToken().then((t=>t?(B(typeof t.token=="string",3470,{tokenResult:t}),new xn(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e,r,i,s,o,l,p,g,y,I,w,S){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y,this.apiKey=I,this._customHeaders=w,this.grpcFlowControlWindow=S}}const ce="(default)";class Ht{constructor(t,e){this.projectId=t,this.database=e||ce}static empty(){return new Ht("","")}get isDefaultDatabase(){return this.database===ce}isEqual(t){return t instanceof Ht&&t.projectId===this.projectId&&t.database===this.database}}function uo(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ht(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=co(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%62))}return r}}function O(n,t){return n<t?-1:n>t?1:0}function He(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),s=t.charAt(r);if(i!==s)return xe(i)===xe(s)?O(i,s):xe(i)?1:-1}return O(n.length,t.length)}const ho=55296,fo=57343;function xe(n){const t=n.charCodeAt(0);return t>=ho&&t<=fo}function nn(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="__name__";class X{constructor(t,e,r){e===void 0?e=0:e>t.length&&v(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&v(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return X.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof X?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=X.compareSegments(t.get(i),e.get(i));if(s!==0)return s}return O(t.length,e.length)}static compareSegments(t,e){const r=X.isNumericId(t),i=X.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?X.extractNumericId(t).compare(X.extractNumericId(e)):He(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return yr.fromString(t.substring(4,t.length-2))}}class P extends X{construct(t,e,r){return new P(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new P(e)}static emptyPath(){return new P([])}}const po=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let ct=class Dt extends X{construct(t,e,r){return new Dt(t,e,r)}static isValidIdentifier(t){return po.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===We}static keyField(){return new Dt([We])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[i+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(e)}static emptyPath(){return new Dt([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.path=t}static fromPath(t){return new D(P.fromString(t))}static fromName(t){return new D(P.fromString(t).popFirst(5))}static empty(){return new D(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&P.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return P.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new D(new P(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n,t,e){if(!e)throw new E(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ln(n){if(!D.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Un(n){if(D.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ar(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ae(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":v(12329,{type:typeof n})}function Q(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ae(n);throw new E(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Tr(n,t){if(t<=0)throw new E(_.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re=null;function mo(){return re===null?re=(function(){return 268435456+Math.round(2147483648*Math.random())})():re++,"0x"+re.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){return n==null}function le(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="RestConnection",go={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _o{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.ue=e+"://"+t.host,this._e=`projects/${r}/databases/${i}`,this.ce=this.databaseId.database===ce?`project_id=${r}`:`project_id=${r}&database_id=${i}`}le(t,e,r,i,s){const o=mo(),l=this.he(t,e.toUriEncodedString());yt(Le,`Sending RPC '${t}' ${o}:`,l,r);const p={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.fe(p,i,s);const{host:g}=new URL(l),y=fr(g);return this.me(t,l,p,r,y).then((I=>(yt(Le,`Received RPC '${t}' ${o}: `,I),I)),(I=>{throw Er(Le,`RPC '${t}' ${o} failed with error: `,I,"url: ",l,"request:",r),I}))}de(t,e,r,i,s,o){return this.le(t,e,r,i,s)}fe(t,e,r){if(t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Mt})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,s)=>t[s]=i)),r&&r.headers.forEach(((i,s)=>t[s]=i)),this.databaseInfo._customHeaders)for(const i of Object.keys(this.databaseInfo._customHeaders))t[i]=this.databaseInfo._customHeaders[i]}he(t,e){const r=go[t];let i=`${this.ue}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n,A;function yo(n){switch(n){case _.OK:return v(64938);case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0;default:return v(15467,{code:n})}}function Bn(n){if(n===void 0)return we("RPC_ERROR","HTTP error has no status"),_.UNKNOWN;switch(n){case 200:return _.OK;case 400:return _.FAILED_PRECONDITION;case 401:return _.UNAUTHENTICATED;case 403:return _.PERMISSION_DENIED;case 404:return _.NOT_FOUND;case 409:return _.ABORTED;case 416:return _.OUT_OF_RANGE;case 429:return _.RESOURCE_EXHAUSTED;case 499:return _.CANCELLED;case 500:return _.UNKNOWN;case 501:return _.UNIMPLEMENTED;case 503:return _.UNAVAILABLE;case 504:return _.DEADLINE_EXCEEDED;default:return n>=200&&n<300?_.OK:n>=400&&n<500?_.FAILED_PRECONDITION:n>=500&&n<600?_.INTERNAL:_.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(A=$n||($n={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";class Eo extends _o{Ee(t,e){throw new Error("Not supported by FetchConnection")}async me(t,e,r,i,s){const o=JSON.stringify(i);let l;try{const p={method:"POST",headers:r,body:o};s&&(p.credentials="include"),l=await fetch(e,p)}catch(p){const g=p;throw new E(Bn(g.status),"Request failed with error: "+g.statusText)}if(!l.ok){let p=await l.json();Array.isArray(p)&&(p=p[0]);const g=p?.error?.message;throw new E(Bn(l.status),`Request failed with error: ${g??l.statusText}`)}return l.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Io(n,t){const e=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.push(t(n[r],r,n));return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wo("Invalid base64 string: "+s):s}})(t);return new st(e)}static fromUint8Array(t){const e=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(t);return new st(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Ao=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(n){if(B(!!n,39018),typeof n=="string"){let t=0;const e=Ao.exec(n);if(B(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:F(n.seconds),nanos:F(n.nanos)}}function F(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Wt(n){return typeof n=="string"?st.fromBase64String(n):st.fromUint8Array(n)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,t){const e={typeString:n};return t&&(e.value=t),e}function Xt(n,t){if(!Ar(n))throw new E(_.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){e=`Expected '${r}' field to equal '${s.value}'`;break}}if(e)throw new E(_.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=-62135596800,zn=1e6;class k{static now(){return k.fromMillis(Date.now())}static fromDate(t){return k.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*zn);return new k(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<jn)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zn}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:k._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Xt(t,k._jsonSchema))return new k(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-jn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}k._jsonSchemaVersion="firestore/timestamp/1.0",k._jsonSchema={type:W("string",k._jsonSchemaVersion),seconds:W("number"),nanoseconds:W("number")};function sn(n){return(n?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function Vr(n){const t=n.mapValue.fields.__previous_value__;return sn(t)?Vr(t):t}function Kt(n){const t=It(n.mapValue.fields.__local_write_time__.timestampValue);return new k(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="__type__",To="__max__",ie={},Nr="__vector__",he="value";function wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sn(n)?4:(function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===To})(n)?9007199254740991:(function(e){return(e?.mapValue?.fields||{})[Sr]?.stringValue===Nr})(n)?10:11:v(28295,{value:n})}function Ot(n,t,e){if(n===t)return!0;const r=wt(n);if(r!==wt(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Kt(n).isEqual(Kt(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=It(s.timestampValue),p=It(o.timestampValue);return l.seconds===p.seconds&&l.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return Wt(s.bytesValue).isEqual(Wt(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return F(s.geoPointValue.latitude)===F(o.geoPointValue.latitude)&&F(s.geoPointValue.longitude)===F(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o,l){if("integerValue"in s&&"integerValue"in o)return F(s.integerValue)===F(o.integerValue);let p,g;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(p=F(s.doubleValue),g=F(o.doubleValue),p===g?le(p)===le(g):!!(l===void 0||l.Pe)&&isNaN(p)&&isNaN(g))})(n,t,e);case 9:return nn(n.arrayValue.values||[],t.arrayValue.values||[],((i,s)=>Ot(i,s,e)));case 10:case 11:return(function(s,o,l){const p=s.mapValue.fields||{},g=o.mapValue.fields||{};if(qn(p)!==qn(g))return!1;for(const y in p)if(p.hasOwnProperty(y)&&(g[y]===void 0||!Ot(p[y],g[y],l)))return!1;return!0})(n,t,e);default:return v(52216,{left:n})}}function Qt(n,t){return(n.values||[]).find((e=>Ot(e,t)))!==void 0}function fe(n,t){if(n===t)return 0;const e=wt(n),r=wt(t);if(e!==r)return O(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return O(n.booleanValue,t.booleanValue);case 2:return(function(s,o){const l=F(s.integerValue||s.doubleValue),p=F(o.integerValue||o.doubleValue);return l<p?-1:l>p?1:l===p?0:isNaN(l)?isNaN(p)?0:-1:1})(n,t);case 3:return Gn(n.timestampValue,t.timestampValue);case 4:return Gn(Kt(n),Kt(t));case 5:return He(n.stringValue,t.stringValue);case 6:return(function(s,o){const l=Wt(s),p=Wt(o);return l.compareTo(p)})(n.bytesValue,t.bytesValue);case 7:return(function(s,o){const l=s.split("/"),p=o.split("/");for(let g=0;g<l.length&&g<p.length;g++){const y=O(l[g],p[g]);if(y!==0)return y}return O(l.length,p.length)})(n.referenceValue,t.referenceValue);case 8:return(function(s,o){const l=O(F(s.latitude),F(o.latitude));return l!==0?l:O(F(s.longitude),F(o.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Hn(n.arrayValue,t.arrayValue);case 10:return(function(s,o){const l=s.fields||{},p=o.fields||{},g=l[he]?.arrayValue,y=p[he]?.arrayValue,I=O(g?.values?.length||0,y?.values?.length||0);return I!==0?I:Hn(g,y)})(n.mapValue,t.mapValue);case 11:return(function(s,o){if(s===ie&&o===ie)return 0;if(s===ie)return 1;if(o===ie)return-1;const l=s.fields||{},p=Object.keys(l),g=o.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let I=0;I<p.length&&I<y.length;++I){const w=He(p[I],y[I]);if(w!==0)return w;const S=fe(l[p[I]],g[y[I]]);if(S!==0)return S}return O(p.length,y.length)})(n.mapValue,t.mapValue);default:throw v(23264,{Ve:e})}}function Gn(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return O(n,t);const e=It(n),r=It(t),i=O(e.seconds,r.seconds);return i!==0?i:O(e.nanos,r.nanos)}function Hn(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=fe(e[i],r[i]);if(s!==void 0&&s!==0)return s}return O(e.length,r.length)}function de(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Rr(n){return!!n&&"arrayValue"in n}function Wn(n){return!!n&&"nullValue"in n}function Kn(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ue(n){return!!n&&"mapValue"in n}function Bt(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Yt(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Bt(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Bt(n.arrayValue.values[e]);return t}return{...n}}class pe{constructor(t,e){this.position=t,this.inclusive=e}}function Qn(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{}class G extends Pr{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new bo(t,e,r):e==="array-contains"?new So(t,r):e==="in"?new No(t,r):e==="not-in"?new Ro(t,r):e==="array-contains-any"?new Po(t,r):new G(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new vo(t,r):new Vo(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(fe(e,this.value)):e!==null&&wt(this.value)===wt(e)&&this.matchesComparison(fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return v(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class At extends Pr{constructor(t,e){super(),this.filters=t,this.op=e,this.Re=null}static create(t,e){return new At(t,e)}matches(t){return(function(r){return r.op==="and"})(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Re!==null||(this.Re=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Re}getFilters(){return Object.assign([],this.filters)}}function Dr(n,t){return n instanceof G?(function(r,i){return i instanceof G&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)})(n,t):n instanceof At?(function(r,i){return i instanceof At&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,l)=>s&&Dr(o,i.filters[l])),!0):!1})(n,t):void v(19439)}class bo extends G{constructor(t,e,r){super(t,e,r),this.key=D.fromName(r.referenceValue)}matches(t){const e=D.comparator(t.key,this.key);return this.matchesComparison(e)}}class vo extends G{constructor(t,e){super(t,"in",e),this.keys=Cr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Vo extends G{constructor(t,e){super(t,"not-in",e),this.keys=Cr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Cr(n,t){return(t.arrayValue?.values||[]).map((e=>D.fromName(e.referenceValue)))}class So extends G{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rr(e)&&Qt(e.arrayValue,this.value)}}class No extends G{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qt(this.value.arrayValue,e)}}class Ro extends G{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Qt(this.value.arrayValue,e)}}class Po extends G{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Qt(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e="asc"){this.field=t,this.dir=e}}function Do(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{static fromTimestamp(t){return new C(t)}static min(){return new C(new k(0,0))}static max(){return new C(new k(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,e){this.comparator=t,this.root=e||x.EMPTY}insert(t,e){return new ge(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,x.BLACK,null,null))}remove(t){return new ge(this.comparator,this.root.remove(t,this.comparator).copy(null,null,x.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new se(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new se(this.root,t,this.comparator,!1)}getReverseIterator(){return new se(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new se(this.root,t,this.comparator,!0)}}class se{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class x{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??x.RED,this.left=i??x.EMPTY,this.right=s??x.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new x(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return x.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return x.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v(43730,{key:this.key,value:this.value});if(this.right.isRed())throw v(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw v(27949);return t+(this.isRed()?0:1)}}x.EMPTY=null,x.RED=!0,x.BLACK=!1;x.EMPTY=new class{constructor(){this.size=0}get key(){throw v(57766)}get value(){throw v(16141)}get color(){throw v(16727)}get left(){throw v(29726)}get right(){throw v(36894)}copy(t,e,r,i,s){return this}insert(t,e,r){return new x(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.comparator=t,this.data=new ge(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Jn(this.data.getIterator())}getIteratorFrom(t){return new Jn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof Jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Jt(this.comparator);return e.data=t,e}}class Jn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Tt([])}unionWith(t){let e=new Jt(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Tt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return nn(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.value=t}static empty(){return new $({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ue(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Bt(e)}setAll(t){let e=ct.emptyPath(),r={},i=[];t.forEach(((o,l)=>{if(!e.isImmediateParentOf(l)){const p=this.getFieldsMap(e);this.applyChanges(p,r,i),r={},i=[],e=l.popLast()}o?r[l.lastSegment()]=Bt(o):i.push(l.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Ue(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Ue(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Yt(e,((i,s)=>t[i]=s));for(const i of r)delete t[i]}clone(){return new $(Bt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e,r,i,s,o,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new Z(t,0,C.min(),C.min(),C.min(),$.empty(),0)}static newFoundDocument(t,e,r,i){return new Z(t,1,e,C.min(),r,i,0)}static newNoDocument(t,e){return new Z(t,2,e,C.min(),C.min(),$.empty(),0)}static newUnknownDocument(t,e){return new Z(t,3,e,C.min(),C.min(),$.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Ae=null}}function Yn(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Co(n,t,e,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e=null,r=[],i=[],s=null,o="F",l=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=p,this.Ie=null,this.pe=null,this.ye=null,this.startAt,this.endAt}}function Or(n){return n.collectionGroup!==null}function Fr(n){const t=Et(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Jt(ct.comparator);return o.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(l=l.add(g.field))}))})),l})(t).forEach((s=>{e.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new me(s,r))})),e.has(ct.keyField().canonicalString())||t.Ie.push(new me(ct.keyField(),r))}return t.Ie}function Ke(n){const t=Et(n);return t.pe||(t.pe=kr(t,Fr(n))),t.pe}function kr(n,t){if(n.limitType==="F")return Yn(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new me(i.field,s)}));const e=n.endAt?new pe(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pe(n.startAt.position,n.startAt.inclusive):null;return Yn(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qe(n,t){const e=n.filters.concat([t]);return new bt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Oo(n,t){return(function(r,i){if(r.limit!==i.limit||r.orderBy.length!==i.orderBy.length)return!1;for(let s=0;s<r.orderBy.length;s++)if(!Do(r.orderBy[s],i.orderBy[s]))return!1;if(r.filters.length!==i.filters.length)return!1;for(let s=0;s<r.filters.length;s++)if(!Dr(r.filters[s],i.filters[s]))return!1;return r.collectionGroup===i.collectionGroup&&!!r.path.isEqual(i.path)&&!!Qn(r.startAt,i.startAt)&&Qn(r.endAt,i.endAt)})(Ke(n),Ke(t))&&n.limitType===t.limitType}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:le(t)?"-0":t}}function Te(n,t,e){return(function(i){return typeof i=="number"&&Number.isInteger(i)&&!le(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER})(t)?(function(i){return{integerValue:""+i}})(t):Mr(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this._=void 0}}class xr extends be{}class Lr extends be{constructor(t){super(),this.elements=t}}class Ur extends be{constructor(t){super(),this.elements=t}}class on extends be{constructor(t,e){super(),this.serializer=t,this.we=e}}class $r extends on{}class Br extends on{}class qr extends on{}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e){this.field=t,this.transform=e}}class L{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new L}static exists(t){return new L(void 0,t)}static updateTime(t){return new L(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class ve{}class jr extends ve{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class an extends ve{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Ve extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zr extends ve{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo={asc:"ASCENDING",desc:"DESCENDING"},ko={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mo={and:"AND",or:"OR"};class xo{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Je(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lo(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Uo(n,t){return Je(n,t.toTimestamp())}function qt(n){return B(!!n,49232),C.fromTimestamp((function(e){const r=It(e);return new k(r.seconds,r.nanos)})(n))}function un(n,t){return Ye(n,t).canonicalString()}function Ye(n,t){const e=(function(i){return new P(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function _e(n,t){return un(n.databaseId,t.path)}function Xe(n,t){const e=(function(i){const s=P.fromString(i);return B(Wr(s),10190,{key:s.toString()}),s})(t);if(e.get(1)!==n.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new D((function(i){return B(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)})(e))}function Xn(n,t,e){return{name:_e(n,t),fields:e.value.mapValue.fields}}function $o(n,t){return"found"in t?(function(r,i){B(!!i.found,43571),i.found.name,i.found.updateTime;const s=Xe(r,i.found.name),o=qt(i.found.updateTime),l=i.found.createTime?qt(i.found.createTime):C.min(),p=new $({mapValue:{fields:i.found.fields}});return Z.newFoundDocument(s,o,l,p)})(n,t):"missing"in t?(function(r,i){B(!!i.missing,3894),B(!!i.readTime,22933);const s=Xe(r,i.missing),o=qt(i.readTime);return Z.newNoDocument(s,o)})(n,t):v(7234,{result:t})}function Bo(n,t){let e;if(t instanceof jr)e={update:Xn(n,t.key,t.value)};else if(t instanceof Ve)e={delete:_e(n,t.key)};else if(t instanceof an)e={update:Xn(n,t.key,t.data),updateMask:Go(t.fieldMask)};else{if(!(t instanceof zr))return v(16599,{ge:t.type});e={verify:_e(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(s,o){const l=o.transform;if(l instanceof xr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Lr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof $r)return{fieldPath:o.field.canonicalString(),increment:l.we};if(l instanceof Br)return{fieldPath:o.field.canonicalString(),minimum:l.we};if(l instanceof qr)return{fieldPath:o.field.canonicalString(),maximum:l.we};throw v(20930,{transform:o.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Uo(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:v(27497)})(n,t.precondition)),e}function Gr(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=(function(g,y){return un(g.databaseId,y)})(n,i);const s=(function(g){if(g.length!==0)return Hr(At.create(g,"and"))})(t.filters);s&&(e.structuredQuery.where=s);const o=(function(g){if(g.length!==0)return g.map((y=>(function(w){return{field:at(w.field),direction:qo(w.dir)}})(y)))})(t.orderBy);o&&(e.structuredQuery.orderBy=o);const l=(function(g,y){return g.useProto3Json||vr(y)?y:{value:y}})(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(t.endAt)),{Fe:e,parent:i}}function qo(n){return Fo[n]}function jo(n){return ko[n]}function zo(n){return Mo[n]}function at(n){return{fieldPath:n.canonicalString()}}function Hr(n){return n instanceof G?(function(e){if(e.op==="=="){if(Kn(e.value))return{unaryFilter:{field:at(e.field),op:"IS_NAN"}};if(Wn(e.value))return{unaryFilter:{field:at(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Kn(e.value))return{unaryFilter:{field:at(e.field),op:"IS_NOT_NAN"}};if(Wn(e.value))return{unaryFilter:{field:at(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:at(e.field),op:jo(e.op),value:e.value}}})(n):n instanceof At?(function(e){const r=e.getFilters().map((i=>Hr(i)));return r.length===1?r[0]:{compositeFilter:{op:zo(e.op),filters:r}}})(n):v(54877,{filter:n})}function Go(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Wr(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Kr(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n){return new xo(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{}class Wo extends Ho{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ve=!1}be(){if(this.ve)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,e,r,i){return this.be(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.le(t,Ye(e,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(_.UNKNOWN,s.toString())}))}de(t,e,r,i,s){return this.be(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.de(t,Ye(e,r),i,o,l,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new E(_.UNKNOWN,o.toString())}))}terminate(){this.ve=!0,this.connection.terminate()}}async function Lt(n,t){const e=Et(n),r={writes:t.map((i=>Bo(e.serializer,i)))};await e.le("Commit",e.serializer.databaseId,P.emptyPath(),r)}async function Qr(n,t){const e=Et(n),r={documents:t.map((l=>_e(e.serializer,l)))},i=await e.de("BatchGetDocuments",e.serializer.databaseId,P.emptyPath(),r,t.length),s=new Map;i.forEach((l=>{const p=$o(e.serializer,l);s.set(p.key.toString(),p)}));const o=[];return t.forEach((l=>{const p=s.get(l.toString());B(!!p,55234,{key:l}),o.push(p)})),o}async function Ko(n,t){const e=Et(n),{Fe:r,parent:i}=Gr(e.serializer,Ke(t));return(await e.de("RunQuery",e.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((s=>!!s.document)).map((s=>(function(l,p,g){const y=Xe(l,p.name),I=qt(p.updateTime),w=p.createTime?qt(p.createTime):C.min(),S=new $({mapValue:{fields:p.fields}}),T=Z.newFoundDocument(y,I,w,S);return g?T.setHasCommittedMutations():T})(e.serializer,s.document,void 0)))}async function Qo(n,t,e){const r=Et(n),{request:i,De:s,parent:o}=(function(y,I,w,S){const{Fe:T,parent:N}=Gr(y,I),b={},J=[];let Rt=0;return w.forEach((H=>{const nt="aggregate_"+Rt++;b[nt]=H.alias,H.aggregateType==="count"?J.push({alias:nt,count:{}}):H.aggregateType==="avg"?J.push({alias:nt,avg:{field:at(H.fieldPath)}}):H.aggregateType==="sum"&&J.push({alias:nt,sum:{field:at(H.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:J,structuredQuery:T.structuredQuery},parent:T.parent},De:b,parent:N}})(r.serializer,(function(y){const I=Et(y);return I.ye||(I.ye=kr(I,y.explicitOrderBy)),I.ye})(t),e);r.connection.ae||delete i.parent;const l=(await r.de("RunAggregationQuery",r.serializer.databaseId,o,i,1)).filter((g=>!!g.result));B(l.length===1,64727);const p=l[0].result?.aggregateFields;return Object.keys(p).reduce(((g,y)=>(g[s[y]]=p[y],g)),{})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="ComponentProvider",jt=new Map;function ot(n){if(n._terminated)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.");if(!jt.has(n)){yt(Jr,"Initializing Datastore");const t=(function(s){return new Eo(s)})((function(s,o,l,p,g){return new ao(s,o,l,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,br(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator,p,g._customHeaders,g.grpcFlowControlWindow)})(n._databaseId,n.app.options.appId||"",n._persistenceKey,n.app.options.apiKey,n._freezeSettings())),e=cn(n._databaseId),r=(function(s,o,l,p){return new Wo(s,o,l,p)})(n._authCredentials,n._appCheckCredentials,t,e);jt.set(n,r)}return jt.get(n)}const Jo=1048576,Yr="firestore.googleapis.com",Zn=!0;class tr{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yr,this.ssl=Zn}else this.host=t.host,this.ssl=t.ssl??Zn;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Jo)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if((function(r,i,s,o){if(i===!0&&o===!0)throw new E(_.INVALID_ARGUMENT,`${r} and ${s} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=br(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new E(_.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&(function(r,i){if(r===i)return!0;if(!r||!i)return!1;const s=Object.keys(r),o=Object.keys(i);if(s.length!==o.length)return!1;for(const l of s)if(r[l]!==i[l])return!1;return!0})(this._customHeaders,t._customHeaders)}}class tt{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tr(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new eo;switch(r.type){case"firstParty":return new so(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=jt.get(e);r&&(yt(Jr,"Removing Datastore"),jt.delete(e),r.terminate())})(this),Promise.resolve()}}function Yo(n,t,e){e||(e=ce);const r=tn(n,"firestore/lite");if(r.isInitialized(e))throw new E(_.FAILED_PRECONDITION,"Firestore can only be initialized once per app.");return r.initialize({options:t,instanceIdentifier:e})}function Xo(n,t){const e=typeof n=="object"?n:Us(),r=typeof n=="string"?n:t||"(default)",i=tn(e,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Ni("firestore");s&&Xr(i,...s)}return i}function Xr(n,t,e,r={}){n=Q(n,tt);const i=fr(t),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&xi(`https://${l}`),s.host!==Yr&&s.host!==l&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...s,host:l,ssl:i,emulatorOptions:r};if(!mt(p,o)&&(n._setSettings(p),r.mockUserToken)){let g,y;if(typeof r.mockUserToken=="string")g=r.mockUserToken,y=U.MOCK_USER;else{g=Pi(r.mockUserToken,n._app?.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new U(I)}n._authCredentials=new no(new wr(g,y))}}function Zo(n){return n=Q(n,tt),Os(n.app,"firestore/lite"),n._delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new q(this.firestore,t,this._query)}}class R{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new K(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new R(this.firestore,t,this._key)}toJSON(){return{type:R._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Xt(e,R._jsonSchema))return new R(t,r||null,new D(P.fromString(e.referencePath)))}}R._jsonSchemaVersion="firestore/documentReference/1.0",R._jsonSchema={type:W("string",R._jsonSchemaVersion),referencePath:W("string")};class K extends q{constructor(t,e,r){super(t,e,(function(s){return new bt(s)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new R(this.firestore,null,new D(t))}withConverter(t){return new K(this.firestore,t,this._path)}}function ta(n,t,...e){if(n=M(n),rn("collection","path",t),n instanceof tt){const r=P.fromString(t,...e);return Un(r),new K(n,null,r)}{if(!(n instanceof R||n instanceof K))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(P.fromString(t,...e));return Un(r),new K(n.firestore,null,r)}}function ea(n,t){if(n=Q(n,tt),rn("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new q(n,null,(function(r){return new bt(P.emptyPath(),r)})(t))}function Zr(n,t,...e){if(n=M(n),arguments.length===1&&(t=lo.newId()),rn("doc","path",t),n instanceof tt){const r=P.fromString(t,...e);return Ln(r),new R(n,null,new D(r))}{if(!(n instanceof R||n instanceof K))throw new E(_.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(P.fromString(t,...e));return Ln(r),new R(n.firestore,n instanceof K?n.converter:null,new D(r))}}function na(n,t){return n=M(n),t=M(t),(n instanceof R||n instanceof K)&&(t instanceof R||t instanceof K)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function ln(n,t){return n=M(n),t=M(t),n instanceof q&&t instanceof q&&n.firestore===t.firestore&&Oo(n._query,t._query)&&n.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this._byteString=t}static fromBase64String(t){try{return new j(st.fromBase64String(t))}catch(e){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new j(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:j._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Xt(t,j._jsonSchema))return j.fromBase64String(t.bytes)}}j._jsonSchemaVersion="firestore/bytes/1.0",j._jsonSchema={type:W("string",j._jsonSchemaVersion),bytes:W("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function ra(){return new vt(We)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Y._jsonSchemaVersion}}static fromJSON(t){if(Xt(t,Y._jsonSchema))return new Y(t.latitude,t.longitude)}}Y._jsonSchemaVersion="firestore/geoPoint/1.0",Y._jsonSchema={type:W("string",Y._jsonSchemaVersion),latitude:W("number"),longitude:W("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,t._values)}toJSON(){return{type:z._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Xt(t,z._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new z(t.vectorValues);throw new E(_.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}z._jsonSchemaVersion="firestore/vectorValue/1.0",z._jsonSchema={type:W("string",z._jsonSchemaVersion),vectorValues:W("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=/^__.*__$/;class sa{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new an(t,this.data,this.fieldMask,e,this.fieldTransforms):new jr(t,this.data,e,this.fieldTransforms)}}class ti{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new an(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ei(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v(40011,{dataSource:n})}}class Se{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Se({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const e=this.path?.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){const e=this.path?.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return ye(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(ei(this.dataSource)&&ia.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class oa{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||cn(t)}createContext(t,e,r,i=!1){return new Se({dataSource:t,methodName:e,targetDoc:r,path:ct.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vt(n){const t=n._freezeSettings(),e=cn(n._databaseId);return new oa(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ne(n,t,e,r,i,s={}){const o=n.createContext(s.merge||s.mergeFields?2:0,t,e,i);En("Data must be an object, but it was:",o,r);const l=ii(r,o);let p,g;if(s.merge)p=new Tt(o.fieldMask),g=o.fieldTransforms;else if(s.mergeFields){const y=[];for(const I of s.mergeFields){const w=lt(t,I,e);if(!o.contains(w))throw new E(_.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);ai(y,w)||y.push(w)}p=new Tt(y),g=o.fieldTransforms.filter((I=>p.covers(I.field)))}else p=null,g=o.fieldTransforms;return new sa(new $(l),p,g)}class Zt extends et{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Zt}}function ni(n,t,e){return new Se({dataSource:3,targetDoc:t.settings.targetDoc,methodName:n._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class hn extends et{_toFieldTransform(t){return new xt(t.path,new xr)}isEqual(t){return t instanceof hn}}class fn extends et{constructor(t,e){super(t),this.Ne=e}_toFieldTransform(t){const e=ni(this,t,!0),r=this.Ne.map((s=>St(s,e))),i=new Lr(r);return new xt(t.path,i)}isEqual(t){return t instanceof fn&&mt(this.Ne,t.Ne)}}class dn extends et{constructor(t,e){super(t),this.Ne=e}_toFieldTransform(t){const e=ni(this,t,!0),r=this.Ne.map((s=>St(s,e))),i=new Ur(r);return new xt(t.path,i)}isEqual(t){return t instanceof dn&&mt(this.Ne,t.Ne)}}class pn extends et{constructor(t,e){super(t),this.Se=e}_toFieldTransform(t){const e=new $r(t.serializer,Te(t.serializer,this.Se));return new xt(t.path,e)}isEqual(t){return t instanceof pn&&(this.Se===t.Se||Number.isNaN(this.Se)&&Number.isNaN(t.Se))}}class mn extends et{constructor(t,e){super(t),this.Se=e}_toFieldTransform(t){const e=new Br(t.serializer,Te(t.serializer,this.Se));return new xt(t.path,e)}isEqual(t){return t instanceof mn&&(this.Se===t.Se||Number.isNaN(this.Se)&&Number.isNaN(t.Se))}}class gn extends et{constructor(t,e){super(t),this.Se=e}_toFieldTransform(t){const e=new qr(t.serializer,Te(t.serializer,this.Se));return new xt(t.path,e)}isEqual(t){return t instanceof gn&&(this.Se===t.Se||Number.isNaN(this.Se)&&Number.isNaN(t.Se))}}function _n(n,t,e,r){const i=n.createContext(1,t,e);En("Data must be an object, but it was:",i,r);const s=[],o=$.empty();Yt(r,((p,g)=>{const y=oi(t,p,e);g=M(g);const I=i.childContextForFieldPath(y);if(g instanceof Zt)s.push(y);else{const w=St(g,I);w!=null&&(s.push(y),o.set(y,w))}}));const l=new Tt(s);return new ti(o,l,i.fieldTransforms)}function yn(n,t,e,r,i,s){const o=n.createContext(1,t,e),l=[lt(t,r,e)],p=[i];if(s.length%2!=0)throw new E(_.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<s.length;w+=2)l.push(lt(t,s[w])),p.push(s[w+1]);const g=[],y=$.empty();for(let w=l.length-1;w>=0;--w)if(!ai(g,l[w])){const S=l[w];let T=p[w];T=M(T);const N=o.childContextForFieldPath(S);if(T instanceof Zt)g.push(S);else{const b=St(T,N);b!=null&&(g.push(S),y.set(S,b))}}const I=new Tt(g);return new ti(y,I,o.fieldTransforms)}function ri(n,t,e,r=!1){return St(e,n.createContext(r?4:3,t))}function St(n,t,e){if(si(n=M(n)))return En("Unsupported field value:",t,n),ii(n,t);if(n instanceof et)return(function(i,s){if(!ei(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(i,s){const o=[];let l=0;for(const p of i){let g=St(p,s.childContextForArray(l));g==null&&(g={nullValue:"NULL_VALUE"}),o.push(g),l++}return{arrayValue:{values:o}}})(n,t)}return(function(i,s,o){if((i=M(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Te(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=k.fromDate(i);return{timestampValue:Je(s.serializer,l)}}if(i instanceof k){const l=new k(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Je(s.serializer,l)}}if(i instanceof Y)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof j)return{bytesValue:Lo(s.serializer,i._byteString)};if(i instanceof R){const l=s.databaseId,p=i.firestore._databaseId;if(!p.isEqual(l))throw s.createError(`Document reference is for database ${p.projectId}/${p.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:un(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof z)return(function(p,g){const y=p instanceof z?p.toArray():p;return{mapValue:{fields:{[Sr]:{stringValue:Nr},[he]:{arrayValue:{values:y.map((w=>{if(typeof w!="number")throw g.createError("VectorValues must only contain numeric values.");return Mr(g.serializer,w)}))}}}}}})(i,s);if(Kr(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ae(i)}`)})(n,t)}function ii(n,t){const e={};return(function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0})(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yt(n,((r,i)=>{const s=St(i,t.childContextForField(r));s!=null&&(e[r]=s)})),{mapValue:{fields:e}}}function si(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof k||n instanceof Y||n instanceof j||n instanceof R||n instanceof et||n instanceof z||Kr(n))}function En(n,t,e){if(!si(e)||!Ar(e)){const r=Ae(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function lt(n,t,e){if((t=M(t))instanceof vt)return t._internalPath;if(typeof t=="string")return oi(n,t);throw ye("Field path arguments must be of type string or ",n,!1,void 0,e)}const aa=new RegExp("[~\\*/\\[\\]]");function oi(n,t,e){if(t.search(aa)>=0)throw ye(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new vt(...t.split("."))._internalPath}catch{throw ye(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ye(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let p="";return(s||o)&&(p+=" (found",s&&(p+=` in field ${r}`),o&&(p+=` in document ${i}`),p+=")"),new E(_.INVALID_ARGUMENT,l+n+p)}function ai(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new R(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new In(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(lt("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class In extends ht{data(){return super.data()}}class Ee{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}function ui(n,t){return n=M(n),t=M(t),n instanceof ht&&t instanceof ht?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof Ee&&t instanceof Ee&&ln(n.query,t.query)&&nn(n.docs,t.docs,ui)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{}class Ut extends wn{}function ua(n,t,...e){let r=[];t instanceof wn&&r.push(t),r=r.concat(e),(function(s){const o=s.filter((p=>p instanceof Nt)).length,l=s.filter((p=>p instanceof $t)).length;if(o>1||o>0&&l>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class $t extends Ut{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new $t(t,e,r)}_apply(t){const e=this._parse(t);return li(t._query,e),new q(t.firestore,t.converter,Qe(t._query,e))}_parse(t){const e=Vt(t.firestore);return(function(s,o,l,p,g,y,I){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){nr(I,y);const T=[];for(const N of I)T.push(er(p,s,N));w={arrayValue:{values:T}}}else w=er(p,s,I)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||nr(I,y),w=ri(l,o,I,y==="in"||y==="not-in");return G.create(g,y,w)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function ca(n,t,e){const r=t,i=lt("where",n);return $t._create(i,r,e)}class Nt extends wn{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Nt(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:At.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,s){let o=i;const l=s.getFlattenedFilters();for(const p of l)li(o,p),o=Qe(o,p)})(t._query,e),new q(t.firestore,t.converter,Qe(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function la(...n){return n.forEach((t=>hi("or",t))),Nt._create("or",n)}function ha(...n){return n.forEach((t=>hi("and",t))),Nt._create("and",n)}class Re extends Ut{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Re(t,e)}_apply(t){const e=(function(i,s,o){if(i.startAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new me(s,o)})(t._query,this._field,this._direction);return new q(t.firestore,t.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new bt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(t._query,e))}}function fa(n,t="asc"){const e=t,r=lt("orderBy",n);return Re._create(r,e)}class te extends Ut{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new te(t,e,r)}_apply(t){return new q(t.firestore,t.converter,(function(r,i,s){return new bt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)})(t._query,this._limit,this._limitType))}}function da(n){return Tr("limit",n),te._create("limit",n,"F")}function pa(n){return Tr("limitToLast",n),te._create("limitToLast",n,"L")}class ee extends Ut{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ee(t,e,r)}_apply(t){const e=ci(t,this.type,this._docOrFields,this._inclusive);return new q(t.firestore,t.converter,(function(i,s){return new bt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(t._query,e))}}function ma(...n){return ee._create("startAt",n,!0)}function ga(...n){return ee._create("startAfter",n,!1)}class ne extends Ut{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ne(t,e,r)}_apply(t){const e=ci(t,this.type,this._docOrFields,this._inclusive);return new q(t.firestore,t.converter,(function(i,s){return new bt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)})(t._query,e))}}function _a(...n){return ne._create("endBefore",n,!1)}function ya(...n){return ne._create("endAt",n,!0)}function ci(n,t,e,r){if(e[0]=M(e[0]),e[0]instanceof ht)return(function(s,o,l,p,g){if(!p)throw new E(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const y=[];for(const I of Fr(s))if(I.field.isKeyField())y.push(de(o,p.key));else{const w=p.data.field(I.field);if(sn(w))throw new E(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+I.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=I.field.canonicalString();throw new E(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new pe(y,g)})(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=Vt(n.firestore);return(function(o,l,p,g,y,I){const w=o.explicitOrderBy;if(y.length>w.length)throw new E(_.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let T=0;T<y.length;T++){const N=y[T];if(w[T].field.isKeyField()){if(typeof N!="string")throw new E(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof N}`);if(!Or(o)&&N.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${N}' contains a slash.`);const b=o.path.child(P.fromString(N));if(!D.isDocumentKey(b))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const J=new D(b);S.push(de(l,J))}else{const b=ri(p,g,N);S.push(b)}}return new pe(S,I)})(n._query,n.firestore._databaseId,i,t,e,r)}}function er(n,t,e){if(typeof(e=M(e))=="string"){if(e==="")throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Or(t)&&e.indexOf("/")!==-1)throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(P.fromString(e));if(!D.isDocumentKey(r))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return de(n,new D(r))}if(e instanceof R)return de(n,e._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ae(e)}.`)}function nr(n,t){if(!Array.isArray(n)||n.length===0)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function li(n,t){const e=(function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function hi(n,t){if(!(t instanceof $t||t instanceof Nt))throw new E(_.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Ea{convertValue(t,e="none"){switch(wt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return F(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw v(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Yt(t,((i,s)=>{r[i]=this.convertValue(s,e)})),r}convertVectorValue(t){const e=t.fields?.[he].arrayValue?.values?.map((r=>F(r.doubleValue)));return new z(e)}convertGeoPoint(t){return new Y(F(t.latitude),F(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Kt(t));default:return null}}convertTimestamp(t){const e=It(t);return new k(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=P.fromString(t);B(Wr(r),9688,{name:t});const i=new Ht(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(e)||we(`A document reference to ${s} refers to a different database (${i.projectId}/${i.database}), which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class De extends Ea{constructor(t){super(),this.firestore=t}convertBytes(t){return new j(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new R(this.firestore,null,e)}}function Ia(n){const t=ot((n=Q(n,R)).firestore),e=new De(n.firestore);return Qr(t,[n._key]).then((r=>{B(r.length===1,15618);const i=r[0];return new ht(n.firestore,e,n._key,i.isFoundDocument()?i:null,n.converter)}))}function wa(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((n=Q(n,q))._query);const t=ot(n.firestore),e=new De(n.firestore);return Ko(t,n._query).then((r=>{const i=r.map((s=>new In(n.firestore,e,s.key,s,n.converter)));return n._query.limitType==="L"&&i.reverse(),new Ee(n,i)}))}function Aa(n,t,e){const r=Pe((n=Q(n,R)).converter,t,e),i=Ne(Vt(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return Lt(ot(n.firestore),[i.toMutation(n._key,L.none())])}function Ta(n,t,e,...r){const i=Vt((n=Q(n,R)).firestore);let s;return s=typeof(t=M(t))=="string"||t instanceof vt?yn(i,"updateDoc",n._key,t,e,r):_n(i,"updateDoc",n._key,t),Lt(ot(n.firestore),[s.toMutation(n._key,L.exists(!0))])}function ba(n){return Lt(ot((n=Q(n,R)).firestore),[new Ve(n._key,L.none())])}function va(n,t){const e=Zr(n=Q(n,K)),r=Pe(n.converter,t),i=Ne(Vt(n.firestore),"addDoc",e._key,r,e.converter!==null,{});return Lt(ot(n.firestore),[i.toMutation(e._key,L.exists(!1))]).then((()=>e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){return new Zt("deleteField")}function Sa(){return new hn("serverTimestamp")}function Na(...n){return new fn("arrayUnion",n)}function Ra(...n){return new dn("arrayRemove",n)}function Pa(n){return new pn("increment",n)}function Da(n){return new mn("minimum",n)}function Ca(n){return new gn("maximum",n)}function Oa(n){return new z(n)}const rr="4.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e,r){this.alias=t,this.aggregateType=e,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r=1e3,i=1.5,s=6e4){this.t=t,this.timerId=e,this.i=r,this.o=i,this.h=s,this.u=0,this.l=null,this._=Date.now(),this.reset()}reset(){this.u=0}m(){this.u=this.h}A(t){this.cancel();const e=Math.floor(this.u+this.p()),r=Math.max(0,Date.now()-this._),i=Math.max(0,e-r);i>0&&yt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.u} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.l=this.t.enqueueAfterDelay(this.timerId,i,(()=>(this._=Date.now(),t()))),this.u*=this.o,this.u<this.i&&(this.u=this.i),this.u>this.h&&(this.u=this.h)}T(){this.l!==null&&(this.l.skipDelay(),this.l=null)}cancel(){this.l!==null&&(this.l.cancel(),this.l=null)}p(){return(Math.random()-.5)*this.u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class di{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new $({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(n){return pi(n,{count:mi()})}function pi(n,t){const e=Q(n.firestore,tt),r=ot(e),i=Io(t,((s,o)=>new Fa(o,s.aggregateType,s._internalFieldPath)));return Qo(r,n._query,i).then((s=>(function(l,p,g){const y=new De(l);return new di(p,y,g)})(e,n,s)))}function Ma(n){return new Ft("sum",lt("sum",n))}function xa(n){return new Ft("avg",lt("average",n))}function mi(){return new Ft("count")}function La(n,t){return n instanceof Ft&&t instanceof Ft&&n.aggregateType===t.aggregateType&&n._internalFieldPath?.canonicalString()===t._internalFieldPath?.canonicalString()}function Ua(n,t){return ln(n.query,t.query)&&mt(n.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Vt(t)}set(t,e,r){this._verifyNotCommitted();const i=pt(t,this._firestore),s=Pe(i.converter,e,r),o=Ne(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,L.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=pt(t,this._firestore);let o;return o=typeof(e=M(e))=="string"||e instanceof vt?yn(this._dataReader,"WriteBatch.update",s._key,e,r,i):_n(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(o.toMutation(s._key,L.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=pt(t,this._firestore);return this._mutations=this._mutations.concat(new Ve(e._key,L.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function pt(n,t){if((n=M(n)).firestore!==t)throw new E(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function $a(n){n=Q(n,tt);const t=ot(n);return new gi(n,(e=>Lt(t,e)))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=class{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new E(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await Qr(this.datastore,t);return e.forEach((r=>this.recordVersion(r))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ve(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,r)=>{const i=D.fromPath(r);this.mutations.push(new zr(i,this.precondition(i)))})),await Lt(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v(50498,{R:t.constructor.name});e=C.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new E(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(C.min())?L.exists(!1):L.updateTime(e):L.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(C.min()))throw new E(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return L.updateTime(e)}return L.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.I=r.maxAttempts,this.P=new fi(this.asyncQueue,"transaction_retry")}V(){this.I-=1,this.D()}D(){this.P.A((async()=>{const t=new Ba(this.datastore),e=this.v(t);e&&e.then((r=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.F(i)}))))})).catch((r=>{this.F(r)}))}))}v(t){try{const e=this.updateFunction(t);return!vr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}F(t){this.I>0&&this.B(t)?(this.I-=1,this.asyncQueue.enqueueAndForget((()=>(this.D(),Promise.resolve())))):this.deferred.reject(t)}B(t){if(t?.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!yo(e)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,l=new Tn(t,e,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="AsyncQueue";class za{constructor(t=Promise.resolve()){this.k=[],this.O=!1,this.S=[],this.q=null,this.C=!1,this.M=!1,this.N=[],this.P=new fi(this,"async_queue_retry"),this.L=()=>{const r=$e();r&&yt(ir,"Visibility state changed to "+r.visibilityState),this.P.T()},this.W=t;const e=$e();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.L)}get isShuttingDown(){return this.O}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.U(),this.j(t)}enterRestrictedMode(t){if(!this.O){this.O=!0,this.M=t||!1;const e=$e();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.L)}}enqueue(t){if(this.U(),this.O)return new Promise((()=>{}));const e=new An;return this.j((()=>this.O&&this.M?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.k.push(t),this.$())))}async $(){if(this.k.length!==0){try{await this.k[0](),this.k.shift(),this.P.reset()}catch(t){if(!(function(r){return r.name==="IndexedDbTransactionError"})(t))throw t;yt(ir,"Operation failed with retryable error: "+t)}this.k.length>0&&this.P.A((()=>this.$()))}}j(t){const e=this.W.then((()=>(this.C=!0,t().catch((r=>{this.q=r,this.C=!1;const i=sr(r);throw we("INTERNAL UNHANDLED ERROR: ",i),r})).then((r=>(this.C=!1,r))))));return this.W=e,e}enqueueAfterDelay(t,e,r){this.U(),this.N.indexOf(t)>-1&&(e=0);const i=Tn.createAndSchedule(this,t,e,r,(s=>this.G(s)));return this.S.push(i),i}U(){this.q&&v(47125,{H:sr(this.q)})}verifyOperationInProgress(){}async J(){let t;do t=this.W,await t;while(t!==this.W)}K(t){for(const e of this.S)if(e.timerId===t)return!0;return!1}X(t){return this.J().then((()=>{this.S.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.S)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.J()}))}Y(t){this.N.push(t)}G(t){const e=this.S.indexOf(t);this.S.splice(e,1)}}function sr(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Vt(t)}get(t){const e=pt(t,this._firestore),r=new De(this._firestore);return this._transaction.lookup([e._key]).then((i=>{if(!i||i.length!==1)return v(24041);const s=i[0];if(s.isFoundDocument())return new ht(this._firestore,r,s.key,s,e.converter);if(s.isNoDocument())return new ht(this._firestore,r,e._key,null,e.converter);throw v(18433,{doc:s})}))}set(t,e,r){const i=pt(t,this._firestore),s=Pe(i.converter,e,r),o=Ne(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(t,e,r,...i){const s=pt(t,this._firestore);let o;return o=typeof(e=M(e))=="string"||e instanceof vt?yn(this._dataReader,"Transaction.update",s._key,e,r,i):_n(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,o),this}delete(t){const e=pt(t,this._firestore);return this._transaction.delete(e._key),this}}function Ga(n,t,e){n=Q(n,tt);const r=ot(n),i={...qa,...e};(function(l){if(l.maxAttempts<1)throw new E(_.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i);const s=new An;return new ja((function(){return new za})(),r,i,(o=>t(new _i(n,o))),s).V(),s.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){Zs(`${xs}_lite`),ue(new zt("firestore/lite",((t,{instanceIdentifier:e,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new tt(new ro(t.getProvider("auth-internal")),new oo(i,t.getProvider("app-check-internal")),uo(i,e),i);return r&&s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Ct("firestore-lite",rr,""),Ct("firestore-lite",rr,"esm2020")})();const cu=Object.freeze(Object.defineProperty({__proto__:null,AggregateField:Ft,AggregateQuerySnapshot:di,Bytes:j,CollectionReference:K,DocumentReference:R,DocumentSnapshot:ht,FieldPath:vt,FieldValue:et,Firestore:tt,FirestoreError:E,GeoPoint:Y,Query:q,QueryCompositeFilterConstraint:Nt,QueryConstraint:Ut,QueryDocumentSnapshot:In,QueryEndAtConstraint:ne,QueryFieldFilterConstraint:$t,QueryLimitConstraint:te,QueryOrderByConstraint:Re,QuerySnapshot:Ee,QueryStartAtConstraint:ee,Timestamp:k,Transaction:_i,VectorValue:z,WriteBatch:gi,addDoc:va,aggregateFieldEqual:La,aggregateQuerySnapshotEqual:Ua,and:ha,arrayRemove:Ra,arrayUnion:Na,average:xa,collection:ta,collectionGroup:ea,connectFirestoreEmulator:Xr,count:mi,deleteDoc:ba,deleteField:Va,doc:Zr,documentId:ra,endAt:ya,endBefore:_a,getAggregate:pi,getCount:ka,getDoc:Ia,getDocs:wa,getFirestore:Xo,increment:Pa,initializeFirestore:Yo,limit:da,limitToLast:pa,maximum:Ca,minimum:Da,or:la,orderBy:fa,query:ua,queryEqual:ln,refEqual:na,runTransaction:Ga,serverTimestamp:Sa,setDoc:Aa,setLogLevel:to,snapshotEqual:ui,startAfter:ga,startAt:ma,sum:Ma,terminate:Zo,updateDoc:Ta,vector:Oa,where:ca,writeBatch:$a},Symbol.toStringTag,{value:"Module"}));export{Ja as A,Qa as B,zt as C,Ri as D,hr as E,kt as F,Ka as G,iu as H,yr as I,Ls as J,ou as K,dr as L,Xs as M,ua as N,ta as O,da as P,wa as Q,ca as R,xs as S,Ia as T,Zr as U,su as V,Xo as W,cu as X,tn as _,V as a,Us as b,Pi as c,mt as d,Ni as e,Os as f,M as g,Ti as h,fr as i,Di as j,cr as k,Xa as l,Za as m,Fs as n,ue as o,xi as p,Ha as q,Ct as r,Si as s,nu as t,ru as u,Ai as v,Ya as w,tu as x,eu as y,Wa as z};
