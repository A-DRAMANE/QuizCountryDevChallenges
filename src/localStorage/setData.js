
export function setUseResult(data) {
    localStorage.setItem('UseResult', JSON.stringify(data))
}

export function setQuestionData(data) {
    localStorage.setItem('questions', JSON.stringify(data))
}

export function setReady() {
    localStorage.setItem('Ready', "1")
}

export function setObjetQuestion(data) {
    localStorage.setItem('ObjetQuestion', JSON.stringify(data))
}