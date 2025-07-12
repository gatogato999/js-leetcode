/*
* Problem Name: Traveling Salesman Problem (TSP)
* Description: Given a set of cities and the distance between every pair of cities, find the shortest possible route that visits each city exactly once and returns to the origin city.
* Input: A distance matrix representing the distances between cities.
* Output: The shortest route and its total distance.
* Example: (graph of 4 cities) -> (shortest path and distance)
*/

/*
* Problem Name: Hamiltonian Cycle
* Description: Given a graph, determine whether a Hamiltonian cycle exists in the graph. A Hamiltonian cycle is a cycle in an undirected graph that visits each vertex exactly once and returns to the starting vertex.
* Input: An adjacency list or matrix representing a graph.
* Output: true or false.
* Example: (graph) -> true or false
*/

/*
* Problem Name: Graph Isomorphism
* Description: Given two graphs, determine if they are isomorphic. Two graphs are isomorphic if they can be drawn in the same way, or if one can be transformed into the other by relabeling vertices.
* Input: Adjacency lists or matrices for two graphs.
* Output: true or false.
* Example: (graph1), (graph2) -> true or false
*/

/*
* Problem Name: Satisfiability Problem (SAT)
* Description: Given a Boolean formula in conjunctive normal form (CNF), determine if there exists a truth assignment to its variables that makes the formula true.
* Input: A Boolean formula in CNF.
* Output: true or false (and a satisfying assignment if true).
* Example: (A OR B) AND (NOT A OR C) -> true
*/

/*
* Problem Name: Subset Sum Problem
* Description: Given a set of non-negative integers and a value sum, determine if there is a subset of the given set with sum equal to the given sum.
* Input: An array of non-negative integers and a target sum.
* Output: true or false.
* Example: [3, 34, 4, 12, 5, 2], sum = 9 -> true
*/

/*
* Problem Name: Knapsack Problem (0/1)
* Description: Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.
* Input: An array of item weights, an array of item values, and a maximum weight capacity.
* Output: The maximum value that can be obtained.
* Example: weights = [10, 20, 30], values = [60, 100, 120], capacity = 50 -> 220
*/

/*
* Problem Name: Longest Common Subsequence (LCS) of Three Strings
* Description: Given three strings, find the length of their longest common subsequence.
* Input: Three strings.
* Output: The length of the LCS.
* Example: "abcde", "ace", "axbyc" -> 2
*/

/*
* Problem Name: All-Pairs Shortest Path (Floyd-Warshall)
* Description: Given a weighted graph, find the shortest path between all pairs of vertices.
* Input: A weighted adjacency matrix representing a graph.
* Output: A distance matrix where each entry (i, j) is the shortest path from i to j.
* Example: (weighted graph) -> (shortest path matrix)
*/

/*
* Problem Name: Maximum Flow (Ford-Fulkerson)
* Description: Given a flow network with a single source and sink, find the maximum possible flow from the source to the sink.
* Input: A capacity matrix representing a flow network.
* Output: The maximum flow value.
* Example: (flow network) -> (max flow value)
*/

/*
* Problem Name: Minimum Cost Maximum Flow
* Description: Given a flow network with costs associated with edges, find a flow from source to sink that maximizes flow while minimizing total cost.
* Input: A capacity matrix and a cost matrix representing a flow network.
* Output: The maximum flow and its minimum cost.
* Example: (flow network with costs) -> (max flow, min cost)
*/

/*
* Problem Name: Chinese Postman Problem
* Description: Given a connected graph where edges have non-negative weights, find a shortest closed walk that traverses each edge of the graph at least once.
* Input: A weighted adjacency matrix representing a graph.
* Output: The shortest closed walk and its total weight.
* Example: (graph) -> (shortest walk and weight)
*/

/*
* Problem Name: Maximum Bipartite Matching
* Description: Given a bipartite graph, find a matching with the maximum possible number of edges.
* Input: An adjacency list or matrix representing a bipartite graph.
* Output: The maximum matching.
* Example: (bipartite graph) -> (max matching)
*/

/*
* Problem Name: Steiner Tree Problem
* Description: Given a graph and a subset of its vertices (terminals), find a minimum-cost tree that connects all the terminals.
* Input: A weighted adjacency matrix and a set of terminal vertices.
* Output: The minimum-cost Steiner tree and its total weight.
* Example: (graph, terminals) -> (Steiner tree and weight)
*/

/*
* Problem Name: Set Cover Problem
* Description: Given a universe of elements and a collection of subsets of the universe, find the smallest number of subsets whose union is the universe.
* Input: A set of elements and a collection of subsets.
* Output: The minimum number of subsets.
* Example: U = {1,2,3,4,5}, S = [{1,2}, {2,3}, {4,5}] -> 2
*/

/*
* Problem Name: Vertex Cover Problem
* Description: Given a graph, find a minimum vertex cover. A vertex cover of an undirected graph is a subset of its vertices such that for every edge of the graph, at least one of its endpoints is in the subset.
* Input: An adjacency list or matrix representing a graph.
* Output: The minimum vertex cover.
* Example: (graph) -> (min vertex cover)
*/

/*
* Problem Name: Maximum Clique Problem
* Description: Given a graph, find a maximum clique. A clique is a subset of vertices of an undirected graph such that every two distinct vertices in the clique are adjacent.
* Input: An adjacency list or matrix representing a graph.
* Output: The maximum clique.
* Example: (graph) -> (max clique)
*/

/*
* Problem Name: Graph Coloring Problem
* Description: Given a graph, find the minimum number of colors needed to color the vertices such that no two adjacent vertices have the same color.
* Input: An adjacency list or matrix representing a graph.
* Output: The minimum number of colors.
* Example: (graph) -> (min colors)
*/

/*
* Problem Name: Bin Packing Problem
* Description: Given a set of items of different sizes, pack them into a minimum number of bins each of a given capacity.
* Input: An array of item sizes and a bin capacity.
* Output: The minimum number of bins.
* Example: items = [2,5,4,7,1,3,8], capacity = 10 -> 3
*/

/*
* Problem Name: Job Scheduling with Deadlines and Profits
* Description: Given a list of jobs where each job has a deadline and a profit, find a subset of jobs that can be completed by their deadlines and yields the maximum total profit.
* Input: An array of jobs, each with a deadline and profit.
* Output: The maximum total profit.
* Example: jobs = [(a,4,20), (b,1,10), (c,1,40), (d,1,30)] -> 60
*/

/*
* Problem Name: Maximum Independent Set Problem
* Description: Given a graph, find a maximum independent set. An independent set is a set of vertices in a graph, no two of which are adjacent.
* Input: An adjacency list or matrix representing a graph.
* Output: The maximum independent set.
* Example: (graph) -> (max independent set)
*/

/*
* Problem Name: Minimum Spanning Tree (Kruskal's or Prim's)
* Description: Given a connected, undirected graph with weighted edges, find a spanning tree whose sum of edge weights is as small as possible.
* Input: A weighted adjacency matrix or list representing a graph.
* Output: The edges of the MST and its total weight.
* Example: (weighted graph) -> (MST edges and weight)
*/

/*
* Problem Name: Shortest Path with K Edges
* Description: Given a weighted graph, a source vertex, a destination vertex, and an integer `k`, find the shortest path from source to destination with exactly `k` edges.
* Input: A weighted adjacency matrix, source, destination, and k.
* Output: The shortest path distance or infinity if not possible.
* Example: (weighted graph), src=0, dest=3, k=2 -> 10
*/

/*
* Problem Name: Longest Path in a Directed Acyclic Graph (DAG)
* Description: Given a directed acyclic graph (DAG) with weighted edges, find the longest path from a source vertex to all other vertices.
* Input: A weighted adjacency list representing a DAG and a source vertex.
* Output: An array of longest path distances from the source.
* Example: (weighted DAG), src=0 -> (longest path distances)
*/

