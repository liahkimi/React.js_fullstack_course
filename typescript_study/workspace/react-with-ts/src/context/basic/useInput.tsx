import { useState } from "react"

const useInput = (initialValue:any) => {
    const [input, setInput] = useState(initialValue)

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    
    return [input, onChangeInput];
}

export default useInput;