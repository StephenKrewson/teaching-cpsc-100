#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main(void)
{
    char* s = "hello";

    printf("s = %p &s = %p\n", s, &s);

    printf("%ld %ld %ld\n", sizeof(double), sizeof(int), sizeof(float));
    printf("%ld\n", sizeof(char*));
    printf("%ld\n", sizeof(long long));

    return 0;
}
