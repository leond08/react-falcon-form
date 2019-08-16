export default class Validation {

    /**
     * Default regular expression
     * 
     */
    static DEFAULT_EXPRESSION = {
        digit: /^[0-9]*$/,
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        letter: /[a-z_]/i,
        alphanum: /^[a-z0-9]+$/i
    }

    /**
     * Validate value upon key press
     * 
     * @param {Object} e the event object
     * @param {String|Array} validationFilter the types of validation i.e letter, alphanum, digit, email
     */
    static onPress(e, validationFilter) {
        const regex = this.DEFAULT_EXPRESSION[validationFilter] ? this.DEFAULT_EXPRESSION[validationFilter] : validationFilter
        const charCode = e.charCode || e.keyCode || e.which;
        const stringCode = String.fromCharCode(charCode);

        if (!regex.test(stringCode)) {
            e.preventDefault();
        }
    }

    /**
     * Validate method
     * 
     * @param {Object} e the event object
     * @param {String|Regex} validationFilter the types of validation i.e letter, alphanum, digit, email
     */
    static validate(e, validationFilter) {
        // validation goes here
        let value = e.target.value
        let validateStatus = true
        const regex = this.DEFAULT_EXPRESSION[validationFilter] ? this.DEFAULT_EXPRESSION[validationFilter] : validationFilter
        if (value && !regex.test(value)) {
            validateStatus = false
        }

        return validateStatus
    }

}