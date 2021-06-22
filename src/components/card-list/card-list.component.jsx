import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = ({ cats }) => (
  <div className='card-list'>
    {cats.map((cat) => (
      <Card key={cat.id} cat={cat}></Card>
    ))}
  </div>
);
