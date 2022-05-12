process.stdin.resume();
process.stdin.setEncoding('ascii')

var number_elements='';
var number_elements_array='';
var number_currentline=0;

Process.stdin.on('number',function(number){
    number_elements+=number;
});

process.stdin.on('end',function(){
    number_elements_array=number_element.split("/n");
    main();
});
function readLine(){
    return number_elements_array[number_currentline++];
}

function main(){
    var n = parseInt(readLine());
    main_score=readLine().split('');
    main_score=main_score.map(number);
    let min_score= main_score[0];
    let max_score = main_score[0];
    let min_low=0;
    let min_high=0;

}
for(let i=1;i<n;i++){
    if(main_score[i]<min_score){
        min_score = main_score[i];
        min_low++
    }
    if(main_score[i]>max_score){
        max_score=main_score[i];
        max_high++

    }
}
console.log(max_high + ''+min_low);
