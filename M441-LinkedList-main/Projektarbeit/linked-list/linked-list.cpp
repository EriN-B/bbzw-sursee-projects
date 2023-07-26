#include <stdio.h>
#include <stdlib.h>
#include <cstdlib>
#include <string.h>
#include <time.h>
#include <iostream>
#include <windows.h> // for sleep()

typedef struct Elm {
    struct Elm* pNext;
    struct Data* pData;
} struListElm;

typedef struct Data {
    char Bez[50];
    double Preis;
} struDataElm;

void menu_main(struListElm* pFirst);

struDataElm* CreateData() //Erin Bachmann, Create a new Data Struct with random "preis" and "Bezeichnung".
{
    struDataElm* dNew = NULL;
    dNew = (struDataElm*)malloc(sizeof(struDataElm));
    int randPrice = rand() % (1001 - 10) + 10; //Random number between 10 and 1000
    for (int i = 0; i < 3; i++)
    {
        int randBez = rand() % 25 + 65;
        dNew->Bez[i] = (char)randBez;
    }
    dNew->Bez[3] = '\0';

    dNew->Preis = randPrice;
    return dNew;
}

struListElm* deleteList(struListElm* pFirst) //Moritz Wicki , Delete a existing list.
{
    while (pFirst != NULL) //Go though all Elements in the List
    {
        struListElm* pDel = pFirst;
        pFirst = pFirst->pNext;
        free(pDel);
    }
    printf("List deleted.\n");
    menu_main(pFirst);
    return NULL;
}

struListElm* createList(int anz) //Erin Bachmann, Create list Elements with DataStructures attached to it.

struDataElm* dNew = NULL;

struListElm* pNew = NULL;
struListElm* pFirst = NULL;
struListElm* pLast = NULL;

for (int iElm = 0; iElm < anz; iElm++) {

    pNew = (struListElm*)malloc(sizeof(struListElm));// Element erstellen und initialisieren
    if (pNew == NULL) exit(-1);
    pNew->pNext = NULL;
    pNew->pData = CreateData();
    // Neues Element an Liste anf�gen
    if (pFirst == NULL) pFirst = pNew;
    if (pLast != NULL) pLast->pNext = pNew;
    pLast = pNew;
}
printf("List created.\n");
return pFirst;
}

void selection(struListElm* pFirst, char dirSort) //Moritz Wicki, selection-sort Alcorithm. This Algorithm finds the minium Element and Puts is at the "first" place. More informations can be found at: https://www.geeksforgeeks.org/selection-sort/
{
    int length = 0;
    std::cout << "Loading Please Wait";
    printf("\n");

    if (dirSort == 'A') // the list will be sorted in ascending order
    {
        for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext) //Count Number of Elemenents in the List
        {
            length++;
        }
        clock_t startTime = clock(); //Start Clock
        for (int i = 0; i < length; i++) {
            int pos = 0;
            int smalestPrice = 1001;
            struListElm* pSmallest = NULL;
            for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext)
            {
                if (pElm->pData->Preis < smalestPrice && pos >= i) { //If the current element is lower than the current smallest element, the price of the smallest price changes/switches.
                    pSmallest = pElm;
                    smalestPrice = pElm->pData->Preis;
                }
                pos++; // Increase the current position, so the next element will be the lowest of the "new" list.
            }
            pos = 0;

            if (pSmallest != NULL) {
                for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext) {
                    if (pos == i) {
                        if (smalestPrice == pElm->pData->Preis) {
                            break;
                        }
                        struDataElm* indexElement = pElm->pData; //Now the data-elements switch their places.
                        struDataElm* pTemp = pSmallest->pData;
                        pElm->pData = pTemp;
                        pSmallest->pData = indexElement;
                    }
                    pos++;
                }
            }
        }
        clock_t endTime = clock();
        double time = ((double)endTime - (double)startTime) / (double)CLOCKS_PER_SEC;
        if (time == 0.000000)
        {
            printf("List sorted in under 0.000000 seconds\n");
        }
        else {
            printf("List sorted in %lf Seconds\n", ((double)endTime - (double)startTime) / (double)CLOCKS_PER_SEC);
        }
    }
    if (dirSort == 'D') // the list will be sorted in descending order( The following code is just the reverse of the code on top.)
    {
        int length = 0;

        for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext)
        {
            length++;
        }
        clock_t startTime = clock();
        for (int i = 0; i < length; i++) {
            int pos = 0;
            int biggestPrice = 9;
            struListElm* pBiggest = NULL;
            for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext)
            {
                if (pElm->pData->Preis > biggestPrice && pos >= i) {
                    pBiggest = pElm;
                    biggestPrice = pElm->pData->Preis;
                }
                pos++;
            }
            pos = 0;

            if (pBiggest != NULL) {
                for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext) {
                    if (pos == i) {
                        if (biggestPrice == pElm->pData->Preis) {
                            break;
                        }
                        struDataElm* indexElement = pElm->pData;
                        struDataElm* pTemp = pBiggest->pData;
                        pElm->pData = pTemp;
                        pBiggest->pData = indexElement;
                    }
                    pos++;
                }
            }
        }

        clock_t endTime = clock();
        double time = ((double)endTime - (double)startTime) / (double)CLOCKS_PER_SEC;
        if (time == 0.000000)
        {
            printf("List sorted in under 0.000000 seconds\n");
        }
        else {
            printf("List sorted in %lf Seconds\n", ((double)endTime - (double)startTime) / (double)CLOCKS_PER_SEC);
        }
    }

    menu_main(pFirst); // Go back to the menu
}

