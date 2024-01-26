"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[693],{6627:(e,n,t)=>{t.d(n,{Z:()=>c});t(2791);var r=t(8596),a=t(6513),o=t(8008),i=t(7025),s=t(1523),d=t(184);const l=(0,r.Z)((e=>({navbar:{display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)",[e.breakpoints.between("999")]:{flexDirection:"row",alignItems:"center",padding:"1rem"}},menuIcon:{display:"none",[e.breakpoints.down("999")]:{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}},dashboardHead:{fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)",[e.breakpoints.down("sm")]:{fontSize:"1.5rem",marginBottom:"0.5rem"},[e.breakpoints.down("999")]:{fontSize:"1.8rem",marginBottom:0},[e.breakpoints.down("xs")]:{marginRight:"1.5rem",fontSize:"1.8rem"}},contactButton:{padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem",[e.breakpoints.down("sm")]:{fontSize:"14px",padding:"8px 14px"},[e.breakpoints.between("sm","md")]:{fontSize:"14px",padding:"7px 15px"},[e.breakpoints.down("xs")]:{display:"none"},"&:hover":{background:"#ed1c24"}},headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}))),c=e=>{let{toggleHandler:n}=e;const r=l();return(0,d.jsxs)("nav",{className:r.navbar,children:[(0,d.jsx)(i.Z,{className:r.menuIcon,onClick:n,children:(0,d.jsx)(o.Z,{fontSize:"2rem"})}),(0,d.jsx)("div",{className:r.dashboardHead,children:(0,d.jsx)(s.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,d.jsx)("img",{src:t(5756),alt:"logo",className:r.headerBottom__logo_main})})}),(0,d.jsx)(s.rU,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,d.jsx)(a.Z,{className:r.contactButton,children:"Contact Us"})})]})}},693:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(2791),a=(t(661),t(5151)),o=t(9434),i=t(6534),s=t(7487),d=t(4880),l=t(6549),c=t(9307),m=t(7407),x=t(3959),p=t(272),h=t(8302),g=t(3188),u=t(4279),f=t(6513),b=t(6627),v=t(7736),j=t(8021),w=t(8596),N=t(340),S=t(184);const k=(0,w.Z)((e=>({updateUser1:{display:"flex",alignItems:"flex-start",backgroundColor:"#f1f1f1",justifyContent:"center",width:"100%",gap:"1rem",overflow:"hidden",margin:"-1.1rem 0 0 0",padding:0},firstBox_01:{width:"20%",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block",[e.breakpoints.down("999")]:{display:"none"}},toggleBox_01:{width:"16rem",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block",zIndex:"100",position:"absolute",top:"58px",left:"17px"},secondBox_01:{width:"75%",height:"fit-content",display:"flex",flexDirection:"column",margin:"-0.5rem 0 0 0",gap:"10px",justifyContent:"center",[e.breakpoints.down("999")]:{width:"100%"}},navBar_01:{margin:"0rem"},formSection:{width:"100%",margin:"auto",borderRadius:"5px",height:"100vh",backgroundColor:"white",padding:"1rem 2rem"},form:{width:"350px",margin:"-1rem auto 0 auto",borderRadius:"5px",padding:"2rem"},avatar:{margin:" 8px auto",backgroundColor:"black"},textField:{marginBottom:e.spacing(2),"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"black",padding:"12px 14px"},"& .MuiInputLabel-root":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiInputLabel-root.Mui-focused":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"black",color:"black"},"& .MuiOutlinedInput-input":{padding:"13px 8px"},"&.Mui-focused fieldset":{borderColor:"black",color:"black",outline:"none"}}},heading:{textAlign:"center",marginBottom:e.spacing(3),color:"#414141",fontWeight:"bold"},heading_02:{textAlign:"center",textShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",color:"#414141",fontWeight:"900"},nameInput:{position:"relative","& > label":{left:".2rem"},padding:"4px 0px",fontSize:"1rem",width:"100%",marginBottom:e.spacing(5.5),height:".7rem"},loginButton:{color:"#fff",backgroundColor:"#000",border:"2px solid #000",margin:"".concat(e.spacing(3),"px 0"),marginTop:"1rem","&:disabled":{backgroundColor:"#444444",color:"#FFFFFF",borderColor:"#444444"},"&:hover":{backgroundColor:"#ed1c24",color:"#fff",borderColor:"#ed1c24"}}})));const C=function(){const e=k(),n=(0,o.I0)(),t=(0,d.k6)(),w=(0,i.VY)(),[C,Z]=(0,r.useState)(!1),{error:B,reviews:y,loading:I}=(0,o.v9)((e=>e.getAllReview)),{error:z,isDeleted:M}=(0,o.v9)((e=>e.deleteReview)),[L,R]=(0,r.useState)("");(0,r.useEffect)((()=>{24===L.length&&n((0,s.B6)(L)),B&&(w.error(B),n((0,s.b9)())),z&&(w.error(z),n((0,s.b9)())),M&&(w.success("Review Deleted Successfully"),t.push("/admin/reviews"),n({type:j.qD}))}),[n,B,w,z,M,L,t]),(0,r.useEffect)((()=>{const e=()=>{window.innerWidth>999&&C&&Z(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[C]);const _=[{field:"id",headerName:"Review ID",minWidth:230,flex:.5,headerClassName:"column-header"},{field:"user",headerName:"User",flex:.8,magin:"0 auto",headerClassName:"column-header hide-on-mobile"},{field:"comment",headerName:"Comment",minWidth:350,flex:.8},{field:"recommend",headerName:"Recommend",minWidth:100,flex:1,headerClassName:"column-header hide-on-mobile",cellClassName:e=>!0===e.getValue(e.id,"recommend")?"greenColor":"redColor"},{field:"rating",headerName:"Rating",type:"number",minWidth:200,flex:.5,headerClassName:"column-header hide-on-mobile",cellClassName:e=>e.getValue(e.id,"rating")>=3?"greenColor":"redColor"},{field:"actions",flex:1,headerName:"Actions",minWidth:230,headerClassName:"column-header1",sortable:!1,renderCell:e=>(0,S.jsx)(S.Fragment,{children:(0,S.jsx)("div",{onClick:()=>{return t=e.getValue(e.id,"id"),void n((0,s.A$)(t,L));var t},children:(0,S.jsx)(m.Z,{className:"iconbtn",style:{marginLeft:"1rem"}})})})}],D=[];return y&&y.forEach((e=>{D.push({id:e._id,user:e.name,comment:e.comment,rating:e.ratings,recommend:e.recommend?"Yes":"No"})})),(0,S.jsx)(S.Fragment,{children:I?(0,S.jsx)(c.Z,{}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(l.Z,{title:"All Reviews"}),(0,S.jsxs)("div",{className:e.updateUser1,children:[(0,S.jsx)("div",{className:"".concat(C?e.toggleBox_01:e.firstBox_01),children:(0,S.jsx)(v.Z,{})}),(0,S.jsxs)("div",{className:e.secondBox_01,children:[(0,S.jsx)("div",{className:e.navBar_01,children:(0,S.jsx)(b.Z,{toggleHandler:()=>{console.log("toggle"),Z(!C)}})}),(0,S.jsxs)("div",{className:e.formSection,children:[(0,S.jsxs)("form",{className:"".concat(e.form),onSubmit:e=>{e.preventDefault(),n((0,s.B6)(L))},children:[(0,S.jsx)(p.Z,{className:e.avatar,children:(0,S.jsx)(N.Z,{})}),(0,S.jsx)(h.Z,{variant:"h5",component:"h1",className:e.heading,children:"All Reviews"}),(0,S.jsx)(g.Z,{variant:"outlined",fullWidth:!0,className:"".concat(e.nameInput," ").concat(e.textField),label:"Product Id",required:!0,value:L,onChange:e=>R(e.target.value),InputProps:{endAdornment:(0,S.jsx)(u.Z,{position:"end",children:(0,S.jsx)(x.Z,{style:{fontSize:20,color:"#414141"}})})}}),(0,S.jsx)(f.Z,{id:"createProductBtn",type:"submit",fullWidth:!0,variant:"contained",className:e.loginButton,disabled:!!I||""===L,children:"Search"})]}),y&&y.length>0?(0,S.jsxs)("div",{className:"productListContainer",children:[(0,S.jsx)("h4",{id:"productListHeading",children:"ALL PRODUCTS"}),(0,S.jsx)(a._$r,{rows:D,columns:_,pageSize:10,autoHeight:!0,disableSelectionOnClick:!0,className:"productListTable"})]}):(0,S.jsx)("h1",{className:e.heading_02,children:"No Reviews Found"})]}),";"]})]})]})})}},7736:(e,n,t)=>{t.d(n,{Z:()=>j});t(2791);var r=t(4880),a=t(1523),o=t(220),i=t(4567),s=t(5849),d=t(7235),l=t(2338),c=t(9140),m=t(2419),x=t(1992),p=t(5776),h=t(4865),g=t(7541),u=t(8535),f=t(9434),b=t(184);const v=(0,d.Z)((e=>({sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}})));const j=function(){const e=v(),{user:n,loading:t}=(0,f.v9)((e=>e.userData)),d=(0,r.k6)();return(0,b.jsx)(b.Fragment,{children:!t&&(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:e.sidebar,children:[(0,b.jsx)(o.Z,{src:n&&n.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,b.jsx)(i.Z,{variant:"subtitle1",className:e.name,children:n&&n.name}),(0,b.jsx)(i.Z,{variant:"subtitle2",className:e.email,children:n&&n.email}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)("ul",{className:e.sideBarMenu,children:[(0,b.jsx)(a.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(l.Z,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,b.jsx)(a.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(g.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,b.jsx)(a.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(c.Z,{fontSize:"large"}),(0,b.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,b.jsx)(a.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(m.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,b.jsx)(a.rU,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(x.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,b.jsx)(a.rU,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(p.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,b.jsx)(a.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,b.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,b.jsx)(u.Z,{fontSize:"large"}),(0,b.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})})]}),(0,b.jsx)("div",{className:e.divider}),(0,b.jsxs)(s.Z,{className:e.button,onClick:function(){d.push("/account")},variant:"contained",children:[(0,b.jsx)(h.Z,{fontSize:"large",style:{marginRight:"10px"}}),"Account"]})]})})})}},4279:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(5987),o=t(2791),i=t(8182),s=t(8302),d=t(8317),l=t(9856),c=o.forwardRef((function(e,n){var t=e.children,d=e.classes,c=e.className,m=e.component,x=void 0===m?"div":m,p=e.disablePointerEvents,h=void 0!==p&&p,g=e.disableTypography,u=void 0!==g&&g,f=e.position,b=e.variant,v=(0,a.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=(0,l.Y)()||{},w=b;return b&&j.variant,j&&!w&&(w=j.variant),o.createElement(l.Z.Provider,{value:null},o.createElement(x,(0,r.Z)({className:(0,i.Z)(d.root,c,"end"===f?d.positionEnd:d.positionStart,h&&d.disablePointerEvents,j.hiddenLabel&&d.hiddenLabel,"filled"===w&&d.filled,"dense"===j.margin&&d.marginDense),ref:n},v),"string"!==typeof t||u?t:o.createElement(s.Z,{color:"textSecondary"},t)))}));const m=(0,d.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(c)},3959:(e,n,t)=>{var r=t(4836),a=t(5263);n.Z=void 0;var o=a(t(2791)),i=(0,r(t(4894)).default)(o.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");n.Z=i},340:(e,n,t)=>{var r=t(4836);n.Z=void 0;var a=r(t(5649)),o=t(184);n.Z=(0,a.default)((0,o.jsx)("path",{d:"M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"}),"StarRate")},661:()=>{}}]);
//# sourceMappingURL=693.a1e8208e.chunk.js.map