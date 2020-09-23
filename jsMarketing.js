let slikaHovera = document.getElementById("slikaZaMarketing");
let suga = document.querySelector(".sssa");
slikaHovera.addEventListener("mouseover", function() {
  suga.innerHTML = `<p>Your photo should be professional. It’s better to send a CV without a photo, that with one that makes
  you seem unserious.</p>`;
});
let infoForMarketing = document.getElementById('emailAndPhone');
infoForMarketing.addEventListener("mouseover", function() {
  suga.innerHTML = `<p>Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
    professional email address, preferably on Gmail. Your city of living is an information that interests your
    potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you
    have proof of your previous job experiences online, link that too.</p>`;
});

let opisKratokMarketing = document.getElementById('opMar');
opisKratokMarketing.addEventListener("mouseover", function() {
  suga.innerHTML = `<p>Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in.
    Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.</p>`;
});
let workExperienceMarketing = document.querySelector(".Markkett");
workExperienceMarketing.addEventListener("mouseover", function() {
  suga.innerHTML = `<p>Write your previous job experience and if you’re currently working, your current job titles. Explain your
   responsibilities and projects and list the tech stack and products/projects you worked on. If you were
   working in a team, let the recruiter know what your role was.</p>`;
});

let tipsEducationMarketing = document.getElementById('edMarketing');
tipsEducationMarketing.addEventListener("mouseover",   function () {
  suga.innerHTML = `<p>Education is an important section – but be sure to select only what is relevant to the job you’re applying
  for. Write about your university degrees, relevant courses and if you have any publications, but skip the
  high and elementary school.</p>`;
});

let MarketingL = document.getElementById('markLang');
MarketingL.addEventListener("mouseover",   function () {
  suga.innerHTML = `<p>All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
  expressions such as “fluent in”, “speaking level of”, “native language” and similar.</p>`;
});

let skiMar = document.querySelector("#sMarkk");
skiMar.addEventListener("mouseover", function() {
  suga.innerHTML = `<p>List relevant education, including workshops or lectures you have visited. If you have a bachelor in
    Sports, and now you are applying as a designer because you finished a course, the course should be the
    highest in your “education” section. Don’t put in high and elementary school.
    List all the skills, tools and technologies that you know well.</p>`;
});

let achM = document.querySelector("#forAMark");
achM.addEventListener("mouseover", function() {
  suga.innerHTML = ` <p>Showcase your tech stack. List the stack under every previous project you have worked on, or showcase
    your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you
    have worked on. Another way is to showcase your projects on GitHub.
    Use numbers. If you helped a website scale, put a metric in there.</p>`;
});

let editableM = document.querySelector(".MrketingBtnEdit");
let inputs = document.getElementsByTagName("input");

