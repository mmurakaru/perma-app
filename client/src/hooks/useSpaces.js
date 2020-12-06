import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function useSpaces() {
    const history = useHistory()
    const [submitDisabled, setSubmitDisabled] = useState(true)
    const [spaceTitle, setSpaceTitle] = useState('')
    const [spaces, setSpaces] = useState([])
    const [spacePlants, setSpacePlants] = useState([])
    const [space, setSpace] = useState({ id: null, name: '', plants: [] })

    return {
        submitDisabled,
        submitHandler,
        updateTitle,
        spaces,
        spacePlants,
        setSpacePlants,
        space,
        setSpace,
    }

    function submitHandler(event) {
        event.preventDefault()
        setSpaces([spaceTitle, ...spaces])
        setSubmitDisabled(true)
        history.push('/spaceOverview')
    }

    function updateTitle(title) {
        setSpaceTitle(title.split())
        setSubmitDisabled(false)
    }
}
