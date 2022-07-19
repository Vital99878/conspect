import LinkedList from './sequences/linked-list';
import Stack from './sequences/stack';
import { Deque, Queue } from './sequences/queue';
import CircularBuffer from './sequences/circular-buffer';
import {
  LazyMinBinomialHeap,
  MinBinaryHeap,
  MinBinomialHeap,
  MinDHeap,
  MinFibonacciHeap,
  MinIndexedDHeap,
} from './priority-queues';
import { AVLTree, BTree, BinarySearchTree, RedBlackTree } from './trees';
import {
  HashTableDoubleHashing,
  HashTableLinearProbing,
  HashTableQuadraticProbing,
  HashTableSeparateChaining,
} from './hash-tables';

const Collections = {
  LinkedList,
  Stack,
  Queue,
  Deque,
  CircularBuffer,
  MinBinaryHeap,
  MinDHeap,
  MinIndexedDHeap,
  MinBinomialHeap,
  LazyMinBinomialHeap,
  MinFibonacciHeap,
  BinarySearchTree,
  AVLTree,
  BTree,
  RedBlackTree,
  HashTableSeparateChaining,
  HashTableLinearProbing,
  HashTableQuadraticProbing,
  HashTableDoubleHashing,
};

export default Collections;
