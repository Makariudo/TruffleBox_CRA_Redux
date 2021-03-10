import { NEW_INSTANCE, SEED_INSTANCE, CHANGE_FIELD, SUBMIT_VALUE, SEED_VALUE_RECEIPT } from "./types";

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

export const changeField = (value, field) => ({
  type: CHANGE_FIELD,
  payload: { [field]: value },
});

export const submitValue = () => ({
  type: SUBMIT_VALUE
});

export const seedValueReceipt = (value) => ({
  type: SEED_VALUE_RECEIPT,
  payload: value
})