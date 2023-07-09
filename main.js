let text = document.getElementById(`copyEmail`).innerHTML;
        let copysuccessEl= document.getElementById(`copy-success`);
        let copyerrorEl = document.getElementById(`copy-error`);
        const copyContent = async () => {
            try {
                await navigator.clipboard.writeText(text);
                copysuccessEl.classList.add('show-copy-success');
                setTimeout(() => copysuccessEl.classList.remove('show-copy-success'), 2000);
    } catch (err) {
        console.log(err)
    }
}