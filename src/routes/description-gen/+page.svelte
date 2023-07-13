
<script lang="ts">
  import Description from '$lib/description.svelte'
  import Extra from '$lib/extra-description.svelte'

  import { flip } from 'svelte/animate'
  import { dndzone } from 'svelte-dnd-action'

  const flipDurationMs = 100;

  interface ListItem {
    id: number
    feature: string
    value: string
  }

  let items: ListItem[] = [
    {
      id:1,
      feature: "",
      value: ""
    },
    {
      id:2,
      feature: "",
      value: ""
    },
    {
      id:3,
      feature: "",
      value: ""
    },
    {
      id:4,
      feature: "",
      value: ""
    }
  ]

  let lastId = 4;

  function generateNewId() {
    lastId += 1;
    return lastId;
  }

  function addItem() {
    const newItem = {
      id: generateNewId(),
      feature: "",
      value: ""
    };

    items = [...items, newItem];
  }

  function removeItem(id: number) {
    items = items.filter(item => item.id !== id);
  }

  const handleConsider = (evt : CustomEvent<DndEvent<ListItem>>) => {
    console.log("consider")
    items = evt.detail.items;
  }

  const handleFinalize = (evt : CustomEvent<DndEvent<ListItem>>) => {
    console.log("finalize")
    items = evt.detail.items;
  }
</script>

<section class="flex flex-wrap gap-x-10">
      <div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-4 lg:px-8 flex flex-col gap-10 w-full" >
        <div >
          <h1 class="text-3xl font-bold lg:text-2xl pb-2">Product Description Generator</h1>
        </div>
      </div>

      <div class="mx-auto max-w-screen-xl px-4 py-2 sm:py-4 sm:px-6 lg:py-4 lg:px-8 flex flex-col gap-6 w-full md:w-1/2 " >

          <label for="" class="label">
            <span class="block font-medium">Product name</span>
            <input type="text" class="input text-md border-b border-primary-200 variant-form-material" id="productName" />
          </label>

          <label for="" class="label">
            <span class="block font-medium">Description</span>
            <Description />
          </label>
          

          <div class="feature-list" 
          use:dndzone="{{ items: items, flipDurationMs: flipDurationMs, dropTargetStyle:{} }}"
          on:consider="{handleConsider}"
          on:finalize="{handleFinalize}"
          >

            {#each items as item (item.id)}
              <div class="card card-hover my-4 flex gap-2 items-center justify-evenly p-2 text-md " animate:flip="{{ duration:flipDurationMs }}">
                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-vertical text-primary-500"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                <div class="input-forms flex gap-2 ml-2">
                  <div class="input-group h-10 border border-primary-50 input-group-divider grid-cols-[auto_1fr_auto] ">
                    <div class="input-group-shim text-primary-300">Feature</div>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="input-group h-10 border border-primary-50 input-group-divider grid-cols-[auto_1fr_auto]">
                    <div class="input-group-shim text-primary-300">Value</div>
                    <input type="text" placeholder="" />
                  </div>
                </div>
                <button class="text-primary-400" on:click={() => removeItem(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                </button>
              </div>
            {/each}
            <button type="button" class="btn variant-ringed float-right text-primary-500" on:click={ addItem }>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </span>
              <span>Add new feature</span>
            </button>

          </div>

          <div class="space-y-2 my-2 text-md text-primary-500">
            <label class="flex items-center space-x-2">
              <input class="checkbox w-4 h-4" type="checkbox" checked />
              <p>Add tip/suggestion for Supa Rug Pad Grip</p>
            </label>
            <label class="flex items-center space-x-2">
              <input class="checkbox w-4 h-4" type="checkbox" checked />
              <p>Add warning for color variation due to monitor setting</p>
            </label>
          </div>

          <label for="" class="label">
            <span class="block font-medium">Extra Description</span>
            <Extra />
          </label>
          

          <button type="button" class="btn btn-lg variant-filled-primary">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code-2"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m9 18 3-3-3-3"/><path d="m5 12-3 3 3 3"/></svg>
            </span>
            <span>Generate</span>
          </button>
      </div>


      <div class="flex-1 flex flex-col gap-5 w-full md:w-1/2 mt-10 md:mt-0">
        <div class="bg-primary-50 border border-primary-50 h-1/2 p-6 rounded-xl">
          
        </div>
        <div class="h-1/2">
          <button type="button" class="btn variant-filled-primary">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code-2"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m9 18 3-3-3-3"/><path d="m5 12-3 3 3 3"/></svg>
            </span>
            <span>Copy code</span>
          </button>
        </div>
      </div>
</section>
    