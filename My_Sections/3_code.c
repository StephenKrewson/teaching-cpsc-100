/**
 * Code and exercises for Section 3
 *
 * Stephen Krewson | M 2:30-4:00p | Watson B60
 *
 * AGENDA:
 *
 * Pset 2 Debrief
 * Where to find this code after section!
 * Valgrind and out-of-bounds errors in intials.c for strings ending in ' '
 * GDB, GDB as REPL
 * Random numbers
 * Binary Search, log n and n^2 growth
 * Complexity notation
 * Silly anecdote of bogosort
 * Sorts: Bubble, Selection, Insertion, Merge
 * (we covered insertion, bubble, and merge)
 *
 * Pset 3 Lookahead
 * Macros and pound defined constants
 */

#define _XOPEN_SOURCE

#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>
#include <math.h>
#include <time.h>

// A preprocessor constant (use uppercase!)
#define A_SIZE 8

// Prototypes for search functions
int* bogo(int* array);
int* bubble(int* array);
int* selection(int* array);
int insertion(int *array, int n);
int* merge(int* array);

// Remember call by reference vs. call by value
// Hardest part of search function is getting small things
// and helper functions correct. The algorithms are easy to grok
void swap(int* x, int* y);

int main(int argc, char* argv[])
{
    int sorted[A_SIZE];
    int backwards[A_SIZE];
    int wraparound[A_SIZE];
    int randomized[A_SIZE];

    // Set up random number seed (cf. generate.c)
    // Tip: study the distro code! (why??)
    srand48((long int) time(NULL));

    // EX: Students come up with these expressions
    for (int i = 0; i < A_SIZE; i++)
    {
        // These are just the inverse of each other
        sorted[i] = i + 1;
        backwards[i] = A_SIZE - i;

        // Shift everything over A_SIZE - 1 positions
        wraparound[i] = (i + A_SIZE - 1) % A_SIZE + 1;

        // Will give more or less random values in range 1..A_SIZE inclusive
        randomized[i] = ((int) (drand48() * A_SIZE)) + 1;
    }

    // Let's print to check
    printf("BEFORE sorting\n==============\n");
    for (int i = 0; i < A_SIZE; i++)
    {
        printf("%d\t%d\t%d\t%d\n", sorted[i], backwards[i], wraparound[i],
                randomized[i]);
    }

    // # of swaps and # of comparisons give us the complexity of a sort
    // # of swaps has more bearing on memory usage / resources
    printf("%d swaps for insertion(sorted)\n", insertion(sorted, A_SIZE));
    printf("%d swaps for insertion(backwards)\n", insertion(backwards, A_SIZE));
    printf("%d swaps for insertion(wraparound)\n", insertion(wraparound, A_SIZE));
    printf("%d swaps for insertion(random)\n", insertion(randomized, A_SIZE));

    // Let's print to check
    printf("AFTER sorting\n=============\n");
    for (int i = 0; i < A_SIZE; i++)
    {
        printf("%d\t%d\t%d\t%d\n", sorted[i], backwards[i], wraparound[i],
                randomized[i]);
    }
    
    return EXIT_SUCCESS;
}

/**
 * Write directly into the int array
 */
void swap(int* x, int* y)
{
    int temp = *x;
    *x = *y;
    *y = temp;
}

// NOTE: implementing the sorts on your own is a great way to study!
// I've gone ahead and done insertion sort

/**
 * Bogo, or The Best, Sort
 */
int* bogo(int* array)
{
    return array;
}

/**
 * Bubble Sort
 * Worst case = 2,3,4,5,6,7,8,1
 */
int* bubble(int* array)
{
    return array;
}

// Selection Sort
int* selection(int* array)
{
    return array;
}

// Insertion Sort (adapted from Jon Bentley, _Programming Pearls_)
int insertion(int *array, int n)
{
    int num_swaps = 0;

    for (int i = 1; i < n; i++)
    {
        for (int j = i; j > 0 && array[j-1] > array[j]; j--)
        {
            swap(&array[j-1], &array[j]);
            num_swaps++;
        }
    }
    return num_swaps;
}

// Merge Sort
int* merge(int* array)
{
    return array;
}
