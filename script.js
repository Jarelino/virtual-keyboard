const buttonsEU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                   ['Tab','q','w','e','r','t','y','u','i','o','p','[',']',"&#92;",'Delete'],
                   ['CapsLock','a','s','d','f','g','h','j','k','l',';','&#8242;','Enter'],
                   ['Shift','z','x','c','v','b','n','m','.',',','/','Up','Shift'],
                   ['LCtrl','Win','LAlt','Space','RAlt','Left','Down','Right','RCtrl']
];


const special = ['Shift','ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Delete', 'Alt', 'Control','Win','Tab','CapsLock','RCtrl', 'LCtrl', 'LAlt', 'RAlt', 'Space', 'Up', 'Down', 'Left', 'Backspace', 'Enter', 'Right','RShift','LShift'];

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
            elem.style.borderRadius = "10px";

            if (elem.innerHTML == 'Enter') {
                document.getElementById("input").value += '\n';
            }

            if (elem.innerHTML == 'Tab') {
                document.getElementById("input").value += "   ";
            }

            if (elem.innerHTML == 'Delete') {
                document.getElementById("input").value = ""; 
            }
            if (elem.innerHTML == 'Backspace') {
                document.getElementById("input").value = document.getElementById("input").value.slice(0, document.getElementById("input").value.length - 1); 
            }

            if (elem.innerHTML == 'CapsLock') {
                Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
                    if (elem.innerHTML.length == 1 && elem.innerHTML.toUpperCase() == elem.innerHTML) {
                        elem.innerHTML = elem.innerHTML.toLowerCase();
                    }
                    else if (elem.innerHTML.length == 1) {
                        elem.innerHTML = elem.innerHTML.toUpperCase();
                    }
                }) 
            }

            if (elem.innerHTML == 'Shift') {
                Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
                    if (elem.innerHTML.length == 1) {
                        elem.innerHTML = elem.innerHTML.toUpperCase();
                    }
                }) 
            }
        })

        elem.addEventListener("mouseup", () => {
            elem.style.background = "#fff";
            elem.style.color = "#000";
            elem.style.borderRadius = "0px";

            if (elem.innerHTML == 'Shift') {
                Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
                    if (elem.innerHTML.length == 1) {
                        elem.innerHTML = elem.innerHTML.toLowerCase();
                    }
                }) 
            }
        })
    })

    document.addEventListener('keydown', function(event) {
        Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
            if (elem.innerHTML == event.key || elem.innerHTML == event.code) {
                elem.style.background = "#000";
                elem.style.color = "#fff";
                elem.style.borderRadius = "10px";
            }
        })

        if (event.key == 'Enter') {
            document.getElementById("input").value += '\n';
        }

        if (event.key == 'Tab') {
            document.getElementById("input").value += "   ";
        }

        if (event.key == 'Delete') {
            document.getElementById("input").value = ""; 
        }
        if (event.key == 'Backspace') {
            document.getElementById("input").value = document.getElementById("input").value.slice(0, document.getElementById("input").value.length - 1); 
        }

        if (event.key == 'CapsLock') {
            Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
                if (elem.innerHTML.length == 1 && elem.innerHTML.toUpperCase() == elem.innerHTML) {
                    elem.innerHTML = elem.innerHTML.toLowerCase();
                }
                else if (elem.innerHTML.length == 1) {
                    elem.innerHTML = elem.innerHTML.toUpperCase();
                }
            }) 
        }

        if (event.key == "Shift") {
            Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
                if (elem.innerHTML.length == 1) {
                    elem.innerHTML = elem.innerHTML.toUpperCase();
                }
            })        
        }
        document.getElementById("input").value += isSpecial(event.key) ? '' : event.key; 
    });

    document.addEventListener('keyup', function(event) {
        Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
            if (elem.innerHTML == event.key || elem.innerHTML == event.code) {
                elem.style.background = "#fff"
                elem.style.color = "#000";
                elem.style.borderRadius = "0px";
            }
        })

        if (event.key == "Shift") {
            Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
                if (elem.innerHTML.length == 1) {
                    elem.innerHTML = elem.innerHTML.toLowerCase();
                }
            })        
        }
    });

}

function fillElements(arr)
{
    let html = `<div class = "container">`

    arr.forEach((elem) => {
        html += `<div class = "container__row">`
        elem.forEach((elem) => {
            html += `<button class = "btn ${isSpecial(elem) ? elem : ''}" value = "${elem}">${elem}</button>`
        })
        html += `</div>`
    })

    return `${html}</div>`
}

function isSpecial(elem)
{
    return special.indexOf(elem) + 1;
}

