let game

window.addEventListener('load', ()=>{

	let config = {
		type: Phaser.AUTO,
		width:  window.innerWidth,// * window.devicePixelRatio,
		height: window.innerHeight,// * window.devicePixelRatio,
		backgroundColor: 0x999999,
		type: Phaser.CANVAS,
	  scale: {
	    mode:Phaser.Scale.FIT,
	    //mode:Phaser.Scale.File,
	    autoCenter:Phaser.Scale.CENTER_BOTH
	  },
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 200 }
			}
		},
		scene: [Scene1, Scene2, Scene3, Scene4, Scene5, End, End1] //ChooseDress, ChooseBag, ChooseAccessory, Final]
	}

	game = new Phaser.Game(config)
})

const gameAssets = {
	say1: 'say1',
	say2: 'say2',
	say3: 'say3',
	say4: 'say4',
	chooseDressBlock: 'chooseYourDressAll',
	bgDark: 'bg_dark',
	bg: 'bg',
	cursor: 'cursor',
  dress0: 'dress0',
	dress0: 'dress0',
	dress1: 'dress1',
	dress2: 'dress2',
	dress1Button: 'dress1_button',
	dress2Button: 'dress2_button',
	bag1: 'bag1',
	bag2: 'bag2',
	bag1Button: 'bag1_button',
	bag2Button: 'bag2_button',
	accessory1: 'accessory1',
	accessory2: 'accessory2',
  accessory1Button: 'accessory1_button',
  accessory2Button: 'accessory2_button',
	accessory3Button: 'accessory3_button',
  bar0: 'bar0',
  bar1: 'bar1',
  bar2: 'bar2',
  bar3: 'bar3',
  bar4: 'bar4',
  faceShy: 'faceShy',
  faceJoy: 'faceJoy',
  faceSurprised: 'faceSurprised',
  faceBasic: 'faceBasic',
	faceFlirty: 'faceFlirty',
	faceSad: 'faceSad',
  hairFront: 'hairFront',
  body: 'body',
	dress00: 'dress00',
	hairBack: 'hairBack',
	dress1Object: 'dress1Object',
	dress2Object: 'dress2Object',
	dress0Object: 'dress0Object',
	bag1Object: 'bag1Object',
	bag2Object: 'bag2Object',
	choker1: 'choker1',
	choker2: 'choker2',
	man: 'man',
	club: 'club',
	play: 'play',
	retry: 'retry'


}

class Scene1 extends Phaser.Scene {


	constructor() {
	  super('Scene1');
	}

	init() {

			console.log('hi!');
	    this.sceneState = gameAssets.dress0Object;

	  this.sceneAssets = [

	    gameAssets.bg,
	    gameAssets.say1,
	    gameAssets.say2,
	    gameAssets.faceShy,
			gameAssets.faceSad,
	    gameAssets.faceJoy,
	    gameAssets.faceSurprised,
	    gameAssets.faceBasic,
	    gameAssets.body,
	    gameAssets.hairFront,
			gameAssets.hairBack,
			gameAssets.dress0Object,
			gameAssets.dress1Object,
			gameAssets.dress2Object,
			gameAssets.faceFlirty

	  ]

	}

  preload() {

    loadAssets(this, this.sceneAssets);

		console.log('preload1');

  }

  create() {

		console.log('hi!');

		var faces = [gameAssets.faceBasic];
		faces.push(gameAssets.faceShy,gameAssets.faceJoy,gameAssets.faceSurprised,gameAssets.faceSad, gameAssets.faceFlirty);

		var setBody = [gameAssets.hairFront]
		setBody.push(gameAssets.body,gameAssets.hairBack);

		var closes = [gameAssets.dress0Object];

		var animSetUp = "start";

		count (this, closes, setBody, faces, animSetUp);

		initiateIntro(this);

	}

}

class Scene2 extends Phaser.Scene {

  constructor() {

    super('Scene2');

  }

