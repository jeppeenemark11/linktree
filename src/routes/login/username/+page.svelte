<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db, user, userData } from "$lib/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";

  let username = "";
  let loading = false;
  let isAvailable = false;

  let debounceTimer: NodeJS.Timeout;

  async function checkAvailability() {
    clearTimeout(debounceTimer);
    isAvailable = false;
    loading = true;

    debounceTimer = setTimeout(async () => {
      const ref = doc(db, "usernames", username);
      const exists = getDoc(ref).then((doc) => (isAvailable = !doc.exists()));
      console.log(exists);

      isAvailable = !exists;
      loading = false;
    }, 500);
  }

  async function confirmUsername() {
    const batch = writeBatch(db);
    batch.set(doc(db, "usernames", username), { uid: $user?.uid });
    batch.set(doc(db, "users", $user!.uid), {
      username,
      PhotoURL: $user?.photoURL ?? null,
      published: true,
      bio: "",
      links: [],
    });

    await batch.commit();

    username = "";
    isAvailable = false;
  }

  const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  $: isValid =
    username?.length > 2 && username?.length < 16 && re.test(username);
  $: isTouched = username?.length > 0;
  $: isTaken = isValid && !isAvailable && !loading;
</script>

<AuthCheck>
  {#if $userData}
    {#if $userData.username}
      <h3>Your username is {$userData.username}</h3>
      <p>(username cannot be changed)</p>
      {/if}
    {:else}
      <h2>username</h2>
      <form class="w-2/5" on:submit|preventDefault={confirmUsername}>
        <input
          type="text"
          placeholder="Username"
          class="input w-full"
          bind:value={username}
          on:input={checkAvailability}
          class:input-error={!isValid && isTouched}
          class:input-warning={isTaken}
          class:input-success={!loading && isAvailable && isValid}
        />
        <div class="my-4 min-h-16 px-8 w-full">
          {#if loading}
            <p class="text-secondary">Checking availability</p>
          {/if}
          {#if !isValid && isTouched}
            <p class="text-error text-sm">
              must be 3-16 characters long, alphanumeric only
            </p>
          {/if}
          {#if isValid && !isAvailable && !loading}
            <p class="text-error text-sm">{username} is already taken</p>
          {/if}

          {#if isAvailable && isValid && !loading}
            <button class="btn btn-success">
              Confirm username @{username}</button
            >
          {/if}
        </div>
      </form>
    
  {/if}
</AuthCheck>
