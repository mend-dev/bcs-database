<script lang="ts">
    import html2canvas from 'html2canvas';

	export let screenshotArea: HTMLElement;

	const takeScreenshot = () => {
		if (screenshotArea) {
			html2canvas(screenshotArea, {
				backgroundColor: null
			}).then((canvas) => {
				const imgData = canvas.toDataURL("image/png");
				const link = document.createElement('a');
				link.href = imgData;
				link.download = 'screenshot.png';
				link.click();
			});
		}
	};
</script>

<button on:click={() => takeScreenshot()}>Take Screenshot</button>
