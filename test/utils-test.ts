import Utils from "../src/utils";
import { assert } from "chai";
import "mocha";

describe("utils", function(): void {
  it("isValidAddress() - Valid Classic Address", function(): void {
    // GIVEN a valid classic address.
    const address = "rU6K7V3Po4snVhBBaU29sesqs2qTQJWDw1";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed valid.
    assert.isTrue(validAddress);
  });

  it("isValidAddress() - Valid X Address", function(): void {
    // GIVEN a valid x-address.
    const address = "XVLhHMPHU98es4dbozjVtdWzVrDjtV18pX8yuPT7y4xaEHi";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed valid.
    assert.isTrue(validAddress);
  });

  it("isValidAddress() - Wrong Alphabet", function(): void {
    // GIVEN a base58check address encoded in the wrong alphabet.
    const address = "1EAG1MwmzkG6gRZcYqcRMfC17eMt8TDTit";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed invalid.
    assert.isFalse(validAddress);
  });

  it("isValidAddress() - Invalid Classic Address Checksum", function(): void {
    // GIVEN a classic address which fails checksumming in base58 encoding.
    const address = "rU6K7V3Po4sBBBBBaU29sesqs2qTQJWDw1";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed invalid.
    assert.isFalse(validAddress);
  });

  it("isValidAddress() - Invalid X Address Checksum", function(): void {
    // GIVEN a classic address which fails checksumming in base58 encoding.
    const address = "XVLhHMPHU98es4dbozjVtdWzVrDjtV18pX8yuPT7y4xaEHI";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed invalid.
    assert.isFalse(validAddress);
  });

  it("isValidAddress() - Invalid Characters", function(): void {
    // GIVEN a base58check address which has invalid characters.
    const address = "rU6K7V3Po4sBBBBBaU@#$%qs2qTQJWDw1";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed invalid.
    assert.isFalse(validAddress);
  });

  it("isValidAddress() - Too Long", function(): void {
    // GIVEN a base58check address which has invalid characters.
    const address =
      "rU6K7V3Po4snVhBBaU29sesqs2qTQJWDw1rU6K7V3Po4snVhBBaU29sesqs2qTQJWDw1";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed invalid.
    assert.isFalse(validAddress);
  });

  it("isValidAddress() - Too Short", function(): void {
    // GIVEN a base58check address which has invalid characters.
    const address = "rU6K7V3Po4s2qTQJWDw1";

    // WHEN the address is validated.
    const validAddress = Utils.isValidAddress(address);

    // THEN the address is deemed invalid.
    assert.isFalse(validAddress);
  });
});
