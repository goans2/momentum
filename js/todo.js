const toDOForm = document.querySelector("#todo-form");
const toDoInput = toDOForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// todolist 만들기 3
// 만들어진 todolist 중 원하는걸 지워야 하는데, button에 click 이벤트시 지워지는 이벤트리스너를 설정하려고 하니
// 전부다 같은 버튼이라 잘못 이벤트 걸면 한번 클릭시 모두가 날아간다.
// 그래서 event의 속성 안에서 클릭한 항목을 특정할 수 있는 값을 찾아야 하는데
// event 안에 target 안에 parentElement라는 항목이 있다.
// 이는 이벤트 발생 값의 부모값을 보여주는 항목으로
// 이걸 지우게 되면 이벤트 대상(button)의 부모값(li), 즉, todolist 중 이벤트 대상의 li만 지울 수 있는거다.

// todolist 만들기 3- 업데이트1
// 위처럼 하면 화면 상에서는 li가 지워지는데 밑에 작업까지 하면 로컬에 있는 값은 남아 있다.
// 로컬 값 까지 지워야 나중에 새로고침 해도 다시 나타나지 않는다.
// 로컬 데이터를 지우기 위해서 최초 인풋데이터 받을 때부터 가공의 id값을 추가로 설정하여, 인풋 값을 {값:~` id:~~} 이렇게 object로 받아야 한다.
// id만드는거는 Date object의 now함수를 쓰면 1000만단위초까지 순간 시간이 저장되는데 이걸 쓰면 된다.
// 생성한 가공의 id는 paintToDo 함수에서 li 생성할 때 li.id=newToDoObj.id라고 해서 추가하면 된다. (newToDoObj는 handle 함수에서 보낸 오브젝트 결과값이다.)

// todolist 만들기 3- 업데이트2
// 이제 각각의 li마다 id가 생성되었으니, 버튼에 해당하는 id만 식별하여 삭제할 수 있다.
// 이 때는 filter 함수가 사용되는데, filter는 아래의 forEach와 약간 다른 함수인데,
// forEach는 array의 모든 값을 한번씩 매개로 하여 함수를 실행한다는 뜻인데
// filter는 array, 또는 object의 모든 값을 한번씩 매개로 하여 함수를 실하는 것은 같으나, 만약 매개값이 true가 아니면 array, 또는 object애서 해당 매개 값을 지워버린다.
// 그래서 이를 응용하여, toDos에서 하나의 값을 지우고 싶다면, filter를 이용하여 id가 같지 않음을 true로 놓으면,
// 같은것은 false가 되어 array, 또는 object에서 사라지겠지.
// 그리고 위에 보면 li.id 를 parseInt 함수를 적용하여 숫자로 바꿔 줬는데, 이는 그냥 li.id로 값을 호출하면 string으로 호출되어서 그렇디.
// 밑에서 li.id로 id 안에 넣은 값이라서 자동으로 string이 되었고, 이를 다시 숫자로 바꿔준 것이다.(toDos object 안에 저장된 id는 숫자형이기 때문)

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// todolist 만들기 2
// handleToDosubmit에서 받아온 value가 저장된 변수(newTodo)가 리스트 만드는 함수(paintToDo)에 arguement(입력변수)로 작용한다.
// 그 전에 먼저 createElement로 li와 밑에 span을 만들어 준다
// 만든 span 안의 text 값을 newTodo로 해서 이전 함수의 값이 span에 저장되도록 한다.
// 그리고 삭제버튼도 하나 만들어서 li 밑에 붙인다

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

//todolist 만들기 1
// 먼저 form을 하나 만들고 거기에 input을 추가한다
// form이 submit 될 때 input안에 입력한 value값이 변수(newTodo)에 저장되는 이벤트리스너 문장을 적용한다.
// 그리고 input에 입력값이 위의 preventDefault 때문에 멈춰 있는데 지워주는 문장을 추가한다.
// 결과 : submit될 때 value는 따로 변수에 저장되고, 최초 입력된 value는 사라짐.
// 변수에 저장된 value는 paintTodo(입력한 value로 리스트 만드는 함수)로 보냄

toDOForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("This is the turn of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  //   parseToDos.forEach(sayHello);
  //   parseToDos.forEach((item) => console.log("This is the turn of ", item));
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}

// todolist 만들기 4
// 화면으로 구현한거 말고 todolist가 저장되어야 한다.
// 그래서 localstorage를 써야하는데, 그래서 처음 함수 handleToDoSubmit에 별도의 array형태 변수(toDos)에 입력값들이 별도로 저장되도록 했으며
// toDos에 저장된 array 값들은 saveToDos 함수를 통해, 로컬스터리지에 저장되도록 했다.
// 이 때 중요한건, array형태의 값을 바로 로컬스터리지에 저장하면, "[/a/b/c/d]" 같이 사이사이에 이상한 문자가 껴서 저장이 된다.
// 이러한 현상을 막기 위해, 아예 저장시에 string화 하여 저장하고, 나중에 다시 array화 해야 하는데,
// 그래서 로컬에 저장 시 값을 string화 시켜주는 stringify함수를 적용하였다. (stringify함수는 앞에 JSON을 붙여야 한다.)

// todolist 만들기 5
// 로컬에 저장된 string화 된 toDos 값들은 savedToDos라는 변수에 getItem 함수를 써서 불러오고
// savedToDos 변수 값은 위에서 말한거처럼 다시 array화 시켜서 (JSON parse함수 사용) parseToDos 변수에 저장한다.

// todolist 만들기 6
// js에는 array 값들을 하나씩 불러내서 작업을 하게하는 함수가 있다.
// 그게 forEach 함수이고 forEach함수에 입력값으로 함수를 넣으면 각각의 array 값을 매개로 함수를 실행해준다
// ex) array가 [1,2,3,4] 면 함수가 function(1), function(2).. 같이 4번 실행한다.
// 그리고 만약 forEach에 별도로 함수를 지정하지 않고 실행될 값을 지정하고 싶디면?( lamda 같은 방식)
// ex) parseToDos.forEach(item) => console.log("HAHAHA", item) 이렇게 문장을 친다면, parseToDos에 있는 각각의 값(item)이
// console.log("HAHAHA", item) 이라는 문장의 실행값으로 사용되어 parseToDos의 item 수만큼 순서대로 실행된다.
// 결과 : forEach 함수를 통해 parseToDos에 저장된 각각의 입력값을 paintToDo 함수의 입력값으로 하여
// 새로고침을 하여도 사라지지 않게 하였다. (parseToDos는 로컬에서 가져온 값이라서)

// todolist 만들기 7
// 이렇게 만들면 문제가 발생하는데, 새로고침하면 사라지지는 않지만, 추가로 입력을 하고 다시 새로고침하면
// 기존게 사라지고 추가로 넣은 것만 남아있는 문제가 발생한다.
// 이러한 문제는 처음에 array로 저장하는 변수(toDos)가 const로 되어 있어서 업데이트가 되지 않으며,
// toDos변수 자체도 [] 이렇게 비워져 있는 상태가 시작 값이라서, 이런 문제가 발생함.
// 따라서 이런 문제를 막기 위해서는 toDos의 변수 형태를 let으로 바꾸고
// toDos=parseToDos 문장을 추가하여, 로컬에 들어간 값이 toDos에 반영되어 toDos가 업데이트 되도록 하면 된다.
