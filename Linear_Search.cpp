#include<bits/stdc++.h>
using namespace std;
int main()
{
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 5;
    bool present = false;
    //Linear Search Algorithm
    for(int i=0;i<n;i++){
        if(arr[i] == target){
            cout<<(i+1)<<endl;
            present = true;
        }
    }
    if(!present){
        cout<<-1<<endl;
    }
    return 0;
}