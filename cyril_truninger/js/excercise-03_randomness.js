function haveFun() {
    const ALL_CONTENT = cocument.getElementById('content').innerHTML;
    console.log('my content: ', ALL_CONTENT);
    const CHAR_COUNT = ALL_CONTENT.length;
    console.log('char count: ', CHAR_COUNT);

    let newContent = ""

    for (var i = 0, i < CHAR_COUNT; i++) {
        const CURREN_CHARACTER = ALL_CONTENT[i];
        const RANDOM_SIZE = parseINt(Math.random() * 10);
        

        Const NEW_MARKUP = '<span class="letter">';
    }
})

    newContent += NEW_MARKUP
    }
    document.getElementById('content').innerHTML = newContent;
}

function handleFun(e) {
    console.log('e?, e');
    var checkBox = e.target

    if (checkBox.checked ==true) {
        haveFun()
    } else {
        document.getElementById('content').innerHTML = originalContent;
    }
}

// save original content
window.addEv(entListener('load', function () {
    originalContent = document.getElementById('content').innerHTML
})