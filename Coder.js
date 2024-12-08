class Coder {
    #code
    constructor(code) {
        this.#code = code
    }
    #init(code) {
        let result = code
        // HTML highlight
        const html = new DOMParser().parseFromString(result, 'text/html')
        const nodes = html.querySelectorAll("*")
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i]
            const tag = node.tagName
            result = result.replace(node.outerHTML, `<span class="tag">${tag}</span>`)
        }
        console.log(nodes)
        return result
    }

    get() {
        return this.#init(this.#code)
    }
}