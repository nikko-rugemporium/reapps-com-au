<script lang='ts'>
import '../theme.postcss';
import '@skeletonlabs/skeleton/styles/skeleton.css';
import '../app.postcss';

import Footer from '../lib/components/+footer.svelte';
import Sidebar from '../lib/components/+sidebar.svelte';
						
</script>


<Sidebar />
<main class="p-4 sm:ml-64">
	<div class="container mx-auto p-2">
		<slot />
	</div>
</main>
<Footer />
