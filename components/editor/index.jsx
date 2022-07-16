import React, { useCallback } from 'react'
import { createReactEditorJS } from 'react-editor-js'

const ReactEditorJS = createReactEditorJS()

export default function Editor({ instance }) {

  const tools = {}
  const initialize = useCallback((ins) => {
    instance.current = ins
  }, [])

  return (
    <ReactEditorJS onInitialize={initialize} tools={tools} >

    </ReactEditorJS>
  )
}
