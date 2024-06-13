
interface Birds {
    eat():void;
}

interface FlyingBird {
    fly():void;
}

interface RunningBird {
    run():void;
}

interface SwimmerBird {
    swim():void;
}

class Tucan implements Birds, FlyingBird{

    public fly() {};
    public eat() {};

}

class HuminBird implements Birds, FlyingBird{
    
    public fly() {};
    public eat() {};

}

class Ostrich implements Birds, RunningBird {

    public eat() {};
    public run() {};

}

class Penguin implements Birds, SwimmerBird {

    public eat() {};
    public swim() {};

}