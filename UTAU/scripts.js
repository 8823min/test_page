document.addEventListener("DOMContentLoaded", function() {
	const progress = document.querySelector('.progress');
	const spans = Array.from(progress.children);
	const leftArrow = document.querySelector('.donearrow.left');
	const rightArrow = document.querySelector('.donearrow.right');
	const explanationContainer = document.querySelector('.explanation-content');
	const iconElement = document.querySelector('.music_wave');

	let doneCount = spans.filter(span => span.classList.contains('done')).length;

	const explanations = [
		{
			title: "ヒント",
			text: "音源作成をするときに役立つ情報です。",
			icon: "./icon/light.svg"
		},
		{
			title: "録音のコツ",
			text: "なるべく棒読みで収録しましょう。",
			icon: "./icon/music_wave.svg"
		},
		{
			title: "hoge",
			text: "hoge",
			icon: "./icon/recording.svg"
		},
		{
			title: "huga",
			text: "hugahuga",
			icon: "./icon/complete.svg"
		}
	];

	function updateProgress(count) {
		spans.forEach((span, index) => {
			if(index < count) {
				span.classList.add('done');
			} else {
				span.classList.remove('done');
			}
		});
		updateExplanation(count);
	}
	function updateExplanation(count) {
		if (explanations[count]) {
			explanationContainer.style.opacity = 0;
			iconElement.style.opacity = 0;
			setTimeout(() => {
				explanationContainer.innerHTML = `
					<p><strong>${explanations[count].title}</strong></p>
					<p>${explanations[count].text}</p>
				`;
				iconElement.src = explanations[count].icon;
				explanationContainer.style.opacity = 1;
				iconElement.style.opacity = 1;
			}, 300);
		}
	}


	updateExplanation(doneCount);

	leftArrow.addEventListener('click', function() {
		if(doneCount > 0) {
			doneCount--;
			updateProgress(doneCount);
		}
	});

	rightArrow.addEventListener('click', function() {
		if(doneCount < spans.length) {
			doneCount++;
			updateProgress(doneCount);
		}
	});
});
