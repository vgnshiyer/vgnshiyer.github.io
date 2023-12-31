import fs from 'fs';
import path from 'path';

const getFilesRecursively = (folder: string): string[] => {
    const dirents = fs.readdirSync(folder, { withFileTypes: true });
    const files = dirents.map((dirent) => {
        const res = path.resolve(folder, dirent.name);
        return dirent.isDirectory() ? getFilesRecursively(res) : res;
    }
    );
    return Array.prototype.concat(...files);
};

export default getFilesRecursively;