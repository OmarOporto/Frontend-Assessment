/****************************************************   Final Version    ****************************************************************/

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
