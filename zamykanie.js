const arrFunc = [];
for (var i = 0; i < 5; i++) {
    arrFunc.push((function (val) {
        return function () {
            return val;
        }
    })(i))
}

// for (let j = 0; j < arrFunc.length; j++) {
//     console.log(arrFunc[j]());
// }

// function renderInput() {
//     const [value, setValue] = useState();
//     const [secondInput, setSecondInput] = useState();
//     const callbackCach = useCallback(e => setValue(e.target.value), []);
//     return (
//         <div>
//             <h1>Callbacks caching examples:</h1>

//             <div className="part">
//                 <h3>Using useCallback hook:</h3>
//                 <Input onChange={callbackCach} />
//                 <p>Input value is: {value}</p>
//             </div>

//             <div className="part">
//                 <h3>Without useCallback hook:</h3>
//                 <Input onChange={e => setSecondInput(e.target.value)} />
//                 <p>Input value is: {secondInput}</p>
//             </div>
//         </div>
//     );
// }

const get1 = (obj, path) => {
    const keys = path.split('.');

    if (!obj) return undefined;

    if (keys.length == 1) {
        return obj[keys[0]]
    }

    obj = obj[keys[0]];

    return get(obj, keys.slice(1).join('.'))
}

// const get = (obj, path) => {
//     return path.split('.').reduce((res, node) => res ? res[node] : undefined, obj)
// }

const get = (obj, path) => {
    if (!obj) return;

    const keys = path.split('.');
    let tempObj = obj;

    for (let i = 0; i < keys.length; i++) {
        tempObj = tempObj[keys[i]];

        if (!tempObj) break;
    }

    return tempObj;
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
}

// const get = (path, obj) => path.split('').reduce((res, key) => res ? res[key] : undefined, obj)

// console.log(get(obj, 'a.b')); // { c: 'd' }
// console.log(get(obj, 'a.b.c')); // 'd'
// console.log(get(obj, 'a.e')); // 'f'
// console.log(get(obj, 'a.x.e')); // undefined
console.log(get(undefined, 'a.x.e')); // undefined

function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => callback.apply(this, args), delay);
    }
}

const fetchUrl = (url) => {
    console.log(url)
}

const fetching = debounce(fetchUrl, 300);

// fetching(1);
// fetching(2);
// fetching(3);
// fetching(4);
// fetching(5);

// Достать все значения из дерева
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 3 }
            ]
        },
        {
            value: 4,
            children: [
                { value: 5 },
                { value: 6 }
            ]
        }
    ]
}

function getTreeValues(tree) {
    const stack = [tree];
    const res = [];

    while (stack.length > 0) {
        const node = stack.pop();

        if (node.value) res.push(node.value)

        if (node.children?.length) stack.push(...node.children)
    }

    return res;
}

// console.log(getTreeValues(tree))

var n = 1;

function f(n) {
    n = 3;
}
f(n);

console.log(n);

var obj2 = { a: 1 };

function f1(o) {
    o.a = 5;
}
f1(obj2);

console.log(obj2);

// ------------------

var obj3 = { a: 1 };

function f2(o) {
    o = { hello: 1 };
}

f2(obj3);

console.log(obj3);

// {
//     name: 'file1',
//     children: [
//         { name: 'file2'},
//         { name: 'file3'},
//         { name: 'images',
//           children: [
//             { name: 'image1'},
//             { name: 'image2'},
//           ]},
//           { name: 'file4'},
//     ]
// }

вывести:
file1
file2
file3
images
image1
image2
file4