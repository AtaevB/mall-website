import axios from 'axios';
import Banner from "../../components/banner/Banner";
import { useEffect, useState } from 'react';
import './shops.css';
import './shopAdaptive.css';
import headerimg from '../../images/mallshops.jpg';
import {importAll} from '../../scripts/importImages';
import Selection from '../../components/selection/Selection';
import Search from '../../components/search/Search';


const Shops = () => {

    let [bannerinfo, setBannerinfo] = useState([]);

    const images = importAll(require.context('../../images/shops', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {

        const fetchData = async () => {

            try{
                const response = await axios.get('http://localhost:8000/shops');
                setBannerinfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }
        fetchData();
    }, []);

    let [searchTerm, setSearchTerm] = useState('');
    let [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(bannerinfo.map(banner => banner.shopcategory))];
    
    const filteredShops = bannerinfo.filter(banner => {
        const isMatchingCategory = selectedCategory ? banner.shopcategory === selectedCategory : true;
        const isMatchingSearchTerm = banner.shopname.toLowerCase().includes(searchTerm.toLowerCase());
        return isMatchingCategory && isMatchingSearchTerm;
    });

    return ( <>

        <div className='headerimg'><img src={headerimg} alt='Шапка'/></div>

        <h1 className='h1InShops'>Магазины в нашем торговом центре:</h1>

        <hr/>

            <Search
                type="text"
                placeholder="Поиск по названию магазина"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='searchInput'
            />

            <Selection
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultValue=""
            categories={categories}
            />

        <div className='shoplist'>
        {filteredShops.map(banner => (
            <Banner 
                key={banner.id}
                id={banner.id}
                name={banner.shopname}
                description={banner.shopdescription}
                location={banner.shoplocation}
                category={banner.shopcategory}
                images={images}
                entityType="shop"
            />
        ))}
        </div>

    </> );
}
 
export default Shops;