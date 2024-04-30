class PlayState extends BaseState {
    constructor() {
        super();
        this.gravity = 10;
    }

    enter(params) {
        this.satellites = params.satellites;
        this.satCount = this.satellites.length;
    }

    update() {
        this.satellites.forEach(satellite => {
            satellite.update();
        });

        for (let i = 0; i < this.satCount; i++) {
            let firstBody = this.satellites[i];
            firstBody.sumAccel_x = 0;
            firstBody.sumAccel_y = 0;

            for (let j = 0; j < this.satCount; j++) {
                if (i != j) {
                    let secondBody = this.satellites[j];
                    let distance_x = firstBody.x - secondBody.x
                    let distance_y = firstBody.y - secondBody.y
                    let hypotenuse = Math.sqrt(distance_x**2 + distance_y**2);

                    let gravitational_F = (this.gravity * secondBody.mass) / hypotenuse**2;
                    let angle = -Math.atan(distance_y / distance_x);

                    let accel_x = gravitational_F * Math.cos(angle);
                    let accel_y = -gravitational_F * Math.sin(angle);

                    if (distance_x > 0) {
                        accel_x *= -1;
                        accel_y *= -1;
                    }

                    firstBody.sumAccel_x += accel_x;
                    firstBody.sumAccel_y += accel_y;
                }
            }
        }   
    }

    display() {
        this.satellites.forEach(satellite => {
            satellite.display();
        });
    }
}