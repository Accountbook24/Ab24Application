!function(){"use strict";function e(){return e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,i,n){var r=t(e,i);if(r){var s=Object.getOwnPropertyDescriptor(r,i);return s.get?s.get.call(arguments.length<3?e:n):s.value}},e.apply(this,arguments)}function t(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,n=l(e);if(t){var r=l(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return o(this,i)}}function o(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}(self.webpackChunkaccoubtbook=self.webpackChunkaccoubtbook||[]).push([[3697],{53697:function(e,t,i){i.d(t,{l:function(){return ge}});var a=i(33018),o=i(20402),l=i(61362),c=function(e){s(i,e);var t=u(i);function i(){return r(this,i),t.apply(this,arguments)}return n(i)}(l.X),v=i(27541),g=i(82316),d=i(39478),f=i(32364),b=i(44667),p=i(34450),Z=i(18374),S=i(75075),h=i(89525),m=i(38583),I=i(3679),y=i(66496),T=i(58679),A=i(6642),q=i(3001),U=i(85895),N=i(92859),k=i(21974),x=i(65452),w=["f"],_=["Task"];function C(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"div",47),a.TgZ(1,"ul",48),a.TgZ(2,"li",49),a.TgZ(3,"button",50),a.NdJ("click",function(){return a.CHM(i),a.oxw().cancel(null)}),a._UZ(4,"i",51),a.qZA(),a.qZA(),a.TgZ(5,"li",52),a.TgZ(6,"strong"),a._uU(7,"Inventory Usage"),a.qZA(),a.TgZ(8,"small"),a._uU(9," Add/Edit"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}}function M(e,t){1&e&&(a.TgZ(0,"span"),a._uU(1,"Save"),a.qZA())}function J(e,t){1&e&&(a.TgZ(0,"span"),a._uU(1,"Update"),a.qZA())}function Q(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"div",53),a.TgZ(1,"ul",48),a.TgZ(2,"li",54),a.TgZ(3,"ion-icon",55),a.NdJ("click",function(){return a.CHM(i),a.oxw().cancel(null)}),a.qZA(),a.qZA(),a.TgZ(4,"li",56),a.TgZ(5,"strong"),a._uU(6,"Inventory Usage"),a.qZA(),a.TgZ(7,"small"),a._uU(8," Add/Edit"),a.qZA(),a.qZA(),a.TgZ(9,"li",57),a.TgZ(10,"a",58),a.NdJ("click",function(e){return a.CHM(i),a.oxw(),a.MAs(8).onSubmit(e)}),a.YNc(11,M,2,0,"span",59),a.YNc(12,J,2,0,"span",59),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){var n=a.oxw();a.xp6(11),a.Q6J("ngIf",0==n.Invusaid),a.xp6(1),a.Q6J("ngIf",n.Invusaid>0)}}function D(e,t){if(1&e&&(a.TgZ(0,"small",60),a._uU(1),a.qZA()),2&e){var i=a.oxw();a.xp6(1),a.AsE("Loaded ",i.taskService.result.length," of ",i.taskService.totalItems,"")}}function Y(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Task selection is required"),a.qZA())}function O(e,t){if(1&e&&(a.TgZ(0,"div",61),a.YNc(1,Y,2,0,"div",59),a.qZA()),2&e){a.oxw();var i=a.MAs(16);a.xp6(1),a.Q6J("ngIf",i.errors.required)}}function E(e,t){if(1&e&&(a.TgZ(0,"small",60),a._uU(1),a.qZA()),2&e){var i=a.oxw();a.xp6(1),a.AsE("Loaded ",i.subtaskService.result.length," of ",i.subtaskService.totalItems,"")}}function F(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"SubTask selection is required"),a.qZA())}function G(e,t){if(1&e&&(a.TgZ(0,"div",61),a.YNc(1,F,2,0,"div",59),a.qZA()),2&e){a.oxw();var i=a.MAs(25);a.xp6(1),a.Q6J("ngIf",i.errors.required)}}function L(e,t){if(1&e&&(a.TgZ(0,"small",60),a._uU(1),a.qZA()),2&e){var i=a.oxw();a.xp6(1),a.AsE("Loaded ",i.siteService.result.length," of ",i.siteService.totalItems,"")}}function P(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Site selection is required"),a.qZA())}function K(e,t){if(1&e&&(a.TgZ(0,"div",61),a.YNc(1,P,2,0,"div",59),a.qZA()),2&e){a.oxw();var i=a.MAs(34);a.xp6(1),a.Q6J("ngIf",i.errors.required)}}function j(e,t){if(1&e&&(a.TgZ(0,"small",60),a._uU(1),a.qZA()),2&e){var i=a.oxw();a.xp6(1),a.AsE("Loaded ",i.inventoryService.result.length," of ",i.inventoryService.totalItems,"")}}function H(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Inventory selection is required"),a.qZA())}function z(e,t){if(1&e&&(a.TgZ(0,"div",61),a.YNc(1,H,2,0,"div",59),a.qZA()),2&e){a.oxw();var i=a.MAs(43);a.xp6(1),a.Q6J("ngIf",i.errors.required)}}function R(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Utilization Date is required"),a.qZA())}function B(e,t){if(1&e&&(a.TgZ(0,"div",61),a.YNc(1,R,2,0,"div",59),a.qZA()),2&e){a.oxw();var i=a.MAs(50);a.xp6(1),a.Q6J("ngIf",i.errors.required)}}function V(e,t){if(1&e&&(a.TgZ(0,"div",61),a.TgZ(1,"div",62),a._uU(2,"Utilized Quantity should contain only numbers"),a.qZA(),a.qZA()),2&e){a.oxw();var i=a.MAs(56);a.xp6(1),a.Q6J("hidden",!i.hasError("pattern"))}}function X(e,t){1&e&&(a.TgZ(0,"div"),a._uU(1,"Narration is required"),a.qZA())}function $(e,t){if(1&e&&(a.TgZ(0,"div",61),a.YNc(1,X,2,0,"div",59),a.qZA()),2&e){a.oxw();var i=a.MAs(64);a.xp6(1),a.Q6J("ngIf",i.errors.required)}}function W(e,t){1&e&&(a.TgZ(0,"span"),a._uU(1,"Save"),a.qZA())}function ee(e,t){1&e&&(a.TgZ(0,"span"),a._uU(1,"Update"),a.qZA())}function te(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"button",67),a.TgZ(1,"span",68),a.NdJ("click",function(){return a.CHM(i),a.oxw(2).onSubmitNew()}),a._uU(2,"Save & New"),a.qZA(),a.qZA()}}function ie(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"div",63),a.TgZ(1,"button",64),a.YNc(2,W,2,0,"span",59),a.YNc(3,ee,2,0,"span",59),a.qZA(),a.YNc(4,te,3,0,"button",65),a.TgZ(5,"a",66),a.NdJ("click",function(){return a.CHM(i),a.oxw().cancel(null)}),a._uU(6,"Cancel"),a.qZA(),a.qZA()}if(2&e){var n=a.oxw();a.xp6(2),a.Q6J("ngIf",0==n.Invusaid),a.xp6(1),a.Q6J("ngIf",n.Invusaid>0),a.xp6(1),a.Q6J("ngIf",0==n.Invusaid)}}function ne(e,t){1&e&&(a.TgZ(0,"span"),a._uU(1,"Save"),a.qZA())}function re(e,t){1&e&&(a.TgZ(0,"span"),a._uU(1,"Update"),a.qZA())}function se(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"li",74),a.TgZ(1,"button",75),a.TgZ(2,"span",68),a.NdJ("click",function(){return a.CHM(i),a.oxw(2).onSubmitNew()}),a._uU(3,"Save & New"),a.qZA(),a.qZA(),a.qZA()}}function ae(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"nav",69),a.TgZ(1,"ul",70),a.TgZ(2,"li",71),a.TgZ(3,"button",72),a.YNc(4,ne,2,0,"span",59),a.YNc(5,re,2,0,"span",59),a.qZA(),a.qZA(),a.YNc(6,se,4,0,"li",73),a.TgZ(7,"li",74),a.TgZ(8,"a",66),a.NdJ("click",function(){return a.CHM(i),a.oxw().cancel(null)}),a._uU(9,"Cancel"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){var n=a.oxw();a.xp6(4),a.Q6J("ngIf",0==n.Invusaid),a.xp6(1),a.Q6J("ngIf",n.Invusaid>0),a.xp6(1),a.Q6J("ngIf",0==n.Invusaid)}}function ue(e,t){if(1&e&&(a.TgZ(0,"tr",83),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.TgZ(5,"td"),a._uU(6),a.qZA(),a.TgZ(7,"td"),a._uU(8),a.qZA(),a._UZ(9,"dateformatter",84),a.TgZ(10,"td"),a._uU(11),a.qZA(),a.TgZ(12,"td"),a._uU(13),a.qZA(),a.qZA()),2&e){var i=t.$implicit;a.xp6(2),a.Oqu(i.TNm),a.xp6(2),a.Oqu(i.SbTNm),a.xp6(2),a.Oqu(i.StNm),a.xp6(2),a.Oqu(i.InvNm),a.xp6(1),a.s9C("dateValue",i.UsDt),a.xp6(2),a.Oqu(i.UsdQty),a.xp6(2),a.Oqu(i.Narr)}}function oe(e,t){if(1&e&&(a.TgZ(0,"table",78),a.TgZ(1,"thead",79),a.TgZ(2,"tr"),a.TgZ(3,"th"),a._uU(4,"Task"),a.qZA(),a.TgZ(5,"th"),a._uU(6,"Sub Task"),a.qZA(),a.TgZ(7,"th"),a._uU(8,"Site"),a.qZA(),a.TgZ(9,"th"),a._uU(10,"Inventory"),a.qZA(),a.TgZ(11,"th"),a._uU(12,"Utilization Date"),a.qZA(),a.TgZ(13,"th"),a._uU(14,"Utilization QTY"),a.qZA(),a.TgZ(15,"th"),a._uU(16,"Narration"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"tbody",80,81),a.YNc(19,ue,14,7,"tr",82),a.qZA(),a.qZA()),2&e){var i=a.oxw(2);a.xp6(19),a.Q6J("ngForOf",i.tableInv)}}function le(e,t){if(1&e&&(a.TgZ(0,"div",76),a.YNc(1,oe,20,1,"table",77),a.qZA()),2&e){var i=a.oxw();a.xp6(1),a.Q6J("ngIf",i.inventoryService.result.length>0)}}var ce,ve=function(e){return{"is-invalid":e}},ge=(ce=function(){function e(t,i,n,s,u,o,g,d,f){var b=this;r(this,e),this.invusageService=t,this.siteService=i,this._config=n,this.router=s,this.route=u,this.inventoryService=o,this.taskService=g,this.subtaskService=d,this.filterService=f,this.redirectOnCancelonInventoryusage=!0,this.redirectActiononInventoryusage=new a.vpe,this.Invusaid=0,this.tableInv=[],this.currentScrollPosition=0,this._sgId=0,this.isList=!1,this.isSaveNew=!1,this.httpfunction=new v.r,this.invusageService.singleresult=new c,this.invusageService.singleresult.St=l.D.Active,this.invusageService.singleresult.InvI=null,this.invusageService.singleresult.TI=null,this.invusageService.singleresult.SbTI=null,this.invusageService.singleresult.StI=null,this.invusageService.singleresult.UsDt=new Date,this.invusageService.singleresult.CI=this.invusageService.getCompanyId,this.route.params.subscribe(function(e){null!=e.id&&""!=e.id&&"add"!=e.id.toLowerCase()&&(b.Invusaid=e.id)})}return n(e,[{key:"InvusageId",set:function(e){this.Invusaid=e}},{key:"ngOnInit",value:function(){var e=this;0==this.inventoryService.result.length&&this.inventoryService.GetAlldata(),this.inventoryService.isGetSubscribe=!0,this.Invsubscription=this.inventoryService.resultObs.subscribe(function(e){}),0==this.taskService.result.length&&this.taskService.GetAlldata(),this.taskService.isGetSubscribe=!0,this.Tsksubscription=this.taskService.resultObs.subscribe(function(e){}),0==this.subtaskService.result.length&&this.subtaskService.GetAlldata(),this.subtaskService.isGetSubscribe=!0,this.SubTsksubscription=this.subtaskService.resultObs.subscribe(function(e){}),setTimeout(function(){e.filterService.hideQuickFilter(!1,!1,"Inventory Usage(Add/Edit)",!1)},200),this.siteService.isGetSubscribe=!0,0==this.siteService.result.length?this.siteService.GetAllsitesforsInventoryUsage():this.Invenotryusagegetbyid(),this.subscription=this.siteService.resultObs.subscribe(function(t){e.Invenotryusagegetbyid()}),this.httpfunction.IsMobileview()||(document.onkeydown=this.OnKeydown.bind(this))}},{key:"OnKeydown",value:function(e){var t=this,i=e.key||e.keyCode;("Backspace"==i&&e.altKey||"Escape"==i)&&(setTimeout(function(){document.scrollingElement.scrollTop=t.currentScrollPosition},150),this.cancel(""))}},{key:"Invenotryusagegetbyid",value:function(){var e=this;0!=this.Invusaid&&this.invusageService.getById(this.Invusaid).subscribe(function(t){e.invusageService.singleresult=t,e.taskService.singleresult=e.taskService.result.filter(function(e){return e.UIDN==t.TI})[0],e.subtaskService.singleresult=e.subtaskService.result.filter(function(e){return e.UIDN==t.SbTI})[0],e.siteService.singleresult=e.siteService.result.filter(function(e){return e.UIDN==t.StI})[0],e.inventoryService.singleresult=e.inventoryService.result.filter(function(e){return e.UIDN==t.InvI})[0]})}},{key:"ngOnDestroy",value:function(){null!=this.subscription&&this.subscription.unsubscribe(),null!=this.Tsksubscription&&this.Tsksubscription.unsubscribe(),null!=this.SubTsksubscription&&this.SubTsksubscription.unsubscribe(),null!=this.Invsubscription&&this.Invsubscription.unsubscribe(),this.invusageService.resetService()}},{key:"onSubmitNew",value:function(){this.isSaveNew=!0,this.form.onSubmit()}},{key:"onSubmit",value:function(){var e=this;this.form.valid&&(this.invusageService.singleresult.TI=this.taskService.singleresult.UIDN,this.invusageService.singleresult.TNm=this.taskService.singleresult.TN,this.invusageService.singleresult.SbTI=this.subtaskService.singleresult.UIDN,this.invusageService.singleresult.SbTNm=this.subtaskService.singleresult.SN,this.invusageService.singleresult.InvI=this.inventoryService.singleresult.UIDN,this.invusageService.singleresult.InvNm=this.inventoryService.singleresult.InvN,this.invusageService.singleresult.StI=this.siteService.singleresult.UIDN,this.invusageService.singleresult.StNm=this.siteService.singleresult.SN,this.invusageService.singleresult.CI=this.invusageService.getCompanyData.UIDN,null==this.invusageService.singleresult.UIDN||0==this.invusageService.singleresult.UIDN||null==this.invusageService.singleresult.UIDN?this.invusageService.add(this.invusageService.singleresult).subscribe(function(t){if(e.redirectOnCancelonInventoryusage){if(e.isSaveNew){e.isSaveNew=!1;var i=new c;i.TNm=e.invusageService.singleresult.TNm,i.SbTNm=e.invusageService.singleresult.SbTNm,i.InvI=e.invusageService.singleresult.InvI,i.InvNm=e.inventoryService.singleresult.InvN,i.StI=e.siteService.singleresult.UIDN,i.StNm=e.siteService.singleresult.SN,i.UsDt=e.invusageService.singleresult.UsDt,i.UsdQty=e.invusageService.singleresult.UsdQty,i.Narr=e.invusageService.singleresult.Narr;var n=e.tableInv.concat(i);e.tableInv=n}else e.router.navigate(["/inventory/inventoryusage"]);e.resetDataforAddInventoryUsage()}else e.redirectActiononInventoryusage.emit(t)},function(e){}):this.invusageService.edit(this.invusageService.singleresult).subscribe(function(t){e.redirectOnCancelonInventoryusage?(e.router.navigate(["/inventory/inventoryusage"]),e.resetDataforAddInventoryUsage()):e.redirectActiononInventoryusage.emit(t)},function(e){}))}},{key:"cancel",value:function(e){var t=this;setTimeout(function(){t.filterService.changeFilter(!0,!0,"Inventory Usage List")},200),this.form.resetForm(),this.redirectOnCancelonInventoryusage?this.router.navigate(["/inventory/inventoryusage"]):(this.redirectActiononInventoryusage.emit(e),this.resetDataforAddInventoryUsage())}},{key:"resetDataforAddInventoryUsage",value:function(){this.invusageService.singleresult=new c,this.invusageService.singleresult.St=l.D.Active,this.invusageService.singleresult.CI=this.inventoryService.getCompanyId,this.invusageService.singleresult.UsDt=new Date}},{key:"onUtilizationdateSelect",value:function(e){this.invusageService.singleresult.UsDt=e}},{key:"onImageAdd",value:function(e){this.invusageService.singleresult.UpI=[];for(var t=0;t<e.length;t++){var i=new g.Q;i.InventoryUsage_PK_Id=e[t].InventoryUsage_PK_Id,i.PK_Id=e[t].PK_Id,i.name=e[t].name,i.operationType=e[t].operationType,i.ModifiedDate=new Date,i.CreatedDate=new Date,i.CreatedBy=this.invusageService.userid,i.modifyBy=this.invusageService.userid,i.CompanyId=this.invusageService.getCompanyId,i.SignupId=this.invusageService.getSignupId,i.FileLength=null==e[t].PK_Id?e[t].size:e[t].FileLength,i.src=e[t].src,this.invusageService.singleresult.UpI.push(i)}}}]),e}(),ce.\u0275fac=function(e){return new(e||ce)(a.Y36(o.K),a.Y36(d.P),a.Y36(f.De),a.Y36(b.F0),a.Y36(b.gz),a.Y36(p.V),a.Y36(Z.M),a.Y36(S.I),a.Y36(h.i))},ce.\u0275cmp=a.Xpm({type:ce,selectors:[["app-inventory-usage-addedit"]],viewQuery:function(e,t){var i;1&e&&(a.Gf(w,5),a.Gf(_,5,a.SBq)),2&e&&(a.iGM(i=a.CRH())&&(t.form=i.first),a.iGM(i=a.CRH())&&(t.inputName=i.first))},inputs:{redirectOnCancelonInventoryusage:"redirectOnCancelonInventoryusage",InvusageId:"InvusageId"},outputs:{redirectActiononInventoryusage:"redirectActiononInventoryusage"},features:[a._Bn([o.K])],decls:82,vars:54,consts:[[1,"nopadding"],[1,"card"],["id","formHeader"],["class","customsearch",4,"ngIf"],["class","customsearchM",4,"ngIf"],[1,"mt-1","mb-5"],["name","form","novalidate","",3,"ScrollToInvalid","ngSubmit"],["f","ngForm"],[1,"row"],[1,"md-form","form-group","col-sm-6","col-md-3"],["for","Task"],[1,"ml-1","text-danger","font-weight-bold","h5"],["autofocus","","name","Task","required","","bindLabel","TN","placeholder","Select Task",3,"virtualScroll","ngClass","items","ngModel","loading","scrollToEnd","ngModelChange"],["Task","ngModel"],["ng-header-tmp",""],["class","invalid-feedback",4,"ngIf"],["for","SubTask"],["name","SubTask","required","","bindLabel","SN","placeholder","Select Sub Task",3,"virtualScroll","ngClass","items","ngModel","loading","scrollToEnd","ngModelChange"],["SubTask","ngModel"],["for","Site"],["name","Site","required","","bindLabel","SN","placeholder","Select Site",3,"virtualScroll","ngClass","items","ngModel","loading","scrollToEnd","ngModelChange"],["Site","ngModel"],["for","Inventory"],["name","Inventory","required","","bindLabel","InvN","placeholder","Select Inventory",3,"virtualScroll","ngClass","items","ngModel","loading","scrollToEnd","ngModelChange"],["Inventory","ngModel"],["for","Utidate"],["type","text","appDatepicker","","autocomplete","none","required","","name","Utidate","id","Utidate",1,"form-control","readonlydate",3,"ngClass","startDate","selected"],["Utidate",""],["for","UtiQuantity"],["type","number","pattern","^[0-9]\\d*(\\.\\d+)?$","maxlength","10","placeholder","Enter Utilized Quantity","name","UtiQuantity","id","UtiQuantity",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["UtiQuantity","ngModel"],["for","Narration"],["placeholder","Enter Narration","required","","name","Narration","id","Narration",1,"md-textarea","form-control",3,"ngClass","ngModel","ngModelChange"],["Narration","ngModel"],[1,"form-group","col-sm-6","col-md-3"],["for","InvUsageStatus"],[1,"c-switch","c-switch-pill","c-switch-primary"],["type","checkbox",1,"c-switch-input",3,"checked","change"],[1,"c-switch-slider"],[1,"form-group","col-md-6","col-sm-12"],["for","CompanyLogo"],[1,"input-group"],["maxFiles","5","maxSize","5","fileExt","JPG, GIF, PNG, PDF, JPEG",3,"filelist","uploadStatus"],["fileUpload",""],["class","col-sm-12 text-right","id","formbtnContainer",4,"ngIf"],["class","navbar fixed-bottom navbar-expand-sm navbar-dark bg-light",4,"ngIf"],["class","table-responsive","id","tableContainer",4,"ngIf"],[1,"customsearch"],[1,"c-header-nav"],[1,"mx-2","mb-3"],[1,"c-header-back",3,"click"],[1,"c-icon","c-icon-lg","cil-arrow-left"],[1,"text-center","mb-3","LeftLi"],[1,"customsearchM"],[1,"mr-1","mb-2","ml-2"],["name","chevron-back",3,"click"],[1,"mb-3","mt-1","LeftLi","text-center"],[1,"text-center","mb-2","float-right"],[1,"btn","btn-link",3,"click"],[4,"ngIf"],[1,"form-text","text-muted"],[1,"invalid-feedback"],[3,"hidden"],["id","formbtnContainer",1,"col-sm-12","text-right"],["type","submit",1,"btn","btn-primary","mr-2"],["type","button","class","btn btn-primary mr-2",4,"ngIf"],["href","javascript:void(0)",1,"btn","btn-dark",3,"click"],["type","button",1,"btn","btn-primary","mr-2"],[3,"click"],[1,"navbar","fixed-bottom","navbar-expand-sm","navbar-dark","bg-light"],[1,"navbar-nav","ml-auto","d-flex","flex-row-reverse","bd-highlight"],[1,"nav-item","active"],["type","submit",1,"btn","btn-primary"],["class","nav-item active mr-2",4,"ngIf"],[1,"nav-item","active","mr-2"],["type","button",1,"btn","btn-primary"],["id","tableContainer",1,"table-responsive"],["class","table table-bordered table-striped text-center",3,"fxHeader",4,"ngIf"],[1,"table","table-bordered","table-striped","text-center",3,"fxHeader"],["id","tableContainerHead"],["id","tableContainerbody"],["container",""],["autofocus","",4,"ngFor","ngForOf"],["autofocus",""],[3,"dateValue"]],template:function(e,t){if(1&e){var i=a.EpF();a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.YNc(3,C,10,0,"div",3),a.YNc(4,Q,13,2,"div",4),a.qZA(),a.TgZ(5,"div",5),a.TgZ(6,"div",5),a.TgZ(7,"form",6,7),a.NdJ("ngSubmit",function(){return a.CHM(i),a.MAs(8).form.valid&&t.onSubmit()}),a.TgZ(9,"div",8),a.TgZ(10,"div",9),a.TgZ(11,"label",10),a._uU(12,"Task"),a.TgZ(13,"span",11),a._uU(14,"*"),a.qZA(),a.qZA(),a.TgZ(15,"ng-select",12,13),a.NdJ("scrollToEnd",function(){return t.taskService.ScrollDown()})("ngModelChange",function(e){return t.taskService.singleresult=e}),a.YNc(17,D,2,2,"ng-template",14),a.qZA(),a.YNc(18,O,2,1,"div",15),a.qZA(),a.TgZ(19,"div",9),a.TgZ(20,"label",16),a._uU(21,"Sub Task"),a.TgZ(22,"span",11),a._uU(23,"*"),a.qZA(),a.qZA(),a.TgZ(24,"ng-select",17,18),a.NdJ("scrollToEnd",function(){return t.subtaskService.ScrollDown()})("ngModelChange",function(e){return t.subtaskService.singleresult=e}),a.YNc(26,E,2,2,"ng-template",14),a.qZA(),a.YNc(27,G,2,1,"div",15),a.qZA(),a.TgZ(28,"div",9),a.TgZ(29,"label",19),a._uU(30,"Site"),a.TgZ(31,"span",11),a._uU(32,"*"),a.qZA(),a.qZA(),a.TgZ(33,"ng-select",20,21),a.NdJ("scrollToEnd",function(){return t.siteService.ScrollDown()})("ngModelChange",function(e){return t.siteService.singleresult=e}),a.YNc(35,L,2,2,"ng-template",14),a.qZA(),a.YNc(36,K,2,1,"div",15),a.qZA(),a.TgZ(37,"div",9),a.TgZ(38,"label",22),a._uU(39,"Inventory"),a.TgZ(40,"span",11),a._uU(41,"*"),a.qZA(),a.qZA(),a.TgZ(42,"ng-select",23,24),a.NdJ("scrollToEnd",function(){return t.inventoryService.ScrollDown()})("ngModelChange",function(e){return t.inventoryService.singleresult=e}),a.YNc(44,j,2,2,"ng-template",14),a.qZA(),a.YNc(45,z,2,1,"div",15),a.qZA(),a.TgZ(46,"div",9),a.TgZ(47,"label",25),a._uU(48,"Utilization Date"),a.qZA(),a.TgZ(49,"input",26,27),a.NdJ("selected",function(e){return t.onUtilizationdateSelect(e)}),a.qZA(),a.YNc(51,B,2,1,"div",15),a.qZA(),a.TgZ(52,"div",9),a.TgZ(53,"label",28),a._uU(54,"Utilized Quantity"),a.qZA(),a.TgZ(55,"input",29,30),a.NdJ("ngModelChange",function(e){return t.invusageService.singleresult.UsdQty=e}),a.qZA(),a.YNc(57,V,3,1,"div",15),a.qZA(),a.TgZ(58,"div",9),a.TgZ(59,"label",31),a._uU(60,"Narration"),a.TgZ(61,"span",11),a._uU(62,"*"),a.qZA(),a.qZA(),a.TgZ(63,"textarea",32,33),a.NdJ("ngModelChange",function(e){return t.invusageService.singleresult.Narr=e}),a.qZA(),a.YNc(65,$,2,1,"div",15),a.qZA(),a.TgZ(66,"div",34),a.TgZ(67,"label",35),a._uU(68,"Is Active"),a.qZA(),a.TgZ(69,"div"),a.TgZ(70,"label",36),a.TgZ(71,"input",37),a.NdJ("change",function(){return t.invusageService.singleresult.St=!("1"==t.invusageService.singleresult.St||1==t.invusageService.singleresult.St)}),a.qZA(),a._UZ(72,"span",38),a.qZA(),a.qZA(),a.qZA(),a.TgZ(73,"div",39),a.TgZ(74,"strong",40),a._uU(75,"Image"),a.qZA(),a.TgZ(76,"div",41),a.TgZ(77,"app-file-upload",42,43),a.NdJ("uploadStatus",function(e){return t.onImageAdd(e)}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(79,ie,7,3,"div",44),a.YNc(80,ae,10,3,"nav",45),a.qZA(),a.qZA(),a.qZA(),a.YNc(81,le,2,1,"div",46),a.qZA(),a.qZA()}if(2&e){var n=a.MAs(8),r=a.MAs(16),s=a.MAs(25),u=a.MAs(34),o=a.MAs(43),l=a.MAs(50),c=a.MAs(56),v=a.MAs(64);a.xp6(3),a.Q6J("ngIf",!t.invusageService.IsMobileview),a.xp6(1),a.Q6J("ngIf",t.invusageService.IsMobileview),a.xp6(11),a.Q6J("virtualScroll",!0)("ngClass",a.VKq(40,ve,n.submitted&&r.invalid))("items",t.taskService.result)("ngModel",t.taskService.singleresult)("loading",t.taskService.loading),a.xp6(3),a.Q6J("ngIf",n.submitted&&r.invalid),a.xp6(6),a.Q6J("virtualScroll",!0)("ngClass",a.VKq(42,ve,n.submitted&&s.invalid))("items",t.subtaskService.result)("ngModel",t.subtaskService.singleresult)("loading",t.subtaskService.loading),a.xp6(3),a.Q6J("ngIf",n.submitted&&s.invalid),a.xp6(6),a.Q6J("virtualScroll",!0)("ngClass",a.VKq(44,ve,n.submitted&&u.invalid))("items",t.siteService.result)("ngModel",t.siteService.singleresult)("loading",t.siteService.loading),a.xp6(3),a.Q6J("ngIf",n.submitted&&u.invalid),a.xp6(6),a.Q6J("virtualScroll",!0)("ngClass",a.VKq(46,ve,n.submitted&&o.invalid))("items",t.inventoryService.result)("ngModel",t.inventoryService.singleresult)("loading",t.inventoryService.loading),a.xp6(3),a.Q6J("ngIf",n.submitted&&o.invalid),a.xp6(4),a.Q6J("ngClass",a.VKq(48,ve,n.submitted&&l.invalid))("startDate",t.invusageService.singleresult.UsDt),a.xp6(2),a.Q6J("ngIf",n.submitted&&l.invalid),a.xp6(4),a.Q6J("ngClass",a.VKq(50,ve,n.submitted&&c.invalid))("ngModel",t.invusageService.singleresult.UsdQty),a.xp6(2),a.Q6J("ngIf",n.submitted&&c.invalid),a.xp6(6),a.Q6J("ngClass",a.VKq(52,ve,n.submitted&&v.invalid))("ngModel",t.invusageService.singleresult.Narr),a.xp6(2),a.Q6J("ngIf",n.submitted&&v.invalid),a.xp6(6),a.Q6J("checked",1==t.invusageService.singleresult.St),a.xp6(6),a.Q6J("filelist",t.invusageService.singleresult.UpI),a.xp6(2),a.Q6J("ngIf",!t.invusageService.isMobile),a.xp6(1),a.Q6J("ngIf",t.invusageService.isMobile),a.xp6(1),a.Q6J("ngIf",t.tableInv.length>0)}},directives:[m.O5,I._Y,I.JL,I.F,y.u,T.w9,I.Q7,m.mk,I.JJ,I.On,A.x,T.A3,q.q,I.wV,I.Fj,I.c5,I.nD,U.Y,N.gu,k.n,m.sg,x.a],styles:[".form-group[_ngcontent-%COMP%]{margin-bottom:0}"]}),ce)},20402:function(t,i,a){a.d(i,{K:function(){return Z}});var o,c=a(32364),v=a(13795),g=a(33018),d=a(91841),f=a(89401),b=a(86845),p=a(44667),Z=((o=function(t){s(a,t);var i=u(a);function a(e,t,n,s,u){var o;return r(this,a),(o=i.call(this,e,t,n,s,u))._config=t,o.router=u,o}return n(a,[{key:"GetAlldata",value:function(){e(l(a.prototype),"GetAlldata",this).call(this,c.CS.InventoryUsage_GetAll)}},{key:"getById",value:function(t){return e(l(a.prototype),"getById",this).call(this,t,c.CS.InventoryUsage_GetById)}},{key:"edit",value:function(t){return e(l(a.prototype),"edit",this).call(this,t,c.CS.InventoryUsage_Update)}},{key:"add",value:function(t){return e(l(a.prototype),"add",this).call(this,t,c.CS.InventoryUsage_Add)}},{key:"delete",value:function(t){e(l(a.prototype),"delete",this).call(this,t,c.CS.InventoryUsage_Delete)}}]),a}(v.a)).\u0275fac=function(e){return new(e||o)(g.LFG(d.eN),g.LFG(c.De),g.LFG(f.Rq),g.LFG(b.D),g.LFG(p.F0))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac}),o)}}])}();