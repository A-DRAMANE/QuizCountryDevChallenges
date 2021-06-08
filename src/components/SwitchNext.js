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

    //add load country annimation
    if (nbrPremier(getMyCurrent()) === true) {
        let load = document.querySelector(".flag")
        //load.classList.add("part")
        load.classList.add("load")

        try {
            fetch(cible?.flag)
                .then((response) => {
                 //ici
                    
                    load.classList.remove("load")
                })
                .catch((response) => console.log("ERREUR",response))
        } catch (e) {
            console.log(e);
        }
    }

    if (nbrPremier(getMyCurrent()) === false) {
        let part = document.querySelector(".hidden");
    let load = document.querySelector(".flag")
        
    }
    

    return (
        <>
        <div className="hidden" style={nbrPremier(getMyCurrent()) === false ? {display:'none'} : {display:'flex'}}>
            <div className="flag" style={{backgroundImage:`url(${cible.flag})` }}></div>
        </div>
        {nbrPremier(getMyCurrent()) === false ?//verifie si la question en cour est premier pour une action
        
        // n'est pas premier question portant sur la capital
        getReady() === 1 ? <div className="switch">

        <div className="switch__question"><span className="capital">{cible?.capital}</span> is the capital of</div>

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
        <div className="button-switch">
        <button 
            style={{display:'none'}} 
            className="button_next"
            onClick={handleNextChoise}
        >Next</button>
        </div>
    </div> : "reeur" : 
    
    //est premier question portant sur le drapeau
    getReady() === 1 ? <div className="switch">

        <div className="switch__question">
            <div className="flag_question">
            <div>which country does this flag belong to?</div></div>
            </div>

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
        <div className="button-switch">
        <button 
            style={{display:'none'}} 
            className="button_next"
            onClick={handleNextChoise}
        >Next</button>
        </div>
    </div> : "reeur"}  </>
        
    )
}

export default SwitchNext
