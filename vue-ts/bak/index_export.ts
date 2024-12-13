// export
export default {
    a: 1
}

export function addExport<T extends number>(a: number, b: number) {
    return a + b
}