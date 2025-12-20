
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function listTasks() {
    let list = "Tarefas:\n";
    tasks.map((task, index) => {
        const taskStatus = task.concluida ? "[X]" : "[ ]";
        list += `${index + 1}. ${taskStatus} ${task.name}\n`
    })

    return list;
}

function showTasks() {

    if (tasks.length === 0) {
        alert("Nenhuma tarefa encontrada");
        return
    }

    alert(listTasks());
}

function addTask() {

    const name = prompt("Digite a task que deseja adicionar: ");
    if (!name) return;

    tasks.push({
        name,
        concluida: false
    })
    saveInLocal()
}

function updateTaskStatus() {

    const lista = listTasks();

    const selectTask = Number(prompt(`${lista}\n\n Selecione a tarefa concluida: `)) - 1

    if (tasks[selectTask]) {

        tasks[selectTask].concluida = !tasks[selectTask].concluida;

    } else {
        alert("Tarefa Inexistente")
    }
    saveInLocal()

}

function removeTask() {

    const lista = listTasks();

    const taskSelected = Number(prompt(`${lista}\n\n Selecione a tarefa a remover: `)) - 1

    if (tasks[taskSelected]) {
        tasks = tasks.filter((_, index) => index !== taskSelected)
    } else {
        alert("Tarefa não encontrada")
    }
    saveInLocal()

}

function saveInLocal() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function init() {

    let option = "";

    while (option !== "0") {
        option = prompt("1: Adicionar Tarefas \n2: Listar Tarefas \n3: Atualizar Status \n4: Remover Tarefas \n0: Sair")

        switch (option) {
            case '1':
                addTask();
                break
            case '2':
                showTasks();
                break
            case '3':
                updateTaskStatus();
                break
            case '4':
                removeTask();
                break
            case '0':
                break
            default:
                alert("Opção invalida!")
                break
        }

    }

}

init()