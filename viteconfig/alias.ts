import path from "path";
import { AliasOptions } from "vite";
let aliasmodule: AliasOptions = {
    '@': path.resolve(__dirname, '../src')
}
export {
    aliasmodule
}