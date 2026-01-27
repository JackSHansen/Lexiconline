import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Lexiconline.module.scss'
import headerImg from '../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg' // placer dit billede her

type ApiDefinition = {
	definition: string
	example?: string
	synonyms?: string[]
}

type ApiMeaning = {
	partOfSpeech: string
	definitions: ApiDefinition[]
	synonyms?: string[]
}

type ApiResult = {
	word: string
	phonetics?: { text?: string; audio?: string }[]
	meanings: ApiMeaning[]
}

export default function Lexiconline() {
	const [query, setQuery] = useState('')
	const [result, setResult] = useState<ApiResult | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	async function handleSearch(e?: FormEvent) {
		e?.preventDefault()
		if (!query.trim()) return
		setLoading(true)
		setError(null)
		setResult(null)
		try {
			const res = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`
			)
			if (!res.ok) throw new Error('Word not found')
			const data = (await res.json()) as ApiResult[]
			if (!Array.isArray(data) || data.length === 0) throw new Error('No data')
			setResult(data[0])
		} catch (err: any) {
			setError(err.message || 'Error')
		} finally {
			setLoading(false)
		}
	}

	function playAudio(url?: string) {
		if (!url) return
		const a = new Audio(url)
		a.play().catch(() => {})
	}

	return (
		<div className={styles.page}>
			<header className={styles.header} style={{ backgroundImage: `url(${headerImg})` }}>
				<nav className={styles.nav}>
					<a href="#/" className={styles.navItem}>HOME</a>
					<a href="#/about" className={styles.navItem}>ABOUT</a>
					<a
						href="https://dictionaryapi.dev/"
						target="_blank"
						rel="noreferrer"
						className={styles.navItem}
					>
						API
					</a>
				</nav>

				<div className={styles.brand}>
					<h1 className={styles.title}>Lexiconline</h1>
				</div>

				<form className={styles.searchBox} onSubmit={handleSearch}>
					<label className={styles.searchLabel}>Enter a word to search for</label>
					<div className={styles.searchRow}>
						<input
							className={styles.searchInput}
							placeholder="Enter word..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<button className={styles.searchBtn} type="submit" disabled={loading}>
							{loading ? 'Searching...' : 'Search'}
						</button>
					</div>
				</form>
			</header>

			<main className={styles.container}>
				{error && <div className={styles.error}>{error}</div>}

				{result ? (
					<article className={styles.card}>
						<header className={styles.wordHeader}>
							<div className={styles.wordLeft}>
								{result.phonetics?.[0]?.audio && (
									<button
										className={styles.audioBtn}
										onClick={() => playAudio(result.phonetics?.[0]?.audio)}
										aria-label="Play audio"
									>
										🔊
									</button>
								)}
								<h2 className={styles.word}>{result.word}</h2>
							</div>
							{result.phonetics?.[0]?.text && <div className={styles.phonetic}>{result.phonetics[0].text}</div>}
						</header>

						{result.meanings.map((m, i) => (
							<section key={i} className={styles.meaning}>
								<h3 className={styles.partOfSpeech}>{m.partOfSpeech}</h3>
								<ul className={styles.defList}>
									{m.definitions.map((d, idx) => (
										<li key={idx} className={styles.definition}>
											<p>{d.definition}</p>
											{d.example && <p className={styles.example}>Example: {d.example}</p>}
										</li>
									))}
								</ul>
								{(m.synonyms && m.synonyms.length > 0) && (
									<div className={styles.synonyms}>
										<strong>Synonyms:</strong> {m.synonyms.join(', ')}
									</div>
								)}
							</section>
						))}
					</article>
				) : (
					<div className={styles.placeholder}>
						<p>Search for a word to see dictionary results.</p>
					</div>
				)}
			</main>

			<footer className={styles.footer}>
				<div>Address: Somestreet 232, Luxemburg</div>
				<div>Contact: somemail@mail.com</div>
			</footer>
		</div>
	)
}
