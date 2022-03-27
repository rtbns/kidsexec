require.config({
    paths: {
        vs: "https://unpkg.com/monaco-editor@0.8.3/min/vs"
    }
}), window.MonacoEnvironment = {
    getWorkerUrl: () => proxy
};
let editor, proxy = URL.createObjectURL(new Blob(["\n\tself.MonacoEnvironment = {\n\t\tbaseUrl: 'https://unpkg.com/monaco-editor@0.8.3/min/'\n\t};\n\timportScripts('https://unpkg.com/monaco-editor@0.8.3/min/vs/base/worker/workerMain.js');\n"], {
    type: "text/javascript"
}));

function execute() {
    if ("" == editor.getValue()) Notify("fa fa-times", "Input empty!", 3e3);
    else {
        Notify("fa fa-check", "Code executed!", 3e3);
        var e = editor.getValue();
        const o = new URLSearchParams(window.location.search);
        var t = "sexnow";
        o.has("sex") && (t = o.get("sex")), console.log(e), mp.trigger(t, e)
    }
}
require(["vs/editor/editor.main"], (function () {
    editor = monaco.editor.create(document.getElementById("container"), {
        language: "javascript",
        theme: "vs-dark",
        minimap: {
            enabled: !1
        },
        overviewRulerLanes: 0,
        scrollbar: {
            vertical: "hidden",
            useShadows: !1
        },
        wordWrap: "on",
        fontSize: 12
    })
}));