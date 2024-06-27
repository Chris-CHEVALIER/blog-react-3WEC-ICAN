import { Modal } from 'antd'
import ArticleForm from './ArticleForm'
import AddButton from './AddButton'
import { useState } from 'react'
import { addArticle, updateArticle } from '../Fire'
export default function ArticleModal (props) {
  const [title, setTitle] = useState(
    props.articleToEdit ? props.articleToEdit.title : ''
  )
  const [content, setContent] = useState(
    props.articleToEdit ? props.articleToEdit.content : ''
  )

  const handleSubmit = () => {
    let article = {
      title,
      content,
      createdAt: new Date(),
      comments: []
    }
    if (props.articleToEdit) {
      article.id = props.articleToEdit.id
      article.comments = props.articleToEdit.comments
      article.createdAt = props.articleToEdit.createdAt
      updateArticle(article)
    } else {
      addArticle(article)
    }
    props.onClose()
  }

  const onChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'content':
        setContent(e.target.value)
        break
    }
  }

  return (
    <Modal
      title={props.modalTitle ?? 'Titre par défaut'}
      open={props.isModalOpen}
      onCancel={props.onClose}
      footer={
        <AddButton
          disabled={title.length < 5 || content.length < 10}
          handleClick={handleSubmit}
        >
          Valider
        </AddButton>
      }
    >
      <ArticleForm title={title} content={content} handleChange={onChange} />
    </Modal>
  )
}
