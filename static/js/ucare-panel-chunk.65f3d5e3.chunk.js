"use strict";(self.webpackChunkrabota=self.webpackChunkrabota||[]).push([[315],{658:function(e,n,t){t.r(n);var r=t(789),u=t(791),l=t(540),c=t.n(l),i=t(577),o=(t(77),t(947),function(e,n){return(0,r.c)((0,r.c)({},e),n)}),a={height:"500px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},s=function(e){var n=e.hidden,t=e.value,r=(0,u.useRef)(null),l=(0,u.useRef)(null);return(0,u.useEffect)((function(){l.current=new(c().Circle)(r.current).renderer}),[]),(0,u.useEffect)((function(){l.current.setValue(t)}),[t]),u.createElement("div",{hidden:n,ref:r})},d=function(e,n){var t,l=(t={opened:!0,file:null,progress:null},(0,u.useReducer)(o,t||{})),c=(0,r.b)(l,2),a=c[0],s=c[1],d=e.customTabs,f=e.tabsCss,p=e.locale,E=e.localePluralize,A=e.localeTranslations;(0,i.a)((function(){return p&&(window.UPLOADCARE_LOCALE=p),E&&(window.UPLOADCARE_LOCALE_PLURALIZE=E),A&&(window.UPLOADCARE_LOCALE_TRANSLATIONS=A),function(){p&&delete window.UPLOADCARE_LOCALE,E&&delete window.UPLOADCARE_LOCALE_PLURALIZE,A&&delete window.UPLOADCARE_LOCALE_TRANSLATIONS}}),[p,E,A]),(0,i.u)(d,n);var L=(0,u.useRef)(null),C=(0,u.useRef)(null);return(0,u.useEffect)((function(){a.opened&&(n&&f&&"string"===typeof f&&(0===f.indexOf("https://")?n.tabsCss.addUrl(f):n.tabsCss.addStyle(f)),C.current&&C.current.reject(),C.current=n.openPanel(L.current,a.file?n.fileFrom("uploaded",a.file.uuid,e):null,e),s({file:null}),C.current.done((function(e){s({opened:!1}),e.progress((function(e){return s({progress:e.progress})})),e.done((function(e){return s({file:e})}))})))}),[n,e,s,a.opened]),(0,u.useEffect)((function(){return function(){return C.current&&C.current.reject()}}),[]),[a,s,L]};n.default=function(e){var n=d(e,c()),t=(0,r.b)(n,3),l=t[0],i=l.opened,o=l.file,f=l.progress,p=t[1],E=t[2],A=o&&!i,L=!o&&!i&&null!==f;return u.createElement("div",{id:e.id,style:a},u.createElement("div",{ref:E}),u.createElement("span",{hidden:!A},u.createElement("button",{className:"uploadcare--button uploadcare--button_primary",onClick:function(){return p({opened:!0,sourse:"natural"})}},"Open panel")),u.createElement("span",{hidden:!A},"File uuid: "),u.createElement("span",{hidden:!A},o&&o.uuid),u.createElement(s,{hidden:!L,value:f}))}}}]);
//# sourceMappingURL=ucare-panel-chunk.65f3d5e3.chunk.js.map