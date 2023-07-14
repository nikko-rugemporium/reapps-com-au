
<script lang="ts">
  import { onMount } from "svelte";
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

  let productName = '';

 

  
  import { initializeEditor, descriptionContent,extraDescriptionContent } from "./page";
  

  let descriptionBox: HTMLElement;
  let extraDescriptionBox: HTMLElement;
  

  onMount(() => {
    initializeEditor(descriptionBox,0); 
    initializeEditor(extraDescriptionBox,1); 
    
  });

  let finalCode = '';

  function generateCode() {
    finalCode = `<div class="re-description"><div class="main-desc">${$descriptionContent}</div><div class="pad-tip"><h4>Important Tip</h4><p>For enhanced stability and to prevent rugs from slipping on the surface they are placed on, we highly recommend using an anti-slip pad such as<a href="/collections/accessories" target="_blank">Supa Rug Pad Grip.</a></p></div><div class="color-differ"><div><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18186 0C7.44286 0 8.48586 1.103 8.65786 2.538L17.1409 11.022L9.36286 18.8C9.08428 19.0786 8.75354 19.2997 8.38953 19.4504C8.02552 19.6012 7.63537 19.6789 7.24136 19.6789C6.84735 19.6789 6.4572 19.6012 6.09319 19.4504C5.72918 19.2997 5.39844 19.0786 5.11986 18.8L0.87886 14.558C0.60023 14.2794 0.379206 13.9487 0.22841 13.5847C0.0776141 13.2207 0 12.8305 0 12.4365C0 12.0425 0.0776141 11.6523 0.22841 11.2883C0.379206 10.9243 0.60023 10.5936 0.87886 10.315L3.68286 7.51V2.957C3.68286 1.324 4.80286 0 6.18286 0H6.18186ZM6.68186 2.957V4.51L5.68186 5.51V2.957C5.68186 2.63 5.90586 2.366 6.18186 2.366C6.45886 2.366 6.68186 2.63 6.68186 2.957ZM6.68186 8.871V7.338L2.29186 11.729C2.10439 11.9165 1.99907 12.1708 1.99907 12.436C1.99907 12.7012 2.10439 12.9555 2.29186 13.143L6.53486 17.386C6.72239 17.5735 6.97669 17.6788 7.24186 17.6788C7.50702 17.6788 7.76133 17.5735 7.94886 17.386L14.3129 11.022L8.68286 5.392V8.872L8.67986 9H6.66986C6.67785 8.95747 6.68187 8.91428 6.68186 8.871Z" fill="black"></path><path d="M14.836 14.871C14.4164 15.2905 14.1306 15.8251 14.0147 16.407C13.8989 16.989 13.9583 17.5923 14.1853 18.1405C14.4123 18.6887 14.7969 19.1573 15.2902 19.487C15.7836 19.8167 16.3636 19.9926 16.957 19.9926C17.5504 19.9926 18.1305 19.8167 18.6238 19.487C19.1172 19.1573 19.5017 18.6887 19.7288 18.1405C19.9558 17.5923 20.0152 16.989 19.8993 16.407C19.7835 15.8251 19.4977 15.2905 19.078 14.871L16.957 12.75L14.836 14.871Z" fill="black"></path></svg><span>Please note that slight color variations may occur due to differences in monitor settings.</span></div></div><div class="features-table"><div class="feature-table-wrapper"><div><div><p>Material</p></div><div><p>65% Wool, 20% Cotton, 15% Polyester</p></div></div><div><div><p>Pile Height</p></div><div><p>Flatwoven</p></div></div><div><div><p>Construction</p></div><div><p>Hand Loomed</p></div></div><div><div><p>Origin</p></div><div><p>Made in India</p></div></div></div></div><div class="extra-desc">${$extraDescriptionContent}</div></div>
  `;
  }

  const copyCode = () => {
    const el = document.querySelector(".finalCodeText") as HTMLInputElement;
    el.select();
    el.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(el.value);
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
            <input type="text" class="input text-md border-b border-primary-200 variant-form-material" bind:value={productName} />
          </label>

          <span>{productName}</span>

          <label for="" class="label">
            <span class="block font-medium">Description</span>
            <div bind:this={descriptionBox}></div>
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

          
      </div>


      <div class="flex-1 flex flex-col gap-5 w-full md:w-1/2 mt-10 md:mt-0">

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
          <div bind:this={extraDescriptionBox}></div>
        </label>
        

        <button type="button" class="btn btn-lg variant-filled-primary" on:click={generateCode}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-code-2"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m9 18 3-3-3-3"/><path d="m5 12-3 3 3 3"/></svg>
          </span>
          <span>Generate</span>
        </button>

        <div class="">
          <textarea class="finalCodeText w-full h-32 re-description bg-primary-50 border border-primary-50 p-6 rounded-xl" disabled placeholder="Note: Fill up the input boxes and click on the generate button.">{finalCode}</textarea>
        </div>

        <div class="h-1/2">
          <button type="button" class="btn variant-filled-primary" on:click={copyCode}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </span>
            <span>Copy code</span>
          </button>
        </div>
      </div>
</section>