editableM.addEventListener("click", function() {
  if(editableM.innerText === "EDIT"){
    editableM.innerText = "SAVE";
  }else{
    editableM.innerText = "EDIT";
  }
  if(document.getElementById("opMar").contentEditable === "true"){
    document.getElementById("opMar").contentEditable = "false";
  }else{
    document.getElementById("opMar").contentEditable = "true";
  }
  if(document.getElementById("emailAndPhone").contentEditable === "true"){
      document.getElementById("emailAndPhone").contentEditable = "false";
    }else{
  document.getElementById("emailAndPhone").contentEditable = "true";
   }
  if(document.querySelector(".levo").contentEditable === "true"){
  document.querySelector(".levo").contentEditable = "false";
  }else{
  document.querySelector(".levo").contentEditable = "true";
  }
  if(document.querySelector("#sMarkk").contentEditable === "true"){
  document.querySelector("#sMarkk").contentEditable = "false";
  }else{
  document.querySelector("#sMarkk").contentEditable = "true";        
  }
  if(document.querySelector("#forAMark").contentEditable === "true"){
  document.querySelector("#forAMark").contentEditable = "false";
  }else{
  document.querySelector("#forAMark").contentEditable = "true";        
  }
   if(document.querySelector("#markLang").contentEditable === "true"){
  document.querySelector("#markLang").contentEditable = "false";       
  }else{
  document.querySelector("#markLang").contentEditable = "true";            
 }
if(document.getElementById('bannerImgM').style.display === "block"){
  document.getElementById('bannerImgM').style.display = "none"; 
}else{
  document.getElementById('bannerImgM').style.display = "block"; 
}
  if(document.getElementById('forWorkM').style.display === "block"){
  document.getElementById('forWorkM').style.display = "none";     
 }else{
   document.getElementById('forWorkM').style.display = "block";
 }
  if(
   document.getElementById('forFounderM').style.display === "block"){
    document.getElementById('forFounderM').style.display = "none";  
   }else{
    document.getElementById('forFounderM').style.display = "block"; 
    }
  if(document.getElementById('forJM').style.display === "block"){
  document.getElementById('forJM').style.display = "none"; 
    }else{
  document.getElementById('forJM').style.display = "block"; 
    }
  if(document.getElementById('forEM').style.display === "block"){
  document.getElementById('forEM').style.display = "none";  
  }else{
  document.getElementById('forEM').style.display = "block";  
    }
  if(document.getElementById('forSM').style.display === "block"){
  document.getElementById('forSM').style.display = "none";
    }else{
  document.getElementById('forSM').style.display = "block";
    }
  if(document.getElementById('forAchivM').style.display === "block"){
  document.getElementById('forAchivM').style.display = "none"; 
    }else{
  document.getElementById('forAchivM').style.display = "block";  
    } 
  if(document.getElementById('forIntM').style.display === "block"){
  document.getElementById('forIntM').style.display = "none";
    }else{
  document.getElementById('forIntM').style.display = "block"; 
    }

});


let forWork = document.querySelector("#forWorkM");
let ulForWorkM = document.querySelector("#ulFWM");
forWorkM.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forWorkM.value !== "") {
      let value = event.target.value;
      ulForWorkM.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
        forWorkM.value = "";
    }
  }
});
let forFM = document.querySelector("#forFounderM");
let ulfFM = document.querySelector("#ulfFM");
forFM.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forFM.value !== "") {
      let value = event.target.value;
      ulfFM.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
        forFM.value = "";
    }
  }
});
let JMa = document.querySelector("#forJM");
let ulJMa = document.querySelector("#ulJM");
JMa.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (JMa.value !== "") {
      let value = event.target.value;
      ulJMa.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
        JMa.value = "";
    }
  }
});

let eM = document.querySelector("#forEM");
let uleM = document.querySelector("#ulEM");
eM.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (eM.value !== "") {
      let value = event.target.value;
      uleM.innerHTML +=
        "<li>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
        eM.value = "";
    }
  }
});

let forSkiM = document.querySelector("#forSM");
let ulSkM = document.querySelector("#ulSM");
forSkiM.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (forSkiM.value !== "") {
      let value = event.target.value;
      ulSkM.innerHTML +=
      '<div class="ss"><span>' +
      value +
      '<i class="fa fa-times-circle" aria-hidden="true"></i></span></div>';
        forSkiM.value = "";
    }
  }
});


let eMa = document.querySelector("#forAchivM");
let ulemA = document.querySelector(".pEM");
eMa.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (eMa.value !== "") {
      let value = event.target.value;
      ulemA.innerHTML +=
        "<p>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></p>';
        eMa.value = "";
    }
  }
});

let eMm = document.querySelector("#forIntM");
let ulemM = document.querySelector(".mMMm");
eMm.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (eMm.value !== "") {
      let value = event.target.value;
      ulemM.innerHTML +=
        "<p>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></p><br>';
        eMm.value = "";
    }
  }
});

var bannerImage = document.getElementById("bannerImgM");
var result = document.getElementById("resM");
var img = document.getElementById("tableBannerM");
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

function getPDFgd() {
  var HTML_Width = $(".cv-contentM").width();
  var HTML_Height = $(".cv-contentM").height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + top_left_margin * 2;
  var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($(".cv-contentM")[0], {
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
let downloadPdf = document.getElementById("downloadM");
downloadPdf.addEventListener("click", function() {
  getPDFgd();
});