/*
* Problem Name: Maximum Weight Independent Set on a Path Graph
* Description: Given a path graph with weights on its vertices, find an independent set such that the sum of weights of its vertices is maximized.
* Input: An array of vertex weights representing a path graph.
* Output: The maximum weight of an independent set.
* Example: [1, 2, 3, 4, 5] -> 9
*/

/*
* Problem Name: Maximum Weight Independent Set on a Tree
* Description: Given a tree with weights on its vertices, find an independent set such that the sum of weights of its vertices is maximized.
* Input: An adjacency list representing a tree and an array of vertex weights.
* Output: The maximum weight of an independent set.
* Example: (tree, weights) -> (max weight)
*/

/*
* Problem Name: Optimal Binary Search Tree
* Description: Given a sorted array of keys and an array of frequencies for each key, construct a binary search tree such that the total cost of searching for all keys is minimized.
* Input: A sorted array of keys and an array of frequencies.
* Output: The minimum search cost.
* Example: keys = [10, 12, 20], freq = [34, 8, 50] -> 142
*/

/*
* Problem Name: Matrix Chain Multiplication
* Description: Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide the order in which to perform the multiplications.
* Input: An array of matrix dimensions.
* Output: The minimum number of scalar multiplications.
* Example: [10, 20, 30, 40, 30] -> 30000
*/

/*
* Problem Name: Longest Palindromic Substring (Manacher's Algorithm)
* Description: Given a string `s`, find the longest substring which is a palindrome. Implement Manacher's algorithm for O(N) solution.
* Input: A string.
* Output: The longest palindromic substring.
* Example: "babad" -> "bab"
*/

/*
* Problem Name: Suffix Array and LCP Array Construction
* Description: Given a string, construct its suffix array and longest common prefix (LCP) array.
* Input: A string.
* Output: The suffix array and LCP array.
* Example: "banana" -> suffix array = [5,3,1,0,4,2], LCP array = [0,1,3,0,0,2]
*/

/*
* Problem Name: String Matching (Knuth-Morris-Pratt Algorithm)
* Description: Given a text `T` and a pattern `P`, find all occurrences of `P` in `T`. Implement the KMP algorithm for efficient string matching.
* Input: A text string and a pattern string.
* Output: An array of starting indices of all occurrences of the pattern.
* Example: "ABABDABACDABABCABAB", "ABABCABAB" -> [10]
*/

/*
* Problem Name: Aho-Corasick Algorithm
* Description: Given a set of keywords and a text, find all occurrences of all keywords in the text. Implement the Aho-Corasick algorithm.
* Input: A set of keywords and a text string.
* Output: A list of all occurrences of keywords in the text.
* Example: keywords = {"he", "she", "his", "hers"}, text = "ahishers" -> (occurrences)
*/

/*
* Problem Name: Z-Algorithm for String Matching
* Description: Given a string `S`, compute its Z-array. The Z-array `Z[i]` for a string `S` is the length of the longest common prefix between `S` and the suffix of `S` starting at `i`.
* Input: A string.
* Output: The Z-array.
* Example: "aabxaabxcaabxaabxay" -> [19,1,0,0,3,1,0,0,0,8,1,0,0,3,1,0,0,0,1]
*/

/*
* Problem Name: Rabin-Karp Algorithm for String Matching
* Description: Given a text `T` and a pattern `P`, find all occurrences of `P` in `T`. Implement the Rabin-Karp algorithm using hashing.
* Input: A text string and a pattern string.
* Output: An array of starting indices of all occurrences of the pattern.
* Example: "GEEKSFORGEEKS", "GEEK" -> [0, 9]
*/

/*
* Problem Name: Suffix Tree Construction
* Description: Given a string, construct its suffix tree.
* Input: A string.
* Output: The suffix tree data structure.
* Example: "banana" -> (suffix tree representation)
*/

/*
* Problem Name: Minimum Edit Distance (Levenshtein Distance)
* Description: Given two strings, find the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other.
* Input: Two strings.
* Output: The minimum edit distance.
* Example: "kitten", "sitting" -> 3
*/

/*
* Problem Name: Longest Common Substring
* Description: Given two strings, find the longest common substring.
* Input: Two strings.
* Output: The longest common substring.
* Example: "ABCBDAB", "BDCABA" -> "BDB"
*/

/*
* Problem Name: Shortest Common Supersequence
* Description: Given two strings `str1` and `str2`, return the shortest string that has both `str1` and `str2` as subsequences.
* Input: Two strings, str1 and str2.
* Output: The shortest common supersequence.
* Example: "abac", "cab" -> "cabac"
*/

/*
* Problem Name: Count of Palindromic Substrings
* Description: Given a string `s`, return the number of palindromic substrings in it.
* Input: A string.
* Output: The number of palindromic substrings.
* Example: "abc" -> 3, "aaa" -> 6
*/

/*
* Problem Name: K-th Smallest Element in a Sorted Matrix
* Description: Given an `n x n` matrix where each of the rows and columns are sorted in ascending order, return the `k`th smallest element in the matrix.
* Input: A 2D sorted matrix and an integer k.
* Output: The kth smallest element.
* Example: [[1,5,9],[10,11,13],[12,13,15]], k = 8 -> 13
*/

/*
* Problem Name: Find K Pairs with Smallest Sums
* Description: You are given two integer arrays `nums1` and `nums2` sorted in ascending order and an integer `k`. Define a pair `(u, v)` as one element from the first array and one element from the second array. Return the `k` pairs `(u1, v1), (u2, v2), ..., (uk, vk)` with the smallest sums.
* Input: Two sorted integer arrays and an integer k.
* Output: A 2D array of k pairs with the smallest sums.
* Example: nums1 = [1,7,11], nums2 = [2,4,6], k = 3 -> [[1,2],[1,4],[1,6]]
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


/*
* Problem Name: Art Gallery Problem
* Description: Given a simple polygon, find the minimum number of guards required to see the entire polygon. A guard can see a point if the line segment connecting the guard and the point does not intersect the exterior of the polygon.
* Input: A list of vertices of a simple polygon.
* Output: The minimum number of guards.
* Example: (polygon) -> (min guards)
*/

/*
* Problem Name: Shortest Superstring Problem
* Description: Given a set of strings, find the shortest string that contains all of them as substrings.
* Input: An array of strings.
* Output: The shortest superstring.
* Example: ["alex", "loves", "leetcode"] -> "alexlovesleetcode"
*/

/*
* Problem Name: Generalized String Alignment (Multiple Sequence Alignment)
* Description: Given a set of strings, find an alignment of them that minimizes the total cost, where the cost is defined by a given scoring function.
* Input: A set of strings and a scoring function.
* Output: The optimal alignment and its score.
* Example: (strings, scoring function) -> (alignment, score)
*/

/*
* Problem Name: Longest Increasing Subsequence (n log n)
* Description: Given a sequence of numbers, find the length of the longest subsequence that is strictly increasing. Implement the O(n log n) solution.
* Input: An array of numbers.
* Output: The length of the longest increasing subsequence.
* Example: [10, 9, 2, 5, 3, 7, 101, 18] -> 4
*/

/*
* Problem Name: Convex Hull (Graham Scan or Monotone Chain)
* Description: Given a set of points in a plane, find the smallest convex polygon that contains all the points.
* Input: An array of points.
* Output: An array of points representing the convex hull.
* Example: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]] -> [[1,1],[2,0],[3,3],[2,4],[4,2]]
*/

/*
* Problem Name: Closest Pair of Points
* Description: Given a set of points in a plane, find the pair of points with the smallest distance between them.
* Input: An array of points.
* Output: The closest pair of points and their distance.
* Example: (points) -> (closest pair, distance)
*/

/*
* Problem Name: Fast Fourier Transform (FFT)
* Description: Implement the Fast Fourier Transform algorithm to compute the discrete Fourier transform of a sequence.
* Input: A sequence of numbers.
* Output: The discrete Fourier transform of the sequence.
* Example: (sequence) -> (DFT)
*/

