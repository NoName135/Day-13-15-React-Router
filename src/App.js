import './App.css';
import { HashRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';

const Logout = () => {
  // useNavigate() 用在路由的切換
  let navigate = useNavigate();
  return (
    <button onClick = {() => {
      // replace: true; 點擊上一頁不會回去
      navigate('/login', { replace: true});
    }}>登出
    </button>
  )
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout/>
    </>
  )
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      {/* <BrowserRouter>頁面路徑不會有「#」字，例如： /about。路由會需要後端協助處理，否則在 refresh 後就會出現 404，因為實際上 build 出來是沒有 about.html（只有 index.html）</BrowserRouter> */}
      {/* <HashRouter>頁面路徑最前面會有個「#」，例如：/#/about。這代表路由會由前端進行模擬，像是部署在 GitHub Pages上就建議採用此模式。</HashRouter> */}
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<p>這是首頁</p>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="todo" element={<Todo />} />
          {/* 不存在的路由，404 Not Found 頁面 */}
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
