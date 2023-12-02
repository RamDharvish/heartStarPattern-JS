

function pattern () {
    let result=""
    
    for(let i=1;i<=3;i++) {
       if(i==1) {
        result+=" "
       }
        for(let a=0;a<i+2;a++) {
           
            result+=" *"
        }
        for(let b=i;b<=2;b++) {
            result+=" "
        }
        for(let a=0;a<=i+1;a++) {
          
            result+=" *"
        }
        
        result+="\n"
    }
    for(let i=0;i<=4;i++) {
       
        for(let a=0;a<i;a++) {
         result+="  "
        }
        
        if(i==0) {
            result+=" "
           }
        
        for(let b=i;b<5;b++) {
          
            result +=" *"
        }
       for(let c=i;c<4;c++) {
        result+=" *"
       }
    
        result+="\n"
    }
    
        return result
    }
    
    
    let result =pattern()
    
    console.log(result)