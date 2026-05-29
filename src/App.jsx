import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((data) => setData(data))
  }, [])
  return (
    <div>
      {data.map((val)=>{
        return (
          <div style={{
            border: "1px solid black",
            margin: "20px"
          }}>
            <p>name: {val.name}</p>
            <p>email: {val.email}</p>          
          </div>
        )
      })}
    </div>
  )
}

export default App
