# Projeto de Cadastro de Usuários 🖋️

Este projeto é uma aplicação web simples para cadastrar, listar, editar e excluir nomes de usuários e seus e-mails. 
A interface permite ao usuário inserir um nome e um e-mail, que são armazenados em uma lista e exibidos em uma tabela. As funções de edição e exclusão estão disponíveis diretamente na tabela.


# Estrutura do Projeto 🔩

index.html: Página principal que contém a interface de login.

cadastro.html: Página de cadastro de usuários.

controller.js: Contém as funções JavaScript responsáveis pela lógica de manipulação dos dados e validação.

main.css: (Opcional) Arquivo de estilos CSS para customizar a aparência da aplicação.

Bootstrap: Biblioteca CSS externa para facilitar o uso de componentes visuais como botões e tabelas.

# 1. Interface de Usuário 🕶️

A interface da aplicação consiste em:

Página de Login:

Campos de entrada para e-mail e senha.
Botão "Acessar" que valida os campos e redireciona para a página de cadastro se os campos estiverem preenchidos corretamente.


# Página de Cadastro: 📝

Campos de entrada para o nome do usuário e e-mail.

Botão "Salvar" que adiciona os dados a uma lista.

Tabela que exibe todos os nomes e e-mails cadastrados, com botões para editar e excluir cada entrada.

# 2. Funcionalidades ⚙️

Validação de Acesso:

acessar(): Valida se os campos de e-mail e senha estão preenchidos corretamente. Se o e-mail não for válido ou algum campo estiver vazio, uma mensagem de alerta é exibida. Caso contrário, o usuário é redirecionado para a página de cadastro.

Adicionar Usuário:

salvarUser(): Salva o nome e o e-mail do usuário em arrays (dadosLista e EmailLista). Se o nome ou e-mail não estiverem preenchidos ou válidos, uma mensagem de alerta é exibida.

Listar Usuários:

criaLista(): Gera a tabela com os nomes e e-mails cadastrados e insere botões de ação (editar/excluir) para cada entrada.

Editar Usuário:

editar(i): Permite editar um nome e e-mail na lista, carregando os dados selecionados nos campos de entrada e removendo a entrada da tabela até que seja salva novamente.

Excluir Usuário:

excluir(i): Remove um nome e e-mail da lista e da tabela.

# 3. Código JavaScript 🧾

O arquivo controller.js contém as funções que gerenciam as interações do usuário:

## Neste campo mostra a validação de acesso

No código, foi implementada uma função para garantir que os campos de e-mail e senha estejam corretamente preenchidos antes de permitir que o usuário prossiga. A função captura os valores dos campos, verifica se ambos estão preenchidos e valida o e-mail, checando a presença do: @ (arroba) e do .(ponto). Se houver algum erro, uma mensagem de alerta é exibida. Caso contrário, uma mensagem de sucesso aparece e o usuário é redirecionado para a página de cadastro.

````

// Validação de acesso
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert("Favor preencher todos os campos");
    } else if(document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1){
            alert("Favor preencher seu Email corretamente!");
    } else {
        alert("Campos preenchidos com sucesso");
        window.location.href = 'cadastro.html';
    }
} 

````
## Armazenamento de nome e e-mail

No código abaixo, foram realizadas alterações para assegurar a validação de um email que deve ser informado pelo usuário, no ato do preenchimento dos campos. Caso o usuário não coleque na email informado, elementos próprios desse tipo de dado, como: @ (arroba) e . (ponto), a validação informará, através de uma mensagem que aparecerá na tela, que o email informado não é válido. 

````
// Armazenamento de nomes e e-mails
var dadosLista = [];
var EmailLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    if (document.forms[0].emailcad.value == "" ||
        document.forms[0].emailcad.value.indexOf('@') == -1 ||
        document.forms[0].emailcad.value.indexOf('.') == -1) {
            alert("Favor informe seu Email corretamente!");
    } else if(nomeUser) {
         dadosLista.push(nomeUser);
         EmailLista.push(emailUser);
         criaLista();
         document.getElementById('nomeUser').value = "";
         document.getElementById('emailUser').value = "";
    } else {
        alert("Favor informe um nome para cadastro");
    }
} 
````
## Neste campo mostra como foi criada a lista de usuários

A função criaLista() gera e exibe uma tabela com todos os usuários cadastrados. Ela cria o cabeçalho da tabela e, usando um loop, adiciona uma linha para cada usuário, incluindo o nome, o e-mail e botões para "Editar" e "Excluir". Cada botão chama as funções editar() e excluir() com o índice do usuário. A tabela resultante é então exibida no elemento HTML com o ID tabela, atualizando a visualização com as informações mais recentes.

````
// Criação da lista de usuários
function criaLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + EmailLista[i] + "</td><td><button type='button' onclick='editar(" + (i + 1) + ")'>Editar</button><button type='button' onclick='excluir(" + (i + 1) + ")'>Excluir</button></td></tr>";
    }
    document.getElementById('tabela').innerHTML = tabela;
}

````
## Neste campo mostra a edição de usuários

A função editar(i) é responsável por permitir a edição dos dados de um usuário na tabela.
A função preenche os campos de entrada nomeUser e emailUser com os valores do usuário selecionado, baseando-se no índice i.
Após preencher os campos de edição, a função remove a entrada correspondente dos arrays dadosLista e EmailLista usando o método splice().
Esta função permite ao usuário modificar os dados diretamente na tabela, carregando os valores para os campos de edição e removendo a entrada antiga para ser substituída por uma nova.

````

// Edição de usuários
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    document.getElementById('emailUser').value = EmailLista[(i - 1)];
    dadosLista.splice(i - 1, 1);
    EmailLista.splice(i - 1, 1);
}

````

## Neste campo msotra como foi feito a máscara de CPF


Para assegurar que o CPF seja exibido no formato correto (###.###.###-##), o código abaixo foi implementado. Ele utiliza um evento de input para aplicar a máscara enquanto o usuário digita o CPF.
O código remove qualquer caractere que não seja número e, em seguida, formata a entrada adicionando pontos e hífen nos lugares apropriados.


````

// Aplicação de máscara no campo CPF
document.getElementById('cpfUser').addEventListener('input', function (e) {
    let cpf = e.target.value;
    cpf = cpf.replace(/\D/g, ""); // Remove tudo que não for dígito
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    e.target.value = cpf;
});

````

## Neste campo mostra a exclusão de usuários

A função excluir(i) é responsável por remover um usuário da tabela e das listas de dados.
A função remove a entrada correspondente do array dadosLista e do array EmailLista usando o método splice().
Em seguida, remove a linha correspondente da tabela HTML utilizando o método deleteRow().
Esta função assegura que a entrada do usuário seja excluída tanto da lista de dados quanto da visualização na tabela.

````

// Exclusão de usuários
function excluir(i) {
    dadosLista.splice(i - 1, 1);
    EmailLista.splice(i - 1, 1);
    document.getElementById('tabela').deleteRow(i);
}

````

# Tecnologias Utilizadas 💻

HTML5

JavaScript

Bootstrap 5

# Tela do projeto 🏞️

<img src="cap0.png" width=400px>

<img src="cap1.png" width=400px>

<img src="cap2.png" width=400px>