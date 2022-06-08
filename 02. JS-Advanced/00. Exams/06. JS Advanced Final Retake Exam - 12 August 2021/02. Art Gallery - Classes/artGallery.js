class ArtGallery {
  constructor(creator) {
    creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  findArticle = (n, m) =>
    this.listOfArticles.find(
      (a) => a.articleName === n && a.articleModel === m
    );
  findGuest = (n) => this.guests.find((g) => g.guestName === n);

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (!(articleModel in this.possibleArticles)) {
      throw new Error("This article model is not included in this gallery!");
    }
    const article = this.findArticle(articleName, articleModel);

    if (!article) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    } else {
      article.quantity += quantity;
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    const guest = this.findGuest(guestName);

    if (guest) {
      throw new Error(`${guestName} has already been invited.`);
    }

    let points = 50;

    if (personality === "Vip") {
      points = 500;
    } else if (personality === "Middle") {
      points = 250;
    }

    this.guests.push({ guestName, points, purchaseArticle: 0 });

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    const article = this.findArticle(articleName, articleModel);
    const guest = this.findGuest(guestName);

    if (!article) {
      throw new Error("This article is not found.");
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    if (!guest) {
      return "This guest is not invited.";
    }

    let result = guest.points - this.possibleArticles[articleModel];

    if (result < 0) {
      return "You need to more points to purchase the article.";
    }

    guest.points = result;
    article.quantity -= 1;
    guest.purchaseArticle += 1;

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
  }

  showGalleryInfo(criteria) {
    let result = [];

    if (criteria === "article") {
      result.push("Articles information:");
      this.listOfArticles.forEach((a) => {
        result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`);
      });
    } else if (criteria == "guest") {
      result.push("Guests information:");
      this.guests.forEach((g) => {
        result.push(`${g.guestName} - ${g.purchaseArticle}`);
      });
    }

    return result.join("\n");
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
