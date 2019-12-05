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

function isEng(symb) {
  let result = false;
  buttonsEU.forEach((row, rowI) => {
    row.forEach((elem, elemI) => {
      if (elem === symb || symb === shiftEU[rowI][elemI]) {
        result = true;
      }
    });
  });

  return result;
}

function langSymb(symb) {
  if (isEng(symb)) {
    if (localStorage.getItem('lang') === 'eu') {
      return localStorage.getItem('caps') === 'false' ? symb.toLowerCase() : symb.toUpperCase();
    } if (localStorage.getItem('lang') === 'ru') {
      for (let i = 0; i < buttonsEU.length; i += 1) {
        for (let j = 0; j < buttonsEU[i].length; j += 1) {
          if (symb === buttonsEU[i][j] || symb === shiftEU[i][j]) {
            if (localStorage.getItem('caps') === 'false') {
              return buttonsRU[i][j];
            }
            return shiftRU[i][j];
          }
        }
      }
    }
  } else {
    if (localStorage.getItem('lang') === 'ru') {
      return localStorage.getItem('caps') === 'false' ? symb.toLowerCase() : symb.toUpperCase();
    } if (localStorage.getItem('lang') === 'eu') {
      for (let i = 0; i < buttonsRU.length; i += 1) {
        for (let j = 0; j < buttonsRU[i].length; j += 1) {
          if (symb === buttonsRU[i][j] || symb === shiftRU[i][j]) {
            if (localStorage.getItem('caps') === 'false') {
              return buttonsEU[i][j];
            }
            return shiftEU[i][j];
          }
        }
      }
    }
  }
  return '';
}

function clicks() {
  document.getElementsByClassName('container')[0].addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      document.getElementById('input').innerHTML += isSpecial(e.target.innerHTML) ? '' : e.target.innerHTML;
    }
  });

  document.getElementsByClassName('container')[0].addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const { style } = e.target;
      style.background = '#000';
      style.color = '#fff';
      style.borderRadius = '10px';
    }

    if (e.target.innerHTML === 'Enter') {
      document.getElementById('input').innerHTML += '\n';
    }

    if (e.target.innerHTML === 'Tab') {
      document.getElementById('input').innerHTML += '   ';
    }

    if (e.target.innerHTML === 'Delete') {
      document.getElementById('input').innerHTML = '';
    }
    if (e.target.innerHTML === 'Backspace') {
      document.getElementById('input').innerHTML = document.getElementById('input').innerHTML.slice(0, document.getElementById('input').value.length - 1);
    }

    if (e.target.innerHTML === 'CapsLock') {
      localStorage.setItem('caps', localStorage.getItem('caps') === 'false');
      Array.from(document.getElementsByClassName('btn')).forEach((button) => {
        const btn = button;
        if (btn.innerHTML.length === 1 && btn.innerHTML.toUpperCase() === btn.innerHTML) {
          btn.innerHTML = btn.innerHTML.toLowerCase();
        } else if (btn.innerHTML.length === 1) {
          btn.innerHTML = btn.innerHTML.toUpperCase();
        }
      });
    }

    if (e.target.innerHTML === 'Shift') {
      if (localStorage.getItem('caps') === 'false') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? shiftEU : shiftRU);
      } else {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsEU : buttonsRU);
      }
      localStorage.setItem('caps', localStorage.getItem('caps') === 'false');
    }
  });

  document.getElementsByClassName('container')[0].addEventListener('mouseup', (e) => {
    const { style } = e.target;
    style.background = '#fff';
    style.color = '#000';
    style.borderRadius = '0px';

    if (e.target.innerHTML === 'Shift') {
      if (localStorage.getItem('caps') === 'false') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? shiftEU : shiftRU);
      } else {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsEU : buttonsRU);
      }
      localStorage.setItem('caps', localStorage.getItem('caps') === 'false');
    }
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
      localStorage.setItem('caps', false);
      replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsRU : buttonsEU);
      localStorage.setItem('lang', localStorage.getItem('lang') === 'eu' ? 'ru' : 'eu');
    }

    if (event.key === 'Backspace') {
      document.getElementById('input').textContent = document.getElementById('input').textContent.slice(0, document.getElementById('input').textContent.length - 1);
    }

    if (event.key === 'CapsLock') {
      localStorage.setItem('caps', localStorage.getItem('caps') === 'false');
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
      if (localStorage.getItem('caps') === 'false') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? shiftEU : shiftRU);
      } else {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsEU : buttonsRU);
      }
      localStorage.setItem('caps', localStorage.getItem('caps') === 'false');
    }
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
      if (localStorage.getItem('caps') === 'false') {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? shiftEU : shiftRU);
      } else {
        replaceKeyboard(localStorage.getItem('lang') === 'eu' ? buttonsEU : buttonsRU);
      }
      localStorage.setItem('caps', localStorage.getItem('caps') === 'false');
    }
  });
}

window.onload = () => {
  const htmlLang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'eu';
  localStorage.setItem('lang', htmlLang);

  if (!localStorage.getItem('caps')) {
    localStorage.setItem('caps', false);
  }

  let def = [];
  if (localStorage.getItem('caps') === 'false') {
    if (htmlLang === 'eu') {
      def = buttonsEU;
    } else {
      def = buttonsRU;
    }
  } else if (htmlLang === 'eu') {
    def = shiftEU;
  } else {
    def = shiftRU;
  }

  const input = document.createElement('textarea');
  input.id = 'input';
  input.rows = '10';
  input.columns = '50';

  render(input, document.getElementsByTagName('body')[0]);
  render(keyboardBlock(def), document.getElementsByTagName('body')[0]);
  clicks();
};
