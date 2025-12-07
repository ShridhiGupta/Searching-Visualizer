#include <bits/stdc++.h>
using namespace std;
int main() {
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 5;
    int low = 0, high = n - 1;
    // Interpolation Search Algorithm
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        int pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);
        if (arr[pos] == target) {
            cout << "Element found at index: " << pos << endl;
            return 0;
        }
        if (arr[pos] < target) {
            low = pos + 1;
        }
        else {
            high = pos - 1;
        }
    }
    cout << "Element not found!" << endl;
    return 0;
}