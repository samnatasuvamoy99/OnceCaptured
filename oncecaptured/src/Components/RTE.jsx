import React from 'react'
import{Editor} from '@tinymce/tinymce-react'
import{Controller} from 'react-hook-form'

 export default function RTE( {control , name , defaultValue="" , label}) {
  return (
        <div className='w-full'>
             { label && < label  className='inline-block mb-1 pl-1'> {label}</label> }
            
            <Controller
               name={name || "content"}
                  control={control}
                  render={({ field: { onChange}}) =>(
                    
                      <Editor
                       
                        initialValue={defaultValue}
                        init={{
                          height: 500,
                          menubar: false,
                          plugins: [
                            advlist,  
                            autolink,  
                            lists,  
                            link,  
                            image,  
                            charmap,  
                            print,  
                            preview,  
                            anchor,  
                            searchreplace,  
                            visualblocks,  
                            code,  
                            fullscreen,  
                            insertdatetime,  
                            media,  
                            table,  
                            paste,  
                            help,  
                            wordcount
                            
                          ],
                          toolbar:
                            'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                          content_style:
                            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={(content) => onChange(content)}
                        />
                       )}
              />

        </div>
  )

}

