import logo from './logo.svg';
import './App.css';
import { FilteredList } from './List';
import List from './List';
import Alert from './Alert';

function Header(props){
  console.log('props', props);
  return (
  <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>);
}

function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1">HTML</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article(props){
  return (
    <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  );
}

function App() {
  const topics = [
   {id:1, title:'html', body:'html is ...'},
   {id:2, title:'css', body:'css is ...'},
   {id:3, title:'JavaScript', body:'JavaScript is ...'}   
  ]
  
  return (

    <div>
      <List/>
      <FilteredList/>
      <Alert/>
    </div>
  );
}

export default App;
