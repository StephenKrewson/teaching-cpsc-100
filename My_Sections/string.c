/**
 * Stephen Krewson | Section 2 | Sept 21, 2015
 *
 * AGENDA
 *
 * Intros
 * Resources + Best Practices
 * IDE / Linux-y tips
 * Arrays & Strings
 * Math review
 * Functions: main(), CL, &c.
 * Questions and Pset lookahead
 */

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

int main(int argc, string argv[])
{

    // ASCII
    printf("%d\n", 'x');

    printf("lowercase %c = %c\n", 'B', 'B' + abs('A' - 'a'));

    // Pitfalls
    float f = 1 / 10;
    printf("%f\n", f);

    f = 1.0 / 10;
    printf("%f\n", f);

    printf("%.20f\n", f);

    // Strings
    char test[50] = "oh my gosh";
    printf("%d vs. %d\n", (int) strlen(test), (int) sizeof(test));

    string my_string = "oh my gosh";
    printf("%s = %d characters\n", my_string, (int) strlen(my_string));

    // Control flow review; loop optimization
    for (int x = 0; x < strlen(my_string); x++)
        putchar(my_string[x]);

    printf("\n");

    // Command line
    for (int i = 0; i < argc; i++)
        printf("%d = %s\n", i, argv[i]);

    // Loop Compression 
    for (int i = 0; i < 5; i++)
        for (int j = 0; j < 5; j++)
            printf("%d%d\n", i, j);

    printf("\nSame as?\n");

    for (int x = 0; x < 25; x++)
        printf("%d%d\n", x / 5, x % 5);

}
