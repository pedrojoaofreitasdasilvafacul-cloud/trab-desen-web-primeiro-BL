function Sidebar() {
  const relatedPosts = [
    { id: 1, title: "🌴 Explorando Florianópolis", url: "#" },
    { id: 2, title: "🏙️ Conhecendo o Rio de Janeiro", url: "#" },
    { id: 3, title: "💦 Aventura em Foz do Iguaçu", url: "#" }
  ];

  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {relatedPosts.map(post => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;