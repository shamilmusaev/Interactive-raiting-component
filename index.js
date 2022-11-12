const modal = document.querySelector(".modal");
const trigger = document.querySelector(".box-submit-btn");


function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function submit() {
    var num = document.getElementsByName('number');
      
    for(i = 0; i < num.length; i++) {
        if(num[i].checked)
        document.getElementById("result").innerHTML = num[i].value;
    }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);