void bubbleSort(struListElm* pFirst, char dirSort) //Erin Bachmann,  Bubble-sort algorithm. This Algorithm compares to datapoints and puts the lower one first. This is done as long as the Array/List is (Ammount of elements in the list). 
clock_t startTime = clock();
int length = 0;
for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext)
{
    length++;
}
std::cout << "Loading Please Wait\n";

if (dirSort == 'A') //the list will be sorted in ascending order
{
    for (int i = 0; i <= length; i++)
    {
        for (struListElm* pElm = pFirst; pElm->pNext != NULL; pElm = pElm->pNext)
        {
            if (pElm->pData->Preis > pElm->pNext->pData->Preis)
            {
                struDataElm* pDataCurr = pElm->pData;
                struDataElm* pDataNExt = pElm->pNext->pData;

                pElm->pData = pDataNExt;
                pElm->pNext->pData = pDataCurr;
            }
        }
    }
}
if (dirSort == 'D')//the list will be sorted in ascending order
{
    for (int i = 0; i <= length; i++)
    {
        for (struListElm* pElm = pFirst; pElm->pNext != NULL; pElm = pElm->pNext)
        {
            if (pElm->pData->Preis < pElm->pNext->pData->Preis)
            {
                struDataElm* pDataCurr = pElm->pData;
                struDataElm* pDataNExt = pElm->pNext->pData;

                pElm->pData = pDataNExt;
                pElm->pNext->pData = pDataCurr;
            }
        }
    }
}

clock_t endTime = clock();
double time = ((double)endTime - (double)startTime) / (double)CLOCKS_PER_SEC;
if (time == 0.000000)
{
    printf("The List has been sorted in under 0.000000 seconds\n");
}
else {
    printf("List sorted in %lf Seconds\n", ((double)endTime - (double)startTime) / (double)CLOCKS_PER_SEC);
}
menu_main(pFirst);
}

void sortList(char SortingAlg, struListElm* pFirst) //Erin bachmann, this manages wether the bubble or the selection sort algorithm will be used.
{
    char input[50];

    if (pFirst != NULL)
    {

        if (SortingAlg == 'b') //Bubble-Sort
        {
            printf("Ascending / descending (A/D)\n");
            scanf_s("%s", input, sizeof(input));
            if (strcmp(input, "A") == 0)
            {
                bubbleSort(pFirst, 'A');
            }
            else {
                bubbleSort(pFirst, 'D');
            }
        }
        if (SortingAlg == 's')//Selection-Sort
        {
            printf("Ascending / descending (A/D)\n");
            scanf_s("%s", input, sizeof(input));
            if (strcmp(input, "A") == 0)
            {
                selection(pFirst, 'A');
            }
            else {
                selection(pFirst, 'D');
            }
        }
        if (SortingAlg == 'i')
        {

        }
    }
    else {
        printf("No list aviable, you can generate a new List with the Command <new>\n");
    }
    menu_main(pFirst);
}


