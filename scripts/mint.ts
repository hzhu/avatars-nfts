const { Wallet } = require("@ethersproject/wallet");
const { Contract } = require("@ethersproject/contracts");
const { StaticJsonRpcProvider } = require("@ethersproject/providers");
const ABI = require("./ABI.json");

const GOERLI_ALCHEMY_API_KEY = "alchemy-api-key";
const PRIVATE_KEY = "goerli-account-private-key";

const NFT_CONTRACT = "0x6777b115A5656Ac8A43f9b7a18667807A18AEC65";
const RPC_URL = `https://eth-goerli.g.alchemy.com/v2/${GOERLI_ALCHEMY_API_KEY}`;
const provider = new StaticJsonRpcProvider(RPC_URL);
const wallet = new Wallet(PRIVATE_KEY);
const signer = wallet.connect(provider);
const contract = new Contract(NFT_CONTRACT, ABI, signer);

const mint = async (tokenId: string) => {
  try {
    const transaction = await contract.functions.safeMint(
      "0x8C26f12FD8377c0d17C699BFb21df9a87962b119", // this account will receive the NFT
      tokenId
    );
    console.log(transaction);
  } catch (error) {
    console.error(error, "<-sad");
  }
};

mint("0"); // mint the NFT with an tokenId of 
