let circles = [];
let img1, img2, img3;
let numImages = 20;  // 总共要使用的图像数量

function preload() {
  // 预加载图像
  img1 = loadImage('1.png');
  img2 = loadImage('2.png');
  img3 = loadImage('3.png');
}

function setup() {
  createCanvas(900, 600, WEBGL);
  // 设置透明背景
  background(220, 220, 220,0);

  for (let i = 0; i < numImages; i++) {
    // 随机选择图像
    let img;
    if (i % 3 === 0) {
      img = img1;
    } else if (i % 3 === 1) {
      img = img2;
    } else {
      img = img3;
    }

    // 初始化圆的位置、速度、大小和振荡参数
    let circle = {
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      size: random(20, 50),
      offsetX: random(TWO_PI),
      offsetY: random(TWO_PI),
      amplitudeX: random(4, 6),  // 调整振幅，使浮动幅度小一些
      amplitudeY: random(4, 6),  // 调整振幅，使浮动幅度小一些
      speedX: random(0.01, 0.02),
      speedY: random(0.01, 0.02),
      rotation: 0,
      rotationSpeed: random(0.02, 0.05),
      image: img
    };
    circles.push(circle);
  }
}

function draw() {
  // 清除画布
  clear();
  // 设置透明背景
  background(220, 220, 220,0);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    
    // 更新圆的位置使用sin和cos函数来回浮动
    circle.x += sin(circle.offsetX) * circle.amplitudeX;
    circle.y += cos(circle.offsetY) * circle.amplitudeY;
    
    // 更新偏移
    circle.offsetX += circle.speedX;
    circle.offsetY += circle.speedY;

    // 更新旋转角度
    circle.rotation += circle.rotationSpeed;

    // 如果鼠标按下，圆朝鼠标靠近
    if (mouseIsPressed) {
      let dx = mouseX - (circle.x + width / 2);
      let dy = mouseY - (circle.y + height / 2);
      circle.x += dx * 0.05;  // 调整移动速度
      circle.y += dy * 0.05;  // 调整移动速度
    }

    // 设置无边框和无填充
    noFill();
    noStroke();

    // 画图像
    push();
    translate(circle.x, circle.y);
    rotateY(circle.rotation);
    texture(circle.image);
    plane(circle.size, circle.size);
    pop();
  }
}
