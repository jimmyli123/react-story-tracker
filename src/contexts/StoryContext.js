import React, {useContext, useState} from "react"
import { v4 as uuidV4} from 'uuid'
import useLocalStorage from "../hooks/useLocalStorage"

const StoryContext = React.createContext()

export function useStoryContext() {
    return useContext(StoryContext)
}

export const StoryProvider = ({ children }) => {
    const [stories, setStories] = useLocalStorage('stories', [])
    const [chapters, setChapters] = useLocalStorage('chapters', [])

    

}