import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Dados do post armazenados em um objeto
  const postData = {
    title: "Descobrindo Curitiba",
    author: "Por Ana Paula Freitas",
    date: "28 de fevereiro de 2026",
    imageUrl: "https://mid.curitiba.pr.gov.br/2021/00310996.jpg",
    imageCaption: "Jardim Botânico de Curitiba",
    content: [
      "Conhecendo Curitiba de perto, você descobre que essa é uma cidade que surpreende em cada detalhe. Planejada, arborizada e repleta de atrações culturais.",
      "Entre os principais pontos turísticos estão o Jardim Botânico, a Ópera de Arame e o Museu Oscar Niemeyer, que encantam visitantes de todas as idades."
    ]
  };

  return (
    <div>
      <Header />
      <Navigation />
      
      <div className="container">
        <main>
          <Article 
            title={postData.title}
            author={postData.author}
            date={postData.date}
            content={postData.content}
            imageUrl={postData.imageUrl}
            imageCaption={postData.imageCaption}
          />
        </main>
        
        <Sidebar />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;