	init(data) {


		this.sceneState = data

		console.log("NN");

		this.sceneAssets = [
				gameAssets.bg,
        gameAssets.bar2,
				gameAssets.cursor,
				gameAssets.dress1Button,
				gameAssets.dress2Button,
				gameAssets.chooseDressBlock,
        gameAssets.faceShy,
        gameAssets.faceJoy,
        gameAssets.faceSurprised,
        gameAssets.faceBasic,
				gameAssets.hairFront,
				gameAssets.body,
				gameAssets.hairBack,
				gameAssets.dress1Object,
				gameAssets.dress2Object,
				gameAssets.bag1Object,
				gameAssets.bag2Object,
				gameAssets.dress0Object,
				gameAssets.faceFlirty
			]
		}

  preload() {

		loadAssets(this, this.sceneAssets)

	}

	create() {

			var faces = [gameAssets.faceBasic]
			faces.push(gameAssets.faceShy,gameAssets.faceJoy,gameAssets.faceSurprised,gameAssets.faceBasic,gameAssets.faceSad,gameAssets.faceFlirty);

			var setBody = [gameAssets.hairFront]
				setBody.push(gameAssets.body,gameAssets.hairBack);


			var closes = [gameAssets.dress0Object];
			//closes.push(gameAssets.bag2Object,gameAssets.choker1);

			var choose = [gameAssets.dress1Object]
			choose.push(gameAssets.dress2Object);

			var buttons  = [gameAssets.dress1Button]
				buttons.push(gameAssets.dress2Button);

				var animSetUp = "main";

			console.log(this.sceneState);
			console.log(closes);

			count (this, closes, setBody, faces, animSetUp);

			menu (this, 'Scene3', choose, buttons, []);


		const bar = this.add.image(game.config.width/2,50, gameAssets.chooseDressBlock);
		bar.setScale(2)

    const bar2 = this.add.image(game.config.width/2,30, gameAssets.bar2);
     		bar2.setVisible(false);
				bar2.setScale(2)

    setTimeout(function (){
      console.log('h1');
      bar.setVisible(false);
      bar2.setVisible(true);
      //need add bg hide and bg in initil scene
    }, 6000);




		//setDressSizeF.bind(girlObj)();

		//initiateHelperAnimation(this, leftButton, rightButton, cursor);


	}
}

class Scene3 extends Phaser.Scene {

	constructor() {

	  super('Scene3');

	}

	init(data) {

		this.sceneState = data

		console.log(this.sceneState);

		this.sceneAssets = [
			gameAssets.bg,
			gameAssets.bag1Button,
			gameAssets.bag2Button,
			gameAssets.bar3,
			gameAssets.cursor,
			gameAssets.faceShy,
			gameAssets.faceSad,
	    gameAssets.faceJoy,
	    gameAssets.faceSurprised,
	    gameAssets.faceBasic,
			gameAssets.hairFront,
			gameAssets.body,
			gameAssets.hairBack,
			gameAssets.dress1Object,
			gameAssets.dress2Object,
			gameAssets.bag1Object,
			gameAssets.bag2Object,
			gameAssets.faceFlirty
		]

	}

	preload() {

		loadAssets(this, this.sceneAssets)

	}

	create() {


		console.log("scene3");
		console.log(this.stateStage);

		var faces = [gameAssets.faceBasic];
		faces.push(gameAssets.faceShy,gameAssets.faceJoy,gameAssets.faceSurprised,gameAssets.faceSad,gameAssets.faceFlirty);

		var setBody = [gameAssets.hairFront]
		setBody.push(gameAssets.body,gameAssets.hairBack);

		var closes = this.sceneState;

		console.log(closes);

		var choose = [gameAssets.bag1Object]
		choose.push(gameAssets.bag2Object);

		var buttons  = [gameAssets.bag1Button]
		buttons.push(gameAssets.bag2Button);

		console.log(this.sceneState);
		console.log(closes);

		var animSetUp = "main";

		count (this, closes, setBody, faces, animSetUp);

		menu (this, 'Scene4', choose, buttons, closes);

		const bar3 = this.add.image(game.config.width/2,30, gameAssets.bar3);
		bar3.setScale(2)

	}

}

