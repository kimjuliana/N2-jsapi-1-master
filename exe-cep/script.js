let cep = ();


fetch('`https://viacep.com.br/ws/' + '/json/`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log("SUCESSO!!")
    console.log(data)
})
.catch(function(erro){
    console.log(erro)
})