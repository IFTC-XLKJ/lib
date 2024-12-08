class Coder {
    constructor(code) {
        this.get(this.#init(code));
    }
    #init(code) {
        let result = code
        // HTML highlight
        const html = new DOMParser().parseFromString(result, 'text/html')
        const nodes = html.querySelectorAll("*")
        console.log(nodes)
        return result
    }

    get(code) {
        return code
    }
}