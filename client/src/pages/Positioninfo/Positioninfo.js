import headerimg from '../../images/mallshops.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './positioninfo.css';
import './positioninfoAdaptive.css';
import {importAll} from '../../scripts/importImages';
import smallheader from '../../images/smallmall.jpg';

const Positioninfo = ({ entityType }) => {

    let images;

    if(entityType==="shop"){
        images = importAll(require.context('../../images/shops', false, /\.(png|jpe?g|svg)$/));
    } else if(entityType==="service"){
        images = importAll(require.context('../../images/services', false, /\.(png|jpe?g|svg)$/));
    } else if(entityType==="restaurant"){
        images = importAll(require.context('../../images/restaurants', false, /\.(png|jpe?g|svg)$/));
    }


    const [itemInfo, setItemInfo] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchItemInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/${entityType}s`); 
                const item = response.data.find(item => item.id.toString() === id);
                setItemInfo(item);
            } catch (error) {
                console.error('Error fetching shop info:', error);
            }
        };
    
        fetchItemInfo();
    }, [id, entityType]);

    return ( <>
    
    <div className='headerimg'><img src={headerimg} alt='Шапка'/></div>
    <div className='smallheader'><img src={smallheader} alt='Шапка'/></div>

    <h1 className='titleOfPosition'>{itemInfo.shopname || itemInfo.servicename || itemInfo.restaurantname}</h1>

    <hr/>

    <div className='position-wrapper'>
        
        <div className='textInPosition'>

        <p>Местонахождение: {itemInfo.shoplocation || itemInfo.servicelocation || itemInfo.restaurantlocation}</p>

        <p>Категория: {itemInfo.shopcategory || itemInfo.servicecategory || itemInfo.restaurantcategory}</p>

        <p className='positionDescription'>{itemInfo.shopdescription || itemInfo.servicedescription || itemInfo.restaurantdescription}</p> 

        

        </div>

    
    <img src={images[`${id}.jpg`]} className='itemPhoto' alt=''/>

    </div>

   

    </> );
}
 
export default Positioninfo;