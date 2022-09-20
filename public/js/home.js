const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);

//ADICIONAR LANÇAMENTO
document.getElementById("transaction-form").addEventListener("submit", function(e) {
    e.preventDefault

    const valeu = parseFloat(document.getElementById("value-input").valeu);
    const description = document.getElementById("description-input").valeu;
    const data = document.getElementById("date-input").valeu;
    const type = document.querySelector('input[name="type-input"]:checked').valeu;

    data.transactions.unshift({
        valeu: valeu, type: type, description: description, data: data
    });

    saveData(data);
    e.target.reset();
    myModal.hide();

    alert("Lançamento adicionado com sucesso.");

});

checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if(dataUser) {
        data = JSON.parse(dataUser);
    }

}

function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function saveData(data){
    localStorage.setItem(data.lodin, JSON.stringify(data));
}