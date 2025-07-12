/*
* Problem Name: Merge Intervals
* Description: Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
* Input: An array of intervals.
* Output: An array of merged intervals.
* Example: [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
*/

/*
* Problem Name: Group Anagrams
* Description: Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.
* Input: An array of strings.
* Output: A 2D array of grouped anagrams.
* Example: ["eat","tea","tan","ate","nat","bat"] -> [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/*
* Problem Name: Rotate Image
* Description: You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
* Input: A 2D matrix.
* Output: The rotated matrix in-place.
* Example: [[1,2,3],[4,5,6],[7,8,9]] -> [[7,4,1],[8,5,2],[9,6,3]]
*/

/*
* Problem Name: Jump Game
* Description: You are given an integer array `nums`. You are initially positioned at the array's first index, and each `nums[i]` represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.
* Input: An array of integers.
* Output: true or false.
* Example: [2,3,1,1,4] -> true, [3,2,1,0,4] -> false
*/

/*
* Problem Name: Unique Paths
* Description: A robot is located at the top-left corner of a `m x n` grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?
* Input: Two integers, m and n.
* Output: The number of unique paths.
* Example: m = 3, n = 7 -> 28
*/

/*
* Problem Name: Minimum Path Sum
* Description: Given a `m x n` grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.
* Input: A 2D array (grid).
* Output: The minimum path sum.
* Example: [[1,3,1],[1,5,1],[4,2,1]] -> 7
*/

/*
* Problem Name: Decode Ways
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., 


"11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". Given a string `s` containing only digits, return the number of ways to decode it.
* Input: A string of digits.
* Output: The number of ways to decode the string.
* Example: "12" -> 2, "226" -> 3, "0" -> 0
*/

/*
* Problem Name: Subsets
* Description: Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.
* Input: An array of unique integers.
* Output: A 2D array of all possible subsets.
* Example: [1,2,3] -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

/*
* Problem Name: Word Search
* Description: Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
* Input: A 2D array of characters and a string.
* Output: true or false.
* Example: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" -> true
*/

/*
* Problem Name: Combination Sum
* Description: Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
* Input: An array of distinct integers and a target integer.
* Output: A 2D array of unique combinations.
* Example: candidates = [2,3,6,7], target = 7 -> [[2,2,3],[7]]
*/

/*
* Problem Name: Permutations
* Description: Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.
* Input: An array of distinct integers.
* Output: A 2D array of all possible permutations.
* Example: [1,2,3] -> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

/*
* Problem Name: Sort Colors
* Description: Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
* Input: An array of integers (0, 1, or 2).
* Output: The sorted array in-place.
* Example: [2,0,2,1,1,0] -> [0,0,1,1,2,2]
*/

/*
* Problem Name: Search in Rotated Sorted Array
* Description: There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (1 <= k < nums.length) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`. Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not in `nums`.
* Input: A rotated sorted array of distinct integers and a target integer.
* Output: The index of the target or -1.
* Example: nums = [4,5,6,7,0,1,2], target = 0 -> 4
*/

/*
* Problem Name: 3Sum
* Description: Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must not contain duplicate triplets.
* Input: An array of integers.
* Output: A 2D array of unique triplets that sum to zero.
* Example: [-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]
*/

/*
* Problem Name: Letter Combinations of a Phone Number
* Description: Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
* Input: A string of digits from 2-9.
* Output: An array of all possible letter combinations.
* Example: "23" -> ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

/*
* Problem Name: Container With Most Water
* Description: You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.
* Input: An array of integers representing heights.
* Output: The maximum amount of water.
* Example: [1,8,6,2,5,4,8,3,7] -> 49
*/

/*
* Problem Name: Generate Parentheses
* Description: Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
* Input: An integer n.
* Output: An array of strings with all combinations of well-formed parentheses.
* Example: 3 -> ["((()))","(()())","(())()","()(())","()()()"]
*/

/*
* Problem Name: Find First and Last Position of Element in Sorted Array
* Description: Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`.
* Input: A sorted array of integers and a target integer.
* Output: An array with the starting and ending position of the target, or [-1, -1].
* Example: nums = [5,7,7,8,8,10], target = 8 -> [3,4]
*/

/*
* Problem Name: Valid Sudoku
* Description: Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition. Each column must contain the digits 1-9 without repetition. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits 1-9 without repetition.
* Input: A 9x9 2D array representing a Sudoku board.
* Output: true or false.
* Example: A valid Sudoku board -> true
*/

