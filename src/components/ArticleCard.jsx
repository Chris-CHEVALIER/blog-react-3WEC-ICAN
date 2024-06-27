import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Card, Popconfirm } from 'antd'
import { deleteArticle } from '../Fire'

export default function ArticleCard ({ article, handleEdit }) {
  return (
    <Card
      title={article.title}
      extra={article.createdAt.toDate().toDateString()}
      style={{ width: 300 }}
      actions={[
        <EditOutlined onClick={handleEdit} key='edit' className='edit-icon' />,
        <Popconfirm
          title="Supprimer l'article"
          description="Êtes-vous sûr.e de vouloir supprimer l'article ?"
          onConfirm={() => deleteArticle(article)}
          onCancel={() => {}}
          okText='Oui'
          cancelText='Non'
          key='delete'
        >
          <DeleteOutlined className='delete-icon' />
        </Popconfirm>
      ]}
    >
      <p>{article.content}</p>
    </Card>
  )
}
