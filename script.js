const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

// Eventos, todo evento dispara uma função
button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
  }
  alert("Dia adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
  //JSON.stringify serve para converter um objeto para uma string
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

// JSON.parse serve para transformar uma string em objeto
// "||"" significa "ou" e as "{}" significa um objeto vazio
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