/*
* Problem Name: Longest Substring Without Repeating Characters
* Description: Given a string `s`, find the length of the longest substring without repeating characters.
* Input: A string.
* Output: The length of the longest substring without repeating characters.
* Example: "abcabcbb" -> 3, "bbbbb" -> 1, "pwwkew" -> 3
*/

/*
* Problem Name: Product of Array Except Self
* Description: Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.
* Input: An array of integers.
* Output: An array where each element is the product of all other elements.
* Example: [1,2,3,4] -> [24,12,8,6]
*/

/*
* Problem Name: Kth Largest Element in an Array
* Description: Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.
* Input: An array of integers and an integer k.
* Output: The kth largest element.
* Example: [3,2,1,5,6,4], k = 2 -> 5
*/

/*
* Problem Name: Top K Frequent Elements
* Description: Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.
* Input: An array of integers and an integer k.
* Output: An array of the k most frequent elements.
* Example: [1,1,1,2,2,3], k = 2 -> [1,2]
*/

/*
* Problem Name: Find Peak Element
* Description: A peak element is an element that is strictly greater than its neighbors. Given an integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
* Input: An array of integers.
* Output: The index of a peak element.
* Example: [1,2,3,1] -> 2
*/

/*
* Problem Name: Search a 2D Matrix
* Description: Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix `matrix`. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.
* Input: A 2D matrix and a target integer.
* Output: true or false.
* Example: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 -> true
*/

/*
* Problem Name: Set Matrix Zeroes
* Description: Given an `m x n` integer matrix `matrix`, if an element is 0, set its entire row and column to 0s. You must do it in-place.
* Input: A 2D matrix.
* Output: The modified matrix in-place.
* Example: [[1,1,1],[1,0,1],[1,1,1]] -> [[1,0,1],[0,0,0],[1,0,1]]
*/

/*
* Problem Name: Spiral Matrix
* Description: Given an `m x n` matrix, return all elements of the matrix in spiral order.
* Input: A 2D matrix.
* Output: An array of elements in spiral order.
* Example: [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,6,9,8,7,4,5]
*/

/*
* Problem Name: Word Break
* Description: Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.
* Input: A string and a dictionary of strings.
* Output: true or false.
* Example: s = "leetcode", wordDict = ["leet","code"] -> true
*/

/*
* Problem Name: Linked List Cycle II
* Description: Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.
* Input: The head of a linked list.
* Output: The node where the cycle begins or null.
* Example: (list: 3->2->0->-4, pos=1) -> node with value 2
*/

/*
* Problem Name: Reorder List
* Description: You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … You may not modify the values in the list's nodes. Only nodes themselves may be changed.
* Input: The head of a linked list.
* Output: The reordered list.
* Example: 1->2->3->4 -> 1->4->2->3
*/

/*
* Problem Name: Maximum Product Subarray
* Description: Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
* Input: An array of integers.
* Output: The maximum product of a subarray.
* Example: [2,3,-2,4] -> 6
*/

/*
* Problem Name: Binary Tree Inorder Traversal
* Description: Given the `root` of a binary tree, return the inorder traversal of its nodes' values.
* Input: The root of a binary tree.
* Output: An array of node values in inorder.
* Example: (tree: 1->null,2->3) -> [1,3,2]
*/

/*
* Problem Name: Binary Tree Preorder Traversal
* Description: Given the `root` of a binary tree, return the preorder traversal of its nodes' values.
* Input: The root of a binary tree.
* Output: An array of node values in preorder.
* Example: (tree: 1->null,2->3) -> [1,2,3]
*/

/*
* Problem Name: Binary Tree Postorder Traversal
* Description: Given the `root` of a binary tree, return the postorder traversal of its nodes' values.
* Input: The root of a binary tree.
* Output: An array of node values in postorder.
* Example: (tree: 1->null,2->3) -> [3,2,1]
*/

/*
* Problem Name: Binary Tree Level Order Traversal
* Description: Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
* Input: The root of a binary tree.
* Output: A 2D array of node values in level order.
* Example: (tree: 3->9,20->15,7) -> [[3],[9,20],[15,7]]
*/

/*
* Problem Name: Validate Binary Search Tree
* Description: Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).
* Input: The root of a binary tree.
* Output: true or false.
* Example: (tree: 2->1,3) -> true, (tree: 5->1,4->3,6) -> false
*/

/*
* Problem Name: Lowest Common Ancestor of a Binary Tree
* Description: Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
* Input: The root of a binary tree and two nodes.
* Output: The LCA node.
* Example: (tree: 3->5,1->6,2,0,8->7,4), p=5, q=1 -> 3
*/

