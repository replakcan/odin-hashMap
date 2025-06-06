class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}

class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode
  }

  append(value) {
    const nodeToAppend = new Node(value)

    if (!this.headNode) {
      this.headNode = nodeToAppend
    } else {
      let currentNode = this.headNode

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }

      currentNode.nextNode = nodeToAppend
    }
  }

  prepend(value) {
    const nodeToPrepend = new Node(value)

    nodeToPrepend.nextNode = this.headNode
    this.headNode = nodeToPrepend
  }

  size() {
    let currentNode = this.headNode

    if (!currentNode) return 0

    let size = 1

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
      size++
    }

    return size
  }

  head() {
    const head = this.headNode

    return head ? head : null
  }

  tail() {
    const head = this.headNode

    if (!head) return null
    if (!head.nextNode) return head.value

    let currentNode = head

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  at(index) {
    if (!this.headNode || this.size() <= index) return null

    let indexCount = 0
    let currentNode = this.headNode

    while (index > indexCount) {
      currentNode = currentNode.nextNode
      indexCount++
    }

    return currentNode
  }

  pop() {
    const head = this.headNode

    if (!this.headNode) return null

    let currentNode = head

    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    currentNode.nextNode = null
  }

  contains(value) {
    const head = this.headNode

    if (!head) return false

    let currentNode = head

    while (currentNode) {
      if (currentNode.value == value) return true

      currentNode = currentNode.nextNode
    }

    return false
  }

  containsKey(key) {
    const head = this.headNode

    if (!head) return false

    let currentNode = head

    while (currentNode) {
      if (currentNode.value.key == key) return true

      currentNode = currentNode.nextNode
    }

    return false
  }

  find(value) {
    const head = this.headNode

    if (!head) return null

    let index = 0
    let currentNode = head

    while (currentNode) {
      if (currentNode.value == value) return { index, value: currentNode.value }

      currentNode = currentNode.nextNode
      index++
    }

    return null
  }

  findIndexByKey(key) {
    const head = this.headNode

    if (!head) return null

    let index = 0
    let currentNode = head

    while (currentNode) {
      if (currentNode.value.key == key) return index

      currentNode = currentNode.nextNode
      index++
    }

    return null
  }

  toString() {
    const head = this.headNode

    if (!head) return 'list is empty'

    let rv = ''
    let currentNode = head

    while (currentNode) {
      rv += `( ${currentNode.value} ) -> `
      currentNode = currentNode.nextNode
    }

    return (rv += 'null')
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value)

      return
    }

    const nodeToInsert = new Node(value)

    const prevNode = this.at(index - 1)
    const postNode = this.at(index)

    nodeToInsert.nextNode = postNode
    prevNode.nextNode = nodeToInsert
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) return

    if (index == 0) {
      const head = this.headNode

      this.headNode = head.nextNode

      return
    }

    const prevNode = this.at(index - 1)

    if (index == this.size() - 1) {
      prevNode.nextNode = null

      return
    }

    const postNode = this.at(index + 1)

    prevNode.nextNode = postNode
  }
}

export default LinkedList
