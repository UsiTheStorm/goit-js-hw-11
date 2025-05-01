import{i as d,a as h,G as p}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const y=t=>{d.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},u=t=>{d.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},b="49754838-8d67938118f09bcabafca9026",L="https://pixabay.com/api/";function w(t){return h.get(L,{params:{key:b,q:t,image_type:"photo",orientation:"horizontal"}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),O={selector:".glightbox",loop:!0,openEffect:"zoom"};function v(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function a(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function I({largeImageURL:t,webformatURL:e,tags:i,likes:n,views:r,comments:o,downloads:s}){const g=v(i);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${g}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="./img/icons/like.svg" width="16" alt="Like icon">
              ${a(n)}
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
              ${a(s)}
          </span>
      </div>
  </a>
  </li>`}function N(t){if(!l){console.error("Gallery element not found in the DOM.");return}const e=t.map(I).join("");l.insertAdjacentHTML("beforeend",e),p(O)}function x(){l.innerHTML=""}function M(){if(!c){console.error("Loader element not found in the DOM.");return}c.classList.remove("is-hidden")}function f(){if(!c){console.error("Loader element not found in the DOM.");return}c.classList.add("is-hidden")}const m=document.querySelector(".form");m.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(m).get("search-text").trim();if(!i){u("Please enter a search query.");return}t.target.reset(),x(),M(),w(i).then(n=>{if(!n.length){u("No images found for the search query.");return}f(),N(n)}).catch(n=>{y("An error occurred while fetching images."),console.error("Error fetching images:",n)}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map
