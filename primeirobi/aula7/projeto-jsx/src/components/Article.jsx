function Article({ title, author, date, content, imageUrl, imageCaption }) {
  return (
    <article>
      <h2>{title}</h2>
      <time dateTime={date}>{author} - {date}</time>

      <figure>
        <img src={imageUrl} alt={imageCaption} />
        <figcaption>{imageCaption}</figcaption>
      </figure>

      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
}

export default Article;