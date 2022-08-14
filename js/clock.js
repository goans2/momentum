// const clock = document.querySelector("#clock");

// function sayhello() {
//   console.log("Hello");
// }

// setInterval(sayhello, 5000);

// setInterval 이라는 함수를 통해, 함수에 실행간격을 정할 수 있다.
// 이 함수의 arguemnet는 2개로 하나는 해당함수 그리고 하나는 실행간격이다. 실행간격은 0.001초 단위이며, 만약 5초단위로 반복실행을 원할경우
// 두번째 arguement에 5000을 입력하면 된다.

// setTimeout(sayhello, 3000);

//setTimeout함수는 시간을 지정하고 그때 딱 한번 실행된다.
// arguement는 setInterval과 동일하다.

function clockPerSecond() {
  const date = new Date();
  const dateYear = String(date.getFullYear()).padStart(2, "0");
  const dateMonth = String(date.getMonth() + 1).padStart(2, "0");
  const dateDate = String(date.getDate()).padStart(2, "0");
  const dateHour = String(date.getHours()).padStart(2, "0");
  const dateMinutes = String(date.getMinutes()).padStart(2, "0");
  const dateSeconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${dateYear}.${dateMonth}.${dateDate} ${dateHour}:${dateMinutes}:${dateSeconds}`;
}

clockPerSecond();
setInterval(clockPerSecond, 1000);
// 시계 만들기 1
// Date라는 js 내장 object를 통해 시계를 만들었다.
// 우선 함수 안에 new Date()로 date object를 불러들인 후,
// 각각의 함수(getFullYear는 연도, Month는 달 등..)를 통해 각각의 시간들을 변수에 저장하고,
// 그걸 innerText를 통해 안에다가 집어 넣으면 시계가 완성된다.
// 완성된 시계함수를 setInterval 함수를 통해 반복시간을 지정 후 실행하면 되며,
// 이때 주의할 점은 처음 페이지를 열면 1초 후에 실행되도록 인터벌을 지정해서 화면에는 1초 후 부터 보인다.
// 이러한 문제를 해결하기 위해 처음에 함수가 그냥 실행되도록 입력해 놓고 그 다음부터는 인터벌 대로 함수가 실행되도록 하면 된다.
// 다만, 위처럼 시간 변수들을 함수 안에 넣어야 자동으로 함수를 실행하며 변수안에 시간을 저장하여 업데이트되는 효과를 볼 수 있으며,
// 만약 해당 시간 변수들을 함수 밖에 저장한다면, const 변수는 업데이트가 되지 않기 때문에 아무리 시간이 지나도 시간 업데이트가 되지 않는다.

// 시계 만들기 2
// Date object를 통해 시간을 가져올 때, 예를들어 1초면 1로 표시가 된다.
// 근데 보통 시간은 00:00:00 이렇게 표시되니깐 1로 하면 균형이 맞지 않아
// 그래서 이렇게 균형을 맞추기 위해서 padStart 라는 함수를 쓴다. 이 함수는 최소문자수를 지정하고 최소문자수에 미달하면 추가할 문자를 지정할 수 있다.
// 이를 통해 최소문자는 2개, 그리고 미달시에는 "0"을 추가하도록 함수를 쓰면 된다.
// 다만. 이 padStart 함수는 문자형 자료에만 해당되는데, 시간 값은 숫자이다.
// 그래서 시간값을 String이라는 함수를 통해 문자로 바꿔줘야 한다.
// 그리고!! 함수 적용 시 소문자 대문자 구분 확실히 해야 한다!!, 예를 들어 String 함수는 앞이 대문자이고 padStart 함수는 중간 s가 대문자이다.

//시계 만들기3
//!! 주의 !! getMonth 함수는 월을 0부터 11까지 인식한다. 그러니 월을 표기하고 싶으면 getMonth로 출력한 값에 +1을 꼭!! 해줘야 한다.
