
export function setUseValue(data) {
    localStorage.setItem('UseResult', JSON.stringify(data))
}

export function setQuestionData(data) {
    localStorage.setItem('questions', JSON.stringify(data))
}