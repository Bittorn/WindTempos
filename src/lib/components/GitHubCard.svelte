<script lang="ts">
	import styles from './GitHubCard.module.scss';
	import githubIcon from '$lib/assets/github-icon.svg'

	const user = 'https://github.com/Bittorn';

	interface GitHubCardInterface {
		name: string;
		description: string;
		license: string;
		repo: string;
	}

	let { name, description, license, repo }: GitHubCardInterface = $props();

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
	<div id={styles.reponame}>{name}</div>
	<p id={styles.description}>{description}</p>
	<div id={styles.additionalinfo}>
		<div id={styles.license}>{license}</div>
	</div>
</div>
