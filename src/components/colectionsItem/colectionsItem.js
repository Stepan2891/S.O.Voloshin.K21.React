
const ColectionsItem = ({title, text, price, descr, img, index}) => {

    function splitText(input) {
        const match = input.match(/^(.*?)(\+.+)$/);
        if (match) {
            return {
                mainText: match[1].trim(), 
                extraText: match[2].trim()
            };
        }
        return { mainText: input, extraText: "" }; 
    }
    
    const descrCostil = splitText(descr)

    return (
        <div className="section-wrapper">
            {
                index % 2 === 0 ? 
                (
                    <>
                        <div className="content-section">
                            <h2 className="highlighted-text">{title}</h2>
                            <div className="hhh">{text}</div>
                            <p>From ${price}</p>
                            <p className="cardo-text" style={{textAlign: 'right'}}>{descrCostil.mainText} <br/> {descrCostil.extraText}</p>
                            <a href="#" className="purchase-button">Shop now</a>
                        </div>
                        <div className="image-section" style={{marginTop: 30 + 'px'}}>
                            <img src={img} alt="Cloe Modular Storage System"/>
                        </div>  
                    </>
                )
                :
                (      
                    <>
                        <div className="image-section" style={{marginTop: 30 + 'px'}}>
                            <img src={img} alt="Cloe Modular Storage System"/>
                        </div>      
                        <div className="content-section" style={{alignItems: 'flex-start'}}>
                            <h2 className="highlighted-text">{title}</h2>
                            <div className="hhh" >{text}</div>
                            <p >From ${price}</p>
                            <p style={{textAlign: 'left'}} className="cardo-text">{descrCostil.mainText} <br/> {descrCostil.extraText}</p>
                            <a href="#" className="purchase-button" style={{alignSelf: 'flex-start'}}>Shop now</a>
                        </div>
                    </>      
                )
            }
        </div>
    )
};

export default ColectionsItem;
