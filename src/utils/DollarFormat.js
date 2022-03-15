// format number into '$xx.xx' returns string
export function DollarFormat( number = 0 ) {
    const notation = Number.parseFloat( number / 100 ).toFixed(2);
    return '$' + notation;
}
