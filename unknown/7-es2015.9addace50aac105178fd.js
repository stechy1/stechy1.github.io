(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Udum:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var a=t("pMnS"),s=t("DYzW"),i=t("2J/E");class r{constructor(){this.dataChanged=new e.m}ngOnInit(){this.query.subscribe(l=>{this._query=l})}nameChanged(l){this._query.name!==l&&(this._query.name=l,this.dataChanged.emit(this._query))}get name(){return this._query?this._query.name:""}}var o=e.ob({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["N\xe1zev dotazu"])),(l()(),e.qb(4,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(l,n,t){var e=!0;return"valueChanged"===n&&(e=!1!==l.component.nameChanged(t)&&e),e},s.b,s.a)),e.pb(5,114688,null,0,i.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"})],function(l,n){l(n,5,0,n.component.name)},null)}var d=t("s7LF"),h=t("SVse");class b{constructor(){this.dataChanged=new e.m,this.updateContentOnly=new e.m}_recalculateTextAreaHeight(){this.loading=!0,setTimeout(()=>{const l=this._textArea.nativeElement;l.style.height="1px",l.style.height=25+l.scrollHeight+"px",l.disabled=!1,this.loading=!1},500)}ngOnInit(){this.loading=!0,this.query.subscribe(l=>{this._query=l,this._content=this._query.content,this._recalculateTextAreaHeight()})}handleUpdateContent(){this._query.content!==this.content&&(this._recalculateTextAreaHeight(),this.updateContentOnly.emit(this.content))}handleSaveContent(){this._query.content!==this.content&&(this._query.content=this.content,this.dataChanged.emit(this._query))}get content(){return this._content}set content(l){this._content=l}get contentChanged(){return!!this._query&&this._query.content!==this._content}}var p=e.ob({encapsulation:0,styles:[["#autorenew[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite rotate360;animation:2s linear infinite rotate360}"]],data:{}});function g(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"i",[["class","material-icons"],["id","autorenew"],["style","position: absolute; left: 50%; top: 30%;"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["autorenew"]))],null,null)}function m(l){return e.Kb(0,[e.Gb(402653184,1,{_textArea:0}),(l()(),e.qb(1,0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,10,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Editor SPARQL dotazu"])),(l()(),e.qb(5,0,[[1,0],["query_content",1]],null,5,"textarea",[["cols","30"],["disabled",""],["id","query-content"],["name","query-content"],["rows","30"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0,a=l.component;return"input"===n&&(u=!1!==e.Ab(l,6)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e.Ab(l,6).onTouched()&&u),"compositionstart"===n&&(u=!1!==e.Ab(l,6)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e.Ab(l,6)._compositionEnd(t.target.value)&&u),"ngModelChange"===n&&(u=!1!==(a.content=t)&&u),u},null,null)),e.pb(6,16384,null,0,d.d,[e.C,e.k,[2,d.a]],null,null),e.Fb(1024,null,d.l,function(l){return[l]},[d.d]),e.pb(8,671744,null,0,d.p,[[8,null],[8,null],[8,null],[6,d.l]],{name:[0,"name"],isDisabled:[1,"isDisabled"],model:[2,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.m,null,[d.p]),e.pb(10,16384,null,0,d.n,[[4,d.m]],null,null),(l()(),e.fb(16777216,null,null,1,null,g)),e.pb(12,16384,null,0,h.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(13,0,null,null,6,"div",[["class","card-action"]],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,4,"div",[["class","col s12"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,1,"button",[["class","btn btn-tiny blue left"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleSaveContent()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Ulo\u017eit"])),(l()(),e.qb(18,0,null,null,1,"button",[["class","btn btn-tiny right"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleUpdateContent()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Aktualizovat"]))],function(l,n){var t=n.component;l(n,8,0,"query-content","",t.content),l(n,12,0,t.loading)},function(l,n){var t=n.component;l(n,5,0,e.Ab(n,10).ngClassUntouched,e.Ab(n,10).ngClassTouched,e.Ab(n,10).ngClassPristine,e.Ab(n,10).ngClassDirty,e.Ab(n,10).ngClassValid,e.Ab(n,10).ngClassInvalid,e.Ab(n,10).ngClassPending),l(n,18,0,!t.contentChanged)})}var v=t("nbsB"),y=t("sQle"),q=t("/Qod");class f{constructor(l,n,t,u){this._endpointCommunicator=l,this._qservice=n,this._toaster=t,this._router=u,this.doQuery=new e.m,this._responceFormats=Object.keys(q.a)}ngOnInit(){this.ignoreStatistics=!1,this.query.subscribe(l=>{this._query=l})}handleDoQuery(){this.doQuery.emit(this.ignoreStatistics)}handleDuplicate(){this._qservice.duplicate(this._query).then(l=>{this._toaster.info("Dotaz byl \xfasp\u011b\u0161n\u011b zduplikov\xe1n"),this._router.navigate(["browse-query"]).then(()=>{setTimeout(()=>{this._router.navigate(["edit",l])},500)})})}get working(){return this._endpointCommunicator.working}set responceFormat(l){this._endpointCommunicator.responceFormat=l}get responceFormat(){return this._endpointCommunicator.responceFormat}get responceFormats(){return this._responceFormats}}var C=t("EApP"),_=t("iInd"),k=e.ob({encapsulation:0,styles:[["@-webkit-keyframes rotate360{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate360{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes rotating{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotating{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.rotating[_ngcontent-%COMP%]{-webkit-animation:2s linear infinite rotating;animation:2s linear infinite rotating}"]],data:{}});function w(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.pb(1,147456,null,0,d.q,[e.k,e.C,[2,d.t]],{value:[0,"value"]},null),e.pb(2,147456,null,0,d.x,[e.k,e.C,[8,null]],{value:[0,"value"]},null),(l()(),e.Ib(3,null,["",""]))],function(l,n){l(n,1,0,e.sb(1,"",n.context.$implicit,"")),l(n,2,0,e.sb(1,"",n.context.$implicit,""))},function(l,n){l(n,3,0,n.context.$implicit)})}function x(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,34,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Akce"])),(l()(),e.qb(4,0,null,null,30,"div",[["class","card-action"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,7,"div",[["class","col s12 l4"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,4,"button",[["class","btn btn-tiny green"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleDoQuery()&&e),e},null,null)),e.Cb(131072,h.b,[e.h]),(l()(),e.Ib(-1,null,[" Vykonat "])),(l()(),e.qb(10,0,null,null,1,"i",[["class","material-icons right rotating"]],[[4,"display",null]],null,null,null,null)),(l()(),e.Ib(-1,null,["autorenew"])),(l()(),e.qb(12,0,null,null,1,"button",[["class","btn btn-tiny blue right"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleDuplicate()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Duplikovat"])),(l()(),e.qb(14,0,null,null,10,"div",[["class","col s6 l4"],["style","display: flex;"]],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,1,"label",[["for","selectResponceFormat"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Form\xe1t odpov\u011bdi"])),(l()(),e.qb(17,0,null,null,7,"select",[["id","selectResponceFormat"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,t){var u=!0,a=l.component;return"change"===n&&(u=!1!==e.Ab(l,18).onChange(t.target.value)&&u),"blur"===n&&(u=!1!==e.Ab(l,18).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(a.responceFormat=t)&&u),u},null,null)),e.pb(18,16384,null,0,d.t,[e.C,e.k],null,null),e.Fb(1024,null,d.l,function(l){return[l]},[d.t]),e.pb(20,671744,null,0,d.p,[[8,null],[8,null],[8,null],[6,d.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.m,null,[d.p]),e.pb(22,16384,null,0,d.n,[[4,d.m]],null,null),(l()(),e.fb(16777216,null,null,1,null,w)),e.pb(24,278528,null,0,h.k,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(25,0,null,null,9,"div",[["class","col s6 l4"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,8,"label",[["class","right"],["style","margin-left: 8px"]],null,null,null,null,null)),(l()(),e.qb(27,0,null,null,5,"input",[["class","filled-in"],["type","checkbox"],["value","alphabeticaly"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,t){var u=!0,a=l.component;return"change"===n&&(u=!1!==e.Ab(l,28).onChange(t.target.checked)&&u),"blur"===n&&(u=!1!==e.Ab(l,28).onTouched()&&u),"ngModelChange"===n&&(u=!1!==(a.ignoreStatistics=t)&&u),u},null,null)),e.pb(28,16384,null,0,d.b,[e.C,e.k],null,null),e.Fb(1024,null,d.l,function(l){return[l]},[d.b]),e.pb(30,671744,null,0,d.p,[[8,null],[8,null],[8,null],[6,d.l]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,d.m,null,[d.p]),e.pb(32,16384,null,0,d.n,[[4,d.m]],null,null),(l()(),e.qb(33,0,null,null,1,"span",[["class","group-by-select primary-text-color"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Nezapo\u010d\xedt\xe1vat do statistik"]))],function(l,n){var t=n.component;l(n,20,0,t.responceFormat),l(n,24,0,t.responceFormats),l(n,30,0,t.ignoreStatistics)},function(l,n){var t=n.component,u=null;l(n,7,0,t.working||0===(null==(u=e.Jb(n,7,0,e.Ab(n,8).transform(t.query)))?null:u.content.length)),l(n,10,0,t.working?"block":"none"),l(n,17,0,e.Ab(n,22).ngClassUntouched,e.Ab(n,22).ngClassTouched,e.Ab(n,22).ngClassPristine,e.Ab(n,22).ngClassDirty,e.Ab(n,22).ngClassValid,e.Ab(n,22).ngClassInvalid,e.Ab(n,22).ngClassPending),l(n,27,0,e.Ab(n,32).ngClassUntouched,e.Ab(n,32).ngClassTouched,e.Ab(n,32).ngClassPristine,e.Ab(n,32).ngClassDirty,e.Ab(n,32).ngClassValid,e.Ab(n,32).ngClassInvalid,e.Ab(n,32).ngClassPending)})}var I=t("4Zd5");t("/lDG");class A{constructor(l){this._toaster=l}ngOnInit(){}ngAfterViewInit(){setTimeout(()=>this.windowHeight=window.innerHeight-200,500)}handleCopyResult(){Object(I.a)(this.result),this._toaster.success("Zpr\xe1va byla zkop\xedrov\xe1na")}handleCloseResponce(){this.result=void 0}}var P=e.ob({encapsulation:0,styles:[[".q-result[_ngcontent-%COMP%]{overflow:auto}"]],data:{}});function S(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"pre",[["class","q-result"]],[[4,"max-height","px"]],null,null,null,null)),(l()(),e.Ib(1,null,["      ","\n    "]))],null,function(l,n){var t=n.component;l(n,0,0,t.windowHeight),l(n,1,0,t.result.result)})}function F(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,17,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["V\xfdsledek dotazu"])),(l()(),e.fb(16777216,null,null,1,null,S)),e.pb(5,16384,null,0,h.l,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(6,0,null,null,11,"div",[["class","card-action"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,6,"div",[["class","col s8"]],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,1,"button",[["class","btn btn-tiny default-primary-color"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleCopyResult()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Zkop\xedrovat"])),(l()(),e.qb(11,0,null,null,3,"a",[["class","btn btn-tiny"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Ab(l,12).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.pb(12,671744,null,0,_.n,[_.k,_.a,h.i],{routerLink:[0,"routerLink"]},null),e.Bb(13,2),(l()(),e.Ib(-1,null,["Zobrazit samostatn\u011b"])),(l()(),e.qb(15,0,null,null,2,"div",[["class","col s4 right-align"]],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,1,"button",[["class","btn btn-tiny red"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleCloseResponce()&&e),e},null,null)),(l()(),e.Ib(-1,null,["Zav\u0159\xedt odpov\u011b\u010f"]))],function(l,n){l(n,5,0,void 0!==n.component.result);var t=l(n,13,0,"/result-viewer","last");l(n,12,0,t)},function(l,n){var t=n.component;l(n,9,0,void 0===t.result),l(n,11,0,e.Ab(n,12).target,e.Ab(n,12).href),l(n,16,0,void 0===t.result)})}var z=t("b1TM");class O{constructor(l){this._settings=l,this.content="",this._params={}}static getIndicesOf(l,n){const t=l.length;if(0===t)return[];let e,u=0;const a=[];for(;(e=n.indexOf(l,u))>-1;)a.push(e),u=e+t;return a}ngOnInit(){this.params.subscribe(l=>{this._params=l})}findVariables(l,n){if(0===l.length)return;const t=O.getIndicesOf(this._settings.queryParameterFormat.prefix,l),e=this._settings.queryParameterFormat.suffixIsPrefix;let u=[];if(e||(u=O.getIndicesOf(this._settings.queryParameterFormat.suffix,l)),(t.length+u.length)%2==0){for(let a=0,s=0;a<t.length;a+=e?2:1,s++){const i=t[a]+1,r=e?t[a+1]:u[s];if(void 0===r){prompt(`${s}. parametr nebyl rozpozn\xe1n!`);continue}const o=l.substring(i,r);this._params[o]?n[o]&&(this._params[o]=n[o]):this._params[o]={defaultValue:"",usedValue:""}}return this.content=l,this._params}prompt(`V\u0161echny parametry mus\xed m\xedt prefix ${this._settings.queryParameterFormat.prefix} a suffix ${this._settings.queryParameterFormat.suffix}!`)}isParameterToRemove(l){return void 0===this.variablesWithoutUnused[l]}handleDefaultValueChange(l,n){this._params[n].defaultValue=l}handleUsedValueChange(l,n){this._params[n].usedValue=l}get keys(){return Object.keys(this._params)}get variablesWithoutUnused(){const l={};for(const n in this._params)-1!==this.content.indexOf(`${this._settings.queryParameterFormat.prefix}${n}${this._settings.queryParameterFormat.suffix}`)&&(l[n]=this._params[n]);return l}get parameters(){return this._params}}var D=e.ob({encapsulation:0,styles:[[""]],data:{}});function Q(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"div",[["class","col s4"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[],[[4,"text-decoration",null]],null,null,null,null)),(l()(),e.Ib(3,null,["",""])),(l()(),e.qb(4,0,null,null,2,"div",[["class","col s4"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(l,n,t){var e=!0;return"valueChanged"===n&&(e=!1!==l.component.handleDefaultValueChange(t,l.context.$implicit)&&e),e},s.b,s.a)),e.pb(6,114688,null,0,i.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"}),(l()(),e.qb(7,0,null,null,2,"div",[["class","col s4"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(l,n,t){var e=!0;return"valueChanged"===n&&(e=!1!==l.component.handleUsedValueChange(t,l.context.$implicit)&&e),e},s.b,s.a)),e.pb(9,114688,null,0,i.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"})],function(l,n){var t=n.component;l(n,6,0,t.parameters[n.context.$implicit].defaultValue),l(n,9,0,t.parameters[n.context.$implicit].usedValue)},function(l,n){l(n,2,0,n.component.isParameterToRemove(n.context.$implicit)?"line-through":"inherit"),l(n,3,0,n.context.$implicit)})}function T(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,12,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,11,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Parametry dotazu"])),(l()(),e.qb(4,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"div",[["class","col s4"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["N\xe1zev"])),(l()(),e.qb(7,0,null,null,1,"div",[["class","col s4"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["V\xfdchoz\xed hodnota"])),(l()(),e.qb(9,0,null,null,1,"div",[["class","col s4"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Aktu\xe1ln\xed hodnota"])),(l()(),e.fb(16777216,null,null,1,null,Q)),e.pb(12,278528,null,0,h.k,[e.N,e.K,e.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,12,0,n.component.keys)},null)}class M{constructor(){this.dataChanged=new e.m}ngOnInit(){this.query.subscribe(l=>{this._query=l})}endpointChanged(l){this._query.endpoint!==l&&(this._query.endpoint=l,this.dataChanged.emit(this._query))}get endpoint(){return this._query?this._query.endpoint:""}}var K=e.ob({encapsulation:0,styles:[[""]],data:{}});function V(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["URL Endpoint"])),(l()(),e.qb(4,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(l,n,t){var e=!0;return"valueChanged"===n&&(e=!1!==l.component.endpointChanged(t)&&e),e},s.b,s.a)),e.pb(5,114688,null,0,i.a,[],{value:[0,"value"]},{valueChanged:"valueChanged"})],function(l,n){l(n,5,0,n.component.endpoint)},null)}class j{constructor(){this.dataChanged=new e.m}ngOnInit(){this.query.subscribe(l=>{this._query=l})}descriptionChanged(l){this._query.description!==l&&(this._query.description=l,this.dataChanged.emit(this._query))}get description(){return this._query?this._query.description:""}}var R=e.ob({encapsulation:0,styles:[[""]],data:{}});function U(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Popis dotazu"])),(l()(),e.qb(4,0,null,null,1,"app-editable-value",[],null,[[null,"valueChanged"]],function(l,n,t){var e=!0;return"valueChanged"===n&&(e=!1!==l.component.descriptionChanged(t)&&e),e},s.b,s.a)),e.pb(5,114688,null,0,i.a,[],{useTextarea:[0,"useTextarea"],value:[1,"value"]},{valueChanged:"valueChanged"})],function(l,n){l(n,5,0,!0,n.component.description)},null)}var N=t("thvK"),$=t("Jfap"),E=t("wY23"),J=t("M6Td"),H=t("MJFs"),W=t("hNAo"),G=t("kbyI"),L=t("R9bk"),Z=t("XNiG"),B=t("DnQx");class Y{constructor(l,n,t,e,u,a,s,i){this._qservice=l,this._settings=n,this._navService=t,this._endpointCommunicator=e,this._modalService=u,this._toaster=a,this._route=s,this._router=i,this._querySubject=new Z.a,this._paramsSubject=new Z.a,this.modalType=B.a.WARNING}ngOnInit(){const l=this._route.snapshot.paramMap.get("id");this._qservice.byId(l).then(l=>{this._query=l,this._params=l.params,this._querySubject.next(l),this._paramsSubject.next(this._query.params)}).catch(l=>{void 0===l?(this._toaster.error("Dotaz nebyl nalezen!"),this._router.navigate(["browse-query"])):(this._query=l,this._modalService.open("confirmContainer"))}),this.saveProgress="notSaved",this._navService.setNavbar(null),this._navService.setSidebar(null)}handleSaveQuery(){"notSaved"!==this.saveProgress&&(this._params=this.paramsComponent.variablesWithoutUnused,this._query.params=this._params,this._qservice.performSave(),this.saveProgress="notSaved",this._toaster.success("Dotaz byl ulo\u017een"))}handleQueryChange(){const l=this;this.saveProgress="notSaved",this._settings.useSaveDelay?setTimeout(()=>{l.saveProgress="saved"},this._settings.saveDelay):this.handleManualQuerySave()}handleManualQuerySave(){this.saveProgress="notSaved",this._params=this.paramsComponent.variablesWithoutUnused,this._query.params=this._params,this._qservice.performSave(),this._toaster.success("Dotaz byl ulo\u017een")}handleUpdateParams(l){this._params=this.paramsComponent.findVariables(l,this._params),this._paramsSubject.next(this._params)}handleDoQuery(l){l||(this._query.runCount++,this._query.lastRun=Date.now(),this._qservice.performSave()),this._endpointCommunicator.makeRequest(this._query,l).then(l=>{this.queryResult=l})}handleConfirmDownloadForEdit(){this._qservice.create(this._query,!0).then(l=>{this._router.navigate(["browse-query"]).then(()=>{this._router.navigate(["edit",l])})})}handleCancelDownloadForEdit(){this._router.navigate(["browse-query"])}get query(){return this._querySubject}get params(){return this._paramsSubject}}var X=e.ob({encapsulation:0,styles:[["#saveBar[_ngcontent-%COMP%]{height:1px;background-color:orange;visibility:hidden}#save-query[_ngcontent-%COMP%]{position:fixed;right:15px;bottom:15px}"]],data:{animation:[{type:7,name:"saveProgress",definitions:[{type:0,name:"notSaved",styles:{type:6,styles:{width:"0%",visibility:"hidden"},offset:null},options:void 0},{type:0,name:"saved",styles:{type:6,styles:{width:"100%",visibility:"visible"},offset:null},options:void 0},{type:1,expr:"notSaved => saved",animation:{type:4,styles:null,timings:"1s"},options:null},{type:1,expr:"saved => notSaved",animation:{type:4,styles:null,timings:"0s"},options:null}],options:{}}]}});function ll(l){return e.Kb(0,[e.Gb(402653184,1,{paramsComponent:0}),(l()(),e.qb(1,0,null,null,0,"div",[["id","saveBar"]],[[24,"@saveProgress",0]],[[null,"@saveProgress.done"]],function(l,n,t){var e=!0;return"@saveProgress.done"===n&&(e=!1!==l.component.handleSaveQuery()&&e),e},null,null)),(l()(),e.qb(2,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,8,"div",[["class","col s12 m7 offset-l1"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,1,"app-q-name",[],null,[[null,"dataChanged"]],function(l,n,t){var e=!0;return"dataChanged"===n&&(e=!1!==l.component.handleQueryChange()&&e),e},c,o)),e.pb(5,114688,null,0,r,[],{query:[0,"query"]},{dataChanged:"dataChanged"}),(l()(),e.qb(6,0,null,null,1,"app-q-content",[],null,[[null,"dataChanged"],[null,"updateContentOnly"]],function(l,n,t){var e=!0,u=l.component;return"dataChanged"===n&&(e=!1!==u.handleQueryChange()&&e),"updateContentOnly"===n&&(e=!1!==u.handleUpdateParams(t)&&e),e},m,p)),e.pb(7,114688,null,0,b,[],{query:[0,"query"]},{dataChanged:"dataChanged",updateContentOnly:"updateContentOnly"}),(l()(),e.qb(8,0,null,null,1,"app-q-actions",[],null,[[null,"doQuery"]],function(l,n,t){var e=!0;return"doQuery"===n&&(e=!1!==l.component.handleDoQuery(t)&&e),e},x,k)),e.pb(9,114688,null,0,f,[v.a,y.a,C.j,_.k],{query:[0,"query"]},{doQuery:"doQuery"}),(l()(),e.qb(10,0,null,null,1,"app-q-result",[],null,null,null,F,P)),e.pb(11,4308992,null,0,A,[C.j],{result:[0,"result"]},null),(l()(),e.qb(12,0,null,null,10,"div",[["class","col s12 m5 l3"]],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,2,"app-q-params",[],null,null,null,T,D)),e.pb(14,114688,[[1,4]],0,O,[z.a],{params:[0,"params"],content:[1,"content"]},null),e.Cb(131072,h.b,[e.h]),(l()(),e.qb(16,0,null,null,1,"app-q-endpoint",[],null,[[null,"dataChanged"]],function(l,n,t){var e=!0;return"dataChanged"===n&&(e=!1!==l.component.handleQueryChange()&&e),e},V,K)),e.pb(17,114688,null,0,M,[],{query:[0,"query"]},{dataChanged:"dataChanged"}),(l()(),e.qb(18,0,null,null,1,"app-q-description",[],null,[[null,"dataChanged"]],function(l,n,t){var e=!0;return"dataChanged"===n&&(e=!1!==l.component.handleQueryChange()&&e),e},U,R)),e.pb(19,114688,null,0,j,[],{query:[0,"query"]},{dataChanged:"dataChanged"}),(l()(),e.qb(20,0,null,null,2,"app-q-tags",[],null,[[null,"dataChanged"]],function(l,n,t){var e=!0;return"dataChanged"===n&&(e=!1!==l.component.handleQueryChange()&&e),e},N.b,N.a)),e.pb(21,114688,null,0,$.a,[],{tags:[0,"tags"]},{dataChanged:"dataChanged"}),e.Cb(131072,h.b,[e.h]),(l()(),e.qb(23,0,null,null,2,"a",[["class","btn-floating btn-large waves-effect waves-light red"],["id","save-query"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.handleManualQuerySave()&&e),e},null,null)),(l()(),e.qb(24,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["save"])),(l()(),e.qb(26,0,null,null,3,"app-modal",[["id","confirmContainer"]],null,[[null,"confirm"],[null,"cancel"]],function(l,n,t){var e=!0,u=l.component;return"confirm"===n&&(e=!1!==u.handleConfirmDownloadForEdit()&&e),"cancel"===n&&(e=!1!==u.handleCancelDownloadForEdit()&&e),e},E.b,E.a)),e.pb(27,245760,null,0,J.a,[H.a,e.k],{id:[0,"id"],modalType:[1,"modalType"]},{cancel:"cancel",confirm:"confirm"}),(l()(),e.qb(28,0,null,0,1,"app-confirm-dialog",[["confirmText","Nelze editovat p\u0159\xedmo z\xe1znam z Firebase! P\u0159ejete si dotaz st\xe1hnout?"]],null,null,null,W.b,W.a)),e.pb(29,114688,null,0,G.a,[],{confirmText:[0,"confirmText"]},null)],function(l,n){var t,u,a=n.component;l(n,5,0,a.query),l(n,7,0,a.query),l(n,9,0,a.query),l(n,11,0,a.queryResult),l(n,14,0,a.params,null==(t=e.Jb(n,14,1,e.Ab(n,15).transform(a.query)))?null:t.content),l(n,17,0,a.query),l(n,19,0,a.query),l(n,21,0,null==(u=e.Jb(n,21,0,e.Ab(n,22).transform(a.query)))?null:u.tags),l(n,27,0,"confirmContainer",a.modalType),l(n,29,0,"Nelze editovat p\u0159\xedmo z\xe1znam z Firebase! P\u0159ejete si dotaz st\xe1hnout?")},function(l,n){l(n,1,0,n.component.saveProgress)})}function nl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-edit-query",[],null,null,null,ll,X)),e.pb(1,114688,null,0,Y,[y.a,z.a,L.a,v.a,H.a,C.j,_.a,_.k],null,null)],function(l,n){l(n,1,0)},null)}var tl=e.mb("app-edit-query",Y,nl,{},{},[]),el=t("ADsi");class ul{}var al=t("7q5b");t.d(n,"EditQueryModuleNgFactory",function(){return sl});var sl=e.nb(u,[],function(l){return e.xb([e.yb(512,e.j,e.ab,[[8,[a.a,tl]],[3,e.j],e.w]),e.yb(4608,h.n,h.m,[e.t,[2,h.v]]),e.yb(4608,d.v,d.v,[]),e.yb(4608,d.e,d.e,[]),e.yb(1073742336,h.c,h.c,[]),e.yb(1073742336,d.u,d.u,[]),e.yb(1073742336,d.j,d.j,[]),e.yb(1073742336,d.r,d.r,[]),e.yb(1073742336,el.a,el.a,[]),e.yb(1073742336,_.o,_.o,[[2,_.u],[2,_.k]]),e.yb(1073742336,ul,ul,[]),e.yb(1073742336,al.a,al.a,[]),e.yb(1073742336,u,u,[]),e.yb(1024,_.i,function(){return[[{path:":id",component:Y}]]},[])])})}}]);