/*
* Problem Name: Construct Binary Tree from Preorder and Inorder Traversal
* Description: Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.
* Input: Two arrays, preorder and inorder.
* Output: The root of the constructed binary tree.
* Example: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] -> (tree: 3->9,20->15,7)
*/

/*
* Problem Name: Populating Next Right Pointers in Each Node
* Description: You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. Populate each `next` pointer to point to its next right node. If there is no next right node, the `next` pointer should be set to `NULL`.
* Input: The root of a perfect binary tree.
* Output: The root of the tree with next pointers populated.
* Example: (tree: 1->2,3->4,5,6,7) -> (tree with next pointers)
*/

/*
* Problem Name: Flatten Binary Tree to Linked List
* Description: Given the `root` of a binary tree, flatten the tree into a "linked list" in-place. The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
* Input: The root of a binary tree.
* Output: The flattened tree in-place.
* Example: (tree: 1->2,5->3,4,null,6) -> 1->2->3->4->5->6
*/

/*
* Problem Name: Gas Station
* Description: There are `n` gas stations along a circular route, where the amount of gas at the `i`th station is `gas[i]`. You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i`th station to its next `(i + 1)`th station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
* Input: Two arrays, gas and cost.
* Output: The starting gas station's index or -1.
* Example: gas = [1,2,3,4,5], cost = [3,4,5,1,2] -> 3
*/

/*
* Problem Name: Clone Graph
* Description: Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph.
* Input: A node in a graph.
* Output: A deep copy of the graph.
* Example: adjList = [[2,4],[1,3],[2,4],[1,3]] -> (a deep copy of the graph)
*/

/*
* Problem Name: LRU Cache
* Description: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class: `LRUCache(int capacity)` initializes the LRU cache with positive size `capacity`. `int get(int key)` returns the value of the `key` if the key exists, otherwise return -1. `void put(int key, int value)` updates the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, evict the least recently used key.
* Input: A sequence of LRU cache operations.
* Output: The results of the get operations.
* Example: LRUCache(2), put(1,1), put(2,2), get(1) -> 1, put(3,3), get(2) -> -1
*/

/*
* Problem Name: Find Minimum in Rotated Sorted Array
* Description: Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become: `[4,5,6,7,0,1,2]` if it was rotated 4 times. Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.
* Input: A rotated sorted array of unique elements.
* Output: The minimum element.
* Example: [3,4,5,1,2] -> 1
*/

/*
* Problem Name: Course Schedule
* Description: There are a total of `numCourses` courses you have to take, labeled from 0 to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. For example, the pair `[0, 1]`, indicates that to take course 0 you have to first take course 1. Return `true` if you can finish all courses. Otherwise, return `false`.
* Input: The number of courses and a list of prerequisites.
* Output: true or false.
* Example: 2, [[1,0]] -> true, 2, [[1,0],[0,1]] -> false
*/

/*
* Problem Name: Implement Trie (Prefix Tree)
* Description: A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class: `Trie()` initializes the trie object. `void insert(String word)` inserts the string `word` into the trie. `boolean search(String word)` returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise. `boolean startsWith(String prefix)` returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.
* Input: A sequence of trie operations.
* Output: The results of the search and startsWith operations.
* Example: Trie(), insert("apple"), search("apple") -> true, search("app") -> false, startsWith("app") -> true
*/

/*
* Problem Name: Coin Change
* Description: You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
* Input: An array of coin denominations and a total amount.
* Output: The fewest number of coins or -1.
* Example: coins = [1,2,5], amount = 11 -> 3 (5+5+1)
*/

/*
* Problem Name: Longest Increasing Subsequence
* Description: Given an integer array `nums`, return the length of the longest strictly increasing subsequence.
* Input: An array of integers.
* Output: The length of the longest increasing subsequence.
* Example: [10,9,2,5,3,7,101,18] -> 4 ([2,3,7,101])
*/

/*
* Problem Name: House Robber
* Description: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
* Input: An array of integers.
* Output: The maximum amount of money that can be robbed.
* Example: [1,2,3,1] -> 4
*/

/*
* Problem Name: House Robber II
* Description: You are a professional robber planning to rob houses along a street. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
* Input: An array of integers.
* Output: The maximum amount of money that can be robbed.
* Example: [2,3,2] -> 3
*/

/*
* Problem Name: Number of Islands
* Description: Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
* Input: A 2D binary grid.
* Output: The number of islands.
* Example: [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]] -> 1
*/

