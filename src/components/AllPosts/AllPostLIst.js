import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/allPostService";
import { AllPosts } from "./AllPosts";
import "./AllPosts.css"





export const AllPostsList = () => {

    const [allPosts, setAllPosts] = useState([])


    useEffect(() => {
        getAllPosts().then(postsArray => {
            setAllPosts(postsArray)
            console.log("Posts set!")
        })
    }, [])



        return (
            <div className="allPosts">
                {allPosts.map(allPostObj => {
                    return (
                        <AllPosts posts={allPostObj} />
                    )
                })}



            </div>
        )



}