class Scene4 extends Phaser.Scene {

	constructor(config) {

	  super('Scene4');

	}

	init(data) {

	  this.sceneState = data

	  this.sceneAssets = [
	    gameAssets.bg,
	    gameAssets.accessory1Button,
	    gameAssets.accessory2Button,
			gameAssets.dress1Object,
			gameAssets.dress2Object,
	    gameAssets.bar4,
	    gameAssets.cursor,
			gameAssets.bag1Object,
			gameAssets.bag2Object,
			gameAssets.cursor,
			gameAssets.faceShy,
			gameAssets.faceSad,
	    gameAssets.faceJoy,
	    gameAssets.faceSurprised,
	    gameAssets.faceBasic,
			gameAssets.hairFront,
			gameAssets.body,
			gameAssets.hairBack,
			gameAssets.choker1,
			gameAssets.choker2,
			gameAssets.faceFlirty
	    //getGirlLook(this.sceneState),
	  ]
	}

	preload() {

	  loadAssets(this, this.sceneAssets)
	}

	create() {

		console.log(this.stateStage);

		var faces = [gameAssets.faceBasic];
			faces.push(gameAssets.faceShy,gameAssets.faceJoy,gameAssets.faceSurprised,gameAssets.faceSad,gameAssets.faceFlirty);

		var setBody = [gameAssets.hairFront]
			setBody.push(gameAssets.body,gameAssets.hairBack);

		var closes = this.sceneState;

		console.log(closes);

		var choose = [gameAssets.choker1]
		choose.push(gameAssets.choker2);

		var buttons  = [gameAssets.accessory1Button]
			buttons.push(gameAssets.accessory2Button);

		console.log(this.sceneState);
		console.log(closes);

		var animSetUp = "main";

		count (this, closes, setBody, faces, animSetUp);

		menu (this, 'Scene5', choose, buttons, closes);

		const bar4 = this.add.image(game.config.width/2,30, gameAssets.bar4);
		bar4.setScale(2)

	}

}

class Scene5 extends Phaser.Scene {

	constructor(config) {

	  super('Scene5');

	}

	init(data) {

	  this.sceneState = data
		console.log('scene5 create func');
	  this.sceneAssets = [
			gameAssets.bg,
	    gameAssets.accessory1Button,
	    gameAssets.accessory2Button,
	    gameAssets.bar4,
	    gameAssets.cursor,
			gameAssets.bag1Object,
			gameAssets.bag2Object,
			gameAssets.cursor,
			gameAssets.faceShy,
			gameAssets.faceSad,
	    gameAssets.faceJoy,
	    gameAssets.faceSurprised,
	    gameAssets.faceBasic,
			gameAssets.hairFront,
			gameAssets.body,
			gameAssets.hairBack,
			gameAssets.choker1,
			gameAssets.choker2,
			gameAssets.dress1Object,
			gameAssets.dress1Object,
			gameAssets.faceFlirty,
			gameAssets.man,
			gameAssets.say3,
			gameAssets.say4,
			gameAssets.club

	    //getGirlLook(this.sceneState),
	  ]
	}

	preload() {

	  loadAssets(this, this.sceneAssets)

	}

