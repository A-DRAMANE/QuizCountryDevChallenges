import React, { useState,useEffect } from 'react'
import images from '../images/../images/undraw_adventure_4hum 1.svg'
import SwitchNext from './SwitchNext'
import { getRandom0_3 } from './CallData'
import { setUseResult, setMyCurrent } from '../localStorage/setData'
import {  getObjetQuestion, getUseValue, getMyCurrent } from '../localStorage/getData'
import { useHistory } from 'react-router';
import '../css/Question.css'


function Question() {
    
    let history = useHistory()
    let ba = false;
    let pasDejaClique = false
    const [currentQ, setCurrentQ] = useState(1);
    let objet;
    let cible;

        if (ba === false) {
            objet = getObjetQuestion()[currentQ-1];
            cible = objet[getRandom0_3(4)]
            ba = true;
        }


        useEffect(() => {
            objet = getObjetQuestion()[currentQ-1];
            cible = objet[getRandom0_3(4)];
            pasDejaClique = false;
        }, [currentQ])

    const handleNext = () =>{
        if (currentQ === 10) {
            setUseResult(getUseValue());
            history.push("/result");
        }else{
            setCurrentQ(c => c + 1);
            setMyCurrent(getMyCurrent() + 1)
            let button_next = document.querySelector('.button_next');
            button_next.style.display = 'none';}
        
    }

    const handleChoix = (targetChoix,response) =>{
        
        if (pasDejaClique === false) {
            if(targetChoix === response){
                handleBonChoix(true,targetChoix);
                setUseResult(getUseValue()+1)
                pasDejaClique = true
            }else{
                handleBonChoix(false,targetChoix);
                handleBonChoix(true,response);
                pasDejaClique = true
            }
        }
    }

    const handleBonChoix = (a,id) => {
        if (a) {
            let button_next = document.querySelector('.button_next');
            let bonChoix = document.getElementById(id);
            button_next.style.display = 'block';
            bonChoix.style.background = '#60BF88';
            bonChoix.style.color = '#FFFFFF';
            if (currentQ === 10 ) {
                button_next.style.color = '#b0ff01';
                button_next.style.background = '#000';
                button_next.innerHTML = 'Result'
            }
        } else {
            let button_next = document.querySelector('.button_next')
            let bonChoix = document.getElementById(id)
            button_next.style.display = 'block'
            bonChoix.style.background = '#EA8282'
            bonChoix.style.color = '#FFFFFF'; 
            if (currentQ === 10 ) {
                button_next.style.color = '#b0ff01';
                button_next.style.background = '#000';
                button_next.innerHTML = 'Result'
            }
        }
        
    }

    return (
        <>
        <h1 className="title">COUNTRY QUIZ</h1>
        <div className="global-contain">
            <div className="question">
                <h3>Question:  <span>{currentQ}</span>/ 10</h3>
                <img
                    className="top-picture"
                    src={images}
                    alt="adventure"
                />
            </div>

            <SwitchNext 
                handleNext={handleNext}
                handleChoix={handleChoix}
                currentQ={currentQ}
                objet={objet}
                cible={cible}
                currentQ={currentQ}
                />
            
        </div>
        </>
    )
}

export default Question
