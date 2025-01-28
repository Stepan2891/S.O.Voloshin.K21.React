import { useState } from "react";
import freeImg from '../../assets/icons/van.svg';
import awardImg from '../../assets/icons/star.svg';
import environmentImg from '../../assets/icons/wood(2).svg';
import spainImg from '../../assets/icons/spain.svg'
import FeaturesSectionItem from "../featuresSectionItem/featuresSetionItem";

const FeaturesSection = () => {
    const [features, setFeatures] = useState([
        {
            text: 'Free Delivery',
            img:  freeImg,
            alt: "Truck Delivery"
        },
        {
            text: 'Award-Winning Product Design',
            img: awardImg,
            alt: "Award Star"
        },
        {
            text: 'Environmentally Friendly',
            img: environmentImg,
            alt: "Tree"
        },
        {
            text: 'Made in Spain',
            img: spainImg,
            alt: "Map of Spain"
        },
        {
            text: "Rated 4.8 Stars"
        }
    ])

    return (
        <ul className="features">   
            {
                features.map(({text, img, alt}, index) => {
                    return <FeaturesSectionItem
                                key={index}
                                img={img}
                                text={text}
                                alt={alt}/>
                })
            }
        </ul>
    )
};

export default FeaturesSection;
