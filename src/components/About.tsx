import styles from './About.module.scss'

export default function About() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h2>About Lexiconline</h2>
			</header>
			<main className={styles.container}>
				<div className={styles.card}>
					<p>
						Dette er en simpel about-side for Lexiconline. Ordbogsdata hentes fra
						https://api.dictionaryapi.dev/api/v2/entries/en/&lt;word&gt;
					</p>
				</div>
			</main>
		</div>
	)
}
