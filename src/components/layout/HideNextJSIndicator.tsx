"use client";

import { useEffect } from "react";

const HideNextJSIndicator = () => {
	useEffect(() => {
		const hideNextJSElements = () => {
			// List of selectors to hide
			const selectorsToHide = [
				".__next-dev-overlay-backdrop",
				".__next-dev-error-stack-frame",
				"[data-nextjs-toast]",
				"[data-nextjs-dialog]",
				"[data-nextjs-dialog-overlay]",
				"[data-nextjs-scroll-focus-boundary]",
				".next-toast",
				".next-mark",
				'[class*="next-toast"]',
				'[class*="next-mark"]',
				'[id*="next-toast"]',
				'[id*="next-mark"]',
				"button[data-nextjs]",
				'button[aria-label*="Build"]',
				'button[aria-label*="Error"]',
				'button[title*="Build"]',
				"#__next-build-watcher",
				"#__next-prerender-indicator",
				"#__nextjs-dev-overlay",
			];

			selectorsToHide.forEach((selector) => {
				const elements = document.querySelectorAll(selector);
				elements.forEach((element) => {
					(element as HTMLElement).style.display = "none";
				});
			});

			// Hide fixed positioned small buttons (likely Next.js indicators)
			const fixedElements = document.querySelectorAll(
				'div[style*="position: fixed"]'
			);
			fixedElements.forEach((element) => {
				const htmlElement = element as HTMLElement;
				const style = htmlElement.style;
				if (
					style.bottom &&
					(style.right || style.left) &&
					element.querySelector("button") &&
					htmlElement.offsetWidth <= 50 &&
					htmlElement.offsetHeight <= 50
				) {
					htmlElement.style.display = "none";
				}
			});
		};

		// Run immediately
		hideNextJSElements();

		// Run when DOM changes (for dynamically added elements)
		const observer = new MutationObserver(hideNextJSElements);
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		// Run periodically as backup
		const interval = setInterval(hideNextJSElements, 1000);

		return () => {
			observer.disconnect();
			clearInterval(interval);
		};
	}, []);

	return null; // This component doesn't render anything
};

export default HideNextJSIndicator;
