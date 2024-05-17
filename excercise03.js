//#zg_left_colleft
//console.log(document.querySelector('#zg_left_colleft'));

const css = `
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

.proposition p {
  text-align: center;
  padding: 10px;
}

.proposition h3 {
  text-align: center;
}

/* Media query para Tablet: Apila los ítems verticalmente con imagen a la izquierda */
@media screen and (max-width: 759px) and (orientation: portrait) {
  .value-propositions {
    flex-direction: column;
  }

  .proposition img {
    width: 100%; /* Ajusta el ancho de la imagen para tablets */
  }

  .value-propositions::after {
    left: 42%;
    top: 15%;
    bottom: 10%;
    border-top: none;
    border-left: 4px dotted #ccc;
    transform: translateX(-50%);
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
    left: 60%;
    top: 15%;
    bottom: 10%;
    border-top: none;
    border-left: 4px dotted #ccc;
    transform: translateX(-50%);
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

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
          <div>
            <h3>Header 1</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/delivery.png" alt="Value 2">
          <div>
            <h3>Header 2</h3>
            <p>Aliquam aliquam urna in justo aliquet, nec commodo sem imperdiet. Vestibulum sed leo pharetra, suscipit massa non, semper nisi.</p>
          </div>
        </div>
        <div class="proposition">
          <img src="https://raw.githubusercontent.com/OmarOporto/Frontend-Assessment/main/phone.png" alt="Value 3">
          <div>
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


// const cssSection3 = `
// .container-section3 {
//   display: block;
//   width: 100%;
//   margin: 20px 0;  // Ajusta según sea necesario
//   text-align:center;
// }

// .value-propositions {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   position: relative;
// }

// .proposition {
//   position: relative;
// }

// .proposition img {
//   position: relative;
//   z-index: 2;
//   width: 50%;
//   display: block;
//   margin: 0 auto;
// }

// .value-propositions::after {
//   content: '';
//   position: absolute;
//   left: 10%;
//   right: 15%;
//   top: 40%;
//   border-top: 4px dotted #ccc;
//   transform: translateY(-50%);
//   z-index: 1;
// }

// .text-container {
//   z-index: 3;
//   background-color: white;
// }

// .proposition p {
//   text-align: center;
//   padding: 10px;
// }

// .proposition h3 {
//   text-align: center;
// }

// @media screen and (max-width: 1200px){

//   .value-propositions::after {
//     content: '';
//     position: absolute;
//     left: 10%;
//     right: 15%;
//     top: 30%;
//     border-top: 4px dotted #ccc;
//     transform: translateY(-50%);
//     z-index: 1;
//   }
// }

// /* Media query para Tablet: Apila los ítems verticalmente con imagen a la izquierda */
// @media screen and (max-width: 759px){
//   .value-propositions {
//     flex-direction: column;
//   }

//   .proposition img {
//     width: 100%;
//   }

//   .value-propositions::after {
//     left: 42%;
//     top: 15%;
//     bottom: 10%;
//     border-top: none;
//     border-left: 4px dotted #ccc;
//     transform: translateX(-50%);
//     z-index: 1;
//   }

//   .proposition {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//   }
// }

// /* Media query para Móvil: Apila todo verticalmente */
// @media (max-width: 480px) {
//   .proposition {
//     flex-direction: column;
//   }

//   .proposition img {
//     position: relative;
//     z-index: 2;
//     width: 40%;
//     display: block;
//     margin: 0 auto;
//   }

//   .value-propositions::after {
//     left: 65%;
//     top: 15%;
//     bottom: 10%;
//     border-top: none;
//     border-left: 4px dotted #ccc;
//     transform: translateX(-50%);
//     z-index: 1;
//   }
// }
// `;
