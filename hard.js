/*
* Problem Name: N-Queens
* Description: The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
* Input: An integer n.
* Output: A 2D array of strings representing all distinct solutions.
* Example: 4 -> [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
*/

/*
* Problem Name: Sudoku Solver
* Description: Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: Each of the digits 1-9 must occur exactly once in each row. Each of the digits 1-9 must occur exactly once in each column. Each of the digits 1-9 must occur exactly once in each of the nine 3x3 sub-boxes of the grid. The '.' character indicates empty cells.
* Input: A 9x9 2D array of characters representing a Sudoku board.
* Output: The modified board in-place with the solution.
* Example: (partially filled board) -> (solved board)
*/

/*
* Problem Name: Regular Expression Matching
* Description: Given an input string `s` and a pattern `p`, implement regular expression matching with the following rules: `.` matches any single character. `*` matches zero or more of the preceding element. The matching should cover the entire input string (not partial).
* Input: Two strings, s and p.
* Output: true or false.
* Example: "aa", "a" -> false, "aa", "a*" -> true, "ab", ".*" -> true
*/

/*
* Problem Name: Merge k Sorted Lists
* Description: You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
* Input: An array of k sorted linked lists.
* Output: The head of the merged sorted linked list.
* Example: [[1,4,5],[1,3,4],[2,6]] -> 1->1->2->3->4->4->5->6
*/

/*
* Problem Name: Longest Valid Parentheses
* Description: Given a string containing just the characters `(` and `)`, return the length of the longest valid (well-formed) parentheses substring.
* Input: A string of parentheses.
* Output: The length of the longest valid parentheses substring.
* Example: "(()" -> 2, ")()()" -> 4, "" -> 0
*/

/*
* Problem Name: Trapping Rain Water
* Description: Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* Input: An array of non-negative integers representing elevation map.
* Output: The amount of trapped rain water.
* Example: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
*/

/*
* Problem Name: First Missing Positive
* Description: Given an unsorted integer array `nums`, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) extra space.
* Input: An unsorted integer array.
* Output: The smallest missing positive integer.
* Example: [1,2,0] -> 3, [3,4,-1,1] -> 2, [7,8,9,11,12] -> 1
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
* Problem Name: Decode Ways
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". Given a string `s` containing only digits, return the number of ways to decode it.
* Input: A string of digits.
* Output: The number of ways to decode the string.
* Example: "12" -> 2, "226" -> 3, "0" -> 0
*/

/*
* Problem Name: Word Search
* Description: Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
* Input: A 2D array of characters and a string.
* Output: true or false.
* Example: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" -> true
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
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". In addition to the mapping above, the encoded message may contain the `*` character, which can represent any digit from `1` to `9`. Given a string `s` containing digits and the `*` character, return `the number of ways` to decode it. Since the answer may be very large, return it `modulo` `10^9 + 7`.
* Input: A string of digits and `*` characters.
* Output: The number of ways to decode the string modulo `10^9 + 7`.
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


/*
* Problem Name: Word Ladder
* Description: A transformation sequence from word `beginWord` to `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that: Every adjacent pair of words differs by a single letter. Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`. `sk == endWord`. Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, or 0 if no such sequence exists.
* Input: Two words, beginWord and endWord, and a dictionary wordList.
* Output: The length of the shortest transformation sequence or 0.
* Example: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"] -> 5
*/

/*
* Problem Name: Word Ladder II
* Description: A transformation sequence from word `beginWord` to `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that: Every adjacent pair of words differs by a single letter. Every `si` for `1 <= i <= k` is in `wordList`. Note that `beginWord` does not need to be in `wordList`. `sk == endWord`. Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return all the shortest transformation sequences from `beginWord` to `endWord`, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words `[beginWord, s1, s2, ..., sk]`.
* Input: Two words, beginWord and endWord, and a dictionary wordList.
* Output: A 2D array of all the shortest transformation sequences.
* Example: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"] -> [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
*/

/*
* Problem Name: Edit Distance
* Description: Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.
* Input: Two strings, word1 and word2.
* Output: The minimum number of operations.
* Example: "horse", "ros" -> 3
*/

/*
* Problem Name: Minimum Window Substring
* Description: Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.
* Input: Two strings, s and t.
* Output: The minimum window substring or "".
* Example: s = "ADOBECODEBANC", t = "ABC" -> "BANC"
*/

/*
* Problem Name: Sliding Window Maximum
* Description: You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.
* Input: An array of integers and a window size k.
* Output: An array of the maximums of each sliding window.
* Example: [1,3,-1,-3,5,3,6,7], k = 3 -> [3,3,5,5,6,7]
*/

/*
* Problem Name: Basic Calculator
* Description: Given a string `s` representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation. Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.
* Input: A string representing a valid expression.
* Output: The result of the evaluation.
* Example: "1 + 1" -> 2, " 2-1 + 2 " -> 3, "(1+(4+5+2)-3)+(6+8)" -> 23
*/

/*
* Problem Name: Basic Calculator II
* Description: Given a string `s` which represents an expression, evaluate this expression and return its value. The integer division should truncate toward zero.
* Input: A string representing an expression.
* Output: The result of the evaluation.
* Example: "3+2*2" -> 7, " 3/2 " -> 1, " 3+5 / 2 " -> 5
*/

/*
* Problem Name: Expression Add Operators
* Description: Given a string `num` that contains only digits and an integer `target`, return all possibilities to add binary operators `+`, `-`, or `*` between the digits of `num` so that the resultant expression evaluates to the `target` value.
* Input: A string of digits and a target integer.
* Output: An array of strings representing all possible expressions.
* Example: "123", 6 -> ["1*2*3", "1+2+3"]
*/

/*
* Problem Name: Text Justification
* Description: Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified. You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ` ` when necessary so that each line has exactly `maxWidth` characters. Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right. For the last line of text, it should be left-justified and no extra space is inserted between words.
* Input: An array of strings and a max width.
* Output: An array of strings representing the formatted text.
* Example: ["This", "is", "an", "example", "of", "text", "justification."], 16 -> ["This    is    an", "example  of text", "justification.  "]
*/

/*
* Problem Name: Wildcard Matching
* Description: Given an input string `s` and a pattern `p`, implement wildcard pattern matching with support for `?` and `*` where: `?` matches any single character. `*` matches any sequence of characters (including the empty sequence).
* Input: Two strings, s and p.
* Output: true or false.
* Example: "aa", "a" -> false, "aa", "*" -> true, "cb", "?a" -> false
*/

/*
* Problem Name: Integer to English Words
* Description: Convert a non-negative integer `num` to its English words representation.
* Input: A non-negative integer.
* Output: The English words representation.
* Example: 123 -> "One Hundred Twenty Three", 12345 -> "Twelve Thousand Three Hundred Forty Five"
*/

/*
* Problem Name: Find Median from Data Stream
* Description: The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. For example, for `arr = [2,3,4]`, the median is 3. For `arr = [2,3]`, the median is (2 + 3) / 2 = 2.5. Implement the `MedianFinder` class: `MedianFinder()` initializes the `MedianFinder` object. `void addNum(int num)` adds the integer `num` from the data stream to the data structure. `double findMedian()` returns the median of all elements so far.
* Input: A sequence of MedianFinder operations.
* Output: The results of the findMedian operations.
* Example: MedianFinder(), addNum(1), addNum(2), findMedian() -> 1.5, addNum(3), findMedian() -> 2.0
*/