/*
* Problem Name: Reverse Linked List II
* Description: Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right`, and return the reversed list.
* Input: The head of a linked list, and two integers left and right.
* Output: The head of the reversed list.
* Example: 1->2->3->4->5, left = 2, right = 4 -> 1->4->3->2->5
*/

/*
* Problem Name: Subarray Sum Equals K
* Description: Given an array of integers `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.
* Input: An array of integers and an integer k.
* Output: The number of continuous subarrays with sum k.
* Example: [1,1,1], k = 2 -> 2
*/


/*
* Problem Name: Find All Duplicates in an Array
* Description: Given an integer array `nums` of length `n` where all the integers of `nums` are in the range `[1, n]` and each integer appears once or twice, return an array of all the integers that appears twice.
* Input: An array of integers.
* Output: An array of duplicate integers.
* Example: [4,3,2,7,8,2,3,1] -> [2,3]
*/

/*
* Problem Name: Find the Duplicate Number
* Description: Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one duplicate number in `nums`, return this duplicate number.
* Input: An array of integers.
* Output: The duplicate number.
* Example: [1,3,4,2,2] -> 2
*/

/*
* Problem Name: Sort List
* Description: Given the `head` of a linked list, sort the list in ascending order.
* Input: The head of a linked list.
* Output: The head of the sorted linked list.
* Example: 4->2->1->3 -> 1->2->3->4
*/

/*
* Problem Name: Kth Smallest Element in a BST
* Description: Given the `root` of a binary search tree, and an integer `k`, return the `k`th smallest value (1-indexed) of all the values in the tree.
* Input: The root of a BST and an integer k.
* Output: The kth smallest value.
* Example: (tree: 3->1,4->2), k = 1 -> 1
*/

/*
* Problem Name: Implement `atoi` (string to integer)
* Description: Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function).
* Input: A string s.
* Output: The converted integer.
* Example: "42" -> 42, "   -42" -> -42, "4193 with words" -> 4193
*/

/*
* Problem Name: Divide Two Integers
* Description: Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator. Return the quotient as an integer.
* Input: Two integers, dividend and divisor.
* Output: The quotient.
* Example: 10, 3 -> 3, 7, -3 -> -2
*/

/*
* Problem Name: Pow(x, n)
* Description: Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).
* Input: A double x and an integer n.
* Output: x raised to the power n.
* Example: 2.0, 10 -> 1024.00000
*/

/*
* Problem Name: Jump Game II
* Description: Given an array of non-negative integers `nums`, you are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps. You can assume that you can always reach the last index.
* Input: An array of non-negative integers.
* Output: The minimum number of jumps.
* Example: [2,3,1,1,4] -> 2
*/

/*
* Problem Name: Permutations II
* Description: Given a collection of numbers, `nums`, that might contain duplicates, return all possible unique permutations in any order.
* Input: An array of integers that might contain duplicates.
* Output: A 2D array of all unique permutations.
* Example: [1,1,2] -> [[1,1,2],[1,2,1],[2,1,1]]
*/

/*
* Problem Name: Rotate List
* Description: Given the `head` of a linked list, rotate the list to the right by `k` places.
* Input: The head of a linked list and an integer k.
* Output: The head of the rotated list.
* Example: 1->2->3->4->5, k = 2 -> 4->5->1->2->3
*/

/*
* Problem Name: Unique Paths II
* Description: You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (`grid[0][0]`). The robot tries to move to the bottom-right corner (`grid[m-1][n-1]`). The robot can only move either down or right at any point in time. An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include any obstacle.
* Input: A 2D array (grid) with obstacles.
* Output: The number of unique paths.
* Example: [[0,0,0],[0,1,0],[0,0,0]] -> 2
*/

/*
* Problem Name: Decode Ways II
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., 


"11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". In addition to the mapping above, the encoded message may contain the 	`*`	 character, which can represent any digit from 	`1`	 to 	`9`	. Given a string 	`s`	 containing digits and the 	`*`	 character, return 	`the number of ways`	 to decode it. Since the answer may be very large, return it 	`modulo`	 	`10^9 + 7`	.
* Input: A string of digits and 	`*`	 characters.
* Output: The number of ways to decode the string modulo 	`10^9 + 7`	.
* Example: "*" -> 9, "1*" -> 18, "2*" -> 15
*/

/*
* Problem Name: Subsets II
* Description: Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.
* Input: An array of integers that may contain duplicates.
* Output: A 2D array of all possible unique subsets.
* Example: [1,2,2] -> [[],[1],[1,2],[1,2,2],[2],[2,2]]
*/

