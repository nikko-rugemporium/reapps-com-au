<script>

      import "../app.postcss";
      import StarterKit from "@tiptap/starter-kit";
      import Placeholder from "@tiptap/extension-placeholder";
      import { Editor } from "@tiptap/core";
      import { onMount } from "svelte";

      let element;
      let editor;

      onMount(() => {
            editor = new Editor({
            editorProps: {
                  attributes: {
                        class: 'description-box input border-b border-primary-200 variant-form-material block p-3 text-md ',
                  },
            },
            element: element,
            extensions: [StarterKit],
            content: ``,
            onTransaction: () => {
            
            editor = editor;
            },
            });
      });
</script>
   
    

    <div bind:this={element}></div>