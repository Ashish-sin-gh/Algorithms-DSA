function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor(start + (end - start)/2); 
        
        if(arr[mid] === key){
            return mid;
        }

        if(key < arr[mid]){
            end = mid - 1;
        } else if(key > arr[mid]){
            start = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([2,4,8,9,12,17,45,65,99,100],100));