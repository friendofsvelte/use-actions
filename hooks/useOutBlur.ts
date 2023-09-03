export function useOutBlur(node: HTMLElement) {
    document.addEventListener('click', function (event: EventTarget | any) {
        if (node) {
            const isClickInsideElement = node.contains(event.target);
            if (!isClickInsideElement) {
                node.dispatchEvent(
                    new CustomEvent('outblur')
                );
            }
        }
    });
}
