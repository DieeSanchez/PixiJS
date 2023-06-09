import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

window.addEventListener("resize", ()=>{
	console.log("resized");
	const scaleX = window.innerWidth /app.screen.width;
	const scaleY = window.innerHeight /app.screen.height;
	const scale = Math.min(scaleX, scaleY);

	const screenWidth = app.screen.width * scale;
	const screenHeight = app.screen.height * scale;

	app.view.style!.width = screenWidth + "px";
	app.view.style!.height = screenHeight + "px";
})

Loader.shared.add(
	{url: "./messi.png", name:"Messi"}
);


Loader.shared.onComplete.add(()=>{

	const clampy: Sprite = Sprite.from("Messi");
	console.log ("Hola mundo!", clampy.width, clampy.height);
    
	//clampy.anchor.set(0.5);
	//clampy.x = app.screen.width / 2;
	//clampy.y = app.screen.height / 2;
	clampy.x=0;
	clampy.y=0;
	app.stage.addChild(clampy);
});
Loader.shared.load();