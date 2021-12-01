import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Auth } from './redux/Auth'

import Login from './Modules/public/pages/Login/Login'
import Finregistro from './Modules/public/pages/Login/Finregistro'
import Postlogin from './Modules/public/pages/Login/Postlogin'
import UnseAutenticacion from './Modules/public/pages/Login/UnseAutenticacion'

import Tablero from './Modules/Admin/pages/Tablero'

import './App.css'
import { useEffect } from 'react'


function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(state => state.auth.isAuth, shallowEqual)
	const checkIsAuth = async () => await dispatch(Auth.checkAuthAsync())

	useEffect(() => { checkIsAuth() }, [])
	return <>{isAuth ? <Tablero /> : <Login/>}</>
}

export default App;
