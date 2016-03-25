/**
 * Stephen Krewson | CS50 Section 4 | Oct 5 2015
 *
 * AGENDA
 * Grading and deadline reminder
 * Pset 3 followup: variable scope
 * *nix: Everything is a (binary) file (show glitch if time)
 * writing and reading; redirection
 * Pointers, pointer arithmetic
 * GetString(), malloc(), and free()
 * Pset 4 lookahead: file headers and structs
 * If time: bitwise operations, hex notation, two's complement
 */

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Gives you integer file descriptors: STDOUT_FILENO, etc.
#include <stdint.h>
#include <unistd.h>
#include <limits.h>

// Global danger . . .
const int c_global = 0;
static int s_global = 0;
int global = 0;

int main(int argc, char* argv[])
{
    // "Everything is a file"
    // Use %p to print a pointer address
    printf("stdin = %d\nstdout = %p\n", STDIN_FILENO, stdout);

    // Assignment tricks, global var errors
    // why won't this compile?
    //c_global += 4;
    s_global += 4;
    global += 4;

    printf("%d\t%d\t%d\n", c_global, s_global, global);

    int global = 0;

    printf("global = %d\n", global);

    // Bit shifts and arithmetic: two's complement
    printf("~%d == %d\n", -1, ~(-1));
    printf("~%d == %d\n", 0, ~0);

    // No exponential function :/ but . . . 
    // biggest known prime until 1855! 2^(n-1) - 1
    // group into sections of 4 then convert
    printf("INT_MAX = %d (2 << 30) - 1 = %d hex = 0x%08x\n", INT_MAX, (2 << 30) - 1, INT_MAX);
    printf("~%d == %d\n", INT_MAX, ~INT_MAX);


    // POINTERS
    int x = 4;
    int* y = &x;
    int* z = y;

    printf("x = %d y = %p\n", x, y);
    x += 5;
    y += 3;
    printf("x = %d y = %p\n", x, y);
    printf("y & z = %d\n", (int) z & (int) y);
 
    char* buffer = malloc(sizeof(char) * 1024);

    if (buffer == NULL)
    {
        exit(1);    
    }

    char* input = GetString();

    memcpy(buffer, input, sizeof(input) + 1);

    free(input);
    return EXIT_SUCCESS;
}
    
