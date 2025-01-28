import deckImg from '../../assets/img/desk.png';
import entarnceHallImg from '../../assets/img/entranceHall.png';
import lightBedImg from '../../assets/img/light.shelf.bed.png'

const HomeSection= () => {
    return (
        <section className="home-decor-section">
            <div className="decor-container">
                <h2>Our pieces inside your home</h2>
                <p>Get inspired by our products in real-life. Tag us and be featured!</p>
                <div className="inspiration-section">
                    <div className="inspiration-item">
                        <img src={deckImg} alt="Decorative Vase"/>
                    </div>
                    <div className="inspiration-item">
                        <img src={entarnceHallImg} alt="Minimalist Entryway"/>
                    </div>
                    <div className="inspiration-item">
                        <img src={lightBedImg} alt="Modern Bedroom"/>
                    </div>
                </div>
                <div className="square-container">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </div>
        </section>
    )
};

export default HomeSection;