/*
* Problem Name: Polynomial Multiplication using FFT
* Description: Given two polynomials, multiply them using the Fast Fourier Transform algorithm.
* Input: Two arrays of coefficients representing the polynomials.
* Output: An array of coefficients representing the product polynomial.
* Example: [1, 2, 3], [4, 5, 6] -> [4, 13, 28, 27, 18]
*/

/*
* Problem Name: Heavy-Light Decomposition of a Tree
* Description: Decompose a tree into a set of paths, such that any path from the root to a leaf has at most O(log n) different paths.
* Input: An adjacency list representing a tree.
* Output: The heavy-light decomposition of the tree.
* Example: (tree) -> (decomposition)
*/

/*
* Problem Name: Link-Cut Tree
* Description: Implement a Link-Cut Tree data structure to maintain a dynamic forest of trees and support operations like path queries and updates.
* Input: A sequence of Link-Cut Tree operations.
* Output: The results of the query operations.
* Example: (operations) -> (query results)
*/

/*
* Problem Name: Persistent Segment Tree
* Description: Implement a persistent segment tree to query previous versions of a segment tree.
* Input: A sequence of segment tree operations (updates and queries on different versions).
* Output: The results of the query operations.
* Example: (operations) -> (query results)
*/

/*
* Problem Name: Wavelet Tree
* Description: Implement a Wavelet Tree data structure to support various queries on a sequence of numbers, such as rank, select, and range queries.
* Input: A sequence of numbers.
* Output: A Wavelet Tree data structure.
* Example: (sequence) -> (Wavelet Tree)
*/

/*
* Problem Name: Lowest Common Ancestor (LCA) with Binary Lifting
* Description: Given a rooted tree and two nodes, find their lowest common ancestor. Implement the binary lifting technique for O(log n) query time.
* Input: A rooted tree and pairs of nodes.
* Output: The LCA for each pair of nodes.
* Example: (tree, nodes) -> (LCA)
*/

/*
* Problem Name: Range Minimum Query (RMQ) with Sparse Table
* Description: Given an array, preprocess it to answer range minimum queries in O(1) time. Implement the sparse table approach.
* Input: An array and a set of range queries.
* Output: The minimum value for each range query.
* Example: [2,5,1,8,3,9,4], query(2,5) -> 1
*/

/*
* Problem Name: Dancing Links (Algorithm X)
* Description: Implement Donald Knuth's Dancing Links algorithm (Algorithm X) to solve exact cover problems efficiently.
* Input: A matrix representing an exact cover problem.
* Output: A solution to the exact cover problem.
* Example: (matrix) -> (solution)
*/

/*
* Problem Name: Simplex Algorithm for Linear Programming
* Description: Implement the Simplex algorithm to solve linear programming problems.
* Input: A linear programming problem in standard form.
* Output: The optimal solution.
* Example: (LP problem) -> (optimal solution)
*/

/*
* Problem Name: Hungarian Algorithm for Assignment Problem
* Description: Implement the Hungarian algorithm to solve the assignment problem (finding a maximum weight matching in a bipartite graph).
* Input: A cost matrix for a bipartite graph.
* Output: The optimal assignment and its total cost.
* Example: (cost matrix) -> (assignment, cost)
*/

/*
* Problem Name: Gaussian Elimination for Solving Linear Equations
* Description: Implement Gaussian elimination to solve a system of linear equations.
* Input: A matrix of coefficients and a vector of constants.
* Output: The solution vector.
* Example: (matrix, vector) -> (solution)
*/

/*
* Problem Name: Pollard's Rho Algorithm for Integer Factorization
* Description: Implement Pollard's Rho algorithm to find a non-trivial factor of a composite number.
* Input: A composite number.
* Output: A non-trivial factor.
* Example: 10967535067 -> 104729
*/

/*
* Problem Name: Miller-Rabin Primality Test
* Description: Implement the Miller-Rabin primality test to determine if a given number is prime.
* Input: A number.
* Output: true or false.
* Example: 17 -> true, 21 -> false
*/

/*
* Problem Name: Chinese Remainder Theorem
* Description: Given a system of congruences, find a solution using the Chinese Remainder Theorem.
* Input: A set of congruences (divisors and remainders).
* Output: The solution.
* Example: x = 2 (mod 3), x = 3 (mod 5), x = 2 (mod 7) -> 23
*/

/*
* Problem Name: Extended Euclidean Algorithm
* Description: Implement the Extended Euclidean Algorithm to find the greatest common divisor of two integers and the coefficients of Bézout's identity.
* Input: Two integers.
* Output: The GCD and the coefficients.
* Example: 240, 46 -> 2, -9, 47
*/

/*
* Problem Name: Discrete Logarithm Problem (Baby-step giant-step)
* Description: Given a prime `p`, a generator `g` of the multiplicative group of integers modulo `p`, and an element `h` of this group, find an integer `x` such that `g^x = h (mod p)`. Implement the baby-step giant-step algorithm.
* Input: p, g, h.
* Output: x.
* Example: p=13, g=2, h=11 -> 7
*/

/*
* Problem Name: RSA Cryptosystem Implementation
* Description: Implement the RSA cryptosystem, including key generation, encryption, and decryption.
* Input: A message to encrypt and decrypt.
* Output: The encrypted and decrypted message.
* Example: (message) -> (encrypted, decrypted)
*/

/*
* Problem Name: Game of Life Simulation
* Description: Implement Conway's Game of Life, a cellular automaton. Given an initial configuration of a grid, simulate its evolution over a number of generations.
* Input: An initial grid and the number of generations.
* Output: The grid after the specified number of generations.
* Example: (initial grid, generations) -> (final grid)
*/

/*
* Problem Name: Boids Simulation
* Description: Implement a simulation of flocking behavior (boids) using Craig Reynolds's three simple rules: separation, alignment, and cohesion.
* Input: An initial set of boids with positions and velocities.
* Output: A simulation of the boids' movement.
* Example: (initial boids) -> (simulation)
*/

/*
* Problem Name: Voronoi Diagram Construction
* Description: Given a set of points in a plane, construct their Voronoi diagram.
* Input: An array of points.
* Output: The Voronoi diagram.
* Example: (points) -> (Voronoi diagram)
*/

/*
* Problem Name: Delaunay Triangulation
* Description: Given a set of points in a plane, construct their Delaunay triangulation.
* Input: An array of points.
* Output: The Delaunay triangulation.
* Example: (points) -> (Delaunay triangulation)
*/

/*
* Problem Name: Hilbert Curve Generation
* Description: Generate a Hilbert curve of a given order.
* Input: An integer representing the order of the Hilbert curve.
* Output: The sequence of points on the Hilbert curve.
* Example: order = 2 -> (sequence of points)
*/

/*
* Problem Name: Mandelbrot Set Visualization
* Description: Generate a visualization of the Mandelbrot set.
* Input: The dimensions of the output image and the region of the complex plane to visualize.
* Output: An image of the Mandelbrot set.
* Example: (dimensions, region) -> (image)
*/

/*
* Problem Name: Julia Set Visualization
* Description: Generate a visualization of a Julia set for a given complex number.
* Input: The dimensions of the output image, the region of the complex plane to visualize, and a complex number `c`.
* Output: An image of the Julia set.
* Example: (dimensions, region, c) -> (image)
*/

/*
* Problem Name: Ray Tracing a Simple Scene
* Description: Implement a basic ray tracer to render a simple scene with spheres and a light source.
* Input: A description of the scene (spheres, light source, camera).
* Output: A rendered image of the scene.
* Example: (scene description) -> (image)
*/

/*
* Problem Name: Perlin Noise Generation
* Description: Implement the Perlin noise algorithm to generate procedural textures.
* Input: The dimensions of the output texture.
* Output: A 2D array of Perlin noise values.
* Example: (dimensions) -> (noise array)
*/

/*
* Problem Name: Marching Cubes Algorithm
* Description: Implement the Marching Cubes algorithm to extract a polygonal mesh of an isosurface from a 3D scalar field.
* Input: A 3D scalar field.
* Output: A polygonal mesh.
* Example: (scalar field) -> (mesh)
*/

