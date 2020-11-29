
export const TYPE_SAVE_USER_DETAILS = "TYPE_SAVE_USER_DETAILS"
export function saveUserDetailsInRedux(details) {
    return {
        type: TYPE_SAVE_USER_DETAILS,
        value: details
    }
}
