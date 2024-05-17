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

const css = `
.tabs { width: 100%; font-family: Arial, sans-serif; margin: 10px 20px; }
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


/***********************************************************************************/
var divObjetivo2 = document.querySelector('.sc-3ey1l1-0.jaCFLV');
if (divObjetivo2) {
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
    console.log('El elemento con la clase "sc-3ey1l1-0 jaCFLV" no existe en el documento.');
}

// Función para cambiar las pestañas
function switchTab(evt, tabName) {
  const tabcontent = document.querySelectorAll('.content');
  tabcontent.forEach(tab => tab.style.display = 'none');

  const tabbuttons = document.querySelectorAll('.tab-button');
  tabbuttons.forEach(btn => btn.className = btn.className.replace(' active', ''));

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// const css = `
// .tabs { width: 100%; font-family: Arial, sans-serif; margin: 10px 20px; }
// .tab-buttons { display: flex; justify-content: space-around; }
// .tab-button { padding: 10px 20px; cursor: pointer; background-color: lightgray; border: none; outline: none; transition: background-color 0.3s; }
// .tab-button.active { background-color: gray; color: white; }
// .tab-content { border: 1px solid gray; padding: 20px; }
// .content { display: none; }
// .content.active { display: block; }
// @media (max-width: 768px) { .tab-buttons { flex-direction: column; } }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = css;
// document.head.appendChild(styleSheet);

