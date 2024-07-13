<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import Paperclip from 'lucide-svelte/icons/paperclip';
	import Calendar from 'lucide-svelte/icons/calendar';
	import CircleUser from 'lucide-svelte/icons/circle-user';
	import Menu from 'lucide-svelte/icons/menu';
</script>

<AppBar
	headlineClasses="sm:hidden"
	centerClasses="hidden sm:block"
	background="bg-surface-900/80 backdrop-blur-sm"
>
	{#snippet lead()}
		<div class="block sm:hidden">
			<Menu size={20} />
		</div>
	{/snippet}
	<span>HoYoProfile</span>
	{#snippet trail()}
		<div class="hidden space-x-4 sm:flex">
			<Paperclip size={20} />
			<Calendar size={20} />
			<CircleUser size={20} />
		</div>
		<div class="block sm:hidden">
			<Menu size={20} />
		</div>
	{/snippet}
</AppBar>