/*
* Problem Name: Serialize and Deserialize Binary Tree
* Description: Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
* Input: The root of a binary tree for serialization, and a string for deserialization.
* Output: A string for serialization, and the root of a binary tree for deserialization.
* Example: (tree: 1->2,3->4,5) -> "1,2,3,null,null,4,5"
*/

/*
* Problem Name: Longest Increasing Path in a Matrix
* Description: Given an `m x n` integers `matrix`, return the length of the longest increasing path in `matrix`. From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
* Input: A 2D integer matrix.
* Output: The length of the longest increasing path.
* Example: [[9,9,4],[6,6,8],[2,1,1]] -> 4
*/

/*
* Problem Name: Remove Invalid Parentheses
* Description: Given a string `s` that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid. Return all the possible results.
* Input: A string with parentheses and letters.
* Output: An array of all possible valid strings.
* Example: "()())()" -> ["(())()","()()()"]
*/

/*
* Problem Name: Burst Balloons
* Description: You are given `n` balloons, indexed from 0 to `n - 1`. Each balloon is painted with a number on it represented by an array `nums`. You are asked to burst all the balloons. If you burst the `i`th balloon, you will get `nums[i - 1] * nums[i] * nums[i + 1]` coins. If `i - 1` or `i + 1` goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it. Return the maximum coins you can collect by bursting the balloons wisely.
* Input: An array of integers.
* Output: The maximum coins.
* Example: [3,1,5,8] -> 167
*/

/*
* Problem Name: Coin Change 2
* Description: You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
* Input: An array of coin denominations and a total amount.
* Output: The number of combinations.
* Example: amount = 5, coins = [1,2,5] -> 4
*/

/*
* Problem Name: Palindrome Pairs
* Description: Given a list of unique words, return all the pairs of the distinct indices `(i, j)` in the given list, so that the concatenation of the two words `words[i] + words[j]` is a palindrome.
* Input: An array of unique words.
* Output: A 2D array of pairs of indices.
* Example: ["abcd","dcba","lls","s","sssll"] -> [[0,1],[1,0],[3,2],[2,4]]
*/

/*
* Problem Name: Perfect Squares
* Description: Given an integer `n`, return the least number of perfect square numbers that sum to `n`.
* Input: An integer n.
* Output: The least number of perfect squares.
* Example: 12 -> 3 (4+4+4), 13 -> 2 (4+9)
*/

/*
* Problem Name: Longest Palindromic Subsequence
* Description: Given a string `s`, find the longest palindromic subsequence of `s`. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
* Input: A string.
* Output: The length of the longest palindromic subsequence.
* Example: "bbbab" -> 4
*/

/*
* Problem Name: Russian Doll Envelopes
* Description: You are given a 2D array of integers `envelopes` where `envelopes[i] = [wi, hi]` represents the width and the height of an envelope. One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope. Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).
* Input: A 2D array of integers representing envelopes.
* Output: The maximum number of envelopes that can be Russian dolled.
* Example: [[5,4],[6,4],[6,7],[2,3]] -> 3
*/

/*
* Problem Name: Frog Jump
* Description: A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water. Given a list of stones positions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit. If the frog has just made a jump of `k` units, its next jump must be of length `k - 1`, `k`, or `k + 1` units.
* Input: An array of integers representing stone positions.
* Output: true or false.
* Example: [0,1,3,5,6,8,12,17] -> true
*/

/*
* Problem Name: Split Array Largest Sum
* Description: Given an array `nums` which consists of non-negative integers and an integer `m`, you can split the array into `m` non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these `m` subarrays.
* Input: An array of non-negative integers and an integer m.
* Output: The minimum largest sum.
* Example: [7,2,5,10,8], m = 2 -> 18
*/

/*
* Problem Name: Minimum Cost to Connect Sticks
* Description: You have some number of sticks with positive integer lengths. These lengths are given as an array `sticks`. You can connect any two sticks of lengths `X` and `Y` into one stick by paying a cost of `X + Y`. This results in a new stick of length `X + Y`. Your goal is to connect all the sticks into one stick with the minimum possible cost. Return the minimum cost of connecting all the given sticks into one stick.
* Input: An array of integers representing stick lengths.
* Output: The minimum cost.
* Example: [2,4,3] -> 14
*/

/*
* Problem Name: Shortest Path in a Grid with Obstacles Elimination
* Description: You are given an `m x n` integer matrix `grid` where each cell is either `0` (empty) or `1` (obstacle). You can move up, down, left, or right from and to an empty cell in one step. Return the minimum number of steps to walk from the upper-left corner `(0, 0)` to the lower-right corner `(m - 1, n - 1)` given that you can eliminate at most `k` obstacles. If it is not possible to find such a path, return -1.
* Input: A 2D integer matrix, and an integer k.
* Output: The minimum number of steps or -1.
* Example: [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1 -> 6
*/

/*
* Problem Name: Critical Connections in a Network
* Description: There are `n` servers numbered from 0 to `n - 1` connected by undirected server-to-server `connections` forming a network where `connections[i] = [ai, bi]` represents a connection between servers `ai` and `bi`. Any server can reach any other server directly or indirectly through the network. A critical connection is a connection that, if removed, will make some server unable to reach some other server. Return all critical connections in the network in any order.
* Input: An integer n and a list of connections.
* Output: A 2D array of all critical connections.
* Example: 4, [[0,1],[1,2],[2,0],[1,3]] -> [[1,3]]
*/

/*
* Problem Name: Word Search II
* Description: Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
* Input: A 2D array of characters and a list of words.
* Output: An array of all words on the board.
* Example: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"] -> ["eat","oath"]
*/

/*
* Problem Name: Alien Dictionary
* Description: There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings `words` from the alien language's dictionary, where the strings in `words` are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return `""`. If there are multiple solutions, return any of them.
* Input: An array of strings.
* Output: A string representing the alien dictionary order.
* Example: ["wrt","wrf","er","ett","rftt"] -> "wertf"
*/

/*
* Problem Name: Design In-Memory File System
* Description: Design an in-memory file system to simulate the following functions: `ls`, `mkdir`, `addContentToFile`, `readContentFromFile`.
* Input: A sequence of file system operations.
* Output: The results of the ls and readContentFromFile operations.
* Example: ls("/"), mkdir("/a/b/c"), addContentToFile("/a/b/c/d", "hello"), ls("/"), readContentFromFile("/a/b/c/d") -> ["a"], ["d"], "hello"
*/

/*
* Problem Name: The Skyline Problem
* Description: A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively. The geometric information of each building is given in the array `buildings` where `buildings[i] = [lefti, righti, heighti]`.
* Input: A 2D array of integers representing buildings.
* Output: A 2D array of points representing the skyline.
* Example: [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]] -> [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
*/

/*
* Problem Name: Best Time to Buy and Sell Stock III
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete at most two transactions.
* Input: An array of integers representing prices.
* Output: The maximum profit.
* Example: [3,3,5,0,0,3,1,4] -> 6
*/

/*
* Problem Name: Best Time to Buy and Sell Stock IV
* Description: You are given an integer `k` and an array of integers `prices` where `prices[i]` is the price of a given stock on the `i`th day. Design an algorithm to find the maximum profit. You may complete at most `k` transactions.
* Input: An integer k and an array of integers representing prices.
* Output: The maximum profit.
* Example: k = 2, prices = [2,4,1] -> 2
*/

