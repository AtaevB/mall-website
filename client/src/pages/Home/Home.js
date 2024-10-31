import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import './home.css';
import './homeAdaptive.css';
import mallinfophoto from "../../images/mallinfo.jpg";

const Home = () => {
    return ( 
    <div className="content">
    <Header/>

    <div className="main-section">

      <div className="main-text-section">
        <div className="text-section">
          <h1>Garden Mall</h1>
          <h2>ТОРГОВЫЙ ЦЕНТР ДЛЯ ВСЕЙ СЕМЬИ</h2>

          <p className="small-description">В нашем торгово-развлекательном центре «Garden Mall» вас ждёт более 100 бутиков, магазинов и салонов, среди которых популярные сетевые магазины: «Перекресток», «IKEA», «Л'Этуаль», «Эльдорадо» и многие другие. Для любителей вкусной еды мы предлагаем обширный ресторанный дворик на 350 посадочных мест, где каждый сможет найти что-то по своему вкусу. </p>
        </div>
      </div> 

      <hr/>

      <div className="card-holder">
      <Card title="28" info="Магазинов"/>
      <Card title="12" info="Услуг"/>
      <Card title="10" info="Ресторанов"/>
      </div>

      <hr/>

      <div className="mall-info">

        <h1 className="mall-info-title">О торговом центре</h1>

        <div className="mall-info-wrapper">

          <div className="mall-info-text">

            <p>Торговый центр «Garden Mall» расположен в живописной части города, недалеко от станции метро Зелёная. Торговый центр создан для широкой аудитории, предлагая разнообразные категории товаров и услуг в различных ценовых сегментов.</p>
            <p>За 5 лет своего существования «Garden Mall» зарекомендовал себя как идеальное место для семейного отдыха и шопинга. Для удобства наших посетителей предусмотрена вместительная наземная парковка на 250 машиномест.</p>
            <p>В ТРЦ «Garden Mall» вы найдете магазины, предлагающие женскую, мужскую и детскую одежду, а также аксессуары. Здесь также представлены магазины для обустройства интерьера и продажи бытовой техники.</p>
            <p>В нашем центре вы сможете посетить популярные сети: Adidas, IKEA, Эльдорадо, Л'Этуаль, Перекресток и фуд-корт с разнообразной кухней на 350 мест для комфортного отдыха.</p>
            <p>Ждем вас в ТРЦ «Garden Mall»!</p>

          </div>
          <div className="mall-info-image"><img src={mallinfophoto} alt='mall hall' className="mall-info-image"/></div>

        </div>

      </div>


    </div>
    </div> 
  );
}
 
export default Home;