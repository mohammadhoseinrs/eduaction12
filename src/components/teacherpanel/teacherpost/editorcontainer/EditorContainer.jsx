import React, { useEffect, useState } from "react";
import "./EditorContainer.css";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { ContentState, convertToRaw , ConvertFromRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import htmlToDraft from 'html-to-draftjs';



export default function EditorContainer({getdescription , coursedescription}) {
  
  const content = ContentState.createFromText(coursedescription ? coursedescription :'');
  
  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(content),
  ); 
  
  const [uploadedImages,setuploadedImages]=useState([])
  let _contentState = ContentState.createFromText('sample text');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw)
  const [convertedContent,setConvertedContent]=useState(null)
    const [value,setvalue]=useState(null)
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
    getdescription(convertedContent)
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
useEffect(()=>{
  if(coursedescription){
    setContentState(coursedescription)
  }
},[])

{/*function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID ##clientid##');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        console.log(response)
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        console.log(error)
        reject(error);
      });
    }
  );
}*/}



 
  return (
    <div className="editor">
      <Editor
      defaultEditorState={editorState}
        defaultContentState={contentState}
        onContentStateChange={setContentState}
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
         wrapperClassName="wrapper-class"
         editorClassName="editor-class"
         toolbarClassName="toolbar-class"
      />
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>

    </div>
  );
}
