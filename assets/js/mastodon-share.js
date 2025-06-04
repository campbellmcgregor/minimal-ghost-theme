document.addEventListener('DOMContentLoaded', () => {
    const mastodonLinks = document.querySelectorAll('.mastodon-share');
    const storageKey = 'mastodon-instance';
    
    mastodonLinks.forEach(link => {
        const editText = link.dataset.edittext || '✏️';
        const editLabel = link.dataset.editlabel || 'Edit your Mastodon instance';
        const prompt = link.dataset.prompt || 'Please tell me your Mastodon instance';
        
        // Add edit button if instance exists
        const instance = localStorage.getItem(storageKey);
        if (instance) {
            const edit = document.createElement('a');
            edit.href = '#';
            edit.textContent = editText;
            edit.title = editLabel;
            edit.className = 'mastodon-edit';
            edit.addEventListener('click', (e) => {
                e.preventDefault();
                askForInstance();
            });
            link.parentNode.insertBefore(edit, link.nextSibling);
        }
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            shareToMastodon(link, prompt);
        });
    });
    
    function askForInstance() {
        const instance = prompt('Please enter your Mastodon instance (e.g. mastodon.social)');
        if (instance) {
            localStorage.setItem(storageKey, instance.replace(/^https?:\/\//, ''));
        }
    }
    
    function shareToMastodon(link, prompt) {
        let instance = localStorage.getItem(storageKey);
        
        if (!instance) {
            instance = window.prompt(prompt);
            if (instance) {
                localStorage.setItem(storageKey, instance.replace(/^https?:\/\//, ''));
            }
        }
        
        if (instance) {
            const url = link.dataset.url;
            const title = link.dataset.title || document.title;
            const shareURL = `https://${instance}/share?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
            window.open(shareURL, 'mastodon', 'width=600,height=400,menubar=no,status=no,toolbar=no');
        }
    }
}); 