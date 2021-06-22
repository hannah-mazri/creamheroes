import './card.styles.css';

export const Card = ({ cat }) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${cat.id}?set=set4&size=180x180`}
        alt=''
      />
      <h2>{cat.name}</h2>
      <p>{cat.email}</p>
    </div>
  );
};
