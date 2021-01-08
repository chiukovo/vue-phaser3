import { Scene } from 'phaser'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    //場景
  }

  create () {
    this.scene.start('PlayScene')
  }
}
