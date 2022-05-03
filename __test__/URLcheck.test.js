import { URLcheck } from '../src/client/js/URLcheck';

describe('Testing the function "chekURL" for valid url', function () {
    test('Returns true on valid url', function () {
        const urlTest = "https://www.meaningcloud.com/developer/documentation/error-codes";
        const response = URLcheck(urlTest);
        expect(response).toBe(true);
        expect(response).toBeDefined();
    });
});
describe('Testing the function "chekURL" for invalid url', () => {
    let url = "asda";
    test("Return true", () => {
        const response = URLcheck(url);
        expect(response).toBeDefined();
        expect(response).toBeFalsy();
    });
});
