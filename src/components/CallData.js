export function QuestionsData(dataPays){
    return new Promise((resolve, reject) =>{

        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(response => {
            resolve(response)
        })
        .catch(err => {
            console.error(err);
            reject("erreur chargement API")
        });
    })
    .then((response) => {
        console.log("a",response)
        dataPays = getData(response,getRandomInt(250))
        console.log(dataPays);
    
    })
    .catch((response) => console.log("ERREUR",response))
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);}

export function getData(get,randomNumb){
    const scale = randomNumb+40;
    let data = [];

    if (scale <= get.length) {
        for(let i = randomNumb; i<scale;i++){
            data.push(get[i])
            console.log("++",get[i]);
        }
    }else{
        for(let i = randomNumb-40; i<randomNumb;i++){
            data.push(get[i])
            console.log("--",get[i]);
        }
    }
    return data;
}