/*
* Problem Name: Best Time to Buy and Sell Stock with Cooldown
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions: After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
* Input: An array of integers representing prices.
* Output: The maximum profit.
* Example: [1,2,3,0,2] -> 3
*/

/*
* Problem Name: Best Time to Buy and Sell Stock with Transaction Fee
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `fee` representing a transaction fee. Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
* Input: An array of integers representing prices and an integer fee.
* Output: The maximum profit.
* Example: [1,3,2,8,4,9], fee = 2 -> 8
*/

/*
* Problem Name: Longest Duplicate Substring
* Description: Given a string `s`, consider all duplicated substrings: (a substring of `s` that occurs 2 or more times). Return any duplicated substring that has the longest possible length. If `s` does not have a duplicated substring, return `""`.
* Input: A string.
* Output: The longest duplicated substring or "".
* Example: "banana" -> "ana"
*/

/*
* Problem Name: Count of Smaller Numbers After Self
* Description: You are given an integer array `nums` and you have to return a new `counts` array. The `counts` array has the property where `counts[i]` is the number of smaller elements to the right of `nums[i]`.
* Input: An array of integers.
* Output: An array of counts.
* Example: [5,2,6,1] -> [2,1,1,0]
*/

/*
* Problem Name: Maximum Frequency Stack
* Description: Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack. Implement the `FreqStack` class: `FreqStack()` constructs an empty frequency stack. `void push(int val)` pushes an integer `val` onto the top of the stack. `int pop()` removes and returns the most frequent element in the stack. If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
* Input: A sequence of FreqStack operations.
* Output: The results of the pop operations.
* Example: FreqStack(), push(5), push(7), push(5), push(7), push(4), push(5), pop() -> 5, pop() -> 7, pop() -> 5, pop() -> 4
*/

/*
* Problem Name: Smallest Range Covering Elements from K Lists
* Description: You have `k` lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the `k` lists. We define the range `[a, b]` is smaller than range `[c, d]` if `b - a < d - c` or `a < c` if `b - a == d - c`.
* Input: A 2D array of sorted integers.
* Output: An array representing the smallest range.
* Example: [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] -> [20,24]
*/

/*
* Problem Name: Trapping Rain Water II
* Description: Given an `m x n` integer matrix `heightMap` representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
* Input: A 2D integer matrix representing a height map.
* Output: The volume of trapped water.
* Example: [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] -> 4
*/

/*
* Problem Name: Concatenated Words
* Description: Given an array of strings `words` (without duplicates), return all the concatenated words in the given list of `words`. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
* Input: An array of strings.
* Output: An array of all concatenated words.
* Example: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"] -> ["catsdogcats","dogcatsdog","ratcatdogcat"]
*/

/*
* Problem Name: Design Search Autocomplete System
* Description: Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character ` # `). For each character they type except ` # `, you need to return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. The returned top 3 hot sentences should be sorted by hot degree (highest first). If several sentences have the same hot degree, use ASCII-code order (smaller first). If less than 3 hot sentences exist, return all of them.
* Input: A sequence of autocomplete system operations.
* Output: The results of the input operations.
* Example: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2]), input("i") -> ["i love you", "island", "i love leetcode"], input(" ") -> ["i love you", "i love leetcode"], input("a") -> [], input("#") -> []
*/

/*
* Problem Name: Number of Atoms
* Description: Given a string `formula` representing a chemical formula, return the count of each atom. The atomic elements always start with an uppercase letter, then zero or more lowercase letters, representing the name. One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, `H2O` and `H2O2` are possible, but `H1O2` is impossible. Two formulas concatenated together produce another formula. For example, `H2O2He3Mg4` is also a formula. A formula placed in parentheses, and a count (optionally added) is also a formula. For example, `(H2O2)` and `(H2O2)3` are formulas.
* Input: A string representing a chemical formula.
* Output: A string representing the count of each atom.
* Example: "H2O" -> "H2O", "Mg(OH)2" -> "H2MgO2", "K4(ON(SO3)2)2" -> "K4N2O14S4"
*/

/*
* Problem Name: Shortest Palindrome
* Description: You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
* Input: A string.
* Output: The shortest palindrome.
* Example: "aacecaaa" -> "aaacecaaa", "abcd" -> "dcbabcd"
*/

/*
* Problem Name: Maximum Gap
* Description: Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0. You must write an algorithm that runs in linear time and uses linear extra space.
* Input: An array of integers.
* Output: The maximum gap.
* Example: [3,6,9,1] -> 3
*/

/*
* Problem Name: Find K-th Smallest Pair Distance
* Description: The distance of a pair of integers `a` and `b` is defined as the absolute difference between `a` and `b`. Given an integer array `nums` and an integer `k`, return the `k`th smallest distance among all the pairs `nums[i]` and `nums[j]` where `0 <= i < j < nums.length`.
* Input: An array of integers and an integer k.
* Output: The kth smallest pair distance.
* Example: [1,3,1], k = 1 -> 0
*/

/*
* Problem Name: Erect the Fence
* Description: You are given an array `trees` where `trees[i] = [xi, yi]` represents the location of a tree in a 2D garden. You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well-fenced only if all the trees are enclosed. Return the coordinates of the trees that are exactly located on the fence perimeter.
* Input: An array of points representing tree locations.
* Output: An array of points representing the fence perimeter.
* Example: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]] -> [[1,1],[2,0],[3,3],[2,4],[4,2]]
*/

/*
* Problem Name: Minimum Number of Refueling Stops
* Description: A car travels from a starting position to a destination which is `target` miles east of the starting position. Along the way, there are gas stations. Each `station[i]` represents a gas station that is `station[i][0]` miles east of the starting position, and has `station[i][1]` liters of gas. The car starts with an infinite tank of gas, which is initially full. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car. Return the minimum number of refueling stops the car must make to reach its destination. If it cannot reach the destination, return -1.
* Input: An integer target, an integer startFuel, and a 2D array of stations.
* Output: The minimum number of refueling stops or -1.
* Example: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]] -> 2
*/

/*
* Problem Name: Minimum Number of Taps to Open to Water a Garden
* Description: There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point `n`. (i.e., the length of the garden is `n`). There are `n + 1` taps located at points `[0, 1, ..., n]` in the garden. Given an integer `n` and an integer array `ranges` of length `n + 1` where `ranges[i]` (0-indexed) is the range of the `i`-th tap, return the minimum number of taps that should be opened to water the entire garden. If the garden cannot be watered, return -1.
* Input: An integer n and an array of integers representing ranges.
* Output: The minimum number of taps or -1.
* Example: n = 5, ranges = [3,4,1,1,0,0] -> 1
*/

/*
* Problem Name: Longest Valid Parentheses
* Description: Given a string containing just the characters `(` and `)`, return the length of the longest valid (well-formed) parentheses substring.
* Input: A string of parentheses.
* Output: The length of the longest valid parentheses substring.
* Example: "(()" -> 2, ")()()" -> 4, "" -> 0
*/

/*
* Problem Name: Trapping Rain Water
* Description: Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* Input: An array of non-negative integers representing elevation map.
* Output: The amount of trapped rain water.
* Example: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
*/

/*
* Problem Name: First Missing Positive
* Description: Given an unsorted integer array `nums`, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) extra space.
* Input: An unsorted integer array.
* Output: The smallest missing positive integer.
* Example: [1,2,0] -> 3, [3,4,-1,1] -> 2, [7,8,9,11,12] -> 1
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
* Problem Name: Decode Ways
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". Given a string `s` containing only digits, return the number of ways to decode it.
* Input: A string of digits.
* Output: The number of ways to decode the string.
* Example: "12" -> 2, "226" -> 3, "0" -> 0
*/

