gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.idToCallbackMap = new Map();
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final = [];

gdjs.Untitled_32sceneCode.GDbtnZObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final = [];

gdjs.Untitled_32sceneCode.GDtextObjects2_1final = [];

gdjs.Untitled_32sceneCode.GDtextObjects1= [];
gdjs.Untitled_32sceneCode.GDtextObjects2= [];
gdjs.Untitled_32sceneCode.GDtextObjects3= [];
gdjs.Untitled_32sceneCode.GDtextObjects4= [];
gdjs.Untitled_32sceneCode.GDBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDBoxObjects3= [];
gdjs.Untitled_32sceneCode.GDBoxObjects4= [];
gdjs.Untitled_32sceneCode.GDbackObjects1= [];
gdjs.Untitled_32sceneCode.GDbackObjects2= [];
gdjs.Untitled_32sceneCode.GDbackObjects3= [];
gdjs.Untitled_32sceneCode.GDbackObjects4= [];
gdjs.Untitled_32sceneCode.GDenemyObjects1= [];
gdjs.Untitled_32sceneCode.GDenemyObjects2= [];
gdjs.Untitled_32sceneCode.GDenemyObjects3= [];
gdjs.Untitled_32sceneCode.GDenemyObjects4= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDspritenemyObjects1= [];
gdjs.Untitled_32sceneCode.GDspritenemyObjects2= [];
gdjs.Untitled_32sceneCode.GDspritenemyObjects3= [];
gdjs.Untitled_32sceneCode.GDspritenemyObjects4= [];
gdjs.Untitled_32sceneCode.GDAttackBarObjects1= [];
gdjs.Untitled_32sceneCode.GDAttackBarObjects2= [];
gdjs.Untitled_32sceneCode.GDAttackBarObjects3= [];
gdjs.Untitled_32sceneCode.GDAttackBarObjects4= [];
gdjs.Untitled_32sceneCode.GDAttackTargetObjects1= [];
gdjs.Untitled_32sceneCode.GDAttackTargetObjects2= [];
gdjs.Untitled_32sceneCode.GDAttackTargetObjects3= [];
gdjs.Untitled_32sceneCode.GDAttackTargetObjects4= [];
gdjs.Untitled_32sceneCode.GDDmgPopObjects1= [];
gdjs.Untitled_32sceneCode.GDDmgPopObjects2= [];
gdjs.Untitled_32sceneCode.GDDmgPopObjects3= [];
gdjs.Untitled_32sceneCode.GDDmgPopObjects4= [];
gdjs.Untitled_32sceneCode.GDsoulObjects1= [];
gdjs.Untitled_32sceneCode.GDsoulObjects2= [];
gdjs.Untitled_32sceneCode.GDsoulObjects3= [];
gdjs.Untitled_32sceneCode.GDsoulObjects4= [];
gdjs.Untitled_32sceneCode.GDbarrierObjects1= [];
gdjs.Untitled_32sceneCode.GDbarrierObjects2= [];
gdjs.Untitled_32sceneCode.GDbarrierObjects3= [];
gdjs.Untitled_32sceneCode.GDbarrierObjects4= [];
gdjs.Untitled_32sceneCode.GDbulletSpinObjects1= [];
gdjs.Untitled_32sceneCode.GDbulletSpinObjects2= [];
gdjs.Untitled_32sceneCode.GDbulletSpinObjects3= [];
gdjs.Untitled_32sceneCode.GDbulletSpinObjects4= [];
gdjs.Untitled_32sceneCode.GDFlashObjects1= [];
gdjs.Untitled_32sceneCode.GDFlashObjects2= [];
gdjs.Untitled_32sceneCode.GDFlashObjects3= [];
gdjs.Untitled_32sceneCode.GDFlashObjects4= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects1= [];
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2= [];
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects3= [];
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects4= [];
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects1= [];
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects2= [];
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects3= [];
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects4= [];
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3= [];
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects4= [];
gdjs.Untitled_32sceneCode.GDbtnZObjects1= [];
gdjs.Untitled_32sceneCode.GDbtnZObjects2= [];
gdjs.Untitled_32sceneCode.GDbtnZObjects3= [];
gdjs.Untitled_32sceneCode.GDbtnZObjects4= [];
gdjs.Untitled_32sceneCode.GDbtnHObjects1= [];
gdjs.Untitled_32sceneCode.GDbtnHObjects2= [];
gdjs.Untitled_32sceneCode.GDbtnHObjects3= [];
gdjs.Untitled_32sceneCode.GDbtnHObjects4= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects1 */
gdjs.copyArray(runtimeScene.getObjects("spritenemy"), gdjs.Untitled_32sceneCode.GDspritenemyObjects1);
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Untitled_32sceneCode.GDBoxObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDBoxObjects1[0] : null), (gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDspritenemyObjects1[0] : null));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects4Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects4});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects2Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects2});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("statN", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
const keyIteratorReference4 = runtimeScene.getScene().getVariables().getFromIndex(3);
const valueIteratorReference4 = runtimeScene.getScene().getVariables().getFromIndex(2);
const iterableReference4 = runtimeScene.getGame().getVariables().getFromIndex(1);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    if(iterableReference4.getType() === "structure")
        keyIteratorReference4.setString(iteratorKey4);
    else if(iterableReference4.getType() === "array")
        keyIteratorReference4.setNumber(iteratorKey4);
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDBoxObjects2, gdjs.Untitled_32sceneCode.GDBoxObjects4);

