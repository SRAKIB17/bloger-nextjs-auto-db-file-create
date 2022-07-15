import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query'
const TEST = () => {
    // const fileUploader = (e) => {
    //     const file = e.target.files[0];
    //     const oReader = new FileReader()
    //     oReader.onload = (e) => {
    //         const blob = oReader.result;
    //         let pd = new Blob([blob], { type: 'application/pdf' });
    //         let fileURL = window.URL.createObjectURL(pd);
            
    //         document.getElementById('pdf').src = blob

    //     }
    //     oReader.readAsDataURL(file);
    // }
    const aa = useQuery('aa',()=>axios.post('http://localhost:3000/api/testEamil',{name:'sfsdfjsdlfsdlfs'}))
    console.log(aa?.data?.data)
    return (
        <div>
            {/* <input type="file" name="" id="" onChange={(e) => fileUploader(e)} />
            <embed src="" id='pdf' type="" height='600' width='600' /> */}
        </div>
    );
};

export default TEST;

//   //Step 4:turn array buffer into typed array
//   var typedarray = new Uint8Array(this.result);

//   //Step 5:pdfjs should be able to read this
//   const loadingTask = pdfjsLib.getDocument(typedarray);
//   loadingTask.promise.then(pdf => {
//       // The document is loaded here...
//   });
              

// };
// //Step 3:Read the file as ArrayBuffer
// // fileReader.readAsArrayBuffer(file);