/*
* Problem Name: Word Search
* Description: Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
* Input: A 2D array of characters and a string.
* Output: true or false.
* Example: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" -> true
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
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". In addition to the mapping above, the encoded message may contain the `*` character, which can represent any digit from `1` to `9`. Given a string `s` containing digits and the `*` character, return `the number of ways` to decode it. Since the answer may be very large, return it `modulo` `10^9 + 7`.
* Input: A string of digits and `*` characters.
* Output: The number of ways to decode the string modulo `10^9 + 7`.
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


/*
* Problem Name: Minimum Cost to Cut a Stick
* Description: Given a wooden stick of length `n` units. The stick is labeled from 0 to `n`. You are given an integer array `cuts` where `cuts[i]` is the position where you can cut the stick. You can perform the cuts in any order. The cost of a cut is the length of the stick when you make the cut. Your goal is to minimize the total cost of the cuts. Return the minimum total cost to cut the stick.
* Input: An integer n and an array of integers representing cut positions.
* Output: The minimum total cost.
* Example: n = 7, cuts = [1,3,4,5] -> 16
*/

/*
* Problem Name: Find K Closest Elements
* Description: Given a sorted integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order. An integer `a` is closer to `x` than an integer `b` if: `|a - x| < |b - x|`, or `|a - x| == |b - x|` and `a < b`.
* Input: A sorted integer array, an integer k, and an integer x.
* Output: An array of the k closest integers.
* Example: arr = [1,2,3,4,5], k = 4, x = 3 -> [1,2,3,4]
*/

/*
* Problem Name: Find the Smallest Common Element in All Rows
* Description: Given an `m x n` matrix `mat` where every row is sorted in strictly increasing order, return the smallest common element in all rows. If there is no common element, return -1.
* Input: A 2D integer matrix.
* Output: The smallest common element or -1.
* Example: [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,2,3,4,5]] -> 5
*/

/*
* Problem Name: Find the Kth Smallest Sum of a Matrix With Sorted Rows
* Description: You are given an `m x n` matrix `mat` that has its rows sorted in non-decreasing order. You are also given an integer `k`. A `k`th smallest sum is defined as the `k`th smallest sum of all possible arrays that can be formed by taking one element from each row.
* Input: A 2D integer matrix and an integer k.
* Output: The kth smallest sum.
* Example: mat = [[1,3,11,12],[2,4,6,8]], k = 1 -> 3
*/

/*
* Problem Name: Number of Ways to Stay in the Same Place After Some Steps
* Description: You have a pointer at index 0 in an array of length `arrLen`. At each step, you can move one step to the left, one step to the right, or stay in the same place (each with equal probability). You are given two integers `steps` and `arrLen`. Return the number of ways to stay at index 0 after exactly `steps` steps. Since the answer may be very large, return it modulo `10^9 + 7`.
* Input: Two integers, steps and arrLen.
* Output: The number of ways modulo `10^9 + 7`.
* Example: steps = 3, arrLen = 2 -> 4
*/

/*
* Problem Name: Minimum Number of K Consecutive Bit Flips
* Description: In an array `A` containing only 0s and 1s, a `k`-bit flip consists of choosing a (contiguous) subarray of length `k` and flipping every 0 to 1, and 1 to 0. Return the minimum number of `k`-bit flips required so that `A` does not contain any 0s. If it is not possible, return -1.
* Input: An array of integers (0s and 1s) and an integer k.
* Output: The minimum number of k-bit flips or -1.
* Example: [0,1,0], k = 1 -> 2
*/

/*
* Problem Name: Minimum Cost to Connect Sticks
* Description: You have some number of sticks with positive integer lengths. These lengths are given as an array `sticks`. You can connect any two sticks of lengths `X` and `Y` into one stick by paying a cost of `X + Y`. This results in a new stick of length `X + Y`. Your goal is to connect all the sticks into one stick with the minimum possible cost. Return the minimum cost of connecting all the given sticks into one stick.
* Input: An array of integers representing stick lengths.
* Output: The minimum cost.
* Example: [2,4,3] -> 14
*/

/*
* Problem Name: Shortest Path in a Grid with Obstacles Elimination
* Description: You are given an `m x n` integer matrix `grid` where each cell is either `0` (empty) or `1` (obstacle). You can move up, down, left, or right from and to an empty cell in one step. Return the minimum number of steps to walk from the upper-left corner `(0, 0)` to the lower-right corner `(m - 1, n - 1)` given that you can eliminate at most `k` obstacles. If it is not possible to find such a path, return -1.
* Input: A 2D integer matrix, and an integer k.
* Output: The minimum number of steps or -1.
* Example: [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1 -> 6
*/

/*
* Problem Name: Critical Connections in a Network
* Description: There are `n` servers numbered from 0 to `n - 1` connected by undirected server-to-server `connections` forming a network where `connections[i] = [ai, bi]` represents a connection between servers `ai` and `bi`. Any server can reach any other server directly or indirectly through the network. A critical connection is a connection that, if removed, will make some server unable to reach some other server. Return all critical connections in the network in any order.
* Input: An integer n and a list of connections.
* Output: A 2D array of all critical connections.
* Example: 4, [[0,1],[1,2],[2,0],[1,3]] -> [[1,3]]
*/

/*
* Problem Name: Word Search II
* Description: Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
* Input: A 2D array of characters and a list of words.
* Output: An array of all words on the board.
* Example: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"] -> ["eat","oath"]
*/

/*
* Problem Name: Alien Dictionary
* Description: There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings `words` from the alien language's dictionary, where the strings in `words` are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return `""`. If there are multiple solutions, return any of them.
* Input: An array of strings.
* Output: A string representing the alien dictionary order.
* Example: ["wrt","wrf","er","ett","rftt"] -> "wertf"
*/

/*
* Problem Name: Design In-Memory File System
* Description: Design an in-memory file system to simulate the following functions: `ls`, `mkdir`, `addContentToFile`, `readContentFromFile`.
* Input: A sequence of file system operations.
* Output: The results of the ls and readContentFromFile operations.
* Example: ls("/"), mkdir("/a/b/c"), addContentToFile("/a/b/c/d", "hello"), ls("/"), readContentFromFile("/a/b/c/d") -> ["a"], ["d"], "hello"
*/

/*
* Problem Name: The Skyline Problem
* Description: A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively. The geometric information of each building is given in the array `buildings` where `buildings[i] = [lefti, righti, heighti]`.
* Input: A 2D array of integers representing buildings.
* Output: A 2D array of points representing the skyline.
* Example: [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]] -> [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
*/

/*
* Problem Name: Best Time to Buy and Sell Stock III
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete at most two transactions.
* Input: An array of integers representing prices.
* Output: The maximum profit.
* Example: [3,3,5,0,0,3,1,4] -> 6
*/

/*
* Problem Name: Best Time to Buy and Sell Stock IV
* Description: You are given an integer `k` and an array of integers `prices` where `prices[i]` is the price of a given stock on the `i`th day. Design an algorithm to find the maximum profit. You may complete at most `k` transactions.
* Input: An integer k and an array of integers representing prices.
* Output: The maximum profit.
* Example: k = 2, prices = [2,4,1] -> 2
*/

/*
* Problem Name: Best Time to Buy and Sell Stock with Cooldown
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions: After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
* Input: An array of integers representing prices.
* Output: The maximum profit.
* Example: [1,2,3,0,2] -> 3
*/

