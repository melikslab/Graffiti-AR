//THIS ONLY WORKS IN INSTAGRAM
//THIS DOES NOT CURRENTLY WORK FOR FACEBOOK

// Required Modules
const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Find your objects
const emitter0 = Scene.root.find('Spray');

// Set an index of 0
const index = 0;

// Create a configuration object
const configuration = {

  // The index of the selected item in the picker
  selectedIndex: index,

  // The image textures to use as the items in the picker
  // Make sure these textures are set to uncompressed or this *will not work*
  items: [
    {image_texture: Textures.get('black')},
    {image_texture: Textures.get('blue')},
    {image_texture: Textures.get('red')},
    {image_texture: Textures.get('yellow')},
    {image_texture: Textures.get('green')},
    {image_texture: Textures.get('white')}
  ],

  // OPTIONAL:
  // In this example we are switching materials
  // so I have included an object of materials
  // that matches the order of the textures above
  mats: [
    {material: Materials.get("black")},
    {material: Materials.get("blue")},
    {material: Materials.get("red")},
    {material: Materials.get("yellow")},
    {material: Materials.get("green")},
    {material: Materials.get("white")}
  ]
};

// Create our picker
const picker = NativeUI.picker;

// Load the configuration
picker.configure(configuration);

// Set the visibility to true
picker.visible = true;

// When the user selects an item form the picker, pass the index
// so we can select the materials to switch out
picker.selectedIndex.monitor().subscribe(function(val) {

    // Set the material to the first rectangle
    emitter0.material = configuration.mats[val.newValue].material;

});