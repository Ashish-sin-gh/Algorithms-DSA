// soln to question number 3 

function peakOfMount(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start < end){
        let mid = Math.floor(start + (end-start)/2);
        if(arr[mid] < arr[mid+1]){
            start = mid + 1;
        }
        else{
            end = mid;
        }
    }
    return start;
}

console.log("peak of the mountain(max index) is at: "+peakOfMount([2,3,4,5,1]));