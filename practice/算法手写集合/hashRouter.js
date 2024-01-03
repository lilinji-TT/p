class HashRouter {
  // constructor的目的就是给hashchange事件添加监听，回调函数refresh展示修改页面的逻辑
  constructor(routes = []) {
    this.routes = routes; // 路由映射
    this.currentPath = ""; // 保存当前路由
    this.refresh = this.refresh.bind(this); // 保证this指定的是HashRouter实例

    window.addEventListener("load", this.refresh);
    window.addEventListener("hashchange", this.refresh);
  }

  refresh(event) {
    if (event.newUrl) {
      this.currentPath = event.newUrl.split("#")[1];
    } else {
      this.currentPath = widow.location.hash.slice(1);
    }

    this.matchComponent();
  }

  matchComponent() {
    const { component } = this.routes.find(
      (route) => route.path === this.currentPath
    );
    document.querySelector(".page-content").innerHTML = component;
  }
}

new HashRouter([
  {
    path: "/",
    component: "<div>root</div>",
  },
  {
    path: "/about",
    component: "<div>about</div>",
  },
  {
    path: "/profile",
    component: "<div>profile</div>",
  },
]);
