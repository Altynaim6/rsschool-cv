function toggleFlags(event) {
    event.preventDefault();
    const hiddenFlags = document.querySelector('.language-selector .hidden-flags');
    hiddenFlags.style.display = (hiddenFlags.style.display === 'none' || hiddenFlags.style.display === '') ? 'flex' : 'none';
}

function selectFlag(event, flagPath, languageName) {
    event.preventDefault();
    const activeFlag = document.querySelector('.language-selector a.active img');
    activeFlag.src = flagPath;
    activeFlag.alt = languageName;
    toggleFlags(event);
}

