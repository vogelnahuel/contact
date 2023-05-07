export default class Response<T> {
    result: T;

    constructor(response: T) {
        this.result = response;
    }

    public static get<T>(response: T): Response<T> {
        return new Response<T>(response);
    }

    public static create<T>(response: T): Response<T> {
        return new Response<T>(response);
    }

    public static post<T>(response: T): Response<T> {
        return new Response<T>(response);
    }

    public static update<T>(response: T): Response<T> {
        return new Response<T>(response);
    }
}
