class Coder {
    constructor(code) {
        this.#init(code);
    }
    #init(code) {
        let result = code
        // HTML highlight
        const html = new DOMParser().parseFromString(result, 'text/html')
        console.log(html)
        return result
    }
}