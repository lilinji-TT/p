/* eslint-disable no-unused-vars */
import { useSyncExternalStore } from "react";

const createStore = (createState) => {
  let state;
  const listeners = new Set();

  const setState = (partial, replace) => {
    // 判断是否是函数，是就返回执行结果
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const preState = state;

      // 配置项, 是否替换, 是就替换, 否就合并
      if (!replace) {
        state =
          typeof nextState !== "object" || nextState === null
            ? nextState
            : Object.assign({}, state, nextState);
      } else {
        state = nextState;
      }

      // 通知订阅者，更新视图
      listeners.forEach((listener) => listener(state, preState));
    }
  };

  // 获取状态
  const getState = () => state;

  // 订阅
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  // 销毁
  const destory = () => {
    listeners.clear();
  };

  const api = {
    setState,
    getState,
    subscribe,
    destory,
  };

  // 初始化状态
  state = createState(setState, getState, api);
  console.log(listeners)
  return api;
};

// function useStore(api, selector) {
//   // 用来更新视图
//   const [, forceUpdate] = useState({});

//   useEffect(() => {
//     // 添加订阅
//     api.subscribe((state, preState) => {
//       const newObj = selector(state);
//       const oldObj = selector(preState);

//       if (newObj !== oldObj) {
//         forceUpdate({});
//       }
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return selector(api.getState());
// }

function useStore(api, selector) {
  function getState() {
    return selector(api.getState());
  }

  // 内部传入一个callback，到我们的订阅函数，来处理状态是否变化来更新视图，状态来自第二个参数，getSnapshot，得到当前状态快照

  /**
   * 传入订阅的callback
   * function () {
        // The store changed. Check if the snapshot changed since the last time we
        // read from the store.
        if (checkIfSnapshotChanged(inst)) {
          // Force a re-render.
          forceStoreRerender(fiber);
        }
      }
   */
  return useSyncExternalStore(api.subscribe, getState);
}

export function create(createState) {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);

  Object.assign(useBoundStore, api);

  return useBoundStore;
}
