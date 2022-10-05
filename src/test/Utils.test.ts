import { IncomingMessage } from 'http';
import { Utils } from '../app/Utils/Utils'

describe.skip('Utils test suite', () => {
    test('getRequestPath valid request', () => {
        const request = {
            url: 'http://localhost:8080/login'
        } as IncomingMessage;
        const resultPath = Utils.getRequestBasePath(request);
        expect(resultPath).toBe('login');
    });
});