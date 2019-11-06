const buttonsEU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                   ['Tab','q','w','e','r','t','y','u','i','o','p','[',']',"&#92;",'Delete'],
                   ['CapsLock','a','s','d','f','g','h','j','k','l',';','&#8242;','Enter'],
                   ['Shift','z','x','c','v','b','n','m','.',',','/','Up','Shift'],
                   ['Control','Win','Alt','Space','Alt','Left','Down','Right','Control']
];

const shiftEU = [['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'],
                 ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}',"|",'Delete'],
                 ['CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter'],
                 ['Shift','Z','X','C','V','B','N','M','<','>','?','Up','Shift'],
                 ['Control','Win','Alt','Space','Alt','Left','Down','Right','Control']
];

const buttonsRU = [['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                   ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ',"&#92;",'Delete'],
                   ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
                   ['Shift','я','ч','с','м','и','т','ь','б','ю','.','Up','Shift'],
                   ['Control','Win','Alt','Space','Alt','Left','Down','Right','Control']
];

const shiftRU = [['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace'],
                 ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ',"/",'Delete'],
                 ['CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'],
                 ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','Up','Shift'],
                 ['Control','Win','Alt','Space','Alt','Left','Down','Right','Control']
];

const special = ['Shift','ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Delete', 'Alt', 'Control','Win','Tab','CapsLock','RCtrl', 'LCtrl', 'LAlt', 'RAlt', 'Space', 'Up', 'Down', 'Left', 'Backspace', 'Enter', 'Right','RShift','LShift'];


window.onload = () => {
    let htmlLang = localStorage.getItem("lang") ? localStorage.getItem("lang") == "eu" ? "eu" : "ru" : "eu"; 
    
    let input = document.createElement('textarea');
    input.id = "input";
    input.rows = "10";
    input.columns = "50";

    render(input, document.getElementsByTagName("body")[0]);
    render(keyboardBlock(htmlLang == "eu" ? buttonsEU : buttonsRU), document.getElementsByTagName("body")[0]);
    clicks();
}

function clicks() {
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
                replaceKeyboard(localStorage.getItem('lang') == "eu" ? shiftEU : shiftRU);
            }
        })

        elem.addEventListener("mouseup", () => {
            elem.style.background = "#fff";
            elem.style.color = "#000";
            elem.style.borderRadius = "0px";

            if (elem.innerHTML == 'Shift') {
                replaceKeyboard(localStorage.getItem('lang') == "eu" ? buttonsEU : buttonsRU);
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

        if (event.ctrlKey && event.altKey) {
            replaceKeyboard(localStorage.getItem('lang') == "eu" ? buttonsRU : buttonsEU);
            localStorage.setItem('lang', localStorage.getItem('lang') == "eu" ? "ru" : "eu");
        }

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
            replaceKeyboard(localStorage.getItem('lang') == "eu" ? shiftEU : shiftRU);
        }
        document.getElementById("input").value += isSpecial(event.key) ? '' : langSymb(event.key);
    });

    document.addEventListener('keyup', function(event) {
        Array.from(document.getElementsByClassName("btn")).forEach((elem) => {
            if (elem.innerHTML == event.key || elem.innerHTML == event.code) {
                elem.style.background = "#fff";
                elem.style.color = "#000";
                elem.style.borderRadius = "0px";
            }
        })

        if (event.key == "Shift") {
            replaceKeyboard(localStorage.getItem('lang') == "eu" ? buttonsEU : buttonsRU);
        }
    });
}

function keyboardBlock(arr)
{
    const container = document.createElement('div');
    container.classList.add("container");
    
    arr.forEach((row) => {
        const rowBlock = document.createElement('div');
        rowBlock.classList.add("container__row");
        row.forEach((elem) => {
            const btn = document.createElement('button');
            btn.classList.add(`${isSpecial(elem) ? elem : 'btn'}`);
            btn.classList.add('btn');
            btn.innerHTML = elem;
            rowBlock.appendChild(btn);
        })
        container.appendChild(rowBlock);
    })
    
    return container;
}

function replaceKeyboard(arr) {
    let i = 0, j = 0;
    Array.from(document.getElementsByClassName("btn")).forEach((btn) => {
        btn.innerHTML = arr[i][j];
        j++;
        if (j == arr[i].length) {
            j = 0;
            i++;
        }
    })
}

function isSpecial(elem)
{
    return special.indexOf(elem) + 1;
}

function render(item, place)
{
    place.appendChild(item);
}

function langSymb(symb) {
    let i = 0;
    buttonsEU.forEach((elem) => {
        if (elem.indexOf(symb) + 1 && localStorage.getItem('lang') == "eu") {
            return elem[elem.indexOf(symb)];
        }
        else if(elem.indexOf(symb) + 1 && localStorage.getItem('lang') == "ru")
        {
            return buttonsRU[i][elem.indexOf(symb)];
        }
        i++;
    })

    i = 0;
    buttonsRU.forEach((elem) => {
        if (elem.indexOf(symb) + 1 && localStorage.getItem('lang') == "ru") {
            return elem[elem.indexOf(symb)];
        }
        else if(elem.indexOf(symb) + 1 && localStorage.getItem('lang') == "eu")
        {
            return buttonsEU[i][elem.indexOf(symb)];
        }
        i++;
    })
}