export function textAnimation(text) {
  text.innerHTML = [...text.textContent]
    .map(
      n =>
        `<span style="font-weight: normal;font-size: 14px;transition: all 1.5s; display: inline-block; margin-bottom: 8px; font-family: Roboto;">${
          n.trim() ? n : '&nbsp;'
        }</span>`,
    )
    .join('');
  setTimeout(animateText, 100);
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
                    opacity: 0,
                    color: 'blue',
                    transform: `translate3d(${rand(400)}, ${rand(400)}, ${rand(
                      300,
                    )})`,
                  }
                : {
                    opacity: 1,
                    color: 'rgb(35, 34, 40)',
                    transform: `translate3d(0, 0, 0)`,
                  },
            ),
          i * 20,
        );
      });
  }
}