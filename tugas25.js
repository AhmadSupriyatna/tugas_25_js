function tugasduaLima(){
    var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    console.log("Sebelumnya : ", deret);
    console.log("Ascending : ",deret.sort());
    console.log("Descending : ", deret.reverse());

    console.log("Filter > 10 : ", deret.filter(bilangan => {return bilangan>10}));
}
tugasduaLima()