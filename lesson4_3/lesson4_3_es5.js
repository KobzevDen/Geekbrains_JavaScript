'use strict';

function Post (author, text, date) {
    this.author = author;
    this.test = text;
    this.date = date;
}

Post.prototype.edit = function (txt) {
    this.text = txt;
}

function AttachedPost (author, text, date) {
    Post.call(this,author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;


let post1 = new AttachedPost('Denis','Test','24.05.2020');
