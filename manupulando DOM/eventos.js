const form = document.getElementById("form")
const noteTitle = document.getElementById("title");
const detailTextArea = document.getElementById("detail")
const containerNotas = document.getElementById("notas-container")


const listaDeNotas = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const titleValue = noteTitle.value.trim()
    const contentValue = detailTextArea.value.trim()

    //Verifica se o cuzao do usuario n colocou valores nulos
    if (titleValue === "" || contentValue === "") {
        alert("Preenche os dois campos ai man")
        return
    }

    const nota = document.createElement("div")
    nota.classList.add("nota")

    const titleNote = document.createElement("h2")
    titleNote.innerText = titleValue

    const paragraph = document.createElement("p")
    paragraph.innerText = contentValue

    const removeElementButton = document.createElement("button")
    removeElementButton.innerText = "Excluir"
    removeElementButton.addEventListener("click", () => {
        nota.remove()
    })

    nota.appendChild(titleNote)
    nota.appendChild(paragraph)
    nota.appendChild(removeElementButton)
    containerNotas.appendChild(nota)

    const dadosDaNota = {

        title: titleValue,
        conteudo: contentValue
    }

    listaDeNotas.push(dadosDaNota);

    salvarInLocal()

})

function salvarInLocal() {
    localStorage.setItem("notas", JSON.stringify(listaDeNotas))
}