/*
* Problem Name: Gray Code
* Description: An n-bit gray code sequence is a sequence of `2^n` integers where: Every integer is in the inclusive range `[0, 2^n - 1]`. The first integer is 0. An integer appears no more than once in the sequence. The binary representation of every pair of adjacent integers differs by exactly one bit. Given an integer `n`, return any valid n-bit gray code sequence.
* Input: An integer n.
* Output: An array of integers representing a gray code sequence.
* Example: 2 -> [0,1,3,2]
*/

/*
* Problem Name: Restore IP Addresses
* Description: A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros. For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312", and "192.168@1.1" are invalid IP addresses. Given a string `s` containing only digits, return all possible valid IP addresses that can be formed by inserting dots into `s`.
* Input: A string of digits.
* Output: An array of valid IP addresses.
* Example: "25525511135" -> ["255.255.11.135","255.255.111.35"]
*/

/*
* Problem Name: Partition List
* Description: Given the `head` of a linked list and a value `x`, partition it such that all nodes less than `x` come before nodes greater than or equal to `x`. You should preserve the original relative order of the nodes in each of the two partitions.
* Input: The head of a linked list and a value x.
* Output: The head of the partitioned linked list.
* Example: 1->4->3->2->5->2, x = 3 -> 1->2->2->4->3->5
*/

/*
* Problem Name: Scramble String
* Description: We can scramble a string `s` to get a string `t` using the following algorithm: If the length of the string is 1, stop. If the length of the string is > 1, do the following: Split the string into two non-empty substrings at a random index, i.e., if the string is `s`, divide it to `x` and `y` where `s = x + y`. Randomly decide to swap the two substrings or to keep them in the same order. i.e., `s` can become `s = x + y` or `s = y + x`. Apply step 1 recursively on each of the two substrings `x` and `y`. Given two strings `s1` and `s2` of the same length, return `true` if `s2` is a scrambled string of `s1`, otherwise, return `false`.
* Input: Two strings, s1 and s2.
* Output: true or false.
* Example: "great", "rgeat" -> true
*/

/*
* Problem Name: Largest Rectangle in Histogram
* Description: Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
* Input: An array of integers representing heights.
* Output: The area of the largest rectangle.
* Example: [2,1,5,6,2,3] -> 10
*/

/*
* Problem Name: Maximal Rectangle
* Description: Given a `rows x cols` binary `matrix` filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
* Input: A 2D binary matrix.
* Output: The area of the largest rectangle of 1s.
* Example: [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] -> 6
*/

/*
* Problem Name: Surrounded Regions
* Description: Given an `m x n` matrix `board` containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.
* Input: A 2D matrix of characters.
* Output: The modified matrix in-place.
* Example: [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]] -> [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
*/

/*
* Problem Name: Palindrome Partitioning
* Description: Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.
* Input: A string.
* Output: A 2D array of all possible palindrome partitions.
* Example: "aab" -> [["a","a","b"],["aa","b"]]
*/

/*
* Problem Name: Gas Station
* Description: There are `n` gas stations along a circular route, where the amount of gas at the `i`th station is `gas[i]`. You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i`th station to its next `(i + 1)`th station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
* Input: Two arrays, gas and cost.
* Output: The starting gas station's index or -1.
* Example: gas = [1,2,3,4,5], cost = [3,4,5,1,2] -> 3
*/

/*
* Problem Name: Candy
* Description: There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.
* Input: An array of integers representing ratings.
* Output: The minimum number of candies.
* Example: [1,0,2] -> 5
*/

/*
* Problem Name: Single Number II
* Description: Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it.
* Input: An array of integers.
* Output: The single number.
* Example: [2,2,3,2] -> 3
*/

/*
* Problem Name: Copy List with Random Pointer
* Description: A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`. Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
* Input: The head of a linked list with random pointers.
* Output: The head of the deep copied linked list.
* Example: [[7,null],[13,0],[11,4],[10,2],[1,0]] -> (a deep copy of the list)
*/

/*
* Problem Name: Word Break II
* Description: Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
* Input: A string and a dictionary of strings.
* Output: An array of all possible sentences.
* Example: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"] -> ["cats and dog", "cat sand dog"]
*/

/*
* Problem Name: Evaluate Reverse Polish Notation
* Description: Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.
* Input: An array of strings representing an expression in RPN.
* Output: The result of the expression.
* Example: ["2","1","+","3","*"] -> 9
*/

