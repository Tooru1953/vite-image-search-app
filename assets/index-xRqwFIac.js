(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="qVrha3S3mfjSJ1dXZsH7TRif3UzxrxOZWjKvYmbRYEA",f=document.querySelector("form"),h=document.getElementById("search-input"),l=document.querySelector(".search-results"),u=document.getElementById("show-more-btn");let d="",s=1;async function m(){d=h.value;const n=`http://api.unsplash.com/search/photos?page=${s}&query=${d}&client_id=${p}`,i=await(await fetch(n)).json();s===1&&(l.innerHTML=""),i.results.map(e=>{const t=document.createElement("div");t.classList.add("search-result");const r=document.createElement("img");r.src=e.urls.small,r.alt=e.alt_description;const c=document.createElement("a");c.href=e.links.html,c.target="_blank",c.textContent=e.alt_description,t.appendChild(r),t.appendChild(c),l.appendChild(t)}),s++,s>1&&(u.style.display="block")}f.addEventListener("submit",n=>{n.preventDefault(),s=1,m()});u.addEventListener("click",()=>{m()});
