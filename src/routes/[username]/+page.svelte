<script lang="ts">
  import type { PageData } from "./$types";
  import UserLink from "$lib/components/UserLink.svelte";
  export let data: PageData;
  import { userData } from "$lib/firebase";
</script>

<svelte:head>
  <title>@{data.username} Links</title>
  <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8 mb-10">
  <h1 class="text-7xl text-purple-500 mb-4">@{data.username}</h1>

  <img
    src={data.photoURL ??
      "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"}
    alt="photoURL"
    class="mx-auto profile-image space-x-60"
  />

  <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
  <ul class="list-none">
    {#each data.links as item}
      <li>
        <div style="padding: 10px;">
          <UserLink {...item} />
        </div>
      </li>
    {/each}
  </ul>

  <a href="/{$userData?.username}/edit" class="underline text-purple-600">Edit page</a>
</main>

<style>
  .profile-image {
    width: 256px;
    height: 256px;
    border-radius: 50%; /* makes the image circular */
    object-fit: cover; /* maintains aspect ratio and covers the container */
  }
</style>
