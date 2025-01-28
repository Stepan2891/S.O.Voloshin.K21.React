import lightImg from '../../assets/icons/light.svg';
import recycleImg from '../../assets/icons/recycle.svg';
import handsImg from '../../assets/icons/hands.svg';
import woodImg from '../../assets/icons/wood.svg';
import customersImg from '../../assets/img/customers.png';

const AboutUs = () => {
    return (
        <>
            <div className="citata" style={{marginTop: 100 + 'px'}}>
                <div className="hhh">"The team from Woodendot has displayed utmost professionalism from order to deliver and customer support. We placed an order to the UK and would <br/> definitely recommend friends to order from Woodendot!"</div>
                <p>R. Aoun, United Kingdom</p>
            </div>

            <div className="sections-container">
                <section className="section">
                    <img src={lightImg} alt="Design Icon"/>
                    <h2>DESIGN</h2>
                    <p>We create furniture pieces with personality, designed to transform your space.</p>
                    <a href="#">Learn More</a>
                </section>
                
                <section className="section">
                    <img src={recycleImg} alt="Footprint Icon"/>
                    <h2>FOOTPRINT</h2>
                    <p>We are committed to look after what we love, nature.</p>
                    <a href="#">Learn More</a>
                </section>
                
                <section className="section">
                    <img src={handsImg} alt="Made Icon"/>
                    <h2>MADE</h2>
                    <p>Our local design and production in the village of Íscar, Spain.</p>
                    <a href="#">Learn More</a>
                </section>
                
                <section className="section">
                    <img src={woodImg} alt="Wood Icon"/>
                    <h2>WOOD</h2>
                    <p>Our characteristic and main material, and its unique and timeless attributes.</p>
                    <a href="#">Learn More</a>
                </section>
            </div>
            <section className="customers">
                <h2 className="cardo-text">Those who are talking about us...</h2>
                <img src={customersImg} alt="customers"/>
            </section>
        </>
    )
};

export default AboutUs;
