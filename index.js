import{i as u,a as f,G as g}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const d=t=>{u.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},p="49754838-8d67938118f09bcabafca9026",h="https://pixabay.com/api/";function y(t){return f.get(h,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal"}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const c=document.querySelector(".gallery");document.querySelector(".loader");const b={selector:".glightbox",loop:!0,openEffect:"zoom"};function w(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function a(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function L({largeImageURL:t,webformatURL:e,tags:n,likes:s,views:r,comments:o,downloads:i}){const m=w(n);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${m}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="./img/icons/like.svg" width="16" alt="Like icon">
              ${a(s)}
          </span>
          <span class="info-item">
          <img src="./img/icons/view.svg" width="16" alt="View icon">
              ${a(r)}
          </span>
          <span class="info-item">
          <img src="./img/icons/comment.svg" width="16" alt="Comment icon">
              ${a(o)}
          </span>
          <span class="info-item">
          <img src="./img/icons/download.svg" width="16" alt="Download icon">
              ${a(i)}
          </span>
      </div>
  </a>
  </li>`}function v(t){if(!c){console.error("Gallery element not found in the DOM.");return}const e=t.map(L).join("");c.insertAdjacentHTML("beforeend",e),g(b)}const l=document.querySelector(".form");l.addEventListener("submit",t=>{if(t.preventDefault(),!new FormData(l).get("search-text")){d("Please enter a search query.");return}});y("Dog").then(t=>{v(t)});
//# sourceMappingURL=index.js.map
