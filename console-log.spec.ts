import { Setup,
         SetupFixture,
         Teardown,
         TeardownFixture,
         Test,
         TestCase,
         TestFixture,
         Expect } from "alsatian";

@TestFixture("test console logging")
export class ConsoleLoggingTests {

    @Setup
    public setup() {
        console.log("setup");
    }

    @SetupFixture
    public setupFixture() {
        console.log("setup fixture");
    }

    @Teardown
    public teardown() {
        console.log("teardown");
    }

    @TeardownFixture
    public teardownFixture() {
        console.log("teardown fixture");
    }

    @Test("console logging")
    public consoleLog() {
        console.log("before expectation");

        Expect(2 + 2).toBe(4);

        console.log("after expectation");
    }

    @TestCase(2)
    @TestCase(3)
    @TestCase(4)
    @Test("console logging cases")
    public consoleLogTestCases(aNumber: number) {
        console.log("before expectation");

        Expect(aNumber + aNumber).toBe(2 * aNumber);

        console.log("after expectation");
    }

}