/*
* Problem Name: Max Points on a Line
* Description: Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.
* Input: An array of points.
* Output: The maximum number of points on a line.
* Example: [[1,1],[2,2],[3,3]] -> 3
*/

/*
* Problem Name: Insertion Sort List
* Description: Given the `head` of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
* Input: The head of a linked list.
* Output: The head of the sorted linked list.
* Example: 4->2->1->3 -> 1->2->3->4
*/

/*
* Problem Name: Binary Tree Zigzag Level Order Traversal
* Description: Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
* Input: The root of a binary tree.
* Output: A 2D array of node values in zigzag level order.
* Example: (tree: 3->9,20->15,7) -> [[3],[20,9],[15,7]]
*/

/*
* Problem Name: Construct Binary Tree from Inorder and Postorder Traversal
* Description: Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree.
* Input: Two arrays, inorder and postorder.
* Output: The root of the constructed binary tree.
* Example: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3] -> (tree: 3->9,20->15,7)
*/

/*
* Problem Name: Populating Next Right Pointers in Each Node II
* Description: Given a binary tree, populate each `next` pointer to point to its next right node. If there is no next right node, the `next` pointer should be set to `NULL`. Initially, all `next` pointers are set to `NULL`.
* Input: The root of a binary tree.
* Output: The root of the tree with next pointers populated.
* Example: (tree: 1->2,3->4,5,null,7) -> (tree with next pointers)
*/

/*
* Problem Name: Sum Root to Leaf Numbers
* Description: You are given the `root` of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path in the tree represents a number. For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123. Return the total sum of all root-to-leaf numbers.
* Input: The root of a binary tree.
* Output: The sum of all root-to-leaf numbers.
* Example: (tree: 1->2,3) -> 25 (12 + 13)
*/

/*
* Problem Name: Longest Consecutive Sequence
* Description: Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
* Input: An unsorted array of integers.
* Output: The length of the longest consecutive sequence.
* Example: [100,4,200,1,3,2] -> 4 ([1,2,3,4])
*/

/*
* Problem Name: Repeated DNA Sequences
* Description: The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'. For example, "ACGAATTCCG" is a DNA sequence. When studying DNA, it is sometimes useful to identify repeated sequences within the DNA. Given a string `s` that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
* Input: A string representing a DNA sequence.
* Output: An array of repeated 10-letter-long sequences.
* Example: "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" -> ["AAAAACCCCC","CCCCCAAAAA"]
*/

/*
* Problem Name: House Robber III
* Description: The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the `root`. Besides the `root`, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night. Given the `root` of the binary tree, return the maximum amount of money the thief can rob without alerting the police.
* Input: The root of a binary tree.
* Output: The maximum amount of money that can be robbed.
* Example: (tree: 3->2,3->null,3,null,1) -> 7
*/

/*
* Problem Name: Combination Sum IV
* Description: Given an array of distinct integers `nums` and a target integer `target`, return the number of possible combinations that add up to `target`. The answer is guaranteed to fit in a 32-bit integer.
* Input: An array of distinct integers and a target integer.
* Output: The number of possible combinations.
* Example: nums = [1,2,3], target = 4 -> 7
*/

/*
* Problem Name: Wiggle Sort II
* Description: Given an integer array `nums`, reorder it such that `nums[0] < nums[1] > nums[2] < nums[3]...`.
* Input: An array of integers.
* Output: The reordered array in-place.
* Example: [1,5,1,1,6,4] -> [1,6,1,5,1,4]
*/

/*
* Problem Name: Integer Break
* Description: Given an integer `n`, break it into the sum of `k` positive integers, where `k >= 2`, and maximize the product of those integers. Return the maximum product you can get.
* Input: An integer n.
* Output: The maximum product.
* Example: 2 -> 1, 10 -> 36
*/

/*
* Problem Name: Counting Bits
* Description: Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the number of 1's in the binary representation of `i`.
* Input: An integer n.
* Output: An array of the number of 1's for each number from 0 to n.
* Example: 2 -> [0,1,1]
*/

/*
* Problem Name: Top K Frequent Words
* Description: Given an array of strings `words` and an integer `k`, return the `k` most frequent strings. Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
* Input: An array of strings and an integer k.
* Output: An array of the k most frequent strings.
* Example: ["i","love","leetcode","i","love","coding"], k = 2 -> ["i","love"]
*/

/*
* Problem Name: Daily Temperatures
* Description: Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `i`th day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.
* Input: An array of integers representing temperatures.
* Output: An array of integers representing the number of days to wait.
* Example: [73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]
*/

