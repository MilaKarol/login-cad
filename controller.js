// FUNÇÃO PARA VALIDAÇÃO DE ACESSO
function acessar() {
    // OBTÉM O VALOR DO CAMPO DE E-MAIL
    let loginEmail = document.getElementById('loginEmail').value;
    // OBTÉM O VALOR DO CAMPO DE SENHA 
    let loginSenha = document.getElementById('loginSenha').value;

    // VERIFICA SE AMBOS OS CAMPOS FORAM PREENCHIDOS 
    if (!loginEmail || !loginSenha) {
        // EXIBE UMA MENSAGEM DE ALERTA SE ALGUM CAMPO ESTIVER VAZIO 
        alert("Favor preencher todos os campos");
    }else if(document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1){
            alert("Favor preencher seu Email corretamente!");
    } else {    
        // EXIBE UMA MENSAGEM DE SUCESSO SE AMBOS OS CAMPOS FORAM PREENCHIDOS
        alert("Campos preenchidos com sucesso");
        // REDIRECIONA PARA A PÁGINA 'cadastro.html'
        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO PARA ARMAZENAMENTO DE NOMES EM ARRAY
var dadosLista = [];
var EmailLista = [];

function salvarUser() {
    // OBTÉM O VALOR DO CAMPO DE NOME DE USUÁRIO 
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    // VERIFICAR SE O CAMPO DE NOME DO USUÁRIO FOI PREENCHIDO 
    if ( document.forms[0].emailcad.value == "" ||
        document.forms[0].emailcad.value.indexOf('@') == -1 ||
        document.forms[0].emailcad.value.indexOf('.') == -1) {
            alert("Favor informe seu Email corretamente!");
       
    }else if(nomeUser){
         // ADICIONAR O NOME DO USUÁRIO AO ARRAY 'dadosLista'
         dadosLista.push(nomeUser);
         EmailLista.push(emailUser);
         // CRIAR A LISTA DE USUÁRIOS NA TABELA
         criaLista();
         // LIMPAR O CAMPO DE NOME DO USUÁRIO APÓS SALVAR
         document.getElementById('nomeUser').value = "";
         document.getElementById('emailUser').value = "";
           
    } else {
        // EXIBE UMA MENSAGEM DE ALERTA SE O CAMPO DE NOME ESTIVER VAZIO
        alert("Favor informe um nome para cadastro");
    }
}



// FUNÇÃO QUE CRIA LISTA DE USUÁRIOS
function criaLista() {
    // INICIAE A TABELA COM O CABEÇALHO 
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    
    // PERCORRE O ARRAY 'dadosLista' E ADICIONA CADA NOME COMO UMA NOVA LINHA NA TABELA 
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td><button type='button' onclick='editar(" + (i + 1) + ")'>Editar</button><button type='button' onclick='excluir(" + (i + 1) + ")'>Excluir</button></td></tr>";
    
    
    // ATUALIZA O CONTEÚDO DO ELEMENTO HTML COM ID 'tabela' COM A NOVA TABELA
    document.getElementById('tabela').innerHTML = tabela;
    }
}

    // FUNÇÃO QUE EDITA NOMES NA LISTA
function editar(i) {
    // PREENCHE O CAMPO DE NOME DO USUÁRIO COM O VALOR SDA LINHA SELECIONAR
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById('emailUser').value = EmailLista[(i - 1)];
    // REMOVE O NOME SELECIONADOR DO ARRAY 'dadosLista'
    dadosLista.splice(i - 1, 1);
    EmailLista.splice(i - 1, 1);
}

// FUNÇÃO PARA EXCLUIR O NOME DA LISTA
function excluir(i) {
    // REMOVE O NOME SELECIONADO DO ARRAY 'dadosLista' COM BASE NO ÍNDICE 
    dadosLista.splice(i - 1, 1);
    EmailLista.splice(i - 1, 1);
    // REMOVE A LINHA CORRESPONDENTE DA TABELA
    document.getElementById('tabela').deleteRow(i);
}
