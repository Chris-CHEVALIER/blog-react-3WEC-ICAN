import reactLogo from './assets/react.svg'
import './App.css'
import AddButton from './components/AddButton'
import { PlusOutlined } from '@ant-design/icons'
import ArticleModal from './components/ArticleModal'
import { useEffect, useState } from 'react'
import { getArticles } from './Fire'
import { Spin } from 'antd'
import ArticleCard from './components/ArticleCard'

function App () {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedArticle, setSelectedArticle] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      getArticles(articles => {
        setArticles(articles)
        setLoading(false)
      })
    }, 1000)
  }, [])

  const handleCreate = () => {
    setIsModalVisible(true)
    setSelectedArticle(null)
  }

  const handleEdit = article => {
    setIsModalVisible(true)
    setSelectedArticle(article)
  }

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Bienvenue sur Virtuo</h1>
      <div
        style={{
          display: 'flex',
          gap: '25px',
          justifyContent: 'center',
          marginBottom: '25px',
          flexWrap: 'wrap'
        }}
      >
        {loading && <Spin />}
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            article={article}
            handleEdit={() => handleEdit(article)}
          />
        ))}
      </div>
      <AddButton handleClick={handleCreate} icon={<PlusOutlined />}>
        Ajouter un article
      </AddButton>
      {isModalVisible && (
        <ArticleModal
          isModalOpen={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          articleToEdit={selectedArticle}
        ></ArticleModal>
      )}
    </>
  )
}

export default App
