import requireTransform from 'vite-plugin-require-transform';
const fileRegex = /.ts$|.tsx$|.mjs$/
const importPrefix = '_vite_plugin_require_transform_'
const importPathHandler = Function
const requireTransforms = requireTransform({ fileRegex, importPrefix, importPathHandler })
export {
    requireTransforms
}