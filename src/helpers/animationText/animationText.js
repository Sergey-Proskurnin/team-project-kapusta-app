export function textAnimation(text) {
  text.innerHTML = [...text.textContent]
    .map(
      n =>
        `<span style="letter-spacing: 0.05em;font-weight: 200;font-size: 15px;transition: all 1.5s;position: relative;display: inline-block">${
          n.trim() ? n : '&nbsp;'
        }</span>`,
    )
    .join('');

  setTimeout(animateText, 800);

  animateText();

  function rand(x) {
    return `${Math.random() * x - x * 0.5}px`;
  }

  function animateText() {
    [...text.querySelectorAll('span')]
      .map(n => n.style)
      .forEach((n, i) => {
        setTimeout(
          () =>
            Object.assign(
              n,
              !n.opacity || +n.opacity === 1
                ? {
                    opacity: 0.25,
                    color: '#3f51b5',
                    transform: `translate3d(${rand(400)}, ${rand(400)}, ${rand(
                      300,
                    )})`,
                  }
                : {
                    opacity: 1,
                    color: 'rgb(256, 256, 256)',
                    transform: `translate3d(0, 0, 0)`,
                  },
            ),
          i * 20,
        );
      });
  }
}
