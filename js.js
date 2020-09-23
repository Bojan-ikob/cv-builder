var bannerImage = document.getElementById("bannerImg");
var result = document.getElementById("res");
var img = document.getElementById("tableBanner");
bannerImage.addEventListener("change", function() {
  var file = this.files[0];
  if (file.type.indexOf("image") < 0) {
    res.innerHTML = "invalid type";
    return;
  }
  var fReader = new FileReader();
  fReader.onload = function() {
    img.src = fReader.result;
    localStorage.removeItem("imgData");
    localStorage.setItem("imgData", fReader.result);
  };
  fReader.readAsDataURL(file);
});
function fetchimage() {
  var dataImage = localStorage.getItem("imgData");
  img.src = dataImage;
}
fetchimage();
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-times-circle")) {
    e.target.parentElement.style.display = "none";
  }
});
let forWork = document.querySelector("#forWork");
let ulForWork = document.querySelector("#ulFW");
forWork.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forWork.value !== "") {
      let value = event.target.value;
      ulForWork.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
      forWork.value = "";
    }
  }
});
let forF = document.querySelector("#forFounder");
let ulfF = document.querySelector("#ulfF");
forF.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forF.value !== "") {
      let value = event.target.value;
      ulfF.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
      forF.value = "";
    }
  }
});
let forCeo = document.querySelector("#forCeo");
let ulForCeo = document.querySelector("#ulForCeo");
forCeo.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forCeo.value !== "") {
      let value = event.target.value;
      ulForCeo.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
      forCeo.value = "";
    }
  }
});
let forCo = document.querySelector("#forCo");
let ulForCo = document.querySelector("#ulForCo");
forCo.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forCo.value !== "") {
      let value = event.target.value;
      ulForCo.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
      forCo.value = "";
    }
  }
});
let forFaC = document.querySelector("#forFaC");
let ulForFaC = document.querySelector("#ulforFaC");
forFaC.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forFaC.value !== "") {
      let value = event.target.value;
      ulForFaC.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
      forFaC.value = "";
    }
  }
});
let forS = document.querySelector("#forS");
let spans = document.querySelector("#spans");
forS.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forS.value !== "") {
      let value = event.target.value;
      spans.innerHTML +=
        '<div class="ss"><span>' +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></span></div>';
      forS.value = "";
    }
  }
});
let forAchiv = document.querySelector("#forAchiv");
let forA = document.querySelector("#forA");
forAchiv.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forAchiv.value !== "") {
      let value = event.target.value;
      forA.innerHTML +=
        "<p>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></span></p>';
      forAchiv.value = "";
    }
  }
});
let forInt = document.querySelector("#forInt");
let forIntereses = document.querySelector("#forIntereses");
forInt.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forInt.value !== "") {
      let value = event.target.value;
      forIntereses.innerHTML +=
        "<p>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></span></p>';
      forInt.value = "";
    }
  }
});

let slikaHover = document.getElementById("slika");
let sug = document.querySelector(".sss");
slikaHover.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Your photo should be professional. It’s better to send a CV without a photo, that with one that makes
  you seem unserious.</p>`;
});





let opisKratok = document.querySelector(".kratok-opis");
opisKratok.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in.
    Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.</p>`;
});



let workExperience = document.querySelector(".levo");
workExperience.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Write your previous job experience and if you’re currently working, your current job titles. Explain your
   responsibilities and projects and list the tech stack and products/projects you worked on. If you were
   working in a team, let the recruiter know what your role was.</p>`;
});



let infoForYou = document.querySelector(".elon-font-awsome");
infoForYou.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
    professional email address, preferably on Gmail. Your city of living is an information that interests your
    potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you
    have proof of your previous job experiences online, link that too.</p>`;
});



let skilll = document.querySelector(".skillsss");
skilll.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>List relevant education, including workshops or lectures you have visited. If you have a bachelor in
    Sports, and now you are applying as a designer because you finished a course, the course should be the
    highest in your “education” section. Don’t put in high and elementary school.
    List all the skills, tools and technologies that you know well.</p>`;
});



let ach = document.querySelector("#forA");
ach.addEventListener("mouseover", function() {
  sug.innerHTML = ` <p>Showcase your tech stack. List the stack under every previous project you have worked on, or showcase
    your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you
    have worked on. Another way is to showcase your projects on GitHub.
    Use numbers. If you helped a website scale, put a metric in there.</p>`;
});



let interes = document.querySelector(".dole");
interes.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Tip: Make sure you leave an email that you check regularly
         Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn,
         Facebook, Stack Overflow, GitHub, your personal website etc.)
         Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know
         whether you are suitable for the position on the long run.</p>`;
});



let editable = document.querySelector("#editBtn");

