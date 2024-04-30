class Satellite extends Entity {
    constructor(params) {
        super();
        // this.skin
        this.color = params.color;

        let middle_x = width/2;
        let middle_y = height/2;
        
        this.x = params.x != undefined ? params.x + middle_x : width/2;
        this.y = params.y != undefined ? params.y + middle_y: height/2;
        this.radius = params.radius != undefined ? params.radius : 1;

        this.mass = params.mass != undefined ? params.mass : 10;
        let scale = (3*this.mass/12.56)^(1/3)/4 + 0.2;
        this.scaledRadius = this.radius*scale;

        this.vel_x = params.vel_x != undefined ? params.vel_x : 0;
        this.vel_y = params.vel_y != undefined ? params.vel_y : 0;

        this.sumAccel_x = 0;
        this.sumAccel_y = 0;
    }

    update() {
        this.vel_x += this.sumAccel_x;
        this.vel_y += this.sumAccel_y;

        this.x += this.vel_x ;
        this.y += this.vel_y ;
    }

    display() {
        circle(this.x, this.y, this.scaledRadius);
    }
}