/*
* Problem Name: Quadtree/Octree Implementation
* Description: Implement a quadtree (2D) or octree (3D) data structure for spatial partitioning.
* Input: A set of points.
* Output: A quadtree or octree containing the points.
* Example: (points) -> (quadtree/octree)
*/

/*
* Problem Name: BSP Tree for 3D Rendering
* Description: Implement a Binary Space Partitioning (BSP) tree to render a 3D scene with correct visibility.
* Input: A set of polygons in 3D space.
* Output: A BSP tree.
* Example: (polygons) -> (BSP tree)
*/

/*
* Problem Name: A* Search Algorithm
* Description: Implement the A* search algorithm to find the shortest path between two nodes in a graph, using a heuristic function.
* Input: A graph, a source node, a destination node, and a heuristic function.
* Output: The shortest path.
* Example: (graph, source, dest, heuristic) -> (path)
*/

/*
* Problem Name: Minimax Algorithm with Alpha-Beta Pruning
* Description: Implement the minimax algorithm with alpha-beta pruning to determine the optimal move in a two-player game like Tic-Tac-Toe or Chess.
* Input: The current state of the game.
* Output: The optimal move.
* Example: (game state) -> (optimal move)
*/

/*
* Problem Name: Monte Carlo Tree Search (MCTS)
* Description: Implement the Monte Carlo Tree Search algorithm, often used in game playing AI (e.g., for Go).
* Input: The current state of the game.
* Output: The best move.
* Example: (game state) -> (best move)
*/

/*
* Problem Name: Genetic Algorithm for Optimization
* Description: Implement a genetic algorithm to solve an optimization problem, such as the Traveling Salesman Problem.
* Input: An optimization problem definition (e.g., TSP instance).
* Output: An approximate solution to the problem.
* Example: (TSP instance) -> (approximate shortest tour)
*/

/*
* Problem Name: Simulated Annealing for Optimization
* Description: Implement simulated annealing to solve an optimization problem.
* Input: An optimization problem definition.
* Output: An approximate solution.
* Example: (optimization problem) -> (approximate solution)
*/

/*
* Problem Name: Ant Colony Optimization for TSP
* Description: Implement the Ant Colony Optimization algorithm to find an approximate solution to the Traveling Salesman Problem.
* Input: A TSP instance.
* Output: An approximate shortest tour.
* Example: (TSP instance) -> (approximate tour)
*/

/*
* Problem Name: Particle Swarm Optimization
* Description: Implement Particle Swarm Optimization to find the minimum of a given function.
* Input: A function to minimize.
* Output: The minimum value and the point where it occurs.
* Example: (function) -> (min value, point)
*/

/*
* Problem Name: Decision Tree Learning (ID3 or C4.5)
* Description: Implement a decision tree learning algorithm (like ID3 or C4.5) to classify data.
* Input: A training dataset.
* Output: A decision tree.
* Example: (dataset) -> (decision tree)
*/

/*
* Problem Name: K-Means Clustering
* Description: Implement the k-means clustering algorithm to partition a set of data points into k clusters.
* Input: A set of data points and the number of clusters k.
* Output: The k clusters.
* Example: (data points, k) -> (clusters)
*/

/*
* Problem Name: DBSCAN Clustering
* Description: Implement the DBSCAN (Density-Based Spatial Clustering of Applications with Noise) algorithm to find clusters of arbitrary shape.
* Input: A set of data points, a radius `eps`, and a minimum number of points `minPts`.
* Output: The clusters.
* Example: (data points, eps, minPts) -> (clusters)
*/

/*
* Problem Name: Naive Bayes Classifier
* Description: Implement a Naive Bayes classifier for text classification (e.g., spam detection).
* Input: A training set of labeled documents.
* Output: A trained classifier.
* Example: (labeled documents) -> (classifier)
*/

/*
* Problem Name: Support Vector Machine (SVM) from Scratch
* Description: Implement a basic Support Vector Machine for binary classification.
* Input: A training set of labeled data points.
* Output: A trained SVM model.
* Example: (labeled data) -> (SVM model)
*/

/*
* Problem Name: Neural Network from Scratch (Backpropagation)
* Description: Implement a simple feedforward neural network with backpropagation for a classification task (e.g., MNIST digit recognition).
* Input: A training dataset.
* Output: A trained neural network.
* Example: (dataset) -> (trained network)
*/

/*
* Problem Name: Hopfield Network for Pattern Recognition
* Description: Implement a Hopfield network to store and retrieve patterns.
* Input: A set of patterns to store.
* Output: A trained Hopfield network.
* Example: (patterns) -> (trained network)
*/

/*
* Problem Name: Self-Organizing Map (Kohonen Map)
* Description: Implement a self-organizing map to produce a low-dimensional, discretized representation of the input space of the training samples.
* Input: A training dataset.
* Output: A trained self-organizing map.
* Example: (dataset) -> (trained map)
*/

/*
* Problem Name: Hidden Markov Model (Viterbi Algorithm)
* Description: Implement the Viterbi algorithm to find the most likely sequence of hidden states that results in a sequence of observed events.
* Input: A Hidden Markov Model and a sequence of observed events.
* Output: The most likely sequence of hidden states.
* Example: (HMM, observations) -> (hidden states)
*/

/*
* Problem Name: Kalman Filter for State Estimation
* Description: Implement a Kalman filter to estimate the state of a linear dynamic system from a series of noisy measurements.
* Input: A model of the system and a sequence of measurements.
* Output: The estimated state of the system.
* Example: (system model, measurements) -> (estimated state)
*/

/*
* Problem Name: Lempel-Ziv-Welch (LZW) Compression
* Description: Implement the LZW compression algorithm to compress and decompress data.
* Input: A string of data.
* Output: The compressed and then decompressed data.
* Example: "TOBEORNOTTOBEORTOBEORNOT" -> (compressed, decompressed)
*/

/*
* Problem Name: Huffman Coding
* Description: Implement Huffman coding for lossless data compression.
* Input: A string of data.
* Output: The Huffman codes for each character and the compressed data.
* Example: "this is an example of a huffman tree" -> (codes, compressed data)
*/

/*
* Problem Name: Arithmetic Coding
* Description: Implement arithmetic coding for lossless data compression.
* Input: A string of data and the probabilities of each character.
* Output: The compressed data.
* Example: (data, probabilities) -> (compressed data)
*/

/*
* Problem Name: Burrows-Wheeler Transform (BWT)
* Description: Implement the Burrows-Wheeler Transform, a reversible permutation of a string used in data compression.
* Input: A string.
* Output: The transformed string.
* Example: "banana" -> "annbnaa"
*/

/*
* Problem Name: Move-to-Front Transform
* Description: Implement the Move-to-Front transform, often used with BWT for data compression.
* Input: A string and an alphabet.
* Output: The transformed string.
* Example: "banana", alphabet = "abc..." -> (transformed string)
*/

/*
* Problem Name: Run-Length Encoding (RLE)
* Description: Implement Run-Length Encoding for simple data compression.
* Input: A string.
* Output: The compressed string.
* Example: "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB" -> "12W1B12W3B24W1B"
*/

/*
* Problem Name: Bloom Filter
* Description: Implement a Bloom filter, a space-efficient probabilistic data structure for testing whether an element is a member of a set.
* Input: A set of elements to add to the filter.
* Output: A Bloom filter.
* Example: (elements) -> (Bloom filter)
*/

/*
* Problem Name: Count-Min Sketch
* Description: Implement a Count-Min sketch, a probabilistic data structure for summarizing data streams and estimating frequencies of elements.
* Input: A stream of data.
* Output: A Count-Min sketch.
* Example: (data stream) -> (Count-Min sketch)
*/

/*
* Problem Name: HyperLogLog for Cardinality Estimation
* Description: Implement the HyperLogLog algorithm to estimate the number of distinct elements in a large dataset.
* Input: A stream of data.
* Output: An estimate of the number of distinct elements.
* Example: (data stream) -> (cardinality estimate)
*/

