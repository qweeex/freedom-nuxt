(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{377:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:n(391),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-logo"},[e("img",{attrs:{src:n(391),alt:""}})])}],l={name:"Header",props:["lang"],data:function(){return{audioStatus:!1,showMobs:!1}},methods:{PlaySound:function(){document.querySelector("#music").play(),this.audioStatus=!0},PauseSound:function(){document.querySelector("#music").pause(),this.audioStatus=!1},showMobiles:function(){this.showMobs=!0},hiddenMobiles:function(){this.showMobs=!1}}},c=(n(403),n(51)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"header video-elem"},[r("div",{staticClass:"header-container"},[t._m(0),t._v(" "),r("div",{staticClass:"header-menu"},["ru"===t.lang?r("nav",[r("a",{staticClass:"header-menu__link",attrs:{href:"#service"}},[t._v("Услуги")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#about"}},[t._v("О нас")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#keys"}},[t._v("Кейсы")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#consulting"}},[t._v("Как мы работаем")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#contact"}},[t._v("Контакты")])]):t._e(),t._v(" "),"en"===t.lang?r("nav",[r("a",{staticClass:"header-menu__link",attrs:{href:"#service"}},[t._v("Services")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#about"}},[t._v("About us")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#keys"}},[t._v("Рrojects")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#consulting"}},[t._v("How We Work")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#contact"}},[t._v("Contact us")])]):t._e(),t._v(" "),"port"===t.lang?r("nav",[r("a",{staticClass:"header-menu__link",attrs:{href:"#service"}},[t._v("Serviços")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#about"}},[t._v("Sobre nós")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#keys"}},[t._v("Casos")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#consulting"}},[t._v("Como trabalhamos")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#contact"}},[t._v("Contatos")])]):t._e()]),t._v(" "),r("div",{staticClass:"header-music"},[!1===this.audioStatus?r("img",{attrs:{src:n(399),alt:""},on:{click:t.PlaySound}}):t._e(),t._v(" "),!0===this.audioStatus?r("img",{attrs:{src:n(400),alt:""},on:{click:t.PauseSound}}):t._e(),t._v(" "),r("audio",{attrs:{src:n(401),id:"music"}})]),t._v(" "),r("div",{staticClass:"header-lang"},[r("div",{staticClass:"header-lang__list"},[r("nuxt-link",{staticClass:"header-lang__link",class:{langActive:"ru"===t.lang},attrs:{to:"/"}},[t._v("Ru")]),t._v(" "),r("nuxt-link",{staticClass:"header-lang__link",class:{langActive:"en"===t.lang},attrs:{to:"/en"}},[t._v("En")]),t._v(" "),r("nuxt-link",{staticClass:"header-lang__link",class:{langActive:"port"===t.lang},attrs:{to:"/port"}},[t._v("Port")])],1)]),t._v(" "),r("div",{staticClass:"header-site"},[r("a",{attrs:{href:""}},["ru"===t.lang?r("span",[t._v("Перейти на")]):t._e(),t._v(" "),"en"===t.lang?r("span",[t._v("Go to")]):t._e(),t._v(" "),"port"===t.lang?r("span",[t._v("Passar para")]):t._e(),t._v(" "),r("img",{attrs:{src:n(390),alt:""}})])]),t._v(" "),r("div",{staticClass:"header-mobileMenu"},[r("img",{attrs:{src:n(402),alt:""},on:{click:function(e){return t.showMobiles()}}})])])]),t._v(" "),r("div",{staticClass:"header-mobile",class:{showMob:t.showMobs}},[r("div",{staticClass:"mobile-top"},[t._m(1),t._v(" "),r("div",{staticClass:"mobile-close"},[r("img",{attrs:{src:n(379),alt:""},on:{click:function(e){return t.hiddenMobiles()}}})])]),t._v(" "),r("div",{staticClass:"mobile-middle"},[r("div",{staticClass:"middle-menu"},["ru"===t.lang?r("nav",[r("a",{staticClass:"header-menu__link",attrs:{href:"#service"}},[t._v("Услуги")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#about"}},[t._v("О нас")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#keys"}},[t._v("Кейсы")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#consulting"}},[t._v("Как мы работаем")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#contact"}},[t._v("Контакты")])]):t._e(),t._v(" "),"en"===t.lang?r("nav",[r("a",{staticClass:"header-menu__link",attrs:{href:"#service"}},[t._v("Services")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#about"}},[t._v("About us")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#keys"}},[t._v("Рrojects")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#consulting"}},[t._v("How We Work")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#contact"}},[t._v("Contact us")])]):t._e(),t._v(" "),"port"===t.lang?r("nav",[r("a",{staticClass:"header-menu__link",attrs:{href:"#service"}},[t._v("Serviços")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#about"}},[t._v("Sobre nós")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#keys"}},[t._v("Casos")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#consulting"}},[t._v("Como trabalhamos")]),t._v(" "),r("a",{staticClass:"header-menu__link",attrs:{href:"#contact"}},[t._v("Contatos")])]):t._e()]),t._v(" "),r("div",{staticClass:"middle-site"},[r("a",{attrs:{href:""}},["ru"===t.lang?r("span",[t._v("Перейти на")]):t._e(),t._v(" "),"en"===t.lang?r("span",[t._v("Go to")]):t._e(),t._v(" "),"port"===t.lang?r("span",[t._v("Passar para")]):t._e(),t._v(" "),r("img",{attrs:{src:n(390),alt:""}})])]),t._v(" "),r("div",{staticClass:"middle-lang"},[r("div",{staticClass:"middle-lang__list"},[r("nuxt-link",{staticClass:"middle-lang__link",class:{langActive:"ru"===t.lang},attrs:{to:"/"}},[t._v("Ru")]),t._v(" "),r("nuxt-link",{staticClass:"middle-lang__link",class:{langActive:"en"===t.lang},attrs:{to:"/en"}},[t._v("En")]),t._v(" "),r("nuxt-link",{staticClass:"middle-lang__link",class:{langActive:"port"===t.lang},attrs:{to:"/port"}},[t._v("Port")])],1)])])])])}),r,!1,null,"55c558ee",null);e.default=component.exports},378:function(t,e,n){var content=n(404);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("38633526",content,!0,{sourceMap:!1})},379:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNSAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC4yNDY3IDBIMTQuNzE1NEw5Ljc5MTI3IDYuOTQxNjdMMTUgMTRIMTAuNTMxM0w3LjUxNDIzIDkuNzEyNUw0LjQ2ODY5IDE0SDBMNS4yMDg3MyA2Ljk0MTY3TDAuMjU2MTY3IDBINC43MjQ4Nkw3LjUxNDIzIDQuMkwxMC4yNDY3IDBaIiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="},390:function(t,e,n){t.exports=n.p+"img/site.bf82937.svg"},391:function(t,e,n){t.exports=n.p+"img/logo.15c7a8a.svg"},399:function(t,e,n){t.exports=n.p+"img/music.25525ec.svg"},400:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjI0LjUiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIi8+DQo8cGF0aCBkPSJNMjIuMzc1IDE2SDE4LjYyNUMxOC4wMDQ3IDE2IDE3LjUgMTYuNTA0NyAxNy41IDE3LjEyNVYzMi44NzVDMTcuNSAzMy40OTUzIDE4LjAwNDcgMzQgMTguNjI1IDM0SDIyLjM3NUMyMi45OTUzIDM0IDIzLjUgMzMuNDk1MyAyMy41IDMyLjg3NVYxNy4xMjVDMjMuNSAxNi41MDQ3IDIyLjk5NTIgMTYgMjIuMzc1IDE2WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik0zMS4zNzUgMTZIMjcuNjI1QzI3LjAwNDcgMTYgMjYuNSAxNi41MDQ3IDI2LjUgMTcuMTI1VjMyLjg3NUMyNi41IDMzLjQ5NTMgMjcuMDA0NyAzNCAyNy42MjUgMzRIMzEuMzc1QzMxLjk5NTMgMzQgMzIuNSAzMy40OTUzIDMyLjUgMzIuODc1VjE3LjEyNUMzMi41IDE2LjUwNDcgMzEuOTk1MiAxNiAzMS4zNzUgMTZaIiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="},401:function(t,e,n){t.exports=n.p+"assets/audio/track.mp3"},402:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA0MCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPg0KPHJlY3QgeT0iMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPg0KPHJlY3QgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI1IiBmaWxsPSJibGFjayIvPg0KPC9zdmc+DQo="},403:function(t,e,n){"use strict";var r=n(378);n.n(r).a},404:function(t,e,n){(e=n(26)(!1)).push([t.i,".header-container[data-v-55c558ee]{position:relative}.header[data-v-55c558ee]{transition:all .4s}",""]),t.exports=e},456:function(t,e,n){"use strict";n.r(e);var r={name:"policy",components:{Header:n(377).default}},l=n(51),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("Header"),this._v(" "),e("h1",[this._v("Policy information")])],1)}),[],!1,null,"fd17f306",null);e.default=component.exports;installComponents(component,{Header:n(377).default})}}]);