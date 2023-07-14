      import StarterKit from "@tiptap/starter-kit";
      import { Editor } from "@tiptap/core";
      import { createEventDispatcher } from "svelte";
      import { writable } from "svelte/store";

      export const descriptionContent = writable("");
      export const extraDescriptionContent = writable("");

export function initializeEditor(element: HTMLElement, index: number) {
  let editor: Editor;

  editor = new Editor({
    editorProps: {
      attributes: {
        class: 'description-box input border-b border-primary-200 variant-form-material block p-3 text-md',
      },
    },
    element: element,
    extensions: [StarterKit],
    content: "",
    onTransaction: () => {
      editor = editor;
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      
      if(index==0) { descriptionContent.set(html); }
      if(index==1) { extraDescriptionContent.set(html); }
    },
  });
}