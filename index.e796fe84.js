!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),d=document.getElementById("body"),c=document.getElementById("link1"),i=document.getElementById("link2"),l=document.getElementById("link3"),o=document.getElementById("link4"),a=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};function r(){d.classList.toggle("locked")}t.addEventListener("click",a),n.addEventListener("click",a),c.addEventListener("click",a),i.addEventListener("click",a),l.addEventListener("click",a),o.addEventListener("click",a),t.addEventListener("click",r),n.addEventListener("click",r),c.addEventListener("click",r),i.addEventListener("click",r),l.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.e796fe84.js.map
