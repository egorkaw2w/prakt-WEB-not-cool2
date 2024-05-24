const elements = document.querySelectorAll("input");
const progressBar = document.getElementById("progress-bar");
const divContentMassive = [];
let change = true;
let CurrnetIdCard = 0;
document.addEventListener("DOMContentLoaded", function () {

    let progress = 0;

    const updateProgress = () => {
        const filledInputs = Array.from(elements).filter(input => input.value !== '');
        const filledInputsCount = filledInputs.length;
        progress = (filledInputsCount / elements.length) * 100;

        progressBar.style.width = `${progress}%`;

        if (filledInputsCount === elements.length) {
            progress = 100;
            progressBar.style.width = `${progress}%`;
        }
    };

    elements.forEach(element => {
        element.addEventListener("input", updateProgress);
    });
});


const names = document.querySelectorAll("input ");
const formNames = [];
names.forEach(name => {
    const frname = name.getAttribute("id");
    formNames.push(frname);
})
console.log(formNames);


function add() {
    let idcounter = document.querySelectorAll(".cardHolder").length
    idcounter++;

    const progressBarLength = parseInt(progressBar.style.width);
    if (progressBarLength == 100) {
        const crhl = document.querySelector("#test");
        // const test = crhl.querySelector("#cardHolder")
        const cardHolder = document.createElement("div");
        // cardHolder.className = "cardHolder";
        crhl.append(cardHolder);
        cardHolder.id = idcounter;
        cardHolder.classList.add("cardHolder");
        for (let i = 0; i < formNames.length; i++) {
            const input = document.getElementById(formNames[i]);

            const cardEl = document.createElement("div");
            console.log(cardEl);
            cardEl.classList.add("cardContent");
            cardEl.textContent = input.value;
            cardHolder.appendChild(cardEl);
            input.value = "";
            test.append(cardHolder);
            divContentMassive.push(cardEl.textContent);
        }
        CreateButtonClick(cardHolder);

        progressBar.style.width = "0%";
        crhl.append(test);
    }
    else {
        alert("Заполните все поля")
    }

}
function del() {
    const cardHolder = document.querySelector(".cardHolder");
    cardHolder.remove();
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    })
    const chek2 = check();
    console.log(chek2);
    progressBar.style.width = "0%";
}
function edit() {
    console.log(this.closest('.cardHolder').id);

    const cardHolder = document.querySelectorAll(".cardHolder");

    const inputs = document.querySelectorAll("input");

    cardHolder.forEach(element => {
        if (element.tagName.toLowerCase() === 'div') {
            let div = element.querySelectorAll(".cardContent");


            inputs.forEach((input, index) => {
                const content = div[index];
                input.value = content.textContent
                if (input.type == "number") {
                    input.value = parseInt(content.textContent); 
                    console.log(content.value);
                }

            })
        };
    });

    changeAddButton();
    CurrnetIdCard = this.closest('.cardHolder').id
}

const check = edit.bind({ getAttribute: () => idsh });
function changeAddButton() {
    if (change) {
        const adbutton = document.querySelector(".rndbut");
        adbutton.classList.add("buttonEditor");
        adbutton.classList.remove("rndbut");
        adbutton.removeAttribute("onclick");
        adbutton.setAttribute("onclick", "contentChanger()")
        adbutton.textContent = "🔄"
        change = !change;
    }
    else if (!change) {
        const adbutton = document.querySelector(".buttonEditor");
        adbutton.classList.add("rndbut");
        adbutton.classList.remove("buttonEditor");
        adbutton.textContent = "+";
        change = !change;
    }
}
function contentChanger() {
    
    const currnetblank = document.getElementById(`${CurrnetIdCard}`)
    const cardEl = currnetblank.querySelectorAll("div")
    for (let i = 0; i < formNames.length; i++) {
        const input = document.getElementById(formNames[i]);
        cardEl[i].textContent = input.value;
        input.value = "";
    }


}
function CreateButtonClick(cardHolder) {
    const deleter = document.createElement("button");
    deleter.textContent = "удалить";
    deleter.classList.add("delter");
    deleter.addEventListener("click", del);
    cardHolder.append(deleter);

    const editor = document.createElement("button");
    editor.textContent = "Редактировать";
    editor.addEventListener("click", edit);
    editor.classList.add("editor");
    cardHolder.append(editor);
}