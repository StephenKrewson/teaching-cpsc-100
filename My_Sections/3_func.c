/**
 * Stephen Krewson | Section 3
 *
 * Call by reference vs call by value
 * Using GDB to explore the values of a and *a
 *
 * Use:
 *
 * gdb ./3_func
 *
 * break add_val
 * break add_ref
 *
 * run
 *
 * step, next, print a, print *a, info locals
 * as desired
 */

#include <stdio.h>

int add_val(int a)
{
    a = a + 1;
    return a;
}

void add_ref(int* a)
{
    *a = *a + 1;
}

int main(void)
{
    // Let's try to add one to both x and y!
    int x = 5;
    int y = 5;

    add_ref(&x);

    // let's fix this line!
    // add_val(y);
    y = add_val(y);

    printf("x=%d\ty=%d\n", x, y);

    return 0;
}
