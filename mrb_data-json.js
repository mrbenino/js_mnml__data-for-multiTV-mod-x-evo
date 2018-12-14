var data = document.getElementsByTagName('data');//собираем все JSON даные в обьек
var view_data = [];//массив обьектов для последующей отрисовки

// заполнение массива обьектов с ссылкой/название id>element (ul), и его данных - дат.

for (let index = 0; index < data.length; index++) {
  var i = 0;//счечик для массива дат в обькте
  var temp = [];//компонуем в него обьекты из разных карточек по отдельности
  var obj_data = {};//обьек с именем - id , и масивом дат

  obj_data.name = data[index];//индексом будет класс елемента

  JSON.parse((data[index].textContent) , function(key,value){ if(key == 'event') temp[i++] = value;});//собираем даты в масивы

  obj_data.date = temp;//прокидуем массивы в обект
  view_data[index] = obj_data;//создаем масиив обьектов
};

// отрисовка наших данных в DOM

for (let i = 0; i < view_data.length; i++) {
  for (let j = 0; j < view_data[i].date.length; j++) {
    var newEl = document.createElement('li');//создаем уникальный елемент
    newEl.innerHTML = view_data[i].date[j];//заполняем датой
    document.getElementById(view_data[i].name.className).appendChild(newEl);//рисуем его
  }
}
