const hello = require("../src/hello")


test("should return Hello Estrella!", function() {
    // setup
    const name = "Estrella"
    const expected = "Hello Estrella!"
    
    // execute
    const result = hello(name)

    // validate
    expect(result).toEqual(expected)
})

it("should return Hello World!", () => {
    // setup
    const expected = "Hello Estrella!"
    
    // execute
    const result = hello()

    // validate
    expect(result).toEqual(expected)
})

it("should return Hello Other Name!", () => {
    // setup
    const name = "Other Name"
    const expected = "Hello Other Name!"
    
    // execute
    const result = hello(name)

    // validate
    expect(result).toEqual(expected)
})