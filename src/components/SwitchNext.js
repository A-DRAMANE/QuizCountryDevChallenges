import React,{useEffect, useState} from 'react'
import {getReady} from '../localStorage/getData'
import {getObjetQuestion} from '../localStorage/getData'
import {getRandom0_3} from './CallData'
import { useHistory } from 'react-router';
import '../css/SwitchNext.css'

function useForceUpdate(){
    const [value, setValue] = useState(0); 
    return () => setValue(value => value + 1);
}


function SwitchNext({handleChoix,handleNext,objet,cible}) {
    const handleNextChoise = () =>{
        handleNext();
        //forceUpdate();
    }
    //const forceUpdate = useForceUpdate();
    const [bool, setBool] = useState(true)
    


    return (
        <>{
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
            </div> : "reeur"
        } </>
        
    )
}

export default SwitchNext