//const TARGET_NODE = '.sc-3ey1l1-0.jaCFLV';
//const elements = document.querySelectorAll(TARGET_NODE);
//const tabElement = document.querySelector('#tabs-container');
if (elements.length > 1 && tabElement === null) {
  const divTarget = elements[2];
  const tabsElement = document.createElement('div');
  tabsElement.id = 'tabs-container';
  tabsElement.innerHTML = `
    <div class="tabs">
      <div class="tab-buttons">
          <button class="tab-button active" onclick="switchTab(event, 'tab1')">Tab 1</button>
          <button class="tab-button" onclick="switchTab(event, 'tab2')">Tab 2</button>
      </div>
      <div class="tab-content">
          <div id="tab1" class="content active">${getTab1Content()}</div>
          <div id="tab2" class="content">${getTab2Content()}</div>
      </div>
    </div>
    `;
  divTarget.parentNode.insertBefore(tabsElement, divTarget);
  const styleSheet = document.createElement('style');
  styleSheet.innerText = getCss();
  document.head.appendChild(styleSheet);
} else {
  console.log(
    `Thes is not enought elements after "${TARGET_NODE}" in the doom.`
  );
}
function switchTab(evt, tabName) {
  const tabcontent = document.querySelectorAll('.content');
  tabcontent.forEach((tab) => (tab.style.display = 'none'));
  const tabbuttons = document.querySelectorAll('.tab-button');
  tabbuttons.forEach(
    (btn) => (btn.className = btn.className.replace(' active', ''))
  );
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
function getCss() {
  return `
  #tabs-container { width: 100%; padding: 10px; box-sizing: border-box; }
  .tabs { width: 100%; box-sizing: border-box; }
  .tab-buttons { display: flex; width: 100%; justify-content: center; gap: 1rem; background-color: white; }
  .tab-button { padding: 15px 20px; flex-grow: 1; cursor: pointer; background-color: inherit; outline: none; transition: background-color 0.3s; text-align: center; border: unset; background-color: white; max-width: 200px;     border-top: 4px solid; border: 1px solid lightgrey; border-bottom: unset; }
  .tab-button.active { background-color: #FAF7F7;  border-top-color: blue; border-top-width: 4px; }
  .tab-content { padding: 2rem 1rem; box-sizing: border-box; background-color: #FAF7F7; }
  .content { display: none; }
  .content.active { display: block; }
  .tab-content-1 {
    background-color: white;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
  .tab-center {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  .tab-center > div {
    max-width: 260px;
    width: 100%;
  }
  .header-content {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid lightgray;
    align-items: center;
  }
  .header-content h1 {
    margin: 0;
    font-size: small;
  }
  .header-content svg {
    transform: scaleX(-1);
  }
  .img-header {
    max-width: 220px;
    width: 100%;
    object-fit: contain;
  }
  .link-chat {
    font-weight:600;
    display: flex;
    color: black;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .tab-center {
      flex-direction: row;
    }
  }
  .tab-content-2 {
    background-color: white;
    max-width: 560px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
  .tab-content-2 .tab-header {
    display: flex;
    justify-content: space-between;
  }
  .link-chat.btn {
    border-radius: 40px;
    border: 2px solid;
    padding: 0.5rem 1.5rem;
  }
  .header-2 {
    font-size: medium;
  }
  .description-2 {
    max-width: 380px;
    margin-bottom: 0;
  }
  `;
}
function getTab1Content() {
  return `
<section class="tab-content-1">
  <div class="tab-center">
    <div>
      <div>
        <div class="header-content">
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#5F6368">
            <path
              d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
          </svg>
          <h1>Header</h1>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio iusto vel modi perspiciatis labore quod numquam.
        Dolor cum possimus aliquid recusandae quas, fuga aperiam. Inventore est assumenda laudantium delectus veniam.
      </p>
      <a class="link-chat" href="#">
        <span>Chat with us</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5F6368">
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg></a>
    </div>
    <img class="img-header" src="https://assets-global.website-files.com/5ff71e7932ba4f20026240b8/6097d2a8968244a4298aa223_Trust%20%40%20Worksmart-p-500.png" alt="image description">
  </div>
</section>
  `;
}
function getTab2Content() {
  return `
<section class="tab-content-2">
  <div class="tab-header">
    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#5F6368">
      <path
        d="M350-63q-46 0-82.5-24T211-153q-16 21-40.5 32.5T120-109q-51 0-85.5-35T0-229q0-43 28-77.5T99-346q-14-20-21.5-42.5T70-436q0-40 20.5-75t57.5-57q5 18 13.5 38.5T181-494q-14 11-22 26.5t-8 32.5q0 56 46 69t87 21l19 32q-11 32-19 54.5t-8 40.5q0 30 21.5 52.5T350-143q38 0 63-34t41-80q16-46 24.5-93t13.5-72l78 21q-9 45-22 103t-36.5 110.5Q488-135 449.5-99T350-63ZM120-189q17 0 28.5-11.5T160-229q0-17-11.5-28.5T120-269q-17 0-28.5 11.5T80-229q0 17 11.5 28.5T120-189Zm284-158q-46-41-83.5-76.5t-64.5-69q-27-33.5-41.5-67T200-629q0-65 44.5-109.5T354-783q4 0 7 .5t7 .5q-4-10-6-20t-2-21q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h14q60 0 102 38.5t50 95.5q-18-3-40.5-3t-41.5 2q-7-23-25.5-38T606-703q-35 0-54.5 20.5T498-623h-37q-35-41-54.5-60.5T354-703q-32 0-53 21t-21 53q0 23 13 47.5t36.5 52q23.5 27.5 57 58.5t74.5 67l-57 57Zm76-436q17 0 28.5-11.5T520-823q0-17-11.5-28.5T480-863q-17 0-28.5 11.5T440-823q0 17 11.5 28.5T480-783ZM609-63q-22 0-43.5-6T524-88q11-14 22-33t20-35q11 7 22 10t22 3q32 0 53.5-22.5T685-219q0-19-8-41t-19-54l19-32q42-8 87.5-21t45.5-69q0-40-29.5-58T716-512q-42 0-98 16t-131 41l-21-78q78-25 139-42t112-17q69 0 121 41t52 115q0 25-7.5 47.5T861-346q43 5 71 39.5t28 77.5q0 50-34.5 85T840-109q-26 0-50.5-11.5T749-153q-20 42-56.5 66T609-63Zm232-126q17 0 28-11.5t11-28.5q0-17-11.5-29T840-270q-17 0-28.5 11.5T800-230q0 17 12 29t29 12Zm-721-40Zm360-594Zm360 593Z" />
    </svg>
    <a class="link-chat btn" href="#">
      <span>Try for free</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5F6368">
        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
      </svg></a>
  </div>
  <h1 class="header-2">Header</h1>
  <p class="description-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro eaque cumque at magnam voluptate reiciendis
    assumenda ut ab. Distinctio consequuntur deleniti nulla facilis laboriosam voluptatum obcaecati, facere pariatur
    harum?</p>
</section>
  `;
}
/***********************************************   Final Version ***********************************************************/

function getCss() {
  return `
  #tabs-container { width: 100%; padding: 10px; box-sizing: border-box; }
  .tabs { width: 100%; box-sizing: border-box; }
  .tab-buttons { display: flex; width: 100%; justify-content: center; gap: 1rem; background-color: white; }
  .tab-button { padding: 15px 20px; flex-grow: 1; cursor: pointer; background-color: inherit; outline: none; transition: background-color 0.3s; text-align: center; border: unset; background-color: white; max-width: 200px;     border-top: 4px solid; border: 1px solid lightgrey; border-bottom: unset; }
  .tab-button.active { background-color: #FAF7F7;  border-top-color: blue; border-top-width: 4px; }
  .tab-content { padding: 2rem 1rem; box-sizing: border-box; background-color: #FAF7F7; }
  .content { display: none; }
  .content.active { display: block; }
  .tab-content-1 {
    background-color: white;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
  .tab-center {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  .tab-center > div {
    max-width: 260px;
    width: 100%;
  }
  .header-content {
    display: flex;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid lightgray;
    align-items: center;
  }
  .header-content h1 {
    margin: 0;
    font-size: small;
  }
  .header-content svg {
    transform: scaleX(-1);
  }
  .img-header {
    max-width: 220px;
    width: 100%;
    object-fit: contain;
  }
  .link-chat {
    font-weight:600;
    display: flex;
    color: black;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .tab-center {
      flex-direction: row;
    }
  }
  .tab-content-2 {
    background-color: white;
    max-width: 560px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
  .tab-content-2 .tab-header {
    display: flex;
    justify-content: space-between;
  }
  .link-chat.btn {
    border-radius: 40px;
    border: 2px solid;
    padding: 0.5rem 1.5rem;
  }
  .header-2 {
    font-size: medium;
  }
  .description-2 {
    max-width: 380px;
    margin-bottom: 0;
  }
  `;
}
function getTab1Content() {
  return `
<section class="tab-content-1">
  <div class="tab-center">
    <div>
      <div>
        <div class="header-content">
          <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#5F6368">
            <path
              d="M686-132 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l244 242q12 12 12 29t-12 29l-84 84q-12 12-29 12t-29-12Zm29-85 27-27-256-256q18-20 26-46.5t8-53.5q0-60-38.5-104.5T386-758l74 74q12 12 12 28t-12 28L332-500q-12 12-28 12t-28-12l-74-74q9 57 53.5 95.5T360-440q26 0 52-8t47-25l256 256ZM472-488Z" />
          </svg>
          <h1>Header</h1>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio iusto vel modi perspiciatis labore quod numquam.
        Dolor cum possimus aliquid recusandae quas, fuga aperiam. Inventore est assumenda laudantium delectus veniam.
      </p>
      <a class="link-chat" href="#">
        <span>Chat with us</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5F6368">
          <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
        </svg></a>
    </div>
    <img class="img-header" src="https://assets-global.website-files.com/5ff71e7932ba4f20026240b8/6097d2a8968244a4298aa223_Trust%20%40%20Worksmart-p-500.png" alt="image description">
  </div>
</section>
  `;
}
function getTab2Content() {
  return `
<section class="tab-content-2">
  <div class="tab-header">
    <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#5F6368">
      <path
        d="M350-63q-46 0-82.5-24T211-153q-16 21-40.5 32.5T120-109q-51 0-85.5-35T0-229q0-43 28-77.5T99-346q-14-20-21.5-42.5T70-436q0-40 20.5-75t57.5-57q5 18 13.5 38.5T181-494q-14 11-22 26.5t-8 32.5q0 56 46 69t87 21l19 32q-11 32-19 54.5t-8 40.5q0 30 21.5 52.5T350-143q38 0 63-34t41-80q16-46 24.5-93t13.5-72l78 21q-9 45-22 103t-36.5 110.5Q488-135 449.5-99T350-63ZM120-189q17 0 28.5-11.5T160-229q0-17-11.5-28.5T120-269q-17 0-28.5 11.5T80-229q0 17 11.5 28.5T120-189Zm284-158q-46-41-83.5-76.5t-64.5-69q-27-33.5-41.5-67T200-629q0-65 44.5-109.5T354-783q4 0 7 .5t7 .5q-4-10-6-20t-2-21q0-50 35-85t85-35q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h14q60 0 102 38.5t50 95.5q-18-3-40.5-3t-41.5 2q-7-23-25.5-38T606-703q-35 0-54.5 20.5T498-623h-37q-35-41-54.5-60.5T354-703q-32 0-53 21t-21 53q0 23 13 47.5t36.5 52q23.5 27.5 57 58.5t74.5 67l-57 57Zm76-436q17 0 28.5-11.5T520-823q0-17-11.5-28.5T480-863q-17 0-28.5 11.5T440-823q0 17 11.5 28.5T480-783ZM609-63q-22 0-43.5-6T524-88q11-14 22-33t20-35q11 7 22 10t22 3q32 0 53.5-22.5T685-219q0-19-8-41t-19-54l19-32q42-8 87.5-21t45.5-69q0-40-29.5-58T716-512q-42 0-98 16t-131 41l-21-78q78-25 139-42t112-17q69 0 121 41t52 115q0 25-7.5 47.5T861-346q43 5 71 39.5t28 77.5q0 50-34.5 85T840-109q-26 0-50.5-11.5T749-153q-20 42-56.5 66T609-63Zm232-126q17 0 28-11.5t11-28.5q0-17-11.5-29T840-270q-17 0-28.5 11.5T800-230q0 17 12 29t29 12Zm-721-40Zm360-594Zm360 593Z" />
    </svg>
    <a class="link-chat btn" href="#">
      <span>Try for free</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5F6368">
        <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
      </svg></a>
  </div>
  <h1 class="header-2">Header</h1>
  <p class="description-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum porro eaque cumque at magnam voluptate reiciendis
    assumenda ut ab. Distinctio consequuntur deleniti nulla facilis laboriosam voluptatum obcaecati, facere pariatur
    harum?</p>
</section>
  `;
}
const TARGET_NODE = '.sc-3ey1l1-0.jaCFLV';
const elements = document.querySelectorAll(TARGET_NODE);
const tabElement = document.querySelector('#tabs-container');
if (elements.length > 1 && tabElement === null) {
  const divTarget = elements[2];
  const tabsElement = document.createElement('div');
  tabsElement.id = 'tabs-container';
  tabsElement.innerHTML = `
    <div class="tabs">
      <div class="tab-buttons">
				<button class="tab-button active" onclick="switchTab(event, 'tab1')">Tab 1</button>
				<button class="tab-button" onclick="switchTab(event, 'tab2')">Tab 2</button>
      </div>
      <div class="tab-content">
				<div id="tab1" class="content active">${getTab1Content()}</div>
				<div id="tab2" class="content">${getTab2Content()}</div>
      </div>
    </div>
    `;
  divTarget.parentNode.insertBefore(tabsElement, divTarget);
  const styleSheet = document.createElement('style');
  styleSheet.innerText = getCss();
  document.head.appendChild(styleSheet);
} else {
  console.log(
    `Thes is not enought elements after "${TARGET_NODE}" in the doom.`
  );
}
function switchTab(evt, tabName) {
  const tabcontent = document.querySelectorAll('.content');
  tabcontent.forEach((tab) => (tab.style.display = 'none'));
  const tabbuttons = document.querySelectorAll('.tab-button');
  tabbuttons.forEach(
    (btn) => (btn.className = btn.className.replace(' active', ''))
  );
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}


