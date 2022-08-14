const quotes = [
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    author: "Will Smith",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    author: "Steve Jobs",
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    author: "Seneca",
  },
];

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// array의 길이를 구하는 함수? 기본속성 중 length 라는 것이 있는데,
// 이를 이용해 random 함수 값과 곱해서 사용하면 전체 array를 범위로 하는 랜덤 숫자가 생성된다.

// console.log(todaysQuote[0]);

function enterQuote() {
  // quote.innerText = `"${todaysQuote["quote"]}"`;
  // author.innerText = `"${todaysQuote["author"]}"`;
  quote.innerText = `"${todaysQuote.quote}"`;
  author.innerText = `"${todaysQuote.author}"`;
}

enterQuote();
