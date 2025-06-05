class HashMap {
  constructor(loadFactor = 0.8, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.bucketList = Array(capacity).fill([]);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  bucket(key) {
    let hashCode = this.hash(key);

    return this.bucketList[hashCode % this.bucketList.length];
  }

  get(bucket, key) {
    for (let e of bucket) {
      if (e.key === key) {
        return e;
      }
    }

    return null;
  }

  set(key, value) {
    let bucket = this.bucket(key);
    let entry = this.get(bucket, key);

    if (entry) {
      entry.value = value;
      return;
    }
    bucket.push({ key, value });
  }

  remove(key) {}
}
