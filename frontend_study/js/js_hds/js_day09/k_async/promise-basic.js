const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve("안녕!");
    } else {
        reject("잘가!");
    }
});

const print = async () => {
    const result = await promise;
    console.log(result);
};

print();

promise
    .then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.log(result);
    });
