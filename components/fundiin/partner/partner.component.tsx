import Link from "next/link";
import React from "react";

const Partner = (props) => {

    const {id, name, website, image, type, onClick, inView} = props;

    return (
        <>
            <div className='single-listings-box' style={{borderRadius: "20px", marginBottom: "10px"}}>
                {inView && 
                <Link 
                href={website ? website : "#"}
                >
                    <a 
                    onClick={onClick} 
                    target="_blank"  
                    className='merchant_click' 
                    data-id={id ? id : (-1)}>
                        <img  
                        data-id={id ? id : (-1)} 
                        data-name={name ? name : ""} 
                        className="partner-image" 
                        src={props.image} 
                        alt='Partner' 
                        style={{borderRadius: "20px", width: "100%"}}
                        />
                    </a>
                </Link>
                }
            </div>
        </>
    );
}

export default Partner;