(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(0),c=n.n(r),s=n(20),i=n.n(s),o=(n(73),n(8)),u=n(7),l=n.n(u),j=n(10),b=n(27),h=(n(75),n(109)),d=n(105),p=n(102),O=n(108),x=n(103),f=n(9),v=(n(80),function(){return Object(a.jsxs)("div",{className:"lds-grid",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})}),y=n(22),m="USER_LOGIN",k="USER_LOGOUT",g="ADD_WISHLIST",w="REMOVE_WISHLIST",L="GET_WISHLIST",I="WISHLIST_LOADING",_="WISHLIST_ERROR",E="WISHLIST_RESET",S="GET_ALL_BOOK",T="GET_BOOK_BY_ID",B="ADD_BOOK",C="BOOK_RESET",A="BOOK_REQUEST",N="GET_BOOK_FORM",D="UPDATE_BOOK",G=n(12),R=n.n(G),P=function(){return function(){var t=Object(j.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:A}),t.next=4,R.a.get("http://localhost:5001/api/books/");case 4:n=t.sent,e({type:S,payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},W=function(t){return function(){var e=Object(j.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:A}),e.next=4,R.a.get("http://localhost:5001/api/books/".concat(t));case 4:a=e.sent,n({type:T,payload:a.data.book}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},K=function(t){return function(){var e=Object(j.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:A}),e.next=4,R.a.post("http://localhost:5001/api/books",t,{"Content-Type":"application/json"});case 4:a=e.sent,n({type:B,payload:a.data.result}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},F=function(t,e){return function(){var n=Object(j.a)(l.a.mark((function n(a){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:A}),n.next=4,R.a.put("http://localhost:5001/api/books/".concat(t),e,{"Content-Type":"application/json"});case 4:r=n.sent,a({type:D,payload:r.data.result}),a({type:C}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},H=function(){return function(){var t=Object(j.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:I}),t.next=4,R.a.get("http://localhost:5001/api/wishlist");case 4:n=t.sent,e({type:L,payload:n.data.book}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},U=function(t){return function(){var e=Object(j.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:I}),e.next=4,R.a.post("http://localhost:5001/api/wishlist/".concat(t));case 4:return e.next=6,R.a.get("http://localhost:5001/api/wishlist/");case 6:a=e.sent,n({type:L,payload:a.data.book}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n({type:_});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()};var Y=function(){var t=Object(f.c)((function(t){return t.booksList})),e=t.books,n=t.bookLoading,c=Object(f.c)((function(t){return t.wishList})),s=c.wishListLoading,i=c.wishListError,o=Object(r.useState)(""),u=Object(b.a)(o,2),m=u[0],k=u[1],g=Object(f.b)();Object(r.useEffect)((function(){g(P())}),[]);var w=function(){var t=Object(j.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();try{g(m?W(m):P())}catch(n){}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(j.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{g(U(e))}catch(n){g({type:_})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(h.a,{className:"px-3 py-2 my-4",children:Object(a.jsx)(h.a.Body,{children:Object(a.jsx)(d.a,{onSubmit:w,children:Object(a.jsxs)(d.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(a.jsx)(d.a.Label,{children:"Search by ID"}),Object(a.jsx)(d.a.Control,{type:"text",placeholder:"Please Enter the ID",onChange:function(t){return k(t.target.value)}}),Object(a.jsx)("button",{type:"submit",onClick:w,className:"btn btn-primary my-2",children:"Submit"}),Object(a.jsx)(y.b,{to:"/form",children:Object(a.jsxs)(p.a,{variant:"success",className:"mx-4",children:["Add Book"," "]})})]})})})}),i&&Object(a.jsx)(O.a,{variant:"danger",children:"Error adding to wishlist"}),0===e.length?Object(a.jsx)(O.a,{className:"my-3",children:Object(a.jsx)("h1",{className:"text-center",children:"No Books Found"})}):Object(a.jsx)("div",{className:"my-3"}),n||s?Object(a.jsx)(v,{}):Object(a.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"Title"}),Object(a.jsx)("th",{children:"Author"}),Object(a.jsx)("th",{children:"ISBN"}),Object(a.jsx)("th",{children:"Publisher"}),Object(a.jsx)("th",{children:"Publication Year"}),Object(a.jsx)("th",{children:"last modified date"}),Object(a.jsx)("th",{children:"created date"}),Object(a.jsx)("th",{children:"Add to Wishlist"}),Object(a.jsx)("th",{children:"Edit"})]})}),0===e.length?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("tbody",{children:e.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t._id}),Object(a.jsx)("td",{children:t.title}),Object(a.jsx)("td",{children:t.author}),Object(a.jsx)("td",{children:t.isbn}),Object(a.jsx)("td",{children:t.publisher}),Object(a.jsx)("td",{children:t.publication_year}),Object(a.jsx)("td",{children:t.last_modified_date}),Object(a.jsx)("td",{children:t.created_date}),Object(a.jsx)("td",{children:Object(a.jsx)(p.a,{variant:"danger",onClick:function(){return L(t._id)},children:"Add"})}),Object(a.jsx)("td",{children:Object(a.jsx)(y.b,{to:"/form/".concat(t._id),children:Object(a.jsx)(p.a,{variant:"primary",children:"Edit"})})})]},t._id)}))})]})]})},M=n(6),J=n(104),z=function(t){var e=Object(r.useState)({title:"",publisher:"",isbn:"",author:"",publication_year:""}),n=Object(b.a)(e,2),c=n[0],s=n[1],i=Object(f.c)((function(t){return t.booksList})),o=i.book,u=i.bookLoading,O=Object(f.b)();Object(r.useEffect)((function(){var e;t.match.params.bookId&&(O((e=t.match.params.bookId,function(){var t=Object(j.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:A}),t.next=4,R.a.get("http://localhost:5001/api/books/".concat(e));case 4:a=t.sent,n({type:N,payload:a.data.book[0]}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())),s({title:o.title,publisher:o.publisher,isbn:o.isbn,publication_year:o.publication_year,author:o.author}))}),[t.match.params.bookId,o.title,o.author,o.isbn,o.publication_year,o.publisher]);var x=function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.match.params.bookId)try{O(F(t.match.params.bookId,c)),t.history.push("/")}catch(a){console.log(a.message)}else try{O(K(c)),t.history.push("/")}catch(a){console.log(a.message)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(J.a,{children:u?Object(a.jsx)(v,{}):Object(a.jsx)(h.a,{className:"px-4 py-4",children:Object(a.jsxs)(d.a,{onSubmit:function(t){return x(t)},children:[Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a.Label,{children:"Title"}),Object(a.jsx)(d.a.Control,{type:"text",placeholder:"Enter Title",value:c.title,onChange:function(t){return s(Object(M.a)(Object(M.a)({},c),{},{title:t.target.value}))}})]}),Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a.Label,{children:"Author"}),Object(a.jsx)(d.a.Control,{type:"text",placeholder:"Enter Author",value:c.author,onChange:function(t){return s(Object(M.a)(Object(M.a)({},c),{},{author:t.target.value}))}})]}),Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a.Label,{children:"Publisher"}),Object(a.jsx)(d.a.Control,{type:"text",placeholder:"Enter Publisher",value:c.publisher,onChange:function(t){return s(Object(M.a)(Object(M.a)({},c),{},{publisher:t.target.value}))}})]}),Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a.Label,{children:"ISBN"}),Object(a.jsx)(d.a.Control,{type:"text",placeholder:"Enter ISBN",value:c.isbn,onChange:function(t){return s(Object(M.a)(Object(M.a)({},c),{},{isbn:t.target.value}))}})]}),Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a.Label,{children:"Publication Year"}),Object(a.jsx)(d.a.Control,{type:"text",placeholder:"Enter Publication Year",value:c.publication_year,onChange:function(t){return s(Object(M.a)(Object(M.a)({},c),{},{publication_year:t.target.value}))}})]}),Object(a.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})})},Q=function(){var t=Object(f.c)((function(t){return t.wishList})),e=t.wishlist,n=t.wishListLoading,c=Object(f.c)((function(t){return t.userAuth})).token,s=Object(f.b)();Object(r.useEffect)((function(){c&&s(H())}),[c,s]);var i=function(t){s(function(t){return function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:I}),e.next=4,R.a.delete("http://localhost:5001/api/wishlist/".concat(t));case 4:n({type:w,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n({type:_});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))};return Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(v,{}):Object(a.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{children:"TItle"}),Object(a.jsx)("th",{children:"Author"}),Object(a.jsx)("th",{children:"Publication Year"})]})}),Object(a.jsx)("tbody",{children:e.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t._id}),Object(a.jsx)("td",{children:t.title}),Object(a.jsx)("td",{children:t.author}),Object(a.jsx)("td",{children:t.publication_year}),Object(a.jsx)("td",{children:Object(a.jsx)(p.a,{variant:"danger",onClick:function(){return i(t._id)},children:"Remove from wishlist"})})]},t._id)}))})]})})},V=n(107),q=n(106),X=n(61),Z=n.n(X),$=function(){return function(){var t=Object(j.a)(l.a.mark((function t(e){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("token")){t.next=3;break}return t.abrupt("return");case 3:return R.a.defaults.headers.common.Authorization="Bearer ".concat(n),a=null,t.prev=5,t.next=8,R.a.get("http://localhost:5001/api/auth/user-info");case 8:a=t.sent,e({type:m,payload:{token:n,userId:a.data.userId,name:a.data.name}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}()},tt=n(47),et=function(){var t=Object(f.b)(),e=Object(r.useState)(0),n=Object(b.a)(e,2),c=n[0],s=n[1],i=Object(f.c)((function(t){return t.userAuth})),o=i.token,u=i.name,l=Object(f.c)((function(t){return t.wishList})).wishlist;return Object(r.useEffect)((function(){s(l.length)}),[l]),Object(a.jsx)(V.a,{bg:"dark",variant:"dark",children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(y.b,{to:"/",children:Object(a.jsx)(V.a.Brand,{children:"Books.com"})}),o?Object(a.jsxs)(q.a,{children:[Object(a.jsx)(q.a.Item,{className:"mr-3",children:Object(a.jsxs)(q.a.Link,{as:y.b,to:"/wish-list",children:[Object(a.jsx)(tt.b,{})," ",c]})}),Object(a.jsx)(V.a.Brand,{children:u}),Object(a.jsxs)(p.a,{variant:"primary",onClick:function(){t((function(t){t({type:k}),t({type:E}),localStorage.removeItem("token")}))},children:[Object(a.jsx)(tt.a,{})," Logout"]})]}):Object(a.jsx)(Z.a,{appId:"370497804255875",fields:"name,email,picture",callback:function(e){R.a.post("http://localhost:5001/api/auth/facebook-login",{accessToken:e.accessToken,userID:e.userID}).then((function(e){localStorage.setItem("token",e.data.token),t($()),t(H())}))}})]})})},nt=function(){var t=Object(f.b)(),e=Object(f.c)((function(t){return t.userAuth})).token;return Object(r.useEffect)((function(){t($()),e&&t(H())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(et,{}),Object(a.jsx)(J.a,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/",component:Y,exact:!0}),Object(a.jsx)(o.a,{path:"/form/:bookId?",component:z}),Object(a.jsx)(o.a,{path:"/wish-list",component:Q})]})})]})},at=n(24),rt=n(65),ct=n(66),st={userId:null,name:"",token:null},it={wishlist:[],wishListLoading:!1,wishListError:!1},ot=n(67),ut={books:[],bookLoading:!0,book:{}},lt=Object(at.combineReducers)({userAuth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(M.a)(Object(M.a)({},t),{},{userId:e.payload.userId,token:e.payload.token,name:e.payload.name});case k:return{userId:null,token:null,name:""};default:return Object(M.a)({},t)}},wishList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return{wishlist:e.payload,wishListLoading:!1,wishListError:!1};case g:return Object(M.a)(Object(M.a)({},t),{},{wishListLoading:!1,wishListError:!1});case w:return{wishlist:t.wishlist.filter((function(t){return t._id!==e.payload})),wishListLoading:!1,wishListError:!1};case I:return Object(M.a)(Object(M.a)({},t),{},{wishListLoading:!0,wishListError:!1});case _:return Object(M.a)(Object(M.a)({},t),{},{wishListLoading:!1,wishListError:!0});case E:return Object(M.a)(Object(M.a)({},t),{},{wishlist:[],wishListLoading:!1,wishListError:!1});default:return Object(M.a)({},t)}},booksList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:case T:return Object(M.a)(Object(M.a)({},t),{},{books:e.payload,bookLoading:!1});case N:return Object(M.a)(Object(M.a)({},t),{},{book:e.payload,bookLoading:!1});case B:return Object(M.a)(Object(M.a)({},t),{},{bookLoading:!1});case D:return Object(M.a)(Object(M.a)({},t),{},{books:Object(ot.a)(t.books.filter((function(t){return t._id!==e.payload._id}),e.payload)),bookLoading:!1});case C:return Object(M.a)(Object(M.a)({},t),{},{book:{}});case A:return Object(M.a)(Object(M.a)({},t),{},{bookLoading:!0});default:return Object(M.a)({},t)}}}),jt=[rt.a],bt=Object(at.createStore)(lt,{},Object(ct.composeWithDevTools)(at.applyMiddleware.apply(void 0,jt)));i.a.render(Object(a.jsx)(f.a,{store:bt,children:Object(a.jsx)(y.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(nt,{})})})}),document.getElementById("root"))},73:function(t,e,n){},80:function(t,e,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.a6c25310.chunk.js.map