/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Polygon } from "@thirdweb-dev/chains";
export const NETWORK = Polygon;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x6604bd9D7770035f26B4ACeab2C746fdCE166473";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xf95cae051de3557115cba9655b9799ca675b5c174e00f60fb79cbce9b8e089f8";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://www.polygonscan.com";
