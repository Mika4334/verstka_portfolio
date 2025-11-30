let a = document.getElementById("postTheme")
a.addEventListener('input', letterCounter)

function letterCounter() {
    let counter = a.value.length
    let counterPlaceholder = document.getElementById("postThemeCounterPlaceholder")
    counterPlaceholder.innerText = `${counter}/300`
    if (counter >= 288) {
        counterPlaceholder.classList.add('text-red-500');
    } else {
        counterPlaceholder.classList.remove('text-red-500');
    }
}




window.addEventListener("DOMContentLoaded", fetchAllPosts)

async function fetchAllPosts() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })

    let data = await res.json()

    data.forEach(post => {
        toHTML(post)
    });

}

async function toHTML({ userId, id, title, body }) {
    document.getElementById("list").insertAdjacentHTML("beforeend", `
    <li class="commentItem" id="commentItem${id}" >
    <div class="likes">
        <svg onclick="changeRate(1, ${id})" id="rateUp${id}" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
            viewBox="0 0 20 20">
            <path
                d="M10 19a3.966 3.966 0 0 1-3.96-3.962V10.98H2.838a1.73 1.73 0 0 1-1.605-1.073 1.73 1.73 0 0 1 .377-1.895L9.364.254a.925.925 0 0 1 1.272 0l7.754 7.759c.498.499.646 1.242.376 1.894s-.9 1.073-1.605 1.073h-3.202v4.058A3.965 3.965 0 0 1 9.999 19zM2.989 9.179H7.84v5.731c0 1.13.81 2.163 1.934 2.278a2.163 2.163 0 0 0 2.386-2.15V9.179h4.851L10 2.163z" />
        </svg>
        <p><span>10</span>k</p>
        <svg onclick="changeRate(-1, ${id})" id="rateDown${id}" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
            viewBox="0 0 20 20">
            <path
                d="M10 1a3.966 3.966 0 0 1 3.96 3.962V9.02h3.202c.706 0 1.335.42 1.605 1.073.27.652.122 1.396-.377 1.895l-7.754 7.759a.925.925 0 0 1-1.272 0l-7.754-7.76a1.73 1.73 0 0 1-.376-1.894c.27-.652.9-1.073 1.605-1.073h3.202V4.962A3.965 3.965 0 0 1 10 1m7.01 9.82h-4.85V5.09c0-1.13-.81-2.163-1.934-2.278a2.163 2.163 0 0 0-2.386 2.15v5.859H2.989l7.01 7.016z" />
        </svg>
    </div>
    <div id="post${id}" class="post">
        <p>Posted by User: ${userId} </p>
        <p id="titleText${id}"> ${title} </p>
        <p id="comment${id}">Comment #${id} :</p>
        <p id="commentText${id}"> ${body} </p>
        <div id="buttonsParent${id}">
        <button class="baseBtn" id="editPost${id}" onclick="handleClickEdit(${id})">Edit</button>
        <button class="baseBtn" id="deleteButton${id}" onclick="deletePost(${id})">Delete</button>
        </div>
    </div>
</li>`)
}

function changeRate(rate, id) {
    let rateUp = document.getElementById(`rateUp${id}`)
    let rateDown = document.getElementById(`rateDown${id}`)

    if (rate > 0) {
        rateUp.classList.toggle('fill-orange-600')
        rateDown.classList.remove('fill-orange-600')
    } else if (rate < 0) {
        rateDown.classList.toggle('fill-orange-600')
        rateUp.classList.remove('fill-orange-600')
    }
}


function handleClickEdit(id) {
    let buttonsParent = document.getElementById(`buttonsParent${id}`)
    let postParent = document.getElementById(`post${id}`)
    let titleText = document.getElementById(`titleText${id}`)
    let commentText = document.getElementById(`commentText${id}`)
    let editButton = document.getElementById(`editPost${id}`)
    let newComment = document.createElement("textarea")
    let newTittle = document.createElement("input")
    let saveButton = document.createElement("button")
    let deleteButton = document.getElementById(`deleteButton${id}`)

    let oldCommentText = commentText.innerText
    let oldTitleText = titleText.innerText

    newComment.value = oldCommentText
    newTittle.value = oldTitleText
    newComment.id = `newComment${id}`
    newTittle.id = `newTitle${id}`

    saveButton.innerText = "Save"
    saveButton.addEventListener("click", () => savePost(id), { once: true })
    // saveButton.addEventListener("click", () => savePost(id))
    saveButton.id = `saveButton${id}`
    saveButton.classList.add('baseBtn');

    postParent.insertBefore(newTittle, titleText);
    postParent.insertBefore(newComment, commentText);
    buttonsParent.insertBefore(saveButton, deleteButton)

    titleText.hidden = true
    commentText.hidden = true
    // titleText.classList.add('hidden');
    // commentText.classList.add('hidden');

    editButton.remove()
}

async function savePost(id) {
    let postParent = document.getElementById(`post${id}`)
    let buttonsParent = document.getElementById(`buttonsParent${id}`)
    let saveButton = document.getElementById(`saveButton${id}`)
    let titleText = document.getElementById(`titleText${id}`)
    let commentText = document.getElementById(`commentText${id}`)
    let editButton = document.createElement('button')
    let newComment = document.getElementById(`newComment${id}`)
    let newTitle = document.getElementById(`newTitle${id}`)
    let deleteButton = document.getElementById(`deleteButton${id}`)


    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            tittle: newComment.value,
            body: newTitle.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await res.json()

    if (data.id === id) {

        titleText.innerText = newTitle.value
        commentText.innerText = newComment.value

        newComment.remove()
        newTitle.remove()

        saveButton.remove()
        editButton.id = `editPost${id}`
        editButton.innerText = "Edit"
        editButton.addEventListener("click", () => handleClickEdit(id), { once: true })
        editButton.classList.add('baseBtn');

        titleText.hidden = false
        commentText.hidden = false
        // postParent.insertBefore(editButton, deleteButton)
        buttonsParent.insertBefore(editButton, deleteButton)
    }

}

async function deletePost(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    },)

    let data = await res.json()

    if (data) {
        document.getElementById(`commentItem${id}`).remove()
    }
}

async function createPost() {
    let titleText = document.getElementById(`postTheme`)
    let commentText = document.getElementById(`postComment`)

    if (titleText.value === "" || commentText.value === "") return

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
            userId: 404,
            title: titleText.value,
            body: commentText.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await res.json()
    toHTML(data)

}


