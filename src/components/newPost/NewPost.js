

import { useEffect, useState } from "react"
import "./NewPost.css"
import { useNavigate } from "react-router-dom"


export const NewPostForm = () => {
    const [post, setPost] = useState({})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()
        console.log("Clicked!")


        // title: details.title,
        // body: details.body,
        // date: details.date,
        // author: details.author,
        // numberOfLikes: details.numberOfLikes+1,
        // liked: true,
        // userId: details.userId,
        // topicId: details.topicId

        //Topic as drop down 
        //Title as input
        //Body as input
        //Click for save button that adds new post to posts database 

        const editNewPost = {
            topic: post.topic,
            title: post.title,
            body: post.body
        }
    }


}






