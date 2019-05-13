var listElement = document.querySelector("ul");
var inputElement = document.querySelector("input");

function renderRepositories(repositories) {
  listElement.innerHTML = "";
  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement("li");
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderError(loading) {
  listElement.innerHTML = "";
  var textElement = document.createTextNode("Erro!");
  var errorElement = document.createElement("li");
  errorElement.style.color = "#F00";
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}

function listRepositories() {
  var user = inputElement.value;
  if (!user) return;

  listElement.innerHTML = "";
  var liCarregando = document.createElement("li");
  var textCarregando = document.createTextNode("Carregando...");
  liCarregando.appendChild(textCarregando);
  listElement.appendChild(liCarregando);

  axios
    .get("https://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      renderRepositories(response.data);
    })
    .catch(function() {
      renderError();
    });
}
