



export const AllTopicsDropdown = ({ allTopics, chosenTopic, setChosenTopic }) => {


    const handleChange = (event) => {
        const selectedTopicId = event.target.value
        const selectedTopic = allTopics.find(topic => topic.id === parseInt(selectedTopicId))
        setChosenTopic(selectedTopic)
    }

    return (
        <div>
            <div>
            <select onChange={handleChange} value={chosenTopic ? chosenTopic.id : "0"}>
                <option value="0">Select a Topic</option>
                {allTopics.map(topic => {
                    return(<option key={topic.id} value={topic.id}>{topic.name}</option>)
                })}
                </select>
            </div>
        </div>
    )
}


export const TitleSearchBar = ({ setSearchTerm, searchTerm }) => {

    
    return ( 
        <div>
                <div className="search-term">
                    <input
                    type="text"
                    placeholder="Search Posts"
                    className="search-posts"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    ></input>
                </div>
            </div>
    )
}








