
interface ICash<T> {
    [Key: string]: T;
}

const memoize = (fn: any) => {
    let cache: ICash<any> = {};
    return (...args: any[]) => {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
};

export {
    memoize
}