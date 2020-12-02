import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function useSpaces() {
    const history = useHistory()
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [spaceTitle, setSpaceTitle] = useState('')
    const [spaceTitles, setSpaceTitles] = useState([])
    const [spaceDetails, setSpaceDetails] = useState([])

    return {
        submitDisabled,
        submitHandler,
        updateTitle,
        spaceTitles,
        spaceDetails,
        handleClick,
    }

    function submitHandler(event) {
        event.preventDefault()
        setSpaceTitles([spaceTitle, ...spaceTitles])
        setSubmitDisabled(true)
        history.push('/spaceCreator')
    }

    function updateTitle(title) {
        setSpaceTitle(title.split())
        setSubmitDisabled(false)
    }

    function handleClick(spaceIndex) {
        const space = spaceTitles.find((_, index) => index === spaceIndex)
        setSpaceDetails(space)
        history.push('/spaceDetails')
    }
}
