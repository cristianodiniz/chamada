import * as SRV from "./organizationServices";

describe("Organization service", () => {
    it("should obligate informe all organization attributes (organization name, user, password)", () => {
        expect(() => {
            SRV.createOrganization({});
        }).toThrowError(
            "The propers name, email and password muss be informed"
        );

        expect(() => {
            SRV.createOrganization({
                name: "Institute XYZ",
                email: "info@Institute.com"
            });
        }).toThrowError(
            "The propers name, email and password muss be informed"
        );

        expect(
            SRV.createOrganization({
                name: "Institute XYZ",
                email: "info@Institute.com",
                password: "password"
            })
        );
    });

    it("organization name should be greater then 4 and lesser then 20", () => {
        expect(() =>
            SRV.createOrganization({
                name: "123",
                email: "info@Institute.com",
                password: "password"
            })
        ).toThrowError(
            "The organization name should be greater then 4 and lesser then 20"
        );

        expect(() =>
            SRV.createOrganization({
                name: "123456789012345678901",
                email: "info@Institute.com",
                password: "password"
            })
        ).toThrowError(
            "The organization name should be greater then 4 and lesser then 20"
        );

        expect(
            SRV.createOrganization({
                name: "123456789",
                email: "info@Institute.com",
                password: "password"
            })
        );
    });

    it("organization name should not contain special characters",()=>{

    });

    test.todo("organization name should be unique");

    test.todo("organization email should contain a valid format");

    test.todo("organization email should be unique");

    test.todo(
        "organization password should be greater then 8 and lesser then 10"
    );
});
