const buttonsEU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                   ['Tab','q','w','e','r','t','y','u','i','o','p','[',']',"&#92;",'Delete'],
                   ['CapsLock','a','s','d','f','g','h','j','k','l',';','&#8242;','Enter'],
                   ['LShift','z','x','c','v','b','n','m','.',',','/','Up','RShift'],
                   ['LCtrl','Win','LAlt','Space','RAlt','Left','Down','Right','RCtrl']
];

const CapsButtonsEU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                       ['Tab','q','w','e','r','t','y','u','i','o','p','[',']',"&#92;",'Del'],
                       ['CapsLock','a','s','d','f','g','h','j','k','l',';','&#8242;','Enter'],
                       ['LShift','z','x','c','v','b','n','m','.',',','/','Up','RShift'],
                       ['LCtrl','Win','LAlt','Space','RAlt','Left','Down','Right','RCtrl']
];

const special = ['Meta','Shift','ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Delete', 'Alt', 'Control','Win','Tab', 'CapsLock','RCtrl', 'LCtrl', 'LAlt', 'RAlt', 'Space', 'Up', 'Down', 'Left', 'Backspace', 'Enter', 'Right','RShift','LShift'];

window.onload = () => {
    let body = ""
    body += `<textarea id = "input" rows = "10" columns = "50"></textarea>`
    body += fillElements(buttonsEU);
    document.getElementsByTagName("body")[0].innerHTML = body;

    Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
        elem.addEventListener("click", () => {
            document.getElementById("input").value += isSpecial(elem.innerHTML) ? '' : elem.innerHTML; 
        })

        elem.addEventListener("mousedown", () => {
            elem.style.background = "#000";
            elem.style.color = "#fff";
        })

        elem.addEventListener("mouseup", () => {
            elem.style.background = "#fff";
            elem.style.color = "#000";
        })
    })

    document.addEventListener('keydown', function(event) {
        Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
            if (elem.innerHTML == event.key) {
                elem.style.background = "#000";
                elem.style.color = "#fff";
            }
        })
        document.getElementById("input").value += isSpecial(event.key) ? '' : event.key; 
    });

    document.addEventListener('keyup', function(event) {
        Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
            if (elem.innerHTML == event.key) {
                elem.style.background = "#fff"
                elem.style.color = "#000";
            }
        })
    });
}

function fillElements(arr)
{
    let html = `<div class = "container">`

    arr.forEach((elem) => {
        html += `<div class = "container__row">`
        elem.forEach((elem) => {
            html += `<button class = "btn ${isSpecial(elem) ? elem : ''}">${elem}</button>`
        })
        html += `</div>`
    })

    return `${html}</div>`
}

function isSpecial(elem)
{
    console.log(special.indexOf(elem));
    return special.indexOf(elem) + 1;
}