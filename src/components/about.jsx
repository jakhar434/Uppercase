import React from 'react';
export function About(){
    return (
        <div className="accordion accordion-flush container" id="accordionFlushExample">
            
            <p  className="container mx-4 my-3 changedbottom" >Features of this website</p>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                 Change to Uppercase
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">first feature on this website is to change all the text to uppercase.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Change to lowercase
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Second feature on this website is to change all the text to lowercase.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Words count
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Third feature is to count the total words that you enter in the textarea . The main purpose of adding this feature 
                is to save your time when any restriction is given to total words.</div>
            </div>
            </div>

            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                Copy Text
                </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">fourth feature is to copy the text the clipboard for to check meaning on google etc.</div>
            </div>
            </div>

            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                Clear text
                </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Fivth feature is to clear all the text</div>
            </div>
            </div>

            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                Remove Extra Spaces
                </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Sixth feature is to remove extra spaces , by mistake if you give extra spaces the it will remove it.</div>
            </div>
            </div>
        </div>
    );
}