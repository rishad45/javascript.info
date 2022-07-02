window.addEventListener("resize",ResizeWindow);
function ResizeWindow(){
    var dataSpyList=[].slice.call(document.querySelectorAll('[data-spy="scroll"]'));
    dataSpyList.forEach(function(dataSpyElement){
        bootstrap.scrollspy.getInstance(dataSpyElement).refresh();
    });
}

// to top button
const toTop=document.querySelector(".to-top");
window.addEventListener("scroll",()=> {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }
})

//  toggle 
 $(document).ready(function(){
    $("#readMore").click(function(){
         $("#readPart").toggle();
     });
 });

// // hide div
// window.addEventListener("load",ResizeDiv);
// function ResizeDiv(){
//     const divInUse=document.getElementById("#readPart");
//     divInUse.hidden();

// }




// form
function displayRest(){
    var x=document.getElementById('rest_form');
    if(x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }

}