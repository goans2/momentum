const images = ["image0.jpg", "image1.jpg", "image2.jpg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url("img/${todaysImage}")`;
}

changeBackgroundImage();

// html에 background image 추가하기1
// css에 style을 추가하는 방식을 사용함
// document.body의 style 에서 backgroundImage에 위 주소를 추가하면 되는데, 위에서 랜덤으로 사진이 골라지도록 한 변수를 사용하였다.

// const bgImage = document.createElement("img");

// bgImage.src = `img/${todaysImage}`;

// document.body.appendChild(bgImage);

// html에 background image 추가하기2
// html에 element를 직접 생성하여 추가하는 방식임
// 변수 설정 및 랜덤계수 설정은 위와 같고,
// createElement함수를 사용하여, document object에 직접 img element를 추가함
// 그리고 img element를 변수에 저장 후, img element의 src value를 위의 랜덤계수 생성문장을 적용하여 추가함.
// 마지막으로 body에 appendChild 함수를 사용하여 생성한 element를 body에 추가함.(body 맨 마지막에 생성)
// 만약 body 맨 위에 생성되게 하고 싶으면 함수를 prependChild를 쓰면 됨
