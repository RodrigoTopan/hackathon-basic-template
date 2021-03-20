import path from "path";

export default {
    "~": path.join(__dirname, ".."),
    "@controllers": path.join(__dirname, "..", "app", "controllers"),
    "@models": path.join(__dirname, "..", "app", "models"),
    "@services": path.join(__dirname, "..", "app", "services"),
    "@middlewares": path.join(__dirname, "..", "app", "middlewares"),
    "@validators": path.join(__dirname, "..", "app", "validators"),
    "@cache": path.join(__dirname, "..", "cache"),
    "@utils": path.join(__dirname, "..", "utils"),
    "@configurations": path.join(__dirname, "..", "configurations"),
};
