export interface Quotes {
    quotes: Quote[];
    total:  number;
    skip:   number;
    limit:  number;
}

export interface Quote {
    id:     number;
    quote:  string;
    author: string;
}

// Converts JSON types to/from your types
export class Convert {
    public static toQuotes(json: any): Quotes {
        return json;
    }

    public static quotesToJson(value: Quotes): any {
        return value;
    }
}