/*
* Problem Name: Minimum Add to Make Parentheses Valid
* Description: A parentheses string is valid if and only if: It is the empty string, or it can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or it can be written as `(S)`, where `S` is a valid string. Given a parentheses string `s`, return the minimum number of parentheses ( `(` or `)` ) we must add to make the resulting parentheses string valid.
* Input: A string of parentheses.
* Output: The minimum number of parentheses to add.
* Example: "()) -> 1, "(((" -> 3
*/

/*
* Problem Name: Score of Parentheses
* Description: Given a balanced parentheses string `s`, return the score of the string. The score of a balanced parentheses string is based on the following rule: `()` has score 1. `AB` has score `A + B`, where `A` and `B` are balanced parentheses strings. `(A)` has score `2 * A`, where `A` is a balanced parentheses string.
* Input: A balanced parentheses string.
* Output: The score of the string.
* Example: "()" -> 1, "(()) -> 2, "()()" -> 2
*/

/*
* Problem Name: All Nodes Distance K in Binary Tree
* Description: Given the `root` of a binary tree, the value of a target node `target`, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node.
* Input: The root of a binary tree, a target node, and an integer k.
* Output: An array of node values at distance k from the target.
* Example: (tree: 3->5,1->6,2,0,8->7,4), target = 5, k = 2 -> [7,4,1]
*/

/*
* Problem Name: Find and Replace Pattern
* Description: Given a list of strings `words` and a string `pattern`, return a list of `words[i]` that match `pattern`. You may return the answer in any order. A word matches the pattern if there exists a permutation of letters `p` so that after replacing every letter `x` in the pattern with `p(x)`, we get the desired word.
* Input: An array of strings and a pattern string.
* Output: An array of words that match the pattern.
* Example: ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb" -> ["mee","aqq"]
*/

/*
* Problem Name: Bag of Tokens
* Description: You have an initial power of `power`, an initial score of `0`, and a bag of `tokens` where `tokens[i]` is the value of the `i`th token (0-indexed). Your goal is to maximize your total score by potentially playing each token in one of two ways: If your current power is at least `tokens[i]`, you may play the `i`th token face up, losing `tokens[i]` power and gaining `1` score. If your current score is at least `1`, you may play the `i`th token face down, gaining `tokens[i]` power and losing `1` score. Each token may be played at most once and in any order. You do not have to play all the tokens. Return the largest possible score you can achieve after playing any number of tokens.
* Input: An array of integers (tokens) and an integer (power).
* Output: The largest possible score.
* Example: [100], 50 -> 0, [100,200], 150 -> 1
*/

/*
* Problem Name: Boats to Save People
* Description: You are given an array `people` where `people[i]` is the weight of the `i`th person, and an infinite number of boats where each boat can carry a maximum weight of `limit`. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most `limit`. Return the minimum number of boats to carry every given person.
* Input: An array of integers (people's weights) and an integer (limit).
* Output: The minimum number of boats.
* Example: [1,2], 3 -> 1, [3,2,2,1], 3 -> 3
*/

/*
* Problem Name: Minimum Number of Frogs Croaking
* Description: You are given the string `croakOfFrogs`, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple "croak" are mixed. Return the minimum number of different frogs to finish all the croaks in the given string. A valid "croak" means a frog is printing five letters 'c', 'r', 'o', 'a', 'k' sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of valid "croak" return -1.
* Input: A string `croakOfFrogs`.
* Output: The minimum number of frogs or -1.
* Example: "croakcroak" -> 1, "crcoakroak" -> 2, "croak" -> 1
*/

/*
* Problem Name: Broken Calculator
* Description: There is a broken calculator that has the integer `startValue` on its display. In one operation, you can: multiply the number on the display by 2, or subtract 1 from the number on the display. Given two integers `startValue` and `target`, return the minimum number of operations needed to display `target` on the calculator.
* Input: Two integers, startValue and target.
* Output: The minimum number of operations.
* Example: 2, 3 -> 2, 5, 8 -> 2, 3, 10 -> 3
*/

/*
* Problem Name: Beautiful Arrangement
* Description: Suppose you have `n` integers labeled 1 to `n`. A permutation of those `n` integers `perm` (1-indexed) is called a beautiful arrangement if for every `i` (1 <= i <= n), either `perm[i]` is divisible by `i` or `i` is divisible by `perm[i]`. Given an integer `n`, return the number of the beautiful arrangements that you can construct.
* Input: An integer n.
* Output: The number of beautiful arrangements.
* Example: 2 -> 2
*/

