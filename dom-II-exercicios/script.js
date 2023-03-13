const clone = document.getElementsByClassName("item")[0]

const adicionaItem = (event) => {        
    document.getElementById("container").appendChild(clone.cloneNode(true))
}
const removeItem = (event) => {
    document.getElementById("container").removeChild(event.target)    
}
