import {memoize} from "./helpers";

interface Dictionary<T> {
    [Key: string]: T;
}

const char_to_int = memoize((c: string) => {
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
});

export class RomanNumerals{

    static toRoman(payload: number): string {
        let roman: Dictionary<number> = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };

        let result = '';
        while(payload>0){
            for(let a in roman){
                if(roman[a]<=payload){ result += a; payload-=roman[a]; break;}
            }
        }
        return result;
    }

    static fromRoman(payload: string): number {
        let num = char_to_int(payload.charAt(0));
        let pre, curr;

        for(let i = 1; i < payload.length; i++){
            curr = char_to_int(payload.charAt(i));
            pre = char_to_int(payload.charAt(i-1));
            if(curr <= pre){
                num += curr;
            } else {
                num = num - pre*2 + curr;
            }
        }

        return num;
    }

}