const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const apiKey = "c03a22388d93d26a19ad18c6f9ba3191";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("You live in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 날씨정보 추가하기1 - gps 값 받아오기
// js에서는 gps 값을 받는 함수가 있다. navigator object에서 geolocation 그리고 getCurrentPosition 함수를 쓰고,
// arguement에 gps 받기 성공일 때, 실패일때 이렇게 넣어주면 된다.

// 위의 getCurrentPosition 함수를 쓰면 자동으로 gps 값을 출력하는데, 위에서는 그 값을 성공일때 쓸 함수의 position이라는 값으로 표현했다.
// 함수로부터 받은 gps 값은 object로 구성되어 있고, 다양한 값들이 존재한다.
// 그 중 위도(position.coords.latitude) 와 경도(position.coords.longitude) 값을 별도의 변수에 저장한다.

// 날씨정보 추가하기2- openweathermap.org에 들어가서 api 적용하기
// openweathermap.org라는 사이트에서는 날씨정보를 사용
