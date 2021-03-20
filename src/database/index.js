// Mongo connection
import mongoose from "mongoose";

import databaseConfig from "@configurations/database";

class DatabaseConnector {
    constructor() {
        this.initMongo();
    }

    initMongo() {
        const { connectionUrl, driverOptions } = databaseConfig.mongo;
        this.mongoConnection = mongoose.connect(connectionUrl, driverOptions);
    }
}

export default new DatabaseConnector();
