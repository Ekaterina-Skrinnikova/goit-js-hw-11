import{S as d,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(r){const l=`https://pixabay.com/api/?key=42469409-3f592d4c2a8b117d2f80b97d4&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(l).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function y(r){return r.map(({webformatURL:o,largeImageURL:s,tags:l,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
                <a class="gallery-link" href="${s}">
                    <img class="gallery-image" src="${o}" alt="${l}"/>
                </a>
                <div class="gallery-sign">
                    <div>
                        <h2 class="gallery-title">Likes</h2>
                        <p class="gallery-text">${e}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Views</h2>
                        <p class="gallery-text">${t}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Comments</h2>
                        <p class="gallery-text">${i}</p>
                    </div>
                    <div>
                        <h2 class="gallery-title">Downloads</h2>
                        <p class="gallery-text">${u}</p>
                    </div>
                 </div>   
                </li>`).join("")}const n=document.querySelector("form");document.querySelector("button");const c=document.querySelector("span"),g=document.querySelector(".gallery"),m={captionsData:"alt",captionDelay:250},p={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"",messageSize:"25",backgroundColor:"#EF4040",balloon:!0,theme:"light",close:!0,closeOnEscape:!0,closeOnClick:!0,overlay:!0,overlayClose:!0},h=new d(".gallery a",m);n.addEventListener("submit",v);function v(r){r.preventDefault();const o=r.currentTarget.elements.query.value;o&&(c.classList.add("loader"),f(o).then(s=>{s.total===0&&a.error(p),L(s.hits)}).catch(s=>a.error(options))),b()}function L(r){g.innerHTML=y(r),c.classList.remove("loader"),h.refresh()}function b(){n.reset()}
//# sourceMappingURL=commonHelpers.js.map
