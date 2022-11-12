const BMI = require("./bmi_calculator");

test("Checks if 65 kg. and 169 cm. results to 22.8 BMI", () => {
    expect(BMI(65, 169)).toBe(22.8);
});
