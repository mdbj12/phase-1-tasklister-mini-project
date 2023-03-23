document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target.new_task_description.value)
    form.reset()
  })
});

function createToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  
  btn.addEventListener('click', handleDelete)

  p.textContent = `${todo} `
  btn.textContent = 'x'
  document.getElementById('tasks').appendChild(p)
  p.appendChild(btn)
}

function handleDelete(e){
  e.target.parentNode.remove()
}