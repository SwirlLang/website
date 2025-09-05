<script lang="ts">
    import type { PageProps } from './$types';
    import 'iconify-icon';
    import Platform from '$lib/Platform.svelte';

    let { data }: PageProps = $props();
</script>

<main class="mt-24 flex flex-col max-sm:mb-8">
    <h1 class="text-2xl font-medium text-[#bbbbbb] md:text-3xl">Download Swirl</h1>
    <div class="version mt-4 flex items-end gap-4">
        <span class="text-5xl/[1.7] font-bold">v</span>
        <span class="text-[10rem] font-bold leading-none">{data.version}</span>
        {#if data.build}
            <span class="build mt-3 self-start rounded-md bg-[#d8a4ff] px-2 text-black md:mt-5"
                >{data.build}</span>
        {/if}
    </div>
    <div class="platforms mt-12 min-h-96 w-full">
        <div class="flex flex-wrap justify-evenly gap-10 px-8">
            <Platform platform="Windows" icon="uil:microsoft" downloads={data.downloads?.windows} />
            <Platform platform="Linux" icon="uil:linux" downloads={data.downloads?.linux} />
            <Platform platform="MacOS" icon="uil:apple" downloads={data.downloads?.macos} />
        </div>
        <p class="mt-12 text-center text-lg text-[#bbbbbb]">
            Need help? Check out the <a href="/docs/installation" class="text-[#d8a4ff] hover:underline"
                >installation instructions.</a
            >
        </p>
    </div>
</main>

<style lang="scss">
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        .version {
            & > :nth-child(1) {
                font-size: clamp(2.5rem, 10vw, 3rem);
            }
            & > :nth-child(2) {
                font-size: clamp(5.5rem, 15vw, 8rem);
                text-shadow: 0px 0px 60px #d8a4ff67;
            }
            & > :nth-child(3) {
                font-size: clamp(0.5rem, 10vw, 1rem);
            }
        }
    }
</style>
