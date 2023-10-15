
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';
// import { useParams } from "react-router-dom"



const NewPosts = () => {
  /*to identifay the page id use this procetures
      const NewPosts = () => {
          const {id}=useParams()
        return (
          <div>{id}</div>
        )
      }
      export default NewPosts
  */
  return (
    <div>
      <label>Post title</label>
      <input type="text" placeholder="Post Thumnail" id="postThumnail" value=""/>
      <ReactQuill
      theme="snow"
      modules={NewPosts.modules}
      formats={NewPosts.formats}
      />
      <label>Post Body</label>
      <input type="file" name="filename" id="PostBody" value=""/>
    </div>
  )
}
NewPosts. modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

NewPosts.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

export default NewPosts