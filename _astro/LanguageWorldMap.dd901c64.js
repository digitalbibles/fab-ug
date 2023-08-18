import{S as v,a as S,s as I,k as L,l as z,m as k,f as y,o as x,a2 as j,d as A,a9 as C,n as m}from"./index.32a30c8e.js";import{L as s}from"./leaflet.2cbba980.js";import"./leaflet.markercluster-src.77fb655c.js";function F(t){let o,r,c;return{c(){o=L("div"),this.h()},l(n){o=z(n,"DIV",{class:!0,style:!0}),k(o).forEach(y),this.h()},h(){x(o,"class","w-full h-full relative z-10"),j(o,"background","linear-gradient(142deg,#085078 10%,#85d8ce)")},m(n,l){A(n,o,l),r||(c=C(t[0].call(null,o)),r=!0)},p:m,i:m,o:m,d(n){n&&y(o),r=!1,c()}}}function O(t){return t==100?"#00441b":t>=90?"#006d2c":t>=80?"#238b45":t>=75?"#41ab5d":t>=60?"#74c476":t>=55?"#a1d99b":t>=40?"#c7e9c0":t>=35?"#e5f5e0":(t>=20,"#f7fcf5")}function R(t){return{fillColor:O(t?.properties?.literacy),weight:1,opacity:1,color:"#aaa",fillOpacity:.9,zIndex:10}}function T(t,o,r){let{locale:c}=o,{countries:n}=o,{languages:l}=o,{t:h}=o;const p=new Intl.NumberFormat(c);async function b(i){const w=new s.Icon({iconUrl:"/images/map-pin-green.svg",iconSize:[20,32],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[20,20]});let f=await(await fetch("/data/countries.geojson")).json();for(let e=0;e<f.features.length;e++)f.features[e].properties.literacy=n.filter(a=>f.features[e].properties.iso_a2===a.id)[0]?.lit??100;s.geoJson(f,{style:R}).eachLayer(e=>{e.on("mouseover",function(a){e.setStyle({fillOpacity:1}),e.bringToFront(),u.update(e.feature.properties)}),e.on("mouseout",function(a){e.setStyle({fillOpacity:.9}),u.update()}),e.on("click",function(a){window.location.href=`/${c}/countries/${e.feature.properties.iso_a2}`},this)}),s.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1});const _=s.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{tileSize:512,zoomOffset:-1});let d=s.map(i,{layers:[_]});d.setView([10,0],3);const g=s.markerClusterGroup();l.forEach(e=>{if(e.latitude&&e.longitude){let a=s.marker([e.latitude,e.longitude],{icon:w});a.bindPopup(`<a href="/${c}/languages/${e.iso}">${e.name}</a>`),g.addLayer(a)}}),g.addTo(d);const u=s.control({position:"bottomleft"});return u.onAdd=function(e){return this._div=s.DomUtil.create("div","info"),this.update(),this._div},u.update=function(e){const a=e?`<b>${e.name}</b><br />${p.format(e.pop_est)} people,<br />
            ${p.format(e.literacy)}% Literacy Rate,<br /> ${e.wwl_status!=0?e.wwl_status+" World Watch List Rank":""}`:"";this._div.innerHTML=`<div class="p-2 bg-white/80 shadow rounded text-stone-900 empty:hidden">${a}</div>`},u.addTo(d),{destroy:()=>{d.remove()}}}return t.$$set=i=>{"locale"in i&&r(1,c=i.locale),"countries"in i&&r(2,n=i.countries),"languages"in i&&r(3,l=i.languages),"t"in i&&r(4,h=i.t)},[b,c,n,l,h]}class J extends v{constructor(o){super(),S(this,o,T,F,I,{locale:1,countries:2,languages:3,t:4})}}export{J as default};
