import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";

const ERC1155ContractAddress = "0xE90D7479933E3CA7f4cC0D7A3be362008baa9f59";

export const ERC1155Contract = getContract({
    client: client,
    chain: chain,
    address: ERC1155ContractAddress,

});