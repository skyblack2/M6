gdjs.Q2Code = {};
gdjs.Q2Code.GDNewObjectObjects1= [];
gdjs.Q2Code.GDNewObjectObjects2= [];

gdjs.Q2Code.conditionTrue_0 = {val:false};
gdjs.Q2Code.condition0IsTrue_0 = {val:false};
gdjs.Q2Code.condition1IsTrue_0 = {val:false};


gdjs.Q2Code.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Q2Code.condition0IsTrue_0.val = false;
{
gdjs.Q2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Q2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


{
}

}


}; //End of gdjs.Q2Code.eventsList0xb5aa0


gdjs.Q2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q2Code.GDNewObjectObjects1.length = 0;
gdjs.Q2Code.GDNewObjectObjects2.length = 0;

gdjs.Q2Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Q2Code'] = gdjs.Q2Code;
