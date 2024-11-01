import './restaurants.css';
import './restaurantAdaptive.css';
import axios from 'axios';
import Banner from "../../components/banner/Banner";
import { useEffect, useState } from 'react';
import headerimg from '../../images/mallshops.jpg';
import {importAll} from '../../scripts/importImages';
import Selection from '../../components/selection/Selection';
import Search from '../../components/search/Search';
import smallheader from '../../images/smallmall.jpg';

const Restaurants = () => {

    let [bannerinfo, setBannerinfo] = useState([]);

    const images = importAll(require.context('../../images/restaurants', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {

        const fetchData = async () => {

            try{
                const response = await axios.get('http://localhost:8000/restaurants');
                setBannerinfo(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, []);

    let [searchTerm, setSearchTerm] = useState('');

    let [selectedCategory, setSelectedCategory] = useState('');
    const categories = [...new Set(bannerinfo.map(banner => banner.restaurantcategory))];
    const filteredRestaurants = bannerinfo.filter(banner => {
        const isMatchingCategory = selectedCategory ? banner.restaurantcategory === selectedCategory : true;
        const isMatchingSearchTerm = banner.restaurantname.toLowerCase().includes(searchTerm.toLowerCase());
        return isMatchingCategory && isMatchingSearchTerm;
    });

    return ( <>

        <div className='headerimg'><img src={headerimg} alt='Шапка'/></div>
        <div className='smallheader'><img src={smallheader} alt='Шапка'/></div>

        <h1 className='h1InRestaurants'>Рестораны в нашем торговом центре:</h1>

        <hr/>

        <Search
                type="text"
                placeholder="Поиск по названию ресторана"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='searchInput'
        />

        <Selection
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultValue=""
            categories={categories}
            />

        <div className='restaurantslist'>
        {filteredRestaurants.map(banner => (
            <Banner 
                id={banner.id}
                name={banner.restaurantname}
                description={banner.restaurantdescription}
                location={banner.restaurantlocation}
                category={banner.restaurantcategory}
                images={images}
                entityType="restaurant"
            />
        ))}
        </div>

    </> );
}
 
export default Restaurants;