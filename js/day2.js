// JavaScript 代码
const kaoxiang = document.getElementById('kaoxiang');
const day79_3 = document.getElementById('day79-3');
var explode = document.getElementById("explode");

// 当点击 kaoxiang 元素时触发的事件处理函数
kaoxiang.addEventListener('click', () => {
    // 显示 day79-3 元素
    day79_3.style.opacity = '1';
    // 缓慢增大 day79-3 元素
    day79_3.style.transform = 'scale(0.8)';
    explode.play();
});

function scrollToYear2() {
    const year2Container = document.querySelector('.year1Container2');
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    // 获取当前元素的位置信息
    const rect = year2Container.getBoundingClientRect();
    const offset = rect.top + window.scrollY;

    // 计算目标位置，加上额外的 30vh 平移
    const targetOffset = offset + 0.3 * viewportHeight;

    // 计算滚动距离的增量
    const scrollStep = (targetOffset - window.scrollY) / 60; // 在1秒内完成滚动

    // 使用 requestAnimationFrame 进行平滑滚动
    function smoothScroll() {
        const currentScrollY = window.scrollY;

        // 如果当前滚动位置还未达到目标位置，继续滚动
        if (Math.abs(currentScrollY - targetOffset) > Math.abs(scrollStep)) {
            window.scrollBy(0, scrollStep);
            requestAnimationFrame(smoothScroll);
        } else {
            // 最后一次滚动，确保到达目标位置
            window.scrollTo(0, targetOffset);
        }
    }

    // 开始执行平滑滚动
    smoothScroll();
}


//map

document.addEventListener('DOMContentLoaded', function () {
    // Select all map-sub elements
    const mapSubs = document.querySelectorAll('.map-sub');

    mapSubs.forEach(sub => {
        sub.addEventListener('click', function () {
            // Find the corresponding map-main element
            const mapMain = this.previousElementSibling;

            // Show the map-main element with fade-in effect
            mapMain.style.display = 'block';
            setTimeout(() => {
                mapMain.style.opacity = '1';
            }, 10); // Slight delay to ensure transition effect
        });
    });


});


//continue back

document.getElementById('back').addEventListener('click', function () {
    // 点击 plant1 后跳转到 plant.html
    window.location.href = '../html/plant.html';
});

document.getElementById('continue').addEventListener('click', function () {
    // 点击 plant1 后跳转到 plant.html
    window.location.href = '../html/reborn.html';
});


window.onload = function () {
    // 获取元素
    const what = document.getElementById('what');
    const scrollDown = document.getElementById('scrollDown');

    // 设置what的动画效果
    what.style.animationDelay = '0s';

    // 设置scrollDown的延迟显示
    setTimeout(function () {
        scrollDown.style.opacity = '1';
    }, 2000); // 2秒后显示scroll down
}

const scrollDown = document.getElementById('scrollDown');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight / 2) {
        scrollDown.classList.add('hidden');
    }
});


var confetti = document.getElementById("confetti");

document.getElementById('day75-2-1').addEventListener('click', function () {
    this.classList.add('fade-out'); // 添加使其透明的类
    confetti.play();
});

// 获取所有需要淡入的 <p> 元素
let paragraphs = document.querySelectorAll('p');

