(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(20),i=n.n(s),o=(n(73),n(8)),u=n(7),l=n.n(u),j=n(10),b=n(27),d=(n(75),n(109)),h=n(105),p=n(102),O=n(108),x=n(103),f=n(9),v=(n(80),function(){return Object(r.jsxs)("div",{className:"lds-grid",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}),y=n(22),m="USER_LOGIN",k="USER_LOGOUT",g="ADD_WISHLIST",w="REMOVE_WISHLIST",L="GET_WISHLIST",I="WISHLIST_LOADING",_="WISHLIST_ERROR",E="WISHLIST_RESET",S="GET_ALL_BOOK",T="GET_BOOK_BY_ID",B="ADD_BOOK",C="BOOK_RESET",A="BOOK_REQUEST",N="GET_BOOK_FORM",D="UPDATE_BOOK",G=n(12),R=n.n(G),P=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:A}),e.next=4,R.a.get("/api/books/");case 4:n=e.sent,t({type:S,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:A}),t.next=4,R.a.get("/api/books/".concat(e));case 4:r=t.sent,n({type:T,payload:r.data.book}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:A}),t.next=4,R.a.post("/api/books",e,{"Content-Type":"application/json"});case 4:r=t.sent,n({type:B,payload:r.data.result}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e,t){return function(){var n=Object(j.a)(l.a.mark((function n(r){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:A}),n.next=4,R.a.put("/api/books/".concat(e),t,{"Content-Type":"application/json"});case 4:a=n.sent,r({type:D,payload:a.data.result}),r({type:C}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},H=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:I}),e.next=4,R.a.get("/api/wishlist");case 4:n=e.sent,t({type:L,payload:n.data.book}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:I}),t.next=4,R.a.post("/api/wishlist/".concat(e));case 4:return t.next=6,R.a.get("/api/wishlist/");case 6:r=t.sent,n({type:L,payload:r.data.book}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n({type:_});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()};var Y=function(){var e=Object(f.c)((function(e){return e.booksList})),t=e.books,n=e.bookLoading,c=Object(f.c)((function(e){return e.wishList})),s=c.wishListLoading,i=c.wishListError,o=Object(a.useState)(""),u=Object(b.a)(o,2),m=u[0],k=u[1],g=Object(f.b)();Object(a.useEffect)((function(){g(P())}),[]);var w=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{g(m?W(m):P())}catch(n){}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{g(U(t))}catch(n){g({type:_})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(d.a,{className:"px-3 py-2 my-4",children:Object(r.jsx)(d.a.Body,{children:Object(r.jsx)(h.a,{onSubmit:w,children:Object(r.jsxs)(h.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(r.jsx)(h.a.Label,{children:"Search by ID"}),Object(r.jsx)(h.a.Control,{type:"text",placeholder:"Please Enter the ID",onChange:function(e){return k(e.target.value)}}),Object(r.jsx)("button",{type:"submit",onClick:w,className:"btn btn-primary my-2",children:"Submit"}),Object(r.jsx)(y.b,{to:"/form",children:Object(r.jsxs)(p.a,{variant:"success",className:"mx-4",children:["Add Book"," "]})})]})})})}),i&&Object(r.jsx)(O.a,{variant:"danger",children:"Error adding to wishlist"}),0===t.length?Object(r.jsx)(O.a,{className:"my-3",children:Object(r.jsx)("h1",{className:"text-center",children:"No Books Found"})}):Object(r.jsx)("div",{className:"my-3"}),n||s?Object(r.jsx)(v,{}):Object(r.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"ID"}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:"Author"}),Object(r.jsx)("th",{children:"ISBN"}),Object(r.jsx)("th",{children:"Publisher"}),Object(r.jsx)("th",{children:"Publication Year"}),Object(r.jsx)("th",{children:"last modified date"}),Object(r.jsx)("th",{children:"created date"}),Object(r.jsx)("th",{children:"Add to Wishlist"}),Object(r.jsx)("th",{children:"Edit"})]})}),0===t.length?Object(r.jsx)(r.Fragment,{}):Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e._id}),Object(r.jsx)("td",{children:e.title}),Object(r.jsx)("td",{children:e.author}),Object(r.jsx)("td",{children:e.isbn}),Object(r.jsx)("td",{children:e.publisher}),Object(r.jsx)("td",{children:e.publication_year}),Object(r.jsx)("td",{children:e.last_modified_date}),Object(r.jsx)("td",{children:e.created_date}),Object(r.jsx)("td",{children:Object(r.jsx)(p.a,{variant:"danger",onClick:function(){return L(e._id)},children:"Add"})}),Object(r.jsx)("td",{children:Object(r.jsx)(y.b,{to:"/form/".concat(e._id),children:Object(r.jsx)(p.a,{variant:"primary",children:"Edit"})})})]},e._id)}))})]})]})},M=n(6),J=n(104),z=function(e){var t=Object(a.useState)({title:"",publisher:"",isbn:"",author:"",publication_year:""}),n=Object(b.a)(t,2),c=n[0],s=n[1],i=Object(f.c)((function(e){return e.booksList})),o=i.book,u=i.bookLoading,O=Object(f.b)();Object(a.useEffect)((function(){var t;e.match.params.bookId&&(O((t=e.match.params.bookId,function(){var e=Object(j.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:A}),e.next=4,R.a.get("/api/books/".concat(t));case 4:r=e.sent,n({type:N,payload:r.data.book[0]}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),s({title:o.title,publisher:o.publisher,isbn:o.isbn,publication_year:o.publication_year,author:o.author}))}),[e.match.params.bookId,o.title,o.author,o.isbn,o.publication_year,o.publisher]);var x=function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e.match.params.bookId)try{O(F(e.match.params.bookId,c)),e.history.push("/")}catch(r){console.log(r.message)}else try{O(K(c)),e.history.push("/")}catch(r){console.log(r.message)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)(J.a,{children:u?Object(r.jsx)(v,{}):Object(r.jsx)(d.a,{className:"px-4 py-4",children:Object(r.jsxs)(h.a,{onSubmit:function(e){return x(e)},children:[Object(r.jsxs)(h.a.Group,{children:[Object(r.jsx)(h.a.Label,{children:"Title"}),Object(r.jsx)(h.a.Control,{type:"text",placeholder:"Enter Title",value:c.title,onChange:function(e){return s(Object(M.a)(Object(M.a)({},c),{},{title:e.target.value}))}})]}),Object(r.jsxs)(h.a.Group,{children:[Object(r.jsx)(h.a.Label,{children:"Author"}),Object(r.jsx)(h.a.Control,{type:"text",placeholder:"Enter Author",value:c.author,onChange:function(e){return s(Object(M.a)(Object(M.a)({},c),{},{author:e.target.value}))}})]}),Object(r.jsxs)(h.a.Group,{children:[Object(r.jsx)(h.a.Label,{children:"Publisher"}),Object(r.jsx)(h.a.Control,{type:"text",placeholder:"Enter Publisher",value:c.publisher,onChange:function(e){return s(Object(M.a)(Object(M.a)({},c),{},{publisher:e.target.value}))}})]}),Object(r.jsxs)(h.a.Group,{children:[Object(r.jsx)(h.a.Label,{children:"ISBN"}),Object(r.jsx)(h.a.Control,{type:"text",placeholder:"Enter ISBN",value:c.isbn,onChange:function(e){return s(Object(M.a)(Object(M.a)({},c),{},{isbn:e.target.value}))}})]}),Object(r.jsxs)(h.a.Group,{children:[Object(r.jsx)(h.a.Label,{children:"Publication Year"}),Object(r.jsx)(h.a.Control,{type:"text",placeholder:"Enter Publication Year",value:c.publication_year,onChange:function(e){return s(Object(M.a)(Object(M.a)({},c),{},{publication_year:e.target.value}))}})]}),Object(r.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})})},Q=function(){var e=Object(f.c)((function(e){return e.wishList})),t=e.wishlist,n=e.wishListLoading,c=Object(f.c)((function(e){return e.userAuth})).token,s=Object(f.b)();Object(a.useEffect)((function(){c&&s(H())}),[c,s]);var i=function(e){s(function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:I}),t.next=4,R.a.delete("/api/wishlist/".concat(e));case 4:n({type:w,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n({type:_});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)(v,{}):Object(r.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"TItle"}),Object(r.jsx)("th",{children:"Author"}),Object(r.jsx)("th",{children:"Publication Year"})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e._id}),Object(r.jsx)("td",{children:e.title}),Object(r.jsx)("td",{children:e.author}),Object(r.jsx)("td",{children:e.publication_year}),Object(r.jsx)("td",{children:Object(r.jsx)(p.a,{variant:"danger",onClick:function(){return i(e._id)},children:"Remove from wishlist"})})]},e._id)}))})]})})},V=n(107),q=n(106),X=n(61),Z=n.n(X),$=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token")){e.next=3;break}return e.abrupt("return");case 3:return R.a.defaults.headers.common.Authorization="Bearer ".concat(n),r=null,e.prev=5,e.next=8,R.a.get("/api/auth/user-info");case 8:r=e.sent,t({type:m,payload:{token:n,userId:r.data.userId,name:r.data.name}}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()},ee=n(47),te=function(){var e=Object(f.b)(),t=Object(a.useState)(0),n=Object(b.a)(t,2),c=n[0],s=n[1],i=Object(f.c)((function(e){return e.userAuth})),o=i.token,u=i.name,l=Object(f.c)((function(e){return e.wishList})).wishlist;return Object(a.useEffect)((function(){s(l.length)}),[l]),Object(r.jsx)(V.a,{bg:"dark",variant:"dark",children:Object(r.jsxs)(J.a,{children:[Object(r.jsx)(y.b,{to:"/",children:Object(r.jsx)(V.a.Brand,{children:"Books.com"})}),o?Object(r.jsxs)(q.a,{children:[Object(r.jsx)(q.a.Item,{className:"mr-3",children:Object(r.jsxs)(q.a.Link,{as:y.b,to:"/wish-list",children:[Object(r.jsx)(ee.b,{})," ",c]})}),Object(r.jsx)(V.a.Brand,{children:u}),Object(r.jsxs)(p.a,{variant:"primary",onClick:function(){e((function(e){e({type:k}),e({type:E}),localStorage.removeItem("token")}))},children:[Object(r.jsx)(ee.a,{})," Logout"]})]}):Object(r.jsx)(Z.a,{appId:"370497804255875",fields:"name,email,picture",callback:function(t){R.a.post("http://localhost:5001/api/auth/facebook-login",{accessToken:t.accessToken,userID:t.userID}).then((function(t){localStorage.setItem("token",t.data.token),e($()),e(H())}))}})]})})},ne=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.userAuth})).token;return Object(a.useEffect)((function(){e($()),t&&e(H())}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(te,{}),Object(r.jsx)(J.a,{children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",component:Y,exact:!0}),Object(r.jsx)(o.a,{path:"/form/:bookId?",component:z}),Object(r.jsx)(o.a,{path:"/wish-list",component:Q})]})})]})},re=n(24),ae=n(65),ce=n(66),se={userId:null,name:"",token:null},ie={wishlist:[],wishListLoading:!1,wishListError:!1},oe=n(67),ue={books:[],bookLoading:!0,book:{}},le=Object(re.combineReducers)({userAuth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(M.a)(Object(M.a)({},e),{},{userId:t.payload.userId,token:t.payload.token,name:t.payload.name});case k:return{userId:null,token:null,name:""};default:return Object(M.a)({},e)}},wishList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{wishlist:t.payload,wishListLoading:!1,wishListError:!1};case g:return Object(M.a)(Object(M.a)({},e),{},{wishListLoading:!1,wishListError:!1});case w:return{wishlist:e.wishlist.filter((function(e){return e._id!==t.payload})),wishListLoading:!1,wishListError:!1};case I:return Object(M.a)(Object(M.a)({},e),{},{wishListLoading:!0,wishListError:!1});case _:return Object(M.a)(Object(M.a)({},e),{},{wishListLoading:!1,wishListError:!0});case E:return Object(M.a)(Object(M.a)({},e),{},{wishlist:[],wishListLoading:!1,wishListError:!1});default:return Object(M.a)({},e)}},booksList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case T:return Object(M.a)(Object(M.a)({},e),{},{books:t.payload,bookLoading:!1});case N:return Object(M.a)(Object(M.a)({},e),{},{book:t.payload,bookLoading:!1});case B:return Object(M.a)(Object(M.a)({},e),{},{bookLoading:!1});case D:return Object(M.a)(Object(M.a)({},e),{},{books:Object(oe.a)(e.books.filter((function(e){return e._id!==t.payload._id}),t.payload)),bookLoading:!1});case C:return Object(M.a)(Object(M.a)({},e),{},{book:{}});case A:return Object(M.a)(Object(M.a)({},e),{},{bookLoading:!0});default:return Object(M.a)({},e)}}}),je=[ae.a],be=Object(re.createStore)(le,{},Object(ce.composeWithDevTools)(re.applyMiddleware.apply(void 0,je)));i.a.render(Object(r.jsx)(f.a,{store:be,children:Object(r.jsx)(y.a,{children:Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ne,{})})})}),document.getElementById("root"))},73:function(e,t,n){},80:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.dc84c0a3.chunk.js.map