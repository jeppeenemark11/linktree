<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { user, userData, storage, db } from "$lib/firebase";
  import { doc, updateDoc } from "firebase/firestore";
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

  let previewURL: string;
  let uploading = false;

  async function upload(e: any) {
    uploading = true;
    const file = e.target.files[0];
    previewURL = URL.createObjectURL(file);
    const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
    const result = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(result.ref);

    await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
    uploading = false;
  }
</script>

<AuthCheck>
  <h2 class="card-title">Upload a Profile Picture</h2>

  <form class="max-w-screen-md w-full">
    <div class="form control w-full max-w-xs my-10 mx-auto text-center">
      <img
        src={previewURL ??
          $userData?.photoURL ??
          "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"}
        alt="photoURL"
        width="256"
        height="256"
        class="profile-image mx-auto"
      />
      <label for="photoURL" class="label">
        <span class="label-text">Pick a File</span>
      </label>
      <input
        on:change={upload}
        name="photoURL"
        type="file"
        class="file-input file-input-bordered w-full max-w-xs"
        accept="image/png, image/jpeg, image/gif, image/webp"
      />
      {#if uploading}
        <p>Uploading...</p>
        <progress class="progress progress-info w-56 mt-6" />
      {/if}
    </div>
  </form>
</AuthCheck>

<style>
  .profile-image {
    width: 256px;
    height: 256px;
    border-radius: 50%; /* makes the image circular */
    object-fit: cover; /* maintains aspect ratio and covers the container */
  }
</style>
