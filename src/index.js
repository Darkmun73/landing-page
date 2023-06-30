import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const smallInfo='EugenVPN - лучшее расширение для онлайн-безопасности от создателей известного блокировщика рекламы.\
 Уже более 12 лет блокировщик рекламы Eugen защищает своих пользователей от раздражающей рекламы и следящих трекеров. \
 Сегодня свыше 30 миллионов человек по всему миру доверяют Eugen защиту своих данных, поэтому мы решили добавить новый инструмент, \
 чтобы усилить их информационную безопасность — Eugen VPN, быстрый и безопасный proxy.';

const listFeature=[
  {
    discr: 'P2P support - VPN позволит делиться файлами напрямую с другими пользователями с сохранением анонимности.',
    img : "p2pSup.png",
  },
  {
    discr: '5 Devices - бесплатная подписка позволяет подключить до пяти ваших устройств без потери эффективности!',
    img: "5dev.png"
  },
  {
    discr: 'Secure account - Ваш аккаунт будет сохранять данные, которые никто не сможет никак прочитать.\
    Компания предоставляет шифрование данных для того, чтобы эти данные не могу получить злоумышленники.',
    img: "secureAcc.png"
  }
]

function Top(props){
  return(<div className='top'>
      <h1 className='title'>{props.title}</h1>
      <div className='small-info'>
          {props.smallInfo}
      </div>
  </div>);
}

function Features(props){
    const listFeatures = props.list.map((item, index)=>
    <Feature key={index} discr={item.discr} img={item.img} />);  

    return(<div className='features'><ol>
      {listFeatures.map((elem)=> elem)}
    </ol>
    </div>)
}

function Feature(props){
  const [activated, revert] = React.useState(false);
  const [buttonText, changeText] = React.useState('Активировать');

  const changeFeatureState = () => {
      revert(!activated);
      if(activated)
        changeText('Активировать');
      else
        changeText('Деактивировать');
  }
  return(<li key={props.index}>
      <div className='feature'>
      <span className='discription'>{props.discr}</span>
      <button onClick={changeFeatureState}>{buttonText}</button>
  </div>{activated &&
  <img src={props.img}></img>}</li>);
}

root.render(<>
<Top title='Лучший VPN прямо сейчас!' smallInfo={smallInfo}/>
<Features list={listFeature} />
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
