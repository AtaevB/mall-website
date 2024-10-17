import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";
import './home.css';

const Home = () => {
    return ( 
    <>
    <Navigation/>
    <Header/>

    <div className="main-section">

      <div className="main-text-section">
        <div className="text-section">
          <h1>Garden Mall</h1>
          <h2>ТОРГОВЫЙ ЦЕНТР ДЛЯ ВСЕЙ СЕМЬИ</h2>

          <p className="small-description">Более 120 бутиков, магазинов и салонов, в том числе известные сетевые магазины:  "Перекресток", "Familia", "DNS", "585" и другие магазины. Обширный ресторанный дворик на 320 посадочных мест. 50 метров от Транспортно-пересадочного узла, объединяющего 19 автобусных и 21 маршрутно-транспортное направление. В непосредственной близости с железнодорожными станциями "Петровско-Разумовская" и "Окружная", связывающие Москву с областью по Ленинградскому и Дмитровскому направлениям.</p>
        </div>
      </div> 

      <hr/>

      <div className="card-holder">
      <Card title="30" info="Магазинов"/>
      <Card title="25" info="Услуг"/>
      <Card title="10" info="Ресторанов"/>
      </div>

    </div>

    <Footer/>

    </> 
  );
}
 
export default Home;