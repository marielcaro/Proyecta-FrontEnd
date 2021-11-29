import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Auth } from './redux/Auth'

import Login from './modules/public/pages/Login/Login'
import Tablero from './modules/admin/pages/Tablero'
import './App.css'
import { useEffect } from 'react'


function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(state => state.auth.isAuth, shallowEqual)
	const checkIsAuth = async () => await dispatch(Auth.checkAuthAsync())

	useEffect(() => { checkIsAuth() }, [])
	return <>{isAuth ? <Tablero /> : <Login />}</>
}

export default App;
