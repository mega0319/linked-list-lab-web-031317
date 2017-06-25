let getName = node => {
  return node["name"]
}

let headNode = (linkedList, collection) => {
  return collection[linkedList]
}


let next = (node, collection) => {
  let nextNode = node["next"]
  return collection[nextNode]
}

let nodeAt = (index, linkedList, collection) => {
  let counter = 0
  let result = headNode(linkedList, collection)
  if (index === 0){
    return result
  }else{
    while (counter != index){
      result["name"]
      result = next(result, collection)
      counter++
    }
  }
  return result
}

let addressAt = (index, linkedList, collection) => {
  let address
  let node = nodeAt(index, linkedList, collection)
  for (let keyName in collection){
    if (collection[keyName] === node){
      address = keyName
    }
  }
  return address
}

let indexAt = (node, collection, linkedList) => {
  let counter = 0
  let head = headNode(linkedList, collection)
  if ( head === node ){
    return counter
  }else{
    while ( head !== node ){
      head = next(head, collection)
      counter++
    }
    return counter
  }
}

let insertNodeAt = (index, address, linkedList, collection) => {
  let firstNode = nodeAt(index - 1, linkedList, collection)
  let newNode = collection[address]
  newNode.next = firstNode.next
  firstNode.next = address
}

let deleteNodeAt = (index, linkedList, collection) => {
  let target = nodeAt(index, linkedList, collection)
  let targetAddress = addressAt(index, linkedList, collection )
  let prevNode = nodeAt(index - 1, linkedList, collection)
  prevNode.next = target.next
  delete collection[targetAddress]
}
