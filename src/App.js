import React,{useState} from 'react';
import './style.css';
import Modal from './Modal';
export default function App() {
  const [isopen,setIsopen]=useState(false)
  const openModal=()=>{
setIsopen(true)
  }
  return (
    <div className="continer">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={openModal}>open Modal</button>
      <Modal open={isopen} close={()=>setIsopen(false)} >
        <h1>Modal Header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos voluptas quaerat, vel repellendus accusantium ducimus officia nulla dolore corporis ipsa consequatur explicabo, quidem animi, necessitatibus veritatis iure consequuntur facilis.
        Dignissimos, quam non. Id iusto magnam veniam, facere officia temporibus perspiciatis? Maxime, recusandae? Suscipit, numquam in natus dicta necessitatibus, eum rerum accusamus, nihil ipsam dolorem labore dolor? Sequi, aspernatur natus!
        Ea, dignissimos harum tenetur omnis consectetur exercitationem similique veniam quibusdam voluptatum earum. Tempore enim, voluptates autem aliquid quasi cupiditate ex ullam eveniet minus! Quaerat in explicabo nulla, earum ullam ea?</p>
      </Modal>
    </div>
  );
}
