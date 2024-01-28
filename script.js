const userName=document.querySelector(".input-name"),
email=document.querySelector(".input-email"),
imgUrl=document.querySelector(".input-img"),
contactContent=document.querySelector(".contact-content"),
contact=document.querySelector(".contacts"),
btnCreate=document.querySelector(".create"),
btnRead=document.querySelector(".read"),
deleteBtn=document.querySelector(".delete"),
icon=document.querySelector(".icon");

function resultFunction(){
  contactContent.innerHTML=""
let mesagge=JSON.parse(localStorage.getItem("res"))||[];
mesagge.map(el=>{
contactContent.innerHTML+=`<div class="block">
<img src="${el.img}" alt="img">
<div>
<h4>${el.name}</h4>
<h4>${el.gmail}</h4>
</div>
<button class="deleteBtn">DELETE</button>
</div>`
})
DeleteTask()
}

btnCreate.addEventListener("click", () => {
  let messages = JSON.parse(localStorage.getItem("res")) || [];
  let obj = {
      id: 1,
      name: userName.value,
      gmail: email.value,
      img: imgUrl.value,
  };
  if (obj.name.trim() === "" && " "|| obj.gmail.trim() === ""&& " " || obj.img.trim() === ""&& " ") {
      alert("заполните все поля.");
  } else {
      let updatedMessages = [...messages, obj];
      localStorage.setItem("res", JSON.stringify(updatedMessages));
      resultFunction();
      imgUrl.value = "";
      email.value = "";
      userName.value = "";
  }
});

icon.addEventListener("click",()=>{
  contact.style.display="none"
})
function DeleteTask () {
  let mesagge = JSON.parse(localStorage.getItem("res")) || []
const btn1 = document.querySelectorAll(".deleteBtn")
btn1.forEach((btn,index) => {
  btn.addEventListener("click",() => {
      mesagge = mesagge.filter((el,idx) => {
           return idx !== index
      })
      localStorage.setItem("res",JSON.stringify(mesagge))
    resultFunction()
  })
})
}

btnRead.addEventListener("click",()=>{
  contact.style.display="inline"
  
})



