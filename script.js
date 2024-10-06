function card()
{
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let phone = document.querySelector('#phone').value
    let designation = document.querySelector('#designation').value
    let address = document.querySelector('#adress').value
    let img = document.querySelector('#img').value

    console.log(name,email,phone,designation,address,img);

    let d = `<section id="card">
        <div>
            <img src="${img}" alt="">
        </div>
        <div>
            <h1>${name}</h1>
            <h3>${email}</h3>
            <h3>${phone}</h3>
            <h3>${designation}</h3>
            <h3>${address}</h3>
        </div>
    </section>`;

    document.querySelector('#output').innerHTML = d;
    document.querySelector('form').style.display = "none";

    return false;
}