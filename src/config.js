import Phaser from 'phaser';
import preload from './preload';
import create from './create';
import update from './update';


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'matter',
        arcade: {
            gravity: { y: 150 }
        }
    },
    scene: {
        preload,
        create,
        update
    }
};

export default config;