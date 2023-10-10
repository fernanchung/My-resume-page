window.addEventListener('DOMContentLoaded', function() {

  //hide and show first part and second part of the animation
  
  function hideInitialContent(element1, element2, delay){
    const part1 = document.querySelector(element1);
    const part2 = document.querySelector(element2);

    setTimeout(function(){
      part1.style.display = 'none';
      part2.style.display = 'inline-block';
    },delay);

    return;
  }
  
  hideInitialContent('.initial', '.initial2', 3000);
  
  const textOutput = document.querySelector('.second');
  let content = "Welcome to my resume page. \n \n  My name is Fernando."
  let i =0;
  let contentText ="Welcome to my resume page. <br> <br>  My name is Fernando.&#8201;";
  let contentText2 ="Welcome to my resume page. <br> <br> My name is Fernando.|";



  //function to show typing text

    function showText () {
      
      if (i < content.length){
        if (content.charAt(i) === '\n'){
          textOutput.innerHTML += '<br>';
        }else if (content.charAt(i)=== '\b'){
          textOutput.innerHTML += '&nbsp;';
        }else{
          textOutput.innerHTML += content.charAt(i);
        }
        i++;
      }else {
        clearInterval(timer);
        textOutput.innerHTML += '|';
        i =0;
        setInterval(function(){
          if (i===0){
            textOutput.innerHTML = contentText2;
            i=1;
          }else{
            textOutput.innerHTML = contentText;
            i=0;
          }
        },400)
      };
    };
  setTimeout(()=>{
    timer = setInterval(showText, 75);
  },3500);

  //transition to show and hide part 2 & actual content

  function secondThirdContent (element1, element2, element3, delay) {
    const part1 = document.querySelector(element1);
    const part2 = document.querySelector(element2);
    const part3 = document.querySelector(element3);
  
    setTimeout(function() {
      part1.style.display = 'none';
      part2.style.display = 'flex';
      part3.style.display = 'grid';
    }, delay);

    return;
  };
  
  secondThirdContent('.initial-container','.sidebar-container','.actual-content',11100);


  //skip animation 

  const skipButton = document.querySelector('.skip-button');

  function skipAnimation() {
    secondThirdContent('.initial-container','.sidebar-container','.actual-content', 0);
  }

  skipButton.addEventListener('click', skipAnimation);


// Shrink and open side bar 
  const expandCollapse = document.querySelector(".shrink-open-button");

  expandCollapse.addEventListener('click', function(){
    expandSidebar();
  });

  function expandSidebar(){
    document.querySelector("body").classList.toggle("short");
    
  }


});

