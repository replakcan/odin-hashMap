export function BucketOutOfBoundException(index, bucket) {
  if (index < 0 || index >= bucket.length) {
    throw new Error("Trying to access index out of bounds");
  }
}
