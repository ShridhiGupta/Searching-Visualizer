#include<bits/stdc++.h>
using namespace std;
int main()
{
    int arr = {1,2,3,4,5,6,7,8,9,10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int target = 5;
    int count = 0;
    //Linear Search Algorithm
    for(int i=0;i<n;i++){
        if(arr[i] == target){
            cout<<(i+1)<<endl;
            count++;
        }
    }
    if(count == 0){
        cout<<-1<<endl;
    }
    return 0;
}