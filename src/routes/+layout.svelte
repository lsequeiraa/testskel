<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import '../app.css';
	import Header from './header.svelte';
	import Sidebar from './sidebar.svelte';
</script>

<ParaglideJS {i18n}>
	<div class="grid grid-rows-[auto_1fr_auto]">
		<!-- Header -->
		<header class="sticky top-0 z-50">
			<Header />
		</header>
		<!-- Grid Column -->
		<div class="grid grid-cols-[auto_1fr]">
			<!-- Sidebar (Left) -->
			<aside class="sticky top-[56px] h-[calc(100dvh-56px)]"><Sidebar /></aside>
			<!-- Main -->
			<main class="overflow-hidden">
				<slot></slot>
			</main>
			<!-- Sidebar (Right) -->
			<aside class="hidden bg-yellow-500 p-4">(sidebar)</aside>
		</div>
		<!-- Footer -->
		<footer class="hidden bg-blue-500 p-4">(footer)</footer>
	</div>
</ParaglideJS>
