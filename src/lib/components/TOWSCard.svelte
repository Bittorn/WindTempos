<script lang="ts">
	import styles from './TOWSCard.module.scss';
	import githubIcon from '$lib/assets/github-icon.svg'

	let repo = 'https://github.com/Bittorn/TOWS-Client';
	let user = 'https://github.com/Bittorn';

	function openRepo() {
		window.open(repo);
	}

	function openUser(e: Event) {
		window.open(user);
		e.stopPropagation();
	}
</script>

<div
	id={styles.card}
	class={styles.pointercursor}
	onclick={openRepo}
	onkeydown={openRepo}
	role="button"
	tabindex="0"
>
	<!-- title & header part -->
	<!--   * github icon -->
	<div class={styles.icon}>
		<img src={githubIcon} class={styles.github} alt="GitHub Logo" />
	</div>
	<!--   * user section -->
	<div
		id={styles.usersection}
		onclick={openUser}
		onkeydown={openUser}
		role="button"
		tabindex="0"
	>
		<img
			id={styles.owneravatar}
			width="40px"
			class={styles.icon}
			src="https://avatars.githubusercontent.com/u/48916178?v=4"
			alt="User avatar"
		/>
		<div id={styles.owner}>Bittorn</div>
	</div>
	<!--   * repository name -->
	<div id={styles.reponame}>TOWS-Client</div>
	<p id={styles.description}>Client mod for Tales of Wayward Stars</p>
	<div id={styles.topics}></div>
	<div id={styles.additionalinfo}>
		<div id={styles.license}>Creative Commons Zero v1.0 Universal</div>
	</div>
</div>
