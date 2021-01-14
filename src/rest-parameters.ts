export {}
const reducer: (accumulator: number, currentValue: number) => number = (
    accumulator: number, 
    currentValue: number
    ) => {
    //console.log({ accumulator, currentValue });
    return accumulator + currentValue;    
}

// rest parameter可変パラメーター
const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
