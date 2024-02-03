let city  = "indore"
switch(city){
    case "pune":
        console.log('MH')
    case "jaipur":
        console.log('RH')
    case "indore":
        console.log('Mp')
    case "lucknow":
        console.log('UP')
        default:
        console.log('incorrect city')            
}

let city2 = 'chennai'
switch(city2){
    case 'pune':
    case 'aur':    
        console.log('MH')
        break
    case 'jaipur':
        console.log('RJ')
        break
    case 'indore':
        console.log('MP')
        break
    case 'lucknow':
        console.log('UP')
        break
        default:
            console.log('incorrect city name')            
}