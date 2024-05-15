function makeSidebarSticky() {

  console.log('Size of the screen:', window.innerWidth)

  // if (window.innerWidth <= 1024) {
  //   return;
  // }

  const sidebar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');
  const footer = document.querySelector('#rhf.copilot-secure-display');

  if (!sidebar || !footer) {
    console.log("Elements not found");
    return;
  }

  const offsetTop = sidebar.offsetTop;
  const originalWidth = sidebar.offsetWidth + 'px';

  sidebar.style.overflowY = 'auto';
  sidebar.style.maxHeight = '100vh';
  sidebar.style.paddingBottom = '20px';

  window.addEventListener('scroll', () => {
    const footerPosition = footer.getBoundingClientRect().top + window.scrollY; // Posición real del footer en relación a la página
    const sidebarBottomPosition = window.scrollY + window.innerHeight;
    const topReference = 275;

    if (sidebarBottomPosition >= footerPosition + 145) { // Esta variable y la de topReference estan correlacionadas
      console.log('TOP:', footerPosition - sidebar.offsetHeight - topReference)
      sidebar.style.position = 'absolute';
      sidebar.style.maxHeight = '100vh';
      sidebar.style.top = '20px';
      sidebar.style.top = `${footerPosition - sidebar.offsetHeight - topReference}px`;
    } else if (window.scrollY > offsetTop + 237) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '20px';
      sidebar.style.width = originalWidth;
      sidebar.style.maxHeight = '100vh';
    } else {
      sidebar.style.position = 'static';
      sidebar.style.maxHeight = '100vh';
    }
  });
}

makeSidebarSticky();

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
/* Estilo para Chrome, Edge y Safari */
div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv::-webkit-scrollbar {
  width: 5px; /* Ajusta el ancho del scrollbar */
}

div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10px;
}

/* Estilo para Firefox */
div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv {
  scrollbar-width: thin;
  scrollbar-color: darkgrey transparent;
}
`;

document.head.appendChild(style);



//************************************************************************************************************************** */

/* Excercise02 */

var stickyBar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');

var modalButton = document.createElement('button');
modalButton.id = 'openModalBtn';
modalButton.textContent = 'Open Modal';
stickyBar.appendChild(modalButton);

var modalHTML = `
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>Este es un texto de ejemplo para el contenido del modal.</p>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

var css = `
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .modal-content {
    margin: 0;
    width: 100%;
    height: 100%;
  }
}
`;
var styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

var metaTag = document.createElement('meta');
metaTag.name = "viewport";
metaTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(metaTag);
