// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// // html 상 input에서 value를 입력해 놓으면, 해당 값을 js에서 불러와 사용할 수 있다.
// // value는 input에서 입력된 값이 어떤 종류인지 명확하게 보여주는 기능이다.
// // 아래에서은 value는 유저 이름으로 특정하려고 한다.

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   console.log(username);
//   //   if (username === "") {
//   //     alert("Please write your name");
//   //   } else if (username.length > 15) {
//   //     alert("Your name is too long");
//   //   }
// }

// loginButton.addEventListener("click", onLoginBtnClick);

// 위의 문장의 문제점:
// 해당 문장은 html 상 click이라는 이벤트에 초점을 맞춰서 작성된 문장인데,
// 앞의 html 파일에서는 form에 들어간 input들은 엔터 및 버튼 클릭 시 submit가 되며,
// submit가 되면 해당 페이지는 새로고침되어 js에서 끌어달 쓸 입력 데이터 값이 없어진다.
// 이러한 문제점을 해결하기 위해, js에선 click이라는 이벤트 말고
// submit 자체도 이벤트로 지정할 수 있다.

// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");

// function onLoginSubmit() {
//   const username = loginInput.value;
//   console.log(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

//위처럼 이벤트를 submit으로 지정하면 submit(form의 input에 데이터가 입력되어 엔터를 치거나 클릭될 경우)이 발생하면
// js가 submit을 감지하고 위의 함수 onLoginSubmit를 실행한다.
// 다만, 앞서 말했듯, submit를 실행하면 바로 페이지가 새로고침되기 때문에, 순간 입력됬다가 사라진다.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutForm = document.querySelector("#logout-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const PRESENT_CLASSNAME = "present";
const USERNAME_KEY = "username";
// 자주 사용하게 될 string의 경우 이렇게 변수화 시켜서 해야 나중에 헷갈리거나 오타의 위험이 적다

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.classList.toggle(PRESENT_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //localStorage 알아보기
  // 브라우저 안에 저장공간이 있는데 이게 로컬스토래지이다. 여기다가 우리가 원하는 값을 저장해 놓구 불러들일일 수 있다.
  // 저장할 때는 key(데이터가 지칭할 값), value(데이터 입력값)을 넣어줘야 하며,
  // 저장은 setItem("key","value"), 불러올때는 getItem("key")<< 저장 이외에 불러오거나 제거할 때는 key만 쓴다.
  // 지울 때는 removeItem("key")
  // 위에 보면 로컬에다가 key가 username(즉 이 데이터를 username으로 지칭할거야)이라고 쓰고, value(실제 입력값)는 username 변수를 넣었다.
  // 즉 username변수 즉 input에 입력한 값을 로컬에다가 "username"이라는 key값으로 저장한거다.
  paintGreetings();
}

function onLogout() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.classList.toggle(PRESENT_CLASSNAME);
}

logoutForm.addEventListener("submit", onLogout);

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  greeting.classList.toggle(PRESENT_CLASSNAME);
  //   //   greeting.innerText = "Hello " + username;
  //   // string을 결합시키는 방법은 위처럼 +로 결합해도 되지만,
  //   // ``안에 string을 넣고 변수를 ${}안에 넣는 방법으로도 할 수 있다.
  //   // 파이썬도 이런 유사한 방법이 있었고, 여기서 중요한건 꼭 `` 이걸 써야 한다는 거다. ~랑 같이 있는 문자다.
  logoutForm.classList.toggle(HIDDEN_CLASSNAME);
  logoutForm.classList.toggle(PRESENT_CLASSNAME);
}

//evetListener 이해하기
// 이벤트리스너를 통해 이벤트를 감지하고 그 때 지정한 함수를 실행하는 것이 지금까지 알고 있던 이벤트리스너의 역할이다.
// 그런데 이렇게 하면 submit이 발생할 때 자동으로 새로고침되는 현상 즉, 기본적인 default로 실행되는 항목을 막을 수 없다.
// 그래서 좀더 이벤트리스너의 실제적인 구동방식을 알아야 하는데
// 이벤트리스너에 지정된 이벤트가 발생한다고 해서 바로 함수가 실행되는 것이 아니라,
// js에서 함수에 이 함수를 발생시킬 때 발생한 이벤트에 대한 기본정보를 알아서 넣어준다.
// 알아서 넣어주는 기본정보의 이름은 임의로 지정할 수 있으며, 위에서는 event로 지정했다.
// 이렇게 event라는 값은 arguement 혹은 parameter라고 지칭된다.
// 즉, 일반 함수 만들때도 ()안에다가 입력데이터를 지정했잖아? 그런데 이벤트리스너 실행 시에는
// 자동으로 js에서 입력데이터를 넣어주는데 그게 이벤트 발생 시 기본정보들을 넣어주는거고
// 이를 가지고 이벤트리스너의 대상이 되는 실제 이벤트, 위에서는 submit, 아래에서는 click을 조절할 수 있다.
// 즉 이벤트리스너의 대상이 되는 이벤트 값을 함수에 입력데이터로 넣어주고, 데이터로 넣어줬으니 그걸 조정할 수 있는거다.

// 이렇게 위처럼 우선 이벤트를 멈추게 하고(preventDefault 함수를 이용해서) 그다음 log를 통해 이벤트에 뭐가 기록되었는지 보면
// 정말 다양한 정보들이 있다. 해당 클릭이 일어난 좌표라든가,

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.classList.toggle(PRESENT_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

// 지금까지의 흐름
// 1. html에서 form과 form 안에 있는 input을 변수로 지정. 그리고 로그인 후 로그인창이 사라지고 나올 환영문구도 html에서 끌고와서 변수로 지정
// 2. 이벤트(submit)를 감지 시 적용되는 함수 (onLoginSubmit)를 만든다.
// 이 안에는 우선 이벤트를 중지시키고(preventDefault) form에 붙여 놓은 class가 toggle(즉 있으면 없애고, 없으면 추가하는)되도록 작성한다.
// 그리고 input의 value(실제 입력값)이 브라우저의 로컬스토리지에 저장되도록 한다.
// 마지막으로 환영문구(h1 #greeting)에 걸어놓은 class(“.hidden)를 toggle해서 없애고,
// 환영문구의 innerText에 input value가 들어가도록 한다.

// 3. 그 다음 if문을 활용하여 로컬스터리지에 값이 저장 안되어 있다면 form에 붙은 class를 toggle하여 form 화면이 보이도록 하고,
//이벤트리스너를 통해 submit 시 위의 onLoginSubmit가 작동되도록 하면 된다.
// 이제 로컬스터리지에 값이 저장된 상태이니깐, 새로고침을 하면 if문이 false가 뜰거고 실행이 되지 않을 것이다.
//그렇게 되면 form은 class가 hidden인 상태이니깐, 화면은 아무것도 보이지 않을 것이고
// 환영문구도 처음세팅은 class가 hidden이니깐 안보이겠지.
// 그래서 if문 말고 else문을 써서 로컬스터리지에 값이 있을 때도 지정해 줘야 한다.
// 이경우, 위의 paintGreetings 함수를 써서 환영문구가 다시 나오도록 한다.

// 4. 그럼 결과적으로 로그인을 하려고 input에 값을 넣고 submit(엔터를 치거나 submit버튼을 누를 경우)를 할 경우,
//onLoginSubmit함수가 발동되어 submit를 잠깐 멈추고 input value가 로컬스터리지에 저장되고,
//동시에 input value는 환영문구의 innerText에 추가되어 보이게끔 된다.
// 그리고 새로고침을 하더라도 if문의 else문장이 실행되어 환영문구가 보인다.
