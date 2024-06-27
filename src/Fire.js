import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  // Placez ici vos identifiants Firebase (SDK) - Cf. diapos 14 et 15
  apiKey: 'AIzaSyCywFg-XhZ3tmjUAyO6Rm_Slk5-T6CwZZk',
  authDomain: 'blog-a9b2a.firebaseapp.com',
  projectId: 'blog-a9b2a',
  storageBucket: 'blog-a9b2a.appspot.com',
  messagingSenderId: '591024080750',
  appId: '1:591024080750:web:094964566013930ad6237f'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const getArticles = callback => {
  const q = query(collection(db, 'articles'), orderBy('createdAt', 'desc'))
  onSnapshot(q, snapshot => {
    let articles = []
    snapshot.forEach(doc => {
      articles.push({ id: doc.id, ...doc.data() })
    })
    callback(articles)
  })
}

export const addArticle = article => {
  addDoc(collection(db, 'articles'), article)
}

export const updateArticle = article => {
  updateDoc(doc(db, 'articles', article.id), article)
}

export const deleteArticle = article => {
  deleteDoc(doc(db, 'articles', article.id))
}
