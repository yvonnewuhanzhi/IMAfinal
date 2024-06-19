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

window.addEventListener('scroll', function () {
    var page4 = document.getElementById('page4');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var pageBottom = scrollTop + window.innerHeight;
    var pageHeight = document.body.scrollHeight;

    if (pageBottom >= pageHeight - window.innerHeight * 0.2 && pageBottom <= pageHeight) {
        document.body.classList.add('white-background');
    } else {
        document.body.classList.remove('white-background');
    }
});

function showBubbleAndText(bubbleId, textId) {
    const bubble = document.getElementById(bubbleId);
    const text = document.getElementById(textId);

    // Show the bubble
    bubble.classList.add('show');

    // Delay the text appearance by 1 second
    setTimeout(() => {
        text.classList.add('show');
    }, 500);

    showBubbleAndText('day28bubble1', 'text1');
    
}




document.getElementById('back').addEventListener('click', function () {
    // 点击 plant1 后跳转到 plant.html
    window.location.href = '../html/introduction.html';
});

document.getElementById('continue').addEventListener('click', function () {
    // 点击 plant1 后跳转到 plant.html
    window.location.href = '../html/room.html';
});




// day1

const imgMe = document.getElementById('day1me');
const imgBg = document.getElementById('day1bg');
const movementStrength = 10; // 控制移动的幅度

document.addEventListener('mousemove', (e) => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const pageX = e.pageX - width;
    const pageY = e.pageY - height;

    const moveXMe = (pageX / width) * movementStrength;
    const moveYMe = (pageY / height) * movementStrength;

    const moveXBg = -moveXMe; // 反方向移动
    const moveYBg = -moveYMe; // 反方向移动

    imgMe.style.transform = `translate(${moveXMe}px, ${moveYMe}px) translateY(-50%) scale(0.8)`;
    imgBg.style.transform = `translate(${moveXBg}px, ${moveYBg}px) translate(-50%, -50%) scale(0.8)`;
});




//day1
window.addEventListener('scroll', function () {
    const day13 = document.getElementById('day13');
    const rect = day13.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 0) {
        // 当元素出现在视窗内时添加类
        day13.classList.add('visible');
    } else {
        // 如果元素离开视窗则移除类（可选，根据需求）
        day13.classList.remove('visible');
    }
});

document.addEventListener('scroll', function() {
    var day14Element = document.getElementById('day14');
    var position = day14Element.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        // 当 day14 元素进入视窗内时，添加类名以触发背景色变为棕色的过渡效果
        document.body.classList.add('brown-bg');
    } else {
        // 其他情况下移除类名，恢复原始背景色
        document.body.classList.remove('brown-bg');
    }
});



function add3DRotationEffect(imageId) {
    const image = document.getElementById(imageId);
    if (!image) return;

    image.addEventListener('mousemove', function(e) {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left; // 鼠标在元素内的X坐标
        const y = e.clientY - rect.top;  // 鼠标在元素内的Y坐标
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;

        const rotateY = (x - halfWidth) / halfWidth * 10; // 控制左右旋转角度
        const rotateX = (halfHeight - y) / halfHeight * 10; // 控制上下旋转角度

        image.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = 'rotateY(0) rotateX(0)'; // 鼠标移出时恢复原始状态
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    add3DRotationEffect('day50-2');
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

    // Wait for the DOM content to be fully loaded
    // document.addEventListener('DOMContentLoaded', function() {
    //     // Get the audio element
    //     const clickSound = document.getElementById('mouseClick');

    //     // Add event listener to detect clicks anywhere in the document
    //     document.addEventListener('click', function() {
    //         // Play the click sound
    //         clickSound.currentTime = 0; // Rewind to the start
    //         clickSound.play();
    //     });
    // });

    window.onload = function () {

        var music1 = document.getElementById('sad');
        music1.volume = 0.5; // 初始化音量为0
        music1.play();
        music1.addEventListener('ended', function () {
            music1.currentTime = 0; // 将音乐播放时间重置为 0
            music1.play(); // 再次播放音乐
        });
    };
    

  
    
    