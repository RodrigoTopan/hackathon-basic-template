import customerService from "@services/CustomerService";

class CustomerController {
    async index(req, res) {
        const customers = await customerService.findByPage({
            page: req.query.page,
            limit: 20,
        });
        return res.json(customers);
    }

    async find(req, res) {
        const customer = await customerService.findById(req.params.id);
        return res.json(customer);
    }

    async store(req, res) {
        const { id, name, email } = await customerService.create({
            name: req.body.name,
            email: req.body.email,
        });
        return res.json({ id, name, email });
    }

    async update(req, res) {
        const { id, name, email } = await customerService.update({
            id: req.params.id,
            name: req.body.name,
            email: req.body.email,
        });
        return res.json({ id, name, email });
    }

    async delete(req, res) {
        await customerService.delete(req.params.id);
        return res.json({ message: "Customer successfully removed " });
    }
}

export default new CustomerController();