/*
* Problem Name: Treap Data Structure
* Description: Implement a treap, a randomized binary search tree that maintains dynamic sets of ordered keys and allows binary searches and insertions/deletions in O(log n) expected time.
* Input: A sequence of treap operations.
* Output: The results of the query operations.
* Example: (operations) -> (query results)
*/

/*
* Problem Name: Splay Tree
* Description: Implement a splay tree, a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again.
* Input: A sequence of splay tree operations.
* Output: The results of the query operations.
* Example: (operations) -> (query results)
*/

/*
* Problem Name: Fibonacci Heap
* Description: Implement a Fibonacci heap, a data structure for priority queue operations, consisting of a collection of trees.
* Input: A sequence of Fibonacci heap operations.
* Output: The results of the extract-min operations.
* Example: (operations) -> (min elements)
*/

/*
* Problem Name: Van Emde Boas Tree
* Description: Implement a Van Emde Boas tree, a data structure that supports priority queue operations in O(log log N) time.
* Input: A sequence of vEB tree operations.
* Output: The results of the query operations.
* Example: (operations) -> (query results)
*/

/*
* Problem Name: Disjoint Set Union (DSU) with Path Compression and Union by Rank/Size
* Description: Implement the Disjoint Set Union data structure with path compression and union by rank/size optimizations.
* Input: A sequence of DSU operations.
* Output: The results of the find operations.
* Example: (operations) -> (find results)
*/

/*
* Problem Name: Fenwick Tree (Binary Indexed Tree)
* Description: Implement a Fenwick tree to efficiently calculate prefix sums of an array.
* Input: An array and a sequence of update and query operations.
* Output: The results of the query operations.
* Example: (array, operations) -> (query results)
*/

/*
* Problem Name: Segment Tree with Lazy Propagation
* Description: Implement a segment tree with lazy propagation to support range updates and range queries in O(log n) time.
* Input: An array and a sequence of range update and range query operations.
* Output: The results of the range query operations.
* Example: (array, operations) -> (query results)
*/

/*
* Problem Name: K-d Tree for Nearest Neighbor Search
* Description: Implement a k-d tree to efficiently perform nearest neighbor searches in a k-dimensional space.
* Input: A set of k-dimensional points and a query point.
* Output: The nearest neighbor to the query point.
* Example: (points, query point) -> (nearest neighbor)
*/

/*
* Problem Name: Interval Tree
* Description: Implement an interval tree to efficiently find all intervals that overlap with a given interval or point.
* Input: A set of intervals and a query interval.
* Output: The set of overlapping intervals.
* Example: (intervals, query interval) -> (overlapping intervals)
*/

/*
* Problem Name: Rope (Data Structure)
* Description: Implement a rope data structure for efficient string manipulation, especially for very long strings.
* Input: A sequence of rope operations (e.g., concatenation, splitting, substring).
* Output: The results of the operations.
* Example: (operations) -> (results)
*/

/*
* Problem Name: Ternary Search Tree
* Description: Implement a ternary search tree for storing and searching for strings.
* Input: A set of strings to insert and search for.
* Output: The results of the search operations.
* Example: (strings) -> (search results)
*/

/*
* Problem Name: Radix Tree (Patricia Tree)
* Description: Implement a radix tree to store a set of strings in a space-efficient way.
* Input: A set of strings to insert.
* Output: A radix tree.
* Example: (strings) -> (radix tree)
*/

/*
* Problem Name: Suffix Automaton
* Description: Implement a suffix automaton, a minimal deterministic finite automaton that accepts all suffixes of a given string.
* Input: A string.
* Output: A suffix automaton.
* Example: "abacaba" -> (suffix automaton)
*/

/*
* Problem Name: Palindromic Automaton
* Description: Implement a palindromic automaton (eertree) to find all palindromic substrings of a string.
* Input: A string.
* Output: The number of distinct palindromic substrings.
* Example: "abacaba" -> 7
*/

/*
* Problem Name: Stoer-Wagner Algorithm for Global Minimum Cut
* Description: Implement the Stoer-Wagner algorithm to find the global minimum cut of an undirected graph.
* Input: A weighted adjacency matrix of an undirected graph.
* Output: The minimum cut and its weight.
* Example: (graph) -> (min cut, weight)
*/

/*
* Problem Name: Edmonds-Karp Algorithm for Maximum Flow
* Description: Implement the Edmonds-Karp algorithm, a specialization of Ford-Fulkerson, to find the maximum flow in a network.
* Input: A capacity matrix representing a flow network.
* Output: The maximum flow value.
* Example: (flow network) -> (max flow value)
*/

/*
* Problem Name: Dinic's Algorithm for Maximum Flow
* Description: Implement Dinic's algorithm, a more efficient algorithm for finding the maximum flow in a network.
* Input: A capacity matrix representing a flow network.
* Output: The maximum flow value.
* Example: (flow network) -> (max flow value)
*/

/*
* Problem Name: Push-relabel Algorithm for Maximum Flow
* Description: Implement a push-relabel algorithm for finding the maximum flow in a network.
* Input: A capacity matrix representing a flow network.
* Output: The maximum flow value.
* Example: (flow network) -> (max flow value)
*/

/*
* Problem Name: Hopcroft-Karp Algorithm for Maximum Bipartite Matching
* Description: Implement the Hopcroft-Karp algorithm to find the maximum cardinality matching in a bipartite graph in O(E * sqrt(V)) time.
* Input: An adjacency list or matrix representing a bipartite graph.
* Output: The maximum matching.
* Example: (bipartite graph) -> (max matching)
*/

/*
* Problem Name: Gabow's Algorithm for Maximum Matching in General Graphs
* Description: Implement Gabow's algorithm (or a similar algorithm like Micali-Vazirani) to find the maximum matching in a general (non-bipartite) graph.
* Input: An adjacency list or matrix representing a general graph.
* Output: The maximum matching.
* Example: (general graph) -> (max matching)
*/

/*
* Problem Name: Edmonds' Blossom Algorithm for Maximum Matching
* Description: Implement Edmonds' blossom algorithm to find a maximum matching in a general graph.
* Input: An adjacency list or matrix representing a general graph.
* Output: The maximum matching.
* Example: (general graph) -> (max matching)
*/

/*
* Problem Name: Chu-Liu/Edmonds' Algorithm for Minimum Spanning Arborescence
* Description: Implement the Chu-Liu/Edmonds' algorithm to find a minimum spanning arborescence (a directed spanning tree with minimum weight) in a directed graph.
* Input: A weighted adjacency list of a directed graph and a root vertex.
* Output: The minimum spanning arborescence and its weight.
* Example: (directed graph, root) -> (arborescence, weight)
*/

/*
* Problem Name: Johnson's Algorithm for All-Pairs Shortest Paths
* Description: Implement Johnson's algorithm to find all-pairs shortest paths in a sparse, weighted, directed graph.
* Input: A weighted adjacency list of a directed graph.
* Output: A distance matrix of all-pairs shortest paths.
* Example: (directed graph) -> (distance matrix)
*/

/*
* Problem Name: Bellman-Ford Algorithm for Single-Source Shortest Paths (with negative weights)
* Description: Implement the Bellman-Ford algorithm to find the shortest paths from a single source vertex to all other vertices in a weighted digraph, allowing for negative edge weights.
* Input: A weighted adjacency list of a directed graph and a source vertex.
* Output: An array of shortest path distances from the source.
* Example: (directed graph, source) -> (distances)
*/

/*
* Problem Name: SPFA (Shortest Path Faster Algorithm)
* Description: Implement the SPFA algorithm, an improvement of the Bellman-Ford algorithm, for finding single-source shortest paths in a weighted directed graph.
* Input: A weighted adjacency list of a directed graph and a source vertex.
* Output: An array of shortest path distances from the source.
* Example: (directed graph, source) -> (distances)
*/

/*
* Problem Name: Floyd-Warshall Algorithm for All-Pairs Shortest Paths
* Description: Implement the Floyd-Warshall algorithm to find all-pairs shortest paths in a weighted, directed graph.
* Input: A weighted adjacency matrix of a directed graph.
* Output: A distance matrix of all-pairs shortest paths.
* Example: (directed graph) -> (distance matrix)
*/

