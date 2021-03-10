import { NEW_INSTANCE, SEED_INSTANCE } from "./types";

export const newInstance = () => ({
  type : NEW_INSTANCE
})

export const seedInstance = (web3,accounts, instance, storageValue) => ({
  type : SEED_INSTANCE,
  web3,
  accounts,
  instance,
  storageValue,
})