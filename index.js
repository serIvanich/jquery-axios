const resultBlock = document.querySelector('#result')
const pageNumberEl = document.querySelector('#page-number')
const clickMeButton = document.querySelector('#click-me')
const getTasksButton = document.querySelector('#get-tasks')

// createTask('learn CSS')
// deleteTasks("2b5c463a-e917-47ee-baac-2e55eef0ea02")

updateTask("ea4c16f4-a3b6-4515-adfc-42ab883522e3", 'learn HTML')
clickMeButton.addEventListener('click', () => {

    const promise = getImages(pageNumberEl.value)
    promise.then(onImagesReceived)
})

getTasksButton.addEventListener('click', () => {

    const promise = getTasks()
    promise.then(onTasksReceived)
})

function onImagesReceived(data) {

    data.forEach(el => {
        const img = document.createElement('img')
        img.src = el.thumbnail
        document.querySelector('#result').appendChild(img)
    })
}

function onTasksReceived(tasks) {
    const result = document.querySelector('#tasks-result')
    result.innerHTML = ''
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML = task.title
        li.dataset.id = task.id

        result.appendChild(li)
    })
}


