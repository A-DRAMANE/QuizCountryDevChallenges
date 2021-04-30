
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

export let ObjetQuestion = [] ;