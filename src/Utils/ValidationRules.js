export function registerRules(data, props) {
    const errors = {};

    ['First_name', 'Last_name', 'Email', 'Password'].forEach(field => {
        let lowerCaseField = field.toLowerCase()
        if (!data[lowerCaseField]) {
            errors[lowerCaseField] = field.replace('_', ' ') + ' is required';
        }
        if (lowerCaseField === 'email' && data[lowerCaseField]) {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data[lowerCaseField])) {
                errors[lowerCaseField] = 'Invalid email address'
            }
        }
    });
    return errors;
}