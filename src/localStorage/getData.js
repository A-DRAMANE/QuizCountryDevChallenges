
export function getUseValue () {
    let result = localStorage.getItem('UseResult');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getQuestionData () {
    let result = localStorage.getItem('questions');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}

export function getReady() {
    let result = localStorage.getItem('Ready');
    if(result !== "undefined") {
        let status = JSON.parse(result);
        return status;
    }else return false;
}

export function getObjetQuestion () {
    let result = localStorage.getItem('ObjetQuestion');
    if(result !== "undefined") {
        let data = JSON.parse(result);
        return data;
    }else return false;
}