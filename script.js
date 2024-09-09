gsap.from("#page1 .circle",{
rotate: 720,
duration: 2,
scale:0,
scrollTrigger:{
    trigger:"#page1 .circle",
    scroller:"body",
    // markers:true,
    start: "top 40%",
    end: "top 40%",
    scrub:2
}
})
gsap.from("#page2 .circle2",{
rotate: 720,
duration: 2,
scale:0,
scrollTrigger:{
    trigger:"#page2 .circle2",
    scroller:"body",
    // markers:true,
    start: "top 40%",
    end: "top 40%",
    scrub:2
}
})
gsap.from("#page3 .circle3",{
rotate: 720,
duration: 2,
scale:0,
scrollTrigger:{
    trigger:"#page3 .circle3",
    scroller:"body",
    // markers:true,
    start: "top 40%",
    end: "top 40%",
    scrub:2
}
})