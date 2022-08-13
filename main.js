const url = 'http://api.github.com/users'

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(`Erro: /n/n ${error}`))
}

function getUser() {
    const urlComParm = `${url}\/rdmuller`
    fetch(urlComParm)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

getUser()