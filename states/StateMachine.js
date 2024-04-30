class StateMachine {
    constructor(states) {
        this.empty = {
            'render': () => {},
            'update': () => {},
            'enter': () => {},
            'exit': () => {}
        };
        this.states = states != undefined ? states : {};
        this.current = this.empty;
    }

    change(stateName, enterParams) {
        let stateStatus = this.states[stateName] != undefined ? true : false;
        console.log(this.states[stateName]);
        // console.log("state exists: " + stateStatus);

        this.current.exit();
        this.current = this.states[stateName];
        this.current.enter(enterParams);
    }

    update() {
        this.current.update();
    }

    render() {
        this.current.display();
    }
}   