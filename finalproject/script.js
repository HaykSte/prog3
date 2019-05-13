for (let y = 0; y < arr.length; y++) {
    matrix[y] = [];
    for (let x = 0; x < arr.length; x++) {
        var a = arr[Math.floor(Math.random()*arr.length)];
        matrix[y][x] = a;
        
    }
    
}



function setup() {
    // noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
                
            } else if (matrix[y][x] == 3) {
                var wolf = new Wolf(x, y);
                wolfArr.push(wolf);
        } else if (matrix[y][x] == 4) {
            var radiation = new Radiation(x, y);
            radArr.push(radiation);
        
    } else if (matrix[y][x] == 5) {
        var elephant = new Elephant(x, y);
        elArr.push(elephant);
    }
}
}
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill("blue");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill("brown");
                rect(j * side,i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    //յուրաքանչյուր գիշատիչ փորձում է ուտել խոտակերին 
    for(var i in wolfArr){
        wolfArr[i].eat()
    }
    //յուրաքանչյուր խոտակեր փորձում է սպանել խոտակերին և գիշատիչին
    for(var i in radArr){
        radArr[i].eat()
    }
    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for(var i in elArr){
        elArr[i].eat()
    }
}