import dynamic from 'next/dynamic';
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useState } from 'react';

const Index = () => {
    const txt = `# Hello World\n\n Hi, there!!!`
    const [mark, setMark] = useState(txt);
    const [visible, setVisible] = useState(true)
    const MarkdownEditor = dynamic(
        (e) => import("@uiw/react-markdown-editor").then((mod) => mod.default),
        { ssr: false }
    );

    console.log(mark);
    return (
        <>
            <div className="my-20">
                <h1 className="heading text-2xl">
                    Create
                </h1>
                <div className="border border-[#3330E4] rounded-xl py-5 px-24 my-14">
                    <form>
                        <div>
                            <label htmlFor="title">
                                Title:
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter Title"
                                className="ml-5 border border-[#3330E4] rounded-xl py-2 px-4 my-2 w-2/3"
                            />
                        </div>
                        <div>
                            <label htmlFor="body">
                                Body:
                            </label>
                            <MarkdownEditor
                                value={mark}
                                visible={visible}
                                onChange={(value) => {
                                    setMark(value);
                                }}
                                height="500px"
                            />
                        </div>
                        <div>
                            <button
                                className="bg-[#00FFC6] text-black font-bold rounded-full px-7 py-1 m-5">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Index;