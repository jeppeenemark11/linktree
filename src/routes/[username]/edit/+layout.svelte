<script lang="ts">
  import "../../../app.css";
  import { page } from "$app/stores";
  import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
  import type { PageData } from "./$types";
  import { userData } from "$lib/firebase";
</script>

<nav class="flex justify-center my-6">
  <ul class="steps">
    <a href="/login" class="step step-primary">Register</a>

    <a
      href="/login/username"
      class="step"
      class:step-primary={$page.route.id?.match(/username|photo/g)}>plan</a
    >

    <a
      href="/login/photo"
      class="step"
      class:step-primary={$page.route.id?.includes("photo") ||
        $page.route.id?.includes("bio") ||
        $page.route.id?.includes("edit")}
    >
      Photo
    </a>

    <a
      href="/{$userData?.username}/bio"
      class="step"
      class:step-primary={$page.route.id?.includes("bio") ||
        $page.route.id?.includes("edit")}>Bio</a
    >
    <a
      href="/{$userData?.username}/edit"
      class="step"
      class:step-primary={$page.route.id?.includes("edit")}>Links</a
    >
    <a href="/{$userData?.username}" class="step">My Profile</a>
  </ul>
</nav>

<AnimatedRoute>
  <main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
    <div class="card-body items-center text-center">
      <slot />
    </div>
  </main>
</AnimatedRoute>
