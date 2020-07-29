print "Hello World"
import env3d

def object1():
    myobj = env3d.GameObject()
    myobj.set_texture('textures/doty.png')
    for i in range(5):
        myobj.move_to(5,5,5)
        myobj.move_to(9,5,5)
    return myobj

def object2():
    myobj2 = env3d.GameObject()
    myobj2.move_to(5,1,5)
    myobj2.move_to(9,1,5)
    myobj2.set_texture('textures/doty.png')
    return myobj2

object2().on_complete(object1)
