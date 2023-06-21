/**
 * Async / Await
 */
const getPromise = (seconds) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve("complete");
        // }, seconds * 1000);
        setTimeout(() => {
            reject("failed");
        }, seconds * 1000);
    });

async function runner() {
    try {
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    } catch (e) {
        console.log(e);
    }
}

runner();
