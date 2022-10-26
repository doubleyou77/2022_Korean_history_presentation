const content = document.querySelector('#content');
const button = document.querySelector('#button');
const list = document.querySelector('.result-list');
let newtitle = document.createElement('div');
let newcontent = document.createElement('div');

button.addEventListener('click', submit);

function submit() {
  if (!content.value) return alert('입력값이 필요합니다.');

  const req = {content:content.value};
  
  fetch('/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        list.innerHTML = '';
        let result = res.message;
        
        if (result.length == 0) list.removeAttribute('id');
        else {
          list.id = "on";
          for (i of result) {
            newtitle.setAttribute('class', 'list-title');
            newtitle.innerHTML = i.token;
            newcontent.setAttribute('class', 'list-content');
            newcontent.innerHTML = i.info;
            list.appendChild(newtitle);
            list.appendChild(newcontent);
            console.log(i);
          }
        }
      }
      else if (res.error) return alert(res.error);
    })
    .catch((err) => {
      console.error('에러');
    })
}