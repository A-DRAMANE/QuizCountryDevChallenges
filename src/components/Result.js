import React from 'react'
import images from '../images/undraw_winners_ao2o 2.svg'
import { getUseValue } from '../localStorage/getData'
import { useHistory } from 'react-router';
import '../css/Result.css'

function Result() {
    let history = useHistory();

    const handleTryAgain = () =>{
        history.push("/");
    }

    return (<>
        <h1 className="title">COUNTRY QUIZ</h1>
        <div className="global-contain">
        
            <div className="result">
                <img
                    className="top-winner"
                    src={images}
                    alt="winner"
                />
                <div className="result_midle">
                    <h1 className="result_tiyle">Results</h1>
                    <div>you got <span className="test_value">{getUseValue()}</span> correct answers</div>
                </div>
                    
                <p>{ getUseValue() >= 5 ? <span className="description-good">Waouh ,well done you have a good level</span> : <span className="description-bad">sorry, not the average but you can do better and learn more, try again</span>}</p>

                <button onClick={handleTryAgain}>Try again</button>
            </div>

        </div></>
    )
}

export default Result
