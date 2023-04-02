document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      buildWork(e.target.work.value);
      form.reset();
  })
})

function buildWork(work) {
  let list = document.createElement('li');
  const btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = 'Delete';
  btn.style.width = '40px';
  btn.style.height = '30px';
  btn.style.fontSize ='10px';
  list.textContent = `${work}  `;
  document.querySelector("#tasks").appendChild(list);
  list.appendChild(btn);
  console.log(list);
}

function handleDelete(e){
  e.target.parentNode.remove(); 
}