/*
* Problem Name: Tarjan's Algorithm for Strongly Connected Components (SCCs)
* Description: Implement Tarjan's algorithm to find the strongly connected components of a directed graph.
* Input: An adjacency list of a directed graph.
* Output: A list of strongly connected components.
* Example: (directed graph) -> (SCCs)
*/

/*
* Problem Name: Kosaraju's Algorithm for Strongly Connected Components (SCCs)
* Description: Implement Kosaraju's algorithm to find the strongly connected components of a directed graph.
* Input: An adjacency list of a directed graph.
* Output: A list of strongly connected components.
* Example: (directed graph) -> (SCCs)
*/

/*
* Problem Name: Bridge Finding in a Graph
* Description: Implement an algorithm to find all bridges in a connected, undirected graph. A bridge is an edge whose removal increases the number of connected components.
* Input: An adjacency list of an undirected graph.
* Output: A list of all bridges.
* Example: (undirected graph) -> (bridges)
*/

/*
* Problem Name: Articulation Point Finding in a Graph
* Description: Implement an algorithm to find all articulation points (or cut vertices) in a connected, undirected graph. An articulation point is a vertex whose removal increases the number of connected components.
* Input: An adjacency list of an undirected graph.
* Output: A list of all articulation points.
* Example: (undirected graph) -> (articulation points)
*/

/*
* Problem Name: Euler Tour/Path
* Description: Given a graph, find an Euler tour (a trail that visits every edge exactly once and ends at the starting vertex) or an Euler path (a trail that visits every edge exactly once).
* Input: An adjacency list of a graph.
* Output: The Euler tour/path or an indication that one does not exist.
* Example: (graph) -> (Euler tour/path)
*/

/*
* Problem Name: Planarity Testing
* Description: Implement an algorithm to test if a given graph is planar (can be drawn in a plane without any edges crossing).
* Input: An adjacency list of a graph.
* Output: true or false.
* Example: (graph) -> (true/false)
*/

/*
* Problem Name: Schönhage-Strassen Algorithm for Integer Multiplication
* Description: Implement the Schönhage-Strassen algorithm for multiplying large integers in O(n log n log log n) time.
* Input: Two large integers as strings.
* Output: Their product as a string.
* Example: (large integer 1, large integer 2) -> (product)
*/

/*
* Problem Name: Coppersmith-Winograd Algorithm for Matrix Multiplication
* Description: (Theoretical) Describe the Coppersmith-Winograd algorithm for matrix multiplication, which has a time complexity of O(n^2.375).
* Input: N/A (theoretical problem)
* Output: A description of the algorithm.
* Example: N/A
*/

/*
* Problem Name: AKS Primality Test
* Description: (Theoretical) Describe the AKS primality test, the first deterministic, polynomial-time algorithm for primality testing.
* Input: N/A (theoretical problem)
* Output: A description of the algorithm.
* Example: N/A
*/

/*
* Problem Name: Shor's Algorithm for Integer Factorization (Quantum)
* Description: (Theoretical) Describe Shor's algorithm for integer factorization, a quantum algorithm that can factor integers in polynomial time.
* Input: N/A (theoretical problem)
* Output: A description of the algorithm.
* Example: N/A
*/

/*
* Problem Name: Grover's Algorithm for Unstructured Search (Quantum)
* Description: (Theoretical) Describe Grover's algorithm for unstructured search, a quantum algorithm that can find a specific item in an unsorted database in O(sqrt(N)) time.
* Input: N/A (theoretical problem)
* Output: A description of the algorithm.
* Example: N/A
*/

/*
* Problem Name: Simulating a Turing Machine
* Description: Implement a universal Turing machine simulator that can execute any given Turing machine program.
* Input: A description of a Turing machine and an input tape.
* Output: The final state of the tape.
* Example: (Turing machine, input tape) -> (output tape)
*/

/*
* Problem Name: Lambda Calculus Interpreter
* Description: Implement an interpreter for the untyped lambda calculus.
* Input: A lambda calculus expression.
* Output: The reduced form of the expression.
* Example: (lambda expression) -> (reduced form)
*/

/*
* Problem Name: Brainfuck Interpreter
* Description: Implement an interpreter for the esoteric programming language Brainfuck.
* Input: A Brainfuck program and its input.
* Output: The output of the program.
* Example: (Brainfuck program, input) -> (output)
*/

/*
* Problem Name: Malbolge Interpreter
* Description: (Extremely difficult) Implement an interpreter for the esoteric programming language Malbolge, known for being almost impossible to program in.
* Input: A Malbolge program.
* Output: The output of the program.
* Example: (Malbolge program) -> (output)
*/

/*
* Problem Name: Busy Beaver Problem
* Description: (Uncomputable) Find the Busy Beaver number for a given number of states `n`. The Busy Beaver number is the maximum number of 1s that a terminating `n`-state Turing machine can write on an initially blank tape.
* Input: An integer `n`.
* Output: The Busy Beaver number for `n` (or an attempt to find it for small `n`).
* Example: n=2 -> 4, n=3 -> 6, n=4 -> 13
*/

/*
* Problem Name: Halting Problem
* Description: (Uncomputable) Write a program that solves the halting problem: given a description of a program and its input, determine whether the program will finish running or continue to run forever.
* Input: A program and its input.
* Output: true (halts) or false (does not halt).
* Example: (program, input) -> (true/false)
*/

/*
* Problem Name: Post's Correspondence Problem
* Description: (Undecidable) Given a set of pairs of strings, determine if there exists a sequence of these pairs such that the concatenation of the first strings in the sequence equals the concatenation of the second strings.
* Input: A set of pairs of strings.
* Output: true or false.
* Example: (pairs) -> (true/false)
*/

/*
* Problem Name: Wang's Tiling Problem
* Description: (Undecidable) Given a set of Wang tiles (squares with colored edges), determine if they can tile the plane such that adjacent edges have the same color.
* Input: A set of Wang tiles.
* Output: true or false.
* Example: (tiles) -> (true/false)
*/

/*
* Problem Name: Diophantine Equation Solver
* Description: (Undecidable in general) Write a program to find integer solutions to a given Diophantine equation (a polynomial equation with integer coefficients).
* Input: A Diophantine equation.
* Output: Integer solutions or an indication that none exist.
* Example: x^2 + y^2 = z^2 -> (Pythagorean triples)
*/

/*
* Problem Name: Collatz Conjecture
* Description: (Unproven) Verify the Collatz conjecture for a given range of numbers. The conjecture states that for any positive integer `n`, the sequence defined by `n -> n/2` (if `n` is even) or `n -> 3n+1` (if `n` is odd) will eventually reach 1.
* Input: A range of numbers.
* Output: A verification that the conjecture holds for the given range.
* Example: (range) -> (verification)
*/

/*
* Problem Name: Goldbach's Conjecture
* Description: (Unproven) Verify Goldbach's conjecture for a given range of even numbers. The conjecture states that every even integer greater than 2 is the sum of two prime numbers.
* Input: A range of even numbers.
* Output: A verification that the conjecture holds for the given range.
* Example: (range) -> (verification)
*/

/*
* Problem Name: Riemann Hypothesis
* Description: (Unproven) Write a program to search for counterexamples to the Riemann Hypothesis by finding non-trivial zeros of the Riemann zeta function that do not lie on the critical line.
* Input: A range to search for zeros.
* Output: Any non-trivial zeros found off the critical line.
* Example: (search range) -> (counterexamples)
*/

/*
* Problem Name: P vs NP Problem
* Description: (Unproven) Write a program that proves or disproves that P = NP.
* Input: N/A
* Output: A proof or disproof.
* Example: N/A
*/

/*
* Problem Name: Sphere Packing in High Dimensions
* Description: Find the densest packing of equal spheres in a high-dimensional space (e.g., 8 or 24 dimensions, where the answer is known).
* Input: The dimension of the space.
* Output: The density of the optimal packing.
* Example: dimension = 8 -> (density of E8 lattice packing)
*/

