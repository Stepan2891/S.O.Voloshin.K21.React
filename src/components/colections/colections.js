import { useState } from 'react';
import shelvesImg from '../../assets/img/shelves.png';
import towelImg from '../../assets/img/Towel.png';
import magazineImg from '../../assets/img/magazine(exp).png';
import bedImg from '../../assets/img/shelf.bed.png';
import lilTableImg from '../../assets/img/lilTable.png';
import ColectionsItem from '../colectionsItem/colectionsItem';

const Colections= () => {
    const [colections, setColections] = useState([
        {
            title: "Cloe",
            text: "Modular Storage System",
            price: '1,176',
            descr: 'An expansive way to furnish your space exactly how you need it and like it. Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick.',
            img: shelvesImg
        },
        {
            title: 'Pelican',
            text: 'Shelves with hidden hooks',
            price: '89',
            descr: 'Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a decorative and minimalist touch.+ 3 sizes, + 5 color finishes',
            img: towelImg
        },
        {
            title: 'Alada',
            text: 'Floating folding desk',
            price: '534',
            descr: 'A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds.+ 4 color finishes',
            img: magazineImg
        },
        {
            title: 'Alba Collection',
            text: 'Modular bedside table & shelf',
            price: '272',
            descr: 'A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.+ 6 color finishes, infinite combinations',
            img: bedImg
        }, 
        {
            title: 'Batea Collection',
            text: 'Tables with storage & tray tables',
            price: '272',
            descr: 'Composed of clean and rounded lines, the Batea Collection includes tables with extra functionality like a removable tray, and hidden storage.+ 3 sizes, + 6 color finishes',
            img: lilTableImg
        }
    ])



    return (
        <>
            <section className="promo-container">
                {colections.map(({title, text, price, descr, img}, index) => {
                    return <ColectionsItem 
                                key={index*10}
                                title={title}
                                text={text}
                                price={price}
                                descr={descr}
                                img={img} 
                                index={index}/>
                })}
            </section>
        </>
    )
};

export default Colections;
