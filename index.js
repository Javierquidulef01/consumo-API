
document.addEventListener('DOMContentLoaded', () => {

    function getCard(idUser, email, first_name, last_name, urlAvatar) {
        let divCard = document.createElement("div");
            divCard.classList.add("card", "mx-auto", "my-4");
            divCard.setAttribute("style", "width: 18rem;");
            divCard.setAttribute("id", ("user-" + idUser));
        
        let divCardBody = document.createElement("div");
            divCardBody.classList.add("card-body");

        let h5 = document.createElement("h5");
            h5.classList.add("card-title");
            h5.innerHTML = `${first_name} ${last_name}`;

        let p = document.createElement("p");
            p.classList.add("card-text");
            p.innerHTML = `${email}`;

        let img = document.createElement("img");
            img.setAttribute("class", "card-img-top");
            img.setAttribute("alt", "user avatar");
            img.setAttribute("src", urlAvatar);

        divCardBody.appendChild(h5);
        divCardBody.appendChild(p);

        divCard.appendChild(img);
        divCard.appendChild(divCardBody);

        return divCard;
    }

    function insertElement (id, email, first_name, last_name, avatar) {
        let card = getCard(id, email, first_name, last_name, avatar);
        document.getElementById("row-1").appendChild(card);
    }

    function insertUsers(users) {
        console.log("USERS");
        console.log(users);
        let divContainer = document.createElement("div");
            divContainer.setAttribute("class", "container");
            document.body.appendChild(divContainer);

        let divRow = document.createElement("div");
            divRow.setAttribute("class", "row");
            divRow.setAttribute("id", "row-1");
            divContainer.appendChild(divRow);

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            insertElement(user.id, user.email, user.first_name, user.last_name, user.avatar);
        }
        
    }
    
   function getUsers(url, callback) {
        fetch(url)
        .then(response => {
            console.log("RESPONSE:");
            console.log(response);
            return response.json();
        })
        .then(json => {
            console.log("RESPONSE.JSON()");
            console.log(json);
            callback(json.data);
        })
        .catch(error => {
            console.log("CATCH ERROR");
            console.log(error);
        });
    }

    const URL = "https://reqres.in/api/users?page=2";
    getUsers(URL, insertUsers);

});
