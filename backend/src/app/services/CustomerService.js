import CustomerModel from "@models/Customer";
import HttpError from "@utils/HttpError";

class CustomerService {
    async findByPage({ page, limit = 20 }) {
        const customers = await CustomerModel.find()
            .limit(limit)
            .skip(limit * page)
            .sort({ createdAt: "desc" })
            .lean();

        return customers;
    }

    async findById(id) {
        const customer = await CustomerModel.findById(id).lean();

        if (!customer) {
            throw new HttpError("Customer not found", 404);
        }

        return customer;
    }

    async create({ name, email }) {
        const customerExists = await CustomerModel.findOne({ email }).lean();

        if (customerExists) {
            throw new HttpError("Customer email already exists", 400);
        }

        return CustomerModel.create({ name, email });
    }

    async update({ id, name, email }) {
        const customer = await CustomerModel.findById(id).lean();

        if (!customer) {
            throw new HttpError("Customer does not exist", 404);
        }

        const foundCustomer = await CustomerModel.findOne({ email }).lean();

        if (foundCustomer && foundCustomer._id.toString() !== id) {
            throw new HttpError("Customer email already in use", 400);
        }

        return CustomerModel.findByIdAndUpdate(
            id,
            {
                name,
                email,
            },
            {
                new: true,
            }
        );
    }

    async delete(id) {
        const customer = await CustomerModel.findById(id).lean();

        if (!customer) {
            throw new HttpError("Customer not found", 404);
        }

        await CustomerModel.deleteOne({ _id: id });

        return true;
    }
}

export default new CustomerService();