	create() {

	console.log('scene5 create func');

	var closes = this.sceneState;

	var faces = [gameAssets.faceBasic];
		faces.push(gameAssets.faceShy,gameAssets.faceJoy,gameAssets.faceSurprised, gameAssets.faceSad,gameAssets.faceFlirty);

	var setBody = [gameAssets.hairFront]
		setBody.push(gameAssets.body,gameAssets.hairBack);

	var choose = [gameAssets.choker1]
		choose.push(gameAssets.choker2);

	var buttons  = [gameAssets.dress1Button]
		buttons.push(gameAssets.dress2Button);

	let choise = closes[0];

	var animSetUp;

	if (choise == 'dress1Object') {
		animSetUp = "good";
	}

	if (choise == 'dress2Object') {
		animSetUp = "fail";
	}

	const say3 = this.add.image(game.config.width * 0.5, game.config.height * 0.5,gameAssets.say3)
	say3.setVisible(false)
	say3.setDepth(15)
	say3.setScale(1.3)
	const say4 = this.add.image(game.config.width * 0.5, game.config.height * 0.5,gameAssets.say4)
	say4.setVisible(false)
	say4.setDepth(15)
	say4.setScale(1.3)

	if (animSetUp == "good") {
		setTimeout(() => {say3.setVisible(true)}, 1500)
		setTimeout(() => {say3.setVisible(false)}, 3500)
		setTimeout(() => {say4.setVisible(false)
			game.scene.stop('Scene5');
			game.scene.start('End1');}, 4000)
	}

	if (animSetUp == "fail") {
		setTimeout(() => {say4.setVisible(true)}, 1500)
		setTimeout(() => {say4.setVisible(false)}, 3500)
		setTimeout(() => {say4.setVisible(false)}, 3500)
		setTimeout(() => {say4.setVisible(false)
		game.scene.stop('Scene5');
		game.scene.start('End');
		}, 4000)


	}

	console.log(animSetUp);

	count (this, closes, setBody, faces, animSetUp);

	const man = this.add.sprite(game.config.width * 0.7, game.config.height * 0.5, gameAssets.man);
	man.setScale(1.4);
	}

}

class End extends Phaser.Scene {

	constructor(config) {

	  super('End');

	}

	init() {

		console.log('End');
	  this.sceneAssets = [
			gameAssets.play,
			gameAssets.retry
	  ]
	}

	preload() {

	  loadAssets(this, this.sceneAssets)

	}

	create() {

		const play = this.add.image(game.config.width * 0.5, game.config.height * 0.8, gameAssets.retry )
		play.setScale(2).setInteractive().on('pointerup', openExternalLink, this);

		this.tweens.add({
			targets: play,
			scaleX: 2.5,
			scaleY: 2.5,
			yoyo: true,
			ease: 'Power1',
			duration: 1000,
			loop: -1,
		})

		function openExternalLink () {
		 var url = 'https://apps.apple.com/us/app/id1491717191';
		 var s = window.open(url);
		 s.focus();
		 };
	}
}

class End1 extends Phaser.Scene {

	constructor(config) {

	  super('End1');

	}

	init() {

		console.log('End1');
	  this.sceneAssets = [
		gameAssets.play,
	  ]
	}

	preload() {

	  loadAssets(this, this.sceneAssets)

	}

	create() {

		const play = this.add.image(game.config.width * 0.5, game.config.height * 0.8, gameAssets.play)
		play.setScale(2).setInteractive().on('pointerup', openExternalLink, this);

		this.tweens.add({
			targets: play,
			scaleX: 2.5,
			scaleY: 2.5,
			yoyo: true,
			ease: 'Power1',
			duration: 1000,
			loop: -1,
		})

	function openExternalLink () {
		 var url = 'https://apps.apple.com/us/app/id1491717191';
		 var s = window.open(url);
		  s.focus();
	 };
 }
}

