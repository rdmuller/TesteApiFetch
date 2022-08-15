const url = 'http://api.github.com/users'

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(`Erro: /n/n ${error}`))
}

function getUser(nome) {
    fetch(`${url}\/${nome}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userId.textContent = data.id
        userAvatar.src = data.avatar_url
    })
    .catch(error => console.error(error))
}

getUsers()
getUser("rdmuller")

// exemplo de post
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alert.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "Joao",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Farroupilha"
}

//addUser(newUser)

const updatedUser = {
    name: "Joao 2",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Farroupilha"
}

// exemplo de put
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, { // vai atualizar o id que veio por parâmetro
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alert.textContent = data)
    .catch(error => console.error(error))
}

//updateUser(updatedUser, 1)