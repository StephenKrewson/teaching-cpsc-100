#include <stdio.h>
#define CAP 2

void enqueue(int n);
int dequeue(void);

typedef struct queue
{
    int head, size;
    int numbers[CAP];
}
queue;

// global data structure
queue q;

int main(void)
{
    char* pointer = "hi!";
    printf("%d\n", (int) sizeof(pointer));

    enqueue(9);
    enqueue(6);
    int next = dequeue();
    enqueue(next);

    printf("I can help you at this register now, Person %d!\n", dequeue());
    return 0;
}

void enqueue(int n)
{
    if (q.size < CAP)
    {
        q.numbers[(q.head + q.size) % CAP] = n;
        q.size++;
    }
}

int dequeue(void)
{
    int next = q.numbers[q.head];
    q.size--;
    q.head = (q.head + 1) % CAP;
    return next;
}
