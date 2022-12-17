//	solstice slideshow
//	mdn 2022

const f=(()=>a.fft[0])
const pi=(Math.random(Math.PI))
const t=(()=>time)
const osc1=(()=>osc(1,1,1))
shape(3).rotate(t,1).modulate(o0).modulateScrollX(osc1()).out(o0)

/*const sh=(s,o,m)=>(shape(s).repeat(t,1).kaleid(t).scale(pi).rotate(t,0.1).out(o))
sh(pi,o0,o1)
render(o0)*/

//	bh
/*
s0.initVideo("https://media0.giphy.com/media/YZdNFzYZIEi0cCaSpn/giphy.mp4")
s1.initVideo("https://media0.giphy.com/media/YZdNFzYZIEi0cCaSpn/giphy.mp4")
s2.initVideo("https://media2.giphy.com/media/fdd85RxytnbqU58hwP/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/FoW0Gxurx5dLwzCqqj/giphy.mp4")
src(s0)
	// .invert()
	//.blend(s2,f)
	//.add(src(s3))
//  .out(o0)
*/

//	ideon
/*
s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")
s1.initVideo("https://media0.giphy.com/media/ebONPXiwdiodPpSEN4/giphy.mp4")
s2.initVideo("https://media3.giphy.com/media/DkleR7V8RMtrim0cH5/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/fvCoIEB8YtKghURZcA/giphy.mp4")
src(s1)
	//.pixelate(100,100)
	//.modulateScrollX(o0)
	//.blend(o0)
  	.out(o0)
render(o0)
*/

//	kiki
/*
s0.initVideo("https://media2.giphy.com/media/k04WlBzKhpd04/giphy.mp4")
s1.initVideo("https://media4.giphy.com/media/3ohzdJVHUqgiXIILUQ/giphy.mp4")
s2.initVideo("https://media3.giphy.com/media/3ohzdD0XoSiqaU8OMo/giphy.mp4")
s3.initVideo("https://media3.giphy.com/media/3ohzdEQAcSxII2n2HC/giphy.mp4")
src(s0)
  .blend(s1,f)
  .add(s2,0.1)
  .add(src(s3)
       .pixelate(100,100),1)
  .out(o0)
render(o0)
src(s3).blend(src(s3).pixelate(50,50),f).out(o3)
render(o3)
src(o0).blend(o3).out(o2)
render(o2)
*/

/*
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// a fractal explorer using rotations
// ritchse aka geisha

await import("https://hydra-extensions.glitch.me/hydra-nowrap.js")
await import("https://hydra-extensions.glitch.me/hydra-outputs.js")
await import("https://hydra-extensions.glitch.me/hydra-canvas.js")
await import("https://hydra-extensions.glitch.me/hydra-mouse.js")
await import("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/lib-noise.js")

setResolution(720,720)
oS.setNearest()
oS.setClamp()
canvas.setRelativeSize(1)
canvas.setLinear()
canvas.setAlign('center')

setFunction({
	name: 'triangle',
    type: 'src',
  	inputs: [],
    glsl: `
    	float l = abs(0.5-_st.x);
        float c = l <= (_st.y*0.5) ? 1.0 : 0.0;
        c *= _st.y <= 1.0 ? 1.0 : 0.0; // feisimo esto
        return vec4(c);
    `
})

const BRANCHES = 6.66
const MASK = shape(3,.9,0) // an inverted triangle
//
input = ()=> src(o0).mask(MASK)
dist = ()=> mouse.cposy
scale = ()=> 0.5-(mouse.cposx/2)
feedback = ()=> input().scale(scale,1,1,.5,0).scrollY(dist)
feedbacks = (n=3)=> {
  	tex = solid(0,0,0,0)
	for(a=0; a <= Math.PI*2; a+=Math.PI*2/n)
      tex.layer(feedback().rotate(a))
  	return tex;
}
//
feedbacks(BRANCHES)
	.luma(.03,.1)
	.add(colornoise(1,.2),.2)
	.hue(.1).color(.92,.99,1.01).mult(gradient(),.1)
  	.saturate(1.4)
	.blend(o0,.5)
	.rotate(()=>time,1)
    .out()
 */
