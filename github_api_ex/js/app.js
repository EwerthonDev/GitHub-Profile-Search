var ElementUsername = document.querySelector("#busca input[name=username]");
var ElementSearch = document.querySelector("#busca button[name=buscar]");
var ElementResponse = document.querySelector("#res .elementos_resposta");
ElementSearch.setAttribute("onclick", "buscar()");
ElementUsername.value = '';
function buscar() {
    var conexao = new XMLHttpRequest();
    var username = ElementUsername.value;
    conexao.open('GET', `https://api.github.com/users/${username}`);
    conexao.send(null);
    conexao.onreadystatechange = function () {
        if (conexao.readyState === 4) {
            var perfil = JSON.parse(conexao.responseText);
            ElementResponse.innerHTML = `
            <p class="user"> <b>${perfil.login}</b></p>
            <p class="name"><b>Name</b> 👉 ${perfil.name}</p>
            <p class="bio"><b>Bio</b> 👉 ${perfil.bio}</p>
            <figure><img clas="img" src="${perfil.avatar_url}"></figure>
            <p clas="local"><b>Local</b> 👉 ${perfil.location}</p>
            <p class="conta"><b>Account Created on</b> 👉 ${perfil.created_at}</p>
            `
            ElementUsername.value = '';
        }
    }
}
