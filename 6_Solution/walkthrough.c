#define _GNU_SOURCE

#include <dirent.h>
#include <stdlib.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <string.h>

int main(void)
{
    char* path = "public/";

    struct stat sb;
    int ret_val = stat(path, &sb);

    if (ret_val == 0) {
        printf("Raw sb.st_mode: %d\n", sb.st_mode);
        printf("Is path a directory? %i\n", S_ISDIR(sb.st_mode));
    }

    char* file_ext = "cat.html";

    // Hugely important to just get this idiom correctly
    char* test_path = malloc(sizeof(char) * (strlen(path) + strlen(file_ext) + 1));
    strcpy(test_path, path);
    strcat(test_path, file_ext);

    // F_OK checks to existence; check man access for return value :)
    if (access(test_path, F_OK)== 0)
        printf("OK to access file %s\n", test_path);
    free(test_path);

    char* line = "field1 field2 field3.extension";

    // This will keep track of how much of the string we eat up with
    // character searches. We can then use pointer arithmetic to manipulate
    // the substrings
    int index = strchr(line, ' ') - line;

    // Note! Still prepended by that space
    printf("string is now: %s\n", line + index);

    // Slightly different ways to do it: don't use an index: multiple strings
    // searching from the right . . . 
    char* substring = strrchr(line, '.');
    if (substring != NULL)
        printf("%s\n", substring);

    // One possible way to get all the fields of line
    char separator = ' ';
    char* field1 = line;
    char* field2 = strchr(field1, separator) + 1;
    char* field3 = strchr(field2, separator) + 1;

    // Trim into substrings (why don't we need to do this for field2?)
    char* fielda = strdup(field1);
    fielda[field2-field1-1] = '\0';
    char* fieldb = strdup(field2);
    fieldb[field3-field2-1] = '\0';

    printf("original=%s\nfield1=%s\nfield2=%s\nfield3=%s\n", line, fielda, fieldb, field3);
    free(fielda);
    free(fieldb);

    return 0;
}
