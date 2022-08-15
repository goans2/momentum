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

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 날씨정보 추가하기1 - gps 값 받아오기
// js에서는 gps 값을 받는 함수가 있다. navigator object에서 geolocation 그리고 getCurrentPosition 함수를 쓰고,
// arguement에 gps 받기 성공일 때, 실패일때 이렇게 넣어주면 된다.

// 위의 getCurrentPosition 함수를 쓰면 자동으로 gps 값을 출력하는데, 위에서는 그 값을 성공일때 쓸 함수의 position이라는 값으로 표현했다.
// 함수로부터 받은 gps 값은 object로 구성되어 있고, 다양한 값들이 존재한다.
// 그 중 위도(position.coords.latitude) 와 경도(position.coords.longitude) 값을 별도의 변수에 저장한다.

// 날씨정보 추가하기2- openweathermap.org에 들어가서 api 적용하기
// openweathermap.org라는 사이트에서는 날씨정보를 이용할 수 있다.
// 먼저 사이트에 가서 API => Current weather data 에 가면, API를 불러올 수 있는 URL정보가 있는데
// 이 안에 있는 변수 값을 우리가 구한 GPS 값에 넣어주면, 해당 지역의 날씨정보를 알 수 있다.
// 이렇게 URL을 먼저 설정하고, URL을 JS 안에서 불러오면 되는데 그 방법은 fetch 함수를 이용한다.

// 날씨정보 추가하기3 - url정보 가져오기
// js에서 url정보를 불러욜려면 fetch함수를 사용해야 한다.
// fetch함수는 바로 실행되는 것이 이난 어느정도 시간을 두고 실행된다.
// 이유는 url에서 정보를 가져오기 때문에 인터넷 연결 및 속도에 영향을 받기 때문이다.
// fetch함수의 사용방법은 fetch로 url을 불러오고
// 그 다음 단계를 .then 으로 표시한다.
// 위에선 불러와서 응답이 있늘 경우를 .then((response) => response.json()) 이렇게 표현했고, 이는 응답이 있을 경우 url값을 js에 저장한다는 의미이다.
// 그 다음 단계는 .then((data) => {city.innerText} =data.name; weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;}) 으로 표현했는데
// 이는 js에로 불러온 날씨 값을 data라고 지정하였고(날씨값은 object로 저장된다). 그리고 그 값 안에서 지역 이름(data.name)을 city변수에 저장하고
// 온도정보(data.main.temp)를 weather 변수에 저장한 것이다.
