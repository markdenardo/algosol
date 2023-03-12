//ideon
// by MDN @markdenardo
const f = () => a.fft[0]
s0.initVideo("https://media1.giphy.com/media/eUX0LVWUUbtLaAI5HT/giphy.mp4")
s1.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZkNmFmMWJlZTM1NjVmODc5NjhlMGIxMGI3N2NhMjQ0NmRmNTc2NyZjdD1n/DkleR7V8RMtrim0cH5/giphy.mp4")
s2.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzEyZDUyODk0YWYwYzc2ZjExZDQ1ZjQ5OGM5MjAzODFmZGI0MThmYiZjdD1n/fvCoIEB8YtKghURZcA/giphy.mp4")
src(s0)
	.pixelate(100, 100)
	.add(s1, f)
	.add(s2, f)
	.out(o0)
render(o0)
