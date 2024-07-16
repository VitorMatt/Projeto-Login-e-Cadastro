let mensagem = document.getElementById('mensagem')
let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let email = document.getElementById('email')
let cpf = document.getElementById('cpf')
let senha = document.getElementById('senha')
let confirmacaoSenha = document.getElementById('confirmacaoSenha')

function cadastrar(){
     
    let cadastroUsuario = {nome: nome.value, cpf: cpf.value, idade: idade.value, email: email.value, senha: senha.value}

    usuario = JSON.stringify(cadastroUsuario)
    localStorage.setItem("Usuario", usuario)

    senhaUsuario = JSON.stringify(senha.value)
    localStorage.setItem('Senha Usuario', senhaUsuario)

    emailUsuario = JSON.stringify(email.value)
    localStorage.setItem('Email Usuario', emailUsuario)
}

function cadastro(){

    cadastrar()

    let checkbox = document.getElementById('checkbox')
            
    if (checkbox.checked && senha.value==confirmacaoSenha.value){

        window.location.href='login.html'
    } else if (checkbox.checked && senha.value!=confirmacaoSenha.value) {

        mensagem.innerHTML = 'As senhas devem ser iguais!'
    } else {

        mensagem.innerHTML = 'Aceite os termos para se cadastrar.'
    }
}

function login(){

    let senhaDigitada = document.getElementById('senhaDigitada')
    let emailDigitado = document.getElementById('emailDigitado')
    let emailDoLocalStorage = JSON.parse(localStorage.getItem('Email Usuario'))
    let senhaDoLocalStorage = JSON.parse(localStorage.getItem('Senha Usuario'))

    if (senhaDigitada.value==senhaDoLocalStorage && emailDigitado.value==emailDoLocalStorage){

        alert('Login efetuado!')
    } else if (senhaDigitada.value!=senhaDoLocalStorage && emailDigitado.value==emailDoLocalStorage){

        mensagem.innerHTML = 'Senha incorreta!'
    } else if (senhaDigitada.value==senhaDoLocalStorage && emailDigitado.value!=emailDoLocalStorage){

        mensagem.innerHTML = 'Email incorreto!'
    } else if (senhaDigitada.value!=senhaDoLocalStorage && emailDigitado.value!=emailDoLocalStorage) {

        mensagem.innerHTML = 'Email e senha incorretos!'
    }
}