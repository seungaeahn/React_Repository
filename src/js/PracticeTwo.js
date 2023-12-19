import React, {useCallback, useEffect, useState} from "react";
import '../css/todo.css';


//useEffect document.title
//상단바 위 제목을 변경
//useCallback
//<button> 증가하기

function TodoList() { 
    const [todos, setTodos] = useState([]);

    const [newTodo, setNewTodo] = useState('');

    const [count, setCount] = useState(0);

    

    //할일 추가하기
    const addTodo = () => {
      if(newTodo.trim() !== ''){
      setTodos([...todos, newTodo]);
      setNewTodo('');
      }
    }

    //할일 추가 버튼을 누르면 count가 올라가기
    const increaClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    //할일 삭제 버튼
    const removeTodo = (index) => {
        const updateTodos=[...todos];
    
        updateTodos.splice(index,1);
        setTodos(updateTodos);

        //할일 삭제할 경우 count 감소
        setCount(count -1);


      };

    //상단바 이름에 count올라갈때마다 바뀌게
    useEffect(() => {
        document.title = `할일 갯수: ${count}`;
     });
    
    //콘솔 로그에 todos 변경될때마다 보이게
    useEffect(() => {
        console.log('todos 변경됨 : ', todos);
      }, [todos]);
      

    
      return (
        <div>
          <h2>To do List</h2>
          <div>
            <input 
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={() => {
                addTodo();
                increaClick();
            }}>Add</button>
    
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <button onClick={() => removeTodo(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
 
 
export default TodoList;



//함수를 두개 실행하려면!!!
// function twoFuction(){
//     return(
//         <div>
//             <ExCallBack/>
//             <TodoList/>
//         </div>
//     )
// }
// export default twoConst;

{/* 
<thymeleaf>에서는
th:each todo : ${todos}
<react>에서는
map todo, index : ${todos} */}
