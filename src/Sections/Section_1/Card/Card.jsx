import { useState, useEffect } from 'react';

function CardDetails(props) {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Выполнение запроса к API
    fetch(`/api/card/${props.cardId}`)
      .then(response => response.json())
      .then(data => setCardData(data));
  }, [props.cardId]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  // Обработка полученных данных и вывод на экран
  return (
    <div>
      <h2>{`${cardData.surname} ${cardData.name} ${cardData.patronymic}`}</h2>
      <div>
        <h3>Description</h3>
        {cardData.description.map(desc => <p key={desc}>{desc}</p>)}
      </div>
      <div>
        <h3>Images</h3>
        {cardData.imageUrls.map(url => <img src={url} alt="card image" key={url} />)}
      </div>
      <div>
        <h3>Links</h3>
        {cardData.urls.map(link => <a href={link} key={link}>{link}</a>)}
      </div>
    </div>
  );
}