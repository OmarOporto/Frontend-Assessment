var elementos = document.querySelectorAll('.sc-3ey1l1-0.jaCFLV');
if (elementos.length > 1) {
    var divObjetivo2 = elementos[1];

    const tabsHTML = `
    <div class="tabs">
        <div class="tab-buttons">
            <button class="tab-button active" onclick="switchTab(event, 'tab1')">Tab 1</button>
            <button class="tab-button" onclick="switchTab(event, 'tab2')">Tab 2</button>
        </div>
        <div class="tab-content">
            <div id="tab1" class="content active"><p>Contenido de la Tab 1</p></div>
            <div id="tab2" class="content"><p>Contenido de la Tab 2</p></div>
        </div>
    </div>
    `;
    divObjetivo2.innerHTML += tabsHTML;
} else {
    console.log('No hay suficientes elementos con la clase "sc-3ey1l1-0.jaCFLV" en el documento.');
}

// Agregar contenido a los tabs
function switchTab(evt, tabName) {
  const tabcontent = document.querySelectorAll('.content');
  tabcontent.forEach(tab => tab.style.display = 'none');

  const tabbuttons = document.querySelectorAll('.tab-button');
  tabbuttons.forEach(btn => btn.className = btn.className.replace(' active', ''));

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

const css = `
.tabs { width: 100%; font-family: Arial, sans-serif; padding: 10px; box-sizing: border-box; }
.tab-buttons { display: flex; justify-content: space-around; width: 100%; }
.tab-button { padding: 15px 20px; flex-grow: 1; cursor: pointer; background-color: lightgray; border: none; outline: none; transition: background-color 0.3s; text-align: center; }
.tab-button.active { background-color: gray; color: white; }
.tab-content { border: 1px solid gray; padding: 20px; box-sizing: border-box; }
.content { display: none; }
.content.active { display: block; }
@media (min-width: 768px) {
    .tab-buttons { flex-direction: row; }
    .tab-button { width: auto; padding: 10px 50px; }
}
@media (max-width: 768px) {
    .tab-buttons { flex-direction: column; }
    .tab-button { width: 100%; padding: 10px 20px; }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);
