/**
 * try...catch
 *
 * 1) 발생시킬 때 -> 던진다 (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다 (catch)
 */
function runner() {
    try {
        console.log("---try---");
        console.log("Hello");
        // throw new Error("raise error");
        console.log("cch");
    } catch (e) {
        console.log("---catch---");
        console.log(e);
    } finally {
        console.log("---finally---");
    }
}

runner();
