(self.webpackChunkps_angular_training=self.webpackChunkps_angular_training||[]).push([[920],{8920:(t,e,i)=>{"use strict";i.r(e),i.d(e,{DynamicBoxModule:()=>Et});var n=i(8583),r=i(639);function s(t,e=0){return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}var o=i(9765),c=i(5917),h=i(7574),l=i(9796),a=i(9105),d=i(8002);function u(t,e,i,n){return(0,a.m)(i)&&(n=i,i=void 0),n?u(t,e,i).pipe((0,d.U)(t=>(0,l.k)(t)?n(...t):n(t))):new h.y(n=>{f(t,e,function(t){n.next(arguments.length>1?Array.prototype.slice.call(arguments):t)},n,i)})}function f(t,e,i,n,r){let s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){const n=t;t.addEventListener(e,i,r),s=()=>n.removeEventListener(e,i,r)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){const n=t;t.on(e,i),s=()=>n.off(e,i)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t)){const n=t;t.addListener(e,i),s=()=>n.removeListener(e,i)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let s=0,o=t.length;s<o;s++)f(t[s],e,i,n,r)}n.add(s)}var p=i(5319);class _ extends p.w{constructor(t,e){super()}schedule(t,e=0){return this}}class g extends _{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const i=this.id,n=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(n,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this}requestAsyncId(t,e,i=0){return setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,e,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let i,n=!1;try{this.work(t)}catch(r){n=!0,i=!!r&&r||new Error(r)}if(n)return this.unsubscribe(),i}_unsubscribe(){const t=this.id,e=this.scheduler,i=e.actions,n=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&i.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let m=(()=>{class t{constructor(e,i=t.now){this.SchedulerAction=e,this.now=i}schedule(t,e=0,i){return new this.SchedulerAction(this,t).schedule(i,e)}}return t.now=()=>Date.now(),t})();class w extends m{constructor(t,e=m.now){super(t,()=>w.delegate&&w.delegate!==this?w.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,i){return w.delegate&&w.delegate!==this?w.delegate.schedule(t,e,i):super.schedule(t,e,i)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let i;this.active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}}const v=new class extends w{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let i,n=-1,r=e.length;t=t||e.shift();do{if(i=t.execute(t.state,t.delay))break}while(++n<r&&(t=e.shift()));if(this.active=!1,i){for(;++n<r&&(t=e.shift());)t.unsubscribe();throw i}}}(class extends g{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t.scheduled||(t.scheduled=requestAnimationFrame(()=>t.flush(null))))}recycleAsyncId(t,e,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(t,e,i);0===t.actions.length&&(cancelAnimationFrame(e),t.scheduled=void 0)}});let x=1;const b=Promise.resolve(),C={};function S(t){return t in C&&(delete C[t],!0)}const y={setImmediate(t){const e=x++;return C[e]=!0,b.then(()=>S(e)&&t()),e},clearImmediate(t){S(t)}},k=new class extends w{flush(t){this.active=!0,this.scheduled=void 0;const{actions:e}=this;let i,n=-1,r=e.length;t=t||e.shift();do{if(i=t.execute(t.state,t.delay))break}while(++n<r&&(t=e.shift()));if(this.active=!1,i){for(;++n<r&&(t=e.shift());)t.unsubscribe();throw i}}}(class extends g{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t.scheduled||(t.scheduled=y.setImmediate(t.flush.bind(t,null))))}recycleAsyncId(t,e,i=0){if(null!==i&&i>0||null===i&&this.delay>0)return super.recycleAsyncId(t,e,i);0===t.actions.length&&(y.clearImmediate(e),t.scheduled=void 0)}});function R(t){return!!t&&(t instanceof h.y||"function"==typeof t.lift&&"function"==typeof t.subscribe)}var z=i(7393);class I{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new T(t,this.compare,this.keySelector))}}class T extends z.L{constructor(t,e,i){super(t),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:i}=this;e=i?i(t):t}catch(n){return this.destination.error(n)}let i=!1;if(this.hasKey)try{const{compare:t}=this;i=t(this.key,e)}catch(n){return this.destination.error(n)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))}}const O=new w(g);var B=i(5345);class V{constructor(t){this.durationSelector=t}call(t,e){return e.subscribe(new E(t,this.durationSelector))}}class E extends B.Ds{constructor(t,e){super(t),this.durationSelector=e,this.hasValue=!1}_next(t){if(this.value=t,this.hasValue=!0,!this.throttled){let i;try{const{durationSelector:e}=this;i=e(t)}catch(e){return this.destination.error(e)}const n=(0,B.ft)(i,new B.IY(this));!n||n.closed?this.clearThrottle():this.add(this.throttled=n)}}clearThrottle(){const{value:t,hasValue:e,throttled:i}=this;i&&(this.remove(i),this.throttled=void 0,i.unsubscribe()),e&&(this.value=void 0,this.hasValue=!1,this.destination.next(t))}notifyNext(){this.clearThrottle()}notifyComplete(){this.clearThrottle()}}function F(t){return!(0,l.k)(t)&&t-parseFloat(t)+1>=0}var L=i(4869);function N(t){const{index:e,period:i,subscriber:n}=t;if(n.next(e),!n.closed){if(-1===i)return n.complete();t.index=e+1,this.schedule(t,i)}}function A(t,e=O){return i=()=>function(t=0,e,i){let n=-1;return F(e)?n=Number(e)<1?1:Number(e):(0,L.K)(e)&&(i=e),(0,L.K)(i)||(i=O),new h.y(e=>{const r=F(t)?t:+t-i.now();return i.schedule(N,r,{index:0,period:n,subscriber:e})})}(t,e),function(t){return t.lift(new V(i))};var i}var P=i(5435);function D(t){return e=>e.lift(new W(t))}class W{constructor(t){this.notifier=t}call(t,e){const i=new Y(t),n=(0,B.ft)(this.notifier,new B.IY(i));return n&&!i.seenValue?(i.add(n),e.subscribe(i)):i}}class Y extends B.Ds{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var G=i(9761);class M{call(t,e){return e.subscribe(new j(t))}}class j extends z.L{constructor(t){super(t),this.hasPrev=!1}_next(t){let e;this.hasPrev?e=[this.prev,t]:this.hasPrev=!0,this.prev=t,e&&this.destination.next(e)}}var Z=i(3190);const q=new class extends w{}(class extends g{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}schedule(t,e=0){return e>0?super.schedule(t,e):(this.delay=e,this.state=t,this.scheduler.flush(this),this)}execute(t,e){return e>0||this.closed?super.execute(t,e):this._execute(t,e)}requestAsyncId(t,e,i=0){return null!==i&&i>0||null===i&&this.delay>0?super.requestAsyncId(t,e,i):t.flush(this)}});var K=i(9193);class H{constructor(t,e,i){this.kind=t,this.value=e,this.error=i,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,i){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(t,e,i){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,i)}toObservable(){switch(this.kind){case"N":return(0,c.of)(this.value);case"E":return t=this.error,new h.y(e=>e.error(t));case"C":return(0,K.c)()}var t;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new H("N",t):H.undefinedValueNotification}static createError(t){return new H("E",void 0,t)}static createComplete(){return H.completeNotification}}H.completeNotification=new H("C"),H.undefinedValueNotification=new H("N",void 0);class Q extends z.L{constructor(t,e,i=0){super(t),this.scheduler=e,this.delay=i}static dispatch(t){const{notification:e,destination:i}=t;e.observe(i),this.unsubscribe()}scheduleMessage(t){this.destination.add(this.scheduler.schedule(Q.dispatch,this.delay,new U(t,this.destination)))}_next(t){this.scheduleMessage(H.createNext(t))}_error(t){this.scheduleMessage(H.createError(t)),this.unsubscribe()}_complete(){this.scheduleMessage(H.createComplete()),this.unsubscribe()}}class U{constructor(t,e){this.notification=t,this.destination=e}}var $=i(7971),J=i(8858);class X extends o.xQ{constructor(t=Number.POSITIVE_INFINITY,e=Number.POSITIVE_INFINITY,i){super(),this.scheduler=i,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=t<1?1:t,this._windowTime=e<1?1:e,e===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(t){if(!this.isStopped){const e=this._events;e.push(t),e.length>this._bufferSize&&e.shift()}super.next(t)}nextTimeWindow(t){this.isStopped||(this._events.push(new tt(this._getNow(),t)),this._trimBufferThenGetEvents()),super.next(t)}_subscribe(t){const e=this._infiniteTimeWindow,i=e?this._events:this._trimBufferThenGetEvents(),n=this.scheduler,r=i.length;let s;if(this.closed)throw new $.N;if(this.isStopped||this.hasError?s=p.w.EMPTY:(this.observers.push(t),s=new J.W(this,t)),n&&t.add(t=new Q(t,n)),e)for(let o=0;o<r&&!t.closed;o++)t.next(i[o]);else for(let o=0;o<r&&!t.closed;o++)t.next(i[o].value);return this.hasError?t.error(this.thrownError):this.isStopped&&t.complete(),s}_getNow(){return(this.scheduler||q).now()}_trimBufferThenGetEvents(){const t=this._getNow(),e=this._bufferSize,i=this._windowTime,n=this._events,r=n.length;let s=0;for(;s<r&&!(t-n[s].time<i);)s++;return r>e&&(s=Math.max(s,r-e)),s>0&&n.splice(0,s),n}}class tt{constructor(t,e){this.time=t,this.value=e}}let et;try{et="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(Ft){et=!1}let it,nt,rt=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,n.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!et)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(r.Lbi))},t.\u0275prov=r.Yz7({factory:function(){return new t(r.LFG(r.Lbi))},token:t,providedIn:"root"}),t})(),st=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})();function ot(){if("object"!=typeof document||!document)return 0;if(null==it){const t=document.createElement("div"),e=t.style;t.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";const i=document.createElement("div"),n=i.style;n.width="2px",n.height="1px",t.appendChild(i),document.body.appendChild(t),it=0,0===t.scrollLeft&&(t.scrollLeft=1,it=0===t.scrollLeft?1:2),t.parentNode.removeChild(t)}return it}const ct=new r.OlP("cdk-dir-doc",{providedIn:"root",factory:function(){return(0,r.f3M)(n.K0)}});let ht=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new r.vpe,t){const e=t.documentElement?t.documentElement.dir:null,i=(t.body?t.body.dir:null)||e;this.value="ltr"===i||"rtl"===i?i:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(ct,8))},t.\u0275prov=r.Yz7({factory:function(){return new t(r.LFG(ct,8))},token:t,providedIn:"root"}),t})(),lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})();class at extends class{}{constructor(t){super(),this._data=t}connect(){return R(this._data)?this._data:(0,c.of)(this._data)}disconnect(){}}class dt{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(t,e,i,n,r){t.forEachOperation((t,s,o)=>{let c,h;null==t.previousIndex?(c=this._insertView(()=>i(t,s,o),o,e,n(t)),h=c?1:0):null==o?(this._detachAndCacheView(s,e),h=3):(c=this._moveView(s,o,e,n(t)),h=2),r&&r({context:null==c?void 0:c.context,operation:h,record:t})})}detach(){for(const t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,i,n){const r=this._insertViewFromCache(e,i);if(r)return void(r.context.$implicit=n);const s=t();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(t,e){const i=e.detach(t);this._maybeCacheView(i,e)}_moveView(t,e,i,n){const r=i.get(t);return i.move(r,e),r.context.$implicit=n,r}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{const i=e.indexOf(t);-1===i?t.destroy():e.remove(i)}}_insertViewFromCache(t,e){const i=this._viewCache.pop();return i&&e.insert(i,t),i||null}}const ut=new r.OlP("_ViewRepeater"),ft=["contentWrapper"],pt=["*"],_t=new r.OlP("VIRTUAL_SCROLL_STRATEGY");class gt{constructor(t,e,i){this._scrolledIndexChange=new o.xQ,this.scrolledIndexChange=this._scrolledIndexChange.pipe(t=>t.lift(new I(void 0,void 0))),this._viewport=null,this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i}attach(t){this._viewport=t,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(t,e,i){this._itemSize=t,this._minBufferPx=e,this._maxBufferPx=i,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(t,e){this._viewport&&this._viewport.scrollToOffset(t*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const t=this._viewport.getRenderedRange(),e={start:t.start,end:t.end},i=this._viewport.getViewportSize(),n=this._viewport.getDataLength();let r=this._viewport.measureScrollOffset(),s=this._itemSize>0?r/this._itemSize:0;if(e.end>n){const t=Math.ceil(i/this._itemSize),o=Math.max(0,Math.min(s,n-t));s!=o&&(s=o,r=o*this._itemSize,e.start=Math.floor(s)),e.end=Math.max(0,Math.min(n,e.start+t))}const o=r-e.start*this._itemSize;if(o<this._minBufferPx&&0!=e.start){const t=Math.ceil((this._maxBufferPx-o)/this._itemSize);e.start=Math.max(0,e.start-t),e.end=Math.min(n,Math.ceil(s+(i+this._minBufferPx)/this._itemSize))}else{const t=e.end*this._itemSize-(r+i);if(t<this._minBufferPx&&e.end!=n){const i=Math.ceil((this._maxBufferPx-t)/this._itemSize);i>0&&(e.end=Math.min(n,e.end+i),e.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(s))}}function mt(t){return t._scrollStrategy}let wt=(()=>{class t{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new gt(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=s(t)}get minBufferPx(){return this._minBufferPx}set minBufferPx(t){this._minBufferPx=s(t)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(t){this._maxBufferPx=s(t)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[r._Bn([{provide:_t,useFactory:mt,deps:[(0,r.Gpc)(()=>t)]}]),r.TTD]}),t})(),vt=(()=>{class t{constructor(t,e,i){this._ngZone=t,this._platform=e,this._scrolled=new o.xQ,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=i}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){const e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=20){return this._platform.isBrowser?new h.y(e=>{this._globalSubscription||this._addGlobalListener();const i=t>0?this._scrolled.pipe(A(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,c.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){const i=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe((0,P.h)(t=>!t||i.indexOf(t)>-1))}getAncestorScrollContainers(t){const e=[];return this.scrollContainers.forEach((i,n)=>{this._scrollableContainsElement(n,t)&&e.push(n)}),e}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,e){let i=(n=e)instanceof r.SBq?n.nativeElement:n;var n;let s=t.getElementRef().nativeElement;do{if(i==s)return!0}while(i=i.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>u(this._getWindow().document,"scroll").subscribe(()=>this._scrolled.next()))}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(r.R0b),r.LFG(rt),r.LFG(n.K0,8))},t.\u0275prov=r.Yz7({factory:function(){return new t(r.LFG(r.R0b),r.LFG(rt),r.LFG(n.K0,8))},token:t,providedIn:"root"}),t})(),xt=(()=>{class t{constructor(t,e,i,n){this.elementRef=t,this.scrollDispatcher=e,this.ngZone=i,this.dir=n,this._destroyed=new o.xQ,this._elementScrolled=new h.y(t=>this.ngZone.runOutsideAngular(()=>u(this.elementRef.nativeElement,"scroll").pipe(D(this._destroyed)).subscribe(t)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){const e=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==t.left&&(t.left=i?t.end:t.start),null==t.right&&(t.right=i?t.start:t.end),null!=t.bottom&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),i&&0!=ot()?(null!=t.left&&(t.right=e.scrollWidth-e.clientWidth-t.left),2==ot()?t.left=t.right:1==ot()&&(t.left=t.right?-t.right:t.right)):null!=t.right&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){const e=this.elementRef.nativeElement;!function(){if(null==nt){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return nt=!1,nt;if("scrollBehavior"in document.documentElement.style)nt=!0;else{const t=Element.prototype.scrollTo;nt=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return nt}()?(null!=t.top&&(e.scrollTop=t.top),null!=t.left&&(e.scrollLeft=t.left)):e.scrollTo(t)}measureScrollOffset(t){const e="left",i="right",n=this.elementRef.nativeElement;if("top"==t)return n.scrollTop;if("bottom"==t)return n.scrollHeight-n.clientHeight-n.scrollTop;const r=this.dir&&"rtl"==this.dir.value;return"start"==t?t=r?i:e:"end"==t&&(t=r?e:i),r&&2==ot()?t==e?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:r&&1==ot()?t==e?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:t==e?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(vt),r.Y36(r.R0b),r.Y36(ht,8))},t.\u0275dir=r.lG2({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]}),t})(),bt=(()=>{class t{constructor(t,e,i){this._platform=t,this._change=new o.xQ,this._changeListener=t=>{this._change.next(t)},this._document=i,e.runOutsideAngular(()=>{if(t.isBrowser){const t=this._getWindow();t.addEventListener("resize",this._changeListener),t.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._updateViewportSize())})}ngOnDestroy(){if(this._platform.isBrowser){const t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){const t=this.getViewportScrollPosition(),{width:e,height:i}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+i,right:t.left+e,height:i,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const t=this._document,e=this._getWindow(),i=t.documentElement,n=i.getBoundingClientRect();return{top:-n.top||t.body.scrollTop||e.scrollY||i.scrollTop||0,left:-n.left||t.body.scrollLeft||e.scrollX||i.scrollLeft||0}}change(t=20){return t>0?this._change.pipe(A(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(rt),r.LFG(r.R0b),r.LFG(n.K0,8))},t.\u0275prov=r.Yz7({factory:function(){return new t(r.LFG(rt),r.LFG(r.R0b),r.LFG(n.K0,8))},token:t,providedIn:"root"}),t})();const Ct="undefined"!=typeof requestAnimationFrame?v:k;let St=(()=>{class t extends xt{constructor(t,e,i,n,r,s,c){super(t,s,i,r),this.elementRef=t,this._changeDetectorRef=e,this._scrollStrategy=n,this._detachedSubject=new o.xQ,this._renderedRangeSubject=new o.xQ,this._orientation="vertical",this.scrolledIndexChange=new h.y(t=>this._scrollStrategy.scrolledIndexChange.subscribe(e=>Promise.resolve().then(()=>this.ngZone.run(()=>t.next(e))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=p.w.EMPTY,this._viewportChanges=c.change().subscribe(()=>{this.checkViewportSize()})}get orientation(){return this._orientation}set orientation(t){this._orientation!==t&&(this._orientation=t,this._calculateSpacerSize())}ngOnInit(){super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.elementScrolled().pipe((0,G.O)(null),A(0,Ct)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()}))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(t){this.ngZone.runOutsideAngular(()=>{this._forOf=t,this._forOf.dataStream.pipe(D(this._detachedSubject)).subscribe(t=>{const e=t.length;e!==this._dataLength&&(this._dataLength=e,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}setTotalContentSize(t){this._totalContentSize!==t&&(this._totalContentSize=t,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(t){var e,i;((e=this._renderedRange).start!=(i=t).start||e.end!=i.end)&&(this._renderedRangeSubject.next(this._renderedRange=t),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(t,e="to-start"){const i="horizontal"==this.orientation,n=i?"X":"Y";let r=`translate${n}(${Number((i&&this.dir&&"rtl"==this.dir.value?-1:1)*t)}px)`;this._renderedContentOffset=t,"to-end"===e&&(r+=` translate${n}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=r&&(this._renderedContentTransform=r,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(t,e="auto"){const i={behavior:e};"horizontal"===this.orientation?i.start=t:i.top=t,this.scrollTo(i)}scrollToIndex(t,e="auto"){this._scrollStrategy.scrollToIndex(t,e)}measureScrollOffset(t){return super.measureScrollOffset(t||("horizontal"===this.orientation?"start":"top"))}measureRenderedContentSize(){const t=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?t.offsetWidth:t.offsetHeight}measureRangeSize(t){return this._forOf?this._forOf.measureRangeSize(t,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){const t=this.elementRef.nativeElement;this._viewportSize="horizontal"===this.orientation?t.clientWidth:t.clientHeight}_markChangeDetectionNeeded(t){t&&this._runAfterChangeDetection.push(t),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const t=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const e of t)e()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(r.sBO),r.Y36(r.R0b),r.Y36(_t,8),r.Y36(ht,8),r.Y36(vt),r.Y36(bt))},t.\u0275cmp=r.Xpm({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,e){if(1&t&&r.Gf(ft,7),2&t){let t;r.iGM(t=r.CRH())&&(e._contentWrapper=t.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,e){2&t&&r.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===e.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==e.orientation)},inputs:{orientation:"orientation"},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[r._Bn([{provide:xt,useExisting:t}]),r.qOj],ngContentSelectors:pt,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"div",0,1),r.Hsn(2),r.qZA(),r._UZ(3,"div",2)),2&t&&(r.xp6(3),r.Udp("width",e._totalContentWidth)("height",e._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],encapsulation:2,changeDetection:0}),t})();function yt(t,e,i){if(!i.getBoundingClientRect)return 0;const n=i.getBoundingClientRect();return"horizontal"===t?"start"===e?n.left:n.right:"start"===e?n.top:n.bottom}let kt=(()=>{class t{constructor(t,e,i,n,r,s){this._viewContainerRef=t,this._template=e,this._differs=i,this._viewRepeater=n,this._viewport=r,this.viewChange=new o.xQ,this._dataSourceChanges=new o.xQ,this.dataStream=this._dataSourceChanges.pipe((0,G.O)(null),t=>t.lift(new M),(0,Z.w)(([t,e])=>this._changeDataSource(t,e)),function(t,e,i){let n;return n={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},t=>t.lift(function({bufferSize:t=Number.POSITIVE_INFINITY,windowTime:e=Number.POSITIVE_INFINITY,refCount:i,scheduler:n}){let r,s,o=0,c=!1,h=!1;return function(l){let a;o++,!r||c?(c=!1,r=new X(t,e,n),a=r.subscribe(this),s=l.subscribe({next(t){r.next(t)},error(t){c=!0,r.error(t)},complete(){h=!0,s=void 0,r.complete()}}),h&&(s=void 0)):a=r.subscribe(this),this.add(()=>{o--,a.unsubscribe(),a=void 0,s&&!h&&i&&0===o&&(s.unsubscribe(),s=void 0,r=void 0)})}}(n))}()),this._differ=null,this._needsUpdate=!1,this._destroyed=new o.xQ,this.dataStream.subscribe(t=>{this._data=t,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(D(this._destroyed)).subscribe(t=>{this._renderedRange=t,s.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(t){this._cdkVirtualForOf=t,function(t){return t&&"function"==typeof t.connect}(t)?this._dataSourceChanges.next(t):this._dataSourceChanges.next(new at(R(t)?t:Array.from(t||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(t){this._needsUpdate=!0,this._cdkVirtualForTrackBy=t?(e,i)=>t(e+(this._renderedRange?this._renderedRange.start:0),i):void 0}set cdkVirtualForTemplate(t){t&&(this._needsUpdate=!0,this._template=t)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(t){this._viewRepeater.viewCacheSize=s(t)}measureRangeSize(t,e){if(t.start>=t.end)return 0;const i=t.start-this._renderedRange.start,n=t.end-t.start;let r,s;for(let o=0;o<n;o++){const t=this._viewContainerRef.get(o+i);if(t&&t.rootNodes.length){r=s=t.rootNodes[0];break}}for(let o=n-1;o>-1;o--){const t=this._viewContainerRef.get(o+i);if(t&&t.rootNodes.length){s=t.rootNodes[t.rootNodes.length-1];break}}return r&&s?yt(e,"end",s)-yt(e,"start",r):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const t=this._differ.diff(this._renderedItems);t?this._applyChanges(t):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((t,e)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(t,e):e)),this._needsUpdate=!0)}_changeDataSource(t,e){return t&&t.disconnect(this),this._needsUpdate=!0,e?e.connect(this):(0,c.of)()}_updateContext(){const t=this._data.length;let e=this._viewContainerRef.length;for(;e--;){const i=this._viewContainerRef.get(e);i.context.index=this._renderedRange.start+e,i.context.count=t,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(t){this._viewRepeater.applyChanges(t,this._viewContainerRef,(t,e,i)=>this._getEmbeddedViewArgs(t,i),t=>t.item),t.forEachIdentityChange(t=>{this._viewContainerRef.get(t.currentIndex).context.$implicit=t.item});const e=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const t=this._viewContainerRef.get(i);t.context.index=this._renderedRange.start+i,t.context.count=e,this._updateComputedContextProperties(t.context)}}_updateComputedContextProperties(t){t.first=0===t.index,t.last=t.index===t.count-1,t.even=t.index%2==0,t.odd=!t.even}_getEmbeddedViewArgs(t,e){return{templateRef:this._template,context:{$implicit:t.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:e}}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.s_b),r.Y36(r.Rgc),r.Y36(r.ZZ4),r.Y36(ut),r.Y36(St,4),r.Y36(r.R0b))},t.\u0275dir=r.lG2({type:t,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[r._Bn([{provide:ut,useClass:dt}])]}),t})(),Rt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})(),zt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[lt,st,Rt],lt,Rt]}),t})();function It(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"div",2),r.TgZ(1,"button",3),r.NdJ("click",function(){const e=r.CHM(t).index;return r.oxw().btnClick(e+1)}),r._uU(2,"Click"),r.qZA(),r.qZA()}}let Tt=(()=>{class t{constructor(t,e){this.renderer=t,this.el=e,this.count=100,this.dataCount=[]}ngOnInit(){this.dataCount=Array(this.count).fill(this.count),this.renderer.addClass(this.el.nativeElement.children[0].children[0],"row")}btnClick(t){alert(`Button '${t}' is clicked`)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.Qsj),r.Y36(r.SBq))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-dynamic-box"]],decls:2,vars:1,consts:[["itemSize","50",1,"viewport"],["class","wh-200",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"wh-200"],["type","button",1,"btn","text-center",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"cdk-virtual-scroll-viewport",0),r.YNc(1,It,3,0,"div",1),r.qZA()),2&t&&(r.xp6(1),r.Q6J("cdkVirtualForOf",e.dataCount))},directives:[St,wt,kt],styles:[".wh-200[_ngcontent-%COMP%]{height:200px;display:flex;justify-content:center;align-items:center;width:200px;margin:10px}.btn[_ngcontent-%COMP%], .viewport[_ngcontent-%COMP%], .wh-200[_ngcontent-%COMP%]{border:1px solid #000}.viewport[_ngcontent-%COMP%]{height:calc(100vh - 100px);width:100%;overflow-x:hidden}.example-item[_ngcontent-%COMP%]{height:50px}"]}),t})();var Ot=i(3590);const Bt=[{path:"",component:Tt}];let Vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[Ot.Bz.forChild(Bt)],Ot.Bz]}),t})(),Et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,Vt,zt]]}),t})()}}]);