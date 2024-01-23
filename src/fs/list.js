import { readdir } from "fs/promises";
import ERROR from "../constants.js";
import { getDirname } from "../utils.js";

const list = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const folderPath = `${__dirname}/files`;
        const files = await readdir(folderPath);

        for (const file of files) {
            console.log(file);
        }
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await list();
