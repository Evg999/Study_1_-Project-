// Вывести все числа, меньше 10000, у которых хотя бы одна цифра 3 и корорые 
// не деляться на 5


let num = Math.floor(Math.random() * 10000);

let correctNums =[];

for(let i = 0; i < num; i++){
    if(i % 5 == 0){

        let numCopy = i;

        while(numCopy != 0){
            let lastNum = numCopy % 10;
            if(lastNum == 3){
                correctNums.push(i);
                break
            } 

            numCopy = Math.floor(numCopy / 10)
        }
    }
}
console.log(num)
console.log(correctNums)