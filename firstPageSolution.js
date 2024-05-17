/** Excercise 01 **/
function makeSidebarSticky() {
  const sidebar = document.querySelector('div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv');
  const footer = document.querySelector('#navFooter');

  if (!sidebar || !footer) {
    console.log("Elements not found");
    return;
  }

  const offsetTop = 260;
  const originalWidth = sidebar.offsetWidth + 'px';

  const handleScroll = () => {

    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const sidebarBottomPosition = window.scrollY + window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const BottomComponentHeight = 880;
    const sidebarHeight = 762;
    const sidebarBottomMargin = 20;

    if (sidebarBottomPosition >= footerPosition + (window.innerHeight - sidebarHeight - sidebarBottomMargin)) {
      sidebar.style.position = 'absolute';
      sidebar.style.maxHeight = `${sidebarHeight}px`;
      sidebar.style.top = `${totalHeight - BottomComponentHeight - sidebarHeight - offsetTop - sidebarBottomMargin}px`;
    } else if (window.scrollY > offsetTop) {
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

//****************************************************************************************************************************/
/** Excercise 02 **/

const stickyBarDesktop = 'div[role="tree"]._p13n-zg-nav-tree-all_style_zg-browse-root__-jwNv';
const stickyBarMovile = '._p13n-zg-nav-tree-all_style_zg-browse-group__88fbz';
const fullScreenModal = false;
const modalButton = document.createElement('button');
modalButton.id = 'openModalBtn';
modalButton.textContent = 'Open Modal';
modalButton.style.borderRadius = '8px';
modalButton.style.marginTop = '20px';

if (document.querySelector(stickyBarDesktop)) {
  const stickyBar = document.querySelector(stickyBarDesktop);
  stickyBar.appendChild(modalButton);
}
else {
  const stickyBar = document.querySelector(stickyBarMovile);
  fullScreenModal = true;
  stickyBar.appendChild(modalButton);
};

const modalHTML = `
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Modal Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae diam hendrerit, commodo purus vitae, lacinia mauris. Quisque pharetra mi vitae velit vulputate posuere. Nunc scelerisque tempor faucibus.</p>
  </div>
</div>
`;
document.body.insertAdjacentHTML('beforeend', modalHTML);

const cssModal = `
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
  margin: 0;
  width: 100%;
  height: 100%;
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
@media screen and (min-width: 768px) {
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
    justify-content: center;
    align-items: centrer;
  }
  .modal-content {
    margin: auto;
    width: 80%;
    height: auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
`;
const styleSheetModal = document.createElement('style');
styleSheetModal.type = 'text/css';
styleSheetModal.innerText = cssModal;
document.head.appendChild(styleSheetModal);

const modal = document.getElementById('myModal');
const btn = document.getElementById('openModalBtn');
const span = document.querySelector('.close');

btn.onclick = function() {
  modal.style.display = 'flex';if (fullScreenModal) {
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

const metaTag = document.createElement('meta');
metaTag.name = "viewport";
metaTag.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(metaTag);

/**********************************************************************************************************************/
/** Excercise 03 **/

const cssSection = `
/* Movile First */
.container-section {
  display: block;
  width: 100%;
  margin: 20px 0;
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
@media screen and (min-width: 640px) {

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
@media screen and (min-width: 768px) {
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

@media screen and (min-width: 1024px) {
  .value-propositions::after {
    top: 50%;
  }
}
`;

const styleSheetSection = document.createElement('style');
styleSheetSection.innerText = cssSection;
document.head.appendChild(styleSheetSection);

const sectionDesktopView = '#zg_left_col1';
const sectionMovileView = '.a-section.a-padding-base';
let aboutSection

if (document.querySelector(sectionDesktopView)) {
  aboutSection = document.querySelector(sectionDesktopView);
}
else {
  aboutSection = document.querySelector(sectionMovileView);
}

if (aboutSection) {
  const valuePropositionsHTML = `
    <div class="container-section">
      <h3> Value Propositions </h3>
      <div class="value-propositions">
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/img/computer.png" alt="Value 1">
          <div class="text-container">
            <h3>Header 1</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/img/delivery.png" alt="Value 2">
          <div class="text-container">
            <h3>Header 2</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/img/phone.png" alt="Value 3">
          <div class="text-container">
            <h3>Header 3</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  aboutSection.insertAdjacentHTML('beforeend', valuePropositionsHTML);
}
else {
  console.log('Section NOT FOUND')
}
