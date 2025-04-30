import{i as c,a as u,G as f}from"./assets/vendor-DqsV4Fdp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const m=t=>{c.error({title:"❌",message:t,position:"bottomRight",transitionIn:"bounceInRight",transitionOut:"fadeOut",progressBar:!0,theme:"light",animateInside:!0,timeout:5e3})},d="49754838-8d67938118f09bcabafca9026",g="https://pixabay.com/api/";function h(t){return u.get(g,{params:{key:d,q:t,image_type:"photo",orientation:"horizontal"}}).then(e=>e.data.hits).catch(e=>{throw console.error("❌ Failed to fetch images:",e.message),e})}const s=document.querySelector(".gallery");document.querySelector(".loader");const p={selector:".glightbox",loop:!0,openEffect:"zoom"};function y(t){return t?t.split(",").map(e=>e.trim()).filter(e=>e.length>0).slice(0,3).join(","):"Gallery image"}function b({largeImageURL:t,webformatURL:e,tags:n}){const i=y(n);return`<li class="gallery__item">
  <a class="gallery__link glightbox" href="${t}">
      <img
          class="gallery__image"
          src="${e}" 
          alt="${i}"
          loading="lazy"
      />
  </a>
  </li>`}function L(t){if(!s){console.error("Gallery element not found in the DOM.");return}const e=t.map(b).join("");s.insertAdjacentHTML("beforeend",e),f(p)}const l=document.querySelector(".form");l.addEventListener("submit",t=>{if(t.preventDefault(),!new FormData(l).get("search-text")){m("Please enter a search query.");return}});h("Dog").then(t=>{L(t)});
//# sourceMappingURL=index.js.map
