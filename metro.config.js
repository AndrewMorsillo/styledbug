// /**
//  * Metro configuration for React Native
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
//
// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// };
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const blacklist = require('metro-config/src/defaults/blacklist');
//https://github.com/facebook/react-native/issues/21242#issuecomment-445784118
//had to add this blacklist hax to stop metro from resolving wrong version of react-native from deps and crashing the bundler

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        // this bit of config just makes it so you don't have to add "native" on the end of some imports like styled-components
        //https://github.com/styled-components/styled-components/issues/1495
        resolverMainFields: ['react-native', 'main'],
        blacklistRE: blacklist([
            /node_modules\/.*\/node_modules\/react-native\/.*/,
        ])
    },
};
