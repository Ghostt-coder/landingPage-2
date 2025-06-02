function page1Animation(){
    var tl = gsap.timeline();

tl.from("nav h1 ,nav h4, nav button", {
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.1
})

tl.from(".center-1 h1",{
    x:-200,
    opacity:0,
    duration : 0.5,
})
tl.from(".center-1 p",{
    x:-100,
    opacity:0,
    duration : 0.4,
})
tl.from(".center button",{
    opacity : 0,
    duration : 0.4
})

// Center-2 image animation
tl.from(".center-2 img",{
    opacity:0,
    duration:0.5,
    x:50,
})

// Bottom images animation
gsap.from(".section1Bottom img",{
    opacity : 0,
    y:30,
    stagger:0.15,
    duration:0.6,
    scrollTrigger:{
        trigger:".section1Bottom",
        start:"top 50%",
        toggleActions: "play none none reverse"
    }
})
}

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        scroller:"body",
        markers:true,
        start:"top 50%",
    }
});



// gsap.from(".services h3",{
//     x:-100,
//     opacity : 0,
//     duration : 0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })