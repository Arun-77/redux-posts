import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';
import ReactDOM from 'react-dom';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  const { isModalOpen } = useSelector((state) => state.modal);

  return (
    <main className="app">
      {isModalOpen &&
        ReactDOM.createPortal(<Modal />, document.getElementById('modal'))}
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
