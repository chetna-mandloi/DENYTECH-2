var tl = gsap.timeline()

// tl.from("nav-part1 h4,.nav-part1 i,.nav-part2 h4,.nav-part3>button",{
//   y:-6,
//   opacity:2,
//   duration:0.8,
//   stagger:0.3
// })
tl.from(".nav-part1, .nav-part2,.nav-part3",{
  y:-20,
  opacity:0,
  duration:1,
  stagger:0.5
})

tl.to("h1",{
  y:-10,
  // repeat:-1,
  // yoyo:true,
  fontweight:600,
  color:"rgb(71,50,50)",
  colo:"rgb(91,98,99)"
})


tl.from("h1",{
  opacity:0,
  scale:2,
  fontWeight:800
})
tl.from("img",{
  opacity:0,
  scale:1.7,
  duration:1,
  stagger:0.8,
  rotate:180,

})