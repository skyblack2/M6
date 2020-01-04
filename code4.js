gdjs.Q4Code = {};
gdjs.Q4Code.GDNewObjectObjects1= [];
gdjs.Q4Code.GDNewObjectObjects2= [];

gdjs.Q4Code.conditionTrue_0 = {val:false};
gdjs.Q4Code.condition0IsTrue_0 = {val:false};
gdjs.Q4Code.condition1IsTrue_0 = {val:false};


gdjs.Q4Code.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Q4Code.condition0IsTrue_0.val = false;
{
gdjs.Q4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Q4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


{
}

}


}; //End of gdjs.Q4Code.eventsList0xb5aa0


gdjs.Q4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Q4Code.GDNewObjectObjects1.length = 0;
gdjs.Q4Code.GDNewObjectObjects2.length = 0;

gdjs.Q4Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Q4Code'] = gdjs.Q4Code;