/*
* Problem Name: Best Time to Buy and Sell Stock with Transaction Fee
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `fee` representing a transaction fee. Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
* Input: An array of integers representing prices and an integer fee.
* Output: The maximum profit.
* Example: [1,3,2,8,4,9], fee = 2 -> 8
*/

/*
* Problem Name: Longest Duplicate Substring
* Description: Given a string `s`, consider all duplicated substrings: (a substring of `s` that occurs 2 or more times). Return any duplicated substring that has the longest possible length. If `s` does not have a duplicated substring, return `""`.
* Input: A string.
* Output: The longest duplicated substring or "".
* Example: "banana" -> "ana"
*/

/*
* Problem Name: Count of Smaller Numbers After Self
* Description: You are given an integer array `nums` and you have to return a new `counts` array. The `counts` array has the property where `counts[i]` is the number of smaller elements to the right of `nums[i]`.
* Input: An array of integers.
* Output: An array of counts.
* Example: [5,2,6,1] -> [2,1,1,0]
*/

/*
* Problem Name: Maximum Frequency Stack
* Description: Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack. Implement the `FreqStack` class: `FreqStack()` constructs an empty frequency stack. `void push(int val)` pushes an integer `val` onto the top of the stack. `int pop()` removes and returns the most frequent element in the stack. If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
* Input: A sequence of FreqStack operations.
* Output: The results of the pop operations.
* Example: FreqStack(), push(5), push(7), push(5), push(7), push(4), push(5), pop() -> 5, pop() -> 7, pop() -> 5, pop() -> 4
*/

/*
* Problem Name: Smallest Range Covering Elements from K Lists
* Description: You have `k` lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the `k` lists. We define the range `[a, b]` is smaller than range `[c, d]` if `b - a < d - c` or `a < c` if `b - a == d - c`.
* Input: A 2D array of sorted integers.
* Output: An array representing the smallest range.
* Example: [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] -> [20,24]
*/

/*
* Problem Name: Trapping Rain Water II
* Description: Given an `m x n` integer matrix `heightMap` representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
* Input: A 2D integer matrix representing a height map.
* Output: The volume of trapped water.
* Example: [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] -> 4
*/

/*
* Problem Name: Concatenated Words
* Description: Given an array of strings `words` (without duplicates), return all the concatenated words in the given list of `words`. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
* Input: An array of strings.
* Output: An array of all concatenated words.
* Example: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"] -> ["catsdogcats","dogcatsdog","ratcatdogcat"]
*/

/*
* Problem Name: Design Search Autocomplete System
* Description: Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character ` # `). For each character they type except ` # `, you need to return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. The returned top 3 hot sentences should be sorted by hot degree (highest first). If several sentences have the same hot degree, use ASCII-code order (smaller first). If less than 3 hot sentences exist, return all of them.
* Input: A sequence of autocomplete system operations.
* Output: The results of the input operations.
* Example: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2]), input("i") -> ["i love you", "island", "i love leetcode"], input(" ") -> ["i love you", "i love leetcode"], input("a") -> [], input("#") -> []
*/

/*
* Problem Name: Number of Atoms
* Description: Given a string `formula` representing a chemical formula, return the count of each atom. The atomic elements always start with an uppercase letter, then zero or more lowercase letters, representing the name. One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, `H2O` and `H2O2` are possible, but `H1O2` is impossible. Two formulas concatenated together produce another formula. For example, `H2O2He3Mg4` is also a formula. A formula placed in parentheses, and a count (optionally added) is also a formula. For example, `(H2O2)` and `(H2O2)3` are formulas.
* Input: A string representing a chemical formula.
* Output: A string representing the count of each atom.
* Example: "H2O" -> "H2O", "Mg(OH)2" -> "H2MgO2", "K4(ON(SO3)2)2" -> "K4N2O14S4"
*/

/*
* Problem Name: Shortest Palindrome
* Description: You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
* Input: A string.
* Output: The shortest palindrome.
* Example: "aacecaaa" -> "aaacecaaa", "abcd" -> "dcbabcd"
*/

/*
* Problem Name: Maximum Gap
* Description: Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0. You must write an algorithm that runs in linear time and uses linear extra space.
* Input: An array of integers.
* Output: The maximum gap.
* Example: [3,6,9,1] -> 3
*/

/*
* Problem Name: Find K-th Smallest Pair Distance
* Description: The distance of a pair of integers `a` and `b` is defined as the absolute difference between `a` and `b`. Given an integer array `nums` and an integer `k`, return the `k`th smallest distance among all the pairs `nums[i]` and `nums[j]` where `0 <= i < j < nums.length`.
* Input: An array of integers and an integer k.
* Output: The kth smallest pair distance.
* Example: [1,3,1], k = 1 -> 0
*/

/*
* Problem Name: Erect the Fence
* Description: You are given an array `trees` where `trees[i] = [xi, yi]` represents the location of a tree in a 2D garden. You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well-fenced only if all the trees are enclosed. Return the coordinates of the trees that are exactly located on the fence perimeter.
* Input: An array of points representing tree locations.
* Output: An array of points representing the fence perimeter.
* Example: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]] -> [[1,1],[2,0],[3,3],[2,4],[4,2]]
*/

/*
* Problem Name: Minimum Number of Refueling Stops
* Description: A car travels from a starting position to a destination which is `target` miles east of the starting position. Along the way, there are gas stations. Each `station[i]` represents a gas station that is `station[i][0]` miles east of the starting position, and has `station[i][1]` liters of gas. The car starts with an infinite tank of gas, which is initially full. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car. Return the minimum number of refueling stops the car must make to reach its destination. If it cannot reach the destination, return -1.
* Input: An integer target, an integer startFuel, and a 2D array of stations.
* Output: The minimum number of refueling stops or -1.
* Example: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]] -> 2
*/

/*
* Problem Name: Minimum Number of Taps to Open to Water a Garden
* Description: There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point `n`. (i.e., the length of the garden is `n`). There are `n + 1` taps located at points `[0, 1, ..., n]` in the garden. Given an integer `n` and an integer array `ranges` of length `n + 1` where `ranges[i]` (0-indexed) is the range of the `i`-th tap, return the minimum number of taps that should be opened to water the entire garden. If the garden cannot be watered, return -1.
* Input: An integer n and an array of integers representing ranges.
* Output: The minimum number of taps or -1.
* Example: n = 5, ranges = [3,4,1,1,0,0] -> 1
*/

/*
* Problem Name: Find the Celebrity
* Description: Suppose you are at a party with `n` people labeled from `0` to `n - 1` and among them, there may exist one celebrity. A celebrity is someone who is known by everybody else but does not know anyone in turn. If such a person exists, then there will be exactly one celebrity. Design an algorithm to find the celebrity. You should use a function `knows(a, b)` which returns `true` if `a` knows `b`, and `false` otherwise.
* Input: An integer n.
* Output: The celebrity's label or -1.
* Example: n = 3, knows = [[1,0],[1,2]] -> 1
*/

/*
* Problem Name: Find the Closest Palindrome
* Description: Given a string `n` representing an integer, find the closest palindrome (excluding itself). If there is a tie, return the smaller one.
* Input: A string representing an integer.
* Output: The closest palindrome as a string.
* Example: "123" -> "121", "1" -> "0"
*/

