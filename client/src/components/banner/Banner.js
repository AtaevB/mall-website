import './banner.css';

const Banner = ({ id, name, description, location, category, images, entityType}) => {

    return ( <>

    <div className="banner">

        <div className="imagebutton">
            <a href={`/positioninfo/${entityType}/${id}`}>
                <img src={images[`${id}.jpg`]} alt='Логотип магазина' className="imageInsideDiv"/>
                <span className="overlay">Подробнее</span>
            </a>
        </div>  

        <h2 className="bannertitle">{name}</h2>

        <hr/>
        <p className='boldtext'>{category}</p>
        <p>{location}</p>
        

    </div> 

    </> );
}
 
export default Banner;