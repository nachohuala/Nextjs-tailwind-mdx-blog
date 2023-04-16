"use client"
import { CopyIcon, PasteIcon } from '../public/icons/icons';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

// TODO:
// FALTA AGREGAR TOOLTIP PARA LA ACCION DE COPIADO

const Code = ({children,language}) => {
     const [copied,setCopied] = useState(false)

     useEffect(()=>{
         const timer = setTimeout(()=>{
             setCopied(false)
         },1000)
         return ()=> clearTimeout(timer)
     },[copied])
    

    return (
        <div className='code relative z-10'>
             <CopyToClipboard text={children} onCopy={()=>setCopied(true)}>
                <button className='absolute top-4 right-4 z-40 w-auto h-auto'>
                {copied ? <PasteIcon/>:<CopyIcon/>}
                </button>
            </CopyToClipboard>
        <SyntaxHighlighter language={language} style={materialOceanic}>
            {children}
        </SyntaxHighlighter>
        </div>
    );
}

export default Code; 