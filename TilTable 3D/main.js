const box = document.querySelector('.box');
const boxRect = box.getBoundingClientRect();

box.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX - boxRect.left) / boxRect.width;
    const xOffset = -(xPos - 0.5);
    const dxNorm = Math.min(Math.max(xOffset, -0.5), 0.5);
    const yPos = (e.clientY - boxRect.top) / boxRect.height - 0.5
    box.style.transform = `perspective(1000px) rotateY(${dxNorm * 45}deg) 
    rotateX(${yPos * 45}deg)`;

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'none'
    })
})