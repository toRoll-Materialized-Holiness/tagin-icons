declare module "*.png" {
    const value: string;
    export default value;
}

declare module "@toroll/tagin-icons" {
    export const icons: Record<string, string>;
    const defaultExport: Record<string, string>;
    export default defaultExport;

}
