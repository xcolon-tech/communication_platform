export class Chats {
    constructor(
        public id: number,
        public contactName: string,
        public message: string,
        public avatar: string,
        public isNewMessage: boolean
      ) {}
}
