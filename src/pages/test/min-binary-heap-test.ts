//  const root: [] = [];
//
//  class Node {
//   private left: null | number
//   private right: null | number
//   private data: any
//   constructor(data: any) {
//     this.left = null;
//     this.right = null;
//     this.data = data;
//   }
// }
//
// // Function to insert nodes in level order
// function insertLevelOrder(arr: number[], root: any, i: number) {
//   // Base case for recursion
//   if (i < arr.length) {
//     const temp = new Node(arr[i]);
//     root = temp;
//
//     // insert left child
//     root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
//
//     // insert right child
//     root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
//   }
//   return root;
// }
//
// // Function to print tree nodes in InOrder fashion
// function inOrder(root: any) {
//   if (root != null) {
//     inOrder(root.left);
//     document.write(root.data + ' ');
//     inOrder(root.right);
//   }
// }
//
// const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6];
//  const root2 = insertLevelOrder(arr, root, 0);
// console.log('root2: ', root2)
//
export {};
