// colocar as regras de negócio do cadastro do sistema

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"CPF deve ter 11 dígitos."}
  }
  return {valido:true, texto:""}
}

function validarSenha(senha) {
  if(senha.length < 4 || senha.length > 72) {
    return {valido:false, texto:"Senha deve ter entre 4 e 72 dígitos."}
  }
  return {valido:true, texto:""}
}

export {validarCPF, validarSenha};