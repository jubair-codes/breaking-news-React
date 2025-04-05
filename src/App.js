import './App.css';
import { Button } from 'react-bootstrap';
import News from './component/News/News';
import { useEffect, useState } from 'react';
import TopHeadlines from './component/TopHeadlines/TopHeadlines';
import Header from './component/Header/Header';

function App() {
  const [articles, setArticles] = useState([]);
  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9e59d71e1b2c4ce4b1217da6272d7222';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <Header></Header>
      {
        articles.map(article => <TopHeadlines article={article}></TopHeadlines>)
      }
      <News></News>

    </div>
  );
}

export default App;
