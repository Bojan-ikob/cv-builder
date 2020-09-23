let slikaHover = document.getElementById("slikaDS");
let sug = document.querySelector(".sss");
slikaHover.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Your photo should be professional. It’s better to send a CV without a photo, that with one that makes
  you seem unserious.</p>`;
});

let opisKratok = document.querySelector(".kratok-opisDS");
opisKratok.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in.
    Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.</p>`;
});

let infoForYou = document.querySelector(".dsInfo");
infoForYou.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
    professional email address, preferably on Gmail. Your city of living is an information that interests your
    potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you
    have proof of your previous job experiences online, link that too.</p>`;
});

let workExperience = document.querySelector(".w-D");
workExperience.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Write your previous job experience and if you’re currently working, your current job titles. Explain your
   responsibilities and projects and list the tech stack and products/projects you worked on. If you were
   working in a team, let the recruiter know what your role was.</p>`;
});

let tipsEducationMarketing = document.querySelector('.DSedu');
tipsEducationMarketing.addEventListener("mouseover",   function () {
  sug.innerHTML = `<p>Education is an important section – but be sure to select only what is relevant to the job you’re applying
  for. Write about your university degrees, relevant courses and if you have any publications, but skip the
  high and elementary school.</p>`;
});

let skiMar = document.querySelector(".DSskills");
skiMar.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>List relevant education, including workshops or lectures you have visited. If you have a bachelor in
    Sports, and now you are applying as a designer because you finished a course, the course should be the
    highest in your “education” section. Don’t put in high and elementary school.
    List all the skills, tools and technologies that you know well.</p>`;
});

let MarketingL = document.querySelector(".DSlan");
MarketingL.addEventListener("mouseover",   function () {
  sug.innerHTML = `<p>All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use
  expressions such as “fluent in”, “speaking level of”, “native language” and similar.</p>`;
});
var bannerImage = document.getElementById("bannerImgDS");
var result = document.getElementById("resDS");
var img = document.getElementById("tableBannerDS");
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


function getPDFDS() {
    var HTML_Width = $(".cv-contentDS").width();
    var HTML_Height = $(".cv-contentDS").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
  
    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
  
    html2canvas($(".cv-contentDS")[0], {
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
  let downloadPdf = document.getElementById("downloadDS");
  downloadPdf.addEventListener("click", function() {
    getPDFDS();
  });
  
  
  
  let forWorkds = document.querySelector("#forWorkDS");
  let ulForWorkds = document.querySelector("#ulFWDS");
  forWorkds.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (forWorkds.value !== "") {
        let value = event.target.value;
        ulForWorkds.innerHTML +=
          "<li>" +
          value +
          '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
          forWorkds.value = "";
      }
    }
  });  
  let forFDS = document.querySelector("#forFounderDS");
  let ulfFDS= document.querySelector("#ulfDS");
  forFDS.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (forFDS.value !== "") {
        let value = event.target.value;
        ulfFDS.innerHTML +=
          "<li>" +
          value +
          '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
          forFDS.value = "";
      }
    }
  });

  let forssFDS = document.querySelector("#forEducationDS");
  let ulfssFDS= document.querySelector(".DSedu");
  forssFDS.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (forssFDS.value !== "") {
        let value = event.target.value;
        ulfssFDS.innerHTML +=
          `<h5> ${value}  
          <i class="fa fa-times-circle" aria-hidden="true"></i></h5>`;
          forssFDS.value = "";
      }
    }
  });

  let forSkiM = document.querySelector("#forDS");
let ulSkM = document.querySelector("#spansDS");
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

let eMa = document.querySelector("#fSertDS");
let ulemA = document.querySelector("#forsertDS");
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


let eMads = document.querySelector("#forDsLang");
let ulemAds = document.querySelector(".DSlan");
eMads.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (eMads.value !== "") {
      let value = event.target.value;
      ulemAds.innerHTML +=
        "<p>" +
        value +
        '<i class="fa fa-times-circle" aria-hidden="true"></i></p>';
        eMads.value = "";
    }
  }
});

let edd = document.querySelector("#forDSEdu");
let uldd = document.querySelector("#DSEdu");
edd.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    if (edd.value !== "") {
      let value = event.target.value;
      uldd.innerHTML +=
        `<p><span class="ed-spa"> ${value}'<i class="fa fa-times-circle" aria-hidden="true"></i></span></p>'`;
        edd.value = "";
    }
  }
});

let editDSBtn = document.querySelector('.DsEdit');
editDSBtn.addEventListener('click', function(){
  if(editDSBtn.innerText === "EDIT"){
    editDSBtn.innerText = "SAVE";
  }else{
    editDSBtn.innerText = "EDIT";
  } 
  if(document.getElementById('forWorkDS').style.display === "block"){
   document.getElementById('forWorkDS').style.display = "none"; 
    }else{
   document.getElementById('forWorkDS').style.display = "block"; 
    }
   if(document.getElementById('forFounderDS').style.display === "block"){
   document.getElementById('forFounderDS').style.display = "none"; 
    }else{
   document.getElementById('forFounderDS').style.display = "block"; 
    }
   if(document.getElementById('forEducationDS').style.display === "block"){
   document.getElementById('forEducationDS').style.display = "none"; 
    }else{
   document.getElementById('forEducationDS').style.display = "block";   
    }
   if(document.getElementById('forDS').style.display === "block"){
   document.getElementById('forDS').style.display = "none"; 
    }else{
   document.getElementById('forDS').style.display = "block"; 
    }
   if(document.getElementById('fSertDS').style.display === "block"){
   document.getElementById('fSertDS').style.display = "none"; 
    }else{
   document.getElementById('fSertDS').style.display = "block"; 
    }
   if(document.getElementById('forDsLang').style.display === "block"){
   document.getElementById('forDsLang').style.display = "none"; 
    }else{
   document.getElementById('forDsLang').style.display = "block"; 
    }
   if(document.getElementById('forDSEdu').style.display === "block"){
   document.getElementById('forDSEdu').style.display = "none"; 
    }else{
   document.getElementById('forDSEdu').style.display = "block"; 
    }
   if(document.getElementById('bannerImgDS').style.display === "block"){
      document.getElementById('bannerImgDS').style.display = "none"; 
    }else{
   document.getElementById('bannerImgDS').style.display = "block"; 
    }
   if(document.querySelector(".opisDS").contentEditable === "true"){
    document.querySelector(".opisDS").contentEditable = "false";
    }else{
      document.querySelector(".opisDS").contentEditable = "true";  
    }
 
   if(document.querySelector(".dsInfo").contentEditable === "true"){
   document.querySelector(".dsInfo").contentEditable = "false";
    }else{
   document.querySelector(".dsInfo").contentEditable = "true";
    }
   if(document.querySelector(".levo").contentEditable === "true"){
   document.querySelector(".levo").contentEditable = "false";
    }else{
   document.querySelector(".levo").contentEditable = "true"; 
    }
   if(document.querySelector(".DSskills").contentEditable === "true"){
   document.querySelector(".DSskills").contentEditable = "false";
    }else{
   document.querySelector(".DSskills").contentEditable = "true";
    }
   if(document.querySelector("#forsertDS").contentEditable === "true"){
   document.querySelector("#forsertDS").contentEditable = "false";
    }else{
   document.querySelector("#forsertDS").contentEditable = "true"; 
    }
   if(document.querySelector(".DSlan").contentEditable === "true"){
   document.querySelector(".DSlan").contentEditable = "false";
    }else{
   document.querySelector(".DSlan").contentEditable = "true";     
    }
   if(document.querySelector("#DSEdu").contentEditable === "true"){
   document.querySelector("#DSEdu").contentEditable = "false";
    }else{
   document.querySelector("#DSEdu").contentEditable = "true";
    }
   

    
});