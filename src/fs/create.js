import { writeFile } from "fs/promises";
import path from "path";

import ERROR from "../constants.js";

const create = async () => {
    try {
        const dstPath = path.resolve(`${process.cwd()}/src/fs/files/fresh.txt`);
        const content = "I am fresh and young";

        await writeFile(dstPath, content, { flag: "wx" });
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await create();
