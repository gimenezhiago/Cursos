function promise() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation
        setTimeout(() => {
            console.log('oiiiiiii')
            resolve()
        }, 2000);
    });
}

export default async function () {
    await promise()
    console.log('temrinou')
}