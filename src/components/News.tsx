import { useEffect, useState } from 'react';
import sanitizeHtml from "sanitize-html";
import './News.css';

interface Article {
  title: string;
  author: string;
  message: string;
  created_at: number;
}

export function News() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then(setArticles)
  }, []);

  return (
      <div>
        {articles.map((article: Article) => (
          <div key={article.title}>
            <h2>{article.title}</h2>
            <div className="news-message" dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.message) }} />
          </div>
        ))}
      </div>
    )
}
