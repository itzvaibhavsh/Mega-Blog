import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'  // alternative to useForward hook

export default function RTE({name, control, label, defaultValue = ""}) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
        {/* controller will pass the control to the place RTE component will be used */}
        <Controller 
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
            <Editor
            apiKey="spa6vba6ti88ers1c4285pdewsrrxlgmvlkh1e5dkk328lsp"
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autlink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
        
        </div>
    )
}
