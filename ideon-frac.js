

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// sierpinski triangle made with only feedback
// ritchse aka geisha

await import("https://hydra-extensions.glitch.me/hydra-nowrap.js")
await import("https://hydra-extensions.glitch.me/hydra-outputs.js")
await import("https://hydra-extensions.glitch.me/hydra-canvas.js")
await import("https://hydra-extensions.glitch.me/hydra-mouse.js")
await import("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/lib-noise.js")

setResolution(1000,1000)
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

modtoggle = 1
window.onclick = ()=> modtoggle ^= 1

input = ()=> src(o0).mask(triangle())
feedback = ()=> input().scale(.5).modulateScale(input(),()=>modtoggle*.2)
dist = ()=> Math.hypot(mouse.cposx,mouse.cposy)/2
ndist = ()=> 0-dist()
solid(0,0,0,0)
	.layer(feedback().scroll(dist,ndist))
	.layer(feedback().scroll(ndist,ndist))
	.layer(feedback().scroll(0,dist))
	.add(colornoise(1,.2),.23)
	.hue(.04).color(1.02,.84,.98).saturate(1.5)
	.blend(src(o0).scale(1.005),.75)
	.out(o0)
//ideon sketch mdn 2022
const f=(()=>a.fft[0])
s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")
s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")
s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")
s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")

src(s0).pixelate(100,100).out(o0)
render(o0)
src(s0).pixelate(100,100).blend(src(o0).rotate(()=>time,1),f).out(o1)
render(o1)
