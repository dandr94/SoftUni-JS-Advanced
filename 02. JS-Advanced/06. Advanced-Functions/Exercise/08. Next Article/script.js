function getArticleGenerator(articles) {
  return () => {
    if (articles.length > 0) {
      const content = document.getElementById("content");
      const article = document.createElement("article");
      let currentElement = articles.shift();
      article.innerText = currentElement;
      content.appendChild(article);
    }
  };
}
