
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