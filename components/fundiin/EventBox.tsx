import React from "react";
import Link from 'next/link';

const EventBox = (props) => {

    const {imageURL, provider, title, href, id} = props;

    return (
        <div className='single-events-box'>
            <div className='row m-0'>
            <div className='col-lg-4 col-md-4 p-0'>
                <div className={`image`} style={{backgroundImage: `url(${imageURL})`}}>
                {/* <img src={imageURL} alt='image' /> */}
                {/* <Link href={href}>
                    <a className='link-btn'></a>
                </Link> */}
                </div>
            </div>

            <div className='col-lg-8 col-md-8 p-0'>
                <div className='content'>
                <span className='meta'>
                {provider}
                </span>
                <h3>
                    <Link href={href}>
                    <a  target="_blank">
                    {title}
                    </a>
                    </Link>
                </h3>
                </div>
            </div>
            </div>
        </div>
    );
}

export default EventBox;