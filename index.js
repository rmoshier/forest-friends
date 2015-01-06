var createGame = require('voxel-engine');

var game = createGame({
  texturePath: 'textures/'
});

var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);

var momo = createPlayer('momo.png');
momo.possess();
momo.yaw.position.set(0, 100, 0);
