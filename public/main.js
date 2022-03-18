let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1; // 请求成功就+1
      } else {
        alert(`加载Page${n + 1}失败`);
      }
    }
    if (n > 2) {
      // 加载完第三页后禁用按钮
      getPage.setAttribute("disabled", "disabled");
      // console.log("11111");
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      } else {
        alert("加载JSON失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim()); // 输出Hello World
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "/3.html"); // readyState = 1
  request.onreadystatechange = () => {
    //   console.log(request.response);

    if (request.readyState === 4) {
      // 下载完成后才能添加div，但不知道是下载成功还2xx，还是失败4xx 5xx，有错误时仍然执行
      //  console.log("下载完成");
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载html失败");
      }
    }
  };
  request.send(); // readyState = 2
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log("request.response:");
    console.log(request.response);

    // 创建style标签
    const style = document.createElement("style");
    // 填写style内容
    style.innerHTML = request.response;
    // 将style插入到head里
    document.head.appendChild(style);
  };

  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};
