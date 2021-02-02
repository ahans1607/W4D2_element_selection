// console.log("this is working!")

window.addEventListener("DOMContentLoaded", event => {
    
    let h1 = document.createElement('h1');
    let name = document.createTextNode("Johnny Appleseed");
    h1.setAttribute('id', 'name');
    h1.appendChild(name);
    document.body.appendChild(h1);

    


    let ul = document.createElement('ul')
    ul.setAttribute('id', "list")
   

    let item1 = document.createElement('li')
    item1.innerText = "I am a person"
    let item2 = document.createElement('li')
    item2.innerText = "My first name is Johnny"
    let item3 = document.createElement('li')
    item3.innerText = "My last name is Appleseed"
    let item4 = document.createElement('li')
    item4.innerText = "I like planting apple trees"

    ul.appendChild(item1)
    ul.appendChild(item2)
    ul.appendChild(item3)
    ul.appendChild(item4)

    document.body.appendChild(ul)

})