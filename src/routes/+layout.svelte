<script lang='ts'>
import '../theme.postcss';
import '@skeletonlabs/skeleton/styles/skeleton.css';
import '../app.postcss';

import Footer from '../lib/components/+footer.svelte';
import Sidebar from '../lib/components/+sidebar.svelte';

import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
		
</script>


<div class="wrapper flex flex-wrap">
	<div class="sideBarWrap h-fit w-full md:w-2/6 lg:w-1/6">
		<Sidebar />
	</div>
	<main class="p-4 h-fit w-full md:w-4/6 lg:w-5/6">
		<div class="p-2">
			<slot />
		</div>
	</main>
	<div class="footerWrap w-full">
		<Footer />
	</div>
</div>