
// Models
import { branchModel } from '../models/branch.js';

export const addBranch = async (req, res) => {

    const branch = new branchModel({
        number:req.number,
        location: req.location,
        managerID:req.managerID,

    })

    const details = await branch.save();
    if (details) {
        res.send({
            status: true,
            details: details
        });
    } else {
        res.send({
            status: false,
        });
    }
}

export const getAllBranches = async (req, res) => {
    const branch = await branchModel.find({});

    res.send(branch);
}
export const getSelectedBranch = async (req, res) => {
    const branch = await VehicleModel.findOne({ _id: req.body.id });
    res.send(branch);
}

export const deleteBranches = async (req, res) => {
    const branch = await branchModel.findOneAndDelete({_id: req.body.id});
    res.send(branch);
}