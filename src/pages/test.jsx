import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Test = () => {
  const [prueba, setPrueba] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/user`)
        setPrueba(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        {prueba ? <div>{prueba.firstName}</div> : <div>Loading...</div>}
        {console.log(prueba)}
      </div>
    </div>
  )
}

export default Test
