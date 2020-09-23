let opisKratokGD = document.querySelector(".pola");
let sug = document.querySelector(".sss");
opisKratokGD.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in.
    Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.</p>`;
});

let workExperiencegd = document.querySelector(".wEgD");
workExperiencegd.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Write your previous job experience and if you’re currently working, your current job titles. Explain your
   responsibilities and projects and list the tech stack and products/projects you worked on. If you were
   working in a team, let the recruiter know what your role was.</p>`;
});

let infoForgd = document.querySelector('.gdContact');
infoForgd.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your
    professional email address, preferably on Gmail. Your city of living is an information that interests your
    potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you
    have proof of your previous job experiences online, link that too.</p>`;
});

let tipsEducationgd = document.querySelector('.gdedu');
tipsEducationgd.addEventListener("mouseover",   function () {
  sug.innerHTML = `<p>Education is an important section – but be sure to select only what is relevant to the job you’re applying
  for. Write about your university degrees, relevant courses and if you have any publications, but skip the
  high and elementary school.</p>`;
});

let skiMargd = document.querySelector(".skilsgd");
skiMargd.addEventListener("mouseover", function() {
  sug.innerHTML = `<p>List relevant education, including workshops or lectures you have visited. If you have a bachelor in
    Sports, and now you are applying as a designer because you finished a course, the course should be the
    highest in your “education” section. Don’t put in high and elementary school.
    List all the skills, tools and technologies that you know well.</p>`;
});


function getPDFM() {
    var HTML_Width = $(".cv-contentgd").width();
    var HTML_Height = $(".cv-contentgd").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;
  
    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
  
    html2canvas($(".cv-contentgd")[0], {
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
  let downloadPdfgd = document.getElementById("downloadGD");
  downloadPdfgd.addEventListener("click", function() {
    getPDFM();
  });
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("fa-times-circle")) {
      e.target.parentElement.style.display = "none";
    }
  });

  let forWorkgd = document.querySelector("#forWorkGD");
  let ulForWorkgd = document.querySelector("#ulFgd");
  forWorkgd.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (forWorkgd.value !== "") {
        let value = event.target.value;
        ulForWorkgd.innerHTML +=
          "<li>" +
          value +
          '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
          forWorkgd.value = "";
      }
    }
  });

  let forkgd = document.querySelector("#forWgd");
  let ulForrkgd = document.querySelector("#wEgD");
  forkgd.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (forkgd.value !== "") {
        let value = event.target.value;
        ulForrkgd.innerHTML +=
          "<li>" +
          value +
          '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
          forkgd.value = "";
      }
    }
  });

  let forgd = document.querySelector("#forConGD");
  let uorrkgd = document.querySelector("#ulGD");
  forgd.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (forgd.value !== "") {
        let value = event.target.value;
        uorrkgd.innerHTML +=
          "<li>" +
          value +
          '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
          forgd.value = "";
      }
    }
  });

  let ford = document.querySelector("#forSGD");
  let uorkgd = document.querySelector("#ulForSkilsGD");
  ford.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
      if (ford.value !== "") {
        let value = event.target.value;
        uorkgd.innerHTML +=
          "<li>" +
          value +
          '<i class="fa fa-times-circle" aria-hidden="true"></i></li>';
          ford.value = "";
      }
    }
  });

  let editableGD = document.querySelector(".GDEdit");

  editableGD.addEventListener('click', function(){
    if(editableGD.innerText === "EDIT"){
      editableGD.innerText = "SAVE";
    }else{
      editableGD.innerText = "EDIT";
    }
    if(document.querySelector(".desiig").contentEditable === "true"){
      document.querySelector(".desiig").contentEditable = "false";
    }else{
      document.querySelector(".desiig").contentEditable = "true"
    }
    if(document.querySelector(".kratok-opis").contentEditable === "true"){
      document.querySelector(".kratok-opis").contentEditable = "false";
    }else{
      document.querySelector(".kratok-opis").contentEditable = "true";
    }
    if(document.querySelector(".levo").contentEditable === "true"){
      document.querySelector(".levo").contentEditable = "false";
    }else{
      document.querySelector(".levo").contentEditable = "true";
    }
    
    if(document.querySelector(".gdedu").contentEditable === "true"){
      document.querySelector(".gdedu").contentEditable = "false";
    }else{
    document.querySelector(".gdedu").contentEditable = "true";
    }
    if(document.querySelector(".skilsgd").contentEditable === "true"){
      document.querySelector(".skilsgd").contentEditable = "false";
    }else{
    document.querySelector(".skilsgd").contentEditable = "true";  
    }
    if(document.getElementById('forWorkGD').style.display === "block"){
      document.getElementById('forWorkGD').style.display = "none"; 
    }else{
    document.getElementById('forWorkGD').style.display = "block"; 
    }
    if(document.getElementById('forWgd').style.display === "block"){
      document.getElementById('forWgd').style.display = "none"; 
    }else{
    document.getElementById('forWgd').style.display = "block"; 
    }
    if(document.getElementById('forConGD').style.display === "block"){
      document.getElementById('forConGD').style.display = "none"; 
    }else{
    document.getElementById('forConGD').style.display = "block";  
    }
    if(document.getElementById('forEducation').style.display === "block"){
      document.getElementById('forEducation').style.display = "none"; 
    }else{
    document.getElementById('forEducation').style.display = "block"; 
    }
    if(document.getElementById('forSGD').style.display === "block"){
      document.getElementById('forSGD').style.display = "none";
    }else{
      document.getElementById('forSGD').style.display = "block"; 
    }
  });
