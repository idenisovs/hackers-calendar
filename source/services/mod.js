export default function mod(value,  minLen = 2, radix = 16) {
    const result = value.toString(radix);

    if (result.length >= minLen) {
        return result;
    }

    const missing = minLen - result.length;

    const prefix = new Array(missing).fill('0').join('');

    return prefix + result;
}
