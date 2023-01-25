import { useState, useEffect} from 'react';
import axios from 'axios';     


function App() {
  const [todos, setTodos] = useState([]);

  const [title,setTitle] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")        
    .then((result)=>{
      
      setTodos(result.data);
      console.table(result.data);
     
    }).catch(err => console.log(err));
  },[]);                      

  const postData = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/todos",{      
      title
    }).then((result)=>{

       console.log("Posting data",result);
    }).catch(err => console.log(err));
  }


  const putData = (e) => {
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/todos",{      
      title
    }).then((result)=>{

       console.log("Puting data",result);
    }).catch(err => console.log(err));
  }


  const postDelete = (id,e) => {
    e.preventDefault();
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)     
    .then((result)=>{

       console.log("Deleted!",result);
    }).catch(err => console.log(err));
  }



  const arr = todos.map((data,index)=>{
    return(
    <tr>
      <td>{data.id}</td>
      <td>{data.title}</td>
      <td> <input type="checkbox" checked={data.completed} /></td>
      <td><button type="button" className="btn text-dark bg-danger"

       onClick={(e) => postDelete(data.id,e)}>
        Delete</button>
        </td>
    </tr>
    )
  });

  return (
  <div>
    <h1 className="text-primary text-center">Todo List APP</h1>

    <hr/>

    <form className="text-center">
      <label className='text-dark h3'>Add a list : </label>
      <input type="text" value={title} 
      
      onChange={(e) => setTitle(e.target.value)
      
      }/>
      <br/><br/>
      <button type="button"
       className="btnt green h2 " 
       onClick={postData} >
        Post</button>
      <br/>


      <button type="button" 
        className="btnt btn-lg text-dark bg-info h2" 
        onClick={putData}>
         Put</button>
        
      <hr/>
    </form>
    
    <table className="table table-bordered">
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Completed</th>
      <th>Delete</th>
    </tr>
    {arr}
    </table>
   
  </div>
  ); 
}

export default App;












// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;
