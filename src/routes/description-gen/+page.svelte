
<script lang="ts">
  import Description from '$lib/description.svelte'
  import Extra from '$lib/extra-description.svelte'

  import { flip } from 'svelte/animate'
  import { dndzone } from 'svelte-dnd-action'

  const flipDurationMs = 100;

  interface ListItem {
    id: number
    value: string
  }

  let items: ListItem[] = [
    {
      id:1,
      value: "Feature, Value"
    },
    {
      id:2,
      value: "Feature, Value"
    }
  ]

  const handleConsider = (evt : CustomEvent<DndEvent<ListItem>>) => {
    console.log("consider")
    items = evt.detail.items;
  }

  const handleFinalize = (evt : CustomEvent<DndEvent<ListItem>>) => {
    console.log("finalize")
    items = evt.detail.items;
  }
</script>

<section class="flex flex-wrap">

      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col gap-10 w-full" >
        <div class="mx-auto text-center w-full">
          <h1 class="text-3xl font-bold lg:text-4xl">Product Description Generator</h1>
        </div>
      </div>

      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col gap-10 flex-1" >

          <input type="text" class="input variant-form-material placeholder:text-primary-400" placeholder="Product name"/>

          <Description />

          <div class="feature-list" 
          use:dndzone="{{ items: items, flipDurationMs: flipDurationMs, dropTargetStyle:{} }}"
          on:consider="{handleConsider}"
          on:finalize="{handleFinalize}"
          >

            {#each items as item (item.id)}
              <div class="card card-hover w-96 my-4" animate:flip="{{ duration:flipDurationMs }}">
                <header class="card-header">
                  <span>{ item.value }</span>
                </header>
              </div>
            {/each}

          </div>

          <div class="space-y-2 mt-10">
            <label class="flex items-center space-x-2">
              <input class="checkbox" type="checkbox" checked />
              <p>Add tip/suggestion for Supa Rug Pad Grip</p>
            </label>
            <label class="flex items-center space-x-2">
              <input class="checkbox" type="checkbox" checked />
              <p>Add warning for color variation due to monitor setting</p>
            </label>
          </div>

          <Extra />

          <button type="button" class="btn variant-filled">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code-2"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m9 18 3-3-3-3"/><path d="m5 12-3 3 3 3"/></svg>
            </span>
            <span>Generate</span>
          </button>
      </div>
      <div class="flex-1"></div>
</section>
    