function count (scene, closes, setBody, faces, animSetUp) {

	console.log(this);

 if (animSetUp ==  "main" || "start") {
	const bg = scene.add.sprite(game.config.width / 2, game.config.height / 2, gameAssets.bg);
	bg.setScale(2.5);
}

if (animSetUp ==  "good" || "fail") {
 const bg = scene.add.sprite(game.config.width / 2, game.config.height / 2, gameAssets.club);
 bg.setScale(1.2);
}

	const face = faces

	console.log(faces);

	const girlObj = scene.add.container(game.config.width / 2, game.config.height * 0.75);

	console.log(girlObj);

	const faceBasic = scene.add.sprite(-15, -1050, face[0]);
	faceBasic.setVisible(true);

	const faceShy = scene.add.sprite(-15, -1050, face[1]);
	faceShy.setVisible(false);

	const faceJoy = scene.add.sprite(-15, -1050, face[2]);
	faceJoy.setVisible(true);

	const faceSurprised = scene.add.sprite(-15, -1050, face[3]);
	faceSurprised.setVisible(false);

	const faceSad = scene.add.sprite(-15, -1050, face[4]);
	faceSad.setVisible(false);

	const faceFlirty = scene.add.sprite(-15, -1050, face[5]);
	faceFlirty.setVisible(false);



	if (animSetUp == "start")	{
	setTimeout(() => {faceJoy.setVisible(false);}, 500)
	setTimeout(() => {faceSurprised.setVisible(true);}, 500)
	setTimeout(() => {faceSurprised.setVisible(false);}, 2000)
	setTimeout(() => {faceJoy.setVisible(true);}, 2000)
	};

	if (animSetUp == "main")	{
	setTimeout(() => {faceJoy.setVisible(false);}, 1500)
	setTimeout(() => {faceShy.setVisible(true);}, 1500)
	setTimeout(() => {faceShy.setVisible(false);}, 4000)
	setTimeout(() => {faceFlirty.setVisible(true);}, 4000)
	setTimeout(() => {faceFlirty.setVisible(false);}, 6000)

	};

	if (animSetUp == "good")	{
	console.log("good")
	setTimeout(() => {faceJoy.setVisible(false);}, 0)
	setTimeout(() => {faceJoy.setVisible(true);}, 1500)
	girlObj.setPosition(game.config.width * 0.3, game.config.height * 0.75)


	};

	if (animSetUp == "fail")	{
		console.log("no")
	setTimeout(() => {faceJoy.setVisible(false);}, 0)
	setTimeout(() => {faceSad.setVisible(true);}, 1500)
	girlObj.setPosition(game.config.width * 0.3, game.config.height * 0.75)

	};

	const hairFront = scene.add.sprite(0, 0, setBody[0]);
	const body = scene.add.sprite(0, 0, setBody[1]);
	const hairBack = scene.add.sprite(0, 0, setBody[2]);

	const dressObject = scene.add.sprite (0, 0, closes[0]);
	const bagObject = scene.add.sprite(0, 0, closes[1]);
	const chokerObject = scene.add.sprite(0, 0, closes[2]);

	girlObj.add([ hairBack, body, dressObject, bagObject, chokerObject, faceBasic, faceSad, faceSurprised, faceJoy, faceShy, faceFlirty, hairFront]);
	//girlObj.setSize(100,100);
	//girlObj.setDisplaySize(600,  600);
	girlObj.setScale(1);

	setBody.forEach((element) => {

		if (element == 'hairFront') {
			 //console.log(this);
			hairFront.setPosition(27, -910);}


		if (element == 'hairBack') {
			 //console.log(this);
			hairBack.setPosition(27, -900);}


		if (element == 'body') {
			 //console.log(this);
			body.setPosition(0, 0);}

	});

	closes.forEach((element) => {

		if (element == 'dress0Object'){
		console.log('LOL');
		//console.log(this);
		dressObject.setPosition(-85, -222);}

		if (element == 'dress1Object'){
		console.log('LOL');
		//console.log(this);
		dressObject.setPosition(-39, -90);}

		if (element == 'dress2Object'){
		console.log('LOL');
		//console.log(this);
		dressObject.setPosition(-71, -310);}

		if (element == 'bag1Object'){
		console.log('LOL');
		//console.log(this);
		bagObject.setPosition(-150, -610);}

		if (element == 'bag2Object'){
		console.log('LOL');
		//console.log(this);
		bagObject.setPosition(-80, -450);}

		if (element == 'choker1'){
		console.log('LOL');
		 //console.log(this);
		chokerObject.setPosition(-25, -850);}

		if (element == 'choker2'){
		 console.log('LOL');
			 //console.log(this);
		 chokerObject.setPosition(5, -720);}

		});



}

