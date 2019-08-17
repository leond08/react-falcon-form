import 'bootstrap/dist/js/bootstrap.bundle'
import $ from 'jquery'


export default class ToolTip {
    constructor(props) {
        this.target = props.target
        this.options = props.options || {}
        this.message = props.message
        this.position = props.options.position

        this.create()
    }


    create() {
        this.target.setAttribute("data-toggle", "tooltip")
        this.target.setAttribute("data-placement", this.position)
        this.target.setAttribute("title", this.message)

        $(this.target).tooltip()
    }
    
}