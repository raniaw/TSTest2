/* 
Old Version from Utils.ts 
rename in Utils1.ts
 */
/* 


*/
import { Utils } from '../app/Utils/Utils1'

describe.skip('Utils test suite', () => {
    beforeAll(() => {
        console.log('Bevore All');
    })
    beforeEach(() => {
        console.log('Before Each');
    })
    test('first test', () => {
        const abc = Utils.toUCase('abc');
        expect(abc).toBe('ABC');
        console.log('first test work!' , abc );
    });
    test.only('past simple url',() => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login');
        expect(parseUrl.href).toBe('http://localhost:8080/login');
        expect(parseUrl.port).toBe('8080');
        expect(parseUrl.protocol).toBe('http:');
        expect(parseUrl.query).toEqual({});
        console.log('past simple url');
    });
    test('past simple url with query',() => {
        const parseUrl = Utils.parseUrl('http://localhost:8080/login?user=user1&password=pass');
        const expectedEquery={
            user: 'user1',
            password:'pass'
        }
        expect(parseUrl.query).toEqual(expectedEquery);
        expect(expectedEquery).toBe(expectedEquery);
        console.log('past simple url');
    });
    //test.todo('test invalid url');
    test('test invalid url',() => {
        function expectedError(){
            Utils.parseUrl('');
        }
        expect(expectedError).toThrowError();
        console.log('Test invalid')
    });
    test('test invalid url with arrow function',() => {
        const expectedError = () => {
            Utils.parseUrl('');
        }
        expect(expectedError).toThrowError();
        console.log('Test invalid')
    });
    test('test invalid url with try catch',() => {
        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', 'Empty url!');
        }
        console.log('Test invalid try catch')
    });
});