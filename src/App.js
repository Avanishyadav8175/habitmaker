import React, { useState } from 'react'
import AddHabit from './component/AddHabit'
import HabitDisplay from './component/HabitDisplay';
import Parent from './component/Parent';

export default function App() {
  const [data,setData] = useState([{}]);
  function getData(res){
    setData([{...data,...res}])
  }
  return (
   <Parent>
      <AddHabit getData={getData} />
      <HabitDisplay data={data}/>
   </Parent>
  )
}
