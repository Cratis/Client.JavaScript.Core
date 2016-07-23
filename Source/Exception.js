export class Exception
{
    static get message() {
        return "";
    }

    static throw(messageParameters) {
        throw this.message;
    }
}