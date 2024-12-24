import { useEffect, useState } from "react"

export default function Loader() {
  const [text , setText] = useState('')


  useEffect ( () => {
    setTimeout( () =>{
      setText(
        'i waited 3 second to be loaded'
      ), 2000})
  },[])
  return (
    <div>Loader</div>
  )
}