/*
* Problem Name: Kepler Conjecture
* Description: (Proven by computer-assisted proof) Write a program to verify the Kepler conjecture, which states that the densest packing of equal spheres in three-dimensional space is the face-centered cubic packing.
* Input: N/A
* Output: A verification of the conjecture.
* Example: N/A
*/

/*
* Problem Name: Four Color Theorem
* Description: (Proven by computer-assisted proof) Write a program to prove the Four Color Theorem, which states that any map can be colored with at most four colors such that no two adjacent regions have the same color.
* Input: N/A
* Output: A proof of the theorem.
* Example: N/A
*/

/*
* Problem Name: Optimal Strategy for Rock-Paper-Scissors-Lizard-Spock
* Description: Develop an AI that can learn and adapt to an opponent's strategy in the game of Rock-Paper-Scissors-Lizard-Spock to achieve a win rate significantly above chance.
* Input: A history of an opponent's moves.
* Output: The next move to play.
* Example: (opponent's moves) -> (next move)
*/

/*
* Problem Name: Solving Go on a 19x19 Board
* Description: (Extremely complex) Create an AI that can solve the game of Go on a 19x19 board, meaning it can play perfectly from any position.
* Input: A Go board state.
* Output: The optimal move.
* Example: (board state) -> (optimal move)
*/

/*
* Problem Name: Protein Folding Problem
* Description: Given an amino acid sequence, predict the 3D structure of the protein. This is a major unsolved problem in biology.
* Input: An amino acid sequence.
* Output: The 3D coordinates of the atoms in the protein.
* Example: (sequence) -> (3D structure)
*/

/*
* Problem Name: Fluid Dynamics Simulation (Navier-Stokes Equations)
* Description: Implement a solver for the Navier-Stokes equations to simulate the flow of a fluid.
* Input: The initial conditions of the fluid (e.g., velocity, pressure).
* Output: The evolution of the fluid over time.
* Example: (initial conditions) -> (simulation)
*/

/*
* Problem Name: General Relativity Simulation
* Description: Implement a simulation of a physical system according to the principles of general relativity, such as the merger of two black holes.
* Input: The initial conditions of the system.
* Output: The evolution of the system over time.
* Example: (initial conditions) -> (simulation)
*/

/*
* Problem Name: Quantum Computing Simulator
* Description: Implement a simulator for a quantum computer that can handle a significant number of qubits and a variety of quantum gates.
* Input: A quantum circuit description.
* Output: The final state of the quantum computer.
* Example: (quantum circuit) -> (final state)
*/

/*
* Problem Name: Artificial General Intelligence (AGI)
* Description: Create an Artificial General Intelligence that can perform any intellectual task that a human being can.
* Input: Any task.
* Output: The solution to the task.
* Example: (any task) -> (solution)
*/


/*
* Problem Name: Solving the 3x+1 Problem
* Description: Prove or disprove the Collatz conjecture. The conjecture states that for any positive integer n, the sequence eventually reaches 1.
* Input: None (theoretical problem).
* Output: A proof or a counterexample.
* Example: N/A
*/

/*
* Problem Name: Finding the Ramsey Number R(5,5)
* Description: Determine the Ramsey number R(5,5), which is the smallest number of vertices in a complete graph such that any two-coloring of its edges will result in a monochromatic clique of size 5.
* Input: None (mathematical problem).
* Output: The value of R(5,5).
* Example: N/A
*/

/*
* Problem Name: The Moving Sofa Problem
* Description: Find the shape of the largest two-dimensional region that can be maneuvered through a right-angled corner in a hallway of unit width.
* Input: None (geometric problem).
* Output: The shape and area of the optimal sofa.
* Example: N/A
*/

/*
* Problem Name: The Happy Ending Problem
* Description: Prove that for any integer n >= 3, there exists a smallest integer f(n) such that any set of f(n) points in general position in the plane contains a subset of n points that form a convex n-gon.
* Input: None (combinatorial geometry problem).
* Output: A proof of the theorem.
* Example: N/A
*/

/*
* Problem Name: The Inscribed Square Problem
* Description: Prove or disprove that every simple closed curve in the plane contains four points that form the vertices of a square.
* Input: None (geometry problem).
* Output: A proof or a counterexample.
* Example: N/A
*/

/*
* Problem Name: The Angel Problem
* Description: Determine if there is a winning strategy for the angel in the angel-devil game. The angel has a power k, and can move to any unoccupied square within a distance of k. The devil can eat any single square on an infinite chessboard. The angel wins if it can survive indefinitely.
* Input: The power of the angel, k.
* Output: A winning strategy for the angel or a proof that none exists.
* Example: N/A
*/

/*
* Problem Name: The Chromatic Number of the Plane
* Description: Find the chromatic number of the plane, which is the minimum number of colors needed to color the plane such that no two points at a distance of 1 from each other have the same color.
* Input: None (geometric graph theory problem).
* Output: The chromatic number of the plane.
* Example: N/A
*/

/*
* Problem Name: The Lonely Runner Conjecture
* Description: Prove or disprove the lonely runner conjecture. The conjecture states that if k runners are on a circular track of length 1, all starting at the same point and running at different constant speeds, then for each runner, there is a time at which that runner is at least a distance of 1/k from all other runners.
* Input: None (number theory problem).
* Output: A proof or a counterexample.
* Example: N/A
*/

/*
* Problem Name: The Kissing Number Problem
* Description: Find the maximum number of non-overlapping unit spheres that can touch a central unit sphere in n-dimensional space.
* Input: The dimension n.
* Output: The kissing number for that dimension.
* Example: n=3 -> 12, n=4 -> 24, n=8 -> 240, n=24 -> 196560
*/

/*
* Problem Name: The Sphere Eversion Problem
* Description: Create a visualization of a sphere eversion, which is the process of turning a sphere inside out in 3D space without cutting or tearing it.
* Input: None (topology problem).
* Output: A visualization of the eversion process.
* Example: N/A
*/

/*
* Problem Name: The Double Bubble Conjecture
* Description: (Proven) Write a program to verify the double bubble conjecture, which states that the shape that encloses and separates two given volumes with the minimum possible surface area is a standard double bubble.
* Input: N/A
* Output: A verification of the conjecture.
* Example: N/A
*/

/*
* Problem Name: The Poincaré Conjecture
* Description: (Proven) Write a program to verify the Poincaré conjecture, which states that every simply connected, closed 3-manifold is homeomorphic to the 3-sphere.
* Input: N/A
* Output: A verification of the conjecture.
* Example: N/A
*/

/*
* Problem Name: The Birch and Swinnerton-Dyer Conjecture
* Description: (Unproven, Millennium Prize Problem) Write a program to test the Birch and Swinnerton-Dyer conjecture, which relates the rank of an elliptic curve to the behavior of its Hasse-Weil L-function at s=1.
* Input: An elliptic curve.
* Output: A verification of the conjecture for the given curve.
* Example: N/A
*/

/*
* Problem Name: The Hodge Conjecture
* Description: (Unproven, Millennium Prize Problem) Write a program to test the Hodge conjecture, which relates the algebraic topology of a non-singular complex algebraic variety to its subvarieties.
* Input: A complex algebraic variety.
* Output: A verification of the conjecture for the given variety.
* Example: N/A
*/

/*
* Problem Name: The Navier-Stokes Existence and Smoothness Problem
* Description: (Unproven, Millennium Prize Problem) Write a program to prove or disprove the existence and smoothness of solutions to the Navier-Stokes equations.
* Input: N/A
* Output: A proof or a counterexample.
* Example: N/A
*/

/*
* Problem Name: The Yang-Mills Existence and Mass Gap Problem
* Description: (Unproven, Millennium Prize Problem) Write a program to prove the existence of a quantum Yang-Mills theory and a mass gap.
* Input: N/A
* Output: A proof.
* Example: N/A
*/