/*
* Problem Name: Maximum Length of a Concatenated String with Unique Characters
* Description: You are given an array of strings `arr`. A string `s` is formed by the concatenation of a subsequence of `arr` that has unique characters. Return the maximum possible length of `s`.
* Input: An array of strings.
* Output: The maximum length of a concatenated string with unique characters.
* Example: ["un","iq","ue"] -> 4
*/

/*
* Problem Name: Iterator for Combination
* Description: Design the `CombinationIterator` class: `CombinationIterator(string characters, int combinationLength)` initializes the object with a string `characters` of sorted distinct lowercase English letters and a number `combinationLength`. `next()` returns the next combination of length `combinationLength` in lexicographical order. `hasNext()` returns `true` if and only if there exists a next combination.
* Input: A sequence of CombinationIterator operations.
* Output: The results of the next() operations.
* Example: CombinationIterator("abc", 2), next() -> "ab", hasNext() -> true, next() -> "ac", hasNext() -> true, next() -> "bc", hasNext() -> false
*/

/*
* Problem Name: Find the Winner of an Array Game
* Description: Given an integer array `arr` of distinct integers and an integer `k`. A game will be played between the first two elements of the array (i.e. `arr[0]` and `arr[1]`). In each round of the game, we compare `arr[0]` and `arr[1]`, the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array. The game ends when an integer wins `k` consecutive rounds. Return the integer which will win the game.
* Input: An array of distinct integers and an integer k.
* Output: The winner of the game.
* Example: [2,1,3,5,4,6,7], k = 2 -> 5
*/

/*
* Problem Name: Minimum Domino Rotations For Equal Row
* Description: In a row of dominoes, `tops[i]` and `bottoms[i]` represent the top and bottom halves of the `i`th domino. A domino is a tile with two numbers from 1 to 6 - one on each half of the tile. We may rotate the `i`th domino, so that `tops[i]` and `bottoms[i]` swap values. Return the minimum number of rotations so that all the values in `tops` are the same, or all the values in `bottoms` are the same. If it cannot be done, return -1.
* Input: Two arrays, tops and bottoms.
* Output: The minimum number of rotations or -1.
* Example: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2] -> 2
*/

/*
* Problem Name: Number of Substrings Containing All Three Characters
* Description: Given a string `s` consisting only of characters `a`, `b` and `c`. Return the number of substrings containing at least one occurrence of all these characters `a`, `b` and `c`.
* Input: A string.
* Output: The number of substrings.
* Example: "abcabc" -> 10
*/

/*
* Problem Name: Find the Smallest Divisor Given a Threshold
* Description: Given an array of integers `nums` and an integer `threshold`, we will choose a positive integer `divisor`, divide all the array by it, and sum the division result. Find the smallest `divisor` such that the result mentioned above is less than or equal to `threshold`. Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: `7/3 = 3` and `10/2 = 5`).
* Input: An array of integers and a threshold.
* Output: The smallest divisor.
* Example: [1,2,5,9], 6 -> 5
*/

/*
* Problem Name: Angle Between Hands of a Clock
* Description: Given two numbers, `hour` and `minutes`, return the smaller angle (in degrees) formed between the `hour` and the `minute` hand.
* Input: Two integers, hour and minutes.
* Output: The smaller angle between the hands.
* Example: 12, 30 -> 165
*/

/*
* Problem Name: Reorganize String
* Description: Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same. Return any possible rearrangement of `s` or return `""` if not possible.
* Input: A string.
* Output: A rearranged string or "".
* Example: "aab" -> "aba", "aaab" -> ""
*/

/*
* Problem Name: Task Scheduler
* Description: Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer `n` that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least `n` units of time between any two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.
* Input: An array of characters (tasks) and an integer (cooldown period).
* Output: The least number of units of time.
* Example: ["A","A","A","B","B","B"], n = 2 -> 8
*/

/*
* Problem Name: Partition Labels
* Description: You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.
* Input: A string.
* Output: An array of integers representing the size of the parts.
* Example: "ababcbacadefegdehijhklij" -> [9,7,8]
*/

/*
* Problem Name: Custom Sort String
* Description: You are given two strings, `order` and `s`. All the characters of `order` are unique and were sorted in some custom order previously. Permute the characters of `s` so that they match the order that `order` was sorted in. More specifically, if a character `x` occurs before a character `y` in `order`, then `x` should occur before `y` in the permuted string.
* Input: Two strings, order and s.
* Output: A permuted string.
* Example: order = "cba", s = "abcd" -> "cbad"
*/

