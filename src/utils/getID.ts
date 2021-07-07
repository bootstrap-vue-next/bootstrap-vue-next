export default function(): string {
    return `__BVID__${Math.random().toString().replace('.', '')}`;
}