"use strict";(self.webpackChunkAngularExamProject=self.webpackChunkAngularExamProject||[]).push([[458],{3458:(k,h,r)=>{r.r(h),r.d(h,{TherapistModule:()=>L});var m=r(9808),p=r(3853),a=r(1777),l=r(8505),d=r(9860),t=r(1223),O=r(2340),v=r(520);const g=O.N.API_URL;let _=(()=>{class e{constructor(n){this.client=n}getAll(){return this.client.get(`${g}/therapists/catalog`)}getById(n){return this.client.get(`${g}/therapists/${n}`)}getComments(n){return this.client.get(`${g}/therapists/${n}/comments`)}postComment(n,i){return this.client.post(`${g}/therapists/${n}/comments`,i)}deleteComment(n){return this.client.delete(`${g}/therapists/comments/${n}`)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(v.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=r(7341),M=r(6201),x=r(8494),C=r(3617),P=r(322);function T(e,o){if(1&e&&(t.ynx(0),t.TgZ(1,"a",4)(2,"section",5)(3,"div",6)(4,"div",7),t._UZ(5,"img",8),t.qZA()(),t.TgZ(6,"div",9)(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.ALo(11,"shorten"),t.qZA()(),t.TgZ(12,"div",10)(13,"p",11),t._uU(14),t.qZA(),t.TgZ(15,"a",12),t._uU(16,"View"),t.qZA()()()(),t.BQk()),2&e){const n=o.$implicit;t.xp6(1),t.MGl("routerLink","/therapists/",n._id,""),t.xp6(4),t.Q6J("src",n.img,t.LSH),t.xp6(3),t.AsE("",n.firstName," ",n.lastName,""),t.xp6(2),t.Oqu(t.xi3(11,6,n.description,500)),t.xp6(4),t.Oqu(n.phoneNumber)}}function b(e,o){if(1&e&&(t.TgZ(0,"div",2),t.YNc(1,T,17,9,"ng-container",3),t._UZ(2,"app-scroll-arrow"),t.qZA()),2&e){const n=t.oxw();t.Q6J("@enterAnim",void 0),t.xp6(1),t.Q6J("ngForOf",n.data)}}function Z(e,o){1&e&&t._UZ(0,"app-error")}function w(e,o){1&e&&t._UZ(0,"app-loading")}let F=(()=>{class e{constructor(n,i,s){this.therapistService=n,this.authService=i,this.router=s,this.hasErrors=!1}ngOnInit(){this.fetchData()}fetchData(){this.data=void 0,this.therapistService.getAll().pipe((0,l.b)(n=>this.data=n)).subscribe({error:n=>(0,d.Po)(n,this.router,this.authService,this.hasErrors)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_),t.Y36(u.e),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-catalog"]],decls:3,vars:3,consts:[["class","contentWrapper",4,"ngIf"],[4,"ngIf"],[1,"contentWrapper"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"therapistWrapper","animation"],[1,"imgContainer"],[1,"imgWrapper"],["alt","therapist image",3,"src"],[1,"descritpionContainer"],[1,"contactContainer"],[1,"phone-number"],[1,"view-btn"]],template:function(n,i){1&n&&(t.YNc(0,b,3,2,"div",0),t.YNc(1,Z,1,0,"app-error",1),t.YNc(2,w,1,0,"app-loading",1)),2&n&&(t.Q6J("ngIf",i.data&&!i.hasErrors),t.xp6(1),t.Q6J("ngIf",i.hasErrors),t.xp6(1),t.Q6J("ngIf",!i.data))},directives:[m.O5,m.sg,p.yS,M.P,x.q,C.N],pipes:[P.T],styles:["a[_ngcontent-%COMP%]{color:#000}.contentWrapper[_ngcontent-%COMP%]{max-width:70%;margin:30px auto}.imgWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.therapistWrapper[_ngcontent-%COMP%]{display:flex;margin-bottom:10px;background:#E4EBEB;padding:10px;transition:.3s}.therapistWrapper[_ngcontent-%COMP%]:hover{box-shadow:0 10px 27px -16px #000000bf}.descritpionContainer[_ngcontent-%COMP%]{width:70%;margin:0 15px}.contactContainer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center}.contactContainer[_ngcontent-%COMP%], .imgContainer[_ngcontent-%COMP%]{width:15%}.descritpionContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem;margin:0}.descritpionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:8px;font-size:22px;text-align:justify}.contactContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;margin:0}.contactContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.6rem;background:#FFFDF3;padding:5px 10px;border-radius:8px;transition:.3s}.contactContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#ebe8e0}@media screen and (max-width: 1750px){.contentWrapper[_ngcontent-%COMP%]{max-width:75%}.descritpionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}}@media screen and (max-width: 1450px){.contentWrapper[_ngcontent-%COMP%]{max-width:60%}.contactContainer[_ngcontent-%COMP%]   a.view-btn[_ngcontent-%COMP%]{margin:5px 0;padding:2px 80px}.therapistWrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.descritpionContainer[_ngcontent-%COMP%]{width:80%}.phone-number[_ngcontent-%COMP%]{display:none}.contactContainer[_ngcontent-%COMP%], .imgContainer[_ngcontent-%COMP%]{width:30%}}@media screen and (max-width: 950px){.contentWrapper[_ngcontent-%COMP%]{min-width:80%}.descritpionContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}@media screen and (max-width: 750px){.contentWrapper[_ngcontent-%COMP%]{min-width:90%}.contactContainer[_ngcontent-%COMP%], .imgContainer[_ngcontent-%COMP%]{width:40%}.descritpionContainer[_ngcontent-%COMP%]{width:85%}}"],data:{animation:[(0,a.X$)("enterAnim",[(0,a.eR)(":enter",[(0,a.IO)(".animation",[(0,a.oB)({opacity:0,transform:"translateX(-40px)"}),(0,a.EY)("400ms",[(0,a.jt)("800ms 0.5s ease-out",(0,a.oB)({opacity:1,transform:"translateX(0)"}))])],{optional:!0})])])]}}),e})();var c=r(2382);function S(e,o){1&e&&(t.TgZ(0,"p",16),t._uU(1," Content is required "),t.qZA())}function y(e,o){if(1&e&&(t.ynx(0),t.YNc(1,S,2,0,"p",15),t.BQk()),2&e){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",null==n.commentForm.controls.comment.errors?null:n.commentForm.controls.comment.errors.required)}}function A(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"section")(1,"form",11),t.NdJ("ngSubmit",function(){return t.CHM(n),t.oxw(2).commentHandler()}),t.TgZ(2,"label",12),t._uU(3,"Leave a comment"),t.qZA(),t._UZ(4,"textarea",13),t.YNc(5,y,2,1,"ng-container",1),t.TgZ(6,"button",14),t._uU(7,"Send"),t.qZA()()()}if(2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("formGroup",n.commentForm),t.xp6(4),t.Q6J("ngIf",n.commentForm.controls.comment.touched&&n.commentForm.controls.comment.invalid),t.xp6(1),t.Q6J("disabled",n.commentForm.invalid)}}function I(e,o){if(1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"From:"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA()()),2&e){const n=t.oxw(2).$implicit;t.xp6(4),t.Oqu(n.author.email)}}function U(e,o){if(1&e&&(t.TgZ(0,"div",19)(1,"p",20),t._uU(2),t.qZA(),t.YNc(3,I,5,1,"div",1),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw(3);t.xp6(2),t.Oqu(n.content),t.xp6(1),t.Q6J("ngIf",i.userId!==n.author._id)}}function N(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",23),t.NdJ("click",function(s){return t.CHM(n),t.oxw(5).deleteComment(s)}),t._uU(1," Delete "),t.qZA()}if(2&e){const n=t.oxw(2).$implicit;t.s9C("id",n._id)}}function Y(e,o){if(1&e&&(t.TgZ(0,"div",21)(1,"p"),t._uU(2),t.qZA(),t.YNc(3,N,2,1,"button",22),t.qZA()),2&e){const n=t.oxw().$implicit,i=t.oxw(3);t.xp6(2),t.Oqu(n.content),t.xp6(1),t.Q6J("ngIf",i.userId===n.author._id)}}function D(e,o){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,U,4,2,"div",17),t.YNc(2,Y,4,2,"div",18),t.qZA()),2&e){const n=o.$implicit,i=t.oxw(3);t.xp6(1),t.Q6J("ngIf",i.userId!==n.author._id),t.xp6(1),t.Q6J("ngIf",i.userId===n.author._id)}}function J(e,o){if(1&e&&(t.ynx(0),t.YNc(1,D,3,2,"div",10),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.comments)}}function W(e,o){1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"No comments yet."),t.qZA()())}function q(e,o){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.xp6(1),t.Oqu(n)}}function Q(e,o){if(1&e&&(t.TgZ(0,"div",2)(1,"section",3)(2,"div",4),t._UZ(3,"img",5),t.qZA()(),t.TgZ(4,"section",6)(5,"header")(6,"h3"),t._uU(7),t.qZA(),t.TgZ(8,"h5"),t._uU(9),t.qZA()(),t.TgZ(10,"div",7)(11,"section")(12,"h5"),t._uU(13,"About"),t.qZA(),t.TgZ(14,"p"),t._uU(15),t.qZA(),t.YNc(16,A,8,3,"section",1),t.TgZ(17,"section",8)(18,"h5"),t._uU(19,"Comments"),t.qZA(),t.YNc(20,J,2,1,"ng-container",1),t.YNc(21,W,3,0,"div",1),t.qZA()(),t.TgZ(22,"aside",9)(23,"h5"),t._uU(24,"Specialties"),t.qZA(),t.TgZ(25,"ul"),t.YNc(26,q,2,1,"li",10),t.qZA()()()()()),2&e){const n=t.oxw();t.Q6J("@enterAnim",void 0),t.xp6(3),t.Q6J("src",null==n.therapist?null:n.therapist.img,t.LSH),t.xp6(4),t.AsE("",null==n.therapist?null:n.therapist.firstName," ",null==n.therapist?null:n.therapist.lastName,""),t.xp6(2),t.Oqu(null==n.therapist?null:n.therapist.phoneNumber),t.xp6(6),t.Oqu(null==n.therapist?null:n.therapist.description),t.xp6(1),t.Q6J("ngIf",n.hasUser),t.xp6(4),t.Q6J("ngIf",n.comments&&n.comments.length>0),t.xp6(1),t.Q6J("ngIf",n.comments&&0==n.comments.length),t.xp6(5),t.Q6J("ngForOf",null==n.therapist?null:n.therapist.qualifications)}}function E(e,o){1&e&&t._UZ(0,"app-error")}function z(e,o){1&e&&t._UZ(0,"app-loading")}const $=[{path:"catalog",component:F,data:{title:"Therapists"}},{path:":id",component:(()=>{class e{constructor(n,i,s,f,R){this.therapistService=n,this.authService=i,this.route=s,this.formBuilder=f,this.router=R,this.commentForm=this.formBuilder.group({comment:new c.NI(null,[c.kI.required])}),this.therapist=void 0,this.hasErrors=!1}get hasUser(){return this.authService.getUser()}get userId(){var n;return null===(n=this.authService.getUser())||void 0===n?void 0:n._id}ngOnInit(){this.fetchTherapist(),this.getComments()}fetchTherapist(){this.therapistService.getById(this.route.snapshot.params.id).subscribe({next:n=>this.therapist=n,error:n=>(0,d.Po)(n,this.router,this.authService,this.hasErrors)})}commentHandler(){this.therapistService.postComment(this.route.snapshot.params.id,{content:this.commentForm.value.comment}).pipe((0,l.b)(()=>{window.location.reload()})).subscribe({error:i=>(0,d.Po)(i,this.router,this.authService,this.hasErrors)})}getComments(){this.therapistService.getComments(this.route.snapshot.params.id).subscribe({next:n=>this.comments=n,error:n=>(0,d.Po)(n,this.router,this.authService,this.hasErrors)})}deleteComment(n){const i=n.target.getAttribute("id");this.therapistService.deleteComment(i).pipe((0,l.b)(()=>{this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload",this.router.navigate(["./"],{relativeTo:this.route})})).subscribe({error:s=>(0,d.Po)(s,this.router,this.authService,this.hasErrors)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_),t.Y36(u.e),t.Y36(p.gz),t.Y36(c.qu),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-therapist-details"]],decls:3,vars:3,consts:[["class","contentWrapper",4,"ngIf"],[4,"ngIf"],[1,"contentWrapper"],[1,"leftSection","animation"],[1,"imgWrapper"],["alt","therapist image",3,"src"],[1,"rightSection","animation"],[1,"main-content"],[1,"comments"],[1,"specialties"],[4,"ngFor","ngForOf"],[1,"commentForm",3,"formGroup","ngSubmit"],["for","comment"],["name","comment","id","comment","formControlName","comment"],["type","submit",3,"disabled"],["class","error",4,"ngIf"],[1,"error"],["class","commentWrapper",4,"ngIf"],["class","authorWrapper",4,"ngIf"],[1,"commentWrapper"],[1,"commentContent"],[1,"authorWrapper"],[3,"id","click",4,"ngIf"],[3,"id","click"]],template:function(n,i){1&n&&(t.YNc(0,Q,27,10,"div",0),t.YNc(1,E,1,0,"app-error",1),t.YNc(2,z,1,0,"app-loading",1)),2&n&&(t.Q6J("ngIf",i.therapist&&!i.hasErrors),t.xp6(1),t.Q6J("ngIf",i.hasErrors),t.xp6(1),t.Q6J("ngIf",!i.therapist))},directives:[m.O5,c._Y,c.JL,c.sg,c.Fj,c.JJ,c.u,m.sg,x.q,C.N],styles:['@import"https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap";h5[_ngcontent-%COMP%]{font-family:DM Sans,sans-serif;font-size:1.9rem}.contentWrapper[_ngcontent-%COMP%]{max-width:60%;margin:auto;display:flex}.leftSection[_ngcontent-%COMP%]{width:20%;margin:20px 20px 0 0}.rightSection[_ngcontent-%COMP%]{width:80%}.imgWrapper[_ngcontent-%COMP%], .imgWrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.rightSection[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between;border-bottom:1px solid rgb(149,144,144)}header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2.6rem;margin-bottom:15px}.rightSection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex}.rightSection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;margin-bottom:15px}.rightSection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0}.rightSection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:disc;margin-left:15px;font-size:1.6rem}.specialties[_ngcontent-%COMP%]{margin-left:30px}.comments[_ngcontent-%COMP%]{background:#FFFDF3;padding:15px;border-radius:3px;margin-bottom:20px}.comments[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0 0 10px}.commentForm[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#FFFDF3;margin-bottom:15px;padding:10px 20px;border-radius:5px;align-items:center}.commentForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:70%;margin-bottom:15px;border:2px solid #ccc;border-radius:4px;background-color:#f8f8f8;font-size:16px;resize:none;outline:none}.commentForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border:2px solid rgb(157,155,155)}.commentForm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:center;font-size:22px}.commentForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100px;border:2px solid #ccc;border-radius:4px;text-transform:uppercase;font-size:16px;color:#343131}.commentForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:#FFFDF3}button[_ngcontent-%COMP%]:hover{cursor:pointer;background:#FFFDF3;border:none}.commentWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#b8caca;border-radius:2px;border:1px solid #9daeae;width:100%;margin:10px 0}.commentWrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:baseline}.commentWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px}.commentContent[_ngcontent-%COMP%]{border-bottom:1px solid #748989;padding-bottom:5px}.authorWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;background:#b8caca;border-radius:2px;border:1px solid #9daeae;width:100%;justify-content:space-between;padding:5px;align-items:center;margin:10px 0}.authorWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#343131;width:100px;border:2px solid #ccc;border-radius:4px;padding:5px;text-transform:uppercase;font-size:16px}.authorWrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 10px}p.error[_ngcontent-%COMP%]{text-align:right;border-radius:.3em;color:red;padding-top:0;margin:0}@media screen and (max-width: 1400px){.leftSection[_ngcontent-%COMP%]{width:25%}}@media screen and (max-width: 1200px){.contentWrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center;max-width:90%}.main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}h5[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}.leftSection[_ngcontent-%COMP%]{margin:5px 0}.specialties[_ngcontent-%COMP%]{margin-left:0}.rightSection[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}@media screen and (max-width: 1050px){.leftSection[_ngcontent-%COMP%]{width:35%}}@media screen and (max-width: 800px){.leftSection[_ngcontent-%COMP%]{width:40%}}@media screen and (max-width: 600px){.leftSection[_ngcontent-%COMP%]{width:50%}}'],data:{animation:[(0,a.X$)("enterAnim",[(0,a.eR)(":enter",[(0,a.IO)(".animation",[(0,a.oB)({opacity:0,transform:"translateY(-40px)"}),(0,a.EY)("450ms",[(0,a.jt)("800ms 0.5s ease-out",(0,a.oB)({opacity:1,transform:"translateY(0)"}))])],{optional:!0})])])]}}),e})(),data:{title:"Therapist"}}];let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild($)],p.Bz]}),e})();var j=r(4466);let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,B,j.m,c.UX]]}),e})()}}]);