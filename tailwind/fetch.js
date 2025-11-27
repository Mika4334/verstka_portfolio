window.addEventListener("DOMContentLoaded", fetchAllPosts)


async function fetchAllPosts() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1', {
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
        <li id="post${id}">
            <p>User: ${userId} </p>
            <p>Title: </p>
            <p id="titleText${id}"> ${title} </p>
            <p id="comment${id}">Comment #${id} :</p>
            <p id="commentText${id}"> ${body} </p>
            <button id ="editPost${id}" onclick="handleClickEdit(${id})" >Edit</button>
            <button id="deleteButton${id}" onclick="deletePost(${id})" >Delete</button>
        </li>
        `)
}


function handleClickEdit(id) {
    let postParent = document.getElementById(`post${id}`)
    let titleText = document.getElementById(`titleText${id}`)
    let commentText = document.getElementById(`commentText${id}`)
    let editButton = document.getElementById(`editPost${id}`)
    let newComment = document.createElement("input")
    let newTittle = document.createElement("input")
    let saveButton = document.createElement("button")
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

    postParent.insertBefore(newTittle, titleText);
    postParent.insertBefore(newComment, commentText);
    postParent.insertBefore(saveButton, commentText)

    titleText.hidden = true
    commentText.hidden = true
    editButton.remove()

}

async function savePost(id) {
    let postParent = document.getElementById(`post${id}`)
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

        titleText.hidden = false
        commentText.hidden = false
        postParent.insertBefore(editButton, deleteButton)
    }

}

async function deletePost(id) {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    },)

    let data = await res.json()

    if (data) {
        document.getElementById(`post${id}`).remove()
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