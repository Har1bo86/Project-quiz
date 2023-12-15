import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Настоящее имя Macan?',
    variants: ['Андрей', 'Амаль', 'Павел'],
    correct: 0,
  },
  {
    title: 'Когда родился Macan?',
    variants: ['3.02.2001', '06.01.2002', '27.01.2000'],
    correct: 1,
  },
  {
    title: 'Кем вдохновлялся Macan?',
    variants: ['Баста', 'Тимати', 'Гуф'],
    correct: 0,
  },
  {
    title: 'Предыдущий псевдоним Macan?',
    variants: ['Haribo', 'Mavashi', ' Young Chaser'],
    correct: 2,
  },
  {
    title: 'С какого трека строки : Бьёмся о скалы ночами, Неудачи нас тащат на дно. Тут тощие пацы с окраин, Что пересмотрели кино.',
    variants: ['Харибо', 'Кино', 'Бенз'],
    correct: 2,
  },
  {
    title: 'Сколько совместных треков с SCIRENA',
    variants: ['2', '1', '3'],
    correct: 1,
  },
  {
    title: 'С кем записан трек "Не умеешь,не люби"',
    variants: ['HammAli & Navai', 'Ramil', 'Xcho'],
    correct: 0,
  },
  {
    title: 'Из какого трека строчка : Все мы тут свои, пока от нас чего-то ждут',
    variants: ['Гири', 'IVL', 'Hollywood'],
    correct: 2,
  },
  {
    title: 'Какой из треков не принадлежит Macan?',
    variants: ['Shazam', 'Вороны', '77'],
    correct: 1,
  },
  {
    title: 'Тебе нраявятся треки Macan?',
    variants: ['Нет', 'Да', 'Нет, у меня плохой вкус'],
    correct: 1,
  },

];

function Result({correct}) {
  return (
    <div className="result">
      <img class="haribo" src="https://avatars.mds.yandex.net/i?id=3ec845d9af76119b6252d0aabd959d253deadf53-9699789-images-thumbs&n=13" />
      <h2>Вы отгадали {correct} ответов из {questions.length}</h2>
      <a href="/"><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({step, question, onClickVariants}) {
  const percentage = Math.round((step / questions.length * 100))
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text,index) => <li onClick={() =>onClickVariants(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
   const  [step, setStep] = React.useState(0);
   const  [correct, setCorrect] = React.useState(0);
   const question = questions[step];
   const onClickVariants = (index) => {
    console.log(step, index);
    setStep(step +1);

    if(index === question.correct) {
      setCorrect(correct +1);
    }
   }
  return (
    <div className="App">
      {
        step != questions.length 
        ? <Game step={step} question={question} onClickVariants={onClickVariants}/>
        : <Result correct ={correct}/>
      }
    </div>
  );
}

export default App;
