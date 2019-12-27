import * as SRV from "./organizationServices";

describe("Organization service", () => {
    it("should obligate informe all organization attributes (organization name, user, password)", async () => {
        let aux = null;
        await SRV.createOrganization({}).catch(({ name, email, password }) => {
            aux = (name || email || password) && "fileds required";
        });
        expect(aux).toBe("fileds required");

        await SRV.createOrganization({
            name: "InstituteXYZ",
            email: "info@Institute.com"
        }).catch(({ name, email, password }) => {
            aux =
                (name === undefined || email === undefined || password) &&
                "password required";
        });
        expect(aux).toBe("password required");

        await SRV.createOrganization({
            name: "InstituteXYZ",
            email: "info@Institute.com",
            password: "Pa&&0word"
        }).then(() => {
            aux = "ok";
        });

        expect(aux).toBe("ok");
    });

    it("organization name should be greater then 4 and lesser then 20", async () => {
        let aux = null;
        await SRV.createOrganization({
            name: "Abc",
            email: "info@Institute.com",
            password: "Pa&&0word"
        }).catch(error => {
            aux = error.name.min.message;
        });
        expect(aux).toBe("Must be greater than 4");

        await SRV.createOrganization({
            name: "AbcdfeghijAbcdfeghij1",
            email: "info@Institute.com",
            password: "Pa&&0word"
        }).catch(error => {
            aux = error.name.max.message;
        });
        expect(aux).toBe("Must be less than 20");
    });

    it("organization name should not contain special characters", async () => {
        let aux = null;
        await SRV.createOrganization({
            name: "012345@$%&*(",
            email: "info@Institute.com",
            password: "Pa&&0word"
        }).catch(({ name }) => {
            aux = name && "name is invalid";
        });
        expect(aux).toBe("name is invalid");
    });

    test.todo("organization name should be unique");

    it("organization email should contain a valid format", async () => {
        let aux = null;
        await SRV.createOrganization({
            name: "InstituteXYZ",
            email: "infoInstitute.com",
            password: "Pa&&0word"
        }).catch(({ email }) => {
            aux = email.test.message;
        });
        expect(aux).toBe("Parameter data did not pass regex test.");
    });

    test.todo("organization email should be unique");

    it("organization password should be greater then 8 and lesser then 10", async () => {
        let aux = null;
        await SRV.createOrganization({
            name: "InstituteXYZ",
            email: "info@Institute.com",
            password: "Pa&&0wo"
        }).catch(({ password }) => {
            aux = password.min.message;
        });
        expect(aux).toBe("Must be greater than 8");

        await SRV.createOrganization({
            name: "InstituteXYZ",
            email: "info@Institute.com",
            password: "Pa&&0678901"
        }).catch(({ password }) => {
            aux = password.max.message;
        });
        expect(aux).toBe("Must be less than 10");
    });
});
