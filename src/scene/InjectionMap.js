//  These properties get injected into the Scene and map to local systems
//  The map key is the property that is added to the Scene, the value is the Scene.Systems reference
//  These defaults can be modified via the Scene config object

var InjectionMap = {

    game: 'game',

    anims: 'anims',
    cache: 'cache',
    registry: 'registry',
    sound: 'sound',
    textures: 'textures',

    events: 'events',
    cameras: 'cameras',
    add: 'add',
    make: 'make',
    scenePlugin: 'scene',
    displayList: 'children',

    data: 'data',
    input: 'input',
    load: 'load',
    time: 'time',
    tweens: 'tweens',

    arcadePhysics: 'physics',
    impactPhysics: 'impact',
    matterPhysics: 'matter'

};

module.exports = InjectionMap;
