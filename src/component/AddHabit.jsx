import React, { useState } from 'react'
import styles from './AddHabit.module.css';
export default function AddHabit({getData}) {
    const [what,setWhat]=useState('');
    const [where,setWhere]=useState('');
    const [why,setWhy]=useState('');
    const [when,setWhen]=useState('');
    let data={what,where,why,when}
    function handleChange(e){
        let check= e.target.id;
        if(check==='what'){
            setWhat(e.target.value);
        }else if(check==='where'){
            setWhere(e.target.value);
        }else if(check==='why'){
            setWhy(e.target.value);
        }
        else{
            setWhen(e.target.value);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        getData(data);
    }
  return (
    <div className={styles.parent}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='What to do' value={what} id='what' onChange={handleChange} />
        <input type="text" placeholder='Where to do' value={where} id='where'onChange={handleChange}  />
        <input type="text" placeholder='Why to do' value={why} id='why' onChange={handleChange} />
        <input type="date"  id='when' onChange={handleChange}  />
        <button>save</button>
      </form>
    </div>
  )
}
