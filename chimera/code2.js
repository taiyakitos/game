gdjs.WinCode = {};
gdjs.WinCode.localVariables = [];
gdjs.WinCode.idToCallbackMap = new Map();
gdjs.WinCode.GDNewSpriteObjects1= [];
gdjs.WinCode.GDNewSpriteObjects2= [];
gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];
gdjs.WinCode.GDShadedDarkJoystickObjects1= [];
gdjs.WinCode.GDShadedDarkJoystickObjects2= [];
gdjs.WinCode.GDbtnZObjects1= [];
gdjs.WinCode.GDbtnZObjects2= [];
gdjs.WinCode.GDbtnHObjects1= [];
gdjs.WinCode.GDbtnHObjects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sound 5.aac", true, 100, 2);
}
}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.WinCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.WinCode.GDbtnZObjects1.length = 0;
gdjs.WinCode.GDbtnZObjects2.length = 0;
gdjs.WinCode.GDbtnHObjects1.length = 0;
gdjs.WinCode.GDbtnHObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.WinCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.WinCode.GDbtnZObjects1.length = 0;
gdjs.WinCode.GDbtnZObjects2.length = 0;
gdjs.WinCode.GDbtnHObjects1.length = 0;
gdjs.WinCode.GDbtnHObjects2.length = 0;


return;

}

gdjs['WinCode'] = gdjs.WinCode;
