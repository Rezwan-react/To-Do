import React from 'react'
import './Home.css'
import { RiAddLargeFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

function Home() {
  return (
    <>
        <div className="todo">
            <div className="container">
                <div className="todo_row">
                    <div className="todo_col">
                        <div className="todo_head">
                            <h1>To Do List</h1>
                        </div>
                        <div className="todo_input">
                            <input type="text" placeholder='Add new task' style={{ boxShadow: '3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255, 255, 255, 0.4)', }}  />
                            <div className="todo_button">
                                <button><RiAddLargeFill /></button>
                            </div>
                        </div>
                        <div className="todo_text " >
                            <div className="todo_list shadow-custom">
                            <h2>Rezwan</h2>
                            </div>
                            <div className="text_button">
                                <button className='edit'><FaRegEdit /></button>
                                <button className='delete'><MdOutlineDelete /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home