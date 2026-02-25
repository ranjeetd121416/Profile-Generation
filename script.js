document.querySelectorAll(".content").forEach(section=>{
  section.style.display="none";
});


function openSection(id){

  document.getElementById("hero").style.display="none";

  document.querySelectorAll(".content").forEach(section=>{
    section.style.display="none";
  });

  document.getElementById(id).style.display="block";

  document.querySelectorAll("nav a").forEach(link=>{
    link.classList.remove("active");
  });

  document.getElementById(id+"Link").classList.add("active");
}


function goBack(){

  document.querySelectorAll(".content").forEach(section=>{
    section.style.display="none";
  });

  document.getElementById("hero").style.display="flex";
}


const text=["Ranjeet Jadhav"];

let i=0,j=0;

function typing(){
  document.getElementById("typing").innerHTML=text[i].slice(0,j++);
  if(j>text[i].length){j=0;i=(i+1)%text.length;}
  setTimeout(typing,120);
}
typing();


fetch("https://api.github.com/users/ranjeetd121416/repos")
.then(res=>res.json())
.then(data=>{

  let container=document.getElementById("githubProjects");

  data.slice(0,6).forEach(repo=>{
    container.innerHTML+=`
      <div class="card">
        <h3>${repo.name}</h3>
        <a href="${repo.html_url}" target="_blank">View Project</a>
      </div>
    `;
  });

});