import{i as f,a as m,G as d}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const g=t=>{f.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},p="49754838-8d67938118f09bcabafca9026",h="https://pixabay.com/api/";function y(t){return m.get(h,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal"}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const l=document.querySelector(".gallery");document.querySelector(".loader");const b={selector:".glightbox",loop:!0,openEffect:"zoom"};function L(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function a(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function O({largeImageURL:t,webformatURL:e,tags:i,likes:s,views:r,comments:o,downloads:n}){const u=L(i);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${u}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
              <b>Likes</b>
              ${a(s)}
          </span>
          <span class="info-item">
              <b>Views</b>
              ${a(r)}
          </span>
          <span class="info-item">
              <b>Comments</b>
              ${a(o)}
          </span>
          <span class="info-item">
              <b>Downloads</b>
              ${a(n)}
          </span>
      </div>
  </a>
  </li>`}function x(t){if(!l){console.error("Gallery element not found in the DOM.");return}const e=t.map(O).join("");l.insertAdjacentHTML("beforeend",e),d(b)}const c=document.querySelector(".form");c.addEventListener("submit",t=>{if(t.preventDefault(),!new FormData(c).get("search-text")){g("Please enter a search query.");return}});y("Dog").then(t=>{x(t)});
//# sourceMappingURL=index.js.map