// 监听页面滚动事件
window.addEventListener('scroll', function () {
    // 遍历每个 <p> 元素
    paragraphs.forEach(function (paragraph) {
        // 如果 <p> 元素的底部已经在可视区域内
        if (paragraph.getBoundingClientRect().bottom <= window.innerHeight) {
            // 添加一个类名，该类名设置了 opacity 为 1，实现淡入效果
            paragraph.classList.add('fade-in');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var xiu = document.getElementById("xiu");
    var rv = document.getElementById("year1-2");
    rv.addEventListener("click", function () {

        xiu.play();
    });
});

// // 获取需要逐字显示的h2元素
// const year1H2 = document.querySelector('.year1Container h2');

// // 计算元素到页面顶部的距离
// const year1H2Top = year1H2.offsetTop;

// // 监听页面的滚动事件
// window.addEventListener('scroll', function () {
//     // 获取当前滚动的位置
//     const scrollPosition = window.scrollY + window.innerHeight;

//     // 如果滚动位置超过了h2元素到页面顶部的距离，显示h2元素的内容
//     if (scrollPosition > year1H2Top) {
//         // 获取h2元素的文本内容
//         const text = year1H2.textContent.trim();
//         // 清空h2元素的内容
//         year1H2.textContent = '';
//         // 逐字显示文本内容
//         for (let i = 0; i < text.length; i++) {
//             // 使用setTimeout设置每个字母显示的延迟效果
//             setTimeout(function () {
//                 year1H2.textContent += text[i];
//             }, i * 100); // 这里的100是每个字母显示的间隔时间，可以根据需要调整
//         }
//     }
// });

window.addEventListener('scroll', function () {
    // 获取文档的总高度
    const documentHeight = document.documentElement.scrollHeight;
    // 获取视口的高度
    const windowHeight = window.innerHeight;
    // 计算可滚动的距离
    const scrollableDistance = documentHeight - windowHeight;
    // 获取当前的滚动位置
    const scrollTop = window.scrollY;
    // 计算滚动百分比
    const scrollPercentage = scrollTop / scrollableDistance;

    // 获取背景图片元素
    const endbg = document.getElementById('endbg');

    // 如果滚动位置超过一半，才开始增加透明度
    if (scrollPercentage > 0.5) {
        // 计算超过一半后的相对百分比
        const relativeScrollPercentage = (scrollPercentage - 0.5) / 0.5;
        endbg.style.opacity = Math.min(relativeScrollPercentage, 1);
    } else {
        endbg.style.opacity = 0;
    }
});
window.onload = function () {

    var music3 = document.getElementById('music3');
    music3.volume = 0.5; // 初始化音量为0
    music3.play();
    music3.addEventListener('ended', function () {
        music3.currentTime = 0; // 将音乐播放时间重置为 0
        music3.play(); // 再次播放音乐
    });
};

document.addEventListener("DOMContentLoaded", function () {
    let scrollAnimationId = null; // 存储 requestAnimationFrame 的 ID
    let isScrolling = false; // 标志位，表示当前是否正在滚动中
    let currentScrollPosition = 0; // 记录当前的滚动位置

    const scrollButton = document.createElement('button'); // 创建按钮元素
    scrollButton.textContent = 'Auto Scroll'; // 按钮文本内容
    scrollButton.style.position = 'fixed'; // 固定定位，保持在页面某个位置
    scrollButton.style.bottom = '20px'; // 距离底部 20px
    scrollButton.style.right = '20px'; // 距离右侧 20px
    scrollButton.style.zIndex = '9999'; // 设置层级，确保按钮在顶层
    scrollButton.style.padding = '10px 20px'; // 设置按钮内边距
    scrollButton.style.border = 'none'; // 去除边框
    scrollButton.style.borderRadius = '5px'; // 圆角边框
    scrollButton.style.backgroundColor = '#rgb(205, 200, 187)'; // 背景颜色
    scrollButton.style.color = '#a68579'; // 文字颜色
    scrollButton.style.cursor = 'pointer'; // 鼠标样式为手指指针

    // 将按钮添加到 body 元素中
    document.body.appendChild(scrollButton);

    // 按钮点击事件监听器
    scrollButton.addEventListener('click', function () {
        if (isScrolling) {
            // 如果正在滚动中，则暂停滚动
            cancelAnimationFrame(scrollAnimationId);
            isScrolling = false; // 更新标志位
            scrollButton.textContent = 'Auto Scroll';
        } else {
            // 如果未在滚动中，则开始滚动
            const totalScrollDistance = document.body.scrollHeight - window.innerHeight; // 页面总滚动距离
            const scrollDuration = 170 * 1000; // 总滚动时间为 2 分钟
            const startTime = performance.now(); // 获取当前时间戳

            // 定义滚动函数
            function scroll(time) {
                const elapsed = time - startTime; // 经过的时间
                const progress = Math.min(elapsed / scrollDuration, 1); // 进度，最大为 1

                const newScrollPosition = currentScrollPosition + progress * (totalScrollDistance - currentScrollPosition);
                window.scrollTo(0, newScrollPosition); // 根据进度设置滚动位置

                if (progress < 1) {
                    // 如果进度小于 1，继续请求下一帧动画
                    scrollAnimationId = requestAnimationFrame(scroll);
                    isScrolling = true; // 更新标志位
                } else {
                    // 滚动完成时，清空动画 ID 和标志位
                    scrollAnimationId = null;
                    isScrolling = false;
                     scrollButton.textContent = 'Auto Scroll'
                }
            }

            // 记录当前的滚动位置
            currentScrollPosition = window.scrollY;

            // 启动第一帧动画
            scrollAnimationId = requestAnimationFrame(scroll);
            isScrolling = true; // 更新标志位
            scrollButton.textContent = 'Pause Scroll';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const day79text3 = document.getElementById('day79text3');
    const day79text4 = document.getElementById('day79text4');
    const day79text5 = document.getElementById('day79text5');
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    function onIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rise-fade');
          observer.unobserve(entry.target); // Unobserve if you want the animation to happen only once
        }
      });
    }
  
    const observer = new IntersectionObserver(onIntersection, observerOptions);
  
    observer.observe(day79text3);
    observer.observe(day79text4);
    observer.observe(day79text5);
  });
  