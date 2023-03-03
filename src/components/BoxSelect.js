import { useCallback } from "react"


export function BoxSelect({value, onSelection}) {
    return <div key={value} onClick={()=>(onSelection(value))}>
        {value}
    </div>
}