/*
* Problem Name: The Quantum Gravity Problem
* Description: Develop a consistent theory of quantum gravity that unifies general relativity and quantum mechanics.
* Input: N/A
* Output: A complete theory of quantum gravity.
* Example: N/A
*/

/*
* Problem Name: The Dark Matter Problem
* Description: Identify the nature of dark matter, the mysterious substance that makes up most of the matter in the universe.
* Input: Cosmological data.
* Output: The identity of dark matter.
* Example: N/A
*/

/*
* Problem Name: The Dark Energy Problem
* Description: Identify the nature of dark energy, the mysterious force that is causing the expansion of the universe to accelerate.
* Input: Cosmological data.
* Output: The identity of dark energy.
* Example: N/A
*/

/*
* Problem Name: The Baryon Asymmetry Problem
* Description: Explain why there is more matter than antimatter in the universe.
* Input: N/A
* Output: A complete explanation of baryon asymmetry.
* Example: N/A
*/

/*
* Problem Name: The Hierarchy Problem
* Description: Explain why the weak force is so much stronger than gravity.
* Input: N/A
* Output: A solution to the hierarchy problem.
* Example: N/A
*/

/*
* Problem Name: The Cosmological Constant Problem
* Description: Explain why the vacuum energy of the universe is so small.
* Input: N/A
* Output: A solution to the cosmological constant problem.
* Example: N/A
*/

/*
* Problem Name: The Black Hole Information Paradox
* Description: Resolve the black hole information paradox, which arises from the conflict between general relativity and quantum mechanics regarding the fate of information that falls into a black hole.
* Input: N/A
* Output: A resolution to the paradox.
* Example: N/A
*/

/*
* Problem Name: The Measurement Problem in Quantum Mechanics
* Description: Resolve the measurement problem in quantum mechanics, which concerns the question of how and why wave function collapse occurs.
* Input: N/A
* Output: A solution to the measurement problem.
* Example: N/A
*/

/*
* Problem Name: The Arrow of Time Problem
* Description: Explain why time has a direction, and why the past is different from the future.
* Input: N/A
* Output: An explanation for the arrow of time.
* Example: N/A
*/

/*
* Problem Name: The Simulation Hypothesis
* Description: Determine whether the universe is a simulation.
* Input: N/A
* Output: true or false.
* Example: N/A
*/

/*
* Problem Name: The Fermi Paradox
* Description: Explain why we have not found any evidence of extraterrestrial life, despite the high probability that it exists.
* Input: N/A
* Output: A solution to the Fermi paradox.
* Example: N/A
*/

/*
* Problem Name: The Great Filter
* Description: Identify the Great Filter, the hypothetical barrier that prevents the emergence of intelligent life.
* Input: N/A
* Output: The nature of the Great Filter.
* Example: N/A
*/

/*
* Problem Name: The Kardashev Scale
* Description: Develop a framework for classifying civilizations based on their energy consumption, and determine our own civilization's place on the scale.
* Input: N/A
* Output: A framework for the Kardashev scale and our civilization's rating.
* Example: N/A
*/

/*
* Problem Name: The Dyson Sphere
* Description: Design a Dyson sphere, a hypothetical megastructure that would encompass a star and capture a large percentage of its power output.
* Input: The properties of a star.
* Output: A design for a Dyson sphere.
* Example: N/A
*/

/*
* Problem Name: The Alcubierre Drive
* Description: Design an Alcubierre drive, a speculative warp drive that would allow for faster-than-light travel by warping spacetime.
* Input: N/A
* Output: A design for an Alcubierre drive.
* Example: N/A
*/

/*
* Problem Name: The Von Neumann Probe
* Description: Design a self-replicating spacecraft (a Von Neumann probe) that could explore the galaxy.
* Input: N/A
* Output: A design for a Von Neumann probe.
* Example: N/A
*/

/*
* Problem Name: The Matrioshka Brain
* Description: Design a Matrioshka brain, a hypothetical megastructure of immense computational capacity powered by a star.
* Input: N/A
* Output: A design for a Matrioshka brain.
* Example: N/A
*/

/*
* Problem Name: The Computronium Problem
* Description: Determine the theoretical limits of computation and design a material (computronium) that could achieve them.
* Input: N/A
* Output: The properties of computronium.
* Example: N/A
*/

/*
* Problem Name: The Omega Point
* Description: (Theological/philosophical) Describe the Omega Point, a hypothetical future state of the universe in which consciousness becomes all-powerful.
* Input: N/A
* Output: A description of the Omega Point.
* Example: N/A
*/

/*
* Problem Name: The Simulation Argument
* Description: (Philosophical) Evaluate the simulation argument, which claims that it is likely that we are living in a computer simulation.
* Input: N/A
* Output: An evaluation of the simulation argument.
* Example: N/A
*/

/*
* Problem Name: The Doomsday Argument
* Description: (Philosophical) Evaluate the doomsday argument, which claims to predict the future lifetime of the human race based on the number of humans that have been born so far.
* Input: N/A
* Output: An evaluation of the doomsday argument.
* Example: N/A
*/

/*
* Problem Name: The Anthropic Principle
* Description: (Philosophical) Evaluate the anthropic principle, which states that the universe must be compatible with the conscious and sapient life that observes it.
* Input: N/A
* Output: An evaluation of the anthropic principle.
* Example: N/A
*/

/*
* Problem Name: The Problem of Consciousness
* Description: (Philosophical/neuroscientific) Explain the nature of consciousness and how it arises from the brain.
* Input: N/A
* Output: A complete theory of consciousness.
* Example: N/A
*/

/*
* Problem Name: The Free Will Problem
* Description: (Philosophical) Determine whether free will exists, and if so, how it is compatible with the laws of physics.
* Input: N/A
* Output: A solution to the free will problem.
* Example: N/A
*/

/*
* Problem Name: The Meaning of Life
* Description: (Philosophical) Determine the meaning of life.
* Input: N/A
* Output: The meaning of life.
* Example: N/A
*/

/*
* Problem Name: The Nature of Time
* Description: (Philosophical/physical) Explain the fundamental nature of time.
* Input: N/A
* Output: A complete theory of time.
* Example: N/A
*/

/*
* Problem Name: The Nature of Space
* Description: (Philosophical/physical) Explain the fundamental nature of space.
* Input: N/A
* Output: A complete theory of space.
* Example: N/A
*/

/*
* Problem Name: The Nature of Reality
* Description: (Philosophical/physical) Explain the fundamental nature of reality.
* Input: N/A
* Output: A complete theory of reality.
* Example: N/A
*/

/*
* Problem Name: The Unreasonable Effectiveness of Mathematics in the Natural Sciences
* Description: (Philosophical) Explain why mathematics is so effective at describing the natural world.
* Input: N/A
* Output: An explanation for the unreasonable effectiveness of mathematics.
* Example: N/A
*/

/*
* Problem Name: The Limits of Human Knowledge
* Description: (Philosophical) Determine the limits of human knowledge.
* Input: N/A
* Output: A description of the limits of human knowledge.
* Example: N/A
*/

/*
* Problem Name: The Future of Humanity
* Description: Predict the long-term future of humanity.
* Input: N/A
* Output: A prediction of the future of humanity.
* Example: N/A
*/

/*
* Problem Name: The End of the Universe
* Description: Predict the ultimate fate of the universe.
* Input: N/A
* Output: A prediction of the end of the universe.
* Example: N/A
*/

/*
* Problem Name: The Grand Unified Theory (GUT)
* Description: Develop a Grand Unified Theory that unifies the electromagnetic, weak, and strong nuclear forces.
* Input: N/A
* Output: A complete GUT.
* Example: N/A
*/

/*
* Problem Name: The Theory of Everything (TOE)
* Description: Develop a Theory of Everything that unifies all the fundamental forces of nature, including gravity.
* Input: N/A
* Output: A complete TOE.
* Example: N/A
*/


/*
* Problem Name: The Ultimate Question of Life, the Universe, and Everything
* Description: Find the ultimate question of life, the universe, and everything, to which the answer is 42.
* Input: The answer, 42.
* Output: The ultimate question.
* Example: N/A
*/

