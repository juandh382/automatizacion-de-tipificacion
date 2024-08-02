let clients = []

async function loadData() {
    const res = await fetch('http://127.0.0.1:5500/db/database.json')
    const { data } = await res.json()
    clients = data
    console.log(clients)
}


function handleSubmit(e) {
    e.preventDefault();
    const client = clients.find(obj => obj.cuenta == e.target.querySelector('input').value)

    if (!client) {
        return alert('Oops, there was an error')
    }
    showClientsData(client)
}

function showClientsData(client) {
    document.querySelector('#cuenta').textContent = client.cuenta
    document.querySelector('#telefono').textContent = client.telefono
    document.querySelector('#cedula').textContent = client.cedula
    document.querySelector('#status').textContent = client.status
}


window.addEventListener('DOMContentLoaded', async function () {
    document.querySelector('#form-container form').addEventListener('submit', handleSubmit)

    await loadData()
});