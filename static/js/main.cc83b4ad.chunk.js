(window["webpackJsonpgithub-repos"]=window["webpackJsonpgithub-repos"]||[]).push([[0],{72:function(e,t,r){e.exports=r(99)},99:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(21),c=r.n(o),i=r(25),s=r(28),l=r(57),m=r(58),u=r.n(m),p=r(27),h=r(24),g=r(134),f=r(65),d=r(118),b=r(37),y=Object(f.a)({palette:{primary:{main:d.a[500]},secondary:{main:b.a[700]}}}),E=r(59),O=r.n(E),v="fetchUserRepositories",j="fetchUserRepositoriesSuccess",w="fetchUserRepositoriesError",T=function(e){return{type:"changeColorTheme",colorTheme:e}},x=function(e){return function(t){t(function(e){return{type:v,username:e}}(e)),O.a.get("https://api.github.com/users/".concat(e,"/repos?type=all")).then((function(e){return t((r=e.data,{type:j,repositories:r}));var r})).catch((function(e){return t(function(e){return{type:w,error:e}}(e))}))}},N=r(23),k=r(62),P=r(38),C="dark",S="light",D=Object(k.a)((function(e){return{grid:function(e){return{background:e.colorTheme===C?"linear-gradient(to right, #000000, #434343)":"linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",minHeight:"100vh"}},text:function(t){return{textAlign:"center",color:t.colorTheme===C?e.palette.background.paper:e.palette.text.primary}},error:{color:P.a[500],paddingTop:e.spacing(1)}}})),R=r(125),A=r(126),I=r(135),B=r(101),M=r(127),U=r(6),z=Object(k.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},link:{fontSize:"1.1rem",color:e.palette.background.paper,textDecoration:"none",flexGrow:1},divider:{height:28,margin:e.spacing(0,2),background:e.palette.background.paper}}})),F=r(119),_=r(120),G=r(121),H=r(122),L=r(137),W=r(123);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var V=function(e){var t=e.colorTheme,r=e.changeColorTheme,o=z({colorTheme:t}),c=Object(a.useState)({darkTheme:!1}),i=Object(N.a)(c,2),s=i[0],l=i[1];return n.a.createElement("div",{className:o.root},n.a.createElement(F.a,{position:"static",className:o.appBar,color:s.darkTheme?"secondary":"primary"},n.a.createElement(_.a,null,n.a.createElement(G.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"open drawer"},n.a.createElement("i",{className:"material-icons"},"menu")),n.a.createElement(p.b,{to:"/",className:o.link},"GitHub Repos"),n.a.createElement(H.a,{control:n.a.createElement(L.a,{checked:s.darkTheme,onChange:function(e){var t=e.target.checked?C:S;l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(r,!0).forEach((function(t){Object(U.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s,{darkTheme:e.target.checked})),r(t)},value:"darkTheme",color:"default"}),label:"Toggle Theme"}),n.a.createElement(W.a,{className:o.divider,orientation:"vertical"}),n.a.createElement(G.a,{edge:"start",color:"inherit","aria-label":"menu",mx:2},n.a.createElement("i",{className:"material-icons"},"notifications")),n.a.createElement(G.a,{edge:"start",color:"inherit","aria-label":"menu",mx:2},n.a.createElement("i",{className:"material-icons"},"account_circle")),n.a.createElement(G.a,{edge:"start",color:"inherit","aria-label":"menu",mx:2},n.a.createElement("i",{className:"material-icons"},"help")))))},q=Object(k.a)((function(e){return{searchBar:{padding:e.spacing(.5),display:"flex",alignItems:"center",width:"100%",marginTop:e.spacing(2)},form:{display:"flex",justifyContent:"space-between",width:"100%"},searchIcon:{margin:e.spacing(0,1),color:e.palette.text.secondary},textInput:{marginLeft:e.spacing(1),flex:1},searchButton:function(t){return{padding:e.spacing(1,4),background:t.colorTheme===C?b.a[500]:d.a[500],color:e.palette.primary.contrastText,"&:hover":{background:t.colorTheme===C?b.a[700]:d.a[700]}}}}})),K=r(66),Q=r(136),X=r(124),Y=function(e){var t=e.handleReposSearch,r=e.colorTheme,o=q({colorTheme:r}),c=Object(a.useState)(""),i=Object(N.a)(c,2),s=i[0],l=i[1];return n.a.createElement(K.a,{className:o.searchBar},n.a.createElement("i",{className:"material-icons ".concat(o.searchIcon)},"search"),n.a.createElement("form",{className:o.form,onSubmit:function(e){return t(e,s)}},n.a.createElement(Q.a,{className:o.textInput,placeholder:"Username",inputProps:{"aria-label":"search github"},value:s,onChange:function(e){return l(e.target.value)}}),n.a.createElement(X.a,{type:"submit",variant:"contained",className:o.searchButton},"Search")))},Z=function(e){var t=e.getUserRepositories,r=e.changeColorTheme,o=e.colorTheme,c=e.history,i=D({colorTheme:o}),s=Object(a.useState)(""),l=Object(N.a)(s,2),m=l[0],u=l[1];return n.a.createElement(R.a,{className:i.grid},n.a.createElement(V,{changeColorTheme:r,colorTheme:o}),n.a.createElement(A.a,null),n.a.createElement(I.a,{py:6},n.a.createElement(B.a,{variant:"h1",className:i.text},"GitHub Repos")),n.a.createElement(M.a,{maxWidth:"sm"},n.a.createElement(B.a,{variant:"subtitle1",className:i.text},"Type a GitHub username and we'll show you a list of repositories this user owns or contribute to with the most stars."),n.a.createElement(Y,{handleReposSearch:function(e,r){e.preventDefault(),r?(t(r),c.push("/repos/".concat(r))):u("Please type a username and then hit search")},colorTheme:o}),m&&n.a.createElement(B.a,{variant:"subtitle2",className:i.error},m)))},$=Object(s.b)((function(e){return{colorTheme:e.ui.colorTheme}}),(function(e){return{getUserRepositories:function(t){e(x(t))},changeColorTheme:function(t){e(T(t))}}}))(Z),ee=Object(k.a)((function(e){return{repos:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},box:{display:"flex",justifyContent:"center",alignItems:"center"},avatar:{width:50,height:50,marginRight:e.spacing(1)},grid:function(e){return{background:e.colorTheme===C?"linear-gradient(to right, #000000, #434343)":"linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",minHeight:"100vh"}},text:function(t){return{textAlign:"center",color:t.colorTheme===C?e.palette.background.paper:e.palette.text.primary}},progressContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:20},progress:function(e){return{color:e.colorTheme===C?b.a[700]:d.a[700]}},button:function(t){return{margin:"2rem auto",padding:e.spacing(1,3),background:t.colorTheme===C?b.a[500]:d.a[400],color:e.palette.primary.contrastText,"&:hover":{background:t.colorTheme===C?b.a[700]:d.a[600]}}},error:{color:P.a[500],textAlign:"center"},link:{color:e.palette.background.paper,textDecoration:"none"}}})),te=r(132),re=r(133),ae=r(129),ne=r(130),oe=r(131),ce=r(128),ie=Object(k.a)((function(e){return{repoCard:{width:350,margin:e.spacing(2,0),display:"flex",flexDirection:"column",justifyContent:"space-between"},cardActions:{padding:e.spacing(2),display:"flex",justifyContent:"space-between",alignItems:"center"},starIcon:{verticalAlign:"bottom",color:ce.a[500]},text:{fontSize:14}}})),se=function(e){var t=e.name,r=e.description,a=e.link,o=e.stars,c=e.isOwner,i=ie();return n.a.createElement(ae.a,{className:i.repoCard},n.a.createElement(ne.a,null,n.a.createElement(B.a,{variant:"h5",component:"h2",gutterBottom:!0},t),n.a.createElement(B.a,{variant:"subtitle2",component:"span",mr:1},c?"Owner":"Member"),n.a.createElement(B.a,{variant:"body2",component:"p",color:"textSecondary",mt:1},r)),n.a.createElement(oe.a,{className:i.cardActions},n.a.createElement(X.a,{href:a,size:"small",variant:"outlined"},"View Repository"),n.a.createElement(I.a,{component:"span"},n.a.createElement("i",{className:"material-icons ".concat(i.starIcon)},"star"),n.a.createElement(B.a,{component:"span",className:i.text},o))))},le=function(e){var t=e.changeColorTheme,r=e.colorTheme,a=e.avatarUrl,o=e.username,c=e.repositories,i=e.isFetching,s=e.errorMessage,l=ee({colorTheme:r});return n.a.createElement(R.a,{className:l.grid},n.a.createElement(V,{changeColorTheme:t,colorTheme:r}),n.a.createElement(A.a,null),n.a.createElement(I.a,{py:2,className:l.box},i&&n.a.createElement("div",{className:l.progressContainer},n.a.createElement(te.a,{className:l.progress})),a&&n.a.createElement(re.a,{alt:o,src:a,className:l.avatar}),o&&n.a.createElement(B.a,{variant:"h5",className:l.text},o," repositories")),s&&n.a.createElement(B.a,{variant:"h5",className:l.error},s),!c.length&&!i&&!s&&n.a.createElement(B.a,{variant:"h2",className:l.text},"There is nothing here."),n.a.createElement(I.a,{className:l.box},n.a.createElement(X.a,{variant:"contained",className:l.button},n.a.createElement(p.b,{to:"/",className:l.link},"Search Again ?"))),n.a.createElement(M.a,{maxWidth:"lg",className:l.repos},c.map((function(e){return n.a.createElement(se,{key:e.id,name:e.name,description:e.description,link:e.html_url,stars:e.stargazers_count,isOwner:o===e.owner.login.toLowerCase()})}))))},me=Object(s.b)((function(e){return{username:e.data.username,avatarUrl:e.data.userAvatar,repositories:e.data.repositories,isFetching:e.ui.isFetching,errorMessage:e.ui.errorMessage,colorTheme:e.ui.colorTheme}}),(function(e){return{changeColorTheme:function(t){e(T(t))}}}))(le),ue=function(){return n.a.createElement(p.a,null,n.a.createElement(g.a,{theme:y},n.a.createElement(h.a,{exact:!0,path:"/",component:$}),n.a.createElement(h.a,{path:"/repos/:username",component:me})))};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(r,!0).forEach((function(t){Object(U.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ge={isFetching:!1,errorMessage:"",colorTheme:S},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return he({},e,{errorMessage:"",isFetching:!0});case j:return he({},e,{errorMessage:"",isFetching:!1});case w:return he({},e,{isFetching:!1,errorMessage:t.error.message});case"changeColorTheme":return he({},e,{colorTheme:t.colorTheme});default:return e}};function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(r,!0).forEach((function(t){Object(U.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ye={username:"",userAvatar:"",repositories:[]},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{username:t.username.toLowerCase(),userAvatar:"",repositories:[]};case j:var r="",a=t.repositories.length&&t.repositories.find((function(t){return t.owner.login.toLowerCase()===e.username}));return a&&(r=a.owner.avatar_url),be({},e,{repositories:t.repositories.sort((function(e,t){return t.stargazers_count-e.stargazers_count})).filter((function(e,t){return t<10})),userAvatar:r});default:return e}},Oe=Object(i.c)({ui:fe,data:Ee}),ve=Object(i.d)(Oe,Object(i.a)(l.a,u.a));c.a.render(n.a.createElement(s.a,{store:ve},n.a.createElement(ue,null)),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.cc83b4ad.chunk.js.map