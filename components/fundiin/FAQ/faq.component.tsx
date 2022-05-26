import React from "react";

const Faq = (props) => {

    const {question, answer} = props;

    return (
        <div className='col-lg-6 col-md-6'>
            <div className='faq-item'>
            <h3>{`Q: ${question}`}</h3>
            <p>
                <strong>A: </strong> {answer}
            </p>
            </div>
        </div>
    );
}

export default Faq;