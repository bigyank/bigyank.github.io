!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var r=document.querySelector(".status-action"),n=document.querySelector(".game-grid"),a=r.querySelector(".status"),o=n.querySelectorAll(".game-cell"),i=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],u=!0,c="×";function l(t){return i.some((function(e){return e.every((function(e){return t.includes(e)}))}))}function s(t){a.textContent="".concat(t===c?"o is next":"x is next")}function f(t){a.textContent=t,u=!1}var y=document.querySelector(".game-grid");function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var m,p=document.querySelector(".status-action"),b=document.querySelector(".game-grid"),g=p.querySelector(".reset"),v=b.querySelectorAll(".game-cell"),S=[],A=[];function h(e){if(u){var r=e.target,n=b.dataset.turn,a=r.dataset.cellidentifer;if(!r.dataset.player)switch(r.dataset.player=n,function(t){y.dataset.turn="×"===t?"○":"×"}(n),function(t,e){var r=document.createElement("span");r.className="×"===t?"playerx":"playery",r.textContent=t,e.appendChild(r)}(n,r),function(t,e,r,n){t===c?r.push(parseInt(e,10)):n.push(parseInt(e,10))}(n,a,S,A),!0){case l(S):f("Player 1 wins");break;case l(A):f("Player 2 wins");break;case t(o).every((function(t){return t.dataset.player})):f("Draw!");break;default:s(n)}}}g.addEventListener("click",(function(){return e=S,r=A,void t(o).map((function(t){t.innerHTML="",t.removeAttribute("data-player"),n.dataset.turn=c,s("○"),e.length=0,r.length=0,u=!0}));var e,r})),(m=v,function(t){if(Array.isArray(t))return d(t)}(m)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(m)||function(t,e){if(t){if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(m)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return t.addEventListener("click",h)}))}();
//# sourceMappingURL=index.4d405644.js.map