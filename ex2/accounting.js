module.exports= class Account {
    constructor(owner) {
        this.owner = owner;
        
    }
    credit(num){
        this.num = num;
    }
    describe(){
        return `owner: ${this.owner}, balance: ${this.num}`
    }
};


