import styles from '../home/Lexiconline.module.scss'

export default function About() {
	return (
		<div className={styles.page}>
			<div className={styles.topBar}>
				<nav className={styles.nav}>
					<a href="#/" className={styles.navItem}>HOME</a>
					<a href="#/about" className={styles.navItem}>ABOUT</a>
					<a href="https://dictionaryapi.dev/" target="_blank" rel="noreferrer" className={styles.navItem}>API</a>
				</nav>
				<div className={styles.navBadge}><span className={styles.badgeIcon}>📚</span></div>
			</div>

			<header className={styles.header}>
				<h1 className={styles.title}>Lexiconline</h1>
				{/* white top card with centered "About Lexiconline" */}
				<div className={styles.searchBox} aria-hidden>
					<div style={{ textAlign: 'center', fontSize: 22, color: '#666' }}>About Lexiconline</div>
				</div>
			</header>

			<main className={styles.container}>
				<article className={styles.card}>
					<p>
						Welcome to Lexiconline—your go-to online dictionary where the love for words meets the joy of learning! Born out of a deep passion for language, Lexiconline is more than just a dictionary; it’s a gateway to a world of endless discovery, where every word has a story to tell.

                    At Lexiconline, we believe that language is a powerful tool that connects us, inspires creativity, and broadens our horizons. Whether you’re a student, a writer, or simply a lover of words, our mission is to provide you with a resource that not only defines words but also sparks curiosity and encourages a deeper understanding of the language we use every day.
					</p>

					<h3>Our Philosophy</h3>
					<p>
						Words are more than just a means of communication; they are the building blocks of knowledge and expression. That’s why Lexiconline is designed to be accessible, user-friendly, and, most importantly, completely free. We believe that learning should be a joyful and lifelong journey, and we’re here to support you every step of the way.
					</p>

					<h3>Why Lexiconline?</h3>
					<ul>
						<li>Completely Free: Lexiconline is a passion project created with the belief that knowledge should be accessible to everyone. There are no fees, no subscriptions—just pure learning, always at your fingertips.</li>
						<li>Easy to Use: Our platform is designed with you in mind. Whether you’re searching for a word’s meaning, synonyms, or usage examples, you’ll find everything you need in one place, with a simple, intuitive interface.</li>
						<li>Explore and Learn: Every lookup is an opportunity to learn something new, expanding your vocabulary and deepening your understanding of language.</li>
					</ul>

					<h3>A special thanks</h3>
					<p>
						Without all the amazing work done at the people who made https://dictionaryapi.dev/
                        none of this would have been possible. Their API is completely free for anyone to develop with and we encourage you to visit their site. So much so, that we have included a direct link to their site in the navigation on this site.
					</p>
				</article>
			</main>

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
