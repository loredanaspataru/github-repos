(window["webpackJsonpgithub-repos"]=window["webpackJsonpgithub-repos"]||[]).push([[0],{72:function(e,t,a){e.exports=a(99)},99:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(21),c=a.n(o),i=a(25),s=a(28),l=a(57),m=a(58),u=a.n(m),p=a(27),h=a(24),g=a(134),d=a(65),f=a(118),b=a(37),E=Object(d.a)({palette:{primary:{main:f.a[500]},secondary:{main:b.a[700]}}}),y=a(59),v=a.n(y),O="fetchUserRepositories",w="fetchUserRepositoriesSuccess",T="fetchUserRepositoriesError",j=function(e){return{type:"changeColorTheme",colorTheme:e}},x=function(e){return function(t){t(function(e){return{type:O,username:e}}(e)),v.a.get("https://api.github.com/users/".concat(e,"/repos?type=all")).then((function(e){return t((a=e.data,{type:w,repositories:a}));var a})).catch((function(e){return t(function(e){return{type:T,error:e}}(e))}))}},N=a(23),k=a(62),C=a(38),P="dark",S="light",D=Object(k.a)((function(e){return{grid:function(e){return{background:e.colorTheme===P?"linear-gradient(to right, #000000, #434343)":"linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",minHeight:"100vh"}},text:function(t){return{textAlign:"center",color:t.colorTheme===P?e.palette.background.paper:e.palette.text.primary}},error:{color:C.a[500],paddingTop:e.spacing(1)}}})),R=a(125),A=a(126),I=a(135),B=a(101),M=a(127),U=Object(k.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},link:{fontSize:"1.1rem",color:e.palette.background.paper,textDecoration:"none",flexGrow:1},divider:{height:28,margin:e.spacing(0,2),background:e.palette.background.paper}}})),z=a(119),F=a(120),_=a(121),G=a(122),H=a(137),L=a(123),W=function(e){var t=e.colorTheme,a=e.changeColorTheme,o=U({colorTheme:t}),c=Object(r.useState)(!1),i=Object(N.a)(c,2),s=i[0],l=i[1];return n.a.createElement("div",{className:o.root},n.a.createElement(z.a,{position:"static",className:o.appBar,color:t===P?"secondary":"primary"},n.a.createElement(F.a,null,n.a.createElement(_.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"open drawer"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement(p.b,{to:"/",className:o.link},"GitHub Repos"),n.a.createElement(G.a,{control:n.a.createElement(H.a,{checked:s,onChange:function(e){var t=e.target.checked?P:S;l(e.target.checked),a(t)},value:"darkTheme",color:"default"}),label:"Toggle Theme"}),n.a.createElement(L.a,{className:o.divider,orientation:"vertical"}),n.a.createElement(_.a,{edge:"start",color:"inherit","aria-label":"menu",mx:2},n.a.createElement("i",{className:"material-icons"},"notifications")),n.a.createElement(_.a,{edge:"start",color:"inherit","aria-label":"menu",mx:2},n.a.createElement("i",{className:"material-icons"},"account_circle")),n.a.createElement(_.a,{edge:"start",color:"inherit","aria-label":"menu",mx:2},n.a.createElement("i",{className:"material-icons"},"help")))))},J=Object(k.a)((function(e){return{searchBar:{padding:e.spacing(.5),display:"flex",alignItems:"center",width:"100%",marginTop:e.spacing(2)},form:{display:"flex",justifyContent:"space-between",width:"100%"},searchIcon:{margin:e.spacing(0,1),color:e.palette.text.secondary},textInput:{marginLeft:e.spacing(1),flex:1},searchButton:{padding:e.spacing(1,4)}}})),V=a(66),q=a(136),K=a(124),Q=function(e){var t=e.handleReposSearch,a=e.colorTheme,o=J({colorTheme:a}),c=Object(r.useState)(""),i=Object(N.a)(c,2),s=i[0],l=i[1];return n.a.createElement(V.a,{className:o.searchBar},n.a.createElement("i",{className:"material-icons ".concat(o.searchIcon)},"search"),n.a.createElement("form",{className:o.form,onSubmit:function(e){return t(e,s)}},n.a.createElement(q.a,{className:o.textInput,placeholder:"Username",inputProps:{"aria-label":"search github"},value:s,onChange:function(e){return l(e.target.value)}}),n.a.createElement(K.a,{type:"submit",variant:"contained",className:o.searchButton,color:a===P?"secondary":"primary"},"Search")))},X=function(e){var t=e.getUserRepositories,a=e.changeColorTheme,o=e.colorTheme,c=e.history,i=D({colorTheme:o}),s=Object(r.useState)(""),l=Object(N.a)(s,2),m=l[0],u=l[1];return n.a.createElement(R.a,{className:i.grid},n.a.createElement(W,{changeColorTheme:a,colorTheme:o}),n.a.createElement(A.a,null),n.a.createElement(I.a,{py:6},n.a.createElement(B.a,{variant:"h1",className:i.text},"GitHub Repos")),n.a.createElement(M.a,{maxWidth:"sm"},n.a.createElement(B.a,{variant:"subtitle1",className:i.text},"Type a GitHub username and we'll show you a list of repositories this user owns or contribute to with the most stars."),n.a.createElement(Q,{handleReposSearch:function(e,a){e.preventDefault(),a?(t(a),c.push("/repos/".concat(a))):u("Please type a username and then hit search")},colorTheme:o}),m&&n.a.createElement(B.a,{variant:"subtitle2",className:i.error},m)))},Y=Object(s.b)((function(e){return{colorTheme:e.ui.colorTheme}}),(function(e){return{getUserRepositories:function(t){e(x(t))},changeColorTheme:function(t){e(j(t))}}}))(X),Z=Object(k.a)((function(e){return{repos:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},box:{display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:50,height:50,marginRight:e.spacing(1)},grid:function(e){return{background:e.colorTheme===P?"linear-gradient(to right, #000000, #434343)":"linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",minHeight:"100vh"}},text:function(t){return{textAlign:"center",color:t.colorTheme===P?e.palette.background.paper:e.palette.text.primary}},progressContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:20},progress:function(e){return{color:e.colorTheme===P?b.a[700]:f.a[700]}},button:function(t){return{margin:"2rem auto",padding:e.spacing(1,3),background:t.colorTheme===P?b.a[500]:f.a[400],color:e.palette.primary.contrastText,"&:hover":{background:t.colorTheme===P?b.a[700]:f.a[600]}}},error:{color:C.a[500],textAlign:"center"},link:{color:e.palette.background.paper,textDecoration:"none"}}})),$=a(132),ee=a(133),te=a(129),ae=a(130),re=a(131),ne=a(128),oe=Object(k.a)((function(e){return{repoCard:{width:350,margin:e.spacing(2,0),display:"flex",flexDirection:"column",justifyContent:"space-between"},cardActions:{padding:e.spacing(2),display:"flex",justifyContent:"space-between",alignItems:"center"},starIcon:{verticalAlign:"bottom",color:ne.a[500]},text:{fontSize:14}}})),ce=function(e){var t=e.name,a=e.description,r=e.link,o=e.stars,c=e.isOwner,i=oe();return n.a.createElement(te.a,{className:i.repoCard},n.a.createElement(ae.a,null,n.a.createElement(B.a,{variant:"h5",component:"h2",gutterBottom:!0},t),n.a.createElement(B.a,{variant:"subtitle2",component:"span",mr:1},c?"Owner":"Member"),n.a.createElement(B.a,{variant:"body2",component:"p",color:"textSecondary",mt:1},a)),n.a.createElement(re.a,{className:i.cardActions},n.a.createElement(K.a,{href:r,size:"small",variant:"outlined"},"View Repository"),n.a.createElement(I.a,{component:"span"},n.a.createElement("i",{className:"material-icons ".concat(i.starIcon)},"star"),n.a.createElement(B.a,{component:"span",className:i.text},o))))},ie=function(e){var t=e.changeColorTheme,a=e.colorTheme,r=e.avatarUrl,o=e.username,c=e.repositories,i=e.isFetching,s=e.errorMessage,l=Z({colorTheme:a});return n.a.createElement(R.a,{className:l.grid},n.a.createElement(W,{changeColorTheme:t,colorTheme:a}),n.a.createElement(A.a,null),n.a.createElement(I.a,{py:2,className:l.box},i&&n.a.createElement("div",{className:l.progressContainer},n.a.createElement($.a,{className:l.progress})),r&&n.a.createElement(ee.a,{alt:o,src:r,className:l.avatar}),o&&n.a.createElement(B.a,{variant:"h5",className:l.text},o," repositories")),s&&n.a.createElement(B.a,{variant:"h5",className:l.error},s),!c.length&&!i&&!s&&n.a.createElement(B.a,{variant:"h2",className:l.text},"There is nothing here."),n.a.createElement(I.a,{className:l.box},n.a.createElement(K.a,{variant:"contained",className:l.button},n.a.createElement(p.b,{to:"/",className:l.link},"Search Again ?"))),n.a.createElement(M.a,{maxWidth:"lg",className:l.repos},c.map((function(e){return n.a.createElement(ce,{key:e.id,name:e.name,description:e.description,link:e.html_url,stars:e.stargazers_count,isOwner:o===e.owner.login.toLowerCase()})}))))},se=Object(s.b)((function(e){return{username:e.data.username,avatarUrl:e.data.userAvatar,repositories:e.data.repositories,isFetching:e.ui.isFetching,errorMessage:e.ui.errorMessage,colorTheme:e.ui.colorTheme}}),(function(e){return{changeColorTheme:function(t){e(j(t))}}}))(ie),le=function(){return n.a.createElement(p.a,null,n.a.createElement(g.a,{theme:E},n.a.createElement(h.a,{exact:!0,path:"/",component:Y}),n.a.createElement(h.a,{path:"/repos/:username",component:se})))},me=a(7);function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(a,!0).forEach((function(t){Object(me.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var he={isFetching:!1,errorMessage:"",colorTheme:S},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return pe({},e,{errorMessage:"",isFetching:!0});case w:return pe({},e,{errorMessage:"",isFetching:!1});case T:return pe({},e,{isFetching:!1,errorMessage:t.error.message});case"changeColorTheme":return pe({},e,{colorTheme:t.colorTheme});default:return e}};function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach((function(t){Object(me.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be={username:"",userAvatar:"",repositories:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{username:t.username.toLowerCase(),userAvatar:"",repositories:[]};case w:var a="",r=t.repositories.length&&t.repositories.find((function(t){return t.owner.login.toLowerCase()===e.username}));return r&&(a=r.owner.avatar_url),fe({},e,{repositories:t.repositories.sort((function(e,t){return t.stargazers_count-e.stargazers_count})).filter((function(e,t){return t<10})),userAvatar:a});default:return e}},ye=Object(i.c)({ui:ge,data:Ee}),ve=Object(i.d)(ye,Object(i.a)(l.a,u.a));c.a.render(n.a.createElement(s.a,{store:ve},n.a.createElement(le,null)),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.ae2bc523.chunk.js.map