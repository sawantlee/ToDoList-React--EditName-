import React from "react";
import TaskListItem from "./TaskListItem";

function TaskList(props){
const {tasks, onTaskDelete, onTaskEditName} = props;
return(
    <ul className="todo-tasklist">
        {
            tasks.map(task => (
                <TaskListItem taskobj={task} key={task.id} onTaskDelete = {onTaskDelete} onTaskEditName ={onTaskEditName} />    
        ) )
        }

    </ul>
)
}

export  default TaskList;