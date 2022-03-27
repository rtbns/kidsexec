document.getElementById("file-input").addEventListener("input", (function () {
    var e = document.getElementById("file-input"),
        i = new FileReader;
    i.onload = function () {
        var t;
        t = i.result;
        var n = editor.getPosition(),
            r = {
                identifier: {
                    major: 1,
                    minor: 1
                },
                range: new monaco.Range(n.lineNumber, 1, n.lineNumber, 1),
                text: t,
                forceMoveMarkers: !0
            },
            a = e.value;
        if (!/(\.gg|\.js)$/i.exec(a)) return Notify("fa fa-times", "Invalid file type!", 3e3), e.value = null, !1;
        editor.executeEdits("my-source", [r]), Notify("fa fa-check", "File inserted!", 3e3), e.value = null
    }, i.readAsText(this.files[0])
}));