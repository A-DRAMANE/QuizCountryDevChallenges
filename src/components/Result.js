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

    return (
        <div className="global-contain">
            <h1 className="title">COUNTRY QUIZ</h1>
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

                <button onClick={handleTryAgain}>Try again</button>
            </div>

        </div>
    )
}

export default Result
