import { Input } from "antd";
const { TextArea } = Input;
export default function ArticleForm({title, content, handleChange}) {
  return (
    <form>
      <label htmlFor="title">Titre de l'article</label>
      <Input
        type="text"
        name="title"
        id="title"
        placeholder="Titre de l'article"
        required
        maxLength={200}
        minLength={5}
        value={title}
        onChange={handleChange}
      />
      <label htmlFor="content">Contenu de l'article</label>
      <TextArea
        name="content"
        id="content"
        placeholder="Contenu de l'article"
        required
        minLength={10}
        value={content}
        onChange={handleChange}
      />
    </form>
  );
}
