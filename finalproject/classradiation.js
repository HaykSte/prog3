class Radiation {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.multiply = 0; 
        this.directions = [];

    }
    
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

   
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    
    move() {
        
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

          
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;
        }
    }

     eat() {
        
        var fundCords = this.getDirections(2);
        var fundCords_1 = this.getDirections(3);
        var fundCords_2 = fundCords.concat(fundCords_1);
        var cord = random(fundCords_2);

        
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            if(matrix[y][x] == 2)
            {
            
             matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            
            this.x = x;
            this.y = y;

            
            this.multiply++;
 
            
            this.energy++;
            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            }
            else if(matrix[y][x] == 3)
            {

             matrix[y][x] = 4;
             matrix[this.y][this.x] = 0;
 
             this.x = x;
             this.y = y;
 
             
             this.multiply++;
  
            
             this.energy++;
                for (var i in wolfArr) {
                    if (x == wolfArr[i].x && y == wolfArr[i].y) {
                        wolfArr.splice(i, 1);
                    }
                }
            }
     

            
           

           
            if (this.multiply == 1) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            
            this.move();
            this.energy--;
            if (this.energy <= 0) { 
                this.die();
            }
        }
    }

       
       mul() {
        this.multiply++;
        if (this.multiply == 1) {
            
            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                
                var radiatoin = new Radiation(x, y);
                radArr.push(radiatoin);

                
                matrix[y][x] = 4;
                this.multiply = 0;
            }
        }
    }

     
      die() {
        
        matrix[this.y][this.x] = 0;

      
        for (var i in radArr) {
            if (this.x == radArr[i].x && this.y == radArr[i].y) {
                radArr.splice(i, 1);
            }
        }
    }

}