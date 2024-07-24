import './App.css';
// import { ThemeProvider } from 'styled-components';
// import theme from './style/theme';
// import StyledComponent01 from './style/basic/StyledComponent01';
// import GlobalStyle from './style/global';
// import BasicContainer from './style/basic/BasicContainer';
// import FontAwesome from './style/fontAwesome/FontAwesome';
// import CharContainer from './context/basic/CharContainer';
// import ParentContainer from './context/normal/ParentContainer';
// import AnimalsContainer from './context/expert/AnimalsContainer';
// import FoodContainer from './ref/expert/FoodContainer';
import CountContainer from './pages/count/CountContainer';
// import FontContainer from './pages/font/FontContainer';
// import { Route, RouterProvider, Routes } from 'react-router-dom';
// import Main from './pages/main/Main';
// import Intro from './pages/intro/Intro';
// import Job from './pages/job/Job';
// import LifeCycleContainer from './LifeCycle/class/LifeCycleContainer';

// import router from './routes/router';




function App() {
  return (

    // // 자식 컴포넌트들이 themeProvider로부터 theme를 제공 받을 수 있음.(theme파일도 import)
    // <ThemeProvider theme={theme}>
    //   {/* <div>
    //     <StyledComponent01 />
    //     <GlobalStyle />
    //   </div> */}
    //   {/* <BasicContainer />   */}
    //   {/* BasicContainer의 BasicButton의 Button의 variant가 theme.PALETTE.background["gray"]를 갖다 쓰기에 ThemeProvider로 감싸줘야함 */}
    //   <FontAwesome />
    // </ThemeProvider>
    // <CharContainer />
    // <ParentContainer />
    // <AnimalsContainer />
    <CountContainer />
    // <FontContainer />
    // <>
    //   <Routes>
    //     <Route path='/' element={<Main />} />
    //     <Route path='/intro' element={<Intro />} />
    //     <Route path='/job' element={<Job/>}>
    //       <Route path=':title' element={<Job />} />
    //     </Route>
    //   </Routes>
    // </>
    // <LifeCycleContainer />
    // <>
    //   <RouterProvider  router={router}/>
    // </>


  )
}

export default App;