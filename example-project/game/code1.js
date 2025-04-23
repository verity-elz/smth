gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.GDBackgroundObjects1= [];
gdjs.game_32overCode.GDBackgroundObjects2= [];
gdjs.game_32overCode.GDGOObjects1= [];
gdjs.game_32overCode.GDGOObjects2= [];
gdjs.game_32overCode.GDPointObjects1= [];
gdjs.game_32overCode.GDPointObjects2= [];
gdjs.game_32overCode.GDRepeatArrowObjects1= [];
gdjs.game_32overCode.GDRepeatArrowObjects2= [];
gdjs.game_32overCode.GDbuttonObjects1= [];
gdjs.game_32overCode.GDbuttonObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Point"), gdjs.game_32overCode.GDPointObjects1);
{for(var i = 0, len = gdjs.game_32overCode.GDPointObjects1.length ;i < len;++i) {
    gdjs.game_32overCode.GDPointObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.game_32overCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDbuttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDbuttonObjects1[k] = gdjs.game_32overCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "beginning", false);
}}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDGOObjects1.length = 0;
gdjs.game_32overCode.GDGOObjects2.length = 0;
gdjs.game_32overCode.GDPointObjects1.length = 0;
gdjs.game_32overCode.GDPointObjects2.length = 0;
gdjs.game_32overCode.GDRepeatArrowObjects1.length = 0;
gdjs.game_32overCode.GDRepeatArrowObjects2.length = 0;
gdjs.game_32overCode.GDbuttonObjects1.length = 0;
gdjs.game_32overCode.GDbuttonObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDBackgroundObjects1.length = 0;
gdjs.game_32overCode.GDBackgroundObjects2.length = 0;
gdjs.game_32overCode.GDGOObjects1.length = 0;
gdjs.game_32overCode.GDGOObjects2.length = 0;
gdjs.game_32overCode.GDPointObjects1.length = 0;
gdjs.game_32overCode.GDPointObjects2.length = 0;
gdjs.game_32overCode.GDRepeatArrowObjects1.length = 0;
gdjs.game_32overCode.GDRepeatArrowObjects2.length = 0;
gdjs.game_32overCode.GDbuttonObjects1.length = 0;
gdjs.game_32overCode.GDbuttonObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
