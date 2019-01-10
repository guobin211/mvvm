class Observer extends Object {
  constructor() {
    super();
    this.observers = {};
  }

  /**
   * 注册监听
   * @param {string} eventType 
   * @param {any} observer 
   */
  registerObserver(eventType, observer) {
    this.observersCheckEventType(eventType).push(observer);
    console.log('registerObserver: ' + eventType + observer)
  }
  /**
   * 通知消息
   * @param {sting} eventType 
   * @param {any} data 
   */
  notifyObservers(eventType, data) {
    this.observersCheckEventType(eventType).forEach(obs => {
      obs.notify(data);
    });
    console.log('notifyObservers: ' + eventType + data)
  }
  /**
   * 取消订阅
   * @param {string} eventType 
   * @param {any} observer 
   */
  unregisterObserver(eventType, observer) {
    this.remove(this.observersCheckEventType(eventType), el => el === observer)
  }

  observersCheckEventType(eventType) {
    if (!this.observers[eventType]) {
      this.observers[eventType] = []
    }
    return this.observers[eventType];
  }

  remove(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i])) {
        arr.splice(i, 1);
      }
    }
  }

}

export const observer = new Observer();