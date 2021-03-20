export default {
    mongo: {
        connectionUrl: process.env.MONGO_URL,
        driverOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
    },
};
