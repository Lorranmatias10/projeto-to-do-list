function adicionarTarefa() {
    const textInput = document.querySelector("input").value

    const li = document.createElement("li")
    li.innerHTML = textInput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ''
}

function deletarTarefa(li) {
    li.parentElement.remove()
}