var button = document.createElement("button"); // сама кнопка
var text = document.createTextNode("Добавить вопрос"); // создать текст на кнопке
button.appendChild(text); // чтобы текст появился на кнопке
button.body.appendChild(button); // приделать эту кнопку к html ???


/* это функция о том, что будет при нажатии на кнопку.
это и есть событие onclick (наверное??)*/
function clickButAddQ() {
  var inputQValue = prompt("Введите текст вопроса: ");

  let ourQuestions = ["", "", "", "", ""]; // для вопросов

  /* проверить, что вопрос ввели */
  if (inputQValue === "") {
    // вернет булевое значение
    confirm("Вы не ввели текст вопроса. Попробуйте ввести вопрос заново.");
  } else if (inputQValue !== "") {
    alert("нормально"); // потом убрать это
    // положить вопрос в массив с вопросами 
    ourQuestions[0] = inputQValue;
    //var inputAnswValue = prompt("Введите текст первого варианта ответа");
    createAnswerOption();

  }
}

// функция задавать варианта ответов
function createAnswerOption() {
  var answsArr = []; // здесь варианты ответов
  //var total = answsArr.push(); это на потом

  var inputAnswValue = prompt("Введите текст первого варианта ответа");
  if (inputAnswValue === "") {
    // НЕ ЗАБУДЬ перенести текст на новую строку и заменить цифры!
    confirm("Вы не ввели текст 1 варианта ответа. /n Попробуте добавить вопрос заново.");
    // добавить вопрос заново
    clickButAddQ();
  } else if (inputAnswValue !== "") {
    answsArr[0] = inputAnswValue;
    console.log(answsArr[0]);
  }

}



// кнопка начать тест
var button = document.createElement("button");
var text = document.createTextNode("Начать тест");
button.appendChild(text);
button.body.appendChild(button);

// действие кнопки начать тест
function clickStartTest() {}