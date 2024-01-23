import { rm } from "fs/promises";
import ERROR from "../constants.js";
import { getDirname } from "../utils.js";

const remove = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const filePath = `${__dirname}/files/fileToRemove.txt`;

        await rm(filePath);
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await remove();
