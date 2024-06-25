const todoList = [
                    {name: '',
                    date: ''}
                ] 
                
renderTodoList()

function renderTodoList() {
    let todoListHTML = ''

    todoList.forEach(function (todoObject, index){
            const { name, date } = todoObject //const name = todoObject.name, const date = todoObject.date
            if(todoObject.name !== '' && todoObject.date !== ''){
                const html = `
                    <input type="checkbox">
                    <div>${name}</div>
                    <div>${date}</div>
                    <button class="delete" onclick="
                            todoList.splice(${index},1);
                            renderTodoList();
                            ">Delete</button>`
                todoListHTML += html
            }
    })

    document.querySelector('.todo-list').innerHTML = `${todoListHTML}`
    
}

function addTodo() {
    const nameElement = document.querySelector('.name-input')
    const name = nameElement.value

    const dateElement = document.querySelector('.date-input')
    const date = dateElement.value


    todoList.push({
        name,
        date
    })

    document.querySelector('.name-input').value = ''
    document.querySelector('.date-input').value = ''
    

    renderTodoList()
    
}