
export default class Validations {

    checkEmailValidation(text, message) {

        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (text == undefined || text.trim() == "") {
            return "please add email address"
        }

        return regex.test(text) ? '' : 'enter proper email address'
    }

    checkEmpty(text, message) {

        return text == undefined || text.trim() == "" ? "Please enter field" : ""
    }
}