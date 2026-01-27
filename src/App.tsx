import { useState, useEffect } from 'react'
import Lexiconline from './components/Lexiconline'
import About from './components/About'

export default function App() {
	const getRoute = () => {
		const h = window.location.hash || '#/'
		return h.replace(/^#/, '')
	}

	const [route, setRoute] = useState(getRoute())

	useEffect(() => {
		const onHashChange = () => setRoute(getRoute())
		window.addEventListener('hashchange', onHashChange)
		return () => window.removeEventListener('hashchange', onHashChange)
	}, [])

	if (route === '/about') return <About />
	return <Lexiconline />
}
