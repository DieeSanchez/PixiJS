import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});

Assets.add("Messi","./messi.png")


Assets.load(["Messi"]).then(()=>{

	const clampy: Sprite = Sprite.from("Messi");
	console.log ("Hola mundo!", clampy.width, clampy.height);
    
	//clampy.anchor.set(0.5);
	//clampy.x = app.screen.width / 2;
	//clampy.y = app.screen.height / 2;
	clampy.x=0;
	clampy.y=0;
	app.stage.addChild(clampy);
});