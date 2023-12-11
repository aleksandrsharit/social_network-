declare module '*.gif' {
    const value: string;
    export default value;
  }

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}