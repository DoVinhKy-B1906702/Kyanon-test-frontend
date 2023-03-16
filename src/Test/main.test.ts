import { validLoginForm } from "./loginform"

describe('validLoginForm()', () => {
    it('should return false when email.length and password.length <= 0',() => {
        expect(validLoginForm({email:'', password: ''})).toBe(false);
    })


    it('should return false when regex password is invalid',() => {
        expect(validLoginForm({email:'ky@gmail.com', password: ''})).toBe(false);
    })

    it('should return false when regex email is invalid',() => {
        expect(validLoginForm({email:'', password: '1Aa#20'})).toBe(false);
    })
    

    it('should return false when regex password and email is valid',() => {
        expect(validLoginForm({email:'haha@gmail.com', password: '1Aa#201a'})).toBe(true);
    })

})