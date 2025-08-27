// typing animation 

var typed =new Typed(".typing",{
strings:["","Frontend Web Developer","Problem Solver","Responsive Designer"],
typeSpeed:100,
BackSpeed:30,
loop:true
})

// aside nav
const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;

for(let i=0;i<totalNavList;i++)
    {
   const a =navList[i].querySelector("a");
   a.addEventListener("click",function(){
    removeBackSection();
    for(let j=0;j<totalNavList;j++)
        {
    if(navList[j].querySelector("a").classList.contains("active")){
        addBackSection(j);
        // allSection[j].classList.add("back-section");
    }
        navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
    if(window.innerWidth<1200){
        asideSectionToggleBtn();
    }
   })
}
function removeBackSection(){
    for(let i=0;i<totalSection;i++){
       allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
 allSection[num].classList.add("back-section")   
}
function showSection(element){
    for(let i=0;i<totalSection;i++){
       allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}
function updateNev(element){
  for(let i=0;i<totalNavList;i++){
    navList[i].querySelector("a").classList.remove("active");
    const target=element.getAttribute("href").split("#")[1];
    if(target=== navList[i].querySelector("a").getAttribute("href").split("#")[1]){
        navList[i].querySelector("a").classList.add("active");  
    }
  }  
}
document.querySelector(".hire-me").addEventListener("click", function(){
   const sectionIndex=this.getAttribute("data-section-index");
//    console.log(sectionIndex);

    showSection(this);
    updateNev(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

// navtogler
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
    asideSectionToggleBtn();
})
function asideSectionToggleBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open");
    }
}

// emailjs start

    // 🔹 Step 2: Send Button Click Event
    document.querySelector('.send-msg').addEventListener("click", function() {
        emailjs.init("50edbiuqdxxiK3T99"); 
      const userName=document.querySelector('#user-name').value;
      const userEmail=document.querySelector('.email').value;
      const userSub=document.querySelector('.subject').value;
      const userMsg=document.querySelector('.msg').value;

      if (userMsg.trim() === "" || userEmail.trim()==="" || userMsg.trim()==="" || userSub.trim()==="") {
        alert("You are missing Something!");
        return;
      }

      // 🔹 Step 3: Send Email using EmailJS
      emailjs.send("service_qh7029r", "template_ts14i4c", { 
        name:userName,
        email:userEmail,
        subject:userSub,
        message:userMsg
      })
      .then(function(response) {
        document.querySelector("#user-name").value = "";
        document.querySelector(".email").value = "";
        document.querySelector(".subject").value = "";
        document.querySelector(".msg").value = "";
      }, function(error) {
          alert("❌ Failed to send: " + JSON.stringify(error));
      });
    });

// emailjs end

// download resume start
document.querySelector('.down-res').addEventListener('click',()=>{
   const link=document.createElement('a');
   link.href='assets/w_resume.pdf';
   link.download='aman_resume.pdf';

   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
});
// download resume end

