import { writeFile } from "fs/promises";
import ERROR from "../constants.js";
import { getDirname } from "../utils.js";

const create = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const dstPath = `${__dirname}/files/fresh.txt`;
        const content = "I am fresh and young";

        await writeFile(dstPath, content, { flag: "wx" });
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await create();