/*
* Problem Name: Count Vowels Permutation
* Description: Given an integer `n`, your task is to count how many strings of length `n` can be formed under the following rules: Each character is a lowercase vowel (\'a\', \'e\', \'i\', \'o\', \'u\'). Each vowel \'a\' may only be followed by an \'e\'. Each vowel \'e\' may only be followed by an \'a\' or an \'i\'. Each vowel \'i\' may not be followed by another \'i\'. Each vowel \'o\' may only be followed by an \'i\' or an \'u\'. Each vowel \'u\' may only be followed by an \'a\'. Since the answer may be too large, return it modulo `10^9 + 7`.
* Input: An integer n.
* Output: The number of vowel permutations modulo `10^9 + 7`.
* Example: 1 -> 5, 2 -> 10
*/

/*
* Problem Name: Number of Ways to Form a Target Sum
* Description: You are given an integer array `nums` and an integer `target`. You want to build an expression out of `nums` by adding one of the symbols `+` or `-` before each integer in `nums` and then concatenate all the integers. Return the number of different expressions that you can build, which evaluates to `target`.
* Input: An array of integers and a target integer.
* Output: The number of different expressions.
* Example: nums = [1,1,1,1,1], target = 3 -> 5
*/

/*
* Problem Name: Longest Common Subsequence
* Description: Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.
* Input: Two strings, text1 and text2.
* Output: The length of the longest common subsequence.
* Example: "abcde", "ace" -> 3
*/

/*
* Problem Name: Distinct Subsequences
* Description: Given two strings `s` and `t`, return the number of distinct subsequences of `s` which equals `t`.
* Input: Two strings, s and t.
* Output: The number of distinct subsequences.
* Example: "rabbbit", "rabbit" -> 3
*/

/*
* Problem Name: Minimum ASCII Delete Sum for Two Strings
* Description: Given two strings `s1` and `s2`, return the lowest ASCII sum of deleted characters to make two strings equal. If two characters are equal, they are not deleted.
* Input: Two strings, s1 and s2.
* Output: The lowest ASCII sum of deleted characters.
* Example: "sea", "eat" -> 231
*/

/*
* Problem Name: Edit Distance
* Description: Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.
* Input: Two strings, word1 and word2.
* Output: The minimum number of operations.
* Example: "horse", "ros" -> 3
*/

/*
* Problem Name: Longest Valid Parentheses
* Description: Given a string containing just the characters `(` and `)`, return the length of the longest valid (well-formed) parentheses substring.
* Input: A string of parentheses.
* Output: The length of the longest valid parentheses substring.
* Example: "(()" -> 2, ")()()" -> 4, "" -> 0
*/

/*
* Problem Name: Trapping Rain Water
* Description: Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* Input: An array of non-negative integers representing elevation map.
* Output: The amount of trapped rain water.
* Example: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
*/

/*
* Problem Name: First Missing Positive
* Description: Given an unsorted integer array `nums`, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) extra space.
* Input: An unsorted integer array.
* Output: The smallest missing positive integer.
* Example: [1,2,0] -> 3, [3,4,-1,1] -> 2, [7,8,9,11,12] -> 1
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
* Problem Name: Decode Ways
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". Given a string `s` containing only digits, return the number of ways to decode it.
* Input: A string of digits.
* Output: The number of ways to decode the string.
* Example: "12" -> 2, "226" -> 3, "0" -> 0
*/

/*
* Problem Name: Word Search
* Description: Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
* Input: A 2D array of characters and a string.
* Output: true or false.
* Example: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" -> true
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
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". In addition to the mapping above, the encoded message may contain the `*` character, which can represent any digit from `1` to `9`. Given a string `s` containing digits and the `*` character, return `the number of ways` to decode it. Since the answer may be very large, return it `modulo` `10^9 + 7`.
* Input: A string of digits and `*` characters.
* Output: The number of ways to decode the string modulo `10^9 + 7`.
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


/*
* Problem Name: Minimum Cost to Cut a Stick
* Description: Given a wooden stick of length `n` units. The stick is labeled from 0 to `n`. You are given an integer array `cuts` where `cuts[i]` is the position where you can cut the stick. You can perform the cuts in any order. The cost of a cut is the length of the stick when you make the cut. Your goal is to minimize the total cost of the cuts. Return the minimum total cost to cut the stick.
* Input: An integer n and an array of integers representing cut positions.
* Output: The minimum total cost.
* Example: n = 7, cuts = [1,3,4,5] -> 16
*/

/*
* Problem Name: Find K Closest Elements
* Description: Given a sorted integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order. An integer `a` is closer to `x` than an integer `b` if: `|a - x| < |b - x|`, or `|a - x| == |b - x|` and `a < b`.
* Input: A sorted integer array, an integer k, and an integer x.
* Output: An array of the k closest integers.
* Example: arr = [1,2,3,4,5], k = 4, x = 3 -> [1,2,3,4]
*/

/*
* Problem Name: Find the Smallest Common Element in All Rows
* Description: Given an `m x n` matrix `mat` where every row is sorted in strictly increasing order, return the smallest common element in all rows. If there is no common element, return -1.
* Input: A 2D integer matrix.
* Output: The smallest common element or -1.
* Example: [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,2,3,4,5]] -> 5
*/

/*
* Problem Name: Find the Kth Smallest Sum of a Matrix With Sorted Rows
* Description: You are given an `m x n` matrix `mat` that has its rows sorted in non-decreasing order. You are also given an integer `k`. A `k`th smallest sum is defined as the `k`th smallest sum of all possible arrays that can be formed by taking one element from each row.
* Input: A 2D integer matrix and an integer k.
* Output: The kth smallest sum.
* Example: mat = [[1,3,11,12],[2,4,6,8]], k = 1 -> 3
*/

/*
* Problem Name: Number of Ways to Stay in the Same Place After Some Steps
* Description: You have a pointer at index 0 in an array of length `arrLen`. At each step, you can move one step to the left, one step to the right, or stay in the same place (each with equal probability). You are given two integers `steps` and `arrLen`. Return the number of ways to stay at index 0 after exactly `steps` steps. Since the answer may be very large, return it modulo `10^9 + 7`.
* Input: Two integers, steps and arrLen.
* Output: The number of ways modulo `10^9 + 7`.
* Example: steps = 3, arrLen = 2 -> 4
*/

/*
* Problem Name: Minimum Number of K Consecutive Bit Flips
* Description: In an array `A` containing only 0s and 1s, a `k`-bit flip consists of choosing a (contiguous) subarray of length `k` and flipping every 0 to 1, and 1 to 0. Return the minimum number of `k`-bit flips required so that `A` does not contain any 0s. If it is not possible, return -1.
* Input: An array of integers (0s and 1s) and an integer k.
* Output: The minimum number of k-bit flips or -1.
* Example: [0,1,0], k = 1 -> 2
*/

/*
* Problem Name: Minimum Cost to Connect Sticks
* Description: You have some number of sticks with positive integer lengths. These lengths are given as an array `sticks`. You can connect any two sticks of lengths `X` and `Y` into one stick by paying a cost of `X + Y`. This results in a new stick of length `X + Y`. Your goal is to connect all the sticks into one stick with the minimum possible cost. Return the minimum cost of connecting all the given sticks into one stick.
* Input: An array of integers representing stick lengths.
* Output: The minimum cost.
* Example: [2,4,3] -> 14
*/

