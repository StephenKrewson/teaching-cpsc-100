#include <stdio.h>

int main(void)
{
    for (float f = 0.00; (int) f != 1; f += 0.01)
    {
        printf("$%.2f\n", f);
    }
}
