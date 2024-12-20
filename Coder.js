class Coder {
    #code
    constructor(code) {
        this.#code = code
    }
    #init(code) {
        let result = ""
        let CODE = code
        // HTML highlight
        const html = new DOMParser().parseFromString(CODE, 'text/html')
        const nodes = html.querySelectorAll("*")
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i]
            const tag = node.tagName.toLowerCase()
            const attrs = node.attributes
            console.log(attrs)
            result += `&lt;<span class="tag">${tag}</span>&gt;`
        }
        return result
    }

    get() {
        return this.#init(this.#code)
    }
}