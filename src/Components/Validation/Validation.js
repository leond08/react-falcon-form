'use strict'


export default class Validation {

    /**
     * Default regular expression
     * 
     */
    static DEFAULT_EXPRESSION = {
        digit: /^[0-9]*$/,
        email: /[a-z0-9_\.\-@]/i,
        alpha: /[a-z_]/i,
        alphanum: /[a-z0-9_]/i
    }

    /**
     * Validate method
     * 
     * @param {Object} e the event object
     * @param {string} validationFilter the types of validation i.e alpha, alphanum, digit, email
     */
    static validate(e, validationFilter) {
        // validation goes here
    }

}