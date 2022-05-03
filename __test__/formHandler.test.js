// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler";
import { updateUI } from "../src/client/js/formHandler";

describe("Testing the handleSubmit functionality", () => {
    test("Testing the function exists", () => {
        expect(handleSubmit).toBeDefined();
    })
});
describe("Testing the updateUI functionality", () => {
    test("Testing the function exists", () => {
        expect(updateUI).toBeDefined();
    })
});
