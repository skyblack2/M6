gdjs.Q1Code = {};
gdjs.Q1Code.GDNewObjectObjects1= [];
gdjs.Q1Code.GDNewObjectObjects2= [];

gdjs.Q1Code.conditionTrue_0 = {val:false};
gdjs.Q1Code.condition0IsTrue_0 = {val:false};
gdjs.Q1Code.condition1IsTrue_0 = {val:false};


gdjs.Q1Code.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Q1Code.condition0IsTrue_0.val = false;
{
gdjs.Q1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Q1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.Q1Code.eventsList0xb5aa0


gdjs.Q1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q1Code.GDNewObjectObjects1.length = 0;
gdjs.Q1Code.GDNewObjectObjects2.length = 0;

gdjs.Q1Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Q1Code'] = gdjs.Q1Code;
