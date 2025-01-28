
import mainLogo from '../../assets/icons/main_name.svg';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-links">
                    <a href="#product">Wooden Furniture</a>
                    <a href="#about">About</a>
                    <a href="#stories">Stories</a>
                </div>
                <img src={mainLogo} alt="Woodendot Logo" className="logo"/>   
            </nav>
        </header>
    )
};

export default Header;
