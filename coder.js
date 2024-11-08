function goBack() {
    window.history.back();
}

function runCode() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = `<style>${document.getElementById("css-code").value}</style>`;
    const jsCode = `<script>${document.getElementById("js-code").value}<\/script>`;
    const iframe = document.getElementById("output-frame");

    const completeCode = htmlCode + cssCode + jsCode;
    
    iframe.contentDocument.open();
    iframe.contentDocument.write(completeCode);
    iframe.contentDocument.close();
}
