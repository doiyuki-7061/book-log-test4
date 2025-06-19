import { useState } from 'react';

function App() {

  const [title,setTitle] = useState('');
  const [review,setReview] = useState('')
  const [books,setBooks] = useState([]);
  
                // ここからメソッド定義
  
    // handleClick = ①入力欄value{title}{review}を受け取る。②newBookに代入。③booksにセット
  const handleClick = () => {
    if (title === '')
      return;

    const newBook = {title :title,review : review};
    setBooks([...books,newBook])
    setTitle('');
    setReview('');
  }

  // handleDelete = ①indexをdeleteIndexとして受け取る。②booksのindexとfilterで比較。③該当index以外を残してnewBookに代入。④booksにセット
  const handleDelete = (deleteIndex) => {
    const newBook = books.filter((_,index) => index !== deleteIndex);
    setBooks(newBook);
  }
                //  ここまでメソッド定義

  return(
    <div style={{padding:'2rem'}}>
      <h1>読書記録</h1>

      {/* 本のタイトルの入力欄 */}
      {/* value(入力内容をtitleにセット) */}
      <input
      type = "text" 
      value={title} 
      placeholder="本のタイトルを入力"
      onChange={(e) => setTitle(e.target.value)}    
      />

      <br />

     {/* 本の感想の入力欄 */}
      {/* value(入力内容をreviewにセット) */}
      <textarea
      placeholder="感想を入力"
      value={review}
      onChange = {(e) => setReview(e.target.value)}   
      rows={6}    
      cols={50}   
      />

    <br/>

     <button onClick ={handleClick}>追加</button>

   
     {/* セットしたbooksをリスト化 */}
     {/* mapでbooksを展開。取得したindexをkeyとして使用 */}
     {/* handleDeleteでindexを渡して削除できるボタンを追加 */}
     <ul>
      {books.map((book,index) => (
        <li key={index}>
          <strong>{book.title}</strong>
          <br />
          <em>{book.review}</em>
          <br />
          <button onClick = {() => handleDelete(index)}>削除</button>
          </li>
      ))}
     </ul>
    </div>
  )
}

export default App;