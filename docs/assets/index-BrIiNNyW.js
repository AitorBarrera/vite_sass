(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",o=>{s("inicio")});const l=document.querySelectorAll(".botonInicio");l.forEach(o=>{o.addEventListener("click",r=>{s("inicio")})});const d=document.querySelectorAll(".botonContacto");d.forEach(o=>{o.addEventListener("click",r=>{s("contacto")})});function s(o){document.querySelectorAll(".pagina").forEach(n=>{n.classList.remove("d-block"),n.classList.add("d-none")});const c=document.querySelector(`#${o}`);c.classList.remove("d-none"),c.classList.add("d-block")}
