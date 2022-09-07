class Model {
    constructor(tag, className, parent) {
        const node = document.createElement(tag)
        node.className = className
        parent.append(node)
        this.node = node
    }
}

class View extends Model {
    constructor(tag, className, parent) {
        super(tag, className, parent)
        const code = new Model("div", "code-image", this.node)
        const content = new Model("div", "content", this.node)
        const text_one = new Model("p", "content__one", content.node)
        const text_two = new Model("p", "content__two", content.node)
    }
}

const wrapper = new View("div", "wrapper", document.body)

