import react, { useState } from 'react';
import { Editor, EditorState , ContentState, Modifier} from 'draft-js';


const SimpleEditor = (props: any) => {

    const isIE11 = !!window.MSInputMethodContext && !!(document as any).documentMode;
        console.log('isIE11?', isIE11);
        
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onChange = (state: EditorState) => {
        console.log('data' , state.getCurrentContent().getPlainText());
    }

    const handlePastedText = (text: string, html: string | undefined, editorState: EditorState) => {
        console.log('pasted text', text);
        
        if (text && isIE11) {
            // IE11 does not preserve breaklines, handle manually
            const pastedBlocks = ContentState.createFromText(text).getBlockMap();
            const newState = Modifier.replaceWithFragment(
              editorState.getCurrentContent(),
              editorState.getSelection(),
              pastedBlocks
            );
            setEditorState(EditorState.push(editorState, newState, 'insert-fragment'));
            return 'handled';
        }
        
        return 'not-handled';
    }

    const formatPastedText = (
        text: string,
        html?: string,
    ) => {
        console.log('formatting pasted text', text)
        return {text,html};
    }

    return (
        <Editor 
            editorState={editorState}
            onChange={onChange}
            handlePastedText={handlePastedText}
            // formatPastedText={formatPastedText}
            ></Editor>
    )
}

export default SimpleEditor;