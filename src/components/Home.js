import React,{ useEffect, useState} from 'react'
import '../css/Home.css'
import images from '../images/undraw_adventure_4hum 1.svg'
import { getData, ObjetQuestion, RepareQuestionFormAndAll } from './CallData'
import { setQuestionData, setReady, setObjetQuestion, setUseResult, setResponse, setMyCurrent } from '../localStorage/setData'
import { getQuestionData, getResponse } from '../localStorage/getData'
import { useHistory } from 'react-router';


function Home() {
    //global variable
    let history = useHistory();

    useEffect(() => {
        let button = document.querySelector('.button')
        if (!getResponse()) {
            try {
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then((response) => {
                    //save the api result in localStorage
                    setResponse(response);

                    RepareQuestionFormAndAll(ObjetQuestion, getData,setReady,getResponse,setQuestionData,getQuestionData,setObjetQuestion,setUseResult,button,setMyCurrent)
                })
                .catch((response) => console.log("ERREUR",response))
            } catch (e) {
                console.error("probleme lors du chargement",e);
            }
        }else {
            RepareQuestionFormAndAll(ObjetQuestion, getData,setReady,getResponse,setQuestionData,getQuestionData,setObjetQuestion,setUseResult,button,setMyCurrent)
        };
}, [])

    const handleStart = (e) =>{
        e.preventDefault();
        history.push("/question");
    }


    
    return (
        <>
        <h1 className="title">COUNTRY QUIZ</h1>
        <div className="global-contain">
            <div className="home_home">
                <h3>HOME</h3>
                <img
                    className="top-picture"
                    src={images}
                    alt="adventure"
                />
            </div>

            <div className="home">
                <h2>Country QUIZ small app to test your general knowledge of countries around the world.
                    <br/> Play, have fun, the goal is to be happy,
                    <br/> by Fils_du_Faso.
                </h2>
                <button className="button" onClick={handleStart}>load questions...</button>
            </div>
        </div>
        </>
    )
}

export default Home
