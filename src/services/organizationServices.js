export const createOrganization = ({name,email,password}) => {
    if (!name || !email || !password)
        throw new Error("The propers name, email and password muss be informed");

    if (name.length < 4){
        throw new Error("The organization name should be greater then 4 and lesser then 20");
    }

    if (name.length > 20){
        throw new Error("The organization name should be greater then 4 and lesser then 20");
    }
    // return true
};
