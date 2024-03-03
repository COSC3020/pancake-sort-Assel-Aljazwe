[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

## Analysis:
Pancake Sort is an algorithm that sorts an array by repeatedly flipping subarrays. Its methodology involves using a 'spatula' (hypothetically) to flip parts of the stack until it is sorted, resembling the action of sorting a stack of pancakes. Here's how it works:

### Phases of Pancake Sort:
- **Finding the Maximum**: The first step in each iteration is to find the maximum element in the unsorted portion of the array. This step requires scanning through the unsorted part, thus making the number of comparisons linear with respect to the size of the unsorted portion of the array, $O(n)$.
- **First Flip**: If the largest element is not already at the beginning of the array, the algorithm performs a flip to move this element to the front. This operation doesn't depend on the distance of the maximum element from the start, it's a single flip operation.
- **Second Flip**: After finding the biggest pancake and flipping it to the top, the algorithm flips the top $n$ pancakes of the stack. With each flip, $n$ decreases because we sort one pancake and leave it out of the next flip. This means the big pancake that was moved to the top gets flipped again but with fewer pancakes above it, placing it in its correct spot, closer to the bottom. This process is repeated, adjusting $n$ each time, to sort each pancake, making the stack smaller and more sorted with every flip.

### Complexity Analysis in Terms of Comparisons:
During each iteration of the pancake sort algorithm, the algorithm scans the unsorted portion of the array to find the maximum element. The first pass requires $n-1$ comparisons, the second pass requires $n-2$, and so on, until the last pass, which requires $1$ comparison. Thus, the total number of comparisons is the sum of the first $n-1$ positive integers, which can be calculated using the formula $\frac{n(n-1)}{2}$. Therefore, the number of comparisons in pancake sort is $Θ(n^2)$.

### Complexity Analysis in Terms of Flips:
For each element in the array, up to two flips are performed: One to move the maximum element of the unsorted portion to the front, and then another to move it to its correct sorted position. Since there are $n$ elements, and each requires at most two flips, the total number of flips is at most $2n$. Therefore the number of flips in pancake sort is $Θ(n)$.

**Conclusion**:
The pancake sort algorithm is unique in its method of sorting, relying solely on the operation of flipping subarrays. In terms of comparisons, its complexity is quadratic, $Θ(n^2)$, because it must find the maximum element in each iteration. However, in terms of the number of flips, its complexity is linear, $Θ(n)$. 

