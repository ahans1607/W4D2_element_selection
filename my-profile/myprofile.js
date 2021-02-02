// console.log("this is working!")

window.addEventListener("DOMContentLoaded", event => {
    
    let h1 = document.createElement('h1');
    let name = document.createTextNode("Johnny Appleseed");
    h1.setAttribute('id', 'name');
    h1.appendChild(name);
    document.body.appendChild(h1);
    h1.setAttribute('class', "my-name")
    


    let ul = document.createElement('ul')
    ul.setAttribute('id', "list")
    ul.setAttribute('class', "my-details")
    document.body.appendChild(ul)

    // let item1 = document.createElement('li')
    // item1.innerText = "I am a person"
    // let item2 = document.createElement('li')
    // item2.innerText = "My first name is Johnny"
    // let item3 = document.createElement('li')
    // item3.innerText = "My last name is Appleseed"
    // let item4 = document.createElement('li')
    // item4.innerText = "I like planting apple trees"

    // ul.appendChild(item1)
    // ul.appendChild(item2)
    // ul.appendChild(item3)
    // ul.appendChild(item4)

function addItems(items, parent, className){
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        let li = document.createElement('li');
        li.innerText = item;
        li.setAttribute('class', className);

        parent.appendChild(li);
        
    }
}


    let list = ["I am a person", "My first name is Johnny",
        "My last name is Appleseed", "I like planting apple trees"];

    let listUl = document.getElementById('list');
    let liClass = 'detail';

    addItems(list, listUl, liClass);


    let marq = document.createElement("marquee")

    for (let i = 0; i < 100; i++){
    let arrMarq = document.createElement("marquee")
    arrMarq.innerText = "Johnny Appleseed"
        if (i % 2 === 0){
            arrMarq.setAttribute("bevahior", "alternate")
        } else {
            arrMarq.setAttribute("direction", "down")

        }

    document.body.appendChild(arrMarq)
        
    }

    

})