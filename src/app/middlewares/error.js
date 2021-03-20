import Youch from "youch";

export default async (err, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
        const { error: debugError } = await new Youch(err, req).toJSON();
        return res.status(err.statusCode || 500).json(debugError);
    }

    if (!err.statusCode || err.statusCode === 500)
        res.status(500).json({ error: "Internal Server Error" });

    return res.status(err.statusCode).json({ error: err.message });
};
