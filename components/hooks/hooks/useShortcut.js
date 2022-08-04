import { useEffect, useState } from "react"

const useShortcutMainFunction = (textareaRef,setLiveView) => {

    const [prevKeyUp, setPrevKeyUp] = useState('')

    /*******************************************
     * for shortcut key Up event
     * *************************************/
    const shortcutKeyboard  = async (e) => {
        const key = e.key;
        const Text = textareaRef.current.value;
        setLiveView(Text)

        const startPoint = e.target.selectionStart;
        const endPoint = e.target.selectionEnd;
        const textValue = e.target.value
        // control key set 
        if (key == 'Control') {
            setPrevKeyUp('Control')
        }


        // for bold
        if (prevKeyUp === 'Control' && e.key === 'b') {
            const styleText = `${textValue.substring(0, startPoint)}\n\t<b>${textValue.substring(startPoint, endPoint)}</b>\n${textValue.substring(endPoint)}`;
            textareaRef.current.value = styleText
            setPrevKeyUp('')
        }

        // for italic
        if (prevKeyUp === 'Control' && e.key === 'i') {
            const styleText = `${textValue.substring(0, startPoint)}\n\t<i>${textValue.substring(startPoint, endPoint)}</i>\n${textValue.substring(endPoint)}`;
            textareaRef.current.value = styleText
            setPrevKeyUp('')
        }
        // for anchore link 
        if (prevKeyUp === 'Control' && e.key === 'q') {
            const styleText = `${textValue.substring(0, startPoint)}\n\t<a href="${textValue.substring(startPoint, endPoint)}"> LINK TITLE</a>\n${textValue.substring(endPoint)}`;
            textareaRef.current.value = styleText
            setPrevKeyUp('')

        }
        // for anchore image 
        if (prevKeyUp === 'Control' && e.key === 'm') {
            const styleText = `${textValue.substring(0, startPoint)}\n\t<img src="${textValue.substring(startPoint, endPoint)}"/>\n${textValue.substring(endPoint)}`;
            textareaRef.current.value = styleText
            setPrevKeyUp('')

        }

        // for unorderlist
        if (prevKeyUp === 'Control' && key === '.') {
            buttonHandleShort('ul')
        }
        // for listOrder 
        if (prevKeyUp === 'Control' && key === ',') {
            buttonHandleShort('ol')
        }
        // for table 
        if (prevKeyUp === 'Control' && key === "'") {
            buttonHandleShort('tr')
        }


        // control key remove 
        if (prevKeyUp === 'Control' && !(key === 'b' || key === 'q' || key === 'i' || key === 'm' || key === '.' || key === ',' || key === "'")) {
            setPrevKeyUp('')
        }

    };

   
    // for handler button 
    const buttonHandleShort = (exec) => {

        const Text = textareaRef.current.value

        /**for bold letter and itelic letter */
        if (exec === 'b' || exec === 'i') {
            textareaRef.current.value += `\n<${exec}></${exec}>`
        }
        else if (exec === 'a') {
            textareaRef.current.value += '\n<a href=""></a>'
        }
        else if (exec === 'img') {
            textareaRef.current.value += '\n<img src=""/>'
        }

        else if (exec === 'ul') {
           
            if (!Text.endsWith('</ul>')) {
                textareaRef.current.value += '\n<ul>\n\t<li></li>\n</ul>'
            }
            else {

                textareaRef.current.value = textareaRef.current.value.substring(0, Text.length - 6) + '\n\t<li></li>\n</ul>'
            }
        }
        else if (exec === 'ol') {
            if (!textareaRef.current.value.endsWith('</ol>')) {
                textareaRef.current.value += '\n<ol>\n\t<li></li>\n</ol>'
            }
            else {
                textareaRef.current.value = textareaRef.current.value.substring(0, Text.length - 6) + '\n\t<li></li>\n</ol>'

            }
        }
        else if (exec === 'tr') {
            if (!textareaRef.current.value.endsWith('</table>')) {
                textareaRef.current.value += `\n<table>\n\t<tr>\n\t\t<td></td>\n\t\t<td></td>\n\t</tr>\n</table>`
            }
            else {
                textareaRef.current.value = textareaRef.current.value.substring(0, Text.length - 8) + '\n\t<tr>\n\t\t<td></td>\n\t\t<td></td>\n\t</tr>\n</table>';
            }
        }
    }

    return {shortcutKeyboard , buttonHandleShort}

}

export default useShortcutMainFunction;