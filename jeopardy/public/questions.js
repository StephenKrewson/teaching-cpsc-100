/*
 * questions.js
 *
 * CS50
 * Fall 2015
 *
 * Stores the questions and answers!
 */

// number of categories
var num_cat = 5;

// number of questions in each category
var num_q = 5;

var info = [
    {
        category: "Over-C-n at Yale",
        questions:
        [
            {
                q: "Why is passing by reference better than passing by value?",
                a: "The callee is able to change the argument."
            },
            {
                q: "What's the difference between NULL and &#92&#48?",
                a: "NULL is a special pointer that points to no object.<br>The null terminator is a char that generally demarks the end of a string."
            },
            {
                q: "What does sizeof(char*) return? What about sizeof(long long)?",
                a: "8"
            },
            {
                q: "In C, what code would you write to typedef the node of a binary search tree?",
                a: "typedef struct node { int n; struct node* left; struct node* right; } node;"
            },
            {
                q: "What's wrong and how can you fix it: char* s: &#34hello&#34&#59 printf(&#34%s&#34, *s);",
                a: "Printf expects a pointer to a char array as its second argument, but *s denotes a char and will incorrectly be interpreted as an address.<br>To fix, change *s to s."
            }
        ]
    },
    {
        category: "WWWinning",
        questions:
        [
            {
                q: "True or False.<br>Both JavaScript and PHP are interpreted languages.",
                a: "True."
            },
            {
                q: "What's the difference between GET and POST?",
                a: "GET allows the state of a page to be bookmarkable.<br>POST affords data more privacy."
            },
            {
                q: "What's AJAX?",
                a: "A technique whereby webpages can request additional data from a server without having to reload entirely."
            },
            {
                q: "When are SQL injection attacks possible?",
                a: "When user-supplied input is not escaped before use in a SQL query."
            },
            {
                q: "How are anonymous functions used in jQuery (JS in general)?",
                a: "(1) arguments to other functions (2) as lexical closure. Helpful for executing code blocks upon some event, without needed explicit call from some controller."
            }
        ]
    },
    {
        category: "pset9",
        questions:
        [
            {
                q: "Valgrind returns the following: invalid write of size 4. What happened?",
                a: "You have likely written to a 4-byte location in memory that does not belong to you."
            },
            {
                q: "What's the difference between an object and an array in JavaScript?",
                a: "The former has key-value pairs. The latter can have multiple types."
            },
            {
                q: "What's an API?",
                a: "An API is an interface written by programmers that other programmers can use in their own software."
            },
            {
                q: "For what purpose are regular expressions useful?",
                a: "Pattern matching or the extraction of substrings."
            },
            {
                q: "What's the safest way to construct a SQL query?",
                a: "With ?'s and placeholders! (why??)"
            }
        ]
    },
    {
        category: "FUNctions",
        questions:
        [
            {
                q: "What's an event handler?",
                a: "A function that is called in response to some event."
            },
            {
                q: "What function executes a SQL query in PHP?",
                a: "CS50::query()"
            },
            {
                q: "Write a function that takes a positive integer and returns true if it is odd.",
                a: "bool odd(int n) { if (n % 2 != 0) return true; else return false; }"
            },
            {
                q: "What's the difference between a while and a do-while loop?",
                a: "A do-while loop executes its code at least once."
            },
            {
                q: "Write a function in C that returns false unless its argument is an uppercase letter.",
                a: "bool isupper(char c) { if (c >= 65 && c <= 90) return true; else return false; }"
            }
        ]
    },
    {
        category: "rand()",
        questions:
        [
            {
                q: "What is a RESTful URL?",
                a: "Representational state transfer is a convention for using HTTP verbs and URI hierarchies, e.g. DELETE /users/9."
            },
            {
                q: "What's 00010001 in hexadecimal?",
                a: "0x1a"
            },
            {
                q: "Why might a hash table be better than a trie?",
                a: "A hash table should be used when you have a sparse data set as the nodes of a trie would likely take up much more space."
            },
            {
                q: "What's the upper bound on the running time of inserting an integer into a sorted linked list?",
                a: "O(n)"
            },
            {
                q: "If global variables are accessible by all functions, why bother with local variables?",
                a: "Using only global variables increases the risk that some functions might change their values unbeknowst to other functions.<br>It also makes code less readable."
            }
        ]
    },
];