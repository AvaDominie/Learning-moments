import { useEffect, useState } from "react";
import { getAllPosts, getAllTopics } from "../../services/allPostService";
import { AllPosts } from "./AllPosts";
import "./AllPosts.css"
import { AllTopicsDropdown, TitleSearchBar } from "../AllPostFilterBar";






export const AllPostsList = () => {

    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [chosenTopic, setChosenTopic] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    


    useEffect(() => {
        getAllPosts().then(postsArray => {
            setAllPosts(postsArray)
            setFilteredPosts(postsArray)
            console.log("Posts set!")
        })
    }, [])

    useEffect(() => {
        getAllTopics().then(topicArray => {
            setAllTopics(topicArray)
            console.log("Topics set!")
        })
    }, [])


    //Trying to compare topic.id to post.topicId
    //If they match set filter topic to that topics name
    useEffect(() => {
        if (chosenTopic) {
            const filterPost = allPosts.filter(post => post.topicId === chosenTopic.id )
            setFilteredPosts(filterPost)   
        }
        else {
            setFilteredPosts(allPosts)
        }
    }, [chosenTopic, allPosts])


    const handleTopicChange = (topic) => {
        setChosenTopic(topic)
    }


    useEffect(() => { 
        const foundPosts = allPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredPosts(foundPosts)
        }, [allPosts, searchTerm])
    

    // useEffect(() => {
    //     if (filterTopics) {
    //         const filterPost = allPosts.filter( (post) => {
    //             const filteredTopic = allTopics.filter(
    //             (topic) => topic.id === post.topicId )
    //             // const topicName = topic.name
    //             setFilterTopics(filteredTopic)
    //         } )
            
    //     }
    // }, [filterTopics, allPosts, allTopics ])


        return (
            <div className="allPosts">
                <h2>Filter Out by Topic:</h2>

            <AllTopicsDropdown
                allTopics={allTopics}
                chosenTopic={chosenTopic}
                setChosenTopic={handleTopicChange}

            />
            <h2>Search Title</h2>
            <TitleSearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>

            {filteredPosts.map( post => {
                return (
                    
                        <AllPosts key={post.id} post={post} allTopics={allTopics} />
                    
                )
                })}


            </div>
        )



}



// return (
//     <div className="allPosts">
//         <h2>Filter Out by Topic:</h2>



//         {allPosts.map(allPostObj => {
//             return ( <>
                
//                 <AllPosts posts={allPostObj} />
//                 <AllPostBar posts={allPostObj} />
//                 </>
//             )
//         })}



//     </div>
// )



// }









