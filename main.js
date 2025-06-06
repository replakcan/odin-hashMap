import HashMap from './HashMap.js'

/* const map = new HashMap()

console.log(map)
map.set('alper', 'mutlu')
map.set('alper', 'zortingen')
map.set('alper', 'annen')
map.set('b', 'kes')
map.set('c', 'ya ')
map.set('d', 'birak')
map.set('e', 'himmina')
map.set('f', 'goyem')
map.set('g', 'zortanca')
map.set('h', 'beberuhi')

console.log(map.hash('alper'))
console.log(map)
console.log(map.buckets[2].headNode)

console.log(map.get('b'))
console.log(map.get('alper'))

console.log(map.has('alper'))
console.log(map.has('b'))
console.log(map.has('anan'))

console.log(map.buckets[2].headNode)
console.log(map.buckets[3].headNode)
console.log(map.buckets[4].headNode)
console.log(map.buckets[5].headNode)
console.log(map.buckets[6].headNode)
console.log(map.buckets[7].headNode)

console.log(map.length())

console.log(map.keys())
console.log(map.values())
console.log(map.entries()) */

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('lion', 'definetlyNotGolden')
test.set('hat', 'white')

console.log(test.keys())
console.log(test.values())
console.log(test.entries())
