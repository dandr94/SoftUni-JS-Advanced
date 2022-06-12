class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
    this.count = 1;
  }

  get likes() {
    const likes = this._likes.length;

    if (likes == 0) {
      return `${this.title} has 0 likes`;
    } else if (likes == 1) {
      return `${this._likes[0]} likes this story!`;
    }

    return `${this._likes[0]} and ${
      this._likes.slice(1).length
    } others like this story!`;
  }

  like(username) {
    if (username === this.creator) {
      throw new Error("You can't like your own story!");
    }

    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }

    this._likes.push(username);

    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }

    this._likes = this._likes.filter((u) => u != username);

    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    const findComment = this._comments.find((c) => c.id == id);

    if (!findComment || !id) {
      const comment = {
        id: this.count,
        username: username,
        content: content,
        replies: [],
      };
      this.count += 1;
      this._comments.push(comment);

      return `${username} commented on ${this.title}`;
    }
    let replayId = Number(
      findComment.id + "." + (findComment.replies.length + 1)
    );
    const replies = {
      id: replayId,
      username: username,
      content: content,
    };

    findComment.replies.push(replies);

    return "You replied successfully";
  }

  toString(sortingType) {
    let result = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this._likes.length}`,
      "Comments:",
    ];

    if (this._comments.length > 0) {
      let sorted = this.sortIt(this._comments, sortingType);

      sorted.forEach((c) => {
        result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
        if (c.replies) {
          const sortedReplies = this.sortIt(c.replies, sortingType);
          sortedReplies.forEach((r) => {
            result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
          });
        }
      });
    }
    return result.join("\n");
  }

  sortIt(arr, sortType) {
    if (sortType == "asc") {
      return arr.sort((a, b) => a.id - b.id);
    } else if (sortType == "desc") {
      return arr.sort((a, b) => b.id - a.id);
    } else if (sortType == "username") {
      return arr.sort((a, b) => a.username.localeCompare(b.username));
    }
  }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
