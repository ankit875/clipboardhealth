const { deterministicPartitionKey } = require("./dpk");
const { createHash } = require("crypto");

describe("deterministicPartitionKey", () => {
  test("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  test("Returns event partition key for string types", () => {
    const event = {
      partitionKey: "SAMPLE_PARTITION_KEY"
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(event.partitionKey);
  })

  test("Returns event partition key as string for non-string types", () => {
    const event = {
      partitionKey: true
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("true");
  })

  test("Returns event string hash when no partition key is available", () => {
    const event = {}
    const eventHash = createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(eventHash);
  })

  test("Returns event string hash when no partition key is available", () => {
    const event = {}
    const eventHash = createHash("sha3-512").update(JSON.stringify(event)).digest("hex")
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(eventHash);
  })

  test("Returns hashed value when string length is more than 256 character", () => {
    const event = {
      partitionKey: "HELLO".repeat(256)
    }
    const eventHash = createHash("sha3-512").update(event.partitionKey).digest("hex")
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(eventHash);
  })

});