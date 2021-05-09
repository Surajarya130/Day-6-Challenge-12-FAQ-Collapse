const toggleBtn = document.querySelectorAll(".faq-toggle");


toggleBtn.forEach(tgl =>{
    tgl.addEventListener("click", function(){
        tgl.parentElement.classList.toggle("active");
    })
})