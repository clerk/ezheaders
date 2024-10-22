export type AwaitedProp<T extends (...args: any) => any, P extends string> = Awaited<ReturnType<T>>[P];
