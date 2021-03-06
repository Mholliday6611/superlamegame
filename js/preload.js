var Ass = Ass || {};

Ass.Preload = function(){};

Ass.Preload.prototype = {
	preload: function(){
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.splash.anchor.setTo(0.5);

		this.preloadBar= this.add.sprite(this.game.worldX, this.game.world.centerY+ 128, 'preloadbar');
		this.preloadBar.anchor.setTo(0.5);

		this.load.setPreloadSprite(this.preloadBar);

		//load in assets for game
		 this.load.image('starfield', 'assets/images/starfield.png');
		 this.load.image('clouds', 'assets/png/sky1.png');
		 this.load.image('ship', 'assets/images/player.png');
		 this.load.image('bullet', 'assets/images/bullet.png');
		 this.load.image('enemy-green', 'assets/images/enemy-green.png');
		 this.load.image('enemy-blue', 'assets/images/enemy-blue.png');
		 this.load.image('blueEnemyBullet', 'assets/images/enemy-blue-bullet.png');
		 this.load.spritesheet('explosion', 'assets/images/explode.png', 128,128);
		 this.load.image('power1', 'assets/png/life.png');
		 this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
		 this.load.bitmapFont('spacefont', 'assets/spacefont/spacefont.png', 'assets/spacefont/spacefont.xml');
		 this.load.image('boss', 'assets/images/boss.png');
		 this.load.image('deathRay', 'assets/images/death-ray.png');
		 this.load.image('redshot', 'assets/png/laserRedShot.png');
		 this.load.image('teddy', 'assets/Sprite_1.png');
		 this.load.image('cupcake', 'assets/Sprite_2.png');
		 this.load.image('gboss', 'assets/Sprite_3.png');
		 this.load.image('chevron', 'assets/Chevron_1.png');
		 this.load.image('slime', 'assets/enemies/slime-monster.png');
		 this.load.spritesheet('frog', 'assets/enemies/frog.png',16,16,3);
		 this.load.spritesheet('ghost', 'assets/enemies/ghost.png',16,16,3);
		 this.load.spritesheet('bat', 'assets/enemies/bat.png', 16,16, 3);
		 this.load.spritesheet('skeleton', 'assets/enemies/skeleton.png',16,16,4);
		 this.load.spritesheet('androBoss', 'assets/enemies/andromalius-57x88.png', 57, 88, 24);
		 this.load.audio('lit', 'assets/music/1-26-16_brass_trap.mp3');
	},
	create: function(){
		this.state.start('MainMenu');
	}
}