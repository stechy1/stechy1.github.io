(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{gsvp:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var s=u("pMnS"),r=u("iInd"),a=u("SVse"),i=u("yhfL"),o=u("4Zd5"),c=u("O92n");class b{constructor(l,n,u,t,e){this._endpointCommunicator=l,this._qrservice=n,this._route=u,this._router=t,this._toaster=e}_loadQueryResult(l){"last"===l?(this.queryResult=this._endpointCommunicator.lastQueryResult,this.title="V\xfdsledek posledn\xedho dotazu",void 0===this.queryResult&&this._router.navigate(["browse-results"])):(this.queryResult=this._qrservice.byId(l),this.title=`V\xfdsledek dotazu: ${this.queryResult.name}`)}ngOnInit(){this._loadQueryResult(this._route.snapshot.params.id),this._route.params.subscribe(l=>{this._loadQueryResult(l.id)}),this.showResult="result"===this._route.snapshot.queryParams.tab}handleCopyResult(){Object(o.a)(this.queryResult),this._toaster.success("Zpr\xe1va byla zkop\xedrov\xe1na")}}var d=u("EApP"),y=t.ob({encapsulation:0,styles:[[".auto-overflow[_ngcontent-%COMP%]{overflow-x:auto}"]],data:{}});function v(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,17,"div",[["class","col s12"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,16,"ul",[["class","tabs"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,7,"li",[["class","tab col s6"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,6,"a",[["queryParamsHandling","merge"],["style","cursor: pointer;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0,s=l.component;return"click"===n&&(e=!1!==t.Ab(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),"click"===n&&(e=0!=(s.showResult=!0)&&e),e},null,null)),t.pb(4,671744,[[2,4]],0,r.n,[r.k,r.a,a.i],{queryParams:[0,"queryParams"],queryParamsHandling:[1,"queryParamsHandling"],routerLink:[2,"routerLink"]},null),t.Db(5,{tab:0}),t.pb(6,1720320,null,2,r.m,[r.k,t.k,t.C,[2,r.l],[2,r.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,1,{links:1}),t.Gb(603979776,2,{linksWithHrefs:1}),(l()(),t.Ib(-1,null,["V\xfdsledek dotazu"])),(l()(),t.qb(10,0,null,null,7,"li",[["class","tab col s6"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,6,"a",[["queryParamsHandling","merge"],["style","cursor: pointer;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0,s=l.component;return"click"===n&&(e=!1!==t.Ab(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),"click"===n&&(e=0!=(s.showResult=!1)&&e),e},null,null)),t.pb(12,671744,[[4,4]],0,r.n,[r.k,r.a,a.i],{queryParams:[0,"queryParams"],queryParamsHandling:[1,"queryParamsHandling"],routerLink:[2,"routerLink"]},null),t.Db(13,{tab:0}),t.pb(14,1720320,null,2,r.m,[r.k,t.k,t.C,[2,r.l],[2,r.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Gb(603979776,3,{links:1}),t.Gb(603979776,4,{linksWithHrefs:1}),(l()(),t.Ib(-1,null,["Dotaz"]))],function(l,n){var u=l(n,5,0,"result");l(n,4,0,u,"merge","."),l(n,6,0,"active");var t=l(n,13,0,"source");l(n,12,0,t,"merge","."),l(n,14,0,"active")},function(l,n){l(n,3,0,t.Ab(n,4).target,t.Ab(n,4).href),l(n,11,0,t.Ab(n,12).target,t.Ab(n,12).href)})}function h(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","col s12 center-align"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Nebyl vykon\xe1n \u017e\xe1dn\xfd dotaz"]))],null,null)}function p(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,v)),t.pb(2,16384,null,0,a.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(3,0,null,null,9,"div",[["class","col s12"]],[[4,"display",null]],null,null,null,null)),(l()(),t.qb(4,0,null,null,8,"div",[["class","card"],["id","result"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,4,"div",[["class","card-action"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,1,"div",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Ib(7,null,["",""])),(l()(),t.qb(8,0,null,null,1,"button",[["class","btn btn-tiny"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.handleCopyResult()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Zkop\xedrovat do schr\xe1nky"])),(l()(),t.qb(10,0,null,null,2,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,null,1,"pre",[["class","auto-overflow"]],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.qb(13,0,null,null,6,"div",[["class","col s12"]],[[4,"display",null]],null,null,null,null)),(l()(),t.qb(14,0,null,null,5,"div",[["class","card"],["id","query"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,4,"div",[["class","card-content"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,1,"span",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["T\u011blo dotazu"])),(l()(),t.qb(18,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),t.Ib(19,null,["",""])),(l()(),t.fb(16777216,null,null,1,null,h)),t.pb(21,16384,null,0,a.l,[t.N,t.K],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,void 0!==u.queryResult),l(n,21,0,void 0===u.queryResult)},function(l,n){var u=n.component;l(n,3,0,u.showResult?"block":"none"),l(n,7,0,u.title),l(n,12,0,null==u.queryResult?null:u.queryResult.result),l(n,13,0,u.showResult?"none":"block"),l(n,19,0,null==u.queryResult?null:u.queryResult.content)})}function q(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-result-viewer",[],null,null,null,p,y)),t.pb(1,114688,null,0,b,[i.a,c.a,r.a,r.k,d.j],null,null)],function(l,n){l(n,1,0)},null)}var k=t.mb("app-result-viewer",b,q,{},{},[]),f=u("s7LF"),m=u("ADsi");class g{}u.d(n,"ResultViewerModuleNgFactory",function(){return w});var w=t.nb(e,[],function(l){return t.xb([t.yb(512,t.j,t.ab,[[8,[s.a,k]],[3,t.j],t.w]),t.yb(4608,a.n,a.m,[t.t,[2,a.v]]),t.yb(4608,f.w,f.w,[]),t.yb(4608,f.e,f.e,[]),t.yb(1073742336,a.c,a.c,[]),t.yb(1073742336,f.v,f.v,[]),t.yb(1073742336,f.k,f.k,[]),t.yb(1073742336,f.s,f.s,[]),t.yb(1073742336,m.a,m.a,[]),t.yb(1073742336,r.o,r.o,[[2,r.u],[2,r.k]]),t.yb(1073742336,g,g,[]),t.yb(1073742336,e,e,[]),t.yb(1024,r.i,function(){return[[{path:"",pathMatch:"full",redirectTo:"result-viewer/last"},{path:":id",component:b}]]},[])])})}}]);