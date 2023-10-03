
import "./AllPosts.css"


export const AllPosts = ({posts}) => {
    return (
        <div className="postTitles">
            <div>Title:</div>
                <div className="postInfo">{posts.title}</div>
                <div>
            </div>
            <div>
                <div>Topic:</div>
                <div className="postInfo">{posts.topicId}</div>
            </div>
            <div>
                <div>Number of Likes:</div>
                <div className="postInfo">{posts.numberOfLikes}</div>
            </div>
        </div>
    )

}
















