


export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts`
    ).then((res) => res.json())
}


export const getAllTopics = () => {
    return fetch(`http://localhost:8088/topics`
    ).then((res) => res.json())
}



export const getAllPostsId = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=topic`
    ).then((res) => res.json())
}


export const likePost = (details, id) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    }).then((res) => res.json())
}



