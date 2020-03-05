//Include all the needed modules
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Patches = require('Patches');


const index = 0;

// Create a configuration object
const configuration = {

  // The index of the selected item in the picker
  selectedIndex: index,

  // The image textures to use as the items in the picker
  items: [
    {image_texture: Textures.get('black')},
    {image_texture: Textures.get('white')},
    {image_texture: Textures.get('blue')},
    {image_texture: Textures.get('red')},
    {image_texture: Textures.get('yellow')},
    {image_texture: Textures.get('green')}
  ],

};

const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
  //We are sending the "index" variable to the patch editor.
  //It is a number, so we are using a "Scalar" type of value.
  //The name of the variable that will appear in the patch editor is "colorPick"

  //We pass the value of the picked item
  //to the "colorPick" variable inside of the "Variables From Script" patch.
  Patches.setScalarValue("colorPick", val.newValue);
});


//Slider
const Reactive = require('Reactive');
const CameraInfo = require('CameraInfo');

var slider = NativeUI.slider;
/*var initialValue = 0.32;
NativeUI.slider.value = initialValue;

if(Reactive.or(CameraInfo.isRecordingVideo, CameraInfo.isCapturingPhoto)){
    slider.visible = false;
}
slider.visible = true;

slider.value.monitor().subscribe(function(val) {
    Patches.setScalarValue("sliderValue", val.newValue);
});
*/
var lastSliderValue = 0.35;
Patches.setScalarValue("sliderValue", lastSliderValue);

slider.value.monitor({fireOnInitialValue: false}).subscribe(function(val) {
    lastSliderValue = val.newValue;
    
    let sliderData = { 'sliderVal': lastSliderValue };

    Patches.setScalarValue("sliderValue", val.newValue);
  });
  
  function configureSlider(){
      slider.value = lastSliderValue;
  }
  
  function init()
  {
    configureSlider();
    slider.visible = true;
  }
  
  init();