/*
* Problem Name: Shortest Path in a Grid with Obstacles Elimination
* Description: You are given an `m x n` integer matrix `grid` where each cell is either `0` (empty) or `1` (obstacle). You can move up, down, left, or right from and to an empty cell in one step. Return the minimum number of steps to walk from the upper-left corner `(0, 0)` to the lower-right corner `(m - 1, n - 1)` given that you can eliminate at most `k` obstacles. If it is not possible to find such a path, return -1.
* Input: A 2D integer matrix, and an integer k.
* Output: The minimum number of steps or -1.
* Example: [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1 -> 6
*/

/*
* Problem Name: Critical Connections in a Network
* Description: There are `n` servers numbered from 0 to `n - 1` connected by undirected server-to-server `connections` forming a network where `connections[i] = [ai, bi]` represents a connection between servers `ai` and `bi`. Any server can reach any other server directly or indirectly through the network. A critical connection is a connection that, if removed, will make some server unable to reach some other server. Return all critical connections in the network in any order.
* Input: An integer n and a list of connections.
* Output: A 2D array of all critical connections.
* Example: 4, [[0,1],[1,2],[2,0],[1,3]] -> [[1,3]]
*/

/*
* Problem Name: Word Search II
* Description: Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
* Input: A 2D array of characters and a list of words.
* Output: An array of all words on the board.
* Example: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"] -> ["eat","oath"]
*/

/*
* Problem Name: Alien Dictionary
* Description: There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings `words` from the alien language's dictionary, where the strings in `words` are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return `""`. If there are multiple solutions, return any of them.
* Input: An array of strings.
* Output: A string representing the alien dictionary order.
* Example: ["wrt","wrf","er","ett","rftt"] -> "wertf"
*/

/*
* Problem Name: Design In-Memory File System
* Description: Design an in-memory file system to simulate the following functions: `ls`, `mkdir`, `addContentToFile`, `readContentFromFile`.
* Input: A sequence of file system operations.
* Output: The results of the ls and readContentFromFile operations.
* Example: ls("/"), mkdir("/a/b/c"), addContentToFile("/a/b/c/d", "hello"), ls("/"), readContentFromFile("/a/b/c/d") -> ["a"], ["d"], "hello"
*/

/*
* Problem Name: The Skyline Problem
* Description: A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively. The geometric information of each building is given in the array `buildings` where `buildings[i] = [lefti, righti, heighti]`.
* Input: A 2D array of integers representing buildings.
* Output: A 2D array of points representing the skyline.
* Example: [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]] -> [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
*/

/*
* Problem Name: Best Time to Buy and Sell Stock III
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete at most two transactions.
* Input: An array of integers representing prices.
* Output: The maximum profit.
* Example: [3,3,5,0,0,3,1,4] -> 6
*/

/*
* Problem Name: Best Time to Buy and Sell Stock IV
* Description: You are given an integer `k` and an array of integers `prices` where `prices[i]` is the price of a given stock on the `i`th day. Design an algorithm to find the maximum profit. You may complete at most `k` transactions.
* Input: An integer k and an array of integers representing prices.
* Output: The maximum profit.
* Example: k = 2, prices = [2,4,1] -> 2
*/

/*
* Problem Name: Best Time to Buy and Sell Stock with Cooldown
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions: After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
* Input: An array of integers representing prices.
* Output: The maximum profit.
* Example: [1,2,3,0,2] -> 3
*/

/*
* Problem Name: Best Time to Buy and Sell Stock with Transaction Fee
* Description: You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `fee` representing a transaction fee. Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.
* Input: An array of integers representing prices and an integer fee.
* Output: The maximum profit.
* Example: [1,3,2,8,4,9], fee = 2 -> 8
*/

/*
* Problem Name: Longest Duplicate Substring
* Description: Given a string `s`, consider all duplicated substrings: (a substring of `s` that occurs 2 or more times). Return any duplicated substring that has the longest possible length. If `s` does not have a duplicated substring, return `""`.
* Input: A string.
* Output: The longest duplicated substring or "".
* Example: "banana" -> "ana"
*/

/*
* Problem Name: Count of Smaller Numbers After Self
* Description: You are given an integer array `nums` and you have to return a new `counts` array. The `counts` array has the property where `counts[i]` is the number of smaller elements to the right of `nums[i]`.
* Input: An array of integers.
* Output: An array of counts.
* Example: [5,2,6,1] -> [2,1,1,0]
*/

/*
* Problem Name: Maximum Frequency Stack
* Description: Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack. Implement the `FreqStack` class: `FreqStack()` constructs an empty frequency stack. `void push(int val)` pushes an integer `val` onto the top of the stack. `int pop()` removes and returns the most frequent element in the stack. If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
* Input: A sequence of FreqStack operations.
* Output: The results of the pop operations.
* Example: FreqStack(), push(5), push(7), push(5), push(7), push(4), push(5), pop() -> 5, pop() -> 7, pop() -> 5, pop() -> 4
*/

/*
* Problem Name: Smallest Range Covering Elements from K Lists
* Description: You have `k` lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the `k` lists. We define the range `[a, b]` is smaller than range `[c, d]` if `b - a < d - c` or `a < c` if `b - a == d - c`.
* Input: A 2D array of sorted integers.
* Output: An array representing the smallest range.
* Example: [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] -> [20,24]
*/

/*
* Problem Name: Trapping Rain Water II
* Description: Given an `m x n` integer matrix `heightMap` representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
* Input: A 2D integer matrix representing a height map.
* Output: The volume of trapped water.
* Example: [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] -> 4
*/

/*
* Problem Name: Concatenated Words
* Description: Given an array of strings `words` (without duplicates), return all the concatenated words in the given list of `words`. A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
* Input: An array of strings.
* Output: An array of all concatenated words.
* Example: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"] -> ["catsdogcats","dogcatsdog","ratcatdogcat"]
*/

/*
* Problem Name: Design Search Autocomplete System
* Description: Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character ` # `). For each character they type except ` # `, you need to return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. The returned top 3 hot sentences should be sorted by hot degree (highest first). If several sentences have the same hot degree, use ASCII-code order (smaller first). If less than 3 hot sentences exist, return all of them.
* Input: A sequence of autocomplete system operations.
* Output: The results of the input operations.
* Example: AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2]), input("i") -> ["i love you", "island", "i love leetcode"], input(" ") -> ["i love you", "i love leetcode"], input("a") -> [], input("#") -> []
*/

/*
* Problem Name: Number of Atoms
* Description: Given a string `formula` representing a chemical formula, return the count of each atom. The atomic elements always start with an uppercase letter, then zero or more lowercase letters, representing the name. One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow. For example, `H2O` and `H2O2` are possible, but `H1O2` is impossible. Two formulas concatenated together produce another formula. For example, `H2O2He3Mg4` is also a formula. A formula placed in parentheses, and a count (optionally added) is also a formula. For example, `(H2O2)` and `(H2O2)3` are formulas.
* Input: A string representing a chemical formula.
* Output: A string representing the count of each atom.
* Example: "H2O" -> "H2O", "Mg(OH)2" -> "H2MgO2", "K4(ON(SO3)2)2" -> "K4N2O14S4"
*/

/*
* Problem Name: Shortest Palindrome
* Description: You are given a string `s`. You can convert `s` to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
* Input: A string.
* Output: The shortest palindrome.
* Example: "aacecaaa" -> "aaacecaaa", "abcd" -> "dcbabcd"
*/

/*
* Problem Name: Maximum Gap
* Description: Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0. You must write an algorithm that runs in linear time and uses linear extra space.
* Input: An array of integers.
* Output: The maximum gap.
* Example: [3,6,9,1] -> 3
*/

