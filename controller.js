// VALIDAR ACESSO EM TELA DE LOGIN
 
function acessar() { // CRIA UMA FUNÇÃO  QUE VALIDA OQUE FOI ESCRITO NOS CAMPOS DE LOGIN
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if (loginEmail == "" || loginEmail.indexOf("@") == -1 || loginEmail.indexOf(".") == -1) {
        alert("Por favor, informe um e-mail válido");
    }else if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos"); // Mostra Pop-up caso usuário não preencha corretamente os campos de Login.
    } else {
        //alert("Campos preenchidos com sucesso");
        window.location.href = "cadastro.html"; // Ao preencher os campos corretamente ele te direciona a outra página
    }
}

// Arrays para armazenar os dados dos usuários
var dadosLista = [];
var EmailLista = [];
var cpfLista = [];

// Função que adiciona máscara ao CPF conforme o usuário digita
document.getElementById('cpfUser').addEventListener('input', function (e) {
    let cpf = e.target.value;
    
    // Remove tudo o que não for dígito
    cpf = cpf.replace(/\D/g, "");
    
    // Adiciona a formatação do CPF (###.###.###-##)
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    e.target.value = cpf; // Atualiza o valor do campo com o CPF formatado
});

// Função para salvar um usuário
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
    let cpfUser = document.getElementById('cpfUser').value;

    // Verifica se o e-mail é válido
    if (emailUser === "" || emailUser.indexOf('@') === -1 || emailUser.indexOf('.') === -1) {
        alert("Favor informe seu E-mail corretamente!");
    } else if (cpfUser === "" || cpfUser.length !== 14) { // O CPF formatado terá 14 caracteres
        alert("Favor informe um CPF válido!");
    } else if (nomeUser) {
        // Adiciona os dados aos arrays
        dadosLista.push(nomeUser);
        EmailLista.push(emailUser);
        cpfLista.push(cpfUser);

        // Atualiza a lista
        criaLista();

        // Limpa os campos após salvar
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
        document.getElementById('cpfUser').value = "";
    } else {
        alert("Favor informe um nome para cadastro");
    }
}

// Função que cria a lista de usuários na tabela
function criaLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td>" + cpfLista[i] + "</td><td><button type='button' onclick='editar(" + i + ")'>Editar</button> <button type='button' onclick='excluir(" + i + ")'>Excluir</button></td></tr>";
    }

    document.querySelector("#tabela tbody").innerHTML = tabela;
}

// Função para editar um usuário
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i];
    document.getElementById('emailUser').value = EmailLista[i];
    document.getElementById('cpfUser').value = cpfLista[i];

    // Remove o usuário da lista para ser atualizado
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);

    criaLista();
}

// Função para excluir um usuário
function excluir(i) {
    dadosLista.splice(i, 1);
    EmailLista.splice(i, 1);
    cpfLista.splice(i, 1);
    criaLista();
}
