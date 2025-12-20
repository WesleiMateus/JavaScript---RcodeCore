function getUser(id, callback) {
    console.log("Buscando usuário referente ao ID: ", id)

    setTimeout(() => {
        const user = { name: "Weslei", age: 20 }
        callback(user)
    }, 2000)
}

getUser(1, (data) => {
    console.log("User encontrado: ", data.name,"", data.age, "anos")
})