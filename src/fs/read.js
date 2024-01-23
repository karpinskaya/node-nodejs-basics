import { readFile } from "fs/promises";
import ERROR from "../constants.js";
import { getDirname } from "../utils.js";

const read = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const filePath = `${__dirname}/files/fileToRead.txt`;
        const content = await readFile(filePath, { encoding: "utf8" });

        console.log(content);
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await read();
