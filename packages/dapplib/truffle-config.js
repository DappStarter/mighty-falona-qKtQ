require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rebel mad mistake hover another army gate'; 
let testAccounts = [
"0x30ccc1bf5c2b55efb23e9ef946d9f23a7de1c26e6b9bb17f94d0ff353a28e6e6",
"0x1a7ff203541f1aa39fc6f962a80db9c68ad17aaa9ead32b0a1bf6690d9367c78",
"0xdd0b17b3b8ec121de555268e63a4c4dec9011eea0dc021ed177acc48dcfd4d75",
"0xc786bbfb8decc1418bbd8f6ac6ba8b113509fc475c1fadfff41f188bf347f33d",
"0x26809b2c7b1b4b2a0f9bbd047f4192b8e167e73a45ec3af7c3f7fdb55b296e7e",
"0x21d532636d67da5d7d6e37ca2d21f817de1695fe3f6345e2d6aefe3f785b55c9",
"0x15876dca66a3e46df8e58a45391d40fe4815683302d63e984e4155e0efc50123",
"0x3137c4e80fa26c4d1c0ff2b603e2173559b7990e7404e2dc1a1f9bc238a634dc",
"0x9950b023f7e00c9727ccb634cc749fff8b617db2f7e9fd425f84173712755f96",
"0xb887bf5716ef07a7ccfe56f02a1a546d6797d397537ca2c480a741674a9aea02"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

