import hallImg from '../../assets/img/hall.png';
import magazineImg from '../../assets/img/magazine.png';
import tableImg from '../../assets/img/table.png';
import shelfImg from '../../assets/img/shelf.png';

const ExampleSection = () => {
    return (
        <div className="lineup-container">
            <div className="lineup-item">
                <img src={hallImg} alt="Hallway Furniture"/>
            </div>
            <div className="lineup-item">
                <img src={magazineImg} alt="Magazine Rack"/>
            </div>
            <div className="lineup-item">
                <img src={tableImg} alt="Dining Table"/>
            </div>
            <div className="lineup-item">
                <img src={shelfImg} alt="Shelf"/>
            </div>
        </div>
    )
};

export default ExampleSection;
