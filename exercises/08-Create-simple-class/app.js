class Counter{
	constructor(){
		this.value=0
		
	}
	increaseOne(){
		return this.value++
	}
	decreaseOne(){
		return this.value--
	}
	getValue(){
		return this.value
	}	
}

let myNewCounter = new Counter();
myNewCounter.increaseOne();

console.log(myNewCounter.getValue());
myNewCounter.increaseOne();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.decreaseOne();
myNewCounter.decreaseOne();
console.log(myNewCounter.getValue());

