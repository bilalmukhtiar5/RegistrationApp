const Registration = require('../models/registration.model')


// This function is used to create a new registration
exports.createRegistration = async (req, res) => {
    console.log("Inside createRegistration");
    let findUser = await Registration.findOne({ name: req.body.name, contact: req.body.contact })

    if (findUser) {
        return res.json({ status: 400, success: false, message: "User already exists" })
    }
    try {
        console.log('Data received:', req.body);
        const registration = await Registration.create(req.body);
        return res.json({ status: 200, success: true, message: "Registration created successfully", registration })

    } catch (error) {
        console.log("error from createRegistration ", error.message)
        throw new Error(error.message)
    }

}

// This function is used to get all registrations
exports.getRegistration = async (req, res) => {

    try {
        const registrations = await Registration.find();
        return res.json({ status: 200, success: true, message: "All registration fetched", registrations })
    } catch (error) {
        console.log(error.message)
    }

}

// This function is used to get a registration by ID
exports.getRegistrationById = async (req, res) => {

    try {
        const { id } = req.params;
        const registration = await Registration.findOne({ _id: id });
        return res.json({ status: 200, success: true, message: "registration fetched", registration })
    } catch (error) {
        console.log(error.message)
    }

}

// This function is used to update a registration by ID
exports.updateRegistration = async (req, res) => {

    try {
        const { id } = req.params;
        const registration = await Registration.findOneAndUpdate({ _id: id }, req.body, { new: true });
        return res.json({ status: 200, success: true, message: "registration Updated Successfully", registration })
    } catch (error) {
        console.log(error.message)
    }

}

// This function is used to delete a registration by ID
exports.deleteRegistration = async (req, res) => {

    try {
        const { id } = req.params;
        const registration = await Registration.findOneAndDelete({ _id: id });
        return res.json({ status: 200, success: true, message: "registration Deleted Successfully" })
    } catch (error) {
        console.log(error.message)
    }

}