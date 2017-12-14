//
import { combineForms } from 'react-redux-form';

export default combineForms({
    login: {
        email:    '',
        password: ''
    },
    signup: {
        username:        '',
        email:           '',
        password:        '',
        passwordConfirm: ''
    },
    user: {
        profile: {
            username: '',
            avatar:   ''
        },
        password: {
            newPassword: '',
            oldPassword: ''
        }
    }
},
'forms');
