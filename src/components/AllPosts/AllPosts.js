
import { Link } from "react-router-dom"
import "./AllPosts.css"


export const AllPosts = ({ post, allTopics }) => {
    

    const topic = allTopics.find((topic) => topic.id === post.topicId)
    console.log(topic)

    return (
        
        <div className="postTitles">
            <div>Title:</div>
            <Link to={`/postDetails/${post.id}`}><div className="postInfo">{post.title}</div></Link>
            <div>
                <div>Topic:</div>
                <div className="postInfo">{topic ? topic.name : "Unknown Topic"}</div>
            </div>
            <div>
                <div>Number of Likes:</div>
                <div className="postInfo">{post.numberOfLikes}</div>
            </div>
        </div>
    )

}
















