

import { useEffect, useState } from "react"
import "./AllPosts.css"
import { useParams } from "react-router-dom"
import { getAllPostsId, likePost } from "../../services/allPostService"


export const PostDetails = ({currentUser}) => {
    const [details, setDetails] = useState({})
    const [liked, setLiked] = useState(false)
    const [topic, setTopic] = useState({})
    const { detailsId } = useParams()

    //  topic = allTopics.find((topic) => topic.id === post.topicId)
    // console.log(topic)

    // If userId === current userId then do not display like button 

    useEffect(() => {
        getAllPostsId(detailsId).then((data) => {
            const detailsObj = data[0]
            setDetails(detailsObj)
            
            
        })
    }, [detailsId])
    console.log(details)
    console.log(currentUser)
    
    const handleLikePost = () => {
        const updatedPost = {
            title: details.title,
            body: details.body,
            date: details.date,
            author: details.author,
            numberOfLikes: details.numberOfLikes+1,
            liked: true,
            userId: details.userId,
            topicId: details.topicId

        }
        likePost(updatedPost, details.id)

    }

    return (
        <div className="postTitles">
            <div>Title:</div>
            <div className="postInfo">{details.title}</div>
            <div>
                <div>Date:</div>
                <div className="postInfo">{details.date}</div>
            </div>
            <div>
                <div>Author:</div>
                <div className="postInfo">{details.author}</div>
            </div>
            <div>
                <div>Body:</div>
                <div className="postInfo">{details.body}</div>
            </div>
            <div>
                <div>Likes:</div>
                <div className="postInfo">{details.numberOfLikes}</div>
            </div>
            <div>
                {details.userId !== currentUser.id ? 
                    
                    <button className="btn-post-details"
                        onClick={ handleLikePost }>Like Post</button>
                    : null}
            </div>
        </div>
    )

}
