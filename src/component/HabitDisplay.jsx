import React from 'react'

export default function HabitDisplay({data}) {
    let list=[];
    console.log(data);
    if(data.length!==0){
      list=data.map((value,indx)=>{
         <div>
            <span>{value.where}</span>
            <span>{value.what}</span>
            <span>{value.why}</span>
            <span>{value.when}</span>
            <button>delete</button>

         </div>
        })
    }
  return (
    <div>
      {data.length===0?<h4>you have no task</h4>:list}
    </div>
  )
}
