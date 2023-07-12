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
                        class: 'description-box input variant-form-material block mt-10 h-56 p-3',
                  },
            },
            element: element,
            extensions: [StarterKit,
            Placeholder.configure({
                  placeholder: 'Text description',
                  emptyEditorClass: 'text-primary-400',
            })],
            content: ``,
            onTransaction: () => {
            
            editor = editor;
            },
            });
      });
</script>
   
    

    <div bind:this={element} placeholder="Text description"></div>