

const FeaturesSectionItem = ({text, img, alt}) => {
    return (
        <li className="item">
            {img ? <img src={img} alt={alt}/> : null}
            <p>{text}</p>
        </li>
    )
};

export default FeaturesSectionItem;
