// soln for question no 2

function firstOcc(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2);

        if(key === arr[mid]){
            ans = mid;
            end = mid - 1; 
        } 
        else if (key > arr[mid]){
            start = mid + 1;
        } 
        else if (key < arr[mid]){
            end = mid - 1;
        }
    }
    return ans;
}

function lastOcc(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while(start <= end){
        let mid = Math.floor(start + (end-start)/2);

        if(key === arr[mid]){
            ans = mid;
            start = mid + 1;
        }
        else if(key < arr[mid]){
            end = mid - 1;
        }
        else if(key > arr[mid]){
            start = mid + 1
        }
    }
    return ans;
}

function noOfKey(fun1, fun2){
    if(fun1 < 0 || fun2 < 0){
        return 0;
    }
    else{
        let no = fun2 - fun1 + 1;
        return no;
    }
}

let arr = [1,2,4,5,5,5,5,5,5,5,7,8,9];
let key = 5;

console.log(`the number of occurance of ${key} is : ${noOfKey(firstOcc(arr,key), lastOcc(arr,key))}`);