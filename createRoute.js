/*
У нас есть набор билетов вида:

[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    ...
]

// NY London Moscow SPb


Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает билеты 
в порядке следования по маршруту.
*/

const tickets = [
    { from: 'Tokyo', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'London', to: 'Tokyo' },
    { from: 'Moscow', to: 'SPb' },
]

function getRoute(tickets) {
    const ticketsSet = new Set();
    const ticketsMap = new Map();

    tickets.forEach(ticket => {
        ticketsSet.add(ticket.to);
        ticketsMap.set(ticket.from, ticket.to);
    });

    const firstPoint = tickets.find(ticket => !ticketsSet.has(ticket.from));
    const res = [firstPoint];

    let i = 0;
    while (res.length < tickets.length) {
        const nextFrom = res[i].to;
        const nextTo = ticketsMap.get(nextFrom);

        res.push({ from: nextFrom, to: nextTo });
        i++;
    }

    return res;
}

// console.log(getRoute(tickets));

const obj1 = {
    a: '5',
    b: {
        c: '5',
        d: {
            e: '2'
        },
    },
    f: {
        g: '2'
    }
}

let obj2 = {};

function copy(aObject) {
    let bObject = {};

    let value;
    for (const key in aObject) {
        value = aObject[key];

        bObject[key] = (typeof value === "object") ? copy(value) : value;
    }

    return bObject;
}

obj2 = copy(obj1);
console.log(obj2)