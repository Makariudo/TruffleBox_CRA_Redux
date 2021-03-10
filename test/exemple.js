const { assert } = require("chai");
const truffleAssert = require('truffle-assertions');

const should = require("chai").should();
const Storage = artifacts.require("SimpleStorage");


contract("SimpleStorage", accounts => {
  let [account1, account2, account3, account4] = accounts;
  let owner = account1;
  let StorageInstance;
    
  beforeEach(async () => {
    StorageInstance = await Storage.new();
  });

  it("should deploy", async () => {
    should.exist(StorageInstance.address)
  });

})