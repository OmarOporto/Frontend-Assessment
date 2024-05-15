//#zg_left_colleft

const css = `
.value-propositions {
  display: flex;
  flex-direction: row; /* horizontal por defecto */
  justify-content: space-between;
  gap: 20px; /* Espacio entre las proposiciones */
}

.proposition {
  flex: 1; /* Cada proposición toma igual espacio */
  border-right: 2px dotted #ccc; /* Línea punteada entre ítems */
}

.proposition:last-child {
  border-right: none; /* No borde en el último ítem */
}

.proposition img {
  width: 100%; /* Ajusta la imagen al contenedor */
  display: block; /* Elimina cualquier espacio extra debajo de la imagen */
}

.proposition p {
  text-align: center; /* Centra el texto debajo de la imagen */
}

/* Media query para Tablet: Apila los ítems verticalmente con imagen a la izquierda */
@media (max-width: 768px) {
  .value-propositions {
    flex-direction: column;
  }

  .proposition {
    flex-direction: row;
    align-items: center;
    border-right: none;
    border-bottom: 2px dotted #ccc; /* Línea punteada debajo de cada ítem */
  }

  .proposition:last-child {
    border-bottom: none;
  }
}

/* Media query para Móvil: Apila todo verticalmente */
@media (max-width: 480px) {
  .proposition {
    flex-direction: column;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('#zg_left_colleft');
  const valuePropositionsHTML = `
    <div class="value-propositions">
      <div class="proposition">
        <img src="path/to/image1.jpg" alt="Value 1">
        <p>Descripción de la proposición de valor 1.</p>
      </div>
      <div class="proposition">
        <img src="path/to/image2.jpg" alt="Value 2">
        <p>Descripción de la proposición de valor 2.</p>
      </div>
      <div class="proposition">
        <img src="path/to/image3.jpg" alt="Value 3">
        <p>Descripción de la proposición de valor 3.</p>
      </div>
    </div>
  `;

  aboutSection.insertAdjacentHTML('afterend', valuePropositionsHTML);
});
