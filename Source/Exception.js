export class Exception
{
    static get message() {
        return "Something went wrong";
    }

    static throw(messageParameters) {
        throw this.message;
    }
}