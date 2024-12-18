



const bankaccount={
    balance :0,
    Transaction:[],
    
    // date:render(),

    addBalance:function (money) {
        
        if(money>0){
            this.balance += money;

            this.Transaction.push({
                Operation:"deposit",
                Amount:money,
                Current_Balance:this.balance,
                time:new Date()
    
               
            })
        }
        
        
        this.updatebalance()
     


    },
    withdraw:function (money) {
        const errorok=document.querySelector("#errorok")
        const errormes=document.querySelector("#errormes")
        const back=document.querySelector("#back")
       
        if(money>0 && this.balance>=money){
            this.balance -= money;

            this.Transaction.push({
                Operation:"withdraw",
                Amount:money,
                Current_Balance:this.balance,
                time:new Date()
                
    
               
            })

        }else{
            errormes.style.display="block"
            back.style.display="block"
            errorok.addEventListener("click",function(){
                errormes.style.display="none"
                back.style.display="none"
            })
            

        }
        
        
        this.updatebalance()
        
    },
    updatebalance:function(){
        const balance=document.querySelector("#balance")
        balance.innerHTML=this.balance
        

        const tbody=document.querySelector("tbody")

        const arr=this.Transaction.map(el=>{

                const currentdate=el.time
                const date=currentdate.getDate()
                const month=currentdate.getMonth()+1
                const year=currentdate.getFullYear()
                const minut=currentdate.getMinutes()
                
                const fulltime= `${date}.${month}.${year}.${minut}`
                

            
                   
            return `
              <tr>
              <td>${el.Operation}</td>
              <td>${el.Amount}</td>
              <td>${el.Current_Balance}</td>
              <td>${fulltime}</td>


              
            </tr>

            `
            
        })

        tbody.innerHTML=arr.join("")

        
 

    

    },

}


const depositel=document.querySelector("#deposit");
const depositBtn=document.querySelector("#depositBtn");
const withdrawel=document.querySelector("#withdraw");
const withdrawBtn=document.querySelector("#withdrawBtn");



depositBtn.addEventListener("click",function(){
    const depomoney=Number(depositel.value)
    bankaccount.addBalance(depomoney)
    depositel.value=""

    // render()




})
withdrawBtn.addEventListener("click",function(){
    const withdmoney=Number(withdrawel.value)
    bankaccount.withdraw(withdmoney)
    withdrawel.value=""

    // render()
    
})






// function render(){const currentdate=new Date()
//     const date=currentdate.getDate()
//     const month=currentdate.getMonth()+1
//     const year=currentdate.getFullYear()
//     const minut=currentdate.getMinutes()
    
//     return `${date}.${month}.${year}.${minut}`
//     }






  