declare module 'prompt-sync' {
    interface Option {
        sigint?: boolean;
        eot?: boolean;
        autocomplete?: (str: string) => string[];
    }

    interface PromptFunction {
        (prompt?: string): string;
        (opts?: Option): string;
    }

    function promptSync(config?: Option): PromptFunction;
    export = promptSync;
} 