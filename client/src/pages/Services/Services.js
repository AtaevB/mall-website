import './services.css';
import axios from 'axios';
import Banner from "../../components/banner/Banner";
import { useEffect, useState } from 'react';
import headerimg from '../../images/mallshops.jpg';
import {importAll} from '../../scripts/importImages';
import Selection from '../../components/selection/Selection';
import Search from '../../components/search/Search';

const Services = () => {

    let [bannerinfo, setBannerinfo] = useState([]);

    const images = importAll(require.context('../../images/services', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {

        const fetchData = async () => {

            try{
                const response = await axios.get('http://localhost:8000/services');
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
    const categories = [...new Set(bannerinfo.map(banner => banner.servicecategory))];
    
    const filteredServices = bannerinfo.filter(banner => {
        const isMatchingCategory = selectedCategory ? banner.servicecategory === selectedCategory : true;
        const isMatchingSearchTerm = banner.servicename.toLowerCase().includes(searchTerm.toLowerCase());
        return isMatchingCategory && isMatchingSearchTerm;
    });

    return ( <>

        <div className='headerimg'><img src={headerimg} alt='Шапка'/></div>

        <h1 className='h1InService'>Услуги в нашем торговом центре:</h1>

        <hr/>

        <Search
                type="text"
                placeholder="Поиск по названию услуги"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='searchInput'
        />

        <Selection
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultValue=""
            categories={categories}
            />

        <div className='servicelist'>
        {filteredServices.map(banner => (
            <Banner 
                id={banner.id}
                name={banner.servicename}
                description={banner.servicedescription}
                location={banner.servicelocation}
                category={banner.servicecategory}
                images={images}
                entityType="service"
            />
        ))}
        </div>

    </> );
}
 
export default Services;