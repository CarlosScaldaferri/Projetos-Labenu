let nacionalidadesValidas = ["brasileira", "Argentina", "uruguaia", "chilena", "colombiana"].map(v => v.toLowerCase()) 


if (verificaNacionalidade(prompt("Escreva aqui sua nacionalidade")))
    alert("Nacionalidade valida")
else
    alert("Nacionalidade não encontrada")


function verificaNacionalidade(nacionalidade)
{
    return (nacionalidadesValidas.indexOf(nacionalidade.toLocaleLowerCase()) !== -1)
}

