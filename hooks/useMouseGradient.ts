type MountGradientOptions = { color?: string; size?: number; bgColor?: string };

export function mouseGradient(
	node: HTMLElement,
	options: MountGradientOptions = {
		color: 'rgba(1, 255, 225, 0)',
		size: 450,
		bgColor: 'rgb(12, 10, 9)'
	}
) {
	function update(event: MouseEvent) {
		node.style.background = `radial-gradient(${options.size}px circle at
            ${event.pageX - node.getBoundingClientRect().left}px ${
			event.pageY - node.getBoundingClientRect().top
		}px,
            ${options.color}, ${options.bgColor})`;
	}

	function remove() {
		node.style.background = ``;
		node.style.removeProperty('outline');
	}

	node.addEventListener('mousemove', update);
	node.addEventListener('mouseout', remove);
	return {
		destroy() {
			node.removeEventListener('mousemove', update);
		}
	};
}
