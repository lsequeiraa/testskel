<script lang="ts">
	import { NavRail, NavTile } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFolder from 'lucide-svelte/icons/folder';
	import IconImage from 'lucide-svelte/icons/image';
	import IconMusic from 'lucide-svelte/icons/music';
	import IconVideo from 'lucide-svelte/icons/video';
	import IconGames from 'lucide-svelte/icons/gamepad';
	import IconSettings from 'lucide-svelte/icons/settings';

	let hrefExample = '#';

	let isHovered = false;
</script>

<div
	class="h-full w-full border-[1px] border-surface-900/80"
	onmouseover={() => (isHovered = true)}
	onmouseout={() => (isHovered = false)}
	onfocus={() => (isHovered = true)}
	onblur={() => (isHovered = false)}
	aria-expanded={isHovered}
>
	<NavRail expanded={isHovered} background="bg-surface-900/80">
		{#snippet tiles()}
			<NavTile id="0" labelExpanded="Browse Files" href={hrefExample}>
				<IconFolder />
			</NavTile>
			<NavTile id="1" labelExpanded="Browse Images" href={hrefExample}>
				<IconImage />
			</NavTile>
			<NavTile id="2" labelExpanded="Browse Music" href={hrefExample}>
				<IconMusic />
			</NavTile>
			<NavTile id="2" labelExpanded="Browse Videos" href={hrefExample}>
				<IconVideo />
			</NavTile>
			<NavTile id="2" labelExpanded="Browse Games" href={hrefExample}>
				<IconGames />
			</NavTile>
		{/snippet}
		{#snippet footer()}
			<NavTile labelExpanded="Settings" href="/settings" title="Settings"><IconSettings /></NavTile>
		{/snippet}
	</NavRail>
</div>
