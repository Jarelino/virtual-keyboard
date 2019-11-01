const buttonsEU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','backspace'],
                   ['Tab','q','w','e','r','t','y','u','i','o','p','[',']',"&#92;",'Del'],
                   ['CapsLock','a','s','d','f','g','h','j','k','l',';','&#96;','Enter'],
                   ['Shift','z','x','c','v','b','n','m','.',',','/','|','Shift'],
                   ['Ctrl','Win','Alt','SPACE','ALT','<-','|','->','Ctrl']
];

window.onload = () => {
    let body = ""
    body += `<textarea id = "input" rows = "10" columns = "50"></textarea>`
    body += fillElements(buttonsEU);


    document.getElementsByTagName("body")[0].innerHTML = body;
}
buttonsEU.forEach((elem) => {
    elem.reverse().forEach((elem) => {
        document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin',`<button>${elem}</button>`);
    })
})


function fillElements(arr)
{
    let html = `<div class = "container">`

    arr.forEach((elem) => {
        html += `<div class = "container__row">`
        elem.reverse().forEach((elem) => {
            html += `<button>${elem}</button>`
        })
        html += `</div>`
    })

    return `${html}</div>`
}