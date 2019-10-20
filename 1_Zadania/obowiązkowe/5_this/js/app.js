var stairs = {
    stair : 0,
    up : function() {
        this.stair++;
    },

    down : function() {
        this.stair--;
      },

    printStep : function() {
        console.log(this.stair);
      }
  };

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();