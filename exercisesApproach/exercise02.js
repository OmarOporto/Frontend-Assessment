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


/***********************************************    Final version    ***************************************************************/


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
