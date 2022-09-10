// changing navbar background on scroll

window.onscroll = function(){
  changeBg();
}

function changeBg(){
  if (document.documentElement.scrollTop > 20){
    document.querySelector(".navbar").classList.add("addnavbg");
  }else{
    document.querySelector(".navbar").classList.remove("addnavbg");
  }
}

function addbg(){
  document.querySelector(".navbar").classList.toggle("addnavbg");
}
