gdjs.LoseCode = {};
gdjs.LoseCode.localVariables = [];
gdjs.LoseCode.idToCallbackMap = new Map();
gdjs.LoseCode.GDheartObjects1= [];
gdjs.LoseCode.GDheartObjects2= [];
gdjs.LoseCode.GDExplosionObjects1= [];
gdjs.LoseCode.GDExplosionObjects2= [];
gdjs.LoseCode.GDShadedDarkJoystickObjects1= [];
gdjs.LoseCode.GDShadedDarkJoystickObjects2= [];
gdjs.LoseCode.GDbtnZObjects1= [];
gdjs.LoseCode.GDbtnZObjects2= [];
gdjs.LoseCode.GDbtnHObjects1= [];
gdjs.LoseCode.GDbtnHObjects2= [];


gdjs.LoseCode.mapOfGDgdjs_9546LoseCode_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.LoseCode.GDExplosionObjects2});
gdjs.LoseCode.asyncCallback17519860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoseCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("heart"), gdjs.LoseCode.GDheartObjects2);

gdjs.LoseCode.GDExplosionObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LoseCode.mapOfGDgdjs_9546LoseCode_9546GDExplosionObjects2Objects, (( gdjs.LoseCode.GDheartObjects2.length === 0 ) ? 0 :gdjs.LoseCode.GDheartObjects2[0].getPointX("")), (( gdjs.LoseCode.GDheartObjects2.length === 0 ) ? 0 :gdjs.LoseCode.GDheartObjects2[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Determination - Toby Fox (youtube).mp3", true, 100, 1);
}
{for(var i = 0, len = gdjs.LoseCode.GDheartObjects2.length ;i < len;++i) {
    gdjs.LoseCode.GDheartObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.LoseCode.localVariables.length = 0;
}
gdjs.LoseCode.idToCallbackMap.set(17519860, gdjs.LoseCode.asyncCallback17519860);
gdjs.LoseCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoseCode.localVariables);
for (const obj of gdjs.LoseCode.GDheartObjects1) asyncObjectsList.addObject("heart", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LoseCode.asyncCallback17519860(runtimeScene, asyncObjectsList)), 17519860, asyncObjectsList);
}
}

}


};gdjs.LoseCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("heart"), gdjs.LoseCode.GDheartObjects1);
{for(var i = 0, len = gdjs.LoseCode.GDheartObjects1.length ;i < len;++i) {
    gdjs.LoseCode.GDheartObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 10, 10, 10, 10, 0.05, true, null);
}
}

{ //Subevents
gdjs.LoseCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LoseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoseCode.GDheartObjects1.length = 0;
gdjs.LoseCode.GDheartObjects2.length = 0;
gdjs.LoseCode.GDExplosionObjects1.length = 0;
gdjs.LoseCode.GDExplosionObjects2.length = 0;
gdjs.LoseCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.LoseCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.LoseCode.GDbtnZObjects1.length = 0;
gdjs.LoseCode.GDbtnZObjects2.length = 0;
gdjs.LoseCode.GDbtnHObjects1.length = 0;
gdjs.LoseCode.GDbtnHObjects2.length = 0;

gdjs.LoseCode.eventsList1(runtimeScene);
gdjs.LoseCode.GDheartObjects1.length = 0;
gdjs.LoseCode.GDheartObjects2.length = 0;
gdjs.LoseCode.GDExplosionObjects1.length = 0;
gdjs.LoseCode.GDExplosionObjects2.length = 0;
gdjs.LoseCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.LoseCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.LoseCode.GDbtnZObjects1.length = 0;
gdjs.LoseCode.GDbtnZObjects2.length = 0;
gdjs.LoseCode.GDbtnHObjects1.length = 0;
gdjs.LoseCode.GDbtnHObjects2.length = 0;


return;

}

gdjs['LoseCode'] = gdjs.LoseCode;
