class Model {
    constructor({ onMemChanged}) {
        this.mem = {};
        this.onMemChanged = onMemChanged;
    }
    createMem(textUp, textDown) {
        this.mem = {
            textUp,
            textDown
        }
        this.onMemChanged(this.mem);
        return this.mem;
    }
}
