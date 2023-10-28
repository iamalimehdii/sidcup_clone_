var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function(dets){  
    crsr.style.left = dets.x+30  +"px"
    crsr.style.top = dets.y  +"px"
    crsrb.style.left = dets.x - 200 +"px"
    crsrb.style.top = dets.y -200 +"px"

})


var h4an = document.querySelectorAll("#nav, img, .card, .elem"); // if put only query selector then it would catch only one h4
h4an.forEach(function(elem)
{
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #91B508";
        crsr.style.backgroundColor = "#91B508";
    })
});





gsap.to("#nav", {
    backgroundColor: "#000",
    duration:0.5,
    height: "130px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -9%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    //stagger:0.4, //come one to one
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    //stagger:0.4, //come one to one
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 45%",
        end:"top 47",
        scrub:4,

    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 45%",
        end:"top 47%",
        scrub:4,

    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 90%",
        end:"top 30%",
        scrub:4,


    }
})