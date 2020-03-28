const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Команды : <span class="code">about</span>, <span class="code">contact</span>, <span class="code">updates</span>, <span class="code">game</span>, <span class="code">draw</span>, <span class="code">2048</span>, <span class="code">barsik</span>, <span class="code">clear</span>' ,
  about:
    "Copyright © Nedosite 2019-2020",
  
  
  contact:   
  "Соцсети:<br><a href='https://vk.com/sam1rrrr' class='success link'>Vkontakte</a>, <a href='https://www.github.com/sam1rrrr' class='success link'>Github</a>, <a href='https://www.t.me/sam1rrrr' class='success link'>Telegram</a>",
  login : 'Введите пароль : ',
  clear : '',
  icheater12 : 'Вы успешно вошли в систему!',
  game : 'Запуск игры ...',
  draw : 'Запуск рисовалки ...',
  
  barsik : 'Запуск барсика ...',
  updates : '<span class="code">Обновления (24.03.2020):</span> <br>   Змейка : <br>- добавлен полноэкранный режим<br>- теперь длина змейки при запуске игры намного меньше<br>- добавлен режим с рандомными цветами (<span class="code">game -r</span>)<br>Рисовалка : <br>- на английскую "c" рисунок теперь стирается<br><span class="code">Обновления (25.03.2020):</span><br>Рисовалка :<br>- пофикшен баг, из-за которого рисунок не стирался на русской раскладке клавиатуры<br><span class="code">Обновления (28.03.2020):</span><br>- добавлена новая игра - 2048',
  2048 : 'Запуск 2048 ...'
};

let userInput, terminalOutput;
const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    if (input == 'game -r'){
      output += '<div class="terminal-line">Запуск игры с рандомными цветами ...</div>'
    }
    else{
    output += `<div class="terminal-line">Нет такой команды : ${input}</div>`;
    console.log("Такой команды нет!");}
  } else {
    output += COMMANDS[input];
  }
  if(input == 'clear'){
    location.href=location.href;
  }
  if(input == 'game'){
    setTimeout(() => { document.location.href = "./game.html";}, 1000);
  }
  if(input == 'game -r'){
    setTimeout(() => { document.location.href = "./gаme.html";}, 1000);
  }
  if(input == '2048'){
    setTimeout(() => { document.location.href = "./2048.html";}, 1000);
  }
  if(input == 'barsik'){
    setTimeout(() => { document.location.href = "./barsik.html";}, 1000);
  }
  if(input == 'draw'){
    setTimeout(() => { document.location.href = "./draw.html";}, 1000);
  }
  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);