function menu (scene, nextScene, choose, buttons, closes) {

	console.log(this);

	console.log(closes);

	const menu = scene.add.container(game.config.width / 2,  game.config.height * 0.83);

	 const leftButton = scene.add.image(-game.config.width * 0.25, 0, buttons[0]);
	 leftButton.setDepth(11);
	 leftButton.setScale(1.8);
	 leftButton.setInteractive();
	 leftButton.on('pointerdown', () => {

	 console.log('LB');
	 closes.push(choose[0]);
	 console.log(closes);

	 game.scene.stop(scene);
	 game.scene.start(nextScene, closes);
		 //{dress: gameAssets.dress1}
	 });

	 const rightButton = scene.add.image(game.config.width * 0.25, 0, buttons[1]);
	 rightButton.setDepth(11);
	 rightButton.setScale(1.8);
	 rightButton.setInteractive();
	 rightButton.on('pointerdown', () => {
	 closes.push(choose[1]);

	 game.scene.stop(scene);
	 game.scene.start(nextScene, closes);
	 //console.log(myArray);
	 })

	 //this.input.enableDebug(leftButton);

	 const cursor =	scene.add.image(-game.config.width * 0.25, 100, gameAssets.cursor);
	 cursor.setVisible(false);
	 cursor.setScale(2);
	 cursor.setDepth(12);

	 menu.add([leftButton, rightButton, cursor]);
	 //menu.setSize(game.config.width, game.config.width)
	 //menu.setDisplaySize(game.config.width,  game.config.width);
	 menu.setScale(1);

	 setTimeout(() => {
	 	cursor.setVisible(true);

	 	console.log(this);

	 	const cursorTimeline = scene.tweens.createTimeline({loop: -1});

	 	cursorTimeline.add({
	 			targets: [cursor, leftButton],
	 			scaleX: 1.5,
	 			scaleY: 1.5,
	 			yoyo: true,
	 			ease: 'Power1',
	 			duration: 1000,
	 			hold: 500,
	 			//onStart:function(){cursor.setVisible(true);},
	 		})
	 		.add({
	 			targets: cursor,
	 			x: (game.config.width * 0.25),
	 			duration: 500,
	 			ease: "Power1",
	 		})
	 		.add({
	 			targets: [cursor, rightButton],
	 			scaleX: 1.5,
	 			scaleY: 1.5,
	 			yoyo: true,
	 			ease: 'Power1',
	 			duration: 1000,
	 			hold: 500,
	 		})
	 		.add({
	 			targets: cursor,
	 			x: (-game.config.width * 0.25),
	 			duration: 500,
	 			ease: "Power1",
	 		})
	 		.play();

	 		scene.events.once('shutdown', () => {
	 			cursorTimeline.destroy();

	 		})
	 }, 2000)

		//initiateHelperAnimation(this, leftButton, rightButton, cursor);

}

function loadAssets(scene, assets) {
for (const asset of assets) {
	scene.load.image(asset, `../../img/${asset}.png`);
	console.log(asset);
}
}

function initiateIntro(scene) {

	console.log(this);

	const say = scene.add.container(game.config.width / 2,  game.config.height / 2);
	const say1 = scene.add.sprite(0, 0, gameAssets.say1);
	say1.setVisible(false).setDepth(10);
	const say2 = scene.add.sprite(0, 0, gameAssets.say2);
	say2.setVisible(false).setDepth(10);
	say.add([say1, say2]);

	setTimeout(() => {

		const intro = scene.tweens.createTimeline();

			intro.add(

				{

		    targets: say1,
		    scaleX:1.5,
		    scaleY:1.5,
		    x: 100,
		    yoyo: true,
		    duration: 500,
		    hold  :500,
		    onStart: function(){say1.setVisible(true);},
		    onComplete: function(){say1.setVisible(false);},
				}

			)

				.add(

					{

			    targets: say2,
			    scaleX:1.5,
			    scaleY:1.5,
			    x: 0,
			    yoyo: true,
			    duration: 500,
			    hold  :500,
			    onStart: function(){say2.setVisible(true);},
			    onComplete: function(){
						say2.setVisible(false);
						game.scene.stop('Scene1');
						game.scene.start('Scene2');
					},
			  	}

				)

				.play();

		}, 500)

}

//------------------------------------------------------------------
