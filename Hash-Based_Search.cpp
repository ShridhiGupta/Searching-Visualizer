#include <bits/stdc++.h>
using namespace std;
int main() {
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 5;
    // Hash-Based Seach Algorithm
    unordered_map<int, int> hashTable;
    for (int i = 0; i < n; i++) {
        hashTable[arr[i]] = i + 1; 
    }
    if (hashTable.find(target) != hashTable.end()) {
        cout << hashTable[target] << endl;
    } else {
        cout << -1 << endl;
    }
    return 0;
}