import React,{useEffect} from 'react'
import '../css/Home.css'
import images from '../images/../images/undraw_adventure_4hum 1.svg'
import { getData, getRandomInt, QuestionsData } from './CallData'

function Home() {
    let dataPays = [];
    const promiseData = QuestionsData(dataPays);

    
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
                    <br/> by Fils_du_Faso.{dataPays?.length}
                </h2>
                <button>COMMENCEZ</button>
            </div>
        </div>
    )
}

export default Home
