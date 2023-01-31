import React, {useContext, useState} from "react"
import { v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const StoryContext = React.createContext()

export function useStory() {
    return useContext(StoryContext)
}

export const StoryProvider = ({ children }) => {
    const [stories, setStories] = useLocalStorage('stories', [])
    const [chapters, setChapters] = useLocalStorage('chapters', "")

    function getStoryChapters (storyId) {
        return chapters.filter(chap => chap.storyId === storyId)
    }
    function addStory({ name, category }) {
        setStories(prevStories => {
            if (prevStories.find(story => story.name === name)) {
                return prevStories
            }
            return [...prevStories, { id: uuidV4(), name, category }]
        })
    }
    function updateChapter ({ newChapter, storyId }) {
        setChapters(prevChapter => {
            if (chapters.storyId !== storyId) return chapters
            return { ...chapters, storyId}
        })
    }
    function deleteStory({ id }) {
        setChapters(prevChapters => {
            return prevChapters.map(chapter => {
                if (chapter.storyId !== id) return chapter
                else {
                    let index = prevChapters.indexOf(chapter)
                    prevChapters.splice(index,1)
                }
            })
        })
    }
    function deleteChapter( { id }) {
        setChapters(prevchapters => {
            return prevchapters.filter(chapter => chapter.storyId !== id)
        })
    }
    return (
        <StoryContext.Provider value= {{
            stories,
            chapters,
            getStoryChapters,
            addStory,
            updateChapter,
            deleteStory,
            deleteChapter
        }}> {children} </StoryContext.Provider>
    )
}