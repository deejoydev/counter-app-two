import './counter.module.css'


const Buttons = ({onclick, title}) => {
  return ( 
    <button
      onClick={onclick} 
    >{title}</button>
   );
}
 
export default Buttons;