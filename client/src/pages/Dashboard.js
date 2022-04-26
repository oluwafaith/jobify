import {useEffect} from 'react'

const Dashboard = () => {
  const fetchedData = async()=>{
console.log("????");
    try {
      console.log(">>>>>");
      const response = await fetch('/api/v1')
     console.log("gvcfgxfh");
      const data = await response.json()
      console.log("kmklkk");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(()=>{
    fetchedData()
  },[])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard