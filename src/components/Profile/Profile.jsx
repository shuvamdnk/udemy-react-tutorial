import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
function Profile(props) {
    return (
        <div>
            <h4>To Do Lists</h4>
            <hr/>
            <AddTodo/>
            <Todo/>
        </div>
    );
}

export default Profile;