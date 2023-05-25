let login = document.querySelector("#login");
let senha = document.querySelector("#senha");
let btn = document.querySelector(".botn");

btn.addEventListener("click", () => {
    if (login.value =="login"&& senha.value == "senha")
    {
        window.open("index.html");
    }

    else{
        print(bah)
    }
});