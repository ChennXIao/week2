function find_and_print(messages){
    for (const key in messages){
        const v = messages[key]
        //One is older than 17 if one is 18, at legal age, a college student or able to vote 
        if (v.search("18") != -1)
            console.log(key)
        else if(v.search("college")!= -1)
            console.log(key)
        else if(v.search("legal age")!= -1)
            console.log(key)
        else if(v.search("vote ")!= -1)
            console.log(key)
        else{
            //pass
        }
    }
}
console.log("===Task1===")
find_and_print({
"Bob":"My name is Bob. I'm 18 years old.",
"Mary":"Hello, glad to meet you.",
"Copper":"I'm a college student. Nice to meet you.",
"Leslie":"I am of legal age in Taiwan.",
"Vivian":"I will vote for Donald Trump next week",
"Jenny":"Good morning."
})


function calculate_sum_of_bonus(data){
// write down your bonus rules in comments
// either CEO or above average performance can get bonus with 9%*salary 
// either engineer or average performance can get bonus with 6%*salary 
// either sales or below average performance can get bonus with 3%*salary 
    let a = []
    for(let key in data){
        a= data[key]
        }

    for(let i=0;i<a.length;i++){
        let salary = a[i]['salary']
        
        if(salary.toString().includes("USD") == true){
            salary = salary.toString()
            salary=salary.replace("USD", "")
            a[i]['salary'] = parseInt(salary)*30

        }else{
            salary = salary.toString()
            salary=salary.replace(",", "")
            a[i]['salary'] = parseInt(salary)
        }
    }
    let bonus = {}
    while(true){
        let sum = 10001
        for(let i=0;i<a.length;i++){
            salary = a[i]['salary']
            let performance = a[i]['performance']
            let role = a[i]['role']
            
            if(performance == "above average" || role == "CEO"){
                if(role in bonus){
                    bonus[role] = bonus[role]*0.9
                    console.log("in")
                
                }else{               
                    add = salary*0.09
                    bonus[role] = add
                    }
            }else if(performance == "average" || role == "Engineer"){
                if(role in bonus){
                    bonus[role] = bonus[role]*0.9
                    console.log("in")
                
                }else{               
                    add = salary*0.09
                    bonus[role] = add
                    }
            }else if(performance == "below average" || role == "Sales"){
                if(role in bonus){
                    bonus[role] = bonus[role]*0.9
                    console.log("in")
                
                }else{               
                    add = salary*0.09
                    bonus[role] = add
                    }
            }else{
                if(role in bonus){
                    bonus[role] = bonus[role]*0.9
                    console.log("in")
                
                }else{               
                    add = salary*0.09
                    bonus[role] = add
                    }
                }
        }  
    }  
        for(let k in bonus){
            sum = sum+bonus[k]
        }
        // console.log(bonus)
        console.log(sum)

        
}
console.log("===Task2===")
calculate_sum_of_bonus({
"employees":[
{
"name":"John",
"salary":"1000USD",
"performance":"above average",
"role":"Engineer"
},
{
"name":"Bob",
"salary":60000,
"performance":"average",
"role":"CEO"
},
{
"name":"Jenny",
"salary":"50,000",
"performance":"below average",
"role":"Sales"
}
]
})


function func(...data){
    let data2 = []
    for(let i = 0;i < data.length;i++)
        data2.push(data[i])
    let left = 0
    let right= data2.length-1
    while(true){
        if(data2[left][1]==data2[right][1]){
            if(data2.length == 1){
                break

            }else{
                data2.splice(right,1)
                data2.splice(left,1)
                left = 0        
                right= data2.length-1

                if(data2.length == 0){

                    break
                }
            }
        }else if(right ==  left  + 1){
            left= left+1

        }else{
            right = right - 1
               }
    }
    if (data2.length == 0){
        console.log("沒有")
    }else{
        console.log(data2)
    }
}

console.log("===Task3===")
func("彭⼤牆", "王明雅", "吳明") 
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花") 
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花") 


function getNumber(index){
    let  a  =[]

    for(let i = 0; i <20;i++){
        if(i==0){
            a.push(0)
        }
        else if(i%2==0){
            a.push(a[i-1]-1)
        }
        else{
            a.push(a[i-1]+4)
        }
    }
    console.log(a[index])
    // your code here
    }
console.log("===Task4===")
getNumber(1); // print 4
getNumber(5); // print 10
getNumber(10); // print 15


function find_index_of_car(seats, status, number){
    let available = []
    let  pt = 100
    for(let i =0; i < seats.length;i++){
        let a = seats[i]*status[i]
        available.push(a)
 
    }
    for(let i =0; i < available.length;i++){
        if(available[i] != 0 && available[i] >= number){
            if(pt  > available[i]){
                pt = available[i]
            }
            else{
                pt = pt
            }
        }  
    }          
    if(pt ==  100){
        console.log("-1")      
    }else{
        console.log(seats.indexOf(pt))
    }
}
console.log("===Task5===")
find_index_of_car([3, 1, 5, 4, 2], [0, 1, 0, 1, 1], 2)
find_index_of_car([1, 0, 5, 1, 3], [0, 1, 0, 1, 1], 4) 
find_index_of_car([4, 6, 5, 8], [0, 1, 1, 1], 4)





































































    