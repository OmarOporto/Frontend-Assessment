// const sidebar = document.querySelector('#zg_left_col2');
// const footer = document.querySelector('#navFooter');

// sidebar.style.position = 'sticky';
// sidebar.style.top = '20px';
// sidebar.style.backgroundColor = "red"

// window.addEventListener('scroll', function() {
//   const footerRect = footer.getBoundingClientRect();
//   const sidebarHeight = sidebar.offsetHeight;
//   const sidebarRect = sidebar.getBoundingClientRect();

//   if (footerRect.top - sidebarHeight <= 20) { // El '20' es el valor del 'top' del sticky.
//     sidebar.style.position = 'absolute';
//     sidebar.style.top = `${window.scrollY + footerRect.top - sidebarHeight - 20}px`; // Ajusta la posición absoluta.
//   } else {
//     sidebar.style.position = 'fixed';
//     sidebar.style.bottom = '20px';
//   }
// });

function makeSidebarSticky() {
  const sidebar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');
  //const footer = document.querySelector('#rhf.copilot-secure-display');
  const footer = document.querySelector('#navFooter');

  if (!sidebar || !footer) {
    console.log("Elements not found");
    return;
  }

  const offsetTop = sidebar.offsetTop;
  const originalWidth = sidebar.offsetWidth + 'px';
  let isStickyEnabled = window.innerWidth > 1024;

  const handleScroll = () => {
    if (!isStickyEnabled) return;

    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const sidebarBottomPosition = window.scrollY + window.innerHeight;
    const topReference = 275;

    if (sidebarBottomPosition >= footerPosition + 125) { // Esta variable y la de topReference estan correlacionadas
      console.log('TOP:', footerPosition - sidebar.offsetHeight - topReference)
      sidebar.style.position = 'absolute';
      sidebar.style.maxHeight = '100vh';
      sidebar.style.top = '20px';
      sidebar.style.top = `${footerPosition - sidebar.offsetHeight - topReference}px`;
      sidebar.style.zIndex = 20
    } else if (window.scrollY > offsetTop + 237) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '20px';
      sidebar.style.width = originalWidth;
      sidebar.style.maxHeight = '100vh';
    } else {
      sidebar.style.position = 'static';
      sidebar.style.maxHeight = '100vh';
    }
  };

  window.addEventListener('scroll', handleScroll);

  window.addEventListener('resize', () => {
    isStickyEnabled = window.innerWidth > 1024;
    if (!isStickyEnabled) {
      sidebar.style.position = 'static';
      window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
  });
}

makeSidebarSticky();

if(document.querySelector('#rhf.copilot-secure-display')) {
  const bottomFrame = document.querySelector('#rhf.copilot-secure-display');
  bottomFrame.style.position = 'relative';
  bottomFrame.style.left = '210px';
  bottomFrame.style.maxWidth = 'calc(100vw - 230px)'
}

if(document.querySelector('#zg_colmask')) {
  const zg_colmask = document.querySelector('#zg_colmask');
  zg_colmask.style.overflow = "visible";
}

if(document.querySelector('#zg_left_colmask')) {
  const zg_left_colmask = document.querySelector('#zg_left_colmask');
  zg_left_colmask.style.overflow = "visible";
}

if(document.querySelector('#zg_col1')) {
  const zg_col1 = document.querySelector('#zg_col1');
  zg_col1.style.overflow = "visible";
}

if(document.querySelector('#zg_left_col1')) {
  const zg_left_col1 = document.querySelector('#zg_left_col1');
  zg_left_col1.style.width = "calc(-258px + 100vw)";
  zg_left_col1.style.paddingRight = "0px";
}


if(document.querySelector('#zg_left_colleft')) {
  const zg_left_colleft = document.querySelector('#zg_left_colleft');
  zg_left_colleft.style.width = "calc(-234.6px + 100vw)";
}

//************************************************************************************************************************** */

/* Excercise02 */

var stickyBarDesktop = 'div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv';
var stickyBarMovile = '._p13n-zg-nav-tree-all_style_zg-browse-group__88fbz';
var fullScreenModal = false;

