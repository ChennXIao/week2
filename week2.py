#Task1
def find_and_print(messages):
    for k,v in messages.items():
        if v.find("18")!= -1:
            print(k)
        elif v.find("college")!= -1:
            print(k)
        elif v.find("legal age")!= -1:
            print(k)
        elif v.find("vote ")!= -1:
            print(k)
        else:
            pass

print("===Task1===")
find_and_print({
"Bob":"My name is Bob. I'm 18 years old.",
"Mary":"Hello, glad to meet you.",
"Copper":"I'm a college student. Nice to meet you.",
"Leslie":"I am of legal age in Taiwan.",
"Vivian":"I will vote for Donald Trump next week",
"Jenny":"Good morning."
})


#Task2
def calculate_sum_of_bonus(data):
# write down your bonus rules in comments
# either CEO or above average performance can get bonus with 9%*salary 
# either engineer or average performance can get bonus with 6%*salary 
# either sales or below average performance can get bonus with 3%*salary 

    a = list(data.values())
    a = a[0]

    for i in range(len(a)):
        salary = a[i]['salary']
        
        if str(salary).find("USD") !=-1:
            salary = str(salary).strip("USD").replace(",",  "")
            # salary = int(salary)
            a[i]['salary'] = int(salary)*30
            # print(a[i]['salary'])  
        else:
            salary = str(salary).replace(",",  "")
            a[i]['salary'] = int(salary)

    bonus = {}
    for i in range(len(a)):
        salary = a[i]['salary']
        performance = a[i]['performance']
        role = a[i]['role']
        
        if performance == "above average" or role == "CEO":
            add = salary*0.09
            bonus[role] = add
        elif performance == "average" or role == "Engineer":
            add = salary*0.06
            bonus[role] = add

        elif performance == "below average" or role == "Sales":
            add = salary*0.03
            bonus[role] = add

        else:
            add = salary*0.01
            bonus[role] = add

    sum  = 0
    for k,v in bonus.items():
        # print(v)
        sum = sum+v
    print(sum)

print("===Task2===")
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


#Task3
def func(*data):
 
    data2 = []
    for i in range(len(data)):
        data2.append(data[i])

    left = 0
    right= len(data2)-1
    while(True):
        if data2[left][1]==data2[right][1]:
            if len(data2) == 1:
                break

            else:
                data2.pop(right)
                # print(left,"",right)
                data2.pop(left)
                left = 0        
                right= len(data2)-1
                # print(data)
                if any(data2) == False:

                    break
        elif right ==  left  + 1:
            left= left+1
            # print("left")

        else:
            right = right - 1
            # print("right")
    if any(data2) == False:
        print("沒有")
    else:
        print(data2)

print("===Task3===")
func("彭⼤牆", "王明雅", "吳明") # print 彭⼤牆
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花") # print 林花花
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花") # print 沒有


#Task4
def get_number(index):
    a  =[]
    for i in range(20):
        if i==0:
            a.append(0)
        elif i%2==0:
            a.append(a[i-1]-1)
        else:
            a.append(a[i-1]+4)
    print(a[index])

print("===Task4===")
get_number(1) # print 4
get_number(5) # print 10
get_number(10) # print 15

#Task5
def find_index_of_car(seats, status, number):
    available = []
    pt = 100
    for i in range(len(seats)):
        a = seats[i]*status[i]
        available.append(a)
 
    for i in range(len(available)):
        if available[i] != 0 and  available[i] >= number:
            # print(i)
            if  pt  > available[i]:
                pt = available[i]
            else:
                pt = pt
                
    if pt ==  100:
        print("-1")      
    else:  
        print(seats.index(pt))
print("===Task5===")
find_index_of_car([3, 1, 5, 4, 2], [0, 1, 0, 1, 1], 2) # print 4
find_index_of_car([1, 0, 5, 1, 3], [0, 1, 0, 1, 1], 4) # print -1
find_index_of_car([4, 6, 5, 8], [0, 1, 1, 1], 4) # print 2
             




































