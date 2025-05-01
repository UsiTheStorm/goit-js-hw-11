import{i as h,a as y,G as b}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const L=t=>{h.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},f=t=>{h.warning({title:"",message:t,backgroundColor:"#a2dbe4",position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},w="49754838-8d67938118f09bcabafca9026",O="https://pixabay.com/api/";function v(t){return y.get(O,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal"}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const u=document.querySelector(".gallery"),l=document.querySelector(".loader"),a=document.querySelector('button[type="submit"]'),x={selector:".glightbox",loop:!0,openEffect:"zoom"};function I(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function c(t){const e=Number(t);return Number.isNaN(e)?"N/A":e>=1e6?`${Math.floor(e/1e6)}M`:e>=1e3?`${Math.floor(e/1e3)}K`:String(e)}function d(t){t?(a.disabled=!0,a.textContent="Loading"):(a.disabled=!1,a.textContent="Search")}function N({largeImageURL:t,webformatURL:e,tags:i,likes:n,views:r,comments:o,downloads:s}){const p=I(i);return`<li class="gallery-item">
  <a class="gallery-link glightbox" href="${t}">
      <img
          class="gallery-image"
          src="${e}" 
          alt="${p}"
          loading="lazy"
      />
      <div class="info">
          <span class="info-item">
          <img src="./img/icons/like.svg" width="16" alt="Like icon">
              ${c(n)}
          </span>
          <span class="info-item">
          <img src="./img/icons/view.svg" width="16" alt="View icon">
              ${c(r)}
          </span>
          <span class="info-item">
          <img src="./img/icons/comment.svg" width="16" alt="Comment icon">
              ${c(o)}
          </span>
          <span class="info-item">
          <img src="./img/icons/download.svg" width="16" alt="Download icon">
              ${c(s)}
          </span>
      </div>
  </a>
  </li>`}function M(t){if(!u){console.error("Gallery element not found in the DOM.");return}const e=t.map(N).join("");u.insertAdjacentHTML("beforeend",e),b(x)}function S(){u.innerHTML=""}function $(){if(!l){console.error("Loader element not found in the DOM.");return}l.classList.remove("is-hidden")}function m(){if(!l){console.error("Loader element not found in the DOM.");return}l.classList.add("is-hidden")}const g=document.querySelector(".form");g.addEventListener("submit",t=>{t.preventDefault();const i=new FormData(g).get("search-text").trim();if(!i){f("Please enter a search query.");return}t.target.reset(),d(!0),S(),$(),v(i).then(n=>{if(!n.length){f("No images found for the search query.");return}m(),M(n)}).catch(n=>{L("An error occurred while fetching images."),console.error("Error fetching images:",n)}).finally(()=>{d(!1),m()})});
//# sourceMappingURL=index.js.map
