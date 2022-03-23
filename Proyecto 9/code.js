var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["55106021-e1e3-46e7-8555-96f5d95b479b","377bfdd4-a2ba-45ce-a5a5-f6e6eeb9776e","ef67841a-29bc-4fc3-ae6e-9f650843aac6","30405a0c-2b25-411a-aace-ce81425a1524","bfb75eb8-b243-4646-8bc7-b22843f34aec","61977e6e-b687-4f77-a5de-102b2ddbc6fb","ee7fbcf4-3a0d-49fd-91af-56e985c100ef","761452ec-7a6c-4664-8fb3-43ff138756dd","66633378-3ddd-4533-bdaa-5509afb262b8","5de6c6ba-0abe-4775-8d55-355dc3c53f06","8af4ae5c-f86c-43de-8395-9e2173a58455","82d07ab7-357c-4e63-b0f0-ead0c329b08d","684c7c73-9e63-4d2d-9b95-a6b0e3183561","64fa4f83-0be7-4141-bcc7-9720a68d1d61","5b59d86c-5494-4708-8ec6-a401228f9ff6","c3622cd4-b13a-451e-a4c7-e884128b6148"],"propsByKey":{"55106021-e1e3-46e7-8555-96f5d95b479b":{"name":"b","sourceUrl":"assets/v3/animations/0uQYY7PY5qZzq2yZAX1jb8kNx_pYM-qNMmetIHZVjbI/55106021-e1e3-46e7-8555-96f5d95b479b.png","frameSize":{"x":500,"y":420},"frameCount":1,"looping":true,"frameDelay":4,"version":"idOX5H2gwNflDx25oa4.1hQxgeplAkia","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":420},"rootRelativePath":"assets/v3/animations/0uQYY7PY5qZzq2yZAX1jb8kNx_pYM-qNMmetIHZVjbI/55106021-e1e3-46e7-8555-96f5d95b479b.png"},"377bfdd4-a2ba-45ce-a5a5-f6e6eeb9776e":{"name":"wall1","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"ef67841a-29bc-4fc3-ae6e-9f650843aac6":{"name":"wall2","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"30405a0c-2b25-411a-aace-ce81425a1524":{"name":"wall3","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"bfb75eb8-b243-4646-8bc7-b22843f34aec":{"name":"wall4","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"61977e6e-b687-4f77-a5de-102b2ddbc6fb":{"name":"wall6","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"ee7fbcf4-3a0d-49fd-91af-56e985c100ef":{"name":"wall7","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"761452ec-7a6c-4664-8fb3-43ff138756dd":{"name":"wall8","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"66633378-3ddd-4533-bdaa-5509afb262b8":{"name":"wall10","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"5de6c6ba-0abe-4775-8d55-355dc3c53f06":{"name":"wall12","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"8af4ae5c-f86c-43de-8395-9e2173a58455":{"name":"wall13","sourceUrl":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png","frameSize":{"x":293,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GpHX8pyI1Ji9WjUMXCrJv1XC1gtnXedd/category_icons/tree.png"},"82d07ab7-357c-4e63-b0f0-ead0c329b08d":{"name":"wall9","sourceUrl":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png","frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png"},"684c7c73-9e63-4d2d-9b95-a6b0e3183561":{"name":"cup","sourceUrl":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png","frameSize":{"x":312,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qYuvwscvicUp26fkvQOaDTrPjKxv1BlU","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qYuvwscvicUp26fkvQOaDTrPjKxv1BlU/category_video_games/award_trophy1.png"},"64fa4f83-0be7-4141-bcc7-9720a68d1d61":{"name":"Jugador1","sourceUrl":"assets/api/v1/animation-library/gamelab/MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh/category_fantasy/rpgcharacter_19.png","frameSize":{"x":258,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh/category_fantasy/rpgcharacter_19.png"},"5b59d86c-5494-4708-8ec6-a401228f9ff6":{"name":"wall5","sourceUrl":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png","frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png"},"c3622cd4-b13a-451e-a4c7-e884128b6148":{"name":"wall11","sourceUrl":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png","frameSize":{"x":51,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/nNwzH3gJaUwE3Ukl9IbT1gMDyEYixHNc/category_fantasy/ghost.png"}}};
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

var Jugador1;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall12, wall13, wall13;
var b;
var cup;


 b = createSprite(200,200); 
 b.setAnimation("b");
 
 Jugador1 = createSprite(33, 16,10,10);
 
  wall1 = createSprite(83,60,10,50);

 wall2 = createSprite(83,33,10,50);

 wall3 = createSprite(280,74,120,10);

 wall4 = createSprite(34,260,120,10);

 wall5 = createSprite(294,162,120,10);

 wall6 = createSprite(266,320,120,10);

 wall7 = createSprite(180,200,120,10);

 wall8 = createSprite(171,111,10,50);

 wall9 = createSprite(370,341,50,10);
 
wall10 = createSprite(300,70,50,10);


wall12 = createSprite(110,200,50,10);

wall13 = createSprite(190,130,50,10);

cup = createSprite(380,390);



Jugador1.setAnimation("Jugador1");
 Jugador1.scale=0.1;
 
  wall1.setAnimation("wall1");
  wall1.scale=0.1;
  
  wall2.setAnimation("wall2");
  wall2.scale=0.1;

wall3.setAnimation("wall3");
  wall3.scale=0.1;

wall4.setAnimation("wall4");
  wall4.scale=0.1;

wall5.setAnimation("wall5");
  wall5.scale=0.4;

wall6.setAnimation("wall6");
  wall6.scale=0.1;

wall7.setAnimation("wall7");
  wall7.scale=0.1;

wall8.setAnimation("wall8");
  wall8.scale=0.1;

wall9.setAnimation("wall9");
  wall9.scale=0.4;

wall10.setAnimation("wall10");
  wall10.scale=0.1;


wall12.setAnimation("wall12");
  wall12.scale=0.1;

  wall13.setAnimation("wall13");
  wall13.scale=0.1;

cup.setAnimation("cup");
  cup.scale=0.07;
  
  wall1.setVelocity(4,0);
wall2.setVelocity(0,4);
wall3.setVelocity(0,-3);
wall4.setVelocity(4,0);
wall5.setVelocity(3,0);
wall6.setVelocity(3,0);
  wall7.setVelocity(0,4);
wall8.setVelocity(3,0);
wall9.setVelocity(3,0);
  wall10.setVelocity(0,4);
wall12.setVelocity(-3,0);
  wall13.setVelocity(0,3);
  
  
  
function draw() {
createEdgeSprites();


if(keyDown(UP_ARROW)){
  Jugador1.y=Jugador1.y-3;
}

if(keyDown(DOWN_ARROW)){
  Jugador1.y=Jugador1.y+3;
}

if(keyDown(LEFT_ARROW)){
  Jugador1.x=Jugador1.x-3;
}

if(keyDown(RIGHT_ARROW)){
  Jugador1.x=Jugador1.x+3;
}

Jugador1.bounceOff(edges);
wall1.bounceOff(edges);
wall2.bounceOff(edges);
wall3.bounceOff(edges);
wall4.bounceOff(edges);
wall5.bounceOff(edges);
wall6.bounceOff(edges);
wall7.bounceOff(edges);
wall8.bounceOff(edges);
wall9.bounceOff(edges);
wall10.bounceOff(edges);
wall12.bounceOff(edges);
wall13.bounceOff(edges);

if(Jugador1.isTouching(wall1)|| Jugador1.isTouching(wall2)|| Jugador1.isTouching(wall3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  Jugador1.x=33;
  Jugador1.y=16;
  
}

if(Jugador1.isTouching(wall4)|| Jugador1.isTouching(wall5)|| Jugador1.isTouching(wall6)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  Jugador1.x=33;
  Jugador1.y=16;
  
}

if(Jugador1.isTouching(wall7)|| Jugador1.isTouching(wall8)|| Jugador1.isTouching(wall9)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  Jugador1.x=33;
  Jugador1.y=16;
  
}

if(Jugador1.isTouching(wall10)|| Jugador1.isTouching(wall12)|| Jugador1.isTouching(wall13)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
  Jugador1.x=33;
  Jugador1.y=16;
  
}



if(Jugador1.isTouching(cup)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  Jugador1.x=33;
  Jugador1.y=16;
text("!!GANASTE¡¡", 200, 200);
textSize(20);

  
  
}

  
drawSprites();
    
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
