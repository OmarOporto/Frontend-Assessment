function makeSidebarSticky() {
  const sidebar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');
  const footer = document.querySelector('#rhf.copilot-secure-display');

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

    if (sidebarBottomPosition >= footerPosition + 145) {
      sidebar.style.position = 'absolute';
      sidebar.style.top = `${footerPosition - sidebar.offsetHeight - topReference}px`;
    } else if (window.scrollY > offsetTop + 237) {
      sidebar.style.position = 'fixed';
      sidebar.style.top = '20px';
      sidebar.style.width = originalWidth;
    } else {
      sidebar.style.position = 'static';
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
.container-section3 {
  display: block;
  width: 100%;
  margin: 20px 0;  // Ajusta según sea necesario
  text-align:center;
}

.value-propositions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.proposition {
  position: relative;
}

.proposition img {
  position: relative;
  z-index: 2;
  width: 50%;
  display: block;
  margin: 0 auto;
}

.value-propositions::after {
  content: '';
  position: absolute;
  left: 10%;
  right: 15%;
  top: 40%;
  border-top: 4px dotted #ccc;
  transform: translateY(-50%);
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

@media screen and (max-width: 1200px){

  .value-propositions::after {
    content: '';
    position: absolute;
    left: 10%;
    right: 15%;
    top: 30%;
    border-top: 4px dotted #ccc;
    transform: translateY(-50%);
    z-index: 1;
  }
}

/* Media query para Tablet: Apila los ítems verticalmente con imagen a la izquierda */
@media screen and (max-width: 759px){
  .value-propositions {
    flex-direction: column;
  }

  .proposition img {
    width: 100%;
  }

  .value-propositions::after {
    left: 42%;
    top: 15%;
    bottom: 10%;
    border-top: none;
    border-left: 4px dotted #ccc;
    transform: translateX(-50%);
    z-index: 1;
  }

  .proposition {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

/* Media query para Móvil: Apila todo verticalmente */
@media (max-width: 480px) {
  .proposition {
    flex-direction: column;
  }

  .proposition img {
    position: relative;
    z-index: 2;
    width: 40%;
    display: block;
    margin: 0 auto;
  }

  .value-propositions::after {
    left: 65%;
    top: 15%;
    bottom: 10%;
    border-top: none;
    border-left: 4px dotted #ccc;
    transform: translateX(-50%);
    z-index: 1;
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

