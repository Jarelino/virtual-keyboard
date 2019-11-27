const buttonsEU = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', 'Delete'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '&#8242;', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', '&#9650;', '/', ',', 'Shift'],
  ['Control', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Control'],
];

const shiftEU = [['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '&#9650;', '?', '>', 'Shift'],
  ['Control', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Control'],
];

const buttonsRU = [['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', 'Delete'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', '&#9650;', 'ю', '.', 'Shift'],
  ['Control', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Control'],
];

const shiftRU = [['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', '&#9650;', 'Ю', ',', 'Shift'],
  ['Control', 'Win', 'Alt', 'Space', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Control'],
];

const sp = {
  ControlLeft: {
    class: 'Control',
    value: '',
    numb: 0,
  },
  ControlRight: {
    class: 'Control',
    value: '',
    numb: 1,
  },
  AltLeft: {
    class: 'Alt',
    value: '',
    numb: 0,
  },
  AltRight: {
    class: 'Alt',
    value: '',
    numb: 1,
  },
  ShiftLeft: {
    class: 'Shift',
    value: '',
    numb: 0,
  },
  ShiftRight: {
    class: 'Shift',
    value: '',
    numb: 1,
  },
  Meta: {
    class: 'Win',
    value: '',
    numb: 0,
  },
  Win: {
    class: 'Win',
    value: '',
    numb: 0,
  },
  Control: {
    class: 'Control',
    value: '',
    numb: 0,
  },
  Shift: {
    class: 'Shift',
    value: '',
    numb: 0,
  },
  Alt: {
    class: 'Alt',
    value: '',
    numb: 0,
  },
  Tab: {
    class: 'Tab',
    value: '    ',
    numb: 0,
  },
  Delete: {
    class: 'Delete',
    value: '',
    numb: 0,
  },
  Backspace: {
    class: 'Backspace',
    value: '',
    numb: 0,
  },
  CapsLock: {
    class: 'CapsLock',
    value: '',
    numb: 0,
  },
  ArrowUp: {
    class: '&#9650;',
    value: '&#9650;',
    numb: 0,
  },
  ArrowDown: {
    class: '&#9660;',
    value: '&#9660;',
    numb: 0,
  },
  ArrowLeft: {
    class: '&#9668;',
    value: '&#9668;',
    numb: 0,
  },
  ArrowRight: {
    class: '&#9658;',
    value: '&#9658;',
    numb: 0,
  },
  Enter: {
    class: 'Enter',
    value: '\n',
    numb: 0,
  },
  Space: {
    class: 'Space',
    value: ' ',
    numb: 0,
  },
};

function isSpecial(elem) {
  return Object.prototype.hasOwnProperty.call(sp, elem);
}

function render(item, place) {
  place.appendChild(item);
}

function keyboardBlock(arr) {
  const container = document.createElement('div');
  container.classList.add('container');

  arr.forEach((row) => {
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('container__row');
    row.forEach((elem) => {
      const btn = document.createElement('button');
      btn.classList.add(`${elem}`);
      btn.classList.add('btn');
      btn.innerHTML = elem;
      rowBlock.appendChild(btn);
    });
    container.appendChild(rowBlock);
  });

  return container;
}

function replaceKeyboard(arr) {
  let { i, j } = { i: 0, j: 0 };
  Array.from(document.getElementsByClassName('btn')).forEach((button) => {
    const btn = button;
    btn.innerHTML = arr[i][j];
    j += 1;
    if (j === arr[i].length) {
      j = 0;
      i += 1;
    }
  });
}

function langSymb(symb) {
  if (localStorage.getItem('lang') === 'eu') {
    return symb;
  } if (localStorage.getItem('lang') === 'ru') {
    for (let i = 0; i < buttonsEU.length; i += 1) {
      for (let j = 0; j < buttonsEU[i].length; j += 1) {
        if (symb === buttonsEU[i][j]) {
          return buttonsRU[i][j];
        }
        if (symb === shiftEU[i][j]) {
          return shiftRU[i][j];
        }
      }
    }
  }
  return '';
}

function clicks() {
  Array.from(document.getElementsByClassName('btn')).forEach((elem) => {
    elem.addEventListener('click', () => {
      document.getElementById('input').innerHTML += isSpecial(elem.innerHTML) ? '' : elem.innerHTML;
    });

    elem.addEventListener('mousedown', () => {
      const { style } = elem;
      style.background = '#000';
      style.color = '#fff';
      style.borderRadius = '10px';

      if (elem.innerHTML === 'Enter') {
        document.getElementById('input').innerHTML += '\n';
      }

      if (elem.innerHTML === 'Tab') {
        document.getElementById('input').innerHTML += '   ';
      }

      if (elem.innerHTML === 'Delete') {
        document.getElementById('input').innerHTML = '';
      }
      if (elem.innerHTML === 'Backspace') {
        document.getElementById('input').innerHTML = document.getElementById('input').innerHTML.slice(0, document.getElementById('input').value.length - 1);
      }

      if (elem.innerHTML === 'CapsLock') {
        Array.from(document.getElementsByClassName('btn')).forEach((button) => {
          const btn = button;
          if (btn.innerHTML.length === 1 && btn.innerHTML.toUpperCase() === btn.innerHTML) {
            btn.innerHTML = btn.innerHTML.toLowerCase();
          } else if (btn.innerHTML.length === 1) {
            btn.innerHTML = btn.innerHTML.toUpperCase();
          }
        });
      }

      if (elem.innerHTML === 'Shift') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? shiftEU : shiftRU);
      }
    });

    elem.addEventListener('mouseup', () => {
      const { style } = elem;
      style.background = '#fff';
      style.color = '#000';
      style.borderRadius = '0px';

      if (elem.innerHTML === 'Shift') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsEU : buttonsRU);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    document.getElementById('input').focus();
    event.preventDefault();
      Array.from(document.getElementsByClassName('btn')).forEach((elem) => {
        if (elem.textContent === langSymb(event.key) || elem.textContent === event.code) {
          let btn = null;
          if (isSpecial(event.code)) {
            btn = document.getElementsByClassName(sp[event.code].class)[sp[event.code].numb];
          } else {
            btn = elem;
          }
          btn.style.background = '#000';
          btn.style.color = '#fff';
          btn.style.borderRadius = '10px';
        }
      });
      if (event.ctrlKey && event.altKey) {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsRU : buttonsEU);
        localStorage.setItem('lang', localStorage.getItem('lang') === 'eu' ? 'ru' : 'eu');
      }

      if (event.key === 'Backspace') {
        document.getElementById('input').textContent = document.getElementById('input').textContent.slice(0, document.getElementById('input').textContent.length - 1);
      }

      if (event.key === 'CapsLock') {
        Array.from(document.getElementsByClassName('btn')).forEach((button) => {
          const btn = button;
          if (btn.textContent.length === 1 && btn.textContent.toUpperCase() === btn.textContent) {
            btn.textContent = btn.textContent.toLowerCase();
          } else if (btn.textContent.length === 1) {
            btn.textContent = btn.textContent.toUpperCase();
          }
        });
      }

      if (event.key === 'Shift') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? shiftEU : shiftRU);
      }
      console.log(document.getElementById('input').innerHTML);
      console.log(isSpecial(event.code) ? sp[event.code].value : langSymb(event.key));
      document.getElementById('input').innerHTML += isSpecial(event.code) ? sp[event.code].value : langSymb(event.key);
  });

  document.addEventListener('keyup', (event) => {
    Array.from(document.getElementsByClassName('btn')).forEach((elem) => {
      if (elem.textContent === langSymb(event.key) || elem.textContent === event.code) {
        const { style } = elem;
        style.background = '#fff';
        style.color = '#000';
        style.borderRadius = '0px';
      }
    });

    if (event.key === 'Shift') {
      replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsEU : buttonsRU);
    }
  });
}

window.onload = () => {
  const htmlLang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'eu';

  const input = document.createElement('textarea');
  input.id = 'input';
  input.rows = '10';
  input.columns = '50';

  render(input, document.getElementsByTagName('body')[0]);
  render(keyboardBlock(htmlLang === 'eu' ? buttonsEU : buttonsRU), document.getElementsByTagName('body')[0]);
  clicks();
};
