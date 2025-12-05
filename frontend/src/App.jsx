import React, { useEffect, useState, useRef } from 'react'
import editIcon from "./assets/images/edit.png";
import deleteIcon from "./assets/images/delete-user.png";
import axios from "axios"




const App = () => {
  //state variables which are  for showing tasmanager app
  const user_title = useRef()
  const user_desc = useRef()
  const user_wish_title = useRef()
  const user_wish_desc = useRef()


  const [appview, setappview] = useState(false);
  const [alltasks, setalltasks] = useState([]);
  const [edit_view, setedit_view] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:9000/alltasks").then((res) => {
      console.log(res.data.tasks);
      setalltasks(res.data.tasks);

    })
  }, [])

  function get_tasks() {
    axios.get("http://localhost:9000/alltasks").then((res) => {
      console.log(res.data.tasks);
      setalltasks(res.data.tasks);
    })
  }

  function Add_task(title, desc) {
    axios.post("http://localhost:9000/add", {
      title: title,
      desc: desc
    }).then((res) => {
      setappview(false);
      get_tasks();
    })

  }

  function Delete_task(id) {
    axios.post("http://localhost:9000/delete", {
      id: id
    }).then((res) => {
      get_tasks();
      setappview(false);
    })

  }

  function Edit_task() {
    let id = edit_view.id
    let title = user_wish_title.current.value
    let desc = user_wish_desc.current.value
    console.log(id, title, desc);

    axios.put("http://localhost:9000/update", {
      id: id,
      title: title,
      desc: desc
    }).then(() => {
      get_tasks();
      setedit_view(false)
    })
  }



  return (
    <>
      {
        appview == false ? null : (<div className='Add-note-section'>
          <div className='add-note'>
            <div className='add-note-heading'>
              <h2>Add Note ....</h2>
            </div>
            <input type="text" placeholder='enter title' ref={user_title} name="title"></input>
            <textarea name="desc" id="" cols="30" rows="10" placeholder='enter desc of title' ref={user_desc}></textarea>
            <div className='add-note-button' onClick={() => Add_task(user_title.current.value, user_desc.current.value)}>
              <button>Add</button>
            </div>
          </div>
          <div className='cut' onClick={() => {
            setappview(false);
          }}>
            <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M105.367 18.328c23.14 15.444 46.098 31.27 68.55 47.572-45.055-20.895-94.51-35.918-149.37-44.246 46.697 26.72 91.596 55.58 135.705 85.524-37.203-18.033-77.48-32.22-121.602-41.37 58.218 34.322 109.368 72.465 154.71 114.206C136.02 227.227 86.295 284.717 45.79 354.18c27.11-24.29 54.91-47.545 82.868-70.68C81.942 339.36 45.05 405.01 20.2 482.135c20.36-24.62 40.988-48.203 61.905-70.817 44.7-67.485 89.567-147.11 148.856-170.418-29.61 30.708-63.36 75.164-98.25 118.145 40.99-40.437 83.09-77.46 126.415-111.512 61.598 70.49 110.757 149.38 152.145 235.873-6.738-44.794-16.796-87.384-30.03-127.666l46.444 65.53s-26.037-72.69-43.66-101.987c40.76 55.91 78.208 114.428 112.328 175.205-18.674-89.454-50.512-169.772-98.893-238.224 34.906 34.69 68.637 71.1 100.93 109.045C465.048 288.827 423.58 221.82 372.214 167c40.224-25.887 81.48-49.73 123.863-71.783-32.025 5.56-62.49 12.92-92.006 21.934 21.836-16.173 44.41-32.124 67.024-47.523-37.987 11.91-74.633 25.775-109.067 41.433 42.668-27.673 86.32-53.668 131.004-78.602h-.003c-67.47 18.055-130.83 42.19-188.998 73.548-56.294-41.79-122.01-71.787-198.663-87.68z"></path></g></svg>
          </div>
        </div>)
      }
      {
        edit_view == false ? null : (<div className='edit-note-section'>
          <div className='edit-note'>
            <div className='edit-note-heading'>
              <h2>Edit Note ....</h2>
            </div>
            <input type="text" placeholder='enter title' name="title"
              value={edit_view.title}></input>
            <input type="text" placeholder="edited title here" ref={user_wish_title} name="title"></input>
            <textarea name="desc" id="" cols="30" rows="10" placeholder='enter desc of title' value={edit_view.desc}></textarea>
            <textarea name="desc" id="" cols="30" rows="10" placeholder='enter edited desc of title....' ref={user_wish_desc}></textarea>
            <div className='edit-note-button' onClick={() => {
              Edit_task()
            }}>
              <button>Edit</button>
            </div>
          </div>
          <div className='cut' onClick={() => {
            setedit_view(false)
              ;
          }}>
            <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M105.367 18.328c23.14 15.444 46.098 31.27 68.55 47.572-45.055-20.895-94.51-35.918-149.37-44.246 46.697 26.72 91.596 55.58 135.705 85.524-37.203-18.033-77.48-32.22-121.602-41.37 58.218 34.322 109.368 72.465 154.71 114.206C136.02 227.227 86.295 284.717 45.79 354.18c27.11-24.29 54.91-47.545 82.868-70.68C81.942 339.36 45.05 405.01 20.2 482.135c20.36-24.62 40.988-48.203 61.905-70.817 44.7-67.485 89.567-147.11 148.856-170.418-29.61 30.708-63.36 75.164-98.25 118.145 40.99-40.437 83.09-77.46 126.415-111.512 61.598 70.49 110.757 149.38 152.145 235.873-6.738-44.794-16.796-87.384-30.03-127.666l46.444 65.53s-26.037-72.69-43.66-101.987c40.76 55.91 78.208 114.428 112.328 175.205-18.674-89.454-50.512-169.772-98.893-238.224 34.906 34.69 68.637 71.1 100.93 109.045C465.048 288.827 423.58 221.82 372.214 167c40.224-25.887 81.48-49.73 123.863-71.783-32.025 5.56-62.49 12.92-92.006 21.934 21.836-16.173 44.41-32.124 67.024-47.523-37.987 11.91-74.633 25.775-109.067 41.433 42.668-27.673 86.32-53.668 131.004-78.602h-.003c-67.47 18.055-130.83 42.19-188.998 73.548-56.294-41.79-122.01-71.787-198.663-87.68z"></path></g></svg>
          </div>
        </div>)
      }
      <div className='everything'>
        <h2 className='heading'>My Notes</h2>
        <div className='allnotes'>
          {
            alltasks.map((task) => {
              return (
                <div className='single-note'>
                  <div class="single-note-title">
                    {task.title}
                  </div>
                  <div className='single-note-desc'>
                    {task.desc}
                  </div>
                  <div className='edit-buttons'>
                    <div className='edit-button' onClick={() => {
                      setedit_view(task);
                    }}>
                      <img src={editIcon} alt="edit icon" />
                    </div>
                    <div className='delete-button' onClick={() => {
                      Delete_task(task.id);
                    }}>
                      <img src={deleteIcon} alt="delete icon" />
                    </div>
                  </div>
                </div>

              )
            })
          }
          <div className='single-note'>
            <div class="single-note-title">
              Title :
            </div>
            <div className='single-note-desc' id="add-note-desc" onClick={() => {
              setappview(true);
            }}>
              <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add-box"> <path id="vector" d="M2 8C2 4.68629 4.68629 2 8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8Z" stroke="#000000" stroke-width="1.5"></path> <path id="vector_2" d="M12 7.75732L12 16.2426" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> <path id="vector_3" d="M16.25 12L7.76476 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path> </g> </g> </g></svg>
              <p id="add-note-msg">Add note</p>
            </div>
            <div className='edit-buttons'>
              <div className='edit-button'>
                <img src={editIcon} alt="edit icon" />
              </div>
              <div className='delete-button'>
                <img src={deleteIcon} alt="edit icon" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App