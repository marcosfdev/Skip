<script>
  import { isAuthenticated, user } from '$lib/stores/authStore';
  import { signOut } from '$lib/auth.js';

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function handleSignOut() {
    signOut();
    isDropdownOpen = false;
  }
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="-ml-2 mr-2 flex items-center">
          <!-- Logo section -->
          <a href="/" class="text-lg font-semibold text-white">
            MyLogo
          </a>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6">
          {#if !$isAuthenticated}
            <a href="/signin" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign in</a>
            <a href="/signup" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</a>
          {:else}
            <div class="relative">
              <button on:click={toggleDropdown} class="text-white focus:outline-none">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="User avatar">
              </button>
              {#if isDropdownOpen}
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <span class="block px-4 py-2 text-sm text-gray-700" role="menuitem">{$user.username}</span>
                  <a href="/" on:click={handleSignOut} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
