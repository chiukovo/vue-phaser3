import { Scene } from 'phaser'
import mainBg from '@/assets/images/bg.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    //場景
    this.load.image('mainBg', mainBg)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
