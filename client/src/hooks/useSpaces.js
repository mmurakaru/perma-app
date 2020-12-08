import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export default function useSpaces() {
    const history = useHistory()
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [spaceTitle, setSpaceTitle] = useState('')
    const [spaces, setSpaces] = useState([])
    const [currentSpace, setCurrentSpace] = useState()

    return {
        submitDisabled,
        submitHandler,
        updateTitle,
        spaces,
        setSpaces,
        currentSpace,
        setCurrentSpace,
    }
    //onsubmit
    function submitHandler(event) {
        event.preventDefault()
        setSpaces([
            { id: uuidv4(), spaceTitle: spaceTitle, plants: [] },
            ...spaces,
        ])
        setSubmitDisabled(true)
        history.goBack()
    }
    //onchange
    function updateTitle(title) {
        setSpaceTitle(title.split())
        setSubmitDisabled(false)
    }
}
