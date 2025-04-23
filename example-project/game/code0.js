gdjs.SceneCode = {};
gdjs.SceneCode.localVariables = [];
gdjs.SceneCode.GDBackgroundObjects1= [];
gdjs.SceneCode.GDBackgroundObjects2= [];
gdjs.SceneCode.GDPlayerObjects1= [];
gdjs.SceneCode.GDPlayerObjects2= [];
gdjs.SceneCode.GDStar1Objects1= [];
gdjs.SceneCode.GDStar1Objects2= [];
gdjs.SceneCode.GDStar3Objects1= [];
gdjs.SceneCode.GDStar3Objects2= [];
gdjs.SceneCode.GDStar2Objects1= [];
gdjs.SceneCode.GDStar2Objects2= [];
gdjs.SceneCode.GDScore2Objects1= [];
gdjs.SceneCode.GDScore2Objects2= [];


gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDStar1Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar3Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar2Objects1Objects = Hashtable.newFrom({"Star1": gdjs.SceneCode.GDStar1Objects1, "Star3": gdjs.SceneCode.GDStar3Objects1, "Star2": gdjs.SceneCode.GDStar2Objects1});
gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDStar1Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar3Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar2Objects1Objects = Hashtable.newFrom({"Star1": gdjs.SceneCode.GDStar1Objects1, "Star3": gdjs.SceneCode.GDStar3Objects1, "Star2": gdjs.SceneCode.GDStar2Objects1});
gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SceneCode.GDPlayerObjects1});
gdjs.SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDPlayerObjects1[i].setX(gdjs.SceneCode.GDPlayerObjects1[i].getX() + (-(15)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDPlayerObjects1[i].setX(gdjs.SceneCode.GDPlayerObjects1[i].getX() + (+(15)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fate");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "【ALIEN STAGE】Black Sorrow - english cover │ @auri_vt.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fate") >= 1;
if (isConditionTrue_0) {
gdjs.SceneCode.GDStar1Objects1.length = 0;

gdjs.SceneCode.GDStar2Objects1.length = 0;

gdjs.SceneCode.GDStar3Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fate");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDStar1Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar3Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar2Objects1Objects, "Star" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(0, gdjs.evtTools.window.getWindowInnerWidth()), 0, "");
}{for(var i = 0, len = gdjs.SceneCode.GDStar1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDStar1Objects1[i].addForce(0, 150, 1);
}
for(var i = 0, len = gdjs.SceneCode.GDStar3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDStar3Objects1[i].addForce(0, 150, 1);
}
for(var i = 0, len = gdjs.SceneCode.GDStar2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDStar2Objects1[i].addForce(0, 150, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Star1"), gdjs.SceneCode.GDStar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star2"), gdjs.SceneCode.GDStar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star3"), gdjs.SceneCode.GDStar3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SceneCode.GDStar1Objects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDStar1Objects1[i].getY() > gdjs.evtTools.window.getWindowInnerHeight() ) {
        isConditionTrue_0 = true;
        gdjs.SceneCode.GDStar1Objects1[k] = gdjs.SceneCode.GDStar1Objects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDStar1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SceneCode.GDStar3Objects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDStar3Objects1[i].getY() > gdjs.evtTools.window.getWindowInnerHeight() ) {
        isConditionTrue_0 = true;
        gdjs.SceneCode.GDStar3Objects1[k] = gdjs.SceneCode.GDStar3Objects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDStar3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.SceneCode.GDStar2Objects1.length;i<l;++i) {
    if ( gdjs.SceneCode.GDStar2Objects1[i].getY() > gdjs.evtTools.window.getWindowInnerHeight() ) {
        isConditionTrue_0 = true;
        gdjs.SceneCode.GDStar2Objects1[k] = gdjs.SceneCode.GDStar2Objects1[i];
        ++k;
    }
}
gdjs.SceneCode.GDStar2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star1"), gdjs.SceneCode.GDStar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star2"), gdjs.SceneCode.GDStar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Star3"), gdjs.SceneCode.GDStar3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDStar1Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar3Objects1ObjectsGDgdjs_9546SceneCode_9546GDStar2Objects1Objects, gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.SceneCode.GDScore2Objects1);
/* Reuse gdjs.SceneCode.GDStar1Objects1 */
/* Reuse gdjs.SceneCode.GDStar2Objects1 */
/* Reuse gdjs.SceneCode.GDStar3Objects1 */
{for(var i = 0, len = gdjs.SceneCode.GDStar1Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDStar1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.SceneCode.GDStar3Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDStar3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.SceneCode.GDStar2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDStar2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.SceneCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.SceneCode.GDScore2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SceneCode.GDBackgroundObjects1.length = 0;
gdjs.SceneCode.GDBackgroundObjects2.length = 0;
gdjs.SceneCode.GDPlayerObjects1.length = 0;
gdjs.SceneCode.GDPlayerObjects2.length = 0;
gdjs.SceneCode.GDStar1Objects1.length = 0;
gdjs.SceneCode.GDStar1Objects2.length = 0;
gdjs.SceneCode.GDStar3Objects1.length = 0;
gdjs.SceneCode.GDStar3Objects2.length = 0;
gdjs.SceneCode.GDStar2Objects1.length = 0;
gdjs.SceneCode.GDStar2Objects2.length = 0;
gdjs.SceneCode.GDScore2Objects1.length = 0;
gdjs.SceneCode.GDScore2Objects2.length = 0;

gdjs.SceneCode.eventsList0(runtimeScene);
gdjs.SceneCode.GDBackgroundObjects1.length = 0;
gdjs.SceneCode.GDBackgroundObjects2.length = 0;
gdjs.SceneCode.GDPlayerObjects1.length = 0;
gdjs.SceneCode.GDPlayerObjects2.length = 0;
gdjs.SceneCode.GDStar1Objects1.length = 0;
gdjs.SceneCode.GDStar1Objects2.length = 0;
gdjs.SceneCode.GDStar3Objects1.length = 0;
gdjs.SceneCode.GDStar3Objects2.length = 0;
gdjs.SceneCode.GDStar2Objects1.length = 0;
gdjs.SceneCode.GDStar2Objects2.length = 0;
gdjs.SceneCode.GDScore2Objects1.length = 0;
gdjs.SceneCode.GDScore2Objects2.length = 0;


return;

}

gdjs['SceneCode'] = gdjs.SceneCode;
