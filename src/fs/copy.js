import * as fs from "fs/promises";
import path from "path";
import ERROR from "../constants.js";
import { getDirname } from "../utils.js";

const copy = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const srcPath = `${__dirname}/files`;
        const dstPath = `${__dirname}/files_copy`;
        const files = await fs.readdir(srcPath);

        await fs.mkdir(dstPath);

        for (const file of files) {
            await fs.cp(path.join(srcPath, file), path.join(dstPath, file));
        }
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await copy();
