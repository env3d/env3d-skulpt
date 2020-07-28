var $builtinmodule = function(name) {
  
  var _m = {};
  
  _m.test = new Sk.builtin.func(function() {
    console.log('test');
  });
  
  _m.GameObject = Sk.misceval.buildClass(_m, function($gbl, $loc) {

    var envObject;
    var _tween;
    
    $loc.__init__ = new Sk.builtin.func(function(self) {
      console.log('Creating GameObject');
      envObject =  new env3d.EnvObject();
      _tween = createjs.Tween.get(envObject);
      env.addObject(envObject);
    });

    $loc.set_texture = new Sk.builtin.func(function(self, _texture) {      
      _tween = _tween.to({ texture: _texture.v });
    });    
    
    $loc.move_to = new Sk.builtin.func(function(self, _x, _y, _z) {      
      _tween = _tween.to({ x: _x.v, y: _y.v, z: _z.v }, 1000);
    });

    $loc.on_complete = new Sk.builtin.func(function(self, _lambda) {
      console.log(_lambda);
      _tween.call( () => 
                   Sk.misceval.callsim(_lambda)
                 );
    });
    
  }, 'GameObject', []);
  
  return _m;
};
