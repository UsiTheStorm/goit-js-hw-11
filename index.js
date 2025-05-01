import{i as u,a as f,G as m}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d=r=>{u.error({title:"❌",message:r,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},p="49754838-8d67938118f09bcabafca9026",g="https://pixabay.com/api/";function h(r){return f.get(g,{params:{key:p,q:r,image_type:"photo",orientation:"horizontal"}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const a=document.querySelector(".gallery");document.querySelector(".loader");const y={selector:".glightbox",loop:!0,openEffect:"zoom"};function b(r){return r?r.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function L({largeImageURL:r,webformatURL:e,tags:s,likes:i,views:t,comments:o,downloads:n}){const c=b(s);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${r}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${c}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
              <b>Likes</b>
              ${i}
          </span>
          <span class="info-item">
              <b>Views</b>
              ${t}
          </span>
          <span class="info-item">
              <b>Comments</b>
              ${o}
          </span>
          <span class="info-item">
              <b>Downloads</b>
              ${n}
          </span>
      </div>
  </a>
  </li>`}function O(r){if(!a){console.error("Gallery element not found in the DOM.");return}const e=r.map(L).join("");a.insertAdjacentHTML("beforeend",e),m(y)}const l=document.querySelector(".form");l.addEventListener("submit",r=>{if(r.preventDefault(),!new FormData(l).get("search-text")){d("Please enter a search query.");return}});h("Dog").then(r=>{O(r)});
//# sourceMappingURL=index.js.map