/*
* Problem Name: Find K-th Smallest Pair Distance
* Description: The distance of a pair of integers `a` and `b` is defined as the absolute difference between `a` and `b`. Given an integer array `nums` and an integer `k`, return the `k`th smallest distance among all the pairs `nums[i]` and `nums[j]` where `0 <= i < j < nums.length`.
* Input: An array of integers and an integer k.
* Output: The kth smallest pair distance.
* Example: [1,3,1], k = 1 -> 0
*/

/*
* Problem Name: Erect the Fence
* Description: You are given an array `trees` where `trees[i] = [xi, yi]` represents the location of a tree in a 2D garden. You are asked to fence the entire garden using the minimum length of rope as it is expensive. The garden is well-fenced only if all the trees are enclosed. Return the coordinates of the trees that are exactly located on the fence perimeter.
* Input: An array of points representing tree locations.
* Output: An array of points representing the fence perimeter.
* Example: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]] -> [[1,1],[2,0],[3,3],[2,4],[4,2]]
*/

/*
* Problem Name: Minimum Number of Refueling Stops
* Description: A car travels from a starting position to a destination which is `target` miles east of the starting position. Along the way, there are gas stations. Each `station[i]` represents a gas station that is `station[i][0]` miles east of the starting position, and has `station[i][1]` liters of gas. The car starts with an infinite tank of gas, which is initially full. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car. Return the minimum number of refueling stops the car must make to reach its destination. If it cannot reach the destination, return -1.
* Input: An integer target, an integer startFuel, and a 2D array of stations.
* Output: The minimum number of refueling stops or -1.
* Example: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]] -> 2
*/

/*
* Problem Name: Minimum Number of Taps to Open to Water a Garden
* Description: There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point `n`. (i.e., the length of the garden is `n`). There are `n + 1` taps located at points `[0, 1, ..., n]` in the garden. Given an integer `n` and an integer array `ranges` of length `n + 1` where `ranges[i]` (0-indexed) is the range of the `i`-th tap, return the minimum number of taps that should be opened to water the entire garden. If the garden cannot be watered, return -1.
* Input: An integer n and an array of integers representing ranges.
* Output: The minimum number of taps or -1.
* Example: n = 5, ranges = [3,4,1,1,0,0] -> 1
*/

/*
* Problem Name: Find the Celebrity
* Description: Suppose you are at a party with `n` people labeled from `0` to `n - 1` and among them, there may exist one celebrity. A celebrity is someone who is known by everybody else but does not know anyone in turn. If such a person exists, then there will be exactly one celebrity. Design an algorithm to find the celebrity. You should use a function `knows(a, b)` which returns `true` if `a` knows `b`, and `false` otherwise.
* Input: An integer n.
* Output: The celebrity's label or -1.
* Example: n = 3, knows = [[1,0],[1,2]] -> 1
*/

/*
* Problem Name: Find the Closest Palindrome
* Description: Given a string `n` representing an integer, find the closest palindrome (excluding itself). If there is a tie, return the smaller one.
* Input: A string representing an integer.
* Output: The closest palindrome as a string.
* Example: "123" -> "121", "1" -> "0"
*/

/*
* Problem Name: Count Vowels Permutation
* Description: Given an integer `n`, your task is to count how many strings of length `n` can be formed under the following rules: Each character is a lowercase vowel (\"a\", \"e\", \"i\", \"o\", \"u\"). Each vowel \"a\" may only be followed by an \"e\". Each vowel \"e\" may only be followed by an \"a\" or an \"i\". Each vowel \"i\" may not be followed by another \"i\". Each vowel \"o\" may only be followed by an \"i\" or an \"u\". Each vowel \"u\" may only be followed by an \"a\". Since the answer may be too large, return it modulo `10^9 + 7`.
* Input: An integer n.
* Output: The number of vowel permutations modulo `10^9 + 7`.
* Example: 1 -> 5, 2 -> 10
*/

/*
* Problem Name: Number of Ways to Form a Target Sum
* Description: You are given an integer array `nums` and an integer `target`. You want to build an expression out of `nums` by adding one of the symbols `+` or `-` before each integer in `nums` and then concatenate all the integers. Return the number of different expressions that you can build, which evaluates to `target`.
* Input: An array of integers and a target integer.
* Output: The number of different expressions.
* Example: nums = [1,1,1,1,1], target = 3 -> 5
*/

/*
* Problem Name: Longest Common Subsequence
* Description: Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.
* Input: Two strings, text1 and text2.
* Output: The length of the longest common subsequence.
* Example: "abcde", "ace" -> 3
*/

/*
* Problem Name: Distinct Subsequences
* Description: Given two strings `s` and `t`, return the number of distinct subsequences of `s` which equals `t`.
* Input: Two strings, s and t.
* Output: The number of distinct subsequences.
* Example: "rabbbit", "rabbit" -> 3
*/

/*
* Problem Name: Minimum ASCII Delete Sum for Two Strings
* Description: Given two strings `s1` and `s2`, return the lowest ASCII sum of deleted characters to make two strings equal. If two characters are equal, they are not deleted.
* Input: Two strings, s1 and s2.
* Output: The lowest ASCII sum of deleted characters.
* Example: "sea", "eat" -> 231
*/

/*
* Problem Name: Edit Distance
* Description: Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.
* Input: Two strings, word1 and word2.
* Output: The minimum number of operations.
* Example: "horse", "ros" -> 3
*/

/*
* Problem Name: Longest Valid Parentheses
* Description: Given a string containing just the characters `(` and `)`, return the length of the longest valid (well-formed) parentheses substring.
* Input: A string of parentheses.
* Output: The length of the longest valid parentheses substring.
* Example: "(()" -> 2, ")()()" -> 4, "" -> 0
*/

/*
* Problem Name: Trapping Rain Water
* Description: Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
* Input: An array of non-negative integers representing elevation map.
* Output: The amount of trapped rain water.
* Example: [0,1,0,2,1,0,1,3,2,1,2,1] -> 6
*/

/*
* Problem Name: First Missing Positive
* Description: Given an unsorted integer array `nums`, return the smallest missing positive integer. You must implement an algorithm that runs in O(n) time and uses O(1) extra space.
* Input: An unsorted integer array.
* Output: The smallest missing positive integer.
* Example: [1,2,0] -> 3, [3,4,-1,1] -> 2, [7,8,9,11,12] -> 1
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
* Problem Name: Decode Ways
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". Given a string `s` containing only digits, return the number of ways to decode it.
* Input: A string of digits.
* Output: The number of ways to decode the string.
* Example: "12" -> 2, "226" -> 3, "0" -> 0
*/

/*
* Problem Name: Word Search
* Description: Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
* Input: A 2D array of characters and a string.
* Output: true or false.
* Example: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" -> true
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
* Description: A message containing letters from `A-Z` is being encoded to numbers using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. To decode an encoded message, all digits must be grouped then mapped back into letters using the reverse of the mapping above (e.g., "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6)). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into `F` since "6" is different from "06". In addition to the mapping above, the encoded message may contain the `*` character, which can represent any digit from `1` to `9`. Given a string `s` containing digits and the `*` character, return `the number of ways` to decode it. Since the answer may be very large, return it `modulo` `10^9 + 7`.
* Input: A string of digits and `*` characters.
* Output: The number of ways to decode the string modulo `10^9 + 7`.
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

