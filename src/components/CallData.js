
    //function generate random data for select scale country
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);}

    //function generate random data for select country in scale of 0 to 3
export function getRandom0_3(max) {
    return Math.floor(Math.random() * max);}


    //function return array of 40 country for the test
export function getData(get,randomNumb){
    const scale = randomNumb+40;
    let data = [];

    if (scale <= get.length) {
        for(let i = randomNumb; i<scale;i++){
            data.push(get[i])
        }
    }else{
        for(let i = randomNumb-40; i<randomNumb;i++){
            data.push(get[i])
        }
    }
    return data;
}

    //function for return array of four country
export function TabFourQuestion(data,i){
    if (!data) {
        return "erreur";
    }else{
        let TabQuestion = [];
        let last= i+4
        for (let current = i; current < last; current++) {
            let element = data[current];
            TabQuestion.push(element);
        }
        return TabQuestion;
    }
}

export function RepareQuestionFormAndAll(ObjetQuestion, getData,setReady,getResponse,setQuestionData,getQuestionData,setObjetQuestion,setUseResult,button,setMyCurrent){
    let step4 = 0;
    setMyCurrent(1)
    setReady();
    //set array of 40 country in localStorage
    let dataPays = [];
    dataPays = getData(getResponse(),getRandomInt(250))
    setQuestionData(dataPays);

        for (let i = 0; i<10;i++) {
            ObjetQuestion.push(TabFourQuestion(getQuestionData(),step4))
            step4 = step4 + 4
        }
        setObjetQuestion(ObjetQuestion)
        setUseResult(0);

    //change button color and Start
    button.innerHTML = "START"
    button.style.boxShadow = "0 0 2em rgb(1, 77, 100)"
    button.style.color = "green"
}

//fonction verifie si un nombre est premier ou non
export function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }

export let ObjetQuestion = [] ;