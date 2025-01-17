<script lang="ts">
	import { page } from '$app/state';
</script>

<main class="flex items-center justify-center my-64">
    <h1 class="text-5xl font-bold">{page.status}: {page.error?.message}</h1>
</main>