// console.log('Desktop: ', document.querySelector(stickyBarDesktop))
// console.log('Movile: ', document.querySelector(stickyBarMovile))

if (document.querySelector(stickyBarDesktop)) {
  var stickyBar = document.querySelector(stickyBarDesktop);
}
else {
  var stickyBar = document.querySelector(stickyBarMovile);
  fullScreenModal = true;
};

var modalButton = document.createElement('button');
modalButton.id = 'openModalBtn';
modalButton.textContent = 'Open Modal';
modalButton.style.borderRadius = '8px';
modalButton.style.marginTop = '20px';
stickyBar.appendChild(modalButton);

var modalHTML = `
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae diam hendrerit, commodo purus vitae, lacinia mauris. Quisque pharetra mi vitae velit vulputate posuere. Nunc scelerisque tempor faucibus.</p>
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
  modal.style.display = 'block';if (fullScreenModal) {
    document.querySelector('.modal-content').style.margin = '0';
    document.querySelector('.modal-content').style.height = '100%';
    document.querySelector('.modal-content').style.width = '100%';
  }
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


/****************************************************************************************************************** */

/**Excercise 03 */

const cssSection3 = `
/* Estilos base: orientados a móviles */
.container-section3 {
  display: block;
  width: 100%;
  margin: 20px 0; /* Ajusta según sea necesario */
  text-align: center;
}

.value-propositions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.proposition {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.proposition img {
  position: relative;
  z-index: 2;
  width: 40%;
  display: block;
  margin: 0 auto;
}

.value-propositions::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 15%;
  bottom: 10%;
  border-top: none;
  border-left: 4px dotted #ccc;
  transform: translateX(-50%);
  z-index: 1;
}

.text-container {
  z-index: 3;
  background-color: white;
}

.proposition p {
  text-align: center;
  padding: 10px;
}

.proposition h3 {
  text-align: center;
}

/* Media query para Tablet */
@media screen and (min-width: 480px) {

  .proposition img {
    width: 100%;
    min-width: 175px;
  }

  .value-propositions::after {
    left: 20%;
    top: 15%;
    bottom: 10%;
    border-top: none;
    border-left: 4px dotted #ccc;
    transform: translateX(-50%);
    z-index: 1;
  }

  .proposition {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

/* Media query para Desktop */
@media screen and (min-width: 760px) {
  .value-propositions {
    flex-direction: row;
  }

  .proposition {
    flex-direction: column;
  }

  .proposition img {
    width: 50%;
    min-height: 195px;
  }

  .value-propositions::after {
    left: 10%;
    right: 15%;
    top: 50%;
    border-top: 4px dotted #ccc;
    transform: translateY(-50%);
    z-index: 1;
  }
}

@media screen and (min-width: 1200px) {
  .value-propositions::after {
    top: 50%;
  }
}

`;

const styleSheetSection3 = document.createElement('style');
styleSheetSection3.type = 'text/css';
styleSheetSection3.innerText = cssSection3;
document.head.appendChild(styleSheetSection3);

var section3Desktop = '#zg_left_col1';
var section3Movile = '.a-section.a-padding-base';

if (document.querySelector(section3Desktop)) {
  var aboutSection = document.querySelector(section3Desktop);
}
else {
  var aboutSection = document.querySelector(section3Movile);
}

if (aboutSection) {
  const valuePropositionsHTML = `
    <div class="container-section3">
      <h3> Value Propositions </h3>
      <div class="value-propositions">
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/computer.png" alt="Value 1">
          <div class="text-container">
            <h3>Header 1</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/delivery.png" alt="Value 2">
          <div class="text-container">
            <h3>Header 2</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/phone.png" alt="Value 3">
          <div class="text-container">
            <h3>Header 3</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  aboutSection.insertAdjacentHTML('beforeend', valuePropositionsHTML);
  console.log('Section added inside');
}
else {
  console.log('Section NOT FOUND')
}

