import LinkedList from './LinkedList.js'

class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor
    this.capacity = capacity
    this.buckets = Array.from({ length: capacity }, () => new LinkedList())
  }

  hash(key) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode = hashCode % this.capacity
    }

    return hashCode
  }

  set(key, value) {
    const bucketIndex = this.hash(key)

    if (this.buckets[bucketIndex].containsKey(key)) {
      const index = this.buckets[bucketIndex].findIndexByKey(key)

      this.buckets[bucketIndex].at(index).value = { key, value }
    } else {
      if (this.isNextEntryAddExceedsTheLimit()) {
        this.reSetAllEntriesWithUpdatedCapacity()
        return
      }
      this.buckets[bucketIndex].append({ key, value })
    }
  }

  get(key) {
    const bucketIndex = this.hash(key)

    if (this.buckets[bucketIndex].containsKey(key)) {
      const index = this.buckets[bucketIndex].findIndexByKey(key)

      const foundNode = this.buckets[bucketIndex].at(index)

      return foundNode
    }

    return null
  }

  insertEntry(key, value) {
    const bucketIndex = this.hash(key)

    if (this.buckets[bucketIndex].containsKey(key)) {
      const index = this.buckets[bucketIndex].findIndexByKey(key)
      this.buckets[bucketIndex].at(index).value = { key, value }
    } else {
      this.buckets[bucketIndex].append({ key, value })
    }
  }

  has(key) {
    const bucketIndex = this.hash(key)

    return this.buckets[bucketIndex].containsKey(key)
  }

  remove(key) {
    const bucketIndex = this.hash(key)

    if (!this.buckets[bucketIndex].containsKey(key)) return false

    const index = this.buckets[bucketIndex].findIndexByKey(key)

    this.buckets[bucketIndex].removeAt(index)

    return true
  }

  length() {
    let size = 0

    for (let i = 0; i < this.capacity; i++) {
      size += this.buckets[i].size()
    }

    return size
  }

  clear() {
    let deleteCount = 0

    for (let i = 0; i < this.capacity; i++) {
      while (this.buckets[i].size() != 0) {
        this.buckets[i].removeAt(0)
        deleteCount++
      }
    }

    console.log(`${deleteCount} entries deleted.`)
  }

  keys() {
    const keyArr = []

    for (let i = 0; i < this.capacity; i++) {
      let currentBucket = this.buckets[i]

      let currentBucketNode = currentBucket.headNode

      while (currentBucketNode) {
        keyArr.push(currentBucketNode.value.key)

        currentBucketNode = currentBucketNode.nextNode
      }
    }
    return keyArr
  }

  values() {
    const valueArr = []

    for (let i = 0; i < this.capacity; i++) {
      let currentBucket = this.buckets[i]
      if (currentBucket.size() == 0) continue

      let currentBucketNode = currentBucket.headNode

      while (currentBucketNode) {
        valueArr.push(currentBucketNode.value.value)

        currentBucketNode = currentBucketNode.nextNode
      }
    }
    return valueArr
  }

  entries() {
    const entries = []

    const keys = this.keys()
    const vals = this.values()

    const range = keys.length

    for (let i = 0; i < range; i++) {
      entries.push([keys[i], vals[i]])
    }

    return entries
  }

  doubleCapacity() {
    this.capacity *= 2

    return this.capacity
  }

  isNextEntryAddExceedsTheLimit() {
    return this.entries().length + 1 > this.loadFactor * this.capacity
  }

  reSetAllEntriesWithUpdatedCapacity() {
    const entries = this.entries()

    this.clear()
    this.doubleCapacity()
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList())

    for (let [key, value] of entries) {
      this.insertEntry(key, value)
    }
  }
}

export default HashMap
