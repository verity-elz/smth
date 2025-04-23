gdjs.beginningCode = {};
gdjs.beginningCode.localVariables = [];
gdjs.beginningCode.GDbackObjects1= [];
gdjs.beginningCode.GDbackObjects2= [];
gdjs.beginningCode.GDBlack_9595SorrowObjects1= [];
gdjs.beginningCode.GDBlack_9595SorrowObjects2= [];
gdjs.beginningCode.GDStartButtonObjects1= [];
gdjs.beginningCode.GDStartButtonObjects2= [];


gdjs.beginningCode.mapOfGDgdjs_9546beginningCode_9546GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.beginningCode.GDStartButtonObjects1});
gdjs.beginningCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.beginningCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.beginningCode.mapOfGDgdjs_9546beginningCode_9546GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", false);
}}

}


};

gdjs.beginningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.beginningCode.GDbackObjects1.length = 0;
gdjs.beginningCode.GDbackObjects2.length = 0;
gdjs.beginningCode.GDBlack_9595SorrowObjects1.length = 0;
gdjs.beginningCode.GDBlack_9595SorrowObjects2.length = 0;
gdjs.beginningCode.GDStartButtonObjects1.length = 0;
gdjs.beginningCode.GDStartButtonObjects2.length = 0;

gdjs.beginningCode.eventsList0(runtimeScene);
gdjs.beginningCode.GDbackObjects1.length = 0;
gdjs.beginningCode.GDbackObjects2.length = 0;
gdjs.beginningCode.GDBlack_9595SorrowObjects1.length = 0;
gdjs.beginningCode.GDBlack_9595SorrowObjects2.length = 0;
gdjs.beginningCode.GDStartButtonObjects1.length = 0;
gdjs.beginningCode.GDStartButtonObjects2.length = 0;


return;

}

gdjs['beginningCode'] = gdjs.beginningCode;
