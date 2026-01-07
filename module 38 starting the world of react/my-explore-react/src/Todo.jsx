// export default function ToDo({task,work,isDone}){
//     return(
//         <div>
//             <li>Task: {task}   Work: {work}</li>
//         </div>
//     )
// }

// export default function ToDo({task,isDone}){
    
//     if(isDone===true){
//         return <li>Task: {task} </li>
//     }
//     else{
//         return <li>Task not done: {task}</li>
//     }

// }

//using the ternary

//condition ? true :false

// export default function ToDo({task,isDone}){
//     return isDone ? <li>Task done :{task}</li> : <li>Task not done:{task}</li>
// }

//work for only true &&

// export default function ToDo({task,isDone}){
//     return isDone && <li>Task done :{task}</li>  
// }

//work for only false ||

// export default function ToDo({task,isDone}){
//     return isDone || <li>Task not done:{task}</li>
// }


//another way using the 6 use variable


export default function ToDo({task,isDone}){
    
    let listItem;

    if(isDone===true){
        listItem= <li>Task: {task} </li>
    }
    else{
        listItem= <li>Task not done: {task}</li>
    }

    return listItem;
}