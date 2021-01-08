import { Scene } from 'phaser'
import player from '@/assets/images/player.png'
import PlayerAnims from '@/game/anims/Player'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  preload() {
    this.jumpTimer = 0
    this.load.spritesheet('player', player, { frameWidth: 50, frameHeight: 37 })
  }

  create() {
    this.add.image(480, 240, 'mainBg')
    //主角
    this.player = this.physics.add.sprite(150, 600, 'player')
    this.player.setCollideWorldBounds(true) //角色邊界限制
    this.player.setBounce(1) //設定彈跳值
    this.player.setScale(2.5) //設定顯示大小
    new PlayerAnims(this)

    //default
    this.player.anims.play('Idle1', true)
  }

  update() {
    // 啟動鍵盤事件
    let keyboard = this.input.keyboard.createCursorKeys();

    if (keyboard.right.isDown) {
      this.player.flipX = false;
      this.player.setVelocityX(300);
      this.player.anims.play('run', true);
    } else if (keyboard.down.isDown) {
      this.player.anims.play('sit', true);
    } else if (keyboard.left.isDown) {
      this.player.setVelocityX(-300);
      this.player.flipX = true;
      this.player.anims.play('run', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('Idle1', true);
    }
  }
}
