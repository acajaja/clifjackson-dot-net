export default class Debugger {
    #_DEBUG = false;
    #_HASCONSOLE = typeof console != 'undefined' ? true : false;

    debug() {
        if (this.#_DEBUG === true) {
            this.#_debug(arguments);
        }            
    }

    disableDebug() {
        this.setDebug(false);
    }

    enableDebug() {
        this.setDebug(true);
    }

    setDebug(onOff) {
        this.#_DEBUG = onOff;
    }

    #_debug() {
        for (let x in arguments) {
            if (this.#_HASCONSOLE) {
                console.info(arguments[x]);
            }
            else {
                alert(arguments[x]);
            }
        }
    }
}
