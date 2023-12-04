class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
}

class XiaoMiOS {
  install() {
    console.log("安装mui系统");
  }
}

class XiaoMiHardWare {
  install() {
    console.log("安装小米硬件");
  }
}

class MobilePhone {
  constructor(os, hardware) {
    this.os = os;
    this.hardware = hardware;
  }

  run() {
    this.hardware.install();
    this.os.install();
  }
}

class XiaomiMobileFactory extends MobilePhoneFactory {
  createOS() {
    return new XiaoMiOS();
  }
  createHardWare() {
    return new XiaoMiHardWare();
  }

  createPhone() {
    const os = this.createOS();
    const hardware = this.createHardWare();
    return new MobilePhone(os, hardware);
  }
}

const myXiaomi = new XiaomiMobileFactory();

const myPhone = myXiaomi.createPhone();

myPhone.run();
