document.addEventListener("DOMContentLoaded",function(){ 

  let buttonai=document.getElementById("buttonai")
  let buttonteaching=document.getElementById("buttonteaching")
 
     //  buuton1=0;
             buttonai.addEventListener("click",function(){
             buttonteaching.style.cssText="background-color:white;color:black";
             buttonai.style.cssText="background-color:black; color:white"; 
            
         })
 
 
         buttonteaching.addEventListener("click",function(){
         buttonteaching.style.cssText="background-color:black;color:white";
         buttonai.style.cssText="background-color:white; color:black";
        
        })
 
 
   // when i click saftey in nav bar
 
   
   let safteyNav=document.getElementById("saftey_nav")
   let texts_saftey=document.getElementById("texts")
 
   // texts_saftey.style.cssText="transition:transform 1s ease 1s"
 
   safteyNav.addEventListener("click",function(){
     setTimeout(function(){
       texts_saftey.style.cssText="transform:translateY(30px);transition:transform 0.2s ease 0.1s, opacity 0.2s ease 0.1s;opacity:1;"
     },100)
 
 
     setTimeout(function(){
       attext_l.style.cssText="transform:translateY(30px);transition:transform  0.2s ease 0.3s ,opacity 0.2s ease 0.3s;opacity:1;"
      },300);
 
      setTimeout(function(){
       everytext_l.style.cssText="transform:translateY(30px);transition:transform 0.2s ease 0.4s,opacity 0.2s ease 0.4s;opacity:1";
 
      },400);
      setTimeout(function(){
       steptext_l.style.cssText="transform:translateY(30px);transition:transform 0.2s ease 0.5s,opacity 0.2s ease 0.5s ;opacity:1";
 
      },500);
 
     //  setting the  Time out for the ais potential which is after the saftey at the every step
      setTimeout(function(){
       long.style.cssText="opacity:1;transition:opacity 0.5 ease 0s";
       // saftey_long_text_parent=
      },1000);
     })
 
     //  setting the Time out for the green tick mark in the saftey.html
     // document.addEventListener("DOMContentLoaded", function () {
     let green=document.getElementById("green");
     setTimeout(function(){
       green.classList.remove('hidden');
       green.classList.add("flex", "justify-center" ,"items-center")
     },5000);
 
     let redboxnumber_2=document.getElementById("redbox")
       setTimeout(function(){
         redboxnumber_2.classList.remove('opacity-0');
         // redboxnumber_2.classList.add("flex", "justify-center" ,"items-center")
 
       },1600)
     
     
      console.log("hello")
 
    })
 

    
    let research=document.getElementById("researchsaftey");
   let researchcontent=document.getElementById("researchcontentsaftey");

research.addEventListener("mouseover",function(){
    researchcontent.style.cssText="display:block"

    }),

    // researchcontent .addEventListener("mouseover",function(){
    //     researchcontent .style.cssText="display:none";
    // });
    
    

research.addEventListener("mouseleave",function(){
    researchcontent.style.cssText="display:none"
})


// // this is for the product in the navbar(when i mousemovethe product box want to visible)
let product=document.getElementById("productsaftey");
let productcontent=document.getElementById("productcontent");

product.addEventListener("mouseover",function(){
    productcontent.style.cssText="display:block";
});


productcontent.addEventListener("mouseover",function(){
    productcontent.style.cssText="display:none";
});


// // // this is for the company in the navbar(when i mousemove on the company  to want to visible the box)
let company=document.getElementById("companysaftey");
let companyContent=document.getElementById("companyContent");

company.addEventListener("mouseover",function(){
    companyContent.style.cssText="display:block";
})

companyContent.addEventListener("mouseover",function(){
    companyContent.style.cssText="display:none";
})


//   when click on the search icon and thh search icon should rotate 

    //  when i click the icon move to left
let safteySearch = document.getElementById("safteySearch")
safteySearch.addEventListener("mouseover", function(){
 console.log("helo")
safteySearch.style.cssText="transform:rotate(90deg) scale(1.1);transition:transform 0.2s ease-in-out "

})



//  when i mouse hover on the (after the nav div) next main div the search icon should move to left to right
let afternav_nextfulldiv=document.getElementById     ("afternav_nextfulldiv")
afternav_nextfulldiv.addEventListener("mouseover",function(){
  safteySearch.style.cssText="transform:rotate(0deg);transition:transform 0.2s ease-in-out "
}) 
     //  when i mouse hover on the (after the nav div) next main div the search icon should move to left to right

// finish of the rotate  when click on the search icon and thh search icon should rotate 


//    when i click on the search icon the extra page should open and that page should visible.
let turni=0;
safteySearch.addEventListener("click",function(){
 if(turni == 0){
  newpage_of_searchclick.style.cssText="display:block";
   turni++;
 }
 else{
  newpage_of_searchclick.style.cssText="display:hidden";
 console.log("hello")
 turni--;
 }  
})
