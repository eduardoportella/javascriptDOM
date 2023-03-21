function cadastraJogador() {
   const lblNome = document.querySelector('#nome');
   const lblPosicao = document.querySelector("#posicao");
   const lblNum = document.querySelector("#numero");
   const escalacao = document.querySelector('#escalacao');

   if ((lblNome.value && lblPosicao.value && lblNum.value) != ''){
      window.alert("Confirma cadastro?")
      const resJogador = document.createElement("p");

      escalacao.appendChild(resJogador);

      resJogador.innerHTML = 
         `Nome: ${lblNome.value} | Posicao: ${lblPosicao.value} | Numero: ${lblNum.value}`;
      resJogador.id = `jogador${lblNum.value}`

      lblNome.value = '';
      lblPosicao.value = '';
      lblNum.value = '';
   } else {
      window.alert("Erro");
   }
}

function removeJogador(){
   const lblNome = document.querySelector('#nome');
   const lblPosicao = document.querySelector("#posicao");
   const lblNum = document.querySelector("#numero");
   const escalacao = document.querySelector("#escalacao");
   const jogador = document.querySelector(`#jogador${lblNum.value}`);
   window.alert("Remover Jogador?");
   escalacao.removeChild(jogador);

   lblNome.value = '';
   lblPosicao.value = '';
   lblNum.value = '';
}