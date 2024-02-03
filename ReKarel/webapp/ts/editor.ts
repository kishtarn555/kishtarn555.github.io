import {EditorState} from "@codemirror/state"
import {defaultKeymap, historyKeymap, history} from "@codemirror/commands"
import {drawSelection, keymap, lineNumbers, highlightActiveLine} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {undo, redo} from "@codemirror/commands"
import {EditorView} from "@codemirror/view"
import {Transaction, Annotation, Compartment} from "@codemirror/state"
import { kjava } from "./javaCodeMirror"

import {defaultHighlightStyle, syntaxHighlighting, foldGutter, bracketMatching, indentUnit} from "@codemirror/language"
import { closeBrackets, autocompletion } from "@codemirror/autocomplete"

let language = new Compartment, tabSize = new Compartment

let readOnly = new Compartment

function createEditors() : Array<EditorView> {
  let startState = EditorState.create({
    doc: "iniciar-programa\n\tinicia-ejecucion\n\t\t{ TODO poner codigo aqui }\n\t\tapagate;\n\ttermina-ejecucion\nfinalizar-programa",
    extensions: [
      language.of(kjava()),
      syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
      history(),
      drawSelection(),
      lineNumbers(),
      highlightActiveLine(),
      foldGutter(),
      bracketMatching(),
      autocompletion(),
      closeBrackets(),
      indentUnit.of("\t"),
      readOnly.of(EditorState.readOnly.of(false)),      
      tabSize.of(EditorState.tabSize.of(4)),
      keymap.of([
        indentWithTab,
        ...defaultKeymap,
        ...historyKeymap,
      ])
    ]
  })
  
  let otherState = EditorState.create({
    doc: startState.doc,
    extensions: [
      drawSelection(),
      lineNumbers(),
      highlightActiveLine(),
      keymap.of([
        indentWithTab,
        ...defaultKeymap,
        {key: "Mod-z", run: () => undo(mainView)},
        {key: "Mod-y", mac: "Mod-Shift-z", run: () => redo(mainView)}
      ])
    ]
  })
  let syncAnnotation = Annotation.define<boolean>()

  function syncDispatch(tr: Transaction, view: EditorView, other: EditorView) {
    view.update([tr])
    if (!tr.changes.empty && !tr.annotation(syncAnnotation)) {
      let annotations: Annotation<any>[] = [syncAnnotation.of(true)]
      let userEvent = tr.annotation(Transaction.userEvent)
      if (userEvent) annotations.push(Transaction.userEvent.of(userEvent))
      other.dispatch({changes: tr.changes, annotations})
    }
  }
  let mainView = new EditorView({
    state: startState,
    parent: document.querySelector("#splitter-left-top-pane"),
    dispatch: tr => syncDispatch(tr, mainView, otherView)
  })
  
  let otherView = new EditorView({
    state: otherState,
    parent: document.querySelector("#phoneEditor"),
    dispatch: tr => syncDispatch(tr, otherView, mainView)
  })
  return [mainView, otherView]
}


function freezeEditors(editor : EditorView) {
  editor.dispatch({
    effects: readOnly.reconfigure(EditorState.readOnly.of(true))
  });
}

function unfreezeEditors(editor : EditorView) {
  editor.dispatch({
    effects: readOnly.reconfigure(EditorState.readOnly.of(false))
  });
}

export {createEditors, freezeEditors, unfreezeEditors}