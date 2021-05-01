import React,{ useState} from 'react'
import { nbrPremier} from './CallData'
import {getReady} from '../localStorage/getData'
import {getMyCurrent} from '../localStorage/getData'
import '../css/SwitchNext.css'

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => value + 1);
}


function SwitchNext({handleChoix,handleNext,objet,cible}) {
    const handleNextChoise = () =>{
        handleNext();
        forceUpdate();
    }
    const forceUpdate = useForceUpdate();


    return (
        <>{nbrPremier(getMyCurrent()) === false ?//verifie si la question en cour est premier pour une action
        
        // n'est pas premier question portant sur la capital
        getReady() === 1 ? <div className="switch">

        <div className="switch__question">{cible?.capital} is the capital of</div>

        <ul>
            {
            
            objet.map(pays =>{
                    return(
                        <li className={"choix "+pays?.population} key={pays?.population}
                            id={pays?.population}
                            onClick={(e) => handleChoix(pays.population,cible?.population)}
                        >
                            {pays.name}</li>
                    )
                })
            }
        </ul>
        <button 
            style={{display:'none'}} 
            className="button_next"
            onClick={handleNextChoise}
        >Next</button>
    </div> : "reeur" : 
    
    //est premier question portant sur le drapeau
    getReady() === 1 ? <div className="switch">

        <div className="switch__question">
            <img
                className="pic_target_country"
                alt="flag"
                src={cible?.flag}
        ></img> which country does this flag belong to?</div>

        <ul>
            {
            
            objet.map(pays =>{
                    return(
                        <li className={"choix "+pays?.population} key={pays?.population}
                            id={pays?.population}
                            onClick={(e) => handleChoix(pays.population,cible?.population)}
                        >
                            {pays.name}</li>
                    )
                })
            }
        </ul>
        <button 
            style={{display:'none'}} 
            className="button_next"
            onClick={handleNextChoise}
        >Next</button>
    </div> : "reeur"}  </>
        
    )
}

export default SwitchNext
