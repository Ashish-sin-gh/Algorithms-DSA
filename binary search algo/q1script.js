//question 1 solution

function firstOcc(arr,key){
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while(start <= end){
        let mid = Math.floor(start + ((end-start)/2));
        if(arr[mid] === key){
            ans = mid;
            end = mid - 1;
        }
        else if(arr[mid] < key){ //search right part
            start = mid + 1;
        } 
        else if(arr[mid] > key){ //search left part
            end = mid - 1;
        }
    }
    return ans;
}

function lastOcc(arr,key){
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
            end = mid + 1;
        }
    }
    return ans;
}

console.log(`first occurence is: ${firstOcc([4,5,6,6,6,6,6,6,6,8],6)}\nlast occurence is: ${lastOcc([4,5,6,6,6,6,6,6,6,8],6)}`);