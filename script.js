// // const { document } = require("postcss");

// this is for the reserch  in navbar(when i mousemove  the reserch box whant to visible)
// document.addEventListener("DOMContentLoaded",function(){ 
let research=document.getElementById("research");
let researchcontent=document.getElementById("researchcontent");

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
let product=document.getElementById("product");
let productcontent=document.getElementById("productcontent");

product.addEventListener("mouseover",function(){
    productcontent.style.cssText="display:block";
});


productcontent.addEventListener("mouseover",function(){
    productcontent.style.cssText="display:none";
});


// // // this is for the company in the navbar(when i mousemove on the company  to want to visible the box)
let company=document.getElementById("company");
let companyContent=document.getElementById("companyContent");

company.addEventListener("mouseover",function(){
    companyContent.style.cssText="display:block";
})

companyContent.addEventListener("mouseover",function(){
    companyContent.style.cssText="display:none";
})

//  when i mouse move from the 1st scroling box to second scroling box there i wnat a white background

  let  scrollingbox3 = document.getElementById("scrollingbox3")
  let  bcircle3 =document.getElementById("bcircle3")
  let  butwo=document.getElementById("butwo");
  let  buone=document.getElementById("buone");
  let  bufour=document.getElementById("bufour")



  // let  bcircle4 =document.getElementById("bcircle4")

  scrollingbox3.addEventListener("mouseover",function(){
   console.log("hello")
  bcircle3.style.cssText="background-color:white";
  bufour.style.cssText="background-color:rgb(23, 23, 23)";
  butwo.style.cssText="background-color:rgb(23, 23, 23)";
  buone.style.cssText="background-color:rgb(23, 23, 23)";



  // bcircle4.style.cssText="background-color:rgb(23,23,23)"

  })

  

   

   let  scrolboxtwo = document.getElementById("scrolboxtwo")
  // let  bcircle3 =document.getElementById("bcircle3")

  scrolboxtwo.addEventListener("mouseover",function(){
   console.log("hello")
   butwo.style.cssText="background-color:white";
    bufour.style.cssText="background-color:rgb(23, 23, 23)";
   bcircle3.style.cssText="background-color:rgb(23, 23, 23)";
   buone.style.cssText="background-color:rgb(23, 23, 23)";


  })


   let  scrollingbox1 = document.getElementById("scrollingbox1")
  // let  bcircle3 =document.getElementById("bcircle3")

  scrollingbox1.addEventListener("mouseover",function(){
   console.log("hello")
   buone.style.cssText="background-color:white";
   bufour.style.cssText="background-color:rgb(23, 23, 23)";
   bcircle3.style.cssText="background-color:rgb(23, 23, 23)";
   butwo.style.cssText="background-color:rgb(23, 23, 23)";

  })


  let scrolboxfour  = document.getElementById("scrolboxfour");
  // let  bcircle3 =document.getElementById("bcircle3")

   scrolboxfour.addEventListener("mouseover",function(){
   console.log("hello");
   bufour.style.backgroundColor="white";
   buone.style.cssText="background-color:rgb(23, 23, 23)";
   bcircle3.style.cssText="background-color:rgb(23, 23, 23)";
   butwo.style.cssText="background-color:rgb(23, 23, 23)";
  })



//   when click on the search icon and thh search icon should rotate 
  let turniconSearch = document.getElementById("turniconSearch")
   turniconSearch.addEventListener("mouseover", function(){
    console.log("helo")
    turniconSearch.style.cssText="transform:rotate(90deg) scale(1.1);transition:transform 0.2s ease-in-out "
   
   })


//    when i click on the search icon the extra page should open and that page should visible.
   let turni=0;
   turniconSearch.addEventListener("click",function(){
    if(turni == 0){
      pressSearch.style.cssText="display:block";
      turni++;
    }
    else{
    pressSearch.style.cssText="display:hidden";
    console.log("hello")
    turni--;
    }  
   })




   let headscrooll =document.getElementById("headscrooll")
    headscrooll.addEventListener("mouseover",function(){
          turniconSearch.style.cssText="transform:rotate(0deg);transition:transform 0.2s ease-in-out "

    })

    // js for the  press return to serch when i click the searc button the another page wants to open

    // let turn=document.getElementById("turniconSearch")
    // pressSearch.addEventListener("click",function(){
    //     pressSearch.style.cssText="display:block";
    // })
   
































//  in the saftey.html we are using this
// document.addEventListener("DOMContentLoaded",function(){ 

//  let buttonai=document.getElementById("buttonai")
//  let buttonteaching=document.getElementById("buttonteaching")

//     //  buuton1=0;
//             buttonai.addEventListener("click",function(){
//             buttonteaching.style.cssText="background-color:white;color:black";
//             buttonai.style.cssText="background-color:black; color:white"; 
           
//         })


//         buttonteaching.addEventListener("click",function(){
//         buttonteaching.style.cssText="background-color:black;color:white";
//         buttonai.style.cssText="background-color:white; color:black";
       
//        })


//   // when i click saftey in nav bar

  
//   let safteyNav=document.getElementById("saftey_nav")
//   let texts_saftey=document.getElementById("texts")

//   // texts_saftey.style.cssText="transition:transform 1s ease 1s"

//   safteyNav.addEventListener("click",function(){
//     setTimeout(function(){
//       texts_saftey.style.cssText="transform:translateY(30px);transition:transform 0.2s ease 0.1s, opacity 0.2s ease 0.1s;opacity:1;"
//     },100)


//     setTimeout(function(){
//       attext_l.style.cssText="transform:translateY(30px);transition:transform  0.2s ease 0.3s ,opacity 0.2s ease 0.3s;opacity:1;"
//      },300);

//      setTimeout(function(){
//       everytext_l.style.cssText="transform:translateY(30px);transition:transform 0.2s ease 0.4s,opacity 0.2s ease 0.4s;opacity:1";

//      },400);
//      setTimeout(function(){
//       steptext_l.style.cssText="transform:translateY(30px);transition:transform 0.2s ease 0.5s,opacity 0.2s ease 0.5s ;opacity:1";

//      },500);

//     //  setting the  Time out for the ais potential which is after the saftey at the every step
//      setTimeout(function(){
//       long.style.cssText="opacity:1;transition:opacity 0.5 ease 0s";
//       // saftey_long_text_parent=
//      },1000);
//     })

//     //  setting the Time out for the green tick mark in the saftey.html
//     // document.addEventListener("DOMContentLoaded", function () {
//     let green=document.getElementById("green");
//     setTimeout(function(){
//       green.classList.remove('hidden');
//       green.classList.add("flex", "justify-center" ,"items-center")
//     },5000);

//     let redboxnumber_2=document.getElementById("redbox")
//       setTimeout(function(){
//         redboxnumber_2.classList.remove('opacity-0');
//         // redboxnumber_2.classList.add("flex", "justify-center" ,"items-center")

//       },1600)
    
    
//      console.log("hello")

//    })