gdjs.Untitled_32sceneCode.GDtextObjects4.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects4Objects, (( gdjs.Untitled_32sceneCode.GDBoxObjects4.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects4[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBoxObjects4.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects4[0].getPointY("")) + (40 * gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()), "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects4[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + ": " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects4[i].getBehavior("Scale").setScale(2);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects4[i].returnVariable(gdjs.Untitled_32sceneCode.GDtextObjects4[i].getVariables().getFromIndex(0)).setString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
}
}
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects2 */
gdjs.Untitled_32sceneCode.GDtextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects2Objects, (( gdjs.Untitled_32sceneCode.GDBoxObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBoxObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects2[0].getPointY("")) - 60, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].getBehavior("Text").setText("RICA");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].setTint("67;88;181");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].setColor("42;69;133");
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects3});
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects1Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects1});
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("statN", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
const keyIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(3);
const valueIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(2);
const iterableReference3 = runtimeScene.getScene().getVariables().getFromIndex(5);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDBoxObjects1, gdjs.Untitled_32sceneCode.GDBoxObjects3);

gdjs.Untitled_32sceneCode.GDtextObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects, (( gdjs.Untitled_32sceneCode.GDBoxObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects3[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBoxObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects3[0].getPointY("")) + (40 * gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()), "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + ": " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].getBehavior("Scale").setScale(2);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)).setString(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString());
}
}
}
}
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects1 */
gdjs.Untitled_32sceneCode.GDtextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects1Objects, (( gdjs.Untitled_32sceneCode.GDBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDBoxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBoxObjects1[0].getPointY("")) - 60, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Name").getAsString());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects1[i].setTint(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Color").getAsString());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects1[i].getBehavior("Scale").setScale(4);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects1[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Color").getAsString());
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects2[k] = gdjs.Untitled_32sceneCode.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17295476);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17299388);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewPanelSpriteObjects2Objects = Hashtable.newFrom({"NewPanelSprite": gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects4Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects4});
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("_n", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
const valueIteratorReference4 = runtimeScene.getScene().getVariables().getFromIndex(2);
const iterableReference4 = runtimeScene.getGame().getVariables().getFromIndex(0);
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(asyncObjectsList.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4);

gdjs.Untitled_32sceneCode.GDtextObjects4.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17307932);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects4Objects, (( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4[0].getX()) + 20, ((( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4[0].getY()) + (150 * gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber())) + 20, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects4[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects4[i].returnVariable(gdjs.Untitled_32sceneCode.GDtextObjects4[i].getVariables().getFromIndex(0)).setString("m" + gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Untitled_32sceneCode.GDtextObjects4.length !== 0 ? gdjs.Untitled_32sceneCode.GDtextObjects4[0] : null), (gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4[0] : null));
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects4[i].getBehavior("Scale").setScale(6);
}
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).add(1);
}
}
}
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


};gdjs.Untitled_32sceneCode.asyncCallback17306948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17306948, gdjs.Untitled_32sceneCode.asyncCallback17306948);
gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2) asyncObjectsList.addObject("NewPanelSprite", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17306948(runtimeScene, asyncObjectsList)), 17306948, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").getAsNumber() >= 20);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").add(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects3[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects3[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects3[k] = gdjs.Untitled_32sceneCode.GDBoxObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects3 */
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Def").setNumber(20);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects3[i].setColor("42;69;133");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getVariables().getFromIndex(1).getChild(1)).setNumber(3);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getVariables().getFromIndex(1).getChild(0)).setNumber(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewPanelSpriteObjects2Objects, 360, 67, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getBehavior("Tween").addObjectWidthTween2("2", 416, "easeInSine", 0.7, false);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getBehavior("Tween").addObjectHeightTween2("1", 557, "easeInSine", 0.7, false);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAttackBarObjects2Objects = Hashtable.newFrom({"AttackBar": gdjs.Untitled_32sceneCode.GDAttackBarObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAttackTargetObjects2Objects = Hashtable.newFrom({"AttackTarget": gdjs.Untitled_32sceneCode.GDAttackTargetObjects2});
gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects, (gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0] : null), null);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3 */
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length = 0;

gdjs.Untitled_32sceneCode.GDAttackTargetObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAttackBarObjects2Objects, 392, 385, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackBarObjects2[i].getBehavior("Scale").setScale(2.5);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDAttackTargetObjects2Objects, 303, 385, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackTargetObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackTargetObjects2[i].getBehavior("Scale").setScale(2.5);
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewPanelSpriteObjects3Objects = Hashtable.newFrom({"NewPanelSprite": gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsoulObjects3Objects = Hashtable.newFrom({"soul": gdjs.Untitled_32sceneCode.GDsoulObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletSpinObjects3Objects = Hashtable.newFrom({"bulletSpin": gdjs.Untitled_32sceneCode.GDbulletSpinObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsoulObjects3Objects = Hashtable.newFrom({"soul": gdjs.Untitled_32sceneCode.GDsoulObjects3});
gdjs.Untitled_32sceneCode.asyncCallback17317732 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("bulletSpin"), gdjs.Untitled_32sceneCode.GDbulletSpinObjects3);
gdjs.copyArray(runtimeScene.getObjects("soul"), gdjs.Untitled_32sceneCode.GDsoulObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbulletSpinObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbulletSpinObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsoulObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsoulObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17317732, gdjs.Untitled_32sceneCode.asyncCallback17317732);
gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(25), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17317732(runtimeScene, asyncObjectsList)), 17317732, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects, (gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0] : null), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17313724);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3 */
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects3 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17314756);
}
if (isConditionTrue_0) {
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;

gdjs.Untitled_32sceneCode.GDsoulObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewPanelSpriteObjects3Objects, 360, 149, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getBehavior("Resizable").setSize(416, 416);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsoulObjects3Objects, (( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0].getCenterYInScene()), "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsoulObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsoulObjects3[i].getBehavior("Scale").setScale(2);
}
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).setNumber(gdjs.randomInRange(0, 0));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("soul"), gdjs.Untitled_32sceneCode.GDsoulObjects3);
gdjs.copyArray(runtimeScene.getObjects("spritenemy"), gdjs.Untitled_32sceneCode.GDspritenemyObjects3);
gdjs.Untitled_32sceneCode.GDbulletSpinObjects3.length = 0;

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects3[i].getBehavior("FireBullet").FireTowardObject((gdjs.Untitled_32sceneCode.GDspritenemyObjects3[i].getPointX("")), (gdjs.Untitled_32sceneCode.GDspritenemyObjects3[i].getPointY("")) + 50, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletSpinObjects3Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsoulObjects3Objects, 500, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbulletSpinObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbulletSpinObjects3[i].setLayer("Ui");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbulletSpinObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbulletSpinObjects3[i].setZOrder(100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17317572);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects2Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects3});
gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("_n", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
const valueIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(2);
const iterableReference3 = runtimeScene.getGame().getVariables().getFromIndex(8);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2, gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17318852);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects3Objects, (( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0].getX()) + 20, ((( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0].getY()) + (60 * gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber())) + 20, "Ui");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()).getChild(1).getAsString());
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)).setString("i" + gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Untitled_32sceneCode.GDtextObjects3.length !== 0 ? gdjs.Untitled_32sceneCode.GDtextObjects3[0] : null), (gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[0] : null));
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects3[i].getBehavior("Scale").setScale(4);
}
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).add(1);
}
}
}
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDmgPopObjects2Objects = Hashtable.newFrom({"DmgPop": gdjs.Untitled_32sceneCode.GDDmgPopObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBoxObjects2Objects = Hashtable.newFrom({"Box": gdjs.Untitled_32sceneCode.GDBoxObjects2});
gdjs.Untitled_32sceneCode.asyncCallback17327852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("AttackBar"), gdjs.Untitled_32sceneCode.GDAttackBarObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("AttackTarget"), gdjs.Untitled_32sceneCode.GDAttackTargetObjects4);

gdjs.copyArray(asyncObjectsList.getObjects("DmgPop"), gdjs.Untitled_32sceneCode.GDDmgPopObjects4);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackBarObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackBarObjects4[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects4[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackTargetObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackTargetObjects4[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17327852, gdjs.Untitled_32sceneCode.asyncCallback17327852);
gdjs.Untitled_32sceneCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save AttackBar as it will be provided by the parent asyncObjectsList. */
/* Don't save AttackTarget as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Untitled_32sceneCode.GDDmgPopObjects3) asyncObjectsList.addObject("DmgPop", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17327852(runtimeScene, asyncObjectsList)), 17327852, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17326564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("DmgPop"), gdjs.Untitled_32sceneCode.GDDmgPopObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("spritenemy"), gdjs.Untitled_32sceneCode.GDspritenemyObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects3[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects3[i].setColor("255;250;250");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects3[i].getBehavior("Physics2").setGravityScale(2);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17326564, gdjs.Untitled_32sceneCode.asyncCallback17326564);
gdjs.Untitled_32sceneCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDAttackBarObjects2) asyncObjectsList.addObject("AttackBar", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDAttackTargetObjects2) asyncObjectsList.addObject("AttackTarget", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDDmgPopObjects2) asyncObjectsList.addObject("DmgPop", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDspritenemyObjects2) asyncObjectsList.addObject("spritenemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17326564(runtimeScene, asyncObjectsList)), 17326564, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDmgPopObjects1Objects = Hashtable.newFrom({"DmgPop": gdjs.Untitled_32sceneCode.GDDmgPopObjects1});
gdjs.Untitled_32sceneCode.asyncCallback17334460 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("AttackBar"), gdjs.Untitled_32sceneCode.GDAttackBarObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("AttackTarget"), gdjs.Untitled_32sceneCode.GDAttackTargetObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("DmgPop"), gdjs.Untitled_32sceneCode.GDDmgPopObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackBarObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackBarObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackTargetObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackTargetObjects3[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17334460, gdjs.Untitled_32sceneCode.asyncCallback17334460);
gdjs.Untitled_32sceneCode.eventsList17 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
/* Don't save AttackBar as it will be provided by the parent asyncObjectsList. */
/* Don't save AttackTarget as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Untitled_32sceneCode.GDDmgPopObjects2) asyncObjectsList.addObject("DmgPop", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17334460(runtimeScene, asyncObjectsList)), 17334460, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17334388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("DmgPop"), gdjs.Untitled_32sceneCode.GDDmgPopObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("spritenemy"), gdjs.Untitled_32sceneCode.GDspritenemyObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects2[i].getBehavior("Physics2").setDynamic();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects2[i].setColor("255;250;250");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects2[i].getBehavior("Physics2").setGravityScale(2);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList17(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17334388, gdjs.Untitled_32sceneCode.asyncCallback17334388);
gdjs.Untitled_32sceneCode.eventsList18 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDAttackBarObjects1) asyncObjectsList.addObject("AttackBar", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDAttackTargetObjects1) asyncObjectsList.addObject("AttackTarget", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDDmgPopObjects1) asyncObjectsList.addObject("DmgPop", obj);
for (const obj of gdjs.Untitled_32sceneCode.GDspritenemyObjects1) asyncObjectsList.addObject("spritenemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.8), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17334388(runtimeScene, asyncObjectsList)), 17334388, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList19 = function(runtimeScene) {

{

gdjs.Untitled_32sceneCode.GDbtnZObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("btnZ"), gdjs.Untitled_32sceneCode.GDbtnZObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnZObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbtnZObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDbtnZObjects3[k] = gdjs.Untitled_32sceneCode.GDbtnZObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnZObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDbtnZObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDbtnZObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final.push(gdjs.Untitled_32sceneCode.GDbtnZObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final, gdjs.Untitled_32sceneCode.GDbtnZObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AttackBar"), gdjs.Untitled_32sceneCode.GDAttackBarObjects2);
gdjs.copyArray(runtimeScene.getObjects("AttackTarget"), gdjs.Untitled_32sceneCode.GDAttackTargetObjects2);
gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("spritenemy"), gdjs.Untitled_32sceneCode.GDspritenemyObjects2);
gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 1.aac", false, 100, 1);
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).setNumber((runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Attack").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Attack").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Def").getAsNumber()) / 3);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackTargetObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackTargetObjects2[i].getBehavior("AdvancedProjectile").SetAcceleration(-1000000, null);
}
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).add((((( gdjs.Untitled_32sceneCode.GDAttackTargetObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDAttackTargetObjects2[0].getDistanceToPosition((( gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDAttackBarObjects2[0].getPointX("End")), (( gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDAttackBarObjects2[0].getPointY("End"))))) * 3) / 5);
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).setNumber(Math.round(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Hp").sub(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDmgPopObjects2Objects, (( gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspritenemyObjects2[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspritenemyObjects2[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects2[i].getBehavior("Scale").setScale(2);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects2[i].getBehavior("Text").setText(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(-1000);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackBarObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects2[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects2[i].setColor("255;11;11");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDBoxObjects2Objects, (gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDspritenemyObjects2[0] : null), null);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AttackTarget"), gdjs.Untitled_32sceneCode.GDAttackTargetObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDAttackTargetObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDAttackTargetObjects1[i].getBehavior("AdvancedProjectile").IsMaxDistanceExceeded(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDAttackTargetObjects1[k] = gdjs.Untitled_32sceneCode.GDAttackTargetObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDAttackTargetObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AttackBar"), gdjs.Untitled_32sceneCode.GDAttackBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("spritenemy"), gdjs.Untitled_32sceneCode.GDspritenemyObjects1);
gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "Hit 1.aac", false, 100, 1);
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).setNumber(0);
}
{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).setNumber(Math.round(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDDmgPopObjects1Objects, (( gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspritenemyObjects1[0].getPointX("")), (( gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDspritenemyObjects1[0].getPointY("")), "");
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects1[i].getBehavior("Scale").setScale(0.7);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects1[i].getBehavior("Text").setText("Miss");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(-1000);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDAttackBarObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDAttackBarObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects1[i].getBehavior("Physics2").setStatic();
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDmgPopObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects1[i].setColor("255;11;11");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDspritenemyObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 5, 5, 2, 1, 0.08, false, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17303548);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17310132);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("move", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);} //End of subevents
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17319148);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects2Objects, (gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0] : null), null);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(1).getChild(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(1).getChild(1)).setNumber(8);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Dmg", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList19(runtimeScene);} //End of subevents
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


};gdjs.Untitled_32sceneCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects2[k] = gdjs.Untitled_32sceneCode.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].setColor("0;237;255");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.8, 2, 2, 2, 2, 0.08, false, null);
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[k] = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[k] = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(3);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Def").setNumber(25);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").add(5);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17361100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects3[i].setColor("42;69;133");
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17361100, gdjs.Untitled_32sceneCode.asyncCallback17361100);
gdjs.Untitled_32sceneCode.eventsList23 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDBoxObjects2) asyncObjectsList.addObject("Box", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17361100(runtimeScene, asyncObjectsList)), 17361100, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects2[k] = gdjs.Untitled_32sceneCode.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].setColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.8, 2, 2, 2, 2, 0.08, false, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17364420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects3[i].setColor("42;69;133");
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17364420, gdjs.Untitled_32sceneCode.asyncCallback17364420);
gdjs.Untitled_32sceneCode.eventsList25 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDBoxObjects2) asyncObjectsList.addObject("Box", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17364420(runtimeScene, asyncObjectsList)), 17364420, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects2[k] = gdjs.Untitled_32sceneCode.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].setColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.8, 2, 2, 2, 2, 0.08, false, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList25(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17367916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects3[i].setColor("42;69;133");
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17367916, gdjs.Untitled_32sceneCode.asyncCallback17367916);
gdjs.Untitled_32sceneCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDBoxObjects2) asyncObjectsList.addObject("Box", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17367916(runtimeScene, asyncObjectsList)), 17367916, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects2[k] = gdjs.Untitled_32sceneCode.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].setColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.8, 2, 2, 2, 2, 0.08, false, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17371316 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects3[i].setColor("42;69;133");
}
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17371316, gdjs.Untitled_32sceneCode.asyncCallback17371316);
gdjs.Untitled_32sceneCode.eventsList29 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
for (const obj of gdjs.Untitled_32sceneCode.GDBoxObjects2) asyncObjectsList.addObject("Box", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17371316(runtimeScene, asyncObjectsList)), 17371316, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects2[k] = gdjs.Untitled_32sceneCode.GDBoxObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].setColor("126;211;33");
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.8, 2, 2, 2, 2, 0.08, false, null);
}
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects1Objects = Hashtable.newFrom({"text": gdjs.Untitled_32sceneCode.GDtextObjects1});
gdjs.Untitled_32sceneCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(1).setString("None");
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(2).setString(" ");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").add(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").add(20);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(1).setString("None");
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(2).setString(" ");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").add(15);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList26(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(1).setString("None");
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(2).setString(" ");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").add(20);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Def").add(10);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(1).setString("None");
}
{runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(2).setString(" ");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").add(50);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(0).getAsNumber() == -1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDtextObjects1Objects, (gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1[0] : null), null);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariables().getFromIndex(0)) == "Hp" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects2[k] = gdjs.Untitled_32sceneCode.GDtextObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].getBehavior("Text").setText("Hp: " + runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Hp").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariables().getFromIndex(0)) == "HP" ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects2[k] = gdjs.Untitled_32sceneCode.GDtextObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].getBehavior("Text").setText("Hp: " + runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariables().getFromIndex(0)) == "m" + ((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects2[k] = gdjs.Untitled_32sceneCode.GDtextObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].setTint("36;156;232");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariables().getFromIndex(0)) == "i" + ((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects2[k] = gdjs.Untitled_32sceneCode.GDtextObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].setTint("36;156;232");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariables().getFromIndex(0)) == "i" + ((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsString()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects2[k] = gdjs.Untitled_32sceneCode.GDtextObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDtextObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i0" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i1" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i2" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i3" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i4" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i5" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i6" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i7" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "i8" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2_1final, gdjs.Untitled_32sceneCode.GDtextObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].setTint("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.Untitled_32sceneCode.GDtextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects2.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects2[i].getVariables().getFromIndex(0)) == "m" + ((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsString()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects2[k] = gdjs.Untitled_32sceneCode.GDtextObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDtextObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "m0" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "m1" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "m2" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2, gdjs.Untitled_32sceneCode.GDtextObjects3);

for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDtextObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariableString(gdjs.Untitled_32sceneCode.GDtextObjects3[i].getVariables().getFromIndex(0)) == "m3" ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDtextObjects3[k] = gdjs.Untitled_32sceneCode.GDtextObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDtextObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDtextObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDtextObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDtextObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDtextObjects2_1final.push(gdjs.Untitled_32sceneCode.GDtextObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDtextObjects2_1final, gdjs.Untitled_32sceneCode.GDtextObjects2);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDtextObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDtextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDtextObjects2[i].setTint("255;255;255");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)) < gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(1).getChild(1).getAsNumber());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)) > gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(1).getChild(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[k] = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(1).getChild(0).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flavour_Text"), gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(((gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild(2).getAsString());
}
}
}

}


{

gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[i].IsDirectionPushed4Way("Up", null) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[k] = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final.push(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final, gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17348932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)).sub(1);
}
}
}

}


{

gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Down", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[i].IsDirectionPushed4Way("Down", null) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[k] = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final.push(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2_1final, gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17350124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewPanelSprite"), gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].returnVariable(gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}
}

}


{

gdjs.Untitled_32sceneCode.GDbtnZObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("btnZ"), gdjs.Untitled_32sceneCode.GDbtnZObjects3);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnZObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbtnZObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDbtnZObjects3[k] = gdjs.Untitled_32sceneCode.GDbtnZObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnZObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDbtnZObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDbtnZObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final.push(gdjs.Untitled_32sceneCode.GDbtnZObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDbtnZObjects2_1final, gdjs.Untitled_32sceneCode.GDbtnZObjects2);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList22(runtimeScene);} //End of subevents
}

}


{

gdjs.Untitled_32sceneCode.GDbtnZObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDbtnZObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("btnZ"), gdjs.Untitled_32sceneCode.GDbtnZObjects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnZObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbtnZObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GDbtnZObjects2[k] = gdjs.Untitled_32sceneCode.GDbtnZObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnZObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDbtnZObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDbtnZObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDbtnZObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDbtnZObjects1_1final.push(gdjs.Untitled_32sceneCode.GDbtnZObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDbtnZObjects1_1final, gdjs.Untitled_32sceneCode.GDbtnZObjects1);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17374124);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flavour_Text"), gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2[i].getBehavior("Text").setText("   ");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17375316);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flavour_Text"), gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber())).getAsString());
}
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbarrierObjects1Objects = Hashtable.newFrom({"barrier": gdjs.Untitled_32sceneCode.GDbarrierObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsoulObjects1Objects = Hashtable.newFrom({"soul": gdjs.Untitled_32sceneCode.GDsoulObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletSpinObjects1Objects = Hashtable.newFrom({"bulletSpin": gdjs.Untitled_32sceneCode.GDbulletSpinObjects1});
gdjs.Untitled_32sceneCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Box"), gdjs.Untitled_32sceneCode.GDBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBoxObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getVariableBoolean(gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBoxObjects1[k] = gdjs.Untitled_32sceneCode.GDBoxObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBoxObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDBoxObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBoxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBoxObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale((25 / 60), 5, 5, 5, 5, 0.08, false, null);
}
}
}

}


};gdjs.Untitled_32sceneCode.eventsList35 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnZ"), gdjs.Untitled_32sceneCode.GDbtnZObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnZObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbtnZObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbtnZObjects2[k] = gdjs.Untitled_32sceneCode.GDbtnZObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnZObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2[k] = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDbtnZObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbtnZObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbtnZObjects2[i].hide();
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnZ"), gdjs.Untitled_32sceneCode.GDbtnZObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnZObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDbtnZObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbtnZObjects1[k] = gdjs.Untitled_32sceneCode.GDbtnZObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnZObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDbtnZObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbtnZObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbtnZObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1[i].hide(false);
}
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback17377916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{gdjs.evtTools.camera.showLayer(runtimeScene, "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Ui");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.idToCallbackMap.set(17377916, gdjs.Untitled_32sceneCode.asyncCallback17377916);
gdjs.Untitled_32sceneCode.eventsList36 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback17377916(runtimeScene, asyncObjectsList)), 17377916, asyncObjectsList);
}
}

}


};gdjs.Untitled_32sceneCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList36(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Untitled_32sceneCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.Untitled_32sceneCode.GDbarrierObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 4, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDbackObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDbackObjects1[0] : null), true, "", 0);
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbarrierObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbarrierObjects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Ui");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "");
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList20(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList32(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList33(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("barrier"), gdjs.Untitled_32sceneCode.GDbarrierObjects1);
gdjs.copyArray(runtimeScene.getObjects("soul"), gdjs.Untitled_32sceneCode.GDsoulObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsoulObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsoulObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbarrierObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bulletSpin"), gdjs.Untitled_32sceneCode.GDbulletSpinObjects1);
gdjs.copyArray(runtimeScene.getObjects("soul"), gdjs.Untitled_32sceneCode.GDsoulObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDsoulObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDbulletSpinObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDsoulObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsoulObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsoulObjects1[i].getBehavior("Flash").Flash(0, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(1).getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").sub(Math.round((runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Atk").getAsNumber() * 3 - runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Def").getAsNumber()) / 4));
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList34(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getChild(0).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("soul"), gdjs.Untitled_32sceneCode.GDsoulObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDsoulObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDsoulObjects1[i].getBehavior("Flash").Stop(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(3).getChild("MaxHP").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("MaxHP").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").getAsNumber() > runtimeScene.getGame().getVariables().getFromIndex(3).getChild("MaxStam").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Stam").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("MaxStam").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ShadedDarkJoystick"), gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnZ"), gdjs.Untitled_32sceneCode.GDbtnZObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbtnZObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbtnZObjects1[i].hide();
}
for(var i = 0, len = gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnH"), gdjs.Untitled_32sceneCode.GDbtnHObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbtnHObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbtnHObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbtnHObjects1[k] = gdjs.Untitled_32sceneCode.GDbtnHObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbtnHObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList35(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Alternia 08 - dESPERADO ROCKET CHAIRS, - Sennar Mercer (youtube).mp3", 1, true, 100, 1);
}

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getXOffset() - (0.6));
}
}
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].setYOffset(gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1[i].getYOffset() - (0.6));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getChild("HP").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild("Hp").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDtextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList38(runtimeScene);
gdjs.Untitled_32sceneCode.GDtextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDtextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBoxObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbackObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDspritenemyObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAttackBarObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDAttackTargetObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDmgPopObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsoulObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbarrierObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbulletSpinObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFlashObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDFlavour_9595TextObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScreenOrientationCheckerObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDShadedDarkJoystickObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbtnZObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDbtnHObjects4.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
