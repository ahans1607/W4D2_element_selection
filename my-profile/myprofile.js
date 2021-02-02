// console.log("this is working!")

window.addEventListener("DOMContentLoaded", event => {
    
    let h1 = document.createElement('h1');
    let name = document.createTextNode("Tom Brady");
    h1.setAttribute('id', 'name');
    h1.appendChild(name);

    document.body.appendChild(h1);

    

})