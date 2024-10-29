import './card.css';

const Card = ( { title, info } ) => {
    return ( 
        <>
        <div className='card'>
            <div className='card-content'>
                <h1 className='title'>{title}</h1>
                <h2 className='info'>{info}</h2>
            </div>
        </div>
        </>
     );
}
 
export default Card;