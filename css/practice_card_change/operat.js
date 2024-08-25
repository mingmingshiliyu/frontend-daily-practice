document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', () => {
            // 移除所有选项的 active 类
            options.forEach(opt => opt.classList.remove('active'));

            // 添加 active 类到被点击的选项
            option.classList.add('active');
        });
    });
});
