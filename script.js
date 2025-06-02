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

page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        start:"top 70%",
        end:"bottom 20%",
        scrub:1,
        // markers:true,
    }
});
tl2.from(".services",{
    y:30,
    opacity:0,
    duration :0.5
})
tl2.from(".card-1.leftGsap",{
    x:-300,
    duration : 1,
    opacity : 0,
},"anim1")                                     //"anim" random word , for same timeline , remove it from both and you can see diff.
tl2.from(".card-2.rightGsap",{
    x:300,
    duration:1,
    opacity :0,
},"anim1")
tl2.from(".card-3.leftGsap",{
    x:-300,
    duration : 1,
    opacity : 0,
},"anim2")
tl2.from(".card-4.rightGsap",{
    x:300,
    duration:1,
    opacity :0,
},"anim2")


var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-3",
        start:"top 30%",
        end:"top 10%",
        scrub:1,
        markers:true,
    }
});

tl3.from(".overAllcontainer",{
    opacity:0,
    // y:30,
    duration : 0.5,
    scale:0
})


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