editable.addEventListener("click", function() {
  
  {
    if(editable.innerText === "EDIT"){
      editable.innerText = "SAVE";
    }else{
      editable.innerText = "EDIT";
    }
    if(document.getElementById("content").contentEditable === "true"){
      document.getElementById("content").contentEditable = "false";
    }else{
      document.getElementById("content").contentEditable = "true";
    }
    if(document.getElementById("author").contentEditable === "true"){
      document.getElementById("author").contentEditable = "false";
    }else{
      document.getElementById("author").contentEditable = "true";
    }
    if(document.getElementById("title").contentEditable === "true"){
      document.getElementById("title").contentEditable = "false";
    }else{
      document.getElementById("title").contentEditable = "true";
    }
  if(document.querySelector(".email").contentEditable === "true"){
    document.querySelector(".email").contentEditable = "false";
  }else{
    document.querySelector(".email").contentEditable = "true";
  }
  if(document.querySelector(".telefon").contentEditable === "true"){
    document.querySelector(".telefon").contentEditable = "false";
  }else{
    document.querySelector(".telefon").contentEditable = "true";
  }
  if(document.querySelector(".lokacija").contentEditable === "true"){
    document.querySelector(".lokacija").contentEditable = "false"
  }else{
    document.querySelector(".lokacija").contentEditable = "true"
  }
  if(document.querySelector(".tw").contentEditable === "true"){
    document.querySelector(".tw").contentEditable = "true";
  }else{
   document.querySelector(".tw").contentEditable = "true";
  } 
  if(document.querySelector(".ime-kompanija").contentEditable === "true"){
    document.querySelector(".ime-kompanija").contentEditable = "false"
  }else{
    document.querySelector(".ime-kompanija").contentEditable = "true"
  }
if(document.querySelector("#spans").contentEditable === "true"){
  document.querySelector("#spans").contentEditable = "true";
}else{
  document.querySelector("#spans").contentEditable = "true";
}
if(document.querySelector(".levo").contentEditable === "true"){
  document.querySelector(".levo").contentEditable = "false"
}else{
  document.querySelector(".levo").contentEditable = "true"
}
if(document.querySelector(".desno").contentEditable === "true"){
  document.querySelector(".desno").contentEditable = "false"
}else{
  document.querySelector(".desno").contentEditable = "true"
}
  if(document.getElementById('forWork').style.display === "block"){
    document.getElementById('forWork').style.display = "none";
  }else{
    document.getElementById('forWork').style.display = "block";
  }
  if(document.getElementById('forFounder').style.display === "block"){
    document.getElementById('forFounder').style.display = "none"
  }else{
    document.getElementById('forFounder').style.display = "block"
  }
  if(document.getElementById('forCeo').style.display === "block"){
    document.getElementById('forCeo').style.display = "none";
  } else{
    document.getElementById('forCeo').style.display = "block";
  }
  if( document.getElementById('forCo').style.display === "block"){
    document.getElementById('forCo').style.display = "none";
  }else{
    document.getElementById('forCo').style.display = "block";
  }
 if(document.getElementById('forFaC').style.display === "block"){
  document.getElementById('forFaC').style.display = "none";
 }else{
  document.getElementById('forFaC').style.display = "block";
 }
  if(document.getElementById('forS').style.display === "block"){
    document.getElementById('forS').style.display = "none";
  }else{
    document.getElementById('forS').style.display = "block";
  }
  if( document.getElementById('forAchiv').style.display === "block"){
    document.getElementById('forAchiv').style.display = "none";
  }else{
    document.getElementById('forAchiv').style.display = "block";
  }
  
  if(document.getElementById('forInt').style.display === "block"){
    document.getElementById('forInt').style.display = "none";
  }else{
    document.getElementById('forInt').style.display = "block";
  }
  if(document.getElementById('bannerImg').style.display === "block"){
    document.getElementById('bannerImg').style.display = "none";
  }else{
    document.getElementById('bannerImg').style.display = "block";
  }
  if(document.querySelector('.fa-times-circle::before').style.display === "block"){
    document.querySelector('.fa-times-circle::before').style.display = "none";
  }else{
    document.querySelector('.fa-times-circle::before').style.display = "block";
  }
   
}

 
});

function getPDF() {
  var HTML_Width = $(".cv-content").width();
  var HTML_Height = $(".cv-content").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + top_left_margin * 2;
  var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($(".cv-content")[0], {
    allowTaint: true
  }).then(function(canvas) {
    canvas.getContext("2d");
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
    pdf.addImage(
      imgData,
      "JPG",
      top_left_margin,
      top_left_margin,
      canvas_image_width,
      canvas_image_height
    );
    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        -(PDF_Height * i) + top_left_margin * 4,
        canvas_image_width,
        canvas_image_height
      );
    }

    pdf.save("cv.pdf");
  });
}
let downloadPdf = document.getElementById("download");
downloadPdf.addEventListener("click", function() {
  getPDF();
});
// downloadPdf.addEventListener('mouseover', function(){
//   document.querySelector('.finish').style.display = "block";
// });
// downloadPdf.addEventListener('mouseleave', function(){
//   document.querySelector('.finish').style.display = "none";
// });