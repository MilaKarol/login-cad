# Projeto de Cadastro de Usuários

Este projeto é uma aplicação web simples para cadastrar, listar, editar e excluir nomes de usuários. A interface permite ao usuário inserir um nome, que é armazenado em uma lista e exibido em uma tabela. As funções de edição e exclusão estão disponíveis diretamente na tabela.

# Estrutura do Projeto

index.html: A página principal que contém a interface de cadastro.

controller.js: Contém as funções JavaScript responsáveis pela lógica de manipulação dos dados.

main.css: (Opcional) Arquivo de estilos CSS para customizar a aparência da aplicação.

Bootstrap: Biblioteca CSS externa para facilitar o uso de componentes visuais como botões e tabelas.


# 1. Interface de Usuário
A interface da aplicação consiste em um campo de entrada para o nome do usuário e um botão "Salvar".
 Abaixo do formulário, há uma tabela que exibe todos os nomes de usuários cadastrados, com botões para editar e excluir cada nome.

# 2. Funcionalidades
Adicionar Usuário:

O usuário insere um nome no campo de texto e clica no botão "Salvar".
O nome é adicionado a um array (dadosLista) e exibido na tabela abaixo.
Editar Usuário:

Cada linha na tabela tem um botão "Editar". Ao clicar, o nome é carregado no campo de entrada, permitindo que o usuário faça alterações.

Ao salvar novamente, o nome é atualizado na lista.
Excluir Usuário:

Cada linha na tabela também tem um botão "Excluir". Ao clicar, o nome correspondente é removido da lista e da tabela.

# 3. Código JavaScript

O arquivo controller.js contém as funções que gerenciam as interações do usuário:
acessar(): Valida o acesso, garantindo que os campos de e-mail e senha sejam preenchidos.

salvarUser(): Salva o nome do usuário no array dadosLista e atualiza a tabela.

criaLista(): Gera a tabela com os nomes cadastrados e insere botões de ação (editar/excluir).

editar(i): Permite editar um nome na lista, carregando o nome selecionado no campo de entrada.

excluir(i): Remove um nome da lista e da tabela.


# Tecnologias Utilizadas

HTML5

JavaScript

Bootstrap 5

# Tela do projeto

<img src="img/projeto1.png">
