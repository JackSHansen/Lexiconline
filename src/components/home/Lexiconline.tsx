import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Lexiconline.module.scss'
import headerImg from '../../assets/jaredd-craig-HH4WBGNyltc-unsplash.jpg'

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
			{/* top green bar with centered circular badge */}
			<div className={styles.topBar}>
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
				<div className={styles.navBadge}><span className={styles.badgeIcon}>📚</span></div>
			</div>

			{/* header with background image and script title */}
			<header className={styles.header} style={{ backgroundImage: `url(${headerImg})` }}>
				<h1 className={styles.title}>Lexiconline</h1>

				{/* search card overlapping header */}
				<form className={styles.searchBox} onSubmit={handleSearch}>
					<div className={styles.searchPrompt}>Enter a word to search for</div>
					<div className={styles.searchRow}>
						<input
							className={styles.searchInput}
							placeholder="Farmer"
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

						{/* meanings formatted into full-width sections similar to image */}
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

			{/* footer with three columns and small badge on right like image */}
			<footer className={styles.footer}>
				<div className={styles.footerCols}>
					<div>
						<strong>Address:</strong>
						<div>Somestreet 232</div>
						<div>Luxemburg</div>
					</div>
					<div>
						<strong>Contact:</strong>
						<div>Email: somemail@mail.com</div>
						<div>Phone: 44332343</div>
					</div>
					<div>
						<strong>With special thanks to</strong>
						<div><a href="https://dictionaryapi.dev/">https://dictionaryapi.dev/</a></div>
						<div>For the awesome API</div>
					</div>
				</div>
				<div className={styles.footerBrand}>
					<div className={styles.footerBadge}>📚</div>
					<div className={styles.brandText}>Lexiconline</div>
				</div>
			</footer>
		</div>
	)
}
