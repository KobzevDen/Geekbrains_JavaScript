'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(txt) {
        this.text = txt;
    }
}

class AttachedPost extends Post {
    constructor (author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
}


let post1 = new AttachedPost('Denis','Test','24.05.2020');