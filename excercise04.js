// Crear los elementos de las pestañas y el contenido
const tabs = document.createElement('div');
tabs.className = 'tabs';

const tabButtons = document.createElement('div');
tabButtons.className = 'tab-buttons';
tabs.appendChild(tabButtons);

const tab1Button = document.createElement('button');
tab1Button.className = 'tab-button active';
tab1Button.textContent = 'Tab 1';
tab1Button.onclick = function (event) { switchTab(event, 'tab1'); };
tabButtons.appendChild(tab1Button);

const tab2Button = document.createElement('button');
tab2Button.className = 'tab-button';
tab2Button.textContent = 'Tab 2';
tab2Button.onclick = function (event) { switchTab(event, 'tab2'); };
tabButtons.appendChild(tab2Button);

const tabContent = document.createElement('div');
tabContent.className = 'tab-content';
tabs.appendChild(tabContent);

const content1 = document.createElement('div');
content1.id = 'tab1';
content1.className = 'content active';
content1.innerHTML = '<p>Contenido de la Tab 1</p>';
tabContent.appendChild(content1);

const content2 = document.createElement('div');
content2.id = 'tab2';
content2.className = 'content';
content2.innerHTML = '<p>Contenido de la Tab 2</p>';
tabContent.appendChild(content2);

// Seleccionar el div objetivo y agregar las pestañas a ese div
  const divObjetivo = document.querySelector('.sc-3ey1l1-0.jaCFLV');
divObjetivo.appendChild(tabs);

// Función para cambiar las pestañas
function switchTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.querySelectorAll('.content');
    tabcontent.forEach((tab) => tab.style.display = 'none');

    tabbuttons = document.querySelectorAll('.tab-button');
    tabbuttons.forEach((btn) => btn.className = btn.className.replace(' active', ''));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Aplicar CSS directamente
const css = `
.tabs { width: 100%; font-family: Arial, sans-serif; }
.tab-buttons { display: flex; justify-content: space-around; }
.tab-button { padding: 10px 20px; cursor: pointer; background-color: lightgray; border: none; outline: none; transition: background-color 0.3s; }
.tab-button.active { background-color: gray; color: white; }
.tab-content { border: 1px solid gray; padding: 20px; }
.content { display: none; }
.content.active { display: block; }
@media (max-width: 768px) { .tab-buttons { flex-direction: column; } }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);


/************************************************************************************************** */

document.addEventListener('DOMContentLoaded', function() {
    // Tu código aquí dentro asegura que se ejecute después de que el DOM esté completamente cargado.
    const divObjetivo = document.getElementById('sc-3ey1l1-0 jaCFLV');
    if (divObjetivo) {
        // Aquí va el resto de tu código para crear el componente de pestañas y añadirlo al div objetivo
    } else {
        console.log('El elemento con ID "miDivObjetivo" no existe en el documento.');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Seleccionando el primer elemento que coincide con la clase
  const divObjetivo = document.querySelector('.sc-3ey1l1-0.jaCFLV');
  if (divObjetivo) {
    // Si el elemento existe, ejecuta el código aquí para añadir las pestañas
    // Crear los elementos de las pestañas y el contenido
    const tabs = document.createElement('div');
    tabs.className = 'tabs';

    const tabButtons = document.createElement('div');
    tabButtons.className = 'tab-buttons';
    tabs.appendChild(tabButtons);

    const tab1Button = document.createElement('button');
    tab1Button.className = 'tab-button active';
    tab1Button.textContent = 'Tab 1';
    tab1Button.onclick = function (event) { switchTab(event, 'tab1'); };
    tabButtons.appendChild(tab1Button);

    const tab2Button = document.createElement('button');
    tab2Button.className = 'tab-button';
    tab2Button.textContent = 'Tab 2';
    tab2Button.onclick = function (event) { switchTab(event, 'tab2'); };
    tabButtons.appendChild(tab2Button);

    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content';
    tabs.appendChild(tabContent);

    const content1 = document.createElement('div');
    content1.id = 'tab1';
    content1.className = 'content active';
    content1.innerHTML = '<p>Contenido de la Tab 1</p>';
    tabContent.appendChild(content1);

    const content2 = document.createElement('div');
    content2.id = 'tab2';
    content2.className = 'content';
    content2.innerHTML = '<p>Contenido de la Tab 2</p>';
    tabContent.appendChild(content2);

    divObjetivo.appendChild(tabs);

    // Función para cambiar las pestañas
    function switchTab(evt, tabName) {
      var i, tabcontent, tabbuttons;
      tabcontent = document.querySelectorAll('.content');
      tabcontent.forEach((tab) => tab.style.display = 'none');

      tabbuttons = document.querySelectorAll('.tab-button');
      tabbuttons.forEach((btn) => btn.className = btn.className.replace(' active', ''));

      document.getElementById(tabName).style.display = 'block';
      evt.currentTarget.className += ' active';
    }
  } else {
      console.log('El elemento con la clase "sc-3ey1l1-0 jaCFLV" no existe en el documento.');
  }
});
