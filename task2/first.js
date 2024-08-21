async function postApi() {
    let data = {
        "email": document.querySelector("#email").value,
        "password": document.querySelector("#pswd").value,
    };

    let res = await fetch("https://reqres.in/api/login", { "method": "POST", body: JSON.stringify(data), headers: { "content-type": "application/json" } });
    console.log(res);
    let jsonofres = await res.json();
    console.log(jsonofres);

}

document.querySelector(".postApi").addEventListener("click", postApi);
