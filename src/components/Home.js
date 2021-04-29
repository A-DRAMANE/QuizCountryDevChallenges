import React,{ useEffect, useState} from 'react'
import '../css/Home.css'
import images from '../images/../images/undraw_adventure_4hum 1.svg'
import { getData, getRandomInt, TabFourQuestion } from './CallData'
import { setQuestionData, setUseValue } from '../localStorage/setData'
import { getQuestionData } from '../localStorage/getData'



function Home() {
    //global variable
    const [questions, setQuestions] = useState([])


    let bool = false;

    useEffect(() => {
        let button = document.querySelector('.button')
        if (!getQuestionData()) {
            try {
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then((response) => {

                    //set array of 40 country in localStoragze
                    let dataPays = [];
                    dataPays = getData(response,getRandomInt(250))
                    console.log(dataPays);
                    setQuestionData(dataPays);

                    //change button color
                    button.innerHTML = "START"
                    button.style.boxShadow = "0 0 2em rgb(1, 77, 100)"
                    button.style.color = "green"
                    
                    console.log(getQuestionData());
                    console.log("voir",TabFourQuestion(getQuestionData(),5));
                })
                .catch((response) => console.log("ERREUR",response))
            } catch (e) {
                console.error("probleme lors du chargement",e);
            }
        }else {
            //change button color
            button.innerHTML = "START"
            button.style.boxShadow = "0 0 2em rgb(1, 77, 100)"
            button.style.color = "green"
        };
}, [])

    //function show ich question


    
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
                    <br/> by Fils_du_Faso.{bool}
                </h2>
                <button className="button">load questions...</button>
            </div>
        </div>
    )
}

export default Home
