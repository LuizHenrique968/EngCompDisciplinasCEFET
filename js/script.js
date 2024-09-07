/*
  classList
*/

let links = document.querySelectorAll(".pagina");

links.forEach(link => {
  link.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
  });
});


// Mostrar as matérias ao clicar no período
let periodos = document.querySelectorAll(".periodo");

periodos.forEach(periodo => {
  periodo.addEventListener("click", () => {
    // Seleciona o próximo elemento irmão que é a lista de matérias
    let materias = periodo.nextElementSibling;

    // Alterna a classe "escondido" para mostrar ou esconder as matérias
    materias.classList.toggle("escondido");
  });
});



function mostrarMaterias() {
  const semestre = document.getElementById('semestre').value;
  const materiasDiv = document.getElementById('materias');

  let materiasHtml = '';

  if (semestre == '1') {
      materiasHtml = `
          <ul>
              <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P01_09_IINS_2023.pdf">INGLÊS INTRUMENTAL.</a></li>
              <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P01_10_LIBR_2023.pdf">LIBRAS I.</a></li>
          </ul>
      `;
  } else if (semestre === '2') {
      materiasHtml = `
          <ul>
          <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P01_09_IINS_2023.pdf">PROGRAMAÇÃO WEB.</a></li>
          <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P02_12_LPTA0_2023.pdf">LEITURA E PRODUÇÃO DE TEXTOS ACADÊMICOS.</a></li>
          <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P02_10_QBAS0_2023.pdf">QUÍMICA BÁSICA.</a></li>
          <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P02_11_LQBA0_2023.pdf">LABORATÓRIO DE QUÍMICA BÁSICA.</a></li>
          </ul>
      `;
  } else if (semestre === '3') {
    materiasHtml = `
        <ul>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P03_11_ALIN0_2023.pdf">ÁLGEBRA LINEAR.</a></li>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P03_12_INEC0_2023.pdf">INTRODUÇÃO À ECONOMIA.</a></li>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P04_11_BDAD3_2023.pdf">BANCO DE DADOS III.</a></li>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P04_12_INST0_2023.pdf">INSTRUMENTAÇÃO.</a></li>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P04_13_LINS0_2023.pdf">LABORATÓRIO DE INSTRUMENTAÇÃO.</a></li>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P04_14_PHDL0_2023.pdf">PROGRAMAÇÃO EM HDL.</a></li>
        <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/07/PE_P04_15_RCOM3_2023.pdf">REDES DE COMPUTADORES III.</a></li>
        </ul>
    `;
} else {
      materiasHtml = `<p>Atualmente, não há tópicos optativos para este semestre. Fique atento a futuras atualizações!</p>`;
  }

  materiasDiv.innerHTML = materiasHtml;

   // Adicionar tópicos especiais
   if (semestre === '4') { 
    const topicosEspeciaisDiv = document.createElement('div');
    topicosEspeciaisDiv.innerHTML = `
        <h3>TÓPICOS ESPECIAIS:</h3>
        <ul>
            <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/08/PE_P04_TEFEC_001.pdf">PROGRAMAÇÃO EM LINGUAGEM C.</a></li>
        </ul>
    `;
    materiasDiv.appendChild(topicosEspeciaisDiv);
} 
 else if(semestre === '5'){
    const topicosEspeciaisDiv = document.createElement('div');
    topicosEspeciaisDiv.innerHTML = `
        <h3>TÓPICOS ESPECIAIS:</h3>
        <ul>
            <li><a href="https://www.eng-computacao.timoteo.cefetmg.br/wp-content/uploads/sites/197/2024/08/PE_P05_TEFEC_002.pdf">MATLAB.</a></li>
        </ul>
    `;
    materiasDiv.appendChild(topicosEspeciaisDiv);
}
}


/*
  Salva os dados no localStorage/sessionStorage
 */

const login = () => {
    const usuario = document.getElementById('login-usuario');
    const senha = document.getElementById('login-senha');
    const lembrar = document.getElementById('login-lembrar');

    if(usuario.value.trim() == 'adm' && senha.value.trim() == 'adm'){
        document.getElementById("modal").classList = 'off';
        if(lembrar.checked){
            localStorage.setItem('usuario', 'adm');
            localStorage.setItem('senha', 'adm');
        }else{
            sessionStorage.setItem('usuario', 'adm');
            sessionStorage.setItem('senha', 'adm');
        }
    }else{
        alert("usuário e/ou senha inválidos")
    }
}

/**
 * Limpa os dados do localStorage / sessionStorage
 */
const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("senha");
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    document.getElementById("cards").innerHTML = '';
    document.getElementById("modal").classList = 'on';
}

//Se tem usuário logado, carrega os dados. Se não, exibe a modal de login.
if(localStorage.getItem("usuario") || sessionStorage.getItem("usuario")){
    loadData();
}else{
    document.getElementById("modal").classList = "on"
}