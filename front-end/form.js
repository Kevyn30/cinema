

const form = document.getElementById("form")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendForm()
})
function sendForm(){
    const Server_URL= "http://localhost:3334/cinema"
    const newBody = {}
    for(field of document.getElementById("form").elements) {
        newBody[field.id] = field.value
    }
    console.log(newBody)
    fetch(Server_URL, {method:"POST", body: JSON.stringify(newBody), headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }})
    window.alert("Deu certo!")
}