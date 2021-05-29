
function getImages(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
    return promise.then((response) => response.data)
}

function getTasks() {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=23456&count=15`)
    return promise.then((response) => response.data)
}

function createTask(title) {
    const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 23456,
        title: title
    })
    return promise.then((response) => response.data)
}
function updateTask(id, title) {
    const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
        widgetId: 23456,
        taskId: id,
        title: title,

    })
    return promise.then((response) => response.data)
}
function deleteTasks(id) {
    const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=23456&taskId=${id}`)
    return promise.then((response) => response.data)
}

