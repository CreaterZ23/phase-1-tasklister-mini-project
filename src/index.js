document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('create-task-form').addEventListener('submit', (s) => {
      s.preventDefault()
      buildToDoItem(s.target.querySelector("input").value)
    })
});

function buildToDoItem (doThis) {
  const li = document.createElement('li')
  const x = document.createElement('button')
  x.addEventListener('click', (e) =>{
    e.target.parentNode.remove()
  })
  li.textContent = ` ${doThis} `
  x.textContent = " X " 
  li.appendChild(x)
  document.getElementById('tasks').appendChild(li)

}