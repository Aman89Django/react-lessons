(this["webpackJsonpreact-lessons"]=this["webpackJsonpreact-lessons"]||[]).push([[3],{316:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",messages:"Dialogs_messages__1w_Up"}},317:function(e,a,t){e.exports={dialog:"DialogItem_dialog__3tDA2"}},318:function(e,a,t){e.exports={message:"Message_message__1MOXo"}},323:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(131),r=t(316),o=t.n(r),c=t(317),l=t.n(c),m=t(15),u=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:l.a.dialog},s.a.createElement(m.c,{to:a},s.a.createElement("img",{src:e.img,alt:"avatar"})," ",e.name," "))},g=t(318),d=t.n(g),f=function(e){return s.a.createElement("div",{className:d.a.message},e.message)},b=t(132),p=t(133),E=t(69),h=t(70),_=Object(h.a)(50),v=Object(p.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(b.a,{component:E.b,validate:[h.b,_],name:"newMessageBody",placeholder:"Enter your message"}),s.a.createElement("button",null,"Send")))})),O=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(u,{name:e.name,key:e.id,id:e.id,img:e.img})})),n=a.messages.map((function(e){return s.a.createElement(f,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},t),s.a.createElement("div",{className:o.a.messages},s.a.createElement("div",null,n),s.a.createElement(v,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},j=t(16),A=t(37),y=t(38),M=t(40),N=t(39),k=t(10),w=t(8);a.default=Object(w.d)((function(e){var a=function(a){Object(M.a)(n,a);var t=Object(N.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(k.a,{to:"/login"})}}]),n}(s.a.Component);return Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}))(a)}),Object(j.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})))(O)}}]);
//# sourceMappingURL=3.11078d05.chunk.js.map