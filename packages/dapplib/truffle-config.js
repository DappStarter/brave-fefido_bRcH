require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stool crawl often clutch hundred light army gesture'; 
let testAccounts = [
"0xb1ed05e147a3ddc03c0808dd6201747323730a24aa5b146f5d74c9c583d5e789",
"0xf559fb99362da159e0b2c5028b476e995fe74dd2ca7e035d7d0a6bd02c6fe847",
"0xd86b9b141de9fb32bdb7d53faefad9728d63d2331232b3814e7932b2b4fe5501",
"0x1dee297b128968e667ac880c4652ab93df835c1a757bd726c8e7e972bb40e147",
"0x642f265d8c2c510bc66d2158ecc9e16d193573b273382e5101c9599f8bd0913d",
"0x8b0540a655ed81522f8cc542b63268453679db3aa76c5d671bbd8003af917bc7",
"0x285ca17547f0b924a3f3fb842ac54c9f951a7ed0f0f2068d0fb0f62fae7eac9a",
"0xb541e76b68437e28a8ebb83f3561802a000cf0491c67507c2ba7ce0889ba8878",
"0x8f1c925e3cacf9c13c172d92217e53b29a613163c0b59baf6cdaaedd6126df36",
"0x87dbdc4a59275dc8bbccf905441e4cfa6ea826a08af946359dc20790dd8292e2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

