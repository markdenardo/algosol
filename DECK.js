


//	solstice slideshow
//	mdn 2022

const f=(()=>a.fft[0])
const pi=(Math.random(Math.PI))
const t=(()=>time)
const osc1=(()=>osc(1,1,1))
shape().rotate(t,1).modulate(o0).modulateScrollX(osc1()).out(o0)

//	bh
/*s0.initVideo("https://media0.giphy.com/media/YZdNFzYZIEi0cCaSpn/giphy.mp4")
s1.initVideo("https://media0.giphy.com/media/YZdNFzYZIEi0cCaSpn/giphy.mp4")
s2.initVideo("https://media2.giphy.com/media/fdd85RxytnbqU58hwP/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/FoW0Gxurx5dLwzCqqj/giphy.mp4")
src(s0).pixelate(100,100)
  .invert()
  .blend(s1,f)
  .out(o0)*/

/*bpm =300
const t =(()=>time)
const pi=(()=>Math.random(Math.PI))
const f=(()=>a.fft[0])
const sh=(s,o,m)=>(shape(s).repeat(t,1).kaleid(t).scale(pi).rotate(t,0.1).out(o))
sh(pi,o0,o1)
render(o0)*/

//	ideon
/*s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")
s1.initVideo("https://media0.giphy.com/media/ebONPXiwdiodPpSEN4/giphy.mp4")
s2.initVideo("https://media3.giphy.com/media/DkleR7V8RMtrim0cH5/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/fvCoIEB8YtKghURZcA/giphy.mp4")
src(s3).pixelate(100,100).out(o0)
render(o0)*/
//	kiki
/*s0.initVideo("https://media2.giphy.com/media/k04WlBzKhpd04/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/3ohzdJVHUqgiXIILUQ/giphy.mp4")
s2.initVideo("https://media3.giphy.com/media/3ohzdD0XoSiqaU8OMo/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/3ohzdEQAcSxII2n2HC/giphy.mp4")
src(s0).blend(s1,f).add(s2,0.1).add(src(s3).pixelate(100,100),1).out(o0)
render(o0)
src(s3).blend(src(s3).pixelate(50,50),f).out(o3)
render(o3)
src(o0).blend(o3).out(o2)
render(o2)*/

//lava
/*s0.initVideo("https://media0.giphy.com/media/CbChHE5Vy5gr3KxHi9/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/vMhAsatslElJw41Qcu/giphy.mp4")
s2.initVideo("https://media0.giphy.com/media/yhylFVag9gRAx9mia6/giphy.mp4")
src(s0)
  .blend(s1,()=>-mouse.x).add(s2,0.5)
  .pixelate(()=>-mouse.x*0.1,()=>-mouse.y*0.1)
render(o0)*/
