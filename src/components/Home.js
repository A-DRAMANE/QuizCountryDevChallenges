import React,{ useEffect, useState} from 'react'
import '../css/Home.css'
import images from '../images/undraw_adventure_4hum 1.svg'
import { getData, getRandomInt, TabFourQuestion, ObjetQuestion } from './CallData'
import { setQuestionData,setReady, setObjetQuestion,setUseResult } from '../localStorage/setData'
import { getQuestionData, getReady } from '../localStorage/getData'
import { useHistory } from 'react-router';


function Home() {
    //global variable
    let history = useHistory();

    console.log("localStorage",localStorage);
    useEffect(() => {
        let button = document.querySelector('.button')
        if (!getQuestionData()) {
            try {
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then((response) => {
                    let step4 = 0;
                    setReady();
                    //set array of 40 country in localStorage
                    let dataPays = [];
                    dataPays = getData(response,getRandomInt(250))
                    setQuestionData(dataPays);
                    console.log("1",ObjetQuestion);

                        for (let i = 0; i<10;i++) {
                            ObjetQuestion.push(TabFourQuestion(getQuestionData(),step4))
                            step4 = step4 + 4
                        }
                        setObjetQuestion(ObjetQuestion)
                        setUseResult(0);
                        console.log("1",ObjetQuestion);

                    //change button color and Start
                    button.innerHTML = "START"
                    button.style.boxShadow = "0 0 2em rgb(1, 77, 100)"
                    button.style.color = "green"
                })
                .catch((response) => console.log("ERREUR",response))
            } catch (e) {
                console.error("probleme lors du chargement",e);
            }
        }else {
            //change button color and Start
            button.innerHTML = "START"
            button.style.boxShadow = "0 0 2em rgb(1, 77, 100)"
            button.style.color = "green"
        };
}, [])

    const handleStart = (e) =>{
        e.preventDefault();
        console.log('work');
        history.push("/question");
    }


    
    return (
        <div className="global-contain">
            <h1 className="title">COUNTRY QUIZ</h1>
            <img
                className="top-picture"
                src={images}
                alt="adventure"
            />

            <div className="home">
                <h2>Country QUIZ small app to test your general knowledge of countries around the world.
                    <br/> Play, have fun, the goal is to be happy,
                    <br/> by Fils_du_Faso.
                </h2>
                <button className="button" onClick={handleStart}>load questions...</button>
            </div>
        </div>
    )
}

export default Home
