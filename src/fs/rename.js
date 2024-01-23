import { rename as renameFile } from 'fs/promises';
import ERROR from '../constants.js';
import { getDirname } from '../utils.js';

const rename = async () => {
    try {
        const __dirname = getDirname(import.meta.url);
        const oldPath = `${__dirname}/files/wrongFilename.txt`;
        const newPath = `${__dirname}/files/properFilename.md`;

        await renameFile(oldPath, newPath);
    } catch {
        console.log(ERROR.FS_OPERATION_FAILED);
    }
};

await rename();
