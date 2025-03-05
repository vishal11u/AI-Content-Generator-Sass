'use client';
import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

interface Props {
  aiOutpoot?: string;
}

function OutPutSection({ aiOutpoot }: Props) {
  const editorRef = useRef<Editor>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(markdown)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(err => console.error("Failed to copy:", err));
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutpoot || "");
    }
  }, [aiOutpoot]);

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden border'>
      <div className="flex items-center justify-between p-3">
        <h2 className='font-bold'>Your Result</h2>
        <Button
          className='bg-indigo-500 cursor-pointer transition-all duration-300'
          onClick={handleCopy}
        >
          {copied ? <Check className="mr-0 h-4 w-4 text-green-400" /> : <Copy className="mr-0 h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will Appear Here..."
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="480px"
      />
    </div>
  );
}

export default OutPutSection;
