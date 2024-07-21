var t1 = gsap.timeline()

t1.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})

t1.to("#page1",{
    y:"30vh",
    delay:1,
    duration:1
})

t1.to("#page1",{
    y:"0vh",
    scale:1,
    roatate:360,
    duration:0.8
})