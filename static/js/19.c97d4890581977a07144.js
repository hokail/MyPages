webpackJsonp([19],{HMRI:function(t,s){},TdNF:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=i("kyzB"),e={data:function(){return{}},computed:{mvs:function(){return"/main/mvs"==this.$route.path?this.$store.state.recommendMVs:this.$store.state.isMainSearch?this.$store.state.mvs:this.$store.state.simvs}},methods:{mvDuration:function(t){return t=String(t).slice(0,3),Object(n.a)(t)},mvCount:function(t){return t>1e4?String(t).slice(0,-4)+"万":t},toplaymv:function(t,s){this.$router.push({name:"mv",params:{mvid:t}}),this.$store.state.mvlikedCount=s}}},r={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"yuer-mvs"}},[n("ul",{attrs:{id:"list-mvs"}},t._l(t.mvs,function(s,e){return n("li",{key:e},[n("div",{attrs:{id:"mvs-mv"},on:{click:function(i){return t.toplaymv(s.id,s.likedCount)}}},[n("div",{staticClass:"mvs-cover"},[n("img",{attrs:{src:s.cover,alt:""}}),t._v(" "),n("div",{staticClass:"mvs-playcount"},[n("img",{attrs:{src:i("fAIQ"),alt:""}}),t._v(" "),n("p",[t._v(t._s(t.mvCount(s.playCount)))])])]),t._v(" "),n("div",{staticClass:"mvs-info"},[n("p",{staticClass:"mvs-mvName"},[t._v(t._s(s.name))]),t._v(" "),n("p",{staticClass:"mvs-artistName"},[t._v(t._s(t.mvDuration(s.duration))+"  by."+t._s(s.artistName))])])])])}),0)])},staticRenderFns:[]};var a=i("VU/8")(e,r,!1,function(t){i("HMRI")},null,null);s.default=a.exports},fAIQ:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEZklEQVR4Xu3dW29NQRQH8DUfQTxLvEl8Cp/CowcvnnwKl9AgSEkJoiihUVFBaBAVhKLi2tAgSEmJS0oQZMvEGkXPOXtm1jr7Nv8+yswy+//r7L3P6d4zhgJ/sixbQETzjDF3AruiuUcCxqPNnyZZlu0mouX8D6NEtNoYMxJSA207J+ANkmXZYiK636JcD8PMIGx5AiEgS4joQpv/cpxRhuRDSruCFohLsY+IVhljptKONf7otUHsSCZ5tvTHDyvdnt0AcWkOMMxEuvGGH3k3QexopvkU1hs+tDR7dBvEpTrMs2UszZj9j7ooEDuiL4yy1n946bUsEsSla2+d7QfK8+nFnX/EZYC4Ua1jmM/5w0ynRZkgNuUbjHI8ncg7H2nZIG502xjmdeowVQGxDo/4FvlAyihVAnEO+3i2PE4Rpoog1uEVo2xPDaWqIM7hGMPcSgWm6iDW4ROjrE8BpQ4gzuEcX/QvNhmmTiDOYQ3PmK9NhKkjiHW4zignmoZSVxDnsJVh3jQFpu4g1uEhoxxsAkoTQJzDXr7oP6kzTJNArMNLni076orSNBDncJRhbtcNpqkg1uEjo2yoE0qTQZzDWYa5VAeYFECsQ2Yv+AzzvcowqYA4g6uMcqqqKKmBOIfNfIv8rmowqYJYh3s8Ww5XCSVlEOdg33mxjyU9qwIMQH4rPOdT2K6yUQDyr8ARni13y4IByNzk3zPKpjJQANI+9dMMc6VIGIB0TvuHRWGYn0XAAMQv5ct80T/j1zy+FUDCstvIs+VDWDf/1gDxz8q1tAsm2M8tg+Fd83sAJD+jdi12MsyL+BJzewJEluZTRtkjKzPbGyA6SR5imAfScgCRJjjb/y2jbJGUBIgkvdZ9T/It8rWY0gCJSS2/zzeeLfZDZdAPQILiCm48aIxZGtILICFpxbVdYYyxt8hePwDxiknUaJkxZr9vBYD4JhXXDqesuNzUe+Girh5pfEHc9sZnp9oTHwxV45QVw1cnsvzUeuPLRbUo5YXw9bs8Q5UK+AOVSow6RfAnXJ0cxVXwkIM4Qp0CeAxIJ0eVKnhQTiVGeRE8SirPUK0CHrZWi1JWCK8jyPJT7Y0XdlTjjC+GV9ris1PviZc+1SONK4jXouNyU++FhQPUI40viKU14rNT7YnFZ1TjlBXD8kyy/NR6YwEztSjlhbDEnzxDlQpYBFMlRp0iWCZWJ0dxFSyknGVZp71wxQkHFMBS4zasCoBgMf6/f2tLBMF2Fa1OHyWBYEOXdufygkGw5VHeRbVAEGwKlodR0EUd2+YRUVVeacPGkjwrygbB1qv/nZ7KBMHmxC2uFWWAYPvuDhftIkGwwb3H3VNRIMO89seYx5iSbtJtkGleGac36ZQDDr6bIAM8KyYCxpN8026ATDJEf/LpRgSgDdLHp6ipiLGgi+In9XGeFUNIVZZAyAxZREStrgc9jDEjGwp62wS8QfgLRvtQwUqObpQhRhClXgJBIIyykIjmG2Nu6g0DlVwCvwA/LVSDliMfXAAAAABJRU5ErkJggg=="},kyzB:function(t,s,i){"use strict";s.a=function(t){var s=0;(t=parseInt(t))>60&&(s=parseInt(t/60),t=parseInt(t%60));var i=parseInt(t);t>0&&t<10?i="0"+parseInt(t):0==t&&(i="00");i=s>=10?parseInt(s)+":"+i:s>0&&s<10?"0"+parseInt(s)+":"+i:"00:"+i;return i}}});
//# sourceMappingURL=19.c97d4890581977a07144.js.map