import headerimg from '../../images/mallshops.jpg';
import first from '../../images/first.jpg';
import second from '../../images/second.jpg';
import third from '../../images/third.jpg';
import fourth from '../../images/fourth.jpg';
import './mallmap.css';
import './mallmapAdaptive.css';
import { useState } from 'react';
import smallheader from '../../images/smallmall.jpg';

const Mallmap = () => {

    const [currentFloor, setCurrentFloor] = useState(first);

    const handleFloorChange = (floor) => {
        setCurrentFloor(floor);
    };

    return (<>

        <div className='headerimg'><img src={headerimg} alt='Шапка'/></div> 
        <div className='smallheader'><img src={smallheader} alt='Шапка'/></div>
        
        <h1 className='titleOfMap'>Поэтажный план</h1>

        <hr/>

        {currentFloor === first &&(<h2>Первый этаж</h2>)}
        {currentFloor === second &&(<h2>Второй этаж</h2>)}
        {currentFloor === third &&(<h2>Третий этаж</h2>)}
        {currentFloor === fourth &&(<h2>Четвертый этаж</h2>)}
        <div className='floorButtons'>
                <button className='floorButton' onClick={() => handleFloorChange(first)}>Этаж 1</button>
                <button className='floorButton' onClick={() => handleFloorChange(second)}>Этаж 2</button>
                <button className='floorButton' onClick={() => handleFloorChange(third)}>Этаж 3</button>
                <button className='floorButton' onClick={() => handleFloorChange(fourth)}>Этаж 4</button>
        </div>

        

        <div className='map-wrapper'>

        {currentFloor === first && (

            <svg viewBox='0 0 2244 1663'>
                <a href='positioninfo/shop/6'>
                    <path className='part' d='M 54.964526,660.11142 54.690621,54.437424 869.7328,54.753921 869.7644,660.91709Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/8'>
                    <path className='part' d='m 929.74056,56.7162 2.02558,601.59683h 368.65526l -2.0255,-603.622409z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/19'>
                    <path className='part' d='m 1359.1632,50.639464 -2.0256,607.673566 368.6553,2.02558V 50.639464Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/16'>
                    <path className='part' d='m 1784.5347,52.665043 4.0512,305.862367 364.6041,2.02557 2.0256,-305.862359z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/10'>
                    <path className='part' d='M 54.690621,717.05481H 463.85749l -2.02558,607.67359H 54.690621Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/14'>
                    <path className='part' d='m 929.74056,773.77101 2.02558,490.18999 368.65526,-2.0256 -4.0511,-484.11323z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/23'>
                    <path className='part' d='M 1359.1632,779.84775V 1263.961l 366.6297,-6.0767 -4.0511,-476.01097z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/4'>
                    <path className='part' d='m 1784.5347,775.79659 2.0256,486.13881h 364.6041V 783.8989Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/27'>
                    <path className='part' d='m 54.690621,1385.4957v 198.5067l 407.141289,-2.0255v -196.4812z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/7'>
                    <path className='part' d='m 692.74787,1377.3934v 198.5067H 868.9732v -200.5323z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/12'>
                    <path className='part' d='m 929.74056,1381.4446v 192.4299h 366.62974v -198.5067z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/9'>
                    <path className='part' d='m 1361.1888,1377.3934 -2.0256,204.5835 370.6809,-2.0256 -4.0512,-202.5579z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/1'>
                    <path className='part' d='m 1786.5603,1379.419v 198.5067l 366.6297,-2.0256 2.0256,-192.4299z' fill='#7b0040'></path>
                </a>

            </svg>
            
        )}

        {currentFloor === second && (
            <svg viewBox='0 0 2244 1663'>
                <a href='positioninfo/shop/1'>
                    <path className='part' d='m 52.665043,56.7162 4.051157,599.57125 295.73447,4.05116 4.05116,-107.35566 107.35566,2.02558V 56.7162Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/3'>
                    <path className='part' d='m 514.49695,54.690621 4.05116,500.317909 149.89282,-2.02558 4.05115,109.38124 212.68575,-2.02558V 54.690621Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/18'>
                    <path className='part' d='m 461.83191,885.17783 -2.02558,437.52497H 58.741778V 715.02923l 295.734472,6.07674 -4.05116,166.09744z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/4'>
                    <path className='part' d='m 927.71498,52.665043 4.05116,603.622407 368.65526,2.02558V 54.690621Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/7'>
                    <path className='part' d='m 1355.1121,52.665043 2.0255,607.673567 368.6553,2.02558V 50.639464Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/13'>
                    <path className='part' d='m 1782.5091,54.690621 6.0768,603.622409 368.6553,-2.02558 -2.0256,-603.622407z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/26'>
                    <path className='part' d='M 1357.1376,777.82217V 1263.961l 796.0524,-4.0511 -2.0256,-480.06215z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/8'>
                    <path className='part' d='m 464.78146,1614.2025 -0.71615,-247.788 -408.205597,-0.7161 -1.4323,249.2202z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/3'>
                    <path className='part' d='m 1100.0067,1378.5891 -0.7162,198.3736h 199.8059l -0.7161,-199.0898z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/6'>
                    <path className='part' d='m 1362.1176,1378.5891v 197.6574l 365.2366,1.4323 -0.7161,-200.522z' fill='#7b0040'></path>
                </a>
                
                <a href='positioninfo/shop/11'>
                    <path className='part' d='m 1786.7947,1382.886 0.7161,197.6574h 175.4568l -1.4323,-198.3736z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/22'>
                    <path className='part' d='m 1977.2906,1381.4537 1.4323,199.8059h 175.4568l -0.7161,-199.8059z' fill='#7b0040'></path>
                </a>

            </svg>
        )}

        {currentFloor === third && (

            <svg viewBox='0 0 2244 1663'>

                <a href='positioninfo/shop/2'>
                    <path className='part' d='M 54.690621,55.703411 53.677832,661.3514 465.88307,662.36419V 52.665043Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/24'>
                    <path className='part' d='m 517.53532,54.690621 3.03837,603.622409 365.61693,4.05116 -2.02558,-605.64799z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/28'>
                    <path className='part' d='M 929.74056,54.690621 930.75335,661.3514H 1297.3831L 1296.3703,54.690621Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/20'>
                    <path className='part' d='M 1359.1632,55.703411V 659.32582l 366.6297,2.02558V 52.665043Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/15'>
                    <path className='part' d='m 1785.5475,55.703411 2.0256,603.622409 366.6297,-1.01279V 51.652253Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/12'>
                    <path className='part' d='M 53.677832,1323.7156 55.703411,717.05481 462.8447,719.08039V 1323.7156Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/2'>
                    <path className='part' d='m 1375.7245,858.66405v 324.41605l 792.6574,1.8834 -2.0256,-326.11819z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/5'>
                    <path className='part' d='m 53.711263,1366.4145 408.921747,0.7162 1.4323,247.0718H 53.711263Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/10'>
                    <path className='part' d='m 875.13551,1267.5858 -0.71615,348.049 480.53674,-1.4323 -2.1484,-345.1844z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/9'>
                    <path className='part' d='m 1375.7245,1266.1535 792.0621,1.4323v 348.7651l -792.0621,-2.1484z' fill='#7b0040'></path>
                </a>

            </svg>
        )}

        {currentFloor === third && (

            <svg viewBox='0 0 2244 1663'>

                <a href='positioninfo/shop/2'>
                    <path className='part' d='M 54.690621,55.703411 53.677832,661.3514 465.88307,662.36419V 52.665043Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/24'>
                    <path className='part' d='m 517.53532,54.690621 3.03837,603.622409 365.61693,4.05116 -2.02558,-605.64799z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/28'>
                    <path className='part' d='M 929.74056,54.690621 930.75335,661.3514H 1297.3831L 1296.3703,54.690621Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/20'>
                    <path className='part' d='M 1359.1632,55.703411V 659.32582l 366.6297,2.02558V 52.665043Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/15'>
                    <path className='part' d='m 1785.5475,55.703411 2.0256,603.622409 366.6297,-1.01279V 51.652253Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/12'>
                    <path className='part' d='M 53.677832,1323.7156 55.703411,717.05481 462.8447,719.08039V 1323.7156Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/2'>
                    <path className='part' d='m 1375.7245,858.66405v 324.41605l 792.6574,1.8834 -2.0256,-326.11819z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/5'>
                    <path className='part' d='m 53.711263,1366.4145 408.921747,0.7162 1.4323,247.0718H 53.711263Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/10'>
                    <path className='part' d='m 875.13551,1267.5858 -0.71615,348.049 480.53674,-1.4323 -2.1484,-345.1844z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/9'>
                    <path className='part' d='m 1375.7245,1266.1535 792.0621,1.4323v 348.7651l -792.0621,-2.1484z' fill='#7b0040'></path>
                </a>

            </svg>
        )}

            {currentFloor === third && (

            <svg viewBox='0 0 2244 1663'>

                <a href='positioninfo/shop/2'>
                    <path className='part' d='M 54.690621,55.703411 53.677832,661.3514 465.88307,662.36419V 52.665043Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/24'>
                    <path className='part' d='m 517.53532,54.690621 3.03837,603.622409 365.61693,4.05116 -2.02558,-605.64799z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/28'>
                    <path className='part' d='M 929.74056,54.690621 930.75335,661.3514H 1297.3831L 1296.3703,54.690621Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/20'>
                    <path className='part' d='M 1359.1632,55.703411V 659.32582l 366.6297,2.02558V 52.665043Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/15'>
                    <path className='part' d='m 1785.5475,55.703411 2.0256,603.622409 366.6297,-1.01279V 51.652253Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/12'>
                    <path className='part' d='M 53.677832,1323.7156 55.703411,717.05481 462.8447,719.08039V 1323.7156Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/2'>
                    <path className='part' d='m 1375.7245,858.66405v 324.41605l 792.6574,1.8834 -2.0256,-326.11819z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/5'>
                    <path className='part' d='m 53.711263,1366.4145 408.921747,0.7162 1.4323,247.0718H 53.711263Z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/service/10'>
                    <path className='part' d='m 875.13551,1267.5858 -0.71615,348.049 480.53674,-1.4323 -2.1484,-345.1844z' fill='#7b0040'></path>
                </a>

                <a href='positioninfo/shop/9'>
                    <path className='part' d='m 1375.7245,1266.1535 792.0621,1.4323v 348.7651l -792.0621,-2.1484z' fill='#7b0040'></path>
                </a>

            </svg>
        )}

        {currentFloor === fourth && (

        <svg viewBox='0 0 2244 1663'>

            <a href='positioninfo/restaurant/10'>
                <path className='part' d='M 58.741778,58.235384 58.235384,413.72442H 355.48904L 354.47625,59.754568Z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/8'>
                <path className='part' d='m 409.16687,59.248173 0.50639,355.995437H 649.70432V 59.248173Z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/3'>
                <path className='part' d='m 707.93971,58.235384 236.4863,0.506394V 414.73721l -236.9927,-1.01279z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/7'>
                <path className='part' d='m 1002.6614,57.728989 238.5119,0.506395V 413.72442l -238.5119,-0.50639z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/2'>
                <path className='part' d='m 1298.3959,58.235384h 236.9927l 0.5063,356.501826 -236.4863,-1.01279z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/5'>
                <path className='part' d='m 1593.1175,58.741778 239.0183,0.506395 -1.0128,354.476247 -237.4991,-0.50639z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/1'>
                <path className='part' d='m 1711.5989,530.66728 1.4323,235.6134 412.5025,1.4323 0.7162,-237.0457z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/6'>
                <path className='part' d='m 1712.3151,824.28884 412.5025,0.71616 0.7161,239.9103 -413.2186,-2.8646z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/9'>
                <path className='part' d='m 1711.5989,1120.775 413.2187,1.4323 0.7161,235.6134 -413.9348,2.1485z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/restaurant/4'>
                <path className='part' d='m 1712.3151,1417.9773 413.2186,-0.7161v 178.3214l -413.9348,-2.1485z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/shop/25'>
                <path className='part' d='m 58.724314,706.84022 295.770016,1.4323 1.4323,472.65908 -296.486166,0.7162z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/shop/21'>
                <path className='part' d='m 58.008164,1238.9398 355.926636,0.7161v 354.4944H 58.008164Z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/shop/17'>
                <path className='part' d='m 706.12407,1238.2236 475.52373,1.4323 -0.7162,355.2105c 0,0 -474.80753,2.1485 -474.80753,-0.7161 0,-2.8646 0,-355.9267 0,-355.9267z' fill='#7b0040'></path>
            </a>

            <a href='positioninfo/shop/5'>
                <path className='part' d='m 1239.6559,1240.3721 237.7619,-0.7162v 354.4944l -237.7619,0.7161z' fill='#7b0040'></path>
            </a>

        </svg>
        )}

            <img src={currentFloor} alt=''/>
        
        
        </div>

    </>);
}
 
export default Mallmap;