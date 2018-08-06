new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
    },
    methods: {
        increase(step, event) {
            this.counter += step;
            console.dir(event);
        },
        updateCoordinates(e) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe() {
            alert("aaa!");
        }
    }
});