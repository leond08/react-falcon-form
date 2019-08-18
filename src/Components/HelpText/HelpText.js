export default class HelpText {
    constructor(props) {
        this.target = props.target
        this.message = props.message

        this.create()
    }

    create() {
        let className = 'text-muted f-help-text'
        this.container = document.createElement('small')
        this.container.className = className
        this.container.innerHTML = this.message
        //see https://gomakethings.com/how-to-insert-an-element-after-another-one-in-the-dom-with-vanilla-javascript/
        this.target.after(this.container)
    }
}