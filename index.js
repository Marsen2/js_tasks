const reverseArray = arr => {
    if (!Array.isArray(arr)){
        return null
    }
    let res = arr.slice().reverse()
    return res
}

const withdraw = (clients, balances, client, amount) => {

    let indexOfPerson = clients.indexOf(client)
    if (balances[indexOfPerson] >= amount){
        balances [indexOfPerson] -= amount;
        return balances[indexOfPerson]
    } else {balances[indexOfPerson] < amount}{
        return -1
    }
}

const getAdults = obj => {
    let res = {}

    for (let key in obj) {
        if (obj[key] >= 18) {
            res[key] = obj[key]
        }
    }
    return res

};