import {
  AccountAddress,
  Aptos,
  AptosConfig,
  Network,
} from "@aptos-labs/ts-sdk";

export const getBalance = async (
  accountAddress: AccountAddress,
  coinTypeAddress: AccountAddress,
  network: Network
) => {
  const config = new AptosConfig({ network: network });
  const aptos = new Aptos(config);
  const amount = await aptos.getAccountCoinAmount({
    accountAddress,
    coinType: `${coinTypeAddress.toString()}::moon_coin::MoonCoin`,
  });

  return amount;
};
