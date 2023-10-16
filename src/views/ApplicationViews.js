

import { Outlet, Route, Routes } from "react-router-dom"
import { AllPostsList } from "../components/AllPosts/AllPostLIst"
import { NavBar } from "../components/nav/NavBar"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/AllPosts/PostDetails"

// import { AllPosts } from "../components/AllPosts/AllPosts"






export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localLearningUser = localStorage.getItem("learning_user")
        const learningUserObject = JSON.parse(localLearningUser)
        setCurrentUser(learningUserObject)
    }, [])

    return <>
        <Routes>
            <Route path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route path="/">
                    <Route index element={<AllPostsList />} />
                </Route>
                <Route path="/postDetails/:detailsId">
                    <Route index element={<PostDetails currentUser={currentUser} />} />
                </Route>

            </Route>
        </Routes>
    </>

}