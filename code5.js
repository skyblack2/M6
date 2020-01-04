gdjs.Q5Code = {};
gdjs.Q5Code.GDNewObjectObjects1= [];
gdjs.Q5Code.GDNewObjectObjects2= [];

gdjs.Q5Code.conditionTrue_0 = {val:false};
gdjs.Q5Code.condition0IsTrue_0 = {val:false};
gdjs.Q5Code.condition1IsTrue_0 = {val:false};


gdjs.Q5Code.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Q5Code.condition0IsTrue_0.val = false;
{
gdjs.Q5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Q5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


{
}

}


}; //End of gdjs.Q5Code.eventsList0xb5aa0


gdjs.Q5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q5Code.GDNewObjectObjects1.length = 0;
gdjs.Q5Code.GDNewObjectObjects2.length = 0;

gdjs.Q5Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Q5Code'] = gdjs.Q5Code;
