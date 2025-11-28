export function transformToId(value: string): string {
    return value
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/ñ/g, 'n')
        .replace(/Ñ/g, 'N')
        .replace(/'/g, '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[\s.]+/g, '-')
        .replace(/-+/g, '-')
}
