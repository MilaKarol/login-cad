//VALIDAÇÃO DE CPF
 
// adiciona escutador á página
document.getElementById('cpfForm').addEventListener('submit', function(event){
    event.preventDefault();
 
    const cpf = document.getElementById('cpf').value; const msg = document.getElementById('message');
 
    if(validarCPF(cpf)){
        msg.textContent = "O CPF é válido!";
        msg.style.color = 'green';
    }else{
        msg.textContent = "O CPF é inválido!";
        msg.style.color = 'red';
 
    }
}
 
 
);
 
// Função de cálculo de validação do CPF
function validarCPF(cpf){
     cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
 
    //Verificar se o valor informado contém 11 dígitos e se todos os dígitos são iguais
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    }
 
 
    let soma = 0
    let resto;
   
 
//Validação do primeiro dígito verificador
for(let i = 1; i <= 9; i++){
    soma += parseInt(cpf.substring(i-1, i )) * (11 - i);
}
 
resto = (soma * 10) % 11;
if((resto === 10) || (resto === 11)) {
   
 
}
 
if(resto !== parseInt(cpf.substring(9,10))){
    return false;
 
}
soma = 0;
 
// Validar 11 dígito CPF - 2° dígito verificador ]
 
for(let i = 1; i <= 10; i++){
    soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
 
}
 
resto = (soma * 10) % 11;
if((resto === 10) || (resto === 11)){
    resto = 0;
}
 
if(resto !== parseInt(cpf.substring(10,11))){
    return false;
 
}
 
return true;
 
}