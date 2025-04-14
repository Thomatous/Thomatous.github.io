document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('#one article');

    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            const hexCode = tile.getAttribute('data-hex');
            if (hexCode) {
                copyToClipboard(hexCode);
                alert(`Copied ${hexCode} to clipboard!`);
            }
        });
    });

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('Text copied to clipboard');
        }).catch(function(err) {
            console.error('Error in copying text: ', err);
        });
    }
});