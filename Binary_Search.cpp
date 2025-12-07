#include<bits/stdc++.h>
using namespace std;
int main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 5;
    int start = 0;
    int end = n-1;
    bool present = false;
    // Binary Search Algorithm
    while(start <= end){
        int mid = start + (end-start)/2;
        if(arr[mid] == target){
            cout<<(mid+1)<<endl;
            present = true;
            break;
        }
        else if(arr[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    if(!present){
        cout<<-1<<endl;
    }
    return 0;
}