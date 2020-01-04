gdjs.Q3Code = {};
gdjs.Q3Code.GDNewObjectObjects1= [];
gdjs.Q3Code.GDNewObjectObjects2= [];

gdjs.Q3Code.conditionTrue_0 = {val:false};
gdjs.Q3Code.condition0IsTrue_0 = {val:false};
gdjs.Q3Code.condition1IsTrue_0 = {val:false};


gdjs.Q3Code.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Q3Code.condition0IsTrue_0.val = false;
{
gdjs.Q3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Q3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q3Code.eventsList0xb5aa0


gdjs.Q3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q3Code.GDNewObjectObjects1.length = 0;
gdjs.Q3Code.GDNewObjectObjects2.length = 0;

gdjs.Q3Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Q3Code'] = gdjs.Q3Code;
