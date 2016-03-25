/**
 * Stephen Krewson | Section 3
 * Edge cases and robustness for initials.c
 *
 * Run ./3_bombproof > out.txt
 *
 * At terminal use  "cat -vet out.txt" to see non-printing characters!
 */

#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdio.h>

int main(void)
{
    string s = GetString();

    // Show how to send EOF; another reason to consult CS50 reference
    if (s == NULL)
    {
        printf("No input received\n");
        return 1;
    }

    int n = strlen(s);
    putchar(toupper(s[0]));

    // Spot a potential problem with i+1th position
    for (int i = 1; i < n; i++)
    {
        if ( isblank(s[i]) )
        {
            putchar( toupper(s[i+1]) );
        }
    }
    putchar('\n');

    // What does this do? Introduce valgrind
    free(s);
    return 0;
}
