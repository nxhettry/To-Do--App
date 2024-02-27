let list = document.querySelector(".main_list");
let btns = document.querySelector(".btns");
let removeStd = document.createElement("button");
let x = 1;

const addButton = () => {
    let itemName = prompt("Enter the name of the item:");
    addBtn(itemName);
};

function addBtn(name) {
    let item = document.createElement("p");
    item.innerHTML = `${name} <input type='checkbox'>`;
    list.appendChild(item);
}

function removeBtnHover() {
    addSecondRemove();
    removeSecondRemove();
}

const removeBtn = () => {
    list.innerHTML = "";
};

function addSecondRemove() {
    removeStd.setAttribute("id", "remove");
    removeStd.setAttribute("onclick", "remove2()");
    removeStd.innerHTML = "-";
    btns.appendChild(removeStd);
}

function removeSecondRemove() {
    setTimeout(() => {
        btns.removeChild(removeStd);
    }, 2000);
}


function remove2() {
    let input = document.querySelectorAll('input:checked');
    console.log(input);
    for (let x of input) {
        x.parentElement.remove();
    }
}

(function contact () {
    let contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.innerHTML = "Connect &nbsp;: <br>&nbsp;<a style='text-decoration: none; color: white;' href='https://www.facebook.com/nissan.gautam.507' target='_blank'>Facebook</a> &nbsp;&nbsp;&nbsp; <a style='text-decoration: none; color: white;' href='https://github.com/nxhettry' target='_blank'>Github</a>"
    document.querySelector(".container").appendChild(contact);
})();