const selectId = (btnId, praId, titleId) => {
  const  btn= document.getElementById(btnId);
  const prag = document.getElementById(praId);
  const titleText = document.getElementById(titleId).innerHTML;
  console.log(titleText);
  
 

  btn.addEventListener("click", () => {
    prag.classList.toggle("pragdDisplay");
    d.classList.toggle("btnColor");
    prag.style.transition="4s";
  });
  
  btn.addEventListener("hover",() => {
   
      d.title = `show the ${titleText} definition`
    })
     
      
    
  

}
selectId("ptn1", "scpra1", "title1");
selectId("ptn2", "scpra2", "title2");
selectId("ptn3", "scpra3", "title3");
selectId("ptn4", "scpra4", "title4");