void printList(struListElm* pFirst, int numDelete) //Erin Bachmann, this prints out the list.
{
    int index = 0;
    struListElm* pElm = pFirst;
    int length = 0;
    for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext)
    {
        length++;
    }
    printf("%i, %i", numDelete, length);
    if (length < numDelete)
    {

        if (numDelete == 0) //if numDelete is set to 0, the while list will be printed out.
        {
            if (pFirst != NULL)
            {
                printf("_______________________\n\n");
                printf("Bez:            Nr:\n");
                printf("_______________________\n\n");
                for (struListElm* pElm = pFirst; pElm != NULL; pElm = pElm->pNext) {
                    printf("%s             %.1lf\n", pElm->pData->Bez, pElm->pData->Preis);
                }
                printf("_______________________\n");
                menu_main(pFirst);
            }
            else { // If there is no list, print a message to create a new list.
                printf("You first have to create a list ;)\n");
                menu_main(pFirst);
            }
        }
        else { //If the ammount of to be printed out elements is set, this will print out the exact ammount.
            printf("_______________________\n\n");
            printf("Bez:            Nr:\n");
            printf("_______________________\n\n");
            while (index < numDelete && pFirst != NULL)
            {
                index++;
                pElm = pElm->pNext;
                printf("%s             %.1lf\n", pElm->pData->Bez, pElm->pData->Preis);
            }
            printf("_______________________\n");
            menu_main(pFirst);
        }
    }
    else
    {
        printf("There are only %i Elements in the list", length);
        menu_main(pFirst);
    }
}

void menu_main(struListElm* pFirst) //Erin Bachmann, this menu manages the whole programm.
{
    char input[50];
    struListElm* gpStart = pFirst; //(wouldnt be necessary."Pfirst" could also be used without initialiting it)
    scanf_s("%s", input, sizeof(input));
    if (strcmp(input, "help") == 0) //Help menu. 
    {
        printf("<help>   - Lists all commands\n");
        printf("<new>    - Creates new list\n");
        printf("<delete> - Deletes the List\n");
        printf("<sort>   - Sorts the List\n");
        printf("<print>  - Prints the List\n");
        menu_main(gpStart);
    }
    if (strcmp(input, "new") == 0) //Creates a new list with the desired ammount of elements.
    {
        struListElm* pStart = NULL;
        int anz = 0;
        printf("Number of Elemnts: \n");
        scanf_s("%i", &anz);
        pStart = createList(anz);
        menu_main(pStart);
    }
    if (strcmp(input, "print") == 0) //Prints out the desired ammount of Elements
    {
        int numDelete = 0;
        if (pFirst != NULL) //If there is no list, a message will be printed out.
        {
            printf("Print all Items? (Y/N)\n");
            scanf_s("%s", input, sizeof(input));
            if (strcmp(input, "Y") == 0) //All Elements will be printed out.
            {
                printList(gpStart, numDelete);
            }
            if (strcmp(input, "N") == 0) //A specific ammount of elements will be printed out.
            {
                printf("Number of Items to print: ");
                scanf_s("%i", &numDelete);
                if (numDelete == 0)
                {
                    printf("Can't print no items\n"); //if the user input is  0, a special message will be printed out.
                    menu_main(pFirst);
                }
                else {
                    printList(gpStart, numDelete);
                }
            }
        }
        else {
            printf("No list aviable, you can generate a new List with the Command <new>\n");
            menu_main(pFirst);
        }
    }
    if (strcmp(input, "bubble") == 0)
    {
        sortList('b', gpStart);
    }
    if (strcmp(input, "selection") == 0)
    {
        sortList('s', gpStart);
    }
    if (strcmp(input, "delete") == 0)
    {
        deleteList(gpStart);
    }
    if (strcmp(input, "algs") == 0) // prints out a list of all aviable algorithms.
    {
        printf("<bubble>    - Bubble Sort\n");
        printf("<selection> - Selection Sort\n");
        menu_main(gpStart);
    }
    if (strcmp(input, "sort") == 0)
    {
        printf("Specify the Algorithm you'd like to use.\nUse <algs> to list all aviavle Algorithms\n");
        scanf_s("%s", input, sizeof(input));
        if (strcmp(input, "algs") == 0)
        {
            printf("<bubble>    - Bubble Sort\n");
            printf("<selection> - Selection Sort\n");
            menu_main(pFirst);
        }
        if (strcmp(input, "bubble") == 0)
        {
            sortList('b', gpStart);
        }
        if (strcmp(input, "selection") == 0)
        {
            sortList('s', gpStart);
        }
        else {
            printf("There's no such command, please try again.\n");// Error message.
            menu_main(pFirst);
        }
    }
    else {
        printf("There's no such command, please try again.\n"); //Error message.
        menu_main(pFirst);
    }
}

void menu_introduction(int index) //Moritz,  This introduction will only be shown when you open the programm. 
{
    char input[50];
    if (index == 0)
    {
        printf("Welcome to the linked-list Application.\n");
        printf("To list all aviable commands use the command 'help'\n");
        menu_main(NULL);
    }
    else {
        menu_main(NULL);
    }


}
int main()
{
    menu_introduction(0);
    return 0;
    system("pause");
}
