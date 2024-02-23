import React, { useEffect, useState } from 'react'
import { Ulayout } from './layout'
import axios from 'axios'

export default function Notification() {

  const [apiData, setApiData] = useState([])
//   useEffect(() => {
     
//     const apiCall = async() => {
//        const res = await axios.get("http://localhost:3000/api/get-accepted-darta")
//        setApiData(res.data.message)
//        console.log(res, "note")
//     }
//     apiCall()

//  }, [])
  return (
    <Ulayout>
      <div className="flex flex-col w-[1000px]  pb-10 pt-4 items-center gap-5">
        {JSON.stringify(apiData)}
      </div>
    </Ulayout>
  )
}
