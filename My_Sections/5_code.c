#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>

// Is this correct?
int mystrlen(char* s)
{
    int length = 0;
    while(s[length++] != '\0');

    return length;
}

int main(void)
{
    printf("%d\n", 'l' + '1');
    printf("%d\n", mystrlen(""));

    int x = -1;
    do
    {
        printf("hello!\n");
    } while (x > 0);

    int* y = &x;
    int* z = y;
    int* a = z;
    int* b = a;
    int* c = b;
    printf("%d\n", *c);



    return 0;
}
