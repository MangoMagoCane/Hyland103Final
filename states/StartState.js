class StartState extends BaseState {
    constructor() {
        super();
        this.satellites = [];
        this.object_count = SC_objects.length;
        this.current_object = 0;
        this.object = SC_objects[this.current_object];

        this.testBool = false;
    }

    update() {
        if (keysPressed.w) {
            if (this.current_object === 0) {
                this.current_object = this.object_count-1;
            } else {
                this.current_object--;
            }
            console.log(this.current_object);
        }

        if (keysPressed.s) {
            if (this.current_object === this.object_count-1) {
                this.current_object = 0;
            } else {
                this.current_object++;
            }
            console.log(this.current_object);

        }

        this.object = SC_objects[this.current_object];

        if (keysPressed.Enter) {
            this.object.forEach(params => {
                this.satellites.push(new Satellite(params));
            });
            console.log(this.satellites);
            gStateMachine.change('play', {
                'satellites': this.satellites
            })
        }
    }

    display() {
        for (let i = 0; i < this.object.length; i++) {
            let obj = this.object[i];
            text(obj.skin, 0, 16*(i+1));
            ellipse(obj.x+width/2, obj.y+height/2, 30);
        }
    }
}
