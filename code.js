var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3b4feb5c-1f51-4bdd-88db-6b332547fdc1","f52d05c8-36b3-4492-aafb-5d7196c4fb69","08c4a61f-6174-4c18-a0ff-f94c34547eac","93f56551-607b-42b2-afe1-d7f9db572bc5"],"propsByKey":{"3b4feb5c-1f51-4bdd-88db-6b332547fdc1":{"name":"monkey","sourceUrl":"assets/api/v1/animation-library/gamelab/UYKpESoivry5AsqtbwQdIeCk9v9asMvE/category_animals/monkey.png","frameSize":{"x":308,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"UYKpESoivry5AsqtbwQdIeCk9v9asMvE","loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/UYKpESoivry5AsqtbwQdIeCk9v9asMvE/category_animals/monkey.png"},"f52d05c8-36b3-4492-aafb-5d7196c4fb69":{"name":"bannana","sourceUrl":"assets/api/v1/animation-library/gamelab/ccpZZOVIGskbfrQGMrryQFkMKlec5.T5/category_food/bannana.png","frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"ccpZZOVIGskbfrQGMrryQFkMKlec5.T5","loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ccpZZOVIGskbfrQGMrryQFkMKlec5.T5/category_food/bannana.png"},"08c4a61f-6174-4c18-a0ff-f94c34547eac":{"name":"pine_trees","sourceUrl":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z8Dgk.em0WaIbb.0CaPSgLIoJa8HoEZe/category_backgrounds/pine_trees.png"},"93f56551-607b-42b2-afe1-d7f9db572bc5":{"name":"rock","sourceUrl":null,"frameSize":{"x":92,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"zPkdF_ReAB58P1CqxvcjOw3s4ljrKALj","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":47},"rootRelativePath":"assets/93f56551-607b-42b2-afe1-d7f9db572bc5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var monkey = createSprite(50,340,20,50);
monkey.setAnimation("monkey");
monkey.scale=0.2;

var ground = createSprite(200,380,800,10);

ground.velocityX=-2;

var score= 0;

var bananas=0;

var bananaGroup = createGroup();
var obstaclesGroup = createGroup();

function draw() {
  background("white");
  
if (keyDown("space")&&monkey.y >= 100) {
    playSound("assets/category_jump/retro_game_classic_jump_18.mp3", false);
    monkey.velocityY=-12;
}

if (ground.x < 0) {
    ground.x=ground.width/2;
  }
if (monkey.isTouching(bananaGroup)) {
  bananaGroup.destroyEach();
  bananas=bananas+1;
}
/*if (monkey.isTouching(obstaclesGroup)) {
  ground.velocityX=0;
  bananaGroup.velocityX=0;
  obstaclesGroup.velocityX=0;
  textSize(20);
  textFont("georgia");
  text("Game Over",200,200);
}*/
  textSize(18);
  textFont("georgia");
  text("bananas:"+bananas,10,50);

   food();
   obstacles();
  
  monkey.velocityY=monkey.velocityY+0.8; 
  monkey.collide(ground);
  
  textSize(18);
  textFont("georgia");
  text("survival time:"+score,250,50);
  
  
  score=score+Math.round(World.frameRate/60);
  
 drawSprites();
}
function food() {
  if (World.frameCount % 80 === 0){
   var banana = createSprite(150,Math.round(random(120,200)),10,20);
   banana.setAnimation("bannana");
   banana.velocityX=-3;
   banana.lifetime=150;
   banana.scale=0.1;
   bananaGroup.add(banana);
  }
}
function obstacles() {
  if (World.frameCount % 300 === 0) {
   var rock = createSprite(150,350,20,20);
   rock.setAnimation("rock");
   rock.velocityX=-3;
   rock.lifetime=150;
   obstaclesGroup.add(rock);
}

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
