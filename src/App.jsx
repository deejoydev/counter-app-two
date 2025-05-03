import { useState } from 'react'
import styles from './App.module.css'
import Buttons from './components/buttons/counter'

function App() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    if (count < 10) {
      setCount(count+1)
    }
  };
  
  function decreaseCount() {
    if(count > 0){
   
    setCount(count-1)
    }
  };


  return (
    <div className={styles.body}>
      <div className={styles.page}>
       <div className={styles.countdisplay} >{count}</div>
           <div className={styles.btncontainer}>
               <Buttons title={"Increase"} 
                   onclick = {increaseCount} />

               <Buttons 
               title={"Decrease"} 
               onclick = {decreaseCount} />
              </div>
      </div>
    </div>

  
  )
}

export default App
